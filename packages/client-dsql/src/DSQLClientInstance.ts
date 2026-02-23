/**
 * @since 1.0.0
 */
import { DSQLClient } from "@aws-sdk/client-dsql";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as DSQLServiceConfig from "./DSQLServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DSQLClientInstance extends ServiceMap.Service<DSQLClientInstance, DSQLClient>()(
  "@effect-aws/client-dsql/DSQLClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  DSQLServiceConfig.toDSQLClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new DSQLClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(DSQLClientInstance, make);
