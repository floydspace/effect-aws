/**
 * @since 0.1.0
 */
import type { DsqlSignerConfig } from "@aws-sdk/dsql-signer";
import { DsqlSigner } from "@aws-sdk/dsql-signer";
import { Effect, Layer, ServiceMap } from "effect";

/**
 * @since 0.1.0
 * @category tags
 */
export class DsqlSignerInstance extends ServiceMap.Service<DsqlSignerInstance, DsqlSigner>()(
  "@effect-aws/dsql/DsqlSignerInstance",
) {}

/**
 * @since 0.1.0
 * @category constructors
 */
export const make = (config: DsqlSignerConfig) => Effect.sync(() => new DsqlSigner(config));

/**
 * @since 0.1.0
 * @category layers
 */
export const layer = (config: DsqlSignerConfig) => Layer.effect(DsqlSignerInstance, make(config));
