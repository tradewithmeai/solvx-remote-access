/**
 * Global application state using Zustand.
 * Manages connection state, peer info, and UI state.
 */
import { create } from 'zustand';
import Long from 'long';
import { Connection, type ConnectionStatus, type ConnectionEvents } from '../core/connection';
import type {
  PeerInfo, VideoFrame, CursorData, Display,
  FileEntry, FileTransferBlock, FileTransferDigest,
  FileTransferDone, FileTransferError,
} from '../core/protocol/types';
import { AudioPlayer } from '../core/audio';

interface Peer {
  id: string;
  username?: string;
  hostname?: string;
  platform?: string;
  lastSeen: number;
}

export interface FileTransferJob {
  id: number;
  name: string;
  path: string;
  isUpload: boolean;
  totalSize: number;
  transferredSize: number;
  fileNum: number;
  status: 'pending' | 'transferring' | 'done' | 'error';
  error?: string;
  chunks: Uint8Array[];
}

interface AppState {
  // Connection
  connection: Connection | null;
  audioPlayer: AudioPlayer | null;
  status: ConnectionStatus;
  statusDetail: string;
  peerId: string;
  peerInfo: PeerInfo | null;
  isSecure: boolean;

  // UI
  passwordRequired: boolean;
  passwordRetry: boolean;
  twoFARequired: boolean;
  twoFARetry: boolean;
  twoFAEnableTrustedDevices: boolean;
  error: { title: string; message: string } | null;
  chatMessages: { text: string; from: 'remote' | 'local'; time: number }[];

  // Quality metrics
  latencyMs: number;
  fps: number;
  clipboardNotice: string | null;
  scaleMode: 'fit' | 'original';
  disconnectedPeerId: string | null;

  // Canvas
  currentFrame: VideoFrame | null;
  cursorData: CursorData | null;
  cursorPosition: { x: number; y: number } | null;

  // File transfer
  fileTransferOpen: boolean;
  remotePath: string;
  remoteEntries: FileEntry[];
  fileJobs: FileTransferJob[];

  // Peers
  recentPeers: Peer[];
  serverConfig: {
    rendezvousServer: string;
    key: string;
  };

  // Actions
  connect: (id: string) => void;
  disconnect: () => void;
  submitPassword: (password: string, remember: boolean) => void;
  submit2FA: (code: string, trustDevice: boolean) => void;
  dismissError: () => void;
  loadRecentPeers: () => void;
  updateServerConfig: (server: string, key: string) => void;
  sendChat: (text: string) => void;

  // File transfer actions
  openFileTransfer: () => void;
  closeFileTransfer: () => void;
  browseRemoteDir: (path: string) => void;
  downloadFile: (entry: FileEntry) => void;
  uploadFiles: (files: File[]) => void;
  cancelFileJob: (id: number) => void;

  // Improvement actions
  reconnect: () => void;
  toggleScaleMode: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Initial state
  connection: null,
  audioPlayer: null,
  status: 'idle',
  statusDetail: '',
  peerId: '',
  peerInfo: null,
  isSecure: false,
  passwordRequired: false,
  passwordRetry: false,
  twoFARequired: false,
  twoFARetry: false,
  twoFAEnableTrustedDevices: false,
  error: null,
  chatMessages: [],
  latencyMs: 0,
  fps: 0,
  clipboardNotice: null,
  scaleMode: 'fit' as const,
  disconnectedPeerId: null,
  currentFrame: null,
  cursorData: null,
  cursorPosition: null,
  fileTransferOpen: false,
  remotePath: '',
  remoteEntries: [],
  fileJobs: [],
  recentPeers: [],
  serverConfig: {
    rendezvousServer: localStorage.getItem('custom-rendezvous-server') || '',
    key: localStorage.getItem('key') || '',
  },

