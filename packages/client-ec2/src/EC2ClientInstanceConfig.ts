/**
 * @since 1.0.0
 */
import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class EC2ClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-ec2/EC2ClientInstanceConfig",
)<EC2ClientInstanceConfig, EC2ClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultEC2ClientInstanceConfig: Effect.Effect<EC2ClientConfig> = Effect.gen(function*(_) {
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
export const DefaultEC2ClientConfigLayer = Layer.effect(
  EC2ClientInstanceConfig,
  makeDefaultEC2ClientInstanceConfig,
);
