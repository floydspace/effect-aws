/**
 * @since 0.1.0
 */
import type {
  CompleteMultipartUploadCommandOutput,
  PutObjectCommandInput,
  S3Client,
  S3ClientConfig,
} from "@aws-sdk/client-s3";
import { S3Service } from "@effect-aws/client-s3";
import type { Error as PlatformError, FileSystem } from "@effect/platform";
import type { Cause, Context, Effect, Stream } from "effect";
import { Layer } from "effect";
import * as internal from "./internal/multipartUpload.js";

/**
 * @since 0.1.0
 * @category models
 */
export interface UploadObjectCommandInput<E = never> extends Omit<PutObjectCommandInput, "Body"> {
  Body: PutObjectCommandInput["Body"] | Stream.Stream<Uint8Array, E>;
}

/**
 * @since 0.1.0
 * @category models
 */
export interface UploadObjectOptions {
  /**
   * The size of the concurrent queue manager to upload parts in parallel. Set to 1 for synchronous uploading of parts. Note that the uploader will buffer at most queueSize * partSize bytes into memory at any given time.
   * default: 4
   */
  readonly queueSize?: number;

  /**
   * Default: 5 mb
   * The size in bytes for each individual part to be uploaded. Adjust the part size to ensure the number of parts does not exceed maxTotalParts. See 5mb is the minimum allowed part size.
   */
  readonly partSize?: FileSystem.Size;
}

/**
 * @since 0.1.0
 * @category model
 */
export interface MultipartUpload {
  /**
   * Upload an object to S3 using multipart upload.
   */
  readonly uploadObject: <E>(
    args: UploadObjectCommandInput<E>,
    options?: UploadObjectOptions,
  ) => Effect.Effect<
    CompleteMultipartUploadCommandOutput,
    internal.S3ServiceErrors | PlatformError.BadArgument | Cause.NoSuchElementException
  >;
}

/**
 * @since 0.1.0
 * @category tag
 */
export const MultipartUpload: Context.Tag<MultipartUpload, MultipartUpload> = internal.tag;

/**
 * Upload an object to S3 using multipart upload.
 *
 * @since 0.1.0
 * @category execution
 */
export const uploadObject: <E>(
  args: UploadObjectCommandInput<E>,
  options?: UploadObjectOptions,
) => Effect.Effect<
  CompleteMultipartUploadCommandOutput,
  internal.S3ServiceErrors | PlatformError.BadArgument | Cause.NoSuchElementException | E,
  MultipartUpload
> = internal.uploadObject;

/**
 * @since 0.1.0
 * @category layers
 */
export const layerWithoutS3Service: Layer.Layer<MultipartUpload, never, S3Service> = Layer.effect(
  MultipartUpload,
  internal.make,
);

/**
 * @since 0.1.0
 * @category layers
 */
export const defaultLayer: Layer.Layer<MultipartUpload> = Layer.provide(layerWithoutS3Service, S3Service.defaultLayer);

/**
 * @since 0.1.0
 * @category layers
 */
export const layer = (config: S3Service.Config): Layer.Layer<MultipartUpload> =>
  Layer.provide(layerWithoutS3Service, S3Service.layer(config));

/**
 * @since 0.1.0
 * @category layers
 */
export const baseLayer = (evaluate: (defaultConfig: S3ClientConfig) => S3Client): Layer.Layer<MultipartUpload> =>
  Layer.provide(layerWithoutS3Service, S3Service.baseLayer(evaluate));
