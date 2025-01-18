/**
 * @since 1.0.0
 */
import { IoTClient } from "@aws-sdk/client-iot";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultIoTClientConfigLayer,
  IoTClientInstanceConfig,
} from "./IoTClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTClientInstance extends Context.Tag(
  "@effect-aws/client-iot/IoTClientInstance",
)<IoTClientInstance, IoTClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTClientInstance = Effect.map(
  IoTClientInstanceConfig,
  (config) => new IoTClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const IoTClientInstanceLayer = Layer.effect(
  IoTClientInstance,
  makeIoTClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultIoTClientInstanceLayer = IoTClientInstanceLayer.pipe(
  Layer.provide(DefaultIoTClientConfigLayer),
);
