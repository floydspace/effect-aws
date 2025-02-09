/**
 * @since 1.0.0
 */
import { IoTClient } from "@aws-sdk/client-iot";
import { Context, Effect, Layer } from "effect";
import * as IoTServiceConfig from "./IoTServiceConfig.js";

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
export const make = Effect.flatMap(
  IoTServiceConfig.toIoTClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new IoTClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(IoTClientInstance, make);
