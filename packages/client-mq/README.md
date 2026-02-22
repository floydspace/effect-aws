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
import { Mq } from "@effect-aws/client-mq";

const program = Mq.use((svc) => svc.listBrokers(args));

const result = pipe(
  program,
  Effect.provide(Mq.defaultLayer),
  Effect.runPromise,
);
```

With custom MqClient instance:

```typescript
import { Mq } from "@effect-aws/client-mq";

const program = Mq.use((svc) => svc.listBrokers(args));

const result = await pipe(
  program,
  Effect.provide(
    Mq.baseLayer(() => new MqClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom MqClient configuration:

```typescript
import { Mq } from "@effect-aws/client-mq";

const program = Mq.use((svc) => svc.listBrokers(args));

const result = await pipe(
  program,
  Effect.provide(Mq.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Mq.baseLayer((default) => new MqClient({ ...default, region: "eu-central-1" }))`
