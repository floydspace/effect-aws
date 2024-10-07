# @effect-aws/powertools-logger

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fpowertools-logger?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/powertools-logger)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fpowertools-logger)](https://www.npmjs.com/package/@effect-aws/powertools-logger)

## Installation

```bash
npm install --save @effect-aws/powertools-logger @aws-lambda-powertools/logger
```

_Note_: `@aws-lambda-powertools/logger` is a peer dependency and package supports v1.9.0 and higher.

## Usage

With default PowerTools Logger instance:

```typescript
import { pipe } from "effect/Function";
import * as Effect from "effect/Effect";
import * as Logger from "@effect-aws/powertools-logger";

const program = pipe(
  Logger.logInfo("Info message with log meta", { foo: "bar" }),
  Effect.tap(() => Effect.logInfo("Native effect info message")),
);

const result = pipe(
  program,
  Effect.provide(Logger.DefaultPowerToolsLoggerLayer),
  Effect.runPromise,
);
```

With custom PowerTools Logger options:

```typescript
import { pipe } from "effect/Function";
import * as Effect from "effect/Effect";
import * as Logger from "@effect-aws/powertools-logger";

const program = pipe(
  Logger.logDebug("Debug message with log meta", { foo: "bar" }),
  Effect.tap(() => Effect.logDebug("Native effect debug message")),
);

const result = pipe(
  program,
  Effect.provide(Logger.PowerToolsLoggerLayer),
  Effect.provideService(Logger.LoggerOptions, { logLevel: "DEBUG" }),
  Effect.runPromise,
);
```

With custom PowerTools Logger instance:

```typescript
import { Logger as LoggerCtor } from "@aws-lambda-powertools/logger";
import { pipe } from "effect/Function";
import * as Effect from "effect/Effect";
import * as Logger from "@effect-aws/powertools-logger";

const program = pipe(
  Logger.logDebug("Debug message with log meta", { foo: "bar" }),
  Effect.tap(() => Effect.logDebug("Native effect debug message")),
);

const result = pipe(
  program,
  Effect.provide(Logger.BasePowerToolsLoggerLayer),
  Effect.provideService(
    Logger.LoggerInstance,
    new LoggerCtor({ logLevel: "DEBUG" }),
  ),
  Effect.runPromise,
);
```
