import type * as web from "./types-web-module.d.ts";

declare global {
    // All of the following interfaces shall be exposed on the global object accessible through globalThis.

    // Interfaces defined in [DOM]:
    //
    // - AbortController
    type AbortController = web.AbortController;
    var AbortController: typeof web.AbortController;
    // - AbortSignal
    type AbortSignal = web.AbortSignal;
    var AbortSignal: typeof web.AbortSignal;
    type AbortSignalEventMap = web.AbortSignalEventMap;
    // - Event
    type Event = web.Event;
    var Event: typeof web.Event;
    type EventInit = web.EventInit;
    // - EventTarget
    type EventTarget = web.EventTarget;
    var EventTarget: typeof web.EventTarget;
    type EventListener = web.EventListener;
    type EventListenerObject = web.EventListenerObject;
    type EventListenerOptions = web.EventListenerOptions;
    type AddEventListenerOptions = web.AddEventListenerOptions;
    type EventListenerOrEventListenerObject = web.EventListenerOrEventListenerObject

    // Interfaces defined in [HTML]:
    //
    // - CustomEvent
    type CustomEvent<T = any> = web.CustomEvent<T>;
    var CustomEvent: typeof web.CustomEvent;
    type CustomEventInit<T = any> = web.CustomEventInit<T>;
    // - ErrorEvent
    type ErrorEvent = web.ErrorEvent;
    var ErrorEvent: typeof web.ErrorEvent;
    type ErrorEventInit = web.ErrorEventInit;
    // - MessageChannel
    type MessageChannel = web.MessageChannel;
    var MessageChannel: typeof web.MessageChannel;
    // - MessageEvent
    type MessageEvent<T = any> = web.MessageEvent<T>;
    var MessageEvent: typeof web.MessageEvent;
    type MessageEventInit<T = any> = web.MessageEventInit<T>;
    // - MessagePort
    type MessagePort = web.MessagePort;
    var MessagePort: typeof web.MessagePort;
    type MessagePortEventMap = web.MessagePortEventMap;
    // - PromiseRejectionEvent
    type PromiseRejectionEvent = web.PromiseRejectionEvent;
    var PromiseRejectionEvent: typeof web.PromiseRejectionEvent;
    type PromiseRejectionEventInit = web.PromiseRejectionEventInit;

    // Interfaces defined in [WEBIDL]:
    //
    // - DOMException
    type DOMException = web.DOMException;
    var DOMException: typeof web.DOMException;

    // Interfaces defined in [FETCH]:
    //
    // - Headers
    type Headers = web.Headers;
    var Headers: typeof web.Headers;
    type HeadersInit = web.HeadersInit;
    // - Request
    type Request = web.Request;
    var Request: typeof web.Request;
    type RequestInit = web.RequestInit;
    type RequestInfo = web.RequestInfo;
    // - Response
    type Response = web.Response;
    var Response: typeof web.Response;
    type ResponseInit = web.ResponseInit;
    type ResponseType = web.ResponseType;

    // Interfaces defined in [XHR]:
    //
    // - FormData
    //
    //   Note: The FormData constructor takes optional arguments of the types HTMLFormElement and HTMLElement,
    //   which are web API interfaces not included in the common API list in this Standard. Since both of these
    //   arguments are optional, the behavior when both are undefined or not given is always well-defined. The
    //   behavior in other cases for runtimes that do not implement such APIs is not well-defined by this
    //   Standard; future editions will provide greater clarity.
    type FormData = web.FormData;
    var FormData: {
        prototype: typeof web.FormData.prototype;
        new(): web.FormData;
    };
    type FormDataEntryValue = web.FormDataEntryValue;

    // Interfaces defined in [FILEAPI]:
    //
    // - Blob
    type Blob = web.Blob;
    var Blob: typeof web.Blob;
    type BlobPropertyBag = web.BlobPropertyBag;
    // - File
    type File = web.File;
    var File: typeof web.File;
    type FilePropertyBag = web.FilePropertyBag;

    // Interfaces defined in [COMPRESSION]:
    //
    // - CompressionStream
    type CompressionStream = web.CompressionStream;
    var CompressionStream: typeof web.CompressionStream;
    type CompressionFormat = web.CompressionFormat;
    // - DecompressionStream
    type DecompressionStream = web.DecompressionStream;
    var DecompressionStream: typeof web.DecompressionStream;

    // Interfaces defined in [STREAMS]:
    //
    // - ByteLengthQueuingStrategy
    type ByteLengthQueuingStrategy = web.ByteLengthQueuingStrategy;
    var ByteLengthQueuingStrategy: typeof web.ByteLengthQueuingStrategy;
    // - CountQueuingStrategy
    type CountQueuingStrategy = web.CountQueuingStrategy;
    var CountQueuingStrategy: typeof web.CountQueuingStrategy;
    // - ReadableByteStreamController
    type ReadableByteStreamController = web.ReadableByteStreamController;
    var ReadableByteStreamController: typeof web.ReadableByteStreamController;
    // - ReadableStream
    type ReadableStream<R = any> = web.ReadableStream<R>;
    var ReadableStream: typeof web.ReadableStream;
    // - ReadableStreamBYOBReader
    type ReadableStreamBYOBReader = web.ReadableStreamBYOBReader;
    var ReadableStreamBYOBReader: typeof web.ReadableStreamBYOBReader;
    // - ReadableStreamBYOBRequest
    type ReadableStreamBYOBRequest = web.ReadableStreamBYOBRequest;
    var ReadableStreamBYOBRequest: typeof web.ReadableStreamBYOBRequest;
    // - ReadableStreamDefaultController
    type ReadableStreamDefaultController<R = any> = web.ReadableStreamDefaultController<R>;
    var ReadableStreamDefaultController: typeof web.ReadableStreamDefaultController;
    // - ReadableStreamDefaultReader
    type ReadableStreamDefaultReader<R = any> = web.ReadableStreamDefaultReader<R>;
    var ReadableStreamDefaultReader: typeof web.ReadableStreamDefaultReader;
    // - TransformStream
    type TransformStream<I = any, O = any> = web.TransformStream<I, O>;
    var TransformStream: typeof web.TransformStream;
    // - TransformStreamDefaultController
    type TransformStreamDefaultController<O = any> = web.TransformStreamDefaultController<O>;
    var TransformStreamDefaultController: typeof web.TransformStreamDefaultController;
    // - WritableStream
    type WritableStream<W = any> = web.WritableStream<W>;
    var WritableStream: typeof web.WritableStream;
    // - WritableStreamDefaultController
    type WritableStreamDefaultController = web.WritableStreamDefaultController;
    var WritableStreamDefaultController: typeof web.WritableStreamDefaultController;
    // - WritableStreamDefaultWriter
    type WritableStreamDefaultWriter<W = any> = web.WritableStreamDefaultWriter<W>;
    var WritableStreamDefaultWriter: typeof web.WritableStreamDefaultWriter;

    // Interfaces defined in [ENCODING]:
    //
    // - TextDecoder
    type TextDecoder = web.TextDecoder;
    var TextDecoder: typeof web.TextDecoder;
    // - TextDecoderStream
    type TextDecoderStream = web.TextDecoderStream;
    var TextDecoderStream: typeof web.TextDecoderStream;
    // - TextEncoder
    type TextEncoder = web.TextEncoder;
    var TextEncoder: typeof web.TextEncoder;
    // - TextEncoderStream
    type TextEncoderStream = web.TextEncoderStream;
    var TextEncoderStream: typeof web.TextEncoderStream;

    // Interfaces defined in [URL]:
    //
    // - URL
    type URL = web.URL;
    var URL: typeof web.URL;
    // - URLSearchParams
    type URLSearchParams = web.URLSearchParams;
    var URLSearchParams: typeof web.URLSearchParams;
    type URLSearchParamsIterator<T> = web.URLSearchParamsIterator<T>;

    // Interfaces defined in [URLPATTERN]:
    //
    // - URLPattern
    type URLPattern = web.URLPattern;
    var URLPattern: typeof web.URLPattern;
    type URLPatternComponentResult = web.URLPatternComponentResult
    type URLpatternInit = web.URLPatternInit;
    type URLPatternInput = web.URLPatternInput;
    type URLPatternOptions = web.URLPatternOptions;
    type URLPatternResult = web.URLPatternResult;

    // Interfaces defined in [WEBCRYPTO]:
    //
    // - Crypto
    type Crypto = web.Crypto;
    var Crypto: typeof web.Crypto;
    // - CryptoKey
    type CryptoKey = web.CryptoKey;
    var CryptoKey: typeof web.CryptoKey;
    // - SubtleCrypto
    type SubtleCrypto = web.SubtleCrypto;
    var SubtleCrypto: typeof web.SubtleCrypto;

    // Interfaces defined in [HR-TIME]:
    //
    // - Performance
    type Performance = web.Performance;
    var Performance: typeof web.Performance;

    // Interfaces defined in [WASM-JS-API-2]:
    namespace WebAssembly {
        // - WebAssembly.Global
        type ValueTypeMap = web.WebAssembly.ValueTypeMap;
        type Global<T extends keyof ValueTypeMap> = web.WebAssembly.Global<T>;
        var Global: typeof web.WebAssembly.Global;
        // - WebAssembly.Instance
        type Instance = web.WebAssembly.Instance;
        var Instance: typeof web.WebAssembly.Instance;
        // - WebAssembly.Memory
        type Memory = web.WebAssembly.Memory;
        var Memory: typeof web.WebAssembly.Memory;
        // - WebAssembly.Module
        type Module = web.WebAssembly.Module;
        var Module: typeof web.WebAssembly.Module;
        // - WebAssembly.Table
        type Table = web.WebAssembly.Table;
        var Table: typeof web.WebAssembly.Table;
        // - WebAssembly.Tag
        type Tag = web.WebAssembly.Tag;
        var Tag: typeof web.WebAssembly.Tag;
        // - WebAssembly.Exception
        type Exception = web.WebAssembly.Exception;
        var Exception: typeof web.WebAssembly.Exception;
        // - WebAssembly.CompileError
        type CompileError = web.WebAssembly.CompileError;
        var CompileError: typeof web.WebAssembly.CompileError;
        // - WebAssembly.LinkError
        type LinkError = web.WebAssembly.LinkError;
        var LinkError: typeof web.WebAssembly.LinkError;
        // - WebAssembly.RuntimeError
        type RuntimeError = web.WebAssembly.RuntimeError;
        var RuntimeError: typeof web.WebAssembly.RuntimeError;
    }

    // All of the following methods and properties shall be exposed on the global object accessible through globalThis, except as specified in § 6 The global scope.

    // - globalThis (as defined in [ECMASCRIPT])
    /* Already present. */

    // Methods and properties defined in [HTML]:
    //
    // - globalThis.atob()
    var atob: typeof web.atob;
    // - globalThis.btoa()
    var btoa: typeof web.btoa;
    // - globalThis.clearTimeout()
    var clearTimeout: typeof web.clearTimeout;
    // - globalThis.clearInterval()
    var clearInterval: typeof web.clearInterval;
    // - globalThis.navigator.userAgent
    var navigator: { userAgent: typeof web.navigator.userAgent };
    // - globalThis.onerror
    var onerror: typeof web.onerror;
    // - globalThis.onunhandledrejection
    var onunhandledrejection: typeof web.onunhandledrejection;
    // - globalThis.onrejectionhandled
    var onrejectionhandled: typeof web.onrejectionhandled;
    // - globalThis.queueMicrotask()
    var queueMicrotask: typeof web.queueMicrotask;
    // - globalThis.reportError()
    var reportError: typeof web.reportError;
    // - globalThis.self
    var self: typeof globalThis;
    // - globalThis.setTimeout()
    var setTimeout: typeof web.setTimeout;
    // - globalThis.setInterval()
    var setInterval: typeof web.setInterval;
    // - globalThis.structuredClone()
    var structuredClone: typeof web.structuredClone;

    // Methods and properties defined in [FETCH]:
    //
    // - globalThis.fetch()
    var fetch: typeof web.fetch;

    // Methods and properties defined in [CONSOLE]:
    //
    // - globalThis.console
    type Console = web.Console;
    var console: typeof web.console;

    // Methods and properties defined in [WEBCRYPTO]:
    //
    // - globalThis.crypto
    var crypto: typeof web.crypto;

    // Methods and properties defined in [HR-TIME]:
    //
    // - globalThis.performance
    var performance: typeof web.performance;

    // Methods and properties defined in [WASM-JS-API-2]:
    namespace WebAssembly {
        // - globalThis.WebAssembly.compile()
        var compile: typeof web.WebAssembly.compile;
        // - globalThis.WebAssembly.compileStreaming()
        var compileStreaming: typeof web.WebAssembly.compileStreaming;
        // - globalThis.WebAssembly.instantiate()
        var instantiate: typeof web.WebAssembly.instantiate;
        // - globalThis.WebAssembly.instantiateStreaming()
        var instantiateStreaming: typeof web.WebAssembly.instantiateStreaming;
        // - globalThis.WebAssembly.JSTag
        var JSTag: typeof web.WebAssembly.JSTag;
        // - globalThis.WebAssembly.validate()
        var validate: typeof web.WebAssembly.validate;
    }

    // This Standard does not require runtimes to support web workers. However, if a runtime has
    // global scopes that map to WorkerGlobalScope (see § 6 The global scope), then the global object
    // shall also expose the following event handlers and attributes as defined in [HTML], except as specified in § 6 The global scope.

    // - onerror
    var onerror: typeof web.onerror;
    // - onunhandledrejection
    var onunhandledrejection: typeof web.onunhandledrejection;
    // - onrejectionhandled
    var onrejectionhandled: typeof web.onrejectionhandled;
    // - self
    /* Defined above. */
}
