/**
 * Audio decoder and playback for RustDesk remote desktop.
 *
 * Decodes Opus audio frames via WebCodecs AudioDecoder
 * and plays them through the Web Audio API.
 */

export class AudioPlayer {
  private decoder: AudioDecoder | null = null;
  private audioCtx: AudioContext | null = null;
  private sampleRate = 48000;
  private channels = 2;
  private nextPlayTime = 0;
  private started = false;
  private destroyed = false;

  static isSupported(): boolean {
    return typeof AudioDecoder !== 'undefined';
  }

  configure(channels: number, sampleRate: number): void {
    this.channels = channels || 2;
    this.sampleRate = sampleRate || 48000;

    this.cleanup();

    if (!AudioPlayer.isSupported()) {
      console.warn('WebCodecs AudioDecoder not available');
      return;
    }

    this.audioCtx = new AudioContext({ sampleRate: this.sampleRate });

    this.decoder = new AudioDecoder({
      output: (frame) => this.onDecodedAudio(frame),
      error: (e) => console.error('AudioDecoder error:', e),
    });

    this.decoder.configure({
      codec: 'opus',
      sampleRate: this.sampleRate,
      numberOfChannels: this.channels,
    });

    this.nextPlayTime = 0;
    this.started = false;
  }

  feed(opusData: Uint8Array): void {
    if (this.destroyed || !this.decoder || this.decoder.state === 'closed') return;
    if (!opusData.length) return;

    try {
      this.decoder.decode(new EncodedAudioChunk({
        type: 'key', // Opus frames are always independently decodable
        timestamp: 0, // Let the decoder handle timing
        data: opusData,
      }));
    } catch (e) {
      console.error('Opus decode error:', e);
    }
  }

  private onDecodedAudio(audioData: AudioData): void {
    if (this.destroyed || !this.audioCtx) {
      audioData.close();
      return;
    }

    // Resume AudioContext on first audio (browsers require user interaction)
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const numFrames = audioData.numberOfFrames;
    const numChannels = audioData.numberOfChannels;

    // Create an AudioBuffer and copy decoded data into it
    const buffer = this.audioCtx.createBuffer(
      numChannels,
      numFrames,
      audioData.sampleRate
    );

    for (let ch = 0; ch < numChannels; ch++) {
      const channelData = new Float32Array(numFrames);
      audioData.copyTo(channelData, { planeIndex: ch, format: 'f32-planar' });
      buffer.copyToChannel(channelData, ch);
    }

    audioData.close();

    // Schedule playback
    const source = this.audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(this.audioCtx.destination);

    const currentTime = this.audioCtx.currentTime;
    if (!this.started || this.nextPlayTime < currentTime) {
      // First frame or we've fallen behind - start from now with a small buffer
      this.nextPlayTime = currentTime + 0.05;
      this.started = true;
    }

    source.start(this.nextPlayTime);
    this.nextPlayTime += buffer.duration;
  }

  destroy(): void {
    this.destroyed = true;
    this.cleanup();
  }

  private cleanup(): void {
    if (this.decoder && this.decoder.state !== 'closed') {
      try { this.decoder.close(); } catch {}
    }
    this.decoder = null;

    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      try { this.audioCtx.close(); } catch {}
    }
    this.audioCtx = null;
  }
}
