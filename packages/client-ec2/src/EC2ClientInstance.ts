/**
 * @since 1.0.0
 */
import { EC2Client } from "@aws-sdk/client-ec2";
import { Effect, Layer, ServiceMap } from "effect";
import * as EC2ServiceConfig from "./EC2ServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class EC2ClientInstance extends ServiceMap.Service<EC2ClientInstance, EC2Client>()(
  "@effect-aws/client-ec2/EC2ClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  EC2ServiceConfig.toEC2ClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new EC2Client(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(EC2ClientInstance, make);
