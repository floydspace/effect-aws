import {
  BedrockAgentClient,
  BedrockAgentServiceException,
  ListAgentsCommand,
  type ListAgentsCommandInput,
} from "@aws-sdk/client-bedrock-agent";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-bedrock-agent/dist-es/runtimeConfig";
import { BedrockAgentService as BedrockAgent } from "@effect-aws/client-bedrock-agent/BedrockAgentService";
import * as BedrockAgentServiceConfig from "@effect-aws/client-bedrock-agent/BedrockAgentServiceConfig";
import { SdkError } from "@effect-aws/commons/Errors";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(BedrockAgentClient);

describe("BedrockAgentClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListAgentsCommand).resolves({});

    const args = {} as unknown as ListAgentsCommandInput;

    const program = BedrockAgent.listAgents(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgent.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListAgentsCommand).resolves({});

    const args = {} as unknown as ListAgentsCommandInput;

    const program = BedrockAgent.listAgents(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgent.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListAgentsCommand).resolves({});

    const args = {} as unknown as ListAgentsCommandInput;

    const program = BedrockAgent.listAgents(args);

    const result = await pipe(
      program,
      Effect.provide(
        BedrockAgent.baseLayer(() => new BedrockAgentClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListAgentsCommand).resolves({});

    const args = {} as unknown as ListAgentsCommandInput;

    const program = BedrockAgent.listAgents(args);

    const result = await pipe(
      program,
      Effect.provide(
        BedrockAgent.baseLayer(
          (config) => new BedrockAgentClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      BedrockAgentServiceConfig.withBedrockAgentServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListAgentsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListAgentsCommandInput;

    const program = BedrockAgent.listAgents(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockAgent.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListAgentsCommand)
      .rejects(
        new BedrockAgentServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListAgentsCommandInput;

    const program = BedrockAgent.listAgents(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(BedrockAgent.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListAgentsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAgentsCommand, args);
  });
});
