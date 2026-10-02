# @effect-aws/client-lambda

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-lambda?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-lambda)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-lambda)](https://www.npmjs.com/package/@effect-aws/client-lambda)

## Installation

```bash
npm install --save @effect-aws/client-lambda
```

## Usage

With default LambdaClient instance:

```typescript
import { Lambda } from "@effect-aws/client-lambda";

const program = Lambda.use((svc) => svc.invoke(args));

const result = pipe(
  program,
  Effect.provide(Lambda.defaultLayer),
  Effect.runPromise,
);
```

With custom LambdaClient instance:

```typescript
import { Lambda } from "@effect-aws/client-lambda";

const program = Lambda.use((svc) => svc.invoke(args));

const result = await pipe(
  program,
  Effect.provide(
    Lambda.baseLayer(() => new LambdaClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom LambdaClient configuration:

```typescript
import { Lambda } from "@effect-aws/client-lambda";

const program = Lambda.use((svc) => svc.invoke(args));

const result = await pipe(
  program,
  Effect.provide(Lambda.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Lambda.baseLayer((default) => new LambdaClient({ ...default, region: "eu-central-1" }))`
