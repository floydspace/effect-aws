# @effect-aws/client-dsql

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-dsql?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-dsql)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-dsql)](https://www.npmjs.com/package/@effect-aws/client-dsql)

## Installation

```bash
npm install --save @effect-aws/client-dsql
```

## Usage

With default DSQLClient instance:

```typescript
import { DSQL } from "@effect-aws/client-dsql";

const program = DSQL.listClustersCommand(args);

const result = pipe(
  program,
  Effect.provide(DSQL.defaultLayer),
  Effect.runPromise,
);
```

With custom DSQLClient instance:

```typescript
import { DSQL } from "@effect-aws/client-dsql";

const program = DSQL.listClustersCommand(args);

const result = await pipe(
  program,
  Effect.provide(
    DSQL.baseLayer(() => new DSQLClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom DSQLClient configuration:

```typescript
import { DSQL } from "@effect-aws/client-dsql";

const program = DSQL.listClustersCommand(args);

const result = await pipe(
  program,
  Effect.provide(DSQL.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `DSQL.baseLayer((default) => new DSQLClient({ ...default, region: "eu-central-1" }))`
