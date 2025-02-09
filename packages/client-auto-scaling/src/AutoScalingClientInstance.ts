/**
 * @since 1.0.0
 */
import { AutoScalingClient } from "@aws-sdk/client-auto-scaling";
import { Context, Effect, Layer } from "effect";
import * as AutoScalingServiceConfig from "./AutoScalingServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class AutoScalingClientInstance extends Context.Tag(
  "@effect-aws/client-auto-scaling/AutoScalingClientInstance",
)<AutoScalingClientInstance, AutoScalingClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  AutoScalingServiceConfig.toAutoScalingClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new AutoScalingClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(AutoScalingClientInstance, make);
