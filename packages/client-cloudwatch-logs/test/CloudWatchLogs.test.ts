import {
  CloudWatchLogsClient,
  CloudWatchLogsServiceException,
  DescribeLogGroupsCommand,
  type DescribeLogGroupsCommandInput,
} from "@aws-sdk/client-cloudwatch-logs";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-cloudwatch-logs/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CloudWatchLogs, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CloudWatchLogsClient);

describe("CloudWatchLogsClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).resolves({});

    const args = {} as unknown as DescribeLogGroupsCommandInput;

    const program = CloudWatchLogs.describeLogGroups(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatchLogs.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).resolves({});

    const args = {} as unknown as DescribeLogGroupsCommandInput;

    const program = CloudWatchLogs.describeLogGroups(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatchLogs.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).resolves({});

    const args = {} as unknown as DescribeLogGroupsCommandInput;

    const program = CloudWatchLogs.describeLogGroups(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudWatchLogs.baseLayer(
          () => new CloudWatchLogsClient({ region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).resolves({});

    const args = {} as unknown as DescribeLogGroupsCommandInput;

    const program = CloudWatchLogs.describeLogGroups(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudWatchLogs.baseLayer(
          (config) => new CloudWatchLogsClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeLogGroupsCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeLogGroupsCommandInput;

    const program = CloudWatchLogs.describeLogGroups(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatchLogs.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeLogGroupsCommand)
      .rejects(
        new CloudWatchLogsServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeLogGroupsCommandInput;

    const program = CloudWatchLogs.describeLogGroups(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CloudWatchLogs.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeLogGroupsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeLogGroupsCommand,
      args,
    );
  });
});
