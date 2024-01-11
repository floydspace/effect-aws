import { ApiGatewayManagementApiClient } from "@aws-sdk/client-apigatewaymanagementapi";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  ApiGatewayManagementApiClientInstanceConfig,
  DefaultApiGatewayManagementApiClientConfigLayer,
} from "./ApiGatewayManagementApiClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export interface ApiGatewayManagementApiClientInstance {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const ApiGatewayManagementApiClientInstance = Context.Tag<
  ApiGatewayManagementApiClientInstance,
  ApiGatewayManagementApiClient
>(Symbol.for("@effect-aws/client-s3/ApiGatewayManagementApiClientInstance"));

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
