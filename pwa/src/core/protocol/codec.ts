/**
 * Protocol buffer encoding/decoding for RustDesk messages.
 * Uses protobufjs-generated code from hbb_common/protos/.
 */
import { hbb } from './generated/proto';
import type { Message, RendezvousMessage } from './types';

export function encodeMessage(msg: Partial<Message>): Uint8Array {
  const errMsg = hbb.Message.verify(msg);
  if (errMsg) {
    console.warn('Message verify warning:', errMsg);
  }
  return hbb.Message.encode(hbb.Message.create(msg)).finish();
}

export function decodeMessage(data: Uint8Array): Message {
  return hbb.Message.decode(data);
}

export function encodeRendezvous(msg: Partial<RendezvousMessage>): Uint8Array {
  const errMsg = hbb.RendezvousMessage.verify(msg);
  if (errMsg) {
    console.warn('RendezvousMessage verify warning:', errMsg);
  }
  return hbb.RendezvousMessage.encode(hbb.RendezvousMessage.create(msg)).finish();
}

export function decodeRendezvous(data: Uint8Array): RendezvousMessage {
  return hbb.RendezvousMessage.decode(data);
}

export function decodeIdPk(data: Uint8Array): { id: string; pk: Uint8Array } {
  const idpk = hbb.IdPk.decode(data);
  return {
    id: idpk.id,
    pk: idpk.pk,
  };
}
