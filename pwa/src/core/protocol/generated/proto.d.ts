import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace hbb. */
export namespace hbb {

    /** Properties of an EncodedVideoFrame. */
    interface IEncodedVideoFrame {

        /** EncodedVideoFrame data */
        data?: (Uint8Array|null);

        /** EncodedVideoFrame key */
        key?: (boolean|null);

        /** EncodedVideoFrame pts */
        pts?: (Long|null);
    }

    /** Represents an EncodedVideoFrame. */
    class EncodedVideoFrame implements IEncodedVideoFrame {

        /**
         * Constructs a new EncodedVideoFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IEncodedVideoFrame);

        /** EncodedVideoFrame data. */
        public data: Uint8Array;

        /** EncodedVideoFrame key. */
        public key: boolean;

        /** EncodedVideoFrame pts. */
        public pts: Long;

        /**
         * Creates a new EncodedVideoFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncodedVideoFrame instance
         */
        public static create(properties?: hbb.IEncodedVideoFrame): hbb.EncodedVideoFrame;

        /**
         * Encodes the specified EncodedVideoFrame message. Does not implicitly {@link hbb.EncodedVideoFrame.verify|verify} messages.
         * @param message EncodedVideoFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IEncodedVideoFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncodedVideoFrame message, length delimited. Does not implicitly {@link hbb.EncodedVideoFrame.verify|verify} messages.
         * @param message EncodedVideoFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IEncodedVideoFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncodedVideoFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncodedVideoFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.EncodedVideoFrame;

        /**
         * Decodes an EncodedVideoFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncodedVideoFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.EncodedVideoFrame;

        /**
         * Verifies an EncodedVideoFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncodedVideoFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncodedVideoFrame
         */
        public static fromObject(object: { [k: string]: any }): hbb.EncodedVideoFrame;

        /**
         * Creates a plain object from an EncodedVideoFrame message. Also converts values to other types if specified.
         * @param message EncodedVideoFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.EncodedVideoFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncodedVideoFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EncodedVideoFrame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EncodedVideoFrames. */
    interface IEncodedVideoFrames {

        /** EncodedVideoFrames frames */
        frames?: (hbb.IEncodedVideoFrame[]|null);
    }

    /** Represents an EncodedVideoFrames. */
    class EncodedVideoFrames implements IEncodedVideoFrames {

        /**
         * Constructs a new EncodedVideoFrames.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IEncodedVideoFrames);

        /** EncodedVideoFrames frames. */
        public frames: hbb.IEncodedVideoFrame[];

        /**
         * Creates a new EncodedVideoFrames instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncodedVideoFrames instance
         */
        public static create(properties?: hbb.IEncodedVideoFrames): hbb.EncodedVideoFrames;

        /**
         * Encodes the specified EncodedVideoFrames message. Does not implicitly {@link hbb.EncodedVideoFrames.verify|verify} messages.
         * @param message EncodedVideoFrames message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IEncodedVideoFrames, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncodedVideoFrames message, length delimited. Does not implicitly {@link hbb.EncodedVideoFrames.verify|verify} messages.
         * @param message EncodedVideoFrames message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IEncodedVideoFrames, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncodedVideoFrames message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncodedVideoFrames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.EncodedVideoFrames;

        /**
         * Decodes an EncodedVideoFrames message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncodedVideoFrames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.EncodedVideoFrames;

        /**
         * Verifies an EncodedVideoFrames message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncodedVideoFrames message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncodedVideoFrames
         */
        public static fromObject(object: { [k: string]: any }): hbb.EncodedVideoFrames;

        /**
         * Creates a plain object from an EncodedVideoFrames message. Also converts values to other types if specified.
         * @param message EncodedVideoFrames
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.EncodedVideoFrames, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncodedVideoFrames to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EncodedVideoFrames
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RGB. */
    interface IRGB {

        /** RGB compress */
        compress?: (boolean|null);
    }

    /** Represents a RGB. */
    class RGB implements IRGB {

        /**
         * Constructs a new RGB.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IRGB);

        /** RGB compress. */
        public compress: boolean;

        /**
         * Creates a new RGB instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RGB instance
         */
        public static create(properties?: hbb.IRGB): hbb.RGB;

        /**
         * Encodes the specified RGB message. Does not implicitly {@link hbb.RGB.verify|verify} messages.
         * @param message RGB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IRGB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RGB message, length delimited. Does not implicitly {@link hbb.RGB.verify|verify} messages.
         * @param message RGB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IRGB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RGB message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RGB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.RGB;

        /**
         * Decodes a RGB message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RGB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.RGB;

        /**
         * Verifies a RGB message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RGB message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RGB
         */
        public static fromObject(object: { [k: string]: any }): hbb.RGB;

        /**
         * Creates a plain object from a RGB message. Also converts values to other types if specified.
         * @param message RGB
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.RGB, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RGB to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RGB
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a YUV. */
    interface IYUV {

        /** YUV compress */
        compress?: (boolean|null);

        /** YUV stride */
        stride?: (number|null);
    }

    /** Represents a YUV. */
    class YUV implements IYUV {

        /**
         * Constructs a new YUV.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IYUV);

        /** YUV compress. */
        public compress: boolean;

        /** YUV stride. */
        public stride: number;

        /**
         * Creates a new YUV instance using the specified properties.
         * @param [properties] Properties to set
         * @returns YUV instance
         */
        public static create(properties?: hbb.IYUV): hbb.YUV;

        /**
         * Encodes the specified YUV message. Does not implicitly {@link hbb.YUV.verify|verify} messages.
         * @param message YUV message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IYUV, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified YUV message, length delimited. Does not implicitly {@link hbb.YUV.verify|verify} messages.
         * @param message YUV message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IYUV, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a YUV message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns YUV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.YUV;

        /**
         * Decodes a YUV message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns YUV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.YUV;

        /**
         * Verifies a YUV message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a YUV message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns YUV
         */
        public static fromObject(object: { [k: string]: any }): hbb.YUV;

        /**
         * Creates a plain object from a YUV message. Also converts values to other types if specified.
         * @param message YUV
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.YUV, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this YUV to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for YUV
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Chroma enum. */
    enum Chroma {
        I420 = 0,
        I444 = 1
    }

    /** Properties of a VideoFrame. */
    interface IVideoFrame {

        /** VideoFrame vp9s */
        vp9s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame rgb */
        rgb?: (hbb.IRGB|null);

        /** VideoFrame yuv */
        yuv?: (hbb.IYUV|null);

        /** VideoFrame h264s */
        h264s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame h265s */
        h265s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame vp8s */
        vp8s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame av1s */
        av1s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame display */
        display?: (number|null);
    }

    /** Represents a VideoFrame. */
    class VideoFrame implements IVideoFrame {

        /**
         * Constructs a new VideoFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IVideoFrame);

        /** VideoFrame vp9s. */
        public vp9s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame rgb. */
        public rgb?: (hbb.IRGB|null);

        /** VideoFrame yuv. */
        public yuv?: (hbb.IYUV|null);

        /** VideoFrame h264s. */
        public h264s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame h265s. */
        public h265s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame vp8s. */
        public vp8s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame av1s. */
        public av1s?: (hbb.IEncodedVideoFrames|null);

        /** VideoFrame display. */
        public display: number;

        /** VideoFrame union. */
        public union?: ("vp9s"|"rgb"|"yuv"|"h264s"|"h265s"|"vp8s"|"av1s");

        /**
         * Creates a new VideoFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoFrame instance
         */
        public static create(properties?: hbb.IVideoFrame): hbb.VideoFrame;

        /**
         * Encodes the specified VideoFrame message. Does not implicitly {@link hbb.VideoFrame.verify|verify} messages.
         * @param message VideoFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IVideoFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoFrame message, length delimited. Does not implicitly {@link hbb.VideoFrame.verify|verify} messages.
         * @param message VideoFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IVideoFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.VideoFrame;

        /**
         * Decodes a VideoFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.VideoFrame;

        /**
         * Verifies a VideoFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoFrame
         */
        public static fromObject(object: { [k: string]: any }): hbb.VideoFrame;

        /**
         * Creates a plain object from a VideoFrame message. Also converts values to other types if specified.
         * @param message VideoFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.VideoFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VideoFrame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IdPk. */
    interface IIdPk {

        /** IdPk id */
        id?: (string|null);

        /** IdPk pk */
        pk?: (Uint8Array|null);
    }

    /** Represents an IdPk. */
    class IdPk implements IIdPk {

        /**
         * Constructs a new IdPk.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IIdPk);

        /** IdPk id. */
        public id: string;

        /** IdPk pk. */
        public pk: Uint8Array;

        /**
         * Creates a new IdPk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdPk instance
         */
        public static create(properties?: hbb.IIdPk): hbb.IdPk;

        /**
         * Encodes the specified IdPk message. Does not implicitly {@link hbb.IdPk.verify|verify} messages.
         * @param message IdPk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IIdPk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdPk message, length delimited. Does not implicitly {@link hbb.IdPk.verify|verify} messages.
         * @param message IdPk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IIdPk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdPk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdPk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.IdPk;

        /**
         * Decodes an IdPk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdPk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.IdPk;

        /**
         * Verifies an IdPk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdPk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdPk
         */
        public static fromObject(object: { [k: string]: any }): hbb.IdPk;

        /**
         * Creates a plain object from an IdPk message. Also converts values to other types if specified.
         * @param message IdPk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.IdPk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdPk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IdPk
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisplayInfo. */
    interface IDisplayInfo {

        /** DisplayInfo x */
        x?: (number|null);

        /** DisplayInfo y */
        y?: (number|null);

        /** DisplayInfo width */
        width?: (number|null);

        /** DisplayInfo height */
        height?: (number|null);

        /** DisplayInfo name */
        name?: (string|null);

        /** DisplayInfo online */
        online?: (boolean|null);

        /** DisplayInfo cursor_embedded */
        cursor_embedded?: (boolean|null);

        /** DisplayInfo original_resolution */
        original_resolution?: (hbb.IResolution|null);

        /** DisplayInfo scale */
        scale?: (number|null);
    }

    /** Represents a DisplayInfo. */
    class DisplayInfo implements IDisplayInfo {

        /**
         * Constructs a new DisplayInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IDisplayInfo);

        /** DisplayInfo x. */
        public x: number;

        /** DisplayInfo y. */
        public y: number;

        /** DisplayInfo width. */
        public width: number;

        /** DisplayInfo height. */
        public height: number;

        /** DisplayInfo name. */
        public name: string;

        /** DisplayInfo online. */
        public online: boolean;

        /** DisplayInfo cursor_embedded. */
        public cursor_embedded: boolean;

        /** DisplayInfo original_resolution. */
        public original_resolution?: (hbb.IResolution|null);

        /** DisplayInfo scale. */
        public scale: number;

        /**
         * Creates a new DisplayInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisplayInfo instance
         */
        public static create(properties?: hbb.IDisplayInfo): hbb.DisplayInfo;

        /**
         * Encodes the specified DisplayInfo message. Does not implicitly {@link hbb.DisplayInfo.verify|verify} messages.
         * @param message DisplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IDisplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisplayInfo message, length delimited. Does not implicitly {@link hbb.DisplayInfo.verify|verify} messages.
         * @param message DisplayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IDisplayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisplayInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.DisplayInfo;

        /**
         * Decodes a DisplayInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisplayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.DisplayInfo;

        /**
         * Verifies a DisplayInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisplayInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisplayInfo
         */
        public static fromObject(object: { [k: string]: any }): hbb.DisplayInfo;

        /**
         * Creates a plain object from a DisplayInfo message. Also converts values to other types if specified.
         * @param message DisplayInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.DisplayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisplayInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisplayInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PortForward. */
    interface IPortForward {

        /** PortForward host */
        host?: (string|null);

        /** PortForward port */
        port?: (number|null);
    }

    /** Represents a PortForward. */
    class PortForward implements IPortForward {

        /**
         * Constructs a new PortForward.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPortForward);

        /** PortForward host. */
        public host: string;

        /** PortForward port. */
        public port: number;

        /**
         * Creates a new PortForward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PortForward instance
         */
        public static create(properties?: hbb.IPortForward): hbb.PortForward;

        /**
         * Encodes the specified PortForward message. Does not implicitly {@link hbb.PortForward.verify|verify} messages.
         * @param message PortForward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPortForward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PortForward message, length delimited. Does not implicitly {@link hbb.PortForward.verify|verify} messages.
         * @param message PortForward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPortForward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PortForward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PortForward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PortForward;

        /**
         * Decodes a PortForward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PortForward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PortForward;

        /**
         * Verifies a PortForward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PortForward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PortForward
         */
        public static fromObject(object: { [k: string]: any }): hbb.PortForward;

        /**
         * Creates a plain object from a PortForward message. Also converts values to other types if specified.
         * @param message PortForward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PortForward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PortForward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PortForward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileTransfer. */
    interface IFileTransfer {

        /** FileTransfer dir */
        dir?: (string|null);

        /** FileTransfer show_hidden */
        show_hidden?: (boolean|null);
    }

    /** Represents a FileTransfer. */
    class FileTransfer implements IFileTransfer {

        /**
         * Constructs a new FileTransfer.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransfer);

        /** FileTransfer dir. */
        public dir: string;

        /** FileTransfer show_hidden. */
        public show_hidden: boolean;

        /**
         * Creates a new FileTransfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransfer instance
         */
        public static create(properties?: hbb.IFileTransfer): hbb.FileTransfer;

        /**
         * Encodes the specified FileTransfer message. Does not implicitly {@link hbb.FileTransfer.verify|verify} messages.
         * @param message FileTransfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransfer message, length delimited. Does not implicitly {@link hbb.FileTransfer.verify|verify} messages.
         * @param message FileTransfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransfer;

        /**
         * Decodes a FileTransfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransfer;

        /**
         * Verifies a FileTransfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransfer
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransfer;

        /**
         * Creates a plain object from a FileTransfer message. Also converts values to other types if specified.
         * @param message FileTransfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransfer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ViewCamera. */
    interface IViewCamera {
    }

    /** Represents a ViewCamera. */
    class ViewCamera implements IViewCamera {

        /**
         * Constructs a new ViewCamera.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IViewCamera);

        /**
         * Creates a new ViewCamera instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ViewCamera instance
         */
        public static create(properties?: hbb.IViewCamera): hbb.ViewCamera;

        /**
         * Encodes the specified ViewCamera message. Does not implicitly {@link hbb.ViewCamera.verify|verify} messages.
         * @param message ViewCamera message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IViewCamera, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ViewCamera message, length delimited. Does not implicitly {@link hbb.ViewCamera.verify|verify} messages.
         * @param message ViewCamera message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IViewCamera, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ViewCamera message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ViewCamera
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ViewCamera;

        /**
         * Decodes a ViewCamera message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ViewCamera
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ViewCamera;

        /**
         * Verifies a ViewCamera message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ViewCamera message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ViewCamera
         */
        public static fromObject(object: { [k: string]: any }): hbb.ViewCamera;

        /**
         * Creates a plain object from a ViewCamera message. Also converts values to other types if specified.
         * @param message ViewCamera
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ViewCamera, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ViewCamera to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ViewCamera
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a OSLogin. */
    interface IOSLogin {

        /** OSLogin username */
        username?: (string|null);

        /** OSLogin password */
        password?: (string|null);
    }

    /** Represents a OSLogin. */
    class OSLogin implements IOSLogin {

        /**
         * Constructs a new OSLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IOSLogin);

        /** OSLogin username. */
        public username: string;

        /** OSLogin password. */
        public password: string;

        /**
         * Creates a new OSLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OSLogin instance
         */
        public static create(properties?: hbb.IOSLogin): hbb.OSLogin;

        /**
         * Encodes the specified OSLogin message. Does not implicitly {@link hbb.OSLogin.verify|verify} messages.
         * @param message OSLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IOSLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OSLogin message, length delimited. Does not implicitly {@link hbb.OSLogin.verify|verify} messages.
         * @param message OSLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IOSLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a OSLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OSLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.OSLogin;

        /**
         * Decodes a OSLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OSLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.OSLogin;

        /**
         * Verifies a OSLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a OSLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OSLogin
         */
        public static fromObject(object: { [k: string]: any }): hbb.OSLogin;

        /**
         * Creates a plain object from a OSLogin message. Also converts values to other types if specified.
         * @param message OSLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.OSLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OSLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OSLogin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest username */
        username?: (string|null);

        /** LoginRequest password */
        password?: (Uint8Array|null);

        /** LoginRequest my_id */
        my_id?: (string|null);

        /** LoginRequest my_name */
        my_name?: (string|null);

        /** LoginRequest option */
        option?: (hbb.IOptionMessage|null);

        /** LoginRequest file_transfer */
        file_transfer?: (hbb.IFileTransfer|null);

        /** LoginRequest port_forward */
        port_forward?: (hbb.IPortForward|null);

        /** LoginRequest view_camera */
        view_camera?: (hbb.IViewCamera|null);

        /** LoginRequest terminal */
        terminal?: (hbb.ITerminal|null);

        /** LoginRequest video_ack_required */
        video_ack_required?: (boolean|null);

        /** LoginRequest session_id */
        session_id?: (Long|null);

        /** LoginRequest version */
        version?: (string|null);

        /** LoginRequest os_login */
        os_login?: (hbb.IOSLogin|null);

        /** LoginRequest my_platform */
        my_platform?: (string|null);

        /** LoginRequest hwid */
        hwid?: (Uint8Array|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ILoginRequest);

        /** LoginRequest username. */
        public username: string;

        /** LoginRequest password. */
        public password: Uint8Array;

        /** LoginRequest my_id. */
        public my_id: string;

        /** LoginRequest my_name. */
        public my_name: string;

        /** LoginRequest option. */
        public option?: (hbb.IOptionMessage|null);

        /** LoginRequest file_transfer. */
        public file_transfer?: (hbb.IFileTransfer|null);

        /** LoginRequest port_forward. */
        public port_forward?: (hbb.IPortForward|null);

        /** LoginRequest view_camera. */
        public view_camera?: (hbb.IViewCamera|null);

        /** LoginRequest terminal. */
        public terminal?: (hbb.ITerminal|null);

        /** LoginRequest video_ack_required. */
        public video_ack_required: boolean;

        /** LoginRequest session_id. */
        public session_id: Long;

        /** LoginRequest version. */
        public version: string;

        /** LoginRequest os_login. */
        public os_login?: (hbb.IOSLogin|null);

        /** LoginRequest my_platform. */
        public my_platform: string;

        /** LoginRequest hwid. */
        public hwid: Uint8Array;

        /** LoginRequest union. */
        public union?: ("file_transfer"|"port_forward"|"view_camera"|"terminal");

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: hbb.ILoginRequest): hbb.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link hbb.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link hbb.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Terminal. */
    interface ITerminal {

        /** Terminal service_id */
        service_id?: (string|null);
    }

    /** Represents a Terminal. */
    class Terminal implements ITerminal {

        /**
         * Constructs a new Terminal.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITerminal);

        /** Terminal service_id. */
        public service_id: string;

        /**
         * Creates a new Terminal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Terminal instance
         */
        public static create(properties?: hbb.ITerminal): hbb.Terminal;

        /**
         * Encodes the specified Terminal message. Does not implicitly {@link hbb.Terminal.verify|verify} messages.
         * @param message Terminal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITerminal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Terminal message, length delimited. Does not implicitly {@link hbb.Terminal.verify|verify} messages.
         * @param message Terminal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITerminal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Terminal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Terminal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Terminal;

        /**
         * Decodes a Terminal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Terminal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Terminal;

        /**
         * Verifies a Terminal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Terminal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Terminal
         */
        public static fromObject(object: { [k: string]: any }): hbb.Terminal;

        /**
         * Creates a plain object from a Terminal message. Also converts values to other types if specified.
         * @param message Terminal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Terminal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Terminal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Terminal
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Auth2FA. */
    interface IAuth2FA {

        /** Auth2FA code */
        code?: (string|null);

        /** Auth2FA hwid */
        hwid?: (Uint8Array|null);
    }

    /** Represents an Auth2FA. */
    class Auth2FA implements IAuth2FA {

        /**
         * Constructs a new Auth2FA.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IAuth2FA);

        /** Auth2FA code. */
        public code: string;

        /** Auth2FA hwid. */
        public hwid: Uint8Array;

        /**
         * Creates a new Auth2FA instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Auth2FA instance
         */
        public static create(properties?: hbb.IAuth2FA): hbb.Auth2FA;

        /**
         * Encodes the specified Auth2FA message. Does not implicitly {@link hbb.Auth2FA.verify|verify} messages.
         * @param message Auth2FA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IAuth2FA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Auth2FA message, length delimited. Does not implicitly {@link hbb.Auth2FA.verify|verify} messages.
         * @param message Auth2FA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IAuth2FA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Auth2FA message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Auth2FA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Auth2FA;

        /**
         * Decodes an Auth2FA message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Auth2FA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Auth2FA;

        /**
         * Verifies an Auth2FA message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Auth2FA message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Auth2FA
         */
        public static fromObject(object: { [k: string]: any }): hbb.Auth2FA;

        /**
         * Creates a plain object from an Auth2FA message. Also converts values to other types if specified.
         * @param message Auth2FA
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Auth2FA, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Auth2FA to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Auth2FA
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatMessage. */
    interface IChatMessage {

        /** ChatMessage text */
        text?: (string|null);
    }

    /** Represents a ChatMessage. */
    class ChatMessage implements IChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IChatMessage);

        /** ChatMessage text. */
        public text: string;

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        public static create(properties?: hbb.IChatMessage): hbb.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link hbb.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link hbb.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ChatMessage;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ChatMessage;

        /**
         * Verifies a ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessage
         */
        public static fromObject(object: { [k: string]: any }): hbb.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChatMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Features. */
    interface IFeatures {

        /** Features privacy_mode */
        privacy_mode?: (boolean|null);

        /** Features terminal */
        terminal?: (boolean|null);
    }

    /** Represents a Features. */
    class Features implements IFeatures {

        /**
         * Constructs a new Features.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFeatures);

        /** Features privacy_mode. */
        public privacy_mode: boolean;

        /** Features terminal. */
        public terminal: boolean;

        /**
         * Creates a new Features instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Features instance
         */
        public static create(properties?: hbb.IFeatures): hbb.Features;

        /**
         * Encodes the specified Features message. Does not implicitly {@link hbb.Features.verify|verify} messages.
         * @param message Features message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Features message, length delimited. Does not implicitly {@link hbb.Features.verify|verify} messages.
         * @param message Features message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Features message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Features
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Features;

        /**
         * Decodes a Features message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Features
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Features;

        /**
         * Verifies a Features message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Features message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Features
         */
        public static fromObject(object: { [k: string]: any }): hbb.Features;

        /**
         * Creates a plain object from a Features message. Also converts values to other types if specified.
         * @param message Features
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Features, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Features to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Features
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CodecAbility. */
    interface ICodecAbility {

        /** CodecAbility vp8 */
        vp8?: (boolean|null);

        /** CodecAbility vp9 */
        vp9?: (boolean|null);

        /** CodecAbility av1 */
        av1?: (boolean|null);

        /** CodecAbility h264 */
        h264?: (boolean|null);

        /** CodecAbility h265 */
        h265?: (boolean|null);
    }

    /** Represents a CodecAbility. */
    class CodecAbility implements ICodecAbility {

        /**
         * Constructs a new CodecAbility.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICodecAbility);

        /** CodecAbility vp8. */
        public vp8: boolean;

        /** CodecAbility vp9. */
        public vp9: boolean;

        /** CodecAbility av1. */
        public av1: boolean;

        /** CodecAbility h264. */
        public h264: boolean;

        /** CodecAbility h265. */
        public h265: boolean;

        /**
         * Creates a new CodecAbility instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CodecAbility instance
         */
        public static create(properties?: hbb.ICodecAbility): hbb.CodecAbility;

        /**
         * Encodes the specified CodecAbility message. Does not implicitly {@link hbb.CodecAbility.verify|verify} messages.
         * @param message CodecAbility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICodecAbility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CodecAbility message, length delimited. Does not implicitly {@link hbb.CodecAbility.verify|verify} messages.
         * @param message CodecAbility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICodecAbility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CodecAbility message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CodecAbility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CodecAbility;

        /**
         * Decodes a CodecAbility message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CodecAbility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CodecAbility;

        /**
         * Verifies a CodecAbility message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CodecAbility message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CodecAbility
         */
        public static fromObject(object: { [k: string]: any }): hbb.CodecAbility;

        /**
         * Creates a plain object from a CodecAbility message. Also converts values to other types if specified.
         * @param message CodecAbility
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CodecAbility, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CodecAbility to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CodecAbility
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SupportedEncoding. */
    interface ISupportedEncoding {

        /** SupportedEncoding h264 */
        h264?: (boolean|null);

        /** SupportedEncoding h265 */
        h265?: (boolean|null);

        /** SupportedEncoding vp8 */
        vp8?: (boolean|null);

        /** SupportedEncoding av1 */
        av1?: (boolean|null);

        /** SupportedEncoding i444 */
        i444?: (hbb.ICodecAbility|null);
    }

    /** Represents a SupportedEncoding. */
    class SupportedEncoding implements ISupportedEncoding {

        /**
         * Constructs a new SupportedEncoding.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISupportedEncoding);

        /** SupportedEncoding h264. */
        public h264: boolean;

        /** SupportedEncoding h265. */
        public h265: boolean;

        /** SupportedEncoding vp8. */
        public vp8: boolean;

        /** SupportedEncoding av1. */
        public av1: boolean;

        /** SupportedEncoding i444. */
        public i444?: (hbb.ICodecAbility|null);

        /**
         * Creates a new SupportedEncoding instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SupportedEncoding instance
         */
        public static create(properties?: hbb.ISupportedEncoding): hbb.SupportedEncoding;

        /**
         * Encodes the specified SupportedEncoding message. Does not implicitly {@link hbb.SupportedEncoding.verify|verify} messages.
         * @param message SupportedEncoding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISupportedEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SupportedEncoding message, length delimited. Does not implicitly {@link hbb.SupportedEncoding.verify|verify} messages.
         * @param message SupportedEncoding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISupportedEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SupportedEncoding message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SupportedEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SupportedEncoding;

        /**
         * Decodes a SupportedEncoding message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SupportedEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SupportedEncoding;

        /**
         * Verifies a SupportedEncoding message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SupportedEncoding message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SupportedEncoding
         */
        public static fromObject(object: { [k: string]: any }): hbb.SupportedEncoding;

        /**
         * Creates a plain object from a SupportedEncoding message. Also converts values to other types if specified.
         * @param message SupportedEncoding
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SupportedEncoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SupportedEncoding to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SupportedEncoding
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PeerInfo. */
    interface IPeerInfo {

        /** PeerInfo username */
        username?: (string|null);

        /** PeerInfo hostname */
        hostname?: (string|null);

        /** PeerInfo platform */
        platform?: (string|null);

        /** PeerInfo displays */
        displays?: (hbb.IDisplayInfo[]|null);

        /** PeerInfo current_display */
        current_display?: (number|null);

        /** PeerInfo sas_enabled */
        sas_enabled?: (boolean|null);

        /** PeerInfo version */
        version?: (string|null);

        /** PeerInfo features */
        features?: (hbb.IFeatures|null);

        /** PeerInfo encoding */
        encoding?: (hbb.ISupportedEncoding|null);

        /** PeerInfo resolutions */
        resolutions?: (hbb.ISupportedResolutions|null);

        /** PeerInfo platform_additions */
        platform_additions?: (string|null);

        /** PeerInfo windows_sessions */
        windows_sessions?: (hbb.IWindowsSessions|null);
    }

    /** Represents a PeerInfo. */
    class PeerInfo implements IPeerInfo {

        /**
         * Constructs a new PeerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPeerInfo);

        /** PeerInfo username. */
        public username: string;

        /** PeerInfo hostname. */
        public hostname: string;

        /** PeerInfo platform. */
        public platform: string;

        /** PeerInfo displays. */
        public displays: hbb.IDisplayInfo[];

        /** PeerInfo current_display. */
        public current_display: number;

        /** PeerInfo sas_enabled. */
        public sas_enabled: boolean;

        /** PeerInfo version. */
        public version: string;

        /** PeerInfo features. */
        public features?: (hbb.IFeatures|null);

        /** PeerInfo encoding. */
        public encoding?: (hbb.ISupportedEncoding|null);

        /** PeerInfo resolutions. */
        public resolutions?: (hbb.ISupportedResolutions|null);

        /** PeerInfo platform_additions. */
        public platform_additions: string;

        /** PeerInfo windows_sessions. */
        public windows_sessions?: (hbb.IWindowsSessions|null);

        /**
         * Creates a new PeerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PeerInfo instance
         */
        public static create(properties?: hbb.IPeerInfo): hbb.PeerInfo;

        /**
         * Encodes the specified PeerInfo message. Does not implicitly {@link hbb.PeerInfo.verify|verify} messages.
         * @param message PeerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPeerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PeerInfo message, length delimited. Does not implicitly {@link hbb.PeerInfo.verify|verify} messages.
         * @param message PeerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPeerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PeerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PeerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PeerInfo;

        /**
         * Decodes a PeerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PeerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PeerInfo;

        /**
         * Verifies a PeerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PeerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PeerInfo
         */
        public static fromObject(object: { [k: string]: any }): hbb.PeerInfo;

        /**
         * Creates a plain object from a PeerInfo message. Also converts values to other types if specified.
         * @param message PeerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PeerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PeerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PeerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WindowsSession. */
    interface IWindowsSession {

        /** WindowsSession sid */
        sid?: (number|null);

        /** WindowsSession name */
        name?: (string|null);
    }

