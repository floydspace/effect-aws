/**
 * @since 1.0.0
 */
import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudWatchLogsClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-cloudwatch-logs/CloudWatchLogsClientInstanceConfig",
)<CloudWatchLogsClientInstanceConfig, CloudWatchLogsClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultCloudWatchLogsClientInstanceConfig: Effect.Effect<CloudWatchLogsClientConfig> = Effect.gen(
  function*(_) {
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
  },
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudWatchLogsClientConfigLayer = Layer.effect(
  CloudWatchLogsClientInstanceConfig,
  makeDefaultCloudWatchLogsClientInstanceConfig,
);
