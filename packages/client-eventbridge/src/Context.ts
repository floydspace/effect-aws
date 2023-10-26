import {
  EventBridgeClient,
  EventBridgeClientConfig,
} from "@aws-sdk/client-eventbridge";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

export class EventBridgeClientOptions extends Data.TaggedClass(
  "EventBridgeClientOptions",
)<EventBridgeClientConfig> {}

export const EventBridgeClientConfigTag = Context.Tag<EventBridgeClientOptions>(
  "@effect-aws/EventBridgeClient/Config",
);

export const DefaultEventBridgeClientConfigLayer = Layer.effect(
  EventBridgeClientConfigTag,
  Effect.runtime<never>().pipe(
    Effect.map(
      (runtime) =>
        new EventBridgeClientOptions({
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

export const EventBridgeClientInstanceTag = Context.Tag<EventBridgeClient>(
  "@effect-aws/EventBridgeClient/Instance",
);

export const EventBridgeClientInstanceLayer = Layer.effect(
  EventBridgeClientInstanceTag,
  EventBridgeClientConfigTag.pipe(
    Effect.map((config) => new EventBridgeClient(config)),
  ),
);

export const DefaultEventBridgeClientInstanceLayer =
  EventBridgeClientInstanceLayer.pipe(
    Layer.use(DefaultEventBridgeClientConfigLayer),
  );
