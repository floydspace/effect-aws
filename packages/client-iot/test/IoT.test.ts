import { DescribeJobCommand, type DescribeJobCommandInput, IoTClient, IoTServiceException } from "@aws-sdk/client-iot";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-iot/dist-cjs/runtimeConfig";
import { IoT, IoTServiceConfig, SdkError } from "@effect-aws/client-iot";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IoTClient);

describe("IoTClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeJobCommand).resolves({});

    const args = {} as unknown as DescribeJobCommandInput;

    const program = IoT.describeJob(args);

    const result = await pipe(
      program,
      Effect.provide(IoT.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(DescribeJobCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeJobCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeJobCommand).resolves({});

    const args = {} as unknown as DescribeJobCommandInput;

    const program = IoT.describeJob(args);

    const result = await pipe(
      program,
      Effect.provide(IoT.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeJobCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeJobCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeJobCommand).resolves({});

    const args = {} as unknown as DescribeJobCommandInput;

    const program = IoT.describeJob(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoT.baseLayer(() => new IoTClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeJobCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeJobCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeJobCommand).resolves({});

    const args = {} as unknown as DescribeJobCommandInput;

    const program = IoT.describeJob(args);

    const result = await pipe(
      program,
      Effect.provide(
        IoT.baseLayer(
          (config) => new IoTClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      IoTServiceConfig.withIoTServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeJobCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeJobCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeJobCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeJobCommandInput;

    const program = IoT.describeJob(args);

    const result = await pipe(
      program,
      Effect.provide(IoT.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeJobCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeJobCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeJobCommand)
      .rejects(
        new IoTServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeJobCommandInput;

    const program = IoT.describeJob(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(IoT.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeJobCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeJobCommand, args);
  });
});
