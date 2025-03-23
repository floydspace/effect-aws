import { NotFound } from "@aws-sdk/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { S3FileSystem } from "@effect-aws/s3";
import { FileSystem } from "@effect/platform";
import { it } from "@effect/vitest";
import { Arg } from "@fluffy-spoon/substitute";
import { Effect, Layer, String, Struct } from "effect";
import { beforeEach, describe, expect } from "vitest";
import type { S3SubstituteBuilder } from "./utils/index.js";
import { SubstituteBuilder } from "./utils/index.js";

describe("S3FileSystem", () => {
  let builder: S3SubstituteBuilder;
  let mainLayer: Layer.Layer<FileSystem.FileSystem>;

  beforeEach(() => {
    builder = SubstituteBuilder.forS3();
    mainLayer = Layer.provide(
      S3FileSystem.layer,
      S3.baseLayer(() => builder.substitute),
    );
  });

  it.effect("should access file", () =>
    Effect.gen(function*() {
      expect.assertions(1);

      builder
        .mockHeadObject()
        .succeeds();

      const fs = yield* FileSystem.FileSystem;

      const exists = yield* fs.exists("s3://test-bucket/path-to-file.ext");

      expect(exists).toBe(true);
    }).pipe(Effect.provide(mainLayer)));

  it.effect("should read file", () =>
    Effect.gen(function*() {
      expect.assertions(1);

      builder
        .mockGetObject()
        .withTextBody("mocked-body")
        .succeeds();

      const fs = yield* FileSystem.FileSystem;

      const content = yield* fs.readFileString("s3://test-bucket/path-to-file.ext");

      expect(content).toStrictEqual("mocked-body");
      builder.substitute.received(1).send(
        Arg.is((a) => {
          return Struct.getEquivalence({
            Bucket: String.Equivalence,
            Key: String.Equivalence,
          })(a.input as any, {
            Bucket: "test-bucket",
            Key: "path-to-file.ext",
          });
        }),
        Arg.any(),
      );
    }).pipe(Effect.provide(mainLayer)));

  it.effect("should fail with BadArgument", () =>
    Effect.gen(function*() {
      expect.assertions(2);

      const fs = yield* FileSystem.FileSystem;

      yield* fs.exists("s3://test-bucket").pipe(
        Effect.catchAll((error) => {
          expect(error._tag).toBe("BadArgument");
          expect(error.message).toBe("Invalid S3 path");
          return Effect.void;
        }),
      );
    }).pipe(Effect.provide(mainLayer)));

  it.effect("should fail with SystemError", () =>
    Effect.gen(function*() {
      expect.assertions(2);

      builder
        .mockHeadObject()
        .failsWith(new Error("Invalid S3 path"));

      const fs = yield* FileSystem.FileSystem;

      yield* fs.exists("s3://test-bucket/path-to-file.ext").pipe(
        Effect.catchAll((error) => {
          expect(error._tag).toBe("SystemError");
          expect(error.message).toBe("Invalid S3 path");
          return Effect.void;
        }),
      );
    }).pipe(Effect.provide(mainLayer)));

  it.effect("should file not exist", () =>
    Effect.gen(function*() {
      expect.assertions(1);

      builder
        .mockHeadObject()
        .failsWith(new NotFound({ $metadata: {}, message: "Invalid S3 path" }));

      const fs = yield* FileSystem.FileSystem;

      const result = yield* fs.exists("s3://test-bucket/path-to-file.ext");

      expect(result).toBe(false);
    }).pipe(Effect.provide(mainLayer)));
});
