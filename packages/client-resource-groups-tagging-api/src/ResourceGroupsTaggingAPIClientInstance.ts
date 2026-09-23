/**
 * @since 1.0.0
 */
import { ResourceGroupsTaggingAPIClient } from "@aws-sdk/client-resource-groups-tagging-api";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ResourceGroupsTaggingAPIServiceConfig from "./ResourceGroupsTaggingAPIServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ResourceGroupsTaggingAPIClientInstance
  extends Context.Service<ResourceGroupsTaggingAPIClientInstance, ResourceGroupsTaggingAPIClient>()(
    "@effect-aws/client-resource-groups-tagging-api/ResourceGroupsTaggingAPIClientInstance",
  )
{}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  ResourceGroupsTaggingAPIServiceConfig.toResourceGroupsTaggingAPIClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new ResourceGroupsTaggingAPIClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(ResourceGroupsTaggingAPIClientInstance, make);
