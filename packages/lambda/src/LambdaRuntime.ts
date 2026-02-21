/**
 * @since 1.0.0
 */
import type { Layer } from "effect";
import { Console, Effect, ManagedRuntime } from "effect";

/**
 * Makes a managed runtime from a layer asynchronously, designed for AWS Lambda.
 * All finalizers will be executed on process termination or interruption.
 *
 * @example
 * import { LambdaRuntime, LambdaContext } from "@effect-aws/lambda";
 * import { Effect, Logger } from "effect";
 *
 * const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);
 *
 * const lambdaRuntime = LambdaRuntime.fromLayer(LambdaLayer);
 *
 * export const handler = async (event: unknown, context: LambdaContext) => {
 *  return Effect.logInfo("Hello, world!").pipe(lambdaRuntime.runPromise);
 * };
 *
 * @since 1.0.0
 * @category constructors
 */
export const fromLayer = <R, E>(
  layer: Layer.Layer<R, E>,
  options?: { readonly memoMap?: Layer.MemoMap },
): ManagedRuntime.ManagedRuntime<R, E> => {
  const rt = ManagedRuntime.make(layer, options);

  const signalHandler: NodeJS.SignalsListener = (signal) => {
    Effect.runFork(
      Effect.gen(function*() {
        yield* Console.log(`[runtime] ${signal} received`);
        yield* Console.log("[runtime] cleaning up");
        yield* rt.disposeEffect;
        yield* Console.log("[runtime] exiting");
        yield* Effect.sync(() => process.exit(0));
      }),
    );
  };

  process.on("SIGTERM", signalHandler);
  process.on("SIGINT", signalHandler);

  return rt;
};
