/**
 * @since 1.0.0
 */
import { SchedulerClient } from "@aws-sdk/client-scheduler";
import { Context, Effect, Layer } from "effect";
import * as SchedulerServiceConfig from "./SchedulerServiceConfig.js";

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
export const layer = Layer.scoped(SchedulerClientInstance, make);
