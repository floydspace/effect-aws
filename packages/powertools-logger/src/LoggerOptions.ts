/**
 * @since 1.0.0
 */
import type { ConstructorOptions } from "@aws-lambda-powertools/logger/types";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";

/**
 * @since 1.0.0
 * @category logger options
 */
const currentLoggerOptions = globalValue(
  "@effect-aws/powertools-logger/currentLoggerOptions",
  () => FiberRef.unsafeMake<ConstructorOptions>({}),
);

/**
 * @since 1.0.0
 * @category logger options
 */
export const withLoggerOptions: {
  (options: ConstructorOptions): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, options: ConstructorOptions): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, options: ConstructorOptions): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentLoggerOptions, options),
);

/**
 * @since 1.0.0
 * @category logger options
 */
export const setLoggerOptions = (options: ConstructorOptions) => Layer.locallyScoped(currentLoggerOptions, options);

/**
 * @since 1.0.0
 * @category logger options
 */
export const getLoggerOptions: Effect.Effect<ConstructorOptions> = FiberRef.get(currentLoggerOptions);
