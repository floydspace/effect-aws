/**
 * @since 1.0.0
 */
import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import type { ElasticLoadBalancingV2Service } from "./ElasticLoadBalancingV2Service.js";

/**
 * @since 1.0.0
 * @category elastic-load-balancing-v2 service config
 */
const currentElasticLoadBalancingV2ServiceConfig = Context.Reference<ElasticLoadBalancingV2Service.Config>(
  "@effect-aws/client-elastic-load-balancing-v2/currentElasticLoadBalancingV2ServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category elastic-load-balancing-v2 service config
 */
export const withElasticLoadBalancingV2ServiceConfig: {
  (config: ElasticLoadBalancingV2Service.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ElasticLoadBalancingV2Service.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: ElasticLoadBalancingV2Service.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentElasticLoadBalancingV2ServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category elastic-load-balancing-v2 service config
 */
export const setElasticLoadBalancingV2ServiceConfig = (config: ElasticLoadBalancingV2Service.Config) =>
  Layer.succeed(currentElasticLoadBalancingV2ServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toElasticLoadBalancingV2ClientConfig: Effect.Effect<ElasticLoadBalancingV2ClientConfig> = Effect.gen(
  function*() {
    const { logger: serviceLogger, ...config } = yield* currentElasticLoadBalancingV2ServiceConfig;

    const logger = serviceLogger === true
      ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
      : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

    return { logger, ...config };
  },
);
