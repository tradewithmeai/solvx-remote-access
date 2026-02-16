/**
 * Cryptographic operations using libsodium.
 * Wraps NaCl box/secretbox for RustDesk's key exchange and encryption.
 */
import _sodium from 'libsodium-wrappers';

let sodium: typeof _sodium;

async function ensureSodium() {
  if (!sodium) {
    await _sodium.ready;
    sodium = _sodium;
  }
  return sodium;
}

export async function verify(
  signed: Uint8Array,
  pk: Uint8Array | string
): Promise<Uint8Array> {
  const s = await ensureSodium();
  if (typeof pk === 'string') {
    pk = s.from_base64(pk, s.base64_variants.ORIGINAL);
  }
  return s.crypto_sign_open(signed, pk);
}

export function genBoxKeyPair(): [Uint8Array, Uint8Array] {
  const pair = sodium.crypto_box_keypair();
  return [pair.privateKey, pair.publicKey];
}

export function genSecretKey(): Uint8Array {
  return sodium.crypto_secretbox_keygen();
}

export function seal(
  plaintext: Uint8Array,
  theirPk: Uint8Array,
  ourSk: Uint8Array
): Uint8Array {
  const nonce = new Uint8Array(24); // zeros
  return sodium.crypto_box_easy(plaintext, nonce, theirPk, ourSk);
}

function makeNonce(value: number): Uint8Array {
  const bytes = new Uint8Array(24);
  for (let i = 0; i < bytes.length && value > 0; i++) {
    bytes[i] = value & 0xff;
    value = (value - bytes[i]) / 256;
  }
  return bytes;
}

export function encrypt(
  plaintext: Uint8Array,
  nonce: number,
  key: Uint8Array
): Uint8Array {
  return sodium.crypto_secretbox_easy(plaintext, makeNonce(nonce), key);
}

export function decrypt(
  ciphertext: Uint8Array,
  nonce: number,
  key: Uint8Array
): Uint8Array {
  return sodium.crypto_secretbox_open_easy(ciphertext, makeNonce(nonce), key);
}

export async function init(): Promise<void> {
  await ensureSodium();
}
