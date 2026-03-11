/**
 * @since 1.0.0
 */
import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import type { EC2Service } from "./EC2Service.js";

/**
 * @since 1.0.0
 * @category ec2 service config
 */
const currentEC2ServiceConfig = ServiceMap.Reference<EC2Service.Config>(
  "@effect-aws/client-ec2/currentEC2ServiceConfig",
  { defaultValue: () => ({}) },
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
    Effect.provideService(effect, currentEC2ServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category ec2 service config
 */
export const setEC2ServiceConfig = (config: EC2Service.Config) => Layer.succeed(currentEC2ServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toEC2ClientConfig: Effect.Effect<EC2ClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentEC2ServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
