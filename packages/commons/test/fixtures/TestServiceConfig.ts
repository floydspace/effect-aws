import { ServiceLogger } from "@effect-aws/commons";
import type { SmithyConfiguration } from "@smithy/smithy-client";
import type { HandlerOptions } from "@smithy/types";
import { Effect, FiberRef, Layer } from "effect";
import { globalValue } from "effect/GlobalValue";
import type { LoggerResolvedConfig } from "../../src/internal/service.js";
import type { TestService } from "./TestService.js";

export interface TestClientConfig extends Partial<SmithyConfiguration<HandlerOptions>>, LoggerResolvedConfig {}

const currentTestServiceConfig = globalValue(
  "@effect-aws/commons/test/currentTestServiceConfig",
  () => FiberRef.unsafeMake<TestService.Config>({}),
);

export const setTestServiceConfig = (config: TestService.Config) =>
  Layer.locallyScoped(currentTestServiceConfig, config);

export const toTestClientConfig: Effect.Effect<TestClientConfig> = Effect.gen(function*() {
  const { logger: serviceLogger } = yield* FiberRef.get(currentTestServiceConfig);

  const logger = serviceLogger === true
    ? yield* ServiceLogger.toClientLogger(ServiceLogger.defaultServiceLogger)
    : undefined;

  return { logger };
});
