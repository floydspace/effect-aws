import {
  DSQLClient,
  DSQLServiceException,
  ListClustersCommand,
  type ListClustersCommandInput,
} from "@aws-sdk/client-dsql";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-dsql/dist-cjs/runtimeConfig";
import { DSQL, DSQLServiceConfig } from "@effect-aws/client-dsql";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(DSQLClient);

describe("DSQLClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListClustersCommand).resolves({});

    const args = {} as unknown as ListClustersCommandInput;

    const program = DSQL.use((svc) => svc.listClusters(args));

    const result = await pipe(
      program,
      Effect.provide(DSQL.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListClustersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListClustersCommand).resolves({});

    const args = {} as unknown as ListClustersCommandInput;

    const program = DSQL.use((svc) => svc.listClusters(args));

    const result = await pipe(
      program,
      Effect.provide(DSQL.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListClustersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListClustersCommand).resolves({});

    const args = {} as unknown as ListClustersCommandInput;

    const program = DSQL.use((svc) => svc.listClusters(args));

    const result = await pipe(
      program,
      Effect.provide(
        DSQL.baseLayer(() => new DSQLClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListClustersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListClustersCommand).resolves({});

    const args = {} as unknown as ListClustersCommandInput;

    const program = DSQL.use((svc) => svc.listClusters(args));

    const result = await pipe(
      program,
      Effect.provide(
        DSQL.baseLayer(
          (config) => new DSQLClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      DSQLServiceConfig.withDSQLServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListClustersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListClustersCommand).rejects(new Error("test"));

    const args = {} as unknown as ListClustersCommandInput;

    const program = DSQL.use((svc) => svc.listClusters(args));

    const result = await pipe(
      program,
      Effect.provide(DSQL.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        new SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(ListClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListClustersCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListClustersCommand)
      .rejects(
        new DSQLServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListClustersCommandInput;

    const program = DSQL.use((svc) => svc.listClusters(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DSQL.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toContainEqual(
      Exit.fail(
        new SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(ListClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListClustersCommand, args);
  });
});
