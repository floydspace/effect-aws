import type {
  ExpiredTokenException,
  IDPCommunicationErrorException,
  IDPRejectedClaimException,
  InvalidAuthorizationMessageException,
  InvalidIdentityTokenException,
  MalformedPolicyDocumentException,
  PackedPolicyTooLargeException,
  RegionDisabledException,
} from "@aws-sdk/client-sts";
import { Data } from "effect";

export const AllServiceErrors = [
  "ExpiredTokenException",
  "IDPCommunicationErrorException",
  "IDPRejectedClaimException",
  "InvalidAuthorizationMessageException",
  "InvalidIdentityTokenException",
  "MalformedPolicyDocumentException",
  "PackedPolicyTooLargeException",
  "RegionDisabledException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ExpiredTokenError = TaggedException<ExpiredTokenException>;
export type IDPCommunicationError =
  TaggedException<IDPCommunicationErrorException>;
export type IDPRejectedClaimError = TaggedException<IDPRejectedClaimException>;
export type InvalidAuthorizationMessageError =
  TaggedException<InvalidAuthorizationMessageException>;
export type InvalidIdentityTokenError =
  TaggedException<InvalidIdentityTokenException>;
export type MalformedPolicyDocumentError =
  TaggedException<MalformedPolicyDocumentException>;
export type PackedPolicyTooLargeError =
  TaggedException<PackedPolicyTooLargeException>;
export type RegionDisabledError = TaggedException<RegionDisabledException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
