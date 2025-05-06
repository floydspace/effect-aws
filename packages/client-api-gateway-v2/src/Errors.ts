import type {
  AccessDeniedException,
  BadRequestException,
  ConflictException,
  NotFoundException,
  TooManyRequestsException,
} from "@aws-sdk/client-apigatewayv2";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "BadRequestException",
  "ConflictException",
  "NotFoundException",
  "TooManyRequestsException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type BadRequestError = TaggedException<BadRequestException>;
export type ConflictError = TaggedException<ConflictException>;
export type NotFoundError = TaggedException<NotFoundException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
