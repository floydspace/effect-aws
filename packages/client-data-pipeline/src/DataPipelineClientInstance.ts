/**
 * @since 1.0.0
 */
import { DataPipelineClient } from "@aws-sdk/client-data-pipeline";
import { Context, Effect, Layer } from "effect";
import * as DataPipelineServiceConfig from "./DataPipelineServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DataPipelineClientInstance extends Context.Tag(
  "@effect-aws/client-data-pipeline/DataPipelineClientInstance",
)<DataPipelineClientInstance, DataPipelineClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  DataPipelineServiceConfig.toDataPipelineClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new DataPipelineClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(DataPipelineClientInstance, make);
