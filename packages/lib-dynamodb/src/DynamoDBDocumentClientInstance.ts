/**
 * @since 1.0.0
 */
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import {
  DefaultDynamoDBClientInstanceLayer,
  DynamoDBClientInstance,
} from "@effect-aws/client-dynamodb";
import { Context, Effect, Layer } from "effect";
import {
  DefaultDynamoDBDocumentClientConfigLayer,
  DynamoDBDocumentClientInstanceConfig,
} from "./DynamoDBDocumentClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export interface DynamoDBDocumentClientInstance {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const DynamoDBDocumentClientInstance = Context.Tag<
  DynamoDBDocumentClientInstance,
  DynamoDBDocumentClient
>(Symbol.for("@effect-aws/lib-dynamodb/DynamoDBDocumentClientInstance"));

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDynamoDBDocumentClientInstance = Effect.all([
  DynamoDBClientInstance,
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
  makeDynamoDBDocumentClientInstance,
).pipe(Layer.provide(DefaultDynamoDBClientInstanceLayer));

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBDocumentClientInstanceLayer =
  DynamoDBDocumentClientInstanceLayer.pipe(
    Layer.provide(DefaultDynamoDBDocumentClientConfigLayer),
    Layer.provide(DefaultDynamoDBClientInstanceLayer),
  );
