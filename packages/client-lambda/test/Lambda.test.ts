import {
  type InvokeCommandInput,
  InvokeCommand,
  LambdaClient,
  LambdaServiceException,
} from "@aws-sdk/client-lambda";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseLambdaServiceLayer,
  DefaultLambdaClientConfigLayer,
  DefaultLambdaServiceLayer,
  LambdaClientInstance,
  LambdaClientInstanceConfig,
  LambdaService,
  LambdaServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(LambdaClient);

describe("LambdaClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = LambdaService.invoke(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultLambdaServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = LambdaService.invoke(args);

    const LambdaClientConfigLayer = Layer.succeed(LambdaClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomLambdaServiceLayer = LambdaServiceLayer.pipe(
      Layer.provide(LambdaClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomLambdaServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = LambdaService.invoke(args);

    const LambdaClientInstanceLayer = Layer.succeed(
      LambdaClientInstance,
      new LambdaClient({ region: "eu-central-1" }),
    );
    const CustomLambdaServiceLayer = BaseLambdaServiceLayer.pipe(
      Layer.provide(LambdaClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomLambdaServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = LambdaService.invoke(args);

    const LambdaClientInstanceLayer = Layer.effect(
      LambdaClientInstance,
      Effect.map(
        LambdaClientInstanceConfig,
        (config) => new LambdaClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomLambdaServiceLayer = BaseLambdaServiceLayer.pipe(
      Layer.provide(LambdaClientInstanceLayer),
      Layer.provide(DefaultLambdaClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomLambdaServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(InvokeCommand).rejects(new Error("test"));

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = LambdaService.invoke(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultLambdaServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(InvokeCommand)
      .rejects(
        new LambdaServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = LambdaService.invoke(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultLambdaServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });
});
