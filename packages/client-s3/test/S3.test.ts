import {
  GetObjectCommand,
  type GetObjectCommandInput,
  HeadObjectCommand,
  type HeadObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-s3/dist-cjs/runtimeConfig";
import { S3, S3ServiceConfig, SdkError } from "@effect-aws/client-s3";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getSignedUrl = vi.hoisted(() =>
  vi
    .fn()
    .mockResolvedValue(
      "https://test.s3.eu-central-1.amazonaws.com/test?whatever",
    )
);
vi.mock("@aws-sdk/s3-request-presigner", () => ({ getSignedUrl }));

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(S3Client);

describe("S3ClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(HeadObjectCommand).resolves({});

    const args: HeadObjectCommandInput = { Key: "test", Bucket: "test" };

    const program = S3.headObject(args);

    const result = await pipe(
      program,
      Effect.provide(S3.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(HeadObjectCommand).resolves({});

    const args: HeadObjectCommandInput = { Key: "test", Bucket: "test" };

    const program = S3.headObject(args);

    const result = await pipe(
      program,
      Effect.provide(S3.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(HeadObjectCommand).resolves({});

    const args: HeadObjectCommandInput = { Key: "test", Bucket: "test" };

    const program = S3.headObject(args);

    const result = await pipe(
      program,
      Effect.provide(
        S3.baseLayer(() => new S3Client({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(HeadObjectCommand).resolves({});

    const args: HeadObjectCommandInput = { Key: "test", Bucket: "test" };

    const program = S3.headObject(args);

    const result = await pipe(
      program,
      Effect.provide(
        S3.baseLayer(
          (config) => new S3Client({ ...config, region: "eu-central-1" }),
        ),
      ),
      S3ServiceConfig.withS3ServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(HeadObjectCommand).rejects(new Error("test"));

    const args: HeadObjectCommandInput = { Key: "test", Bucket: "test" };

    const program = S3.headObject(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(S3.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("presigned url", async () => {
    const args: GetObjectCommandInput = { Key: "test", Bucket: "test" };

    const program = S3.getObject(args, { presigned: true, expiresIn: 100 });

    const result = await pipe(
      program,
      Effect.provide(S3.defaultLayer),
      Effect.runPromise,
    );

    expect(result).toMatch(
      /^https:\/\/test\.s3\.eu-central-1\.amazonaws\.com\/test\?/,
    );
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(getSignedUrl).toHaveBeenCalledTimes(1);
    expect(getSignedUrl).toHaveBeenCalledWith(
      expect.any(S3Client),
      expect.any(GetObjectCommand),
      { presigned: true, expiresIn: 100 },
    );
  });
});
