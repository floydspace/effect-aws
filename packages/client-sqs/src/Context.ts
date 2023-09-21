import { SQSClient, SQSClientConfig } from "@aws-sdk/client-sqs";
import * as Context from "@effect/data/Context";
import { flow } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Layer from "@effect/io/Layer";
import * as Runtime from "@effect/io/Runtime";

export const SQSClientConfigTag = Context.Tag<SQSClientConfig>(
  "@effect-aws/SQSClient/Config",
);

export const DefaultSQSClientConfigLayer = Layer.effect(
  SQSClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map((runtime) => ({
      logger: {
        info: flow(Effect.logInfo, Runtime.runSync(runtime)),
        warn: flow(Effect.logWarning, Runtime.runSync(runtime)),
        error: flow(Effect.logError, Runtime.runSync(runtime)),
        debug: flow(Effect.logDebug, Runtime.runSync(runtime)),
        trace: flow(Effect.logTrace, Runtime.runSync(runtime)),
      },
    })),
  ),
);

export const SQSClientInstanceTag = Context.Tag<SQSClient>(
  "@effect-aws/SQSClient/Instance",
);

export const SQSClientInstanceLayer = Layer.effect(
  SQSClientInstanceTag,
  SQSClientConfigTag.pipe(Effect.map((config) => new SQSClient(config))),
);

export const DefaultSQSClientInstanceLayer = Layer.provide(
  DefaultSQSClientConfigLayer,
  SQSClientInstanceLayer,
);
