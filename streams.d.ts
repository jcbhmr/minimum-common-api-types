// Streams Standard — https://streams.spec.whatwg.org/
// Interfaces: ByteLengthQueuingStrategy, CountQueuingStrategy,
//             ReadableByteStreamController, ReadableStream,
//             ReadableStreamBYOBReader, ReadableStreamBYOBRequest,
//             ReadableStreamDefaultController, ReadableStreamDefaultReader,
//             TransformStream, TransformStreamDefaultController,
//             WritableStream, WritableStreamDefaultController, WritableStreamDefaultWriter

export {};

declare global {
  interface QueuingStrategySize<T = any> {
    (chunk: T): number;
  }

  interface QueuingStrategy<T = any> {
    highWaterMark?: number;
    size?: QueuingStrategySize<T>;
  }

  interface QueuingStrategyInit {
    highWaterMark: number;
  }

  interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
    readonly highWaterMark: number;
    readonly size: QueuingStrategySize<ArrayBufferView>;
  }

  var ByteLengthQueuingStrategy: {
    prototype: ByteLengthQueuingStrategy;
    new (init: QueuingStrategyInit): ByteLengthQueuingStrategy;
  };

  interface CountQueuingStrategy extends QueuingStrategy<any> {
    readonly highWaterMark: number;
    readonly size: QueuingStrategySize<any>;
  }

  var CountQueuingStrategy: {
    prototype: CountQueuingStrategy;
    new (init: QueuingStrategyInit): CountQueuingStrategy;
  };

  interface ReadableStreamReadValueResult<T> {
    done: false;
    value: T;
  }

  interface ReadableStreamReadDoneResult {
    done: true;
    value?: undefined;
  }

  type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult;

  interface ReadableStreamDefaultReader<R = any> {
    readonly closed: Promise<undefined>;
    cancel(reason?: any): Promise<void>;
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
  }

  var ReadableStreamDefaultReader: {
    prototype: ReadableStreamDefaultReader;
    new <R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
  };

  interface ReadableStreamBYOBReader {
    readonly closed: Promise<undefined>;
    cancel(reason?: any): Promise<void>;
    read<T extends ArrayBufferView>(
      view: T,
      options?: ReadableStreamBYOBReaderReadOptions,
    ): Promise<ReadableStreamReadResult<T>>;
    releaseLock(): void;
  }

  interface ReadableStreamBYOBReaderReadOptions {
    min?: number;
  }

  var ReadableStreamBYOBReader: {
    prototype: ReadableStreamBYOBReader;
    new (stream: ReadableStream): ReadableStreamBYOBReader;
  };

  interface ReadableStreamDefaultController<R = any> {
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk?: R): void;
    error(e?: any): void;
  }

  var ReadableStreamDefaultController: {
    prototype: ReadableStreamDefaultController;
    new (): ReadableStreamDefaultController;
  };

  interface ReadableByteStreamController {
    readonly byobRequest: ReadableStreamBYOBRequest | null;
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk: ArrayBufferView): void;
    error(e?: any): void;
  }

  var ReadableByteStreamController: {
    prototype: ReadableByteStreamController;
    new (): ReadableByteStreamController;
  };

  interface ReadableStreamBYOBRequest {
    readonly view: ArrayBufferView | null;
    respond(bytesWritten: number): void;
    respondWithNewView(view: ArrayBufferView): void;
  }

  var ReadableStreamBYOBRequest: {
    prototype: ReadableStreamBYOBRequest;
    new (): ReadableStreamBYOBRequest;
  };

  interface UnderlyingSourceStartCallback<R> {
    (controller: ReadableStreamDefaultController<R>): any;
  }

  interface UnderlyingSourcePullCallback<R> {
    (controller: ReadableStreamDefaultController<R>): any;
  }

  interface UnderlyingSourceCancelCallback {
    (reason?: any): any;
  }

  interface UnderlyingByteSourceStartCallback {
    (controller: ReadableByteStreamController): any;
  }

  interface UnderlyingByteSourcePullCallback {
    (controller: ReadableByteStreamController): any;
  }

  interface UnderlyingDefaultSource<R = any> {
    cancel?: UnderlyingSourceCancelCallback;
    pull?: UnderlyingSourcePullCallback<R>;
    start?: UnderlyingSourceStartCallback<R>;
    type?: undefined;
  }

  interface UnderlyingByteSource {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: UnderlyingByteSourcePullCallback;
    start?: UnderlyingByteSourceStartCallback;
    type: "bytes";
  }

  type UnderlyingSource<R = any> = UnderlyingByteSource | UnderlyingDefaultSource<R>;

  interface ReadableStreamGetReaderOptions {
    mode?: ReadableStreamReaderMode;
  }

  type ReadableStreamReaderMode = "byob";

  interface ReadableStreamIteratorOptions {
    preventCancel?: boolean;
  }

  interface ReadableWritablePair<R = any, W = any> {
    readable: ReadableStream<R>;
    writable: WritableStream<W>;
  }

  interface StreamPipeOptions {
    preventAbort?: boolean;
    preventCancel?: boolean;
    preventClose?: boolean;
    signal?: AbortSignal;
  }

  interface ReadableStream<R = any> {
    readonly locked: boolean;
    cancel(reason?: any): Promise<void>;
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
    getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamDefaultReader<R>;
    pipeThrough<T>(
      transform: ReadableWritablePair<T, R>,
      options?: StreamPipeOptions,
    ): ReadableStream<T>;
    pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
    values(options?: ReadableStreamIteratorOptions): AsyncIterableIterator<R>;
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): AsyncIterableIterator<R>;
  }

  var ReadableStream: {
    prototype: ReadableStream;
    new (
      underlyingSource: UnderlyingByteSource,
      strategy?: { highWaterMark?: number },
    ): ReadableStream<Uint8Array>;
    new <R = any>(
      underlyingSource?: UnderlyingDefaultSource<R>,
      strategy?: QueuingStrategy<R>,
    ): ReadableStream<R>;
    from<R>(
      asyncIterable: AsyncIterable<R> | Iterable<R | PromiseLike<R>>,
    ): ReadableStream<R>;
  };

  interface WritableStreamDefaultWriterCloseWithErrorExpected {
    (): void;
  }

  interface WritableStreamDefaultWriter<W = any> {
    readonly closed: Promise<undefined>;
    readonly desiredSize: number | null;
    readonly ready: Promise<undefined>;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk?: W): Promise<void>;
  }

  var WritableStreamDefaultWriter: {
    prototype: WritableStreamDefaultWriter;
    new <W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
  };

  interface WritableStreamDefaultController {
    readonly signal: AbortSignal;
    error(e?: any): void;
  }

  var WritableStreamDefaultController: {
    prototype: WritableStreamDefaultController;
    new (): WritableStreamDefaultController;
  };

  interface UnderlyingSinkStartCallback {
    (controller: WritableStreamDefaultController): any;
  }

  interface UnderlyingSinkWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): any;
  }

  interface UnderlyingSinkCloseCallback {
    (): any;
  }

  interface UnderlyingSinkAbortCallback {
    (reason?: any): any;
  }

  interface UnderlyingSink<W = any> {
    abort?: UnderlyingSinkAbortCallback;
    close?: UnderlyingSinkCloseCallback;
    start?: UnderlyingSinkStartCallback;
    type?: undefined;
    write?: UnderlyingSinkWriteCallback<W>;
  }

  interface WritableStream<W = any> {
    readonly locked: boolean;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
  }

  var WritableStream: {
    prototype: WritableStream;
    new <W = any>(
      underlyingSink?: UnderlyingSink<W>,
      strategy?: QueuingStrategy<W>,
    ): WritableStream<W>;
  };

  interface TransformStreamDefaultController<O = any> {
    readonly desiredSize: number | null;
    enqueue(chunk?: O): void;
    error(reason?: any): void;
    terminate(): void;
  }

  var TransformStreamDefaultController: {
    prototype: TransformStreamDefaultController;
    new (): TransformStreamDefaultController;
  };

  interface TransformerStartCallback<O> {
    (controller: TransformStreamDefaultController<O>): any;
  }

  interface TransformerFlushCallback<O> {
    (controller: TransformStreamDefaultController<O>): any;
  }

  interface TransformerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): any;
  }

  interface TransformerCancelCallback {
    (reason: any): any;
  }

  interface Transformer<I = any, O = any> {
    cancel?: TransformerCancelCallback;
    flush?: TransformerFlushCallback<O>;
    readableType?: undefined;
    start?: TransformerStartCallback<O>;
    transform?: TransformerTransformCallback<I, O>;
    writableType?: undefined;
  }

  interface TransformStream<I = any, O = any> {
    readonly readable: ReadableStream<O>;
    readonly writable: WritableStream<I>;
  }

  var TransformStream: {
    prototype: TransformStream;
    new <I = any, O = any>(
      transformer?: Transformer<I, O>,
      writableStrategy?: QueuingStrategy<I>,
      readableStrategy?: QueuingStrategy<O>,
    ): TransformStream<I, O>;
  };
}
