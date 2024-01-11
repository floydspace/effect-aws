import {
  SFNClient,
  StartExecutionCommand,
  StartExecutionCommandInput,
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

const sfnMock = mockClient(SFNClient);
const { startExecution } = Effect.serviceFunctions(SFNService);

describe("SFNClientImpl", () => {
  it("default", async () => {
    sfnMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = startExecution(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSFNServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(sfnMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(sfnMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("configurable", async () => {
    sfnMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = startExecution(args);

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
    expect(sfnMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(sfnMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("base", async () => {
    sfnMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = startExecution(args);

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
    expect(sfnMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(sfnMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("extended", async () => {
    sfnMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = startExecution(args);

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
    expect(sfnMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(sfnMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });

  it("fail", async () => {
    sfnMock.reset().on(StartExecutionCommand).rejects(new Error("test"));

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = startExecution(args, { requestTimeout: 1000 });

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
    expect(sfnMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(sfnMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });
});
