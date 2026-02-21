/**
 * @since 1.0.0
 */
import { IvsClient } from "@aws-sdk/client-ivs";
import { Effect, Layer, ServiceMap } from "effect";
import * as IvsServiceConfig from "./IvsServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IvsClientInstance extends ServiceMap.Service<IvsClientInstance, IvsClient>()(
  "@effect-aws/client-ivs/IvsClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  IvsServiceConfig.toIvsClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new IvsClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(IvsClientInstance, make);
