/**
 * @since 1.0.0
 */
import {
  AddTagsToResourceCommand,
  type AddTagsToResourceCommandInput,
  type AddTagsToResourceCommandOutput,
  AssociateOpsItemRelatedItemCommand,
  type AssociateOpsItemRelatedItemCommandInput,
  type AssociateOpsItemRelatedItemCommandOutput,
  CancelCommandCommand,
  type CancelCommandCommandInput,
  type CancelCommandCommandOutput,
  CancelMaintenanceWindowExecutionCommand,
  type CancelMaintenanceWindowExecutionCommandInput,
  type CancelMaintenanceWindowExecutionCommandOutput,
  CreateActivationCommand,
  type CreateActivationCommandInput,
  type CreateActivationCommandOutput,
  CreateAssociationBatchCommand,
  type CreateAssociationBatchCommandInput,
  type CreateAssociationBatchCommandOutput,
  CreateAssociationCommand,
  type CreateAssociationCommandInput,
  type CreateAssociationCommandOutput,
  CreateDocumentCommand,
  type CreateDocumentCommandInput,
  type CreateDocumentCommandOutput,
  CreateMaintenanceWindowCommand,
  type CreateMaintenanceWindowCommandInput,
  type CreateMaintenanceWindowCommandOutput,
  CreateOpsItemCommand,
  type CreateOpsItemCommandInput,
  type CreateOpsItemCommandOutput,
  CreateOpsMetadataCommand,
  type CreateOpsMetadataCommandInput,
  type CreateOpsMetadataCommandOutput,
  CreatePatchBaselineCommand,
  type CreatePatchBaselineCommandInput,
  type CreatePatchBaselineCommandOutput,
  CreateResourceDataSyncCommand,
  type CreateResourceDataSyncCommandInput,
  type CreateResourceDataSyncCommandOutput,
  DeleteActivationCommand,
  type DeleteActivationCommandInput,
  type DeleteActivationCommandOutput,
  DeleteAssociationCommand,
  type DeleteAssociationCommandInput,
  type DeleteAssociationCommandOutput,
  DeleteDocumentCommand,
  type DeleteDocumentCommandInput,
  type DeleteDocumentCommandOutput,
  DeleteInventoryCommand,
  type DeleteInventoryCommandInput,
  type DeleteInventoryCommandOutput,
  DeleteMaintenanceWindowCommand,
  type DeleteMaintenanceWindowCommandInput,
  type DeleteMaintenanceWindowCommandOutput,
  DeleteOpsItemCommand,
  type DeleteOpsItemCommandInput,
  type DeleteOpsItemCommandOutput,
  DeleteOpsMetadataCommand,
  type DeleteOpsMetadataCommandInput,
  type DeleteOpsMetadataCommandOutput,
  DeleteParameterCommand,
  type DeleteParameterCommandInput,
  type DeleteParameterCommandOutput,
  DeleteParametersCommand,
  type DeleteParametersCommandInput,
  type DeleteParametersCommandOutput,
  DeletePatchBaselineCommand,
  type DeletePatchBaselineCommandInput,
  type DeletePatchBaselineCommandOutput,
  DeleteResourceDataSyncCommand,
  type DeleteResourceDataSyncCommandInput,
  type DeleteResourceDataSyncCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeregisterManagedInstanceCommand,
  type DeregisterManagedInstanceCommandInput,
  type DeregisterManagedInstanceCommandOutput,
  DeregisterPatchBaselineForPatchGroupCommand,
  type DeregisterPatchBaselineForPatchGroupCommandInput,
  type DeregisterPatchBaselineForPatchGroupCommandOutput,
  DeregisterTargetFromMaintenanceWindowCommand,
  type DeregisterTargetFromMaintenanceWindowCommandInput,
  type DeregisterTargetFromMaintenanceWindowCommandOutput,
  DeregisterTaskFromMaintenanceWindowCommand,
  type DeregisterTaskFromMaintenanceWindowCommandInput,
  type DeregisterTaskFromMaintenanceWindowCommandOutput,
  DescribeActivationsCommand,
  type DescribeActivationsCommandInput,
  type DescribeActivationsCommandOutput,
  DescribeAssociationCommand,
  type DescribeAssociationCommandInput,
  type DescribeAssociationCommandOutput,
  DescribeAssociationExecutionsCommand,
  type DescribeAssociationExecutionsCommandInput,
  type DescribeAssociationExecutionsCommandOutput,
  DescribeAssociationExecutionTargetsCommand,
  type DescribeAssociationExecutionTargetsCommandInput,
  type DescribeAssociationExecutionTargetsCommandOutput,
  DescribeAutomationExecutionsCommand,
  type DescribeAutomationExecutionsCommandInput,
  type DescribeAutomationExecutionsCommandOutput,
  DescribeAutomationStepExecutionsCommand,
  type DescribeAutomationStepExecutionsCommandInput,
  type DescribeAutomationStepExecutionsCommandOutput,
  DescribeAvailablePatchesCommand,
  type DescribeAvailablePatchesCommandInput,
  type DescribeAvailablePatchesCommandOutput,
  DescribeDocumentCommand,
  type DescribeDocumentCommandInput,
  type DescribeDocumentCommandOutput,
  DescribeDocumentPermissionCommand,
  type DescribeDocumentPermissionCommandInput,
  type DescribeDocumentPermissionCommandOutput,
  DescribeEffectiveInstanceAssociationsCommand,
  type DescribeEffectiveInstanceAssociationsCommandInput,
  type DescribeEffectiveInstanceAssociationsCommandOutput,
  DescribeEffectivePatchesForPatchBaselineCommand,
  type DescribeEffectivePatchesForPatchBaselineCommandInput,
  type DescribeEffectivePatchesForPatchBaselineCommandOutput,
  DescribeInstanceAssociationsStatusCommand,
  type DescribeInstanceAssociationsStatusCommandInput,
  type DescribeInstanceAssociationsStatusCommandOutput,
  DescribeInstanceInformationCommand,
  type DescribeInstanceInformationCommandInput,
  type DescribeInstanceInformationCommandOutput,
  DescribeInstancePatchesCommand,
  type DescribeInstancePatchesCommandInput,
  type DescribeInstancePatchesCommandOutput,
  DescribeInstancePatchStatesCommand,
  type DescribeInstancePatchStatesCommandInput,
  type DescribeInstancePatchStatesCommandOutput,
  DescribeInstancePatchStatesForPatchGroupCommand,
  type DescribeInstancePatchStatesForPatchGroupCommandInput,
  type DescribeInstancePatchStatesForPatchGroupCommandOutput,
  DescribeInstancePropertiesCommand,
  type DescribeInstancePropertiesCommandInput,
  type DescribeInstancePropertiesCommandOutput,
  DescribeInventoryDeletionsCommand,
  type DescribeInventoryDeletionsCommandInput,
  type DescribeInventoryDeletionsCommandOutput,
  DescribeMaintenanceWindowExecutionsCommand,
  type DescribeMaintenanceWindowExecutionsCommandInput,
  type DescribeMaintenanceWindowExecutionsCommandOutput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  type DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  type DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
  DescribeMaintenanceWindowExecutionTasksCommand,
  type DescribeMaintenanceWindowExecutionTasksCommandInput,
  type DescribeMaintenanceWindowExecutionTasksCommandOutput,
  DescribeMaintenanceWindowScheduleCommand,
  type DescribeMaintenanceWindowScheduleCommandInput,
  type DescribeMaintenanceWindowScheduleCommandOutput,
  DescribeMaintenanceWindowsCommand,
  type DescribeMaintenanceWindowsCommandInput,
  type DescribeMaintenanceWindowsCommandOutput,
  DescribeMaintenanceWindowsForTargetCommand,
  type DescribeMaintenanceWindowsForTargetCommandInput,
  type DescribeMaintenanceWindowsForTargetCommandOutput,
  DescribeMaintenanceWindowTargetsCommand,
  type DescribeMaintenanceWindowTargetsCommandInput,
  type DescribeMaintenanceWindowTargetsCommandOutput,
  DescribeMaintenanceWindowTasksCommand,
  type DescribeMaintenanceWindowTasksCommandInput,
  type DescribeMaintenanceWindowTasksCommandOutput,
  DescribeOpsItemsCommand,
  type DescribeOpsItemsCommandInput,
  type DescribeOpsItemsCommandOutput,
  DescribeParametersCommand,
  type DescribeParametersCommandInput,
  type DescribeParametersCommandOutput,
  DescribePatchBaselinesCommand,
  type DescribePatchBaselinesCommandInput,
  type DescribePatchBaselinesCommandOutput,
  DescribePatchGroupsCommand,
  type DescribePatchGroupsCommandInput,
  type DescribePatchGroupsCommandOutput,
  DescribePatchGroupStateCommand,
  type DescribePatchGroupStateCommandInput,
  type DescribePatchGroupStateCommandOutput,
  DescribePatchPropertiesCommand,
  type DescribePatchPropertiesCommandInput,
  type DescribePatchPropertiesCommandOutput,
  DescribeSessionsCommand,
  type DescribeSessionsCommandInput,
  type DescribeSessionsCommandOutput,
  DisassociateOpsItemRelatedItemCommand,
  type DisassociateOpsItemRelatedItemCommandInput,
  type DisassociateOpsItemRelatedItemCommandOutput,
  GetAccessTokenCommand,
  type GetAccessTokenCommandInput,
  type GetAccessTokenCommandOutput,
  GetAutomationExecutionCommand,
  type GetAutomationExecutionCommandInput,
  type GetAutomationExecutionCommandOutput,
  GetCalendarStateCommand,
  type GetCalendarStateCommandInput,
  type GetCalendarStateCommandOutput,
  GetCommandInvocationCommand,
  type GetCommandInvocationCommandInput,
  type GetCommandInvocationCommandOutput,
  GetConnectionStatusCommand,
  type GetConnectionStatusCommandInput,
  type GetConnectionStatusCommandOutput,
  GetDefaultPatchBaselineCommand,
  type GetDefaultPatchBaselineCommandInput,
  type GetDefaultPatchBaselineCommandOutput,
  GetDeployablePatchSnapshotForInstanceCommand,
  type GetDeployablePatchSnapshotForInstanceCommandInput,
  type GetDeployablePatchSnapshotForInstanceCommandOutput,
  GetDocumentCommand,
  type GetDocumentCommandInput,
  type GetDocumentCommandOutput,
  GetExecutionPreviewCommand,
  type GetExecutionPreviewCommandInput,
  type GetExecutionPreviewCommandOutput,
  GetInventoryCommand,
  type GetInventoryCommandInput,
  type GetInventoryCommandOutput,
  GetInventorySchemaCommand,
  type GetInventorySchemaCommandInput,
  type GetInventorySchemaCommandOutput,
  GetMaintenanceWindowCommand,
  type GetMaintenanceWindowCommandInput,
  type GetMaintenanceWindowCommandOutput,
  GetMaintenanceWindowExecutionCommand,
  type GetMaintenanceWindowExecutionCommandInput,
  type GetMaintenanceWindowExecutionCommandOutput,
  GetMaintenanceWindowExecutionTaskCommand,
  type GetMaintenanceWindowExecutionTaskCommandInput,
  type GetMaintenanceWindowExecutionTaskCommandOutput,
  GetMaintenanceWindowExecutionTaskInvocationCommand,
  type GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  type GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
  GetMaintenanceWindowTaskCommand,
  type GetMaintenanceWindowTaskCommandInput,
  type GetMaintenanceWindowTaskCommandOutput,
  GetOpsItemCommand,
  type GetOpsItemCommandInput,
  type GetOpsItemCommandOutput,
  GetOpsMetadataCommand,
  type GetOpsMetadataCommandInput,
  type GetOpsMetadataCommandOutput,
  GetOpsSummaryCommand,
  type GetOpsSummaryCommandInput,
  type GetOpsSummaryCommandOutput,
  GetParameterCommand,
  type GetParameterCommandInput,
  type GetParameterCommandOutput,
  GetParameterHistoryCommand,
  type GetParameterHistoryCommandInput,
  type GetParameterHistoryCommandOutput,
  GetParametersByPathCommand,
  type GetParametersByPathCommandInput,
  type GetParametersByPathCommandOutput,
  GetParametersCommand,
  type GetParametersCommandInput,
  type GetParametersCommandOutput,
  GetPatchBaselineCommand,
  type GetPatchBaselineCommandInput,
  type GetPatchBaselineCommandOutput,
  GetPatchBaselineForPatchGroupCommand,
  type GetPatchBaselineForPatchGroupCommandInput,
  type GetPatchBaselineForPatchGroupCommandOutput,
  GetResourcePoliciesCommand,
  type GetResourcePoliciesCommandInput,
  type GetResourcePoliciesCommandOutput,
  GetServiceSettingCommand,
  type GetServiceSettingCommandInput,
  type GetServiceSettingCommandOutput,
  LabelParameterVersionCommand,
  type LabelParameterVersionCommandInput,
  type LabelParameterVersionCommandOutput,
  ListAssociationsCommand,
  type ListAssociationsCommandInput,
  type ListAssociationsCommandOutput,
  ListAssociationVersionsCommand,
  type ListAssociationVersionsCommandInput,
  type ListAssociationVersionsCommandOutput,
  ListCommandInvocationsCommand,
  type ListCommandInvocationsCommandInput,
  type ListCommandInvocationsCommandOutput,
  ListCommandsCommand,
  type ListCommandsCommandInput,
  type ListCommandsCommandOutput,
  ListComplianceItemsCommand,
  type ListComplianceItemsCommandInput,
  type ListComplianceItemsCommandOutput,
  ListComplianceSummariesCommand,
  type ListComplianceSummariesCommandInput,
  type ListComplianceSummariesCommandOutput,
  ListDocumentMetadataHistoryCommand,
  type ListDocumentMetadataHistoryCommandInput,
  type ListDocumentMetadataHistoryCommandOutput,
  ListDocumentsCommand,
  type ListDocumentsCommandInput,
  type ListDocumentsCommandOutput,
  ListDocumentVersionsCommand,
  type ListDocumentVersionsCommandInput,
  type ListDocumentVersionsCommandOutput,
  ListInventoryEntriesCommand,
  type ListInventoryEntriesCommandInput,
  type ListInventoryEntriesCommandOutput,
  ListNodesCommand,
  type ListNodesCommandInput,
  type ListNodesCommandOutput,
  ListNodesSummaryCommand,
  type ListNodesSummaryCommandInput,
  type ListNodesSummaryCommandOutput,
  ListOpsItemEventsCommand,
  type ListOpsItemEventsCommandInput,
  type ListOpsItemEventsCommandOutput,
  ListOpsItemRelatedItemsCommand,
  type ListOpsItemRelatedItemsCommandInput,
  type ListOpsItemRelatedItemsCommandOutput,
  ListOpsMetadataCommand,
  type ListOpsMetadataCommandInput,
  type ListOpsMetadataCommandOutput,
  ListResourceComplianceSummariesCommand,
  type ListResourceComplianceSummariesCommandInput,
  type ListResourceComplianceSummariesCommandOutput,
  ListResourceDataSyncCommand,
  type ListResourceDataSyncCommandInput,
  type ListResourceDataSyncCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ModifyDocumentPermissionCommand,
  type ModifyDocumentPermissionCommandInput,
  type ModifyDocumentPermissionCommandOutput,
  PutComplianceItemsCommand,
  type PutComplianceItemsCommandInput,
  type PutComplianceItemsCommandOutput,
  PutInventoryCommand,
  type PutInventoryCommandInput,
  type PutInventoryCommandOutput,
  PutParameterCommand,
  type PutParameterCommandInput,
  type PutParameterCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  RegisterDefaultPatchBaselineCommand,
  type RegisterDefaultPatchBaselineCommandInput,
  type RegisterDefaultPatchBaselineCommandOutput,
  RegisterPatchBaselineForPatchGroupCommand,
  type RegisterPatchBaselineForPatchGroupCommandInput,
  type RegisterPatchBaselineForPatchGroupCommandOutput,
  RegisterTargetWithMaintenanceWindowCommand,
  type RegisterTargetWithMaintenanceWindowCommandInput,
  type RegisterTargetWithMaintenanceWindowCommandOutput,
  RegisterTaskWithMaintenanceWindowCommand,
  type RegisterTaskWithMaintenanceWindowCommandInput,
  type RegisterTaskWithMaintenanceWindowCommandOutput,
  RemoveTagsFromResourceCommand,
  type RemoveTagsFromResourceCommandInput,
  type RemoveTagsFromResourceCommandOutput,
  ResetServiceSettingCommand,
  type ResetServiceSettingCommandInput,
  type ResetServiceSettingCommandOutput,
  ResumeSessionCommand,
  type ResumeSessionCommandInput,
  type ResumeSessionCommandOutput,
  SendAutomationSignalCommand,
  type SendAutomationSignalCommandInput,
  type SendAutomationSignalCommandOutput,
  SendCommandCommand,
  type SendCommandCommandInput,
  type SendCommandCommandOutput,
  type SSMClient,
  type SSMClientConfig,
  StartAccessRequestCommand,
  type StartAccessRequestCommandInput,
  type StartAccessRequestCommandOutput,
  StartAssociationsOnceCommand,
  type StartAssociationsOnceCommandInput,
  type StartAssociationsOnceCommandOutput,
  StartAutomationExecutionCommand,
  type StartAutomationExecutionCommandInput,
  type StartAutomationExecutionCommandOutput,
  StartChangeRequestExecutionCommand,
  type StartChangeRequestExecutionCommandInput,
  type StartChangeRequestExecutionCommandOutput,
  StartExecutionPreviewCommand,
  type StartExecutionPreviewCommandInput,
  type StartExecutionPreviewCommandOutput,
  StartSessionCommand,
  type StartSessionCommandInput,
  type StartSessionCommandOutput,
  StopAutomationExecutionCommand,
  type StopAutomationExecutionCommandInput,
  type StopAutomationExecutionCommandOutput,
  TerminateSessionCommand,
  type TerminateSessionCommandInput,
  type TerminateSessionCommandOutput,
  UnlabelParameterVersionCommand,
  type UnlabelParameterVersionCommandInput,
  type UnlabelParameterVersionCommandOutput,
  UpdateAssociationCommand,
  type UpdateAssociationCommandInput,
  type UpdateAssociationCommandOutput,
  UpdateAssociationStatusCommand,
  type UpdateAssociationStatusCommandInput,
  type UpdateAssociationStatusCommandOutput,
  UpdateDocumentCommand,
  type UpdateDocumentCommandInput,
  type UpdateDocumentCommandOutput,
  UpdateDocumentDefaultVersionCommand,
  type UpdateDocumentDefaultVersionCommandInput,
  type UpdateDocumentDefaultVersionCommandOutput,
  UpdateDocumentMetadataCommand,
  type UpdateDocumentMetadataCommandInput,
  type UpdateDocumentMetadataCommandOutput,
  UpdateMaintenanceWindowCommand,
  type UpdateMaintenanceWindowCommandInput,
  type UpdateMaintenanceWindowCommandOutput,
  UpdateMaintenanceWindowTargetCommand,
  type UpdateMaintenanceWindowTargetCommandInput,
  type UpdateMaintenanceWindowTargetCommandOutput,
  UpdateMaintenanceWindowTaskCommand,
  type UpdateMaintenanceWindowTaskCommandInput,
  type UpdateMaintenanceWindowTaskCommandOutput,
  UpdateManagedInstanceRoleCommand,
  type UpdateManagedInstanceRoleCommandInput,
  type UpdateManagedInstanceRoleCommandOutput,
  UpdateOpsItemCommand,
  type UpdateOpsItemCommandInput,
  type UpdateOpsItemCommandOutput,
  UpdateOpsMetadataCommand,
  type UpdateOpsMetadataCommandInput,
  type UpdateOpsMetadataCommandOutput,
  UpdatePatchBaselineCommand,
  type UpdatePatchBaselineCommandInput,
  type UpdatePatchBaselineCommandOutput,
  UpdateResourceDataSyncCommand,
  type UpdateResourceDataSyncCommandInput,
  type UpdateResourceDataSyncCommandOutput,
  UpdateServiceSettingCommand,
  type UpdateServiceSettingCommandInput,
  type UpdateServiceSettingCommandOutput,
} from "@aws-sdk/client-ssm";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  AccessDeniedError,
  AlreadyExistsError,
  AssociatedInstancesError,
  AssociationAlreadyExistsError,
  AssociationDoesNotExistError,
  AssociationExecutionDoesNotExistError,
  AssociationLimitExceededError,
  AssociationVersionLimitExceededError,
  AutomationDefinitionNotApprovedError,
  AutomationDefinitionNotFoundError,
  AutomationDefinitionVersionNotFoundError,
  AutomationExecutionLimitExceededError,
  AutomationExecutionNotFoundError,
  AutomationStepNotFoundError,
  ComplianceTypeCountLimitExceededError,
  CustomSchemaCountLimitExceededError,
  DocumentAlreadyExistsError,
  DocumentLimitExceededError,
  DocumentPermissionLimitError,
  DocumentVersionLimitExceededError,
  DoesNotExistError,
  DuplicateDocumentContentError,
  DuplicateDocumentVersionNameError,
  DuplicateInstanceIdError,
  FeatureNotAvailableError,
  HierarchyLevelLimitExceededError,
  HierarchyTypeMismatchError,
  IdempotentParameterMismatchError,
  IncompatiblePolicyError,
  InternalServerError,
  InvalidActivationError,
  InvalidActivationIdError,
  InvalidAggregatorError,
  InvalidAllowedPatternError,
  InvalidAssociationError,
  InvalidAssociationVersionError,
  InvalidAutomationExecutionParametersError,
  InvalidAutomationSignalError,
  InvalidAutomationStatusUpdateError,
  InvalidCommandIdError,
  InvalidDeleteInventoryParametersError,
  InvalidDeletionIdError,
  InvalidDocumentContentError,
  InvalidDocumentError,
  InvalidDocumentOperationError,
  InvalidDocumentSchemaVersionError,
  InvalidDocumentTypeError,
  InvalidDocumentVersionError,
  InvalidFilterError,
  InvalidFilterKeyError,
  InvalidFilterOptionError,
  InvalidFilterValueError,
  InvalidInstanceIdError,
  InvalidInstanceInformationFilterValueError,
  InvalidInstancePropertyFilterValueError,
  InvalidInventoryGroupError,
  InvalidInventoryItemContextError,
  InvalidInventoryRequestError,
  InvalidItemContentError,
  InvalidKeyIdError,
  InvalidNextTokenError,
  InvalidNotificationConfigError,
  InvalidOptionError,
  InvalidOutputFolderError,
  InvalidOutputLocationError,
  InvalidParametersError,
  InvalidPermissionTypeError,
  InvalidPluginNameError,
  InvalidPolicyAttributeError,
  InvalidPolicyTypeError,
  InvalidResourceIdError,
  InvalidResourceTypeError,
  InvalidResultAttributeError,
  InvalidRoleError,
  InvalidScheduleError,
  InvalidTagError,
  InvalidTargetError,
  InvalidTargetMapsError,
  InvalidTypeNameError,
  InvalidUpdateError,
  InvocationDoesNotExistError,
  ItemContentMismatchError,
  ItemSizeLimitExceededError,
  MalformedResourcePolicyDocumentError,
  MaxDocumentSizeExceededError,
  NoLongerSupportedError,
  OpsItemAccessDeniedError,
  OpsItemAlreadyExistsError,
  OpsItemConflictError,
  OpsItemInvalidParameterError,
  OpsItemLimitExceededError,
  OpsItemNotFoundError,
  OpsItemRelatedItemAlreadyExistsError,
  OpsItemRelatedItemAssociationNotFoundError,
  OpsMetadataAlreadyExistsError,
  OpsMetadataInvalidArgumentError,
  OpsMetadataKeyLimitExceededError,
  OpsMetadataLimitExceededError,
  OpsMetadataNotFoundError,
  OpsMetadataTooManyUpdatesError,
  ParameterAlreadyExistsError,
  ParameterLimitExceededError,
  ParameterMaxVersionLimitExceededError,
  ParameterNotFoundError,
  ParameterPatternMismatchError,
  ParameterVersionLabelLimitExceededError,
  ParameterVersionNotFoundError,
  PoliciesLimitExceededError,
  ResourceDataSyncAlreadyExistsError,
  ResourceDataSyncConflictError,
  ResourceDataSyncCountExceededError,
  ResourceDataSyncInvalidConfigurationError,
  ResourceDataSyncNotFoundError,
  ResourceInUseError,
  ResourceLimitExceededError,
  ResourceNotFoundError,
  ResourcePolicyConflictError,
  ResourcePolicyInvalidParameterError,
  ResourcePolicyLimitExceededError,
  ResourcePolicyNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  ServiceSettingNotFoundError,
  StatusUnchangedError,
  SubTypeCountLimitExceededError,
  TargetInUseError,
  TargetNotConnectedError,
  ThrottlingError,
  TooManyTagsError,
  TooManyUpdatesError,
  TotalSizeLimitExceededError,
  UnsupportedCalendarError,
  UnsupportedFeatureRequiredError,
  UnsupportedInventoryItemContextError,
  UnsupportedInventorySchemaVersionError,
  UnsupportedOperatingSystemError,
  UnsupportedOperationError,
  UnsupportedParameterTypeError,
  UnsupportedPlatformTypeError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./SSMClientInstance.js";
