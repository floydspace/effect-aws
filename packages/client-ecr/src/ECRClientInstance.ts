/**
 * @since 1.0.0
 */
import { ECRClient } from "@aws-sdk/client-ecr";
import { Context, Effect, Layer } from "effect";
import { DefaultECRClientConfigLayer, ECRClientInstanceConfig } from "./ECRClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ECRClientInstance extends Context.Tag(
  "@effect-aws/client-ecr/ECRClientInstance",
)<ECRClientInstance, ECRClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeECRClientInstance = Effect.flatMap(
  ECRClientInstanceConfig,
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
export const ECRClientInstanceLayer = Layer.scoped(
  ECRClientInstance,
  makeECRClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultECRClientInstanceLayer = ECRClientInstanceLayer.pipe(
  Layer.provide(DefaultECRClientConfigLayer),
);
