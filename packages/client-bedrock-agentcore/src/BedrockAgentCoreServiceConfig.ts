/**
 * @since 1.0.0
 */
import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import type { BedrockAgentCoreService } from "./BedrockAgentCoreService.js";

/**
 * @since 1.0.0
 * @category bedrock-agentcore service config
 */
const currentBedrockAgentCoreServiceConfig = Context.Reference<BedrockAgentCoreService.Config>(
  "@effect-aws/client-bedrock-agentcore/currentBedrockAgentCoreServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category bedrock-agentcore service config
 */
export const withBedrockAgentCoreServiceConfig: {
  (config: BedrockAgentCoreService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockAgentCoreService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockAgentCoreService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentBedrockAgentCoreServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category bedrock-agentcore service config
 */
export const setBedrockAgentCoreServiceConfig = (config: BedrockAgentCoreService.Config) =>
  Layer.succeed(currentBedrockAgentCoreServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toBedrockAgentCoreClientConfig: Effect.Effect<BedrockAgentCoreClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentBedrockAgentCoreServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
