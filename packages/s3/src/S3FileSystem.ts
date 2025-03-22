import type {
  EncryptionTypeMismatchError,
  InvalidObjectStateError,
  InvalidRequestError,
  InvalidWriteOffsetError,
  NoSuchKeyError,
  NotFoundError,
  ObjectNotInActiveTierError,
  S3Service,
  SdkError,
  TooManyPartsError,
} from "@effect-aws/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { FileSystem } from "@effect/platform";
import type { PlatformError, SystemErrorReason } from "@effect/platform/Error";
import { BadArgument, SystemError } from "@effect/platform/Error";
import type { Cause, Context } from "effect";
import { Effect, Layer, Match, String as Str } from "effect";

/** @internal */
const handleBadArgument = (err: unknown, method: string) =>
  BadArgument({
    module: "FileSystem",
    method,
    message: (err as Error).message ?? String(err),
  });

/** @internal */
export const handleS3Error = (
  err:
    | SdkError
    | NotFoundError
    | Cause.UnknownException
    | NoSuchKeyError
    | InvalidObjectStateError
    | Cause.NoSuchElementException
    | EncryptionTypeMismatchError
    | InvalidRequestError
    | InvalidWriteOffsetError
    | TooManyPartsError
    | ObjectNotInActiveTierError,
  method: string,
  path: string,
): PlatformError => {
  let reason: SystemErrorReason = "Unknown";

  if (err._tag === "NotFound") {
    reason = "NotFound";
  }

  return SystemError({
    module: "FileSystem",
    method,
    reason,
    message: err.message,
    pathOrDescriptor: path,
  });
};

/** @internal */
const extractBucketKey = (path: string) =>
  Effect.gen(function*() {
    return yield* Match.value(path).pipe(
      Match.when(Str.startsWith("s3://"), (p) => {
        const match = p.match(/^s3:\/\/(?<bucket>[^/]+)\/(?<key>.+)$/);
        return match?.groups
          ? Effect.succeed({ bucket: match.groups.bucket, key: match.groups.key })
          : Effect.fail(new Error("Invalid S3 path"));
      }),
      Match.when(Str.startsWith("arn:aws:s3"), (p) => {
        const match = p.match(/^arn:aws:s3:::(?<bucket>[^/]+)\/(?<key>.+)$/);
        return match?.groups
          ? Effect.succeed({ bucket: match.groups.bucket, key: match.groups.key })
          : Effect.fail(new Error("Invalid S3 ARN"));
      }),
      Match.orElse((p) => Effect.succeed({ bucket: undefined, key: p })),
    );
  });

const access = (s3: Context.Tag.Service<S3Service>) =>
(
  path: string,
  // options?: FileSystem.AccessFileOptions,
) =>
  Effect.gen(function*() {
    const { bucket, key } = yield* extractBucketKey(path).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "access"))),
    );

    yield* s3.headObject({ Bucket: bucket, Key: key }).pipe(
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, "access", path))),
    );
  });

const copy = (s3: Context.Tag.Service<S3Service>) =>
(
  fromPath: string,
  toPath: string,
  // options?: CopyOptions,
) =>
  Effect.gen(function*() {
    const { bucket, key: fromKey } = yield* extractBucketKey(fromPath).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "copy"))),
    );
    const { key: toKey } = yield* extractBucketKey(toPath).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "copy"))),
    );

    yield* s3.copyObject({ Bucket: bucket, CopySource: fromKey, Key: toKey }).pipe(
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, "copy", fromPath))),
    );
  });

const readFile = (s3: Context.Tag.Service<S3Service>) => (path: string) =>
  Effect.gen(function*() {
    const { bucket, key } = yield* extractBucketKey(path).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "readFile"))),
    );

    return yield* s3.getObject({ Bucket: bucket, Key: key }).pipe(
      Effect.flatMap((response) => Effect.fromNullable(response.Body)),
      Effect.andThen((blob) => blob.transformToByteArray()),
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, "readFile", path))),
    );
  });

const writeFile = (s3: Context.Tag.Service<S3Service>) =>
(
  path: string,
  data: Uint8Array,
  // options?: FileSystem.WriteFileOptions,
) =>
  Effect.gen(function*() {
    const { bucket, key } = yield* extractBucketKey(path).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "writeFile"))),
    );

    yield* s3.putObject({ Bucket: bucket, Key: key, Body: data }).pipe(
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, "writeFile", path))),
    );
  });

const makeFileSystem = Effect.map(S3, (s3) =>
  FileSystem.make({
    ...FileSystem.makeNoop({
      access: access(s3),
      copy: copy(s3),
      readFile: readFile(s3),
      writeFile: writeFile(s3),
    }),
  }));

export const layer = Layer.effect(FileSystem.FileSystem, makeFileSystem);
