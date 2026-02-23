/**
 * @since 1.0.0
 */
import { KMSClient } from "@aws-sdk/client-kms";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as KMSServiceConfig from "./KMSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class KMSClientInstance extends ServiceMap.Service<KMSClientInstance, KMSClient>()(
  "@effect-aws/client-kms/KMSClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  KMSServiceConfig.toKMSClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new KMSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(KMSClientInstance, make);
