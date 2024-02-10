/**
 * @since 1.0.0
 */
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultDynamoDBClientConfigLayer,
  DynamoDBClientInstanceConfig,
} from "./DynamoDBClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class DynamoDBClientInstance extends Context.Tag(
  "@effect-aws/client-dynamodb/DynamoDBClientInstance",
)<DynamoDBClientInstance, DynamoDBClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDynamoDBClientInstance = Effect.map(
  DynamoDBClientInstanceConfig,
  (config) => new DynamoDBClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DynamoDBClientInstanceLayer = Layer.effect(
  DynamoDBClientInstance,
  makeDynamoDBClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBClientInstanceLayer =
  DynamoDBClientInstanceLayer.pipe(
    Layer.provide(DefaultDynamoDBClientConfigLayer),
  );
