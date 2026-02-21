/**
 * @since 1.0.0
 */
import { STSClient } from "@aws-sdk/client-sts";
import { Effect, Layer, ServiceMap } from "effect";
import * as STSServiceConfig from "./STSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class STSClientInstance extends ServiceMap.Service<STSClientInstance, STSClient>()(
  "@effect-aws/client-sts/STSClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  STSServiceConfig.toSTSClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new STSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(STSClientInstance, make);
