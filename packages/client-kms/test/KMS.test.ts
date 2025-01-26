import { KMSClient, KMSServiceException, ListKeysCommand, type ListKeysCommandInput } from "@aws-sdk/client-kms";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-kms/dist-cjs/runtimeConfig";
import { KMS, SdkError } from "@effect-aws/client-kms";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(KMSClient);

describe("KMSClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListKeysCommand).resolves({});

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMS.listKeys(args);

    const result = await pipe(
      program,
      Effect.provide(KMS.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListKeysCommand).resolves({});

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMS.listKeys(args);

    const result = await pipe(
      program,
      Effect.provide(KMS.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListKeysCommand).resolves({});

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMS.listKeys(args);

    const result = await pipe(
      program,
      Effect.provide(
        KMS.baseLayer(() => new KMSClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListKeysCommand).resolves({});

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMS.listKeys(args);

    const result = await pipe(
      program,
      Effect.provide(
        KMS.baseLayer(
          (config) => new KMSClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListKeysCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListKeysCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListKeysCommand).rejects(new Error("test"));

    const args = {} as unknown as ListKeysCommandInput;

    const program = KMS.listKeys(args);

    const result = await pipe(
      program,
      Effect.provide(KMS.defaultLayer),
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

    const program = KMS.listKeys(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(KMS.defaultLayer),
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
