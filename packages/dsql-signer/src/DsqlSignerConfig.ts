/**
 * @since 1.0.0
 */
import type * as DsqlSigner from "@aws-sdk/dsql-signer";
import { Context, Effect, Layer } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class DsqlSignerConfig extends Context.Tag(
  "@effect-aws/dsql-signer/DsqlSignerConfig",
)<DsqlSignerConfig, DsqlSigner.DsqlSignerConfig>() {}

/**
 * Creates a layer for the DSQL signer configuration.
 *
 * @since 1.0.0
 * @category layers
 */
export const layer = (options: DsqlSigner.DsqlSignerConfig) =>
  Layer.scoped(DsqlSignerConfig, Effect.sync(() => options));
