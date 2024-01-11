import {
  GetObjectCommand,
  GetObjectCommandInput,
  HeadObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";

const getSignedUrl = jest
  .fn()
  .mockResolvedValue(
    "https://test.s3.eu-central-1.amazonaws.com/test?whatever",
  );
jest.mock("@aws-sdk/s3-request-presigner", () => ({ getSignedUrl }));

import {
  BaseS3ServiceLayer,
  DefaultS3ClientConfigLayer,
  DefaultS3ServiceLayer,
  S3ClientInstance,
  S3ClientInstanceConfig,
  S3Service,
  S3ServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const s3Mock = mockClient(S3Client);

describe("S3ClientImpl", () => {
  it("default", async () => {
    s3Mock.reset().on(HeadObjectCommand).resolves({});

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(S3Service, (s3) => s3.headObject(args));

    const result = await pipe(
      program,
      Effect.provide(DefaultS3ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("configurable", async () => {
    s3Mock.reset().on(HeadObjectCommand).resolves({});

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(S3Service, (s3) => s3.headObject(args));

    const S3ClientConfigLayer = Layer.succeed(S3ClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomS3ServiceLayer = S3ServiceLayer.pipe(
      Layer.provide(S3ClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomS3ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("base", async () => {
    s3Mock.reset().on(HeadObjectCommand).resolves({});

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(S3Service, (s3) => s3.headObject(args));

    const S3ClientInstanceLayer = Layer.succeed(
      S3ClientInstance,
      new S3Client({ region: "eu-central-1" }),
    );
    const CustomS3ServiceLayer = BaseS3ServiceLayer.pipe(
      Layer.provide(S3ClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomS3ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("extended", async () => {
    s3Mock.reset().on(HeadObjectCommand).resolves({});

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(S3Service, (s3) => s3.headObject(args));

    const S3ClientInstanceLayer = Layer.effect(
      S3ClientInstance,
      Effect.map(
        S3ClientInstanceConfig,
        (config) => new S3Client({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomS3ServiceLayer = BaseS3ServiceLayer.pipe(
      Layer.provide(S3ClientInstanceLayer),
      Layer.provide(DefaultS3ClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomS3ServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("fail", async () => {
    s3Mock.reset().on(HeadObjectCommand).rejects(new Error("test"));

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(S3Service, (s3) =>
      s3.headObject(args, { requestTimeout: 1000 }),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultS3ServiceLayer),
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
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("presigned url", async () => {
    const args: GetObjectCommandInput = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(S3Service, (s3) =>
      s3.getObject(args, { presigned: true, expiresIn: 100 }),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultS3ServiceLayer),
      Effect.runPromise,
    );

    expect(result).toMatch(
      /^https:\/\/test\.s3\.eu-central-1\.amazonaws\.com\/test\?/,
    );
    expect(getSignedUrl).toHaveBeenCalledTimes(1);
    expect(getSignedUrl).toHaveBeenCalledWith(
      expect.any(S3Client),
      expect.any(GetObjectCommand),
      { presigned: true, expiresIn: 100 },
    );
  });
});
