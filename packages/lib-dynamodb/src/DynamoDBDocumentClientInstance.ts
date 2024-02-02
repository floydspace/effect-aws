import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClientInstance } from "@effect-aws/client-dynamodb";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
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
export const makeDynamoDBDocumentClientInstance: Effect.Effect<
  DynamoDBDocumentClientInstanceConfig | DynamoDBClientInstance,
  never,
  any
> = Effect.all([
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
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBDocumentClientInstanceLayer =
  DynamoDBDocumentClientInstanceLayer.pipe(
    Layer.provide(DefaultDynamoDBDocumentClientConfigLayer),
  );
