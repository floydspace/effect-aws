# @effect-aws/client-sts

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-sts?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-sts)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-sts)](https://www.npmjs.com/package/@effect-aws/client-sts)

## Installation

```bash
npm install --save @effect-aws/client-sts
```

## Usage

With default STSClient instance:

```typescript
import { STS } from "@effect-aws/client-sts";

const program = STS.getCallerIdentity(args);

const result = pipe(
  program,
  Effect.provide(STS.defaultLayer),
  Effect.runPromise,
);
```

With custom STSClient instance:

```typescript
import { STS } from "@effect-aws/client-sts";

const program = STS.getCallerIdentity(args);

const result = await pipe(
  program,
  Effect.provide(
    STS.baseLayer(() => new STSClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom STSClient configuration:

```typescript
import { STS } from "@effect-aws/client-sts";

const program = STS.getCallerIdentity(args);

const result = await pipe(
  program,
  Effect.provide(STS.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `STS.baseLayer((default) => new STSClient({ ...default, region: "eu-central-1" }))`
