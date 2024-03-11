import type { RDSServiceException } from "@aws-sdk/client-rds";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type RDSServiceError = TaggedException<
  RDSServiceException & { name: "RDSServiceError" }
>;
export const RDSServiceError = Data.tagged<RDSServiceError>("RDSServiceError");
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
