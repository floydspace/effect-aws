# @effect-aws/client-scheduler

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-scheduler?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-scheduler)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-scheduler)](https://www.npmjs.com/package/@effect-aws/client-scheduler)

## Installation

```bash
npm install --save @effect-aws/client-scheduler
```

## Usage

With default SchedulerClient instance:

```typescript
import { SchedulerService, DefaultSchedulerServiceLayer } from "@effect-aws/client-scheduler";

const program = SchedulerService.tagResource(args);

const result = pipe(
  program,
  Effect.provide(DefaultSchedulerServiceLayer),
  Effect.runPromise,
);
```

With custom SchedulerClient instance:

```typescript
import {
  SchedulerService,
  BaseSchedulerServiceLayer,
  SchedulerClientInstance,
} from "@effect-aws/client-scheduler";

const program = SchedulerService.tagResource(args);

const SchedulerClientInstanceLayer = Layer.succeed(
  SchedulerClientInstance,
  new SchedulerClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseSchedulerServiceLayer),
  Effect.provide(SchedulerClientInstanceLayer),
  Effect.runPromise,
);
```

With custom SchedulerClient configuration:

```typescript
import {
  SchedulerService,
  BaseSchedulerServiceLayer,
  DefaultSchedulerClientConfigLayer,
  SchedulerClientInstance,
  SchedulerClientInstanceConfig,
} from "@effect-aws/client-scheduler";

const program = SchedulerService.tagResource(args);

const SchedulerClientInstanceLayer = Layer.provide(
  Layer.effect(
    SchedulerClientInstance,
    SchedulerClientInstanceConfig.pipe(
      Effect.map(
        (config) => new SchedulerClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultSchedulerClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseSchedulerServiceLayer),
  Effect.provide(SchedulerClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultSchedulerClientConfigLayer` layer context and update the configuration...
