import { LambdaClient, LambdaClientConfig } from "@aws-sdk/client-lambda";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

export class LambdaClientOptions extends Data.TaggedClass(
  "LambdaClientOptions",
)<LambdaClientConfig> {}

export const LambdaClientConfigTag = Context.Tag<LambdaClientOptions>(
  "@effect-aws/LambdaClient/Config",
);

export const DefaultLambdaClientConfigLayer = Layer.effect(
  LambdaClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map(
      (runtime) =>
        new LambdaClientOptions({
          logger: {
            info: (m) => Effect.logInfo(m).pipe(Runtime.runSync(runtime)),
            warn: (m) => Effect.logWarning(m).pipe(Runtime.runSync(runtime)),
            error: (m) => Effect.logError(m).pipe(Runtime.runSync(runtime)),
            debug: (m) => Effect.logDebug(m).pipe(Runtime.runSync(runtime)),
            trace: (m) => Effect.logTrace(m).pipe(Runtime.runSync(runtime)),
          },
        }),
    ),
  ),
);

export const LambdaClientInstanceTag = Context.Tag<LambdaClient>(
  "@effect-aws/LambdaClient/Instance",
);

export const LambdaClientInstanceLayer = Layer.effect(
  LambdaClientInstanceTag,
  LambdaClientConfigTag.pipe(Effect.map((config) => new LambdaClient(config))),
);

export const DefaultLambdaClientInstanceLayer = LambdaClientInstanceLayer.pipe(
  Layer.provide(DefaultLambdaClientConfigLayer),
);
