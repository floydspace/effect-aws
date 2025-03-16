import type {
  ConcurrentModificationException,
  InvalidArgumentException,
  InvalidKMSResourceException,
  InvalidSourceException,
  LimitExceededException,
  ResourceInUseException,
  ResourceNotFoundException,
  ServiceUnavailableException,
} from "@aws-sdk/client-firehose";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "ConcurrentModificationException",
  "InvalidArgumentException",
  "InvalidKMSResourceException",
  "InvalidSourceException",
  "LimitExceededException",
  "ResourceInUseException",
  "ResourceNotFoundException",
  "ServiceUnavailableException",
] as const;

export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type InvalidArgumentError = TaggedException<InvalidArgumentException>;
export type InvalidKMSResourceError = TaggedException<InvalidKMSResourceException>;
export type InvalidSourceError = TaggedException<InvalidSourceException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
