/**
 * @since 1.0.0
 */
import { OpenSearchServerlessClient } from "@aws-sdk/client-opensearchserverless";
import { Context, Effect, Layer } from "effect";
import {
  DefaultOpenSearchServerlessClientConfigLayer,
  OpenSearchServerlessClientInstanceConfig,
} from "./OpenSearchServerlessClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class OpenSearchServerlessClientInstance extends Context.Tag(
  "@effect-aws/client-opensearch-serverless/OpenSearchServerlessClientInstance",
)<OpenSearchServerlessClientInstance, OpenSearchServerlessClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeOpenSearchServerlessClientInstance = Effect.flatMap(
  OpenSearchServerlessClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new OpenSearchServerlessClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const OpenSearchServerlessClientInstanceLayer = Layer.scoped(
  OpenSearchServerlessClientInstance,
  makeOpenSearchServerlessClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultOpenSearchServerlessClientInstanceLayer =
  OpenSearchServerlessClientInstanceLayer.pipe(
    Layer.provide(DefaultOpenSearchServerlessClientConfigLayer),
  );
