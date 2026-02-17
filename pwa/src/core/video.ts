/**
 * Video decoder and canvas renderer for RustDesk remote desktop frames.
 *
 * Uses WebCodecs API (hardware-accelerated, native in Chrome 94+)
 * which covers all current Chromebooks.
 */
import type { VideoFrame as RdVideoFrame } from './protocol/types';
import Long from 'long';

type FrameEntry = { data?: Uint8Array | null; key?: boolean | null; pts?: Long | number | null };

export interface VideoRendererEvents {
  onFirstFrame: () => void;
  onResize: (width: number, height: number) => void;
  onFrameRendered: () => void;
}

const CODEC_CONFIGS: Record<string, VideoDecoderConfig> = {
  vp9: { codec: 'vp09.00.10.08', hardwareAcceleration: 'prefer-hardware' },
  h264: { codec: 'avc1.42001E', hardwareAcceleration: 'prefer-hardware' },
  h265: { codec: 'hev1.1.6.L93.B0', hardwareAcceleration: 'prefer-hardware' },
  av1: { codec: 'av01.0.04M.08', hardwareAcceleration: 'prefer-hardware' },
};

export class VideoRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;
  private decoder: VideoDecoder | null = null;
  private events: VideoRendererEvents;
  private currentCodec = '';
  private firstFrameFired = false;
  private frameCount = 0;
  private lastFrameTime = 0;
  private fps = 0;
  private destroyed = false;

  constructor(canvas: HTMLCanvasElement, events: VideoRendererEvents) {
    this.canvas = canvas;
    this.events = events;
    this.ctx = canvas.getContext('2d', { alpha: false });
  }

  static isWebCodecsSupported(): boolean {
    return typeof VideoDecoder !== 'undefined'
      && typeof EncodedVideoChunk !== 'undefined';
  }

  async init(): Promise<void> {
    if (!VideoRenderer.isWebCodecsSupported()) {
      console.warn('WebCodecs not available, video decoding disabled');
      return;
    }
    // Decoder is created lazily on first frame to match the actual codec
  }

  onVideoFrame(vf: RdVideoFrame): void {
    if (this.destroyed) return;

    if (vf.vp9s?.frames?.length) {
      this.decodeFrames('vp9', vf.vp9s.frames);
    } else if (vf.h264s?.frames?.length) {
      this.decodeFrames('h264', vf.h264s.frames);
    } else if (vf.h265s?.frames?.length) {
      this.decodeFrames('h265', vf.h265s.frames);
    } else if (vf.av1s?.frames?.length) {
      this.decodeFrames('av1', vf.av1s.frames);
    }
  }

  private async decodeFrames(codec: string, frames: FrameEntry[]): Promise<void> {
    if (!VideoRenderer.isWebCodecsSupported()) return;

    // Switch codecs if needed
    if (codec !== this.currentCodec) {
      await this.switchCodec(codec);
    }

    if (!this.decoder || this.decoder.state === 'closed') return;

    for (const f of frames) {
      if (!f.data?.length) continue;
      const pts = Long.isLong(f.pts) ? f.pts.toNumber() : Number(f.pts ?? 0);

      try {
        this.decoder.decode(new EncodedVideoChunk({
          type: f.key ? 'key' : 'delta',
          timestamp: pts,
          data: f.data,
        }));
      } catch (e) {
        console.error(`${codec} decode error:`, e);
      }
    }
  }

  private async switchCodec(codec: string): Promise<void> {
    const config = CODEC_CONFIGS[codec];
    if (!config) {
      console.warn('Unsupported codec:', codec);
      return;
    }

    // Close old decoder if exists
    if (this.decoder && this.decoder.state !== 'closed') {
      try {
        await this.decoder.flush();
        this.decoder.close();
      } catch {}
    }

    // Create fresh decoder for the new codec
    this.decoder = new VideoDecoder({
      output: (frame) => this.onDecodedFrame(frame),
      error: (e) => console.error('VideoDecoder error:', e),
    });

    try {
      this.decoder.configure(config);
      this.currentCodec = codec;
      // Decoder configured
    } catch (e) {
      console.error(`Failed to configure ${codec}:`, e);
      this.decoder.close();
      this.decoder = null;
    }
  }

  private onDecodedFrame(frame: globalThis.VideoFrame): void {
    if (this.destroyed) {
      frame.close();
      return;
    }

    // Resize canvas to match video dimensions
    const w = frame.displayWidth;
    const h = frame.displayHeight;
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
      this.events.onResize(w, h);
    }

    // Draw the decoded frame directly onto the canvas
    if (this.ctx) {
      this.ctx.drawImage(frame, 0, 0);
    }

    frame.close();

    // Track FPS
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastFrameTime >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastFrameTime = now;
    }

    // Signal first frame once
    if (!this.firstFrameFired) {
      this.firstFrameFired = true;
      this.events.onFirstFrame();
    }

    this.events.onFrameRendered();
  }

  resize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  getCurrentFps(): number {
    return this.fps;
  }

  destroy(): void {
    this.destroyed = true;
    if (this.decoder && this.decoder.state !== 'closed') {
      try {
        this.decoder.close();
      } catch {}
    }
    this.decoder = null;
  }
}
