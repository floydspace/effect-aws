import type {
  AccessDeniedException,
  AlreadyExistsException,
  AssociatedInstances,
  AssociationAlreadyExists,
  AssociationDoesNotExist,
  AssociationExecutionDoesNotExist,
  AssociationLimitExceeded,
  AssociationVersionLimitExceeded,
  AutomationDefinitionNotApprovedException,
  AutomationDefinitionNotFoundException,
  AutomationDefinitionVersionNotFoundException,
  AutomationExecutionLimitExceededException,
  AutomationExecutionNotFoundException,
  AutomationStepNotFoundException,
  ComplianceTypeCountLimitExceededException,
  CustomSchemaCountLimitExceededException,
  DocumentAlreadyExists,
  DocumentLimitExceeded,
  DocumentPermissionLimit,
  DocumentVersionLimitExceeded,
  DoesNotExistException,
  DuplicateDocumentContent,
  DuplicateDocumentVersionName,
  DuplicateInstanceId,
  FeatureNotAvailableException,
  HierarchyLevelLimitExceededException,
  HierarchyTypeMismatchException,
  IdempotentParameterMismatch,
  IncompatiblePolicyException,
  InternalServerError as InternalServerException,
  InvalidActivation,
  InvalidActivationId,
  InvalidAggregatorException,
  InvalidAllowedPatternException,
  InvalidAssociation,
  InvalidAssociationVersion,
  InvalidAutomationExecutionParametersException,
  InvalidAutomationSignalException,
  InvalidAutomationStatusUpdateException,
  InvalidCommandId,
  InvalidDeleteInventoryParametersException,
  InvalidDeletionIdException,
  InvalidDocument,
  InvalidDocumentContent,
  InvalidDocumentOperation,
  InvalidDocumentSchemaVersion,
  InvalidDocumentType,
  InvalidDocumentVersion,
  InvalidFilter,
  InvalidFilterKey,
  InvalidFilterOption,
  InvalidFilterValue,
  InvalidInstanceId,
  InvalidInstanceInformationFilterValue,
  InvalidInstancePropertyFilterValue,
  InvalidInventoryGroupException,
  InvalidInventoryItemContextException,
  InvalidInventoryRequestException,
  InvalidItemContentException,
  InvalidKeyId,
  InvalidNextToken,
  InvalidNotificationConfig,
  InvalidOptionException,
  InvalidOutputFolder,
  InvalidOutputLocation,
  InvalidParameters,
  InvalidPermissionType,
  InvalidPluginName,
  InvalidPolicyAttributeException,
  InvalidPolicyTypeException,
  InvalidResourceId,
  InvalidResourceType,
  InvalidResultAttributeException,
  InvalidRole,
  InvalidSchedule,
  InvalidTag,
  InvalidTarget,
  InvalidTargetMaps,
  InvalidTypeNameException,
  InvalidUpdate,
  InvocationDoesNotExist,
  ItemContentMismatchException,
  ItemSizeLimitExceededException,
  MalformedResourcePolicyDocumentException,
  MaxDocumentSizeExceeded,
  OpsItemAccessDeniedException,
  OpsItemAlreadyExistsException,
  OpsItemConflictException,
  OpsItemInvalidParameterException,
  OpsItemLimitExceededException,
  OpsItemNotFoundException,
  OpsItemRelatedItemAlreadyExistsException,
  OpsItemRelatedItemAssociationNotFoundException,
  OpsMetadataAlreadyExistsException,
  OpsMetadataInvalidArgumentException,
  OpsMetadataKeyLimitExceededException,
  OpsMetadataLimitExceededException,
  OpsMetadataNotFoundException,
  OpsMetadataTooManyUpdatesException,
  ParameterAlreadyExists,
  ParameterLimitExceeded,
  ParameterMaxVersionLimitExceeded,
  ParameterNotFound,
  ParameterPatternMismatchException,
  ParameterVersionLabelLimitExceeded,
  ParameterVersionNotFound,
  PoliciesLimitExceededException,
  ResourceDataSyncAlreadyExistsException,
  ResourceDataSyncConflictException,
  ResourceDataSyncCountExceededException,
  ResourceDataSyncInvalidConfigurationException,
  ResourceDataSyncNotFoundException,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourcePolicyConflictException,
  ResourcePolicyInvalidParameterException,
  ResourcePolicyLimitExceededException,
  ResourcePolicyNotFoundException,
  ServiceQuotaExceededException,
  ServiceSettingNotFound,
  StatusUnchanged,
  SubTypeCountLimitExceededException,
  TargetInUseException,
  TargetNotConnected,
  ThrottlingException,
  TooManyTagsError as TooManyTagsException,
  TooManyUpdates,
  TotalSizeLimitExceededException,
  UnsupportedCalendarException,
  UnsupportedFeatureRequiredException,
  UnsupportedInventoryItemContextException,
  UnsupportedInventorySchemaVersionException,
  UnsupportedOperatingSystem,
  UnsupportedOperationException,
  UnsupportedParameterType,
  UnsupportedPlatformType,
  ValidationException,
} from "@aws-sdk/client-ssm";
import type { TaggedException } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccessDeniedException",
  "AlreadyExistsException",
  "AssociatedInstances",
  "AssociationAlreadyExists",
  "AssociationDoesNotExist",
  "AssociationExecutionDoesNotExist",
  "AssociationLimitExceeded",
  "AssociationVersionLimitExceeded",
  "AutomationDefinitionNotApprovedException",
  "AutomationDefinitionNotFoundException",
  "AutomationDefinitionVersionNotFoundException",
  "AutomationExecutionLimitExceededException",
  "AutomationExecutionNotFoundException",
  "AutomationStepNotFoundException",
  "ComplianceTypeCountLimitExceededException",
  "CustomSchemaCountLimitExceededException",
  "DocumentAlreadyExists",
  "DocumentLimitExceeded",
  "DocumentPermissionLimit",
  "DocumentVersionLimitExceeded",
  "DoesNotExistException",
  "DuplicateDocumentContent",
  "DuplicateDocumentVersionName",
  "DuplicateInstanceId",
  "FeatureNotAvailableException",
  "HierarchyLevelLimitExceededException",
  "HierarchyTypeMismatchException",
  "IdempotentParameterMismatch",
  "IncompatiblePolicyException",
  "InternalServerError",
  "InvalidActivation",
  "InvalidActivationId",
  "InvalidAggregatorException",
  "InvalidAllowedPatternException",
  "InvalidAssociation",
  "InvalidAssociationVersion",
  "InvalidAutomationExecutionParametersException",
  "InvalidAutomationSignalException",
  "InvalidAutomationStatusUpdateException",
  "InvalidCommandId",
  "InvalidDeleteInventoryParametersException",
  "InvalidDeletionIdException",
  "InvalidDocument",
  "InvalidDocumentContent",
  "InvalidDocumentOperation",
  "InvalidDocumentSchemaVersion",
  "InvalidDocumentType",
  "InvalidDocumentVersion",
  "InvalidFilter",
  "InvalidFilterKey",
  "InvalidFilterOption",
  "InvalidFilterValue",
  "InvalidInstanceId",
  "InvalidInstanceInformationFilterValue",
  "InvalidInstancePropertyFilterValue",
  "InvalidInventoryGroupException",
  "InvalidInventoryItemContextException",
  "InvalidInventoryRequestException",
  "InvalidItemContentException",
  "InvalidKeyId",
  "InvalidNextToken",
  "InvalidNotificationConfig",
  "InvalidOptionException",
  "InvalidOutputFolder",
  "InvalidOutputLocation",
  "InvalidParameters",
  "InvalidPermissionType",
  "InvalidPluginName",
  "InvalidPolicyAttributeException",
  "InvalidPolicyTypeException",
  "InvalidResourceId",
  "InvalidResourceType",
  "InvalidResultAttributeException",
  "InvalidRole",
  "InvalidSchedule",
  "InvalidTag",
  "InvalidTarget",
  "InvalidTargetMaps",
  "InvalidTypeNameException",
  "InvalidUpdate",
  "InvocationDoesNotExist",
  "ItemContentMismatchException",
  "ItemSizeLimitExceededException",
  "MalformedResourcePolicyDocumentException",
  "MaxDocumentSizeExceeded",
  "OpsItemAccessDeniedException",
  "OpsItemAlreadyExistsException",
  "OpsItemConflictException",
  "OpsItemInvalidParameterException",
  "OpsItemLimitExceededException",
  "OpsItemNotFoundException",
  "OpsItemRelatedItemAlreadyExistsException",
  "OpsItemRelatedItemAssociationNotFoundException",
  "OpsMetadataAlreadyExistsException",
  "OpsMetadataInvalidArgumentException",
  "OpsMetadataKeyLimitExceededException",
  "OpsMetadataLimitExceededException",
  "OpsMetadataNotFoundException",
  "OpsMetadataTooManyUpdatesException",
  "ParameterAlreadyExists",
  "ParameterLimitExceeded",
  "ParameterMaxVersionLimitExceeded",
  "ParameterNotFound",
  "ParameterPatternMismatchException",
  "ParameterVersionLabelLimitExceeded",
  "ParameterVersionNotFound",
  "PoliciesLimitExceededException",
  "ResourceDataSyncAlreadyExistsException",
  "ResourceDataSyncConflictException",
  "ResourceDataSyncCountExceededException",
  "ResourceDataSyncInvalidConfigurationException",
  "ResourceDataSyncNotFoundException",
  "ResourceInUseException",
  "ResourceLimitExceededException",
  "ResourceNotFoundException",
  "ResourcePolicyConflictException",
  "ResourcePolicyInvalidParameterException",
  "ResourcePolicyLimitExceededException",
  "ResourcePolicyNotFoundException",
  "ServiceQuotaExceededException",
  "ServiceSettingNotFound",
  "StatusUnchanged",
  "SubTypeCountLimitExceededException",
  "TargetInUseException",
  "TargetNotConnected",
  "ThrottlingException",
  "TooManyTagsError",
  "TooManyUpdates",
  "TotalSizeLimitExceededException",
  "UnsupportedCalendarException",
  "UnsupportedFeatureRequiredException",
  "UnsupportedInventoryItemContextException",
  "UnsupportedInventorySchemaVersionException",
  "UnsupportedOperatingSystem",
  "UnsupportedOperationException",
  "UnsupportedParameterType",
  "UnsupportedPlatformType",
  "ValidationException",
] as const;

