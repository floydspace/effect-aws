import { S3ServiceException } from "@aws-sdk/client-s3";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = Data.Case &
  T & { readonly _tag: T["name"] };

export type S3ServiceError = TaggedException<
  S3ServiceException & { name: "S3ServiceError" }
>;
export const S3ServiceError = Data.tagged<S3ServiceError>("S3ServiceError");
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
