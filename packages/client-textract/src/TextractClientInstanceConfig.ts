/**
 * @since 1.0.0
 */
import type { TextractClientConfig } from "@aws-sdk/client-textract";
import { Context, Effect, Layer, Runtime } from "effect";

/**
 * @since 1.0.0
 * @category tags
 */
export class TextractClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-textract/TextractClientInstanceConfig",
)<TextractClientInstanceConfig, TextractClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultTextractClientInstanceConfig: Effect.Effect<TextractClientConfig> =
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
export const DefaultTextractClientConfigLayer = Layer.effect(
  TextractClientInstanceConfig,
  makeDefaultTextractClientInstanceConfig,
);
