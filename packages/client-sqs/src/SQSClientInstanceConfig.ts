/**
 * @since 1.0.0
 */
import type { SQSClientConfig } from "@aws-sdk/client-sqs";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

/**
 * @since 1.0.0
 * @category tags
 */
export class SQSClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-sqs/SQSClientInstanceConfig",
)<SQSClientInstanceConfig, SQSClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultSQSClientInstanceConfig: Effect.Effect<SQSClientConfig> =
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
export const DefaultSQSClientConfigLayer = Layer.effect(
  SQSClientInstanceConfig,
  makeDefaultSQSClientInstanceConfig,
);
