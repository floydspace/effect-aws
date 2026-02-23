/**
 * @since 1.0.0
 */
import { SFNClient } from "@aws-sdk/client-sfn";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
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
