export { }

declare global {
    namespace WebAssembly {
        interface CompileError extends Error {
        }

        var CompileError: {
            prototype: CompileError;
            new(message?: string): CompileError;
            (message?: string): CompileError;
        };

        interface Exception {
            readonly stack: string | undefined;
            getArg(exceptionTag: Tag, index: number): any;
            is(exceptionTag: Tag): boolean;
        }

        var Exception: {
            prototype: Exception;
            new(exceptionTag: Tag, payload: any[], options?: ExceptionOptions): Exception;
        };

        interface Global<T extends ValueType = ValueType> {
            value: ValueTypeMap[T];
            valueOf(): ValueTypeMap[T];
        }

        var Global: {
            prototype: Global;
            new <T extends ValueType = ValueType>(descriptor: GlobalDescriptor<T>, v?: ValueTypeMap[T]): Global<T>;
        };

        interface Instance {
            readonly exports: Exports;
        }

        var Instance: {
            prototype: Instance;
            new(module: Module, importObject?: Imports): Instance;
        };

        interface LinkError extends Error {
        }

        var LinkError: {
            prototype: LinkError;
            new(message?: string): LinkError;
            (message?: string): LinkError;
        };

        interface Memory {
            readonly buffer: ArrayBuffer;
            grow(delta: AddressValue): AddressValue;
            toFixedLengthBuffer(): ArrayBuffer;
            toResizableBuffer(): ArrayBuffer;
        }

        var Memory: {
            prototype: Memory;
            new(descriptor: MemoryDescriptor): Memory;
        };

        interface Module {
        }

        var Module: {
            prototype: Module;
            new(bytes: BufferSource, options?: WebAssemblyCompileOptions): Module;
            customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
            exports(moduleObject: Module): ModuleExportDescriptor[];
            imports(moduleObject: Module): ModuleImportDescriptor[];
        };

        interface RuntimeError extends Error {
        }

        var RuntimeError: {
            prototype: RuntimeError;
            new(message?: string): RuntimeError;
            (message?: string): RuntimeError;
        };

        interface Table {
            readonly length: AddressValue;
            get(index: AddressValue): any;
            grow(delta: AddressValue, value?: any): AddressValue;
            set(index: AddressValue, value?: any): void;
        }

        var Table: {
            prototype: Table;
            new(descriptor: TableDescriptor, value?: any): Table;
        };

        interface Tag {
        }

        var Tag: {
            prototype: Tag;
            new(type: TagType): Tag;
        };

        interface ExceptionOptions {
            traceStack?: boolean;
        }

        interface GlobalDescriptor<T extends ValueType = ValueType> {
            mutable?: boolean;
            value: T;
        }

        interface MemoryDescriptor {
            address?: AddressType;
            initial: AddressValue;
            maximum?: AddressValue;
            shared?: boolean;
        }

        interface ModuleExportDescriptor {
            kind: ImportExportKind;
            name: string;
        }

        interface ModuleImportDescriptor {
            kind: ImportExportKind;
            module: string;
            name: string;
        }

        interface TableDescriptor {
            address?: AddressType;
            element: TableKind;
            initial: AddressValue;
            maximum?: AddressValue;
        }

        interface TagType {
            parameters: ValueType[];
        }

        interface ValueTypeMap {
            anyfunc: Function;
            externref: any;
            f32: number;
            f64: number;
            i32: number;
            i64: bigint;
            v128: never;
        }

        interface WebAssemblyCompileOptions {
            builtins?: string[];
            importedStringConstants?: string | null;
        }

        interface WebAssemblyInstantiatedSource {
            instance: Instance;
            module: Module;
        }

        type AddressType = "i32" | "i64";
        type ImportExportKind = "function" | "global" | "memory" | "table" | "tag";
        type TableKind = "anyfunc" | "externref";
        type AddressValue = number;
        type ExportValue = Function | Global | Memory | Table;
        type Exports = Record<string, ExportValue>;
        type ImportValue = ExportValue | number;
        type Imports = Record<string, ModuleImports>;
        type ModuleImports = Record<string, ImportValue>;
        type ValueType = keyof ValueTypeMap;
        var JSTag: Tag;
        function compile(bytes: BufferSource, options?: WebAssemblyCompileOptions): Promise<Module>;
        function compileStreaming(source: Response | PromiseLike<Response>, options?: WebAssemblyCompileOptions): Promise<Module>;
        function instantiate(bytes: BufferSource, importObject?: Imports, options?: WebAssemblyCompileOptions): Promise<WebAssemblyInstantiatedSource>;
        function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
        function instantiateStreaming(source: Response | PromiseLike<Response>, importObject?: Imports, options?: WebAssemblyCompileOptions): Promise<WebAssemblyInstantiatedSource>;
        function validate(bytes: BufferSource, options?: WebAssemblyCompileOptions): boolean;
    }
}