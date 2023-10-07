import type {
  ForbiddenException,
  GoneException,
  LimitExceededException,
  PayloadTooLargeException,
} from "@aws-sdk/client-apigatewaymanagementapi";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = Data.Case &
  T & { readonly _tag: T["name"] };

export type ForbiddenError = TaggedException<ForbiddenException>;
export type GoneError = TaggedException<GoneException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type PayloadTooLargeError = TaggedException<PayloadTooLargeException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
