/**
 * Common utilities: Zstandard decompression, keyboard mapping, etc.
 * Based on flutter/web/v1/js/src/common.ts
 */
import type { KeyEvent } from './protocol/types';
import { ControlKey } from './protocol/types';

// === Zstandard decompression ===

let zstdDecoder: any = null;

export async function initZstd(): Promise<void> {
  try {
    const zstd = await import('zstddec');
    const decoder = new (zstd as any).ZSTDDecoder();
    await decoder.init();
    zstdDecoder = decoder;
  } catch (e) {
    console.warn('Zstd init failed:', e);
  }
}

export async function decompress(data: Uint8Array): Promise<Uint8Array | undefined> {
  const MAX = 64 * 1024 * 1024;
  const MIN = 1024 * 1024;
  let n = 30 * data.length;
  if (n > MAX) n = MAX;
  if (n < MIN) n = MIN;

  try {
    if (!zstdDecoder) await initZstd();
    if (!zstdDecoder) return undefined;
    return zstdDecoder.decode(data, n);
  } catch (e) {
    console.error('Decompress failed:', e);
    return undefined;
  }
}

// === Keyboard mapping ===

/**
 * Maps browser key names to RustDesk KeyEvent.
 * Returns a partial KeyEvent with either control_key, chr, or unicode set.
 */
export function mapKey(name: string): Partial<KeyEvent> | null {
  const mapped = KEY_MAP[name] || name;

  if (mapped.length === 1) {
    const chr = mapped.charCodeAt(0);
    return { chr };
  }

  const controlKey = CONTROL_KEY_MAP[mapped];
  if (controlKey !== undefined) {
    return { control_key: controlKey };
  }

  console.warn('Unknown key:', name, '->', mapped);
  return null;
}

// Browser key -> RustDesk key name
const KEY_MAP: Record<string, string> = {
  // Standard keys
  Backspace: 'Backspace',
  Tab: 'Tab',
  Enter: 'Return',
  Escape: 'Escape',
  Delete: 'Delete',
  Insert: 'Insert',
  Home: 'Home',
  End: 'End',
  PageUp: 'PageUp',
  PageDown: 'PageDown',
  ArrowUp: 'UpArrow',
  ArrowDown: 'DownArrow',
  ArrowLeft: 'LeftArrow',
  ArrowRight: 'RightArrow',
  CapsLock: 'CapsLock',
  NumLock: 'NumLock',
  ScrollLock: 'ScrollLock',
  Pause: 'Pause',
  PrintScreen: 'Snapshot',
  ContextMenu: 'Apps',

  // Function keys
  F1: 'F1', F2: 'F2', F3: 'F3', F4: 'F4',
  F5: 'F5', F6: 'F6', F7: 'F7', F8: 'F8',
  F9: 'F9', F10: 'F10', F11: 'F11', F12: 'F12',

  // Modifier keys
  Shift: 'VK_SHIFT',
  Control: 'VK_CONTROL',
  Alt: 'VK_MENU',
  Meta: 'Meta',

  // Space
  ' ': 'Space',
};

// RustDesk key name -> ControlKey enum
const CONTROL_KEY_MAP: Record<string, ControlKey> = {
  Backspace: ControlKey.Backspace,
  Tab: ControlKey.Tab,
  Return: ControlKey.Return,
  Escape: ControlKey.Escape,
  Delete: ControlKey.Delete,
  Insert: ControlKey.Insert,
  Home: ControlKey.Home,
  End: ControlKey.End,
  PageUp: ControlKey.PageUp,
  PageDown: ControlKey.PageDown,
  UpArrow: ControlKey.UpArrow,
  DownArrow: ControlKey.DownArrow,
  LeftArrow: ControlKey.LeftArrow,
  RightArrow: ControlKey.RightArrow,
  CapsLock: ControlKey.CapsLock,
  NumLock: ControlKey.NumLock,
  ScrollLock: ControlKey.Scroll,
  Pause: ControlKey.Pause,
  Snapshot: ControlKey.Snapshot,
  Apps: ControlKey.Apps,
  Space: ControlKey.Space,
  F1: ControlKey.F1, F2: ControlKey.F2, F3: ControlKey.F3, F4: ControlKey.F4,
  F5: ControlKey.F5, F6: ControlKey.F6, F7: ControlKey.F7, F8: ControlKey.F8,
  F9: ControlKey.F9, F10: ControlKey.F10, F11: ControlKey.F11, F12: ControlKey.F12,
  VK_SHIFT: ControlKey.Shift,
  VK_CONTROL: ControlKey.Control,
  VK_MENU: ControlKey.Alt,
  Meta: ControlKey.Meta,
};

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
