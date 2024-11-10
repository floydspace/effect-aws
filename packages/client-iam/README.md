# @effect-aws/client-iam

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-iam?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-iam)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-iam)](https://www.npmjs.com/package/@effect-aws/client-iam)

## Installation

```bash
npm install --save @effect-aws/client-iam
```

## Usage

With default IAMClient instance:

```typescript
import { IAM } from "@effect-aws/client-iam";

const program = IAM.createRole(args);

const result = pipe(
  program,
  Effect.provide(IAM.defaultLayer),
  Effect.runPromise,
);
```

With custom IAMClient instance:

```typescript
import { IAM } from "@effect-aws/client-iam";

const program = IAM.createRole(args);

const result = await pipe(
  program,
  Effect.provide(
    IAM.baseLayer(() => new IAMClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom IAMClient configuration:

```typescript
import { IAM } from "@effect-aws/client-iam";

const program = IAM.createRole(args);

const result = await pipe(
  program,
  Effect.provide(IAM.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `IAM.baseLayer((default) => new IAMClient({ ...default, region: "eu-central-1" }))`
