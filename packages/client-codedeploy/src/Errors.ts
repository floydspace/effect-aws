import type {
  AlarmsLimitExceededException,
  ApplicationAlreadyExistsException,
  ApplicationDoesNotExistException,
  ApplicationLimitExceededException,
  ApplicationNameRequiredException,
  ArnNotSupportedException,
  BatchLimitExceededException,
  BucketNameFilterRequiredException,
  DeploymentAlreadyCompletedException,
  DeploymentConfigAlreadyExistsException,
  DeploymentConfigDoesNotExistException,
  DeploymentConfigInUseException,
  DeploymentConfigLimitExceededException,
  DeploymentConfigNameRequiredException,
  DeploymentDoesNotExistException,
  DeploymentGroupAlreadyExistsException,
  DeploymentGroupDoesNotExistException,
  DeploymentGroupLimitExceededException,
  DeploymentGroupNameRequiredException,
  DeploymentIdRequiredException,
  DeploymentIsNotInReadyStateException,
  DeploymentLimitExceededException,
  DeploymentNotStartedException,
  DeploymentTargetDoesNotExistException,
  DeploymentTargetIdRequiredException,
  DeploymentTargetListSizeExceededException,
  DescriptionTooLongException,
  ECSServiceMappingLimitExceededException,
  GitHubAccountTokenDoesNotExistException,
  GitHubAccountTokenNameRequiredException,
  IamArnRequiredException,
  IamSessionArnAlreadyRegisteredException,
  IamUserArnAlreadyRegisteredException,
  IamUserArnRequiredException,
  InstanceDoesNotExistException,
  InstanceIdRequiredException,
  InstanceLimitExceededException,
  InstanceNameAlreadyRegisteredException,
  InstanceNameRequiredException,
  InstanceNotRegisteredException,
  InvalidAlarmConfigException,
  InvalidApplicationNameException,
  InvalidArnException,
  InvalidAutoRollbackConfigException,
  InvalidAutoScalingGroupException,
  InvalidBlueGreenDeploymentConfigurationException,
  InvalidBucketNameFilterException,
  InvalidComputePlatformException,
  InvalidDeployedStateFilterException,
  InvalidDeploymentConfigNameException,
  InvalidDeploymentGroupNameException,
  InvalidDeploymentIdException,
  InvalidDeploymentInstanceTypeException,
  InvalidDeploymentStatusException,
  InvalidDeploymentStyleException,
  InvalidDeploymentTargetIdException,
  InvalidDeploymentWaitTypeException,
  InvalidEC2TagCombinationException,
  InvalidEC2TagException,
  InvalidECSServiceException,
  InvalidExternalIdException,
  InvalidFileExistsBehaviorException,
  InvalidGitHubAccountTokenException,
  InvalidGitHubAccountTokenNameException,
  InvalidIamSessionArnException,
  InvalidIamUserArnException,
  InvalidIgnoreApplicationStopFailuresValueException,
  InvalidInputException,
  InvalidInstanceNameException,
  InvalidInstanceStatusException,
  InvalidInstanceTypeException,
  InvalidKeyPrefixFilterException,
  InvalidLifecycleEventHookExecutionIdException,
  InvalidLifecycleEventHookExecutionStatusException,
  InvalidLoadBalancerInfoException,
  InvalidMinimumHealthyHostValueException,
  InvalidNextTokenException,
  InvalidOnPremisesTagCombinationException,
  InvalidOperationException,
  InvalidRegistrationStatusException,
  InvalidRevisionException,
  InvalidRoleException,
  InvalidSortByException,
  InvalidSortOrderException,
  InvalidTagException,
  InvalidTagFilterException,
  InvalidTagsToAddException,
  InvalidTargetFilterNameException,
  InvalidTargetGroupPairException,
  InvalidTargetInstancesException,
  InvalidTimeRangeException,
  InvalidTrafficRoutingConfigurationException,
  InvalidTriggerConfigException,
  InvalidUpdateOutdatedInstancesOnlyValueException,
  InvalidZonalDeploymentConfigurationException,
  LifecycleEventAlreadyCompletedException,
  LifecycleHookLimitExceededException,
  MultipleIamArnsProvidedException,
  OperationNotSupportedException,
  ResourceArnRequiredException,
  ResourceValidationException,
  RevisionDoesNotExistException,
  RevisionRequiredException,
  RoleRequiredException,
  TagLimitExceededException,
  TagRequiredException,
  TagSetListLimitExceededException,
  ThrottlingException,
  TriggerTargetsLimitExceededException,
  UnsupportedActionForDeploymentTypeException,
} from "@aws-sdk/client-codedeploy";
import * as Data from "effect/Data";

