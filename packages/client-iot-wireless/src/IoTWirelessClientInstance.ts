/**
 * @since 1.0.0
 */
import { IoTWirelessClient } from "@aws-sdk/client-iot-wireless";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultIoTWirelessClientConfigLayer,
  IoTWirelessClientInstanceConfig,
} from "./IoTWirelessClientInstanceConfig";

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
export const makeIoTWirelessClientInstance = Effect.map(
  IoTWirelessClientInstanceConfig,
  (config) => new IoTWirelessClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const IoTWirelessClientInstanceLayer = Layer.effect(
  IoTWirelessClientInstance,
  makeIoTWirelessClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultIoTWirelessClientInstanceLayer =
  IoTWirelessClientInstanceLayer.pipe(
    Layer.provide(DefaultIoTWirelessClientConfigLayer),
  );