export type AccessDeniedError = TaggedException<AccessDeniedException>;
export type AlreadyExistsError = TaggedException<AlreadyExistsException>;
export type AssociatedInstancesError = TaggedException<AssociatedInstances>;
export type AssociationAlreadyExistsError = TaggedException<AssociationAlreadyExists>;
export type AssociationDoesNotExistError = TaggedException<AssociationDoesNotExist>;
export type AssociationExecutionDoesNotExistError = TaggedException<AssociationExecutionDoesNotExist>;
export type AssociationLimitExceededError = TaggedException<AssociationLimitExceeded>;
export type AssociationVersionLimitExceededError = TaggedException<AssociationVersionLimitExceeded>;
export type AutomationDefinitionNotApprovedError = TaggedException<AutomationDefinitionNotApprovedException>;
export type AutomationDefinitionNotFoundError = TaggedException<AutomationDefinitionNotFoundException>;
export type AutomationDefinitionVersionNotFoundError = TaggedException<AutomationDefinitionVersionNotFoundException>;
export type AutomationExecutionLimitExceededError = TaggedException<AutomationExecutionLimitExceededException>;
export type AutomationExecutionNotFoundError = TaggedException<AutomationExecutionNotFoundException>;
export type AutomationStepNotFoundError = TaggedException<AutomationStepNotFoundException>;
export type ComplianceTypeCountLimitExceededError = TaggedException<ComplianceTypeCountLimitExceededException>;
export type CustomSchemaCountLimitExceededError = TaggedException<CustomSchemaCountLimitExceededException>;
export type DocumentAlreadyExistsError = TaggedException<DocumentAlreadyExists>;
export type DocumentLimitExceededError = TaggedException<DocumentLimitExceeded>;
export type DocumentPermissionLimitError = TaggedException<DocumentPermissionLimit>;
export type DocumentVersionLimitExceededError = TaggedException<DocumentVersionLimitExceeded>;
export type DoesNotExistError = TaggedException<DoesNotExistException>;
export type DuplicateDocumentContentError = TaggedException<DuplicateDocumentContent>;
export type DuplicateDocumentVersionNameError = TaggedException<DuplicateDocumentVersionName>;
export type DuplicateInstanceIdError = TaggedException<DuplicateInstanceId>;
export type FeatureNotAvailableError = TaggedException<FeatureNotAvailableException>;
export type HierarchyLevelLimitExceededError = TaggedException<HierarchyLevelLimitExceededException>;
export type HierarchyTypeMismatchError = TaggedException<HierarchyTypeMismatchException>;
export type IdempotentParameterMismatchError = TaggedException<IdempotentParameterMismatch>;
export type IncompatiblePolicyError = TaggedException<IncompatiblePolicyException>;
export type InternalServerError = TaggedException<InternalServerException>;
export type InvalidActivationError = TaggedException<InvalidActivation>;
export type InvalidActivationIdError = TaggedException<InvalidActivationId>;
export type InvalidAggregatorError = TaggedException<InvalidAggregatorException>;
export type InvalidAllowedPatternError = TaggedException<InvalidAllowedPatternException>;
export type InvalidAssociationError = TaggedException<InvalidAssociation>;
export type InvalidAssociationVersionError = TaggedException<InvalidAssociationVersion>;
export type InvalidAutomationExecutionParametersError = TaggedException<InvalidAutomationExecutionParametersException>;
export type InvalidAutomationSignalError = TaggedException<InvalidAutomationSignalException>;
export type InvalidAutomationStatusUpdateError = TaggedException<InvalidAutomationStatusUpdateException>;
export type InvalidCommandIdError = TaggedException<InvalidCommandId>;
export type InvalidDeleteInventoryParametersError = TaggedException<InvalidDeleteInventoryParametersException>;
export type InvalidDeletionIdError = TaggedException<InvalidDeletionIdException>;
export type InvalidDocumentError = TaggedException<InvalidDocument>;
export type InvalidDocumentContentError = TaggedException<InvalidDocumentContent>;
export type InvalidDocumentOperationError = TaggedException<InvalidDocumentOperation>;
export type InvalidDocumentSchemaVersionError = TaggedException<InvalidDocumentSchemaVersion>;
export type InvalidDocumentTypeError = TaggedException<InvalidDocumentType>;
export type InvalidDocumentVersionError = TaggedException<InvalidDocumentVersion>;
export type InvalidFilterError = TaggedException<InvalidFilter>;
export type InvalidFilterKeyError = TaggedException<InvalidFilterKey>;
export type InvalidFilterOptionError = TaggedException<InvalidFilterOption>;
export type InvalidFilterValueError = TaggedException<InvalidFilterValue>;
export type InvalidInstanceIdError = TaggedException<InvalidInstanceId>;
export type InvalidInstanceInformationFilterValueError = TaggedException<InvalidInstanceInformationFilterValue>;
export type InvalidInstancePropertyFilterValueError = TaggedException<InvalidInstancePropertyFilterValue>;
export type InvalidInventoryGroupError = TaggedException<InvalidInventoryGroupException>;
export type InvalidInventoryItemContextError = TaggedException<InvalidInventoryItemContextException>;
export type InvalidInventoryRequestError = TaggedException<InvalidInventoryRequestException>;
export type InvalidItemContentError = TaggedException<InvalidItemContentException>;
export type InvalidKeyIdError = TaggedException<InvalidKeyId>;
export type InvalidNextTokenError = TaggedException<InvalidNextToken>;
export type InvalidNotificationConfigError = TaggedException<InvalidNotificationConfig>;
export type InvalidOptionError = TaggedException<InvalidOptionException>;
export type InvalidOutputFolderError = TaggedException<InvalidOutputFolder>;
export type InvalidOutputLocationError = TaggedException<InvalidOutputLocation>;
export type InvalidParametersError = TaggedException<InvalidParameters>;
export type InvalidPermissionTypeError = TaggedException<InvalidPermissionType>;
export type InvalidPluginNameError = TaggedException<InvalidPluginName>;
export type InvalidPolicyAttributeError = TaggedException<InvalidPolicyAttributeException>;
export type InvalidPolicyTypeError = TaggedException<InvalidPolicyTypeException>;
export type InvalidResourceIdError = TaggedException<InvalidResourceId>;
export type InvalidResourceTypeError = TaggedException<InvalidResourceType>;
export type InvalidResultAttributeError = TaggedException<InvalidResultAttributeException>;
export type InvalidRoleError = TaggedException<InvalidRole>;
export type InvalidScheduleError = TaggedException<InvalidSchedule>;
export type InvalidTagError = TaggedException<InvalidTag>;
export type InvalidTargetError = TaggedException<InvalidTarget>;
export type InvalidTargetMapsError = TaggedException<InvalidTargetMaps>;
export type InvalidTypeNameError = TaggedException<InvalidTypeNameException>;
export type InvalidUpdateError = TaggedException<InvalidUpdate>;
export type InvocationDoesNotExistError = TaggedException<InvocationDoesNotExist>;
export type ItemContentMismatchError = TaggedException<ItemContentMismatchException>;
export type ItemSizeLimitExceededError = TaggedException<ItemSizeLimitExceededException>;
export type MalformedResourcePolicyDocumentError = TaggedException<MalformedResourcePolicyDocumentException>;
export type MaxDocumentSizeExceededError = TaggedException<MaxDocumentSizeExceeded>;
export type OpsItemAccessDeniedError = TaggedException<OpsItemAccessDeniedException>;
export type OpsItemAlreadyExistsError = TaggedException<OpsItemAlreadyExistsException>;
export type OpsItemConflictError = TaggedException<OpsItemConflictException>;
export type OpsItemInvalidParameterError = TaggedException<OpsItemInvalidParameterException>;
export type OpsItemLimitExceededError = TaggedException<OpsItemLimitExceededException>;
export type OpsItemNotFoundError = TaggedException<OpsItemNotFoundException>;
export type OpsItemRelatedItemAlreadyExistsError = TaggedException<OpsItemRelatedItemAlreadyExistsException>;
export type OpsItemRelatedItemAssociationNotFoundError = TaggedException<
  OpsItemRelatedItemAssociationNotFoundException
