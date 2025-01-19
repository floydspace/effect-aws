/**
 * @since 1.0.0
 */
import { IoTEventsDataClient } from "@aws-sdk/client-iot-events-data";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultIoTEventsDataClientConfigLayer,
  IoTEventsDataClientInstanceConfig,
} from "./IoTEventsDataClientInstanceConfig";

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
