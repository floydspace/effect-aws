import type {
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  EncryptionTypeMismatch,
  InvalidObjectState,
  InvalidRequest,
  InvalidWriteOffset,
  NoSuchBucket,
  NoSuchKey,
  NoSuchUpload,
  NotFound,
  ObjectAlreadyInActiveTierError as ObjectAlreadyInActiveTierException,
  ObjectNotInActiveTierError as ObjectNotInActiveTierException,
  S3ServiceException,
  TooManyParts,
} from "@aws-sdk/client-s3";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";
import { Data } from "effect";

export const AllServiceErrors = [
  "BucketAlreadyExists",
  "BucketAlreadyOwnedByYou",
  "EncryptionTypeMismatch",
  "InvalidObjectState",
  "InvalidRequest",
  "InvalidWriteOffset",
  "NoSuchBucket",
  "NoSuchKey",
  "NoSuchUpload",
  "NotFound",
  "ObjectAlreadyInActiveTierError",
  "ObjectNotInActiveTierError",
  "TooManyParts",
] as const;

export type BucketAlreadyExistsError = TaggedException<BucketAlreadyExists>;
export type BucketAlreadyOwnedByYouError = TaggedException<BucketAlreadyOwnedByYou>;
export type EncryptionTypeMismatchError = TaggedException<EncryptionTypeMismatch>;
export type InvalidObjectStateError = TaggedException<InvalidObjectState>;
export type InvalidRequestError = TaggedException<InvalidRequest>;
export type InvalidWriteOffsetError = TaggedException<InvalidWriteOffset>;
export type NoSuchBucketError = TaggedException<NoSuchBucket>;
export type NoSuchKeyError = TaggedException<NoSuchKey>;
export type NoSuchUploadError = TaggedException<NoSuchUpload>;
export type NotFoundError = TaggedException<NotFound>;
export type ObjectAlreadyInActiveTierError = TaggedException<ObjectAlreadyInActiveTierException>;
export type ObjectNotInActiveTierError = TaggedException<ObjectNotInActiveTierException>;
export type TooManyPartsError = TaggedException<TooManyParts>;

export type S3ServiceError = TaggedException<
  S3ServiceException & { name: "S3ServiceError" }
>;
export const S3ServiceError = Data.tagged<S3ServiceError>("S3ServiceError");
export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
