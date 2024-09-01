/**
 * @since 1.0.0
 */
import { ApiGatewayManagementApiClient } from "@aws-sdk/client-apigatewaymanagementapi";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultApiGatewayManagementApiClientConfigLayer,
  ApiGatewayManagementApiClientInstanceConfig,
} from "./ApiGatewayManagementApiClientInstanceConfig";

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
export const makeApiGatewayManagementApiClientInstance = Effect.map(
  ApiGatewayManagementApiClientInstanceConfig,
  (config) => new ApiGatewayManagementApiClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const ApiGatewayManagementApiClientInstanceLayer = Layer.effect(
  ApiGatewayManagementApiClientInstance,
  makeApiGatewayManagementApiClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultApiGatewayManagementApiClientInstanceLayer =
  ApiGatewayManagementApiClientInstanceLayer.pipe(
    Layer.provide(DefaultApiGatewayManagementApiClientConfigLayer),
  );
