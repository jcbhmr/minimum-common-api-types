// DOM Standard — https://dom.spec.whatwg.org/
// Interfaces: AbortController, AbortSignal, Event, EventTarget

export {};

declare global {
  interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
  }

  interface Event {
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly currentTarget: EventTarget | null;
    readonly defaultPrevented: boolean;
    readonly eventPhase: number;
    readonly isTrusted: boolean;
    readonly target: EventTarget | null;
    readonly timeStamp: number;
    readonly type: string;
    composedPath(): EventTarget[];
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
  }

  var Event: {
    prototype: Event;
    new (type: string, eventInitDict?: EventInit): Event;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
  };

  interface EventListener {
    (evt: Event): void;
  }

  interface EventListenerObject {
    handleEvent(object: Event): void;
  }

  type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

  interface EventListenerOptions {
    capture?: boolean;
  }

  interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
  }

  interface EventTarget {
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject | null,
      options?: boolean | AddEventListenerOptions,
    ): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject | null,
      options?: boolean | EventListenerOptions,
    ): void;
  }

  var EventTarget: {
    prototype: EventTarget;
    new (): EventTarget;
  };

  interface AbortSignalEventMap {
    abort: Event;
  }

  interface AbortSignal extends EventTarget {
    readonly aborted: boolean;
    readonly reason: any;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
    throwIfAborted(): void;
    addEventListener<K extends keyof AbortSignalEventMap>(
      type: K,
      listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(
      type: K,
      listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions,
    ): void;
  }

  var AbortSignal: {
    prototype: AbortSignal;
    new (): AbortSignal;
    abort(reason?: any): AbortSignal;
    any(signals: AbortSignal[]): AbortSignal;
    timeout(milliseconds: number): AbortSignal;
  };

  interface AbortController {
    readonly signal: AbortSignal;
    abort(reason?: any): void;
  }

  var AbortController: {
    prototype: AbortController;
    new (): AbortController;
  };
}
