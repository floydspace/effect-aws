import {
  ListCollectionsCommand,
  type ListCollectionsCommandInput,
  OpenSearchServerlessClient,
  OpenSearchServerlessServiceException,
} from "@aws-sdk/client-opensearchserverless";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-opensearchserverless/dist-cjs/runtimeConfig";
import {
  OpenSearchServerless,
  OpenSearchServerlessServiceConfig,
  SdkError,
} from "@effect-aws/client-opensearch-serverless";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(OpenSearchServerlessClient);

describe("OpenSearchServerlessClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListCollectionsCommand).resolves({});

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerless.listCollections(args);

    const result = await pipe(
      program,
      Effect.provide(OpenSearchServerless.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListCollectionsCommand).resolves({});

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerless.listCollections(args);

    const result = await pipe(
      program,
      Effect.provide(OpenSearchServerless.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListCollectionsCommand).resolves({});

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerless.listCollections(args);

    const result = await pipe(
      program,
      Effect.provide(
        OpenSearchServerless.baseLayer(() => new OpenSearchServerlessClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListCollectionsCommand).resolves({});

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerless.listCollections(args);

    const result = await pipe(
      program,
      Effect.provide(
        OpenSearchServerless.baseLayer(
          (config) => new OpenSearchServerlessClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      OpenSearchServerlessServiceConfig.withOpenSearchServerlessServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListCollectionsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerless.listCollections(args);

    const result = await pipe(
      program,
      Effect.provide(OpenSearchServerless.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListCollectionsCommand)
      .rejects(
        new OpenSearchServerlessServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerless.listCollections(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(OpenSearchServerless.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });
});
