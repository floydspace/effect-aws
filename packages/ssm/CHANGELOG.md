# @effect-aws/ssm

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
