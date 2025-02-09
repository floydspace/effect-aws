/**
 * @since 1.0.0
 */
import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { EC2Service } from "./EC2Service.js";

/**
 * @since 1.0.0
 * @category ec2 service config
 */
const currentEC2ServiceConfig = globalValue(
  "@effect-aws/client-ec2/currentEC2ServiceConfig",
  () => FiberRef.unsafeMake<EC2Service.Config>({}),
);

/**
 * @since 1.0.0
 * @category ec2 service config
 */
export const withEC2ServiceConfig: {
  (config: EC2Service.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: EC2Service.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: EC2Service.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentEC2ServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ec2 service config
 */
export const setEC2ServiceConfig = (config: EC2Service.Config) => Layer.locallyScoped(currentEC2ServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toEC2ClientConfig: Effect.Effect<EC2ClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentEC2ServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
