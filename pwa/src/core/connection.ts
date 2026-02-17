/**
 * RustDesk connection manager.
 * Handles rendezvous server negotiation, relay connection,
 * cryptographic handshake, and the main message loop.
 *
 * Based on flutter/web/v1/js/src/connection.ts from the RustDesk project.
 */
import { Websock } from './websock';
import * as crypto from './crypto';
import { decompress, mapKey } from './common';
import { decodeIdPk } from './protocol/codec';
import {
  type Message,
  type RendezvousMessage,
  type PeerInfo,
  type Hash,
  type VideoFrame,
  type CursorData,
  type Display,
  type FileEntry,
  type FileDirectory,
  type FileTransferBlock,
  type FileTransferDigest,
  type FileTransferDone,
  type FileTransferError,
  type TerminalOpened,
  type TerminalData,
  type TerminalClosed,
  type TerminalError,
  ControlKey,
  ImageQuality,
  BoolOption,
  PunchHoleFailure,
  ConnType,
  NatType,
  FileType,
} from './protocol/types';
import Long from 'long';
import * as sha256Module from 'fast-sha256';
import { encryptForStorage, decryptFromStorage } from './secure-storage';

const DEFAULT_RENDEZVOUS_PORT = 21116;
const DEFAULT_HOSTS = [
  'rs-ny.rustdesk.com',
];

// RustDesk's public signing key for verifying relay server identity
const RS_PUBLIC_KEY = 'OeVuKk5nlHiXp+APNn0Y3pC1Iwpwn44JGqrQCsWqmBw=';

export type ConnectionMode = 'desktop' | 'terminal' | 'both';

export type ConnectionStatus =
  | 'idle'
  | 'connecting'
  | 'authenticating'
  | 'connected'
  | 'disconnected'
  | 'error';

export interface ConnectionEvents {
  onStatus: (status: ConnectionStatus, detail?: string) => void;
  onPeerInfo: (info: PeerInfo) => void;
  onVideoFrame: (frame: VideoFrame) => void;
  onAudioFormat: (channels: number, sampleRate: number) => void;
  onAudioFrame: (data: Uint8Array) => void;
  onCursorData: (cursor: CursorData) => void;
  onCursorId: (id: number) => void;
  onCursorPosition: (x: number, y: number) => void;
  onClipboard: (text: string) => void;
  onPermission: (kind: string, enabled: boolean) => void;
  onChat: (text: string) => void;
  onDisplaySwitch: (display: Display & { display: number }) => void;
  onPasswordRequired: (isRetry: boolean) => void;
  on2FARequired: (isRetry: boolean, enableTrustedDevices: boolean) => void;
  onFileDir: (id: number, path: string, entries: FileEntry[]) => void;
  onFileTransferBlock: (block: FileTransferBlock) => void;
  onFileTransferDigest: (digest: FileTransferDigest) => void;
  onFileTransferDone: (done: FileTransferDone) => void;
  onFileTransferError: (err: FileTransferError) => void;
  onLatency: (ms: number) => void;
  onError: (title: string, message: string) => void;

  // Terminal
  onTerminalOpened: (opened: TerminalOpened) => void;
  onTerminalData: (data: TerminalData) => void;
  onTerminalClosed: (closed: TerminalClosed) => void;
  onTerminalError: (err: TerminalError) => void;
}

export class Connection {
  private ws: Websock | null = null;
  private id = '';
  private hash: Hash | null = null;
  private password: Uint8Array | null = null;
  private peerInfo: PeerInfo | null = null;
  private firstFrame = false;
  private events: ConnectionEvents;
  private options: Record<string, any> = {};
  private msgQueue: Partial<Message>[] = [];
  private msgInterval: ReturnType<typeof setInterval> | null = null;
  private closed = false;
  private adaptiveInterval: ReturnType<typeof setInterval> | null = null;
  private recentLatencies: number[] = [];
  private currentQuality: string = 'balanced';
  private mode: ConnectionMode = 'both';

