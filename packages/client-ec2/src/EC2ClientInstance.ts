/**
 * @since 1.0.0
 */
import { EC2Client } from "@aws-sdk/client-ec2";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultEC2ClientConfigLayer,
  EC2ClientInstanceConfig,
} from "./EC2ClientInstanceConfig";

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
export const makeEC2ClientInstance = Effect.flatMap(
  EC2ClientInstanceConfig,
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
export const EC2ClientInstanceLayer = Layer.scoped(
  EC2ClientInstance,
  makeEC2ClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultEC2ClientInstanceLayer = EC2ClientInstanceLayer.pipe(
  Layer.provide(DefaultEC2ClientConfigLayer),
);
