/**
 * @since 1.0.0
 */
import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

/**
 * @since 1.0.0
 * @category tags
 */
export interface EventBridgeClientInstanceConfig {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const EventBridgeClientInstanceConfig = Context.Tag<
  EventBridgeClientInstanceConfig,
  EventBridgeClientConfig
>(Symbol.for("@effect-aws/client-eventbridge/EventBridgeClientInstanceConfig"));

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultEventBridgeClientInstanceConfig: Effect.Effect<
  never,
  never,
  EventBridgeClientConfig
> = Effect.gen(function* (_) {
  const runtime = yield* _(Effect.runtime<never>());
  const runSync = Runtime.runSync(runtime);

  return {
    logger: {
      info: (m) => Effect.logInfo(m).pipe(runSync),
      warn: (m) => Effect.logWarning(m).pipe(runSync),
      error: (m) => Effect.logError(m).pipe(runSync),
      debug: (m) => Effect.logDebug(m).pipe(runSync),
      trace: (m) => Effect.logTrace(m).pipe(runSync),
    },
  };
});

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultEventBridgeClientConfigLayer = Layer.effect(
  EventBridgeClientInstanceConfig,
  makeDefaultEventBridgeClientInstanceConfig,
);
