/**
 * @since 1.0.0
 */
import { KinesisClient } from "@aws-sdk/client-kinesis";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultKinesisClientConfigLayer,
  KinesisClientInstanceConfig,
} from "./KinesisClientInstanceConfig";

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
export const makeKinesisClientInstance = Effect.map(
  KinesisClientInstanceConfig,
  (config) => new KinesisClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const KinesisClientInstanceLayer = Layer.effect(
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
