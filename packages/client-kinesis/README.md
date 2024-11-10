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
import { Kinesis } from "@effect-aws/client-kinesis";

const program = Kinesis.putRecord(args);

const result = pipe(
  program,
  Effect.provide(Kinesis.defaultLayer),
  Effect.runPromise,
);
```

With custom KinesisClient instance:

```typescript
import { Kinesis } from "@effect-aws/client-kinesis";

const program = Kinesis.putRecord(args);

const result = await pipe(
  program,
  Effect.provide(
    Kinesis.baseLayer(() => new KinesisClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom KinesisClient configuration:

```typescript
import { Kinesis } from "@effect-aws/client-kinesis";

const program = Kinesis.putRecord(args);

const result = await pipe(
  program,
  Effect.provide(Kinesis.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Kinesis.baseLayer((default) => new KinesisClient({ ...default, region: "eu-central-1" }))`
