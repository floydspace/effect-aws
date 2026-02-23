/**
 * @since 0.1.0
 */
import type { DsqlSignerConfig } from "@aws-sdk/dsql-signer";
import { DsqlSigner } from "@aws-sdk/dsql-signer";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";

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
