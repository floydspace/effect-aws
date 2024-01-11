import {
  SendMessageCommand,
  SendMessageCommandInput,
  SQSClient,
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
} from "../src";

import "aws-sdk-client-mock-jest";

const sqsMock = mockClient(SQSClient);
const { sendMessage } = Effect.serviceFunctions(SQSService);

describe("SQSClientImpl", () => {
  it("default", async () => {
    sqsMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = sendMessage(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSQSServiceLayer),
      Effect.runPromiseExit,
    );

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

    const program = sendMessage(args);

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
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("base", async () => {
    sqsMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = sendMessage(args);

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
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("extended", async () => {
    sqsMock.reset().on(SendMessageCommand).resolves({});

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = sendMessage(args);

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
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });

  it("fail", async () => {
    sqsMock.reset().on(SendMessageCommand).rejects(new Error("test"));

    const args: SendMessageCommandInput = {
      QueueUrl: "test",
      MessageBody: "test",
    };

    const program = sendMessage(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(DefaultSQSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(sqsMock).toHaveReceivedCommandTimes(SendMessageCommand, 1);
    expect(sqsMock).toHaveReceivedCommandWith(SendMessageCommand, args);
  });
});
