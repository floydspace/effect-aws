import type { S3Service } from "@effect-aws/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { Error as PlatformError, FileSystem } from "@effect/platform";
import type { Context } from "effect";
import { Array, Config, Effect, Layer, Match, Option, String as Str } from "effect";
import type { S3FileSystemConfig } from "../S3FileSystem.js";

/** @internal */
const handleBadArgument = (method: string) => (err: unknown) =>
  new PlatformError.BadArgument({
    module: "FileSystem",
    method,
    cause: err,
  });

/** @internal */
const handleSystemError =
  (method: string, reason: PlatformError.SystemErrorReason, path: string, syscall?: string) => (err: unknown) =>
    new PlatformError.SystemError({
      module: "FileSystem",
      method,
      reason,
      cause: err,
      pathOrDescriptor: path,
      syscall,
    });

const checkPath = (path: string) =>
  Effect.gen(function*() {
    if (Str.isEmpty(path)) {
      yield* Effect.fail(new Error("Path is empty"));
    }
  });

const access = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) => (path: string) =>
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
  // options?: FileSystem.CopyOptions,
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
  options?: FileSystem.MakeDirectoryOptions,
): Effect.Effect<void, PlatformError.PlatformError> =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(Effect.mapError(handleBadArgument("makeDirectory")));
    // ensure trailing slash
    let key = path.startsWith(".") ? path.slice(1) : path;
    key = key.startsWith("/") ? key.slice(1) : key;
    key = key ? key.endsWith("/") ? key : `${key}/` : "";
    yield* Effect.all([
      s3.headObject({ Bucket: config.bucketName, Key: key }).pipe(
        Effect.flip,
        Effect.mapError(handleSystemError("makeDirectory", "AlreadyExists", key, "headObject")),
      ),
      !options?.recursive ?
        s3.headObject({ Bucket: config.bucketName, Key: key.replace(/[^/]+\/$/, "") }).pipe(
          Effect.mapError((error) =>
            Match.value(error).pipe(
              Match.tag("NotFound", handleSystemError("makeDirectory", "NotFound", key, "headObject")),
              Match.orElse(handleSystemError("makeDirectory", "Unknown", key, "headObject")),
            )
          ),
        ) :
        Effect.void,
    ], { concurrency: "unbounded", discard: true });
    yield* s3.putObject({ Bucket: config.bucketName, Key: key }).pipe(
      Effect.mapError(handleSystemError("makeDirectory", "Unknown", key, "putObject")),
    );
  });

const readDirectory = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  path: string,
  options?: FileSystem.ReadDirectoryOptions,
): Effect.Effect<Array<string>, PlatformError.PlatformError> =>
  Effect.gen(function*() {
    yield* checkPath(path).pipe(Effect.mapError(handleBadArgument("readDirectory")));
    let key = path.startsWith(".") ? path.slice(1) : path;
    key = key.startsWith("/") ? key.slice(1) : key;
    key = key ? key.endsWith("/") ? key : `${key}/` : "";
    return yield* s3.listObjects({ Bucket: config.bucketName, Prefix: key }).pipe(
      Effect.flatMap((response) => Effect.fromNullable(response.Contents)),
      Effect.map(Array.filterMap((content) =>
        options?.recursive
          ? Option.fromNullable(content.Key?.replace(new RegExp(`^${key}`), "") || null)
          : Option.fromNullable(content.Key?.replace(new RegExp(`^${key}`), "").replace(/\/.*$/, "") || null)
      )),
      Effect.map(Array.dedupe),
      Effect.mapError((error) =>
        Match.value(error).pipe(
          Match.tag("NoSuchElementException", handleSystemError("readDirectory", "NotFound", key, "listObjects")),
          Match.tag("NoSuchBucket", handleSystemError("readDirectory", "NotFound", key, "listObjects")),
          Match.orElse(handleSystemError("readDirectory", "Unknown", key, "listObjects")),
        )
      ),
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

const removeFactory = (method: string) =>
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

const remove = removeFactory("remove");

const rename = (s3: Context.Tag.Service<S3Service>, config: S3FileSystemConfig) =>
(
  oldPath: string,
  newPath: string,
) =>
  Effect.gen(function*() {
    yield* copyFileFactory("rename")(s3, config)(oldPath, newPath);
    yield* removeFactory("rename")(s3, config)(oldPath);
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
        readDirectory: readDirectory(s3, config),
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
