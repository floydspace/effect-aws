/**
 * @since 1.0.0
 */
import { GlueClient } from "@aws-sdk/client-glue";
import { Effect, Layer, ServiceMap } from "effect";
import * as GlueServiceConfig from "./GlueServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class GlueClientInstance extends ServiceMap.Service<GlueClientInstance, GlueClient>()(
  "@effect-aws/client-glue/GlueClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  GlueServiceConfig.toGlueClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new GlueClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(GlueClientInstance, make);
