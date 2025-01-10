/**
 * @since 1.0.0
 */
import { SFNClient } from "@aws-sdk/client-sfn";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultSFNClientConfigLayer,
  SFNClientInstanceConfig,
} from "./SFNClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class SFNClientInstance extends Context.Tag(
  "@effect-aws/client-sfn/SFNClientInstance",
)<SFNClientInstance, SFNClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSFNClientInstance = Effect.flatMap(
  SFNClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SFNClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SFNClientInstanceLayer = Layer.scoped(
  SFNClientInstance,
  makeSFNClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSFNClientInstanceLayer = SFNClientInstanceLayer.pipe(
  Layer.provide(DefaultSFNClientConfigLayer),
);
