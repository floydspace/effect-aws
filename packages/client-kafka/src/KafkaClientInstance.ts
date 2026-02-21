/**
 * @since 1.0.0
 */
import { KafkaClient } from "@aws-sdk/client-kafka";
import { Effect, Layer, ServiceMap } from "effect";
import * as KafkaServiceConfig from "./KafkaServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class KafkaClientInstance extends ServiceMap.Service<KafkaClientInstance, KafkaClient>()(
  "@effect-aws/client-kafka/KafkaClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  KafkaServiceConfig.toKafkaClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new KafkaClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(KafkaClientInstance, make);
