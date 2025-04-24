# @effect-aws/client-secrets-manager

## 1.10.0

### Minor Changes

- [#150](https://github.com/floydspace/effect-aws/pull/150) [`6215146`](https://github.com/floydspace/effect-aws/commit/62151460cb125298b24375a4c69dcf8d562148f8) Thanks [@floydspace](https://github.com/floydspace)! - add expected Cause.TimeoutException in error channel to all the methods

### Patch Changes

- Updated dependencies [[`6215146`](https://github.com/floydspace/effect-aws/commit/62151460cb125298b24375a4c69dcf8d562148f8)]:
  - @effect-aws/commons@0.3.0

## 1.9.5

### Patch Changes

- Updated dependencies [[`2bc82e9`](https://github.com/floydspace/effect-aws/commit/2bc82e9ae2e5b0ca423d0adce578b16ca4ea024a)]:
  - @effect-aws/commons@0.2.1

## 1.9.3

### Patch Changes

- [#117](https://github.com/floydspace/effect-aws/pull/117) [`6989a08`](https://github.com/floydspace/effect-aws/commit/6989a08df041108ad3a2b08272647a20f1a5d662) Thanks [@floydspace](https://github.com/floydspace)! - fix service logger, so it respect loglevel configuration within current scope

  For example this snipped produced following output Before/After

  ```typescript
  import { S3 } from "@effect-aws/client-s3";
  import { Effect, Logger, LogLevel } from "effect";

  S3.listBuckets({}).pipe(
    Logger.withMinimumLogLevel(LogLevel.Warning),
    Effect.tap(() => Effect.logInfo("Done")),
    Effect.provide(Logger.structured),
    Effect.provide(S3.layer({ logger: true })),
    Effect.runPromise,
  );
  ```

  Before

  ```log
  timestamp=2025-03-12T22:49:37.007Z level=INFO fiber=#5 message="{
    \"clientName\": \"S3Client\",
    \"commandName\": \"ListBucketsCommand\",
    \"input\": {},
    \"output\": {
      \"Buckets\": [],
      \"Owner\": {
        \"ID\": \"<REDACTED>\"
      }
    },
    \"metadata\": {
      \"httpStatusCode\": 200,
      \"requestId\": \"<REDACTED>\",
      \"extendedRequestId\": \"<REDACTED>\",
      \"attempts\": 1,
      \"totalRetryDelay\": 0
    }
  }"
  {
    message: 'Done',
    logLevel: 'INFO',
    timestamp: '2025-03-12T22:49:37.009Z',
    cause: undefined,
    annotations: {},
    spans: {},
    fiberId: '#0'
  }
  ```

  After

  ```log
  {
    message: 'Done',
    logLevel: 'INFO',
    timestamp: '2025-03-12T22:51:13.799Z',
    cause: undefined,
    annotations: {},
    spans: {},
    fiberId: '#0'
  }
  ```

  closes #92

- Updated dependencies [[`6989a08`](https://github.com/floydspace/effect-aws/commit/6989a08df041108ad3a2b08272647a20f1a5d662)]:
  - @effect-aws/commons@0.2.0

## 1.9.0

### Minor Changes

- [#106](https://github.com/floydspace/effect-aws/pull/106) [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f) Thanks [@floydspace](https://github.com/floydspace)! - ## Refactored service configuration and layer management

  Since this version the effectful logger is not added into native AWS client constructor. Providing logger by default causes risk of logging sensitive information. The logger should be added explicitly by the choice of a user. It can be done by using extended `logger` option:

  ```ts
  import { DynamoDB } from "@effect-aws/client-dynamodb";

  // using default logger
  DynamoDB.layer({ logger: true });

  // or using custom logger (the same as default)
  DynamoDB.layer({
    logger: {
      trace: Effect.logTrace,
      debug: Effect.logDebug,
      info: Effect.logInfo,
      warn: Effect.logWarning,
      error: Effect.logError,
    },
  });

  // and you could remap logger methods as you want
  DynamoDB.layer({
    logger: {
      debug: Effect.logDebug,
      info: Effect.logDebug,
      warn: Effect.logWarning,
      error: Effect.logError,
    },
  });
  ```

  Additionally to that, the whole service configuration was refactored in better way, now it is not a strict layer dependency, but the global value which defaults to empty object. The global value can be configured by using the effect higher order function or the layer setter.

  ```ts
  import { DynamoDBServiceConfig } from "@effect-aws/client-dynamodb";

  // using effect higher order function
  DynamoDBServiceConfig.withDynamoDBServiceConfig({ logger: true });

  // or using layer setter
  Layer.provide(
    DynamoDBServiceConfig.setDynamoDBServiceConfig({ logger: true }),
  );
  ```

  ### Breaking changes

  This release is not a breaking change if you just use service methods and service layer, which in most cases should be the case.

  If you had to use custom configuration, you should update your code to use new configuration methods.

### Patch Changes

- [#106](https://github.com/floydspace/effect-aws/pull/106) [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f) Thanks [@floydspace](https://github.com/floydspace)! - drop support for effect version lower than 3.0.4

- Updated dependencies [[`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f), [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f)]:
  - @effect-aws/commons@0.1.0

## 1.4.0

### Minor Changes

- [#93](https://github.com/floydspace/effect-aws/pull/93) [`a96fbd8`](https://github.com/floydspace/effect-aws/commit/a96fbd8840a7a6cfb795a2a6ab96aa32d32a3525) Thanks [@godu](https://github.com/godu)! - Destroy client after layer lifecycle to release idle connections.

## 1.3.0

### Minor Changes

- [#80](https://github.com/floydspace/effect-aws/pull/80) [`4b16fbe`](https://github.com/floydspace/effect-aws/commit/4b16fbebce8131df7798ee92f43cf6b7df3e907c) Thanks [@floydspace](https://github.com/floydspace)! - simplify layers configuration (closes #78)

## 1.2.1

### Patch Changes

- [#75](https://github.com/floydspace/effect-aws/pull/75) [`9dc170d`](https://github.com/floydspace/effect-aws/commit/9dc170d975c04888bbc7ca7b241b4b5265668fb5) Thanks [@godu](https://github.com/godu)! - export the HttpHandlerOptions type

## 1.2.0

### Minor Changes

- [`e540420`](https://github.com/floydspace/effect-aws/commit/e5404208c2438e1e1546637a8edbbdc1c9468850) Thanks [@floydspace](https://github.com/floydspace)! - integrate aws-sdk abort signal with effect interruption

## 1.1.0

### Minor Changes

- [#58](https://github.com/floydspace/effect-aws/pull/58) [`888dc8c`](https://github.com/floydspace/effect-aws/commit/888dc8ca0d7104e33a24426a1aacedb48e8fc3ac) Thanks [@floydspace](https://github.com/floydspace)! - use Effect.Tag instead of Context.GenericTag for service, handle only known errors

## 1.0.0

### Major Changes

- [`ef7b1ce`](https://github.com/floydspace/effect-aws/commit/ef7b1ce2f5eee8dd5e2cf509da18e162fad8b22a) Thanks [@floydspace](https://github.com/floydspace)! - implement effectful secrets manager client