import * as SSMServiceConfig from "./SSMServiceConfig.js";

const commands = {
  AddTagsToResourceCommand,
  AssociateOpsItemRelatedItemCommand,
  CancelCommandCommand,
  CancelMaintenanceWindowExecutionCommand,
  CreateActivationCommand,
  CreateAssociationCommand,
  CreateAssociationBatchCommand,
  CreateDocumentCommand,
  CreateMaintenanceWindowCommand,
  CreateOpsItemCommand,
  CreateOpsMetadataCommand,
  CreatePatchBaselineCommand,
  CreateResourceDataSyncCommand,
  DeleteActivationCommand,
  DeleteAssociationCommand,
  DeleteDocumentCommand,
  DeleteInventoryCommand,
  DeleteMaintenanceWindowCommand,
  DeleteOpsItemCommand,
  DeleteOpsMetadataCommand,
  DeleteParameterCommand,
  DeleteParametersCommand,
  DeletePatchBaselineCommand,
  DeleteResourceDataSyncCommand,
  DeleteResourcePolicyCommand,
  DeregisterManagedInstanceCommand,
  DeregisterPatchBaselineForPatchGroupCommand,
  DeregisterTargetFromMaintenanceWindowCommand,
  DeregisterTaskFromMaintenanceWindowCommand,
  DescribeActivationsCommand,
  DescribeAssociationCommand,
  DescribeAssociationExecutionTargetsCommand,
  DescribeAssociationExecutionsCommand,
  DescribeAutomationExecutionsCommand,
  DescribeAutomationStepExecutionsCommand,
  DescribeAvailablePatchesCommand,
  DescribeDocumentCommand,
  DescribeDocumentPermissionCommand,
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeInstanceAssociationsStatusCommand,
  DescribeInstanceInformationCommand,
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInstancePatchesCommand,
  DescribeInstancePropertiesCommand,
  DescribeInventoryDeletionsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTasksCommand,
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowTargetsCommand,
  DescribeMaintenanceWindowTasksCommand,
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeOpsItemsCommand,
  DescribeParametersCommand,
  DescribePatchBaselinesCommand,
  DescribePatchGroupStateCommand,
  DescribePatchGroupsCommand,
  DescribePatchPropertiesCommand,
  DescribeSessionsCommand,
  DisassociateOpsItemRelatedItemCommand,
  GetAccessTokenCommand,
  GetAutomationExecutionCommand,
  GetCalendarStateCommand,
  GetCommandInvocationCommand,
  GetConnectionStatusCommand,
  GetDefaultPatchBaselineCommand,
  GetDeployablePatchSnapshotForInstanceCommand,
  GetDocumentCommand,
  GetExecutionPreviewCommand,
  GetInventoryCommand,
  GetInventorySchemaCommand,
  GetMaintenanceWindowCommand,
  GetMaintenanceWindowExecutionCommand,
  GetMaintenanceWindowExecutionTaskCommand,
  GetMaintenanceWindowExecutionTaskInvocationCommand,
  GetMaintenanceWindowTaskCommand,
  GetOpsItemCommand,
  GetOpsMetadataCommand,
  GetOpsSummaryCommand,
  GetParameterCommand,
  GetParameterHistoryCommand,
  GetParametersCommand,
  GetParametersByPathCommand,
  GetPatchBaselineCommand,
  GetPatchBaselineForPatchGroupCommand,
  GetResourcePoliciesCommand,
  GetServiceSettingCommand,
  LabelParameterVersionCommand,
  ListAssociationVersionsCommand,
  ListAssociationsCommand,
  ListCommandInvocationsCommand,
  ListCommandsCommand,
  ListComplianceItemsCommand,
  ListComplianceSummariesCommand,
  ListDocumentMetadataHistoryCommand,
  ListDocumentVersionsCommand,
  ListDocumentsCommand,
  ListInventoryEntriesCommand,
  ListNodesCommand,
  ListNodesSummaryCommand,
  ListOpsItemEventsCommand,
  ListOpsItemRelatedItemsCommand,
  ListOpsMetadataCommand,
  ListResourceComplianceSummariesCommand,
  ListResourceDataSyncCommand,
  ListTagsForResourceCommand,
  ModifyDocumentPermissionCommand,
  PutComplianceItemsCommand,
  PutInventoryCommand,
  PutParameterCommand,
  PutResourcePolicyCommand,
  RegisterDefaultPatchBaselineCommand,
  RegisterPatchBaselineForPatchGroupCommand,
  RegisterTargetWithMaintenanceWindowCommand,
  RegisterTaskWithMaintenanceWindowCommand,
  RemoveTagsFromResourceCommand,
  ResetServiceSettingCommand,
  ResumeSessionCommand,
  SendAutomationSignalCommand,
  SendCommandCommand,
  StartAccessRequestCommand,
  StartAssociationsOnceCommand,
  StartAutomationExecutionCommand,
  StartChangeRequestExecutionCommand,
  StartExecutionPreviewCommand,
  StartSessionCommand,
  StopAutomationExecutionCommand,
  TerminateSessionCommand,
  UnlabelParameterVersionCommand,
  UpdateAssociationCommand,
  UpdateAssociationStatusCommand,
  UpdateDocumentCommand,
  UpdateDocumentDefaultVersionCommand,
  UpdateDocumentMetadataCommand,
  UpdateMaintenanceWindowCommand,
  UpdateMaintenanceWindowTargetCommand,
  UpdateMaintenanceWindowTaskCommand,
  UpdateManagedInstanceRoleCommand,
  UpdateOpsItemCommand,
  UpdateOpsMetadataCommand,
  UpdatePatchBaselineCommand,
  UpdateResourceDataSyncCommand,
  UpdateServiceSettingCommand,
};

