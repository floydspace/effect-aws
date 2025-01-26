/**
 * @since 1.0.0
 */
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Context, Effect, Layer } from "effect";
import { DefaultDynamoDBClientConfigLayer, DynamoDBClientInstanceConfig } from "./DynamoDBClientInstanceConfig.js";

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
export const makeDynamoDBClientInstance = Effect.flatMap(
  DynamoDBClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new DynamoDBClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DynamoDBClientInstanceLayer = Layer.scoped(
  DynamoDBClientInstance,
  makeDynamoDBClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultDynamoDBClientInstanceLayer = DynamoDBClientInstanceLayer.pipe(
  Layer.provide(DefaultDynamoDBClientConfigLayer),
);
