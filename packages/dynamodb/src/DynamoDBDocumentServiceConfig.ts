/**
 * @since 1.0.0
 */
import type { TranslateConfig } from "@aws-sdk/lib-dynamodb";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";
import type { DynamoDBDocumentService } from "./DynamoDBDocumentService.js";

/**
 * @since 1.0.0
 * @category dynamodb service config
 */
const currentDynamoDBDocumentServiceConfig = ServiceMap.Reference<DynamoDBDocumentService.Config>(
  "@effect-aws/dynamodb/currentDynamoDBDocumentServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category dynamodb service config
 */
export const withDynamoDBDocumentServiceConfig: {
  (config: DynamoDBDocumentService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: DynamoDBDocumentService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: DynamoDBDocumentService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentDynamoDBDocumentServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category dynamodb service config
 */
export const setDynamoDBDocumentServiceConfig = (config: DynamoDBDocumentService.Config) =>
  Layer.succeed(currentDynamoDBDocumentServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toTranslateConfig: Effect.Effect<TranslateConfig> = currentDynamoDBDocumentServiceConfig.asEffect();
