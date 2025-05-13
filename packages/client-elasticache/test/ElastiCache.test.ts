import {
  ElastiCacheClient,
  ElastiCacheServiceException,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
} from "@aws-sdk/client-elasticache";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-elasticache/dist-cjs/runtimeConfig";
import { ElastiCache, ElastiCacheServiceConfig } from "@effect-aws/client-elasticache";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(ElastiCacheClient);

describe("ElastiCacheClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListTagsForResourceCommand).resolves({});

    const args: ListTagsForResourceCommandInput = { ResourceName: "test" };

    const program = ElastiCache.listTagsForResource(args);

    const result = await pipe(
      program,
      Effect.provide(ElastiCache.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListTagsForResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTagsForResourceCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListTagsForResourceCommand).resolves({});

    const args: ListTagsForResourceCommandInput = { ResourceName: "test" };

    const program = ElastiCache.listTagsForResource(args);

    const result = await pipe(
      program,
      Effect.provide(ElastiCache.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTagsForResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTagsForResourceCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListTagsForResourceCommand).resolves({});

    const args: ListTagsForResourceCommandInput = { ResourceName: "test" };

    const program = ElastiCache.listTagsForResource(args);

    const result = await pipe(
      program,
      Effect.provide(
        ElastiCache.baseLayer(() => new ElastiCacheClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTagsForResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTagsForResourceCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListTagsForResourceCommand).resolves({});

    const args: ListTagsForResourceCommandInput = { ResourceName: "test" };

    const program = ElastiCache.listTagsForResource(args);

    const result = await pipe(
      program,
      Effect.provide(
        ElastiCache.baseLayer(
          (config) => new ElastiCacheClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      ElastiCacheServiceConfig.withElastiCacheServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListTagsForResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTagsForResourceCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListTagsForResourceCommand).rejects(new Error("test"));

    const args: ListTagsForResourceCommandInput = { ResourceName: "test" };

    const program = ElastiCache.listTagsForResource(args);

    const result = await pipe(
      program,
      Effect.provide(ElastiCache.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListTagsForResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTagsForResourceCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListTagsForResourceCommand)
      .rejects(
        new ElastiCacheServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args: ListTagsForResourceCommandInput = { ResourceName: "test" };

    const program = ElastiCache.listTagsForResource(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(ElastiCache.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListTagsForResourceCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListTagsForResourceCommand, args);
  });
});
