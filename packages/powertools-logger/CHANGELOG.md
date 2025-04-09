# @effect-aws/powertools-logger

## 1.5.1

### Patch Changes

- [`c151291`](https://github.com/floydspace/effect-aws/commit/c151291b961b96d4e22c80598cbf97fbf702ca0c) Thanks [@floydspace](https://github.com/floydspace)! - avoid failing when log message is undefined, closes #146

## 1.5.0

### Minor Changes

- [#122](https://github.com/floydspace/effect-aws/pull/122) [`64355df`](https://github.com/floydspace/effect-aws/commit/64355dfcbb55ef7ee8c2123599c87c1f87ebbc2e) Thanks [@floydspace](https://github.com/floydspace)! - refactor power tools logger

  ### Migration guide:

  1. Replace the `DefaultPowerToolsLoggerLayer` with `Logger.defaultLayer`.
  2. Replace the `PowerToolsLoggerLayer` with `Logger.layer`.

  before:

  ```typescript
  import {
    LoggerOptions,
    PowerToolsLoggerLayer,
  } from "@effect-aws/powertools-logger";
  import { Layer } from "effect";

  export const PowerToolsLoggerLive = Layer.provide(
    PowerToolsLoggerLayer,
    Layer.succeed(LoggerOptions, { serviceName: "my-service" }),
  );
  ```

  after:

  ```typescript
  import { Logger } from "@effect-aws/powertools-logger";

  export const PowerToolsLoggerLive = Logger.layer({
    serviceName: "my-service",
  });
  ```

  3. Replace the `BasePowerToolsLoggerLayer` with `Logger.baseLayer`.

  before:

  ```typescript
  import { Logger } from "@aws-lambda-powertools/logger";
  import {
    BasePowerToolsLoggerLayer,
    LoggerInstance,
  } from "@effect-aws/powertools-logger";
  import * as Layer from "effect/Layer";

  const serviceName = "my-service";

  export const PowerToolsLoggerLive = BasePowerToolsLoggerLayer.pipe(
    Layer.provide(Layer.succeed(LoggerInstance, new Logger({ serviceName }))),
  );
  ```

  after:

  ```typescript
  import { Logger as LoggerCtor } from "@aws-lambda-powertools/logger";
  import { Logger } from "@effect-aws/powertools-logger";

  const serviceName = "my-service";

  export const PowerToolsLoggerLive = Logger.baseLayer(
    () => new LoggerCtor({ serviceName }),
  );
  ```

### Patch Changes

- [#122](https://github.com/floydspace/effect-aws/pull/122) [`64355df`](https://github.com/floydspace/effect-aws/commit/64355dfcbb55ef7ee8c2123599c87c1f87ebbc2e) Thanks [@floydspace](https://github.com/floydspace)! - fix message printed as array when using Effect log functions

## 1.4.1

### Patch Changes

- [#106](https://github.com/floydspace/effect-aws/pull/106) [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f) Thanks [@floydspace](https://github.com/floydspace)! - drop support for effect version lower than 3.0.4

## 1.4.0

### Minor Changes

- [#71](https://github.com/floydspace/effect-aws/pull/71) [`b223139`](https://github.com/floydspace/effect-aws/commit/b223139c68e9131d372d840c273df42cfbba2ef0) Thanks [@godu](https://github.com/godu)! - bump @aws-lambda-powertools/logger to v2

## 1.3.0

### Minor Changes

- [`55ab70f`](https://github.com/floydspace/effect-aws/commit/55ab70f83ac2cf07daea09ee5dfa28e3f6452d42) Thanks [@floydspace](https://github.com/floydspace)! - @aws-lambda-powertools/logger is peer dependency now and support v2

## 1.2.1

### Patch Changes

- [`840fc92`](https://github.com/floydspace/effect-aws/commit/840fc9213410ac407ea311f88b2076ef5146d6d6) Thanks [@floydspace](https://github.com/floydspace)! - fix logger message string since effect v3.5

## 1.2.0

### Minor Changes

- [`0cfcda0`](https://github.com/floydspace/effect-aws/commit/0cfcda0d5617916d966807f5d5120df9ba461c12) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v3

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

## 0.6.0

### Minor Changes

- [`744df3c`](https://github.com/floydspace/effect-aws/commit/744df3ca6406b3a35e3066d5fe11ca7082c4c454) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect dependency

## 0.5.0

### Minor Changes

- [`0a969d8`](https://github.com/floydspace/effect-aws/commit/0a969d8a74c3bf1b87ff6a1c8bf689af849797e1) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect peer version

## 0.4.1

### Patch Changes

- [`280d8bd`](https://github.com/floydspace/effect-aws/commit/280d8bd6686d6e7a2b73322a047e8eb22263b1e1) Thanks [@floydspace](https://github.com/floydspace)! - upgrade dependencies

## 0.4.0

### Minor Changes

- [#14](https://github.com/floydspace/effect-aws/pull/14) [`cddfb74`](https://github.com/floydspace/effect-aws/commit/cddfb74a00b10a13ccfe3749e90961119c4f0906) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect version to the next one

## 0.3.0

### Minor Changes

- [`d43c957`](https://github.com/floydspace/effect-aws/commit/d43c95706d5798502d1794c3ed92fa301afd4a02) Thanks [@floydspace](https://github.com/floydspace)! - add an ability provide config options through layer, renamed the layer variables

## 0.2.1

### Patch Changes

- [`3d37bc9`](https://github.com/floydspace/effect-aws/commit/3d37bc931118d2b55558b54727022445b39438a9) Thanks [@floydspace](https://github.com/floydspace)! - fix breaking change occurred in powertools logger version 1.9.0 and drop support of lower versions

## 0.2.0

### Minor Changes

- [`c67b35e`](https://github.com/floydspace/effect-aws/commit/c67b35edcc0e65ca06dfe8981025d1ce3477dcc1) Thanks [@floydspace](https://github.com/floydspace)! - Better install @aws-lambda-powertools/logger as direct dependency instead of peer

## 0.1.0

### Minor Changes

- [`0817a5b`](https://github.com/floydspace/effect-aws/commit/0817a5b8fcab40fe4712c93816800fb67f1bf945) Thanks [@floydspace](https://github.com/floydspace)! - Release first version
