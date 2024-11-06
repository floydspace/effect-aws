/**
 * @since 1.0.0
 */
import { TextractClient } from "@aws-sdk/client-textract";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultTextractClientConfigLayer,
  TextractClientInstanceConfig,
} from "./TextractClientInstanceConfig";

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
export const makeTextractClientInstance = Effect.map(
  TextractClientInstanceConfig,
  (config) => new TextractClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const TextractClientInstanceLayer = Layer.effect(
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
