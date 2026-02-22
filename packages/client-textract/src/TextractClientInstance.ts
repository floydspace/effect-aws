/**
 * @since 1.0.0
 */
import { TextractClient } from "@aws-sdk/client-textract";
import { Effect, Layer, ServiceMap } from "effect";
import * as TextractServiceConfig from "./TextractServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class TextractClientInstance extends ServiceMap.Service<TextractClientInstance, TextractClient>()(
  "@effect-aws/client-textract/TextractClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  TextractServiceConfig.toTextractClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new TextractClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(TextractClientInstance, make);
