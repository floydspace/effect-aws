import type {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from "@aws-sdk/client-mq";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "BadRequestException",
  "ConflictException",
  "ForbiddenException",
  "InternalServerErrorException",
  "NotFoundException",
  "UnauthorizedException",
] as const;

export type BadRequestError = TaggedException<BadRequestException>;
export type ConflictError = TaggedException<ConflictException>;
export type ForbiddenError = TaggedException<ForbiddenException>;
export type InternalServerError = TaggedException<InternalServerErrorException>;
export type NotFoundError = TaggedException<NotFoundException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
