/**
 * @since 1.0.0
 */
import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTEventsClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-iot-events/IoTEventsClientInstanceConfig",
)<IoTEventsClientInstanceConfig, IoTEventsClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultIoTEventsClientInstanceConfig: Effect.Effect<IoTEventsClientConfig> = Effect.gen(function*(_) {
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
export const DefaultIoTEventsClientConfigLayer = Layer.effect(
  IoTEventsClientInstanceConfig,
  makeDefaultIoTEventsClientInstanceConfig,
);
