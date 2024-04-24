import type {} from "@aws-sdk/client-ec2";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
