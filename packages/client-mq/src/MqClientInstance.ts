/**
 * @since 1.0.0
 */
import { MqClient } from "@aws-sdk/client-mq";
import { Effect, Layer, ServiceMap } from "effect";
import * as MqServiceConfig from "./MqServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class MqClientInstance extends ServiceMap.Service<MqClientInstance, MqClient>()(
  "@effect-aws/client-mq/MqClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  MqServiceConfig.toMqClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new MqClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(MqClientInstance, make);
