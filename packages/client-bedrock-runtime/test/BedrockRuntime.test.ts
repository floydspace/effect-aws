import {
  BedrockRuntimeClient,
  BedrockRuntimeServiceException,
  InvokeModelCommand,
  type InvokeModelCommandInput,
} from "@aws-sdk/client-bedrock-runtime";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-bedrock-runtime/dist-cjs/runtimeConfig";
import { BedrockRuntime, BedrockRuntimeServiceConfig } from "@effect-aws/client-bedrock-runtime";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(BedrockRuntimeClient);

describe("BedrockRuntimeClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(InvokeModelCommand).resolves({});

    const args = {} as unknown as InvokeModelCommandInput;

    const program = BedrockRuntime.invokeModel(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockRuntime.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(InvokeModelCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeModelCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(InvokeModelCommand).resolves({});

    const args = {} as unknown as InvokeModelCommandInput;

    const program = BedrockRuntime.invokeModel(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockRuntime.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(InvokeModelCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeModelCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(InvokeModelCommand).resolves({});

    const args = {} as unknown as InvokeModelCommandInput;

    const program = BedrockRuntime.invokeModel(args);

    const result = await pipe(
      program,
      Effect.provide(
        BedrockRuntime.baseLayer(() => new BedrockRuntimeClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(InvokeModelCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeModelCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(InvokeModelCommand).resolves({});

    const args = {} as unknown as InvokeModelCommandInput;

    const program = BedrockRuntime.invokeModel(args);

    const result = await pipe(
      program,
      Effect.provide(
        BedrockRuntime.baseLayer(
          (config) => new BedrockRuntimeClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      BedrockRuntimeServiceConfig.withBedrockRuntimeServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(InvokeModelCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeModelCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(InvokeModelCommand).rejects(new Error("test"));

    const args = {} as unknown as InvokeModelCommandInput;

    const program = BedrockRuntime.invokeModel(args);

    const result = await pipe(
      program,
      Effect.provide(BedrockRuntime.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(InvokeModelCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeModelCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(InvokeModelCommand)
      .rejects(
        new BedrockRuntimeServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as InvokeModelCommandInput;

    const program = BedrockRuntime.invokeModel(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(BedrockRuntime.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(InvokeModelCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeModelCommand, args);
  });
});
