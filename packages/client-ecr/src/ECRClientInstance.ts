/**
 * @since 1.0.0
 */
import { ECRClient } from "@aws-sdk/client-ecr";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as ECRServiceConfig from "./ECRServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ECRClientInstance extends ServiceMap.Service<ECRClientInstance, ECRClient>()(
  "@effect-aws/client-ecr/ECRClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  ECRServiceConfig.toECRClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new ECRClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(ECRClientInstance, make);
