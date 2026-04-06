// XMLHttpRequest Standard — https://xhr.spec.whatwg.org/
// Interfaces: FormData

export {};

declare global {
  type FormDataEntryValue = File | string;

  interface FormData {
    append(name: string, value: string | Blob): void;
    append(name: string, value: Blob, filename?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string | Blob): void;
    set(name: string, value: Blob, filename?: string): void;
    forEach(
      callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void,
      thisArg?: any,
    ): void;
    entries(): IterableIterator<[string, FormDataEntryValue]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<FormDataEntryValue>;
    [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
  }

  var FormData: {
    prototype: FormData;
    new (): FormData;
  };
}
