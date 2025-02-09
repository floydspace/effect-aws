/**
 * @since 1.0.0
 */
import { IoTEventsClient } from "@aws-sdk/client-iot-events";
import { Context, Effect, Layer } from "effect";
import * as IoTEventsServiceConfig from "./IoTEventsServiceConfig.js";

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
export const make = Effect.flatMap(
  IoTEventsServiceConfig.toIoTEventsClientConfig,
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
export const layer = Layer.scoped(IoTEventsClientInstance, make);
