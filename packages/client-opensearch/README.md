# @effect-aws/client-opensearch

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-opensearch?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-opensearch)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-opensearch)](https://www.npmjs.com/package/@effect-aws/client-opensearch)

## Installation

```bash
npm install --save @effect-aws/client-opensearch
```

## Usage

With default OpenSearchClient instance:

```typescript
import { OpenSearch } from "@effect-aws/client-opensearch";

const program = OpenSearch.describeDomains(args);

const result = pipe(
  program,
  Effect.provide(OpenSearch.defaultLayer),
  Effect.runPromise,
);
```

With custom OpenSearchClient instance:

```typescript
import { OpenSearch } from "@effect-aws/client-opensearch";

const program = OpenSearch.describeDomains(args);

const result = await pipe(
  program,
  Effect.provide(
    OpenSearch.baseLayer(() => new OpenSearchClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom OpenSearchClient configuration:

```typescript
import { OpenSearch } from "@effect-aws/client-opensearch";

const program = OpenSearch.describeDomains(args);

const result = await pipe(
  program,
  Effect.provide(OpenSearch.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `OpenSearch.baseLayer((default) => new OpenSearchClient({ ...default, region: "eu-central-1" }))`
