/**
 * @since 1.0.0
 */
import { KinesisClient } from "@aws-sdk/client-kinesis";
import { Effect, Layer, ServiceMap } from "effect";
import * as KinesisServiceConfig from "./KinesisServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class KinesisClientInstance extends ServiceMap.Service<KinesisClientInstance, KinesisClient>()(
  "@effect-aws/client-kinesis/KinesisClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  KinesisServiceConfig.toKinesisClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new KinesisClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(KinesisClientInstance, make);
