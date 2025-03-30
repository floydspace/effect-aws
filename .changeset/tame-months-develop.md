---
"@effect-aws/secrets-manager": minor
---

improve secrets manager config provider layer management, so that one can control the SecretsManagerService layer configuration properly and have an ability to mock it in tests

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
