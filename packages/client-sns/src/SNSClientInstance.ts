/**
 * @since 1.0.0
 */
import { SNSClient } from "@aws-sdk/client-sns";
import { Context, Effect, Layer } from "effect";
import {
  DefaultSNSClientConfigLayer,
  SNSClientInstanceConfig,
} from "./SNSClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SNSClientInstance extends Context.Tag(
  "@effect-aws/client-sns/SNSClientInstance",
)<SNSClientInstance, SNSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSNSClientInstance = Effect.flatMap(
  SNSClientInstanceConfig,
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
export const SNSClientInstanceLayer = Layer.scoped(
  SNSClientInstance,
  makeSNSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSNSClientInstanceLayer = SNSClientInstanceLayer.pipe(
  Layer.provide(DefaultSNSClientConfigLayer),
);
