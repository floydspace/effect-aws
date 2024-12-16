/**
 * @since 1.0.0
 */
import { ECRClient } from "@aws-sdk/client-ecr";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultECRClientConfigLayer,
  ECRClientInstanceConfig,
} from "./ECRClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class ECRClientInstance extends Context.Tag(
  "@effect-aws/client-ecr/ECRClientInstance",
)<ECRClientInstance, ECRClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeECRClientInstance = Effect.map(
  ECRClientInstanceConfig,
  (config) => new ECRClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ECRClientInstanceLayer = Layer.effect(
  ECRClientInstance,
  makeECRClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultECRClientInstanceLayer = ECRClientInstanceLayer.pipe(
  Layer.provide(DefaultECRClientConfigLayer),
);
