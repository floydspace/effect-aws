/**
 * @since 1.0.0
 */
import { Console, Effect, Exit, Layer, Scope } from "effect";

/**
 * Makes a runtime from a layer asynchronously, designed for AWS Lambda.
 * All finalizers will be executed on process termination or interruption.
 *
 * @example
 * import { fromLayer } from "@effect-aws/lambda";
 * import { Context } from "aws-lambda";
 * import { Effect, Logger, Runtime } from "effect";
 *
 * const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);
 *
 * const lambdaRuntime = fromLayer(LambdaLayer);
 *
 * export const handler = async (event: unknown, context: Context) => {
 *  const runPromise = Runtime.runPromise(await lambdaRuntime);
 *  return Effect.logInfo("Hello, world!").pipe(runPromise);
 * };
 *
 * @since 1.0.0
 * @category constructors
 */
export const fromLayer = <R, E>(layer: Layer.Layer<R, E>) => {
  const scope = Effect.runSync(Scope.make());
  const runtime = Layer.toRuntime(layer).pipe(
    Scope.extend(scope),
    Effect.runPromise,
  );
  const destroy = Scope.close(scope, Exit.void);

  const signalHandler: NodeJS.SignalsListener = (signal) => {
    Effect.runFork(
      Effect.gen(function* (_) {
        yield* _(Console.log(`[runtime] ${signal} received`));
        yield* _(Console.log("[runtime] cleaning up"));
        yield* _(destroy);
        yield* _(Console.log("[runtime] exiting"));
        yield* _(Effect.sync(() => process.exit(0)));
      }),
    );
  };

  process.on("SIGTERM", signalHandler);
  process.on("SIGINT", signalHandler);

  return runtime;
};
