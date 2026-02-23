/**
 * @since 1.0.0
 */
import { OpenSearchClient } from "@aws-sdk/client-opensearch";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as OpenSearchServiceConfig from "./OpenSearchServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class OpenSearchClientInstance extends Context.Tag(
  "@effect-aws/client-opensearch/OpenSearchClientInstance",
)<OpenSearchClientInstance, OpenSearchClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  OpenSearchServiceConfig.toOpenSearchClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new OpenSearchClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(OpenSearchClientInstance, make);