interface SSMService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsToResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidResourceIdError
    | InvalidResourceTypeError
    | TooManyTagsError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link AssociateOpsItemRelatedItemCommand}
   */
  associateOpsItemRelatedItem(
    args: AssociateOpsItemRelatedItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateOpsItemRelatedItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | OpsItemConflictError
    | OpsItemInvalidParameterError
    | OpsItemLimitExceededError
    | OpsItemNotFoundError
    | OpsItemRelatedItemAlreadyExistsError
  >;

  /**
   * @see {@link CancelCommandCommand}
   */
  cancelCommand(
    args: CancelCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelCommandCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DuplicateInstanceIdError
    | InternalServerError
    | InvalidCommandIdError
    | InvalidInstanceIdError
  >;

  /**
   * @see {@link CancelMaintenanceWindowExecutionCommand}
   */
  cancelMaintenanceWindowExecution(
    args: CancelMaintenanceWindowExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelMaintenanceWindowExecutionCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link CreateActivationCommand}
   */
  createActivation(
    args: CreateActivationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateActivationCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidParametersError
  >;

  /**
   * @see {@link CreateAssociationCommand}
   */
  createAssociation(
    args: CreateAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAssociationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AssociationAlreadyExistsError
    | AssociationLimitExceededError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentVersionError
    | InvalidInstanceIdError
    | InvalidOutputLocationError
    | InvalidParametersError
    | InvalidScheduleError
    | InvalidTagError
    | InvalidTargetError
    | InvalidTargetMapsError
    | UnsupportedPlatformTypeError
  >;

  /**
   * @see {@link CreateAssociationBatchCommand}
   */
  createAssociationBatch(
    args: CreateAssociationBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAssociationBatchCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AssociationLimitExceededError
    | DuplicateInstanceIdError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentVersionError
    | InvalidInstanceIdError
    | InvalidOutputLocationError
    | InvalidParametersError
    | InvalidScheduleError
    | InvalidTargetError
    | InvalidTargetMapsError
    | UnsupportedPlatformTypeError
  >;

  /**
   * @see {@link CreateDocumentCommand}
   */
  createDocument(
    args: CreateDocumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDocumentCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DocumentAlreadyExistsError
    | DocumentLimitExceededError
    | InternalServerError
    | InvalidDocumentContentError
    | InvalidDocumentSchemaVersionError
    | MaxDocumentSizeExceededError
    | NoLongerSupportedError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link CreateMaintenanceWindowCommand}
   */
  createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateMaintenanceWindowCommandOutput,
    Cause.TimeoutError | SdkError | IdempotentParameterMismatchError | InternalServerError | ResourceLimitExceededError
  >;

  /**
   * @see {@link CreateOpsItemCommand}
   */
  createOpsItem(
    args: CreateOpsItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOpsItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | OpsItemAccessDeniedError
    | OpsItemAlreadyExistsError
    | OpsItemInvalidParameterError
    | OpsItemLimitExceededError
  >;

  /**
   * @see {@link CreateOpsMetadataCommand}
   */
  createOpsMetadata(
    args: CreateOpsMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOpsMetadataCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | OpsMetadataAlreadyExistsError
    | OpsMetadataInvalidArgumentError
    | OpsMetadataLimitExceededError
    | OpsMetadataTooManyUpdatesError
  >;

  /**
   * @see {@link CreatePatchBaselineCommand}
   */
  createPatchBaseline(
    args: CreatePatchBaselineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePatchBaselineCommandOutput,
    Cause.TimeoutError | SdkError | IdempotentParameterMismatchError | InternalServerError | ResourceLimitExceededError
  >;

  /**
   * @see {@link CreateResourceDataSyncCommand}
   */
  createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateResourceDataSyncCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | ResourceDataSyncAlreadyExistsError
    | ResourceDataSyncCountExceededError
    | ResourceDataSyncInvalidConfigurationError
  >;

  /**
   * @see {@link DeleteActivationCommand}
   */
  deleteActivation(
    args: DeleteActivationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteActivationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidActivationError
    | InvalidActivationIdError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link DeleteAssociationCommand}
   */
  deleteAssociation(
    args: DeleteAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAssociationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AssociationDoesNotExistError
    | InternalServerError
    | InvalidDocumentError
    | InvalidInstanceIdError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link DeleteDocumentCommand}
   */
  deleteDocument(
    args: DeleteDocumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDocumentCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AssociatedInstancesError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentOperationError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link DeleteInventoryCommand}
   */
  deleteInventory(
    args: DeleteInventoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInventoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidDeleteInventoryParametersError
    | InvalidInventoryRequestError
    | InvalidOptionError
    | InvalidTypeNameError
  >;

  /**
   * @see {@link DeleteMaintenanceWindowCommand}
   */
  deleteMaintenanceWindow(
    args: DeleteMaintenanceWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMaintenanceWindowCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DeleteOpsItemCommand}
   */
  deleteOpsItem(
    args: DeleteOpsItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOpsItemCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | OpsItemInvalidParameterError
  >;

  /**
   * @see {@link DeleteOpsMetadataCommand}
   */
  deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOpsMetadataCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | OpsMetadataInvalidArgumentError | OpsMetadataNotFoundError
  >;

  /**
   * @see {@link DeleteParameterCommand}
   */
  deleteParameter(
    args: DeleteParameterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteParameterCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ParameterNotFoundError
  >;

  /**
   * @see {@link DeleteParametersCommand}
   */
  deleteParameters(
    args: DeleteParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteParametersCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DeletePatchBaselineCommand}
   */
  deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePatchBaselineCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceInUseError
  >;

  /**
   * @see {@link DeleteResourceDataSyncCommand}
   */
  deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourceDataSyncCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | ResourceDataSyncInvalidConfigurationError
    | ResourceDataSyncNotFoundError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | MalformedResourcePolicyDocumentError
    | ResourceNotFoundError
    | ResourcePolicyConflictError
    | ResourcePolicyInvalidParameterError
    | ResourcePolicyNotFoundError
  >;

  /**
   * @see {@link DeregisterManagedInstanceCommand}
   */
  deregisterManagedInstance(
    args: DeregisterManagedInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterManagedInstanceCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidInstanceIdError
  >;

  /**
   * @see {@link DeregisterPatchBaselineForPatchGroupCommand}
   */
  deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterPatchBaselineForPatchGroupCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidResourceIdError
  >;

  /**
   * @see {@link DeregisterTargetFromMaintenanceWindowCommand}
   */
  deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTargetFromMaintenanceWindowCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError | TargetInUseError
  >;

  /**
   * @see {@link DeregisterTaskFromMaintenanceWindowCommand}
   */
  deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTaskFromMaintenanceWindowCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeActivationsCommand}
   */
  describeActivations(
    args: DescribeActivationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeActivationsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidFilterError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAssociationCommand}
   */
  describeAssociation(
    args: DescribeAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAssociationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AssociationDoesNotExistError
    | InternalServerError
    | InvalidAssociationVersionError
    | InvalidDocumentError
    | InvalidInstanceIdError
  >;

  /**
   * @see {@link DescribeAssociationExecutionTargetsCommand}
   */
  describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAssociationExecutionTargetsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AssociationDoesNotExistError
    | AssociationExecutionDoesNotExistError
    | InternalServerError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAssociationExecutionsCommand}
   */
  describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAssociationExecutionsCommandOutput,
    Cause.TimeoutError | SdkError | AssociationDoesNotExistError | InternalServerError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAutomationExecutionsCommand}
   */
  describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAutomationExecutionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidFilterKeyError
    | InvalidFilterValueError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAutomationStepExecutionsCommand}
   */
  describeAutomationStepExecutions(
    args: DescribeAutomationStepExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAutomationStepExecutionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AutomationExecutionNotFoundError
    | InternalServerError
    | InvalidFilterKeyError
    | InvalidFilterValueError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAvailablePatchesCommand}
   */
  describeAvailablePatches(
    args: DescribeAvailablePatchesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAvailablePatchesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeDocumentCommand}
   */
  describeDocument(
    args: DescribeDocumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDocumentCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidDocumentError | InvalidDocumentVersionError
  >;

  /**
   * @see {@link DescribeDocumentPermissionCommand}
   */
  describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDocumentPermissionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentOperationError
    | InvalidNextTokenError
    | InvalidPermissionTypeError
  >;

  /**
   * @see {@link DescribeEffectiveInstanceAssociationsCommand}
   */
  describeEffectiveInstanceAssociations(
    args: DescribeEffectiveInstanceAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEffectiveInstanceAssociationsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidInstanceIdError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeEffectivePatchesForPatchBaselineCommand}
   */
  describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEffectivePatchesForPatchBaselineCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DoesNotExistError
    | InternalServerError
    | InvalidResourceIdError
    | UnsupportedOperatingSystemError
  >;

  /**
   * @see {@link DescribeInstanceAssociationsStatusCommand}
   */
  describeInstanceAssociationsStatus(
    args: DescribeInstanceAssociationsStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceAssociationsStatusCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidInstanceIdError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstanceInformationCommand}
   */
  describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceInformationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidFilterKeyError
    | InvalidInstanceIdError
    | InvalidInstanceInformationFilterValueError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstancePatchStatesCommand}
   */
  describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancePatchStatesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstancePatchStatesForPatchGroupCommand}
   */
  describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancePatchStatesForPatchGroupCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidFilterError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstancePatchesCommand}
   */
  describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancePatchesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidFilterError
    | InvalidInstanceIdError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstancePropertiesCommand}
   */
  describeInstanceProperties(
    args: DescribeInstancePropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancePropertiesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidActivationIdError
    | InvalidDocumentError
    | InvalidFilterKeyError
    | InvalidInstanceIdError
    | InvalidInstancePropertyFilterValueError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInventoryDeletionsCommand}
   */
  describeInventoryDeletions(
    args: DescribeInventoryDeletionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInventoryDeletionsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidDeletionIdError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommand}
   */
  describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionTasksCommand}
   */
  describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionTasksCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionsCommand}
   */
  describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowScheduleCommand}
   */
  describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowScheduleCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowTargetsCommand}
   */
  describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowTargetsCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowTasksCommand}
   */
  describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowTasksCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowsCommand}
   */
  describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowsForTargetCommand}
   */
  describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowsForTargetCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeOpsItemsCommand}
   */
  describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOpsItemsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeParametersCommand}
   */
  describeParameters(
    args: DescribeParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeParametersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidFilterKeyError
    | InvalidFilterOptionError
    | InvalidFilterValueError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribePatchBaselinesCommand}
   */
  describePatchBaselines(
    args: DescribePatchBaselinesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePatchBaselinesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribePatchGroupStateCommand}
   */
  describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePatchGroupStateCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribePatchGroupsCommand}
   */
  describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePatchGroupsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribePatchPropertiesCommand}
   */
  describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePatchPropertiesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeSessionsCommand}
   */
  describeSessions(
    args: DescribeSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSessionsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidFilterKeyError | InvalidNextTokenError
  >;

  /**
   * @see {@link DisassociateOpsItemRelatedItemCommand}
   */
  disassociateOpsItemRelatedItem(
    args: DisassociateOpsItemRelatedItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateOpsItemRelatedItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | OpsItemConflictError
    | OpsItemInvalidParameterError
    | OpsItemNotFoundError
    | OpsItemRelatedItemAssociationNotFoundError
  >;

  /**
   * @see {@link GetAccessTokenCommand}
   */
  getAccessToken(
    args: GetAccessTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccessTokenCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAutomationExecutionCommand}
   */
  getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAutomationExecutionCommandOutput,
    Cause.TimeoutError | SdkError | AutomationExecutionNotFoundError | InternalServerError
  >;

  /**
   * @see {@link GetCalendarStateCommand}
   */
  getCalendarState(
    args: GetCalendarStateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCalendarStateCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentTypeError
    | UnsupportedCalendarError
  >;

  /**
   * @see {@link GetCommandInvocationCommand}
   */
  getCommandInvocation(
    args: GetCommandInvocationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCommandInvocationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidCommandIdError
    | InvalidInstanceIdError
    | InvalidPluginNameError
    | InvocationDoesNotExistError
  >;

  /**
   * @see {@link GetConnectionStatusCommand}
   */
  getConnectionStatus(
    args: GetConnectionStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionStatusCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link GetDefaultPatchBaselineCommand}
   */
  getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDefaultPatchBaselineCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link GetDeployablePatchSnapshotForInstanceCommand}
   */
  getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeployablePatchSnapshotForInstanceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | UnsupportedFeatureRequiredError
    | UnsupportedOperatingSystemError
  >;

  /**
   * @see {@link GetDocumentCommand}
   */
  getDocument(
    args: GetDocumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDocumentCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidDocumentError | InvalidDocumentVersionError
  >;

  /**
   * @see {@link GetExecutionPreviewCommand}
   */
  getExecutionPreview(
    args: GetExecutionPreviewCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetExecutionPreviewCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetInventoryCommand}
   */
  getInventory(
    args: GetInventoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInventoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidAggregatorError
    | InvalidFilterError
    | InvalidInventoryGroupError
    | InvalidNextTokenError
    | InvalidResultAttributeError
    | InvalidTypeNameError
  >;

  /**
   * @see {@link GetInventorySchemaCommand}
   */
  getInventorySchema(
    args: GetInventorySchemaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInventorySchemaCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidNextTokenError | InvalidTypeNameError
  >;

  /**
   * @see {@link GetMaintenanceWindowCommand}
   */
  getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetMaintenanceWindowExecutionCommand}
   */
  getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetMaintenanceWindowExecutionTaskCommand}
   */
  getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionTaskCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommand}
   */
  getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetMaintenanceWindowTaskCommand}
   */
  getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowTaskCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetOpsItemCommand}
   */
  getOpsItem(
    args: GetOpsItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOpsItemCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | OpsItemAccessDeniedError | OpsItemNotFoundError
  >;

  /**
   * @see {@link GetOpsMetadataCommand}
   */
  getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOpsMetadataCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | OpsMetadataInvalidArgumentError | OpsMetadataNotFoundError
  >;

  /**
   * @see {@link GetOpsSummaryCommand}
   */
  getOpsSummary(
    args: GetOpsSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOpsSummaryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidAggregatorError
    | InvalidFilterError
    | InvalidNextTokenError
    | InvalidTypeNameError
    | ResourceDataSyncNotFoundError
  >;

  /**
   * @see {@link GetParameterCommand}
   */
  getParameter(
    args: GetParameterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetParameterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidKeyIdError
    | ParameterNotFoundError
    | ParameterVersionNotFoundError
  >;

  /**
   * @see {@link GetParameterHistoryCommand}
   */
  getParameterHistory(
    args: GetParameterHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetParameterHistoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidKeyIdError
    | InvalidNextTokenError
    | ParameterNotFoundError
  >;

  /**
   * @see {@link GetParametersCommand}
   */
  getParameters(
    args: GetParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetParametersCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidKeyIdError
  >;

  /**
   * @see {@link GetParametersByPathCommand}
   */
  getParametersByPath(
    args: GetParametersByPathCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetParametersByPathCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidFilterKeyError
    | InvalidFilterOptionError
    | InvalidFilterValueError
    | InvalidKeyIdError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link GetPatchBaselineCommand}
   */
  getPatchBaseline(
    args: GetPatchBaselineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPatchBaselineCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError | InvalidResourceIdError
  >;

  /**
   * @see {@link GetPatchBaselineForPatchGroupCommand}
   */
  getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPatchBaselineForPatchGroupCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePoliciesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ResourceNotFoundError | ResourcePolicyInvalidParameterError
  >;

  /**
   * @see {@link GetServiceSettingCommand}
   */
  getServiceSetting(
    args: GetServiceSettingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetServiceSettingCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ServiceSettingNotFoundError
  >;

  /**
   * @see {@link LabelParameterVersionCommand}
   */
  labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    LabelParameterVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | ParameterNotFoundError
    | ParameterVersionLabelLimitExceededError
    | ParameterVersionNotFoundError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link ListAssociationVersionsCommand}
   */
  listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAssociationVersionsCommandOutput,
    Cause.TimeoutError | SdkError | AssociationDoesNotExistError | InternalServerError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListAssociationsCommand}
   */
  listAssociations(
    args: ListAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAssociationsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListCommandInvocationsCommand}
   */
  listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCommandInvocationsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidCommandIdError
    | InvalidFilterKeyError
    | InvalidInstanceIdError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListCommandsCommand}
   */
  listCommands(
    args: ListCommandsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCommandsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidCommandIdError
    | InvalidFilterKeyError
    | InvalidInstanceIdError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListComplianceItemsCommand}
   */
  listComplianceItems(
    args: ListComplianceItemsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListComplianceItemsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidFilterError
    | InvalidNextTokenError
    | InvalidResourceIdError
    | InvalidResourceTypeError
  >;

  /**
   * @see {@link ListComplianceSummariesCommand}
   */
  listComplianceSummaries(
    args: ListComplianceSummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListComplianceSummariesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidFilterError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDocumentMetadataHistoryCommand}
   */
  listDocumentMetadataHistory(
    args: ListDocumentMetadataHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDocumentMetadataHistoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentVersionError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDocumentVersionsCommand}
   */
  listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDocumentVersionsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidDocumentError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDocumentsCommand}
   */
  listDocuments(
    args: ListDocumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDocumentsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidFilterKeyError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListInventoryEntriesCommand}
   */
  listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInventoryEntriesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidFilterError
    | InvalidInstanceIdError
    | InvalidNextTokenError
    | InvalidTypeNameError
  >;

  /**
   * @see {@link ListNodesCommand}
   */
  listNodes(
    args: ListNodesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListNodesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidFilterError
    | InvalidNextTokenError
    | ResourceDataSyncNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListNodesSummaryCommand}
   */
  listNodesSummary(
    args: ListNodesSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListNodesSummaryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidAggregatorError
    | InvalidFilterError
    | InvalidNextTokenError
    | ResourceDataSyncNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListOpsItemEventsCommand}
   */
  listOpsItemEvents(
    args: ListOpsItemEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOpsItemEventsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | OpsItemInvalidParameterError
    | OpsItemLimitExceededError
    | OpsItemNotFoundError
  >;

  /**
   * @see {@link ListOpsItemRelatedItemsCommand}
   */
  listOpsItemRelatedItems(
    args: ListOpsItemRelatedItemsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOpsItemRelatedItemsCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | OpsItemInvalidParameterError
  >;

  /**
   * @see {@link ListOpsMetadataCommand}
   */
  listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOpsMetadataCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | OpsMetadataInvalidArgumentError
  >;

  /**
   * @see {@link ListResourceComplianceSummariesCommand}
   */
  listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceComplianceSummariesCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidFilterError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListResourceDataSyncCommand}
   */
  listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceDataSyncCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidNextTokenError
    | ResourceDataSyncInvalidConfigurationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidResourceIdError | InvalidResourceTypeError
  >;

  /**
   * @see {@link ModifyDocumentPermissionCommand}
   */
  modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDocumentPermissionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DocumentLimitExceededError
    | DocumentPermissionLimitError
    | InternalServerError
    | InvalidDocumentError
    | InvalidPermissionTypeError
  >;

  /**
   * @see {@link PutComplianceItemsCommand}
   */
  putComplianceItems(
    args: PutComplianceItemsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutComplianceItemsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ComplianceTypeCountLimitExceededError
    | InternalServerError
    | InvalidItemContentError
    | InvalidResourceIdError
    | InvalidResourceTypeError
    | ItemSizeLimitExceededError
    | TotalSizeLimitExceededError
  >;

  /**
   * @see {@link PutInventoryCommand}
   */
  putInventory(
    args: PutInventoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutInventoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CustomSchemaCountLimitExceededError
    | InternalServerError
    | InvalidInstanceIdError
    | InvalidInventoryItemContextError
    | InvalidItemContentError
    | InvalidTypeNameError
    | ItemContentMismatchError
    | ItemSizeLimitExceededError
    | SubTypeCountLimitExceededError
    | TotalSizeLimitExceededError
    | UnsupportedInventoryItemContextError
    | UnsupportedInventorySchemaVersionError
  >;

  /**
   * @see {@link PutParameterCommand}
   */
  putParameter(
    args: PutParameterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutParameterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | HierarchyLevelLimitExceededError
    | HierarchyTypeMismatchError
    | IncompatiblePolicyError
    | InternalServerError
    | InvalidAllowedPatternError
    | InvalidKeyIdError
    | InvalidPolicyAttributeError
    | InvalidPolicyTypeError
    | ParameterAlreadyExistsError
    | ParameterLimitExceededError
    | ParameterMaxVersionLimitExceededError
    | ParameterPatternMismatchError
    | PoliciesLimitExceededError
    | TooManyUpdatesError
    | UnsupportedParameterTypeError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | MalformedResourcePolicyDocumentError
    | ResourceNotFoundError
    | ResourcePolicyConflictError
    | ResourcePolicyInvalidParameterError
    | ResourcePolicyLimitExceededError
    | ResourcePolicyNotFoundError
  >;

  /**
   * @see {@link RegisterDefaultPatchBaselineCommand}
   */
  registerDefaultPatchBaseline(
    args: RegisterDefaultPatchBaselineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterDefaultPatchBaselineCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError | InvalidResourceIdError
  >;

  /**
   * @see {@link RegisterPatchBaselineForPatchGroupCommand}
   */
  registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterPatchBaselineForPatchGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AlreadyExistsError
    | DoesNotExistError
    | InternalServerError
    | InvalidResourceIdError
    | ResourceLimitExceededError
  >;

  /**
   * @see {@link RegisterTargetWithMaintenanceWindowCommand}
   */
  registerTargetWithMaintenanceWindow(
    args: RegisterTargetWithMaintenanceWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTargetWithMaintenanceWindowCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DoesNotExistError
    | IdempotentParameterMismatchError
    | InternalServerError
    | ResourceLimitExceededError
  >;

  /**
   * @see {@link RegisterTaskWithMaintenanceWindowCommand}
   */
  registerTaskWithMaintenanceWindow(
    args: RegisterTaskWithMaintenanceWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTaskWithMaintenanceWindowCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DoesNotExistError
    | FeatureNotAvailableError
    | IdempotentParameterMismatchError
    | InternalServerError
    | ResourceLimitExceededError
  >;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsFromResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidResourceIdError
    | InvalidResourceTypeError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link ResetServiceSettingCommand}
   */
  resetServiceSetting(
    args: ResetServiceSettingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetServiceSettingCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ServiceSettingNotFoundError | TooManyUpdatesError
  >;

  /**
   * @see {@link ResumeSessionCommand}
   */
  resumeSession(
    args: ResumeSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResumeSessionCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link SendAutomationSignalCommand}
   */
  sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendAutomationSignalCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AutomationExecutionNotFoundError
    | AutomationStepNotFoundError
    | InternalServerError
    | InvalidAutomationSignalError
  >;

  /**
   * @see {@link SendCommandCommand}
   */
  sendCommand(
    args: SendCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendCommandCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DuplicateInstanceIdError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentVersionError
    | InvalidInstanceIdError
    | InvalidNotificationConfigError
    | InvalidOutputFolderError
    | InvalidParametersError
    | InvalidRoleError
    | MaxDocumentSizeExceededError
    | UnsupportedPlatformTypeError
  >;

  /**
   * @see {@link StartAccessRequestCommand}
   */
  startAccessRequest(
    args: StartAccessRequestCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartAccessRequestCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StartAssociationsOnceCommand}
   */
  startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartAssociationsOnceCommandOutput,
    Cause.TimeoutError | SdkError | AssociationDoesNotExistError | InvalidAssociationError
  >;

  /**
   * @see {@link StartAutomationExecutionCommand}
   */
  startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartAutomationExecutionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AutomationDefinitionNotFoundError
    | AutomationDefinitionVersionNotFoundError
    | AutomationExecutionLimitExceededError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidAutomationExecutionParametersError
    | InvalidTargetError
  >;

  /**
   * @see {@link StartChangeRequestExecutionCommand}
   */
  startChangeRequestExecution(
    args: StartChangeRequestExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartChangeRequestExecutionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AutomationDefinitionNotApprovedError
    | AutomationDefinitionNotFoundError
    | AutomationDefinitionVersionNotFoundError
    | AutomationExecutionLimitExceededError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidAutomationExecutionParametersError
    | NoLongerSupportedError
  >;

  /**
   * @see {@link StartExecutionPreviewCommand}
   */
  startExecutionPreview(
    args: StartExecutionPreviewCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartExecutionPreviewCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ValidationError
  >;

  /**
   * @see {@link StartSessionCommand}
   */
  startSession(
    args: StartSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartSessionCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidDocumentError | TargetNotConnectedError
  >;

  /**
   * @see {@link StopAutomationExecutionCommand}
   */
  stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopAutomationExecutionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AutomationExecutionNotFoundError
    | InternalServerError
    | InvalidAutomationStatusUpdateError
  >;

  /**
   * @see {@link TerminateSessionCommand}
   */
  terminateSession(
    args: TerminateSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TerminateSessionCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError
  >;

  /**
   * @see {@link UnlabelParameterVersionCommand}
   */
  unlabelParameterVersion(
    args: UnlabelParameterVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UnlabelParameterVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | ParameterNotFoundError
    | ParameterVersionNotFoundError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link UpdateAssociationCommand}
   */
  updateAssociation(
    args: UpdateAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAssociationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AssociationDoesNotExistError
    | AssociationVersionLimitExceededError
    | InternalServerError
    | InvalidAssociationVersionError
    | InvalidDocumentError
    | InvalidDocumentVersionError
    | InvalidOutputLocationError
    | InvalidParametersError
    | InvalidScheduleError
    | InvalidTargetError
    | InvalidTargetMapsError
    | InvalidUpdateError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link UpdateAssociationStatusCommand}
   */
  updateAssociationStatus(
    args: UpdateAssociationStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAssociationStatusCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AssociationDoesNotExistError
    | InternalServerError
    | InvalidDocumentError
    | InvalidInstanceIdError
    | StatusUnchangedError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link UpdateDocumentCommand}
   */
  updateDocument(
    args: UpdateDocumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDocumentCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DocumentVersionLimitExceededError
    | DuplicateDocumentContentError
    | DuplicateDocumentVersionNameError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentContentError
    | InvalidDocumentOperationError
    | InvalidDocumentSchemaVersionError
    | InvalidDocumentVersionError
    | MaxDocumentSizeExceededError
  >;

  /**
   * @see {@link UpdateDocumentDefaultVersionCommand}
   */
  updateDocumentDefaultVersion(
    args: UpdateDocumentDefaultVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDocumentDefaultVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentSchemaVersionError
    | InvalidDocumentVersionError
  >;

  /**
   * @see {@link UpdateDocumentMetadataCommand}
   */
  updateDocumentMetadata(
    args: UpdateDocumentMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDocumentMetadataCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentOperationError
    | InvalidDocumentVersionError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link UpdateMaintenanceWindowCommand}
   */
  updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMaintenanceWindowCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link UpdateMaintenanceWindowTargetCommand}
   */
  updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMaintenanceWindowTargetCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link UpdateMaintenanceWindowTaskCommand}
   */
  updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMaintenanceWindowTaskCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link UpdateManagedInstanceRoleCommand}
   */
  updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateManagedInstanceRoleCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | InvalidInstanceIdError
  >;

  /**
   * @see {@link UpdateOpsItemCommand}
   */
  updateOpsItem(
    args: UpdateOpsItemCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOpsItemCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | OpsItemAccessDeniedError
    | OpsItemAlreadyExistsError
    | OpsItemConflictError
    | OpsItemInvalidParameterError
    | OpsItemLimitExceededError
    | OpsItemNotFoundError
  >;

  /**
   * @see {@link UpdateOpsMetadataCommand}
   */
  updateOpsMetadata(
    args: UpdateOpsMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOpsMetadataCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | OpsMetadataInvalidArgumentError
    | OpsMetadataKeyLimitExceededError
    | OpsMetadataNotFoundError
    | OpsMetadataTooManyUpdatesError
  >;

  /**
   * @see {@link UpdatePatchBaselineCommand}
   */
  updatePatchBaseline(
    args: UpdatePatchBaselineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePatchBaselineCommandOutput,
    Cause.TimeoutError | SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link UpdateResourceDataSyncCommand}
   */
  updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateResourceDataSyncCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InternalServerError
    | ResourceDataSyncConflictError
    | ResourceDataSyncInvalidConfigurationError
    | ResourceDataSyncNotFoundError
  >;

  /**
   * @see {@link UpdateServiceSettingCommand}
   */
  updateServiceSetting(
    args: UpdateServiceSettingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServiceSettingCommandOutput,
    Cause.TimeoutError | SdkError | InternalServerError | ServiceSettingNotFoundError | TooManyUpdatesError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSSMService = Effect.gen(function*() {
  const client = yield* Instance.SSMClientInstance;

  return yield* Service.fromClientAndCommands<SSMService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: SSMServiceConfig.toSSMClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class SSMService extends ServiceMap.Service<
  SSMService,
  SSMService$
>()("@effect-aws/client-ssm/SSMService") {
  static readonly defaultLayer = Layer.effect(this, makeSSMService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: SSMService.Config) =>
    Layer.effect(this, makeSSMService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(SSMServiceConfig.setSSMServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SSMClientConfig) => SSMClient,
  ) =>
    Layer.effect(this, makeSSMService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.SSMClientInstance,
          Effect.map(SSMServiceConfig.toSSMClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace SSMService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<SSMClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = SSMService$;
}
