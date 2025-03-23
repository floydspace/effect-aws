import type {
  EncryptionTypeMismatchError,
  InvalidObjectStateError,
  InvalidRequestError,
  InvalidWriteOffsetError,
  NoSuchKeyError,
  NotFoundError,
  ObjectNotInActiveTierError,
  S3Service,
  S3ServiceError,
  SdkError,
  TooManyPartsError,
} from "@effect-aws/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { FileSystem } from "@effect/platform";
import type { PlatformError, SystemErrorReason } from "@effect/platform/Error";
import { BadArgument, SystemError } from "@effect/platform/Error";
import type { Cause, Context } from "effect";
import { Config, Effect, Layer, String as Str } from "effect";
import type { S3FileSystemConfig } from "../S3FileSystem.js";

/** @internal */
const handleBadArgument = (err: unknown, method: string) =>
  BadArgument({
    module: "FileSystem",
    method,
    message: (err as Error).message ?? String(err),
  });

/** @internal */
const handleS3Error = (
  err:
    | SdkError
    | S3ServiceError
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

const checkPath = (path: string) =>
  Effect.gen(function*() {
    if (Str.isEmpty(path)) {
      yield* Effect.fail(new Error("Path is empty"));
    }
  });

const access = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  path: string,
  // options?: FileSystem.AccessFileOptions,
) =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "access"))),
    );
    yield* s3.headObject({ Bucket: config.bucketName, Key: path }).pipe(
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, "access", path))),
    );
  });

const copyFileFactory = (method: string) =>
(s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  fromPath: string,
  toPath: string,
  // options?: CopyOptions,
) =>
  Effect.gen(function*() {
    yield* Effect.all([checkPath(fromPath), checkPath(toPath)]).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, method))),
    );
    yield* s3.copyObject({ Bucket: config.bucketName, CopySource: `${config.bucketName}/${fromPath}`, Key: toPath })
      .pipe(
        Effect.catchAll((error) => Effect.fail(handleS3Error(error, method, fromPath))),
      );
  });

const copyFile = copyFileFactory("copyFile");

const makeDirectory = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  path: string,
  // options?: FileSystem.MakeDirectoryOptions,
) =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "makeDirectory"))),
    );
    // ensure trailing slash
    const key = `${path.endsWith("/") ? path : `${path}/`}`;
    yield* s3.putObject({ Bucket: config.bucketName, Key: key }).pipe(
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, "makeDirectory", path))),
    );
  });

const readFile = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) => (path: string) =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "readFile"))),
    );
    return yield* s3.getObject({ Bucket: config.bucketName, Key: path }).pipe(
      Effect.flatMap((response) => Effect.fromNullable(response.Body)),
      Effect.andThen((blob) => blob.transformToByteArray()),
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, "readFile", path))),
    );
  });

const renameFactory = (method: string) =>
(s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  path: string,
  // options?: FileSystem.RemoveOptions,
) =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, method))),
    );
    return yield* s3.deleteObject({ Bucket: config.bucketName, Key: path }).pipe(
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, method, path))),
    );
  });

const remove = renameFactory("remove");

const rename = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  oldPath: string,
  newPath: string,
) =>
  Effect.gen(function*() {
    yield* copyFileFactory("rename")(s3, config)(oldPath, newPath);
    yield* renameFactory("rename")(s3, config)(oldPath);
  });

const writeFile = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  path: string,
  data: Uint8Array,
  // options?: FileSystem.WriteFileOptions,
) =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(
      Effect.catchAll((error) => Effect.fail(handleBadArgument(error, "writeFile"))),
    );
    yield* s3.putObject({ Bucket: config.bucketName, Key: path, Body: data }).pipe(
      Effect.catchAll((error) => Effect.fail(handleS3Error(error, "writeFile", path))),
    );
  });

const makeFileSystem = (config: S3FileSystemConfig) =>
  Effect.gen(function*() {
    const s3 = yield* S3;

    return FileSystem.make({
      ...FileSystem.makeNoop({
        access: access(s3, config),
        copyFile: copyFile(s3, config),
        makeDirectory: makeDirectory(s3, config),
        readFile: readFile(s3, config),
        remove: remove(s3, config),
        rename: rename(s3, config),
        writeFile: writeFile(s3, config),
      }),
    });
  });

/** @internal */
export const layer = (config: S3FileSystemConfig) => Layer.effect(FileSystem.FileSystem, makeFileSystem(config));

/** @internal */
export const layerConfig = (config: Config.Config.Wrap<S3FileSystemConfig>) =>
  Config.unwrap(config).pipe(
    Effect.flatMap(makeFileSystem),
    Layer.effect(FileSystem.FileSystem),
  );
