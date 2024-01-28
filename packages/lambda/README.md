# @effect-aws/lambda

Clean way to write AWS Lambda handlers using [Effect](https://www.effect.website/).

It provides a `makeLambda` function that takes an `EffectHandler` and returns a native promise Lambda handler function.

The implementation supports defining global runtime layer with graceful shutdown. So all finalizers defined by `acquireRelease` will be called on lambda downscaling.

## Installation

```bash
npm install --save @effect-aws/lambda
```

## Usage

Without dependencies:

```typescript
import type { SNSEvent } from "aws-lambda";
import { Effect } from "effect";
import { EffectHandler, makeLambda } from "@effect-aws/lambda";

// Define your effect handler
const myEffectHandler: EffectHandler<SNSEvent, never> = (event, context) => {
  // Your effect logic here
  return Effect.succeed("Hello, World!");
};

// Create the Lambda handler
export const handler = makeLambda(myEffectHandler);
```

With dependencies:

```typescript
import { EffectHandler, makeLambda } from "@effect-aws/lambda";
import * as Logger from "@effect-aws/powertools-logger";
import type { SNSEvent } from "aws-lambda";
import { Context, Effect, Layer } from "effect";

interface FooService {
  bar: () => Effect.Effect<never, never, void>;
}
const FooService = Context.Tag<FooService>();
const FooServiceLive = Layer.succeed(
  FooService,
  FooService.of({ bar: () => Logger.logInfo("Not implemented") }),
);

// Define your effect handler with dependencies
const myEffectHandler: EffectHandler<SNSEvent, FooService> = (event, context) =>
  Effect.gen(function* (_) {
    yield* _(Logger.logInfo("Received event", { event, context }));
    const service = yield* _(FooService);
    return yield* _(service.bar());
  });

// Create the global layer
const LambdaLive = Layer.provideMerge(
  FooServiceLive,
  Logger.DefaultPowerToolsLoggerLayer,
);

// Create the Lambda handler
export const handler = makeLambda(myEffectHandler, LambdaLive);
```
