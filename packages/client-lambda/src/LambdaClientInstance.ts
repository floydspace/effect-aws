/**
 * @since 1.0.0
 */
import { LambdaClient } from "@aws-sdk/client-lambda";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as LambdaServiceConfig from "./LambdaServiceConfig.js";

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
export const layer = Layer.scoped(LambdaClientInstance, make);
