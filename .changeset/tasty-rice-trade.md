---
"@effect-aws/lambda": patch
---

Implement LambdaHandler.LambdaHandlerArgs raw lambda event and context accessor

Just yield it within api handler:

```ts
//...
const HelloLive = HttpApiBuilder.group(MyApi, "hello", (handlers) =>
  handlers.handle("hello", () =>
    Effect.gen(function* () {
      const { context, event } = yield* LambdaHandler.LambdaHandlerArgs

      yield* Effect.logInfo("Lambda event", { event, context })

      return yield* Effect.succeed("Hello, World!")
    })
  )
)
//...
```