    /** Represents a WindowsSession. */
    class WindowsSession implements IWindowsSession {

        /**
         * Constructs a new WindowsSession.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IWindowsSession);

        /** WindowsSession sid. */
        public sid: number;

        /** WindowsSession name. */
        public name: string;

        /**
         * Creates a new WindowsSession instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WindowsSession instance
         */
        public static create(properties?: hbb.IWindowsSession): hbb.WindowsSession;

        /**
         * Encodes the specified WindowsSession message. Does not implicitly {@link hbb.WindowsSession.verify|verify} messages.
         * @param message WindowsSession message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IWindowsSession, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WindowsSession message, length delimited. Does not implicitly {@link hbb.WindowsSession.verify|verify} messages.
         * @param message WindowsSession message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IWindowsSession, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WindowsSession message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WindowsSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.WindowsSession;

        /**
         * Decodes a WindowsSession message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WindowsSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.WindowsSession;

        /**
         * Verifies a WindowsSession message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WindowsSession message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WindowsSession
         */
        public static fromObject(object: { [k: string]: any }): hbb.WindowsSession;

        /**
         * Creates a plain object from a WindowsSession message. Also converts values to other types if specified.
         * @param message WindowsSession
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.WindowsSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WindowsSession to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WindowsSession
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse error */
        error?: (string|null);

        /** LoginResponse peer_info */
        peer_info?: (hbb.IPeerInfo|null);

        /** LoginResponse enable_trusted_devices */
        enable_trusted_devices?: (boolean|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ILoginResponse);

        /** LoginResponse error. */
        public error?: (string|null);

        /** LoginResponse peer_info. */
        public peer_info?: (hbb.IPeerInfo|null);

        /** LoginResponse enable_trusted_devices. */
        public enable_trusted_devices: boolean;

        /** LoginResponse union. */
        public union?: ("error"|"peer_info");

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: hbb.ILoginResponse): hbb.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link hbb.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link hbb.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TouchScaleUpdate. */
    interface ITouchScaleUpdate {

        /** TouchScaleUpdate scale */
        scale?: (number|null);
    }

    /** Represents a TouchScaleUpdate. */
    class TouchScaleUpdate implements ITouchScaleUpdate {

        /**
         * Constructs a new TouchScaleUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITouchScaleUpdate);

        /** TouchScaleUpdate scale. */
        public scale: number;

        /**
         * Creates a new TouchScaleUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TouchScaleUpdate instance
         */
        public static create(properties?: hbb.ITouchScaleUpdate): hbb.TouchScaleUpdate;

        /**
         * Encodes the specified TouchScaleUpdate message. Does not implicitly {@link hbb.TouchScaleUpdate.verify|verify} messages.
         * @param message TouchScaleUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITouchScaleUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TouchScaleUpdate message, length delimited. Does not implicitly {@link hbb.TouchScaleUpdate.verify|verify} messages.
         * @param message TouchScaleUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITouchScaleUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TouchScaleUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TouchScaleUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TouchScaleUpdate;

        /**
         * Decodes a TouchScaleUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TouchScaleUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TouchScaleUpdate;

        /**
         * Verifies a TouchScaleUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TouchScaleUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TouchScaleUpdate
         */
        public static fromObject(object: { [k: string]: any }): hbb.TouchScaleUpdate;

        /**
         * Creates a plain object from a TouchScaleUpdate message. Also converts values to other types if specified.
         * @param message TouchScaleUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TouchScaleUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TouchScaleUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TouchScaleUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TouchPanStart. */
    interface ITouchPanStart {

        /** TouchPanStart x */
        x?: (number|null);

        /** TouchPanStart y */
        y?: (number|null);
    }

    /** Represents a TouchPanStart. */
    class TouchPanStart implements ITouchPanStart {

        /**
         * Constructs a new TouchPanStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITouchPanStart);

        /** TouchPanStart x. */
        public x: number;

        /** TouchPanStart y. */
        public y: number;

        /**
         * Creates a new TouchPanStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TouchPanStart instance
         */
        public static create(properties?: hbb.ITouchPanStart): hbb.TouchPanStart;

        /**
         * Encodes the specified TouchPanStart message. Does not implicitly {@link hbb.TouchPanStart.verify|verify} messages.
         * @param message TouchPanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITouchPanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TouchPanStart message, length delimited. Does not implicitly {@link hbb.TouchPanStart.verify|verify} messages.
         * @param message TouchPanStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITouchPanStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TouchPanStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TouchPanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TouchPanStart;

        /**
         * Decodes a TouchPanStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TouchPanStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TouchPanStart;

        /**
         * Verifies a TouchPanStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TouchPanStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TouchPanStart
         */
        public static fromObject(object: { [k: string]: any }): hbb.TouchPanStart;

        /**
         * Creates a plain object from a TouchPanStart message. Also converts values to other types if specified.
         * @param message TouchPanStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TouchPanStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TouchPanStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TouchPanStart
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TouchPanUpdate. */
    interface ITouchPanUpdate {

        /** TouchPanUpdate x */
        x?: (number|null);

        /** TouchPanUpdate y */
        y?: (number|null);
    }

    /** Represents a TouchPanUpdate. */
    class TouchPanUpdate implements ITouchPanUpdate {

        /**
         * Constructs a new TouchPanUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITouchPanUpdate);

        /** TouchPanUpdate x. */
        public x: number;

        /** TouchPanUpdate y. */
        public y: number;

        /**
         * Creates a new TouchPanUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TouchPanUpdate instance
         */
        public static create(properties?: hbb.ITouchPanUpdate): hbb.TouchPanUpdate;

        /**
         * Encodes the specified TouchPanUpdate message. Does not implicitly {@link hbb.TouchPanUpdate.verify|verify} messages.
         * @param message TouchPanUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITouchPanUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TouchPanUpdate message, length delimited. Does not implicitly {@link hbb.TouchPanUpdate.verify|verify} messages.
         * @param message TouchPanUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITouchPanUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TouchPanUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TouchPanUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TouchPanUpdate;

        /**
         * Decodes a TouchPanUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TouchPanUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TouchPanUpdate;

        /**
         * Verifies a TouchPanUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TouchPanUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TouchPanUpdate
         */
        public static fromObject(object: { [k: string]: any }): hbb.TouchPanUpdate;

        /**
         * Creates a plain object from a TouchPanUpdate message. Also converts values to other types if specified.
         * @param message TouchPanUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TouchPanUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TouchPanUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TouchPanUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TouchPanEnd. */
    interface ITouchPanEnd {

        /** TouchPanEnd x */
        x?: (number|null);

        /** TouchPanEnd y */
        y?: (number|null);
    }

    /** Represents a TouchPanEnd. */
    class TouchPanEnd implements ITouchPanEnd {

        /**
         * Constructs a new TouchPanEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITouchPanEnd);

        /** TouchPanEnd x. */
        public x: number;

        /** TouchPanEnd y. */
        public y: number;

        /**
         * Creates a new TouchPanEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TouchPanEnd instance
         */
        public static create(properties?: hbb.ITouchPanEnd): hbb.TouchPanEnd;

        /**
         * Encodes the specified TouchPanEnd message. Does not implicitly {@link hbb.TouchPanEnd.verify|verify} messages.
         * @param message TouchPanEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITouchPanEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TouchPanEnd message, length delimited. Does not implicitly {@link hbb.TouchPanEnd.verify|verify} messages.
         * @param message TouchPanEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITouchPanEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TouchPanEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TouchPanEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TouchPanEnd;

        /**
         * Decodes a TouchPanEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TouchPanEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TouchPanEnd;

        /**
         * Verifies a TouchPanEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TouchPanEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TouchPanEnd
         */
        public static fromObject(object: { [k: string]: any }): hbb.TouchPanEnd;

        /**
         * Creates a plain object from a TouchPanEnd message. Also converts values to other types if specified.
         * @param message TouchPanEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TouchPanEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TouchPanEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TouchPanEnd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TouchEvent. */
    interface ITouchEvent {

        /** TouchEvent scale_update */
        scale_update?: (hbb.ITouchScaleUpdate|null);

        /** TouchEvent pan_start */
        pan_start?: (hbb.ITouchPanStart|null);

        /** TouchEvent pan_update */
        pan_update?: (hbb.ITouchPanUpdate|null);

        /** TouchEvent pan_end */
        pan_end?: (hbb.ITouchPanEnd|null);
    }

    /** Represents a TouchEvent. */
    class TouchEvent implements ITouchEvent {

        /**
         * Constructs a new TouchEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITouchEvent);

        /** TouchEvent scale_update. */
        public scale_update?: (hbb.ITouchScaleUpdate|null);

        /** TouchEvent pan_start. */
        public pan_start?: (hbb.ITouchPanStart|null);

        /** TouchEvent pan_update. */
        public pan_update?: (hbb.ITouchPanUpdate|null);

        /** TouchEvent pan_end. */
        public pan_end?: (hbb.ITouchPanEnd|null);

        /** TouchEvent union. */
        public union?: ("scale_update"|"pan_start"|"pan_update"|"pan_end");

        /**
         * Creates a new TouchEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TouchEvent instance
         */
        public static create(properties?: hbb.ITouchEvent): hbb.TouchEvent;

        /**
         * Encodes the specified TouchEvent message. Does not implicitly {@link hbb.TouchEvent.verify|verify} messages.
         * @param message TouchEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITouchEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TouchEvent message, length delimited. Does not implicitly {@link hbb.TouchEvent.verify|verify} messages.
         * @param message TouchEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITouchEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TouchEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TouchEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TouchEvent;

        /**
         * Decodes a TouchEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TouchEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TouchEvent;

        /**
         * Verifies a TouchEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TouchEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TouchEvent
         */
        public static fromObject(object: { [k: string]: any }): hbb.TouchEvent;

        /**
         * Creates a plain object from a TouchEvent message. Also converts values to other types if specified.
         * @param message TouchEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TouchEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TouchEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TouchEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PointerDeviceEvent. */
    interface IPointerDeviceEvent {

        /** PointerDeviceEvent touch_event */
        touch_event?: (hbb.ITouchEvent|null);

        /** PointerDeviceEvent modifiers */
        modifiers?: (hbb.ControlKey[]|null);
    }

    /** Represents a PointerDeviceEvent. */
    class PointerDeviceEvent implements IPointerDeviceEvent {

        /**
         * Constructs a new PointerDeviceEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPointerDeviceEvent);

        /** PointerDeviceEvent touch_event. */
        public touch_event?: (hbb.ITouchEvent|null);

        /** PointerDeviceEvent modifiers. */
        public modifiers: hbb.ControlKey[];

        /** PointerDeviceEvent union. */
        public union?: "touch_event";

        /**
         * Creates a new PointerDeviceEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointerDeviceEvent instance
         */
        public static create(properties?: hbb.IPointerDeviceEvent): hbb.PointerDeviceEvent;

        /**
         * Encodes the specified PointerDeviceEvent message. Does not implicitly {@link hbb.PointerDeviceEvent.verify|verify} messages.
         * @param message PointerDeviceEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPointerDeviceEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointerDeviceEvent message, length delimited. Does not implicitly {@link hbb.PointerDeviceEvent.verify|verify} messages.
         * @param message PointerDeviceEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPointerDeviceEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointerDeviceEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointerDeviceEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PointerDeviceEvent;

        /**
         * Decodes a PointerDeviceEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointerDeviceEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PointerDeviceEvent;

        /**
         * Verifies a PointerDeviceEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PointerDeviceEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PointerDeviceEvent
         */
        public static fromObject(object: { [k: string]: any }): hbb.PointerDeviceEvent;

        /**
         * Creates a plain object from a PointerDeviceEvent message. Also converts values to other types if specified.
         * @param message PointerDeviceEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PointerDeviceEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PointerDeviceEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PointerDeviceEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MouseEvent. */
    interface IMouseEvent {

        /** MouseEvent mask */
        mask?: (number|null);

        /** MouseEvent x */
        x?: (number|null);

        /** MouseEvent y */
        y?: (number|null);

        /** MouseEvent modifiers */
        modifiers?: (hbb.ControlKey[]|null);
    }

    /** Represents a MouseEvent. */
    class MouseEvent implements IMouseEvent {

        /**
         * Constructs a new MouseEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IMouseEvent);

        /** MouseEvent mask. */
        public mask: number;

        /** MouseEvent x. */
        public x: number;

        /** MouseEvent y. */
        public y: number;

        /** MouseEvent modifiers. */
        public modifiers: hbb.ControlKey[];

        /**
         * Creates a new MouseEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MouseEvent instance
         */
        public static create(properties?: hbb.IMouseEvent): hbb.MouseEvent;

        /**
         * Encodes the specified MouseEvent message. Does not implicitly {@link hbb.MouseEvent.verify|verify} messages.
         * @param message MouseEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IMouseEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MouseEvent message, length delimited. Does not implicitly {@link hbb.MouseEvent.verify|verify} messages.
         * @param message MouseEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IMouseEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MouseEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MouseEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.MouseEvent;

        /**
         * Decodes a MouseEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MouseEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.MouseEvent;

        /**
         * Verifies a MouseEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MouseEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MouseEvent
         */
        public static fromObject(object: { [k: string]: any }): hbb.MouseEvent;

        /**
         * Creates a plain object from a MouseEvent message. Also converts values to other types if specified.
         * @param message MouseEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.MouseEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MouseEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MouseEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** KeyboardMode enum. */
    enum KeyboardMode {
        Legacy = 0,
        Map = 1,
        Translate = 2,
        Auto = 3
    }

    /** ControlKey enum. */
    enum ControlKey {
        Unknown = 0,
        Alt = 1,
        Backspace = 2,
        CapsLock = 3,
        Control = 4,
        Delete = 5,
        DownArrow = 6,
        End = 7,
        Escape = 8,
        F1 = 9,
        F10 = 10,
        F11 = 11,
        F12 = 12,
        F2 = 13,
        F3 = 14,
        F4 = 15,
        F5 = 16,
        F6 = 17,
        F7 = 18,
        F8 = 19,
        F9 = 20,
        Home = 21,
        LeftArrow = 22,
        Meta = 23,
        Option = 24,
        PageDown = 25,
        PageUp = 26,
        Return = 27,
        RightArrow = 28,
        Shift = 29,
        Space = 30,
        Tab = 31,
        UpArrow = 32,
        Numpad0 = 33,
        Numpad1 = 34,
        Numpad2 = 35,
        Numpad3 = 36,
        Numpad4 = 37,
        Numpad5 = 38,
        Numpad6 = 39,
        Numpad7 = 40,
        Numpad8 = 41,
        Numpad9 = 42,
        Cancel = 43,
        Clear = 44,
        Menu = 45,
        Pause = 46,
        Kana = 47,
        Hangul = 48,
        Junja = 49,
        Final = 50,
        Hanja = 51,
        Kanji = 52,
        Convert = 53,
        Select = 54,
        Print = 55,
        Execute = 56,
        Snapshot = 57,
        Insert = 58,
        Help = 59,
        Sleep = 60,
        Separator = 61,
        Scroll = 62,
        NumLock = 63,
        RWin = 64,
        Apps = 65,
        Multiply = 66,
        Add = 67,
        Subtract = 68,
        Decimal = 69,
        Divide = 70,
        Equals = 71,
        NumpadEnter = 72,
        RShift = 73,
        RControl = 74,
        RAlt = 75,
        VolumeMute = 76,
        VolumeUp = 77,
        VolumeDown = 78,
        Power = 79,
        CtrlAltDel = 100,
        LockScreen = 101
    }

    /** Properties of a KeyEvent. */
    interface IKeyEvent {

        /** KeyEvent down */
        down?: (boolean|null);

        /** KeyEvent press */
        press?: (boolean|null);

        /** KeyEvent control_key */
        control_key?: (hbb.ControlKey|null);

        /** KeyEvent chr */
        chr?: (number|null);

        /** KeyEvent unicode */
        unicode?: (number|null);

        /** KeyEvent seq */
        seq?: (string|null);

        /** KeyEvent win2win_hotkey */
        win2win_hotkey?: (number|null);

        /** KeyEvent modifiers */
        modifiers?: (hbb.ControlKey[]|null);

        /** KeyEvent mode */
        mode?: (hbb.KeyboardMode|null);
    }

    /** Represents a KeyEvent. */
    class KeyEvent implements IKeyEvent {

        /**
         * Constructs a new KeyEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IKeyEvent);

        /** KeyEvent down. */
        public down: boolean;

        /** KeyEvent press. */
        public press: boolean;

        /** KeyEvent control_key. */
        public control_key?: (hbb.ControlKey|null);

        /** KeyEvent chr. */
        public chr?: (number|null);

        /** KeyEvent unicode. */
        public unicode?: (number|null);

        /** KeyEvent seq. */
        public seq?: (string|null);

        /** KeyEvent win2win_hotkey. */
        public win2win_hotkey?: (number|null);

        /** KeyEvent modifiers. */
        public modifiers: hbb.ControlKey[];

        /** KeyEvent mode. */
        public mode: hbb.KeyboardMode;

        /** KeyEvent union. */
        public union?: ("control_key"|"chr"|"unicode"|"seq"|"win2win_hotkey");

        /**
         * Creates a new KeyEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyEvent instance
         */
        public static create(properties?: hbb.IKeyEvent): hbb.KeyEvent;

        /**
         * Encodes the specified KeyEvent message. Does not implicitly {@link hbb.KeyEvent.verify|verify} messages.
         * @param message KeyEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IKeyEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyEvent message, length delimited. Does not implicitly {@link hbb.KeyEvent.verify|verify} messages.
         * @param message KeyEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IKeyEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.KeyEvent;

        /**
         * Decodes a KeyEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.KeyEvent;

        /**
         * Verifies a KeyEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyEvent
         */
        public static fromObject(object: { [k: string]: any }): hbb.KeyEvent;

        /**
         * Creates a plain object from a KeyEvent message. Also converts values to other types if specified.
         * @param message KeyEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.KeyEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CursorData. */
    interface ICursorData {

        /** CursorData id */
        id?: (Long|null);

        /** CursorData hotx */
        hotx?: (number|null);

        /** CursorData hoty */
        hoty?: (number|null);

        /** CursorData width */
        width?: (number|null);

        /** CursorData height */
        height?: (number|null);

        /** CursorData colors */
        colors?: (Uint8Array|null);
    }

    /** Represents a CursorData. */
    class CursorData implements ICursorData {

        /**
         * Constructs a new CursorData.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICursorData);

        /** CursorData id. */
        public id: Long;

        /** CursorData hotx. */
        public hotx: number;

        /** CursorData hoty. */
        public hoty: number;

        /** CursorData width. */
        public width: number;

        /** CursorData height. */
        public height: number;

        /** CursorData colors. */
        public colors: Uint8Array;

        /**
         * Creates a new CursorData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CursorData instance
         */
        public static create(properties?: hbb.ICursorData): hbb.CursorData;

        /**
         * Encodes the specified CursorData message. Does not implicitly {@link hbb.CursorData.verify|verify} messages.
         * @param message CursorData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICursorData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CursorData message, length delimited. Does not implicitly {@link hbb.CursorData.verify|verify} messages.
         * @param message CursorData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICursorData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CursorData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CursorData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CursorData;

        /**
         * Decodes a CursorData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CursorData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CursorData;

        /**
         * Verifies a CursorData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CursorData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CursorData
         */
        public static fromObject(object: { [k: string]: any }): hbb.CursorData;

        /**
         * Creates a plain object from a CursorData message. Also converts values to other types if specified.
         * @param message CursorData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CursorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CursorData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CursorData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CursorPosition. */
    interface ICursorPosition {

        /** CursorPosition x */
        x?: (number|null);

        /** CursorPosition y */
        y?: (number|null);
    }

    /** Represents a CursorPosition. */
    class CursorPosition implements ICursorPosition {

        /**
         * Constructs a new CursorPosition.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICursorPosition);

        /** CursorPosition x. */
        public x: number;

        /** CursorPosition y. */
        public y: number;

        /**
         * Creates a new CursorPosition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CursorPosition instance
         */
        public static create(properties?: hbb.ICursorPosition): hbb.CursorPosition;

        /**
         * Encodes the specified CursorPosition message. Does not implicitly {@link hbb.CursorPosition.verify|verify} messages.
         * @param message CursorPosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICursorPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CursorPosition message, length delimited. Does not implicitly {@link hbb.CursorPosition.verify|verify} messages.
         * @param message CursorPosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICursorPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CursorPosition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CursorPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CursorPosition;

        /**
         * Decodes a CursorPosition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CursorPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CursorPosition;

        /**
         * Verifies a CursorPosition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CursorPosition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CursorPosition
         */
        public static fromObject(object: { [k: string]: any }): hbb.CursorPosition;

        /**
         * Creates a plain object from a CursorPosition message. Also converts values to other types if specified.
         * @param message CursorPosition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CursorPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CursorPosition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CursorPosition
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Hash. */
    interface IHash {

        /** Hash salt */
        salt?: (string|null);

        /** Hash challenge */
        challenge?: (string|null);
    }

    /** Represents a Hash. */
    class Hash implements IHash {

        /**
         * Constructs a new Hash.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IHash);

        /** Hash salt. */
        public salt: string;

        /** Hash challenge. */
        public challenge: string;

        /**
         * Creates a new Hash instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hash instance
         */
        public static create(properties?: hbb.IHash): hbb.Hash;

        /**
         * Encodes the specified Hash message. Does not implicitly {@link hbb.Hash.verify|verify} messages.
         * @param message Hash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hash message, length delimited. Does not implicitly {@link hbb.Hash.verify|verify} messages.
         * @param message Hash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hash message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Hash;

        /**
         * Decodes a Hash message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Hash;

        /**
         * Verifies a Hash message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hash message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hash
         */
        public static fromObject(object: { [k: string]: any }): hbb.Hash;

        /**
         * Creates a plain object from a Hash message. Also converts values to other types if specified.
         * @param message Hash
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Hash, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hash to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Hash
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ClipboardFormat enum. */
    enum ClipboardFormat {
        Text = 0,
        Rtf = 1,
        Html = 2,
        ImageRgba = 21,
        ImagePng = 22,
        ImageSvg = 23,
        Special = 31
    }

    /** Properties of a Clipboard. */
    interface IClipboard {

        /** Clipboard compress */
        compress?: (boolean|null);

        /** Clipboard content */
        content?: (Uint8Array|null);

        /** Clipboard width */
        width?: (number|null);

        /** Clipboard height */
        height?: (number|null);

        /** Clipboard format */
        format?: (hbb.ClipboardFormat|null);

        /** Clipboard special_name */
        special_name?: (string|null);
    }

    /** Represents a Clipboard. */
    class Clipboard implements IClipboard {

        /**
         * Constructs a new Clipboard.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IClipboard);

        /** Clipboard compress. */
        public compress: boolean;

        /** Clipboard content. */
        public content: Uint8Array;

        /** Clipboard width. */
        public width: number;

        /** Clipboard height. */
        public height: number;

        /** Clipboard format. */
        public format: hbb.ClipboardFormat;

        /** Clipboard special_name. */
        public special_name: string;

        /**
         * Creates a new Clipboard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Clipboard instance
         */
        public static create(properties?: hbb.IClipboard): hbb.Clipboard;

        /**
         * Encodes the specified Clipboard message. Does not implicitly {@link hbb.Clipboard.verify|verify} messages.
         * @param message Clipboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IClipboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Clipboard message, length delimited. Does not implicitly {@link hbb.Clipboard.verify|verify} messages.
         * @param message Clipboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IClipboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Clipboard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Clipboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Clipboard;

        /**
         * Decodes a Clipboard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Clipboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Clipboard;

        /**
         * Verifies a Clipboard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Clipboard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Clipboard
         */
        public static fromObject(object: { [k: string]: any }): hbb.Clipboard;

        /**
         * Creates a plain object from a Clipboard message. Also converts values to other types if specified.
         * @param message Clipboard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Clipboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Clipboard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Clipboard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MultiClipboards. */
    interface IMultiClipboards {

        /** MultiClipboards clipboards */
        clipboards?: (hbb.IClipboard[]|null);
    }

    /** Represents a MultiClipboards. */
    class MultiClipboards implements IMultiClipboards {

        /**
         * Constructs a new MultiClipboards.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IMultiClipboards);

        /** MultiClipboards clipboards. */
        public clipboards: hbb.IClipboard[];

        /**
         * Creates a new MultiClipboards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MultiClipboards instance
         */
        public static create(properties?: hbb.IMultiClipboards): hbb.MultiClipboards;

        /**
         * Encodes the specified MultiClipboards message. Does not implicitly {@link hbb.MultiClipboards.verify|verify} messages.
         * @param message MultiClipboards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IMultiClipboards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MultiClipboards message, length delimited. Does not implicitly {@link hbb.MultiClipboards.verify|verify} messages.
         * @param message MultiClipboards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IMultiClipboards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MultiClipboards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MultiClipboards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.MultiClipboards;

        /**
         * Decodes a MultiClipboards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MultiClipboards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.MultiClipboards;

        /**
         * Verifies a MultiClipboards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MultiClipboards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MultiClipboards
         */
        public static fromObject(object: { [k: string]: any }): hbb.MultiClipboards;

        /**
         * Creates a plain object from a MultiClipboards message. Also converts values to other types if specified.
         * @param message MultiClipboards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.MultiClipboards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MultiClipboards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MultiClipboards
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** FileType enum. */
    enum FileType {
        Dir = 0,
        DirLink = 2,
        DirDrive = 3,
        File = 4,
        FileLink = 5
    }

    /** Properties of a FileEntry. */
    interface IFileEntry {

        /** FileEntry entry_type */
        entry_type?: (hbb.FileType|null);

        /** FileEntry name */
        name?: (string|null);

        /** FileEntry is_hidden */
        is_hidden?: (boolean|null);

        /** FileEntry size */
        size?: (Long|null);

        /** FileEntry modified_time */
        modified_time?: (Long|null);
    }

    /** Represents a FileEntry. */
    class FileEntry implements IFileEntry {

        /**
         * Constructs a new FileEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileEntry);

        /** FileEntry entry_type. */
        public entry_type: hbb.FileType;

        /** FileEntry name. */
        public name: string;

        /** FileEntry is_hidden. */
        public is_hidden: boolean;

        /** FileEntry size. */
        public size: Long;

        /** FileEntry modified_time. */
        public modified_time: Long;

        /**
         * Creates a new FileEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileEntry instance
         */
        public static create(properties?: hbb.IFileEntry): hbb.FileEntry;

        /**
         * Encodes the specified FileEntry message. Does not implicitly {@link hbb.FileEntry.verify|verify} messages.
         * @param message FileEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileEntry message, length delimited. Does not implicitly {@link hbb.FileEntry.verify|verify} messages.
         * @param message FileEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileEntry;

        /**
         * Decodes a FileEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileEntry;

        /**
         * Verifies a FileEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileEntry
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileEntry;

        /**
         * Creates a plain object from a FileEntry message. Also converts values to other types if specified.
         * @param message FileEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileEntry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileDirectory. */
    interface IFileDirectory {

        /** FileDirectory id */
        id?: (number|null);

        /** FileDirectory path */
        path?: (string|null);

        /** FileDirectory entries */
        entries?: (hbb.IFileEntry[]|null);
    }

    /** Represents a FileDirectory. */
    class FileDirectory implements IFileDirectory {

        /**
         * Constructs a new FileDirectory.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileDirectory);

        /** FileDirectory id. */
        public id: number;

        /** FileDirectory path. */
        public path: string;

        /** FileDirectory entries. */
        public entries: hbb.IFileEntry[];

        /**
         * Creates a new FileDirectory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileDirectory instance
         */
        public static create(properties?: hbb.IFileDirectory): hbb.FileDirectory;

        /**
         * Encodes the specified FileDirectory message. Does not implicitly {@link hbb.FileDirectory.verify|verify} messages.
         * @param message FileDirectory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileDirectory message, length delimited. Does not implicitly {@link hbb.FileDirectory.verify|verify} messages.
         * @param message FileDirectory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileDirectory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileDirectory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileDirectory;

        /**
         * Decodes a FileDirectory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileDirectory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileDirectory;

        /**
         * Verifies a FileDirectory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileDirectory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileDirectory
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileDirectory;

        /**
         * Creates a plain object from a FileDirectory message. Also converts values to other types if specified.
         * @param message FileDirectory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileDirectory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileDirectory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadDir. */
    interface IReadDir {

        /** ReadDir path */
        path?: (string|null);

        /** ReadDir include_hidden */
        include_hidden?: (boolean|null);
    }

    /** Represents a ReadDir. */
    class ReadDir implements IReadDir {

        /**
         * Constructs a new ReadDir.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IReadDir);

        /** ReadDir path. */
        public path: string;

        /** ReadDir include_hidden. */
        public include_hidden: boolean;

        /**
         * Creates a new ReadDir instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadDir instance
         */
        public static create(properties?: hbb.IReadDir): hbb.ReadDir;

        /**
         * Encodes the specified ReadDir message. Does not implicitly {@link hbb.ReadDir.verify|verify} messages.
         * @param message ReadDir message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IReadDir, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadDir message, length delimited. Does not implicitly {@link hbb.ReadDir.verify|verify} messages.
         * @param message ReadDir message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IReadDir, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadDir message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ReadDir;

        /**
         * Decodes a ReadDir message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ReadDir;

        /**
         * Verifies a ReadDir message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadDir message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadDir
         */
        public static fromObject(object: { [k: string]: any }): hbb.ReadDir;

        /**
         * Creates a plain object from a ReadDir message. Also converts values to other types if specified.
         * @param message ReadDir
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ReadDir, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadDir to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadDir
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadEmptyDirs. */
    interface IReadEmptyDirs {

