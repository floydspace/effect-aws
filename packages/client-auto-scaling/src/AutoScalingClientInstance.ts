/**
 * @since 1.0.0
 */
import { AutoScalingClient } from "@aws-sdk/client-auto-scaling";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as AutoScalingServiceConfig from "./AutoScalingServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class AutoScalingClientInstance extends ServiceMap.Service<AutoScalingClientInstance, AutoScalingClient>()(
  "@effect-aws/client-auto-scaling/AutoScalingClientInstance",
) {}

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
export const layer = Layer.effect(AutoScalingClientInstance, make);