>;
export type OpsMetadataAlreadyExistsError = TaggedException<OpsMetadataAlreadyExistsException>;
export type OpsMetadataInvalidArgumentError = TaggedException<OpsMetadataInvalidArgumentException>;
export type OpsMetadataKeyLimitExceededError = TaggedException<OpsMetadataKeyLimitExceededException>;
export type OpsMetadataLimitExceededError = TaggedException<OpsMetadataLimitExceededException>;
export type OpsMetadataNotFoundError = TaggedException<OpsMetadataNotFoundException>;
export type OpsMetadataTooManyUpdatesError = TaggedException<OpsMetadataTooManyUpdatesException>;
export type ParameterAlreadyExistsError = TaggedException<ParameterAlreadyExists>;
export type ParameterLimitExceededError = TaggedException<ParameterLimitExceeded>;
export type ParameterMaxVersionLimitExceededError = TaggedException<ParameterMaxVersionLimitExceeded>;
export type ParameterNotFoundError = TaggedException<ParameterNotFound>;
export type ParameterPatternMismatchError = TaggedException<ParameterPatternMismatchException>;
export type ParameterVersionLabelLimitExceededError = TaggedException<ParameterVersionLabelLimitExceeded>;
export type ParameterVersionNotFoundError = TaggedException<ParameterVersionNotFound>;
export type PoliciesLimitExceededError = TaggedException<PoliciesLimitExceededException>;
export type ResourceDataSyncAlreadyExistsError = TaggedException<ResourceDataSyncAlreadyExistsException>;
export type ResourceDataSyncConflictError = TaggedException<ResourceDataSyncConflictException>;
export type ResourceDataSyncCountExceededError = TaggedException<ResourceDataSyncCountExceededException>;
export type ResourceDataSyncInvalidConfigurationError = TaggedException<ResourceDataSyncInvalidConfigurationException>;
export type ResourceDataSyncNotFoundError = TaggedException<ResourceDataSyncNotFoundException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceLimitExceededError = TaggedException<ResourceLimitExceededException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type ResourcePolicyConflictError = TaggedException<ResourcePolicyConflictException>;
export type ResourcePolicyInvalidParameterError = TaggedException<ResourcePolicyInvalidParameterException>;
export type ResourcePolicyLimitExceededError = TaggedException<ResourcePolicyLimitExceededException>;
export type ResourcePolicyNotFoundError = TaggedException<ResourcePolicyNotFoundException>;
export type ServiceQuotaExceededError = TaggedException<ServiceQuotaExceededException>;
export type ServiceSettingNotFoundError = TaggedException<ServiceSettingNotFound>;
export type StatusUnchangedError = TaggedException<StatusUnchanged>;
export type SubTypeCountLimitExceededError = TaggedException<SubTypeCountLimitExceededException>;
export type TargetInUseError = TaggedException<TargetInUseException>;
export type TargetNotConnectedError = TaggedException<TargetNotConnected>;
export type ThrottlingError = TaggedException<ThrottlingException>;
export type TooManyTagsError = TaggedException<TooManyTagsException>;
export type TooManyUpdatesError = TaggedException<TooManyUpdates>;
export type TotalSizeLimitExceededError = TaggedException<TotalSizeLimitExceededException>;
export type UnsupportedCalendarError = TaggedException<UnsupportedCalendarException>;
export type UnsupportedFeatureRequiredError = TaggedException<UnsupportedFeatureRequiredException>;
export type UnsupportedInventoryItemContextError = TaggedException<UnsupportedInventoryItemContextException>;
export type UnsupportedInventorySchemaVersionError = TaggedException<UnsupportedInventorySchemaVersionException>;
export type UnsupportedOperatingSystemError = TaggedException<UnsupportedOperatingSystem>;
export type UnsupportedOperationError = TaggedException<UnsupportedOperationException>;
export type UnsupportedParameterTypeError = TaggedException<UnsupportedParameterType>;
export type UnsupportedPlatformTypeError = TaggedException<UnsupportedPlatformType>;
export type ValidationError = TaggedException<ValidationException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
