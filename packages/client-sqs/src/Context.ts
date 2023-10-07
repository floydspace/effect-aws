import { SQSClient, SQSClientConfig } from "@aws-sdk/client-sqs";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import { flow } from "effect/Function";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

export class SQSClientOptions extends Data.TaggedClass(
  "SQSClientOptions",
)<SQSClientConfig> {}

export const SQSClientConfigTag = Context.Tag<SQSClientOptions>(
  "@effect-aws/SQSClient/Config",
);

export const DefaultSQSClientConfigLayer = Layer.effect(
  SQSClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map(
      (runtime) =>
        new SQSClientOptions({
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

export const SQSClientInstanceTag = Context.Tag<SQSClient>(
  "@effect-aws/SQSClient/Instance",
);

export const SQSClientInstanceLayer = Layer.effect(
  SQSClientInstanceTag,
  SQSClientConfigTag.pipe(Effect.map((config) => new SQSClient(config))),
);

export const DefaultSQSClientInstanceLayer = SQSClientInstanceLayer.pipe(
  Layer.use(DefaultSQSClientConfigLayer),
);
