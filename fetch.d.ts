// Fetch Standard — https://fetch.spec.whatwg.org/
// Interfaces: Headers, Request, Response
// Global methods: fetch()

export {};

declare global {
  type HeadersInit = [string, string][] | Record<string, string> | Headers;

  interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getSetCookie(): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(
      callbackfn: (value: string, key: string, parent: Headers) => void,
      thisArg?: any,
    ): void;
    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
    [Symbol.iterator](): IterableIterator<[string, string]>;
  }

  var Headers: {
    prototype: Headers;
    new (init?: HeadersInit): Headers;
  };

  type RequestInfo = Request | string;
  type RequestCache =
    | "default"
    | "force-cache"
    | "no-cache"
    | "no-store"
    | "only-if-cached"
    | "reload";
  type RequestCredentials = "include" | "omit" | "same-origin";
  type RequestDestination =
    | ""
    | "audio"
    | "audioworklet"
    | "document"
    | "embed"
    | "font"
    | "frame"
    | "iframe"
    | "image"
    | "manifest"
    | "object"
    | "paintworklet"
    | "report"
    | "script"
    | "sharedworker"
    | "style"
    | "track"
    | "video"
    | "worker"
    | "xslt";
  type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
  type RequestRedirect = "error" | "follow" | "manual";
  type ReferrerPolicy =
    | ""
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  type RequestDuplex = "half";
  type RequestPriority = "auto" | "high" | "low";

  interface RequestInit {
    body?: BodyInit | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    priority?: RequestPriority;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    duplex?: RequestDuplex;
    window?: null;
  }

  type BodyInit =
    | ReadableStream
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | string;

  interface Body {
    readonly body: ReadableStream<Uint8Array> | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    bytes(): Promise<Uint8Array>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
  }

  interface Request extends Body {
    readonly cache: RequestCache;
    readonly credentials: RequestCredentials;
    readonly destination: RequestDestination;
    readonly headers: Headers;
    readonly integrity: string;
    readonly keepalive: boolean;
    readonly method: string;
    readonly mode: RequestMode;
    readonly redirect: RequestRedirect;
    readonly referrer: string;
    readonly referrerPolicy: ReferrerPolicy;
    readonly signal: AbortSignal;
    readonly url: string;
    clone(): Request;
  }

  var Request: {
    prototype: Request;
    new (input: RequestInfo | URL, init?: RequestInit): Request;
  };

  type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

  interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
  }

  interface Response extends Body {
    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;
  }

  var Response: {
    prototype: Response;
    new (body?: BodyInit | null, init?: ResponseInit): Response;
    error(): Response;
    json(data: any, init?: ResponseInit): Response;
    redirect(url: string | URL, status?: number): Response;
  };

  function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}
