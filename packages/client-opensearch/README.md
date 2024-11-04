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
import { OpenSearchService, DefaultOpenSearchServiceLayer } from "@effect-aws/client-opensearch";

const program = OpenSearchService.describeDomains(args);

const result = pipe(
  program,
  Effect.provide(DefaultOpenSearchServiceLayer),
  Effect.runPromise,
);
```

With custom OpenSearchClient instance:

```typescript
import {
  OpenSearchService,
  BaseOpenSearchServiceLayer,
  OpenSearchClientInstance,
} from "@effect-aws/client-opensearch";

const program = OpenSearchService.describeDomains(args);

const OpenSearchClientInstanceLayer = Layer.succeed(
  OpenSearchClientInstance,
  new OpenSearchClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseOpenSearchServiceLayer),
  Effect.provide(OpenSearchClientInstanceLayer),
  Effect.runPromise,
);
```

With custom OpenSearchClient configuration:

```typescript
import {
  OpenSearchService,
  BaseOpenSearchServiceLayer,
  DefaultOpenSearchClientConfigLayer,
  OpenSearchClientInstance,
  OpenSearchClientInstanceConfig,
} from "@effect-aws/client-opensearch";

const program = OpenSearchService.describeDomains(args);

const OpenSearchClientInstanceLayer = Layer.provide(
  Layer.effect(
    OpenSearchClientInstance,
    OpenSearchClientInstanceConfig.pipe(
      Effect.map(
        (config) => new OpenSearchClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultOpenSearchClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseOpenSearchServiceLayer),
  Effect.provide(OpenSearchClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultOpenSearchClientConfigLayer` layer context and update the configuration...
