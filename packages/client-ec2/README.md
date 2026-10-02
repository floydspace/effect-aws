# @effect-aws/client-ec2

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-ec2?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-ec2)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-ec2)](https://www.npmjs.com/package/@effect-aws/client-ec2)

## Installation

```bash
npm install --save @effect-aws/client-ec2
```

## Usage

With default EC2Client instance:

```typescript
import { EC2 } from "@effect-aws/client-ec2";

const program = EC2.use((svc) => svc.acceptAddressTransfer(args));

const result = pipe(
  program,
  Effect.provide(EC2.defaultLayer),
  Effect.runPromise,
);
```

With custom EC2Client instance:

```typescript
import { EC2 } from "@effect-aws/client-ec2";

const program = EC2.use((svc) => svc.acceptAddressTransfer(args));

const result = await pipe(
  program,
  Effect.provide(
    EC2.baseLayer(() => new EC2Client({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom EC2Client configuration:

```typescript
import { EC2 } from "@effect-aws/client-ec2";

const program = EC2.use((svc) => svc.acceptAddressTransfer(args));

const result = await pipe(
  program,
  Effect.provide(EC2.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `EC2.baseLayer((default) => new EC2Client({ ...default, region: "eu-central-1" }))`
