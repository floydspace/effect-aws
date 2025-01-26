import {
  SFNClient,
  SFNServiceException,
  StartExecutionCommand,
  type StartExecutionCommandInput,
} from "@aws-sdk/client-sfn";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-sfn/dist-cjs/runtimeConfig";
import { SdkError, SFN } from "@effect-aws/client-sfn";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(SFNClient);

describe("SFNClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = { stateMachineArn: "test", input: "test" };

    const program = SFN.startExecution(args);

    const result = await pipe(
      program,
      Effect.provide(SFN.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = { stateMachineArn: "test", input: "test" };

    const program = SFN.startExecution(args);

    const result = await pipe(
      program,
      Effect.provide(SFN.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = { stateMachineArn: "test", input: "test" };

    const program = SFN.startExecution(args);

    const result = await pipe(
      program,
      Effect.provide(
        SFN.baseLayer(() => new SFNClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = { stateMachineArn: "test", input: "test" };

    const program = SFN.startExecution(args);

    const result = await pipe(
      program,
      Effect.provide(
        SFN.baseLayer(
          (config) => new SFNClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(StartExecutionCommand).rejects(new Error("test"));

    const args: StartExecutionCommandInput = { stateMachineArn: "test", input: "test" };

    const program = SFN.startExecution(args);

    const result = await pipe(
      program,
      Effect.provide(SFN.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(StartExecutionCommand)
      .rejects(
        new SFNServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: StartExecutionCommandInput = { stateMachineArn: "test", input: "test" };

    const program = SFN.startExecution(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(SFN.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });
});
