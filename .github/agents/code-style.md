# Code Style & Formatting

Formatting is enforced by `@effect/eslint-plugin` (dprint integration), not Prettier. Run `pnpm eslint --fix` to auto-format.

## Formatting Rules

| Rule | Value |
|---|---|
| Indent | 2 spaces |
| Line width | 120 characters |
| Semicolons | Always |
| Quotes | Double quotes |
| Trailing commas | Multiline only |
| Arrow function parens | Always (`force`) |
| Quote props | As needed |

## Imports

```typescript
// 1. Use `import type` for type-only imports
import type { S3ClientConfig } from "@aws-sdk/client-s3";

// 2. Internal imports use .js extension
import { Service } from "./Service.js";

// 3. Effect modules: destructure from "effect" or namespace from subpath
import { Data, Effect, Layer } from "effect";
import * as Effect from "effect/Effect";   // alternative

// 4. Newline required after import block (import/newline-after-import)
// 5. No duplicate imports (import/no-duplicates)
```

Import sort order is not enforced (simple-import-sort is OFF).

## Type Conventions

```typescript
// Use Array<T>, not T[]
const items: Array<string> = [];
const nested: Array<Array<number>> = [];

// Destructure keys must be sorted alphabetically
const { alpha, beta, gamma } = obj;    // correct
const { gamma, alpha, beta } = obj;    // ESLint error

// Unused variables: prefix with _ to suppress error
const _unused = someValue;
function handler(_event: Event) { ... }

// Object shorthand required
const obj = { name, value };           // correct
const obj = { name: name };            // ESLint error
```

## Naming

- Service classes: PascalCase (`S3Service`, `DynamoDBDocumentService`)
- Service interfaces: PascalCase with `$` suffix (`S3Service$`, `DynamoDBDocumentService$`)
- Service factories: camelCase with `make` prefix (`makeS3Service`)
- Error types: PascalCase (`NoSuchKeyError`, `SdkError`)
- Tag identifiers: scoped string (`"@effect-aws/client-s3/S3Service"`)

## Module Exports

```typescript
// index.ts -- namespace re-export for modules, barrel re-export for types
export * as Service from "./Service.js";
export * from "./Errors.js";
```

All public exports require JSDoc `@since` annotations for `@effect/docgen`:

```typescript
/**
 * @since 1.0.0
 * @category constructors
 */
export const make = ...
```
