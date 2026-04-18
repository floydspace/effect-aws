/**
 * @since 1.0.0
 */
import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import { dual } from "effect/Function";
import * as Layer from "effect/Layer";
import type { SESv2Service } from "./SESv2Service.js";

/**
 * @since 1.0.0
 * @category sesv2 service config
 */
const currentSESv2ServiceConfig = Context.Reference<SESv2Service.Config>(
  "@effect-aws/client-sesv2/currentSESv2ServiceConfig",
  { defaultValue: () => ({}) },
);

/**
 * @since 1.0.0
 * @category sesv2 service config
 */
export const withSESv2ServiceConfig: {
  (config: SESv2Service.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SESv2Service.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: SESv2Service.Config): Effect.Effect<A, E, R> =>
    Effect.provideService(effect, currentSESv2ServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category sesv2 service config
 */
export const setSESv2ServiceConfig = (config: SESv2Service.Config) => Layer.succeed(currentSESv2ServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toSESv2ClientConfig: Effect.Effect<SESv2ClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentSESv2ServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
