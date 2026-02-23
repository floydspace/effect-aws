/**
 * @since 1.0.0
 */
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import * as DynamoDBClientInstance from "@effect-aws/client-dynamodb/DynamoDBClientInstance";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as DynamoDBDocumentServiceConfig from "./DynamoDBDocumentServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DynamoDBDocumentClientInstance extends Context.Tag(
  "@effect-aws/dynamodb/DynamoDBDocumentClientInstance",
)<DynamoDBDocumentClientInstance, DynamoDBDocumentClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.all([
  DynamoDBClientInstance.DynamoDBClientInstance,
  DynamoDBDocumentServiceConfig.toTranslateConfig,
]).pipe(
  Effect.map(([client, config]) => DynamoDBDocumentClient.from(client, config)),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(DynamoDBDocumentClientInstance, make).pipe(
  Layer.provide(DynamoDBClientInstance.layer),
);
