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
