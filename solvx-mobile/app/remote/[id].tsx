import { useEffect, useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Modal,
  ActivityIndicator,
  Keyboard,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Connection, type ConnectionEvents } from '../../src/core/connection';
import { useAppStore } from '../../src/store/app-store';
import { useRemoteCanvas, RemoteCanvasView } from '../../src/components/RemoteCanvas';
import { mapKey } from '../../src/core/common';

let _vflog = false;

export default function RemoteScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const connRef = useRef<Connection | null>(null);
  const keyInputRef = useRef<TextInput>(null);

  const status = useAppStore(s => s.status);
  const statusDetail = useAppStore(s => s.statusDetail);
  const passwordRequired = useAppStore(s => s.passwordRequired);
  const passwordRetry = useAppStore(s => s.passwordRetry);
  const twoFARequired = useAppStore(s => s.twoFARequired);
  const twoFARetry = useAppStore(s => s.twoFARetry);
  const peerInfo = useAppStore(s => s.peerInfo);
  const latency = useAppStore(s => s.latency);
  const currentDisplay = useAppStore(s => s.currentDisplay);
  const trackpadMode = useAppStore(s => s.trackpadMode);

  const [password, setPassword] = useState('');
  const [twoFACode, setTwoFACode] = useState('');
  const [showToolbar, setShowToolbar] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });
  const [keyboardText, setKeyboardText] = useState('');
  const [stickyCtrl, setStickyCtrl] = useState(false);
  const [stickyAlt, setStickyAlt] = useState(false);

  // WebView remote canvas
  const { webViewRef, ref: canvasRef, onMessage } = useRemoteCanvas({
    onMouse: useCallback((mask: number, x: number, y: number) => {
      connRef.current?.sendMouse(mask, x, y, stickyAlt, stickyCtrl, false, false);
    }, [stickyCtrl, stickyAlt]),
    onReady: useCallback(() => {
      console.log('[RemoteCanvas] WebView ready');
      setVideoReady(true);
    }, []),
    onResize: useCallback((w: number, h: number) => {
      console.log(`[RemoteCanvas] Video size: ${w}x${h}`);
      setVideoSize({ width: w, height: h });
    }, []),
  });

  // Sync trackpad mode to WebView
  useEffect(() => {
    if (videoReady) canvasRef.setTrackpadMode(trackpadMode);
  }, [trackpadMode, videoReady]);

  // Auto-hide toolbar after 3 seconds of connection
  useEffect(() => {
    if (status === 'connected') {
      const timer = setTimeout(() => setShowToolbar(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    if (!id) return;
    activateKeepAwakeAsync();

    const events: ConnectionEvents = {
      onStatus: (s, detail) => {
        console.log(`[Connection] Status: ${s} ${detail || ''}`);
        useAppStore.getState().setStatus(s, detail);
      },
      onPeerInfo: (info) => {
        console.log('[Connection] PeerInfo:', info.username, info.hostname, info.platform,
          `displays: ${info.displays?.length ?? 0}, current: ${info.current_display ?? 0}`);
        useAppStore.getState().setPeerInfo(info);
        useAppStore.getState().setCurrentDisplay(info.current_display ?? 0);
        useAppStore.getState().setPasswordRequired(false, false);
        useAppStore.getState().set2FARequired(false, false, false);
        useAppStore.getState().addRecentPeer({
          id: id!,
          alias: info.hostname || undefined,
          platform: info.platform || undefined,
          lastConnected: Date.now(),
        });
      },
      onVideoFrame: (frame) => {
        if (!_vflog) {
          _vflog = true;
          const codec = frame.vp9s?.frames?.length ? 'vp9' :
            frame.h264s?.frames?.length ? 'h264' :
            frame.h265s?.frames?.length ? 'h265' :
            frame.av1s?.frames?.length ? 'av1' : 'unknown';
          console.log(`[Connection] First video frame: codec=${codec}`);
        }
        canvasRef.sendVideoFrame(frame);
        // Send video-received ack for flow control
        connRef.current?.sendVideoReceived();
      },
      onAudioFormat: (channels, sampleRate) => {
        console.log(`[Connection] Audio: ${channels}ch ${sampleRate}Hz`);
        canvasRef.configureAudio(channels, sampleRate);
      },
      onAudioFrame: (data) => {
        canvasRef.sendAudioFrame(data);
      },
      onCursorData: () => {},
      onCursorId: () => {},
      onCursorPosition: () => {},
      onClipboard: (text) => {
        console.log('[Connection] Clipboard received:', text.slice(0, 50));
      },
      onPermission: (kind, enabled) => {
        console.log(`[Connection] Permission ${kind}: ${enabled}`);
      },
      onChat: () => {},
      onDisplaySwitch: (display) => {
        console.log('[Connection] Display switch:', display.display, display.width, 'x', display.height);
        useAppStore.getState().setCurrentDisplay(display.display);
        setVideoSize({ width: display.width ?? 0, height: display.height ?? 0 });
      },
      onPasswordRequired: (retry) => {
        useAppStore.getState().setPasswordRequired(true, retry);
      },
      on2FARequired: (retry, enableTrusted) => {
        useAppStore.getState().set2FARequired(true, retry, enableTrusted);
      },
      onFileDir: () => {},
      onFileTransferBlock: () => {},
      onFileTransferDigest: () => {},
      onFileTransferDone: () => {},
      onFileTransferError: () => {},
      onLatency: (ms) => {
        useAppStore.getState().setLatency(ms);
      },
      onError: (title, message) => {
        console.error(`[Connection] Error: ${title} - ${message}`);
        useAppStore.getState().setError(title, message);
        Alert.alert(title, message);
      },
      onTerminalOpened: () => {},
      onTerminalData: () => {},
      onTerminalClosed: () => {},
      onTerminalError: () => {},
    };

    const conn = new Connection(events);
    connRef.current = conn;
    useAppStore.getState().reset();

    console.log(`[Connection] Connecting to peer: ${id}`);
    conn.connect(id, 'both');

    return () => {
      conn.close();
      connRef.current = null;
      useAppStore.getState().reset();
      deactivateKeepAwake();
    };
  }, [id]);

  const handlePasswordSubmit = useCallback(() => {
    if (!password.trim()) return;
    connRef.current?.login(password);
    setPassword('');
  }, [password]);

  const handle2FASubmit = useCallback(() => {
    if (!twoFACode.trim()) return;
    connRef.current?.send2FA(twoFACode, false);
    setTwoFACode('');
  }, [twoFACode]);

  const handleDisconnect = useCallback(() => {
    connRef.current?.close();
    router.back();
  }, [router]);

  // Keyboard input handler
  const handleKeyInput = useCallback((text: string) => {
    if (!connRef.current) return;
    // Compare with previous text to find what was typed
    const prev = keyboardText;
    if (text.length > prev.length) {
      // New character(s) typed
      const newChars = text.slice(prev.length);
      for (const ch of newChars) {
        connRef.current.sendKey(ch, true, true, stickyAlt, stickyCtrl, false, false);
      }
      // Auto-release sticky modifiers after key press
      if (stickyCtrl) setStickyCtrl(false);
      if (stickyAlt) setStickyAlt(false);
    } else if (text.length < prev.length) {
      // Backspace
      connRef.current.sendKey('Backspace', true, true, false, false, false, false);
    }
    setKeyboardText(text);
  }, [keyboardText, stickyCtrl, stickyAlt]);

  const sendSpecialKey = useCallback((keyName: string) => {
    connRef.current?.sendKey(keyName, true, true, stickyAlt, stickyCtrl, false, false);
    if (stickyCtrl) setStickyCtrl(false);
    if (stickyAlt) setStickyAlt(false);
  }, [stickyCtrl, stickyAlt]);

  const isConnecting = status === 'connecting' || status === 'authenticating';
  const isConnected = status === 'connected';

  return (
    <View style={styles.container}>
      {/* Remote desktop canvas */}
      {(isConnected || isConnecting) && (
        <View style={styles.canvasContainer}>
          <RemoteCanvasView webViewRef={webViewRef} onMessage={onMessage} />
        </View>
      )}

      {/* Connecting overlay */}
      {isConnecting && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#10b981" />
          <Text style={styles.overlayText}>{statusDetail || 'Connecting...'}</Text>
        </View>
      )}

      {/* Error / disconnected overlay */}
      {(status === 'error' || status === 'disconnected') && (
        <View style={styles.overlay}>
          <Text style={styles.errorText}>
            {status === 'error' ? 'Connection Error' : 'Disconnected'}
          </Text>
          <Pressable
            style={styles.retryButton}
            onPress={() => {
              useAppStore.getState().reset();
              connRef.current?.reconnect();
            }}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </Pressable>
          <Pressable style={styles.backButton} onPress={handleDisconnect}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      )}

      {/* Floating toolbar (tap to toggle) */}
      {isConnected && (
        <>
          {/* Tap zone to show toolbar */}
          {!showToolbar && (
            <Pressable
              style={styles.toolbarTrigger}
              onPress={() => setShowToolbar(true)}
            />
          )}

          {showToolbar && (
            <View style={styles.toolbar}>
              <Pressable style={styles.toolBtn} onPress={handleDisconnect}>
                <Text style={styles.toolBtnTextDanger}>X</Text>
              </Pressable>

              {/* Display picker */}
              {peerInfo?.displays && peerInfo.displays.length > 1 && (
                <View style={styles.displayPicker}>
                  {peerInfo.displays.map((_, i) => (
                    <Pressable
                      key={i}
                      style={[styles.toolBtn, i === currentDisplay && styles.toolBtnActive]}
                      onPress={() => connRef.current?.switchDisplay(i)}
                    >
                      <Text style={[styles.toolBtnText, i === currentDisplay && styles.toolBtnTextActive]}>
                        D{i + 1}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              )}

              <Text style={styles.toolbarInfo}>
                {latency > 0 ? `${latency}ms` : '...'} | {videoSize.width}x{videoSize.height}
              </Text>

              {/* Trackpad toggle */}
              <Pressable
                style={[styles.toolBtn, trackpadMode && styles.toolBtnActive]}
                onPress={() => useAppStore.getState().setTrackpadMode(!trackpadMode)}
              >
                <Text style={[styles.toolBtnText, trackpadMode && styles.toolBtnTextActive]}>
                  {trackpadMode ? 'TP' : 'Abs'}
                </Text>
              </Pressable>

              {/* Zoom reset */}
              <Pressable style={styles.toolBtn} onPress={() => canvasRef.resetZoom()}>
                <Text style={styles.toolBtnText}>1:1</Text>
              </Pressable>

              <Pressable
                style={styles.toolBtn}
                onPress={() => connRef.current?.sendCtrlAltDel()}
              >
                <Text style={styles.toolBtnText}>CAD</Text>
              </Pressable>
              <Pressable
                style={styles.toolBtn}
                onPress={() => keyInputRef.current?.focus()}
              >
                <Text style={styles.toolBtnText}>KB</Text>
              </Pressable>
              <Pressable
                style={styles.toolBtn}
                onPress={() => setShowToolbar(false)}
              >
                <Text style={styles.toolBtnText}>_</Text>
              </Pressable>
            </View>
          )}

          {/* Special keys bar */}
          {showToolbar && (
            <View style={styles.specialKeys}>
              <Pressable style={styles.keyBtn} onPress={() => sendSpecialKey('Escape')}>
                <Text style={styles.keyBtnText}>Esc</Text>
              </Pressable>
              <Pressable style={styles.keyBtn} onPress={() => sendSpecialKey('Tab')}>
                <Text style={styles.keyBtnText}>Tab</Text>
              </Pressable>
              <Pressable
                style={[styles.keyBtn, stickyCtrl && styles.keyBtnActive]}
                onPress={() => setStickyCtrl(c => !c)}
              >
                <Text style={[styles.keyBtnText, stickyCtrl && styles.keyBtnTextActive]}>Ctrl</Text>
              </Pressable>
              <Pressable
                style={[styles.keyBtn, stickyAlt && styles.keyBtnActive]}
                onPress={() => setStickyAlt(a => !a)}
              >
                <Text style={[styles.keyBtnText, stickyAlt && styles.keyBtnTextActive]}>Alt</Text>
              </Pressable>
              <Pressable style={styles.keyBtn} onPress={() => sendSpecialKey('ArrowUp')}>
                <Text style={styles.keyBtnText}>^</Text>
              </Pressable>
              <Pressable style={styles.keyBtn} onPress={() => sendSpecialKey('ArrowDown')}>
                <Text style={styles.keyBtnText}>v</Text>
              </Pressable>
              <Pressable style={styles.keyBtn} onPress={() => sendSpecialKey('ArrowLeft')}>
                <Text style={styles.keyBtnText}>&lt;</Text>
              </Pressable>
              <Pressable style={styles.keyBtn} onPress={() => sendSpecialKey('ArrowRight')}>
                <Text style={styles.keyBtnText}>&gt;</Text>
              </Pressable>
            </View>
          )}
        </>
      )}

      {/* Hidden keyboard input */}
      <TextInput
        ref={keyInputRef}
        style={styles.hiddenInput}
        value={keyboardText}
        onChangeText={handleKeyInput}
        autoCorrect={false}
        autoCapitalize="none"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          sendSpecialKey('Enter');
          setKeyboardText('');
        }}
      />

      {/* Password dialog */}
      <Modal visible={passwordRequired} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              {passwordRetry ? 'Wrong Password' : 'Password Required'}
            </Text>
            <TextInput
              style={styles.modalInput}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              placeholderTextColor="#666"
              secureTextEntry
              autoFocus
              onSubmitEditing={handlePasswordSubmit}
            />
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalCancel} onPress={handleDisconnect}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalSubmit} onPress={handlePasswordSubmit}>
                <Text style={styles.modalSubmitText}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* 2FA dialog */}
      <Modal visible={twoFARequired} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              {twoFARetry ? 'Wrong Code' : 'Two-Factor Authentication'}
            </Text>
            <TextInput
              style={styles.modalInput}
              value={twoFACode}
              onChangeText={setTwoFACode}
              placeholder="Enter 2FA code"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              autoFocus
              onSubmitEditing={handle2FASubmit}
            />
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalCancel} onPress={handleDisconnect}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalSubmit} onPress={handle2FASubmit}>
                <Text style={styles.modalSubmitText}>Verify</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  canvasContainer: {
    flex: 1,
  },
  // Overlays
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 15, 26, 0.9)',
    zIndex: 10,
  },
  overlayText: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 16,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#1e1e2e',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  retryButtonText: {
    color: '#10b981',
    fontSize: 16,
  },
  backButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backButtonText: {
    color: '#888',
    fontSize: 14,
  },
  // Toolbar
  toolbarTrigger: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 20,
  },
  toolbar: {
    position: 'absolute',
    top: 40,
    left: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 46, 0.9)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 6,
    zIndex: 30,
  },
  toolbarInfo: {
    flex: 1,
    color: '#888',
    fontSize: 11,
    textAlign: 'center',
    fontVariant: ['tabular-nums'],
  },
  toolBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'rgba(42, 42, 62, 0.9)',
  },
  toolBtnActive: {
    backgroundColor: '#10b981',
  },
  toolBtnText: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: '500',
  },
  toolBtnTextActive: {
    color: '#fff',
  },
  toolBtnTextDanger: {
    color: '#ef4444',
    fontSize: 12,
    fontWeight: '700',
  },
  displayPicker: {
    flexDirection: 'row',
    gap: 2,
  },
  // Special keys
  specialKeys: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(30, 30, 46, 0.95)',
    paddingHorizontal: 4,
    paddingVertical: 6,
    gap: 4,
    zIndex: 30,
  },
  keyBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(42, 42, 62, 0.9)',
  },
  keyBtnActive: {
    backgroundColor: '#10b981',
  },
  keyBtnText: {
    color: '#ccc',
    fontSize: 11,
    fontWeight: '500',
  },
  keyBtnTextActive: {
    color: '#fff',
  },
  // Hidden input for keyboard capture
  hiddenInput: {
    position: 'absolute',
    top: -100,
    left: 0,
    width: 1,
    height: 1,
    opacity: 0,
  },
  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#1e1e2e',
    borderRadius: 12,
    padding: 24,
    width: '85%',
    maxWidth: 400,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  modalInput: {
    backgroundColor: '#2a2a3e',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  modalCancel: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  modalCancelText: {
    color: '#888',
    fontSize: 16,
  },
  modalSubmit: {
    backgroundColor: '#10b981',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalSubmitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
