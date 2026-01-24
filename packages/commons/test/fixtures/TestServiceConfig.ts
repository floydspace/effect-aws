import type { Service } from "@effect-aws/commons";
import { ServiceLogger } from "@effect-aws/commons";
import type { SmithyConfiguration } from "@smithy/smithy-client";
import type { HttpHandlerOptions } from "@smithy/types";
import { Effect, FiberRef, Layer } from "effect";
import { globalValue } from "effect/GlobalValue";
import type { TestService } from "./TestService.js";

export interface TestClientConfig
  extends Partial<SmithyConfiguration<HttpHandlerOptions>>, Service.LoggerResolvedConfig
{}

const currentTestServiceConfig = globalValue(
  "@effect-aws/commons/test/currentTestServiceConfig",
  () => FiberRef.unsafeMake<TestService.Config>({}),
);

export const setTestServiceConfig = (config: TestService.Config) =>
  Layer.locallyScoped(currentTestServiceConfig, config);

export const toTestClientConfig: Effect.Effect<TestClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* FiberRef.get(currentTestServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : undefined;

  return { logger, ...config };
});
