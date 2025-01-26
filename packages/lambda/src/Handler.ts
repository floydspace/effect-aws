/**
 * @since 1.0.0
 */
import type { Context } from "aws-lambda";
import type { Layer } from "effect";
import { Runtime } from "effect";
import type * as Effect from "effect/Effect";
import { fromLayer } from "./Runtime.js";

/**
 * @since 1.0.0
 * @category model
 */
export type Handler<TEvent = unknown, TResult = any> = (
  event: TEvent,
  context: Context,
) => Promise<TResult>;

/**
 * @since 1.0.0
 * @category model
 */
export type EffectHandler<T, R, E = never, A = void> = (
  event: T,
  context: Context,
) => Effect.Effect<A, E, R>;

/**
 * Makes a lambda handler from the given EffectHandler and optional global layer.
 * The global layer is used to provide a runtime which will gracefully handle lambda termination during down-scaling.
 *
 * @example
 * import { makeLambda } from "@effect-aws/lambda";
 * import { Context } from "aws-lambda";
 * import { Effect } from "effect";
 *
 * const effectHandler = (event: unknown, context: Context) => {
 *  return Effect.logInfo("Hello, world!");
 * };
 *
 * export const handler = makeLambda(effectHandler);
 *
 * @example
 * import { makeLambda } from "@effect-aws/lambda";
 * import { Context } from "aws-lambda";
 * import { Effect, Logger } from "effect";
 *
 * const effectHandler = (event: unknown, context: Context) => {
 *  return Effect.logInfo("Hello, world!");
 * };
 *
 * const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);
 *
 * export const handler = makeLambda(effectHandler, LambdaLayer);
 *
 * @since 1.0.0
 * @category constructors
 */
export function makeLambda<T, E, A>(
  handler: EffectHandler<T, never, E, A>,
): Handler<T, A>;
export function makeLambda<T, R, E1, E2, A>(
  handler: EffectHandler<T, R, E1, A>,
  globalLayer: Layer.Layer<R, E2>,
): Handler<T, A>;
export function makeLambda<T, R, E1, E2, A>(
  handler: EffectHandler<T, R, E1, A>,
  globalLayer?: Layer.Layer<R, E2>,
): Handler<T, A> {
  const globalRuntime = globalLayer
    ? fromLayer(globalLayer)
    : Promise.resolve(Runtime.defaultRuntime as Runtime.Runtime<R>);

  return async (event: T, context: Context) => {
    const runPromise = Runtime.runPromise(await globalRuntime);
    return handler(event, context).pipe(runPromise);
  };
}
