/**
 * @since 1.0.0
 */
import { KMSClient } from "@aws-sdk/client-kms";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultKMSClientConfigLayer,
  KMSClientInstanceConfig,
} from "./KMSClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class KMSClientInstance extends Context.Tag(
  "@effect-aws/client-kms/KMSClientInstance",
)<KMSClientInstance, KMSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeKMSClientInstance = Effect.map(
  KMSClientInstanceConfig,
  (config) => new KMSClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const KMSClientInstanceLayer = Layer.effect(
  KMSClientInstance,
  makeKMSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultKMSClientInstanceLayer = KMSClientInstanceLayer.pipe(
  Layer.provide(DefaultKMSClientConfigLayer),
);
