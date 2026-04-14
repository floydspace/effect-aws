/**
 * @since 1.0.0
 */
import { ECSClient } from "@aws-sdk/client-ecs";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ECSServiceConfig from "./ECSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ECSClientInstance extends Context.Service<ECSClientInstance, ECSClient>()(
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
