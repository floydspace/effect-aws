/**
 * @since 1.0.0
 */
import { EC2Client } from "@aws-sdk/client-ec2";
import { Context, Effect, Layer } from "effect";
import * as EC2ServiceConfig from "./EC2ServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class EC2ClientInstance extends Context.Tag(
  "@effect-aws/client-ec2/EC2ClientInstance",
)<EC2ClientInstance, EC2Client>() {}

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
export const layer = Layer.scoped(EC2ClientInstance, make);