        /** ReadEmptyDirs path */
        path?: (string|null);

        /** ReadEmptyDirs include_hidden */
        include_hidden?: (boolean|null);
    }

    /** Represents a ReadEmptyDirs. */
    class ReadEmptyDirs implements IReadEmptyDirs {

        /**
         * Constructs a new ReadEmptyDirs.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IReadEmptyDirs);

        /** ReadEmptyDirs path. */
        public path: string;

        /** ReadEmptyDirs include_hidden. */
        public include_hidden: boolean;

        /**
         * Creates a new ReadEmptyDirs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadEmptyDirs instance
         */
        public static create(properties?: hbb.IReadEmptyDirs): hbb.ReadEmptyDirs;

        /**
         * Encodes the specified ReadEmptyDirs message. Does not implicitly {@link hbb.ReadEmptyDirs.verify|verify} messages.
         * @param message ReadEmptyDirs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IReadEmptyDirs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadEmptyDirs message, length delimited. Does not implicitly {@link hbb.ReadEmptyDirs.verify|verify} messages.
         * @param message ReadEmptyDirs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IReadEmptyDirs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadEmptyDirs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadEmptyDirs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ReadEmptyDirs;

        /**
         * Decodes a ReadEmptyDirs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadEmptyDirs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ReadEmptyDirs;

        /**
         * Verifies a ReadEmptyDirs message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadEmptyDirs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadEmptyDirs
         */
        public static fromObject(object: { [k: string]: any }): hbb.ReadEmptyDirs;

        /**
         * Creates a plain object from a ReadEmptyDirs message. Also converts values to other types if specified.
         * @param message ReadEmptyDirs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ReadEmptyDirs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadEmptyDirs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadEmptyDirs
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadEmptyDirsResponse. */
    interface IReadEmptyDirsResponse {

        /** ReadEmptyDirsResponse path */
        path?: (string|null);

        /** ReadEmptyDirsResponse empty_dirs */
        empty_dirs?: (hbb.IFileDirectory[]|null);
    }

    /** Represents a ReadEmptyDirsResponse. */
    class ReadEmptyDirsResponse implements IReadEmptyDirsResponse {

        /**
         * Constructs a new ReadEmptyDirsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IReadEmptyDirsResponse);

        /** ReadEmptyDirsResponse path. */
        public path: string;

        /** ReadEmptyDirsResponse empty_dirs. */
        public empty_dirs: hbb.IFileDirectory[];

        /**
         * Creates a new ReadEmptyDirsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadEmptyDirsResponse instance
         */
        public static create(properties?: hbb.IReadEmptyDirsResponse): hbb.ReadEmptyDirsResponse;

        /**
         * Encodes the specified ReadEmptyDirsResponse message. Does not implicitly {@link hbb.ReadEmptyDirsResponse.verify|verify} messages.
         * @param message ReadEmptyDirsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IReadEmptyDirsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadEmptyDirsResponse message, length delimited. Does not implicitly {@link hbb.ReadEmptyDirsResponse.verify|verify} messages.
         * @param message ReadEmptyDirsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IReadEmptyDirsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadEmptyDirsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadEmptyDirsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ReadEmptyDirsResponse;

        /**
         * Decodes a ReadEmptyDirsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadEmptyDirsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ReadEmptyDirsResponse;

        /**
         * Verifies a ReadEmptyDirsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadEmptyDirsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadEmptyDirsResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.ReadEmptyDirsResponse;

        /**
         * Creates a plain object from a ReadEmptyDirsResponse message. Also converts values to other types if specified.
         * @param message ReadEmptyDirsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ReadEmptyDirsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadEmptyDirsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadEmptyDirsResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadAllFiles. */
    interface IReadAllFiles {

        /** ReadAllFiles id */
        id?: (number|null);

        /** ReadAllFiles path */
        path?: (string|null);

        /** ReadAllFiles include_hidden */
        include_hidden?: (boolean|null);
    }

    /** Represents a ReadAllFiles. */
    class ReadAllFiles implements IReadAllFiles {

        /**
         * Constructs a new ReadAllFiles.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IReadAllFiles);

        /** ReadAllFiles id. */
        public id: number;

        /** ReadAllFiles path. */
        public path: string;

        /** ReadAllFiles include_hidden. */
        public include_hidden: boolean;

        /**
         * Creates a new ReadAllFiles instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadAllFiles instance
         */
        public static create(properties?: hbb.IReadAllFiles): hbb.ReadAllFiles;

        /**
         * Encodes the specified ReadAllFiles message. Does not implicitly {@link hbb.ReadAllFiles.verify|verify} messages.
         * @param message ReadAllFiles message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IReadAllFiles, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadAllFiles message, length delimited. Does not implicitly {@link hbb.ReadAllFiles.verify|verify} messages.
         * @param message ReadAllFiles message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IReadAllFiles, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadAllFiles message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadAllFiles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ReadAllFiles;

        /**
         * Decodes a ReadAllFiles message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadAllFiles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ReadAllFiles;

        /**
         * Verifies a ReadAllFiles message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadAllFiles message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadAllFiles
         */
        public static fromObject(object: { [k: string]: any }): hbb.ReadAllFiles;

        /**
         * Creates a plain object from a ReadAllFiles message. Also converts values to other types if specified.
         * @param message ReadAllFiles
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ReadAllFiles, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadAllFiles to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadAllFiles
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileRename. */
    interface IFileRename {

        /** FileRename id */
        id?: (number|null);

        /** FileRename path */
        path?: (string|null);

        /** FileRename new_name */
        new_name?: (string|null);
    }

    /** Represents a FileRename. */
    class FileRename implements IFileRename {

        /**
         * Constructs a new FileRename.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileRename);

        /** FileRename id. */
        public id: number;

        /** FileRename path. */
        public path: string;

        /** FileRename new_name. */
        public new_name: string;

        /**
         * Creates a new FileRename instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileRename instance
         */
        public static create(properties?: hbb.IFileRename): hbb.FileRename;

        /**
         * Encodes the specified FileRename message. Does not implicitly {@link hbb.FileRename.verify|verify} messages.
         * @param message FileRename message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileRename, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileRename message, length delimited. Does not implicitly {@link hbb.FileRename.verify|verify} messages.
         * @param message FileRename message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileRename, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileRename message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileRename
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileRename;

        /**
         * Decodes a FileRename message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileRename
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileRename;

        /**
         * Verifies a FileRename message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileRename message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileRename
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileRename;

        /**
         * Creates a plain object from a FileRename message. Also converts values to other types if specified.
         * @param message FileRename
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileRename, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileRename to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileRename
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileAction. */
    interface IFileAction {

        /** FileAction read_dir */
        read_dir?: (hbb.IReadDir|null);

        /** FileAction send */
        send?: (hbb.IFileTransferSendRequest|null);

        /** FileAction receive */
        receive?: (hbb.IFileTransferReceiveRequest|null);

        /** FileAction create */
        create?: (hbb.IFileDirCreate|null);

        /** FileAction remove_dir */
        remove_dir?: (hbb.IFileRemoveDir|null);

        /** FileAction remove_file */
        remove_file?: (hbb.IFileRemoveFile|null);

        /** FileAction all_files */
        all_files?: (hbb.IReadAllFiles|null);

        /** FileAction cancel */
        cancel?: (hbb.IFileTransferCancel|null);

        /** FileAction send_confirm */
        send_confirm?: (hbb.IFileTransferSendConfirmRequest|null);

        /** FileAction rename */
        rename?: (hbb.IFileRename|null);

        /** FileAction read_empty_dirs */
        read_empty_dirs?: (hbb.IReadEmptyDirs|null);
    }

    /** Represents a FileAction. */
    class FileAction implements IFileAction {

        /**
         * Constructs a new FileAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileAction);

        /** FileAction read_dir. */
        public read_dir?: (hbb.IReadDir|null);

        /** FileAction send. */
        public send?: (hbb.IFileTransferSendRequest|null);

        /** FileAction receive. */
        public receive?: (hbb.IFileTransferReceiveRequest|null);

        /** FileAction create. */
        public create?: (hbb.IFileDirCreate|null);

        /** FileAction remove_dir. */
        public remove_dir?: (hbb.IFileRemoveDir|null);

        /** FileAction remove_file. */
        public remove_file?: (hbb.IFileRemoveFile|null);

        /** FileAction all_files. */
        public all_files?: (hbb.IReadAllFiles|null);

        /** FileAction cancel. */
        public cancel?: (hbb.IFileTransferCancel|null);

        /** FileAction send_confirm. */
        public send_confirm?: (hbb.IFileTransferSendConfirmRequest|null);

        /** FileAction rename. */
        public rename?: (hbb.IFileRename|null);

        /** FileAction read_empty_dirs. */
        public read_empty_dirs?: (hbb.IReadEmptyDirs|null);

        /** FileAction union. */
        public union?: ("read_dir"|"send"|"receive"|"create"|"remove_dir"|"remove_file"|"all_files"|"cancel"|"send_confirm"|"rename"|"read_empty_dirs");

        /**
         * Creates a new FileAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileAction instance
         */
        public static create(properties?: hbb.IFileAction): hbb.FileAction;

        /**
         * Encodes the specified FileAction message. Does not implicitly {@link hbb.FileAction.verify|verify} messages.
         * @param message FileAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileAction message, length delimited. Does not implicitly {@link hbb.FileAction.verify|verify} messages.
         * @param message FileAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileAction;

        /**
         * Decodes a FileAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileAction;

        /**
         * Verifies a FileAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileAction
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileAction;

        /**
         * Creates a plain object from a FileAction message. Also converts values to other types if specified.
         * @param message FileAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileTransferCancel. */
    interface IFileTransferCancel {

        /** FileTransferCancel id */
        id?: (number|null);
    }

    /** Represents a FileTransferCancel. */
    class FileTransferCancel implements IFileTransferCancel {

        /**
         * Constructs a new FileTransferCancel.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransferCancel);

        /** FileTransferCancel id. */
        public id: number;

        /**
         * Creates a new FileTransferCancel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransferCancel instance
         */
        public static create(properties?: hbb.IFileTransferCancel): hbb.FileTransferCancel;

        /**
         * Encodes the specified FileTransferCancel message. Does not implicitly {@link hbb.FileTransferCancel.verify|verify} messages.
         * @param message FileTransferCancel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransferCancel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransferCancel message, length delimited. Does not implicitly {@link hbb.FileTransferCancel.verify|verify} messages.
         * @param message FileTransferCancel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransferCancel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransferCancel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransferCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransferCancel;

        /**
         * Decodes a FileTransferCancel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransferCancel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransferCancel;

        /**
         * Verifies a FileTransferCancel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransferCancel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransferCancel
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransferCancel;

        /**
         * Creates a plain object from a FileTransferCancel message. Also converts values to other types if specified.
         * @param message FileTransferCancel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransferCancel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransferCancel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransferCancel
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileResponse. */
    interface IFileResponse {

        /** FileResponse dir */
        dir?: (hbb.IFileDirectory|null);

        /** FileResponse block */
        block?: (hbb.IFileTransferBlock|null);

        /** FileResponse error */
        error?: (hbb.IFileTransferError|null);

        /** FileResponse done */
        done?: (hbb.IFileTransferDone|null);

        /** FileResponse digest */
        digest?: (hbb.IFileTransferDigest|null);

        /** FileResponse empty_dirs */
        empty_dirs?: (hbb.IReadEmptyDirsResponse|null);
    }

    /** Represents a FileResponse. */
    class FileResponse implements IFileResponse {

        /**
         * Constructs a new FileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileResponse);

        /** FileResponse dir. */
        public dir?: (hbb.IFileDirectory|null);

        /** FileResponse block. */
        public block?: (hbb.IFileTransferBlock|null);

        /** FileResponse error. */
        public error?: (hbb.IFileTransferError|null);

        /** FileResponse done. */
        public done?: (hbb.IFileTransferDone|null);

        /** FileResponse digest. */
        public digest?: (hbb.IFileTransferDigest|null);

        /** FileResponse empty_dirs. */
        public empty_dirs?: (hbb.IReadEmptyDirsResponse|null);

        /** FileResponse union. */
        public union?: ("dir"|"block"|"error"|"done"|"digest"|"empty_dirs");

        /**
         * Creates a new FileResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileResponse instance
         */
        public static create(properties?: hbb.IFileResponse): hbb.FileResponse;

        /**
         * Encodes the specified FileResponse message. Does not implicitly {@link hbb.FileResponse.verify|verify} messages.
         * @param message FileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileResponse message, length delimited. Does not implicitly {@link hbb.FileResponse.verify|verify} messages.
         * @param message FileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileResponse;

        /**
         * Decodes a FileResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileResponse;

        /**
         * Verifies a FileResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileResponse;

        /**
         * Creates a plain object from a FileResponse message. Also converts values to other types if specified.
         * @param message FileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileTransferDigest. */
    interface IFileTransferDigest {

        /** FileTransferDigest id */
        id?: (number|null);

        /** FileTransferDigest file_num */
        file_num?: (number|null);

        /** FileTransferDigest last_modified */
        last_modified?: (Long|null);

        /** FileTransferDigest file_size */
        file_size?: (Long|null);

        /** FileTransferDigest is_upload */
        is_upload?: (boolean|null);

        /** FileTransferDigest is_identical */
        is_identical?: (boolean|null);

        /** FileTransferDigest transferred_size */
        transferred_size?: (Long|null);

        /** FileTransferDigest is_resume */
        is_resume?: (boolean|null);
    }

    /** Represents a FileTransferDigest. */
    class FileTransferDigest implements IFileTransferDigest {

        /**
         * Constructs a new FileTransferDigest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransferDigest);

        /** FileTransferDigest id. */
        public id: number;

        /** FileTransferDigest file_num. */
        public file_num: number;

        /** FileTransferDigest last_modified. */
        public last_modified: Long;

        /** FileTransferDigest file_size. */
        public file_size: Long;

        /** FileTransferDigest is_upload. */
        public is_upload: boolean;

        /** FileTransferDigest is_identical. */
        public is_identical: boolean;

        /** FileTransferDigest transferred_size. */
        public transferred_size: Long;

        /** FileTransferDigest is_resume. */
        public is_resume: boolean;

        /**
         * Creates a new FileTransferDigest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransferDigest instance
         */
        public static create(properties?: hbb.IFileTransferDigest): hbb.FileTransferDigest;

        /**
         * Encodes the specified FileTransferDigest message. Does not implicitly {@link hbb.FileTransferDigest.verify|verify} messages.
         * @param message FileTransferDigest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransferDigest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransferDigest message, length delimited. Does not implicitly {@link hbb.FileTransferDigest.verify|verify} messages.
         * @param message FileTransferDigest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransferDigest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransferDigest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransferDigest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransferDigest;

        /**
         * Decodes a FileTransferDigest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransferDigest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransferDigest;

        /**
         * Verifies a FileTransferDigest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransferDigest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransferDigest
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransferDigest;

        /**
         * Creates a plain object from a FileTransferDigest message. Also converts values to other types if specified.
         * @param message FileTransferDigest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransferDigest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransferDigest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransferDigest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileTransferBlock. */
    interface IFileTransferBlock {

        /** FileTransferBlock id */
        id?: (number|null);

        /** FileTransferBlock file_num */
        file_num?: (number|null);

        /** FileTransferBlock data */
        data?: (Uint8Array|null);

        /** FileTransferBlock compressed */
        compressed?: (boolean|null);

        /** FileTransferBlock blk_id */
        blk_id?: (number|null);
    }

    /** Represents a FileTransferBlock. */
    class FileTransferBlock implements IFileTransferBlock {

        /**
         * Constructs a new FileTransferBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransferBlock);

        /** FileTransferBlock id. */
        public id: number;

        /** FileTransferBlock file_num. */
        public file_num: number;

        /** FileTransferBlock data. */
        public data: Uint8Array;

        /** FileTransferBlock compressed. */
        public compressed: boolean;

        /** FileTransferBlock blk_id. */
        public blk_id: number;

        /**
         * Creates a new FileTransferBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransferBlock instance
         */
        public static create(properties?: hbb.IFileTransferBlock): hbb.FileTransferBlock;

        /**
         * Encodes the specified FileTransferBlock message. Does not implicitly {@link hbb.FileTransferBlock.verify|verify} messages.
         * @param message FileTransferBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransferBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransferBlock message, length delimited. Does not implicitly {@link hbb.FileTransferBlock.verify|verify} messages.
         * @param message FileTransferBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransferBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransferBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransferBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransferBlock;

        /**
         * Decodes a FileTransferBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransferBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransferBlock;

        /**
         * Verifies a FileTransferBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransferBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransferBlock
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransferBlock;

        /**
         * Creates a plain object from a FileTransferBlock message. Also converts values to other types if specified.
         * @param message FileTransferBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransferBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransferBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransferBlock
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileTransferError. */
    interface IFileTransferError {

        /** FileTransferError id */
        id?: (number|null);

        /** FileTransferError error */
        error?: (string|null);

        /** FileTransferError file_num */
        file_num?: (number|null);
    }

    /** Represents a FileTransferError. */
    class FileTransferError implements IFileTransferError {

        /**
         * Constructs a new FileTransferError.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransferError);

        /** FileTransferError id. */
        public id: number;

        /** FileTransferError error. */
        public error: string;

        /** FileTransferError file_num. */
        public file_num: number;

        /**
         * Creates a new FileTransferError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransferError instance
         */
        public static create(properties?: hbb.IFileTransferError): hbb.FileTransferError;

        /**
         * Encodes the specified FileTransferError message. Does not implicitly {@link hbb.FileTransferError.verify|verify} messages.
         * @param message FileTransferError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransferError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransferError message, length delimited. Does not implicitly {@link hbb.FileTransferError.verify|verify} messages.
         * @param message FileTransferError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransferError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransferError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransferError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransferError;

        /**
         * Decodes a FileTransferError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransferError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransferError;

        /**
         * Verifies a FileTransferError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransferError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransferError
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransferError;

        /**
         * Creates a plain object from a FileTransferError message. Also converts values to other types if specified.
         * @param message FileTransferError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransferError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransferError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransferError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileTransferSendRequest. */
    interface IFileTransferSendRequest {

        /** FileTransferSendRequest id */
        id?: (number|null);

        /** FileTransferSendRequest path */
        path?: (string|null);

        /** FileTransferSendRequest include_hidden */
        include_hidden?: (boolean|null);

        /** FileTransferSendRequest file_num */
        file_num?: (number|null);

        /** FileTransferSendRequest file_type */
        file_type?: (hbb.FileTransferSendRequest.FileType|null);
    }

    /** Represents a FileTransferSendRequest. */
    class FileTransferSendRequest implements IFileTransferSendRequest {

        /**
         * Constructs a new FileTransferSendRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransferSendRequest);

        /** FileTransferSendRequest id. */
        public id: number;

        /** FileTransferSendRequest path. */
        public path: string;

        /** FileTransferSendRequest include_hidden. */
        public include_hidden: boolean;

        /** FileTransferSendRequest file_num. */
        public file_num: number;

        /** FileTransferSendRequest file_type. */
        public file_type: hbb.FileTransferSendRequest.FileType;

        /**
         * Creates a new FileTransferSendRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransferSendRequest instance
         */
        public static create(properties?: hbb.IFileTransferSendRequest): hbb.FileTransferSendRequest;

        /**
         * Encodes the specified FileTransferSendRequest message. Does not implicitly {@link hbb.FileTransferSendRequest.verify|verify} messages.
         * @param message FileTransferSendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransferSendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransferSendRequest message, length delimited. Does not implicitly {@link hbb.FileTransferSendRequest.verify|verify} messages.
         * @param message FileTransferSendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransferSendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransferSendRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransferSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransferSendRequest;

        /**
         * Decodes a FileTransferSendRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransferSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransferSendRequest;

        /**
         * Verifies a FileTransferSendRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransferSendRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransferSendRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransferSendRequest;

        /**
         * Creates a plain object from a FileTransferSendRequest message. Also converts values to other types if specified.
         * @param message FileTransferSendRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransferSendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransferSendRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransferSendRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileTransferSendRequest {

        /** FileType enum. */
        enum FileType {
            Generic = 0,
            Printer = 1
        }
    }

    /** Properties of a FileTransferSendConfirmRequest. */
    interface IFileTransferSendConfirmRequest {

        /** FileTransferSendConfirmRequest id */
        id?: (number|null);

        /** FileTransferSendConfirmRequest file_num */
        file_num?: (number|null);

        /** FileTransferSendConfirmRequest skip */
        skip?: (boolean|null);

        /** FileTransferSendConfirmRequest offset_blk */
        offset_blk?: (number|null);
    }

    /** Represents a FileTransferSendConfirmRequest. */
    class FileTransferSendConfirmRequest implements IFileTransferSendConfirmRequest {

        /**
         * Constructs a new FileTransferSendConfirmRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransferSendConfirmRequest);

        /** FileTransferSendConfirmRequest id. */
        public id: number;

        /** FileTransferSendConfirmRequest file_num. */
        public file_num: number;

        /** FileTransferSendConfirmRequest skip. */
        public skip?: (boolean|null);

        /** FileTransferSendConfirmRequest offset_blk. */
        public offset_blk?: (number|null);

        /** FileTransferSendConfirmRequest union. */
        public union?: ("skip"|"offset_blk");

        /**
         * Creates a new FileTransferSendConfirmRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransferSendConfirmRequest instance
         */
        public static create(properties?: hbb.IFileTransferSendConfirmRequest): hbb.FileTransferSendConfirmRequest;

        /**
         * Encodes the specified FileTransferSendConfirmRequest message. Does not implicitly {@link hbb.FileTransferSendConfirmRequest.verify|verify} messages.
         * @param message FileTransferSendConfirmRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransferSendConfirmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransferSendConfirmRequest message, length delimited. Does not implicitly {@link hbb.FileTransferSendConfirmRequest.verify|verify} messages.
         * @param message FileTransferSendConfirmRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransferSendConfirmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransferSendConfirmRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransferSendConfirmRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransferSendConfirmRequest;

        /**
         * Decodes a FileTransferSendConfirmRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransferSendConfirmRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransferSendConfirmRequest;

        /**
         * Verifies a FileTransferSendConfirmRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransferSendConfirmRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransferSendConfirmRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransferSendConfirmRequest;

        /**
         * Creates a plain object from a FileTransferSendConfirmRequest message. Also converts values to other types if specified.
         * @param message FileTransferSendConfirmRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransferSendConfirmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransferSendConfirmRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransferSendConfirmRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileTransferDone. */
    interface IFileTransferDone {

        /** FileTransferDone id */
        id?: (number|null);

        /** FileTransferDone file_num */
        file_num?: (number|null);
    }

    /** Represents a FileTransferDone. */
    class FileTransferDone implements IFileTransferDone {

        /**
         * Constructs a new FileTransferDone.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransferDone);

        /** FileTransferDone id. */
        public id: number;

        /** FileTransferDone file_num. */
        public file_num: number;

        /**
         * Creates a new FileTransferDone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransferDone instance
         */
        public static create(properties?: hbb.IFileTransferDone): hbb.FileTransferDone;

        /**
         * Encodes the specified FileTransferDone message. Does not implicitly {@link hbb.FileTransferDone.verify|verify} messages.
         * @param message FileTransferDone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransferDone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransferDone message, length delimited. Does not implicitly {@link hbb.FileTransferDone.verify|verify} messages.
         * @param message FileTransferDone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransferDone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransferDone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransferDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransferDone;

        /**
         * Decodes a FileTransferDone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransferDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransferDone;

        /**
         * Verifies a FileTransferDone message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransferDone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransferDone
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransferDone;

        /**
         * Creates a plain object from a FileTransferDone message. Also converts values to other types if specified.
         * @param message FileTransferDone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransferDone, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransferDone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransferDone
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileTransferReceiveRequest. */
    interface IFileTransferReceiveRequest {

        /** FileTransferReceiveRequest id */
        id?: (number|null);

        /** FileTransferReceiveRequest path */
        path?: (string|null);

        /** FileTransferReceiveRequest files */
        files?: (hbb.IFileEntry[]|null);

        /** FileTransferReceiveRequest file_num */
        file_num?: (number|null);

        /** FileTransferReceiveRequest total_size */
        total_size?: (Long|null);
    }

    /** Represents a FileTransferReceiveRequest. */
    class FileTransferReceiveRequest implements IFileTransferReceiveRequest {

        /**
         * Constructs a new FileTransferReceiveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileTransferReceiveRequest);

        /** FileTransferReceiveRequest id. */
        public id: number;

        /** FileTransferReceiveRequest path. */
        public path: string;

        /** FileTransferReceiveRequest files. */
        public files: hbb.IFileEntry[];

        /** FileTransferReceiveRequest file_num. */
        public file_num: number;

        /** FileTransferReceiveRequest total_size. */
        public total_size: Long;

        /**
         * Creates a new FileTransferReceiveRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileTransferReceiveRequest instance
         */
        public static create(properties?: hbb.IFileTransferReceiveRequest): hbb.FileTransferReceiveRequest;

        /**
         * Encodes the specified FileTransferReceiveRequest message. Does not implicitly {@link hbb.FileTransferReceiveRequest.verify|verify} messages.
         * @param message FileTransferReceiveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileTransferReceiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileTransferReceiveRequest message, length delimited. Does not implicitly {@link hbb.FileTransferReceiveRequest.verify|verify} messages.
         * @param message FileTransferReceiveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileTransferReceiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileTransferReceiveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileTransferReceiveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileTransferReceiveRequest;

        /**
         * Decodes a FileTransferReceiveRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileTransferReceiveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileTransferReceiveRequest;

        /**
         * Verifies a FileTransferReceiveRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileTransferReceiveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileTransferReceiveRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileTransferReceiveRequest;

        /**
         * Creates a plain object from a FileTransferReceiveRequest message. Also converts values to other types if specified.
         * @param message FileTransferReceiveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileTransferReceiveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileTransferReceiveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileTransferReceiveRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileRemoveDir. */
    interface IFileRemoveDir {

        /** FileRemoveDir id */
        id?: (number|null);

        /** FileRemoveDir path */
        path?: (string|null);

        /** FileRemoveDir recursive */
        recursive?: (boolean|null);
    }

    /** Represents a FileRemoveDir. */
    class FileRemoveDir implements IFileRemoveDir {

        /**
         * Constructs a new FileRemoveDir.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileRemoveDir);

        /** FileRemoveDir id. */
        public id: number;

        /** FileRemoveDir path. */
        public path: string;

        /** FileRemoveDir recursive. */
        public recursive: boolean;

        /**
         * Creates a new FileRemoveDir instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileRemoveDir instance
         */
        public static create(properties?: hbb.IFileRemoveDir): hbb.FileRemoveDir;

        /**
         * Encodes the specified FileRemoveDir message. Does not implicitly {@link hbb.FileRemoveDir.verify|verify} messages.
         * @param message FileRemoveDir message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileRemoveDir, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileRemoveDir message, length delimited. Does not implicitly {@link hbb.FileRemoveDir.verify|verify} messages.
         * @param message FileRemoveDir message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileRemoveDir, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileRemoveDir message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileRemoveDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileRemoveDir;

        /**
         * Decodes a FileRemoveDir message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileRemoveDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileRemoveDir;

        /**
         * Verifies a FileRemoveDir message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileRemoveDir message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileRemoveDir
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileRemoveDir;

        /**
         * Creates a plain object from a FileRemoveDir message. Also converts values to other types if specified.
         * @param message FileRemoveDir
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileRemoveDir, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileRemoveDir to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileRemoveDir
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileRemoveFile. */
    interface IFileRemoveFile {

        /** FileRemoveFile id */
        id?: (number|null);

        /** FileRemoveFile path */
        path?: (string|null);

        /** FileRemoveFile file_num */
        file_num?: (number|null);
    }

    /** Represents a FileRemoveFile. */
    class FileRemoveFile implements IFileRemoveFile {

        /**
         * Constructs a new FileRemoveFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileRemoveFile);

        /** FileRemoveFile id. */
        public id: number;

        /** FileRemoveFile path. */
        public path: string;

        /** FileRemoveFile file_num. */
        public file_num: number;

        /**
         * Creates a new FileRemoveFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileRemoveFile instance
         */
        public static create(properties?: hbb.IFileRemoveFile): hbb.FileRemoveFile;

        /**
         * Encodes the specified FileRemoveFile message. Does not implicitly {@link hbb.FileRemoveFile.verify|verify} messages.
         * @param message FileRemoveFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileRemoveFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileRemoveFile message, length delimited. Does not implicitly {@link hbb.FileRemoveFile.verify|verify} messages.
         * @param message FileRemoveFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileRemoveFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileRemoveFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileRemoveFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileRemoveFile;

        /**
         * Decodes a FileRemoveFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileRemoveFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileRemoveFile;

        /**
         * Verifies a FileRemoveFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileRemoveFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileRemoveFile
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileRemoveFile;

        /**
         * Creates a plain object from a FileRemoveFile message. Also converts values to other types if specified.
         * @param message FileRemoveFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileRemoveFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileRemoveFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileRemoveFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileDirCreate. */
    interface IFileDirCreate {

        /** FileDirCreate id */
        id?: (number|null);

        /** FileDirCreate path */
        path?: (string|null);
    }

