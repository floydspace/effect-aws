/**
 * @since 1.0.0
 */
import { KafkaConnectClient } from "@aws-sdk/client-kafkaconnect";
import { Context, Effect, Layer } from "effect";
import * as KafkaConnectServiceConfig from "./KafkaConnectServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class KafkaConnectClientInstance extends Context.Tag(
  "@effect-aws/client-kafkaconnect/KafkaConnectClientInstance",
)<KafkaConnectClientInstance, KafkaConnectClient>() {}

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
export const layer = Layer.scoped(KafkaConnectClientInstance, make);
