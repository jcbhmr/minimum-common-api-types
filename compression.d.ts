// Compression Standard — https://compression.spec.whatwg.org/
// Interfaces: CompressionStream, DecompressionStream

export {};

declare global {
  type CompressionFormat = "deflate" | "deflate-raw" | "gzip";

  interface CompressionStream extends TransformStream<BufferSource, Uint8Array> {
    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<BufferSource>;
  }

  var CompressionStream: {
    prototype: CompressionStream;
    new (format: CompressionFormat): CompressionStream;
  };

  interface DecompressionStream extends TransformStream<BufferSource, Uint8Array> {
    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<BufferSource>;
  }

  var DecompressionStream: {
    prototype: DecompressionStream;
    new (format: CompressionFormat): DecompressionStream;
  };
}