    /** Represents a FileDirCreate. */
    class FileDirCreate implements IFileDirCreate {

        /**
         * Constructs a new FileDirCreate.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFileDirCreate);

        /** FileDirCreate id. */
        public id: number;

        /** FileDirCreate path. */
        public path: string;

        /**
         * Creates a new FileDirCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileDirCreate instance
         */
        public static create(properties?: hbb.IFileDirCreate): hbb.FileDirCreate;

        /**
         * Encodes the specified FileDirCreate message. Does not implicitly {@link hbb.FileDirCreate.verify|verify} messages.
         * @param message FileDirCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFileDirCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileDirCreate message, length delimited. Does not implicitly {@link hbb.FileDirCreate.verify|verify} messages.
         * @param message FileDirCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFileDirCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileDirCreate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileDirCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FileDirCreate;

        /**
         * Decodes a FileDirCreate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileDirCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FileDirCreate;

        /**
         * Verifies a FileDirCreate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileDirCreate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileDirCreate
         */
        public static fromObject(object: { [k: string]: any }): hbb.FileDirCreate;

        /**
         * Creates a plain object from a FileDirCreate message. Also converts values to other types if specified.
         * @param message FileDirCreate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FileDirCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileDirCreate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileDirCreate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrMonitorReady. */
    interface ICliprdrMonitorReady {
    }

    /** Represents a CliprdrMonitorReady. */
    class CliprdrMonitorReady implements ICliprdrMonitorReady {

        /**
         * Constructs a new CliprdrMonitorReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrMonitorReady);

        /**
         * Creates a new CliprdrMonitorReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrMonitorReady instance
         */
        public static create(properties?: hbb.ICliprdrMonitorReady): hbb.CliprdrMonitorReady;

        /**
         * Encodes the specified CliprdrMonitorReady message. Does not implicitly {@link hbb.CliprdrMonitorReady.verify|verify} messages.
         * @param message CliprdrMonitorReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrMonitorReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrMonitorReady message, length delimited. Does not implicitly {@link hbb.CliprdrMonitorReady.verify|verify} messages.
         * @param message CliprdrMonitorReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrMonitorReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrMonitorReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrMonitorReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrMonitorReady;

        /**
         * Decodes a CliprdrMonitorReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrMonitorReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrMonitorReady;

        /**
         * Verifies a CliprdrMonitorReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrMonitorReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrMonitorReady
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrMonitorReady;

        /**
         * Creates a plain object from a CliprdrMonitorReady message. Also converts values to other types if specified.
         * @param message CliprdrMonitorReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrMonitorReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrMonitorReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrMonitorReady
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrFormat. */
    interface ICliprdrFormat {

        /** CliprdrFormat id */
        id?: (number|null);

        /** CliprdrFormat format */
        format?: (string|null);
    }

    /** Represents a CliprdrFormat. */
    class CliprdrFormat implements ICliprdrFormat {

        /**
         * Constructs a new CliprdrFormat.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrFormat);

        /** CliprdrFormat id. */
        public id: number;

        /** CliprdrFormat format. */
        public format: string;

        /**
         * Creates a new CliprdrFormat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrFormat instance
         */
        public static create(properties?: hbb.ICliprdrFormat): hbb.CliprdrFormat;

        /**
         * Encodes the specified CliprdrFormat message. Does not implicitly {@link hbb.CliprdrFormat.verify|verify} messages.
         * @param message CliprdrFormat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrFormat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrFormat message, length delimited. Does not implicitly {@link hbb.CliprdrFormat.verify|verify} messages.
         * @param message CliprdrFormat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrFormat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrFormat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrFormat;

        /**
         * Decodes a CliprdrFormat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrFormat;

        /**
         * Verifies a CliprdrFormat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrFormat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrFormat
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrFormat;

        /**
         * Creates a plain object from a CliprdrFormat message. Also converts values to other types if specified.
         * @param message CliprdrFormat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrFormat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrFormat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrServerFormatList. */
    interface ICliprdrServerFormatList {

        /** CliprdrServerFormatList formats */
        formats?: (hbb.ICliprdrFormat[]|null);
    }

    /** Represents a CliprdrServerFormatList. */
    class CliprdrServerFormatList implements ICliprdrServerFormatList {

        /**
         * Constructs a new CliprdrServerFormatList.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrServerFormatList);

        /** CliprdrServerFormatList formats. */
        public formats: hbb.ICliprdrFormat[];

        /**
         * Creates a new CliprdrServerFormatList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrServerFormatList instance
         */
        public static create(properties?: hbb.ICliprdrServerFormatList): hbb.CliprdrServerFormatList;

        /**
         * Encodes the specified CliprdrServerFormatList message. Does not implicitly {@link hbb.CliprdrServerFormatList.verify|verify} messages.
         * @param message CliprdrServerFormatList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrServerFormatList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrServerFormatList message, length delimited. Does not implicitly {@link hbb.CliprdrServerFormatList.verify|verify} messages.
         * @param message CliprdrServerFormatList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrServerFormatList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrServerFormatList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrServerFormatList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrServerFormatList;

        /**
         * Decodes a CliprdrServerFormatList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrServerFormatList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrServerFormatList;

        /**
         * Verifies a CliprdrServerFormatList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrServerFormatList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrServerFormatList
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrServerFormatList;

        /**
         * Creates a plain object from a CliprdrServerFormatList message. Also converts values to other types if specified.
         * @param message CliprdrServerFormatList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrServerFormatList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrServerFormatList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrServerFormatList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrServerFormatListResponse. */
    interface ICliprdrServerFormatListResponse {

        /** CliprdrServerFormatListResponse msg_flags */
        msg_flags?: (number|null);
    }

    /** Represents a CliprdrServerFormatListResponse. */
    class CliprdrServerFormatListResponse implements ICliprdrServerFormatListResponse {

        /**
         * Constructs a new CliprdrServerFormatListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrServerFormatListResponse);

        /** CliprdrServerFormatListResponse msg_flags. */
        public msg_flags: number;

        /**
         * Creates a new CliprdrServerFormatListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrServerFormatListResponse instance
         */
        public static create(properties?: hbb.ICliprdrServerFormatListResponse): hbb.CliprdrServerFormatListResponse;

        /**
         * Encodes the specified CliprdrServerFormatListResponse message. Does not implicitly {@link hbb.CliprdrServerFormatListResponse.verify|verify} messages.
         * @param message CliprdrServerFormatListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrServerFormatListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrServerFormatListResponse message, length delimited. Does not implicitly {@link hbb.CliprdrServerFormatListResponse.verify|verify} messages.
         * @param message CliprdrServerFormatListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrServerFormatListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrServerFormatListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrServerFormatListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrServerFormatListResponse;

        /**
         * Decodes a CliprdrServerFormatListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrServerFormatListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrServerFormatListResponse;

        /**
         * Verifies a CliprdrServerFormatListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrServerFormatListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrServerFormatListResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrServerFormatListResponse;

        /**
         * Creates a plain object from a CliprdrServerFormatListResponse message. Also converts values to other types if specified.
         * @param message CliprdrServerFormatListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrServerFormatListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrServerFormatListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrServerFormatListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrServerFormatDataRequest. */
    interface ICliprdrServerFormatDataRequest {

        /** CliprdrServerFormatDataRequest requested_format_id */
        requested_format_id?: (number|null);
    }

    /** Represents a CliprdrServerFormatDataRequest. */
    class CliprdrServerFormatDataRequest implements ICliprdrServerFormatDataRequest {

        /**
         * Constructs a new CliprdrServerFormatDataRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrServerFormatDataRequest);

        /** CliprdrServerFormatDataRequest requested_format_id. */
        public requested_format_id: number;

        /**
         * Creates a new CliprdrServerFormatDataRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrServerFormatDataRequest instance
         */
        public static create(properties?: hbb.ICliprdrServerFormatDataRequest): hbb.CliprdrServerFormatDataRequest;

        /**
         * Encodes the specified CliprdrServerFormatDataRequest message. Does not implicitly {@link hbb.CliprdrServerFormatDataRequest.verify|verify} messages.
         * @param message CliprdrServerFormatDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrServerFormatDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrServerFormatDataRequest message, length delimited. Does not implicitly {@link hbb.CliprdrServerFormatDataRequest.verify|verify} messages.
         * @param message CliprdrServerFormatDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrServerFormatDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrServerFormatDataRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrServerFormatDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrServerFormatDataRequest;

        /**
         * Decodes a CliprdrServerFormatDataRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrServerFormatDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrServerFormatDataRequest;

        /**
         * Verifies a CliprdrServerFormatDataRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrServerFormatDataRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrServerFormatDataRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrServerFormatDataRequest;

        /**
         * Creates a plain object from a CliprdrServerFormatDataRequest message. Also converts values to other types if specified.
         * @param message CliprdrServerFormatDataRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrServerFormatDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrServerFormatDataRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrServerFormatDataRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrServerFormatDataResponse. */
    interface ICliprdrServerFormatDataResponse {

        /** CliprdrServerFormatDataResponse msg_flags */
        msg_flags?: (number|null);

        /** CliprdrServerFormatDataResponse format_data */
        format_data?: (Uint8Array|null);
    }

    /** Represents a CliprdrServerFormatDataResponse. */
    class CliprdrServerFormatDataResponse implements ICliprdrServerFormatDataResponse {

        /**
         * Constructs a new CliprdrServerFormatDataResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrServerFormatDataResponse);

        /** CliprdrServerFormatDataResponse msg_flags. */
        public msg_flags: number;

        /** CliprdrServerFormatDataResponse format_data. */
        public format_data: Uint8Array;

        /**
         * Creates a new CliprdrServerFormatDataResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrServerFormatDataResponse instance
         */
        public static create(properties?: hbb.ICliprdrServerFormatDataResponse): hbb.CliprdrServerFormatDataResponse;

        /**
         * Encodes the specified CliprdrServerFormatDataResponse message. Does not implicitly {@link hbb.CliprdrServerFormatDataResponse.verify|verify} messages.
         * @param message CliprdrServerFormatDataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrServerFormatDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrServerFormatDataResponse message, length delimited. Does not implicitly {@link hbb.CliprdrServerFormatDataResponse.verify|verify} messages.
         * @param message CliprdrServerFormatDataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrServerFormatDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrServerFormatDataResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrServerFormatDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrServerFormatDataResponse;

        /**
         * Decodes a CliprdrServerFormatDataResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrServerFormatDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrServerFormatDataResponse;

        /**
         * Verifies a CliprdrServerFormatDataResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrServerFormatDataResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrServerFormatDataResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrServerFormatDataResponse;

        /**
         * Creates a plain object from a CliprdrServerFormatDataResponse message. Also converts values to other types if specified.
         * @param message CliprdrServerFormatDataResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrServerFormatDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrServerFormatDataResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrServerFormatDataResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrFileContentsRequest. */
    interface ICliprdrFileContentsRequest {

        /** CliprdrFileContentsRequest stream_id */
        stream_id?: (number|null);

        /** CliprdrFileContentsRequest list_index */
        list_index?: (number|null);

        /** CliprdrFileContentsRequest dw_flags */
        dw_flags?: (number|null);

        /** CliprdrFileContentsRequest n_position_low */
        n_position_low?: (number|null);

        /** CliprdrFileContentsRequest n_position_high */
        n_position_high?: (number|null);

        /** CliprdrFileContentsRequest cb_requested */
        cb_requested?: (number|null);

        /** CliprdrFileContentsRequest have_clip_data_id */
        have_clip_data_id?: (boolean|null);

        /** CliprdrFileContentsRequest clip_data_id */
        clip_data_id?: (number|null);
    }

    /** Represents a CliprdrFileContentsRequest. */
    class CliprdrFileContentsRequest implements ICliprdrFileContentsRequest {

        /**
         * Constructs a new CliprdrFileContentsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrFileContentsRequest);

        /** CliprdrFileContentsRequest stream_id. */
        public stream_id: number;

        /** CliprdrFileContentsRequest list_index. */
        public list_index: number;

        /** CliprdrFileContentsRequest dw_flags. */
        public dw_flags: number;

        /** CliprdrFileContentsRequest n_position_low. */
        public n_position_low: number;

        /** CliprdrFileContentsRequest n_position_high. */
        public n_position_high: number;

        /** CliprdrFileContentsRequest cb_requested. */
        public cb_requested: number;

        /** CliprdrFileContentsRequest have_clip_data_id. */
        public have_clip_data_id: boolean;

        /** CliprdrFileContentsRequest clip_data_id. */
        public clip_data_id: number;

        /**
         * Creates a new CliprdrFileContentsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrFileContentsRequest instance
         */
        public static create(properties?: hbb.ICliprdrFileContentsRequest): hbb.CliprdrFileContentsRequest;

        /**
         * Encodes the specified CliprdrFileContentsRequest message. Does not implicitly {@link hbb.CliprdrFileContentsRequest.verify|verify} messages.
         * @param message CliprdrFileContentsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrFileContentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrFileContentsRequest message, length delimited. Does not implicitly {@link hbb.CliprdrFileContentsRequest.verify|verify} messages.
         * @param message CliprdrFileContentsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrFileContentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrFileContentsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrFileContentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrFileContentsRequest;

        /**
         * Decodes a CliprdrFileContentsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrFileContentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrFileContentsRequest;

        /**
         * Verifies a CliprdrFileContentsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrFileContentsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrFileContentsRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrFileContentsRequest;

        /**
         * Creates a plain object from a CliprdrFileContentsRequest message. Also converts values to other types if specified.
         * @param message CliprdrFileContentsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrFileContentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrFileContentsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrFileContentsRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrFileContentsResponse. */
    interface ICliprdrFileContentsResponse {

        /** CliprdrFileContentsResponse msg_flags */
        msg_flags?: (number|null);

        /** CliprdrFileContentsResponse stream_id */
        stream_id?: (number|null);

        /** CliprdrFileContentsResponse requested_data */
        requested_data?: (Uint8Array|null);
    }

    /** Represents a CliprdrFileContentsResponse. */
    class CliprdrFileContentsResponse implements ICliprdrFileContentsResponse {

        /**
         * Constructs a new CliprdrFileContentsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrFileContentsResponse);

        /** CliprdrFileContentsResponse msg_flags. */
        public msg_flags: number;

        /** CliprdrFileContentsResponse stream_id. */
        public stream_id: number;

        /** CliprdrFileContentsResponse requested_data. */
        public requested_data: Uint8Array;

        /**
         * Creates a new CliprdrFileContentsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrFileContentsResponse instance
         */
        public static create(properties?: hbb.ICliprdrFileContentsResponse): hbb.CliprdrFileContentsResponse;

        /**
         * Encodes the specified CliprdrFileContentsResponse message. Does not implicitly {@link hbb.CliprdrFileContentsResponse.verify|verify} messages.
         * @param message CliprdrFileContentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrFileContentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrFileContentsResponse message, length delimited. Does not implicitly {@link hbb.CliprdrFileContentsResponse.verify|verify} messages.
         * @param message CliprdrFileContentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrFileContentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrFileContentsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrFileContentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrFileContentsResponse;

        /**
         * Decodes a CliprdrFileContentsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrFileContentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrFileContentsResponse;

        /**
         * Verifies a CliprdrFileContentsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrFileContentsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrFileContentsResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrFileContentsResponse;

        /**
         * Creates a plain object from a CliprdrFileContentsResponse message. Also converts values to other types if specified.
         * @param message CliprdrFileContentsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrFileContentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrFileContentsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrFileContentsResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrTryEmpty. */
    interface ICliprdrTryEmpty {
    }

    /** Represents a CliprdrTryEmpty. */
    class CliprdrTryEmpty implements ICliprdrTryEmpty {

        /**
         * Constructs a new CliprdrTryEmpty.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrTryEmpty);

        /**
         * Creates a new CliprdrTryEmpty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrTryEmpty instance
         */
        public static create(properties?: hbb.ICliprdrTryEmpty): hbb.CliprdrTryEmpty;

        /**
         * Encodes the specified CliprdrTryEmpty message. Does not implicitly {@link hbb.CliprdrTryEmpty.verify|verify} messages.
         * @param message CliprdrTryEmpty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrTryEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrTryEmpty message, length delimited. Does not implicitly {@link hbb.CliprdrTryEmpty.verify|verify} messages.
         * @param message CliprdrTryEmpty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrTryEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrTryEmpty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrTryEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrTryEmpty;

        /**
         * Decodes a CliprdrTryEmpty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrTryEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrTryEmpty;

        /**
         * Verifies a CliprdrTryEmpty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrTryEmpty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrTryEmpty
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrTryEmpty;

        /**
         * Creates a plain object from a CliprdrTryEmpty message. Also converts values to other types if specified.
         * @param message CliprdrTryEmpty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrTryEmpty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrTryEmpty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrTryEmpty
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrFile. */
    interface ICliprdrFile {

        /** CliprdrFile name */
        name?: (string|null);

        /** CliprdrFile size */
        size?: (Long|null);
    }

    /** Represents a CliprdrFile. */
    class CliprdrFile implements ICliprdrFile {

        /**
         * Constructs a new CliprdrFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrFile);

        /** CliprdrFile name. */
        public name: string;

        /** CliprdrFile size. */
        public size: Long;

        /**
         * Creates a new CliprdrFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrFile instance
         */
        public static create(properties?: hbb.ICliprdrFile): hbb.CliprdrFile;

        /**
         * Encodes the specified CliprdrFile message. Does not implicitly {@link hbb.CliprdrFile.verify|verify} messages.
         * @param message CliprdrFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrFile message, length delimited. Does not implicitly {@link hbb.CliprdrFile.verify|verify} messages.
         * @param message CliprdrFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrFile;

        /**
         * Decodes a CliprdrFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrFile;

        /**
         * Verifies a CliprdrFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrFile
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrFile;

        /**
         * Creates a plain object from a CliprdrFile message. Also converts values to other types if specified.
         * @param message CliprdrFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CliprdrFiles. */
    interface ICliprdrFiles {

        /** CliprdrFiles files */
        files?: (hbb.ICliprdrFile[]|null);
    }

    /** Represents a CliprdrFiles. */
    class CliprdrFiles implements ICliprdrFiles {

        /**
         * Constructs a new CliprdrFiles.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdrFiles);

        /** CliprdrFiles files. */
        public files: hbb.ICliprdrFile[];

        /**
         * Creates a new CliprdrFiles instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CliprdrFiles instance
         */
        public static create(properties?: hbb.ICliprdrFiles): hbb.CliprdrFiles;

        /**
         * Encodes the specified CliprdrFiles message. Does not implicitly {@link hbb.CliprdrFiles.verify|verify} messages.
         * @param message CliprdrFiles message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdrFiles, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CliprdrFiles message, length delimited. Does not implicitly {@link hbb.CliprdrFiles.verify|verify} messages.
         * @param message CliprdrFiles message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdrFiles, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CliprdrFiles message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CliprdrFiles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CliprdrFiles;

        /**
         * Decodes a CliprdrFiles message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CliprdrFiles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CliprdrFiles;

        /**
         * Verifies a CliprdrFiles message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CliprdrFiles message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CliprdrFiles
         */
        public static fromObject(object: { [k: string]: any }): hbb.CliprdrFiles;

        /**
         * Creates a plain object from a CliprdrFiles message. Also converts values to other types if specified.
         * @param message CliprdrFiles
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CliprdrFiles, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CliprdrFiles to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CliprdrFiles
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Cliprdr. */
    interface ICliprdr {

        /** Cliprdr ready */
        ready?: (hbb.ICliprdrMonitorReady|null);

        /** Cliprdr format_list */
        format_list?: (hbb.ICliprdrServerFormatList|null);

        /** Cliprdr format_list_response */
        format_list_response?: (hbb.ICliprdrServerFormatListResponse|null);

        /** Cliprdr format_data_request */
        format_data_request?: (hbb.ICliprdrServerFormatDataRequest|null);

        /** Cliprdr format_data_response */
        format_data_response?: (hbb.ICliprdrServerFormatDataResponse|null);

        /** Cliprdr file_contents_request */
        file_contents_request?: (hbb.ICliprdrFileContentsRequest|null);

        /** Cliprdr file_contents_response */
        file_contents_response?: (hbb.ICliprdrFileContentsResponse|null);

        /** Cliprdr try_empty */
        try_empty?: (hbb.ICliprdrTryEmpty|null);

        /** Cliprdr files */
        files?: (hbb.ICliprdrFiles|null);
    }

    /** Represents a Cliprdr. */
    class Cliprdr implements ICliprdr {

        /**
         * Constructs a new Cliprdr.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICliprdr);

        /** Cliprdr ready. */
        public ready?: (hbb.ICliprdrMonitorReady|null);

        /** Cliprdr format_list. */
        public format_list?: (hbb.ICliprdrServerFormatList|null);

        /** Cliprdr format_list_response. */
        public format_list_response?: (hbb.ICliprdrServerFormatListResponse|null);

        /** Cliprdr format_data_request. */
        public format_data_request?: (hbb.ICliprdrServerFormatDataRequest|null);

        /** Cliprdr format_data_response. */
        public format_data_response?: (hbb.ICliprdrServerFormatDataResponse|null);

        /** Cliprdr file_contents_request. */
        public file_contents_request?: (hbb.ICliprdrFileContentsRequest|null);

        /** Cliprdr file_contents_response. */
        public file_contents_response?: (hbb.ICliprdrFileContentsResponse|null);

        /** Cliprdr try_empty. */
        public try_empty?: (hbb.ICliprdrTryEmpty|null);

        /** Cliprdr files. */
        public files?: (hbb.ICliprdrFiles|null);

        /** Cliprdr union. */
        public union?: ("ready"|"format_list"|"format_list_response"|"format_data_request"|"format_data_response"|"file_contents_request"|"file_contents_response"|"try_empty"|"files");

        /**
         * Creates a new Cliprdr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Cliprdr instance
         */
        public static create(properties?: hbb.ICliprdr): hbb.Cliprdr;

        /**
         * Encodes the specified Cliprdr message. Does not implicitly {@link hbb.Cliprdr.verify|verify} messages.
         * @param message Cliprdr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICliprdr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Cliprdr message, length delimited. Does not implicitly {@link hbb.Cliprdr.verify|verify} messages.
         * @param message Cliprdr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICliprdr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Cliprdr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Cliprdr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Cliprdr;

        /**
         * Decodes a Cliprdr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Cliprdr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Cliprdr;

        /**
         * Verifies a Cliprdr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Cliprdr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Cliprdr
         */
        public static fromObject(object: { [k: string]: any }): hbb.Cliprdr;

        /**
         * Creates a plain object from a Cliprdr message. Also converts values to other types if specified.
         * @param message Cliprdr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Cliprdr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Cliprdr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Cliprdr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Resolution. */
    interface IResolution {

        /** Resolution width */
        width?: (number|null);

        /** Resolution height */
        height?: (number|null);
    }

    /** Represents a Resolution. */
    class Resolution implements IResolution {

        /**
         * Constructs a new Resolution.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IResolution);

        /** Resolution width. */
        public width: number;

        /** Resolution height. */
        public height: number;

        /**
         * Creates a new Resolution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resolution instance
         */
        public static create(properties?: hbb.IResolution): hbb.Resolution;

        /**
         * Encodes the specified Resolution message. Does not implicitly {@link hbb.Resolution.verify|verify} messages.
         * @param message Resolution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IResolution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Resolution message, length delimited. Does not implicitly {@link hbb.Resolution.verify|verify} messages.
         * @param message Resolution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IResolution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resolution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Resolution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Resolution;

        /**
         * Decodes a Resolution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Resolution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Resolution;

        /**
         * Verifies a Resolution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Resolution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Resolution
         */
        public static fromObject(object: { [k: string]: any }): hbb.Resolution;

        /**
         * Creates a plain object from a Resolution message. Also converts values to other types if specified.
         * @param message Resolution
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Resolution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Resolution to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Resolution
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisplayResolution. */
    interface IDisplayResolution {

        /** DisplayResolution display */
        display?: (number|null);

        /** DisplayResolution resolution */
        resolution?: (hbb.IResolution|null);
    }

    /** Represents a DisplayResolution. */
    class DisplayResolution implements IDisplayResolution {

        /**
         * Constructs a new DisplayResolution.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IDisplayResolution);

        /** DisplayResolution display. */
        public display: number;

        /** DisplayResolution resolution. */
        public resolution?: (hbb.IResolution|null);

        /**
         * Creates a new DisplayResolution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisplayResolution instance
         */
        public static create(properties?: hbb.IDisplayResolution): hbb.DisplayResolution;

        /**
         * Encodes the specified DisplayResolution message. Does not implicitly {@link hbb.DisplayResolution.verify|verify} messages.
         * @param message DisplayResolution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IDisplayResolution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisplayResolution message, length delimited. Does not implicitly {@link hbb.DisplayResolution.verify|verify} messages.
         * @param message DisplayResolution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IDisplayResolution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisplayResolution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisplayResolution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.DisplayResolution;

        /**
         * Decodes a DisplayResolution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisplayResolution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.DisplayResolution;

        /**
         * Verifies a DisplayResolution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisplayResolution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisplayResolution
         */
        public static fromObject(object: { [k: string]: any }): hbb.DisplayResolution;

        /**
         * Creates a plain object from a DisplayResolution message. Also converts values to other types if specified.
         * @param message DisplayResolution
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.DisplayResolution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisplayResolution to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisplayResolution
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SupportedResolutions. */
    interface ISupportedResolutions {

        /** SupportedResolutions resolutions */
        resolutions?: (hbb.IResolution[]|null);
    }

    /** Represents a SupportedResolutions. */
    class SupportedResolutions implements ISupportedResolutions {

        /**
         * Constructs a new SupportedResolutions.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISupportedResolutions);

        /** SupportedResolutions resolutions. */
        public resolutions: hbb.IResolution[];

        /**
         * Creates a new SupportedResolutions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SupportedResolutions instance
         */
        public static create(properties?: hbb.ISupportedResolutions): hbb.SupportedResolutions;

        /**
         * Encodes the specified SupportedResolutions message. Does not implicitly {@link hbb.SupportedResolutions.verify|verify} messages.
         * @param message SupportedResolutions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISupportedResolutions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SupportedResolutions message, length delimited. Does not implicitly {@link hbb.SupportedResolutions.verify|verify} messages.
         * @param message SupportedResolutions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISupportedResolutions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SupportedResolutions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SupportedResolutions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SupportedResolutions;

        /**
         * Decodes a SupportedResolutions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SupportedResolutions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SupportedResolutions;

        /**
         * Verifies a SupportedResolutions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SupportedResolutions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SupportedResolutions
         */
        public static fromObject(object: { [k: string]: any }): hbb.SupportedResolutions;

        /**
         * Creates a plain object from a SupportedResolutions message. Also converts values to other types if specified.
         * @param message SupportedResolutions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SupportedResolutions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SupportedResolutions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SupportedResolutions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SwitchDisplay. */
    interface ISwitchDisplay {

        /** SwitchDisplay display */
        display?: (number|null);

        /** SwitchDisplay x */
        x?: (number|null);

        /** SwitchDisplay y */
        y?: (number|null);

        /** SwitchDisplay width */
        width?: (number|null);

        /** SwitchDisplay height */
        height?: (number|null);

        /** SwitchDisplay cursor_embedded */
        cursor_embedded?: (boolean|null);

        /** SwitchDisplay resolutions */
        resolutions?: (hbb.ISupportedResolutions|null);

        /** SwitchDisplay original_resolution */
        original_resolution?: (hbb.IResolution|null);
    }

    /** Represents a SwitchDisplay. */
    class SwitchDisplay implements ISwitchDisplay {

        /**
         * Constructs a new SwitchDisplay.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISwitchDisplay);

        /** SwitchDisplay display. */
        public display: number;

        /** SwitchDisplay x. */
        public x: number;

        /** SwitchDisplay y. */
        public y: number;

        /** SwitchDisplay width. */
        public width: number;

        /** SwitchDisplay height. */
        public height: number;

        /** SwitchDisplay cursor_embedded. */
        public cursor_embedded: boolean;

        /** SwitchDisplay resolutions. */
        public resolutions?: (hbb.ISupportedResolutions|null);

        /** SwitchDisplay original_resolution. */
        public original_resolution?: (hbb.IResolution|null);

        /**
         * Creates a new SwitchDisplay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SwitchDisplay instance
         */
        public static create(properties?: hbb.ISwitchDisplay): hbb.SwitchDisplay;

        /**
         * Encodes the specified SwitchDisplay message. Does not implicitly {@link hbb.SwitchDisplay.verify|verify} messages.
         * @param message SwitchDisplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISwitchDisplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SwitchDisplay message, length delimited. Does not implicitly {@link hbb.SwitchDisplay.verify|verify} messages.
         * @param message SwitchDisplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISwitchDisplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SwitchDisplay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SwitchDisplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SwitchDisplay;

        /**
         * Decodes a SwitchDisplay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SwitchDisplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SwitchDisplay;

        /**
         * Verifies a SwitchDisplay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SwitchDisplay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SwitchDisplay
         */
        public static fromObject(object: { [k: string]: any }): hbb.SwitchDisplay;

        /**
         * Creates a plain object from a SwitchDisplay message. Also converts values to other types if specified.
         * @param message SwitchDisplay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SwitchDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SwitchDisplay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SwitchDisplay
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CaptureDisplays. */
    interface ICaptureDisplays {

        /** CaptureDisplays add */
        add?: (number[]|null);

        /** CaptureDisplays sub */
        sub?: (number[]|null);

        /** CaptureDisplays set */
        set?: (number[]|null);
    }

    /** Represents a CaptureDisplays. */
    class CaptureDisplays implements ICaptureDisplays {

        /**
         * Constructs a new CaptureDisplays.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICaptureDisplays);

        /** CaptureDisplays add. */
        public add: number[];

