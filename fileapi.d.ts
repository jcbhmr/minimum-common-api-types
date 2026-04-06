// File API — https://w3c.github.io/FileAPI/
// Interfaces: Blob, File

export {};

declare global {
  type BlobPart = BufferSource | Blob | string;
  type EndingType = "native" | "transparent";

  interface BlobPropertyBag {
    endings?: EndingType;
    type?: string;
  }

  interface Blob {
    readonly size: number;
    readonly type: string;
    arrayBuffer(): Promise<ArrayBuffer>;
    bytes(): Promise<Uint8Array>;
    slice(start?: number, end?: number, contentType?: string): Blob;
    stream(): ReadableStream<Uint8Array>;
    text(): Promise<string>;
  }

  var Blob: {
    prototype: Blob;
    new (blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
  };

  interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
  }

  interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
    readonly webkitRelativePath: string;
  }

  var File: {
    prototype: File;
    new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
  };
}
