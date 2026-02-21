# @effect-aws/client-ssm

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-ssm?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-ssm)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-ssm)](https://www.npmjs.com/package/@effect-aws/client-ssm)

## Installation

```bash
npm install --save @effect-aws/client-ssm
```

## Usage

With default SSMClient instance:

```typescript
import { SSM } from "@effect-aws/client-ssm";

const program = SSM.use((svc) => svc.describeParameters(args));

const result = pipe(
  program,
  Effect.provide(SSM.defaultLayer),
  Effect.runPromise,
);
```

With custom SSMClient instance:

```typescript
import { SSM } from "@effect-aws/client-ssm";

const program = SSM.use((svc) => svc.describeParameters(args));

const result = await pipe(
  program,
  Effect.provide(
    SSM.baseLayer(() => new SSMClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom SSMClient configuration:

```typescript
import { SSM } from "@effect-aws/client-ssm";

const program = SSM.use((svc) => svc.describeParameters(args));

const result = await pipe(
  program,
  Effect.provide(SSM.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `SSM.baseLayer((default) => new SSMClient({ ...default, region: "eu-central-1" }))`
