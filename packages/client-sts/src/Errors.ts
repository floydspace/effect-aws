import type {
  ExpiredTokenException,
  ExpiredTradeInTokenException,
  IDPCommunicationErrorException,
  IDPRejectedClaimException,
  InvalidAuthorizationMessageException,
  InvalidIdentityTokenException,
  JWTPayloadSizeExceededException,
  MalformedPolicyDocumentException,
  OutboundWebIdentityFederationDisabledException,
  PackedPolicyTooLargeException,
  RegionDisabledException,
  SessionDurationEscalationException,
} from "@aws-sdk/client-sts";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "ExpiredTokenException",
  "ExpiredTradeInTokenException",
  "IDPCommunicationErrorException",
  "IDPRejectedClaimException",
  "InvalidAuthorizationMessageException",
  "InvalidIdentityTokenException",
  "JWTPayloadSizeExceededException",
  "MalformedPolicyDocumentException",
  "OutboundWebIdentityFederationDisabledException",
  "PackedPolicyTooLargeException",
  "RegionDisabledException",
  "SessionDurationEscalationException",
] as const;

export type ExpiredTokenError = TaggedException<ExpiredTokenException>;
export type ExpiredTradeInTokenError = TaggedException<ExpiredTradeInTokenException>;
export type IDPCommunicationError = TaggedException<IDPCommunicationErrorException>;
export type IDPRejectedClaimError = TaggedException<IDPRejectedClaimException>;
export type InvalidAuthorizationMessageError = TaggedException<InvalidAuthorizationMessageException>;
export type InvalidIdentityTokenError = TaggedException<InvalidIdentityTokenException>;
export type JWTPayloadSizeExceededError = TaggedException<JWTPayloadSizeExceededException>;
export type MalformedPolicyDocumentError = TaggedException<MalformedPolicyDocumentException>;
export type OutboundWebIdentityFederationDisabledError = TaggedException<
  OutboundWebIdentityFederationDisabledException
>;
export type PackedPolicyTooLargeError = TaggedException<PackedPolicyTooLargeException>;
export type RegionDisabledError = TaggedException<RegionDisabledException>;
export type SessionDurationEscalationError = TaggedException<SessionDurationEscalationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
