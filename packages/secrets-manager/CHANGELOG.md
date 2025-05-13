# @effect-aws/secrets-manager

## 1.3.1

### Patch Changes

- Updated dependencies [[`bccec21`](https://github.com/floydspace/effect-aws/commit/bccec2132338db2c04444baf249c48efbb42e80e)]:
  - @effect-aws/client-secrets-manager@1.10.2

## 1.3.0

### Patch Changes

- Updated dependencies [[`6215146`](https://github.com/floydspace/effect-aws/commit/62151460cb125298b24375a4c69dcf8d562148f8)]:
  - @effect-aws/client-secrets-manager@1.10.0

## 1.2.0

### Minor Changes

- [#141](https://github.com/floydspace/effect-aws/pull/141) [`d1c325c`](https://github.com/floydspace/effect-aws/commit/d1c325cbd104d1559166df449d49bb383f1eb3c4) Thanks [@floydspace](https://github.com/floydspace)! - improve secrets manager config provider layer management, so that one can control the SecretsManagerService layer configuration properly and have an ability to mock it in tests

  Migration guide:

  ```diff
  +import { SecretsManager } from "@effect-aws/client-secrets-manager"
  -import { fromSecretsManager } from "@effect-aws/secrets-manager";
  +import { ConfigProvider } from "@effect-aws/secrets-manager"
  import { Effect, Config, Console } from "effect"

  const program = Effect.gen(function* () {
    const secret: string = yield* Config.string("my_secret_name")

    yield* Console.log("Secret from Secrets Manager: ", secret)
  })

  program.pipe(
  -  Effect.withConfigProvider(fromSecretsManager()),
  +  ConfigProvider.withSecretsManagerConfigProvider(),
  +  Effect.provide(SecretsManager.defaultLayer),
    Effect.runPromise
  )
  ```

  or

  ```diff
  import { SecretsManager } from "@effect-aws/client-secrets-manager"
  -import { fromSecretsManager } from "@effect-aws/secrets-manager";
  +import { ConfigProvider } from "@effect-aws/secrets-manager"
  import { Config, Console, Effect, Layer } from "effect"

  const program = Effect.gen(function* () {
    const secret: string = yield* Config.string("my_secret_name")

    yield* Console.log("Secret from Secrets Manager: ", secret)
  })

  const serviceLayer = SecretsManager.layer({ region: "eu-central-1" })

  program.pipe(
  -  Effect.provide(Layer.setConfigProvider(fromSecretsManager({ serviceLayer }))),
  +  Effect.provide(ConfigProvider.setSecretsManagerConfigProvider()),
  +  Effect.provide(serviceLayer),
    Effect.runPromise
  )
  ```

## 1.1.2

### Patch Changes

- Updated dependencies []:
  - @effect-aws/client-secrets-manager@1.9.5

## 1.1.1

### Patch Changes

- Updated dependencies [[`6989a08`](https://github.com/floydspace/effect-aws/commit/6989a08df041108ad3a2b08272647a20f1a5d662)]:
  - @effect-aws/client-secrets-manager@1.9.3

## 1.1.0

### Patch Changes

- [#106](https://github.com/floydspace/effect-aws/pull/106) [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f) Thanks [@floydspace](https://github.com/floydspace)! - drop support for effect version lower than 3.0.4

- Updated dependencies [[`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f), [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f)]:
  - @effect-aws/client-secrets-manager@1.9.0

## 1.0.1

### Patch Changes

- [`cc97eae`](https://github.com/floydspace/effect-aws/commit/cc97eaed1f8df72b8e7fde05069e8ce8eaac578f) Thanks [@floydspace](https://github.com/floydspace)! - simplify layers configuration (closes #78)

## 1.0.0

### Major Changes

- [`234a5e2`](https://github.com/floydspace/effect-aws/commit/234a5e2d76b8cf12c180ef88584956eaeb039e89) Thanks [@floydspace](https://github.com/floydspace)! - Implement `fromSecretsManager` ConfigProvider constructor, fetching configuration from AWS Secrets Manager service.
  Closes [#55](https://github.com/floydspace/effect-aws/issues/55)
