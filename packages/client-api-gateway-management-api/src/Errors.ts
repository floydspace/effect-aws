import type {
  ForbiddenException,
  GoneException,
  LimitExceededException,
  PayloadTooLargeException,
} from "@aws-sdk/client-apigatewaymanagementapi";
import * as Data from "@effect/data/Data";

export class SdkError extends Data.TaggedClass("SdkError")<Error> {}

export class ForbiddenError extends Data.TaggedClass(
  "ForbiddenError",
)<ForbiddenException> {}

export class GoneError extends Data.TaggedClass("GoneError")<GoneException> {}

export class LimitExceededError extends Data.TaggedClass(
  "LimitExceededError",
)<LimitExceededException> {}

export class PayloadTooLargeError extends Data.TaggedClass(
  "PayloadTooLargeError",
)<PayloadTooLargeException> {}