  connect: (id: string) => {
    const existing = get().connection;
    if (existing) existing.close();
    const existingAudio = get().audioPlayer;
    if (existingAudio) existingAudio.destroy();

    const audio = new AudioPlayer();
    const cursorCache = new Map<number, CursorData>();
    let frameCount = 0;
    let lastFpsTime = Date.now();
    const fpsInterval = setInterval(() => {
      const now = Date.now();
      const elapsed = (now - lastFpsTime) / 1000;
      if (elapsed > 0) set({ fps: Math.round(frameCount / elapsed) });
      frameCount = 0;
      lastFpsTime = now;
    }, 1000);

    const events: ConnectionEvents = {
      onStatus: (status, detail) => {
        set({ status, statusDetail: detail || '' });
        if (status === 'disconnected' || status === 'error') {
          set({ disconnectedPeerId: id });
          clearInterval(fpsInterval);
        }
      },
      onPeerInfo: (info) => {
        set({ peerInfo: info, passwordRequired: false });
        // Update recent peers
        const peers = get().recentPeers.filter(p => p.id !== id);
        peers.unshift({
          id,
          username: info.username || undefined,
          hostname: info.hostname || undefined,
          platform: info.platform || undefined,
          lastSeen: Date.now(),
        });
        set({ recentPeers: peers.slice(0, 20) });
        try {
          localStorage.setItem('recent-peers', JSON.stringify(peers.slice(0, 20)));
        } catch {}
      },
      onVideoFrame: (frame) => {
        frameCount++;
        set({ currentFrame: frame });
      },
      onAudioFormat: (channels, sampleRate) => {
        audio.configure(channels, sampleRate);
      },
      onAudioFrame: (data) => {
        audio.feed(data);
      },
      onCursorData: (cursor) => {
        const cid = Long.isLong(cursor.id) ? cursor.id.toNumber() : Number(cursor.id ?? 0);
        cursorCache.set(cid, cursor);
        set({ cursorData: cursor });
      },
      onCursorId: (id) => {
        const cached = cursorCache.get(id);
        if (cached) {
          set({ cursorData: cached });
        }
      },
      onCursorPosition: (x, y) => {
        set({ cursorPosition: { x, y } });
      },
      onClipboard: (text) => {
        navigator.clipboard?.writeText(text).catch(() => {});
        set({ clipboardNotice: 'Clipboard received from remote' });
        setTimeout(() => set({ clipboardNotice: null }), 2000);
      },
      onPermission: () => {},
      onChat: (text) => {
        set(s => ({
          chatMessages: [...s.chatMessages, { text, from: 'remote', time: Date.now() }],
        }));
      },
      onDisplaySwitch: () => {},
      onFileDir: (_id, path, entries) => {
        set({ remotePath: path, remoteEntries: entries as FileEntry[] });
      },
      onFileTransferBlock: (block) => {
        set(s => {
          const jobs = s.fileJobs.map(j => {
            if (j.id !== block.id) return j;
            const chunks = [...j.chunks];
            if (block.data) chunks.push(block.data);
            return {
              ...j,
              status: 'transferring' as const,
              transferredSize: j.transferredSize + (block.data?.length || 0),
              chunks,
            };
          });
          return { fileJobs: jobs };
        });
      },
      onFileTransferDigest: (digest) => {
        // Confirm the download (don't skip, start from block 0)
        const conn = get().connection;
        if (conn) {
          conn.confirmDownload(digest.id ?? 0, digest.file_num ?? 0, false, 0);
        }
      },
      onFileTransferDone: (done) => {
        set(s => {
          const jobs = s.fileJobs.map(j => {
            if (j.id !== done.id) return j;
            return { ...j, status: 'done' as const };
          });
          return { fileJobs: jobs };
        });
        // Trigger browser download for completed download jobs
        const job = get().fileJobs.find(j => j.id === done.id);
        if (job && !job.isUpload && job.chunks.length > 0) {
          const blob = new Blob(job.chunks.map(c => c as BlobPart));
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = job.name;
          a.click();
          URL.revokeObjectURL(url);
        }
      },
      onFileTransferError: (err) => {
        set(s => {
          const jobs = s.fileJobs.map(j => {
            if (j.id !== err.id) return j;
            return { ...j, status: 'error' as const, error: err.error || 'Transfer failed' };
          });
          return { fileJobs: jobs };
        });
      },
      onPasswordRequired: (isRetry) => {
        set({ passwordRequired: true, passwordRetry: isRetry });
      },
      on2FARequired: (isRetry, enableTrustedDevices) => {
        set({ twoFARequired: true, twoFARetry: isRetry, twoFAEnableTrustedDevices: enableTrustedDevices });
      },
      onLatency: (ms) => {
        set({ latencyMs: ms });
      },
      onError: (title, message) => {
        set({ error: { title, message } });
      },
    };

    const conn = new Connection(events);
    set({
      connection: conn,
      audioPlayer: audio,
      peerId: id,
      status: 'connecting',
      error: null,
      passwordRequired: false,
      passwordRetry: false,
      twoFARequired: false,
      twoFARetry: false,
      peerInfo: null,
      currentFrame: null,
      chatMessages: [],
    });
    conn.connect(id);
  },

  disconnect: () => {
    const conn = get().connection;
    if (conn) conn.close();
    const audio = get().audioPlayer;
    if (audio) audio.destroy();
    set({
      connection: null,
      audioPlayer: null,
      status: 'idle',
      statusDetail: '',
      peerInfo: null,
      currentFrame: null,
      passwordRequired: false,
      latencyMs: 0,
      fps: 0,
      disconnectedPeerId: null,
    });
  },

