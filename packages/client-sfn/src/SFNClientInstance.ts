/**
 * @since 1.0.0
 */
import { SFNClient } from "@aws-sdk/client-sfn";
import { Context, Effect, Layer } from "effect";
import * as SFNServiceConfig from "./SFNServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SFNClientInstance extends Context.Tag(
  "@effect-aws/client-sfn/SFNClientInstance",
)<SFNClientInstance, SFNClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SFNServiceConfig.toSFNClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SFNClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(SFNClientInstance, make);
