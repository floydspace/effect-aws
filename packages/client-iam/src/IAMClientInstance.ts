import { IAMClient } from "@aws-sdk/client-iam";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultIAMClientConfigLayer,
  IAMClientInstanceConfig,
} from "./IAMClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export type IAMClientInstance = {
  readonly _: unique symbol;
};

/**
 * @since 1.0.0
 * @category tags
 */
export const IAMClientInstance = Context.Tag<IAMClientInstance, IAMClient>(
  Symbol.for("@effect-aws/client-iam/IAMClientInstance"),
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIAMClientInstance = Effect.map(
  IAMClientInstanceConfig,
  (config) => new IAMClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const IAMClientInstanceLayer = Layer.effect(
  IAMClientInstance,
  makeIAMClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultIAMClientInstanceLayer = IAMClientInstanceLayer.pipe(
  Layer.provide(DefaultIAMClientConfigLayer),
);
