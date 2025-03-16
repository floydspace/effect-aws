/**
 * @since 1.0.0
 */
import { FirehoseClient } from "@aws-sdk/client-firehose";
import { Context, Effect, Layer } from "effect";
import * as FirehoseServiceConfig from "./FirehoseServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class FirehoseClientInstance extends Context.Tag(
  "@effect-aws/client-firehose/FirehoseClientInstance",
)<FirehoseClientInstance, FirehoseClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  FirehoseServiceConfig.toFirehoseClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new FirehoseClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(FirehoseClientInstance, make);
