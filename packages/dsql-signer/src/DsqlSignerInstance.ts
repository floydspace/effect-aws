/**
 * @since 1.0.0
 */
import { DsqlSigner } from "@aws-sdk/dsql-signer";
import { Context, Effect, Layer } from "effect";
import { DsqlSignerConfig } from "./DsqlSignerConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class DsqlSignerInstance extends Context.Tag(
  "@effect-aws/dsql-signer/DsqlSignerInstance",
)<DsqlSignerInstance, DsqlSigner>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.map(
  DsqlSignerConfig,
  (config) => new DsqlSigner(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(DsqlSignerInstance, make);
