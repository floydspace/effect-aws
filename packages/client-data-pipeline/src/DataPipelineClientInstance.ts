/**
 * @since 1.0.0
 */
import { DataPipelineClient } from "@aws-sdk/client-data-pipeline";
import { Effect, Layer, ServiceMap } from "effect";
import * as DataPipelineServiceConfig from "./DataPipelineServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DataPipelineClientInstance extends ServiceMap.Service<DataPipelineClientInstance, DataPipelineClient>()(
  "@effect-aws/client-data-pipeline/DataPipelineClientInstance",
) {}

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
export const layer = Layer.effect(DataPipelineClientInstance, make);
