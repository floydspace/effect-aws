/**
 * @since 1.0.0
 */
import { DataPipelineClient } from "@aws-sdk/client-data-pipeline";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as DataPipelineServiceConfig from "./DataPipelineServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DataPipelineClientInstance extends Context.Service<DataPipelineClientInstance, DataPipelineClient>()(
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
