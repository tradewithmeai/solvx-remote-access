/**
 * RemoteCanvas: WebView-based video renderer for remote desktop.
 *
 * Data flow:
 *   RN (connection) → video frames → base64 → postMessage → WebView
 *   WebView (touch) → postMessage → RN → connection.sendMouse()
 */
import { useRef, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView, type WebViewMessageEvent } from 'react-native-webview';
import type { VideoFrame } from '../core/protocol/types';
import Long from 'long';

const VIDEO_HTML = require('../webview/video-decoder.html');

export interface RemoteCanvasProps {
  onMouse: (mask: number, x: number, y: number) => void;
  onReady: () => void;
  onResize: (width: number, height: number) => void;
}

export interface RemoteCanvasRef {
  sendVideoFrame: (frame: VideoFrame) => void;
  sendAudioFrame: (data: Uint8Array) => void;
  configureAudio: (channels: number, sampleRate: number) => void;
  resetZoom: () => void;
  setTrackpadMode: (enabled: boolean) => void;
}

function uint8ToBase64(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.length;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

let _frameLog = 0;

export function useRemoteCanvas(props: RemoteCanvasProps): {
  webViewRef: React.RefObject<WebView>;
  ref: RemoteCanvasRef;
  onMessage: (event: WebViewMessageEvent) => void;
} {
  const webViewRef = useRef<WebView>(null) as React.RefObject<WebView>;

  const inject = useCallback((js: string) => {
    webViewRef.current?.injectJavaScript(js);
  }, []);

  const sendVideoFrame = useCallback((vf: VideoFrame) => {
    let codec = '';
    let frames: Array<{ data?: Uint8Array | null; key?: boolean | null; pts?: Long | number | null }> = [];

    if (vf.vp9s?.frames?.length) {
      codec = 'vp9';
      frames = vf.vp9s.frames;
    } else if (vf.h264s?.frames?.length) {
      codec = 'h264';
      frames = vf.h264s.frames;
    } else if (vf.h265s?.frames?.length) {
      codec = 'h265';
      frames = vf.h265s.frames;
    } else if (vf.av1s?.frames?.length) {
      codec = 'av1';
      frames = vf.av1s.frames;
    } else {
      return;
    }

    const serializedFrames = frames
      .filter(f => f.data?.length)
      .map(f => ({
        data: uint8ToBase64(f.data as Uint8Array),
        key: !!f.key,
        pts: Long.isLong(f.pts) ? (f.pts as Long).toNumber() : Number(f.pts ?? 0),
      }));

    if (!serializedFrames.length) return;

    if (_frameLog < 5) {
      _frameLog++;
      console.log(`[RemoteCanvas] Frame #${_frameLog}: codec=${codec}, subframes=${serializedFrames.length}, key=${serializedFrames[0]?.key}, b64len=${serializedFrames[0]?.data?.length}`);
    }

    // Use injectJavaScript to call the global receiveFrame function
    // This avoids postMessage which has issues with large payloads
    for (const sf of serializedFrames) {
      inject(`window._rf('${codec}',${sf.key},'${sf.data}',${sf.pts});true;`);
    }
  }, [inject]);

  const sendAudioFrame = useCallback((data: Uint8Array) => {
    if (!data.length) return;
    const b64 = uint8ToBase64(data);
    inject(`window._af('${b64}');true;`);
  }, [inject]);

  const configureAudio = useCallback((channels: number, sampleRate: number) => {
    inject(`window._ac(${channels},${sampleRate});true;`);
  }, [inject]);

  const resetZoom = useCallback(() => {
    inject(`window._rz();true;`);
  }, [inject]);

  const setTrackpadMode = useCallback((enabled: boolean) => {
    inject(`window._tp(${enabled});true;`);
  }, [inject]);

  const onMessage = useCallback((event: WebViewMessageEvent) => {
    let msg: any;
    try { msg = JSON.parse(event.nativeEvent.data); } catch { return; }

    switch (msg.type) {
      case 'ready':
        console.log(`[RemoteCanvas] WebView ready, mode: ${msg.renderMode}`);
        props.onReady();
        break;
      case 'resize':
        props.onResize(msg.width, msg.height);
        break;
      case 'mouse':
        // Pass VNC/RFB state mask directly — server detects press/release by state transitions
        props.onMouse(msg.mask, msg.x, msg.y);
        break;
      case 'error':
        console.error('[WebView]', msg.message);
        break;
      case 'debug':
        console.log('[WebView]', msg.message);
        break;
      case 'zoom':
        break;
    }
  }, [props]);

  const ref: RemoteCanvasRef = {
    sendVideoFrame,
    sendAudioFrame,
    configureAudio,
    resetZoom,
    setTrackpadMode,
  };

  return { webViewRef, ref, onMessage };
}

export function RemoteCanvasView({
  webViewRef,
  onMessage,
}: {
  webViewRef: React.RefObject<WebView | null>;
  onMessage: (event: WebViewMessageEvent) => void;
}) {
  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={VIDEO_HTML}
        style={styles.webview}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        onMessage={onMessage}
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        webviewDebuggingEnabled={__DEV__}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
