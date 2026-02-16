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

export async function genBoxKeyPair(): Promise<[Uint8Array, Uint8Array]> {
  const s = await ensureSodium();
  const pair = s.crypto_box_keypair();
  return [pair.privateKey, pair.publicKey];
}

export async function genSecretKey(): Promise<Uint8Array> {
  const s = await ensureSodium();
  return s.crypto_secretbox_keygen();
}

export async function seal(
  plaintext: Uint8Array,
  theirPk: Uint8Array,
  ourSk: Uint8Array
): Promise<Uint8Array> {
  // Zero nonce is a protocol constraint — the Rust server (tcp.rs:331) uses the
  // same: box_::Nonce([0u8; box_::NONCEBYTES]). This is safe because ephemeral
  // keypairs are generated per connection, so the same key+nonce pair is never reused.
  const s = await ensureSodium();
  const nonce = new Uint8Array(24);
  return s.crypto_box_easy(plaintext, nonce, theirPk, ourSk);
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
