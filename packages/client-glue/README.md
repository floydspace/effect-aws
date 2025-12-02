# @effect-aws/client-glue

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-glue?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-glue)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-glue)](https://www.npmjs.com/package/@effect-aws/client-glue)

## Installation

```bash
npm install --save @effect-aws/client-glue
```

## Usage

With default GlueClient instance:

```typescript
import { Glue } from "@effect-aws/client-glue";

const program = Glue.listJobs(args);

const result = pipe(
  program,
  Effect.provide(Glue.defaultLayer),
  Effect.runPromise,
);
```

With custom GlueClient instance:

```typescript
import { Glue } from "@effect-aws/client-glue";

const program = Glue.listJobs(args);

const result = await pipe(
  program,
  Effect.provide(
    Glue.baseLayer(() => new GlueClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom GlueClient configuration:

```typescript
import { Glue } from "@effect-aws/client-glue";

const program = Glue.listJobs(args);

const result = await pipe(
  program,
  Effect.provide(Glue.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `Glue.baseLayer((default) => new GlueClient({ ...default, region: "eu-central-1" }))`
