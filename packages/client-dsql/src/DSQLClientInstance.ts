/**
 * @since 1.0.0
 */
import { DSQLClient } from "@aws-sdk/client-dsql";
import { Context, Effect, Layer } from "effect";
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
