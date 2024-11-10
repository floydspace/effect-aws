# @effect-aws/client-sqs

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-sqs?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-sqs)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-sqs)](https://www.npmjs.com/package/@effect-aws/client-sqs)

## Installation

```bash
npm install --save @effect-aws/client-sqs
```

## Usage

With default SQSClient instance:

```typescript
import { SQS } from "@effect-aws/client-sqs";

const program = SQS.sendMessage(args);

const result = pipe(
  program,
  Effect.provide(SQS.defaultLayer),
  Effect.runPromise,
);
```

With custom SQSClient instance:

```typescript
import { SQS } from "@effect-aws/client-sqs";

const program = SQS.sendMessage(args);

const result = await pipe(
  program,
  Effect.provide(
    SQS.baseLayer(() => new SQSClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom SQSClient configuration:

```typescript
import { SQS } from "@effect-aws/client-sqs";

const program = SQS.sendMessage(args);

const result = await pipe(
  program,
  Effect.provide(SQS.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `SQS.baseLayer((default) => new SQSClient({ ...default, region: "eu-central-1" }))`
