/**
 * @since 1.0.0
 */
import { ApiGatewayManagementApiClient } from "@aws-sdk/client-apigatewaymanagementapi";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
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
