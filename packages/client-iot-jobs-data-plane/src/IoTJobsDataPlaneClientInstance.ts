/**
 * @since 1.0.0
 */
import { IoTJobsDataPlaneClient } from "@aws-sdk/client-iot-jobs-data-plane";
import { Effect, Layer, ServiceMap } from "effect";
import * as IoTJobsDataPlaneServiceConfig from "./IoTJobsDataPlaneServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTJobsDataPlaneClientInstance
  extends ServiceMap.Service<IoTJobsDataPlaneClientInstance, IoTJobsDataPlaneClient>()(
    "@effect-aws/client-iot-jobs-data-plane/IoTJobsDataPlaneClientInstance",
  )
{}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  IoTJobsDataPlaneServiceConfig.toIoTJobsDataPlaneClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new IoTJobsDataPlaneClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(IoTJobsDataPlaneClientInstance, make);
