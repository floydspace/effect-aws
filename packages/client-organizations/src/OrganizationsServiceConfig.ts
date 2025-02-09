/**
 * @since 1.0.0
 */
import type { OrganizationsClientConfig } from "@aws-sdk/client-organizations";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { OrganizationsService } from "./OrganizationsService.js";

/**
 * @since 1.0.0
 * @category organizations service config
 */
const currentOrganizationsServiceConfig = globalValue(
  "@effect-aws/client-organizations/currentOrganizationsServiceConfig",
  () => FiberRef.unsafeMake<OrganizationsService.Config>({}),
);

/**
 * @since 1.0.0
 * @category organizations service config
 */
export const withOrganizationsServiceConfig: {
  (config: OrganizationsService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: OrganizationsService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: OrganizationsService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentOrganizationsServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category organizations service config
 */
export const setOrganizationsServiceConfig = (config: OrganizationsService.Config) =>
  Layer.locallyScoped(currentOrganizationsServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toOrganizationsClientConfig: Effect.Effect<OrganizationsClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentOrganizationsServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
