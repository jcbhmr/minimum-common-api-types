# Minimum Common API types

📘 Type definitions for web-interoperable runtime APIs

## Installation

## Usage

## Development

This project takes advantage of [@types/web](https://www.npmjs.com/package/@types/web). We repackage `@types/web/index.d.ts` (script) as an internal `types-web-module.d.ts` file (module) by exporting everything instead of declaring global types. Then we can import just the types that we want to expose and declare them globally.
