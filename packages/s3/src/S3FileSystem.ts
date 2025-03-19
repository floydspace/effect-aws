import type { S3Service } from "@effect-aws/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { Error, FileSystem } from "@effect/platform";
import type { Context } from "effect";
import { Effect, Layer, Match, String } from "effect";

const readFile = (s3: Context.Tag.Service<S3Service>) => (path: string) =>
  Effect.gen(function*() {
    const { bucket, key } = yield* Match.value(path).pipe(
      Match.when(String.startsWith("s3://"), (p) => {
        const match = p.match(/^s3:\/\/([^/]+)\/(.+)$/);
        if (match) {
          return Effect.succeed({ bucket: match[1], key: match[2] });
        }
        return Effect.fail(Error.BadArgument({
          module: "FileSystem",
          method: "readFile",
          message: "Invalid S3 path",
        }));
      }),
      Match.when(String.startsWith("arn:aws:s3"), (p) => {
        const match = p.match(/^arn:aws:s3:::([^/]+)\/(.+)$/);
        if (match) {
          return Effect.succeed({ bucket: match[1], key: match[2] });
        }
        return Effect.fail(Error.BadArgument({
          module: "FileSystem",
          method: "readFile",
          message: "Invalid S3 ARN",
        }));
      }),
      Match.orElseAbsurd,
    );

    return yield* s3.getObject({ Bucket: bucket!, Key: key! }).pipe(
      Effect.flatMap((response) => Effect.fromNullable(response.Body)),
      Effect.andThen((blob) => blob.transformToByteArray()),
      Effect.catchAll((error) =>
        Effect.fail(Error.SystemError({
          module: "FileSystem",
          method: "readFile",
          reason: "Unknown",
          message: error.message,
          pathOrDescriptor: path,
        }))
      ),
    );
  });

const makeFileSystem = Effect.map(S3, (s3) =>
  FileSystem.make({
    ...FileSystem.makeNoop({
      readFile: readFile(s3),
    }),
  }));

export const layer = Layer.effect(FileSystem.FileSystem, makeFileSystem);
