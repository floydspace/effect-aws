/**
 * @since 1.0.0
 */
import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { APIGatewayService } from "./APIGatewayService.js";

/**
 * @since 1.0.0
 * @category api-gateway service config
 */
const currentAPIGatewayServiceConfig = globalValue(
  "@effect-aws/client-api-gateway/currentAPIGatewayServiceConfig",
  () => FiberRef.unsafeMake<APIGatewayService.Config>({}),
);

/**
 * @since 1.0.0
 * @category api-gateway service config
 */
export const withAPIGatewayServiceConfig: {
  (config: APIGatewayService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: APIGatewayService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: APIGatewayService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentAPIGatewayServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category api-gateway service config
 */
export const setAPIGatewayServiceConfig = (config: APIGatewayService.Config) =>
  Layer.locallyScoped(currentAPIGatewayServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toAPIGatewayClientConfig: Effect.Effect<APIGatewayClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentAPIGatewayServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
