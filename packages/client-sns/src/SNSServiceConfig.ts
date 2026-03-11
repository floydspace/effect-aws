/**
 * @since 1.0.0
 */
import type { SNSClientConfig } from "@aws-sdk/client-sns";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import type { SNSService } from "./SNSService.js";

/**
 * @since 1.0.0
 * @category sns service config
 */
const currentSNSServiceConfig = ServiceMap.Reference<SNSService.Config>(
  "@effect-aws/client-sns/currentSNSServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category sns service config
 */
export const withSNSServiceConfig: {
  (config: SNSService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SNSService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SNSService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentSNSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category sns service config
 */
export const setSNSServiceConfig = (config: SNSService.Config) => Layer.succeed(currentSNSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSNSClientConfig: Effect.Effect<SNSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSNSServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
