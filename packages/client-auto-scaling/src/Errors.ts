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
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

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
] as const;

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

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
