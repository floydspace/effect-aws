import { SNSClient, SNSClientConfig } from "@aws-sdk/client-sns";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
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
