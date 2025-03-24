import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import type { HttpHandlerOptions } from "@effect-aws/commons";
import { Client, NoOpLogger } from "@smithy/smithy-client";
import type { CheckOptionalClientConfig, InitializeHandlerOutput, RequestHandler } from "@smithy/types";
import { Context, Effect, Layer } from "effect";
import { mock } from "vitest-mock-extended";
import type { BaseResolvedConfig } from "../../src/internal/service.js";
import * as TestServiceConfig from "./TestServiceConfig.js";

export const mockHandlerOutput = mock<InitializeHandlerOutput<any>>({ output: {} });

class TestClient extends Client<HttpHandlerOptions, any, any, BaseResolvedConfig> {
  constructor(...[config]: CheckOptionalClientConfig<TestServiceConfig.TestClientConfig>) {
    super({
      apiVersion: "2025-03-12",
      logger: config?.logger ?? new NoOpLogger(),
      ...config,
      requestHandler: mock<RequestHandler<any, any, any>>({
        handle: async () => mockHandlerOutput,
      }),
    });
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }
}

export class TestClientInstance extends Context.Tag(
  "@effect-aws/commons/test/TestClientInstance",
)<TestClientInstance, TestClient>() {}

export const make = Effect.flatMap(
  TestServiceConfig.toTestClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new TestClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

export const layer = Layer.scoped(TestClientInstance, make);
