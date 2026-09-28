import type {
  ConcurrentModificationException,
  ConstraintViolationException,
  InternalServiceException,
  InvalidParameterException,
  PaginationTokenExpiredException,
  ThrottledException,
} from "@aws-sdk/client-resource-groups-tagging-api";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "ConcurrentModificationException",
  "ConstraintViolationException",
  "InternalServiceException",
  "InvalidParameterException",
  "PaginationTokenExpiredException",
  "ThrottledException",
] as const;

export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type ConstraintViolationError = TaggedException<ConstraintViolationException>;
export type InternalServiceError = TaggedException<InternalServiceException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type PaginationTokenExpiredError = TaggedException<PaginationTokenExpiredException>;
export type ThrottledError = TaggedException<ThrottledException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
