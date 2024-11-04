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
import { OpenSearchServerlessService, DefaultOpenSearchServerlessServiceLayer } from "@effect-aws/client-opensearch-serverless";

const program = OpenSearchServerlessService.listCollections(args);

const result = pipe(
  program,
  Effect.provide(DefaultOpenSearchServerlessServiceLayer),
  Effect.runPromise,
);
```

With custom OpenSearchServerlessClient instance:

```typescript
import {
  OpenSearchServerlessService,
  BaseOpenSearchServerlessServiceLayer,
  OpenSearchServerlessClientInstance,
} from "@effect-aws/client-opensearch-serverless";

const program = OpenSearchServerlessService.listCollections(args);

const OpenSearchServerlessClientInstanceLayer = Layer.succeed(
  OpenSearchServerlessClientInstance,
  new OpenSearchServerlessClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseOpenSearchServerlessServiceLayer),
  Effect.provide(OpenSearchServerlessClientInstanceLayer),
  Effect.runPromise,
);
```

With custom OpenSearchServerlessClient configuration:

```typescript
import {
  OpenSearchServerlessService,
  BaseOpenSearchServerlessServiceLayer,
  DefaultOpenSearchServerlessClientConfigLayer,
  OpenSearchServerlessClientInstance,
  OpenSearchServerlessClientInstanceConfig,
} from "@effect-aws/client-opensearch-serverless";

const program = OpenSearchServerlessService.listCollections(args);

const OpenSearchServerlessClientInstanceLayer = Layer.provide(
  Layer.effect(
    OpenSearchServerlessClientInstance,
    OpenSearchServerlessClientInstanceConfig.pipe(
      Effect.map(
        (config) => new OpenSearchServerlessClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultOpenSearchServerlessClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseOpenSearchServerlessServiceLayer),
  Effect.provide(OpenSearchServerlessClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultOpenSearchServerlessClientConfigLayer` layer context and update the configuration...
