# @effect-aws/client-sns

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-sns?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-sns)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-sns)](https://www.npmjs.com/package/@effect-aws/client-sns)

## Installation

```bash
npm install --save @effect-aws/client-sns
```

## Usage

With default SNSClient instance:

```typescript
import { SNS } from "@effect-aws/client-sns";

const program = SNS.publish(args);

const result = pipe(
  program,
  Effect.provide(SNS.defaultLayer),
  Effect.runPromise,
);
```

With custom SNSClient instance:

```typescript
import { SNS } from "@effect-aws/client-sns";

const program = SNS.publish(args);

const result = await pipe(
  program,
  Effect.provide(
    SNS.baseLayer(() => new SNSClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom SNSClient configuration:

```typescript
import { SNS } from "@effect-aws/client-sns";

const program = SNS.publish(args);

const result = await pipe(
  program,
  Effect.provide(SNS.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `SNS.baseLayer((default) => new SNSClient({ ...default, region: "eu-central-1" }))`
