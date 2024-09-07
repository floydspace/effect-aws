/**
 * @since 1.0.0
 */
import { SSMClient } from "@aws-sdk/client-ssm";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultSSMClientConfigLayer,
  SSMClientInstanceConfig,
} from "./SSMClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class SSMClientInstance extends Context.Tag(
  "@effect-aws/client-ssm/SSMClientInstance",
)<SSMClientInstance, SSMClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSSMClientInstance = Effect.map(
  SSMClientInstanceConfig,
  (config) => new SSMClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SSMClientInstanceLayer = Layer.effect(
  SSMClientInstance,
  makeSSMClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSSMClientInstanceLayer = SSMClientInstanceLayer.pipe(
  Layer.provide(DefaultSSMClientConfigLayer),
);
