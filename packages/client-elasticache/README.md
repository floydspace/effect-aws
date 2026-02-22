# @effect-aws/client-elasticache

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-elasticache?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-elasticache)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-elasticache)](https://www.npmjs.com/package/@effect-aws/client-elasticache)

## Installation

```bash
npm install --save @effect-aws/client-elasticache
```

## Usage

With default ElastiCacheClient instance:

```typescript
import { ElastiCache } from "@effect-aws/client-elasticache";

const program = ElastiCache.use((svc) => svc.listTagsForResource(args));

const result = pipe(
  program,
  Effect.provide(ElastiCache.defaultLayer),
  Effect.runPromise,
);
```

With custom ElastiCacheClient instance:

```typescript
import { ElastiCache } from "@effect-aws/client-elasticache";

const program = ElastiCache.use((svc) => svc.listTagsForResource(args));

const result = await pipe(
  program,
  Effect.provide(
    ElastiCache.baseLayer(() => new ElastiCacheClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom ElastiCacheClient configuration:

```typescript
import { ElastiCache } from "@effect-aws/client-elasticache";

const program = ElastiCache.use((svc) => svc.listTagsForResource(args));

const result = await pipe(
  program,
  Effect.provide(ElastiCache.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `ElastiCache.baseLayer((default) => new ElastiCacheClient({ ...default, region: "eu-central-1" }))`
