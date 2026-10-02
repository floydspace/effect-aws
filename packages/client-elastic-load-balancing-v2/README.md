# @effect-aws/client-elastic-load-balancing-v2

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-elastic-load-balancing-v2?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-elastic-load-balancing-v2)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-elastic-load-balancing-v2)](https://www.npmjs.com/package/@effect-aws/client-elastic-load-balancing-v2)

## Installation

```bash
npm install --save @effect-aws/client-elastic-load-balancing-v2
```

## Usage

With default ElasticLoadBalancingV2Client instance:

```typescript
import { ElasticLoadBalancingV2 } from "@effect-aws/client-elastic-load-balancing-v2";

const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args));

const result = pipe(
  program,
  Effect.provide(ElasticLoadBalancingV2.defaultLayer),
  Effect.runPromise,
);
```

With custom ElasticLoadBalancingV2Client instance:

```typescript
import { ElasticLoadBalancingV2 } from "@effect-aws/client-elastic-load-balancing-v2";

const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args));

const result = await pipe(
  program,
  Effect.provide(
    ElasticLoadBalancingV2.baseLayer(() => new ElasticLoadBalancingV2Client({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom ElasticLoadBalancingV2Client configuration:

```typescript
import { ElasticLoadBalancingV2 } from "@effect-aws/client-elastic-load-balancing-v2";

const program = ElasticLoadBalancingV2.use((svc) => svc.describeLoadBalancers(args));

const result = await pipe(
  program,
  Effect.provide(ElasticLoadBalancingV2.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `ElasticLoadBalancingV2.baseLayer((default) => new ElasticLoadBalancingV2Client({ ...default, region: "eu-central-1" }))`
