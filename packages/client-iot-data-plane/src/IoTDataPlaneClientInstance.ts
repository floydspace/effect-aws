/**
 * @since 1.0.0
 */
import { IoTDataPlaneClient } from "@aws-sdk/client-iot-data-plane";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as IoTDataPlaneServiceConfig from "./IoTDataPlaneServiceConfig.js";

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
export const make = Effect.flatMap(
  IoTDataPlaneServiceConfig.toIoTDataPlaneClientConfig,
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
export const layer = Layer.scoped(IoTDataPlaneClientInstance, make);
