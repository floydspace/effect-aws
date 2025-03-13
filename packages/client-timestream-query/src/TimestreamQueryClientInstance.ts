/**
 * @since 1.0.0
 */
import { TimestreamQueryClient } from "@aws-sdk/client-timestream-query";
import { Context, Effect, Layer } from "effect";
import * as TimestreamQueryServiceConfig from "./TimestreamQueryServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class TimestreamQueryClientInstance extends Context.Tag(
  "@effect-aws/client-timestream-query/TimestreamQueryClientInstance",
)<TimestreamQueryClientInstance, TimestreamQueryClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  TimestreamQueryServiceConfig.toTimestreamQueryClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new TimestreamQueryClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(TimestreamQueryClientInstance, make);
