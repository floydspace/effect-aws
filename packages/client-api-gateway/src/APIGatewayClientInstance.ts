/**
 * @since 1.0.0
 */
import { APIGatewayClient } from "@aws-sdk/client-api-gateway";
import { Effect, Layer, ServiceMap } from "effect";
import * as APIGatewayServiceConfig from "./APIGatewayServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class APIGatewayClientInstance extends ServiceMap.Service<APIGatewayClientInstance, APIGatewayClient>()(
  "@effect-aws/client-api-gateway/APIGatewayClientInstance",
) {}

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
export const layer = Layer.effect(APIGatewayClientInstance, make);
