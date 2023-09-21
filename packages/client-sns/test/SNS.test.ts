import {
  PublishCommand,
  PublishCommandInput,
  SNSClient,
} from "@aws-sdk/client-sns";
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Exit from "@effect/io/Exit";
import * as Layer from "@effect/io/Layer";
import { mockClient } from "aws-sdk-client-mock";
import {
  BaseSNSServiceEffect,
  DefaultSNSClientConfigLayer,
  DefaultSNSServiceEffect,
  SNSClientConfigTag,
  SNSClientInstanceTag,
  SNSServiceEffect,
} from "../src";

import "aws-sdk-client-mock-jest";

const snsMock = mockClient(SNSClient);

describe("SNSClientImpl", () => {
  it("default", async () => {
    snsMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = Effect.flatMap(DefaultSNSServiceEffect, (sns) =>
      sns.publish(args),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.succeed({}));
    expect(snsMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(snsMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("configurable", async () => {
    snsMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = Effect.flatMap(SNSServiceEffect, (sns) =>
      sns.publish(args),
    );

    const SNSClientConfigLayer = Layer.succeed(SNSClientConfigTag, {
      region: "eu-central-1",
    });

    const result = await pipe(
      program,
      Effect.provideLayer(SNSClientConfigLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(snsMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(snsMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("base", async () => {
    snsMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = Effect.flatMap(BaseSNSServiceEffect, (sns) =>
      sns.publish(args),
    );

    const SNSClientInstanceLayer = Layer.succeed(
      SNSClientInstanceTag,
      new SNSClient({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(SNSClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(snsMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(snsMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("extended", async () => {
    snsMock.reset().on(PublishCommand).resolves({});

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = Effect.flatMap(BaseSNSServiceEffect, (sns) =>
      sns.publish(args),
    );

    const SNSClientInstanceLayer = Layer.provide(
      DefaultSNSClientConfigLayer,
      Layer.effect(
        SNSClientInstanceTag,
        SNSClientConfigTag.pipe(
          Effect.map(
            (config) => new SNSClient({ ...config, region: "eu-central-1" }),
          ),
        ),
      ),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(SNSClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(snsMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(snsMock).toHaveReceivedCommandWith(PublishCommand, args);
  });

  it("fail", async () => {
    snsMock.reset().on(PublishCommand).rejects(new Error("test"));

    const args: PublishCommandInput = { TopicArn: "test", Message: "test" };

    const program = Effect.flatMap(DefaultSNSServiceEffect, (sns) =>
      sns.publish(args, { requestTimeout: 1000 }),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(snsMock).toHaveReceivedCommandTimes(PublishCommand, 1);
    expect(snsMock).toHaveReceivedCommandWith(PublishCommand, args);
  });
});
