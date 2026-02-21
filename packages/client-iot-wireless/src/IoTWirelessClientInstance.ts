/**
 * @since 1.0.0
 */
import { IoTWirelessClient } from "@aws-sdk/client-iot-wireless";
import { Effect, Layer, ServiceMap } from "effect";
import * as IoTWirelessServiceConfig from "./IoTWirelessServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTWirelessClientInstance extends ServiceMap.Service<IoTWirelessClientInstance, IoTWirelessClient>()(
  "@effect-aws/client-iot-wireless/IoTWirelessClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  IoTWirelessServiceConfig.toIoTWirelessClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new IoTWirelessClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(IoTWirelessClientInstance, make);
