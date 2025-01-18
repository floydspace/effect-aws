/**
 * @since 1.0.0
 */
import { SQSClient } from "@aws-sdk/client-sqs";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultSQSClientConfigLayer,
  SQSClientInstanceConfig,
} from "./SQSClientInstanceConfig";

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
export const makeSQSClientInstance = Effect.flatMap(
  SQSClientInstanceConfig,
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
export const SQSClientInstanceLayer = Layer.scoped(
  SQSClientInstance,
  makeSQSClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSQSClientInstanceLayer = SQSClientInstanceLayer.pipe(
  Layer.provide(DefaultSQSClientConfigLayer),
);
