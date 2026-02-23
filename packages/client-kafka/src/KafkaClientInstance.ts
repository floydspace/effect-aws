/**
 * @since 1.0.0
 */
import { KafkaClient } from "@aws-sdk/client-kafka";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as KafkaServiceConfig from "./KafkaServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class KafkaClientInstance extends Context.Tag(
  "@effect-aws/client-kafka/KafkaClientInstance",
)<KafkaClientInstance, KafkaClient>() {}

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
export const layer = Layer.scoped(KafkaClientInstance, make);
