/**
 * @since 1.0.0
 */
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClientInstance } from "@effect-aws/client-dynamodb";
import { Context, Effect, Layer } from "effect";
import {
  DefaultDynamoDBDocumentClientConfigLayer,
  DynamoDBDocumentClientInstanceConfig,
} from "./DynamoDBDocumentClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DynamoDBDocumentClientInstance extends Context.Tag(
  "@effect-aws/lib-dynamodb/DynamoDBDocumentClientInstance",
)<DynamoDBDocumentClientInstance, DynamoDBDocumentClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.all([
  DynamoDBClientInstance.DynamoDBClientInstance,
  DynamoDBDocumentClientInstanceConfig,
]).pipe(
  Effect.map(([client, config]) => DynamoDBDocumentClient.from(client, config)),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DynamoDBDocumentClientInstanceLayer = Layer.effect(
  DynamoDBDocumentClientInstance,
  make,
).pipe(Layer.provide(DynamoDBClientInstance.layer));

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBDocumentClientInstanceLayer = DynamoDBDocumentClientInstanceLayer.pipe(
  Layer.provide(DefaultDynamoDBDocumentClientConfigLayer),
);
