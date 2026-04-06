// URL Standard — https://url.spec.whatwg.org/
// Interfaces: URL, URLSearchParams

export {};

declare global {
  interface URLSearchParams {
    size: number;
    append(name: string, value: string): void;
    delete(name: string, value?: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string, value?: string): boolean;
    set(name: string, value: string): void;
    sort(): void;
    toString(): string;
    forEach(
      callbackfn: (value: string, key: string, parent: URLSearchParams) => void,
      thisArg?: any,
    ): void;
    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
    [Symbol.iterator](): IterableIterator<[string, string]>;
  }

  var URLSearchParams: {
    prototype: URLSearchParams;
    new (
      init?: string[][] | Record<string, string> | string | URLSearchParams,
    ): URLSearchParams;
  };

  interface URL {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    toString(): string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    readonly searchParams: URLSearchParams;
    username: string;
    toJSON(): string;
  }

  var URL: {
    prototype: URL;
    new (url: string | URL, base?: string | URL): URL;
    canParse(url: string | URL, base?: string | URL): boolean;
    createObjectURL(obj: Blob): string;
    revokeObjectURL(url: string): void;
    parse(url: string | URL, base?: string | URL): URL | null;
  };
}
