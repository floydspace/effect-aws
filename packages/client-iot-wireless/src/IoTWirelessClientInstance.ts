/**
 * @since 1.0.0
 */
import { IoTWirelessClient } from "@aws-sdk/client-iot-wireless";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as IoTWirelessServiceConfig from "./IoTWirelessServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTWirelessClientInstance extends Context.Tag(
  "@effect-aws/client-iot-wireless/IoTWirelessClientInstance",
)<IoTWirelessClientInstance, IoTWirelessClient>() {}

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
export const layer = Layer.scoped(IoTWirelessClientInstance, make);
