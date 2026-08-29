import type {
  ActiveInstanceRefreshNotFoundFault,
  AlreadyExistsFault,
  IdempotentCallInProgressFault,
  IdempotentParameterMismatchError as IdempotentParameterMismatchException,
  InstanceRefreshInProgressFault,
  InvalidNextToken,
  IrreversibleInstanceRefreshFault,
  LimitExceededFault,
  ResourceContentionFault,
  ResourceInUseFault,
  ScalingActivityInProgressFault,
  ServiceLinkedRoleFailure,
} from "@aws-sdk/client-auto-scaling";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "ActiveInstanceRefreshNotFoundFault",
  "AlreadyExistsFault",
  "IdempotentCallInProgressFault",
  "IdempotentParameterMismatchError",
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
export type IdempotentCallInProgressFaultError = TaggedException<IdempotentCallInProgressFault>;
export type IdempotentParameterMismatchError = TaggedException<IdempotentParameterMismatchException>;
export type InstanceRefreshInProgressFaultError = TaggedException<InstanceRefreshInProgressFault>;
export type InvalidNextTokenError = TaggedException<InvalidNextToken>;
export type IrreversibleInstanceRefreshFaultError = TaggedException<IrreversibleInstanceRefreshFault>;
export type LimitExceededFaultError = TaggedException<LimitExceededFault>;
export type ResourceContentionFaultError = TaggedException<ResourceContentionFault>;
export type ResourceInUseFaultError = TaggedException<ResourceInUseFault>;
export type ScalingActivityInProgressFaultError = TaggedException<ScalingActivityInProgressFault>;
export type ServiceLinkedRoleError = TaggedException<ServiceLinkedRoleFailure>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
