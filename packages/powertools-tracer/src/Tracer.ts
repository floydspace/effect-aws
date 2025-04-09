/**
 * @since 1.0.0
 */
import type { Layer } from "effect/Layer";
import * as internal from "./internal/tracer.js";

/**
 * @since 1.0.0
 * @category layers
 */
export const layer: Layer<never, never, never> = internal.layer;
