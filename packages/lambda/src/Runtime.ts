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
 * import { fromLayer } from "@effect-aws/lambda";
 * import { Context } from "aws-lambda";
 * import { Effect, Logger } from "effect";
 *
 * const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);
 *
 * const lambdaRuntime = fromLayer(LambdaLayer);
 *
 * export const handler = async (event: unknown, context: Context) => {
 *  return Effect.logInfo("Hello, world!").pipe(lambdaRuntime.runPromise);
 * };
 *
 * @since 1.0.0
 * @category constructors
 */
export const fromLayer = <R, E>(layer: Layer.Layer<R, E>): ManagedRuntime.ManagedRuntime<R, E> => {
  const rt = ManagedRuntime.make(layer);

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
