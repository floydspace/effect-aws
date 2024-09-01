import {
  type StartExecutionCommandInput,
  StartExecutionCommand,
  SFNClient,
  SFNServiceException,
} from "@aws-sdk/client-sfn";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseSFNServiceLayer,
  DefaultSFNClientConfigLayer,
  DefaultSFNServiceLayer,
  SFNClientInstance,
  SFNClientInstanceConfig,
  SFNService,
  SFNServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(SFNClient);

describe("SFNClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = SFNService.startExecution(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSFNServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = SFNService.startExecution(args);

    const SFNClientConfigLayer = Layer.succeed(SFNClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomSFNServiceLayer = SFNServiceLayer.pipe(
      Layer.provide(SFNClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSFNServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = SFNService.startExecution(args);

    const SFNClientInstanceLayer = Layer.succeed(
      SFNClientInstance,
      new SFNClient({ region: "eu-central-1" }),
    );
    const CustomSFNServiceLayer = BaseSFNServiceLayer.pipe(
      Layer.provide(SFNClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSFNServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = SFNService.startExecution(args);

    const SFNClientInstanceLayer = Layer.effect(
      SFNClientInstance,
      Effect.map(
        SFNClientInstanceConfig,
        (config) => new SFNClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomSFNServiceLayer = BaseSFNServiceLayer.pipe(
      Layer.provide(SFNClientInstanceLayer),
      Layer.provide(DefaultSFNClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSFNServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(StartExecutionCommand).rejects(new Error("test"));

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = SFNService.startExecution(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSFNServiceLayer),
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

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = SFNService.startExecution(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSFNServiceLayer),
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
