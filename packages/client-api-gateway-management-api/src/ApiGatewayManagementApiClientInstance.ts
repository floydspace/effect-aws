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
export const DefaultApiGatewayManagementApiClientInstanceLayer =
  ApiGatewayManagementApiClientInstanceLayer.pipe(
    Layer.provide(DefaultApiGatewayManagementApiClientConfigLayer),
  );
