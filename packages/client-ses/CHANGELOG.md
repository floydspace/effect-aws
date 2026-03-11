# @effect-aws/client-ses

## 2.0.0-beta.3

### Minor Changes

- [`2c118a8`](https://github.com/floydspace/effect-aws/commit/2c118a8d086a4ab397933b43f71fb0801f69bf14) Thanks [@floydspace](https://github.com/floydspace)! - upgrade to latest effect v4

### Patch Changes

- Updated dependencies [[`2c118a8`](https://github.com/floydspace/effect-aws/commit/2c118a8d086a4ab397933b43f71fb0801f69bf14)]:
  - @effect-aws/commons@1.0.0-beta.3

## 2.0.0-beta.2

### Patch Changes

- [`0d321e6`](https://github.com/floydspace/effect-aws/commit/0d321e6926ba30e58221483e764d1103078d76d5) Thanks [@floydspace](https://github.com/floydspace)! - remove unique symbol from service shape, discriminator is applyed as service identifier

- Updated dependencies [[`0d321e6`](https://github.com/floydspace/effect-aws/commit/0d321e6926ba30e58221483e764d1103078d76d5)]:
  - @effect-aws/commons@1.0.0-beta.2

## 2.0.0-beta.1

### Patch Changes

- [`56d5efb`](https://github.com/floydspace/effect-aws/commit/56d5efb1dbf1d8b60720a95e1cc71013d1a390cd) Thanks [@floydspace](https://github.com/floydspace)! - use named imports instead of barrel

- Updated dependencies [[`56d5efb`](https://github.com/floydspace/effect-aws/commit/56d5efb1dbf1d8b60720a95e1cc71013d1a390cd)]:
  - @effect-aws/commons@1.0.0-beta.1

## 2.0.0-beta.0

### Major Changes

- [#198](https://github.com/floydspace/effect-aws/pull/198) [`57b06d0`](https://github.com/floydspace/effect-aws/commit/57b06d0474b35ae754e8e1b0a317e15669191779) Thanks [@floydspace](https://github.com/floydspace)! - Migrate to effect v4

### Patch Changes

- Updated dependencies [[`57b06d0`](https://github.com/floydspace/effect-aws/commit/57b06d0474b35ae754e8e1b0a317e15669191779)]:
  - @effect-aws/commons@1.0.0-beta.0

## 1.11.0

### Minor Changes

- [#203](https://github.com/floydspace/effect-aws/pull/203) [`853b777`](https://github.com/floydspace/effect-aws/commit/853b777f70fb131a4a8378eff41fbf2d08f4924a) Thanks [@floydspace](https://github.com/floydspace)! - add streaming pagination support to various AWS services

  closes [#145](https://github.com/floydspace/effect-aws/issues/145)

- [#201](https://github.com/floydspace/effect-aws/pull/201) [`9020433`](https://github.com/floydspace/effect-aws/commit/90204331a7bd175abe35267e0d4a6a7ecb634fb8) Thanks [@devmatteini](https://github.com/devmatteini)! - upgrade to named imports in all packages for better tree shaking

  closes [#196](https://github.com/floydspace/effect-aws/issues/196)

### Patch Changes

- Updated dependencies [[`853b777`](https://github.com/floydspace/effect-aws/commit/853b777f70fb131a4a8378eff41fbf2d08f4924a), [`9020433`](https://github.com/floydspace/effect-aws/commit/90204331a7bd175abe35267e0d4a6a7ecb634fb8)]:
  - @effect-aws/commons@0.4.0

## 1.10.9

### Patch Changes

- Updated dependencies [[`582a7b0`](https://github.com/floydspace/effect-aws/commit/582a7b031638287f27362b84b69f2d4be63425d3)]:
  - @effect-aws/commons@0.3.1

## 1.10.3

### Patch Changes

- [#165](https://github.com/floydspace/effect-aws/pull/165) [`192aad7`](https://github.com/floydspace/effect-aws/commit/192aad72a154951e5814f12cae90cc3d1b63621c) Thanks [@floydspace](https://github.com/floydspace)! - expose service shape type as alternative of inferring it with Context.Tag.Service

## 1.10.2

### Patch Changes

- [#162](https://github.com/floydspace/effect-aws/pull/162) [`bccec21`](https://github.com/floydspace/effect-aws/commit/bccec2132338db2c04444baf249c48efbb42e80e) Thanks [@floydspace](https://github.com/floydspace)! - Fix "cannot be named without a reference" error

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

## 1.1.0

### Minor Changes

- [`eba7346`](https://github.com/floydspace/effect-aws/commit/eba7346d497ef011e90726f56b6a8cb919879042) Thanks [@floydspace](https://github.com/floydspace)! - Destroy client after layer lifecycle to release idle connections.

## 1.0.0

### Major Changes

- [#95](https://github.com/floydspace/effect-aws/pull/95) [`89abbc8`](https://github.com/floydspace/effect-aws/commit/89abbc88feac19299345d67bcdf6098c9ee75979) Thanks [@successkrisz](https://github.com/successkrisz)! - implement ses client
