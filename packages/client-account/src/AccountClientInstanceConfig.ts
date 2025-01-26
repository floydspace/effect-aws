/**
 * @since 1.0.0
 */
import type { AccountClientConfig } from "@aws-sdk/client-account";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class AccountClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-account/AccountClientInstanceConfig",
)<AccountClientInstanceConfig, AccountClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultAccountClientInstanceConfig: Effect.Effect<AccountClientConfig> = Effect.gen(function*(_) {
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
export const DefaultAccountClientConfigLayer = Layer.effect(
  AccountClientInstanceConfig,
  makeDefaultAccountClientInstanceConfig,
);
