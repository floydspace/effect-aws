import {
  SendMessageCommand,
  SendMessageCommandInput,
  SQSClient,
} from "@aws-sdk/client-sqs";
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Exit from "@effect/io/Exit";
import * as Layer from "@effect/io/Layer";
import { mockClient } from "aws-sdk-client-mock";
import {
  BaseSQSServiceEffect,
  DefaultSQSClientConfigLayer,
  DefaultSQSServiceEffect,
  SQSClientConfigTag,
  SQSClientInstanceTag,
  SQSServiceEffect,
} from "../src";

import "aws-sdk-client-mock-jest";

const sqsMock = mockClient(SQSClient);

describe("SQSClientImpl", () => {
  it("default", async () => {
    sqsMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = Effect.flatMap(DefaultSQSServiceEffect, (sqs) =>
      sqs.sendMessage(args),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.succeed({}));
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("configurable", async () => {
    sqsMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = Effect.flatMap(SQSServiceEffect, (sqs) =>
      sqs.sendMessage(args),
    );

    const SQSClientConfigLayer = Layer.succeed(SQSClientConfigTag, {
      region: "eu-central-1",
    });

    const result = await pipe(
      program,
      Effect.provideLayer(SQSClientConfigLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("base", async () => {
    sqsMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = Effect.flatMap(BaseSQSServiceEffect, (sqs) =>
      sqs.sendMessage(args),
    );

    const SQSClientInstanceLayer = Layer.succeed(
      SQSClientInstanceTag,
      new SQSClient({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(SQSClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("extended", async () => {
    sqsMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = Effect.flatMap(BaseSQSServiceEffect, (sqs) =>
      sqs.sendMessage(args),
    );

    const SQSClientInstanceLayer = Layer.provide(
      DefaultSQSClientConfigLayer,
      Layer.effect(
        SQSClientInstanceTag,
        SQSClientConfigTag.pipe(
          Effect.map(
            (config) => new SQSClient({ ...config, region: "eu-central-1" }),
          ),
        ),
      ),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(SQSClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("fail", async () => {
    sqsMock.reset().on(SendMessageCommand).rejects(new Error("test"));

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = Effect.flatMap(DefaultSQSServiceEffect, (sqs) =>
      sqs.sendMessage(args, { requestTimeout: 1000 }),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });
});
