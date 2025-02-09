/**
 * @since 1.0.0
 */
import { IoTEventsDataClient } from "@aws-sdk/client-iot-events-data";
import { Context, Effect, Layer } from "effect";
import * as IoTEventsDataServiceConfig from "./IoTEventsDataServiceConfig.js";

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
export const make = Effect.flatMap(
  IoTEventsDataServiceConfig.toIoTEventsDataClientConfig,
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
export const layer = Layer.scoped(IoTEventsDataClientInstance, make);
