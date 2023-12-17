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
  BaseSFNServiceEffect,
  DefaultSFNClientConfigLayer,
  DefaultSFNServiceEffect,
  SFNClientConfigTag,
  SFNClientInstanceTag,
  SFNClientOptions,
  SFNServiceEffect,
} from "../src";

import "aws-sdk-client-mock-jest";

const sfnMock = mockClient(SFNClient);

describe("SFNClientImpl", () => {
  it("default", async () => {
    sfnMock.reset().on(StartExecutionCommand).resolves({});

    const args: StartExecutionCommandInput = {
      stateMachineArn: "test",
      input: "test",
    };

    const program = Effect.flatMap(DefaultSFNServiceEffect, (sfn) =>
      sfn.startExecution(args),
    );

    const result = await pipe(program, Effect.runPromiseExit);

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

    const program = Effect.flatMap(SFNServiceEffect, (sfn) =>
      sfn.startExecution(args),
    );

    const SFNClientConfigLayer = Layer.succeed(
      SFNClientConfigTag,
      new SFNClientOptions({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provide(SFNClientConfigLayer),
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

    const program = Effect.flatMap(BaseSFNServiceEffect, (sfn) =>
      sfn.startExecution(args),
    );

    const SFNClientInstanceLayer = Layer.succeed(
      SFNClientInstanceTag,
      new SFNClient({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provide(SFNClientInstanceLayer),
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

    const program = Effect.flatMap(BaseSFNServiceEffect, (sfn) =>
      sfn.startExecution(args),
    );

    const SFNClientInstanceLayer = Layer.provide(
      Layer.effect(
        SFNClientInstanceTag,
        SFNClientConfigTag.pipe(
          Effect.map(
            (config) => new SFNClient({ ...config, region: "eu-central-1" }),
          ),
        ),
      ),
      DefaultSFNClientConfigLayer,
    );

    const result = await pipe(
      program,
      Effect.provide(SFNClientInstanceLayer),
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

    const program = Effect.flatMap(DefaultSFNServiceEffect, (sfn) =>
      sfn.startExecution(args, { requestTimeout: 1000 }),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(sfnMock).toHaveReceivedCommandTimes(StartExecutionCommand, 1);
    expect(sfnMock).toHaveReceivedCommandWith(StartExecutionCommand, args);
  });
});
