/**
 * @since 1.0.0
 */
import { LambdaClient } from "@aws-sdk/client-lambda";
import { Context, Effect, Layer } from "effect";
import { DefaultLambdaClientConfigLayer, LambdaClientInstanceConfig } from "./LambdaClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class LambdaClientInstance extends Context.Tag(
  "@effect-aws/client-lambda/LambdaClientInstance",
)<LambdaClientInstance, LambdaClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeLambdaClientInstance = Effect.flatMap(
  LambdaClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new LambdaClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const LambdaClientInstanceLayer = Layer.scoped(
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
