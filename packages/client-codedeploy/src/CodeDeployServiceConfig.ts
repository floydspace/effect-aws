/**
 * @since 1.0.0
 */
import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { CodeDeployService } from "./CodeDeployService.js";

/**
 * @since 1.0.0
 * @category codedeploy service config
 */
const currentCodeDeployServiceConfig = globalValue(
  "@effect-aws/client-codedeploy/currentCodeDeployServiceConfig",
  () => FiberRef.unsafeMake<CodeDeployService.Config>({}),
);

/**
 * @since 1.0.0
 * @category codedeploy service config
 */
export const withCodeDeployServiceConfig: {
  (config: CodeDeployService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CodeDeployService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CodeDeployService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentCodeDeployServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category codedeploy service config
 */
export const setCodeDeployServiceConfig = (config: CodeDeployService.Config) =>
  Layer.locallyScoped(currentCodeDeployServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCodeDeployClientConfig: Effect.Effect<CodeDeployClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentCodeDeployServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
