/**
 * @since 1.0.0
 */
import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class BedrockClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-bedrock/BedrockClientInstanceConfig",
)<BedrockClientInstanceConfig, BedrockClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultBedrockClientInstanceConfig: Effect.Effect<BedrockClientConfig> = Effect.gen(function*(_) {
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
export const DefaultBedrockClientConfigLayer = Layer.effect(
  BedrockClientInstanceConfig,
  makeDefaultBedrockClientInstanceConfig,
);
