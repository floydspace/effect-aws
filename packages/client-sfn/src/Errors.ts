import type {
  ActivityDoesNotExist,
  ActivityLimitExceeded,
  ActivityWorkerLimitExceeded,
  InvalidName,
  TooManyTags,
  ConflictException,
  InvalidArn,
  InvalidDefinition,
  InvalidLoggingConfiguration,
  InvalidTracingConfiguration,
  StateMachineAlreadyExists,
  StateMachineDeleting,
  StateMachineLimitExceeded,
  StateMachineTypeNotSupported,
  ValidationException,
  ResourceNotFound,
  ServiceQuotaExceededException,
  ExecutionDoesNotExist,
  StateMachineDoesNotExist,
  InvalidToken,
  ExecutionLimitExceeded,
  ExecutionNotRedrivable,
  TaskDoesNotExist,
  TaskTimedOut,
  InvalidOutput,
  ExecutionAlreadyExists,
  InvalidExecutionInput,
  MissingRequiredParameter,
} from "@aws-sdk/client-sfn";
import * as Data from "effect/Data";

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type ActivityDoesNotExistError = TaggedException<ActivityDoesNotExist>;
export type ActivityLimitExceededError = TaggedException<ActivityLimitExceeded>;
export type ActivityWorkerLimitExceededError =
  TaggedException<ActivityWorkerLimitExceeded>;
export type InvalidNameError = TaggedException<InvalidName>;
export type TooManyTagsError = TaggedException<TooManyTags>;
export type ConflictError = TaggedException<ConflictException>;
export type InvalidArnError = TaggedException<InvalidArn>;
export type InvalidDefinitionError = TaggedException<InvalidDefinition>;
export type InvalidLoggingConfigurationError =
  TaggedException<InvalidLoggingConfiguration>;
export type InvalidTracingConfigurationError =
  TaggedException<InvalidTracingConfiguration>;
export type StateMachineAlreadyExistsError =
  TaggedException<StateMachineAlreadyExists>;
export type StateMachineDeletingError = TaggedException<StateMachineDeleting>;
export type StateMachineLimitExceededError =
  TaggedException<StateMachineLimitExceeded>;
export type StateMachineTypeNotSupportedError =
  TaggedException<StateMachineTypeNotSupported>;
export type ValidationError = TaggedException<ValidationException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFound>;
export type ServiceQuotaExceededError =
  TaggedException<ServiceQuotaExceededException>;
export type ExecutionDoesNotExistError = TaggedException<ExecutionDoesNotExist>;
export type StateMachineDoesNotExistError =
  TaggedException<StateMachineDoesNotExist>;
export type InvalidTokenError = TaggedException<InvalidToken>;
export type ExecutionLimitExceededError =
  TaggedException<ExecutionLimitExceeded>;
export type ExecutionNotRedrivableError =
  TaggedException<ExecutionNotRedrivable>;
export type TaskDoesNotExistError = TaggedException<TaskDoesNotExist>;
export type TaskTimedOutError = TaggedException<TaskTimedOut>;
export type InvalidOutputError = TaggedException<InvalidOutput>;
export type ExecutionAlreadyExistsError =
  TaggedException<ExecutionAlreadyExists>;
export type InvalidExecutionInputError = TaggedException<InvalidExecutionInput>;
export type MissingRequiredParameterError =
  TaggedException<MissingRequiredParameter>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
