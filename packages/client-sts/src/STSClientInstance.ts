/**
 * @since 1.0.0
 */
import { STSClient } from "@aws-sdk/client-sts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultSTSClientConfigLayer,
  STSClientInstanceConfig,
} from "./STSClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class STSClientInstance extends Context.Tag(
  "@effect-aws/client-sts/STSClientInstance",
)<STSClientInstance, STSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSTSClientInstance = Effect.map(
  STSClientInstanceConfig,
  (config) => new STSClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const STSClientInstanceLayer = Layer.effect(
  STSClientInstance,
  makeSTSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSTSClientInstanceLayer = STSClientInstanceLayer.pipe(
  Layer.provide(DefaultSTSClientConfigLayer),
);
