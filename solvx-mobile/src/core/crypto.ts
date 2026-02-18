/**
 * Cryptographic operations using tweetnacl.
 * Pure JS NaCl implementation — no WASM dependency.
 * Replaces libsodium-wrappers from the PWA.
 */
import nacl from 'tweetnacl';
import { decodeBase64 } from 'tweetnacl-util';

/**
 * Verify a signed message using Ed25519.
 * Returns the original message if signature is valid.
 */
export async function verify(
  signed: Uint8Array,
  pk: Uint8Array | string
): Promise<Uint8Array> {
  if (typeof pk === 'string') {
    pk = decodeBase64(pk);
  }
  const msg = nacl.sign.open(signed, pk);
  if (!msg) throw new Error('Signature verification failed');
  return msg;
}

/**
 * Generate an ephemeral Curve25519 key pair for key exchange.
 * Returns [secretKey, publicKey].
 */
export async function genBoxKeyPair(): Promise<[Uint8Array, Uint8Array]> {
  const pair = nacl.box.keyPair();
  return [pair.secretKey, pair.publicKey];
}

/**
 * Generate a random 32-byte secret key for symmetric encryption.
 */
export async function genSecretKey(): Promise<Uint8Array> {
  return nacl.randomBytes(32);
}

/**
 * Encrypt with NaCl box (asymmetric).
 * Uses zero nonce — safe because ephemeral keys are per-connection.
 */
export async function seal(
  plaintext: Uint8Array,
  theirPk: Uint8Array,
  ourSk: Uint8Array
): Promise<Uint8Array> {
  const nonce = new Uint8Array(24); // Zero nonce per RustDesk protocol
  return nacl.box(plaintext, nonce, theirPk, ourSk);
}

/**
 * Build a little-endian nonce from a counter value.
 */
function makeNonce(value: number): Uint8Array {
  const bytes = new Uint8Array(24);
  for (let i = 0; i < bytes.length && value > 0; i++) {
    bytes[i] = value & 0xff;
    value = (value - bytes[i]) / 256;
  }
  return bytes;
}

/**
 * Encrypt with NaCl secretbox (symmetric, counter-based nonce).
 */
export function encrypt(
  plaintext: Uint8Array,
  nonce: number,
  key: Uint8Array
): Uint8Array {
  return nacl.secretbox(plaintext, makeNonce(nonce), key);
}

/**
 * Decrypt with NaCl secretbox (symmetric, counter-based nonce).
 */
export function decrypt(
  ciphertext: Uint8Array,
  nonce: number,
  key: Uint8Array
): Uint8Array {
  const result = nacl.secretbox.open(ciphertext, makeNonce(nonce), key);
  if (!result) throw new Error('Decryption failed');
  return result;
}

/**
 * No-op init — tweetnacl is synchronous, no WASM to load.
 */
export async function init(): Promise<void> {
  // Nothing to initialize
}
