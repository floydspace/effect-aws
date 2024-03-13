import type {
  S3ServiceException,
  NoSuchUpload,
  ObjectNotInActiveTierError,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  NoSuchBucket,
  InvalidObjectState,
  NoSuchKey,
  NotFound,
} from "@aws-sdk/client-s3";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type NoSuchUploadError = TaggedException<NoSuchUpload>;
export type ObjectNotInActiveTierErrorError =
  TaggedException<ObjectNotInActiveTierError>;
export type BucketAlreadyExistsError = TaggedException<BucketAlreadyExists>;
export type BucketAlreadyOwnedByYouError =
  TaggedException<BucketAlreadyOwnedByYou>;
export type NoSuchBucketError = TaggedException<NoSuchBucket>;
export type InvalidObjectStateError = TaggedException<InvalidObjectState>;
export type NoSuchKeyError = TaggedException<NoSuchKey>;
export type NotFoundError = TaggedException<NotFound>;

export type S3ServiceError = TaggedException<
  S3ServiceException & { name: "S3ServiceError" }
>;
export const S3ServiceError = Data.tagged<S3ServiceError>("S3ServiceError");
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
