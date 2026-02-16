/**
 * ChromeOS-specific keyboard handling.
 *
 * Maps ChromeOS keys to their Windows/standard equivalents:
 * - Search/Launcher key -> Windows/Super key
 * - ChromeOS function row (brightness, volume) -> F1-F12 when Search held
 *
 * Also intercepts browser shortcuts that would otherwise close the tab
 * or navigate away (Ctrl+W, Ctrl+T, etc.) when the remote canvas is focused.
 */

/**
 * Maps a browser key name to the corresponding RustDesk key name,
 * applying ChromeOS-specific translations.
 */
export function mapChromeOSKey(key: string): string {
  // ChromeOS Search/Launcher key reports as "Meta" in the browser
  // which already maps to the Windows/Super key in RustDesk.
  // No special mapping needed here since the KEY_MAP in common.ts
  // handles Meta -> Meta (which is the Windows key).

  // ChromeOS-specific media keys that should pass through
  const chromeOSMap: Record<string, string> = {
    BrightnessDown: 'F6',
    BrightnessUp: 'F7',
    AudioVolumeDown: 'F9',
    AudioVolumeUp: 'F10',
    AudioVolumeMute: 'F8',
    MediaPlayPause: 'Pause',
    LaunchApplication1: 'F5', // Overview key
    LaunchApplication2: 'F5',
  };

  return chromeOSMap[key] || key;
}

/**
 * Determines if a keyboard event should be intercepted to prevent
 * the browser from handling it (e.g., Ctrl+W closing the tab).
 *
 * Call this in the keydown handler before preventDefault().
 */
export function shouldInterceptKey(e: KeyboardEvent): boolean {
  if (!e.ctrlKey && !e.altKey && !e.metaKey) return false;

  // Intercept common browser shortcuts that conflict with remote desktop
  const intercepted = new Set([
    'w', // Ctrl+W = close tab
    't', // Ctrl+T = new tab
    'n', // Ctrl+N = new window
    'r', // Ctrl+R = reload
    'l', // Ctrl+L = address bar
    'd', // Ctrl+D = bookmark
    'q', // Ctrl+Q = quit (ChromeOS)
    'F4', // Alt+F4 = close window
    'F5', // Ctrl+F5 = hard reload
    'Tab', // Alt+Tab = switch window
  ]);

  if (e.ctrlKey && intercepted.has(e.key)) return true;
  if (e.altKey && (e.key === 'F4' || e.key === 'Tab')) return true;

  return false;
}

/**
 * Request Keyboard Lock API for full keyboard capture.
 * Only works in fullscreen mode on Chrome/ChromeOS.
 */
export async function requestKeyboardLock(): Promise<boolean> {
  try {
    if ('keyboard' in navigator && 'lock' in (navigator as any).keyboard) {
      await (navigator as any).keyboard.lock([
        'Escape',
        'KeyW',
        'KeyT',
        'KeyN',
        'KeyR',
        'KeyL',
        'KeyQ',
        'F4',
        'F5',
        'Tab',
      ]);
      return true;
    }
  } catch (e) {
    console.warn('Keyboard Lock not available:', e);
  }
  return false;
}

export function releaseKeyboardLock() {
  try {
    if ('keyboard' in navigator && 'unlock' in (navigator as any).keyboard) {
      (navigator as any).keyboard.unlock();
    }
  } catch {}
}
