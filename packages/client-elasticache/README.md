# @effect-aws/client-elasticache

## Installation

```bash
npm install --save @effect-aws/client-elasticache
```

## Usage

With default ElastiCacheClient instance:

```typescript
import { ElastiCacheService, DefaultElastiCacheServiceLayer } from "@effect-aws/client-elasticache";

const program = ElastiCacheService.listTagsForResource(args);

const result = pipe(
  program,
  Effect.provide(DefaultElastiCacheServiceLayer),
  Effect.runPromise,
);
```

With custom ElastiCacheClient instance:

```typescript
import {
  ElastiCacheService,
  BaseElastiCacheServiceLayer,
  ElastiCacheClientInstance,
} from "@effect-aws/client-elasticache";

const program = ElastiCacheService.listTagsForResource(args);

const ElastiCacheClientInstanceLayer = Layer.succeed(
  ElastiCacheClientInstance,
  new ElastiCacheClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseElastiCacheServiceLayer),
  Effect.provide(ElastiCacheClientInstanceLayer),
  Effect.runPromise,
);
```

With custom ElastiCacheClient configuration:

```typescript
import {
  ElastiCacheService,
  BaseElastiCacheServiceLayer,
  DefaultElastiCacheClientConfigLayer,
  ElastiCacheClientInstance,
  ElastiCacheClientInstanceConfig,
} from "@effect-aws/client-elasticache";

const program = ElastiCacheService.listTagsForResource(args);

const ElastiCacheClientInstanceLayer = Layer.provide(
  Layer.effect(
    ElastiCacheClientInstance,
    ElastiCacheClientInstanceConfig.pipe(
      Effect.map(
        (config) => new ElastiCacheClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultElastiCacheClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseElastiCacheServiceLayer),
  Effect.provide(ElastiCacheClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultElastiCacheClientConfigLayer` layer context and update the configuration...
