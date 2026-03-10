/**
 * @since 1.0.0
 */
import { IvsClient } from "@aws-sdk/client-ivs";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as IvsServiceConfig from "./IvsServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class IvsClientInstance extends Context.Tag(
  "@effect-aws/client-ivs/IvsClientInstance",
)<IvsClientInstance, IvsClient>() {}

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
export const layer = Layer.scoped(IvsClientInstance, make);
