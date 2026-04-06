// WebAssembly JavaScript Interface — https://webassembly.github.io/spec/js-api/
// WebAssembly Web API — https://webassembly.github.io/spec/web-api/
// Namespace: WebAssembly (Global, Instance, Memory, Module, Table, Tag, Exception,
//            CompileError, LinkError, RuntimeError)
// Global methods: WebAssembly.compile, WebAssembly.compileStreaming,
//                 WebAssembly.instantiate, WebAssembly.instantiateStreaming,
//                 WebAssembly.JSTag, WebAssembly.validate

export {};

declare global {
  namespace WebAssembly {
    type ValueType =
      | "anyfunc"
      | "externref"
      | "f32"
      | "f64"
      | "i32"
      | "i64"
      | "v128";
    type ImportExportKind = "function" | "global" | "memory" | "table" | "tag";
    type TableKind = "anyfunc" | "externref";
    type ExportValue = Function | Global | Memory | Module | Table | Tag;
    type Imports = Record<string, Record<string, ImportValue>>;
    type ImportValue = ExportValue | number;
    type ModuleImports = ModuleImportDescriptor[];
    type ModuleExports = ModuleExportDescriptor[];

    interface GlobalDescriptor {
      mutable?: boolean;
      value: ValueType;
    }

    interface Global {
      value: any;
      valueOf(): any;
    }

    var Global: {
      prototype: Global;
      new (descriptor: GlobalDescriptor, v?: any): Global;
    };

    interface MemoryDescriptor {
      initial: number;
      maximum?: number;
      shared?: boolean;
    }

    interface Memory {
      readonly buffer: ArrayBuffer;
      grow(delta: number): number;
    }

    var Memory: {
      prototype: Memory;
      new (descriptor: MemoryDescriptor): Memory;
    };

    interface ModuleExportDescriptor {
      kind: ImportExportKind;
      name: string;
    }

    interface ModuleImportDescriptor {
      kind: ImportExportKind;
      module: string;
      name: string;
    }

    interface Module {}

    var Module: {
      prototype: Module;
      new (bytes: BufferSource): Module;
      customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
      exports(moduleObject: Module): ModuleExportDescriptor[];
      imports(moduleObject: Module): ModuleImportDescriptor[];
    };

    interface TableDescriptor {
      element: TableKind;
      initial: number;
      maximum?: number;
    }

    interface Table {
      readonly length: number;
      get(index: number): any;
      grow(delta: number, value?: any): number;
      set(index: number, value?: any): void;
    }

    var Table: {
      prototype: Table;
      new (descriptor: TableDescriptor, value?: any): Table;
    };

    interface TagDescriptor {
      parameters: ValueType[];
    }

    interface Tag {
      type(): TagDescriptor;
    }

    var Tag: {
      prototype: Tag;
      new (type: TagDescriptor): Tag;
    };

    interface ExceptionOptions {
      traceStack?: boolean;
    }

    interface Exception {
      getArg(tag: Tag, index: number): any;
      is(tag: Tag): boolean;
      stack?: string;
    }

    var Exception: {
      prototype: Exception;
      new (tag: Tag, payload: any[], options?: ExceptionOptions): Exception;
    };

    var CompileError: {
      prototype: Error;
      new (message?: string): Error;
    };

    var LinkError: {
      prototype: Error;
      new (message?: string): Error;
    };

    var RuntimeError: {
      prototype: Error;
      new (message?: string): Error;
    };

    interface WebAssemblyInstantiatedSource {
      instance: Instance;
      module: Module;
    }

    interface Instance {
      readonly exports: Exports;
    }

    var Instance: {
      prototype: Instance;
      new (module: Module, importObject?: Imports): Instance;
    };

    type Exports = Record<string, ExportValue>;

    var JSTag: Tag;

    function compile(bytes: BufferSource): Promise<Module>;
    function compileStreaming(source: Response | Promise<Response>): Promise<Module>;
    function instantiate(
      bytes: BufferSource,
      importObject?: Imports,
    ): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(
      moduleObject: Module,
      importObject?: Imports,
    ): Promise<Instance>;
    function instantiateStreaming(
      source: Response | Promise<Response>,
      importObject?: Imports,
    ): Promise<WebAssemblyInstantiatedSource>;
    function validate(bytes: BufferSource): boolean;
  }
}
