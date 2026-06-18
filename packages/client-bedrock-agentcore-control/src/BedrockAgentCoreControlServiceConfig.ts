/**
 * @since 1.0.0
 */
import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import * as FiberRef from "effect/FiberRef";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import * as Layer from "effect/Layer";
import type { BedrockAgentCoreControlService } from "./BedrockAgentCoreControlService.js";

/**
 * @since 1.0.0
 * @category bedrock-agentcore-control service config
 */
const currentBedrockAgentCoreControlServiceConfig = globalValue(
  "@effect-aws/client-bedrock-agentcore-control/currentBedrockAgentCoreControlServiceConfig",
  () => FiberRef.unsafeMake<BedrockAgentCoreControlService.Config>({}),
);

/**
 * @since 1.0.0
 * @category bedrock-agentcore-control service config
 */
export const withBedrockAgentCoreControlServiceConfig: {
  (config: BedrockAgentCoreControlService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockAgentCoreControlService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: BedrockAgentCoreControlService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentBedrockAgentCoreControlServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category bedrock-agentcore-control service config
 */
export const setBedrockAgentCoreControlServiceConfig = (config: BedrockAgentCoreControlService.Config) =>
  Layer.locallyScoped(currentBedrockAgentCoreControlServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toBedrockAgentCoreControlClientConfig: Effect.Effect<BedrockAgentCoreControlClientConfig> = Effect.gen(
  function*() {
    const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentBedrockAgentCoreControlServiceConfig);

    const logger = serviceLogger === true
      ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
      : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

    return { logger, ...config };
  },
);
