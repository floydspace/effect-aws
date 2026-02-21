import type { EC2ServiceException } from "@aws-sdk/client-ec2";
import type { TaggedException } from "@effect-aws/commons";
import { Data } from "effect";

export class EC2ServiceError extends Data.TaggedError("EC2ServiceError")<
  TaggedException<
    EC2ServiceException & { name: "EC2ServiceError" }
  >
> {}

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
