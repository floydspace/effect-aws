# @effect-aws/http-handler

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fhttp-handler?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/http-handler)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fhttp-handler)](https://www.npmjs.com/package/@effect-aws/http-handler)

This package provides the effectful `HttpHandler` implementation for the AWS SDK v3, allowing developers to control HttpClient request handler usage in effect platform way for better tracing and error handling.

## Installation

```bash
npm install --save @effect-aws/http-handler
```

## Usage

```typescript
import { S3 } from "@effect-aws/client-s3"
import { HttpHandler } from "@effect-aws/http-handler"
import { FetchHttpClient } from "@effect/platform"

const program = S3.headObject(args)

const result = pipe(
  program,
  Effect.provide(S3.defaultLayer),
  Effect.provide(HttpHandler.layer({ requestTimeout: 1000 })),
  Effect.provide(FetchHttpClient.layer),
  Effect.runPromise
)
```
