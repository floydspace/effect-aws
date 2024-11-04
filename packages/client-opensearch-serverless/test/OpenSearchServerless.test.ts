import {
  type ListCollectionsCommandInput,
  ListCollectionsCommand,
  OpenSearchServerlessClient,
  OpenSearchServerlessServiceException,
} from "@aws-sdk/client-opensearchserverless";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseOpenSearchServerlessServiceLayer,
  DefaultOpenSearchServerlessClientConfigLayer,
  DefaultOpenSearchServerlessServiceLayer,
  OpenSearchServerlessClientInstance,
  OpenSearchServerlessClientInstanceConfig,
  OpenSearchServerlessService,
  OpenSearchServerlessServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(OpenSearchServerlessClient);

describe("OpenSearchServerlessClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListCollectionsCommand).resolves({});

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerlessService.listCollections(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultOpenSearchServerlessServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListCollectionsCommand).resolves({});

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerlessService.listCollections(args);

    const OpenSearchServerlessClientConfigLayer = Layer.succeed(
      OpenSearchServerlessClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomOpenSearchServerlessServiceLayer =
      OpenSearchServerlessServiceLayer.pipe(
        Layer.provide(OpenSearchServerlessClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServerlessServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListCollectionsCommand).resolves({});

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerlessService.listCollections(args);

    const OpenSearchServerlessClientInstanceLayer = Layer.succeed(
      OpenSearchServerlessClientInstance,
      new OpenSearchServerlessClient({ region: "eu-central-1" }),
    );
    const CustomOpenSearchServerlessServiceLayer =
      BaseOpenSearchServerlessServiceLayer.pipe(
        Layer.provide(OpenSearchServerlessClientInstanceLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServerlessServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListCollectionsCommand).resolves({});

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerlessService.listCollections(args);

    const OpenSearchServerlessClientInstanceLayer = Layer.effect(
      OpenSearchServerlessClientInstance,
      Effect.map(
        OpenSearchServerlessClientInstanceConfig,
        (config) =>
          new OpenSearchServerlessClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomOpenSearchServerlessServiceLayer =
      BaseOpenSearchServerlessServiceLayer.pipe(
        Layer.provide(OpenSearchServerlessClientInstanceLayer),
        Layer.provide(DefaultOpenSearchServerlessClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServerlessServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListCollectionsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListCollectionsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListCollectionsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListCollectionsCommandInput;

    const program = OpenSearchServerlessService.listCollections(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultOpenSearchServerlessServiceLayer),
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

    const program = OpenSearchServerlessService.listCollections(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultOpenSearchServerlessServiceLayer),
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
