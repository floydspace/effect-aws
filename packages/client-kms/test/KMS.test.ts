import {
  type ListKeysCommandInput,
  ListKeysCommand,
  KMSClient,
  KMSServiceException,
} from "@aws-sdk/client-kms";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseKMSServiceLayer,
  DefaultKMSClientConfigLayer,
  DefaultKMSServiceLayer,
  KMSClientInstance,
  KMSClientInstanceConfig,
  KMSService,
  KMSServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(KMSClient);

describe("KMSClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListKeysCommand).resolves({});

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMSService.listKeys(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultKMSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListKeysCommand).resolves({});

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMSService.listKeys(args);

    const KMSClientConfigLayer = Layer.succeed(KMSClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomKMSServiceLayer = KMSServiceLayer.pipe(
      Layer.provide(KMSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomKMSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListKeysCommand).resolves({});

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMSService.listKeys(args);

    const KMSClientInstanceLayer = Layer.succeed(
      KMSClientInstance,
      new KMSClient({ region: "eu-central-1" }),
    );
    const CustomKMSServiceLayer = BaseKMSServiceLayer.pipe(
      Layer.provide(KMSClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomKMSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListKeysCommand).resolves({});

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMSService.listKeys(args);

    const KMSClientInstanceLayer = Layer.effect(
      KMSClientInstance,
      Effect.map(
        KMSClientInstanceConfig,
        (config) => new KMSClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomKMSServiceLayer = BaseKMSServiceLayer.pipe(
      Layer.provide(KMSClientInstanceLayer),
      Layer.provide(DefaultKMSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomKMSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListKeysCommand).rejects(new Error("test"));

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMSService.listKeys(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultKMSServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListKeysCommand)
      .rejects(
        new KMSServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMSService.listKeys(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultKMSServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });
});
