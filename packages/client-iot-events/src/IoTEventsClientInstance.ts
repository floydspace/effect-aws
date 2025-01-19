/**
 * @since 1.0.0
 */
import { IoTEventsClient } from "@aws-sdk/client-iot-events";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultIoTEventsClientConfigLayer,
  IoTEventsClientInstanceConfig,
} from "./IoTEventsClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTEventsClientInstance extends Context.Tag(
  "@effect-aws/client-iot-events/IoTEventsClientInstance",
)<IoTEventsClientInstance, IoTEventsClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTEventsClientInstance = Effect.flatMap(
  IoTEventsClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new IoTEventsClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const IoTEventsClientInstanceLayer = Layer.scoped(
  IoTEventsClientInstance,
  makeIoTEventsClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultIoTEventsClientInstanceLayer =
  IoTEventsClientInstanceLayer.pipe(
    Layer.provide(DefaultIoTEventsClientConfigLayer),
  );
