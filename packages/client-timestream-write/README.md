# @effect-aws/client-timestream-write

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fclient-timestream-write?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/client-timestream-write)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fclient-timestream-write)](https://www.npmjs.com/package/@effect-aws/client-timestream-write)

## Installation

```bash
npm install --save @effect-aws/client-timestream-write
```

## Usage

With default TimestreamWriteClient instance:

```typescript
import { TimestreamWrite } from "@effect-aws/client-timestream-write";

const program = TimestreamWrite.use((svc) => svc.listTables(args));

const result = pipe(
  program,
  Effect.provide(TimestreamWrite.defaultLayer),
  Effect.runPromise,
);
```

With custom TimestreamWriteClient instance:

```typescript
import { TimestreamWrite } from "@effect-aws/client-timestream-write";

const program = TimestreamWrite.use((svc) => svc.listTables(args));

const result = await pipe(
  program,
  Effect.provide(
    TimestreamWrite.baseLayer(() => new TimestreamWriteClient({ region: "eu-central-1" })),
  ),
  Effect.runPromise,
);
```

With custom TimestreamWriteClient configuration:

```typescript
import { TimestreamWrite } from "@effect-aws/client-timestream-write";

const program = TimestreamWrite.use((svc) => svc.listTables(args));

const result = await pipe(
  program,
  Effect.provide(TimestreamWrite.layer({ region: "eu-central-1" })),
  Effect.runPromiseExit,
);
```

or use `TimestreamWrite.baseLayer((default) => new TimestreamWriteClient({ ...default, region: "eu-central-1" }))`
