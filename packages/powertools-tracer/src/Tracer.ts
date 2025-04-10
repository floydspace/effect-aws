/**
 * @since 1.0.0
 */
import type { TracerInterface, TracerOptions } from "@aws-lambda-powertools/tracer/types";
import type { Tag } from "effect/Context";
import type { Effect } from "effect/Effect";
import type { Layer } from "effect/Layer";
import type { Tracer as EffectTracer } from "effect/Tracer";
import * as internal from "./internal/tracer.js";

/**
 * @since 1.0.0
 * @category constructors
 */
export const make: Effect<EffectTracer, never, XrayTracer> = internal.make;

/**
 * @since 1.0.0
 * @category tags
 */
export interface XrayTracer {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const XrayTracer: Tag<XrayTracer, TracerInterface> = internal.Tracer;

/**
 * @since 1.0.0
 * @category layers
 */
export const layerTracer: (options?: TracerOptions) => Layer<XrayTracer> = internal.layerTracer;

/**
 * @since 1.0.0
 * @category layers
 */
export const layerWithoutXrayTracer: Layer<never, never, XrayTracer> = internal.layerWithoutXrayTracer;

/**
 * @since 1.0.0
 * @category layers
 */
export const layer: (options?: TracerOptions) => Layer<never> = internal.layer;
