/**
 * @since 1.0.0
 */
import type { STSClientConfig } from "@aws-sdk/client-sts";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class STSClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-sts/STSClientInstanceConfig",
)<STSClientInstanceConfig, STSClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultSTSClientInstanceConfig: Effect.Effect<STSClientConfig> = Effect.gen(function*(_) {
  const runtime = yield* _(Effect.runtime<never>());
  const runSync = Runtime.runSync(runtime);

  return {
    logger: {
      info(m) {
        Effect.logInfo(m).pipe(runSync);
      },
      warn(m) {
        Effect.logWarning(m).pipe(runSync);
      },
      error(m) {
        Effect.logError(m).pipe(runSync);
      },
      debug(m) {
        Effect.logDebug(m).pipe(runSync);
      },
      trace(m) {
        Effect.logTrace(m).pipe(runSync);
      },
    },
  };
});

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSTSClientConfigLayer = Layer.effect(
  STSClientInstanceConfig,
  makeDefaultSTSClientInstanceConfig,
);
