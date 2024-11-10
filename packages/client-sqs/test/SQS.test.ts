import {
  type SendMessageCommandInput,
  SendMessageCommand,
  SQSClient,
  SQSServiceException,
} from "@aws-sdk/client-sqs";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-sqs/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SQS, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(SQSClient);

describe("SQSClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQS.sendMessage(args);

    const result = await pipe(
      program,
      Effect.provide(SQS.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQS.sendMessage(args);

    const result = await pipe(
      program,
      Effect.provide(SQS.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQS.sendMessage(args);

    const result = await pipe(
      program,
      Effect.provide(
        SQS.baseLayer(() => new SQSClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQS.sendMessage(args);

    const result = await pipe(
      program,
      Effect.provide(
        SQS.baseLayer(
          (config) => new SQSClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(SendMessageCommand).rejects(new Error("test"));

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQS.sendMessage(args);

    const result = await pipe(
      program,
      Effect.provide(SQS.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(SendMessageCommand)
      .rejects(
        new SQSServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQS.sendMessage(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(SQS.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });
});
