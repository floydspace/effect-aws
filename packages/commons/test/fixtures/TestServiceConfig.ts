import type { Service } from "@effect-aws/commons";
import { ServiceLogger } from "@effect-aws/commons";
import type { SmithyConfiguration } from "@smithy/smithy-client";
import type { HttpHandlerOptions } from "@smithy/types";
import { Effect, Layer, ServiceMap } from "effect";
import type { TestService } from "./TestService.js";

export interface TestClientConfig
  extends Partial<SmithyConfiguration<HttpHandlerOptions>>, Service.LoggerResolvedConfig
{}

const currentTestServiceConfig = ServiceMap.Reference<TestService.Config>(
  "@effect-aws/commons/test/currentTestServiceConfig",
  { defaultValue: () => ({}) },
);

export const setTestServiceConfig = (config: TestService.Config) => Layer.succeed(currentTestServiceConfig, config);

export const toTestClientConfig: Effect.Effect<TestClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger, ...config } = yield* currentTestServiceConfig;

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : undefined;

  return { logger, ...config };
});
