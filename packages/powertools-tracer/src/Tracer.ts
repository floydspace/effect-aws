/**
 * @since 1.0.0
 */
import type { CaptureLambdaHandlerOptions, TracerInterface, TracerOptions } from "@aws-lambda-powertools/tracer/types";
import type { Context } from "aws-lambda";
import type { ConfigError, Effect, Tracer } from "effect";
import type { Tag } from "effect/Context";
import type { Layer } from "effect/Layer";
import * as internal from "./internal/tracer.js";

/**
 * Effectful AWS Lambda handler type.
 *
 * @since 1.0.0
 * @category model
 */
export type EffectHandler<T, R, E = never, A = void> = (
  event: T,
  context: Context,
) => Effect.Effect<A, E, R>;

/**
 * @since 1.0.0
 * @category constructors
 */
export const make: Effect.Effect<Tracer.Tracer, never, XrayTracer> = internal.make;

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

/**
 * @since 1.0.0
 * @category layers
 */
export const layerWithXrayTracer: (
  options?: TracerOptions,
) => Layer<XrayTracer, never, never> = internal.layerWithXrayTracer;

/**
 * Wraps an Effect handler with X-Ray tracing instrumentation.
 *
 * Automatically:
 * - Creates subsegment for the Lambda handler
 * - Annotates cold start and service name
 * - Captures response/errors as metadata
 *
 * @since 1.0.0
 * @category tracing
 */
export const captureLambdaHandler: (
  options?: CaptureLambdaHandlerOptions | undefined,
) => <T, R, E1, A>(
  handler: EffectHandler<T, R, E1, A>,
) => EffectHandler<T, XrayTracer | R, E1 | ConfigError.ConfigError, A> = internal.captureLambdaHandler;

/**
 * Instruments an AWS SDK v3 client Effect with X-Ray tracing.
 *
 * Use with Layer.scoped to create instrumented client layers that
 * automatically capture AWS API calls in X-Ray traces.
 *
 * @since 1.0.0
 * @category tracing
 */
export const captureAWSv3Client: <A, E, R>(
  self: Effect.Effect<A, E, R>,
) => Effect.Effect<A, E, XrayTracer | R> = internal.captureAWSv3Client;
