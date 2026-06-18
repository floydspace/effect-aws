import {
  BedrockAgentCoreControlClient,
  BedrockAgentCoreControlServiceException,
  ListAgentRuntimesCommand,
  type ListAgentRuntimesCommandInput,
} from "@aws-sdk/client-bedrock-agentcore-control";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-bedrock-agentcore-control/dist-cjs/runtimeConfig";
import { BedrockAgentCoreControlService as BedrockAgentCoreControl } from "@effect-aws/client-bedrock-agentcore-control/BedrockAgentCoreControlService";
import * as BedrockAgentCoreControlServiceConfig from "@effect-aws/client-bedrock-agentcore-control/BedrockAgentCoreControlServiceConfig";
import { SdkError } from "@effect-aws/commons/Errors";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(BedrockAgentCoreControlClient);

describe("BedrockAgentCoreControlClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListAgentRuntimesCommand).resolves({});

    const args = {} as unknown as ListAgentRuntimesCommandInput;

    const program = BedrockAgentCoreControl.listAgentRuntimes(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgentCoreControl.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentRuntimesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentRuntimesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListAgentRuntimesCommand).resolves({});

    const args = {} as unknown as ListAgentRuntimesCommandInput;

    const program = BedrockAgentCoreControl.listAgentRuntimes(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgentCoreControl.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentRuntimesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentRuntimesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListAgentRuntimesCommand).resolves({});

    const args = {} as unknown as ListAgentRuntimesCommandInput;

    const program = BedrockAgentCoreControl.listAgentRuntimes(args);

    const result = await pipe(
      program,
      Effect.provide(
        BedrockAgentCoreControl.baseLayer(() => new BedrockAgentCoreControlClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentRuntimesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentRuntimesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListAgentRuntimesCommand).resolves({});

    const args = {} as unknown as ListAgentRuntimesCommandInput;

    const program = BedrockAgentCoreControl.listAgentRuntimes(args);

    const result = await pipe(
      program,
      Effect.provide(
        BedrockAgentCoreControl.baseLayer(
          (config) => new BedrockAgentCoreControlClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      BedrockAgentCoreControlServiceConfig.withBedrockAgentCoreControlServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentRuntimesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentRuntimesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListAgentRuntimesCommand).rejects(new Error("test"));

    const args = {} as unknown as ListAgentRuntimesCommandInput;

    const program = BedrockAgentCoreControl.listAgentRuntimes(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgentCoreControl.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentRuntimesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentRuntimesCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListAgentRuntimesCommand)
      .rejects(
        new BedrockAgentCoreControlServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListAgentRuntimesCommandInput;

    const program = BedrockAgentCoreControl.listAgentRuntimes(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(BedrockAgentCoreControl.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentRuntimesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentRuntimesCommand, args);
  });
});
