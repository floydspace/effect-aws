/**
 * @since 1.0.0
 */
import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class CognitoIdentityProviderClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-cognito-identity-provider/CognitoIdentityProviderClientInstanceConfig",
)<CognitoIdentityProviderClientInstanceConfig, CognitoIdentityProviderClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultCognitoIdentityProviderClientInstanceConfig: Effect.Effect<
  CognitoIdentityProviderClientConfig
> = Effect.gen(function*(_) {
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
export const DefaultCognitoIdentityProviderClientConfigLayer = Layer.effect(
  CognitoIdentityProviderClientInstanceConfig,
  makeDefaultCognitoIdentityProviderClientInstanceConfig,
);
