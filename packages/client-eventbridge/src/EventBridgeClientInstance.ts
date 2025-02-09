/**
 * @since 1.0.0
 */
import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import { Context, Effect, Layer } from "effect";
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
