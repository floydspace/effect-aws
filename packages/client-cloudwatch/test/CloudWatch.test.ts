import {
  type DescribeAlarmsCommandInput,
  DescribeAlarmsCommand,
  CloudWatchClient,
  CloudWatchServiceException,
} from "@aws-sdk/client-cloudwatch";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-cloudwatch/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CloudWatch, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CloudWatchClient);

describe("CloudWatchClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeAlarmsCommand).resolves({});

    const args = {} as unknown as DescribeAlarmsCommandInput;

    const program = CloudWatch.describeAlarms(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatch.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeAlarmsCommand).resolves({});

    const args = {} as unknown as DescribeAlarmsCommandInput;

    const program = CloudWatch.describeAlarms(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatch.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeAlarmsCommand).resolves({});

    const args = {} as unknown as DescribeAlarmsCommandInput;

    const program = CloudWatch.describeAlarms(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudWatch.baseLayer(
          () => new CloudWatchClient({ region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeAlarmsCommand).resolves({});

    const args = {} as unknown as DescribeAlarmsCommandInput;

    const program = CloudWatch.describeAlarms(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudWatch.baseLayer(
          (config) =>
            new CloudWatchClient({ ...config, region: "eu-central-1" }),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeAlarmsCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeAlarmsCommandInput;

    const program = CloudWatch.describeAlarms(args);

    const result = await pipe(
      program,
      Effect.provide(CloudWatch.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeAlarmsCommand)
      .rejects(
        new CloudWatchServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeAlarmsCommandInput;

    const program = CloudWatch.describeAlarms(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CloudWatch.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmsCommand, args);
  });
});