export const AllServiceErrors = [
  "AlarmsLimitExceededException",
  "ApplicationAlreadyExistsException",
  "ApplicationDoesNotExistException",
  "ApplicationLimitExceededException",
  "ApplicationNameRequiredException",
  "ArnNotSupportedException",
  "BatchLimitExceededException",
  "BucketNameFilterRequiredException",
  "DeploymentAlreadyCompletedException",
  "DeploymentConfigAlreadyExistsException",
  "DeploymentConfigDoesNotExistException",
  "DeploymentConfigInUseException",
  "DeploymentConfigLimitExceededException",
  "DeploymentConfigNameRequiredException",
  "DeploymentDoesNotExistException",
  "DeploymentGroupAlreadyExistsException",
  "DeploymentGroupDoesNotExistException",
  "DeploymentGroupLimitExceededException",
  "DeploymentGroupNameRequiredException",
  "DeploymentIdRequiredException",
  "DeploymentIsNotInReadyStateException",
  "DeploymentLimitExceededException",
  "DeploymentNotStartedException",
  "DeploymentTargetDoesNotExistException",
  "DeploymentTargetIdRequiredException",
  "DeploymentTargetListSizeExceededException",
  "DescriptionTooLongException",
  "ECSServiceMappingLimitExceededException",
  "GitHubAccountTokenDoesNotExistException",
  "GitHubAccountTokenNameRequiredException",
  "IamArnRequiredException",
  "IamSessionArnAlreadyRegisteredException",
  "IamUserArnAlreadyRegisteredException",
  "IamUserArnRequiredException",
  "InstanceDoesNotExistException",
  "InstanceIdRequiredException",
  "InstanceLimitExceededException",
  "InstanceNameAlreadyRegisteredException",
  "InstanceNameRequiredException",
  "InstanceNotRegisteredException",
  "InvalidAlarmConfigException",
  "InvalidApplicationNameException",
  "InvalidArnException",
  "InvalidAutoRollbackConfigException",
  "InvalidAutoScalingGroupException",
  "InvalidBlueGreenDeploymentConfigurationException",
  "InvalidBucketNameFilterException",
  "InvalidComputePlatformException",
  "InvalidDeployedStateFilterException",
  "InvalidDeploymentConfigNameException",
  "InvalidDeploymentGroupNameException",
  "InvalidDeploymentIdException",
  "InvalidDeploymentInstanceTypeException",
  "InvalidDeploymentStatusException",
  "InvalidDeploymentStyleException",
  "InvalidDeploymentTargetIdException",
  "InvalidDeploymentWaitTypeException",
  "InvalidEC2TagCombinationException",
  "InvalidEC2TagException",
  "InvalidECSServiceException",
  "InvalidExternalIdException",
  "InvalidFileExistsBehaviorException",
  "InvalidGitHubAccountTokenException",
  "InvalidGitHubAccountTokenNameException",
  "InvalidIamSessionArnException",
  "InvalidIamUserArnException",
  "InvalidIgnoreApplicationStopFailuresValueException",
  "InvalidInputException",
  "InvalidInstanceNameException",
  "InvalidInstanceStatusException",
  "InvalidInstanceTypeException",
  "InvalidKeyPrefixFilterException",
  "InvalidLifecycleEventHookExecutionIdException",
  "InvalidLifecycleEventHookExecutionStatusException",
  "InvalidLoadBalancerInfoException",
  "InvalidMinimumHealthyHostValueException",
  "InvalidNextTokenException",
  "InvalidOnPremisesTagCombinationException",
  "InvalidOperationException",
  "InvalidRegistrationStatusException",
  "InvalidRevisionException",
  "InvalidRoleException",
  "InvalidSortByException",
  "InvalidSortOrderException",
  "InvalidTagException",
  "InvalidTagFilterException",
  "InvalidTagsToAddException",
  "InvalidTargetFilterNameException",
  "InvalidTargetGroupPairException",
  "InvalidTargetInstancesException",
  "InvalidTimeRangeException",
  "InvalidTrafficRoutingConfigurationException",
  "InvalidTriggerConfigException",
  "InvalidUpdateOutdatedInstancesOnlyValueException",
  "InvalidZonalDeploymentConfigurationException",
  "LifecycleEventAlreadyCompletedException",
  "LifecycleHookLimitExceededException",
  "MultipleIamArnsProvidedException",
  "OperationNotSupportedException",
  "ResourceArnRequiredException",
  "ResourceValidationException",
  "RevisionDoesNotExistException",
  "RevisionRequiredException",
  "RoleRequiredException",
  "TagLimitExceededException",
  "TagRequiredException",
  "TagSetListLimitExceededException",
  "ThrottlingException",
  "TriggerTargetsLimitExceededException",
  "UnsupportedActionForDeploymentTypeException",
];

