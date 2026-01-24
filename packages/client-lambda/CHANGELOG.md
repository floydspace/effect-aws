# @effect-aws/client-lambda

## 1.10.9

### Patch Changes

- Updated dependencies [[`582a7b0`](https://github.com/floydspace/effect-aws/commit/582a7b031638287f27362b84b69f2d4be63425d3)]:
  - @effect-aws/commons@0.3.1

## 1.10.7

### Patch Changes

- [`aecc0af`](https://github.com/floydspace/effect-aws/commit/aecc0af4f05c734c9e42cc46b552382c32d86b39) Thanks [@floydspace](https://github.com/floydspace)! - regenerate with new aws-sdk

## 1.10.6

### Patch Changes

- [`f1b4ec8`](https://github.com/floydspace/effect-aws/commit/f1b4ec8fed35a1074a17451a8a39ab39e13863ac) Thanks [@floydspace](https://github.com/floydspace)! - update clients with new methods

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

## 1.7.0

### Minor Changes

- [#93](https://github.com/floydspace/effect-aws/pull/93) [`a96fbd8`](https://github.com/floydspace/effect-aws/commit/a96fbd8840a7a6cfb795a2a6ab96aa32d32a3525) Thanks [@godu](https://github.com/godu)! - Destroy client after layer lifecycle to release idle connections.

## 1.6.0

### Minor Changes

- [#80](https://github.com/floydspace/effect-aws/pull/80) [`4b16fbe`](https://github.com/floydspace/effect-aws/commit/4b16fbebce8131df7798ee92f43cf6b7df3e907c) Thanks [@floydspace](https://github.com/floydspace)! - simplify layers configuration (closes #78)

## 1.5.1

### Patch Changes

- [#75](https://github.com/floydspace/effect-aws/pull/75) [`9dc170d`](https://github.com/floydspace/effect-aws/commit/9dc170d975c04888bbc7ca7b241b4b5265668fb5) Thanks [@godu](https://github.com/godu)! - export the HttpHandlerOptions type

## 1.5.0

### Minor Changes

- [`e540420`](https://github.com/floydspace/effect-aws/commit/e5404208c2438e1e1546637a8edbbdc1c9468850) Thanks [@floydspace](https://github.com/floydspace)! - integrate aws-sdk abort signal with effect interruption

## 1.4.0

### Minor Changes

- [#58](https://github.com/floydspace/effect-aws/pull/58) [`888dc8c`](https://github.com/floydspace/effect-aws/commit/888dc8ca0d7104e33a24426a1aacedb48e8fc3ac) Thanks [@floydspace](https://github.com/floydspace)! - use Effect.Tag instead of Context.GenericTag for service, upgrade sdk, handle only known errors

## 1.3.0

### Minor Changes

- [`0cfcda0`](https://github.com/floydspace/effect-aws/commit/0cfcda0d5617916d966807f5d5120df9ba461c12) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v3

## 1.2.0

### Minor Changes

- [`4b5ee14`](https://github.com/floydspace/effect-aws/commit/4b5ee144d4d2f30e7a841a3cf5ccd7ff87d32132) Thanks [@floydspace](https://github.com/floydspace)! - return proper errors in failure channel in eventbridge and lambda services

## 1.1.1

### Patch Changes

- [`b2f00db`](https://github.com/floydspace/effect-aws/commit/b2f00db5fdffaa74bcb124324db7313bd4f218df) Thanks [@floydspace](https://github.com/floydspace)! - update effect peer version

## 1.1.0

### Minor Changes

- [`82eaea7`](https://github.com/floydspace/effect-aws/commit/82eaea778048c9ebba98682196448b0aa1586d2e) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v2.3 and fix breaking changes

## 1.0.2

### Patch Changes

- [`88676ae`](https://github.com/floydspace/effect-aws/commit/88676ae3a5f7fa514cab58ba83a50a0774be1aa1) Thanks [@floydspace](https://github.com/floydspace)! - use effect@~2.2 as maximum allowed peer version

## 1.0.1

### Patch Changes

- [#29](https://github.com/floydspace/effect-aws/pull/29) [`4b6c521`](https://github.com/floydspace/effect-aws/commit/4b6c521206c8ff76ff878938f6b90ee474cc8da2) Thanks [@godu](https://github.com/godu)! - improve tree shaking by using sideEffects flag

## 1.0.0

### Major Changes

- [`3e5d0b3`](https://github.com/floydspace/effect-aws/commit/3e5d0b3b3882e0aa6d07bc06432990551316ac30) Thanks [@floydspace](https://github.com/floydspace)! - Upgrade to effect v2 and release stable version

## 0.4.0

### Minor Changes

- [`744df3c`](https://github.com/floydspace/effect-aws/commit/744df3ca6406b3a35e3066d5fe11ca7082c4c454) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect dependency

## 0.3.0

### Minor Changes

- [`0a969d8`](https://github.com/floydspace/effect-aws/commit/0a969d8a74c3bf1b87ff6a1c8bf689af849797e1) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect peer version

## 0.2.2

### Patch Changes

- [`280d8bd`](https://github.com/floydspace/effect-aws/commit/280d8bd6686d6e7a2b73322a047e8eb22263b1e1) Thanks [@floydspace](https://github.com/floydspace)! - upgrade dependencies

## 0.2.1

### Patch Changes

- [`6b99904`](https://github.com/floydspace/effect-aws/commit/6b9990497bdb20f240d8261b6382db421e9a3ec2) Thanks [@floydspace](https://github.com/floydspace)! - as @mikearnaldi said: "we should really never do tacit passing"

## 0.2.0

### Minor Changes

- [#14](https://github.com/floydspace/effect-aws/pull/14) [`cddfb74`](https://github.com/floydspace/effect-aws/commit/cddfb74a00b10a13ccfe3749e90961119c4f0906) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect version to the next one

## 0.1.0

### Minor Changes

- [`243882e`](https://github.com/floydspace/effect-aws/commit/243882e1bf71fa2c019f52f9d974f8cf1c433912) Thanks [@floydspace](https://github.com/floydspace)! - implement effectful dynamodb, eventbridge and lambda clients
