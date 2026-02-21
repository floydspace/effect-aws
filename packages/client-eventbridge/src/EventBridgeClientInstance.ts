/**
 * @since 1.0.0
 */
import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import { Effect, Layer, ServiceMap } from "effect";
import * as EventBridgeServiceConfig from "./EventBridgeServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class EventBridgeClientInstance extends ServiceMap.Service<EventBridgeClientInstance, EventBridgeClient>()(
  "@effect-aws/client-eventbridge/EventBridgeClientInstance",
) {}

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
export const layer = Layer.effect(EventBridgeClientInstance, make);
