/**
 * @since 1.0.0
 */
import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class SchedulerClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-scheduler/SchedulerClientInstanceConfig",
)<SchedulerClientInstanceConfig, SchedulerClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultSchedulerClientInstanceConfig: Effect.Effect<SchedulerClientConfig> =
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
export const DefaultSchedulerClientConfigLayer = Layer.effect(
  SchedulerClientInstanceConfig,
  makeDefaultSchedulerClientInstanceConfig,
);
