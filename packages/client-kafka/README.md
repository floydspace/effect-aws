# @effect-aws/client-kafka

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-kafka?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-kafka)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-kafka)](https://www.npmjs.com/package/@effect-aws/client-kafka)

## Installation

```bash
npm install --save @effect-aws/client-kafka
```

## Usage

With default KafkaClient instance:

```typescript
import { Kafka } from "@effect-aws/client-kafka";

const program = Kafka.use((svc) => svc.listClusters(args));

const result = pipe(
  program,
  Effect.provide(Kafka.defaultLayer),
  Effect.runPromise,
);
```

With custom KafkaClient instance:

```typescript
import { Kafka } from "@effect-aws/client-kafka";

const program = Kafka.use((svc) => svc.listClusters(args));

const result = await pipe(
  program,
  Effect.provide(
    Kafka.baseLayer(() => new KafkaClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom KafkaClient configuration:

```typescript
import { Kafka } from "@effect-aws/client-kafka";

const program = Kafka.use((svc) => svc.listClusters(args));

const result = await pipe(
  program,
  Effect.provide(Kafka.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Kafka.baseLayer((default) => new KafkaClient({ ...default, region: "eu-central-1" }))`
