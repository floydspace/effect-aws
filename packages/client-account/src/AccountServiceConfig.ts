/**
 * @since 1.0.0
 */
import type { AccountClientConfig } from "@aws-sdk/client-account";
import { ServiceLogger } from "@effect-aws/commons";
import { Effect, FiberRef, Layer } from "effect";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import type { AccountService } from "./AccountService.js";

/**
 * @since 1.0.0
 * @category account service config
 */
const currentAccountServiceConfig = globalValue(
  "@effect-aws/client-account/currentAccountServiceConfig",
  () => FiberRef.unsafeMake<AccountService.Config>({}),
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
    Effect.locally(effect, currentAccountServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category account service config
 */
export const setAccountServiceConfig = (config: AccountService.Config) =>
  Layer.locallyScoped(currentAccountServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toAccountClientConfig: Effect.Effect<AccountClientConfig> = Effect.gen(function*(_) {
  const { logger: serviceLogger, ...config } = yield* _(FiberRef.get(currentAccountServiceConfig));

  const logger = serviceLogger === true
    ? yield* _(ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger))
    : (serviceLogger ? yield* _(ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger))) : undefined);

  return { logger, ...config };
});
