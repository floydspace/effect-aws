/**
 * @since 1.0.0
 */
import { MqClient } from "@aws-sdk/client-mq";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultMqClientConfigLayer,
  MqClientInstanceConfig,
} from "./MqClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class MqClientInstance extends Context.Tag(
  "@effect-aws/client-mq/MqClientInstance",
)<MqClientInstance, MqClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeMqClientInstance = Effect.flatMap(
  MqClientInstanceConfig,
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
export const MqClientInstanceLayer = Layer.scoped(
  MqClientInstance,
  makeMqClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultMqClientInstanceLayer = MqClientInstanceLayer.pipe(
  Layer.provide(DefaultMqClientConfigLayer),
);
