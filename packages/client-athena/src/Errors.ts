import type {
  InternalServerException,
  InvalidRequestException,
  MetadataException,
  ResourceNotFoundException,
  SessionAlreadyExistsException,
  TooManyRequestsException,
} from "@aws-sdk/client-athena";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "InternalServerException",
  "InvalidRequestException",
  "MetadataException",
  "ResourceNotFoundException",
  "SessionAlreadyExistsException",
  "TooManyRequestsException",
] as const;

export type InternalServerError = TaggedException<InternalServerException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type MetadataError = TaggedException<MetadataException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type SessionAlreadyExistsError = TaggedException<SessionAlreadyExistsException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
