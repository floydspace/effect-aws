import {
  type DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommand,
  ElastiCacheClient,
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

const clientMock = mockClient(ElastiCacheClient);

describe("ElastiCacheClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(DescribeCacheClustersCommand).resolves({});

    const args: DescribeCacheClustersCommandInput = { ShowCacheNodeInfo: true };

    const program = Effect.flatMap(ElastiCacheService, (service) =>
      service.describeCacheClusters(args),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultElastiCacheServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(
      DescribeCacheClustersCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeCacheClustersCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeCacheClustersCommand).resolves({});

    const args: DescribeCacheClustersCommandInput = { ShowCacheNodeInfo: true };

    const program = Effect.flatMap(ElastiCacheService, (service) =>
      service.describeCacheClusters(args),
    );

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
    expect(clientMock).toHaveReceivedCommandTimes(
      DescribeCacheClustersCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeCacheClustersCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(DescribeCacheClustersCommand).resolves({});

    const args: DescribeCacheClustersCommandInput = { ShowCacheNodeInfo: true };

    const program = Effect.flatMap(ElastiCacheService, (service) =>
      service.describeCacheClusters(args),
    );

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
    expect(clientMock).toHaveReceivedCommandTimes(
      DescribeCacheClustersCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeCacheClustersCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeCacheClustersCommand).resolves({});

    const args: DescribeCacheClustersCommandInput = { ShowCacheNodeInfo: true };

    const program = Effect.flatMap(ElastiCacheService, (service) =>
      service.describeCacheClusters(args),
    );

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
    expect(clientMock).toHaveReceivedCommandTimes(
      DescribeCacheClustersCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeCacheClustersCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock
      .reset()
      .on(DescribeCacheClustersCommand)
      .rejects(new Error("test"));

    const args: DescribeCacheClustersCommandInput = { ShowCacheNodeInfo: true };

    const program = Effect.flatMap(ElastiCacheService, (service) =>
      service.describeCacheClusters(args),
    );

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
    expect(clientMock).toHaveReceivedCommandTimes(
      DescribeCacheClustersCommand,
      1,
    );
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeCacheClustersCommand,
      args,
    );
  });
});
