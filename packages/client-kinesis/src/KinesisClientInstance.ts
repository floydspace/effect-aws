/**
 * @since 1.0.0
 */
import { KinesisClient } from "@aws-sdk/client-kinesis";
import { Context, Effect, Layer } from "effect";
import * as KinesisServiceConfig from "./KinesisServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class KinesisClientInstance extends Context.Tag(
  "@effect-aws/client-kinesis/KinesisClientInstance",
)<KinesisClientInstance, KinesisClient>() {}

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
export const layer = Layer.scoped(KinesisClientInstance, make);
