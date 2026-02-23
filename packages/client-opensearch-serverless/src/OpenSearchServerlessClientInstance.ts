/**
 * @since 1.0.0
 */
import { OpenSearchServerlessClient } from "@aws-sdk/client-opensearchserverless";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
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
