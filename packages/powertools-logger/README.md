# @effect-aws/powertools-logger

## Installation

```bash
npm install --save @effect-aws/powertools-logger
```

## Usage

With default PowerTools Logger instance:

```typescript
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Logger from "@effect-aws/powertools-logger";

const program = pipe(
  Logger.logInfo("Info message with log meta", { foo: "bar" }),
  Effect.tap(() => Effect.logInfo("Native effect info message")),
);

const result = pipe(
  program,
  Effect.provideLayer(Logger.DefaultPowerToolsLoggerLayer),
  Effect.runPromise,
);
```

With custom PowerTools Logger options:

```typescript
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Logger from "@effect-aws/powertools-logger";

const program = pipe(
  Logger.logDebug("Debug message with log meta", { foo: "bar" }),
  Effect.tap(() => Effect.logDebug("Native effect debug message")),
);

const result = pipe(
  program,
  Effect.provideLayer(Logger.PowerToolsLoggerLayer),
  Effect.provideService(
    Logger.LoggerOptionsTag,
    new Logger.LoggerOptions({ logLevel: "DEBUG" }),
  ),
  Effect.runPromise,
);
```

With custom PowerTools Logger instance:

```typescript
import { Logger as LoggerCtor } from "@aws-lambda-powertools/logger";
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Logger from "@effect-aws/powertools-logger";

const program = pipe(
  Logger.logDebug("Debug message with log meta", { foo: "bar" }),
  Effect.tap(() => Effect.logDebug("Native effect debug message")),
);

const result = pipe(
  program,
  Effect.provideLayer(Logger.BasePowerToolsLoggerLayer),
  Effect.provideService(
    Logger.LoggerInstanceTag,
    new LoggerCtor({ logLevel: "DEBUG" }),
  ),
  Effect.runPromise,
);
```
