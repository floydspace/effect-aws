/**
 * @since 1.0.0
 */
import { SESClient } from "@aws-sdk/client-ses";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as SESServiceConfig from "./SESServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SESClientInstance extends ServiceMap.Service<SESClientInstance, SESClient>()(
  "@effect-aws/client-ses/SESClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SESServiceConfig.toSESClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SESClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(SESClientInstance, make);
