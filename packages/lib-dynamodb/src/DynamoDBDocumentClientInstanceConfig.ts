/**
 * @since 1.0.0
 */
import type { TranslateConfig } from "@aws-sdk/lib-dynamodb";
import { Context, Effect, Layer } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class DynamoDBDocumentClientInstanceConfig extends Context.Tag(
  "@effect-aws/lib-dynamodb/DynamoDBDocumentClientInstanceConfig",
)<DynamoDBDocumentClientInstanceConfig, TranslateConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultDynamoDBDocumentClientInstanceConfig: Effect.Effect<TranslateConfig> = Effect.succeed({});

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBDocumentClientConfigLayer = Layer.effect(
  DynamoDBDocumentClientInstanceConfig,
  makeDefaultDynamoDBDocumentClientInstanceConfig,
);
