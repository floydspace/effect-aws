# @effect-aws/client-athena

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-athena?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-athena)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-athena)](https://www.npmjs.com/package/@effect-aws/client-athena)

## Installation

```bash
npm install --save @effect-aws/client-athena
```

## Usage

With default AthenaClient instance:

```typescript
import { Athena } from "@effect-aws/client-athena";

const program = Athena.startQueryExecution(args);

const result = pipe(
  program,
  Effect.provide(Athena.defaultLayer),
  Effect.runPromise,
);
```

With custom AthenaClient instance:

```typescript
import { Athena } from "@effect-aws/client-athena";

const program = Athena.startQueryExecution(args);

const result = await pipe(
  program,
  Effect.provide(
    Athena.baseLayer(() => new AthenaClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom AthenaClient configuration:

```typescript
import { Athena } from "@effect-aws/client-athena";

const program = Athena.startQueryExecution(args);

const result = await pipe(
  program,
  Effect.provide(Athena.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Athena.baseLayer((default) => new AthenaClient({ ...default, region: "eu-central-1" }))`
