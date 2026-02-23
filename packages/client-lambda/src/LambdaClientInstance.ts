/**
 * @since 1.0.0
 */
import { LambdaClient } from "@aws-sdk/client-lambda";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as LambdaServiceConfig from "./LambdaServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class LambdaClientInstance extends ServiceMap.Service<LambdaClientInstance, LambdaClient>()(
  "@effect-aws/client-lambda/LambdaClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  LambdaServiceConfig.toLambdaClientConfig,
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
export const layer = Layer.effect(LambdaClientInstance, make);
