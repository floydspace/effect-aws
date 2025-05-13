import {
  DescribeDBClustersCommand,
  type DescribeDBClustersCommandInput,
  RDSClient,
  RDSServiceException,
} from "@aws-sdk/client-rds";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-rds/dist-cjs/runtimeConfig";
import { RDS, RDSServiceConfig } from "@effect-aws/client-rds";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(RDSClient);

describe("RDSClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeDBClustersCommand).resolves({});

    const args = {} as unknown as DescribeDBClustersCommandInput;

    const program = RDS.describeDBClusters(args);

    const result = await pipe(
      program,
      Effect.provide(RDS.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDBClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDBClustersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeDBClustersCommand).resolves({});

    const args = {} as unknown as DescribeDBClustersCommandInput;

    const program = RDS.describeDBClusters(args);

    const result = await pipe(
      program,
      Effect.provide(RDS.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDBClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDBClustersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeDBClustersCommand).resolves({});

    const args = {} as unknown as DescribeDBClustersCommandInput;

    const program = RDS.describeDBClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        RDS.baseLayer(() => new RDSClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDBClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDBClustersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeDBClustersCommand).resolves({});

    const args = {} as unknown as DescribeDBClustersCommandInput;

    const program = RDS.describeDBClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        RDS.baseLayer(
          (config) => new RDSClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      RDSServiceConfig.withRDSServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDBClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDBClustersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeDBClustersCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeDBClustersCommandInput;

    const program = RDS.describeDBClusters(args);

    const result = await pipe(
      program,
      Effect.provide(RDS.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDBClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDBClustersCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeDBClustersCommand)
      .rejects(
        new RDSServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeDBClustersCommandInput;

    const program = RDS.describeDBClusters(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(RDS.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDBClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDBClustersCommand, args);
  });
});
