import {
  type SendMessageCommandInput,
  SendMessageCommand,
  SQSClient,
  SQSServiceException,
} from "@aws-sdk/client-sqs";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseSQSServiceLayer,
  DefaultSQSClientConfigLayer,
  DefaultSQSServiceLayer,
  SQSClientInstance,
  SQSClientInstanceConfig,
  SQSService,
  SQSServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(SQSClient);

describe("SQSClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQSService.sendMessage(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSQSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQSService.sendMessage(args);

    const SQSClientConfigLayer = Layer.succeed(SQSClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomSQSServiceLayer = SQSServiceLayer.pipe(
      Layer.provide(SQSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSQSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQSService.sendMessage(args);

    const SQSClientInstanceLayer = Layer.succeed(
      SQSClientInstance,
      new SQSClient({ region: "eu-central-1" }),
    );
    const CustomSQSServiceLayer = BaseSQSServiceLayer.pipe(
      Layer.provide(SQSClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSQSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQSService.sendMessage(args);

    const SQSClientInstanceLayer = Layer.effect(
      SQSClientInstance,
      Effect.map(
        SQSClientInstanceConfig,
        (config) => new SQSClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomSQSServiceLayer = BaseSQSServiceLayer.pipe(
      Layer.provide(SQSClientInstanceLayer),
      Layer.provide(DefaultSQSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSQSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(SendMessageCommand).rejects(new Error("test"));

    const args: SendMessageCommandInput = {
      QueueUrl: "https://sqs.eu-central-1.amazonaws.com/123456789012/MyQueue",
      MessageBody: "Hello world!",
    };

    const program = SQSService.sendMessage(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSQSServiceLayer),
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

    const program = SQSService.sendMessage(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSQSServiceLayer),
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
