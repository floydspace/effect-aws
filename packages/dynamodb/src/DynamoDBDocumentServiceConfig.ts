/**
 * @since 1.0.0
 */
import type { TranslateConfig } from "@aws-sdk/lib-dynamodb";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { DynamoDBDocumentService } from "./DynamoDBDocumentService.js";

/**
 * @since 1.0.0
 * @category dynamodb service config
 */
const currentDynamoDBDocumentServiceConfig = globalValue(
  "@effect-aws/lib-dynamodb/currentDynamoDBDocumentServiceConfig",
  () => FiberRef.unsafeMake<DynamoDBDocumentService.Config>({}),
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
    Effect.locally(effect, currentDynamoDBDocumentServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category dynamodb service config
 */
export const setDynamoDBDocumentServiceConfig = (config: DynamoDBDocumentService.Config) =>
  Layer.locallyScoped(currentDynamoDBDocumentServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toTranslateConfig: Effect.Effect<TranslateConfig> = FiberRef.get(currentDynamoDBDocumentServiceConfig);
