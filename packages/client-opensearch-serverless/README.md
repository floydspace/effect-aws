# @effect-aws/client-opensearch-serverless

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-opensearch-serverless?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-opensearch-serverless)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-opensearch-serverless)](https://www.npmjs.com/package/@effect-aws/client-opensearch-serverless)

## Installation

```bash
npm install --save @effect-aws/client-opensearch-serverless
```

## Usage

With default OpenSearchServerlessClient instance:

```typescript
import { OpenSearchServerless } from "@effect-aws/client-opensearch-serverless";

const program = OpenSearchServerless.use((svc) => svc.listCollections(args));

const result = pipe(
  program,
  Effect.provide(OpenSearchServerless.defaultLayer),
  Effect.runPromise,
);
```

With custom OpenSearchServerlessClient instance:

```typescript
import { OpenSearchServerless } from "@effect-aws/client-opensearch-serverless";

const program = OpenSearchServerless.use((svc) => svc.listCollections(args));

const result = await pipe(
  program,
  Effect.provide(
    OpenSearchServerless.baseLayer(() => new OpenSearchServerlessClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom OpenSearchServerlessClient configuration:

```typescript
import { OpenSearchServerless } from "@effect-aws/client-opensearch-serverless";

const program = OpenSearchServerless.use((svc) => svc.listCollections(args));

const result = await pipe(
  program,
  Effect.provide(OpenSearchServerless.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `OpenSearchServerless.baseLayer((default) => new OpenSearchServerlessClient({ ...default, region: "eu-central-1" }))`
