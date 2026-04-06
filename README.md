# Minimum Common API types

📘 Type definitions for web-interoperable runtime APIs

## Installation

```sh
npm install --save-dev @typescript/lib-minumum-common-api@npm:@jcbhmr/minimum-common-api-types
```

## Usage

```json
{
  "compilerOptions": {
    // "minimum-common-api" will import "@typescript/lib-minimum-common-api"
    // which is a renamed dependency on "@jcbhmr/minimum-common-api-types".
    "lib": ["ES2024", "minimum-common-api"]
  }
}
```

## Development

This project takes advantage of [@types/web](https://www.npmjs.com/package/@types/web). We repackage `@types/web/index.d.ts` (script) as an internal `types-web-module.d.ts` file (module) by exporting everything instead of declaring global types. Then we can import just the types that we want to expose and declare them globally.
