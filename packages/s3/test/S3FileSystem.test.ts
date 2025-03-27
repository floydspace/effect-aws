import type { GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { GetObjectCommand, HeadObjectCommand, NotFound, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { S3FileSystem } from "@effect-aws/s3";
import { Error as PlatformError, FileSystem } from "@effect/platform";
import { it } from "@effect/vitest";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit, Layer } from "effect";
import { afterEach, describe, expect } from "vitest";
import { mock } from "vitest-mock-extended";

const clientMock = mockClient(S3Client);
const mainLayer = Layer.provide(
  S3FileSystem.layer({ bucketName: "test-bucket" }),
  S3.defaultLayer,
);

describe("S3FileSystem", () => {
  afterEach(() => {
    clientMock.reset();
  });

  describe("exists", () => {
    it.effect("should file exist", () =>
      Effect.gen(function*() {
        expect.assertions(3);

        clientMock.on(HeadObjectCommand).resolves({});

        const fs = yield* FileSystem.FileSystem;

        const exists = yield* fs.exists("path-to-file.ext");

        expect(exists).toBe(true);
        expect(clientMock).toHaveReceivedCommandOnce(HeadObjectCommand);
        expect(clientMock).toHaveReceivedCommandWith(HeadObjectCommand, {
          Bucket: "test-bucket",
          Key: "path-to-file.ext",
        });
      }).pipe(Effect.provide(mainLayer)));

    it.effect("should file NOT exist", () =>
      Effect.gen(function*() {
        expect.assertions(3);

        clientMock.on(HeadObjectCommand).rejects(new NotFound({ $metadata: {}, message: "File not found" }));

        const fs = yield* FileSystem.FileSystem;

        const exists = yield* fs.exists("path-to-file.ext");

        expect(exists).toBe(false);
        expect(clientMock).toHaveReceivedCommandOnce(HeadObjectCommand);
        expect(clientMock).toHaveReceivedCommandWith(HeadObjectCommand, {
          Bucket: "test-bucket",
          Key: "path-to-file.ext",
        });
      }).pipe(Effect.provide(mainLayer)));

    it.effect("should fail with BadArgument", () =>
      Effect.gen(function*() {
        expect.assertions(1);

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.exists("").pipe(Effect.exit);

        expect(result).toStrictEqual(Exit.fail(PlatformError.BadArgument({
          module: "FileSystem",
          method: "access",
          message: "Path is empty",
        })));
      }).pipe(Effect.provide(mainLayer)));

    it.effect("should fail with SystemError", () =>
      Effect.gen(function*() {
        expect.assertions(1);

        clientMock.on(HeadObjectCommand).rejects(new Error("Invalid S3 path"));

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.exists("path-to-file.ext").pipe(Effect.exit);

        expect(result).toStrictEqual(Exit.fail(PlatformError.SystemError({
          module: "FileSystem",
          method: "access",
          reason: "Unknown",
          message: "Invalid S3 path",
          pathOrDescriptor: "path-to-file.ext",
        })));
      }).pipe(Effect.provide(mainLayer)));
  });

  describe("readFile", () => {
    it.effect("should read file", () =>
      Effect.gen(function*() {
        expect.assertions(3);

        const blob = mock<NonNullable<GetObjectCommandOutput["Body"]>>();
        blob.transformToByteArray.mockResolvedValue(Buffer.from("mocked-body"));
        clientMock.on(GetObjectCommand).resolves({ Body: blob });

        const fs = yield* FileSystem.FileSystem;

        const content = yield* fs.readFileString("path-to-file.ext");

        expect(content).toStrictEqual("mocked-body");
        expect(clientMock).toHaveReceivedCommandOnce(GetObjectCommand);
        expect(clientMock).toHaveReceivedCommandWith(GetObjectCommand, {
          Bucket: "test-bucket",
          Key: "path-to-file.ext",
        });
      }).pipe(Effect.provide(mainLayer)));
  });

  describe("makeDirectory", () => {
    it.effect("should fail with AlreadyExists system error", () =>
      Effect.gen(function*() {
        expect.assertions(3);

        // Mock directory already exists which is negative
        clientMock.on(HeadObjectCommand, { Bucket: "test-bucket", Key: "aaa/bbb/ccc/" }).resolves({});
        // Mock parent directory exists which is positive
        clientMock.on(HeadObjectCommand, { Bucket: "test-bucket", Key: "aaa/bbb/" }).resolves({});

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.makeDirectory("./aaa/bbb/ccc").pipe(Effect.exit);

        expect(result).toStrictEqual(
          Exit.fail(PlatformError.SystemError({
            module: "FileSystem",
            method: "makeDirectory",
            reason: "AlreadyExists",
            message: "[object Object]", // TODO: Fix this
            pathOrDescriptor: "aaa/bbb/ccc/",
            syscall: "headObject",
          })),
        );
        expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 2);
        expect(clientMock).not.toHaveReceivedCommand(PutObjectCommand);
      }).pipe(Effect.provide(mainLayer)));

    it.effect("should fail with NotFound system error", () =>
      Effect.gen(function*() {
        expect.assertions(3);

        // Mock directory does not exist which is positive
        clientMock.on(HeadObjectCommand, { Bucket: "test-bucket", Key: "aaa/bbb/ccc/" }).rejects(
          new NotFound({ $metadata: {}, message: "Directory not found" }),
        );
        // Mock parent directory does not exist which is negative
        clientMock.on(HeadObjectCommand, { Bucket: "test-bucket", Key: "aaa/bbb/" }).rejects(
          new NotFound({ $metadata: {}, message: "Parent directory not found" }),
        );

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.makeDirectory("./aaa/bbb/ccc").pipe(Effect.exit);

        expect(result).toStrictEqual(
          Exit.fail(PlatformError.SystemError({
            module: "FileSystem",
            method: "makeDirectory",
            reason: "NotFound",
            message: "Parent directory not found",
            pathOrDescriptor: "aaa/bbb/ccc/",
            syscall: "headObject",
          })),
        );
        expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 2);
        expect(clientMock).not.toHaveReceivedCommand(PutObjectCommand);
      }).pipe(Effect.provide(mainLayer)));

    it.effect("should make directory", () =>
      Effect.gen(function*() {
        expect.assertions(4);

        // Mock directory does not exist which is positive
        clientMock.on(HeadObjectCommand, { Bucket: "test-bucket", Key: "aaa/bbb/ccc/" }).rejects(
          new NotFound({ $metadata: {}, message: "Directory not found" }),
        );
        // Mock parent directory exists which is positive
        clientMock.on(HeadObjectCommand, { Bucket: "test-bucket", Key: "aaa/bbb/" }).resolves({});
        clientMock.on(PutObjectCommand).resolves({});

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.makeDirectory("./aaa/bbb/ccc");

        expect(result).toStrictEqual(void 0);
        expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 2);
        expect(clientMock).toHaveReceivedCommandOnce(PutObjectCommand);
        expect(clientMock).toHaveReceivedCommandWith(PutObjectCommand, {
          Bucket: "test-bucket",
          Key: "aaa/bbb/ccc/",
        });
      }).pipe(Effect.provide(mainLayer)));

    it.effect("should make directory recursively", () =>
      Effect.gen(function*() {
        expect.assertions(5);

        // Mock directory does not exist which is positive
        clientMock.on(HeadObjectCommand, { Bucket: "test-bucket", Key: "aaa/bbb/ccc/" }).rejects(
          new NotFound({ $metadata: {}, message: "Directory not found" }),
        );
        clientMock.on(PutObjectCommand).resolves({});

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.makeDirectory("./aaa/bbb/ccc", { recursive: true });

        expect(result).toStrictEqual(void 0);
        expect(clientMock).toHaveReceivedCommandOnce(HeadObjectCommand);
        expect(clientMock).toHaveReceivedCommandWith(HeadObjectCommand, {
          Bucket: "test-bucket",
          Key: "aaa/bbb/ccc/",
        });
        expect(clientMock).toHaveReceivedCommandOnce(PutObjectCommand);
        expect(clientMock).toHaveReceivedCommandWith(PutObjectCommand, {
          Bucket: "test-bucket",
          Key: "aaa/bbb/ccc/",
        });
      }).pipe(Effect.provide(mainLayer)));
  });
});
