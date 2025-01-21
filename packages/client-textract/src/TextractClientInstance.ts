/**
 * @since 1.0.0
 */
import { TextractClient } from "@aws-sdk/client-textract";
import { Context, Effect, Layer } from "effect";
import {
  DefaultTextractClientConfigLayer,
  TextractClientInstanceConfig,
} from "./TextractClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class TextractClientInstance extends Context.Tag(
  "@effect-aws/client-textract/TextractClientInstance",
)<TextractClientInstance, TextractClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeTextractClientInstance = Effect.flatMap(
  TextractClientInstanceConfig,
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
export const TextractClientInstanceLayer = Layer.scoped(
  TextractClientInstance,
  makeTextractClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultTextractClientInstanceLayer =
  TextractClientInstanceLayer.pipe(
    Layer.provide(DefaultTextractClientConfigLayer),
  );
