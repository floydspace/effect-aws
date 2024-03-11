import type { EC2ServiceException } from "@aws-sdk/client-ec2";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type EC2ServiceError = TaggedException<
  EC2ServiceException & { name: "EC2ServiceError" }
>;
export const EC2ServiceError = Data.tagged<EC2ServiceError>("EC2ServiceError");
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
