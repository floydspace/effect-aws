# @effect-aws/secrets-manager

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fsecrets-manager?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/secrets-manager)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fsecrets-manager)](https://www.npmjs.com/package/@effect-aws/secrets-manager)

This package provides a `fromSecretsManager` [ConfigProvider](https://effect.website/docs/guides/configuration) constructor function.
You can use it to read secrets from AWS Secrets Manager as a `Config` schema.

The config primitive name must match the secret Name or ARN in Secrets Manager.
For example, `Config.string("my_secret_name")` or `Config.string("arn:aws:secretsmanager:eu-central-1:123456789012:secret:my_secret_name-AbCdEf")`.

## Installation

```bash
npm install --save @effect-aws/secrets-manager @effect-aws/client-secrets-manager
```

## Usage

With default service layer:

```typescript
import { SecretsManager } from "@effect-aws/client-secrets-manager"
import { ConfigProvider } from "@effect-aws/secrets-manager"
import { Effect, Config, Console } from "effect"

const program = Effect.gen(function* () {
  const secret: string = yield* Config.string("my_secret_name")

  yield* Console.log("Secret from Secrets Manager: ", secret)
})

program.pipe(
  ConfigProvider.withSecretsManagerConfigProvider(),
  Effect.provide(SecretsManager.defaultLayer),
  Effect.runPromise
)
```

With custom service layer:

```typescript
import { SecretsManager } from "@effect-aws/client-secrets-manager"
import { ConfigProvider } from "@effect-aws/secrets-manager"
import { Config, Console, Effect, Layer } from "effect"

const program = Effect.gen(function* () {
  const secret: string = yield* Config.string("my_secret_name")

  yield* Console.log("Secret from Secrets Manager: ", secret)
})

const serviceLayer = SecretsManager.layer({ region: "eu-central-1" })

program.pipe(
  Effect.provide(ConfigProvider.setSecretsManagerConfigProvider()),
  Effect.provide(serviceLayer),
  Effect.runPromise
)
```
