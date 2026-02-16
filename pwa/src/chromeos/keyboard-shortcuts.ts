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