        /** CaptureDisplays sub. */
        public sub: number[];

        /** CaptureDisplays set. */
        public set: number[];

        /**
         * Creates a new CaptureDisplays instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CaptureDisplays instance
         */
        public static create(properties?: hbb.ICaptureDisplays): hbb.CaptureDisplays;

        /**
         * Encodes the specified CaptureDisplays message. Does not implicitly {@link hbb.CaptureDisplays.verify|verify} messages.
         * @param message CaptureDisplays message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICaptureDisplays, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CaptureDisplays message, length delimited. Does not implicitly {@link hbb.CaptureDisplays.verify|verify} messages.
         * @param message CaptureDisplays message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICaptureDisplays, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CaptureDisplays message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CaptureDisplays
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CaptureDisplays;

        /**
         * Decodes a CaptureDisplays message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CaptureDisplays
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CaptureDisplays;

        /**
         * Verifies a CaptureDisplays message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CaptureDisplays message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CaptureDisplays
         */
        public static fromObject(object: { [k: string]: any }): hbb.CaptureDisplays;

        /**
         * Creates a plain object from a CaptureDisplays message. Also converts values to other types if specified.
         * @param message CaptureDisplays
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CaptureDisplays, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CaptureDisplays to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CaptureDisplays
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ToggleVirtualDisplay. */
    interface IToggleVirtualDisplay {

        /** ToggleVirtualDisplay display */
        display?: (number|null);

        /** ToggleVirtualDisplay on */
        on?: (boolean|null);
    }

    /** Represents a ToggleVirtualDisplay. */
    class ToggleVirtualDisplay implements IToggleVirtualDisplay {

        /**
         * Constructs a new ToggleVirtualDisplay.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IToggleVirtualDisplay);

        /** ToggleVirtualDisplay display. */
        public display: number;

        /** ToggleVirtualDisplay on. */
        public on: boolean;

        /**
         * Creates a new ToggleVirtualDisplay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToggleVirtualDisplay instance
         */
        public static create(properties?: hbb.IToggleVirtualDisplay): hbb.ToggleVirtualDisplay;

        /**
         * Encodes the specified ToggleVirtualDisplay message. Does not implicitly {@link hbb.ToggleVirtualDisplay.verify|verify} messages.
         * @param message ToggleVirtualDisplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IToggleVirtualDisplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToggleVirtualDisplay message, length delimited. Does not implicitly {@link hbb.ToggleVirtualDisplay.verify|verify} messages.
         * @param message ToggleVirtualDisplay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IToggleVirtualDisplay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToggleVirtualDisplay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToggleVirtualDisplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ToggleVirtualDisplay;

        /**
         * Decodes a ToggleVirtualDisplay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToggleVirtualDisplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ToggleVirtualDisplay;

        /**
         * Verifies a ToggleVirtualDisplay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToggleVirtualDisplay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToggleVirtualDisplay
         */
        public static fromObject(object: { [k: string]: any }): hbb.ToggleVirtualDisplay;

        /**
         * Creates a plain object from a ToggleVirtualDisplay message. Also converts values to other types if specified.
         * @param message ToggleVirtualDisplay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ToggleVirtualDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToggleVirtualDisplay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToggleVirtualDisplay
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TogglePrivacyMode. */
    interface ITogglePrivacyMode {

        /** TogglePrivacyMode impl_key */
        impl_key?: (string|null);

        /** TogglePrivacyMode on */
        on?: (boolean|null);
    }

    /** Represents a TogglePrivacyMode. */
    class TogglePrivacyMode implements ITogglePrivacyMode {

        /**
         * Constructs a new TogglePrivacyMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITogglePrivacyMode);

        /** TogglePrivacyMode impl_key. */
        public impl_key: string;

        /** TogglePrivacyMode on. */
        public on: boolean;

        /**
         * Creates a new TogglePrivacyMode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TogglePrivacyMode instance
         */
        public static create(properties?: hbb.ITogglePrivacyMode): hbb.TogglePrivacyMode;

        /**
         * Encodes the specified TogglePrivacyMode message. Does not implicitly {@link hbb.TogglePrivacyMode.verify|verify} messages.
         * @param message TogglePrivacyMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITogglePrivacyMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TogglePrivacyMode message, length delimited. Does not implicitly {@link hbb.TogglePrivacyMode.verify|verify} messages.
         * @param message TogglePrivacyMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITogglePrivacyMode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TogglePrivacyMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TogglePrivacyMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TogglePrivacyMode;

        /**
         * Decodes a TogglePrivacyMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TogglePrivacyMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TogglePrivacyMode;

        /**
         * Verifies a TogglePrivacyMode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TogglePrivacyMode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TogglePrivacyMode
         */
        public static fromObject(object: { [k: string]: any }): hbb.TogglePrivacyMode;

        /**
         * Creates a plain object from a TogglePrivacyMode message. Also converts values to other types if specified.
         * @param message TogglePrivacyMode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TogglePrivacyMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TogglePrivacyMode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TogglePrivacyMode
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PermissionInfo. */
    interface IPermissionInfo {

        /** PermissionInfo permission */
        permission?: (hbb.PermissionInfo.Permission|null);

        /** PermissionInfo enabled */
        enabled?: (boolean|null);
    }

    /** Represents a PermissionInfo. */
    class PermissionInfo implements IPermissionInfo {

        /**
         * Constructs a new PermissionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPermissionInfo);

        /** PermissionInfo permission. */
        public permission: hbb.PermissionInfo.Permission;

        /** PermissionInfo enabled. */
        public enabled: boolean;

        /**
         * Creates a new PermissionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PermissionInfo instance
         */
        public static create(properties?: hbb.IPermissionInfo): hbb.PermissionInfo;

        /**
         * Encodes the specified PermissionInfo message. Does not implicitly {@link hbb.PermissionInfo.verify|verify} messages.
         * @param message PermissionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPermissionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PermissionInfo message, length delimited. Does not implicitly {@link hbb.PermissionInfo.verify|verify} messages.
         * @param message PermissionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPermissionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PermissionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PermissionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PermissionInfo;

        /**
         * Decodes a PermissionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PermissionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PermissionInfo;

        /**
         * Verifies a PermissionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PermissionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PermissionInfo
         */
        public static fromObject(object: { [k: string]: any }): hbb.PermissionInfo;

        /**
         * Creates a plain object from a PermissionInfo message. Also converts values to other types if specified.
         * @param message PermissionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PermissionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PermissionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PermissionInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PermissionInfo {

        /** Permission enum. */
        enum Permission {
            Keyboard = 0,
            Clipboard = 2,
            Audio = 3,
            File = 4,
            Restart = 5,
            Recording = 6,
            BlockInput = 7
        }
    }

    /** ImageQuality enum. */
    enum ImageQuality {
        NotSet = 0,
        Low = 2,
        Balanced = 3,
        Best = 4
    }

    /** Properties of a SupportedDecoding. */
    interface ISupportedDecoding {

        /** SupportedDecoding ability_vp9 */
        ability_vp9?: (number|null);

        /** SupportedDecoding ability_h264 */
        ability_h264?: (number|null);

        /** SupportedDecoding ability_h265 */
        ability_h265?: (number|null);

        /** SupportedDecoding prefer */
        prefer?: (hbb.SupportedDecoding.PreferCodec|null);

        /** SupportedDecoding ability_vp8 */
        ability_vp8?: (number|null);

        /** SupportedDecoding ability_av1 */
        ability_av1?: (number|null);

        /** SupportedDecoding i444 */
        i444?: (hbb.ICodecAbility|null);

        /** SupportedDecoding prefer_chroma */
        prefer_chroma?: (hbb.Chroma|null);
    }

    /** Represents a SupportedDecoding. */
    class SupportedDecoding implements ISupportedDecoding {

        /**
         * Constructs a new SupportedDecoding.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISupportedDecoding);

        /** SupportedDecoding ability_vp9. */
        public ability_vp9: number;

        /** SupportedDecoding ability_h264. */
        public ability_h264: number;

        /** SupportedDecoding ability_h265. */
        public ability_h265: number;

        /** SupportedDecoding prefer. */
        public prefer: hbb.SupportedDecoding.PreferCodec;

        /** SupportedDecoding ability_vp8. */
        public ability_vp8: number;

        /** SupportedDecoding ability_av1. */
        public ability_av1: number;

        /** SupportedDecoding i444. */
        public i444?: (hbb.ICodecAbility|null);

        /** SupportedDecoding prefer_chroma. */
        public prefer_chroma: hbb.Chroma;

        /**
         * Creates a new SupportedDecoding instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SupportedDecoding instance
         */
        public static create(properties?: hbb.ISupportedDecoding): hbb.SupportedDecoding;

        /**
         * Encodes the specified SupportedDecoding message. Does not implicitly {@link hbb.SupportedDecoding.verify|verify} messages.
         * @param message SupportedDecoding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISupportedDecoding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SupportedDecoding message, length delimited. Does not implicitly {@link hbb.SupportedDecoding.verify|verify} messages.
         * @param message SupportedDecoding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISupportedDecoding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SupportedDecoding message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SupportedDecoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SupportedDecoding;

        /**
         * Decodes a SupportedDecoding message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SupportedDecoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SupportedDecoding;

        /**
         * Verifies a SupportedDecoding message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SupportedDecoding message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SupportedDecoding
         */
        public static fromObject(object: { [k: string]: any }): hbb.SupportedDecoding;

        /**
         * Creates a plain object from a SupportedDecoding message. Also converts values to other types if specified.
         * @param message SupportedDecoding
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SupportedDecoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SupportedDecoding to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SupportedDecoding
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SupportedDecoding {

        /** PreferCodec enum. */
        enum PreferCodec {
            Auto = 0,
            VP9 = 1,
            H264 = 2,
            H265 = 3,
            VP8 = 4,
            AV1 = 5
        }
    }

    /** Properties of an OptionMessage. */
    interface IOptionMessage {

        /** OptionMessage image_quality */
        image_quality?: (hbb.ImageQuality|null);

        /** OptionMessage lock_after_session_end */
        lock_after_session_end?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage show_remote_cursor */
        show_remote_cursor?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage privacy_mode */
        privacy_mode?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage block_input */
        block_input?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage custom_image_quality */
        custom_image_quality?: (number|null);

        /** OptionMessage disable_audio */
        disable_audio?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage disable_clipboard */
        disable_clipboard?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage enable_file_transfer */
        enable_file_transfer?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage supported_decoding */
        supported_decoding?: (hbb.ISupportedDecoding|null);

        /** OptionMessage custom_fps */
        custom_fps?: (number|null);

        /** OptionMessage disable_keyboard */
        disable_keyboard?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage follow_remote_cursor */
        follow_remote_cursor?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage follow_remote_window */
        follow_remote_window?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage disable_camera */
        disable_camera?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage terminal_persistent */
        terminal_persistent?: (hbb.OptionMessage.BoolOption|null);

        /** OptionMessage show_my_cursor */
        show_my_cursor?: (hbb.OptionMessage.BoolOption|null);
    }

    /** Represents an OptionMessage. */
    class OptionMessage implements IOptionMessage {

        /**
         * Constructs a new OptionMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IOptionMessage);

        /** OptionMessage image_quality. */
        public image_quality: hbb.ImageQuality;

        /** OptionMessage lock_after_session_end. */
        public lock_after_session_end: hbb.OptionMessage.BoolOption;

        /** OptionMessage show_remote_cursor. */
        public show_remote_cursor: hbb.OptionMessage.BoolOption;

        /** OptionMessage privacy_mode. */
        public privacy_mode: hbb.OptionMessage.BoolOption;

        /** OptionMessage block_input. */
        public block_input: hbb.OptionMessage.BoolOption;

        /** OptionMessage custom_image_quality. */
        public custom_image_quality: number;

        /** OptionMessage disable_audio. */
        public disable_audio: hbb.OptionMessage.BoolOption;

        /** OptionMessage disable_clipboard. */
        public disable_clipboard: hbb.OptionMessage.BoolOption;

        /** OptionMessage enable_file_transfer. */
        public enable_file_transfer: hbb.OptionMessage.BoolOption;

        /** OptionMessage supported_decoding. */
        public supported_decoding?: (hbb.ISupportedDecoding|null);

        /** OptionMessage custom_fps. */
        public custom_fps: number;

        /** OptionMessage disable_keyboard. */
        public disable_keyboard: hbb.OptionMessage.BoolOption;

        /** OptionMessage follow_remote_cursor. */
        public follow_remote_cursor: hbb.OptionMessage.BoolOption;

        /** OptionMessage follow_remote_window. */
        public follow_remote_window: hbb.OptionMessage.BoolOption;

        /** OptionMessage disable_camera. */
        public disable_camera: hbb.OptionMessage.BoolOption;

        /** OptionMessage terminal_persistent. */
        public terminal_persistent: hbb.OptionMessage.BoolOption;

        /** OptionMessage show_my_cursor. */
        public show_my_cursor: hbb.OptionMessage.BoolOption;

        /**
         * Creates a new OptionMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OptionMessage instance
         */
        public static create(properties?: hbb.IOptionMessage): hbb.OptionMessage;

        /**
         * Encodes the specified OptionMessage message. Does not implicitly {@link hbb.OptionMessage.verify|verify} messages.
         * @param message OptionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IOptionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OptionMessage message, length delimited. Does not implicitly {@link hbb.OptionMessage.verify|verify} messages.
         * @param message OptionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IOptionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OptionMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OptionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.OptionMessage;

        /**
         * Decodes an OptionMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OptionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.OptionMessage;

        /**
         * Verifies an OptionMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OptionMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OptionMessage
         */
        public static fromObject(object: { [k: string]: any }): hbb.OptionMessage;

        /**
         * Creates a plain object from an OptionMessage message. Also converts values to other types if specified.
         * @param message OptionMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.OptionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OptionMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OptionMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace OptionMessage {

        /** BoolOption enum. */
        enum BoolOption {
            NotSet = 0,
            No = 1,
            Yes = 2
        }
    }

    /** Properties of a TestDelay. */
    interface ITestDelay {

        /** TestDelay time */
        time?: (Long|null);

        /** TestDelay from_client */
        from_client?: (boolean|null);

        /** TestDelay last_delay */
        last_delay?: (number|null);

        /** TestDelay target_bitrate */
        target_bitrate?: (number|null);
    }

    /** Represents a TestDelay. */
    class TestDelay implements ITestDelay {

        /**
         * Constructs a new TestDelay.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITestDelay);

        /** TestDelay time. */
        public time: Long;

        /** TestDelay from_client. */
        public from_client: boolean;

        /** TestDelay last_delay. */
        public last_delay: number;

        /** TestDelay target_bitrate. */
        public target_bitrate: number;

        /**
         * Creates a new TestDelay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestDelay instance
         */
        public static create(properties?: hbb.ITestDelay): hbb.TestDelay;

        /**
         * Encodes the specified TestDelay message. Does not implicitly {@link hbb.TestDelay.verify|verify} messages.
         * @param message TestDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITestDelay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestDelay message, length delimited. Does not implicitly {@link hbb.TestDelay.verify|verify} messages.
         * @param message TestDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITestDelay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestDelay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TestDelay;

        /**
         * Decodes a TestDelay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TestDelay;

        /**
         * Verifies a TestDelay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestDelay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestDelay
         */
        public static fromObject(object: { [k: string]: any }): hbb.TestDelay;

        /**
         * Creates a plain object from a TestDelay message. Also converts values to other types if specified.
         * @param message TestDelay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TestDelay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestDelay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TestDelay
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicKey. */
    interface IPublicKey {

        /** PublicKey asymmetric_value */
        asymmetric_value?: (Uint8Array|null);

        /** PublicKey symmetric_value */
        symmetric_value?: (Uint8Array|null);
    }

    /** Represents a PublicKey. */
    class PublicKey implements IPublicKey {

        /**
         * Constructs a new PublicKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPublicKey);

        /** PublicKey asymmetric_value. */
        public asymmetric_value: Uint8Array;

        /** PublicKey symmetric_value. */
        public symmetric_value: Uint8Array;

        /**
         * Creates a new PublicKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicKey instance
         */
        public static create(properties?: hbb.IPublicKey): hbb.PublicKey;

        /**
         * Encodes the specified PublicKey message. Does not implicitly {@link hbb.PublicKey.verify|verify} messages.
         * @param message PublicKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link hbb.PublicKey.verify|verify} messages.
         * @param message PublicKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PublicKey;

        /**
         * Decodes a PublicKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PublicKey;

        /**
         * Verifies a PublicKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicKey
         */
        public static fromObject(object: { [k: string]: any }): hbb.PublicKey;

        /**
         * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
         * @param message PublicKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignedId. */
    interface ISignedId {

        /** SignedId id */
        id?: (Uint8Array|null);
    }

    /** Represents a SignedId. */
    class SignedId implements ISignedId {

        /**
         * Constructs a new SignedId.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISignedId);

        /** SignedId id. */
        public id: Uint8Array;

        /**
         * Creates a new SignedId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedId instance
         */
        public static create(properties?: hbb.ISignedId): hbb.SignedId;

        /**
         * Encodes the specified SignedId message. Does not implicitly {@link hbb.SignedId.verify|verify} messages.
         * @param message SignedId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISignedId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedId message, length delimited. Does not implicitly {@link hbb.SignedId.verify|verify} messages.
         * @param message SignedId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISignedId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SignedId;

        /**
         * Decodes a SignedId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SignedId;

        /**
         * Verifies a SignedId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedId
         */
        public static fromObject(object: { [k: string]: any }): hbb.SignedId;

        /**
         * Creates a plain object from a SignedId message. Also converts values to other types if specified.
         * @param message SignedId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SignedId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignedId
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AudioFormat. */
    interface IAudioFormat {

        /** AudioFormat sample_rate */
        sample_rate?: (number|null);

        /** AudioFormat channels */
        channels?: (number|null);
    }

    /** Represents an AudioFormat. */
    class AudioFormat implements IAudioFormat {

        /**
         * Constructs a new AudioFormat.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IAudioFormat);

        /** AudioFormat sample_rate. */
        public sample_rate: number;

        /** AudioFormat channels. */
        public channels: number;

        /**
         * Creates a new AudioFormat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AudioFormat instance
         */
        public static create(properties?: hbb.IAudioFormat): hbb.AudioFormat;

        /**
         * Encodes the specified AudioFormat message. Does not implicitly {@link hbb.AudioFormat.verify|verify} messages.
         * @param message AudioFormat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IAudioFormat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AudioFormat message, length delimited. Does not implicitly {@link hbb.AudioFormat.verify|verify} messages.
         * @param message AudioFormat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IAudioFormat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AudioFormat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AudioFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.AudioFormat;

        /**
         * Decodes an AudioFormat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AudioFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.AudioFormat;

        /**
         * Verifies an AudioFormat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AudioFormat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AudioFormat
         */
        public static fromObject(object: { [k: string]: any }): hbb.AudioFormat;

        /**
         * Creates a plain object from an AudioFormat message. Also converts values to other types if specified.
         * @param message AudioFormat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.AudioFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AudioFormat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AudioFormat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AudioFrame. */
    interface IAudioFrame {

        /** AudioFrame data */
        data?: (Uint8Array|null);
    }

    /** Represents an AudioFrame. */
    class AudioFrame implements IAudioFrame {

        /**
         * Constructs a new AudioFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IAudioFrame);

        /** AudioFrame data. */
        public data: Uint8Array;

        /**
         * Creates a new AudioFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AudioFrame instance
         */
        public static create(properties?: hbb.IAudioFrame): hbb.AudioFrame;

        /**
         * Encodes the specified AudioFrame message. Does not implicitly {@link hbb.AudioFrame.verify|verify} messages.
         * @param message AudioFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IAudioFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AudioFrame message, length delimited. Does not implicitly {@link hbb.AudioFrame.verify|verify} messages.
         * @param message AudioFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IAudioFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AudioFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AudioFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.AudioFrame;

        /**
         * Decodes an AudioFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AudioFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.AudioFrame;

        /**
         * Verifies an AudioFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AudioFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AudioFrame
         */
        public static fromObject(object: { [k: string]: any }): hbb.AudioFrame;

        /**
         * Creates a plain object from an AudioFrame message. Also converts values to other types if specified.
         * @param message AudioFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.AudioFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AudioFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AudioFrame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageBox. */
    interface IMessageBox {

        /** MessageBox msgtype */
        msgtype?: (string|null);

        /** MessageBox title */
        title?: (string|null);

        /** MessageBox text */
        text?: (string|null);

        /** MessageBox link */
        link?: (string|null);
    }

    /** Represents a MessageBox. */
    class MessageBox implements IMessageBox {

        /**
         * Constructs a new MessageBox.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IMessageBox);

        /** MessageBox msgtype. */
        public msgtype: string;

        /** MessageBox title. */
        public title: string;

        /** MessageBox text. */
        public text: string;

        /** MessageBox link. */
        public link: string;

        /**
         * Creates a new MessageBox instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageBox instance
         */
        public static create(properties?: hbb.IMessageBox): hbb.MessageBox;

        /**
         * Encodes the specified MessageBox message. Does not implicitly {@link hbb.MessageBox.verify|verify} messages.
         * @param message MessageBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IMessageBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageBox message, length delimited. Does not implicitly {@link hbb.MessageBox.verify|verify} messages.
         * @param message MessageBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IMessageBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageBox message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.MessageBox;

        /**
         * Decodes a MessageBox message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.MessageBox;

        /**
         * Verifies a MessageBox message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageBox message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageBox
         */
        public static fromObject(object: { [k: string]: any }): hbb.MessageBox;

        /**
         * Creates a plain object from a MessageBox message. Also converts values to other types if specified.
         * @param message MessageBox
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.MessageBox, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageBox to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageBox
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BackNotification. */
    interface IBackNotification {

        /** BackNotification privacy_mode_state */
        privacy_mode_state?: (hbb.BackNotification.PrivacyModeState|null);

        /** BackNotification block_input_state */
        block_input_state?: (hbb.BackNotification.BlockInputState|null);

        /** BackNotification details */
        details?: (string|null);

        /** BackNotification impl_key */
        impl_key?: (string|null);
    }

    /** Represents a BackNotification. */
    class BackNotification implements IBackNotification {

        /**
         * Constructs a new BackNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IBackNotification);

        /** BackNotification privacy_mode_state. */
        public privacy_mode_state?: (hbb.BackNotification.PrivacyModeState|null);

        /** BackNotification block_input_state. */
        public block_input_state?: (hbb.BackNotification.BlockInputState|null);

        /** BackNotification details. */
        public details: string;

        /** BackNotification impl_key. */
        public impl_key: string;

        /** BackNotification union. */
        public union?: ("privacy_mode_state"|"block_input_state");

        /**
         * Creates a new BackNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackNotification instance
         */
        public static create(properties?: hbb.IBackNotification): hbb.BackNotification;

        /**
         * Encodes the specified BackNotification message. Does not implicitly {@link hbb.BackNotification.verify|verify} messages.
         * @param message BackNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IBackNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackNotification message, length delimited. Does not implicitly {@link hbb.BackNotification.verify|verify} messages.
         * @param message BackNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IBackNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.BackNotification;

        /**
         * Decodes a BackNotification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.BackNotification;

        /**
         * Verifies a BackNotification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackNotification
         */
        public static fromObject(object: { [k: string]: any }): hbb.BackNotification;

        /**
         * Creates a plain object from a BackNotification message. Also converts values to other types if specified.
         * @param message BackNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.BackNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackNotification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BackNotification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BackNotification {

        /** BlockInputState enum. */
        enum BlockInputState {
            BlkStateUnknown = 0,
            BlkOnSucceeded = 2,
            BlkOnFailed = 3,
            BlkOffSucceeded = 4,
            BlkOffFailed = 5
        }

        /** PrivacyModeState enum. */
        enum PrivacyModeState {
            PrvStateUnknown = 0,
            PrvOnByOther = 2,
            PrvNotSupported = 3,
            PrvOnSucceeded = 4,
            PrvOnFailedDenied = 5,
            PrvOnFailedPlugin = 6,
            PrvOnFailed = 7,
            PrvOffSucceeded = 8,
            PrvOffByPeer = 9,
            PrvOffFailed = 10,
            PrvOffUnknown = 11
        }
    }

    /** Properties of an ElevationRequestWithLogon. */
    interface IElevationRequestWithLogon {

        /** ElevationRequestWithLogon username */
        username?: (string|null);

        /** ElevationRequestWithLogon password */
        password?: (string|null);
    }

    /** Represents an ElevationRequestWithLogon. */
    class ElevationRequestWithLogon implements IElevationRequestWithLogon {

        /**
         * Constructs a new ElevationRequestWithLogon.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IElevationRequestWithLogon);

        /** ElevationRequestWithLogon username. */
        public username: string;

        /** ElevationRequestWithLogon password. */
        public password: string;

        /**
         * Creates a new ElevationRequestWithLogon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ElevationRequestWithLogon instance
         */
        public static create(properties?: hbb.IElevationRequestWithLogon): hbb.ElevationRequestWithLogon;

        /**
         * Encodes the specified ElevationRequestWithLogon message. Does not implicitly {@link hbb.ElevationRequestWithLogon.verify|verify} messages.
         * @param message ElevationRequestWithLogon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IElevationRequestWithLogon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ElevationRequestWithLogon message, length delimited. Does not implicitly {@link hbb.ElevationRequestWithLogon.verify|verify} messages.
         * @param message ElevationRequestWithLogon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IElevationRequestWithLogon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ElevationRequestWithLogon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ElevationRequestWithLogon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ElevationRequestWithLogon;

        /**
         * Decodes an ElevationRequestWithLogon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ElevationRequestWithLogon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ElevationRequestWithLogon;

        /**
         * Verifies an ElevationRequestWithLogon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ElevationRequestWithLogon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ElevationRequestWithLogon
         */
        public static fromObject(object: { [k: string]: any }): hbb.ElevationRequestWithLogon;

        /**
         * Creates a plain object from an ElevationRequestWithLogon message. Also converts values to other types if specified.
         * @param message ElevationRequestWithLogon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ElevationRequestWithLogon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ElevationRequestWithLogon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ElevationRequestWithLogon
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ElevationRequest. */
    interface IElevationRequest {

        /** ElevationRequest direct */
        direct?: (boolean|null);

        /** ElevationRequest logon */
        logon?: (hbb.IElevationRequestWithLogon|null);
    }

    /** Represents an ElevationRequest. */
    class ElevationRequest implements IElevationRequest {

        /**
         * Constructs a new ElevationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IElevationRequest);

        /** ElevationRequest direct. */
        public direct?: (boolean|null);

        /** ElevationRequest logon. */
        public logon?: (hbb.IElevationRequestWithLogon|null);

        /** ElevationRequest union. */
        public union?: ("direct"|"logon");

        /**
         * Creates a new ElevationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ElevationRequest instance
         */
        public static create(properties?: hbb.IElevationRequest): hbb.ElevationRequest;

        /**
         * Encodes the specified ElevationRequest message. Does not implicitly {@link hbb.ElevationRequest.verify|verify} messages.
         * @param message ElevationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IElevationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ElevationRequest message, length delimited. Does not implicitly {@link hbb.ElevationRequest.verify|verify} messages.
         * @param message ElevationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IElevationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ElevationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ElevationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ElevationRequest;

        /**
         * Decodes an ElevationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ElevationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ElevationRequest;

        /**
         * Verifies an ElevationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ElevationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ElevationRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.ElevationRequest;

        /**
         * Creates a plain object from an ElevationRequest message. Also converts values to other types if specified.
         * @param message ElevationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ElevationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ElevationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ElevationRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SwitchSidesRequest. */
    interface ISwitchSidesRequest {

        /** SwitchSidesRequest uuid */
        uuid?: (Uint8Array|null);
    }

    /** Represents a SwitchSidesRequest. */
    class SwitchSidesRequest implements ISwitchSidesRequest {

        /**
         * Constructs a new SwitchSidesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISwitchSidesRequest);

        /** SwitchSidesRequest uuid. */
        public uuid: Uint8Array;

        /**
         * Creates a new SwitchSidesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SwitchSidesRequest instance
         */
        public static create(properties?: hbb.ISwitchSidesRequest): hbb.SwitchSidesRequest;

        /**
         * Encodes the specified SwitchSidesRequest message. Does not implicitly {@link hbb.SwitchSidesRequest.verify|verify} messages.
         * @param message SwitchSidesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISwitchSidesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SwitchSidesRequest message, length delimited. Does not implicitly {@link hbb.SwitchSidesRequest.verify|verify} messages.
         * @param message SwitchSidesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISwitchSidesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SwitchSidesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SwitchSidesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SwitchSidesRequest;

        /**
         * Decodes a SwitchSidesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SwitchSidesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SwitchSidesRequest;

        /**
         * Verifies a SwitchSidesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SwitchSidesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SwitchSidesRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.SwitchSidesRequest;

        /**
         * Creates a plain object from a SwitchSidesRequest message. Also converts values to other types if specified.
         * @param message SwitchSidesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SwitchSidesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SwitchSidesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SwitchSidesRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SwitchSidesResponse. */
    interface ISwitchSidesResponse {

        /** SwitchSidesResponse uuid */
        uuid?: (Uint8Array|null);

        /** SwitchSidesResponse lr */
        lr?: (hbb.ILoginRequest|null);
    }

    /** Represents a SwitchSidesResponse. */
    class SwitchSidesResponse implements ISwitchSidesResponse {

        /**
         * Constructs a new SwitchSidesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISwitchSidesResponse);

        /** SwitchSidesResponse uuid. */
        public uuid: Uint8Array;

        /** SwitchSidesResponse lr. */
        public lr?: (hbb.ILoginRequest|null);

        /**
         * Creates a new SwitchSidesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SwitchSidesResponse instance
         */
        public static create(properties?: hbb.ISwitchSidesResponse): hbb.SwitchSidesResponse;

