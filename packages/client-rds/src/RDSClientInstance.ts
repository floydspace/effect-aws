/**
 * @since 1.0.0
 */
import { RDSClient } from "@aws-sdk/client-rds";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultRDSClientConfigLayer,
  RDSClientInstanceConfig,
} from "./RDSClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class RDSClientInstance extends Context.Tag(
  "@effect-aws/client-rds/RDSClientInstance",
)<RDSClientInstance, RDSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeRDSClientInstance = Effect.map(
  RDSClientInstanceConfig,
  (config) => new RDSClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const RDSClientInstanceLayer = Layer.effect(
  RDSClientInstance,
  makeRDSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultRDSClientInstanceLayer = RDSClientInstanceLayer.pipe(
  Layer.provide(DefaultRDSClientConfigLayer),
);
