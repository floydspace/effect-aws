import type {
  InternalServiceError as InternalServiceException,
  InvalidRequestException,
  PipelineDeletedException,
  PipelineNotFoundException,
  TaskNotFoundException,
} from "@aws-sdk/client-data-pipeline";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "InternalServiceError",
  "InvalidRequestException",
  "PipelineDeletedException",
  "PipelineNotFoundException",
  "TaskNotFoundException",
] as const;

export type InternalServiceError = TaggedException<InternalServiceException>;
export type InvalidRequestError = TaggedException<InvalidRequestException>;
export type PipelineDeletedError = TaggedException<PipelineDeletedException>;
export type PipelineNotFoundError = TaggedException<PipelineNotFoundException>;
export type TaskNotFoundError = TaggedException<TaskNotFoundException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
