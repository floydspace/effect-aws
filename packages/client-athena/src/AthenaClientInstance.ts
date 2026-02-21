/**
 * @since 1.0.0
 */
import { AthenaClient } from "@aws-sdk/client-athena";
import { Effect, Layer, ServiceMap } from "effect";
import * as AthenaServiceConfig from "./AthenaServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class AthenaClientInstance extends ServiceMap.Service<AthenaClientInstance, AthenaClient>()(
  "@effect-aws/client-athena/AthenaClientInstance",
) {}

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
export const layer = Layer.effect(AthenaClientInstance, make);
