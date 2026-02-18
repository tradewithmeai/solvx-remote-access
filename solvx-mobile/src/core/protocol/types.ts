/**
 * Re-export RustDesk protocol types from generated protobuf code.
 * This module provides the same type names used throughout the codebase,
 * backed by real protobuf serialization from hbb_common/protos/.
 */
import { hbb } from './generated/proto';

// === Rendezvous Protocol ===

export const ConnType = hbb.ConnType;
export type ConnType = hbb.ConnType;

export const NatType = hbb.NatType;
export type NatType = hbb.NatType;

export type PunchHoleRequest = hbb.IPunchHoleRequest;
export type PunchHoleResponse = hbb.IPunchHoleResponse;
export type RelayResponse = hbb.IRelayResponse;
export type RequestRelay = hbb.IRequestRelay;
export type RendezvousMessage = hbb.IRendezvousMessage;

// PunchHoleResponse failure enum is nested
export const PunchHoleFailure = hbb.PunchHoleResponse.Failure;
export type PunchHoleFailure = hbb.PunchHoleResponse.Failure;

// === Message Protocol ===

export type IdPk = hbb.IIdPk;
export type SignedId = hbb.ISignedId;
export type PublicKey = hbb.IPublicKey;
export type Hash = hbb.IHash;

export const ImageQuality = hbb.ImageQuality;
export type ImageQuality = hbb.ImageQuality;

export const BoolOption = hbb.OptionMessage.BoolOption;
export type BoolOption = hbb.OptionMessage.BoolOption;

export type OptionMessage = hbb.IOptionMessage;
export type SupportedDecoding = hbb.ISupportedDecoding;
export const PreferCodec = hbb.SupportedDecoding.PreferCodec;
export type PreferCodec = hbb.SupportedDecoding.PreferCodec;
export type LoginRequest = hbb.ILoginRequest;

export type Display = hbb.IDisplayInfo;
export type PeerInfo = hbb.IPeerInfo;
export type LoginResponse = hbb.ILoginResponse;

export type EncodedVideoFrame = hbb.IEncodedVideoFrame;
export type EncodedVideoFrames = hbb.IEncodedVideoFrames;
export type VideoFrame = hbb.IVideoFrame;

export type AudioFormat = hbb.IAudioFormat;
export type AudioFrame = hbb.IAudioFrame;

export type CursorData = hbb.ICursorData;
export type CursorPosition = hbb.ICursorPosition;
export type Clipboard = hbb.IClipboard;

export const ControlKey = hbb.ControlKey;
export type ControlKey = hbb.ControlKey;

export type PermissionInfo = hbb.IPermissionInfo;
export type SwitchDisplay = hbb.ISwitchDisplay;
export type ChatMessage = hbb.IChatMessage;
export type TestDelay = hbb.ITestDelay;
export type Misc = hbb.IMisc;

export type KeyEvent = hbb.IKeyEvent;
export type MouseEvent = hbb.IMouseEvent;
export type Message = hbb.IMessage;

// === File Transfer ===

export type FileAction = hbb.IFileAction;
export type FileResponse = hbb.IFileResponse;
export type FileEntry = hbb.IFileEntry;
export type FileDirectory = hbb.IFileDirectory;
export type FileTransferBlock = hbb.IFileTransferBlock;
export type FileTransferDigest = hbb.IFileTransferDigest;
export type FileTransferDone = hbb.IFileTransferDone;
export type FileTransferError = hbb.IFileTransferError;
export const FileType = hbb.FileType;
export type FileType = hbb.FileType;

// === Terminal ===

export type TerminalAction = hbb.ITerminalAction;
export type TerminalResponse = hbb.ITerminalResponse;
export type OpenTerminal = hbb.IOpenTerminal;
export type TerminalData = hbb.ITerminalData;
export type ResizeTerminal = hbb.IResizeTerminal;
export type CloseTerminal = hbb.ICloseTerminal;
export type TerminalOpened = hbb.ITerminalOpened;
export type TerminalClosed = hbb.ITerminalClosed;
export type TerminalError = hbb.ITerminalError;

// Re-export the class constructors for encode/decode
export const MessageClass = hbb.Message;
export const RendezvousMessageClass = hbb.RendezvousMessage;
export const IdPkClass = hbb.IdPk;
