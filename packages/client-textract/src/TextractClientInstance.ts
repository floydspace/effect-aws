/**
 * @since 1.0.0
 */
import { TextractClient } from "@aws-sdk/client-textract";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as TextractServiceConfig from "./TextractServiceConfig.js";

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
export const layer = Layer.scoped(TextractClientInstance, make);
