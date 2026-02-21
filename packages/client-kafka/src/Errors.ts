import type {
  BadRequestException,
  ClusterConnectivityException,
  ConflictException,
  ControllerMovedException,
  ForbiddenException,
  GroupSubscribedToTopicException,
  InternalServerErrorException,
  KafkaRequestException,
  KafkaTimeoutException,
  NotControllerException,
  NotFoundException,
  ReassignmentInProgressException,
  ServiceUnavailableException,
  TooManyRequestsException,
  TopicExistsException,
  UnauthorizedException,
  UnknownTopicOrPartitionException,
} from "@aws-sdk/client-kafka";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "BadRequestException",
  "ClusterConnectivityException",
  "ConflictException",
  "ControllerMovedException",
  "ForbiddenException",
  "GroupSubscribedToTopicException",
  "InternalServerErrorException",
  "KafkaRequestException",
  "KafkaTimeoutException",
  "NotControllerException",
  "NotFoundException",
  "ReassignmentInProgressException",
  "ServiceUnavailableException",
  "TooManyRequestsException",
  "TopicExistsException",
  "UnauthorizedException",
  "UnknownTopicOrPartitionException",
] as const;

export type BadRequestError = TaggedException<BadRequestException>;
export type ClusterConnectivityError = TaggedException<ClusterConnectivityException>;
export type ConflictError = TaggedException<ConflictException>;
export type ControllerMovedError = TaggedException<ControllerMovedException>;
export type ForbiddenError = TaggedException<ForbiddenException>;
export type GroupSubscribedToTopicError = TaggedException<GroupSubscribedToTopicException>;
export type InternalServerError = TaggedException<InternalServerErrorException>;
export type KafkaRequestError = TaggedException<KafkaRequestException>;
export type KafkaTimeoutError = TaggedException<KafkaTimeoutException>;
export type NotControllerError = TaggedException<NotControllerException>;
export type NotFoundError = TaggedException<NotFoundException>;
export type ReassignmentInProgressError = TaggedException<ReassignmentInProgressException>;
export type ServiceUnavailableError = TaggedException<ServiceUnavailableException>;
export type TooManyRequestsError = TaggedException<TooManyRequestsException>;
export type TopicExistsError = TaggedException<TopicExistsException>;
export type UnauthorizedError = TaggedException<UnauthorizedException>;
export type UnknownTopicOrPartitionError = TaggedException<UnknownTopicOrPartitionException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
