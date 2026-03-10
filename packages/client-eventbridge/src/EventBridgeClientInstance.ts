/**
 * @since 1.0.0
 */
import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as EventBridgeServiceConfig from "./EventBridgeServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class EventBridgeClientInstance extends Context.Tag(
  "@effect-aws/client-eventbridge/EventBridgeClientInstance",
)<EventBridgeClientInstance, EventBridgeClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  EventBridgeServiceConfig.toEventBridgeClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new EventBridgeClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(EventBridgeClientInstance, make);
