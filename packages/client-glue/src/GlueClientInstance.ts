/**
 * @since 1.0.0
 */
import { GlueClient } from "@aws-sdk/client-glue";
import { Context, Effect, Layer } from "effect";
import * as GlueServiceConfig from "./GlueServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class GlueClientInstance extends Context.Tag(
  "@effect-aws/client-glue/GlueClientInstance",
)<GlueClientInstance, GlueClient>() {}

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
export const layer = Layer.scoped(GlueClientInstance, make);
