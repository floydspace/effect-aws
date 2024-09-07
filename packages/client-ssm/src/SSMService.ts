/**
 * @since 1.0.0
 */
import {
  SSMServiceException,
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
  CreateAssociationCommand,
  type CreateAssociationCommandInput,
  type CreateAssociationCommandOutput,
  CreateAssociationBatchCommand,
  type CreateAssociationBatchCommandInput,
  type CreateAssociationBatchCommandOutput,
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
  DescribeMaintenanceWindowsCommand,
  type DescribeMaintenanceWindowsCommandInput,
  type DescribeMaintenanceWindowsCommandOutput,
  DescribeMaintenanceWindowScheduleCommand,
  type DescribeMaintenanceWindowScheduleCommandInput,
  type DescribeMaintenanceWindowScheduleCommandOutput,
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
  GetParametersCommand,
  type GetParametersCommandInput,
  type GetParametersCommandOutput,
  GetParametersByPathCommand,
  type GetParametersByPathCommandInput,
  type GetParametersByPathCommandOutput,
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
  StartAssociationsOnceCommand,
  type StartAssociationsOnceCommandInput,
  type StartAssociationsOnceCommandOutput,
  StartAutomationExecutionCommand,
  type StartAutomationExecutionCommandInput,
  type StartAutomationExecutionCommandOutput,
  StartChangeRequestExecutionCommand,
  type StartChangeRequestExecutionCommandInput,
  type StartChangeRequestExecutionCommandOutput,
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
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
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
  InvalidDocumentError,
  InvalidDocumentContentError,
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
  ServiceSettingNotFoundError,
  StatusUnchangedError,
  SubTypeCountLimitExceededError,
  TargetInUseError,
  TargetNotConnectedError,
  TooManyTagsError,
  TooManyUpdatesError,
  TotalSizeLimitExceededError,
  UnsupportedCalendarError,
  UnsupportedFeatureRequiredError,
  UnsupportedInventoryItemContextError,
  UnsupportedInventorySchemaVersionError,
  UnsupportedOperatingSystemError,
  UnsupportedParameterTypeError,
  UnsupportedPlatformTypeError,
  SdkError,
  TaggedException,
} from "./Errors";
import { SSMClientInstance, SSMClientInstanceLayer } from "./SSMClientInstance";
import { DefaultSSMClientConfigLayer } from "./SSMClientInstanceConfig";

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
  DescribeAssociationExecutionsCommand,
  DescribeAssociationExecutionTargetsCommand,
  DescribeAutomationExecutionsCommand,
  DescribeAutomationStepExecutionsCommand,
  DescribeAvailablePatchesCommand,
  DescribeDocumentCommand,
  DescribeDocumentPermissionCommand,
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeInstanceAssociationsStatusCommand,
  DescribeInstanceInformationCommand,
  DescribeInstancePatchesCommand,
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInstancePropertiesCommand,
  DescribeInventoryDeletionsCommand,
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTasksCommand,
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeMaintenanceWindowTargetsCommand,
  DescribeMaintenanceWindowTasksCommand,
  DescribeOpsItemsCommand,
  DescribeParametersCommand,
  DescribePatchBaselinesCommand,
  DescribePatchGroupsCommand,
  DescribePatchGroupStateCommand,
  DescribePatchPropertiesCommand,
  DescribeSessionsCommand,
  DisassociateOpsItemRelatedItemCommand,
  GetAutomationExecutionCommand,
  GetCalendarStateCommand,
  GetCommandInvocationCommand,
  GetConnectionStatusCommand,
  GetDefaultPatchBaselineCommand,
  GetDeployablePatchSnapshotForInstanceCommand,
  GetDocumentCommand,
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
  ListAssociationsCommand,
  ListAssociationVersionsCommand,
  ListCommandInvocationsCommand,
  ListCommandsCommand,
  ListComplianceItemsCommand,
  ListComplianceSummariesCommand,
  ListDocumentMetadataHistoryCommand,
  ListDocumentsCommand,
  ListDocumentVersionsCommand,
  ListInventoryEntriesCommand,
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
  StartAssociationsOnceCommand,
  StartAutomationExecutionCommand,
  StartChangeRequestExecutionCommand,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsToResourceCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AssociateOpsItemRelatedItemCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelCommandCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelMaintenanceWindowExecutionCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link CreateActivationCommand}
   */
  createActivation(
    args: CreateActivationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateActivationCommandOutput,
    SdkError | InternalServerError | InvalidParametersError
  >;

  /**
   * @see {@link CreateAssociationCommand}
   */
  createAssociation(
    args: CreateAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateAssociationCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateAssociationBatchCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDocumentCommandOutput,
    | SdkError
    | DocumentAlreadyExistsError
    | DocumentLimitExceededError
    | InternalServerError
    | InvalidDocumentContentError
    | InvalidDocumentSchemaVersionError
    | MaxDocumentSizeExceededError
  >;

  /**
   * @see {@link CreateMaintenanceWindowCommand}
   */
  createMaintenanceWindow(
    args: CreateMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateMaintenanceWindowCommandOutput,
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | ResourceLimitExceededError
  >;

  /**
   * @see {@link CreateOpsItemCommand}
   */
  createOpsItem(
    args: CreateOpsItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateOpsItemCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateOpsMetadataCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePatchBaselineCommandOutput,
    | SdkError
    | IdempotentParameterMismatchError
    | InternalServerError
    | ResourceLimitExceededError
  >;

  /**
   * @see {@link CreateResourceDataSyncCommand}
   */
  createResourceDataSync(
    args: CreateResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateResourceDataSyncCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteActivationCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAssociationCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDocumentCommandOutput,
    | SdkError
    | AssociatedInstancesError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentOperationError
  >;

  /**
   * @see {@link DeleteInventoryCommand}
   */
  deleteInventory(
    args: DeleteInventoryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInventoryCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMaintenanceWindowCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DeleteOpsItemCommand}
   */
  deleteOpsItem(
    args: DeleteOpsItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOpsItemCommandOutput,
    SdkError | InternalServerError | OpsItemInvalidParameterError
  >;

  /**
   * @see {@link DeleteOpsMetadataCommand}
   */
  deleteOpsMetadata(
    args: DeleteOpsMetadataCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOpsMetadataCommandOutput,
    | SdkError
    | InternalServerError
    | OpsMetadataInvalidArgumentError
    | OpsMetadataNotFoundError
  >;

  /**
   * @see {@link DeleteParameterCommand}
   */
  deleteParameter(
    args: DeleteParameterCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteParameterCommandOutput,
    SdkError | InternalServerError | ParameterNotFoundError
  >;

  /**
   * @see {@link DeleteParametersCommand}
   */
  deleteParameters(
    args: DeleteParametersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteParametersCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DeletePatchBaselineCommand}
   */
  deletePatchBaseline(
    args: DeletePatchBaselineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeletePatchBaselineCommandOutput,
    SdkError | InternalServerError | ResourceInUseError
  >;

  /**
   * @see {@link DeleteResourceDataSyncCommand}
   */
  deleteResourceDataSync(
    args: DeleteResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourceDataSyncCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterManagedInstanceCommandOutput,
    SdkError | InternalServerError | InvalidInstanceIdError
  >;

  /**
   * @see {@link DeregisterPatchBaselineForPatchGroupCommand}
   */
  deregisterPatchBaselineForPatchGroup(
    args: DeregisterPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterPatchBaselineForPatchGroupCommandOutput,
    SdkError | InternalServerError | InvalidResourceIdError
  >;

  /**
   * @see {@link DeregisterTargetFromMaintenanceWindowCommand}
   */
  deregisterTargetFromMaintenanceWindow(
    args: DeregisterTargetFromMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTargetFromMaintenanceWindowCommandOutput,
    SdkError | DoesNotExistError | InternalServerError | TargetInUseError
  >;

  /**
   * @see {@link DeregisterTaskFromMaintenanceWindowCommand}
   */
  deregisterTaskFromMaintenanceWindow(
    args: DeregisterTaskFromMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTaskFromMaintenanceWindowCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeActivationsCommand}
   */
  describeActivations(
    args: DescribeActivationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeActivationsCommandOutput,
    SdkError | InternalServerError | InvalidFilterError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAssociationCommand}
   */
  describeAssociation(
    args: DescribeAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAssociationCommandOutput,
    | SdkError
    | AssociationDoesNotExistError
    | InternalServerError
    | InvalidAssociationVersionError
    | InvalidDocumentError
    | InvalidInstanceIdError
  >;

  /**
   * @see {@link DescribeAssociationExecutionsCommand}
   */
  describeAssociationExecutions(
    args: DescribeAssociationExecutionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAssociationExecutionsCommandOutput,
    | SdkError
    | AssociationDoesNotExistError
    | InternalServerError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAssociationExecutionTargetsCommand}
   */
  describeAssociationExecutionTargets(
    args: DescribeAssociationExecutionTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAssociationExecutionTargetsCommandOutput,
    | SdkError
    | AssociationDoesNotExistError
    | AssociationExecutionDoesNotExistError
    | InternalServerError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeAutomationExecutionsCommand}
   */
  describeAutomationExecutions(
    args: DescribeAutomationExecutionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAutomationExecutionsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAutomationStepExecutionsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAvailablePatchesCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeDocumentCommand}
   */
  describeDocument(
    args: DescribeDocumentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDocumentCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentVersionError
  >;

  /**
   * @see {@link DescribeDocumentPermissionCommand}
   */
  describeDocumentPermission(
    args: DescribeDocumentPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDocumentPermissionCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEffectiveInstanceAssociationsCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidInstanceIdError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeEffectivePatchesForPatchBaselineCommand}
   */
  describeEffectivePatchesForPatchBaseline(
    args: DescribeEffectivePatchesForPatchBaselineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEffectivePatchesForPatchBaselineCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceAssociationsStatusCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidInstanceIdError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstanceInformationCommand}
   */
  describeInstanceInformation(
    args: DescribeInstanceInformationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceInformationCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidFilterKeyError
    | InvalidInstanceIdError
    | InvalidInstanceInformationFilterValueError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstancePatchesCommand}
   */
  describeInstancePatches(
    args: DescribeInstancePatchesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancePatchesCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidFilterError
    | InvalidInstanceIdError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstancePatchStatesCommand}
   */
  describeInstancePatchStates(
    args: DescribeInstancePatchStatesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancePatchStatesCommandOutput,
    SdkError | InternalServerError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstancePatchStatesForPatchGroupCommand}
   */
  describeInstancePatchStatesForPatchGroup(
    args: DescribeInstancePatchStatesForPatchGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancePatchStatesForPatchGroupCommandOutput,
    SdkError | InternalServerError | InvalidFilterError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeInstancePropertiesCommand}
   */
  describeInstanceProperties(
    args: DescribeInstancePropertiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancePropertiesCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInventoryDeletionsCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidDeletionIdError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionsCommand}
   */
  describeMaintenanceWindowExecutions(
    args: DescribeMaintenanceWindowExecutionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionsCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionTaskInvocationsCommand}
   */
  describeMaintenanceWindowExecutionTaskInvocations(
    args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowExecutionTasksCommand}
   */
  describeMaintenanceWindowExecutionTasks(
    args: DescribeMaintenanceWindowExecutionTasksCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionTasksCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowsCommand}
   */
  describeMaintenanceWindows(
    args: DescribeMaintenanceWindowsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowsCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowScheduleCommand}
   */
  describeMaintenanceWindowSchedule(
    args: DescribeMaintenanceWindowScheduleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowScheduleCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowsForTargetCommand}
   */
  describeMaintenanceWindowsForTarget(
    args: DescribeMaintenanceWindowsForTargetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowsForTargetCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowTargetsCommand}
   */
  describeMaintenanceWindowTargets(
    args: DescribeMaintenanceWindowTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowTargetsCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeMaintenanceWindowTasksCommand}
   */
  describeMaintenanceWindowTasks(
    args: DescribeMaintenanceWindowTasksCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMaintenanceWindowTasksCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link DescribeOpsItemsCommand}
   */
  describeOpsItems(
    args: DescribeOpsItemsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOpsItemsCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeParametersCommand}
   */
  describeParameters(
    args: DescribeParametersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeParametersCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribePatchBaselinesCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribePatchGroupsCommand}
   */
  describePatchGroups(
    args: DescribePatchGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribePatchGroupsCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribePatchGroupStateCommand}
   */
  describePatchGroupState(
    args: DescribePatchGroupStateCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribePatchGroupStateCommandOutput,
    SdkError | InternalServerError | InvalidNextTokenError
  >;

  /**
   * @see {@link DescribePatchPropertiesCommand}
   */
  describePatchProperties(
    args: DescribePatchPropertiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribePatchPropertiesCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link DescribeSessionsCommand}
   */
  describeSessions(
    args: DescribeSessionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSessionsCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidFilterKeyError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link DisassociateOpsItemRelatedItemCommand}
   */
  disassociateOpsItemRelatedItem(
    args: DisassociateOpsItemRelatedItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateOpsItemRelatedItemCommandOutput,
    | SdkError
    | InternalServerError
    | OpsItemConflictError
    | OpsItemInvalidParameterError
    | OpsItemNotFoundError
    | OpsItemRelatedItemAssociationNotFoundError
  >;

  /**
   * @see {@link GetAutomationExecutionCommand}
   */
  getAutomationExecution(
    args: GetAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetAutomationExecutionCommandOutput,
    SdkError | AutomationExecutionNotFoundError | InternalServerError
  >;

  /**
   * @see {@link GetCalendarStateCommand}
   */
  getCalendarState(
    args: GetCalendarStateCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetCalendarStateCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetCommandInvocationCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionStatusCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link GetDefaultPatchBaselineCommand}
   */
  getDefaultPatchBaseline(
    args: GetDefaultPatchBaselineCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDefaultPatchBaselineCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link GetDeployablePatchSnapshotForInstanceCommand}
   */
  getDeployablePatchSnapshotForInstance(
    args: GetDeployablePatchSnapshotForInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeployablePatchSnapshotForInstanceCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDocumentCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentVersionError
  >;

  /**
   * @see {@link GetInventoryCommand}
   */
  getInventory(
    args: GetInventoryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetInventoryCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetInventorySchemaCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidNextTokenError
    | InvalidTypeNameError
  >;

  /**
   * @see {@link GetMaintenanceWindowCommand}
   */
  getMaintenanceWindow(
    args: GetMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetMaintenanceWindowExecutionCommand}
   */
  getMaintenanceWindowExecution(
    args: GetMaintenanceWindowExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetMaintenanceWindowExecutionTaskCommand}
   */
  getMaintenanceWindowExecutionTask(
    args: GetMaintenanceWindowExecutionTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionTaskCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetMaintenanceWindowExecutionTaskInvocationCommand}
   */
  getMaintenanceWindowExecutionTaskInvocation(
    args: GetMaintenanceWindowExecutionTaskInvocationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetMaintenanceWindowTaskCommand}
   */
  getMaintenanceWindowTask(
    args: GetMaintenanceWindowTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetMaintenanceWindowTaskCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link GetOpsItemCommand}
   */
  getOpsItem(
    args: GetOpsItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetOpsItemCommandOutput,
    | SdkError
    | InternalServerError
    | OpsItemAccessDeniedError
    | OpsItemNotFoundError
  >;

  /**
   * @see {@link GetOpsMetadataCommand}
   */
  getOpsMetadata(
    args: GetOpsMetadataCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetOpsMetadataCommandOutput,
    | SdkError
    | InternalServerError
    | OpsMetadataInvalidArgumentError
    | OpsMetadataNotFoundError
  >;

  /**
   * @see {@link GetOpsSummaryCommand}
   */
  getOpsSummary(
    args: GetOpsSummaryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetOpsSummaryCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetParameterCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetParameterHistoryCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetParametersCommandOutput,
    SdkError | InternalServerError | InvalidKeyIdError
  >;

  /**
   * @see {@link GetParametersByPathCommand}
   */
  getParametersByPath(
    args: GetParametersByPathCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetParametersByPathCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPatchBaselineCommandOutput,
    SdkError | DoesNotExistError | InternalServerError | InvalidResourceIdError
  >;

  /**
   * @see {@link GetPatchBaselineForPatchGroupCommand}
   */
  getPatchBaselineForPatchGroup(
    args: GetPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPatchBaselineForPatchGroupCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePoliciesCommandOutput,
    | SdkError
    | InternalServerError
    | ResourceNotFoundError
    | ResourcePolicyInvalidParameterError
  >;

  /**
   * @see {@link GetServiceSettingCommand}
   */
  getServiceSetting(
    args: GetServiceSettingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetServiceSettingCommandOutput,
    SdkError | InternalServerError | ServiceSettingNotFoundError
  >;

  /**
   * @see {@link LabelParameterVersionCommand}
   */
  labelParameterVersion(
    args: LabelParameterVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    LabelParameterVersionCommandOutput,
    | SdkError
    | InternalServerError
    | ParameterNotFoundError
    | ParameterVersionLabelLimitExceededError
    | ParameterVersionNotFoundError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link ListAssociationsCommand}
   */
  listAssociations(
    args: ListAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAssociationsCommandOutput,
    SdkError | InternalServerError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListAssociationVersionsCommand}
   */
  listAssociationVersions(
    args: ListAssociationVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListAssociationVersionsCommandOutput,
    | SdkError
    | AssociationDoesNotExistError
    | InternalServerError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListCommandInvocationsCommand}
   */
  listCommandInvocations(
    args: ListCommandInvocationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListCommandInvocationsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListCommandsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListComplianceItemsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListComplianceSummariesCommandOutput,
    SdkError | InternalServerError | InvalidFilterError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDocumentMetadataHistoryCommand}
   */
  listDocumentMetadataHistory(
    args: ListDocumentMetadataHistoryCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDocumentMetadataHistoryCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentVersionError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDocumentsCommand}
   */
  listDocuments(
    args: ListDocumentsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDocumentsCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidFilterKeyError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDocumentVersionsCommand}
   */
  listDocumentVersions(
    args: ListDocumentVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDocumentVersionsCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListInventoryEntriesCommand}
   */
  listInventoryEntries(
    args: ListInventoryEntriesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListInventoryEntriesCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidFilterError
    | InvalidInstanceIdError
    | InvalidNextTokenError
    | InvalidTypeNameError
  >;

  /**
   * @see {@link ListOpsItemEventsCommand}
   */
  listOpsItemEvents(
    args: ListOpsItemEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListOpsItemEventsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListOpsItemRelatedItemsCommandOutput,
    SdkError | InternalServerError | OpsItemInvalidParameterError
  >;

  /**
   * @see {@link ListOpsMetadataCommand}
   */
  listOpsMetadata(
    args: ListOpsMetadataCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListOpsMetadataCommandOutput,
    SdkError | InternalServerError | OpsMetadataInvalidArgumentError
  >;

  /**
   * @see {@link ListResourceComplianceSummariesCommand}
   */
  listResourceComplianceSummaries(
    args: ListResourceComplianceSummariesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceComplianceSummariesCommandOutput,
    SdkError | InternalServerError | InvalidFilterError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListResourceDataSyncCommand}
   */
  listResourceDataSync(
    args: ListResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceDataSyncCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidResourceIdError
    | InvalidResourceTypeError
  >;

  /**
   * @see {@link ModifyDocumentPermissionCommand}
   */
  modifyDocumentPermission(
    args: ModifyDocumentPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDocumentPermissionCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutComplianceItemsCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutInventoryCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutParameterCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterDefaultPatchBaselineCommandOutput,
    SdkError | DoesNotExistError | InternalServerError | InvalidResourceIdError
  >;

  /**
   * @see {@link RegisterPatchBaselineForPatchGroupCommand}
   */
  registerPatchBaselineForPatchGroup(
    args: RegisterPatchBaselineForPatchGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterPatchBaselineForPatchGroupCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTargetWithMaintenanceWindowCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTaskWithMaintenanceWindowCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsFromResourceCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ResetServiceSettingCommandOutput,
    | SdkError
    | InternalServerError
    | ServiceSettingNotFoundError
    | TooManyUpdatesError
  >;

  /**
   * @see {@link ResumeSessionCommand}
   */
  resumeSession(
    args: ResumeSessionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ResumeSessionCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link SendAutomationSignalCommand}
   */
  sendAutomationSignal(
    args: SendAutomationSignalCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SendAutomationSignalCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SendCommandCommandOutput,
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
   * @see {@link StartAssociationsOnceCommand}
   */
  startAssociationsOnce(
    args: StartAssociationsOnceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartAssociationsOnceCommandOutput,
    SdkError | AssociationDoesNotExistError | InvalidAssociationError
  >;

  /**
   * @see {@link StartAutomationExecutionCommand}
   */
  startAutomationExecution(
    args: StartAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartAutomationExecutionCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartChangeRequestExecutionCommandOutput,
    | SdkError
    | AutomationDefinitionNotApprovedError
    | AutomationDefinitionNotFoundError
    | AutomationDefinitionVersionNotFoundError
    | AutomationExecutionLimitExceededError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidAutomationExecutionParametersError
  >;

  /**
   * @see {@link StartSessionCommand}
   */
  startSession(
    args: StartSessionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartSessionCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | TargetNotConnectedError
  >;

  /**
   * @see {@link StopAutomationExecutionCommand}
   */
  stopAutomationExecution(
    args: StopAutomationExecutionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopAutomationExecutionCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TerminateSessionCommandOutput,
    SdkError | InternalServerError
  >;

  /**
   * @see {@link UnlabelParameterVersionCommand}
   */
  unlabelParameterVersion(
    args: UnlabelParameterVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UnlabelParameterVersionCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAssociationCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAssociationStatusCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDocumentCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDocumentDefaultVersionCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDocumentMetadataCommandOutput,
    | SdkError
    | InternalServerError
    | InvalidDocumentError
    | InvalidDocumentOperationError
    | InvalidDocumentVersionError
  >;

  /**
   * @see {@link UpdateMaintenanceWindowCommand}
   */
  updateMaintenanceWindow(
    args: UpdateMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMaintenanceWindowCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link UpdateMaintenanceWindowTargetCommand}
   */
  updateMaintenanceWindowTarget(
    args: UpdateMaintenanceWindowTargetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMaintenanceWindowTargetCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link UpdateMaintenanceWindowTaskCommand}
   */
  updateMaintenanceWindowTask(
    args: UpdateMaintenanceWindowTaskCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMaintenanceWindowTaskCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link UpdateManagedInstanceRoleCommand}
   */
  updateManagedInstanceRole(
    args: UpdateManagedInstanceRoleCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateManagedInstanceRoleCommandOutput,
    SdkError | InternalServerError | InvalidInstanceIdError
  >;

  /**
   * @see {@link UpdateOpsItemCommand}
   */
  updateOpsItem(
    args: UpdateOpsItemCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOpsItemCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOpsMetadataCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePatchBaselineCommandOutput,
    SdkError | DoesNotExistError | InternalServerError
  >;

  /**
   * @see {@link UpdateResourceDataSyncCommand}
   */
  updateResourceDataSync(
    args: UpdateResourceDataSyncCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateResourceDataSyncCommandOutput,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServiceSettingCommandOutput,
    | SdkError
    | InternalServerError
    | ServiceSettingNotFoundError
    | TooManyUpdatesError
  >;
}

/**
 * @since 1.0.0
 * @category models
 */
export class SSMService extends Effect.Tag("@effect-aws/client-ssm/SSMService")<
  SSMService,
  SSMService$
>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSSMService = Effect.gen(function* (_) {
  const client = yield* _(SSMClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (
            e instanceof SSMServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<SSMServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
              message: e.message,
              stack: e.stack,
            });
          }
          throw e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as SSMService$;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseSSMServiceLayer = Layer.effect(SSMService, makeSSMService);

/**
 * @since 1.0.0
 * @category layers
 */
export const SSMServiceLayer = BaseSSMServiceLayer.pipe(
  Layer.provide(SSMClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSSMServiceLayer = SSMServiceLayer.pipe(
  Layer.provide(DefaultSSMClientConfigLayer),
);
