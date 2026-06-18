import {
  EKSClient,
  EKSServiceException,
  ListClustersCommand,
  type ListClustersCommandInput,
} from "@aws-sdk/client-eks";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-eks/dist-cjs/runtimeConfig";
import { EKSService as EKS } from "@effect-aws/client-eks/EKSService";
import * as EKSServiceConfig from "@effect-aws/client-eks/EKSServiceConfig";
import { SdkError } from "@effect-aws/commons/Errors";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(EKSClient);

describe("EKSClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListClustersCommand).resolves({});

    const args = {} as unknown as ListClustersCommandInput;

    const program = EKS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(EKS.defaultLayer),
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

    const program = EKS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(EKS.layer({ region: "eu-central-1", logger: true })),
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

    const program = EKS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        EKS.baseLayer(() => new EKSClient({ region: "eu-central-1" })),
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

    const program = EKS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(
        EKS.baseLayer(
          (config) => new EKSClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      EKSServiceConfig.withEKSServiceConfig({ logger: true }),
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

    const program = EKS.listClusters(args);

    const result = await pipe(
      program,
      Effect.provide(EKS.defaultLayer),
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
        new EKSServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListClustersCommandInput;

    const program = EKS.listClusters(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(EKS.defaultLayer),
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
