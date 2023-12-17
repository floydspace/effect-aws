import { SFNClient, SFNClientConfig } from "@aws-sdk/client-sfn";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

export class SFNClientOptions extends Data.TaggedClass(
  "SFNClientOptions",
)<SFNClientConfig> {}

export const SFNClientConfigTag = Context.Tag<SFNClientOptions>(
  "@effect-aws/SFNClient/Config",
);

export const DefaultSFNClientConfigLayer = Layer.effect(
  SFNClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map(
      (runtime) =>
        new SFNClientOptions({
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

export const SFNClientInstanceTag = Context.Tag<SFNClient>(
  "@effect-aws/SFNClient/Instance",
);

export const SFNClientInstanceLayer = Layer.effect(
  SFNClientInstanceTag,
  SFNClientConfigTag.pipe(Effect.map((config) => new SFNClient(config))),
);

export const DefaultSFNClientInstanceLayer = SFNClientInstanceLayer.pipe(
  Layer.provide(DefaultSFNClientConfigLayer),
);
