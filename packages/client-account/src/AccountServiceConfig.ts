/**
 * @since 1.0.0
 */
import type { AccountClientConfig } from "@aws-sdk/client-account";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import type { AccountService } from "./AccountService.js";

/**
 * @since 1.0.0
 * @category account service config
 */
const currentAccountServiceConfig = ServiceMap.Reference<AccountService.Config>(
  "@effect-aws/client-account/currentAccountServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category account service config
 */
export const withAccountServiceConfig: {
  (config: AccountService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: AccountService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: AccountService.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentAccountServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category account service config
 */
export const setAccountServiceConfig = (config: AccountService.Config) =>
  Layer.succeed(currentAccountServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toAccountClientConfig: Effect.Effect<AccountClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentAccountServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
