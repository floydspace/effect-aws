import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

/**
 * @since 1.0.0
 * @category tags
 */
export interface DynamoDBClientInstanceConfig {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const DynamoDBClientInstanceConfig = Context.Tag<
  DynamoDBClientInstanceConfig,
  DynamoDBClientConfig
>(Symbol.for("@effect-aws/client-dynamodb/DynamoDBClientInstanceConfig"));

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultDynamoDBClientInstanceConfig: Effect.Effect<
  never,
  never,
  DynamoDBClientConfig
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
export const DefaultDynamoDBClientConfigLayer = Layer.effect(
  DynamoDBClientInstanceConfig,
  makeDefaultDynamoDBClientInstanceConfig,
);
