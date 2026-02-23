/**
 * @since 1.0.0
 */
import { GlueClient } from "@aws-sdk/client-glue";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
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
