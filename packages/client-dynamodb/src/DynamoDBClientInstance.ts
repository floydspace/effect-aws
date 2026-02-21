/**
 * @since 1.0.0
 */
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Effect, Layer, ServiceMap } from "effect";
import * as DynamoDBServiceConfig from "./DynamoDBServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DynamoDBClientInstance extends ServiceMap.Service<DynamoDBClientInstance, DynamoDBClient>()(
  "@effect-aws/client-dynamodb/DynamoDBClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  DynamoDBServiceConfig.toDynamoDBClientConfig,
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
export const layer = Layer.effect(DynamoDBClientInstance, make);
