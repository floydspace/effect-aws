/**
 * @since 1.0.0
 */
import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import * as FiberRef from "effect/FiberRef";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import * as Layer from "effect/Layer";
import type { BedrockAgentService } from "./BedrockAgentService.js";

/**
 * @since 1.0.0
 * @category bedrock-agent service config
 */
const currentBedrockAgentServiceConfig = globalValue(
  "@effect-aws/client-bedrock-agent/currentBedrockAgentServiceConfig",
  () => FiberRef.unsafeMake<BedrockAgentService.Config>({}),
);

/**
 * @since 1.0.0
 * @category bedrock-agent service config
 */
export const withBedrockAgentServiceConfig: {
  (config: BedrockAgentService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockAgentService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockAgentService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentBedrockAgentServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category bedrock-agent service config
 */
export const setBedrockAgentServiceConfig = (config: BedrockAgentService.Config) =>
  Layer.locallyScoped(currentBedrockAgentServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toBedrockAgentClientConfig: Effect.Effect<BedrockAgentClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentBedrockAgentServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
