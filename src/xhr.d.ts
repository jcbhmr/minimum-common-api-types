export { }

declare global {
    type FormDataEntryValue = File | string;
    interface FormData {
        append(name: string, value: string | Blob): void;
        append(name: string, value: string): void;
        append(name: string, blobValue: Blob, filename?: string): void;
        delete(name: string): void;
        get(name: string): FormDataEntryValue | null;
        getAll(name: string): FormDataEntryValue[];
        has(name: string): boolean;
        set(name: string, value: string | Blob): void;
        set(name: string, value: string): void;
        set(name: string, blobValue: Blob, filename?: string): void;
        forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
        [Symbol.iterator](): FormDataIterator<[string, FormDataEntryValue]>;
        entries(): FormDataIterator<[string, FormDataEntryValue]>;
        keys(): FormDataIterator<string>;
        values(): FormDataIterator<FormDataEntryValue>;
    }
    interface FormDataIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
        [Symbol.iterator](): FormDataIterator<T>;
    }
    var FormData: {
        prototype: FormData;
        new(form?: undefined, submitter?: null): FormData;
    };

}