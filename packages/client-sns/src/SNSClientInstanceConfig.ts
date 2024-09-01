/**
 * @since 1.0.0
 */
import type { SNSClientConfig } from "@aws-sdk/client-sns";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class SNSClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-sns/SNSClientInstanceConfig",
)<SNSClientInstanceConfig, SNSClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultSNSClientInstanceConfig: Effect.Effect<SNSClientConfig> =
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
export const DefaultSNSClientConfigLayer = Layer.effect(
  SNSClientInstanceConfig,
  makeDefaultSNSClientInstanceConfig,
);
