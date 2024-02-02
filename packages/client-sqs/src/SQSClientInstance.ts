/**
 * @since 1.0.0
 */
import { SQSClient } from "@aws-sdk/client-sqs";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultSQSClientConfigLayer,
  SQSClientInstanceConfig,
} from "./SQSClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export interface SQSClientInstance {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const SQSClientInstance = Context.Tag<SQSClientInstance, SQSClient>(
  Symbol.for("@effect-aws/client-sqs/SQSClientInstance"),
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSQSClientInstance = Effect.map(
  SQSClientInstanceConfig,
  (config) => new SQSClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SQSClientInstanceLayer = Layer.effect(
  SQSClientInstance,
  makeSQSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSQSClientInstanceLayer = SQSClientInstanceLayer.pipe(
  Layer.provide(DefaultSQSClientConfigLayer),
);
