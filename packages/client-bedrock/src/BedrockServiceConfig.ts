/**
 * @since 1.0.0
 */
import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { BedrockService } from "./BedrockService.js";

/**
 * @since 1.0.0
 * @category bedrock service config
 */
const currentBedrockServiceConfig = ServiceMap.Reference<BedrockService.Config>(
  "@effect-aws/client-bedrock/currentBedrockServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category bedrock service config
 */
export const withBedrockServiceConfig: {
  (config: BedrockService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentBedrockServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category bedrock service config
 */
export const setBedrockServiceConfig = (config: BedrockService.Config) =>
  Layer.succeed(currentBedrockServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toBedrockClientConfig: Effect.Effect<BedrockClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentBedrockServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
