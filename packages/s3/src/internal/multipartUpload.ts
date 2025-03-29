import { Buffer } from "node:buffer";
import { Readable } from "node:stream";

import type { CompletedPart, CompleteMultipartUploadCommandOutput, PutObjectCommandInput } from "@aws-sdk/client-s3";
import type {
  EncryptionTypeMismatchError,
  InvalidRequestError,
  InvalidWriteOffsetError,
  S3ServiceError,
  SdkError,
  TooManyPartsError,
} from "@effect-aws/client-s3";
import { S3Service } from "@effect-aws/client-s3";
import { Error as PlatformError, FileSystem } from "@effect/platform";
import type { Cause } from "effect";
import { Chunk, Context, Effect, Exit, Option, Ref, Sink, Stream } from "effect";
import type { MultipartUpload, UploadObjectOptions } from "../MultipartUpload.js";

/** @internal */
export const tag = Context.GenericTag<MultipartUpload>("@effect-aws/s3/MultipartUpload");

/** @internal */
const handleBadArgument = (method: string) => (err: unknown) =>
  PlatformError.BadArgument({
    module: "MultipartUpload" as any,
    method,
    message: (err as Error).message ?? String(err),
  });

/** @internal */
async function* getChunkStream<T>(
  data: T,
  partSize: FileSystem.Size,
  getNextData: (data: T) => AsyncGenerator<Uint8Array>,
): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  const currentBuffer = { chunks: [] as Array<Uint8Array>, length: 0 };

  for await (const datum of getNextData(data)) {
    currentBuffer.chunks.push(datum);
    currentBuffer.length += datum.byteLength;

    while (currentBuffer.length > partSize) {
      /**
       * Concat all the buffers together once if there is more than one to concat. Attempt
       * to minimize concats as Buffer.Concat is an extremely expensive operation.
       */
      const dataChunk = currentBuffer.chunks.length > 1 ? Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0];

      yield {
        partNumber,
        data: dataChunk.subarray(0, Number(partSize)),
      };

      // Reset the buffer.
      currentBuffer.chunks = [dataChunk.subarray(Number(partSize))];
      currentBuffer.length = currentBuffer.chunks[0].byteLength;
      partNumber += 1;
    }
  }

  yield {
    partNumber,
    data: currentBuffer.chunks.length !== 1 ? Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0],
    lastPart: true,
  };
}

/** @internal */
async function* getChunkUint8Array(
  data: Uint8Array,
  partSize: FileSystem.Size,
): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  let startByte = 0;
  let endByte = Number(partSize);

  while (endByte < data.byteLength) {
    yield {
      partNumber,
      data: data.subarray(startByte, Number(endByte)),
    };
    partNumber += 1;
    startByte = Number(endByte);
    endByte = startByte + Number(partSize);
  }

  yield {
    partNumber,
    data: data.subarray(startByte),
    lastPart: true,
  };
}

/** @internal */
async function* getDataReadable(data: Readable): AsyncGenerator<Uint8Array> {
  for await (const chunk of data) {
    if (Buffer.isBuffer(chunk) || chunk instanceof Uint8Array) {
      yield chunk;
    } else {
      yield Buffer.from(chunk);
    }
  }
}

/** @internal */
async function* getDataReadableStream(data: ReadableStream): AsyncGenerator<Uint8Array> {
  // Get a lock on the stream.
  const reader = data.getReader();

  try {
    while (true) {
      // Read from the stream.
      const { done, value } = await reader.read();
      // Exit if we're done.
      if (done) {
        return;
      }

      if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
        yield value;
      } else {
        yield Buffer.from(value);
      }
    }
  } finally {
    // release the lock for reading from this stream.
    reader.releaseLock();
  }
}

/** @internal */
const getChunk = (data: BodyDataTypes, partSize: FileSystem.Size): AsyncGenerator<RawDataPart, void, undefined> => {
  if (data instanceof Uint8Array) {
    // includes Buffer (extends Uint8Array)
    return getChunkUint8Array(data, partSize);
  }

  if (data instanceof Readable) {
    return getChunkStream<Readable>(data, partSize, getDataReadable);
  }

  if (data instanceof String || typeof data === "string") {
    return getChunkUint8Array(Buffer.from(data), partSize);
  }

  if (typeof (data as any).stream === "function") {
    // approximate support for Blobs.
    return getChunkStream<ReadableStream>((data as any).stream(), partSize, getDataReadableStream);
  }

  if (data instanceof ReadableStream) {
    return getChunkStream<ReadableStream>(data, partSize, getDataReadableStream);
  }

  throw new Error(
    "Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;.",
  );
};

// string | Uint8Array | Buffer | Readable | ReadableStream | Blob.
type BodyDataTypes = PutObjectCommandInput["Body"];

interface RawDataPart {
  partNumber: number;
  data: BodyDataTypes;
  lastPart?: boolean;
}

type PutObjectError =
  | SdkError
  | EncryptionTypeMismatchError
  | InvalidRequestError
  | InvalidWriteOffsetError
  | TooManyPartsError;

