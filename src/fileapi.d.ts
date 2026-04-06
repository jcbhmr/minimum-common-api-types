export { }

declare global {
    type BlobPart = BufferSource | Blob | string;
    type EndingType = "native" | "transparent";
    interface Blob {
        readonly size: number;
        readonly type: string;
        arrayBuffer(): Promise<ArrayBuffer>;
        bytes(): Promise<Uint8Array<ArrayBuffer>>;
        slice(start?: number, end?: number, contentType?: string): Blob;
        stream(): ReadableStream<Uint8Array<ArrayBuffer>>;
        text(): Promise<string>;
    }
    interface BlobPropertyBag {
        endings?: EndingType;
        type?: string;
    }
    var Blob: {
        prototype: Blob;
        new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
    };

    interface File extends Blob {
        readonly lastModified: number;
        readonly name: string;
        readonly webkitRelativePath: string;
    }
    interface FilePropertyBag extends BlobPropertyBag {
        lastModified?: number;
    }
    var File: {
        prototype: File;
        new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
    };
}