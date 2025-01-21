/**
 * @since 1.0.0
 */
import { IoTEventsDataClient } from "@aws-sdk/client-iot-events-data";
import { Context, Effect, Layer } from "effect";
import {
  DefaultIoTEventsDataClientConfigLayer,
  IoTEventsDataClientInstanceConfig,
} from "./IoTEventsDataClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTEventsDataClientInstance extends Context.Tag(
  "@effect-aws/client-iot-events-data/IoTEventsDataClientInstance",
)<IoTEventsDataClientInstance, IoTEventsDataClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTEventsDataClientInstance = Effect.flatMap(
  IoTEventsDataClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new IoTEventsDataClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const IoTEventsDataClientInstanceLayer = Layer.scoped(
  IoTEventsDataClientInstance,
  makeIoTEventsDataClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultIoTEventsDataClientInstanceLayer =
  IoTEventsDataClientInstanceLayer.pipe(
    Layer.provide(DefaultIoTEventsDataClientConfigLayer),
  );
