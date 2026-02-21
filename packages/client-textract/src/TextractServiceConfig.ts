/**
 * @since 1.0.0
 */
import type { TextractClientConfig } from "@aws-sdk/client-textract";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { TextractService } from "./TextractService.js";

/**
 * @since 1.0.0
 * @category textract service config
 */
const currentTextractServiceConfig = ServiceMap.Reference<TextractService.Config>(
  "@effect-aws/client-textract/currentTextractServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category textract service config
 */
export const withTextractServiceConfig: {
  (config: TextractService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TextractService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TextractService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentTextractServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category textract service config
 */
export const setTextractServiceConfig = (config: TextractService.Config) =>
  Layer.succeed(currentTextractServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toTextractClientConfig: Effect.Effect<TextractClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentTextractServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