export type S3ServiceErrors = PutObjectError | S3ServiceError;

const MIN_PART_SIZE = FileSystem.MiB(5);

/** @internal */
export const make: Effect.Effect<MultipartUpload, never, S3Service> = Effect.gen(function*() {
  const s3 = yield* S3Service;

  const uploadPart = (
    partNumber: number,
    uploadId: string | undefined,
    params: PutObjectCommandInput,
  ): Effect.Effect<CompletedPart, SdkError | S3ServiceError> =>
    Effect.gen(function*() {
      const partResult = yield* s3.uploadPart({
        ...params,
        // dataPart.data is chunked into a non-streaming buffer
        // so the ContentLength from the input should not be used for MPU.
        ContentLength: undefined,
        UploadId: uploadId,
        PartNumber: partNumber,
      });

      if (!partResult.ETag) {
        yield* Effect.dieMessage(
          `Part ${partNumber} is missing ETag in UploadPart response. Missing Bucket CORS configuration for ETag header?`,
        );
      }

      return {
        PartNumber: partNumber,
        ETag: partResult.ETag,
        ...(partResult.ChecksumCRC32 && { ChecksumCRC32: partResult.ChecksumCRC32 }),
        ...(partResult.ChecksumCRC32C && { ChecksumCRC32C: partResult.ChecksumCRC32C }),
        ...(partResult.ChecksumSHA1 && { ChecksumSHA1: partResult.ChecksumSHA1 }),
        ...(partResult.ChecksumSHA256 && { ChecksumSHA256: partResult.ChecksumSHA256 }),
      };
    });

  const uploadObject = (
    args: PutObjectCommandInput,
    options?: UploadObjectOptions,
  ): Effect.Effect<
    CompleteMultipartUploadCommandOutput,
    S3ServiceErrors | PlatformError.BadArgument | Cause.NoSuchElementException
  > =>
    Effect.gen(function*() {
      const partSize = options?.partSize || MIN_PART_SIZE;
      const queueSize = options?.queueSize || 4;

      if (partSize < MIN_PART_SIZE) {
        return yield* Effect.fail(
          handleBadArgument("uploadObject")(
            `EntityTooSmall: Your proposed upload partsize [${partSize}] is smaller than the minimum allowed size [${MIN_PART_SIZE}] (5MB)`,
          ),
        );
      }

      if (queueSize < 1) {
        return yield* Effect.fail(
          handleBadArgument("uploadObject")(`Queue size: Must have at least one uploading queue.`),
        );
      }

      const { Body, ...params } = args;

      const dataStream = Stream.fromAsyncIterable(getChunk(Body, partSize), handleBadArgument("uploadObject"));

      const [doublet, tailStream] = yield* dataStream.pipe(Stream.peel(Sink.take(2)));
      const firstPart = yield* Chunk.head(doublet);
      const secondPart = Chunk.get(doublet, 1);

      if (Option.isNone(secondPart)) {
        return yield* s3.putObject({ ...params, Body: firstPart.data }).pipe(
          Effect.map((result) => ({ ...result, Bucket: params.Bucket, Key: params.Key })),
        );
      }

      const multiStream = Stream.merge(Stream.make(firstPart, secondPart.value), tailStream);

      const completeRef = yield* Ref.make<CompleteMultipartUploadCommandOutput | null>(null);

      yield* Effect.acquireUseRelease(
        s3.createMultipartUpload({ ...params, ChecksumAlgorithm: "CRC32" }),
        ({ UploadId }) =>
          multiStream.pipe(
            Stream.mapEffect(
              (dataPart) => uploadPart(dataPart.partNumber, UploadId, { ...params, Body: dataPart.data }),
              { concurrency: queueSize },
            ),
            Stream.runCollect,
          ),
        ({ UploadId }, exit) =>
          Exit.matchEffect(exit, {
            onSuccess: (parts) =>
              s3.completeMultipartUpload({ ...params, UploadId, MultipartUpload: { Parts: Chunk.toArray(parts) } })
                .pipe(
                  Effect.flatMap((result) => Ref.set(completeRef, result)),
                ),
            onFailure: () => s3.abortMultipartUpload({ Bucket: params.Bucket, Key: params.Key, UploadId }),
          }).pipe(Effect.orDie),
      );

      return yield* completeRef.pipe(
        Effect.flatMap(Effect.fromNullable),
        Effect.map((result) => ({
          ...result,
          ...(typeof result.Location === "string" && result.Location.includes("%2F")
            ? { Location: result.Location.replace(/%2F/g, "/") }
            : {}),
        })),
      );
    }).pipe(Effect.scoped);

  return tag.of({ uploadObject });
});

/** @internal */
export const uploadObject: (
  args: PutObjectCommandInput,
  options?: UploadObjectOptions,
) => Effect.Effect<
  CompleteMultipartUploadCommandOutput,
  S3ServiceErrors | PlatformError.BadArgument | Cause.NoSuchElementException,
  MultipartUpload
> = (args, options) => Effect.flatMap(tag, (_) => _.uploadObject(args, options));
