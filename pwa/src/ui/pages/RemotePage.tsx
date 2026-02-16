import { useEffect, useRef, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../api/store';
import { Toolbar } from '../components/Toolbar';
import { FileTransferPanel } from '../components/FileTransferPanel';
import { mapChromeOSKey } from '../../chromeos/keyboard-shortcuts';
import { VideoRenderer } from '../../core/video';

/**
 * Remote desktop view with canvas rendering, keyboard/mouse input.
 */
export function RemotePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<VideoRenderer | null>(null);
  const [currentDisplay, setCurrentDisplay] = useState(0);

  const {
    connection,
    status,
    peerInfo,
    cursorData,
    currentFrame,
    fileTransferOpen,
    disconnect,
    connect,
    openFileTransfer,
  } = useAppStore();

  // Connect if not already connected
  useEffect(() => {
    if (!connection && id && status === 'idle') {
      connect(decodeURIComponent(id));
    }
  }, [id, connection, status, connect]);

  // Navigate back on disconnect
  useEffect(() => {
    if (status === 'idle' || status === 'error') {
      navigate('/');
    }
  }, [status, navigate]);

  // Initialize video renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !connection) return;

    const renderer = new VideoRenderer(canvas, {
      onFirstFrame: () => {
        // Connection already tracks first frame via status
      },
      onResize: (_w, _h) => {
        // Canvas auto-resizes to video dimensions
      },
      onFrameRendered: () => {
        // Acknowledge frame reception for flow control
        connection.sendVideoReceived();
      },
    });

    renderer.init();
    rendererRef.current = renderer;

    return () => {
      renderer.destroy();
      rendererRef.current = null;
    };
  }, [connection]);

  // Decode and render incoming video frames
  useEffect(() => {
    if (!currentFrame || !rendererRef.current) return;
    rendererRef.current.onVideoFrame(currentFrame);
  }, [currentFrame]);

  // Custom cursor from remote
  useEffect(() => {
    if (!cursorData || !canvasRef.current) return;
    try {
      const width = cursorData.width ?? 0;
      const height = cursorData.height ?? 0;
      const hotx = cursorData.hotx ?? 0;
      const hoty = cursorData.hoty ?? 0;
      const colors = cursorData.colors;
      if (!width || !height || !colors) return;
      const cursorCanvas = document.createElement('canvas');
      cursorCanvas.width = width;
      cursorCanvas.height = height;
      const ctx = cursorCanvas.getContext('2d');
      if (!ctx) return;
      const imgData = new ImageData(new Uint8ClampedArray(colors), width, height);
      ctx.putImageData(imgData, 0, 0);
      const url = cursorCanvas.toDataURL();
      canvasRef.current.style.cursor = `url(${url}) ${hotx} ${hoty}, default`;
    } catch (e) {
      console.warn('Custom cursor failed:', e);
    }
  }, [cursorData]);

  // Keyboard event handlers
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!connection) return;
      e.preventDefault();
      e.stopPropagation();

      const key = mapChromeOSKey(e.key);
      connection.sendKey(
        key,
        true,
        false,
        e.altKey,
        e.ctrlKey,
        e.shiftKey,
        e.metaKey
      );
    },
    [connection]
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (!connection) return;
      e.preventDefault();
      e.stopPropagation();

      const key = mapChromeOSKey(e.key);
      connection.sendKey(
        key,
        false,
        false,
        e.altKey,
        e.ctrlKey,
        e.shiftKey,
        e.metaKey
      );
    },
    [connection]
  );

  // Mouse event handlers
  const getRemoteCoords = useCallback(
    (e: React.MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas || !peerInfo?.displays?.length) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      // Use canvas actual pixel dimensions (set by decoder) for scaling
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return {
        x: Math.round((e.clientX - rect.left) * scaleX),
        y: Math.round((e.clientY - rect.top) * scaleY),
      };
    },
    [peerInfo]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!connection) return;
      const { x, y } = getRemoteCoords(e);
      let buttonMask = 1 << 3; // left
      if (e.button === 2) buttonMask = 2 << 3; // right
      else if (e.button === 1) buttonMask = 4 << 3; // middle
      connection.sendMouse(1 | buttonMask, x, y, e.altKey, e.ctrlKey, e.shiftKey, e.metaKey);
    },
    [connection, getRemoteCoords]
  );

  const handleMouseUp = useCallback(
    (e: React.MouseEvent) => {
      if (!connection) return;
      const { x, y } = getRemoteCoords(e);
      let buttonMask = 1 << 3;
      if (e.button === 2) buttonMask = 2 << 3;
      else if (e.button === 1) buttonMask = 4 << 3;
      connection.sendMouse(2 | buttonMask, x, y, e.altKey, e.ctrlKey, e.shiftKey, e.metaKey);
    },
    [connection, getRemoteCoords]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!connection) return;
      const { x, y } = getRemoteCoords(e);
      connection.sendMouse(0, x, y);
    },
    [connection, getRemoteCoords]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!connection) return;
      const { x, y } = getRemoteCoords(e as unknown as React.MouseEvent);
      // Scroll mask: bit 0-1 = direction (down=0, up=1), bit 3 = scroll button
      const scrollMask = e.deltaY > 0 ? (128 | 8) : (64 | 8);
      connection.sendMouse(scrollMask, x, y, e.altKey, e.ctrlKey, e.shiftKey, e.metaKey);
    },
    [connection, getRemoteCoords]
  );

  // Register keyboard listeners and clipboard paste on mount
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (!connection) return;
      const text = e.clipboardData?.getData('text/plain');
      if (text) {
        connection.sendClipboard(text);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('paste', handlePaste);
    };
  }, [handleKeyDown, handleKeyUp, connection]);

  // Touch gesture support for Chromebook touchscreens
  const touchRef = useRef<{
    startX: number; startY: number;
    lastX: number; lastY: number;
    startTime: number;
    fingers: number;
    moved: boolean;
  } | null>(null);

  const getTouchCoords = useCallback((touch: { clientX: number; clientY: number }) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: Math.round((touch.clientX - rect.left) * scaleX),
      y: Math.round((touch.clientY - rect.top) * scaleY),
    };
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const t = e.touches[0];
    touchRef.current = {
      startX: t.clientX, startY: t.clientY,
      lastX: t.clientX, lastY: t.clientY,
      startTime: Date.now(),
      fingers: e.touches.length,
      moved: false,
    };
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (!connection || !touchRef.current) return;
    const state = touchRef.current;
    state.fingers = Math.max(state.fingers, e.touches.length);

    if (e.touches.length === 1) {
      // Single finger drag = mouse move
      const { x, y } = getTouchCoords(e.touches[0]);
      connection.sendMouse(0, x, y);
      state.lastX = e.touches[0].clientX;
      state.lastY = e.touches[0].clientY;
      const dx = Math.abs(state.lastX - state.startX);
      const dy = Math.abs(state.lastY - state.startY);
      if (dx > 10 || dy > 10) state.moved = true;
    } else if (e.touches.length === 2) {
      // Two finger scroll
      const dy = e.touches[0].clientY - state.lastY;
      if (Math.abs(dy) > 5) {
        const { x, y } = getTouchCoords(e.touches[0]);
        const scrollMask = dy > 0 ? (128 | 8) : (64 | 8);
        connection.sendMouse(scrollMask, x, y);
        state.lastY = e.touches[0].clientY;
        state.lastX = e.touches[0].clientX;
      }
      state.moved = true;
    }
  }, [connection, getTouchCoords]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (!connection || !touchRef.current) return;
    const state = touchRef.current;
    const elapsed = Date.now() - state.startTime;

    if (!state.moved && elapsed < 500) {
      const { x, y } = getTouchCoords(
        e.changedTouches[0] || { clientX: state.startX, clientY: state.startY }
      );

      if (state.fingers === 1) {
        // Single tap = left click
        connection.sendMouse(1 | (1 << 3), x, y);
        setTimeout(() => connection.sendMouse(2 | (1 << 3), x, y), 50);
      } else if (state.fingers === 2) {
        // Two-finger tap = right click
        connection.sendMouse(1 | (2 << 3), x, y);
        setTimeout(() => connection.sendMouse(2 | (2 << 3), x, y), 50);
      }
    } else if (!state.moved && elapsed >= 500 && state.fingers === 1) {
      // Long press = right click
      const { x, y } = getTouchCoords(
        e.changedTouches[0] || { clientX: state.startX, clientY: state.startY }
      );
      connection.sendMouse(1 | (2 << 3), x, y);
      setTimeout(() => connection.sendMouse(2 | (2 << 3), x, y), 50);
    }

    touchRef.current = null;
  }, [connection, getTouchCoords]);

  // Keyboard Lock: intercept browser shortcuts in fullscreen
  useEffect(() => {
    const onFullscreenChange = () => {
      const kbd = (navigator as any).keyboard;
      if (document.fullscreenElement && kbd?.lock) {
        kbd.lock(['Escape', 'KeyW', 'KeyT', 'KeyN', 'Tab']).catch(() => {});
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      const kbd = (navigator as any).keyboard;
      if (kbd?.unlock) kbd.unlock();
    };
  }, []);

  // Prevent context menu on canvas
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen bg-black flex flex-col overflow-hidden"
    >
      {/* Toolbar */}
      <Toolbar
        peerInfo={peerInfo}
        onDisconnect={() => {
          disconnect();
          navigate('/');
        }}
        onCtrlAltDel={() => connection?.sendCtrlAltDel()}
        onLockScreen={() => connection?.sendLockScreen()}
        onFileTransfer={openFileTransfer}
        onRefresh={() => connection?.refresh()}
        onFullscreen={() => {
          containerRef.current?.requestFullscreen?.();
        }}
        onSwitchDisplay={(d) => {
          connection?.switchDisplay(d);
          setCurrentDisplay(d);
        }}
        currentDisplay={currentDisplay}
      />

      {/* Canvas */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        {status === 'connecting' || status === 'authenticating' ? (
          <div className="text-rustdesk-muted flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-rustdesk-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-sm">
              {status === 'authenticating'
                ? 'Authenticating...'
                : 'Connecting...'}
            </p>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className="remote-canvas max-w-full max-h-full object-contain touch-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
            onContextMenu={handleContextMenu}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
          />
        )}
      </div>

      {/* File Transfer Panel */}
      {fileTransferOpen && <FileTransferPanel />}
    </div>
  );
}
