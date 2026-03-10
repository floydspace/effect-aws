/**
 * @since 1.0.0
 */
import { DSQLClient } from "@aws-sdk/client-dsql";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as DSQLServiceConfig from "./DSQLServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DSQLClientInstance extends Context.Tag(
  "@effect-aws/client-dsql/DSQLClientInstance",
)<DSQLClientInstance, DSQLClient>() {}

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
export const layer = Layer.scoped(DSQLClientInstance, make);
