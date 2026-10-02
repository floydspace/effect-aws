# @effect-aws/lambda

Clean way to write AWS Lambda handlers using [Effect](https://www.effect.website/).

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Flambda?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/lambda)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Flambda)](https://www.npmjs.com/package/@effect-aws/lambda)

It provides a `LambdaHandler.make` function that takes an `EffectHandler` and returns a native promise Lambda handler function.

The implementation supports defining global runtime layer with graceful shutdown. So all finalizers defined by `acquireRelease` will be called on lambda downscaling.

## Installation

```bash
npm install --save @effect-aws/lambda
```

## Usage

Without dependencies:

```typescript
import { Effect } from "effect"
import { EffectHandler, LambdaHandler, SNSEvent } from "@effect-aws/lambda"

// Define your effect handler
const myEffectHandler: EffectHandler<SNSEvent, never> = (event, context) => {
  // Your effect logic here
  return Effect.succeed("Hello, World!")
}

// Create the Lambda handler
export const handler = LambdaHandler.make(myEffectHandler)
```

With dependencies:

```typescript
import { EffectHandler, LambdaHandler, SNSEvent } from "@effect-aws/lambda"
import * as Logger from "@effect-aws/powertools-logger"
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
export const handler = LambdaHandler.make({
  handler: myEffectHandler,
  layer: LambdaLive
})
```

Streaming:

```ts
import { S3 } from "@effect-aws/client-s3"
import { Handler, LambdaHandler } from "@effect-aws/lambda"
import { NodeStream } from "@effect/platform-node"
import { Cause, Effect, Stream } from "effect"
import { Readable } from "node:stream"
import { createGzip } from "node:zlib"

/**
 * Streaming handler that reads a file from S3, compresses it using gzip, and
 * returns the compressed data as a stream.
 */
const streamHandler = () => {
  const stream = S3.getObject({
    Bucket: "example-bucket",
    Key: "file.txt"
  }).pipe(
    Effect.map((result) =>
      NodeStream.fromReadable(
        () => result.Body as Readable,
        (e) => new Cause.UnknownException(e)
      )
    ),
    Stream.unwrap
  )

  return stream.pipe(
    Stream.pipeThroughChannelOrFail(
      NodeStream.fromDuplex(
        () => createGzip(),
        (e) => new Cause.UnknownException(e)
      )
    )
  )
}

export const handler: Handler = LambdaHandler.stream({
  handler: streamHandler,
  layer: S3.defaultLayer
})
```

HttpApi streaming with Lambda Function URLs:

```ts
import { LambdaHandler } from "@effect-aws/lambda"
import {
  HttpApi,
  HttpApiBuilder,
  HttpApiEndpoint,
  HttpApiGroup,
  HttpApiSchema,
  HttpServer,
  HttpServerResponse
} from "@effect/platform"
import { Effect, Layer, Stream } from "effect"

const encoder = new TextEncoder()

const streamEndpoint = HttpApiEndpoint.get("stream")`/stream`.addSuccess(
  HttpApiSchema.Text()
)
const pingEndpoint = HttpApiEndpoint.get("ping")`/ping`.addSuccess(
  HttpApiSchema.Text()
)

const group = HttpApiGroup.make("api").add(streamEndpoint).add(pingEndpoint)
const api = HttpApi.make("Api").add(group)

const routes = HttpApiBuilder.group(api, "api", (handlers) =>
  handlers
    .handle("ping", () => Effect.succeed("pong\n"))
    .handleRaw("stream", () =>
      Effect.succeed(
        HttpServerResponse.stream(
          Stream.fromIterable(["chunk 1\n", "chunk 2\n", "done\n"]).pipe(
            Stream.map((chunk) => encoder.encode(chunk))
          ),
          { contentType: "text/plain; charset=utf-8" }
        )
      )
    )
)

const apiLive = HttpApiBuilder.api(api).pipe(Layer.provide(routes))

export const handler = LambdaHandler.streamFromHttpApi(
  Layer.mergeAll(apiLive, HttpServer.layerContext)
)
```

Use `handle` for normal schema responses and `handleRaw` for streaming `HttpServerResponse` values. The Lambda must be invoked through a Lambda Function URL with response streaming enabled, for example `InvokeMode: RESPONSE_STREAM`. API Gateway HTTP API integrations do not support Lambda response streaming.
