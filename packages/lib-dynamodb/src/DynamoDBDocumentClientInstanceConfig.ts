/**
 * @since 1.0.0
 */
import type { TranslateConfig } from "@aws-sdk/lib-dynamodb";
import { Context, Effect, Layer } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export interface DynamoDBDocumentClientInstanceConfig {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const DynamoDBDocumentClientInstanceConfig = Context.Tag<
  DynamoDBDocumentClientInstanceConfig,
  TranslateConfig
>(Symbol.for("@effect-aws/lib-dynamodb/DynamoDBDocumentClientInstanceConfig"));

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultDynamoDBDocumentClientInstanceConfig: Effect.Effect<
  never,
  never,
  TranslateConfig
> = Effect.succeed({});

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBDocumentClientConfigLayer = Layer.effect(
  DynamoDBDocumentClientInstanceConfig,
  makeDefaultDynamoDBDocumentClientInstanceConfig,
);
