/**
 * @since 1.0.0
 */
import { IoTClient } from "@aws-sdk/client-iot";
import { Effect, Layer, ServiceMap } from "effect";
import * as IoTServiceConfig from "./IoTServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTClientInstance extends ServiceMap.Service<IoTClientInstance, IoTClient>()(
  "@effect-aws/client-iot/IoTClientInstance",
) {}

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
export const layer = Layer.effect(IoTClientInstance, make);
