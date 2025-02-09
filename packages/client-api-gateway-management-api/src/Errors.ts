import type {
  ForbiddenException,
  GoneException,
  LimitExceededException,
  PayloadTooLargeException,
} from "@aws-sdk/client-apigatewaymanagementapi";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "ForbiddenException",
  "GoneException",
  "LimitExceededException",
  "PayloadTooLargeException",
] as const;

export type ForbiddenError = TaggedException<ForbiddenException>;
export type GoneError = TaggedException<GoneException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type PayloadTooLargeError = TaggedException<PayloadTooLargeException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
