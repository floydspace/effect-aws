/**
 * @since 1.0.0
 */
import type { IoTEventsDataClientConfig } from "@aws-sdk/client-iot-events-data";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTEventsDataClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-iot-events-data/IoTEventsDataClientInstanceConfig",
)<IoTEventsDataClientInstanceConfig, IoTEventsDataClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultIoTEventsDataClientInstanceConfig: Effect.Effect<IoTEventsDataClientConfig> =
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
export const DefaultIoTEventsDataClientConfigLayer = Layer.effect(
  IoTEventsDataClientInstanceConfig,
  makeDefaultIoTEventsDataClientInstanceConfig,
);
