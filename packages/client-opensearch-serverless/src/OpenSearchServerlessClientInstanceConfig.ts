/**
 * @since 1.0.0
 */
import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class OpenSearchServerlessClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-opensearch-serverless/OpenSearchServerlessClientInstanceConfig",
)<
  OpenSearchServerlessClientInstanceConfig,
  OpenSearchServerlessClientConfig
>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultOpenSearchServerlessClientInstanceConfig: Effect.Effect<OpenSearchServerlessClientConfig> =
  Effect.gen(function*(_) {
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
export const DefaultOpenSearchServerlessClientConfigLayer = Layer.effect(
  OpenSearchServerlessClientInstanceConfig,
  makeDefaultOpenSearchServerlessClientInstanceConfig,
);
