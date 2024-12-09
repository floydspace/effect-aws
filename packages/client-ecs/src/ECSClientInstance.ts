/**
 * @since 1.0.0
 */
import { ECSClient } from "@aws-sdk/client-ecs";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultECSClientConfigLayer,
  ECSClientInstanceConfig,
} from "./ECSClientInstanceConfig";

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
export const makeECSClientInstance = Effect.map(
  ECSClientInstanceConfig,
  (config) => new ECSClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ECSClientInstanceLayer = Layer.effect(
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
