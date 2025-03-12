/**
 * @since 1.0.0
 */
import { TimestreamWriteClient } from "@aws-sdk/client-timestream-write";
import { Context, Effect, Layer } from "effect";
import * as TimestreamWriteServiceConfig from "./TimestreamWriteServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class TimestreamWriteClientInstance extends Context.Tag(
  "@effect-aws/client-timestream-write/TimestreamWriteClientInstance",
)<TimestreamWriteClientInstance, TimestreamWriteClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  TimestreamWriteServiceConfig.toTimestreamWriteClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new TimestreamWriteClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(TimestreamWriteClientInstance, make);
