import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import type { HttpHandlerOptions, Service } from "@effect-aws/commons";
import { Client, NoOpLogger } from "@smithy/smithy-client";
import type { CheckOptionalClientConfig, InitializeHandlerOutput, RequestHandler } from "@smithy/types";
import { Effect, Layer, ServiceMap } from "effect";
import { mock } from "vitest-mock-extended";
import * as TestServiceConfig from "./TestServiceConfig.js";

export const mockHandlerOutput = mock<InitializeHandlerOutput<any>>({ output: {} });

class TestClient extends Client<HttpHandlerOptions, any, any, Service.BaseResolvedConfig> {
  constructor(...[config]: CheckOptionalClientConfig<TestServiceConfig.TestClientConfig>) {
    super({
      apiVersion: "2025-03-12",
      logger: config?.logger ?? new NoOpLogger(),
      requestHandler: mock<RequestHandler<any, any, any>>({
        handle: async () => mockHandlerOutput,
      }),
    });
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }
}

export class TestClientInstance extends ServiceMap.Service<TestClientInstance, TestClient>()(
  "@effect-aws/commons/test/TestClientInstance",
) {}

export const make = Effect.flatMap(
  TestServiceConfig.toTestClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new TestClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

export const layer = Layer.effect(TestClientInstance, make);
