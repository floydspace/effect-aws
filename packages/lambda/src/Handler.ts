import type { Context } from "aws-lambda";
import { Layer, Runtime } from "effect";
import * as Effect from "effect/Effect";
import { fromLayer } from "./Runtime";

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
) => Effect.Effect<R, E, A>;

/**
 * @since 1.0.0
 * @category constructors
 */
export function makeLambda<T, E, A>(
  handler: EffectHandler<T, never, E, A>,
): Handler<T, A>;
export function makeLambda<T, R, E1, E2, A>(
  handler: EffectHandler<T, R, E1, A>,
  globalLayer: Layer.Layer<never, E2, R>,
): Handler<T, A>;
export function makeLambda<T, R, E1, E2, A>(
  handler: EffectHandler<T, R, E1, A>,
  globalLayer?: Layer.Layer<never, E2, R>,
): Handler<T, A> {
  const globalRuntime = globalLayer
    ? fromLayer(globalLayer)
    : Promise.resolve(Runtime.defaultRuntime as Runtime.Runtime<R>);

  return async (event: T, context: Context) => {
    const runPromise = Runtime.runPromise(await globalRuntime);
    return handler(event, context).pipe(runPromise);
  };
}
