/**
 * @since 1.0.0
 */
import type { S3ClientConfig } from "@aws-sdk/client-s3";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

/**
 * @since 1.0.0
 * @category tags
 */
export class S3ClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-s3/S3ClientInstanceConfig",
)<S3ClientInstanceConfig, S3ClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultS3ClientInstanceConfig: Effect.Effect<S3ClientConfig> =
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
export const DefaultS3ClientConfigLayer = Layer.effect(
  S3ClientInstanceConfig,
  makeDefaultS3ClientInstanceConfig,
);
