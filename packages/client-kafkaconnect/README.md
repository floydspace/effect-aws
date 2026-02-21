# @effect-aws/client-kafkaconnect

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-kafkaconnect?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-kafkaconnect)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-kafkaconnect)](https://www.npmjs.com/package/@effect-aws/client-kafkaconnect)

## Installation

```bash
npm install --save @effect-aws/client-kafkaconnect
```

## Usage

With default KafkaConnectClient instance:

```typescript
import { KafkaConnect } from "@effect-aws/client-kafkaconnect";

const program = KafkaConnect.use((svc) => svc.listConnectors(args));

const result = pipe(
  program,
  Effect.provide(KafkaConnect.defaultLayer),
  Effect.runPromise,
);
```

With custom KafkaConnectClient instance:

```typescript
import { KafkaConnect } from "@effect-aws/client-kafkaconnect";

const program = KafkaConnect.use((svc) => svc.listConnectors(args));

const result = await pipe(
  program,
  Effect.provide(
    KafkaConnect.baseLayer(() => new KafkaConnectClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom KafkaConnectClient configuration:

```typescript
import { KafkaConnect } from "@effect-aws/client-kafkaconnect";

const program = KafkaConnect.use((svc) => svc.listConnectors(args));

const result = await pipe(
  program,
  Effect.provide(KafkaConnect.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `KafkaConnect.baseLayer((default) => new KafkaConnectClient({ ...default, region: "eu-central-1" }))`
