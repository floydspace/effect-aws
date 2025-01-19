/**
 * @since 1.0.0
 */
import { SESClient } from "@aws-sdk/client-ses";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultSESClientConfigLayer,
  SESClientInstanceConfig,
} from "./SESClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class SESClientInstance extends Context.Tag(
  "@effect-aws/client-ses/SESClientInstance",
)<SESClientInstance, SESClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSESClientInstance = Effect.flatMap(
  SESClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SESClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SESClientInstanceLayer = Layer.scoped(
  SESClientInstance,
  makeSESClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSESClientInstanceLayer = SESClientInstanceLayer.pipe(
  Layer.provide(DefaultSESClientConfigLayer),
);