  constructor(events: ConnectionEvents) {
    this.events = events;
  }

  async connect(id: string, mode: ConnectionMode = 'both') {
    // Refuse to connect over insecure origins (except localhost for development)
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
      this.events.onError('Security Error', 'HTTPS is required for secure connections. Please use HTTPS.');
      this.events.onStatus('error');
      return;
    }

    this.id = id;
    this.mode = mode;
    this.closed = false;

    // Load saved options for this peer
    this.options = this.loadPeerOptions(id);

    // Try saved password (encrypted in localStorage)
    const savedPw = this.options['password'];
    if (savedPw) {
      try {
        const decrypted = await decryptFromStorage(savedPw);
        if (decrypted) {
          const parsed = JSON.parse(decrypted);
          if (Array.isArray(parsed) && parsed.every((v: unknown) => typeof v === 'number' && v >= 0 && v <= 255)) {
            this.password = Uint8Array.from(parsed);
          } else {
            this.password = null;
          }
        } else {
          // Decryption failed — require user to re-enter password
          this.password = null;
        }
      } catch {
        this.password = null;
      }
    }

    // Start message queue flush
    this.msgInterval = setInterval(() => {
      while (this.msgQueue.length && this.ws?.connected) {
        this.ws.sendMessage(this.msgQueue.shift()!);
      }
    }, 1);

