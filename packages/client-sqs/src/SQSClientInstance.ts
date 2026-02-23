/**
 * @since 1.0.0
 */
import { SQSClient } from "@aws-sdk/client-sqs";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as SQSServiceConfig from "./SQSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SQSClientInstance extends ServiceMap.Service<SQSClientInstance, SQSClient>()(
  "@effect-aws/client-sqs/SQSClientInstance",
) {}

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
export const layer = Layer.effect(SQSClientInstance, make);
