/**
 * @since 1.0.0
 */
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClientInstance } from "@effect-aws/client-dynamodb";
import { Effect, Layer, ServiceMap } from "effect";
import * as DynamoDBDocumentServiceConfig from "./DynamoDBDocumentServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DynamoDBDocumentClientInstance
  extends ServiceMap.Service<DynamoDBDocumentClientInstance, DynamoDBDocumentClient>()(
    "@effect-aws/dynamodb/DynamoDBDocumentClientInstance",
  )
{}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.all([
  DynamoDBClientInstance.DynamoDBClientInstance.asEffect(),
  DynamoDBDocumentServiceConfig.toTranslateConfig,
]).pipe(
  Effect.map(([client, config]) => DynamoDBDocumentClient.from(client, config)),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(DynamoDBDocumentClientInstance, make).pipe(
  Layer.provide(DynamoDBClientInstance.layer),
);