    try {
      this.events.onStatus('connecting', 'Connecting to rendezvous server...');
      await this.startConnection(id);
    } catch (e: any) {
      if (this.msgInterval) { clearInterval(this.msgInterval); this.msgInterval = null; }
      this.events.onError(
        'Connection Error',
        e.message || 'Connection failed'
      );
      this.events.onStatus('error');
    }
  }

  private async startConnection(id: string) {
    const uri = this.getRendezvousUri();
    const ws = new Websock(uri, true);
    this.ws = ws;

    await ws.open();
    this.events.onStatus('connecting', 'Negotiating relay...');

    ws.sendRendezvous({
      punch_hole_request: {
        id,
        licence_key: localStorage.getItem('key') || undefined,
        conn_type: ConnType.DEFAULT_CONN,
        nat_type: NatType.SYMMETRIC,
      },
    });

    const msg = (await ws.next()) as RendezvousMessage;
    ws.close();

    if (msg.punch_hole_response) {
      const phr = msg.punch_hole_response;
      if (phr.other_failure) {
        throw new Error(phr.other_failure);
      }
      if (phr.failure != null && phr.failure !== 0) {
        const errors: Record<number, string> = {
          [PunchHoleFailure.ID_NOT_EXIST]: 'ID does not exist',
          [PunchHoleFailure.OFFLINE]: 'Remote desktop is offline',
          [PunchHoleFailure.LICENSE_MISMATCH]: 'Key mismatch',
          [PunchHoleFailure.LICENSE_OVERUSE]: 'Key overuse',
        };
        throw new Error(errors[phr.failure!] || 'Connection failed');
      }
      // Web clients can't do UDP hole-punching, so always request relay
      await this.connectRelayFromPunchHole(
        phr.relay_server || '',
        phr.pk || undefined,
      );
    } else if (msg.relay_response) {
      if (!msg.relay_response.version) {
        throw new Error('Remote version is too low, web client not supported');
      }
      await this.connectRelay(msg.relay_response);
    }
  }

  private async connectRelayFromPunchHole(relayServer: string, pk?: Uint8Array) {
    // Web clients can't do UDP hole-punching. We must ask the rendezvous server
    // to arrange a relay session for us.
    // Retry up to 3 times (matching native client behavior)
    let uuid = '';
    let succeeded = false;
    let lastRr: RendezvousMessage['relay_response'] = null;

    for (let i = 1; i <= 3; i++) {
      uuid = globalThis.crypto.randomUUID();
      const rdvUri = this.getRendezvousUri();
      const rdvWs = new Websock(rdvUri, true);

      try {
        await rdvWs.open();
        rdvWs.sendRendezvous({
          request_relay: {
            id: this.id,
            uuid,
            relay_server: relayServer || undefined,
            licence_key: localStorage.getItem('key') || undefined,
          },
        });

        const rdvMsg = (await rdvWs.next()) as RendezvousMessage;
        rdvWs.close();

        if (rdvMsg.relay_response) {
          const rr = rdvMsg.relay_response;
          if (rr.refuse_reason) {
            throw new Error(rr.refuse_reason);
          }
          lastRr = rr;
          succeeded = true;
          break;
        }
      } catch (e) {
        rdvWs.close();
        if (i === 3) throw e;
      }
    }

    if (!succeeded || !lastRr) {
      throw new Error('Failed to set up relay session');
    }

    // Connect to the relay -- prefer relay_server from the response, then
    // from the original punch_hole_response, then fall back to rendezvous
    await this.connectRelay({
      relay_server: lastRr.relay_server || relayServer || undefined,
      uuid,
      pk: pk || lastRr.pk || undefined,
      version: lastRr.version,
    });
  }

  private async connectRelay(rr: NonNullable<RendezvousMessage['relay_response']>) {
    const pk = rr.pk;
    let uri: string;
    if (rr.relay_server && this.isAllowedRelayServer(rr.relay_server)) {
      uri = this.makeUri(rr.relay_server, true, 2);
    } else {
      uri = this.getRendezvousUri(true);
    }

    this.events.onStatus('connecting', 'Connecting to relay server...');
    const ws = new Websock(uri, false);
    await ws.open();
    this.ws = ws;

    ws.sendRendezvous({
      request_relay: {
        licence_key: localStorage.getItem('key') || undefined,
        uuid: rr.uuid,
      },
    });

    const secure = await this.performHandshake(pk || undefined);
    this.events.onStatus('authenticating');
    await this.messageLoop();
  }

  private async performHandshake(pk?: Uint8Array): Promise<boolean> {
    if (pk) {
      try {
        const verifiedPk = await crypto.verify(
          pk,
          localStorage.getItem('key') || RS_PUBLIC_KEY
        );
        if (verifiedPk) {
          const idpk = decodeIdPk(verifiedPk);
          if (idpk.id === this.id) {
            pk = idpk.pk;
          }
        }
        if (!pk || pk.length !== 32) {
          pk = undefined;
        }
      } catch {
        pk = undefined;
      }
      if (!pk) {
        console.error('Handshake: invalid public key from rendezvous server');
      }
    }

    if (!pk) {
      this.ws?.sendMessage({ public_key: {} });
      return false;
    }

    const msg = (await this.ws?.next()) as Message;
    let signedId = msg?.signed_id?.id;
    if (!signedId) {
      this.ws?.sendMessage({ public_key: {} });
      return false;
    }

    try {
      const verified = await crypto.verify(signedId, pk);
      const idpk = decodeIdPk(verified);
      if (idpk.id !== this.id || idpk.pk.length !== 32) {
        this.ws?.sendMessage({ public_key: {} });
        return false;
      }

      const [mySk, myPk] = await crypto.genBoxKeyPair();
      const secretKey = await crypto.genSecretKey();
      const sealedKey = await crypto.seal(secretKey, idpk.pk, mySk);

      this.ws?.sendMessage({
        public_key: {
          asymmetric_value: myPk,
          symmetric_value: sealedKey,
        },
      });
      this.ws?.setSecretKey(secretKey);
      return true;
    } catch {
      this.ws?.sendMessage({ public_key: {} });
      return false;
    }
  }

  private async messageLoop() {
    while (!this.closed) {
      let msg: Message;
      try {
        msg = (await this.ws?.next(30000)) as Message;
      } catch {
        if (!this.closed) {
          this.events.onError('Connection Error', 'Connection lost');
          this.events.onStatus('disconnected');
        }
        break;
      }

      if (msg.hash) {
        this.hash = msg.hash;
        if (!this.password) {
          this.events.onPasswordRequired(false);
        }
        this.sendLogin();
      } else if (msg.test_delay) {
        if (msg.test_delay.from_client) {
          // Response to our ping - calculate RTT
          const sent = Long.isLong(msg.test_delay.time)
            ? msg.test_delay.time.toNumber()
            : Number(msg.test_delay.time ?? 0);
          if (sent > 0) {
            const latency = Date.now() - sent;
            this.events.onLatency(latency);
            this.recentLatencies.push(latency);
            if (this.recentLatencies.length > 10) this.recentLatencies.shift();
          }
        } else {
          // Server ping - echo back and also send our own
          this.ws?.sendMessage({ test_delay: msg.test_delay });
          this.ws?.sendMessage({
            test_delay: { time: Long.fromNumber(Date.now()), from_client: true },
          });
        }
      } else if (msg.login_response) {
        const r = msg.login_response;
        if (r.error) {
          if (r.error === 'Wrong Password') {
            this.password = null;
            this.events.onPasswordRequired(true);
          } else if (r.error === '2FA Required') {
            this.events.on2FARequired(false, r.enable_trusted_devices ?? false);
          } else if (r.error === 'Wrong 2FA Code') {
            this.events.on2FARequired(true, r.enable_trusted_devices ?? false);
          } else {
            this.events.onError('Login Error', r.error);
          }
        } else if (r.peer_info) {
          this.handlePeerInfo(r.peer_info);
          // Clear password from memory after successful auth
          if (this.password) {
            this.password.fill(0);
            this.password = null;
          }
        }
      } else if (msg.video_frame) {
        if (!this.firstFrame) {
          this.firstFrame = true;
          this.events.onStatus('connected');
          this.startAdaptiveQuality();
        }
        this.events.onVideoFrame(msg.video_frame);
      } else if (msg.clipboard) {
        const cb = msg.clipboard;
        let content = cb.content;
        if (!content) continue;
        if (cb.compress) {
          const decompressed = await decompress(content);
          if (!decompressed) continue;
          content = decompressed;
        }
        this.events.onClipboard(new TextDecoder().decode(content));
      } else if (msg.cursor_data) {
        const cd = msg.cursor_data;
        if (!cd.colors) continue;
        const colors = await decompress(cd.colors);
        if (colors) {
          this.events.onCursorData({ ...cd, colors });
        }
      } else if (msg.cursor_id != null) {
        const cid = msg.cursor_id;
        this.events.onCursorId(Long.isLong(cid) ? cid.toNumber() : Number(cid));
      } else if (msg.cursor_position) {
        this.events.onCursorPosition(msg.cursor_position.x ?? 0, msg.cursor_position.y ?? 0);
      } else if (msg.misc) {
        if (!this.handleMisc(msg.misc)) break;
      } else if (msg.audio_frame) {
        if (msg.audio_frame.data) this.events.onAudioFrame(msg.audio_frame.data);
      } else if (msg.file_response) {
        this.handleFileResponse(msg.file_response);
      } else if (msg.terminal_response) {
        this.handleTerminalResponse(msg.terminal_response);
      }
    }
  }

  private handleFileResponse(fr: NonNullable<Message['file_response']>) {
    if (fr.dir) {
      const dir = fr.dir;
      this.events.onFileDir(
        dir.id ?? 0,
        dir.path || '',
        (dir.entries || []) as FileEntry[],
      );
    } else if (fr.block) {
      this.events.onFileTransferBlock(fr.block as FileTransferBlock);
    } else if (fr.digest) {
      this.events.onFileTransferDigest(fr.digest as FileTransferDigest);
    } else if (fr.done) {
      this.events.onFileTransferDone(fr.done as FileTransferDone);
    } else if (fr.error) {
      this.events.onFileTransferError(fr.error as FileTransferError);
    }
  }

  private async handleTerminalResponse(tr: NonNullable<Message['terminal_response']>) {
    if (tr.opened) {
      // Terminal-only connections may never receive a video frame,
      // so mark connected here too.
      if (!this.firstFrame) {
        this.firstFrame = true;
        this.events.onStatus('connected');
      }
      this.events.onTerminalOpened(tr.opened as TerminalOpened);
    } else if (tr.data) {
      const td = tr.data;
      if (td.data && td.compressed) {
        const decompressed = await decompress(td.data);
        if (decompressed) {
          this.events.onTerminalData({ ...td, data: decompressed });
        }
      } else if (td.data) {
        this.events.onTerminalData(td as TerminalData);
      }
    } else if (tr.closed) {
      this.events.onTerminalClosed(tr.closed as TerminalClosed);
    } else if (tr.error) {
      this.events.onTerminalError(tr.error as TerminalError);
    }
  }

  private handlePeerInfo(pi: PeerInfo) {
    this.peerInfo = pi;
    if (!pi.displays?.length && this.mode !== 'terminal') {
      this.events.onError('Remote Error', 'No display available');
      return;
    }
    this.events.onPeerInfo(pi);

    // Save peer info (encrypt password before storing)
    if (this.password?.length) {
      if (this.options['remember']) {
        encryptForStorage(JSON.stringify(Array.from(this.password))).then(encrypted => {
          this.setOption('password', encrypted);
        }).catch(() => {});
      }
    }
    this.setOption('info', pi);
  }

  private handleMisc(misc: NonNullable<Message['misc']>): boolean {
    if (misc.audio_format) {
      this.events.onAudioFormat(
        misc.audio_format.channels ?? 2,
        misc.audio_format.sample_rate ?? 48000,
      );
    } else if (misc.chat_message) {
      this.events.onChat(misc.chat_message.text || '');
    } else if (misc.permission_info) {
      const p = misc.permission_info;
      const perm = p.permission ?? 0;
      const names = ['keyboard', 'clipboard', 'audio'];
      if (perm >= 0 && perm < names.length) {
        this.events.onPermission(names[perm], p.enabled ?? false);
      }
    } else if (misc.switch_display) {
      this.events.onDisplaySwitch(misc.switch_display as Display & { display: number });
    } else if (misc.close_reason) {
      this.events.onError('Connection Error', misc.close_reason);
      this.close();
      return false;
    }
    return true;
  }

  // === Public API ===

  login(password: string) {
    if (!this.hash) return;
    const salt = this.hash.salt || '';
    let p = hashData([password, salt]);
    this.password = p;
    const challenge = this.hash.challenge || '';
    p = hashData([p, challenge]);
    this.events.onStatus('authenticating', 'Logging in...');
    this.sendLoginMessage(p);
  }

  private sendLogin() {
    if (!this.password || !this.hash) return;
    const challenge = this.hash.challenge || '';
    const p = hashData([this.password, challenge]);
    this.sendLoginMessage(p);
  }

  private sendLoginMessage(password?: Uint8Array) {
    this.ws?.sendMessage({
      login_request: {
        username: this.id,
        my_id: 'web',
        my_name: 'Solvx',
        password,
        option: this.buildOptionMessage(),
        video_ack_required: true,
      },
    });
  }

  private buildOptionMessage() {
    const msg: NonNullable<Message['login_request']>['option'] = {};
    let hasOptions = false;

    const q = this.getImageQualityEnum(this.options['image-quality']);
    if (q !== undefined) {
      msg.image_quality = q;
      hasOptions = true;
    }
    if (this.options['show-remote-cursor']) {
      msg.show_remote_cursor = BoolOption.Yes;
      hasOptions = true;
    }
    if (this.options['disable-audio']) {
      msg.disable_audio = BoolOption.Yes;
      hasOptions = true;
    }
    if (this.options['disable-clipboard']) {
      msg.disable_clipboard = BoolOption.Yes;
      hasOptions = true;
    }

    // Always enable file transfer capability
    msg.enable_file_transfer = BoolOption.Yes;
    hasOptions = true;

    return hasOptions ? msg : undefined;
  }

  sendVideoReceived() {
    this.ws?.sendMessage({ misc: { video_received: true } });
  }

  sendKey(
    name: string,
    down: boolean,
    press: boolean,
    alt: boolean,
    ctrl: boolean,
    shift: boolean,
    command: boolean
  ) {
    const keyEvent = mapKey(name);
    if (!keyEvent) return;

    if (alt && (name === 'VK_MENU' || name === 'RAlt')) alt = false;
    if (ctrl && (name === 'VK_CONTROL' || name === 'RControl')) ctrl = false;
    if (shift && (name === 'VK_SHIFT' || name === 'RShift')) shift = false;
    if (command && (name === 'Meta' || name === 'RWin')) command = false;

    keyEvent.down = down;
    keyEvent.press = press;
    keyEvent.modifiers = this.buildModifiers(alt, ctrl, shift, command);
    this.ws?.sendMessage({ key_event: keyEvent });
  }

  sendMouse(
    mask: number,
    x: number,
    y: number,
    alt = false,
    ctrl = false,
    shift = false,
    command = false
  ) {
    this.ws?.sendMessage({
      mouse_event: {
        mask,
        x,
        y,
        modifiers: this.buildModifiers(alt, ctrl, shift, command),
      },
    });
  }

  sendCtrlAltDel() {
    const keyEvent: Partial<Message['key_event']> = { down: true };
    if (this.peerInfo?.platform === 'Windows') {
      keyEvent.control_key = ControlKey.CtrlAltDel;
    } else {
      keyEvent.control_key = ControlKey.Delete;
      keyEvent.modifiers = [ControlKey.Alt, ControlKey.Control];
    }
    this.ws?.sendMessage({ key_event: keyEvent });
  }

  sendLockScreen() {
    this.ws?.sendMessage({
      key_event: { down: true, control_key: ControlKey.LockScreen },
    });
  }

  sendClipboard(text: string) {
    const content = new TextEncoder().encode(text);
    this.ws?.sendMessage({
      clipboard: {
        compress: false,
        content,
      },
    });
  }

  send2FA(code: string, trustDevice: boolean) {
    this.ws?.sendMessage({
      auth_2fa: {
        code,
        hwid: trustDevice ? new TextEncoder().encode(this.getDeviceId()) : undefined,
      },
    });
  }

  private getDeviceId(): string {
    let id = localStorage.getItem('device-id');
    if (!id) {
      id = globalThis.crypto.randomUUID();
      localStorage.setItem('device-id', id);
    }
    return id;
  }

  // === Terminal API ===

  private nextTerminalId = 1;

  openTerminal(rows: number, cols: number): number {
    const terminalId = this.nextTerminalId++;
    this.ws?.sendMessage({
      terminal_action: { open: { terminal_id: terminalId, rows, cols } },
    });
    return terminalId;
  }

  sendTerminalData(terminalId: number, data: string) {
    this.ws?.sendMessage({
      terminal_action: {
        data: { terminal_id: terminalId, data: new TextEncoder().encode(data) },
      },
    });
  }

  resizeTerminal(terminalId: number, rows: number, cols: number) {
    this.ws?.sendMessage({
      terminal_action: { resize: { terminal_id: terminalId, rows, cols } },
    });
  }

  closeTerminal(terminalId: number) {
    this.ws?.sendMessage({
      terminal_action: { close: { terminal_id: terminalId } },
    });
  }

  // === File Transfer API ===

  private fileTransferId = 0;

  readRemoteDir(path: string, includeHidden = false) {
    this.ws?.sendMessage({
      file_action: { read_dir: { path, include_hidden: includeHidden } },
    });
  }

  requestDownload(path: string, includeHidden = false, fileNum = 0): number {
    const id = ++this.fileTransferId;
    this.ws?.sendMessage({
      file_action: {
        send: { id, path, include_hidden: includeHidden, file_num: fileNum },
      },
    });
    return id;
  }

  confirmDownload(id: number, fileNum: number, skip = false, offsetBlk = 0) {
    this.ws?.sendMessage({
      file_action: {
        send_confirm: { id, file_num: fileNum, skip, offset_blk: offsetBlk },
      },
    });
  }

  requestUpload(id: number, path: string, files: FileEntry[], fileNum = 0, totalSize = 0) {
    this.ws?.sendMessage({
      file_action: {
        receive: { id, path, files, file_num: fileNum, total_size: Long.fromNumber(totalSize) },
      },
    });
  }

  sendFileBlock(id: number, fileNum: number, data: Uint8Array, compressed: boolean, blkId: number) {
    this.ws?.sendMessage({
      file_response: {
        block: { id, file_num: fileNum, data, compressed, blk_id: blkId },
      },
    });
  }

  sendFileDone(id: number, fileNum: number) {
    this.ws?.sendMessage({
      file_response: { done: { id, file_num: fileNum } },
    });
  }

  cancelTransfer(id: number) {
    this.ws?.sendMessage({
      file_action: { cancel: { id } },
    });
  }

  sendChat(text: string) {
    this.ws?.sendMessage({
      misc: { chat_message: { text } },
    });
  }

  setImageQuality(quality: string) {
    this.setOption('image-quality', quality);
    const iq = this.getImageQualityEnum(quality);
    if (iq === undefined) return;
    this.ws?.sendMessage({
      misc: { option: { image_quality: iq } },
    });
  }

  toggleOption(name: string) {
    const v = !this.options[name];
    const option: any = {};
    const boolVal = v ? BoolOption.Yes : BoolOption.No;

    switch (name) {
      case 'show-remote-cursor':
        option.show_remote_cursor = boolVal;
        break;
      case 'disable-audio':
        option.disable_audio = boolVal;
        break;
      case 'disable-clipboard':
        option.disable_clipboard = boolVal;
        break;
      case 'lock-after-session-end':
        option.lock_after_session_end = boolVal;
        break;
      default:
        return;
    }
    this.setOption(name, v);
    this.ws?.sendMessage({ misc: { option } });
  }

  refresh() {
    this.ws?.sendMessage({ misc: { refresh_video: true } });
  }

  switchDisplay(display: number) {
    this.ws?.sendMessage({
      misc: { switch_display: { display, x: 0, y: 0, width: 0, height: 0 } },
    });
  }

  close() {
    this.closed = true;
    if (this.msgInterval) clearInterval(this.msgInterval);
    if (this.adaptiveInterval) clearInterval(this.adaptiveInterval);
    this.msgQueue = [];
    this.ws?.close();
    this.ws = null;
  }

  async reconnect() {
    const mode = this.mode;
    this.close();
    this.closed = false;
    this.firstFrame = false;
    await this.connect(this.id, mode);
  }

  get connectionMode(): ConnectionMode {
    return this.mode;
  }

  private startAdaptiveQuality() {
    if (this.adaptiveInterval) return;
    this.adaptiveInterval = setInterval(() => {
      if (this.recentLatencies.length < 3) return;
      const avg = this.recentLatencies.reduce((a, b) => a + b, 0) / this.recentLatencies.length;

      let target: string;
      if (avg > 200) target = 'low';
      else if (avg > 100) target = 'balanced';
      else target = 'best';

      if (target !== this.currentQuality) {
        this.currentQuality = target;
        this.setImageQuality(target);
      }
    }, 5000);
  }

  // === Helpers ===

  private buildModifiers(alt: boolean, ctrl: boolean, shift: boolean, command: boolean): ControlKey[] {
    const mod: ControlKey[] = [];
    if (alt) mod.push(ControlKey.Alt);
    if (ctrl) mod.push(ControlKey.Control);
    if (shift) mod.push(ControlKey.Shift);
    if (command) mod.push(ControlKey.Meta);
    return mod;
  }

  private getImageQualityEnum(value?: string): ImageQuality | undefined {
    switch (value) {
      case 'low': return ImageQuality.Low;
      case 'best': return ImageQuality.Best;
      case 'balanced': return ImageQuality.Balanced;
      default: return undefined;
    }
  }

  private getRendezvousUri(isRelay = false): string {
    const host = localStorage.getItem('custom-rendezvous-server') ||
      localStorage.getItem('rendezvous-server') ||
      DEFAULT_HOSTS[0];
    return this.makeUri(host, isRelay);
  }

  /** Validate that a server-supplied relay address belongs to a trusted domain. */
  private isAllowedRelayServer(host: string): boolean {
    const hostname = host.split(':')[0].toLowerCase();
    // Allow IP addresses (relay within same infrastructure)
    if (this.isIpAddress(hostname)) return true;
    // Allow if it matches or is a subdomain of the configured rendezvous server
    const configuredHost = (
      localStorage.getItem('custom-rendezvous-server') ||
      localStorage.getItem('rendezvous-server') ||
      DEFAULT_HOSTS[0]
    ).split(':')[0].toLowerCase();
    return hostname === configuredHost || hostname.endsWith('.' + configuredHost);
  }

  private makeUri(host: string, isRelay = false, relayOffset = 0): string {
    // Domain-based servers use WSS with path-based routing:
    //   rendezvous: wss://domain/ws/id
    //   relay:      wss://domain/ws/relay
    // IP-based servers use raw WebSocket on port + offset:
    //   rendezvous: ws://ip:(base+2)
    //   relay:      ws://ip:(base+2) or ws://ip:(base+relayOffset)
    const isDomain = !this.isIpAddress(host.split(':')[0]);

    if (isDomain) {
      // Preserve custom port (e.g. example.com:8443)
      const hostPort = host.includes(':') ? host : host;
      const path = isRelay ? '/ws/relay' : '/ws/id';
      return 'wss://' + hostPort + path;
    }

    const scheme = 'wss://';
    if (host.includes(':')) {
      const [h, p] = host.split(':');
      const port = parseInt(p) + (isRelay ? (relayOffset || 3) : 2);
      return scheme + h + ':' + port;
    }
    const port = DEFAULT_RENDEZVOUS_PORT + (isRelay ? 3 : 2);
    return scheme + host + ':' + port;
  }

  private isIpAddress(host: string): boolean {
    // IPv4 or IPv6
    return /^\d+\.\d+\.\d+\.\d+$/.test(host) || host.includes(':');
  }

  // === Peer options persistence ===

  private loadPeerOptions(id: string): Record<string, any> {
    try {
      const peers = JSON.parse(localStorage.getItem('peers') || '{}');
      return peers[id] || {};
    } catch {
      return {};
    }
  }

  setOption(name: string, value: any) {
    if (value === undefined) {
      delete this.options[name];
    } else {
      this.options[name] = value;
    }
    this.options['tm'] = Date.now();
    try {
      const peers = JSON.parse(localStorage.getItem('peers') || '{}');
      peers[this.id] = this.options;
      localStorage.setItem('peers', JSON.stringify(peers));
    } catch {}
  }

  getOption(name: string): any {
    return this.options[name];
  }

  get peerId(): string {
    return this.id;
  }

  get peer(): PeerInfo | null {
    return this.peerInfo;
  }
}

function hashData(inputs: (string | Uint8Array)[]): Uint8Array {
  const hasher = new sha256Module.Hash();
  for (const data of inputs) {
    if (typeof data === 'string') {
      hasher.update(new TextEncoder().encode(data));
    } else {
      hasher.update(data);
    }
  }
  return hasher.digest();
}
