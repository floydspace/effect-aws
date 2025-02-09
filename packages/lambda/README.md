# @effect-aws/lambda

Clean way to write AWS Lambda handlers using [Effect](https://www.effect.website/).

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Flambda?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/lambda)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Flambda)](https://www.npmjs.com/package/@effect-aws/lambda)

It provides a `makeLambda` function that takes an `EffectHandler` and returns a native promise Lambda handler function.

The implementation supports defining global runtime layer with graceful shutdown. So all finalizers defined by `acquireRelease` will be called on lambda downscaling.

## Installation

```bash
npm install --save @effect-aws/lambda
```

## Usage

Without dependencies:

```typescript
import type { SNSEvent } from "aws-lambda"
import { Effect } from "effect"
import { EffectHandler, makeLambda } from "@effect-aws/lambda"

// Define your effect handler
const myEffectHandler: EffectHandler<SNSEvent, never> = (event, context) => {
  // Your effect logic here
  return Effect.succeed("Hello, World!")
}

// Create the Lambda handler
export const handler = makeLambda(myEffectHandler)
```

With dependencies:

```typescript
import { EffectHandler, makeLambda } from "@effect-aws/lambda"
import * as Logger from "@effect-aws/powertools-logger"
import type { SNSEvent } from "aws-lambda"
import { Context, Effect, Layer } from "effect"

interface FooService {
  bar: () => Effect.Effect<never, never, void>
}
const FooService = Context.Tag<FooService>()
const FooServiceLive = Layer.succeed(
  FooService,
  FooService.of({ bar: () => Logger.logInfo("Not implemented") })
)

// Define your effect handler with dependencies
const myEffectHandler: EffectHandler<SNSEvent, FooService> = (event, context) =>
  Effect.gen(function* () {
    yield* Logger.logInfo("Received event", { event, context })
    const service = yield* FooService
    return yield* service.bar()
  })

// Create the global layer
const LambdaLive = Layer.provideMerge(
  FooServiceLive,
  Logger.DefaultPowerToolsLoggerLayer
)

// Create the Lambda handler
export const handler = makeLambda(myEffectHandler, LambdaLive)
```
