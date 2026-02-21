/**
 * @since 1.0.0
 */
import { SFNClient } from "@aws-sdk/client-sfn";
import { Effect, Layer, ServiceMap } from "effect";
import * as SFNServiceConfig from "./SFNServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SFNClientInstance extends ServiceMap.Service<SFNClientInstance, SFNClient>()(
  "@effect-aws/client-sfn/SFNClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SFNServiceConfig.toSFNClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SFNClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(SFNClientInstance, make);
