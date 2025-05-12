import {
  ListDbClustersCommand,
  type ListDbClustersCommandInput,
  TimestreamInfluxDBClient,
  TimestreamInfluxDBServiceException,
} from "@aws-sdk/client-timestream-influxdb";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-timestream-influxdb/dist-cjs/runtimeConfig";
import { TimestreamInfluxDB, TimestreamInfluxDBServiceConfig } from "@effect-aws/client-timestream-influxdb";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(TimestreamInfluxDBClient);

describe("TimestreamInfluxDBClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListDbClustersCommand).resolves({});

    const args = {} as unknown as ListDbClustersCommandInput;

    const program = TimestreamInfluxDB.listDbClusters(args);

    const result = await pipe(
      program,
      Effect.provide(TimestreamInfluxDB.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListDbClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDbClustersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListDbClustersCommand).resolves({});

    const args = {} as unknown as ListDbClustersCommandInput;

    const program = TimestreamInfluxDB.listDbClusters(args);

    const result = await pipe(
      program,
      Effect.provide(TimestreamInfluxDB.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListDbClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDbClustersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListDbClustersCommand).resolves({});

    const args = {} as unknown as ListDbClustersCommandInput;

    const program = TimestreamInfluxDB.listDbClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        TimestreamInfluxDB.baseLayer(() => new TimestreamInfluxDBClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListDbClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDbClustersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListDbClustersCommand).resolves({});

    const args = {} as unknown as ListDbClustersCommandInput;

    const program = TimestreamInfluxDB.listDbClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        TimestreamInfluxDB.baseLayer(
          (config) => new TimestreamInfluxDBClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      TimestreamInfluxDBServiceConfig.withTimestreamInfluxDBServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListDbClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDbClustersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListDbClustersCommand).rejects(new Error("test"));

    const args = {} as unknown as ListDbClustersCommandInput;

    const program = TimestreamInfluxDB.listDbClusters(args);

    const result = await pipe(
      program,
      Effect.provide(TimestreamInfluxDB.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListDbClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDbClustersCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListDbClustersCommand)
      .rejects(
        new TimestreamInfluxDBServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListDbClustersCommandInput;

    const program = TimestreamInfluxDB.listDbClusters(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(TimestreamInfluxDB.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListDbClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListDbClustersCommand, args);
  });
});
