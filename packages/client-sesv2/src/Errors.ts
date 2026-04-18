import type {
  AccountSuspendedException,
  AlreadyExistsException,
  BadRequestException,
  ConcurrentModificationException,
  ConflictException,
  InternalServiceErrorException,
  InvalidNextTokenException,
  LimitExceededException,
  MailFromDomainNotVerifiedException,
  MessageRejected,
  NotFoundException,
  SendingPausedException,
  TooManyRequestsException,
} from "@aws-sdk/client-sesv2";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "AccountSuspendedException",
  "AlreadyExistsException",
  "BadRequestException",
  "ConcurrentModificationException",
  "ConflictException",
  "InternalServiceErrorException",
  "InvalidNextTokenException",
  "LimitExceededException",
  "MailFromDomainNotVerifiedException",
  "MessageRejected",
  "NotFoundException",
  "SendingPausedException",
  "TooManyRequestsException",
] as const;

export type AccountSuspendedError = TaggedException<AccountSuspendedException>;
export type AlreadyExistsError = TaggedException<AlreadyExistsException>;
export type BadRequestError = TaggedException<BadRequestException>;
export type ConcurrentModificationError = TaggedException<ConcurrentModificationException>;
export type ConflictError = TaggedException<ConflictException>;
export type InternalServiceError = TaggedException<InternalServiceErrorException>;
export type InvalidNextTokenError = TaggedException<InvalidNextTokenException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MailFromDomainNotVerifiedError = TaggedException<MailFromDomainNotVerifiedException>;
export type MessageRejectedError = TaggedException<MessageRejected>;
export type NotFoundError = TaggedException<NotFoundException>;
export type SendingPausedError = TaggedException<SendingPausedException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
