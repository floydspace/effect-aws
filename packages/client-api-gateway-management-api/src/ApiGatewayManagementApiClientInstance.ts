/**
 * @since 1.0.0
 */
import { ApiGatewayManagementApiClient } from "@aws-sdk/client-apigatewaymanagementapi";
import { Effect, Layer, ServiceMap } from "effect";
import * as ApiGatewayManagementApiServiceConfig from "./ApiGatewayManagementApiServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ApiGatewayManagementApiClientInstance
  extends ServiceMap.Service<ApiGatewayManagementApiClientInstance, ApiGatewayManagementApiClient>()(
    "@effect-aws/client-api-gateway-management-api/ApiGatewayManagementApiClientInstance",
  )
{}

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
export const layer = Layer.effect(ApiGatewayManagementApiClientInstance, make);
