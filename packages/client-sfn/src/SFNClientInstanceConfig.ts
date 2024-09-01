/**
 * @since 1.0.0
 */
import type { SFNClientConfig } from "@aws-sdk/client-sfn";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class SFNClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-sfn/SFNClientInstanceConfig",
)<SFNClientInstanceConfig, SFNClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultSFNClientInstanceConfig: Effect.Effect<SFNClientConfig> =
  Effect.gen(function* (_) {
    const runtime = yield* _(Effect.runtime<never>());
    const runSync = Runtime.runSync(runtime);

    return {
      logger: {
        info(m) {
          Effect.logInfo(m).pipe(runSync);
        },
        warn(m) {
          Effect.logWarning(m).pipe(runSync);
        },
        error(m) {
          Effect.logError(m).pipe(runSync);
        },
        debug(m) {
          Effect.logDebug(m).pipe(runSync);
        },
        trace(m) {
          Effect.logTrace(m).pipe(runSync);
        },
      },
    };
  });

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSFNClientConfigLayer = Layer.effect(
  SFNClientInstanceConfig,
  makeDefaultSFNClientInstanceConfig,
);
