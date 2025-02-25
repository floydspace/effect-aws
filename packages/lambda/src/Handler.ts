/**
 * @since 1.0.0
 */
import type { Context } from "aws-lambda";
import { Function, type Layer } from "effect";
import * as Effect from "effect/Effect";
import { fromLayer } from "./Runtime.js";

/**
 * AWS Lambda native handler type.
 *
 * @since 1.0.0
 * @category model
 */
export type Handler<TEvent = unknown, TResult = any> = (
  event: TEvent,
  context: Context,
) => Promise<TResult>;

/**
 * Effectful AWS Lambda handler type.
 *
 * @since 1.0.0
 * @category model
 */
export type EffectHandler<T, R, E = never, A = void> = (
  event: T,
  context: Context,
) => Effect.Effect<A, E, R>;

/**
 * Combined object of an EffectHandler and a global layer.
 *
 * @param {EffectHandler<T, R, E1, A>} handler - The effectful handler function.
 * @param {Layer.Layer<R, E2>} layer - The global layer to provide to the handler.
 *
 * @since 1.0.0
 * @category model
 */
export type EffectHandlerWithLayer<T, R, E1 = never, E2 = never, A = void> = {
  handler: EffectHandler<T, R, E1, A>;
  layer: Layer.Layer<R, E2>;
};

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
 * export const handler = makeLambda({
 *  handler: effectHandler,
 *  layer: LambdaLayer,
 * });
 *
 * @since 1.0.0
 * @category constructors
 */
export function makeLambda<T, E, A>(
  handler: EffectHandler<T, never, E, A>,
): Handler<T, A>;
export function makeLambda<T, R, E1, E2, A>(
  handler: EffectHandlerWithLayer<T, R, E1, E2, A>,
): Handler<T, A>;
/**
 * @deprecated Prefer using the `EffectHandlerWithLayer` type to provide a global layer.
 * @example
 * ```ts
 * export const handler = makeLambda({
 *  handler: effectHandler,
 *  layer: LambdaLayer,
 * });
 * ```
 */
export function makeLambda<T, R, E1, E2, A>(
  handler: EffectHandler<T, R, E1, A>,
  globalLayer: Layer.Layer<R, E2>,
): Handler<T, A>;
export function makeLambda<T, R, E1, E2, A>(
  _handler: EffectHandler<T, R, E1, A> | EffectHandlerWithLayer<T, R, E1, E2, A>,
  globalLayer?: Layer.Layer<R, E2>,
): Handler<T, A> {
  const handler = Function.isFunction(_handler) ? _handler : _handler.handler;

  const runPromise = globalLayer ?
    fromLayer(globalLayer).runPromise :
    (
      !Function.isFunction(_handler)
        ? fromLayer(_handler.layer).runPromise
        : Effect.runPromise as <A, E>(effect: Effect.Effect<A, E, R>) => Promise<A>
    );

  return async (event: T, context: Context) => handler(event, context).pipe(runPromise);
}
