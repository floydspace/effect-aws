/**
 * @since 1.0.0
 */
import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
import * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import * as Effect from "effect/Effect";
import * as FiberRef from "effect/FiberRef";
import { dual } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import * as Layer from "effect/Layer";
import type { CloudFrontService } from "./CloudFrontService.js";

/**
 * @since 1.0.0
 * @category cloudfront service config
 */
const currentCloudFrontServiceConfig = globalValue(
  "@effect-aws/client-cloudfront/currentCloudFrontServiceConfig",
  () => FiberRef.unsafeMake<CloudFrontService.Config>({}),
);

/**
 * @since 1.0.0
 * @category cloudfront service config
 */
export const withCloudFrontServiceConfig: {
  (config: CloudFrontService.Config): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudFrontService.Config): Effect.Effect<A, E, R>;
} = dual(
  2,
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: CloudFrontService.Config): Effect.Effect<A, E, R> =>
    Effect.locally(effect, currentCloudFrontServiceConfig, config),
);

/**
 * @since 1.0.0
 * @category cloudfront service config
 */
export const setCloudFrontServiceConfig = (config: CloudFrontService.Config) =>
  Layer.locallyScoped(currentCloudFrontServiceConfig, config);

/**
 * @since 1.0.0
 * @category adapters
 */
export const toCloudFrontClientConfig: Effect.Effect<CloudFrontClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentCloudFrontServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : (serviceLogger ? yield* ServiceLogger.toClientLogger(ServiceLogger.make(serviceLogger)) : undefined);

  return { logger, ...config };
});
