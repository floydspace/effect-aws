/**
 * @since 1.0.0
 */
import { OpenSearchServerlessClient } from "@aws-sdk/client-opensearchserverless";
import { Effect, Layer, ServiceMap } from "effect";
import * as OpenSearchServerlessServiceConfig from "./OpenSearchServerlessServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class OpenSearchServerlessClientInstance
  extends ServiceMap.Service<OpenSearchServerlessClientInstance, OpenSearchServerlessClient>()(
    "@effect-aws/client-opensearch-serverless/OpenSearchServerlessClientInstance",
  )
{}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  OpenSearchServerlessServiceConfig.toOpenSearchServerlessClientConfig,
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
export const layer = Layer.effect(OpenSearchServerlessClientInstance, make);
