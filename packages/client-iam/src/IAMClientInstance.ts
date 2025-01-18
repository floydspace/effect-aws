/**
 * @since 1.0.0
 */
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
export class IAMClientInstance extends Context.Tag(
  "@effect-aws/client-iam/IAMClientInstance",
)<IAMClientInstance, IAMClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIAMClientInstance = Effect.flatMap(
  IAMClientInstanceConfig,
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
export const IAMClientInstanceLayer = Layer.scoped(
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
