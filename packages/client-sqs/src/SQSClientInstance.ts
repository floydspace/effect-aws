/**
 * @since 1.0.0
 */
import { SQSClient } from "@aws-sdk/client-sqs";
import { Context, Effect, Layer } from "effect";
import * as SQSServiceConfig from "./SQSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SQSClientInstance extends Context.Tag(
  "@effect-aws/client-sqs/SQSClientInstance",
)<SQSClientInstance, SQSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SQSServiceConfig.toSQSClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SQSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(SQSClientInstance, make);
