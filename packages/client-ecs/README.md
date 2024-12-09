# @effect-aws/client-ecs

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-ecs?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-ecs)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-ecs)](https://www.npmjs.com/package/@effect-aws/client-ecs)

## Installation

```bash
npm install --save @effect-aws/client-ecs
```

## Usage

With default ECSClient instance:

```typescript
import { ECS } from "@effect-aws/client-ecs";

const program = ECS.listClusters(args);

const result = pipe(
  program,
  Effect.provide(ECS.defaultLayer),
  Effect.runPromise,
);
```

With custom ECSClient instance:

```typescript
import { ECS } from "@effect-aws/client-ecs";

const program = ECS.listClusters(args);

const result = await pipe(
  program,
  Effect.provide(
    ECS.baseLayer(() => new ECSClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom ECSClient configuration:

```typescript
import { ECS } from "@effect-aws/client-ecs";

const program = ECS.listClusters(args);

const result = await pipe(
  program,
  Effect.provide(ECS.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `ECS.baseLayer((default) => new ECSClient({ ...default, region: "eu-central-1" }))`
