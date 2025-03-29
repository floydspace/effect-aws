/**
 * @since 0.1.0
 */
import { S3 } from "@effect-aws/client-s3";
import type { FileSystem } from "@effect/platform";
import { Effect } from "effect";
import * as internal from "./internal/multipartUpload.js";

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
 * Upload an object to S3 using multipart upload.
 *
 * @since 0.1.0
 * @category execution
 */
export class MultipartUpload extends Effect.Service<MultipartUpload>()("AWSMultipartUpload", {
  effect: internal.make,
  accessors: true,
  dependencies: [S3.defaultLayer],
}) {}
