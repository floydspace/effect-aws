import type {
  AccessDenied,
  AnnotationLimitExceeded,
  AnnotationNameTooLong,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  EncryptionTypeMismatch,
  IdempotencyParameterMismatch,
  InvalidAnnotationName,
  InvalidObjectState,
  InvalidPrefix,
  InvalidRequest,
  InvalidWriteOffset,
  NoSuchAnnotation,
  NoSuchBucket,
  NoSuchKey,
  NoSuchUpload,
  NotFound,
  ObjectAlreadyInActiveTierError as ObjectAlreadyInActiveTierException,
  ObjectNotInActiveTierError as ObjectNotInActiveTierException,
  S3ServiceException,
  TooManyParts,
  UnsupportedMediaType,
} from "@aws-sdk/client-s3";
import type { TaggedException } from "@effect-aws/commons/Errors";
import * as Data from "effect/Data";

export const AllServiceErrors = [
  "AccessDenied",
  "AnnotationLimitExceeded",
  "AnnotationNameTooLong",
  "BucketAlreadyExists",
  "BucketAlreadyOwnedByYou",
  "EncryptionTypeMismatch",
  "IdempotencyParameterMismatch",
  "InvalidAnnotationName",
  "InvalidObjectState",
  "InvalidPrefix",
  "InvalidRequest",
  "InvalidWriteOffset",
  "NoSuchAnnotation",
  "NoSuchBucket",
  "NoSuchKey",
  "NoSuchUpload",
  "NotFound",
  "ObjectAlreadyInActiveTierError",
  "ObjectNotInActiveTierError",
  "TooManyParts",
  "UnsupportedMediaType",
] as const;

export type AccessDeniedError = TaggedException<AccessDenied>;
export type AnnotationLimitExceededError = TaggedException<AnnotationLimitExceeded>;
export type AnnotationNameTooLongError = TaggedException<AnnotationNameTooLong>;
export type BucketAlreadyExistsError = TaggedException<BucketAlreadyExists>;
export type BucketAlreadyOwnedByYouError = TaggedException<BucketAlreadyOwnedByYou>;
export type EncryptionTypeMismatchError = TaggedException<EncryptionTypeMismatch>;
export type IdempotencyParameterMismatchError = TaggedException<IdempotencyParameterMismatch>;
export type InvalidAnnotationNameError = TaggedException<InvalidAnnotationName>;
export type InvalidObjectStateError = TaggedException<InvalidObjectState>;
export type InvalidPrefixError = TaggedException<InvalidPrefix>;
export type InvalidRequestError = TaggedException<InvalidRequest>;
export type InvalidWriteOffsetError = TaggedException<InvalidWriteOffset>;
export type NoSuchAnnotationError = TaggedException<NoSuchAnnotation>;
export type NoSuchBucketError = TaggedException<NoSuchBucket>;
export type NoSuchKeyError = TaggedException<NoSuchKey>;
export type NoSuchUploadError = TaggedException<NoSuchUpload>;
export type NotFoundError = TaggedException<NotFound>;
export type ObjectAlreadyInActiveTierError = TaggedException<ObjectAlreadyInActiveTierException>;
export type ObjectNotInActiveTierError = TaggedException<ObjectNotInActiveTierException>;
export type TooManyPartsError = TaggedException<TooManyParts>;
export type UnsupportedMediaTypeError = TaggedException<UnsupportedMediaType>;

export type S3ServiceError = TaggedException<
  S3ServiceException & { name: "S3ServiceError" }
>;
export const S3ServiceError = Data.tagged<S3ServiceError>("S3ServiceError");
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
