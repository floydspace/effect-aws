import type { S3Service } from "@effect-aws/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { FileSystem } from "@effect/platform";
import type { SystemErrorReason } from "@effect/platform/Error";
import { BadArgument, SystemError } from "@effect/platform/Error";
import type { Context } from "effect";
import { Config, Effect, Layer, Match, String as Str } from "effect";
import type { S3FileSystemConfig } from "../S3FileSystem.js";

/** @internal */
const handleBadArgument = (method: string) => (err: unknown) =>
  BadArgument({
    module: "FileSystem",
    method,
    message: (err as Error).message ?? String(err),
  });

/** @internal */
const handleSystemError = (method: string, reason: SystemErrorReason, path: string) => (err: unknown) =>
  SystemError({
    module: "FileSystem",
    method,
    reason,
    message: (err as Error).message ?? String(err),
    pathOrDescriptor: path,
  });

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
    yield* checkPath(path).pipe(Effect.mapError(handleBadArgument("access")));
    yield* s3.headObject({ Bucket: config.bucketName, Key: path }).pipe(
      Effect.mapError((error) =>
        Match.value(error).pipe(
          Match.tag("NotFound", handleSystemError("access", "NotFound", path)),
          Match.orElse(handleSystemError("access", "Unknown", path)),
        )
      ),
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
    yield* Effect.all([checkPath(fromPath), checkPath(toPath)]).pipe(Effect.mapError(handleBadArgument(method)));
    yield* s3.copyObject({ Bucket: config.bucketName, CopySource: `${config.bucketName}/${fromPath}`, Key: toPath })
      .pipe(Effect.mapError(handleSystemError(method, "Unknown", fromPath)));
  });

const copyFile = copyFileFactory("copyFile");

const makeDirectory = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  path: string,
  // options?: FileSystem.MakeDirectoryOptions,
) =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(Effect.mapError(handleBadArgument("makeDirectory")));
    // ensure trailing slash
    const key = `${path.endsWith("/") ? path : `${path}/`}`;
    yield* s3.putObject({ Bucket: config.bucketName, Key: key }).pipe(
      Effect.mapError(handleSystemError("makeDirectory", "Unknown", path)),
    );
  });

const readFile = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) => (path: string) =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(Effect.mapError(handleBadArgument("readFile")));
    return yield* s3.getObject({ Bucket: config.bucketName, Key: path }).pipe(
      Effect.flatMap((response) => Effect.fromNullable(response.Body)),
      Effect.andThen((blob) => blob.transformToByteArray()),
      Effect.mapError((error) =>
        Match.value(error).pipe(
          Match.tag("NoSuchKey", handleSystemError("readFile", "NotFound", path)),
          Match.orElse(handleSystemError("readFile", "Unknown", path)),
        )
      ),
    );
  });

const renameFactory = (method: string) =>
(s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  path: string,
  // options?: FileSystem.RemoveOptions,
) =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(Effect.mapError(handleBadArgument(method)));
    return yield* s3.deleteObject({ Bucket: config.bucketName, Key: path }).pipe(
      Effect.mapError(handleSystemError(method, "Unknown", path)),
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
    yield* checkPath(path).pipe(Effect.mapError(handleBadArgument("writeFile")));
    yield* s3.putObject({ Bucket: config.bucketName, Key: path, Body: data }).pipe(
      Effect.mapError(handleSystemError("writeFile", "Unknown", path)),
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
