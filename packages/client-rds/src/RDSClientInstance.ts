/**
 * @since 1.0.0
 */
import { RDSClient } from "@aws-sdk/client-rds";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as RDSServiceConfig from "./RDSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class RDSClientInstance extends Context.Tag(
  "@effect-aws/client-rds/RDSClientInstance",
)<RDSClientInstance, RDSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  RDSServiceConfig.toRDSClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new RDSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(RDSClientInstance, make);
