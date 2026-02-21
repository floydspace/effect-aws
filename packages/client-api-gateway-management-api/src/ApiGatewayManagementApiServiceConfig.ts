/**
 * @since 1.0.0
 */
import type { ApiGatewayManagementApiClientConfig } from "@aws-sdk/client-apigatewaymanagementapi";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { ApiGatewayManagementApiService } from "./ApiGatewayManagementApiService.js";

/**
 * @since 1.0.0
 * @category api-gateway-management-api service config
 */
const currentApiGatewayManagementApiServiceConfig = ServiceMap.Reference<ApiGatewayManagementApiService.Config>(
  "@effect-aws/client-api-gateway-management-api/currentApiGatewayManagementApiServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category api-gateway-management-api service config
 */
export const withApiGatewayManagementApiServiceConfig: {
  (config: ApiGatewayManagementApiService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ApiGatewayManagementApiService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ApiGatewayManagementApiService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentApiGatewayManagementApiServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category api-gateway-management-api service config
 */
export const setApiGatewayManagementApiServiceConfig = (config: ApiGatewayManagementApiService.Config) =>
  Layer.succeed(currentApiGatewayManagementApiServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toApiGatewayManagementApiClientConfig: Effect.Effect<ApiGatewayManagementApiClientConfig> = Effect.gen(
  function*() {
    const { logger: serviceLogger, ...config } = yield* currentApiGatewayManagementApiServiceConfig;

    const logger = serviceLogger === true
      ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
      : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

    return { logger, ...config };
  },
);
