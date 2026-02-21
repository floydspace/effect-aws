# @effect-aws/client-timestream-query

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-timestream-query?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-timestream-query)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-timestream-query)](https://www.npmjs.com/package/@effect-aws/client-timestream-query)

## Installation

```bash
npm install --save @effect-aws/client-timestream-query
```

## Usage

With default TimestreamQueryClient instance:

```typescript
import { TimestreamQuery } from "@effect-aws/client-timestream-query";

const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args));

const result = pipe(
  program,
  Effect.provide(TimestreamQuery.defaultLayer),
  Effect.runPromise,
);
```

With custom TimestreamQueryClient instance:

```typescript
import { TimestreamQuery } from "@effect-aws/client-timestream-query";

const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args));

const result = await pipe(
  program,
  Effect.provide(
    TimestreamQuery.baseLayer(() => new TimestreamQueryClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom TimestreamQueryClient configuration:

```typescript
import { TimestreamQuery } from "@effect-aws/client-timestream-query";

const program = TimestreamQuery.use((svc) => svc.listScheduledQueries(args));

const result = await pipe(
  program,
  Effect.provide(TimestreamQuery.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `TimestreamQuery.baseLayer((default) => new TimestreamQueryClient({ ...default, region: "eu-central-1" }))`
