import type { GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { GetObjectCommand, HeadObjectCommand, NotFound, S3Client } from "@aws-sdk/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { S3FileSystem } from "@effect-aws/s3";
import { FileSystem } from "@effect/platform";
import { it } from "@effect/vitest";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Layer } from "effect";
import { describe, expect } from "vitest";
import { mock } from "vitest-mock-extended";

const clientMock = mockClient(S3Client);
const mainLayer = Layer.provide(
  S3FileSystem.layer({ bucketName: "test-bucket" }),
  S3.defaultLayer,
);

describe("S3FileSystem", () => {
  describe("exists", () => {
    it.effect("should file exist", () =>
      Effect.gen(function*() {
        expect.assertions(3);

        clientMock.reset().on(HeadObjectCommand).resolves({});

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

        clientMock.reset().on(HeadObjectCommand).rejects(new NotFound({ $metadata: {}, message: "File not found" }));

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
        expect.assertions(2);

        const fs = yield* FileSystem.FileSystem;

        yield* fs.exists("").pipe(
          Effect.catchAll((error) => {
            expect(error._tag).toBe("BadArgument");
            expect(error.message).toBe("Path is empty");
            return Effect.void;
          }),
        );
      }).pipe(Effect.provide(mainLayer)));

    it.effect("should fail with SystemError", () =>
      Effect.gen(function*() {
        expect.assertions(2);

        clientMock.reset().on(HeadObjectCommand).rejects(new Error("Invalid S3 path"));

        const fs = yield* FileSystem.FileSystem;

        yield* fs.exists("path-to-file.ext").pipe(
          Effect.catchAll((error) => {
            expect(error._tag).toBe("SystemError");
            expect(error.message).toBe("Invalid S3 path");
            return Effect.void;
          }),
        );
      }).pipe(Effect.provide(mainLayer)));
  });

  it.effect("should read file", () =>
    Effect.gen(function*() {
      expect.assertions(3);

      const blob = mock<NonNullable<GetObjectCommandOutput["Body"]>>();
      blob.transformToByteArray.mockResolvedValue(Buffer.from("mocked-body"));
      clientMock.reset().on(GetObjectCommand).resolves({ Body: blob });

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
