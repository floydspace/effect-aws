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
import { CloudSearchService, DefaultCloudSearchServiceLayer } from "@effect-aws/client-cloudsearch";

const program = CloudSearchService.describeDomains(args);

const result = pipe(
  program,
  Effect.provide(DefaultCloudSearchServiceLayer),
  Effect.runPromise,
);
```

With custom CloudSearchClient instance:

```typescript
import {
  CloudSearchService,
  BaseCloudSearchServiceLayer,
  CloudSearchClientInstance,
} from "@effect-aws/client-cloudsearch";

const program = CloudSearchService.describeDomains(args);

const CloudSearchClientInstanceLayer = Layer.succeed(
  CloudSearchClientInstance,
  new CloudSearchClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseCloudSearchServiceLayer),
  Effect.provide(CloudSearchClientInstanceLayer),
  Effect.runPromise,
);
```

With custom CloudSearchClient configuration:

```typescript
import {
  CloudSearchService,
  BaseCloudSearchServiceLayer,
  DefaultCloudSearchClientConfigLayer,
  CloudSearchClientInstance,
  CloudSearchClientInstanceConfig,
} from "@effect-aws/client-cloudsearch";

const program = CloudSearchService.describeDomains(args);

const CloudSearchClientInstanceLayer = Layer.provide(
  Layer.effect(
    CloudSearchClientInstance,
    CloudSearchClientInstanceConfig.pipe(
      Effect.map(
        (config) => new CloudSearchClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultCloudSearchClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseCloudSearchServiceLayer),
  Effect.provide(CloudSearchClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultCloudSearchClientConfigLayer` layer context and update the configuration...
