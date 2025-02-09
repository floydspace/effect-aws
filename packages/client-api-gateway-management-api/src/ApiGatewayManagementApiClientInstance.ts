/**
 * @since 1.0.0
 */
import { ApiGatewayManagementApiClient } from "@aws-sdk/client-apigatewaymanagementapi";
import { Context, Effect, Layer } from "effect";
import * as ApiGatewayManagementApiServiceConfig from "./ApiGatewayManagementApiServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ApiGatewayManagementApiClientInstance extends Context.Tag(
  "@effect-aws/client-api-gateway-management-api/ApiGatewayManagementApiClientInstance",
)<ApiGatewayManagementApiClientInstance, ApiGatewayManagementApiClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  ApiGatewayManagementApiServiceConfig.toApiGatewayManagementApiClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new ApiGatewayManagementApiClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(ApiGatewayManagementApiClientInstance, make);