        /**
         * Encodes the specified SwitchSidesResponse message. Does not implicitly {@link hbb.SwitchSidesResponse.verify|verify} messages.
         * @param message SwitchSidesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISwitchSidesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SwitchSidesResponse message, length delimited. Does not implicitly {@link hbb.SwitchSidesResponse.verify|verify} messages.
         * @param message SwitchSidesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISwitchSidesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SwitchSidesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SwitchSidesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SwitchSidesResponse;

        /**
         * Decodes a SwitchSidesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SwitchSidesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SwitchSidesResponse;

        /**
         * Verifies a SwitchSidesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SwitchSidesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SwitchSidesResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.SwitchSidesResponse;

        /**
         * Creates a plain object from a SwitchSidesResponse message. Also converts values to other types if specified.
         * @param message SwitchSidesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SwitchSidesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SwitchSidesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SwitchSidesResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SwitchBack. */
    interface ISwitchBack {
    }

    /** Represents a SwitchBack. */
    class SwitchBack implements ISwitchBack {

        /**
         * Constructs a new SwitchBack.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISwitchBack);

        /**
         * Creates a new SwitchBack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SwitchBack instance
         */
        public static create(properties?: hbb.ISwitchBack): hbb.SwitchBack;

        /**
         * Encodes the specified SwitchBack message. Does not implicitly {@link hbb.SwitchBack.verify|verify} messages.
         * @param message SwitchBack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISwitchBack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SwitchBack message, length delimited. Does not implicitly {@link hbb.SwitchBack.verify|verify} messages.
         * @param message SwitchBack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISwitchBack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SwitchBack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SwitchBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SwitchBack;

        /**
         * Decodes a SwitchBack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SwitchBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SwitchBack;

        /**
         * Verifies a SwitchBack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SwitchBack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SwitchBack
         */
        public static fromObject(object: { [k: string]: any }): hbb.SwitchBack;

        /**
         * Creates a plain object from a SwitchBack message. Also converts values to other types if specified.
         * @param message SwitchBack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SwitchBack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SwitchBack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SwitchBack
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginRequest. */
    interface IPluginRequest {

        /** PluginRequest id */
        id?: (string|null);

        /** PluginRequest content */
        content?: (Uint8Array|null);
    }

    /** Represents a PluginRequest. */
    class PluginRequest implements IPluginRequest {

        /**
         * Constructs a new PluginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPluginRequest);

        /** PluginRequest id. */
        public id: string;

        /** PluginRequest content. */
        public content: Uint8Array;

        /**
         * Creates a new PluginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginRequest instance
         */
        public static create(properties?: hbb.IPluginRequest): hbb.PluginRequest;

        /**
         * Encodes the specified PluginRequest message. Does not implicitly {@link hbb.PluginRequest.verify|verify} messages.
         * @param message PluginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPluginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginRequest message, length delimited. Does not implicitly {@link hbb.PluginRequest.verify|verify} messages.
         * @param message PluginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPluginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PluginRequest;

        /**
         * Decodes a PluginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PluginRequest;

        /**
         * Verifies a PluginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.PluginRequest;

        /**
         * Creates a plain object from a PluginRequest message. Also converts values to other types if specified.
         * @param message PluginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PluginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginFailure. */
    interface IPluginFailure {

        /** PluginFailure id */
        id?: (string|null);

        /** PluginFailure name */
        name?: (string|null);

        /** PluginFailure msg */
        msg?: (string|null);
    }

    /** Represents a PluginFailure. */
    class PluginFailure implements IPluginFailure {

        /**
         * Constructs a new PluginFailure.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPluginFailure);

        /** PluginFailure id. */
        public id: string;

        /** PluginFailure name. */
        public name: string;

        /** PluginFailure msg. */
        public msg: string;

        /**
         * Creates a new PluginFailure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginFailure instance
         */
        public static create(properties?: hbb.IPluginFailure): hbb.PluginFailure;

        /**
         * Encodes the specified PluginFailure message. Does not implicitly {@link hbb.PluginFailure.verify|verify} messages.
         * @param message PluginFailure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPluginFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginFailure message, length delimited. Does not implicitly {@link hbb.PluginFailure.verify|verify} messages.
         * @param message PluginFailure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPluginFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginFailure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PluginFailure;

        /**
         * Decodes a PluginFailure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginFailure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PluginFailure;

        /**
         * Verifies a PluginFailure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginFailure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginFailure
         */
        public static fromObject(object: { [k: string]: any }): hbb.PluginFailure;

        /**
         * Creates a plain object from a PluginFailure message. Also converts values to other types if specified.
         * @param message PluginFailure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PluginFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginFailure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginFailure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WindowsSessions. */
    interface IWindowsSessions {

        /** WindowsSessions sessions */
        sessions?: (hbb.IWindowsSession[]|null);

        /** WindowsSessions current_sid */
        current_sid?: (number|null);
    }

    /** Represents a WindowsSessions. */
    class WindowsSessions implements IWindowsSessions {

        /**
         * Constructs a new WindowsSessions.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IWindowsSessions);

        /** WindowsSessions sessions. */
        public sessions: hbb.IWindowsSession[];

        /** WindowsSessions current_sid. */
        public current_sid: number;

        /**
         * Creates a new WindowsSessions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WindowsSessions instance
         */
        public static create(properties?: hbb.IWindowsSessions): hbb.WindowsSessions;

        /**
         * Encodes the specified WindowsSessions message. Does not implicitly {@link hbb.WindowsSessions.verify|verify} messages.
         * @param message WindowsSessions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IWindowsSessions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WindowsSessions message, length delimited. Does not implicitly {@link hbb.WindowsSessions.verify|verify} messages.
         * @param message WindowsSessions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IWindowsSessions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WindowsSessions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WindowsSessions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.WindowsSessions;

        /**
         * Decodes a WindowsSessions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WindowsSessions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.WindowsSessions;

        /**
         * Verifies a WindowsSessions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WindowsSessions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WindowsSessions
         */
        public static fromObject(object: { [k: string]: any }): hbb.WindowsSessions;

        /**
         * Creates a plain object from a WindowsSessions message. Also converts values to other types if specified.
         * @param message WindowsSessions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.WindowsSessions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WindowsSessions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WindowsSessions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageQuery. */
    interface IMessageQuery {

        /** MessageQuery switch_display */
        switch_display?: (number|null);
    }

    /** Represents a MessageQuery. */
    class MessageQuery implements IMessageQuery {

        /**
         * Constructs a new MessageQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IMessageQuery);

        /** MessageQuery switch_display. */
        public switch_display: number;

        /**
         * Creates a new MessageQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageQuery instance
         */
        public static create(properties?: hbb.IMessageQuery): hbb.MessageQuery;

        /**
         * Encodes the specified MessageQuery message. Does not implicitly {@link hbb.MessageQuery.verify|verify} messages.
         * @param message MessageQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IMessageQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageQuery message, length delimited. Does not implicitly {@link hbb.MessageQuery.verify|verify} messages.
         * @param message MessageQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IMessageQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.MessageQuery;

        /**
         * Decodes a MessageQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.MessageQuery;

        /**
         * Verifies a MessageQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageQuery
         */
        public static fromObject(object: { [k: string]: any }): hbb.MessageQuery;

        /**
         * Creates a plain object from a MessageQuery message. Also converts values to other types if specified.
         * @param message MessageQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.MessageQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageQuery
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Misc. */
    interface IMisc {

        /** Misc chat_message */
        chat_message?: (hbb.IChatMessage|null);

        /** Misc switch_display */
        switch_display?: (hbb.ISwitchDisplay|null);

        /** Misc permission_info */
        permission_info?: (hbb.IPermissionInfo|null);

        /** Misc option */
        option?: (hbb.IOptionMessage|null);

        /** Misc audio_format */
        audio_format?: (hbb.IAudioFormat|null);

        /** Misc close_reason */
        close_reason?: (string|null);

        /** Misc refresh_video */
        refresh_video?: (boolean|null);

        /** Misc video_received */
        video_received?: (boolean|null);

        /** Misc back_notification */
        back_notification?: (hbb.IBackNotification|null);

        /** Misc restart_remote_device */
        restart_remote_device?: (boolean|null);

        /** Misc uac */
        uac?: (boolean|null);

        /** Misc foreground_window_elevated */
        foreground_window_elevated?: (boolean|null);

        /** Misc stop_service */
        stop_service?: (boolean|null);

        /** Misc elevation_request */
        elevation_request?: (hbb.IElevationRequest|null);

        /** Misc elevation_response */
        elevation_response?: (string|null);

        /** Misc portable_service_running */
        portable_service_running?: (boolean|null);

        /** Misc switch_sides_request */
        switch_sides_request?: (hbb.ISwitchSidesRequest|null);

        /** Misc switch_back */
        switch_back?: (hbb.ISwitchBack|null);

        /** Misc change_resolution */
        change_resolution?: (hbb.IResolution|null);

        /** Misc plugin_request */
        plugin_request?: (hbb.IPluginRequest|null);

        /** Misc plugin_failure */
        plugin_failure?: (hbb.IPluginFailure|null);

        /** Misc full_speed_fps */
        full_speed_fps?: (number|null);

        /** Misc auto_adjust_fps */
        auto_adjust_fps?: (number|null);

        /** Misc client_record_status */
        client_record_status?: (boolean|null);

        /** Misc capture_displays */
        capture_displays?: (hbb.ICaptureDisplays|null);

        /** Misc refresh_video_display */
        refresh_video_display?: (number|null);

        /** Misc toggle_virtual_display */
        toggle_virtual_display?: (hbb.IToggleVirtualDisplay|null);

        /** Misc toggle_privacy_mode */
        toggle_privacy_mode?: (hbb.ITogglePrivacyMode|null);

        /** Misc supported_encoding */
        supported_encoding?: (hbb.ISupportedEncoding|null);

        /** Misc selected_sid */
        selected_sid?: (number|null);

        /** Misc change_display_resolution */
        change_display_resolution?: (hbb.IDisplayResolution|null);

        /** Misc message_query */
        message_query?: (hbb.IMessageQuery|null);

        /** Misc follow_current_display */
        follow_current_display?: (number|null);
    }

    /** Represents a Misc. */
    class Misc implements IMisc {

        /**
         * Constructs a new Misc.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IMisc);

        /** Misc chat_message. */
        public chat_message?: (hbb.IChatMessage|null);

        /** Misc switch_display. */
        public switch_display?: (hbb.ISwitchDisplay|null);

        /** Misc permission_info. */
        public permission_info?: (hbb.IPermissionInfo|null);

        /** Misc option. */
        public option?: (hbb.IOptionMessage|null);

        /** Misc audio_format. */
        public audio_format?: (hbb.IAudioFormat|null);

        /** Misc close_reason. */
        public close_reason?: (string|null);

        /** Misc refresh_video. */
        public refresh_video?: (boolean|null);

        /** Misc video_received. */
        public video_received?: (boolean|null);

        /** Misc back_notification. */
        public back_notification?: (hbb.IBackNotification|null);

        /** Misc restart_remote_device. */
        public restart_remote_device?: (boolean|null);

        /** Misc uac. */
        public uac?: (boolean|null);

        /** Misc foreground_window_elevated. */
        public foreground_window_elevated?: (boolean|null);

        /** Misc stop_service. */
        public stop_service?: (boolean|null);

        /** Misc elevation_request. */
        public elevation_request?: (hbb.IElevationRequest|null);

        /** Misc elevation_response. */
        public elevation_response?: (string|null);

        /** Misc portable_service_running. */
        public portable_service_running?: (boolean|null);

        /** Misc switch_sides_request. */
        public switch_sides_request?: (hbb.ISwitchSidesRequest|null);

        /** Misc switch_back. */
        public switch_back?: (hbb.ISwitchBack|null);

        /** Misc change_resolution. */
        public change_resolution?: (hbb.IResolution|null);

        /** Misc plugin_request. */
        public plugin_request?: (hbb.IPluginRequest|null);

        /** Misc plugin_failure. */
        public plugin_failure?: (hbb.IPluginFailure|null);

        /** Misc full_speed_fps. */
        public full_speed_fps?: (number|null);

        /** Misc auto_adjust_fps. */
        public auto_adjust_fps?: (number|null);

        /** Misc client_record_status. */
        public client_record_status?: (boolean|null);

        /** Misc capture_displays. */
        public capture_displays?: (hbb.ICaptureDisplays|null);

        /** Misc refresh_video_display. */
        public refresh_video_display?: (number|null);

        /** Misc toggle_virtual_display. */
        public toggle_virtual_display?: (hbb.IToggleVirtualDisplay|null);

        /** Misc toggle_privacy_mode. */
        public toggle_privacy_mode?: (hbb.ITogglePrivacyMode|null);

        /** Misc supported_encoding. */
        public supported_encoding?: (hbb.ISupportedEncoding|null);

        /** Misc selected_sid. */
        public selected_sid?: (number|null);

        /** Misc change_display_resolution. */
        public change_display_resolution?: (hbb.IDisplayResolution|null);

        /** Misc message_query. */
        public message_query?: (hbb.IMessageQuery|null);

        /** Misc follow_current_display. */
        public follow_current_display?: (number|null);

        /** Misc union. */
        public union?: ("chat_message"|"switch_display"|"permission_info"|"option"|"audio_format"|"close_reason"|"refresh_video"|"video_received"|"back_notification"|"restart_remote_device"|"uac"|"foreground_window_elevated"|"stop_service"|"elevation_request"|"elevation_response"|"portable_service_running"|"switch_sides_request"|"switch_back"|"change_resolution"|"plugin_request"|"plugin_failure"|"full_speed_fps"|"auto_adjust_fps"|"client_record_status"|"capture_displays"|"refresh_video_display"|"toggle_virtual_display"|"toggle_privacy_mode"|"supported_encoding"|"selected_sid"|"change_display_resolution"|"message_query"|"follow_current_display");

        /**
         * Creates a new Misc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Misc instance
         */
        public static create(properties?: hbb.IMisc): hbb.Misc;

        /**
         * Encodes the specified Misc message. Does not implicitly {@link hbb.Misc.verify|verify} messages.
         * @param message Misc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IMisc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Misc message, length delimited. Does not implicitly {@link hbb.Misc.verify|verify} messages.
         * @param message Misc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IMisc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Misc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Misc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Misc;

        /**
         * Decodes a Misc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Misc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Misc;

        /**
         * Verifies a Misc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Misc message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Misc
         */
        public static fromObject(object: { [k: string]: any }): hbb.Misc;

        /**
         * Creates a plain object from a Misc message. Also converts values to other types if specified.
         * @param message Misc
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Misc, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Misc to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Misc
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VoiceCallRequest. */
    interface IVoiceCallRequest {

        /** VoiceCallRequest req_timestamp */
        req_timestamp?: (Long|null);

        /** VoiceCallRequest is_connect */
        is_connect?: (boolean|null);
    }

    /** Represents a VoiceCallRequest. */
    class VoiceCallRequest implements IVoiceCallRequest {

        /**
         * Constructs a new VoiceCallRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IVoiceCallRequest);

        /** VoiceCallRequest req_timestamp. */
        public req_timestamp: Long;

        /** VoiceCallRequest is_connect. */
        public is_connect: boolean;

        /**
         * Creates a new VoiceCallRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoiceCallRequest instance
         */
        public static create(properties?: hbb.IVoiceCallRequest): hbb.VoiceCallRequest;

        /**
         * Encodes the specified VoiceCallRequest message. Does not implicitly {@link hbb.VoiceCallRequest.verify|verify} messages.
         * @param message VoiceCallRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IVoiceCallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoiceCallRequest message, length delimited. Does not implicitly {@link hbb.VoiceCallRequest.verify|verify} messages.
         * @param message VoiceCallRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IVoiceCallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoiceCallRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VoiceCallRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.VoiceCallRequest;

        /**
         * Decodes a VoiceCallRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VoiceCallRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.VoiceCallRequest;

        /**
         * Verifies a VoiceCallRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoiceCallRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoiceCallRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.VoiceCallRequest;

        /**
         * Creates a plain object from a VoiceCallRequest message. Also converts values to other types if specified.
         * @param message VoiceCallRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.VoiceCallRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoiceCallRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VoiceCallRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VoiceCallResponse. */
    interface IVoiceCallResponse {

        /** VoiceCallResponse accepted */
        accepted?: (boolean|null);

        /** VoiceCallResponse req_timestamp */
        req_timestamp?: (Long|null);

        /** VoiceCallResponse ack_timestamp */
        ack_timestamp?: (Long|null);
    }

    /** Represents a VoiceCallResponse. */
    class VoiceCallResponse implements IVoiceCallResponse {

        /**
         * Constructs a new VoiceCallResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IVoiceCallResponse);

        /** VoiceCallResponse accepted. */
        public accepted: boolean;

        /** VoiceCallResponse req_timestamp. */
        public req_timestamp: Long;

        /** VoiceCallResponse ack_timestamp. */
        public ack_timestamp: Long;

        /**
         * Creates a new VoiceCallResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoiceCallResponse instance
         */
        public static create(properties?: hbb.IVoiceCallResponse): hbb.VoiceCallResponse;

        /**
         * Encodes the specified VoiceCallResponse message. Does not implicitly {@link hbb.VoiceCallResponse.verify|verify} messages.
         * @param message VoiceCallResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IVoiceCallResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoiceCallResponse message, length delimited. Does not implicitly {@link hbb.VoiceCallResponse.verify|verify} messages.
         * @param message VoiceCallResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IVoiceCallResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoiceCallResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VoiceCallResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.VoiceCallResponse;

        /**
         * Decodes a VoiceCallResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VoiceCallResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.VoiceCallResponse;

        /**
         * Verifies a VoiceCallResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoiceCallResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoiceCallResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.VoiceCallResponse;

        /**
         * Creates a plain object from a VoiceCallResponse message. Also converts values to other types if specified.
         * @param message VoiceCallResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.VoiceCallResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoiceCallResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VoiceCallResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ScreenshotRequest. */
    interface IScreenshotRequest {

        /** ScreenshotRequest display */
        display?: (number|null);

        /** ScreenshotRequest sid */
        sid?: (string|null);
    }

    /** Represents a ScreenshotRequest. */
    class ScreenshotRequest implements IScreenshotRequest {

        /**
         * Constructs a new ScreenshotRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IScreenshotRequest);

        /** ScreenshotRequest display. */
        public display: number;

        /** ScreenshotRequest sid. */
        public sid: string;

        /**
         * Creates a new ScreenshotRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScreenshotRequest instance
         */
        public static create(properties?: hbb.IScreenshotRequest): hbb.ScreenshotRequest;

        /**
         * Encodes the specified ScreenshotRequest message. Does not implicitly {@link hbb.ScreenshotRequest.verify|verify} messages.
         * @param message ScreenshotRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IScreenshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScreenshotRequest message, length delimited. Does not implicitly {@link hbb.ScreenshotRequest.verify|verify} messages.
         * @param message ScreenshotRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IScreenshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScreenshotRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScreenshotRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ScreenshotRequest;

        /**
         * Decodes a ScreenshotRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScreenshotRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ScreenshotRequest;

        /**
         * Verifies a ScreenshotRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScreenshotRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScreenshotRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.ScreenshotRequest;

        /**
         * Creates a plain object from a ScreenshotRequest message. Also converts values to other types if specified.
         * @param message ScreenshotRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ScreenshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScreenshotRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ScreenshotRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ScreenshotResponse. */
    interface IScreenshotResponse {

        /** ScreenshotResponse sid */
        sid?: (string|null);

        /** ScreenshotResponse msg */
        msg?: (string|null);

        /** ScreenshotResponse data */
        data?: (Uint8Array|null);
    }

    /** Represents a ScreenshotResponse. */
    class ScreenshotResponse implements IScreenshotResponse {

        /**
         * Constructs a new ScreenshotResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IScreenshotResponse);

        /** ScreenshotResponse sid. */
        public sid: string;

        /** ScreenshotResponse msg. */
        public msg: string;

        /** ScreenshotResponse data. */
        public data: Uint8Array;

        /**
         * Creates a new ScreenshotResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScreenshotResponse instance
         */
        public static create(properties?: hbb.IScreenshotResponse): hbb.ScreenshotResponse;

        /**
         * Encodes the specified ScreenshotResponse message. Does not implicitly {@link hbb.ScreenshotResponse.verify|verify} messages.
         * @param message ScreenshotResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IScreenshotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScreenshotResponse message, length delimited. Does not implicitly {@link hbb.ScreenshotResponse.verify|verify} messages.
         * @param message ScreenshotResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IScreenshotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScreenshotResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScreenshotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ScreenshotResponse;

        /**
         * Decodes a ScreenshotResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScreenshotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ScreenshotResponse;

        /**
         * Verifies a ScreenshotResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScreenshotResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScreenshotResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.ScreenshotResponse;

        /**
         * Creates a plain object from a ScreenshotResponse message. Also converts values to other types if specified.
         * @param message ScreenshotResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ScreenshotResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScreenshotResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ScreenshotResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OpenTerminal. */
    interface IOpenTerminal {

        /** OpenTerminal terminal_id */
        terminal_id?: (number|null);

        /** OpenTerminal rows */
        rows?: (number|null);

        /** OpenTerminal cols */
        cols?: (number|null);
    }

    /** Represents an OpenTerminal. */
    class OpenTerminal implements IOpenTerminal {

        /**
         * Constructs a new OpenTerminal.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IOpenTerminal);

        /** OpenTerminal terminal_id. */
        public terminal_id: number;

        /** OpenTerminal rows. */
        public rows: number;

        /** OpenTerminal cols. */
        public cols: number;

        /**
         * Creates a new OpenTerminal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenTerminal instance
         */
        public static create(properties?: hbb.IOpenTerminal): hbb.OpenTerminal;

        /**
         * Encodes the specified OpenTerminal message. Does not implicitly {@link hbb.OpenTerminal.verify|verify} messages.
         * @param message OpenTerminal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IOpenTerminal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenTerminal message, length delimited. Does not implicitly {@link hbb.OpenTerminal.verify|verify} messages.
         * @param message OpenTerminal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IOpenTerminal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenTerminal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenTerminal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.OpenTerminal;

        /**
         * Decodes an OpenTerminal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenTerminal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.OpenTerminal;

        /**
         * Verifies an OpenTerminal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenTerminal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenTerminal
         */
        public static fromObject(object: { [k: string]: any }): hbb.OpenTerminal;

        /**
         * Creates a plain object from an OpenTerminal message. Also converts values to other types if specified.
         * @param message OpenTerminal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.OpenTerminal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenTerminal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OpenTerminal
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResizeTerminal. */
    interface IResizeTerminal {

        /** ResizeTerminal terminal_id */
        terminal_id?: (number|null);

        /** ResizeTerminal rows */
        rows?: (number|null);

        /** ResizeTerminal cols */
        cols?: (number|null);
    }

    /** Represents a ResizeTerminal. */
    class ResizeTerminal implements IResizeTerminal {

        /**
         * Constructs a new ResizeTerminal.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IResizeTerminal);

        /** ResizeTerminal terminal_id. */
        public terminal_id: number;

        /** ResizeTerminal rows. */
        public rows: number;

        /** ResizeTerminal cols. */
        public cols: number;

        /**
         * Creates a new ResizeTerminal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResizeTerminal instance
         */
        public static create(properties?: hbb.IResizeTerminal): hbb.ResizeTerminal;

        /**
         * Encodes the specified ResizeTerminal message. Does not implicitly {@link hbb.ResizeTerminal.verify|verify} messages.
         * @param message ResizeTerminal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IResizeTerminal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResizeTerminal message, length delimited. Does not implicitly {@link hbb.ResizeTerminal.verify|verify} messages.
         * @param message ResizeTerminal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IResizeTerminal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResizeTerminal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResizeTerminal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ResizeTerminal;

        /**
         * Decodes a ResizeTerminal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResizeTerminal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ResizeTerminal;

        /**
         * Verifies a ResizeTerminal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResizeTerminal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResizeTerminal
         */
        public static fromObject(object: { [k: string]: any }): hbb.ResizeTerminal;

        /**
         * Creates a plain object from a ResizeTerminal message. Also converts values to other types if specified.
         * @param message ResizeTerminal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ResizeTerminal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResizeTerminal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResizeTerminal
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TerminalData. */
    interface ITerminalData {

        /** TerminalData terminal_id */
        terminal_id?: (number|null);

        /** TerminalData data */
        data?: (Uint8Array|null);

        /** TerminalData compressed */
        compressed?: (boolean|null);
    }

    /** Represents a TerminalData. */
    class TerminalData implements ITerminalData {

        /**
         * Constructs a new TerminalData.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITerminalData);

        /** TerminalData terminal_id. */
        public terminal_id: number;

        /** TerminalData data. */
        public data: Uint8Array;

        /** TerminalData compressed. */
        public compressed: boolean;

        /**
         * Creates a new TerminalData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TerminalData instance
         */
        public static create(properties?: hbb.ITerminalData): hbb.TerminalData;

        /**
         * Encodes the specified TerminalData message. Does not implicitly {@link hbb.TerminalData.verify|verify} messages.
         * @param message TerminalData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITerminalData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TerminalData message, length delimited. Does not implicitly {@link hbb.TerminalData.verify|verify} messages.
         * @param message TerminalData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITerminalData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TerminalData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TerminalData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TerminalData;

        /**
         * Decodes a TerminalData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TerminalData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TerminalData;

        /**
         * Verifies a TerminalData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TerminalData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TerminalData
         */
        public static fromObject(object: { [k: string]: any }): hbb.TerminalData;

        /**
         * Creates a plain object from a TerminalData message. Also converts values to other types if specified.
         * @param message TerminalData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TerminalData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TerminalData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TerminalData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CloseTerminal. */
    interface ICloseTerminal {

        /** CloseTerminal terminal_id */
        terminal_id?: (number|null);
    }

    /** Represents a CloseTerminal. */
    class CloseTerminal implements ICloseTerminal {

        /**
         * Constructs a new CloseTerminal.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ICloseTerminal);

        /** CloseTerminal terminal_id. */
        public terminal_id: number;

        /**
         * Creates a new CloseTerminal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseTerminal instance
         */
        public static create(properties?: hbb.ICloseTerminal): hbb.CloseTerminal;

        /**
         * Encodes the specified CloseTerminal message. Does not implicitly {@link hbb.CloseTerminal.verify|verify} messages.
         * @param message CloseTerminal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ICloseTerminal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseTerminal message, length delimited. Does not implicitly {@link hbb.CloseTerminal.verify|verify} messages.
         * @param message CloseTerminal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ICloseTerminal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseTerminal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseTerminal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.CloseTerminal;

        /**
         * Decodes a CloseTerminal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseTerminal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.CloseTerminal;

        /**
         * Verifies a CloseTerminal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseTerminal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseTerminal
         */
        public static fromObject(object: { [k: string]: any }): hbb.CloseTerminal;

        /**
         * Creates a plain object from a CloseTerminal message. Also converts values to other types if specified.
         * @param message CloseTerminal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.CloseTerminal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseTerminal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CloseTerminal
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TerminalAction. */
    interface ITerminalAction {

        /** TerminalAction open */
        open?: (hbb.IOpenTerminal|null);

        /** TerminalAction data */
        data?: (hbb.ITerminalData|null);

        /** TerminalAction resize */
        resize?: (hbb.IResizeTerminal|null);

        /** TerminalAction close */
        close?: (hbb.ICloseTerminal|null);
    }

    /** Represents a TerminalAction. */
    class TerminalAction implements ITerminalAction {

        /**
         * Constructs a new TerminalAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITerminalAction);

        /** TerminalAction open. */
        public open?: (hbb.IOpenTerminal|null);

        /** TerminalAction data. */
        public data?: (hbb.ITerminalData|null);

        /** TerminalAction resize. */
        public resize?: (hbb.IResizeTerminal|null);

        /** TerminalAction close. */
        public close?: (hbb.ICloseTerminal|null);

        /** TerminalAction union. */
        public union?: ("open"|"data"|"resize"|"close");

        /**
         * Creates a new TerminalAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TerminalAction instance
         */
        public static create(properties?: hbb.ITerminalAction): hbb.TerminalAction;

        /**
         * Encodes the specified TerminalAction message. Does not implicitly {@link hbb.TerminalAction.verify|verify} messages.
         * @param message TerminalAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITerminalAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TerminalAction message, length delimited. Does not implicitly {@link hbb.TerminalAction.verify|verify} messages.
         * @param message TerminalAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITerminalAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TerminalAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TerminalAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TerminalAction;

        /**
         * Decodes a TerminalAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TerminalAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TerminalAction;

        /**
         * Verifies a TerminalAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TerminalAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TerminalAction
         */
        public static fromObject(object: { [k: string]: any }): hbb.TerminalAction;

        /**
         * Creates a plain object from a TerminalAction message. Also converts values to other types if specified.
         * @param message TerminalAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TerminalAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TerminalAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TerminalAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TerminalOpened. */
    interface ITerminalOpened {

        /** TerminalOpened terminal_id */
        terminal_id?: (number|null);

        /** TerminalOpened success */
        success?: (boolean|null);

        /** TerminalOpened message */
        message?: (string|null);

        /** TerminalOpened pid */
        pid?: (number|null);

        /** TerminalOpened service_id */
        service_id?: (string|null);

        /** TerminalOpened persistent_sessions */
        persistent_sessions?: (number[]|null);
    }

    /** Represents a TerminalOpened. */
    class TerminalOpened implements ITerminalOpened {

