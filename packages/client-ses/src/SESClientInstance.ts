/**
 * @since 1.0.0
 */
import { SESClient } from "@aws-sdk/client-ses";
import { Context, Effect, Layer } from "effect";
import * as SESServiceConfig from "./SESServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SESClientInstance extends Context.Tag(
  "@effect-aws/client-ses/SESClientInstance",
)<SESClientInstance, SESClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SESServiceConfig.toSESClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SESClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(SESClientInstance, make);
