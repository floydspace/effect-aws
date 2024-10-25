# @effect-aws/client-mq

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-mq?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-mq)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-mq)](https://www.npmjs.com/package/@effect-aws/client-mq)

## Installation

```bash
npm install --save @effect-aws/client-mq
```

## Usage

With default MqClient instance:

```typescript
import { MqService, DefaultMqServiceLayer } from "@effect-aws/client-mq";

const program = MqService.listBrokers(args);

const result = pipe(
  program,
  Effect.provide(DefaultMqServiceLayer),
  Effect.runPromise,
);
```

With custom MqClient instance:

```typescript
import {
  MqService,
  BaseMqServiceLayer,
  MqClientInstance,
} from "@effect-aws/client-mq";

const program = MqService.listBrokers(args);

const MqClientInstanceLayer = Layer.succeed(
  MqClientInstance,
  new MqClient({ region: "eu-central-1" }),
);

const result = await pipe(
  program,
  Effect.provide(BaseMqServiceLayer),
  Effect.provide(MqClientInstanceLayer),
  Effect.runPromise,
);
```

With custom MqClient configuration:

```typescript
import {
  MqService,
  BaseMqServiceLayer,
  DefaultMqClientConfigLayer,
  MqClientInstance,
  MqClientInstanceConfig,
} from "@effect-aws/client-mq";

const program = MqService.listBrokers(args);

const MqClientInstanceLayer = Layer.provide(
  Layer.effect(
    MqClientInstance,
    MqClientInstanceConfig.pipe(
      Effect.map(
        (config) => new MqClient({ ...config, region: "eu-central-1" }),
      ),
    ),
  ),
  DefaultMqClientConfigLayer,
);

const result = await pipe(
  program,
  Effect.provide(BaseMqServiceLayer),
  Effect.provide(MqClientInstanceLayer),
  Effect.runPromiseExit,
);
```

or map over `DefaultMqClientConfigLayer` layer context and update the configuration...
