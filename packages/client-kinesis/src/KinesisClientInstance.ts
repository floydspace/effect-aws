/**
 * @since 1.0.0
 */
import { KinesisClient } from "@aws-sdk/client-kinesis";
import { Context, Effect, Layer } from "effect";
import {
  DefaultKinesisClientConfigLayer,
  KinesisClientInstanceConfig,
} from "./KinesisClientInstanceConfig.js";

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
export const makeKinesisClientInstance = Effect.flatMap(
  KinesisClientInstanceConfig,
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
export const KinesisClientInstanceLayer = Layer.scoped(
  KinesisClientInstance,
  makeKinesisClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultKinesisClientInstanceLayer =
  KinesisClientInstanceLayer.pipe(
    Layer.provide(DefaultKinesisClientConfigLayer),
  );
