# @effect-aws/client-firehose

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-firehose?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-firehose)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-firehose)](https://www.npmjs.com/package/@effect-aws/client-firehose)

## Installation

```bash
npm install --save @effect-aws/client-firehose
```

## Usage

With default FirehoseClient instance:

```typescript
import { Firehose } from "@effect-aws/client-firehose";

const program = Firehose.putRecord(args);

const result = pipe(
  program,
  Effect.provide(Firehose.defaultLayer),
  Effect.runPromise,
);
```

With custom FirehoseClient instance:

```typescript
import { Firehose } from "@effect-aws/client-firehose";

const program = Firehose.putRecord(args);

const result = await pipe(
  program,
  Effect.provide(
    Firehose.baseLayer(() => new FirehoseClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom FirehoseClient configuration:

```typescript
import { Firehose } from "@effect-aws/client-firehose";

const program = Firehose.putRecord(args);

const result = await pipe(
  program,
  Effect.provide(Firehose.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Firehose.baseLayer((default) => new FirehoseClient({ ...default, region: "eu-central-1" }))`
