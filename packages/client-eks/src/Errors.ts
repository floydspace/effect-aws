import type {
  AccessDeniedException,
  BadRequestException,
  ClientException,
  InvalidParameterException,
  InvalidRequestException,
  InvalidStateException,
  NotFoundException,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourcePropagationDelayException,
  ServerException,
  ServiceUnavailableException,
  ThrottlingException,
  UnsupportedAvailabilityZoneException,
} from "@aws-sdk/client-eks";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "AccessDeniedException",
  "BadRequestException",
  "ClientException",
  "InvalidParameterException",
  "InvalidRequestException",
  "InvalidStateException",
  "NotFoundException",
  "ResourceInUseException",
  "ResourceLimitExceededException",
  "ResourceNotFoundException",
  "ResourcePropagationDelayException",
  "ServerException",
  "ServiceUnavailableException",
  "ThrottlingException",
  "UnsupportedAvailabilityZoneException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type BadRequestError = TaggedException<BadRequestException>;
export type ClientError = TaggedException<ClientException>;
export type InvalidParameterError = TaggedException<InvalidParameterException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type InvalidStateError = TaggedException<InvalidStateException>;
export type NotFoundError = TaggedException<NotFoundException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceLimitExceededError = TaggedException<ResourceLimitExceededException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ResourcePropagationDelayError = TaggedException<ResourcePropagationDelayException>;
export type ServerError = TaggedException<ServerException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type UnsupportedAvailabilityZoneError = TaggedException<UnsupportedAvailabilityZoneException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
