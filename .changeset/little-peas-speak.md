---
"@effect-aws/ssm": minor
---

improve parameter store config provider layer management, so that one can control the SSMService layer configuration properly and have an ability to mock it in tests

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
