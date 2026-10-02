# @effect-aws/client-sfn

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-sfn?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-sfn)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-sfn)](https://www.npmjs.com/package/@effect-aws/client-sfn)

## Installation

```bash
npm install --save @effect-aws/client-sfn
```

## Usage

With default SFNClient instance:

```typescript
import { SFN } from "@effect-aws/client-sfn";

const program = SFN.use((svc) => svc.startExecution(args));

const result = pipe(
  program,
  Effect.provide(SFN.defaultLayer),
  Effect.runPromise,
);
```

With custom SFNClient instance:

```typescript
import { SFN } from "@effect-aws/client-sfn";

const program = SFN.use((svc) => svc.startExecution(args));

const result = await pipe(
  program,
  Effect.provide(
    SFN.baseLayer(() => new SFNClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom SFNClient configuration:

```typescript
import { SFN } from "@effect-aws/client-sfn";

const program = SFN.use((svc) => svc.startExecution(args));

const result = await pipe(
  program,
  Effect.provide(SFN.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `SFN.baseLayer((default) => new SFNClient({ ...default, region: "eu-central-1" }))`
