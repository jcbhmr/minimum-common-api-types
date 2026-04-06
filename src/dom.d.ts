export { }

declare global {
    interface AbortController {
        readonly signal: AbortSignal;
        abort(reason?: any): void;
    }
    var AbortController: {
        prototype: AbortController;
        new(): AbortController;
    };

    interface AbortSignalEventMap {
        "abort": Event;
    }
    interface AbortSignal extends EventTarget {
        readonly aborted: boolean;
        onabort: ((this: AbortSignal, ev: Event) => any) | null;
        readonly reason: any;
        throwIfAborted(): void;
        addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var AbortSignal: {
        prototype: AbortSignal;
        new(): AbortSignal;
        abort(reason?: any): AbortSignal;
        any(signals: AbortSignal[]): AbortSignal;
        timeout(milliseconds: number): AbortSignal;
    };

    interface Event {
        readonly bubbles: boolean;
        /** @deprecated */
        cancelBubble: boolean;
        readonly cancelable: boolean;
        readonly composed: boolean;
        readonly currentTarget: EventTarget | null;
        readonly defaultPrevented: boolean;
        readonly eventPhase: number;
        readonly isTrusted: boolean;
        /** @deprecated */
        returnValue: boolean;
        /** @deprecated */
        readonly srcElement: EventTarget | null;
        readonly target: EventTarget | null;
        readonly timeStamp: DOMHighResTimeStamp;
        readonly type: string;
        composedPath(): EventTarget[];
        /** @deprecated */
        initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
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
        new(type: string, eventInitDict?: EventInit): Event;
        readonly NONE: 0;
        readonly CAPTURING_PHASE: 1;
        readonly AT_TARGET: 2;
        readonly BUBBLING_PHASE: 3;
    };
    interface EventInit {
        bubbles?: boolean;
        cancelable?: boolean;
        composed?: boolean;
    }

    interface EventTarget {
        addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
    }
    var EventTarget: {
        prototype: EventTarget;
        new(): EventTarget;
    };

    interface AddEventListenerOptions extends EventListenerOptions {
        once?: boolean;
        passive?: boolean;
        signal?: AbortSignal;
    }
    interface EventListenerOptions {
        capture?: boolean;
    }

    type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
    interface EventListener {
        (evt: Event): void;
    }
    interface EventListenerObject {
        handleEvent(object: Event): void;
    }
}