/**
 * @since 1.0.0
 */
import { EKSClient } from "@aws-sdk/client-eks";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as EKSServiceConfig from "./EKSServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class EKSClientInstance extends Context.Tag(
  "@effect-aws/client-eks/EKSClientInstance",
)<EKSClientInstance, EKSClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  EKSServiceConfig.toEKSClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new EKSClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(EKSClientInstance, make);