export type TaggedException<T extends { name: string }> = T & {
  readonly _tag: T["name"];
};

export type AlarmsLimitExceededError =
  TaggedException<AlarmsLimitExceededException>;
export type ApplicationAlreadyExistsError =
  TaggedException<ApplicationAlreadyExistsException>;
export type ApplicationDoesNotExistError =
  TaggedException<ApplicationDoesNotExistException>;
export type ApplicationLimitExceededError =
  TaggedException<ApplicationLimitExceededException>;
export type ApplicationNameRequiredError =
  TaggedException<ApplicationNameRequiredException>;
export type ArnNotSupportedError = TaggedException<ArnNotSupportedException>;
export type BatchLimitExceededError =
  TaggedException<BatchLimitExceededException>;
export type BucketNameFilterRequiredError =
  TaggedException<BucketNameFilterRequiredException>;
export type DeploymentAlreadyCompletedError =
  TaggedException<DeploymentAlreadyCompletedException>;
export type DeploymentConfigAlreadyExistsError =
  TaggedException<DeploymentConfigAlreadyExistsException>;
export type DeploymentConfigDoesNotExistError =
  TaggedException<DeploymentConfigDoesNotExistException>;
export type DeploymentConfigInUseError =
  TaggedException<DeploymentConfigInUseException>;
export type DeploymentConfigLimitExceededError =
  TaggedException<DeploymentConfigLimitExceededException>;
export type DeploymentConfigNameRequiredError =
  TaggedException<DeploymentConfigNameRequiredException>;
export type DeploymentDoesNotExistError =
  TaggedException<DeploymentDoesNotExistException>;
export type DeploymentGroupAlreadyExistsError =
  TaggedException<DeploymentGroupAlreadyExistsException>;
export type DeploymentGroupDoesNotExistError =
  TaggedException<DeploymentGroupDoesNotExistException>;
export type DeploymentGroupLimitExceededError =
  TaggedException<DeploymentGroupLimitExceededException>;
export type DeploymentGroupNameRequiredError =
  TaggedException<DeploymentGroupNameRequiredException>;
export type DeploymentIdRequiredError =
  TaggedException<DeploymentIdRequiredException>;
export type DeploymentIsNotInReadyStateError =
  TaggedException<DeploymentIsNotInReadyStateException>;
export type DeploymentLimitExceededError =
  TaggedException<DeploymentLimitExceededException>;
export type DeploymentNotStartedError =
  TaggedException<DeploymentNotStartedException>;
export type DeploymentTargetDoesNotExistError =
  TaggedException<DeploymentTargetDoesNotExistException>;
export type DeploymentTargetIdRequiredError =
  TaggedException<DeploymentTargetIdRequiredException>;
export type DeploymentTargetListSizeExceededError =
  TaggedException<DeploymentTargetListSizeExceededException>;
export type DescriptionTooLongError =
  TaggedException<DescriptionTooLongException>;
