/**
 * @since 1.0.0
 */
import { SSMClient } from "@aws-sdk/client-ssm";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as SSMServiceConfig from "./SSMServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SSMClientInstance extends ServiceMap.Service<SSMClientInstance, SSMClient>()(
  "@effect-aws/client-ssm/SSMClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SSMServiceConfig.toSSMClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SSMClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(SSMClientInstance, make);
