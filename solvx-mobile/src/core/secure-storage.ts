/**
 * Secure credential storage using Expo SecureStore.
 * Replaces the PWA's IndexedDB + Web Crypto implementation.
 * SecureStore uses Keychain (iOS) and EncryptedSharedPreferences (Android).
 */
import * as SecureStore from 'expo-secure-store';

/**
 * Encrypt and store a string securely.
 * Returns a storage key that can be used to retrieve it.
 */
export async function encryptForStorage(plaintext: string): Promise<string> {
  // SecureStore handles encryption at the OS level.
  // We store with a unique key and return a reference token.
  const token = `sec_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  await SecureStore.setItemAsync(token, plaintext);
  return token;
}

/**
 * Retrieve and decrypt a stored string.
 * Returns the original plaintext, or null if not found.
 */
export async function decryptFromStorage(token: string): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(token);
  } catch {
    return null;
  }
}
