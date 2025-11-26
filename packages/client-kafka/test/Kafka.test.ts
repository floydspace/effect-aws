import {
  KafkaClient,
  KafkaServiceException,
  ListClustersCommand,
  type ListClustersCommandInput,
} from "@aws-sdk/client-kafka";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-kafka/dist-cjs/runtimeConfig";
import { Kafka, KafkaServiceConfig } from "@effect-aws/client-kafka";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(KafkaClient);

describe("KafkaClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListClustersCommand).resolves({});

    const args = {} as unknown as ListClustersCommandInput;

    const program = Kafka.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(Kafka.defaultLayer),
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

    const program = Kafka.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(Kafka.layer({ region: "eu-central-1", logger: true })),
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

    const program = Kafka.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        Kafka.baseLayer(() => new KafkaClient({ region: "eu-central-1" })),
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

    const program = Kafka.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        Kafka.baseLayer(
          (config) => new KafkaClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      KafkaServiceConfig.withKafkaServiceConfig({ logger: true }),
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

    const program = Kafka.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(Kafka.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListClustersCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListClustersCommand)
      .rejects(
        new KafkaServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListClustersCommandInput;

    const program = Kafka.listClusters(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Kafka.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListClustersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListClustersCommand, args);
  });
});
