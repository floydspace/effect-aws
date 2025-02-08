/**
 * @since 0.1.0
 */
import type { Logger } from "@smithy/types";
import { Effect, Runtime } from "effect";

/**
 * @since 0.1.0
 * @category type ids
 */
export const TypeId = Symbol.for("@effect-aws/commons/ServiceLogger");

/**
 * @since 0.1.0
 * @category type ids
 */
export type TypeId = typeof TypeId;

const proto = {
  [TypeId]: TypeId,
};

export type ServiceLoggerConstructorProps = {
  readonly trace?: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never>;
  readonly debug: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never>;
  readonly info: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never>;
  readonly warn: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never>;
  readonly error: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never>;
};

/**
 * @since 0.1.0
 * @category models
 */
export interface ServiceLogger extends ServiceLoggerConstructorProps {
  readonly [TypeId]: TypeId;
}

/**
 * @since 0.1.0
 * @category constructors
 */
export const make = (props: ServiceLoggerConstructorProps): ServiceLogger => Object.assign(Object.create(proto), props);

/**
 * @since 0.1.0
 * @category instances
 */
export const defaultServiceLogger = make({
  trace: Effect.logTrace,
  debug: Effect.logDebug,
  info: Effect.logInfo,
  warn: Effect.logWarning,
  error: Effect.logError,
});

/**
 * @since 0.1.0
 * @category adapters
 */
export const toClientLogger: (logger: ServiceLogger) => Effect.Effect<Logger> = (logger) =>
  Effect.gen(function*(_) {
    const runtime = yield* _(Effect.runtime<never>());
    const runSync = Runtime.runSync(runtime);

    return {
      info: (...m) => logger.info(...m).pipe(runSync),
      warn: (...m) => logger.warn(...m).pipe(runSync),
      error: (...m) => logger.error(...m).pipe(runSync),
      debug: (...m) => logger.debug(...m).pipe(runSync),
      ...(logger.trace ? { trace: (...m) => logger.trace!(...m).pipe(runSync) } : {}),
    };
  });
