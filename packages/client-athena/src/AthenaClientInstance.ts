/**
 * @since 1.0.0
 */
import { AthenaClient } from "@aws-sdk/client-athena";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as AthenaServiceConfig from "./AthenaServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class AthenaClientInstance extends Context.Tag(
  "@effect-aws/client-athena/AthenaClientInstance",
)<AthenaClientInstance, AthenaClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  AthenaServiceConfig.toAthenaClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new AthenaClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(AthenaClientInstance, make);
