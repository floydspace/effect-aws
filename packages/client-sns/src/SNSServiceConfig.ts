/**
 * @since 1.0.0
 */
import type { SNSClientConfig } from "@aws-sdk/client-sns";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { SNSService } from "./SNSService.js";

/**
 * @since 1.0.0
 * @category sns service config
 */
const currentSNSServiceConfig = globalValue(
  "@effect-aws/client-sns/currentSNSServiceConfig",
  () => FiberRef.unsafeMake<SNSService.Config>({}),
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
    Effect.locally(effect, currentSNSServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category sns service config
 */
export const setSNSServiceConfig = (config: SNSService.Config) => Layer.locallyScoped(currentSNSServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSNSClientConfig: Effect.Effect<SNSClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentSNSServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
