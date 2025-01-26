import type {
  ActiveInstanceRefreshNotFoundFault,
  AlreadyExistsFault,
  InstanceRefreshInProgressFault,
  InvalidNextToken,
  IrreversibleInstanceRefreshFault,
  LimitExceededFault,
  ResourceContentionFault,
  ResourceInUseFault,
  ScalingActivityInProgressFault,
  ServiceLinkedRoleFailure,
} from "@aws-sdk/client-auto-scaling";
import { Data } from "effect";

export const AllServiceErrors = [
  "ActiveInstanceRefreshNotFoundFault",
  "AlreadyExistsFault",
  "InstanceRefreshInProgressFault",
  "InvalidNextToken",
  "IrreversibleInstanceRefreshFault",
  "LimitExceededFault",
  "ResourceContentionFault",
  "ResourceInUseFault",
  "ScalingActivityInProgressFault",
  "ServiceLinkedRoleFailure",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ActiveInstanceRefreshNotFoundFaultError = TaggedException<ActiveInstanceRefreshNotFoundFault>;
export type AlreadyExistsFaultError = TaggedException<AlreadyExistsFault>;
export type InstanceRefreshInProgressFaultError = TaggedException<InstanceRefreshInProgressFault>;
export type InvalidNextTokenError = TaggedException<InvalidNextToken>;
export type IrreversibleInstanceRefreshFaultError = TaggedException<IrreversibleInstanceRefreshFault>;
export type LimitExceededFaultError = TaggedException<LimitExceededFault>;
export type ResourceContentionFaultError = TaggedException<ResourceContentionFault>;
export type ResourceInUseFaultError = TaggedException<ResourceInUseFault>;
export type ScalingActivityInProgressFaultError = TaggedException<ScalingActivityInProgressFault>;
export type ServiceLinkedRoleError = TaggedException<ServiceLinkedRoleFailure>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
