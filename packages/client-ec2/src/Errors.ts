import type { EC2ServiceException } from "@aws-sdk/client-ec2";
import type { TaggedException } from "@effect-aws/commons";
import * as Data from "effect/Data";

export type EC2ServiceError = TaggedException<
  EC2ServiceException & { name: "EC2ServiceError" }
>;
export const EC2ServiceError = Data.tagged<EC2ServiceError>("EC2ServiceError");

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
