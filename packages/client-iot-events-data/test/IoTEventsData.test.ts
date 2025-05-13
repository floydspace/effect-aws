import {
  DescribeAlarmCommand,
  type DescribeAlarmCommandInput,
  IoTEventsDataClient,
  IoTEventsDataServiceException,
} from "@aws-sdk/client-iot-events-data";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-iot-events-data/dist-cjs/runtimeConfig";
import { IoTEventsData, IoTEventsDataServiceConfig } from "@effect-aws/client-iot-events-data";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IoTEventsDataClient);

describe("IoTEventsDataClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeAlarmCommand).resolves({});

    const args = {} as unknown as DescribeAlarmCommandInput;

    const program = IoTEventsData.describeAlarm(args);

    const result = await pipe(
      program,
      Effect.provide(IoTEventsData.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeAlarmCommand).resolves({});

    const args = {} as unknown as DescribeAlarmCommandInput;

    const program = IoTEventsData.describeAlarm(args);

    const result = await pipe(
      program,
      Effect.provide(IoTEventsData.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeAlarmCommand).resolves({});

    const args = {} as unknown as DescribeAlarmCommandInput;

    const program = IoTEventsData.describeAlarm(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoTEventsData.baseLayer(() => new IoTEventsDataClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeAlarmCommand).resolves({});

    const args = {} as unknown as DescribeAlarmCommandInput;

    const program = IoTEventsData.describeAlarm(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoTEventsData.baseLayer(
          (config) => new IoTEventsDataClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      IoTEventsDataServiceConfig.withIoTEventsDataServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeAlarmCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeAlarmCommandInput;

    const program = IoTEventsData.describeAlarm(args);

    const result = await pipe(
      program,
      Effect.provide(IoTEventsData.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeAlarmCommand)
      .rejects(
        new IoTEventsDataServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeAlarmCommandInput;

    const program = IoTEventsData.describeAlarm(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(IoTEventsData.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeAlarmCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeAlarmCommand, args);
  });
});
