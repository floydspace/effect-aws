/**
 * @since 1.0.0
 */
import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class OpenSearchClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-opensearch/OpenSearchClientInstanceConfig",
)<OpenSearchClientInstanceConfig, OpenSearchClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultOpenSearchClientInstanceConfig: Effect.Effect<OpenSearchClientConfig> =
  Effect.gen(function* (_) {
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
export const DefaultOpenSearchClientConfigLayer = Layer.effect(
  OpenSearchClientInstanceConfig,
  makeDefaultOpenSearchClientInstanceConfig,
);
