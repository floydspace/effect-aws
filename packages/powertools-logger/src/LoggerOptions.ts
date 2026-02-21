/**
 * @since 1.0.0
 */
import type { ConstructorOptions } from "@aws-lambda-powertools/logger/types";
import { Effect, Layer, ServiceMap } from "effect";
import { dual } from "effect/Function";

/**
 * @since 1.0.0
 * @category logger options
 */
const currentLoggerOptions = ServiceMap.Reference<ConstructorOptions>(
  "@effect-aws/powertools-logger/currentLoggerOptions",
  { defaultValue: () => ({}) },
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
    Effect.provideService(effect, currentLoggerOptions, options),
);

/**
 * @since 1.0.0
 * @category logger options
 */
export const setLoggerOptions = (options: ConstructorOptions) => Layer.succeed(currentLoggerOptions, options);

/**
 * @since 1.0.0
 * @category logger options
 */
export const getLoggerOptions: Effect.Effect<ConstructorOptions> = currentLoggerOptions.asEffect();
