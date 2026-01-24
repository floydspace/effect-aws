# @effect-aws/ssm

## 1.3.6

### Patch Changes

- Updated dependencies []:
  - @effect-aws/client-ssm@1.10.9

## 1.3.5

### Patch Changes

- Updated dependencies [[`aecc0af`](https://github.com/floydspace/effect-aws/commit/aecc0af4f05c734c9e42cc46b552382c32d86b39)]:
  - @effect-aws/client-ssm@1.10.7

## 1.3.4

### Patch Changes

- Updated dependencies [[`f1b4ec8`](https://github.com/floydspace/effect-aws/commit/f1b4ec8fed35a1074a17451a8a39ab39e13863ac)]:
  - @effect-aws/client-ssm@1.10.6

## 1.3.3

### Patch Changes

- Updated dependencies [[`192aad7`](https://github.com/floydspace/effect-aws/commit/192aad72a154951e5814f12cae90cc3d1b63621c)]:
  - @effect-aws/client-ssm@1.10.3

## 1.3.2

### Patch Changes

- Updated dependencies [[`bccec21`](https://github.com/floydspace/effect-aws/commit/bccec2132338db2c04444baf249c48efbb42e80e)]:
  - @effect-aws/client-ssm@1.10.2

## 1.3.1

### Patch Changes

- Updated dependencies [[`ca6d01b`](https://github.com/floydspace/effect-aws/commit/ca6d01b92bcf6781e2a28ccc5d2adc73cbd6be77)]:
  - @effect-aws/client-ssm@1.10.1

## 1.3.0

### Patch Changes

- Updated dependencies [[`6215146`](https://github.com/floydspace/effect-aws/commit/62151460cb125298b24375a4c69dcf8d562148f8)]:
  - @effect-aws/client-ssm@1.10.0

## 1.2.0

### Minor Changes

- [#141](https://github.com/floydspace/effect-aws/pull/141) [`d1c325c`](https://github.com/floydspace/effect-aws/commit/d1c325cbd104d1559166df449d49bb383f1eb3c4) Thanks [@floydspace](https://github.com/floydspace)! - improve parameter store config provider layer management, so that one can control the SSMService layer configuration properly and have an ability to mock it in tests

  Migration guide:

  ```diff
  +import { SSM } from "@effect-aws/client-ssm"
  -import { fromParameterStore } from "@effect-aws/ssm";
  +import { ConfigProvider } from "@effect-aws/ssm"
  import { Effect, Config, Console } from "effect"

  const program = Effect.gen(function* () {
    const param: string = yield* Config.string("my_param_name")

    yield* Console.log("Value from Parameter Store: ", param)
  })

  program.pipe(
  -  Effect.withConfigProvider(fromParameterStore()),
  +  ConfigProvider.withParameterStoreConfigProvider(),
  +  Effect.provide(SSM.defaultLayer),
    Effect.runPromise
  )
  ```

  or

  ```diff
  import { SSM } from "@effect-aws/client-ssm"
  -import { fromParameterStore } from "@effect-aws/ssm";
  +import { ConfigProvider } from "@effect-aws/ssm"
  import { Config, Console, Effect, Layer } from "effect"

  const program = Effect.gen(function* () {
    const param: string = yield* Config.string("my_param_name")

    yield* Console.log("Value from Parameter Store: ", param)
  })

  const serviceLayer = SSM.layer({ region: "eu-central-1" })

  program.pipe(
  -  Effect.provide(Layer.setConfigProvider(fromParameterStore({ serviceLayer }))),
  +  Effect.provide(ConfigProvider.setParameterStoreConfigProvider()),
  +  Effect.provide(serviceLayer),
    Effect.runPromise
  )
  ```

## 1.1.2

### Patch Changes

- Updated dependencies []:
  - @effect-aws/client-ssm@1.9.5

## 1.1.1

### Patch Changes

- Updated dependencies [[`6989a08`](https://github.com/floydspace/effect-aws/commit/6989a08df041108ad3a2b08272647a20f1a5d662)]:
  - @effect-aws/client-ssm@1.9.3

## 1.1.0

### Patch Changes

- [#106](https://github.com/floydspace/effect-aws/pull/106) [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f) Thanks [@floydspace](https://github.com/floydspace)! - drop support for effect version lower than 3.0.4

- Updated dependencies [[`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f), [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f)]:
  - @effect-aws/client-ssm@1.9.0

## 1.0.2

### Patch Changes

- [`cc97eae`](https://github.com/floydspace/effect-aws/commit/cc97eaed1f8df72b8e7fde05069e8ce8eaac578f) Thanks [@floydspace](https://github.com/floydspace)! - simplify layers configuration (closes #78)

## 1.0.1

### Patch Changes

- [`f45941d`](https://github.com/floydspace/effect-aws/commit/f45941d6f31b505ce22d6ca196b0c89bc2aa68e2) Thanks [@floydspace](https://github.com/floydspace)! - **ConfigProvider** get parameter with decryption by default

## 1.0.0

### Major Changes

- [`225585c`](https://github.com/floydspace/effect-aws/commit/225585c0f1d5070de3f7b8effb721742a90f7619) Thanks [@floydspace](https://github.com/floydspace)! - Implement `fromParameterStore` ConfigProvider constructor

### Patch Changes

- Updated dependencies [[`b22c449`](https://github.com/floydspace/effect-aws/commit/b22c44924a2fdf2892b7a08f4ec7f3df2c154b8a)]:
  - @effect-aws/client-ssm@1.0.0
