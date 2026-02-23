/**
 * @since 1.0.0
 */
import { CloudFormationClient } from "@aws-sdk/client-cloudformation";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as CloudFormationServiceConfig from "./CloudFormationServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CloudFormationClientInstance
  extends ServiceMap.Service<CloudFormationClientInstance, CloudFormationClient>()(
    "@effect-aws/client-cloudformation/CloudFormationClientInstance",
  )
{}

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
export const layer = Layer.effect(CloudFormationClientInstance, make);
