# @effect-aws/client-bedrock-runtime

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

- [#150](https://github.com/floydspace/effect-aws/pull/150) [`6215146`](https://github.com/floydspace/effect-aws/commit/62151460cb125298b24375a4c69dcf8d562148f8) Thanks [@floydspace](https://github.com/floydspace)! - add new invokeModelWithBidirectionalStream service method

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

## 1.9.2

### Patch Changes

- [#112](https://github.com/floydspace/effect-aws/pull/112) [`9f93de1`](https://github.com/floydspace/effect-aws/commit/9f93de1761ddfdd96acc0d93aebefa983df3079a) Thanks [@successkrisz](https://github.com/successkrisz)! - add client-bedrock-runtime
