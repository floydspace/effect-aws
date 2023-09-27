import { LambdaClient, LambdaClientConfig } from "@aws-sdk/client-lambda";
import * as Context from "@effect/data/Context";
import * as Data from "@effect/data/Data";
import { flow } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Layer from "@effect/io/Layer";
import * as Runtime from "@effect/io/Runtime";

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
            info: flow(Effect.logInfo, Runtime.runSync(runtime)),
            warn: flow(Effect.logWarning, Runtime.runSync(runtime)),
            error: flow(Effect.logError, Runtime.runSync(runtime)),
            debug: flow(Effect.logDebug, Runtime.runSync(runtime)),
            trace: flow(Effect.logTrace, Runtime.runSync(runtime)),
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
  Layer.use(DefaultLambdaClientConfigLayer),
);
