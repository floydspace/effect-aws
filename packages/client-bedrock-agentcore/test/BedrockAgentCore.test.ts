import {
  BedrockAgentCoreClient,
  BedrockAgentCoreServiceException,
  ListSessionsCommand,
  type ListSessionsCommandInput,
} from "@aws-sdk/client-bedrock-agentcore";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-bedrock-agentcore/dist-cjs/runtimeConfig";
import { BedrockAgentCoreService as BedrockAgentCore } from "@effect-aws/client-bedrock-agentcore/BedrockAgentCoreService";
import * as BedrockAgentCoreServiceConfig from "@effect-aws/client-bedrock-agentcore/BedrockAgentCoreServiceConfig";
import { SdkError } from "@effect-aws/commons/Errors";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(BedrockAgentCoreClient);

describe("BedrockAgentCoreClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListSessionsCommand).resolves({});

    const args = {} as unknown as ListSessionsCommandInput;

    const program = BedrockAgentCore.listSessions(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgentCore.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListSessionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListSessionsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListSessionsCommand).resolves({});

    const args = {} as unknown as ListSessionsCommandInput;

    const program = BedrockAgentCore.listSessions(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgentCore.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListSessionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListSessionsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListSessionsCommand).resolves({});

    const args = {} as unknown as ListSessionsCommandInput;

    const program = BedrockAgentCore.listSessions(args);

    const result = await pipe(
      program,
      Effect.provide(
        BedrockAgentCore.baseLayer(() => new BedrockAgentCoreClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListSessionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListSessionsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListSessionsCommand).resolves({});

    const args = {} as unknown as ListSessionsCommandInput;

    const program = BedrockAgentCore.listSessions(args);

    const result = await pipe(
      program,
      Effect.provide(
        BedrockAgentCore.baseLayer(
          (config) => new BedrockAgentCoreClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      BedrockAgentCoreServiceConfig.withBedrockAgentCoreServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListSessionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListSessionsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListSessionsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListSessionsCommandInput;

    const program = BedrockAgentCore.listSessions(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgentCore.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListSessionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListSessionsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListSessionsCommand)
      .rejects(
        new BedrockAgentCoreServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListSessionsCommandInput;

    const program = BedrockAgentCore.listSessions(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(BedrockAgentCore.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListSessionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListSessionsCommand, args);
  });
});
