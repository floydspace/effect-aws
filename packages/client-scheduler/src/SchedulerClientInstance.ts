/**
 * @since 1.0.0
 */
import { SchedulerClient } from "@aws-sdk/client-scheduler";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultSchedulerClientConfigLayer,
  SchedulerClientInstanceConfig,
} from "./SchedulerClientInstanceConfig";

/**
 * @since 1.0.0
 * @category tags
 */
export class SchedulerClientInstance extends Context.Tag(
  "@effect-aws/client-scheduler/SchedulerClientInstance",
)<SchedulerClientInstance, SchedulerClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSchedulerClientInstance = Effect.map(
  SchedulerClientInstanceConfig,
  (config) => new SchedulerClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SchedulerClientInstanceLayer = Layer.effect(
  SchedulerClientInstance,
  makeSchedulerClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSchedulerClientInstanceLayer =
  SchedulerClientInstanceLayer.pipe(
    Layer.provide(DefaultSchedulerClientConfigLayer),
  );
