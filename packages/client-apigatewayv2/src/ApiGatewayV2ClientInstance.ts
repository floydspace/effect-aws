/**
 * @since 1.0.0
 */
import { ApiGatewayV2Client } from "@aws-sdk/client-apigatewayv2";
import { Context, Effect, Layer } from "effect";
import * as ApiGatewayV2ServiceConfig from "./ApiGatewayV2ServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ApiGatewayV2ClientInstance extends Context.Tag(
  "@effect-aws/client-apigatewayv2/ApiGatewayV2ClientInstance",
)<ApiGatewayV2ClientInstance, ApiGatewayV2Client>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  ApiGatewayV2ServiceConfig.toApiGatewayV2ClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new ApiGatewayV2Client(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(ApiGatewayV2ClientInstance, make);