        /**
         * Constructs a new TerminalOpened.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITerminalOpened);

        /** TerminalOpened terminal_id. */
        public terminal_id: number;

        /** TerminalOpened success. */
        public success: boolean;

        /** TerminalOpened message. */
        public message: string;

        /** TerminalOpened pid. */
        public pid: number;

        /** TerminalOpened service_id. */
        public service_id: string;

        /** TerminalOpened persistent_sessions. */
        public persistent_sessions: number[];

        /**
         * Creates a new TerminalOpened instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TerminalOpened instance
         */
        public static create(properties?: hbb.ITerminalOpened): hbb.TerminalOpened;

        /**
         * Encodes the specified TerminalOpened message. Does not implicitly {@link hbb.TerminalOpened.verify|verify} messages.
         * @param message TerminalOpened message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITerminalOpened, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TerminalOpened message, length delimited. Does not implicitly {@link hbb.TerminalOpened.verify|verify} messages.
         * @param message TerminalOpened message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITerminalOpened, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TerminalOpened message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TerminalOpened
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TerminalOpened;

        /**
         * Decodes a TerminalOpened message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TerminalOpened
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TerminalOpened;

        /**
         * Verifies a TerminalOpened message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TerminalOpened message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TerminalOpened
         */
        public static fromObject(object: { [k: string]: any }): hbb.TerminalOpened;

        /**
         * Creates a plain object from a TerminalOpened message. Also converts values to other types if specified.
         * @param message TerminalOpened
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TerminalOpened, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TerminalOpened to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TerminalOpened
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TerminalClosed. */
    interface ITerminalClosed {

        /** TerminalClosed terminal_id */
        terminal_id?: (number|null);

        /** TerminalClosed exit_code */
        exit_code?: (number|null);
    }

    /** Represents a TerminalClosed. */
    class TerminalClosed implements ITerminalClosed {

        /**
         * Constructs a new TerminalClosed.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITerminalClosed);

        /** TerminalClosed terminal_id. */
        public terminal_id: number;

        /** TerminalClosed exit_code. */
        public exit_code: number;

        /**
         * Creates a new TerminalClosed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TerminalClosed instance
         */
        public static create(properties?: hbb.ITerminalClosed): hbb.TerminalClosed;

        /**
         * Encodes the specified TerminalClosed message. Does not implicitly {@link hbb.TerminalClosed.verify|verify} messages.
         * @param message TerminalClosed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITerminalClosed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TerminalClosed message, length delimited. Does not implicitly {@link hbb.TerminalClosed.verify|verify} messages.
         * @param message TerminalClosed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITerminalClosed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TerminalClosed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TerminalClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TerminalClosed;

        /**
         * Decodes a TerminalClosed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TerminalClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TerminalClosed;

        /**
         * Verifies a TerminalClosed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TerminalClosed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TerminalClosed
         */
        public static fromObject(object: { [k: string]: any }): hbb.TerminalClosed;

        /**
         * Creates a plain object from a TerminalClosed message. Also converts values to other types if specified.
         * @param message TerminalClosed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TerminalClosed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TerminalClosed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TerminalClosed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TerminalError. */
    interface ITerminalError {

        /** TerminalError terminal_id */
        terminal_id?: (number|null);

        /** TerminalError message */
        message?: (string|null);
    }

    /** Represents a TerminalError. */
    class TerminalError implements ITerminalError {

        /**
         * Constructs a new TerminalError.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITerminalError);

        /** TerminalError terminal_id. */
        public terminal_id: number;

        /** TerminalError message. */
        public message: string;

        /**
         * Creates a new TerminalError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TerminalError instance
         */
        public static create(properties?: hbb.ITerminalError): hbb.TerminalError;

        /**
         * Encodes the specified TerminalError message. Does not implicitly {@link hbb.TerminalError.verify|verify} messages.
         * @param message TerminalError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITerminalError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TerminalError message, length delimited. Does not implicitly {@link hbb.TerminalError.verify|verify} messages.
         * @param message TerminalError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITerminalError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TerminalError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TerminalError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TerminalError;

        /**
         * Decodes a TerminalError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TerminalError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TerminalError;

        /**
         * Verifies a TerminalError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TerminalError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TerminalError
         */
        public static fromObject(object: { [k: string]: any }): hbb.TerminalError;

        /**
         * Creates a plain object from a TerminalError message. Also converts values to other types if specified.
         * @param message TerminalError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TerminalError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TerminalError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TerminalError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TerminalResponse. */
    interface ITerminalResponse {

        /** TerminalResponse opened */
        opened?: (hbb.ITerminalOpened|null);

        /** TerminalResponse data */
        data?: (hbb.ITerminalData|null);

        /** TerminalResponse closed */
        closed?: (hbb.ITerminalClosed|null);

        /** TerminalResponse error */
        error?: (hbb.ITerminalError|null);
    }

    /** Represents a TerminalResponse. */
    class TerminalResponse implements ITerminalResponse {

        /**
         * Constructs a new TerminalResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITerminalResponse);

        /** TerminalResponse opened. */
        public opened?: (hbb.ITerminalOpened|null);

        /** TerminalResponse data. */
        public data?: (hbb.ITerminalData|null);

        /** TerminalResponse closed. */
        public closed?: (hbb.ITerminalClosed|null);

        /** TerminalResponse error. */
        public error?: (hbb.ITerminalError|null);

        /** TerminalResponse union. */
        public union?: ("opened"|"data"|"closed"|"error");

        /**
         * Creates a new TerminalResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TerminalResponse instance
         */
        public static create(properties?: hbb.ITerminalResponse): hbb.TerminalResponse;

        /**
         * Encodes the specified TerminalResponse message. Does not implicitly {@link hbb.TerminalResponse.verify|verify} messages.
         * @param message TerminalResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITerminalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TerminalResponse message, length delimited. Does not implicitly {@link hbb.TerminalResponse.verify|verify} messages.
         * @param message TerminalResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITerminalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TerminalResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TerminalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TerminalResponse;

        /**
         * Decodes a TerminalResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TerminalResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TerminalResponse;

        /**
         * Verifies a TerminalResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TerminalResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TerminalResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.TerminalResponse;

        /**
         * Creates a plain object from a TerminalResponse message. Also converts values to other types if specified.
         * @param message TerminalResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TerminalResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TerminalResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TerminalResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message signed_id */
        signed_id?: (hbb.ISignedId|null);

        /** Message public_key */
        public_key?: (hbb.IPublicKey|null);

        /** Message test_delay */
        test_delay?: (hbb.ITestDelay|null);

        /** Message video_frame */
        video_frame?: (hbb.IVideoFrame|null);

        /** Message login_request */
        login_request?: (hbb.ILoginRequest|null);

        /** Message login_response */
        login_response?: (hbb.ILoginResponse|null);

        /** Message hash */
        hash?: (hbb.IHash|null);

        /** Message mouse_event */
        mouse_event?: (hbb.IMouseEvent|null);

        /** Message audio_frame */
        audio_frame?: (hbb.IAudioFrame|null);

        /** Message cursor_data */
        cursor_data?: (hbb.ICursorData|null);

        /** Message cursor_position */
        cursor_position?: (hbb.ICursorPosition|null);

        /** Message cursor_id */
        cursor_id?: (Long|null);

        /** Message key_event */
        key_event?: (hbb.IKeyEvent|null);

        /** Message clipboard */
        clipboard?: (hbb.IClipboard|null);

        /** Message file_action */
        file_action?: (hbb.IFileAction|null);

        /** Message file_response */
        file_response?: (hbb.IFileResponse|null);

        /** Message misc */
        misc?: (hbb.IMisc|null);

        /** Message cliprdr */
        cliprdr?: (hbb.ICliprdr|null);

        /** Message message_box */
        message_box?: (hbb.IMessageBox|null);

        /** Message switch_sides_response */
        switch_sides_response?: (hbb.ISwitchSidesResponse|null);

        /** Message voice_call_request */
        voice_call_request?: (hbb.IVoiceCallRequest|null);

        /** Message voice_call_response */
        voice_call_response?: (hbb.IVoiceCallResponse|null);

        /** Message peer_info */
        peer_info?: (hbb.IPeerInfo|null);

        /** Message pointer_device_event */
        pointer_device_event?: (hbb.IPointerDeviceEvent|null);

        /** Message auth_2fa */
        auth_2fa?: (hbb.IAuth2FA|null);

        /** Message multi_clipboards */
        multi_clipboards?: (hbb.IMultiClipboards|null);

        /** Message screenshot_request */
        screenshot_request?: (hbb.IScreenshotRequest|null);

        /** Message screenshot_response */
        screenshot_response?: (hbb.IScreenshotResponse|null);

        /** Message terminal_action */
        terminal_action?: (hbb.ITerminalAction|null);

        /** Message terminal_response */
        terminal_response?: (hbb.ITerminalResponse|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IMessage);

        /** Message signed_id. */
        public signed_id?: (hbb.ISignedId|null);

        /** Message public_key. */
        public public_key?: (hbb.IPublicKey|null);

        /** Message test_delay. */
        public test_delay?: (hbb.ITestDelay|null);

        /** Message video_frame. */
        public video_frame?: (hbb.IVideoFrame|null);

        /** Message login_request. */
        public login_request?: (hbb.ILoginRequest|null);

        /** Message login_response. */
        public login_response?: (hbb.ILoginResponse|null);

        /** Message hash. */
        public hash?: (hbb.IHash|null);

        /** Message mouse_event. */
        public mouse_event?: (hbb.IMouseEvent|null);

        /** Message audio_frame. */
        public audio_frame?: (hbb.IAudioFrame|null);

        /** Message cursor_data. */
        public cursor_data?: (hbb.ICursorData|null);

        /** Message cursor_position. */
        public cursor_position?: (hbb.ICursorPosition|null);

        /** Message cursor_id. */
        public cursor_id?: (Long|null);

        /** Message key_event. */
        public key_event?: (hbb.IKeyEvent|null);

        /** Message clipboard. */
        public clipboard?: (hbb.IClipboard|null);

        /** Message file_action. */
        public file_action?: (hbb.IFileAction|null);

        /** Message file_response. */
        public file_response?: (hbb.IFileResponse|null);

        /** Message misc. */
        public misc?: (hbb.IMisc|null);

        /** Message cliprdr. */
        public cliprdr?: (hbb.ICliprdr|null);

        /** Message message_box. */
        public message_box?: (hbb.IMessageBox|null);

        /** Message switch_sides_response. */
        public switch_sides_response?: (hbb.ISwitchSidesResponse|null);

        /** Message voice_call_request. */
        public voice_call_request?: (hbb.IVoiceCallRequest|null);

        /** Message voice_call_response. */
        public voice_call_response?: (hbb.IVoiceCallResponse|null);

        /** Message peer_info. */
        public peer_info?: (hbb.IPeerInfo|null);

        /** Message pointer_device_event. */
        public pointer_device_event?: (hbb.IPointerDeviceEvent|null);

        /** Message auth_2fa. */
        public auth_2fa?: (hbb.IAuth2FA|null);

        /** Message multi_clipboards. */
        public multi_clipboards?: (hbb.IMultiClipboards|null);

        /** Message screenshot_request. */
        public screenshot_request?: (hbb.IScreenshotRequest|null);

        /** Message screenshot_response. */
        public screenshot_response?: (hbb.IScreenshotResponse|null);

        /** Message terminal_action. */
        public terminal_action?: (hbb.ITerminalAction|null);

        /** Message terminal_response. */
        public terminal_response?: (hbb.ITerminalResponse|null);

        /** Message union. */
        public union?: ("signed_id"|"public_key"|"test_delay"|"video_frame"|"login_request"|"login_response"|"hash"|"mouse_event"|"audio_frame"|"cursor_data"|"cursor_position"|"cursor_id"|"key_event"|"clipboard"|"file_action"|"file_response"|"misc"|"cliprdr"|"message_box"|"switch_sides_response"|"voice_call_request"|"voice_call_response"|"peer_info"|"pointer_device_event"|"auth_2fa"|"multi_clipboards"|"screenshot_request"|"screenshot_response"|"terminal_action"|"terminal_response");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: hbb.IMessage): hbb.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link hbb.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link hbb.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): hbb.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterPeer. */
    interface IRegisterPeer {

        /** RegisterPeer id */
        id?: (string|null);

        /** RegisterPeer serial */
        serial?: (number|null);
    }

    /** Represents a RegisterPeer. */
    class RegisterPeer implements IRegisterPeer {

        /**
         * Constructs a new RegisterPeer.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IRegisterPeer);

        /** RegisterPeer id. */
        public id: string;

        /** RegisterPeer serial. */
        public serial: number;

        /**
         * Creates a new RegisterPeer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterPeer instance
         */
        public static create(properties?: hbb.IRegisterPeer): hbb.RegisterPeer;

        /**
         * Encodes the specified RegisterPeer message. Does not implicitly {@link hbb.RegisterPeer.verify|verify} messages.
         * @param message RegisterPeer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IRegisterPeer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterPeer message, length delimited. Does not implicitly {@link hbb.RegisterPeer.verify|verify} messages.
         * @param message RegisterPeer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IRegisterPeer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterPeer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterPeer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.RegisterPeer;

        /**
         * Decodes a RegisterPeer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterPeer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.RegisterPeer;

        /**
         * Verifies a RegisterPeer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterPeer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterPeer
         */
        public static fromObject(object: { [k: string]: any }): hbb.RegisterPeer;

        /**
         * Creates a plain object from a RegisterPeer message. Also converts values to other types if specified.
         * @param message RegisterPeer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.RegisterPeer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterPeer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterPeer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ConnType enum. */
    enum ConnType {
        DEFAULT_CONN = 0,
        FILE_TRANSFER = 1,
        PORT_FORWARD = 2,
        RDP = 3,
        VIEW_CAMERA = 4,
        TERMINAL = 5
    }

    /** Properties of a RegisterPeerResponse. */
    interface IRegisterPeerResponse {

        /** RegisterPeerResponse request_pk */
        request_pk?: (boolean|null);
    }

    /** Represents a RegisterPeerResponse. */
    class RegisterPeerResponse implements IRegisterPeerResponse {

        /**
         * Constructs a new RegisterPeerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IRegisterPeerResponse);

        /** RegisterPeerResponse request_pk. */
        public request_pk: boolean;

        /**
         * Creates a new RegisterPeerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterPeerResponse instance
         */
        public static create(properties?: hbb.IRegisterPeerResponse): hbb.RegisterPeerResponse;

        /**
         * Encodes the specified RegisterPeerResponse message. Does not implicitly {@link hbb.RegisterPeerResponse.verify|verify} messages.
         * @param message RegisterPeerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IRegisterPeerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterPeerResponse message, length delimited. Does not implicitly {@link hbb.RegisterPeerResponse.verify|verify} messages.
         * @param message RegisterPeerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IRegisterPeerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterPeerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterPeerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.RegisterPeerResponse;

        /**
         * Decodes a RegisterPeerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterPeerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.RegisterPeerResponse;

        /**
         * Verifies a RegisterPeerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterPeerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterPeerResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.RegisterPeerResponse;

        /**
         * Creates a plain object from a RegisterPeerResponse message. Also converts values to other types if specified.
         * @param message RegisterPeerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.RegisterPeerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterPeerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterPeerResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PunchHoleRequest. */
    interface IPunchHoleRequest {

        /** PunchHoleRequest id */
        id?: (string|null);

        /** PunchHoleRequest nat_type */
        nat_type?: (hbb.NatType|null);

        /** PunchHoleRequest licence_key */
        licence_key?: (string|null);

        /** PunchHoleRequest conn_type */
        conn_type?: (hbb.ConnType|null);

        /** PunchHoleRequest token */
        token?: (string|null);

        /** PunchHoleRequest version */
        version?: (string|null);

        /** PunchHoleRequest udp_port */
        udp_port?: (number|null);

        /** PunchHoleRequest force_relay */
        force_relay?: (boolean|null);

        /** PunchHoleRequest upnp_port */
        upnp_port?: (number|null);

        /** PunchHoleRequest socket_addr_v6 */
        socket_addr_v6?: (Uint8Array|null);
    }

    /** Represents a PunchHoleRequest. */
    class PunchHoleRequest implements IPunchHoleRequest {

        /**
         * Constructs a new PunchHoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPunchHoleRequest);

        /** PunchHoleRequest id. */
        public id: string;

        /** PunchHoleRequest nat_type. */
        public nat_type: hbb.NatType;

        /** PunchHoleRequest licence_key. */
        public licence_key: string;

        /** PunchHoleRequest conn_type. */
        public conn_type: hbb.ConnType;

        /** PunchHoleRequest token. */
        public token: string;

        /** PunchHoleRequest version. */
        public version: string;

        /** PunchHoleRequest udp_port. */
        public udp_port: number;

        /** PunchHoleRequest force_relay. */
        public force_relay: boolean;

        /** PunchHoleRequest upnp_port. */
        public upnp_port: number;

        /** PunchHoleRequest socket_addr_v6. */
        public socket_addr_v6: Uint8Array;

        /**
         * Creates a new PunchHoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PunchHoleRequest instance
         */
        public static create(properties?: hbb.IPunchHoleRequest): hbb.PunchHoleRequest;

        /**
         * Encodes the specified PunchHoleRequest message. Does not implicitly {@link hbb.PunchHoleRequest.verify|verify} messages.
         * @param message PunchHoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPunchHoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PunchHoleRequest message, length delimited. Does not implicitly {@link hbb.PunchHoleRequest.verify|verify} messages.
         * @param message PunchHoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPunchHoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PunchHoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PunchHoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PunchHoleRequest;

        /**
         * Decodes a PunchHoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PunchHoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PunchHoleRequest;

        /**
         * Verifies a PunchHoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PunchHoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PunchHoleRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.PunchHoleRequest;

        /**
         * Creates a plain object from a PunchHoleRequest message. Also converts values to other types if specified.
         * @param message PunchHoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PunchHoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PunchHoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PunchHoleRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ControlPermissions. */
    interface IControlPermissions {

        /** ControlPermissions permissions */
        permissions?: (Long|null);
    }

    /** Represents a ControlPermissions. */
    class ControlPermissions implements IControlPermissions {

        /**
         * Constructs a new ControlPermissions.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IControlPermissions);

        /** ControlPermissions permissions. */
        public permissions: Long;

        /**
         * Creates a new ControlPermissions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ControlPermissions instance
         */
        public static create(properties?: hbb.IControlPermissions): hbb.ControlPermissions;

        /**
         * Encodes the specified ControlPermissions message. Does not implicitly {@link hbb.ControlPermissions.verify|verify} messages.
         * @param message ControlPermissions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IControlPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ControlPermissions message, length delimited. Does not implicitly {@link hbb.ControlPermissions.verify|verify} messages.
         * @param message ControlPermissions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IControlPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ControlPermissions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ControlPermissions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ControlPermissions;

        /**
         * Decodes a ControlPermissions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ControlPermissions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ControlPermissions;

        /**
         * Verifies a ControlPermissions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ControlPermissions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ControlPermissions
         */
        public static fromObject(object: { [k: string]: any }): hbb.ControlPermissions;

        /**
         * Creates a plain object from a ControlPermissions message. Also converts values to other types if specified.
         * @param message ControlPermissions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ControlPermissions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ControlPermissions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ControlPermissions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ControlPermissions {

        /** Permission enum. */
        enum Permission {
            keyboard = 0,
            remote_printer = 1,
            clipboard = 2,
            file = 3,
            audio = 4,
            camera = 5,
            terminal = 6,
            tunnel = 7,
            restart = 8,
            recording = 9,
            block_input = 10,
            remote_modify = 11
        }
    }

    /** Properties of a PunchHole. */
    interface IPunchHole {

        /** PunchHole socket_addr */
        socket_addr?: (Uint8Array|null);

        /** PunchHole relay_server */
        relay_server?: (string|null);

        /** PunchHole nat_type */
        nat_type?: (hbb.NatType|null);

        /** PunchHole udp_port */
        udp_port?: (number|null);

        /** PunchHole force_relay */
        force_relay?: (boolean|null);

        /** PunchHole upnp_port */
        upnp_port?: (number|null);

        /** PunchHole socket_addr_v6 */
        socket_addr_v6?: (Uint8Array|null);

        /** PunchHole control_permissions */
        control_permissions?: (hbb.IControlPermissions|null);
    }

    /** Represents a PunchHole. */
    class PunchHole implements IPunchHole {

        /**
         * Constructs a new PunchHole.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPunchHole);

        /** PunchHole socket_addr. */
        public socket_addr: Uint8Array;

        /** PunchHole relay_server. */
        public relay_server: string;

        /** PunchHole nat_type. */
        public nat_type: hbb.NatType;

        /** PunchHole udp_port. */
        public udp_port: number;

        /** PunchHole force_relay. */
        public force_relay: boolean;

        /** PunchHole upnp_port. */
        public upnp_port: number;

        /** PunchHole socket_addr_v6. */
        public socket_addr_v6: Uint8Array;

        /** PunchHole control_permissions. */
        public control_permissions?: (hbb.IControlPermissions|null);

        /**
         * Creates a new PunchHole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PunchHole instance
         */
        public static create(properties?: hbb.IPunchHole): hbb.PunchHole;

        /**
         * Encodes the specified PunchHole message. Does not implicitly {@link hbb.PunchHole.verify|verify} messages.
         * @param message PunchHole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPunchHole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PunchHole message, length delimited. Does not implicitly {@link hbb.PunchHole.verify|verify} messages.
         * @param message PunchHole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPunchHole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PunchHole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PunchHole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PunchHole;

        /**
         * Decodes a PunchHole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PunchHole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PunchHole;

        /**
         * Verifies a PunchHole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PunchHole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PunchHole
         */
        public static fromObject(object: { [k: string]: any }): hbb.PunchHole;

        /**
         * Creates a plain object from a PunchHole message. Also converts values to other types if specified.
         * @param message PunchHole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PunchHole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PunchHole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PunchHole
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TestNatRequest. */
    interface ITestNatRequest {

        /** TestNatRequest serial */
        serial?: (number|null);
    }

    /** Represents a TestNatRequest. */
    class TestNatRequest implements ITestNatRequest {

        /**
         * Constructs a new TestNatRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITestNatRequest);

        /** TestNatRequest serial. */
        public serial: number;

        /**
         * Creates a new TestNatRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestNatRequest instance
         */
        public static create(properties?: hbb.ITestNatRequest): hbb.TestNatRequest;

        /**
         * Encodes the specified TestNatRequest message. Does not implicitly {@link hbb.TestNatRequest.verify|verify} messages.
         * @param message TestNatRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITestNatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestNatRequest message, length delimited. Does not implicitly {@link hbb.TestNatRequest.verify|verify} messages.
         * @param message TestNatRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITestNatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestNatRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestNatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TestNatRequest;

        /**
         * Decodes a TestNatRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestNatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TestNatRequest;

        /**
         * Verifies a TestNatRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestNatRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestNatRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.TestNatRequest;

        /**
         * Creates a plain object from a TestNatRequest message. Also converts values to other types if specified.
         * @param message TestNatRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TestNatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestNatRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TestNatRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TestNatResponse. */
    interface ITestNatResponse {

        /** TestNatResponse port */
        port?: (number|null);

        /** TestNatResponse cu */
        cu?: (hbb.IConfigUpdate|null);
    }

    /** Represents a TestNatResponse. */
    class TestNatResponse implements ITestNatResponse {

        /**
         * Constructs a new TestNatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ITestNatResponse);

        /** TestNatResponse port. */
        public port: number;

        /** TestNatResponse cu. */
        public cu?: (hbb.IConfigUpdate|null);

        /**
         * Creates a new TestNatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestNatResponse instance
         */
        public static create(properties?: hbb.ITestNatResponse): hbb.TestNatResponse;

        /**
         * Encodes the specified TestNatResponse message. Does not implicitly {@link hbb.TestNatResponse.verify|verify} messages.
         * @param message TestNatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ITestNatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestNatResponse message, length delimited. Does not implicitly {@link hbb.TestNatResponse.verify|verify} messages.
         * @param message TestNatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ITestNatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestNatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestNatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.TestNatResponse;

        /**
         * Decodes a TestNatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestNatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.TestNatResponse;

        /**
         * Verifies a TestNatResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestNatResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestNatResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.TestNatResponse;

        /**
         * Creates a plain object from a TestNatResponse message. Also converts values to other types if specified.
         * @param message TestNatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.TestNatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestNatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TestNatResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** NatType enum. */
    enum NatType {
        UNKNOWN_NAT = 0,
        ASYMMETRIC = 1,
        SYMMETRIC = 2
    }

    /** Properties of a PunchHoleSent. */
    interface IPunchHoleSent {

        /** PunchHoleSent socket_addr */
        socket_addr?: (Uint8Array|null);

        /** PunchHoleSent id */
        id?: (string|null);

        /** PunchHoleSent relay_server */
        relay_server?: (string|null);

        /** PunchHoleSent nat_type */
        nat_type?: (hbb.NatType|null);

        /** PunchHoleSent version */
        version?: (string|null);

        /** PunchHoleSent upnp_port */
        upnp_port?: (number|null);

        /** PunchHoleSent socket_addr_v6 */
        socket_addr_v6?: (Uint8Array|null);
    }

    /** Represents a PunchHoleSent. */
    class PunchHoleSent implements IPunchHoleSent {

        /**
         * Constructs a new PunchHoleSent.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPunchHoleSent);

        /** PunchHoleSent socket_addr. */
        public socket_addr: Uint8Array;

        /** PunchHoleSent id. */
        public id: string;

        /** PunchHoleSent relay_server. */
        public relay_server: string;

        /** PunchHoleSent nat_type. */
        public nat_type: hbb.NatType;

        /** PunchHoleSent version. */
        public version: string;

        /** PunchHoleSent upnp_port. */
        public upnp_port: number;

        /** PunchHoleSent socket_addr_v6. */
        public socket_addr_v6: Uint8Array;

        /**
         * Creates a new PunchHoleSent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PunchHoleSent instance
         */
        public static create(properties?: hbb.IPunchHoleSent): hbb.PunchHoleSent;

        /**
         * Encodes the specified PunchHoleSent message. Does not implicitly {@link hbb.PunchHoleSent.verify|verify} messages.
         * @param message PunchHoleSent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPunchHoleSent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PunchHoleSent message, length delimited. Does not implicitly {@link hbb.PunchHoleSent.verify|verify} messages.
         * @param message PunchHoleSent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPunchHoleSent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PunchHoleSent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PunchHoleSent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PunchHoleSent;

        /**
         * Decodes a PunchHoleSent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PunchHoleSent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PunchHoleSent;

        /**
         * Verifies a PunchHoleSent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PunchHoleSent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PunchHoleSent
         */
        public static fromObject(object: { [k: string]: any }): hbb.PunchHoleSent;

        /**
         * Creates a plain object from a PunchHoleSent message. Also converts values to other types if specified.
         * @param message PunchHoleSent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PunchHoleSent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PunchHoleSent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PunchHoleSent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterPk. */
    interface IRegisterPk {

        /** RegisterPk id */
        id?: (string|null);

        /** RegisterPk uuid */
        uuid?: (Uint8Array|null);

        /** RegisterPk pk */
        pk?: (Uint8Array|null);

        /** RegisterPk old_id */
        old_id?: (string|null);

        /** RegisterPk no_register_device */
        no_register_device?: (boolean|null);
    }

    /** Represents a RegisterPk. */
    class RegisterPk implements IRegisterPk {

        /**
         * Constructs a new RegisterPk.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IRegisterPk);

        /** RegisterPk id. */
        public id: string;

        /** RegisterPk uuid. */
        public uuid: Uint8Array;

        /** RegisterPk pk. */
        public pk: Uint8Array;

        /** RegisterPk old_id. */
        public old_id: string;

        /** RegisterPk no_register_device. */
        public no_register_device: boolean;

        /**
         * Creates a new RegisterPk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterPk instance
         */
        public static create(properties?: hbb.IRegisterPk): hbb.RegisterPk;

        /**
         * Encodes the specified RegisterPk message. Does not implicitly {@link hbb.RegisterPk.verify|verify} messages.
         * @param message RegisterPk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IRegisterPk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterPk message, length delimited. Does not implicitly {@link hbb.RegisterPk.verify|verify} messages.
         * @param message RegisterPk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IRegisterPk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterPk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterPk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.RegisterPk;

        /**
         * Decodes a RegisterPk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterPk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.RegisterPk;

        /**
         * Verifies a RegisterPk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterPk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterPk
         */
        public static fromObject(object: { [k: string]: any }): hbb.RegisterPk;

        /**
         * Creates a plain object from a RegisterPk message. Also converts values to other types if specified.
         * @param message RegisterPk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.RegisterPk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterPk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterPk
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterPkResponse. */
    interface IRegisterPkResponse {

        /** RegisterPkResponse result */
        result?: (hbb.RegisterPkResponse.Result|null);

        /** RegisterPkResponse keep_alive */
        keep_alive?: (number|null);
    }

    /** Represents a RegisterPkResponse. */
    class RegisterPkResponse implements IRegisterPkResponse {

        /**
         * Constructs a new RegisterPkResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IRegisterPkResponse);

        /** RegisterPkResponse result. */
        public result: hbb.RegisterPkResponse.Result;

        /** RegisterPkResponse keep_alive. */
        public keep_alive: number;

        /**
         * Creates a new RegisterPkResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterPkResponse instance
         */
        public static create(properties?: hbb.IRegisterPkResponse): hbb.RegisterPkResponse;

