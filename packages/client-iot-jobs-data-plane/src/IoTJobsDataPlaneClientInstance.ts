/**
 * @since 1.0.0
 */
import { IoTJobsDataPlaneClient } from "@aws-sdk/client-iot-jobs-data-plane";
import { Context, Effect, Layer } from "effect";
import {
  DefaultIoTJobsDataPlaneClientConfigLayer,
  IoTJobsDataPlaneClientInstanceConfig,
} from "./IoTJobsDataPlaneClientInstanceConfig.js";

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
export const makeIoTJobsDataPlaneClientInstance = Effect.flatMap(
  IoTJobsDataPlaneClientInstanceConfig,
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
export const IoTJobsDataPlaneClientInstanceLayer = Layer.scoped(
  IoTJobsDataPlaneClientInstance,
  makeIoTJobsDataPlaneClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultIoTJobsDataPlaneClientInstanceLayer =
  IoTJobsDataPlaneClientInstanceLayer.pipe(
    Layer.provide(DefaultIoTJobsDataPlaneClientConfigLayer),
  );
