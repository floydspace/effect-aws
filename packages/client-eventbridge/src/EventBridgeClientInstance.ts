/**
 * @since 1.0.0
 */
import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import { Context, Effect, Layer } from "effect";
import {
  DefaultEventBridgeClientConfigLayer,
  EventBridgeClientInstanceConfig,
} from "./EventBridgeClientInstanceConfig.js";

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
export const makeEventBridgeClientInstance = Effect.flatMap(
  EventBridgeClientInstanceConfig,
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
export const EventBridgeClientInstanceLayer = Layer.scoped(
  EventBridgeClientInstance,
  makeEventBridgeClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultEventBridgeClientInstanceLayer = EventBridgeClientInstanceLayer.pipe(
  Layer.provide(DefaultEventBridgeClientConfigLayer),
);
