/**
 * WebSocket wrapper with optional NaCl secretbox encryption.
 * Handles both rendezvous (signaling) and relay (data) connections.
 */
import * as crypto from './crypto';
import type { Message, RendezvousMessage } from './protocol/types';
import { encodeMessage, decodeMessage, encodeRendezvous, decodeRendezvous } from './protocol/codec';

export type WsStatus = 'connecting' | 'open' | 'closed' | 'error';

export class Websock {
  private ws: WebSocket;
  private buf: (RendezvousMessage | Message)[] = [];
  private waiters: (() => void)[] = [];
  private secretKey: { key: Uint8Array; sendNonce: number; recvNonce: number } | null = null;
  private status: WsStatus = 'connecting';
  private isRendezvous: boolean;
  private connectTime: number;
  latency = 0;

  constructor(uri: string, isRendezvous = true) {
    this.isRendezvous = isRendezvous;
    this.connectTime = Date.now();
    this.ws = new WebSocket(uri);
    this.ws.binaryType = 'arraybuffer';
    this.ws.onmessage = this.onMessage.bind(this);
  }

  setSecretKey(key: Uint8Array) {
    this.secretKey = { key, sendNonce: 0, recvNonce: 0 };
  }

  sendMessage(msg: Partial<Message>) {
    let data = encodeMessage(msg);
    if (this.secretKey) {
      this.secretKey.sendNonce++;
      data = crypto.encrypt(data, this.secretKey.sendNonce, this.secretKey.key);
    }
    this.ws.send(data);
  }

  sendRendezvous(msg: Partial<RendezvousMessage>) {
    this.ws.send(encodeRendezvous(msg));
  }

  open(timeout = 12000): Promise<void> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        if (this.status !== 'open') {
          reject(new Error(this.status === 'connecting' ? 'Connection timeout' : this.status));
        }
      }, timeout);

      this.ws.onopen = () => {
        clearTimeout(timer);
        this.latency = Date.now() - this.connectTime;
        this.status = 'open';
        resolve();
      };

      this.ws.onclose = (e) => {
        clearTimeout(timer);
        this.status = 'closed';
        this.notifyWaiters();
        if (e.code !== 1000) {
          reject(new Error('Connection reset by peer'));
        }
      };

      this.ws.onerror = () => {
        clearTimeout(timer);
        if (this.status === 'connecting') {
          const server = this.isRendezvous ? 'rendezvous' : 'relay';
          reject(new Error(`Failed to connect to ${server} server`));
        }
        this.status = 'error';
        this.notifyWaiters();
      };
    });
  }

  next(timeout = 12000): Promise<RendezvousMessage | Message> {
    // Check buffer first
    if (this.buf.length) {
      return Promise.resolve(this.buf.shift()!);
    }
    if (this.status !== 'open') {
      return Promise.reject(new Error('Connection closed'));
    }

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        // Remove our waiter on timeout
        const idx = this.waiters.indexOf(onNotify);
        if (idx >= 0) this.waiters.splice(idx, 1);
        reject(new Error('Timeout waiting for message'));
      }, timeout);

      const onNotify = () => {
        if (this.buf.length) {
          clearTimeout(timer);
          const idx = this.waiters.indexOf(onNotify);
          if (idx >= 0) this.waiters.splice(idx, 1);
          resolve(this.buf.shift()!);
        } else if (this.status !== 'open') {
          clearTimeout(timer);
          const idx = this.waiters.indexOf(onNotify);
          if (idx >= 0) this.waiters.splice(idx, 1);
          reject(new Error('Connection closed'));
        }
      };

      this.waiters.push(onNotify);
    });
  }

  close() {
    this.status = 'closed';
    if (
      this.ws.readyState === WebSocket.OPEN ||
      this.ws.readyState === WebSocket.CONNECTING
    ) {
      this.ws.close();
    }
    this.ws.onmessage = null;
    this.notifyWaiters();
  }

  get connected(): boolean {
    return this.status === 'open';
  }

  private onMessage(e: MessageEvent) {
    if (!(e.data instanceof ArrayBuffer)) return;
    let bytes = new Uint8Array(e.data as ArrayBuffer);
    if (this.secretKey) {
      this.secretKey.recvNonce++;
      bytes = crypto.decrypt(bytes, this.secretKey.recvNonce, this.secretKey.key) as Uint8Array<ArrayBuffer>;
    }
    this.buf.push(
      this.isRendezvous ? decodeRendezvous(bytes) : decodeMessage(bytes)
    );
    this.notifyWaiters();
  }

  private notifyWaiters() {
    // Copy and clear since callbacks may re-register
    const waiters = this.waiters.slice();
    for (const w of waiters) w();
  }
}
