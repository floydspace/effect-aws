/**
 * @since 1.0.0
 */
import { FirehoseClient } from "@aws-sdk/client-firehose";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as FirehoseServiceConfig from "./FirehoseServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class FirehoseClientInstance extends Context.Service<FirehoseClientInstance, FirehoseClient>()(
  "@effect-aws/client-firehose/FirehoseClientInstance",
) {}

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
export const layer = Layer.effect(FirehoseClientInstance, make);
