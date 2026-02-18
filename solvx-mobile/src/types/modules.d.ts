/** Type declarations for modules without bundled types */
declare module 'zstddec' {
  export class ZSTDDecoder {
    init(): Promise<void>;
    decode(data: Uint8Array, maxSize: number): Uint8Array;
  }
}

declare module 'fast-sha256' {
  export class Hash {
    update(data: Uint8Array): this;
    digest(): Uint8Array;
  }
  export function hash(data: Uint8Array): Uint8Array;
  export function hmac(key: Uint8Array, data: Uint8Array): Uint8Array;
}
