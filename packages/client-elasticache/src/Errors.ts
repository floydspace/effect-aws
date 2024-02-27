import type {
  ElastiCacheServiceException,
  InvalidCredentialsException,
  InvalidParameterValueException,
  InvalidParameterCombinationException,
} from "@aws-sdk/client-elasticache";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type InvalidCredentialsError =
  TaggedException<InvalidCredentialsException>;
export type InvalidParameterValueError =
  TaggedException<InvalidParameterValueException>;
export type InvalidParameterCombinationError =
  TaggedException<InvalidParameterCombinationException>;

export type ElastiCacheServiceError = TaggedException<
  ElastiCacheServiceException & { name: "ElastiCacheServiceError" }
>;
export const ElastiCacheServiceError = Data.tagged<ElastiCacheServiceError>(
  "ElastiCacheServiceError",
);
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
