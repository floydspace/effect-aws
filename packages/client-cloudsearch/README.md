# @effect-aws/client-cloudsearch

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-cloudsearch?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-cloudsearch)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-cloudsearch)](https://www.npmjs.com/package/@effect-aws/client-cloudsearch)

## Installation

```bash
npm install --save @effect-aws/client-cloudsearch
```

## Usage

With default CloudSearchClient instance:

```typescript
import { CloudSearch } from "@effect-aws/client-cloudsearch";

const program = CloudSearch.describeDomains(args);

const result = pipe(
  program,
  Effect.provide(CloudSearch.defaultLayer),
  Effect.runPromise,
);
```

With custom CloudSearchClient instance:

```typescript
import { CloudSearch } from "@effect-aws/client-cloudsearch";

const program = CloudSearch.describeDomains(args);

const result = await pipe(
  program,
  Effect.provide(
    CloudSearch.baseLayer(() => new CloudSearchClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom CloudSearchClient configuration:

```typescript
import { CloudSearch } from "@effect-aws/client-cloudsearch";

const program = CloudSearch.describeDomains(args);

const result = await pipe(
  program,
  Effect.provide(CloudSearch.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `CloudSearch.baseLayer((default) => new CloudSearchClient({ ...default, region: "eu-central-1" }))`
