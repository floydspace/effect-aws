/**
 * @since 1.0.0
 */
import { IAMClient } from "@aws-sdk/client-iam";
import { Effect, Layer, ServiceMap } from "effect";
import * as IAMServiceConfig from "./IAMServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IAMClientInstance extends ServiceMap.Service<IAMClientInstance, IAMClient>()(
  "@effect-aws/client-iam/IAMClientInstance",
) {}

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
export const layer = Layer.effect(IAMClientInstance, make);
