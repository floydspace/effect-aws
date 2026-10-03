import * as Console from "effect/Console";
import * as Effect from "effect/Effect";
import type * as Layer from "effect/Layer";
import * as ManagedRuntime from "effect/ManagedRuntime";

/** @internal */
export const disposeOnTermination = (disposeEffect: () => Effect.Effect<void>): void => {
  const signalHandler: NodeJS.SignalsListener = (signal) => {
    Effect.runFork(
      Effect.gen(function*() {
        yield* Console.log(`[runtime] ${signal} received`);
        yield* Console.log("[runtime] cleaning up");
        yield* disposeEffect();
        yield* Console.log("[runtime] exiting");
        yield* Effect.sync(() => process.exit(0));
      }),
    );
  };

  process.on("SIGTERM", signalHandler);
  process.on("SIGINT", signalHandler);
};

/**
 * Runs effects on a runtime built from `layer` on first use and kept while the container is warm.
 *
 * A `ManagedRuntime` keeps a failed build, so a transient failure during a cold start would fail
 * every later invocation of the container. A runtime whose build failed is disposed instead, which
 * also evicts the failure from a shared `memoMap`, and the next invocation builds the layer again.
 *
 * @internal
 */
export const makeRunPromise = <R, E>(
  layer: Layer.Layer<R, E>,
  options?: { readonly memoMap?: Layer.MemoMap },
): <A, E2>(effect: Effect.Effect<A, E2, R>) => Promise<A> => {
  let runtime = ManagedRuntime.make(layer, options);
  disposeOnTermination(() => runtime.disposeEffect);

  return async (effect) => {
    const current = runtime;
    try {
      await current.context();
    } catch (error) {
      if (runtime === current) {
        runtime = ManagedRuntime.make(layer, options);
        await current.dispose();
      }
      throw error;
    }
    return current.runPromise(effect);
  };
};
