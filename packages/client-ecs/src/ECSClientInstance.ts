/**
 * @since 1.0.0
 */
import { ECSClient } from "@aws-sdk/client-ecs";
import { Context, Effect, Layer } from "effect";
import { DefaultECSClientConfigLayer, ECSClientInstanceConfig } from "./ECSClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ECSClientInstance extends Context.Tag(
  "@effect-aws/client-ecs/ECSClientInstance",
)<ECSClientInstance, ECSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeECSClientInstance = Effect.flatMap(
  ECSClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new ECSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ECSClientInstanceLayer = Layer.scoped(
  ECSClientInstance,
  makeECSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultECSClientInstanceLayer = ECSClientInstanceLayer.pipe(
  Layer.provide(DefaultECSClientConfigLayer),
);
