/**
 * @since 1.0.0
 */
import { ApiGatewayManagementApiClient } from "@aws-sdk/client-apigatewaymanagementapi";
import { Context, Effect, Layer } from "effect";
import {
  ApiGatewayManagementApiClientInstanceConfig,
  DefaultApiGatewayManagementApiClientConfigLayer,
} from "./ApiGatewayManagementApiClientInstanceConfig.js";

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
export const makeApiGatewayManagementApiClientInstance = Effect.flatMap(
  ApiGatewayManagementApiClientInstanceConfig,
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
export const ApiGatewayManagementApiClientInstanceLayer = Layer.scoped(
  ApiGatewayManagementApiClientInstance,
  makeApiGatewayManagementApiClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultApiGatewayManagementApiClientInstanceLayer = ApiGatewayManagementApiClientInstanceLayer.pipe(
  Layer.provide(DefaultApiGatewayManagementApiClientConfigLayer),
);
