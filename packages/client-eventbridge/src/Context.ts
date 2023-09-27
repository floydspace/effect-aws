import {
  EventBridgeClient,
  EventBridgeClientConfig,
} from "@aws-sdk/client-eventbridge";
import * as Context from "@effect/data/Context";
import * as Data from "@effect/data/Data";
import { flow } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Layer from "@effect/io/Layer";
import * as Runtime from "@effect/io/Runtime";

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
