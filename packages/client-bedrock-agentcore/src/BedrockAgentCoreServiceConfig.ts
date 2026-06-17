/**
 * @since 1.0.0
 */
import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import * as FiberRef from "effect/FiberRef";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import * as Layer from "effect/Layer";
import type { BedrockAgentCoreService } from "./BedrockAgentCoreService.js";

/**
 * @since 1.0.0
 * @category bedrock-agentcore service config
 */
const currentBedrockAgentCoreServiceConfig = globalValue(
  "@effect-aws/client-bedrock-agentcore/currentBedrockAgentCoreServiceConfig",
  () => FiberRef.unsafeMake<BedrockAgentCoreService.Config>({}),
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
    Effect.locally(effect, currentBedrockAgentCoreServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category bedrock-agentcore service config
 */
export const setBedrockAgentCoreServiceConfig = (config: BedrockAgentCoreService.Config) =>
  Layer.locallyScoped(currentBedrockAgentCoreServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toBedrockAgentCoreClientConfig: Effect.Effect<BedrockAgentCoreClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentBedrockAgentCoreServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
