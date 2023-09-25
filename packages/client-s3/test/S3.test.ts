import { HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { pipe } from "@effect/data/Function";
import * as Effect from "@effect/io/Effect";
import * as Exit from "@effect/io/Exit";
import * as Layer from "@effect/io/Layer";
import { mockClient } from "aws-sdk-client-mock";
import {
  BaseS3ServiceEffect,
  DefaultS3ClientConfigLayer,
  DefaultS3ServiceEffect,
  S3ClientConfigTag,
  S3ClientInstanceTag,
  S3ClientOptions,
  S3ServiceEffect,
} from "../src";

import "aws-sdk-client-mock-jest";

const s3Mock = mockClient(S3Client);

describe("S3ClientImpl", () => {
  it("default", async () => {
    s3Mock.reset().on(HeadObjectCommand).resolves({});

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(DefaultS3ServiceEffect, (s3) =>
      s3.headObject(args),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.succeed({}));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("configurable", async () => {
    s3Mock.reset().on(HeadObjectCommand).resolves({});

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(S3ServiceEffect, (s3) =>
      s3.headObject(args),
    );

    const S3ClientConfigLayer = Layer.succeed(
      S3ClientConfigTag,
      new S3ClientOptions({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(S3ClientConfigLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("base", async () => {
    s3Mock.reset().on(HeadObjectCommand).resolves({});

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(BaseS3ServiceEffect, (s3) =>
      s3.headObject(args),
    );

    const S3ClientInstanceLayer = Layer.succeed(
      S3ClientInstanceTag,
      new S3Client({ region: "eu-central-1" }),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(S3ClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("extended", async () => {
    s3Mock.reset().on(HeadObjectCommand).resolves({});

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(BaseS3ServiceEffect, (s3) =>
      s3.headObject(args),
    );

    const S3ClientInstanceLayer = Layer.provide(
      DefaultS3ClientConfigLayer,
      Layer.effect(
        S3ClientInstanceTag,
        S3ClientConfigTag.pipe(
          Effect.map(
            (config) => new S3Client({ ...config, region: "eu-central-1" }),
          ),
        ),
      ),
    );

    const result = await pipe(
      program,
      Effect.provideLayer(S3ClientInstanceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });

  it("fail", async () => {
    s3Mock.reset().on(HeadObjectCommand).rejects(new Error("test"));

    const args = { Key: "test", Bucket: "test" };

    const program = Effect.flatMap(DefaultS3ServiceEffect, (s3) =>
      s3.headObject(args, { requestTimeout: 1000 }),
    );

    const result = await pipe(program, Effect.runPromiseExit);

    expect(result).toEqual(Exit.fail(new Error("test")));
    expect(s3Mock).toHaveReceivedCommandTimes(HeadObjectCommand, 1);
    expect(s3Mock).toHaveReceivedCommandWith(HeadObjectCommand, args);
  });
});
