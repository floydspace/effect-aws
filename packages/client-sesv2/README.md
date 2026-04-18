# @effect-aws/client-sesv2

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-sesv2?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-sesv2)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-sesv2)](https://www.npmjs.com/package/@effect-aws/client-sesv2)

## Installation

```bash
npm install --save @effect-aws/client-sesv2
```

## Usage

With default SESv2Client instance:

```typescript
import { SESv2 } from "@effect-aws/client-sesv2";

const program = SESv2.sendEmail(args);

const result = pipe(
  program,
  Effect.provide(SESv2.defaultLayer),
  Effect.runPromise,
);
```

With custom SESv2Client instance:

```typescript
import { SESv2 } from "@effect-aws/client-sesv2";

const program = SESv2.sendEmail(args);

const result = await pipe(
  program,
  Effect.provide(
    SESv2.baseLayer(() => new SESv2Client({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom SESv2Client configuration:

```typescript
import { SESv2 } from "@effect-aws/client-sesv2";

const program = SESv2.sendEmail(args);

const result = await pipe(
  program,
  Effect.provide(SESv2.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `SESv2.baseLayer((default) => new SESv2Client({ ...default, region: "eu-central-1" }))`
