---
"@effect-aws/lambda": patch
---

Implement `LambdaHandler.event()` and `LambdaHandler.context()` to access raw lambda event and context

Just yield them within api handler:

```ts
//...
import { type APIGatewayProxyEvent, LambdaHandler } from "@effect-aws/lambda"
//...
const HelloLive = HttpApiBuilder.group(MyApi, "hello", (handlers) =>
  handlers.handle("hello", () =>
    Effect.gen(function* () {
      const event = yield* LambdaHandler.event<APIGatewayProxyEvent>()
      const context = yield* LambdaHandler.context()

      yield* Effect.logInfo("Lambda event", { event, context })

      return yield* Effect.succeed("Hello, World!")
    })
  )
)
//...
```
