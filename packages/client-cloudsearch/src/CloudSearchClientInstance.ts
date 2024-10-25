/**
 * @since 1.0.0
 */
import { CloudSearchClient } from "@aws-sdk/client-cloudsearch";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultCloudSearchClientConfigLayer,
  CloudSearchClientInstanceConfig,
} from "./CloudSearchClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudSearchClientInstance extends Context.Tag(
  "@effect-aws/client-cloudsearch/CloudSearchClientInstance",
)<CloudSearchClientInstance, CloudSearchClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudSearchClientInstance = Effect.map(
  CloudSearchClientInstanceConfig,
  (config) => new CloudSearchClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CloudSearchClientInstanceLayer = Layer.effect(
  CloudSearchClientInstance,
  makeCloudSearchClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCloudSearchClientInstanceLayer =
  CloudSearchClientInstanceLayer.pipe(
    Layer.provide(DefaultCloudSearchClientConfigLayer),
  );