export type ECSServiceMappingLimitExceededError =
  TaggedException<ECSServiceMappingLimitExceededException>;
export type GitHubAccountTokenDoesNotExistError =
  TaggedException<GitHubAccountTokenDoesNotExistException>;
export type GitHubAccountTokenNameRequiredError =
  TaggedException<GitHubAccountTokenNameRequiredException>;
export type IamArnRequiredError = TaggedException<IamArnRequiredException>;
export type IamSessionArnAlreadyRegisteredError =
  TaggedException<IamSessionArnAlreadyRegisteredException>;
export type IamUserArnAlreadyRegisteredError =
  TaggedException<IamUserArnAlreadyRegisteredException>;
export type IamUserArnRequiredError =
  TaggedException<IamUserArnRequiredException>;
export type InstanceDoesNotExistError =
  TaggedException<InstanceDoesNotExistException>;
export type InstanceIdRequiredError =
  TaggedException<InstanceIdRequiredException>;
export type InstanceLimitExceededError =
  TaggedException<InstanceLimitExceededException>;
export type InstanceNameAlreadyRegisteredError =
  TaggedException<InstanceNameAlreadyRegisteredException>;
export type InstanceNameRequiredError =
  TaggedException<InstanceNameRequiredException>;
export type InstanceNotRegisteredError =
  TaggedException<InstanceNotRegisteredException>;
export type InvalidAlarmConfigError =
  TaggedException<InvalidAlarmConfigException>;
export type InvalidApplicationNameError =
  TaggedException<InvalidApplicationNameException>;
export type InvalidArnError = TaggedException<InvalidArnException>;
export type InvalidAutoRollbackConfigError =
  TaggedException<InvalidAutoRollbackConfigException>;
export type InvalidAutoScalingGroupError =
  TaggedException<InvalidAutoScalingGroupException>;
export type InvalidBlueGreenDeploymentConfigurationError =
  TaggedException<InvalidBlueGreenDeploymentConfigurationException>;
export type InvalidBucketNameFilterError =
  TaggedException<InvalidBucketNameFilterException>;
export type InvalidComputePlatformError =
  TaggedException<InvalidComputePlatformException>;
export type InvalidDeployedStateFilterError =
  TaggedException<InvalidDeployedStateFilterException>;
export type InvalidDeploymentConfigNameError =
  TaggedException<InvalidDeploymentConfigNameException>;
export type InvalidDeploymentGroupNameError =
  TaggedException<InvalidDeploymentGroupNameException>;
export type InvalidDeploymentIdError =
  TaggedException<InvalidDeploymentIdException>;
export type InvalidDeploymentInstanceTypeError =
  TaggedException<InvalidDeploymentInstanceTypeException>;
export type InvalidDeploymentStatusError =
  TaggedException<InvalidDeploymentStatusException>;
export type InvalidDeploymentStyleError =
  TaggedException<InvalidDeploymentStyleException>;
export type InvalidDeploymentTargetIdError =
  TaggedException<InvalidDeploymentTargetIdException>;
export type InvalidDeploymentWaitTypeError =
  TaggedException<InvalidDeploymentWaitTypeException>;
export type InvalidEC2TagCombinationError =
  TaggedException<InvalidEC2TagCombinationException>;
export type InvalidEC2TagError = TaggedException<InvalidEC2TagException>;
export type InvalidECSServiceError =
  TaggedException<InvalidECSServiceException>;
export type InvalidExternalIdError =
  TaggedException<InvalidExternalIdException>;
export type InvalidFileExistsBehaviorError =
  TaggedException<InvalidFileExistsBehaviorException>;
export type InvalidGitHubAccountTokenError =
  TaggedException<InvalidGitHubAccountTokenException>;
export type InvalidGitHubAccountTokenNameError =
  TaggedException<InvalidGitHubAccountTokenNameException>;
export type InvalidIamSessionArnError =
  TaggedException<InvalidIamSessionArnException>;
export type InvalidIamUserArnError =
  TaggedException<InvalidIamUserArnException>;
export type InvalidIgnoreApplicationStopFailuresValueError =
  TaggedException<InvalidIgnoreApplicationStopFailuresValueException>;
