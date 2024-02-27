import {
  ListTagsForResourceCommand,
  ElastiCacheClient,
  ListTagsForResourceCommandInput,
} from "@aws-sdk/client-elasticache";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseElastiCacheServiceLayer,
  DefaultElastiCacheClientConfigLayer,
  DefaultElastiCacheServiceLayer,
  ElastiCacheClientInstance,
  ElastiCacheClientInstanceConfig,
  ElastiCacheService,
  ElastiCacheServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const elasticacheMock = mockClient(ElastiCacheClient);
const { listTagsForResource } = Effect.serviceFunctions(ElastiCacheService);

describe("ElastiCacheClientImpl", () => {
  it("default", async () => {
    elasticacheMock.reset().on(ListTagsForResourceCommand).resolves({});

    const args: ListTagsForResourceCommandInput = {
      ResourceName: "test",
    };

    const program = listTagsForResource(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultElastiCacheServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(elasticacheMock).toHaveReceivedCommandTimes(
      ListTagsForResourceCommand,
      1,
    );
    expect(elasticacheMock).toHaveReceivedCommandWith(
      ListTagsForResourceCommand,
      args,
    );
  });

  it("configurable", async () => {
    elasticacheMock.reset().on(ListTagsForResourceCommand).resolves({});

    const args: ListTagsForResourceCommandInput = {
      ResourceName: "test",
    };

    const program = listTagsForResource(args);

    const ElastiCacheClientConfigLayer = Layer.succeed(
      ElastiCacheClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomElastiCacheServiceLayer = ElastiCacheServiceLayer.pipe(
      Layer.provide(ElastiCacheClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomElastiCacheServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(elasticacheMock).toHaveReceivedCommandTimes(
      ListTagsForResourceCommand,
      1,
    );
    expect(elasticacheMock).toHaveReceivedCommandWith(
      ListTagsForResourceCommand,
      args,
    );
  });

  it("base", async () => {
    elasticacheMock.reset().on(ListTagsForResourceCommand).resolves({});

    const args: ListTagsForResourceCommandInput = {
      ResourceName: "test",
    };

    const program = listTagsForResource(args);

    const ElastiCacheClientInstanceLayer = Layer.succeed(
      ElastiCacheClientInstance,
      new ElastiCacheClient({ region: "eu-central-1" }),
    );
    const CustomElastiCacheServiceLayer = BaseElastiCacheServiceLayer.pipe(
      Layer.provide(ElastiCacheClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomElastiCacheServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(elasticacheMock).toHaveReceivedCommandTimes(
      ListTagsForResourceCommand,
      1,
    );
    expect(elasticacheMock).toHaveReceivedCommandWith(
      ListTagsForResourceCommand,
      args,
    );
  });

  it("extended", async () => {
    elasticacheMock.reset().on(ListTagsForResourceCommand).resolves({});

    const args: ListTagsForResourceCommandInput = {
      ResourceName: "test",
    };

    const program = listTagsForResource(args);

    const ElastiCacheClientInstanceLayer = Layer.effect(
      ElastiCacheClientInstance,
      Effect.map(
        ElastiCacheClientInstanceConfig,
        (config) =>
          new ElastiCacheClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomElastiCacheServiceLayer = BaseElastiCacheServiceLayer.pipe(
      Layer.provide(ElastiCacheClientInstanceLayer),
      Layer.provide(DefaultElastiCacheClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomElastiCacheServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(elasticacheMock).toHaveReceivedCommandTimes(
      ListTagsForResourceCommand,
      1,
    );
    expect(elasticacheMock).toHaveReceivedCommandWith(
      ListTagsForResourceCommand,
      args,
    );
  });

  it("fail", async () => {
    elasticacheMock
      .reset()
      .on(ListTagsForResourceCommand)
      .rejects(new Error("test"));

    const args: ListTagsForResourceCommandInput = {
      ResourceName: "test",
    };

    const program = listTagsForResource(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(DefaultElastiCacheServiceLayer),
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
    expect(elasticacheMock).toHaveReceivedCommandTimes(
      ListTagsForResourceCommand,
      1,
    );
    expect(elasticacheMock).toHaveReceivedCommandWith(
      ListTagsForResourceCommand,
      args,
    );
  });
});
