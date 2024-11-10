import type {
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  InvalidObjectState,
  NoSuchBucket,
  NoSuchKey,
  NoSuchUpload,
  NotFound,
  ObjectAlreadyInActiveTierError as ObjectAlreadyInActiveTierException,
  ObjectNotInActiveTierError as ObjectNotInActiveTierException,
  S3ServiceException,
} from "@aws-sdk/client-s3";
import { Data } from "effect";

export const AllServiceErrors = [
  "BucketAlreadyExists",
  "BucketAlreadyOwnedByYou",
  "InvalidObjectState",
  "NoSuchBucket",
  "NoSuchKey",
  "NoSuchUpload",
  "NotFound",
  "ObjectAlreadyInActiveTierError",
  "ObjectNotInActiveTierError",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type BucketAlreadyExistsError = TaggedException<BucketAlreadyExists>;
export type BucketAlreadyOwnedByYouError =
  TaggedException<BucketAlreadyOwnedByYou>;
export type InvalidObjectStateError = TaggedException<InvalidObjectState>;
export type NoSuchBucketError = TaggedException<NoSuchBucket>;
export type NoSuchKeyError = TaggedException<NoSuchKey>;
export type NoSuchUploadError = TaggedException<NoSuchUpload>;
export type NotFoundError = TaggedException<NotFound>;
export type ObjectAlreadyInActiveTierError =
  TaggedException<ObjectAlreadyInActiveTierException>;
export type ObjectNotInActiveTierError =
  TaggedException<ObjectNotInActiveTierException>;

export type S3ServiceError = TaggedException<
  S3ServiceException & { name: "S3ServiceError" }
>;
export const S3ServiceError = Data.tagged<S3ServiceError>("S3ServiceError");
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