export type InvalidInputError = TaggedException<InvalidInputException>;
export type InvalidInstanceNameError =
  TaggedException<InvalidInstanceNameException>;
export type InvalidInstanceStatusError =
  TaggedException<InvalidInstanceStatusException>;
export type InvalidInstanceTypeError =
  TaggedException<InvalidInstanceTypeException>;
export type InvalidKeyPrefixFilterError =
  TaggedException<InvalidKeyPrefixFilterException>;
export type InvalidLifecycleEventHookExecutionIdError =
  TaggedException<InvalidLifecycleEventHookExecutionIdException>;
export type InvalidLifecycleEventHookExecutionStatusError =
  TaggedException<InvalidLifecycleEventHookExecutionStatusException>;
export type InvalidLoadBalancerInfoError =
  TaggedException<InvalidLoadBalancerInfoException>;
export type InvalidMinimumHealthyHostValueError =
  TaggedException<InvalidMinimumHealthyHostValueException>;
export type InvalidNextTokenError = TaggedException<InvalidNextTokenException>;
export type InvalidOnPremisesTagCombinationError =
  TaggedException<InvalidOnPremisesTagCombinationException>;
export type InvalidOperationError = TaggedException<InvalidOperationException>;
export type InvalidRegistrationStatusError =
  TaggedException<InvalidRegistrationStatusException>;
export type InvalidRevisionError = TaggedException<InvalidRevisionException>;
export type InvalidRoleError = TaggedException<InvalidRoleException>;
export type InvalidSortByError = TaggedException<InvalidSortByException>;
export type InvalidSortOrderError = TaggedException<InvalidSortOrderException>;
export type InvalidTagError = TaggedException<InvalidTagException>;
export type InvalidTagFilterError = TaggedException<InvalidTagFilterException>;
export type InvalidTagsToAddError = TaggedException<InvalidTagsToAddException>;
export type InvalidTargetFilterNameError =
  TaggedException<InvalidTargetFilterNameException>;
export type InvalidTargetGroupPairError =
  TaggedException<InvalidTargetGroupPairException>;
export type InvalidTargetInstancesError =
  TaggedException<InvalidTargetInstancesException>;
export type InvalidTimeRangeError = TaggedException<InvalidTimeRangeException>;
export type InvalidTrafficRoutingConfigurationError =
  TaggedException<InvalidTrafficRoutingConfigurationException>;
export type InvalidTriggerConfigError =
  TaggedException<InvalidTriggerConfigException>;
export type InvalidUpdateOutdatedInstancesOnlyValueError =
  TaggedException<InvalidUpdateOutdatedInstancesOnlyValueException>;
export type InvalidZonalDeploymentConfigurationError =
  TaggedException<InvalidZonalDeploymentConfigurationException>;
export type LifecycleEventAlreadyCompletedError =
  TaggedException<LifecycleEventAlreadyCompletedException>;
export type LifecycleHookLimitExceededError =
  TaggedException<LifecycleHookLimitExceededException>;
export type MultipleIamArnsProvidedError =
  TaggedException<MultipleIamArnsProvidedException>;
export type OperationNotSupportedError =
  TaggedException<OperationNotSupportedException>;
export type ResourceArnRequiredError =
  TaggedException<ResourceArnRequiredException>;
export type ResourceValidationError =
  TaggedException<ResourceValidationException>;
export type RevisionDoesNotExistError =
  TaggedException<RevisionDoesNotExistException>;
export type RevisionRequiredError = TaggedException<RevisionRequiredException>;
export type RoleRequiredError = TaggedException<RoleRequiredException>;
export type TagLimitExceededError = TaggedException<TagLimitExceededException>;
export type TagRequiredError = TaggedException<TagRequiredException>;
export type TagSetListLimitExceededError =
  TaggedException<TagSetListLimitExceededException>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type TriggerTargetsLimitExceededError =
  TaggedException<TriggerTargetsLimitExceededException>;
export type UnsupportedActionForDeploymentTypeError =
  TaggedException<UnsupportedActionForDeploymentTypeException>;

export type SdkError = TaggedException<Error & { name: "SdkError" }>;
export const SdkError = Data.tagged<SdkError>("SdkError");
