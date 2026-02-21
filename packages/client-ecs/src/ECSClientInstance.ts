/**
 * @since 1.0.0
 */
import { ECSClient } from "@aws-sdk/client-ecs";
import { Effect, Layer, ServiceMap } from "effect";
import * as ECSServiceConfig from "./ECSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ECSClientInstance extends ServiceMap.Service<ECSClientInstance, ECSClient>()(
  "@effect-aws/client-ecs/ECSClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  ECSServiceConfig.toECSClientConfig,
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
export const layer = Layer.effect(ECSClientInstance, make);
