import {
  type PublishCommandInput,
  PublishCommand,
  SNSClient,
  SNSServiceException,
} from "@aws-sdk/client-sns";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseSNSServiceLayer,
  DefaultSNSClientConfigLayer,
  DefaultSNSServiceLayer,
  SNSClientInstance,
  SNSClientInstanceConfig,
  SNSService,
  SNSServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const clientMock = mockClient(SNSClient);

describe("SNSClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNSService.publish(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSNSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNSService.publish(args);

    const SNSClientConfigLayer = Layer.succeed(SNSClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomSNSServiceLayer = SNSServiceLayer.pipe(
      Layer.provide(SNSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSNSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNSService.publish(args);

    const SNSClientInstanceLayer = Layer.succeed(
      SNSClientInstance,
      new SNSClient({ region: "eu-central-1" }),
    );
    const CustomSNSServiceLayer = BaseSNSServiceLayer.pipe(
      Layer.provide(SNSClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSNSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNSService.publish(args);

    const SNSClientInstanceLayer = Layer.effect(
      SNSClientInstance,
      Effect.map(
        SNSClientInstanceConfig,
        (config) => new SNSClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomSNSServiceLayer = BaseSNSServiceLayer.pipe(
      Layer.provide(SNSClientInstanceLayer),
      Layer.provide(DefaultSNSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSNSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PublishCommand).rejects(new Error("test"));

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNSService.publish(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSNSServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(PublishCommand)
      .rejects(
        new SNSServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNSService.publish(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSNSServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });
});
