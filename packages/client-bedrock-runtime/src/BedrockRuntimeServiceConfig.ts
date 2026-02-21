/**
 * @since 1.0.0
 */
import type { BedrockRuntimeClientConfig } from "@aws-sdk/client-bedrock-runtime";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { BedrockRuntimeService } from "./BedrockRuntimeService.js";

/**
 * @since 1.0.0
 * @category bedrock-runtime service config
 */
const currentBedrockRuntimeServiceConfig = ServiceMap.Reference<BedrockRuntimeService.Config>(
  "@effect-aws/client-bedrock-runtime/currentBedrockRuntimeServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category bedrock-runtime service config
 */
export const withBedrockRuntimeServiceConfig: {
  (config: BedrockRuntimeService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockRuntimeService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockRuntimeService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentBedrockRuntimeServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category bedrock-runtime service config
 */
export const setBedrockRuntimeServiceConfig = (config: BedrockRuntimeService.Config) =>
  Layer.succeed(currentBedrockRuntimeServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toBedrockRuntimeClientConfig: Effect.Effect<BedrockRuntimeClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentBedrockRuntimeServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
