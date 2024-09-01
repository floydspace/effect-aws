/**
 * @since 1.0.0
 */
import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class ElastiCacheClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-elasticache/ElastiCacheClientInstanceConfig",
)<ElastiCacheClientInstanceConfig, ElastiCacheClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultElastiCacheClientInstanceConfig: Effect.Effect<ElastiCacheClientConfig> =
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
export const DefaultElastiCacheClientConfigLayer = Layer.effect(
  ElastiCacheClientInstanceConfig,
  makeDefaultElastiCacheClientInstanceConfig,
);
