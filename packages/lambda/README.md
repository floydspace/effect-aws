# @effect-aws/lambda

Clean way to write AWS Lambda Event Function handlers and Web Function servers using [Effect](https://www.effect.website/).

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Flambda?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/lambda)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Flambda)](https://www.npmjs.com/package/@effect-aws/lambda)

It provides a `LambdaHandler.make` function that takes an `EffectHandler` and returns a native promise Lambda handler function.

The implementation supports defining a global runtime layer with graceful shutdown. Finalizers defined by `acquireRelease` run when a shutdown signal is received, subject to Lambda's cleanup deadline. Graceful shutdown is not guaranteed in all failure modes.

## Installation

```bash
npm install --save @effect-aws/lambda
```

## Usage

### Lambda Web Functions

[Lambda Web Functions](https://docs.aws.amazon.com/lambda/latest/dg/web-functions.html) run a normal HTTP server. Use `LambdaWebFunction.layer` with Effect's `HttpRouter` or `HttpApi` to listen on the address supplied by Lambda:

```bash
npm install @effect-aws/lambda effect @effect/platform-node @effect/platform-node-shared
```

```typescript
import * as LambdaWebFunction from "@effect-aws/lambda/LambdaWebFunction"
import { NodeRuntime } from "@effect/platform-node"
import { Effect, Layer } from "effect"
import { HttpRouter, HttpServerResponse } from "effect/http"

const Routes = HttpRouter.use((router) =>
  router.add("GET", "/", Effect.succeed(HttpServerResponse.text("Hello from Lambda Web Functions!")))
)

HttpRouter.serve(Routes).pipe(
  Layer.provide(LambdaWebFunction.layer),
  Layer.launch,
  NodeRuntime.runMain
)
```

For a schema-first API, pass your `HttpApiBuilder.layer(...)` with its handler layers to `HttpRouter.serve` in place of `Routes`. The server supports normal HTTP response streaming and concurrent requests. Keep request-specific state in Effect's request context rather than shared mutable globals.

Web Function support is available through the `@effect-aws/lambda/LambdaWebFunction` subpath. It requires the optional `@effect/platform-node` peer dependency and a compatible Effect version (`@effect/platform-node@4.0.0` requires `effect@^4.0.0`). Existing Event Function users can continue importing from `@effect-aws/lambda` without installing `@effect/platform-node`.

`LambdaWebFunction.endpoint` reads and validates `AWS_LAMBDA_HTTP_ENDPOINT` using Effect's `ConfigProvider`. Missing or malformed values fail with `ConfigError`; there is no implicit listen-address fallback. Set it explicitly to run locally:

```bash
AWS_LAMBDA_HTTP_ENDPOINT=127.0.0.1:3000 node index.js
```

Compile or bundle your entry point to `index.js` at the root of your deployment package, including its runtime dependencies. For ESM output, include a `package.json` with `"type": "module"`. Web Functions use Node.js 24 on Arm64 at launch. Deploy the prepared directory with the Web Functions-enabled AWS CLI:

```bash
aws lambda-web deploy --name my-effect-app --code ./dist
```

Lambda supplies the listen address in production. The server must start listening within 10 seconds. `NodeRuntime.runMain` handles `SIGTERM` and closes the layer's scope; the helper limits HTTP request draining to 500 milliseconds to leave time for other finalizers within Lambda's one-second cleanup window. Cleanup remains best-effort.

Web Functions do not use exported Lambda event handlers, Function URL `RESPONSE_STREAM` configuration, or `LambdaHandler.context()`. Their management APIs belong to the separate `@aws-sdk/client-lambda-web` SDK package, which is not required to serve HTTP requests.

### Lambda Event Functions

`LambdaHandler.make`, `LambdaHandler.fromHttpApi`, and the streaming adapters below target Event Functions, including API Gateway integrations and Lambda Function URLs.

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
