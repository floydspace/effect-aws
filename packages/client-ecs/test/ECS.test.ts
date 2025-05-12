import {
  ECSClient,
  ECSServiceException,
  ListClustersCommand,
  type ListClustersCommandInput,
} from "@aws-sdk/client-ecs";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-ecs/dist-cjs/runtimeConfig";
import { ECS, ECSServiceConfig } from "@effect-aws/client-ecs";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(ECSClient);

describe("ECSClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListClustersCommand).resolves({});

    const args = {} as unknown as ListClustersCommandInput;

    const program = ECS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(ECS.defaultLayer),
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

    const program = ECS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(ECS.layer({ region: "eu-central-1", logger: true })),
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

    const program = ECS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        ECS.baseLayer(() => new ECSClient({ region: "eu-central-1" })),
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

    const program = ECS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        ECS.baseLayer(
          (config) => new ECSClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      ECSServiceConfig.withECSServiceConfig({ logger: true }),
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

    const program = ECS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(ECS.defaultLayer),
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
        new ECSServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListClustersCommandInput;

    const program = ECS.listClusters(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(ECS.defaultLayer),
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
