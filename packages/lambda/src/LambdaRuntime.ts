/**
 * @since 1.0.0
 */
import type * as Layer from "effect/Layer";
import * as ManagedRuntime from "effect/ManagedRuntime";
import { disposeOnTermination } from "./internal/runtime.js";

/**
 * Makes a managed runtime from a layer asynchronously, designed for AWS Lambda.
 * All finalizers will be executed on process termination or interruption.
 *
 * @example
 * import { LambdaRuntime, LambdaContext } from "@effect-aws/lambda";
 * import { Effect, Logger } from "effect";
 *
 * const LambdaLayer = Logger.layer([Logger.consoleLogFmt]);
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

  disposeOnTermination(() => rt.disposeEffect);

  return rt;
};
