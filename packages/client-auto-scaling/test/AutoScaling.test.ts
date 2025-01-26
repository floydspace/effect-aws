import {
  AutoScalingClient,
  AutoScalingServiceException,
  DescribeAutoScalingGroupsCommand,
  type DescribeAutoScalingGroupsCommandInput,
} from "@aws-sdk/client-auto-scaling";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-auto-scaling/dist-cjs/runtimeConfig";
import { AutoScaling, SdkError } from "@effect-aws/client-auto-scaling";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(AutoScalingClient);

describe("AutoScalingClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeAutoScalingGroupsCommand).resolves({});

    const args = {} as unknown as DescribeAutoScalingGroupsCommandInput;

    const program = AutoScaling.describeAutoScalingGroups(args);

    const result = await pipe(
      program,
      Effect.provide(AutoScaling.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAutoScalingGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAutoScalingGroupsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeAutoScalingGroupsCommand).resolves({});

    const args = {} as unknown as DescribeAutoScalingGroupsCommandInput;

    const program = AutoScaling.describeAutoScalingGroups(args);

    const result = await pipe(
      program,
      Effect.provide(AutoScaling.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAutoScalingGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAutoScalingGroupsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeAutoScalingGroupsCommand).resolves({});

    const args = {} as unknown as DescribeAutoScalingGroupsCommandInput;

    const program = AutoScaling.describeAutoScalingGroups(args);

    const result = await pipe(
      program,
      Effect.provide(
        AutoScaling.baseLayer(() => new AutoScalingClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAutoScalingGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAutoScalingGroupsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeAutoScalingGroupsCommand).resolves({});

    const args = {} as unknown as DescribeAutoScalingGroupsCommandInput;

    const program = AutoScaling.describeAutoScalingGroups(args);

    const result = await pipe(
      program,
      Effect.provide(
        AutoScaling.baseLayer(
          (config) => new AutoScalingClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAutoScalingGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAutoScalingGroupsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeAutoScalingGroupsCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeAutoScalingGroupsCommandInput;

    const program = AutoScaling.describeAutoScalingGroups(args);

    const result = await pipe(
      program,
      Effect.provide(AutoScaling.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAutoScalingGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAutoScalingGroupsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeAutoScalingGroupsCommand)
      .rejects(
        new AutoScalingServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeAutoScalingGroupsCommandInput;

    const program = AutoScaling.describeAutoScalingGroups(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(AutoScaling.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAutoScalingGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAutoScalingGroupsCommand, args);
  });
});
