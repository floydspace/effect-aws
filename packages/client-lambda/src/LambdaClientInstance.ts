import { LambdaClient } from "@aws-sdk/client-lambda";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultLambdaClientConfigLayer,
  LambdaClientInstanceConfig,
} from "./LambdaClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export interface LambdaClientInstance {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const LambdaClientInstance = Context.Tag<
  LambdaClientInstance,
  LambdaClient
>(Symbol.for("@effect-aws/client-lambda/LambdaClientInstance"));

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeLambdaClientInstance = Effect.map(
  LambdaClientInstanceConfig,
  (config) => new LambdaClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const LambdaClientInstanceLayer = Layer.effect(
  LambdaClientInstance,
  makeLambdaClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultLambdaClientInstanceLayer = LambdaClientInstanceLayer.pipe(
  Layer.provide(DefaultLambdaClientConfigLayer),
);
