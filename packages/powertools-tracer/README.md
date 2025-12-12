# @effect-aws/powertools-tracer

AWS X-Ray Powertools SDK for [Effect](https://effect.website/).

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fpowertools-tracer?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/powertools-tracer)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fpowertools-tracer)](https://www.npmjs.com/package/@effect-aws/powertools-tracer)

This experimental library allows you to trace your Effect programs and send them to AWS X-Ray leveraging the [Powertools SDK](https://docs.powertools.aws.dev/lambda/typescript/latest/core/tracer/).

## Installation

```bash
npm install --save @effect-aws/powertools-tracer @aws-lambda-powertools/tracer
```

_Note_: `@aws-lambda-powertools/tracer` is a peer dependency.

## Usage

```typescript
import { Tracer } from "@effect-aws/powertools-tracer"

const program = Effect.gen(function* () {
  yield* Effect.log("Hello")
  yield* Effect.annotateCurrentSpan({ message: "Metadata" })
}).pipe(Effect.withSpan("MyTrace"))

program.pipe(Effect.provide(Tracer.layer()), Effect.runSync)
```

Check out the a more complete example in the [examples](./examples/example.ts).

## Lambda Handler Instrumentation

Use `captureLambdaHandler` to automatically instrument your Lambda function with X-Ray tracing. This helper provides:

- **Subsegment lifecycle management** - Creates a subsegment named `## ${_HANDLER}` and closes it automatically
- **Cold start annotation** - Annotates traces with cold start information
- **Service name annotation** - Annotates traces with the service name
- **Response capture** - Serializes function responses as metadata
- **Error capture** - Serializes errors as metadata

```typescript
import { LambdaHandler } from "@effect-aws/lambda";
import { Tracer } from "@effect-aws/powertools-tracer";
import type { APIGatewayProxyEventV2 } from "aws-lambda";
import { Effect } from "effect";

const myEffectHandler = (event: APIGatewayProxyEventV2) =>
  Effect.gen(function* () {
    yield* Effect.log("Processing request");
    return { statusCode: 200, body: JSON.stringify({ message: "Success" }) };
  });

export const handler = LambdaHandler.make({
  handler: Tracer.captureLambdaHandler()(myEffectHandler),
  layer: Tracer.layerWithXrayTracer({ serviceName: "my-service" }),
});
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `captureResponse` | `boolean` | `true` | Serialize function responses as metadata |

To disable response capture:

```typescript
export const handler = LambdaHandler.make({
  handler: Tracer.captureLambdaHandler({ captureResponse: false })(myEffectHandler),
  layer: Tracer.layerWithXrayTracer(),
});
```

## Available Layers

| Layer | Description |
|-------|-------------|
| `layer(options?)` | Sets Effect's tracer (most common) |
| `layerWithXrayTracer(options?)` | Provides `XrayTracer` service AND sets Effect's tracer |
| `layerTracer(options?)` | Only provides `XrayTracer` service |
| `layerWithoutXrayTracer` | Only sets Effect's tracer (requires `XrayTracer` from context) |

Use `layerWithXrayTracer` when you need to use `captureLambdaHandler`, as it requires the `XrayTracer` service.

## Prerequisites

To use X-Ray tracing with AWS Lambda:

1. **Enable Active Tracing** on your Lambda function (AWS Console / SAM / CDK)
2. **IAM permissions**: `xray:PutTraceSegments`, `xray:PutTelemetryRecords`
3. **Environment variables** (optional):
   - `POWERTOOLS_SERVICE_NAME` - Service name for traces
   - `POWERTOOLS_TRACER_CAPTURE_RESPONSE` - Enable/disable response capture
   - `POWERTOOLS_TRACER_CAPTURE_ERROR` - Enable/disable error capture
