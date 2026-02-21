/**
 * @since 1.0.0
 */
import { SchedulerClient } from "@aws-sdk/client-scheduler";
import { Effect, Layer, ServiceMap } from "effect";
import * as SchedulerServiceConfig from "./SchedulerServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SchedulerClientInstance extends ServiceMap.Service<SchedulerClientInstance, SchedulerClient>()(
  "@effect-aws/client-scheduler/SchedulerClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SchedulerServiceConfig.toSchedulerClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SchedulerClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(SchedulerClientInstance, make);
