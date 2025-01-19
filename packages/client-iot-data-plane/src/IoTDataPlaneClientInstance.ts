/**
 * @since 1.0.0
 */
import { IoTDataPlaneClient } from "@aws-sdk/client-iot-data-plane";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultIoTDataPlaneClientConfigLayer,
  IoTDataPlaneClientInstanceConfig,
} from "./IoTDataPlaneClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class IoTDataPlaneClientInstance extends Context.Tag(
  "@effect-aws/client-iot-data-plane/IoTDataPlaneClientInstance",
)<IoTDataPlaneClientInstance, IoTDataPlaneClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTDataPlaneClientInstance = Effect.flatMap(
  IoTDataPlaneClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new IoTDataPlaneClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const IoTDataPlaneClientInstanceLayer = Layer.scoped(
  IoTDataPlaneClientInstance,
  makeIoTDataPlaneClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultIoTDataPlaneClientInstanceLayer =
  IoTDataPlaneClientInstanceLayer.pipe(
    Layer.provide(DefaultIoTDataPlaneClientConfigLayer),
  );
