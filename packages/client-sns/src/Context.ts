import { SNSClient, SNSClientConfig } from "@aws-sdk/client-sns";
import * as Context from "@effect/data/Context";
import { flow } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Layer from "@effect/io/Layer";
import * as Runtime from "@effect/io/Runtime";

export const SNSClientConfigTag = Context.Tag<SNSClientConfig>(
  "@effect-aws/SNSClient/Config",
);

export const DefaultSNSClientConfigLayer = Layer.effect(
  SNSClientConfigTag,
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

export const SNSClientInstanceTag = Context.Tag<SNSClient>(
  "@effect-aws/SNSClient/Instance",
);

export const SNSClientInstanceLayer = Layer.effect(
  SNSClientInstanceTag,
  SNSClientConfigTag.pipe(Effect.map((config) => new SNSClient(config))),
);

export const DefaultSNSClientInstanceLayer = Layer.provide(
  DefaultSNSClientConfigLayer,
  SNSClientInstanceLayer,
);
