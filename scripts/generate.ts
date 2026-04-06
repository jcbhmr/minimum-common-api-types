#!/usr/bin/env vite-node --script
import { readFile, writeFile } from "node:fs/promises";
import { findPackageJSON } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";


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

const webScript = await (async () => {
    const path = findPackageJSON("@types/web", import.meta.url)
    if (path == null) {
        throw new Error("Could not find @types/web package.json");
    }
    const fileURL = pathToFileURL(path);
    return await readFile(new URL("./index.d.ts", fileURL), "utf-8");
})()

const webModule = webScript.replaceAll(/^((?:interface|type|declare namespace) )/gm, "export $1").replaceAll(/^(\/\/\/ <reference .*\/>)$/gm, "// $1");
{
    const fileURL = new URL("../src/types-web-module.d.ts", import.meta.url);
    await writeFile(fileURL, webModule);
}