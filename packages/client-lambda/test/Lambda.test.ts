import { InvokeCommand, type InvokeCommandInput, LambdaClient, LambdaServiceException } from "@aws-sdk/client-lambda";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-lambda/dist-cjs/runtimeConfig";
import { Lambda, LambdaServiceConfig, SdkError } from "@effect-aws/client-lambda";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(LambdaClient);

describe("LambdaClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Lambda.invoke(args);

    const result = await pipe(
      program,
      Effect.provide(Lambda.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Lambda.invoke(args);

    const result = await pipe(
      program,
      Effect.provide(Lambda.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Lambda.invoke(args);

    const result = await pipe(
      program,
      Effect.provide(
        Lambda.baseLayer(() => new LambdaClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(InvokeCommand).resolves({});

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Lambda.invoke(args);

    const result = await pipe(
      program,
      Effect.provide(
        Lambda.baseLayer(
          (config) => new LambdaClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      LambdaServiceConfig.withLambdaServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(InvokeCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(InvokeCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(InvokeCommand).rejects(new Error("test"));

    const args: InvokeCommandInput = { FunctionName: "test", Payload: "test" };

    const program = Lambda.invoke(args);

    const result = await pipe(
      program,
      Effect.provide(Lambda.defaultLayer),
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

    const program = Lambda.invoke(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Lambda.defaultLayer),
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
