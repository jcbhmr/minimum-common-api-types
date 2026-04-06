// HTML Standard — https://html.spec.whatwg.org/
// Interfaces: CustomEvent, ErrorEvent, MessageChannel, MessageEvent, MessagePort, PromiseRejectionEvent
// Global methods: atob, btoa, clearTimeout, clearInterval, setTimeout, setInterval,
//                 queueMicrotask, reportError, structuredClone, self,
//                 onerror, onunhandledrejection, onrejectionhandled,
//                 navigator.userAgent

export {};

declare global {
  interface CustomEventInit<T = any> extends EventInit {
    detail?: T;
  }

  interface CustomEvent<T = any> extends Event {
    readonly detail: T;
    /** @deprecated */
    initCustomEvent(
      type: string,
      bubbles?: boolean,
      cancelable?: boolean,
      detail?: T,
    ): void;
  }

  var CustomEvent: {
    prototype: CustomEvent;
    new <T = any>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
  };

  interface ErrorEventInit extends EventInit {
    message?: string;
    filename?: string;
    lineno?: number;
    colno?: number;
    error?: any;
  }

  interface ErrorEvent extends Event {
    readonly colno: number;
    readonly error: any;
    readonly filename: string;
    readonly lineno: number;
    readonly message: string;
  }

  var ErrorEvent: {
    prototype: ErrorEvent;
    new (type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
  };

  interface MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
  }

  var MessageChannel: {
    prototype: MessageChannel;
    new (): MessageChannel;
  };

  interface MessageEventInit<T = any> extends EventInit {
    data?: T;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
  }

  type MessageEventSource = MessagePort;

  interface MessageEvent<T = any> extends Event {
    readonly data: T;
    readonly lastEventId: string;
    readonly origin: string;
    readonly ports: ReadonlyArray<MessagePort>;
    readonly source: MessageEventSource | null;
  }

  var MessageEvent: {
    prototype: MessageEvent;
    new <T = any>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
  };

  interface MessagePortEventMap {
    message: MessageEvent;
    messageerror: MessageEvent;
    close: Event;
  }

  interface MessagePort extends EventTarget {
    onmessage: ((this: MessagePort, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: MessagePort, ev: MessageEvent) => any) | null;
    onclose: ((this: MessagePort, ev: Event) => any) | null;
    close(): void;
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(
      type: K,
      listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof MessagePortEventMap>(
      type: K,
      listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions,
    ): void;
  }

  var MessagePort: {
    prototype: MessagePort;
    new (): MessagePort;
  };

  interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>;
    reason?: any;
  }

  interface PromiseRejectionEvent extends Event {
    readonly promise: Promise<any>;
    readonly reason: any;
  }

  var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new (type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
  };

  interface StructuredSerializeOptions {
    transfer?: Transferable[];
  }

  type Transferable = ArrayBuffer | MessagePort;

  interface Navigator {
    readonly userAgent: string;
  }

  var navigator: Navigator;

  var self: typeof globalThis;

  function atob(data: string): string;
  function btoa(data: string): string;

  function clearTimeout(id?: ReturnType<typeof setTimeout>): void;
  function clearInterval(id?: ReturnType<typeof setInterval>): void;
  function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
  function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;

  type TimerHandler = string | Function;

  type VoidFunction = () => void;

  function queueMicrotask(callback: VoidFunction): void;
  function reportError(e: any): void;
  function structuredClone<T = any>(value: T, options?: StructuredSerializeOptions): T;

  var onerror: OnErrorEventHandler;
  var onunhandledrejection: ((this: typeof globalThis, ev: PromiseRejectionEvent) => any) | null;
  var onrejectionhandled: ((this: typeof globalThis, ev: PromiseRejectionEvent) => any) | null;

  type OnErrorEventHandlerNonNull = (
    event: Event | string,
    source?: string,
    lineno?: number,
    colno?: number,
    error?: Error,
  ) => any;
  type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;
}
