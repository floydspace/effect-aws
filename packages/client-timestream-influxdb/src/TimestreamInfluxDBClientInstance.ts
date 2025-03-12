/**
 * @since 1.0.0
 */
import { TimestreamInfluxDBClient } from "@aws-sdk/client-timestream-influxdb";
import { Context, Effect, Layer } from "effect";
import * as TimestreamInfluxDBServiceConfig from "./TimestreamInfluxDBServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class TimestreamInfluxDBClientInstance extends Context.Tag(
  "@effect-aws/client-timestream-influxdb/TimestreamInfluxDBClientInstance",
)<TimestreamInfluxDBClientInstance, TimestreamInfluxDBClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  TimestreamInfluxDBServiceConfig.toTimestreamInfluxDBClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new TimestreamInfluxDBClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(TimestreamInfluxDBClientInstance, make);
