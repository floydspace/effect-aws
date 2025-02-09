/**
 * @since 1.0.0
 */
import { IoTJobsDataPlaneClient } from "@aws-sdk/client-iot-jobs-data-plane";
import { Context, Effect, Layer } from "effect";
import * as IoTJobsDataPlaneServiceConfig from "./IoTJobsDataPlaneServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTJobsDataPlaneClientInstance extends Context.Tag(
  "@effect-aws/client-iot-jobs-data-plane/IoTJobsDataPlaneClientInstance",
)<IoTJobsDataPlaneClientInstance, IoTJobsDataPlaneClient>() {}

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
export const layer = Layer.scoped(IoTJobsDataPlaneClientInstance, make);
