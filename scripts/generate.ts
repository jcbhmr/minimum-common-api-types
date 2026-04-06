#!/usr/bin/env vite-node --script
import { readFile, writeFile } from "node:fs/promises";
import { findPackageJSON } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { type ParserOptions, Visitor, parse as oxcParse } from "oxc-parser"
import { print as esrapPrint } from "esrap"
import esrapTS, { type Node as EsrapNode } from "esrap/languages/ts"

async function parseTS(input: string, options?: ParserOptions) {
    const result = await oxcParse("input.ts", input, options)
    if (result.errors.length > 0) {
        throw new AggregateError(result.errors, "Failed to parse TypeScript");
    }
    return result.program
}

function stringifyTS(node: EsrapNode): string {
    const result = esrapPrint(node, esrapTS({}));
    return result.code;
}

const commonInterfaces = [
    "AbortController",
    "AbortSignal",
    "Event",
    "EventTarget",
    "CustomEvent",
    "ErrorEvent",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "PromiseRejectionEvent",
    "DOMException",
    "Headers",
    "Request",
    "Response",
    "FormData",
    "Blob",
    "File",
    "CompressionStream",
    "DecompressionStream",
    "ByteLengthQueuingStrategy",
    "CountQueuingStrategy",
    "ReadableByteStreamController",
    "ReadableStream",
    "ReadableStreamBYOBReader",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "ReadableStreamDefaultReader",
    "TransformStream",
    "TransformStreamDefaultController",
    "WritableStream",
    "WritableStreamDefaultController",
    "WritableStreamDefaultWriter",
    "TextDecoder",
    "TextDecoderStream",
    "TextEncoder",
    "TextEncoderStream",
    "URL",
    "URLSearchParams",
    "URLPattern",
    "Crypto",
    "CryptoKey",
    "SubtleCrypto",
    "Performance",
    "WebAssembly.Global",
    "WebAssembly.Instance",
    "WebAssembly.Memory",
    "WebAssembly.Module",
    "WebAssembly.Table",
    "WebAssembly.Tag",
    "WebAssembly.Exception",
    "WebAssembly.CompileError",
    "WebAssembly.LinkError",
    "WebAssembly.RuntimeError",
]
const commonMethodsAndProperties = [
    "atob",
    "btoa",
    "clearTimeout",
    "clearInterval",
    "navigator.userAgent",
    "onerror",
    "onunhandledrejection",
    "onrejectionhandled",
    "queueMicrotask",
    "reportError",
    "self",
    "setTimeout",
    "setInterval",
    "structuredClone",
    "fetch",
    "console",
    "crypto",
    "performance",
    "WebAssembly.compile",
    "WebAssembly.compileStreaming",
    "WebAssembly.instantiate",
    "WebAssembly.instantiateStreaming",
    "WebAssembly.JSTag",
    "WebAssembly.validate",
]

const dom = await (async () => {
    const path = findPackageJSON("@types/web", import.meta.url)
    if (path == null) {
        throw new Error("Could not find @types/web package.json");
    }
    const fileURL = pathToFileURL(path);
    const text = await readFile(new URL("./index.d.ts", fileURL), "utf-8");
    return await parseTS(text, { sourceType: "script" });
})()

const visitor = new Visitor({
    TSInterfaceDeclaration(node) {
        if (node.id.name === "URLPattern") {
            console.log(node)
        }
    },
})
visitor.visit(dom);

{
    const text = stringifyTS(dom as any);
    await writeFile(new URL(import.meta.resolve("../out.d.ts")), text);
}