  submitPassword: (password: string, remember: boolean) => {
    const conn = get().connection;
    if (!conn) return;
    if (remember) {
      conn.setOption('remember', true);
    }
    conn.login(password);
    set({ passwordRequired: false });
  },

  submit2FA: (code: string, trustDevice: boolean) => {
    const conn = get().connection;
    if (!conn) return;
    conn.send2FA(code, trustDevice);
    set({ twoFARequired: false });
  },

  dismissError: () => {
    set({ error: null });
  },

  loadRecentPeers: () => {
    try {
      const peers = JSON.parse(localStorage.getItem('recent-peers') || '[]');
      set({ recentPeers: peers });
    } catch {
      set({ recentPeers: [] });
    }
  },

  updateServerConfig: (server: string, key: string) => {
    localStorage.setItem('custom-rendezvous-server', server);
    localStorage.setItem('key', key);
    set({ serverConfig: { rendezvousServer: server, key } });
  },

  sendChat: (text: string) => {
    const conn = get().connection;
    if (!conn) return;
    conn.sendChat(text);
    set(s => ({
      chatMessages: [...s.chatMessages, { text, from: 'local', time: Date.now() }],
    }));
  },

  openFileTransfer: () => {
    set({ fileTransferOpen: true });
    const conn = get().connection;
    if (conn) {
      // Read the root directory (platform-dependent)
      conn.readRemoteDir('', false);
    }
  },

  closeFileTransfer: () => {
    set({ fileTransferOpen: false });
  },

  browseRemoteDir: (path: string) => {
    const conn = get().connection;
    if (!conn) return;
    conn.readRemoteDir(path, false);
  },

  downloadFile: (entry: FileEntry) => {
    const conn = get().connection;
    if (!conn) return;
    const path = get().remotePath;
    const sep = path.includes('\\') ? '\\' : '/';
    const fullPath = path ? path + sep + entry.name : entry.name || '';
    const id = conn.requestDownload(fullPath, false, 0);
    const size = Long.isLong(entry.size) ? entry.size.toNumber() : Number(entry.size ?? 0);
    set(s => ({
      fileJobs: [...s.fileJobs, {
        id,
        name: entry.name || 'file',
        path: fullPath,
        isUpload: false,
        totalSize: size,
        transferredSize: 0,
        fileNum: 0,
        status: 'pending',
        chunks: [],
      }],
    }));
  },

  uploadFiles: (files: File[]) => {
    const conn = get().connection;
    if (!conn) return;
    const remotePath = get().remotePath;

    files.forEach(async (file) => {
      const id = Date.now() + Math.floor(Math.random() * 1000);
      const entry: FileEntry = {
        name: file.name,
        size: Long.fromNumber(file.size),
        modified_time: Long.fromNumber(Math.floor(file.lastModified / 1000)),
        entry_type: 4, // FileType.File
      };

      set(s => ({
        fileJobs: [...s.fileJobs, {
          id,
          name: file.name,
          path: remotePath,
          isUpload: true,
          totalSize: file.size,
          transferredSize: 0,
          fileNum: 0,
          status: 'transferring',
          chunks: [],
        }],
      }));

      conn.requestUpload(id, remotePath, [entry], 0, file.size);

      // Read and send file in 64KB blocks
      const BLOCK_SIZE = 65536;
      const buffer = await file.arrayBuffer();
      const totalBlocks = Math.ceil(buffer.byteLength / BLOCK_SIZE);

      for (let i = 0; i < totalBlocks; i++) {
        const start = i * BLOCK_SIZE;
        const end = Math.min(start + BLOCK_SIZE, buffer.byteLength);
        const chunk = new Uint8Array(buffer.slice(start, end));
        conn.sendFileBlock(id, 0, chunk, false, i);

        set(s => ({
          fileJobs: s.fileJobs.map(j =>
            j.id === id ? { ...j, transferredSize: end } : j
          ),
        }));
      }

      conn.sendFileDone(id, 0);
      set(s => ({
        fileJobs: s.fileJobs.map(j =>
          j.id === id ? { ...j, status: 'done' } : j
        ),
      }));
    });
  },

  cancelFileJob: (id: number) => {
    const conn = get().connection;
    if (conn) conn.cancelTransfer(id);
    set(s => ({
      fileJobs: s.fileJobs.filter(j => j.id !== id),
    }));
  },

  reconnect: () => {
    const peerId = get().disconnectedPeerId || get().peerId;
    if (!peerId) return;
    set({ disconnectedPeerId: null, error: null });
    get().connect(peerId);
  },

  toggleScaleMode: () => {
    set(s => ({ scaleMode: s.scaleMode === 'fit' ? 'original' : 'fit' }));
  },
}));
