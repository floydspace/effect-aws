import { PublishCommand, type PublishCommandInput, SNSClient, SNSServiceException } from "@aws-sdk/client-sns";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-sns/dist-cjs/runtimeConfig";
import { SdkError, SNS, SNSServiceConfig } from "@effect-aws/client-sns";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(SNSClient);

describe("SNSClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNS.publish(args);

    const result = await pipe(
      program,
      Effect.provide(SNS.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNS.publish(args);

    const result = await pipe(
      program,
      Effect.provide(SNS.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNS.publish(args);

    const result = await pipe(
      program,
      Effect.provide(
        SNS.baseLayer(() => new SNSClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNS.publish(args);

    const result = await pipe(
      program,
      Effect.provide(
        SNS.baseLayer(
          (config) => new SNSClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      SNSServiceConfig.withSNSServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(PublishCommand).rejects(new Error("test"));

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = SNS.publish(args);

    const result = await pipe(
      program,
      Effect.provide(SNS.defaultLayer),
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

    const program = SNS.publish(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(SNS.defaultLayer),
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
