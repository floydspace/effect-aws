---
"@effect-aws/lambda": minor
---

- Defined `EffectHandlerWithLayer` type to configure global layer with unary argument which is more safe. Dual arguments approach is deprecated.

  Here is how to migrate from old dual arguments approach:

  ```diff
  - export const handler = makeLambda(effectHandler, LambdaLayer);
  + export const handler = makeLambda({
  +  handler: effectHandler,
  +  layer: LambdaLayer,
  + });
  ```

- `fromLayer` function now returns `ManagedRuntime`

  Here is how to migrate if you use `fromLayer` function directly:

  ```diff
  import { fromLayer } from "@effect-aws/lambda";
  import { Context } from "aws-lambda";
  - import { Effect, Logger, Runtime } from "effect";
  + import { Effect, Logger } from "effect";

  const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);

  const lambdaRuntime = fromLayer(LambdaLayer);

  export const handler = async (event: unknown, context: Context) => {
  -  const runPromise = Runtime.runPromise(await lambdaRuntime);
  -  return Effect.logInfo("Hello, world!").pipe(runPromise);
  +  return Effect.logInfo("Hello, world!").pipe(lambdaRuntime.runPromise);
  };
  ```
