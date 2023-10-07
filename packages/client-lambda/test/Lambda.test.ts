import {
  InvokeCommand,
  LambdaClient,
  InvokeCommandInput,
} from "@aws-sdk/client-lambda";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseLambdaServiceEffect,
  DefaultLambdaClientConfigLayer,
  DefaultLambdaServiceEffect,
  LambdaClientConfigTag,
  LambdaClientInstanceTag,
  LambdaClientOptions,
  LambdaServiceEffect,
} from "../src";

import "aws-sdk-client-mock-jest";

const lambdaMock = mockClient(LambdaClient);

describe("LambdaClientImpl", () => {
  it("default", async () => {
    lambdaMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Effect.flatMap(DefaultLambdaServiceEffect, (lambda) =>
      lambda.invoke(args),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.succeed({}));
    expect(lambdaMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(lambdaMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("configurable", async () => {
    lambdaMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Effect.flatMap(LambdaServiceEffect, (lambda) =>
      lambda.invoke(args),
    );

    const LambdaClientConfigLayer = Layer.succeed(
      LambdaClientConfigTag,
      new LambdaClientOptions({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provide(LambdaClientConfigLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(lambdaMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(lambdaMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("base", async () => {
    lambdaMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Effect.flatMap(BaseLambdaServiceEffect, (lambda) =>
      lambda.invoke(args),
    );

    const LambdaClientInstanceLayer = Layer.succeed(
      LambdaClientInstanceTag,
      new LambdaClient({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provide(LambdaClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(lambdaMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(lambdaMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("extended", async () => {
    lambdaMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Effect.flatMap(BaseLambdaServiceEffect, (lambda) =>
      lambda.invoke(args),
    );

    const LambdaClientInstanceLayer = Layer.provide(
      DefaultLambdaClientConfigLayer,
      Layer.effect(
        LambdaClientInstanceTag,
        LambdaClientConfigTag.pipe(
          Effect.map(
            (config) => new LambdaClient({ ...config, region: "eu-central-1" }),
          ),
        ),
      ),
    );

    const result = await pipe(
      program,
      Effect.provide(LambdaClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(lambdaMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(lambdaMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("fail", async () => {
    lambdaMock.reset().on(InvokeCommand).rejects(new Error("test"));

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Effect.flatMap(DefaultLambdaServiceEffect, (lambda) =>
      lambda.invoke(args, { requestTimeout: 1000 }),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(lambdaMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(lambdaMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });
});