        /**
         * Encodes the specified RegisterPkResponse message. Does not implicitly {@link hbb.RegisterPkResponse.verify|verify} messages.
         * @param message RegisterPkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IRegisterPkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterPkResponse message, length delimited. Does not implicitly {@link hbb.RegisterPkResponse.verify|verify} messages.
         * @param message RegisterPkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IRegisterPkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterPkResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterPkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.RegisterPkResponse;

        /**
         * Decodes a RegisterPkResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterPkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.RegisterPkResponse;

        /**
         * Verifies a RegisterPkResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterPkResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterPkResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.RegisterPkResponse;

        /**
         * Creates a plain object from a RegisterPkResponse message. Also converts values to other types if specified.
         * @param message RegisterPkResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.RegisterPkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterPkResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegisterPkResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RegisterPkResponse {

        /** Result enum. */
        enum Result {
            OK = 0,
            UUID_MISMATCH = 2,
            ID_EXISTS = 3,
            TOO_FREQUENT = 4,
            INVALID_ID_FORMAT = 5,
            NOT_SUPPORT = 6,
            SERVER_ERROR = 7
        }
    }

    /** Properties of a PunchHoleResponse. */
    interface IPunchHoleResponse {

        /** PunchHoleResponse socket_addr */
        socket_addr?: (Uint8Array|null);

        /** PunchHoleResponse pk */
        pk?: (Uint8Array|null);

        /** PunchHoleResponse failure */
        failure?: (hbb.PunchHoleResponse.Failure|null);

        /** PunchHoleResponse relay_server */
        relay_server?: (string|null);

        /** PunchHoleResponse nat_type */
        nat_type?: (hbb.NatType|null);

        /** PunchHoleResponse is_local */
        is_local?: (boolean|null);

        /** PunchHoleResponse other_failure */
        other_failure?: (string|null);

        /** PunchHoleResponse feedback */
        feedback?: (number|null);

        /** PunchHoleResponse is_udp */
        is_udp?: (boolean|null);

        /** PunchHoleResponse upnp_port */
        upnp_port?: (number|null);

        /** PunchHoleResponse socket_addr_v6 */
        socket_addr_v6?: (Uint8Array|null);
    }

    /** Represents a PunchHoleResponse. */
    class PunchHoleResponse implements IPunchHoleResponse {

        /**
         * Constructs a new PunchHoleResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPunchHoleResponse);

        /** PunchHoleResponse socket_addr. */
        public socket_addr: Uint8Array;

        /** PunchHoleResponse pk. */
        public pk: Uint8Array;

        /** PunchHoleResponse failure. */
        public failure: hbb.PunchHoleResponse.Failure;

        /** PunchHoleResponse relay_server. */
        public relay_server: string;

        /** PunchHoleResponse nat_type. */
        public nat_type?: (hbb.NatType|null);

        /** PunchHoleResponse is_local. */
        public is_local?: (boolean|null);

        /** PunchHoleResponse other_failure. */
        public other_failure: string;

        /** PunchHoleResponse feedback. */
        public feedback: number;

        /** PunchHoleResponse is_udp. */
        public is_udp: boolean;

        /** PunchHoleResponse upnp_port. */
        public upnp_port: number;

        /** PunchHoleResponse socket_addr_v6. */
        public socket_addr_v6: Uint8Array;

        /** PunchHoleResponse union. */
        public union?: ("nat_type"|"is_local");

        /**
         * Creates a new PunchHoleResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PunchHoleResponse instance
         */
        public static create(properties?: hbb.IPunchHoleResponse): hbb.PunchHoleResponse;

        /**
         * Encodes the specified PunchHoleResponse message. Does not implicitly {@link hbb.PunchHoleResponse.verify|verify} messages.
         * @param message PunchHoleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPunchHoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PunchHoleResponse message, length delimited. Does not implicitly {@link hbb.PunchHoleResponse.verify|verify} messages.
         * @param message PunchHoleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPunchHoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PunchHoleResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PunchHoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PunchHoleResponse;

        /**
         * Decodes a PunchHoleResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PunchHoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PunchHoleResponse;

        /**
         * Verifies a PunchHoleResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PunchHoleResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PunchHoleResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.PunchHoleResponse;

        /**
         * Creates a plain object from a PunchHoleResponse message. Also converts values to other types if specified.
         * @param message PunchHoleResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PunchHoleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PunchHoleResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PunchHoleResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PunchHoleResponse {

        /** Failure enum. */
        enum Failure {
            ID_NOT_EXIST = 0,
            OFFLINE = 2,
            LICENSE_MISMATCH = 3,
            LICENSE_OVERUSE = 4
        }
    }

    /** Properties of a ConfigUpdate. */
    interface IConfigUpdate {

        /** ConfigUpdate serial */
        serial?: (number|null);

        /** ConfigUpdate rendezvous_servers */
        rendezvous_servers?: (string[]|null);
    }

    /** Represents a ConfigUpdate. */
    class ConfigUpdate implements IConfigUpdate {

        /**
         * Constructs a new ConfigUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IConfigUpdate);

        /** ConfigUpdate serial. */
        public serial: number;

        /** ConfigUpdate rendezvous_servers. */
        public rendezvous_servers: string[];

        /**
         * Creates a new ConfigUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfigUpdate instance
         */
        public static create(properties?: hbb.IConfigUpdate): hbb.ConfigUpdate;

        /**
         * Encodes the specified ConfigUpdate message. Does not implicitly {@link hbb.ConfigUpdate.verify|verify} messages.
         * @param message ConfigUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IConfigUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfigUpdate message, length delimited. Does not implicitly {@link hbb.ConfigUpdate.verify|verify} messages.
         * @param message ConfigUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IConfigUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfigUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfigUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.ConfigUpdate;

        /**
         * Decodes a ConfigUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfigUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.ConfigUpdate;

        /**
         * Verifies a ConfigUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfigUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfigUpdate
         */
        public static fromObject(object: { [k: string]: any }): hbb.ConfigUpdate;

        /**
         * Creates a plain object from a ConfigUpdate message. Also converts values to other types if specified.
         * @param message ConfigUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.ConfigUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfigUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConfigUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RequestRelay. */
    interface IRequestRelay {

        /** RequestRelay id */
        id?: (string|null);

        /** RequestRelay uuid */
        uuid?: (string|null);

        /** RequestRelay socket_addr */
        socket_addr?: (Uint8Array|null);

        /** RequestRelay relay_server */
        relay_server?: (string|null);

        /** RequestRelay secure */
        secure?: (boolean|null);

        /** RequestRelay licence_key */
        licence_key?: (string|null);

        /** RequestRelay conn_type */
        conn_type?: (hbb.ConnType|null);

        /** RequestRelay token */
        token?: (string|null);

        /** RequestRelay control_permissions */
        control_permissions?: (hbb.IControlPermissions|null);
    }

    /** Represents a RequestRelay. */
    class RequestRelay implements IRequestRelay {

        /**
         * Constructs a new RequestRelay.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IRequestRelay);

        /** RequestRelay id. */
        public id: string;

        /** RequestRelay uuid. */
        public uuid: string;

        /** RequestRelay socket_addr. */
        public socket_addr: Uint8Array;

        /** RequestRelay relay_server. */
        public relay_server: string;

        /** RequestRelay secure. */
        public secure: boolean;

        /** RequestRelay licence_key. */
        public licence_key: string;

        /** RequestRelay conn_type. */
        public conn_type: hbb.ConnType;

        /** RequestRelay token. */
        public token: string;

        /** RequestRelay control_permissions. */
        public control_permissions?: (hbb.IControlPermissions|null);

        /**
         * Creates a new RequestRelay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRelay instance
         */
        public static create(properties?: hbb.IRequestRelay): hbb.RequestRelay;

        /**
         * Encodes the specified RequestRelay message. Does not implicitly {@link hbb.RequestRelay.verify|verify} messages.
         * @param message RequestRelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IRequestRelay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRelay message, length delimited. Does not implicitly {@link hbb.RequestRelay.verify|verify} messages.
         * @param message RequestRelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IRequestRelay, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRelay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.RequestRelay;

        /**
         * Decodes a RequestRelay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.RequestRelay;

        /**
         * Verifies a RequestRelay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRelay message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRelay
         */
        public static fromObject(object: { [k: string]: any }): hbb.RequestRelay;

        /**
         * Creates a plain object from a RequestRelay message. Also converts values to other types if specified.
         * @param message RequestRelay
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.RequestRelay, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRelay to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequestRelay
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RelayResponse. */
    interface IRelayResponse {

        /** RelayResponse socket_addr */
        socket_addr?: (Uint8Array|null);

        /** RelayResponse uuid */
        uuid?: (string|null);

        /** RelayResponse relay_server */
        relay_server?: (string|null);

        /** RelayResponse id */
        id?: (string|null);

        /** RelayResponse pk */
        pk?: (Uint8Array|null);

        /** RelayResponse refuse_reason */
        refuse_reason?: (string|null);

        /** RelayResponse version */
        version?: (string|null);

        /** RelayResponse feedback */
        feedback?: (number|null);

        /** RelayResponse socket_addr_v6 */
        socket_addr_v6?: (Uint8Array|null);

        /** RelayResponse upnp_port */
        upnp_port?: (number|null);
    }

    /** Represents a RelayResponse. */
    class RelayResponse implements IRelayResponse {

        /**
         * Constructs a new RelayResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IRelayResponse);

        /** RelayResponse socket_addr. */
        public socket_addr: Uint8Array;

        /** RelayResponse uuid. */
        public uuid: string;

        /** RelayResponse relay_server. */
        public relay_server: string;

        /** RelayResponse id. */
        public id?: (string|null);

        /** RelayResponse pk. */
        public pk?: (Uint8Array|null);

        /** RelayResponse refuse_reason. */
        public refuse_reason: string;

        /** RelayResponse version. */
        public version: string;

        /** RelayResponse feedback. */
        public feedback: number;

        /** RelayResponse socket_addr_v6. */
        public socket_addr_v6: Uint8Array;

        /** RelayResponse upnp_port. */
        public upnp_port: number;

        /** RelayResponse union. */
        public union?: ("id"|"pk");

        /**
         * Creates a new RelayResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RelayResponse instance
         */
        public static create(properties?: hbb.IRelayResponse): hbb.RelayResponse;

        /**
         * Encodes the specified RelayResponse message. Does not implicitly {@link hbb.RelayResponse.verify|verify} messages.
         * @param message RelayResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IRelayResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RelayResponse message, length delimited. Does not implicitly {@link hbb.RelayResponse.verify|verify} messages.
         * @param message RelayResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IRelayResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RelayResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RelayResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.RelayResponse;

        /**
         * Decodes a RelayResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RelayResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.RelayResponse;

        /**
         * Verifies a RelayResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RelayResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RelayResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.RelayResponse;

        /**
         * Creates a plain object from a RelayResponse message. Also converts values to other types if specified.
         * @param message RelayResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.RelayResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RelayResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RelayResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SoftwareUpdate. */
    interface ISoftwareUpdate {

        /** SoftwareUpdate url */
        url?: (string|null);
    }

    /** Represents a SoftwareUpdate. */
    class SoftwareUpdate implements ISoftwareUpdate {

        /**
         * Constructs a new SoftwareUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ISoftwareUpdate);

        /** SoftwareUpdate url. */
        public url: string;

        /**
         * Creates a new SoftwareUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SoftwareUpdate instance
         */
        public static create(properties?: hbb.ISoftwareUpdate): hbb.SoftwareUpdate;

        /**
         * Encodes the specified SoftwareUpdate message. Does not implicitly {@link hbb.SoftwareUpdate.verify|verify} messages.
         * @param message SoftwareUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ISoftwareUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SoftwareUpdate message, length delimited. Does not implicitly {@link hbb.SoftwareUpdate.verify|verify} messages.
         * @param message SoftwareUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ISoftwareUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SoftwareUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SoftwareUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.SoftwareUpdate;

        /**
         * Decodes a SoftwareUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SoftwareUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.SoftwareUpdate;

        /**
         * Verifies a SoftwareUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SoftwareUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SoftwareUpdate
         */
        public static fromObject(object: { [k: string]: any }): hbb.SoftwareUpdate;

        /**
         * Creates a plain object from a SoftwareUpdate message. Also converts values to other types if specified.
         * @param message SoftwareUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.SoftwareUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SoftwareUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SoftwareUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FetchLocalAddr. */
    interface IFetchLocalAddr {

        /** FetchLocalAddr socket_addr */
        socket_addr?: (Uint8Array|null);

        /** FetchLocalAddr relay_server */
        relay_server?: (string|null);

        /** FetchLocalAddr socket_addr_v6 */
        socket_addr_v6?: (Uint8Array|null);

        /** FetchLocalAddr control_permissions */
        control_permissions?: (hbb.IControlPermissions|null);
    }

    /** Represents a FetchLocalAddr. */
    class FetchLocalAddr implements IFetchLocalAddr {

        /**
         * Constructs a new FetchLocalAddr.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IFetchLocalAddr);

        /** FetchLocalAddr socket_addr. */
        public socket_addr: Uint8Array;

        /** FetchLocalAddr relay_server. */
        public relay_server: string;

        /** FetchLocalAddr socket_addr_v6. */
        public socket_addr_v6: Uint8Array;

        /** FetchLocalAddr control_permissions. */
        public control_permissions?: (hbb.IControlPermissions|null);

        /**
         * Creates a new FetchLocalAddr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchLocalAddr instance
         */
        public static create(properties?: hbb.IFetchLocalAddr): hbb.FetchLocalAddr;

        /**
         * Encodes the specified FetchLocalAddr message. Does not implicitly {@link hbb.FetchLocalAddr.verify|verify} messages.
         * @param message FetchLocalAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IFetchLocalAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchLocalAddr message, length delimited. Does not implicitly {@link hbb.FetchLocalAddr.verify|verify} messages.
         * @param message FetchLocalAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IFetchLocalAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchLocalAddr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchLocalAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.FetchLocalAddr;

        /**
         * Decodes a FetchLocalAddr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FetchLocalAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.FetchLocalAddr;

        /**
         * Verifies a FetchLocalAddr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchLocalAddr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchLocalAddr
         */
        public static fromObject(object: { [k: string]: any }): hbb.FetchLocalAddr;

        /**
         * Creates a plain object from a FetchLocalAddr message. Also converts values to other types if specified.
         * @param message FetchLocalAddr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.FetchLocalAddr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchLocalAddr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FetchLocalAddr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LocalAddr. */
    interface ILocalAddr {

        /** LocalAddr socket_addr */
        socket_addr?: (Uint8Array|null);

        /** LocalAddr local_addr */
        local_addr?: (Uint8Array|null);

        /** LocalAddr relay_server */
        relay_server?: (string|null);

        /** LocalAddr id */
        id?: (string|null);

        /** LocalAddr version */
        version?: (string|null);

        /** LocalAddr socket_addr_v6 */
        socket_addr_v6?: (Uint8Array|null);
    }

    /** Represents a LocalAddr. */
    class LocalAddr implements ILocalAddr {

        /**
         * Constructs a new LocalAddr.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.ILocalAddr);

        /** LocalAddr socket_addr. */
        public socket_addr: Uint8Array;

        /** LocalAddr local_addr. */
        public local_addr: Uint8Array;

        /** LocalAddr relay_server. */
        public relay_server: string;

        /** LocalAddr id. */
        public id: string;

        /** LocalAddr version. */
        public version: string;

        /** LocalAddr socket_addr_v6. */
        public socket_addr_v6: Uint8Array;

        /**
         * Creates a new LocalAddr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LocalAddr instance
         */
        public static create(properties?: hbb.ILocalAddr): hbb.LocalAddr;

        /**
         * Encodes the specified LocalAddr message. Does not implicitly {@link hbb.LocalAddr.verify|verify} messages.
         * @param message LocalAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.ILocalAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LocalAddr message, length delimited. Does not implicitly {@link hbb.LocalAddr.verify|verify} messages.
         * @param message LocalAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.ILocalAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocalAddr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LocalAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.LocalAddr;

        /**
         * Decodes a LocalAddr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LocalAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.LocalAddr;

        /**
         * Verifies a LocalAddr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LocalAddr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LocalAddr
         */
        public static fromObject(object: { [k: string]: any }): hbb.LocalAddr;

        /**
         * Creates a plain object from a LocalAddr message. Also converts values to other types if specified.
         * @param message LocalAddr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.LocalAddr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LocalAddr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LocalAddr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PeerDiscovery. */
    interface IPeerDiscovery {

        /** PeerDiscovery cmd */
        cmd?: (string|null);

        /** PeerDiscovery mac */
        mac?: (string|null);

        /** PeerDiscovery id */
        id?: (string|null);

        /** PeerDiscovery username */
        username?: (string|null);

        /** PeerDiscovery hostname */
        hostname?: (string|null);

        /** PeerDiscovery platform */
        platform?: (string|null);

        /** PeerDiscovery misc */
        misc?: (string|null);
    }

    /** Represents a PeerDiscovery. */
    class PeerDiscovery implements IPeerDiscovery {

        /**
         * Constructs a new PeerDiscovery.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IPeerDiscovery);

        /** PeerDiscovery cmd. */
        public cmd: string;

        /** PeerDiscovery mac. */
        public mac: string;

        /** PeerDiscovery id. */
        public id: string;

        /** PeerDiscovery username. */
        public username: string;

        /** PeerDiscovery hostname. */
        public hostname: string;

        /** PeerDiscovery platform. */
        public platform: string;

        /** PeerDiscovery misc. */
        public misc: string;

        /**
         * Creates a new PeerDiscovery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PeerDiscovery instance
         */
        public static create(properties?: hbb.IPeerDiscovery): hbb.PeerDiscovery;

        /**
         * Encodes the specified PeerDiscovery message. Does not implicitly {@link hbb.PeerDiscovery.verify|verify} messages.
         * @param message PeerDiscovery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IPeerDiscovery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PeerDiscovery message, length delimited. Does not implicitly {@link hbb.PeerDiscovery.verify|verify} messages.
         * @param message PeerDiscovery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IPeerDiscovery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PeerDiscovery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PeerDiscovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.PeerDiscovery;

        /**
         * Decodes a PeerDiscovery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PeerDiscovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.PeerDiscovery;

        /**
         * Verifies a PeerDiscovery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PeerDiscovery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PeerDiscovery
         */
        public static fromObject(object: { [k: string]: any }): hbb.PeerDiscovery;

        /**
         * Creates a plain object from a PeerDiscovery message. Also converts values to other types if specified.
         * @param message PeerDiscovery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.PeerDiscovery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PeerDiscovery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PeerDiscovery
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OnlineRequest. */
    interface IOnlineRequest {

        /** OnlineRequest id */
        id?: (string|null);

        /** OnlineRequest peers */
        peers?: (string[]|null);
    }

    /** Represents an OnlineRequest. */
    class OnlineRequest implements IOnlineRequest {

        /**
         * Constructs a new OnlineRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IOnlineRequest);

        /** OnlineRequest id. */
        public id: string;

        /** OnlineRequest peers. */
        public peers: string[];

        /**
         * Creates a new OnlineRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OnlineRequest instance
         */
        public static create(properties?: hbb.IOnlineRequest): hbb.OnlineRequest;

        /**
         * Encodes the specified OnlineRequest message. Does not implicitly {@link hbb.OnlineRequest.verify|verify} messages.
         * @param message OnlineRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IOnlineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OnlineRequest message, length delimited. Does not implicitly {@link hbb.OnlineRequest.verify|verify} messages.
         * @param message OnlineRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IOnlineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OnlineRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OnlineRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.OnlineRequest;

        /**
         * Decodes an OnlineRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OnlineRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.OnlineRequest;

        /**
         * Verifies an OnlineRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OnlineRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OnlineRequest
         */
        public static fromObject(object: { [k: string]: any }): hbb.OnlineRequest;

        /**
         * Creates a plain object from an OnlineRequest message. Also converts values to other types if specified.
         * @param message OnlineRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.OnlineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OnlineRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OnlineRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OnlineResponse. */
    interface IOnlineResponse {

        /** OnlineResponse states */
        states?: (Uint8Array|null);
    }

    /** Represents an OnlineResponse. */
    class OnlineResponse implements IOnlineResponse {

        /**
         * Constructs a new OnlineResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IOnlineResponse);

        /** OnlineResponse states. */
        public states: Uint8Array;

        /**
         * Creates a new OnlineResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OnlineResponse instance
         */
        public static create(properties?: hbb.IOnlineResponse): hbb.OnlineResponse;

        /**
         * Encodes the specified OnlineResponse message. Does not implicitly {@link hbb.OnlineResponse.verify|verify} messages.
         * @param message OnlineResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IOnlineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OnlineResponse message, length delimited. Does not implicitly {@link hbb.OnlineResponse.verify|verify} messages.
         * @param message OnlineResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IOnlineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OnlineResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OnlineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.OnlineResponse;

        /**
         * Decodes an OnlineResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OnlineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.OnlineResponse;

        /**
         * Verifies an OnlineResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OnlineResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OnlineResponse
         */
        public static fromObject(object: { [k: string]: any }): hbb.OnlineResponse;

        /**
         * Creates a plain object from an OnlineResponse message. Also converts values to other types if specified.
         * @param message OnlineResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.OnlineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OnlineResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OnlineResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyExchange. */
    interface IKeyExchange {

        /** KeyExchange keys */
        keys?: (Uint8Array[]|null);
    }

    /** Represents a KeyExchange. */
    class KeyExchange implements IKeyExchange {

        /**
         * Constructs a new KeyExchange.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IKeyExchange);

        /** KeyExchange keys. */
        public keys: Uint8Array[];

        /**
         * Creates a new KeyExchange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyExchange instance
         */
        public static create(properties?: hbb.IKeyExchange): hbb.KeyExchange;

        /**
         * Encodes the specified KeyExchange message. Does not implicitly {@link hbb.KeyExchange.verify|verify} messages.
         * @param message KeyExchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IKeyExchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyExchange message, length delimited. Does not implicitly {@link hbb.KeyExchange.verify|verify} messages.
         * @param message KeyExchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IKeyExchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyExchange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.KeyExchange;

        /**
         * Decodes a KeyExchange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.KeyExchange;

        /**
         * Verifies a KeyExchange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyExchange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyExchange
         */
        public static fromObject(object: { [k: string]: any }): hbb.KeyExchange;

        /**
         * Creates a plain object from a KeyExchange message. Also converts values to other types if specified.
         * @param message KeyExchange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.KeyExchange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyExchange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyExchange
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HealthCheck. */
    interface IHealthCheck {

        /** HealthCheck token */
        token?: (string|null);
    }

    /** Represents a HealthCheck. */
    class HealthCheck implements IHealthCheck {

        /**
         * Constructs a new HealthCheck.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IHealthCheck);

        /** HealthCheck token. */
        public token: string;

        /**
         * Creates a new HealthCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HealthCheck instance
         */
        public static create(properties?: hbb.IHealthCheck): hbb.HealthCheck;

        /**
         * Encodes the specified HealthCheck message. Does not implicitly {@link hbb.HealthCheck.verify|verify} messages.
         * @param message HealthCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IHealthCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HealthCheck message, length delimited. Does not implicitly {@link hbb.HealthCheck.verify|verify} messages.
         * @param message HealthCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IHealthCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HealthCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HealthCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.HealthCheck;

        /**
         * Decodes a HealthCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HealthCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.HealthCheck;

        /**
         * Verifies a HealthCheck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HealthCheck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HealthCheck
         */
        public static fromObject(object: { [k: string]: any }): hbb.HealthCheck;

        /**
         * Creates a plain object from a HealthCheck message. Also converts values to other types if specified.
         * @param message HealthCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.HealthCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HealthCheck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HealthCheck
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RendezvousMessage. */
    interface IRendezvousMessage {

        /** RendezvousMessage register_peer */
        register_peer?: (hbb.IRegisterPeer|null);

        /** RendezvousMessage register_peer_response */
        register_peer_response?: (hbb.IRegisterPeerResponse|null);

        /** RendezvousMessage punch_hole_request */
        punch_hole_request?: (hbb.IPunchHoleRequest|null);

        /** RendezvousMessage punch_hole */
        punch_hole?: (hbb.IPunchHole|null);

        /** RendezvousMessage punch_hole_sent */
        punch_hole_sent?: (hbb.IPunchHoleSent|null);

        /** RendezvousMessage punch_hole_response */
        punch_hole_response?: (hbb.IPunchHoleResponse|null);

        /** RendezvousMessage fetch_local_addr */
        fetch_local_addr?: (hbb.IFetchLocalAddr|null);

        /** RendezvousMessage local_addr */
        local_addr?: (hbb.ILocalAddr|null);

        /** RendezvousMessage configure_update */
        configure_update?: (hbb.IConfigUpdate|null);

        /** RendezvousMessage register_pk */
        register_pk?: (hbb.IRegisterPk|null);

        /** RendezvousMessage register_pk_response */
        register_pk_response?: (hbb.IRegisterPkResponse|null);

        /** RendezvousMessage software_update */
        software_update?: (hbb.ISoftwareUpdate|null);

        /** RendezvousMessage request_relay */
        request_relay?: (hbb.IRequestRelay|null);

        /** RendezvousMessage relay_response */
        relay_response?: (hbb.IRelayResponse|null);

        /** RendezvousMessage test_nat_request */
        test_nat_request?: (hbb.ITestNatRequest|null);

        /** RendezvousMessage test_nat_response */
        test_nat_response?: (hbb.ITestNatResponse|null);

        /** RendezvousMessage peer_discovery */
        peer_discovery?: (hbb.IPeerDiscovery|null);

        /** RendezvousMessage online_request */
        online_request?: (hbb.IOnlineRequest|null);

        /** RendezvousMessage online_response */
        online_response?: (hbb.IOnlineResponse|null);

        /** RendezvousMessage key_exchange */
        key_exchange?: (hbb.IKeyExchange|null);

        /** RendezvousMessage hc */
        hc?: (hbb.IHealthCheck|null);
    }

    /** Represents a RendezvousMessage. */
    class RendezvousMessage implements IRendezvousMessage {

        /**
         * Constructs a new RendezvousMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: hbb.IRendezvousMessage);

        /** RendezvousMessage register_peer. */
        public register_peer?: (hbb.IRegisterPeer|null);

        /** RendezvousMessage register_peer_response. */
        public register_peer_response?: (hbb.IRegisterPeerResponse|null);

        /** RendezvousMessage punch_hole_request. */
        public punch_hole_request?: (hbb.IPunchHoleRequest|null);

        /** RendezvousMessage punch_hole. */
        public punch_hole?: (hbb.IPunchHole|null);

        /** RendezvousMessage punch_hole_sent. */
        public punch_hole_sent?: (hbb.IPunchHoleSent|null);

        /** RendezvousMessage punch_hole_response. */
        public punch_hole_response?: (hbb.IPunchHoleResponse|null);

        /** RendezvousMessage fetch_local_addr. */
        public fetch_local_addr?: (hbb.IFetchLocalAddr|null);

        /** RendezvousMessage local_addr. */
        public local_addr?: (hbb.ILocalAddr|null);

        /** RendezvousMessage configure_update. */
        public configure_update?: (hbb.IConfigUpdate|null);

        /** RendezvousMessage register_pk. */
        public register_pk?: (hbb.IRegisterPk|null);

        /** RendezvousMessage register_pk_response. */
        public register_pk_response?: (hbb.IRegisterPkResponse|null);

        /** RendezvousMessage software_update. */
        public software_update?: (hbb.ISoftwareUpdate|null);

        /** RendezvousMessage request_relay. */
        public request_relay?: (hbb.IRequestRelay|null);

        /** RendezvousMessage relay_response. */
        public relay_response?: (hbb.IRelayResponse|null);

        /** RendezvousMessage test_nat_request. */
        public test_nat_request?: (hbb.ITestNatRequest|null);

        /** RendezvousMessage test_nat_response. */
        public test_nat_response?: (hbb.ITestNatResponse|null);

        /** RendezvousMessage peer_discovery. */
        public peer_discovery?: (hbb.IPeerDiscovery|null);

        /** RendezvousMessage online_request. */
        public online_request?: (hbb.IOnlineRequest|null);

        /** RendezvousMessage online_response. */
        public online_response?: (hbb.IOnlineResponse|null);

        /** RendezvousMessage key_exchange. */
        public key_exchange?: (hbb.IKeyExchange|null);

        /** RendezvousMessage hc. */
        public hc?: (hbb.IHealthCheck|null);

        /** RendezvousMessage union. */
        public union?: ("register_peer"|"register_peer_response"|"punch_hole_request"|"punch_hole"|"punch_hole_sent"|"punch_hole_response"|"fetch_local_addr"|"local_addr"|"configure_update"|"register_pk"|"register_pk_response"|"software_update"|"request_relay"|"relay_response"|"test_nat_request"|"test_nat_response"|"peer_discovery"|"online_request"|"online_response"|"key_exchange"|"hc");

        /**
         * Creates a new RendezvousMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RendezvousMessage instance
         */
        public static create(properties?: hbb.IRendezvousMessage): hbb.RendezvousMessage;

        /**
         * Encodes the specified RendezvousMessage message. Does not implicitly {@link hbb.RendezvousMessage.verify|verify} messages.
         * @param message RendezvousMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hbb.IRendezvousMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RendezvousMessage message, length delimited. Does not implicitly {@link hbb.RendezvousMessage.verify|verify} messages.
         * @param message RendezvousMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hbb.IRendezvousMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RendezvousMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RendezvousMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hbb.RendezvousMessage;

        /**
         * Decodes a RendezvousMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RendezvousMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hbb.RendezvousMessage;

        /**
         * Verifies a RendezvousMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RendezvousMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RendezvousMessage
         */
        public static fromObject(object: { [k: string]: any }): hbb.RendezvousMessage;

        /**
         * Creates a plain object from a RendezvousMessage message. Also converts values to other types if specified.
         * @param message RendezvousMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hbb.RendezvousMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RendezvousMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RendezvousMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
