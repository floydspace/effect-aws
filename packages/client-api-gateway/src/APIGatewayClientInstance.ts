/**
 * @since 1.0.0
 */
import { APIGatewayClient } from "@aws-sdk/client-api-gateway";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
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
