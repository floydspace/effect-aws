/**
 * @since 1.0.0
 */
import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { ApiGatewayV2Service } from "./ApiGatewayV2Service.js";

/**
 * @since 1.0.0
 * @category api-gateway-v2 service config
 */
const currentApiGatewayV2ServiceConfig = globalValue(
  "@effect-aws/client-api-gateway-v2/currentApiGatewayV2ServiceConfig",
  () => FiberRef.unsafeMake<ApiGatewayV2Service.Config>({}),
);

/**
 * @since 1.0.0
 * @category api-gateway-v2 service config
 */
export const withApiGatewayV2ServiceConfig: {
  (config: ApiGatewayV2Service.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ApiGatewayV2Service.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ApiGatewayV2Service.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentApiGatewayV2ServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category api-gateway-v2 service config
 */
export const setApiGatewayV2ServiceConfig = (config: ApiGatewayV2Service.Config) =>
  Layer.locallyScoped(currentApiGatewayV2ServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toApiGatewayV2ClientConfig: Effect.Effect<ApiGatewayV2ClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentApiGatewayV2ServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
