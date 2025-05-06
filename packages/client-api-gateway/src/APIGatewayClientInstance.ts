/**
 * @since 1.0.0
 */
import { APIGatewayClient } from "@aws-sdk/client-api-gateway";
import { Context, Effect, Layer } from "effect";
import * as APIGatewayServiceConfig from "./APIGatewayServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class APIGatewayClientInstance extends Context.Tag(
  "@effect-aws/client-api-gateway/APIGatewayClientInstance",
)<APIGatewayClientInstance, APIGatewayClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  APIGatewayServiceConfig.toAPIGatewayClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new APIGatewayClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(APIGatewayClientInstance, make);
