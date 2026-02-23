/**
 * @since 1.0.0
 */
import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
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
