/**
 * @since 1.0.0
 */
import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTDataPlaneClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-iot-data-plane/IoTDataPlaneClientInstanceConfig",
)<IoTDataPlaneClientInstanceConfig, IoTDataPlaneClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultIoTDataPlaneClientInstanceConfig: Effect.Effect<IoTDataPlaneClientConfig> =
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
export const DefaultIoTDataPlaneClientConfigLayer = Layer.effect(
  IoTDataPlaneClientInstanceConfig,
  makeDefaultIoTDataPlaneClientInstanceConfig,
);
