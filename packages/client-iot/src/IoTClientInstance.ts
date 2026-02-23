/**
 * @since 1.0.0
 */
import { IoTClient } from "@aws-sdk/client-iot";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
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
