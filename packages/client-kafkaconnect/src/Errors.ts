import type {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException,
  TooManyRequestsException,
  UnauthorizedException,
} from "@aws-sdk/client-kafkaconnect";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "BadRequestException",
  "ConflictException",
  "ForbiddenException",
  "InternalServerErrorException",
  "NotFoundException",
  "ServiceUnavailableException",
  "TooManyRequestsException",
  "UnauthorizedException",
] as const;

export type BadRequestError = TaggedException<BadRequestException>;
export type ConflictError = TaggedException<ConflictException>;
export type ForbiddenError = TaggedException<ForbiddenException>;
export type InternalServerError = TaggedException<InternalServerErrorException>;
export type NotFoundError = TaggedException<NotFoundException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
