/**
 * @since 1.0.0
 */
import { SSMClient } from "@aws-sdk/client-ssm";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as SSMServiceConfig from "./SSMServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SSMClientInstance extends Context.Tag(
  "@effect-aws/client-ssm/SSMClientInstance",
)<SSMClientInstance, SSMClient>() {}

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
export const layer = Layer.scoped(SSMClientInstance, make);
