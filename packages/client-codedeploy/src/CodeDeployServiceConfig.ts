/**
 * @since 1.0.0
 */
import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import type { CodeDeployService } from "./CodeDeployService.js";

/**
 * @since 1.0.0
 * @category codedeploy service config
 */
const currentCodeDeployServiceConfig = ServiceMap.Reference<CodeDeployService.Config>(
  "@effect-aws/client-codedeploy/currentCodeDeployServiceConfig",
  { defaultValue: () => ({}) },
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
    Effect.provideService(effect, currentCodeDeployServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category codedeploy service config
 */
export const setCodeDeployServiceConfig = (config: CodeDeployService.Config) =>
  Layer.succeed(currentCodeDeployServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCodeDeployClientConfig: Effect.Effect<CodeDeployClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentCodeDeployServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
