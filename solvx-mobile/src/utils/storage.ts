/**
 * Storage wrapper with localStorage-compatible sync API.
 * Uses in-memory Map for Expo Go compatibility (no native modules needed).
 * In production builds, swap this for MMKV.
 */

// In-memory fallback that persists for the app session
const memStore = new Map<string, string>();

export const AppStorage = {
  getItem(key: string): string | null {
    return memStore.get(key) ?? null;
  },
  setItem(key: string, value: string): void {
    memStore.set(key, value);
  },
  removeItem(key: string): void {
    memStore.delete(key);
  },
  clear(): void {
    memStore.clear();
  },
};
