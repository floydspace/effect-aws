import { Buffer } from "node:buffer";
import { Readable } from "node:stream";

import type { CompletedPart, CompleteMultipartUploadCommandOutput, PutObjectCommandInput } from "@aws-sdk/client-s3";
import type { S3Service, S3ServiceError, SdkError } from "@effect-aws/client-s3";
import { S3 } from "@effect-aws/client-s3";
import { Error as PlatformError } from "@effect/platform";
import type { Cause } from "effect";
import { Chunk, Effect, Exit, Ref, Stream } from "effect";

async function* getChunkStream<T>(
  data: T,
  partSize: number,
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
        data: dataChunk.subarray(0, partSize),
      };

      // Reset the buffer.
      currentBuffer.chunks = [dataChunk.subarray(partSize)];
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

async function* getChunkUint8Array(
  data: Uint8Array,
  partSize: number,
): AsyncGenerator<RawDataPart, void, undefined> {
  let partNumber = 1;
  let startByte = 0;
  let endByte = partSize;

  while (endByte < data.byteLength) {
    yield {
      partNumber,
      data: data.subarray(startByte, endByte),
    };
    partNumber += 1;
    startByte = endByte;
    endByte = startByte + partSize;
  }

  yield {
    partNumber,
    data: data.subarray(startByte),
    lastPart: true,
  };
}

async function* getDataReadable(data: Readable): AsyncGenerator<Uint8Array> {
  for await (const chunk of data) {
    if (Buffer.isBuffer(chunk) || chunk instanceof Uint8Array) {
      yield chunk;
    } else {
      yield Buffer.from(chunk);
    }
  }
}

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

const getChunk = (data: BodyDataTypes, partSize: number): AsyncGenerator<RawDataPart, void, undefined> => {
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

const MIN_PART_SIZE = 1024 * 1024 * 5;

interface UploadObjectOptions {
  /**
   * The size of the concurrent queue manager to upload parts in parallel. Set to 1 for synchronous uploading of parts. Note that the uploader will buffer at most queueSize * partSize bytes into memory at any given time.
   * default: 4
   */
  queueSize: number;

  /**
   * Default: 5 mb
   * The size in bytes for each individual part to be uploaded. Adjust the part size to ensure the number of parts does not exceed maxTotalParts. See 5mb is the minimum allowed part size.
   */
  partSize: number;
}

const uploadPart = (
  partNumber: number,
  uploadId: string | undefined,
  params: PutObjectCommandInput,
): Effect.Effect<CompletedPart, SdkError | S3ServiceError, S3Service> =>
  Effect.gen(function*() {
    const partResult = yield* S3.uploadPart({
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

/**
 * Upload an object to S3 using multipart upload.
 *
 * @since 0.1.0
 * @category execution
 */
export const uploadObject = (
  args: PutObjectCommandInput,
  options?: UploadObjectOptions,
): Effect.Effect<
  CompleteMultipartUploadCommandOutput,
  SdkError | S3ServiceError | PlatformError.BadArgument | Cause.NoSuchElementException,
  S3Service
> =>
  Effect.gen(function*() {
    const partSize = options?.partSize || MIN_PART_SIZE;
    const queueSize = options?.queueSize || 4;

    if (partSize < MIN_PART_SIZE) {
      return yield* Effect.fail(
        PlatformError.BadArgument({
          module: "MulipartUpload" as any,
          method: "uploadObject",
          message:
            `EntityTooSmall: Your proposed upload partsize [${partSize}] is smaller than the minimum allowed size [${MIN_PART_SIZE}] (5MB)`,
        }),
      );
    }

    if (queueSize < 1) {
      return yield* Effect.fail(
        PlatformError.BadArgument({
          module: "MulipartUpload" as any,
          method: "uploadObject",
          message: `Queue size: Must have at least one uploading queue.`,
        }),
      );
    }

    const { Body, ...params } = args;
    const dataFeeder = getChunk(Body, partSize);
    const dataStream = Stream.fromAsyncIterable(dataFeeder, (err) =>
      PlatformError.BadArgument({
        module: "MulipartUpload" as any,
        method: "uploadObject",
        message: (err as Error).message,
      }));

    const completeRef = yield* Ref.make<CompleteMultipartUploadCommandOutput | null>(null);

    yield* Effect.acquireUseRelease(
      S3.createMultipartUpload(params),
      ({ UploadId }) =>
        dataStream.pipe(
          Stream.mapEffect(
            (dataPart) => uploadPart(dataPart.partNumber, UploadId, { ...params, Body: dataPart.data }),
            { concurrency: queueSize },
          ),
          Stream.runCollect,
        ),
      ({ UploadId }, exit) =>
        Exit.matchEffect(exit, {
          onSuccess: (parts) =>
            S3.completeMultipartUpload({ ...params, UploadId, MultipartUpload: { Parts: Chunk.toArray(parts) } }).pipe(
              Effect.flatMap((result) => Ref.set(completeRef, result)),
            ),
          onFailure: () => S3.abortMultipartUpload({ Bucket: params.Bucket, Key: params.Key, UploadId }),
        }).pipe(Effect.orDie),
    );

    return yield* completeRef.pipe(
      Effect.flatMap(Effect.fromNullable),
      Effect.map(({ Location, ...result }) => ({
        ...result,
        Location: typeof Location === "string" && Location.includes("%2F")
          ? Location.replace(/%2F/g, "/")
          : Location,
      })),
    );
  });
