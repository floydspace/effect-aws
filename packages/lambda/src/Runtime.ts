/**
 * @since 1.0.0
 */
import { Console, Effect, Exit, Layer, Scope } from "effect";

/**
 * @since 1.0.0
 * @category constructors
 */
export const fromLayer = <R, E>(layer: Layer.Layer<R, E>) => {
  const scope = Effect.runSync(Scope.make());
  const runtime = Layer.toRuntime(layer).pipe(
    Scope.extend(scope),
    Effect.runPromise,
  );
  const destroy = Scope.close(scope, Exit.unit);

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
