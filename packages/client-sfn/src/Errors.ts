import type {
  ActivityAlreadyExists,
  ActivityDoesNotExist,
  ActivityLimitExceeded,
  ActivityWorkerLimitExceeded,
  ConflictException,
  ExecutionAlreadyExists,
  ExecutionDoesNotExist,
  ExecutionLimitExceeded,
  ExecutionNotRedrivable,
  InvalidArn,
  InvalidDefinition,
  InvalidEncryptionConfiguration,
  InvalidExecutionInput,
  InvalidLoggingConfiguration,
  InvalidName,
  InvalidOutput,
  InvalidToken,
  InvalidTracingConfiguration,
  KmsAccessDeniedException,
  KmsInvalidStateException,
  KmsThrottlingException,
  MissingRequiredParameter,
  ResourceNotFound,
  ServiceQuotaExceededException,
  StateMachineAlreadyExists,
  StateMachineDeleting,
  StateMachineDoesNotExist,
  StateMachineLimitExceeded,
  StateMachineTypeNotSupported,
  TaskDoesNotExist,
  TaskTimedOut,
  TooManyTags,
  ValidationException,
} from "@aws-sdk/client-sfn";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "ActivityAlreadyExists",
  "ActivityDoesNotExist",
  "ActivityLimitExceeded",
  "ActivityWorkerLimitExceeded",
  "ConflictException",
  "ExecutionAlreadyExists",
  "ExecutionDoesNotExist",
  "ExecutionLimitExceeded",
  "ExecutionNotRedrivable",
  "InvalidArn",
  "InvalidDefinition",
  "InvalidEncryptionConfiguration",
  "InvalidExecutionInput",
  "InvalidLoggingConfiguration",
  "InvalidName",
  "InvalidOutput",
  "InvalidToken",
  "InvalidTracingConfiguration",
  "KmsAccessDeniedException",
  "KmsInvalidStateException",
  "KmsThrottlingException",
  "MissingRequiredParameter",
  "ResourceNotFound",
  "ServiceQuotaExceededException",
  "StateMachineAlreadyExists",
  "StateMachineDeleting",
  "StateMachineDoesNotExist",
  "StateMachineLimitExceeded",
  "StateMachineTypeNotSupported",
  "TaskDoesNotExist",
  "TaskTimedOut",
  "TooManyTags",
  "ValidationException",
] as const;

export type ActivityAlreadyExistsError = TaggedException<ActivityAlreadyExists>;
export type ActivityDoesNotExistError = TaggedException<ActivityDoesNotExist>;
export type ActivityLimitExceededError = TaggedException<ActivityLimitExceeded>;
export type ActivityWorkerLimitExceededError = TaggedException<ActivityWorkerLimitExceeded>;
export type ConflictError = TaggedException<ConflictException>;
export type ExecutionAlreadyExistsError = TaggedException<ExecutionAlreadyExists>;
export type ExecutionDoesNotExistError = TaggedException<ExecutionDoesNotExist>;
export type ExecutionLimitExceededError = TaggedException<ExecutionLimitExceeded>;
export type ExecutionNotRedrivableError = TaggedException<ExecutionNotRedrivable>;
export type InvalidArnError = TaggedException<InvalidArn>;
export type InvalidDefinitionError = TaggedException<InvalidDefinition>;
export type InvalidEncryptionConfigurationError = TaggedException<InvalidEncryptionConfiguration>;
export type InvalidExecutionInputError = TaggedException<InvalidExecutionInput>;
export type InvalidLoggingConfigurationError = TaggedException<InvalidLoggingConfiguration>;
export type InvalidNameError = TaggedException<InvalidName>;
export type InvalidOutputError = TaggedException<InvalidOutput>;
export type InvalidTokenError = TaggedException<InvalidToken>;
export type InvalidTracingConfigurationError = TaggedException<InvalidTracingConfiguration>;
export type KmsAccessDeniedError = TaggedException<KmsAccessDeniedException>;
export type KmsInvalidStateError = TaggedException<KmsInvalidStateException>;
export type KmsThrottlingError = TaggedException<KmsThrottlingException>;
export type MissingRequiredParameterError = TaggedException<MissingRequiredParameter>;
export type ResourceNotFoundError = TaggedException<ResourceNotFound>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type StateMachineAlreadyExistsError = TaggedException<StateMachineAlreadyExists>;
export type StateMachineDeletingError = TaggedException<StateMachineDeleting>;
export type StateMachineDoesNotExistError = TaggedException<StateMachineDoesNotExist>;
export type StateMachineLimitExceededError = TaggedException<StateMachineLimitExceeded>;
export type StateMachineTypeNotSupportedError = TaggedException<StateMachineTypeNotSupported>;
export type TaskDoesNotExistError = TaggedException<TaskDoesNotExist>;
export type TaskTimedOutError = TaggedException<TaskTimedOut>;
export type TooManyTagsError = TaggedException<TooManyTags>;
export type ValidationError = TaggedException<ValidationException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
