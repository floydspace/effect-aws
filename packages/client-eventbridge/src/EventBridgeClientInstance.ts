import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultEventBridgeClientConfigLayer,
  EventBridgeClientInstanceConfig,
} from "./EventBridgeClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export interface EventBridgeClientInstance {
  readonly _: unique symbol;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const EventBridgeClientInstance = Context.Tag<
  EventBridgeClientInstance,
  EventBridgeClient
>(Symbol.for("@effect-aws/client-eventbridge/EventBridgeClientInstance"));

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeEventBridgeClientInstance = Effect.map(
  EventBridgeClientInstanceConfig,
  (config) => new EventBridgeClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const EventBridgeClientInstanceLayer = Layer.effect(
  EventBridgeClientInstance,
  makeEventBridgeClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultEventBridgeClientInstanceLayer =
  EventBridgeClientInstanceLayer.pipe(
    Layer.provide(DefaultEventBridgeClientConfigLayer),
  );
