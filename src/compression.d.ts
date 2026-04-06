export { };

declare global {
    type CompressionFormat = "deflate" | "deflate-raw" | "gzip";

    interface CompressionStream extends GenericTransformStream {
        readonly readable: ReadableStream<Uint8Array<ArrayBuffer>>;
        readonly writable: WritableStream<BufferSource>;
    }
    var CompressionStream: {
        prototype: CompressionStream;
        new(format: CompressionFormat): CompressionStream;
    }
}