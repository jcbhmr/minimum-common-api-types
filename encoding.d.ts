// Encoding Standard — https://encoding.spec.whatwg.org/
// Interfaces: TextDecoder, TextDecoderStream, TextEncoder, TextEncoderStream

export {};

declare global {
  type BufferSource = ArrayBufferView | ArrayBuffer;

  interface TextDecoderOptions {
    fatal?: boolean;
    ignoreBOM?: boolean;
  }

  interface TextDecodeOptions {
    stream?: boolean;
  }

  interface TextDecoder {
    readonly encoding: string;
    readonly fatal: boolean;
    readonly ignoreBOM: boolean;
    decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
  }

  var TextDecoder: {
    prototype: TextDecoder;
    new (label?: string, options?: TextDecoderOptions): TextDecoder;
  };

  interface TextEncoderEncodeIntoResult {
    read: number;
    written: number;
  }

  interface TextEncoder {
    readonly encoding: "utf-8";
    encode(input?: string): Uint8Array;
    encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
  }

  var TextEncoder: {
    prototype: TextEncoder;
    new (): TextEncoder;
  };

  interface TextDecoderStream {
    readonly encoding: string;
    readonly fatal: boolean;
    readonly ignoreBOM: boolean;
    readonly readable: ReadableStream<string>;
    readonly writable: WritableStream<BufferSource>;
  }

  var TextDecoderStream: {
    prototype: TextDecoderStream;
    new (label?: string, options?: TextDecoderOptions): TextDecoderStream;
  };

  interface TextEncoderStream {
    readonly encoding: "utf-8";
    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<string>;
  }

  var TextEncoderStream: {
    prototype: TextEncoderStream;
    new (): TextEncoderStream;
  };

  type AllowSharedBufferSource = ArrayBuffer | SharedArrayBuffer | ArrayBufferView;
}
