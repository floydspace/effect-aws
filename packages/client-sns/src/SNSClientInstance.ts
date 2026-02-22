/**
 * @since 1.0.0
 */
import { SNSClient } from "@aws-sdk/client-sns";
import { Effect, Layer, ServiceMap } from "effect";
import * as SNSServiceConfig from "./SNSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SNSClientInstance extends ServiceMap.Service<SNSClientInstance, SNSClient>()(
  "@effect-aws/client-sns/SNSClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SNSServiceConfig.toSNSClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SNSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(SNSClientInstance, make);
