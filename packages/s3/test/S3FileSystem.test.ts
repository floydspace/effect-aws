import type { GetObjectCommandOutput } from "@aws-sdk/client-s3";
import {
  GetObjectCommand,
  HeadObjectCommand,
  ListObjectsCommand,
  NotFound,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { S3FileSystem } from "@effect-aws/s3";
import { layer } from "@effect/vitest";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit, FileSystem, Layer, PlatformError } from "effect";
import { afterEach, describe, expect } from "vitest";
import { mock } from "vitest-mock-extended";
import { SdkError } from "../../commons/src/Errors.js";

const clientMock = mockClient(S3Client);
const TestLayer = Layer.provide(
  S3FileSystem.layer({ bucketName: "test-bucket" }),
  S3.defaultLayer,
);

layer(TestLayer)("S3FileSystem", (it) => {
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
      }));

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
      }));

    it.effect("should fail with BadArgument", () =>
      Effect.gen(function*() {
        expect.assertions(1);

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.exists("").pipe(Effect.exit);

        expect(result).toStrictEqual(Exit.fail(
          new PlatformError.PlatformError(
            new PlatformError.BadArgument({
              module: "FileSystem",
              method: "access",
              cause: new Error("Path is empty"),
            }),
          ),
        ));
      }));

    it.effect("should fail with SystemError", () =>
      Effect.gen(function*() {
        expect.assertions(1);

        const err = new Error("Invalid S3 path");
        clientMock.on(HeadObjectCommand).rejects(err);

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.exists("path-to-file.ext").pipe(Effect.exit);

        expect(result).toStrictEqual(Exit.fail(
          new PlatformError.PlatformError(
            new PlatformError.SystemError({
              module: "FileSystem",
              method: "access",
              _tag: "Unknown",
              pathOrDescriptor: "path-to-file.ext",
              syscall: undefined,
              cause: new SdkError({ name: "SdkError", message: err.message, stack: err.stack }),
            }),
          ),
        ));
      }));
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
      }));
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
          Exit.fail(
            new PlatformError.PlatformError(
              new PlatformError.SystemError({
                module: "FileSystem",
                method: "makeDirectory",
                _tag: "AlreadyExists",
                pathOrDescriptor: "aaa/bbb/ccc/",
                syscall: "headObject",
                cause: {}, // TODO: Fix this
              }),
            ),
          ),
        );
        expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 2);
        expect(clientMock).not.toHaveReceivedCommand(PutObjectCommand);
      }));

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
          Exit.fail(
            new PlatformError.PlatformError(
              new PlatformError.SystemError({
                module: "FileSystem",
                method: "makeDirectory",
                _tag: "NotFound",
                pathOrDescriptor: "aaa/bbb/ccc/",
                syscall: "headObject",
              }),
            ),
          ),
        );
        expect(clientMock).toHaveReceivedCommandTimes(HeadObjectCommand, 2);
        expect(clientMock).not.toHaveReceivedCommand(PutObjectCommand);
      }));

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
      }));

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
      }));
  });

  describe("readDirectory", () => {
    it.effect("should read directory", () =>
      Effect.gen(function*() {
        expect.assertions(3);

        clientMock.on(ListObjectsCommand).resolves({
          Contents: [{ Key: "folder1/" }, { Key: "folder1/file1" }, { Key: "file2" }],
        });

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.readDirectory("path-to-dir");

        expect(result).toStrictEqual(["folder1", "file2"]);
        expect(clientMock).toHaveReceivedCommandOnce(ListObjectsCommand);
        expect(clientMock).toHaveReceivedCommandWith(ListObjectsCommand, {
          Bucket: "test-bucket",
          Prefix: "path-to-dir/",
        });
      }));

    it.effect("should read directory recursively", () =>
      Effect.gen(function*() {
        expect.assertions(3);

        clientMock.on(ListObjectsCommand).resolves({
          Contents: [{ Key: "folder1/" }, { Key: "folder1/file1" }, { Key: "file2" }],
        });

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.readDirectory("path-to-dir", { recursive: true });

        expect(result).toStrictEqual(["folder1/", "folder1/file1", "file2"]);
        expect(clientMock).toHaveReceivedCommandOnce(ListObjectsCommand);
        expect(clientMock).toHaveReceivedCommandWith(ListObjectsCommand, {
          Bucket: "test-bucket",
          Prefix: "path-to-dir/",
        });
      }));

    it.effect("should fail with NotFound system error", () =>
      Effect.gen(function*() {
        expect.assertions(2);

        clientMock.on(ListObjectsCommand).resolves({});

        const fs = yield* FileSystem.FileSystem;

        const result = yield* fs.readDirectory("path-to-dir").pipe(Effect.exit);

        expect(result).toStrictEqual(Exit.fail(
          new PlatformError.PlatformError(
            new PlatformError.SystemError({
              module: "FileSystem",
              method: "readDirectory",
              _tag: "NotFound",
              pathOrDescriptor: "path-to-dir/",
              syscall: "listObjects",
            }),
          ),
        ));

        expect(clientMock).toHaveReceivedCommandOnce(ListObjectsCommand);
      }));
  });
});
