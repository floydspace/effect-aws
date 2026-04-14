/**
 * @since 1.0.0
 */
import { KafkaConnectClient } from "@aws-sdk/client-kafkaconnect";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as KafkaConnectServiceConfig from "./KafkaConnectServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class KafkaConnectClientInstance extends Context.Service<KafkaConnectClientInstance, KafkaConnectClient>()(
  "@effect-aws/client-kafkaconnect/KafkaConnectClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  KafkaConnectServiceConfig.toKafkaConnectClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new KafkaConnectClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(KafkaConnectClientInstance, make);
