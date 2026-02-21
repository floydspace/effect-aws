/**
 * @since 1.0.0
 */
import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { DynamoDBService } from "./DynamoDBService.js";

/**
 * @since 1.0.0
 * @category dynamodb service config
 */
const currentDynamoDBServiceConfig = ServiceMap.Reference<DynamoDBService.Config>(
  "@effect-aws/client-dynamodb/currentDynamoDBServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category dynamodb service config
 */
export const withDynamoDBServiceConfig: {
  (config: DynamoDBService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: DynamoDBService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: DynamoDBService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentDynamoDBServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category dynamodb service config
 */
export const setDynamoDBServiceConfig = (config: DynamoDBService.Config) =>
  Layer.succeed(currentDynamoDBServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toDynamoDBClientConfig: Effect.Effect<DynamoDBClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentDynamoDBServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
