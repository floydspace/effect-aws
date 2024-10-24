# @effect-aws/client-kinesis

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-kinesis?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-kinesis)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-kinesis)](https://www.npmjs.com/package/@effect-aws/client-kinesis)

## Installation

```bash
npm install --save @effect-aws/client-kinesis
```

## Usage

With default KinesisClient instance:

```typescript
import { KinesisService, DefaultKinesisServiceLayer } from "@effect-aws/client-kinesis";

const program = KinesisService.putRecord(args);

const result = pipe(
  program,
  Effect.provide(DefaultKinesisServiceLayer),
  Effect.runPromise,
);
```

With custom KinesisClient instance:

```typescript
import {
  KinesisService,
  BaseKinesisServiceLayer,
  KinesisClientInstance,
} from "@effect-aws/client-kinesis";

const program = KinesisService.putRecord(args);

const KinesisClientInstanceLayer = Layer.succeed(
  KinesisClientInstance,
  new KinesisClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseKinesisServiceLayer),
  Effect.provide(KinesisClientInstanceLayer),
  Effect.runPromise,
);
```

With custom KinesisClient configuration:

```typescript
import {
  KinesisService,
  BaseKinesisServiceLayer,
  DefaultKinesisClientConfigLayer,
  KinesisClientInstance,
  KinesisClientInstanceConfig,
} from "@effect-aws/client-kinesis";

const program = KinesisService.putRecord(args);

const KinesisClientInstanceLayer = Layer.provide(
  Layer.effect(
    KinesisClientInstance,
    KinesisClientInstanceConfig.pipe(
      Effect.map(
        (config) => new KinesisClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultKinesisClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseKinesisServiceLayer),
  Effect.provide(KinesisClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultKinesisClientConfigLayer` layer context and update the configuration...
