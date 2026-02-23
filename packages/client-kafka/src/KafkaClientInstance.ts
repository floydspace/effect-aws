/**
 * @since 1.0.0
 */
import { KafkaClient } from "@aws-sdk/client-kafka";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
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
