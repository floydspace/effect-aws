/**
 * @since 1.0.0
 */
import { IAMClient } from "@aws-sdk/client-iam";
import { Context, Effect, Layer } from "effect";
import * as IAMServiceConfig from "./IAMServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IAMClientInstance extends Context.Tag(
  "@effect-aws/client-iam/IAMClientInstance",
)<IAMClientInstance, IAMClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  IAMServiceConfig.toIAMClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new IAMClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(IAMClientInstance, make);
