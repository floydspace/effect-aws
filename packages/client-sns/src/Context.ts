import { SNSClient, SNSClientConfig } from "@aws-sdk/client-sns";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import { flow } from "effect/Function";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

export class SNSClientOptions extends Data.TaggedClass(
  "SNSClientOptions",
)<SNSClientConfig> {}

export const SNSClientConfigTag = Context.Tag<SNSClientOptions>(
  "@effect-aws/SNSClient/Config",
);

export const DefaultSNSClientConfigLayer = Layer.effect(
  SNSClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map(
      (runtime) =>
        new SNSClientOptions({
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

export const SNSClientInstanceTag = Context.Tag<SNSClient>(
  "@effect-aws/SNSClient/Instance",
);

export const SNSClientInstanceLayer = Layer.effect(
  SNSClientInstanceTag,
  SNSClientConfigTag.pipe(Effect.map((config) => new SNSClient(config))),
);

export const DefaultSNSClientInstanceLayer = SNSClientInstanceLayer.pipe(
  Layer.use(DefaultSNSClientConfigLayer),
);
