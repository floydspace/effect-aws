/**
 * @since 1.0.0
 */
import { CloudFormationClient } from "@aws-sdk/client-cloudformation";
import { Context, Effect, Layer } from "effect";
import * as CloudFormationServiceConfig from "./CloudFormationServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudFormationClientInstance extends Context.Tag(
  "@effect-aws/client-cloudformation/CloudFormationClientInstance",
)<CloudFormationClientInstance, CloudFormationClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  CloudFormationServiceConfig.toCloudFormationClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CloudFormationClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(CloudFormationClientInstance, make);
