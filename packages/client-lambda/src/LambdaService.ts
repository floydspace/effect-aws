/**
 * @since 1.0.0
 */
import {
  AddLayerVersionPermissionCommand,
  type AddLayerVersionPermissionCommandInput,
  type AddLayerVersionPermissionCommandOutput,
  AddPermissionCommand,
  type AddPermissionCommandInput,
  type AddPermissionCommandOutput,
  CheckpointDurableExecutionCommand,
  type CheckpointDurableExecutionCommandInput,
  type CheckpointDurableExecutionCommandOutput,
  CreateAliasCommand,
  type CreateAliasCommandInput,
  type CreateAliasCommandOutput,
  CreateCapacityProviderCommand,
  type CreateCapacityProviderCommandInput,
  type CreateCapacityProviderCommandOutput,
  CreateCodeSigningConfigCommand,
  type CreateCodeSigningConfigCommandInput,
  type CreateCodeSigningConfigCommandOutput,
  CreateEventSourceMappingCommand,
  type CreateEventSourceMappingCommandInput,
  type CreateEventSourceMappingCommandOutput,
  CreateFunctionCommand,
  type CreateFunctionCommandInput,
  type CreateFunctionCommandOutput,
  CreateFunctionUrlConfigCommand,
  type CreateFunctionUrlConfigCommandInput,
  type CreateFunctionUrlConfigCommandOutput,
  DeleteAliasCommand,
  type DeleteAliasCommandInput,
  type DeleteAliasCommandOutput,
  DeleteCapacityProviderCommand,
  type DeleteCapacityProviderCommandInput,
  type DeleteCapacityProviderCommandOutput,
  DeleteCodeSigningConfigCommand,
  type DeleteCodeSigningConfigCommandInput,
  type DeleteCodeSigningConfigCommandOutput,
  DeleteEventSourceMappingCommand,
  type DeleteEventSourceMappingCommandInput,
  type DeleteEventSourceMappingCommandOutput,
  DeleteFunctionCodeSigningConfigCommand,
  type DeleteFunctionCodeSigningConfigCommandInput,
  type DeleteFunctionCodeSigningConfigCommandOutput,
  DeleteFunctionCommand,
  type DeleteFunctionCommandInput,
  type DeleteFunctionCommandOutput,
  DeleteFunctionConcurrencyCommand,
  type DeleteFunctionConcurrencyCommandInput,
  type DeleteFunctionConcurrencyCommandOutput,
  DeleteFunctionEventInvokeConfigCommand,
  type DeleteFunctionEventInvokeConfigCommandInput,
  type DeleteFunctionEventInvokeConfigCommandOutput,
  DeleteFunctionUrlConfigCommand,
  type DeleteFunctionUrlConfigCommandInput,
  type DeleteFunctionUrlConfigCommandOutput,
  DeleteLayerVersionCommand,
  type DeleteLayerVersionCommandInput,
  type DeleteLayerVersionCommandOutput,
  DeleteProvisionedConcurrencyConfigCommand,
  type DeleteProvisionedConcurrencyConfigCommandInput,
  type DeleteProvisionedConcurrencyConfigCommandOutput,
  GetAccountSettingsCommand,
  type GetAccountSettingsCommandInput,
  type GetAccountSettingsCommandOutput,
  GetAliasCommand,
  type GetAliasCommandInput,
  type GetAliasCommandOutput,
  GetCapacityProviderCommand,
  type GetCapacityProviderCommandInput,
  type GetCapacityProviderCommandOutput,
  GetCodeSigningConfigCommand,
  type GetCodeSigningConfigCommandInput,
  type GetCodeSigningConfigCommandOutput,
  GetDurableExecutionCommand,
  type GetDurableExecutionCommandInput,
  type GetDurableExecutionCommandOutput,
  GetDurableExecutionHistoryCommand,
  type GetDurableExecutionHistoryCommandInput,
  type GetDurableExecutionHistoryCommandOutput,
  GetDurableExecutionStateCommand,
  type GetDurableExecutionStateCommandInput,
  type GetDurableExecutionStateCommandOutput,
  GetEventSourceMappingCommand,
  type GetEventSourceMappingCommandInput,
  type GetEventSourceMappingCommandOutput,
  GetFunctionCodeSigningConfigCommand,
  type GetFunctionCodeSigningConfigCommandInput,
  type GetFunctionCodeSigningConfigCommandOutput,
  GetFunctionCommand,
  type GetFunctionCommandInput,
  type GetFunctionCommandOutput,
  GetFunctionConcurrencyCommand,
  type GetFunctionConcurrencyCommandInput,
  type GetFunctionConcurrencyCommandOutput,
  GetFunctionConfigurationCommand,
  type GetFunctionConfigurationCommandInput,
  type GetFunctionConfigurationCommandOutput,
  GetFunctionEventInvokeConfigCommand,
  type GetFunctionEventInvokeConfigCommandInput,
  type GetFunctionEventInvokeConfigCommandOutput,
  GetFunctionRecursionConfigCommand,
  type GetFunctionRecursionConfigCommandInput,
  type GetFunctionRecursionConfigCommandOutput,
  GetFunctionScalingConfigCommand,
  type GetFunctionScalingConfigCommandInput,
  type GetFunctionScalingConfigCommandOutput,
  GetFunctionUrlConfigCommand,
  type GetFunctionUrlConfigCommandInput,
  type GetFunctionUrlConfigCommandOutput,
  GetLayerVersionByArnCommand,
  type GetLayerVersionByArnCommandInput,
  type GetLayerVersionByArnCommandOutput,
  GetLayerVersionCommand,
  type GetLayerVersionCommandInput,
  type GetLayerVersionCommandOutput,
  GetLayerVersionPolicyCommand,
  type GetLayerVersionPolicyCommandInput,
  type GetLayerVersionPolicyCommandOutput,
  GetPolicyCommand,
  type GetPolicyCommandInput,
  type GetPolicyCommandOutput,
  GetProvisionedConcurrencyConfigCommand,
  type GetProvisionedConcurrencyConfigCommandInput,
  type GetProvisionedConcurrencyConfigCommandOutput,
  GetRuntimeManagementConfigCommand,
  type GetRuntimeManagementConfigCommandInput,
  type GetRuntimeManagementConfigCommandOutput,
  InvokeAsyncCommand,
  type InvokeAsyncCommandInput,
  type InvokeAsyncCommandOutput,
  InvokeCommand,
  type InvokeCommandInput,
  type InvokeCommandOutput,
  InvokeWithResponseStreamCommand,
  type InvokeWithResponseStreamCommandInput,
  type InvokeWithResponseStreamCommandOutput,
  type LambdaClient,
  type LambdaClientConfig,
  ListAliasesCommand,
  type ListAliasesCommandInput,
  type ListAliasesCommandOutput,
  ListCapacityProvidersCommand,
  type ListCapacityProvidersCommandInput,
  type ListCapacityProvidersCommandOutput,
  ListCodeSigningConfigsCommand,
  type ListCodeSigningConfigsCommandInput,
  type ListCodeSigningConfigsCommandOutput,
  ListDurableExecutionsByFunctionCommand,
  type ListDurableExecutionsByFunctionCommandInput,
  type ListDurableExecutionsByFunctionCommandOutput,
  ListEventSourceMappingsCommand,
  type ListEventSourceMappingsCommandInput,
  type ListEventSourceMappingsCommandOutput,
  ListFunctionEventInvokeConfigsCommand,
  type ListFunctionEventInvokeConfigsCommandInput,
  type ListFunctionEventInvokeConfigsCommandOutput,
  ListFunctionsByCodeSigningConfigCommand,
  type ListFunctionsByCodeSigningConfigCommandInput,
  type ListFunctionsByCodeSigningConfigCommandOutput,
  ListFunctionsCommand,
  type ListFunctionsCommandInput,
  type ListFunctionsCommandOutput,
  ListFunctionUrlConfigsCommand,
  type ListFunctionUrlConfigsCommandInput,
  type ListFunctionUrlConfigsCommandOutput,
  ListFunctionVersionsByCapacityProviderCommand,
  type ListFunctionVersionsByCapacityProviderCommandInput,
  type ListFunctionVersionsByCapacityProviderCommandOutput,
  ListLayersCommand,
  type ListLayersCommandInput,
  type ListLayersCommandOutput,
  ListLayerVersionsCommand,
  type ListLayerVersionsCommandInput,
  type ListLayerVersionsCommandOutput,
  ListProvisionedConcurrencyConfigsCommand,
  type ListProvisionedConcurrencyConfigsCommandInput,
  type ListProvisionedConcurrencyConfigsCommandOutput,
  ListTagsCommand,
  type ListTagsCommandInput,
  type ListTagsCommandOutput,
  ListVersionsByFunctionCommand,
  type ListVersionsByFunctionCommandInput,
  type ListVersionsByFunctionCommandOutput,
  PublishLayerVersionCommand,
  type PublishLayerVersionCommandInput,
  type PublishLayerVersionCommandOutput,
  PublishVersionCommand,
  type PublishVersionCommandInput,
  type PublishVersionCommandOutput,
  PutFunctionCodeSigningConfigCommand,
  type PutFunctionCodeSigningConfigCommandInput,
  type PutFunctionCodeSigningConfigCommandOutput,
  PutFunctionConcurrencyCommand,
  type PutFunctionConcurrencyCommandInput,
  type PutFunctionConcurrencyCommandOutput,
  PutFunctionEventInvokeConfigCommand,
  type PutFunctionEventInvokeConfigCommandInput,
  type PutFunctionEventInvokeConfigCommandOutput,
  PutFunctionRecursionConfigCommand,
  type PutFunctionRecursionConfigCommandInput,
  type PutFunctionRecursionConfigCommandOutput,
  PutFunctionScalingConfigCommand,
  type PutFunctionScalingConfigCommandInput,
  type PutFunctionScalingConfigCommandOutput,
  PutProvisionedConcurrencyConfigCommand,
  type PutProvisionedConcurrencyConfigCommandInput,
  type PutProvisionedConcurrencyConfigCommandOutput,
  PutRuntimeManagementConfigCommand,
  type PutRuntimeManagementConfigCommandInput,
  type PutRuntimeManagementConfigCommandOutput,
  RemoveLayerVersionPermissionCommand,
  type RemoveLayerVersionPermissionCommandInput,
  type RemoveLayerVersionPermissionCommandOutput,
  RemovePermissionCommand,
  type RemovePermissionCommandInput,
  type RemovePermissionCommandOutput,
  SendDurableExecutionCallbackFailureCommand,
  type SendDurableExecutionCallbackFailureCommandInput,
  type SendDurableExecutionCallbackFailureCommandOutput,
  SendDurableExecutionCallbackHeartbeatCommand,
  type SendDurableExecutionCallbackHeartbeatCommandInput,
  type SendDurableExecutionCallbackHeartbeatCommandOutput,
  SendDurableExecutionCallbackSuccessCommand,
  type SendDurableExecutionCallbackSuccessCommandInput,
  type SendDurableExecutionCallbackSuccessCommandOutput,
  StopDurableExecutionCommand,
  type StopDurableExecutionCommandInput,
  type StopDurableExecutionCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAliasCommand,
  type UpdateAliasCommandInput,
  type UpdateAliasCommandOutput,
  UpdateCapacityProviderCommand,
  type UpdateCapacityProviderCommandInput,
  type UpdateCapacityProviderCommandOutput,
  UpdateCodeSigningConfigCommand,
  type UpdateCodeSigningConfigCommandInput,
  type UpdateCodeSigningConfigCommandOutput,
  UpdateEventSourceMappingCommand,
  type UpdateEventSourceMappingCommandInput,
  type UpdateEventSourceMappingCommandOutput,
  UpdateFunctionCodeCommand,
  type UpdateFunctionCodeCommandInput,
  type UpdateFunctionCodeCommandOutput,
  UpdateFunctionConfigurationCommand,
  type UpdateFunctionConfigurationCommandInput,
  type UpdateFunctionConfigurationCommandOutput,
  UpdateFunctionEventInvokeConfigCommand,
  type UpdateFunctionEventInvokeConfigCommandInput,
  type UpdateFunctionEventInvokeConfigCommandOutput,
  UpdateFunctionUrlConfigCommand,
  type UpdateFunctionUrlConfigCommandInput,
  type UpdateFunctionUrlConfigCommandOutput,
} from "@aws-sdk/client-lambda";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  CallbackTimeoutError,
  CapacityProviderLimitExceededError,
  CodeSigningConfigNotFoundError,
  CodeStorageExceededError,
  CodeVerificationFailedError,
  DurableExecutionAlreadyStartedError,
  EC2AccessDeniedError,
  EC2ThrottledError,
  EC2UnexpectedError,
  EFSIOError,
  EFSMountConnectivityError,
  EFSMountFailureError,
  EFSMountTimeoutError,
  ENILimitReachedError,
  FunctionVersionsPerCapacityProviderLimitExceededError,
  InvalidCodeSignatureError,
  InvalidParameterValueError,
  InvalidRequestContentError,
  InvalidRuntimeError,
  InvalidSecurityGroupIDError,
  InvalidSubnetIDError,
  InvalidZipFileError,
  KMSAccessDeniedError,
  KMSDisabledError,
  KMSInvalidStateError,
  KMSNotFoundError,
  NoPublishedVersionError,
  PolicyLengthExceededError,
  PreconditionFailedError,
  ProvisionedConcurrencyConfigNotFoundError,
  RecursiveInvocationError,
  RequestTooLargeError,
  ResourceConflictError,
  ResourceInUseError,
  ResourceNotFoundError,
  ResourceNotReadyError,
  SdkError,
  SerializedRequestEntityTooLargeError,
  ServiceError,
  SnapStartError,
  SnapStartNotReadyError,
  SnapStartTimeoutError,
  SubnetIPAddressLimitReachedError,
  TooManyRequestsError,
  UnsupportedMediaTypeError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./LambdaClientInstance.js";
import * as LambdaServiceConfig from "./LambdaServiceConfig.js";

const commands = {
  AddLayerVersionPermissionCommand,
  AddPermissionCommand,
  CheckpointDurableExecutionCommand,
  CreateAliasCommand,
  CreateCapacityProviderCommand,
  CreateCodeSigningConfigCommand,
  CreateEventSourceMappingCommand,
  CreateFunctionCommand,
  CreateFunctionUrlConfigCommand,
  DeleteAliasCommand,
  DeleteCapacityProviderCommand,
  DeleteCodeSigningConfigCommand,
  DeleteEventSourceMappingCommand,
  DeleteFunctionCommand,
  DeleteFunctionCodeSigningConfigCommand,
  DeleteFunctionConcurrencyCommand,
  DeleteFunctionEventInvokeConfigCommand,
  DeleteFunctionUrlConfigCommand,
  DeleteLayerVersionCommand,
  DeleteProvisionedConcurrencyConfigCommand,
  GetAccountSettingsCommand,
  GetAliasCommand,
  GetCapacityProviderCommand,
  GetCodeSigningConfigCommand,
  GetDurableExecutionCommand,
  GetDurableExecutionHistoryCommand,
  GetDurableExecutionStateCommand,
  GetEventSourceMappingCommand,
  GetFunctionCommand,
  GetFunctionCodeSigningConfigCommand,
  GetFunctionConcurrencyCommand,
  GetFunctionConfigurationCommand,
  GetFunctionEventInvokeConfigCommand,
  GetFunctionRecursionConfigCommand,
  GetFunctionScalingConfigCommand,
  GetFunctionUrlConfigCommand,
  GetLayerVersionCommand,
  GetLayerVersionByArnCommand,
  GetLayerVersionPolicyCommand,
  GetPolicyCommand,
  GetProvisionedConcurrencyConfigCommand,
  GetRuntimeManagementConfigCommand,
  InvokeCommand,
  InvokeAsyncCommand,
  InvokeWithResponseStreamCommand,
  ListAliasesCommand,
  ListCapacityProvidersCommand,
  ListCodeSigningConfigsCommand,
  ListDurableExecutionsByFunctionCommand,
  ListEventSourceMappingsCommand,
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionUrlConfigsCommand,
  ListFunctionVersionsByCapacityProviderCommand,
  ListFunctionsCommand,
  ListFunctionsByCodeSigningConfigCommand,
  ListLayerVersionsCommand,
  ListLayersCommand,
  ListProvisionedConcurrencyConfigsCommand,
  ListTagsCommand,
  ListVersionsByFunctionCommand,
  PublishLayerVersionCommand,
  PublishVersionCommand,
  PutFunctionCodeSigningConfigCommand,
  PutFunctionConcurrencyCommand,
  PutFunctionEventInvokeConfigCommand,
  PutFunctionRecursionConfigCommand,
  PutFunctionScalingConfigCommand,
  PutProvisionedConcurrencyConfigCommand,
  PutRuntimeManagementConfigCommand,
  RemoveLayerVersionPermissionCommand,
  RemovePermissionCommand,
  SendDurableExecutionCallbackFailureCommand,
  SendDurableExecutionCallbackHeartbeatCommand,
  SendDurableExecutionCallbackSuccessCommand,
  StopDurableExecutionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCapacityProviderCommand,
  UpdateCodeSigningConfigCommand,
  UpdateEventSourceMappingCommand,
  UpdateFunctionCodeCommand,
  UpdateFunctionConfigurationCommand,
  UpdateFunctionEventInvokeConfigCommand,
  UpdateFunctionUrlConfigCommand,
};

interface LambdaService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddLayerVersionPermissionCommand}
   */
  addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddLayerVersionPermissionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | PolicyLengthExceededError
    | PreconditionFailedError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddPermissionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | PolicyLengthExceededError
    | PreconditionFailedError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CheckpointDurableExecutionCommand}
   */
  checkpointDurableExecution(
    args: CheckpointDurableExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CheckpointDurableExecutionCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(
    args: CreateAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAliasCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateCapacityProviderCommand}
   */
  createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCapacityProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CapacityProviderLimitExceededError
    | InvalidParameterValueError
    | ResourceConflictError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateCodeSigningConfigCommand}
   */
  createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCodeSigningConfigCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ServiceError
  >;

  /**
   * @see {@link CreateEventSourceMappingCommand}
   */
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventSourceMappingCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CodeSigningConfigNotFoundError
    | CodeStorageExceededError
    | CodeVerificationFailedError
    | FunctionVersionsPerCapacityProviderLimitExceededError
    | InvalidCodeSignatureError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateFunctionUrlConfigCommand}
   */
  createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFunctionUrlConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(
    args: DeleteAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAliasCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteCapacityProviderCommand}
   */
  deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCapacityProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteCodeSigningConfigCommand}
   */
  deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCodeSigningConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
  >;

  /**
   * @see {@link DeleteEventSourceMappingCommand}
   */
  deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventSourceMappingCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteFunctionCodeSigningConfigCommand}
   */
  deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionCodeSigningConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CodeSigningConfigNotFoundError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteFunctionConcurrencyCommand}
   */
  deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionConcurrencyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteFunctionEventInvokeConfigCommand}
   */
  deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionEventInvokeConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteFunctionUrlConfigCommand}
   */
  deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionUrlConfigCommandOutput,
    Cause.TimeoutError | SdkError | ResourceConflictError | ResourceNotFoundError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteLayerVersionCommand}
   */
  deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLayerVersionCommandOutput,
    Cause.TimeoutError | SdkError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteProvisionedConcurrencyConfigCommand}
   */
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteProvisionedConcurrencyConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountSettingsCommandOutput,
    Cause.TimeoutError | SdkError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(
    args: GetAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAliasCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetCapacityProviderCommand}
   */
  getCapacityProvider(
    args: GetCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCapacityProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetCodeSigningConfigCommand}
   */
  getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCodeSigningConfigCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link GetDurableExecutionCommand}
   */
  getDurableExecution(
    args: GetDurableExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDurableExecutionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetDurableExecutionHistoryCommand}
   */
  getDurableExecutionHistory(
    args: GetDurableExecutionHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDurableExecutionHistoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetDurableExecutionStateCommand}
   */
  getDurableExecutionState(
    args: GetDurableExecutionStateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDurableExecutionStateCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link GetEventSourceMappingCommand}
   */
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEventSourceMappingCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(
    args: GetFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetFunctionCodeSigningConfigCommand}
   */
  getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionCodeSigningConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetFunctionConcurrencyCommand}
   */
  getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionConcurrencyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetFunctionConfigurationCommand}
   */
  getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetFunctionEventInvokeConfigCommand}
   */
  getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionEventInvokeConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetFunctionRecursionConfigCommand}
   */
  getFunctionRecursionConfig(
    args: GetFunctionRecursionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionRecursionConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetFunctionScalingConfigCommand}
   */
  getFunctionScalingConfig(
    args: GetFunctionScalingConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionScalingConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetFunctionUrlConfigCommand}
   */
  getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionUrlConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetLayerVersionCommand}
   */
  getLayerVersion(
    args: GetLayerVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLayerVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetLayerVersionByArnCommand}
   */
  getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLayerVersionByArnCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetLayerVersionPolicyCommand}
   */
  getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLayerVersionPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetProvisionedConcurrencyConfigCommand}
   */
  getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetProvisionedConcurrencyConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ProvisionedConcurrencyConfigNotFoundError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link GetRuntimeManagementConfigCommand}
   */
  getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRuntimeManagementConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link InvokeCommand}
   */
  invoke(
    args: InvokeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DurableExecutionAlreadyStartedError
    | EC2AccessDeniedError
    | EC2ThrottledError
    | EC2UnexpectedError
    | EFSIOError
    | EFSMountConnectivityError
    | EFSMountFailureError
    | EFSMountTimeoutError
    | ENILimitReachedError
    | InvalidParameterValueError
    | InvalidRequestContentError
    | InvalidRuntimeError
    | InvalidSecurityGroupIDError
    | InvalidSubnetIDError
    | InvalidZipFileError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | NoPublishedVersionError
    | RecursiveInvocationError
    | RequestTooLargeError
    | ResourceConflictError
    | ResourceNotFoundError
    | ResourceNotReadyError
    | SerializedRequestEntityTooLargeError
    | ServiceError
    | SnapStartError
    | SnapStartNotReadyError
    | SnapStartTimeoutError
    | SubnetIPAddressLimitReachedError
    | TooManyRequestsError
    | UnsupportedMediaTypeError
  >;

  /**
   * @see {@link InvokeAsyncCommand}
   */
  invokeAsync(
    args: InvokeAsyncCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeAsyncCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidRequestContentError
    | InvalidRuntimeError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
  >;

  /**
   * @see {@link InvokeWithResponseStreamCommand}
   */
  invokeWithResponseStream(
    args: InvokeWithResponseStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeWithResponseStreamCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | EC2AccessDeniedError
    | EC2ThrottledError
    | EC2UnexpectedError
    | EFSIOError
    | EFSMountConnectivityError
    | EFSMountFailureError
    | EFSMountTimeoutError
    | ENILimitReachedError
    | InvalidParameterValueError
    | InvalidRequestContentError
    | InvalidRuntimeError
    | InvalidSecurityGroupIDError
    | InvalidSubnetIDError
    | InvalidZipFileError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | NoPublishedVersionError
    | RecursiveInvocationError
    | RequestTooLargeError
    | ResourceConflictError
    | ResourceNotFoundError
    | ResourceNotReadyError
    | SerializedRequestEntityTooLargeError
    | ServiceError
    | SnapStartError
    | SnapStartNotReadyError
    | SnapStartTimeoutError
    | SubnetIPAddressLimitReachedError
    | TooManyRequestsError
    | UnsupportedMediaTypeError
  >;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(
    args: ListAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAliasesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListCapacityProvidersCommand}
   */
  listCapacityProviders(
    args: ListCapacityProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCapacityProvidersCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link ListCodeSigningConfigsCommand}
   */
  listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCodeSigningConfigsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ServiceError
  >;

  /**
   * @see {@link ListDurableExecutionsByFunctionCommand}
   */
  listDurableExecutionsByFunction(
    args: ListDurableExecutionsByFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDurableExecutionsByFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListEventSourceMappingsCommand}
   */
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEventSourceMappingsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListFunctionEventInvokeConfigsCommand}
   */
  listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionEventInvokeConfigsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListFunctionUrlConfigsCommand}
   */
  listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionUrlConfigsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListFunctionVersionsByCapacityProviderCommand}
   */
  listFunctionVersionsByCapacityProvider(
    args: ListFunctionVersionsByCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionVersionsByCapacityProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(
    args: ListFunctionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link ListFunctionsByCodeSigningConfigCommand}
   */
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionsByCodeSigningConfigCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link ListLayerVersionsCommand}
   */
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLayerVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListLayersCommand}
   */
  listLayers(
    args: ListLayersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLayersCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link ListProvisionedConcurrencyConfigsCommand}
   */
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListProvisionedConcurrencyConfigsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListVersionsByFunctionCommand}
   */
  listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVersionsByFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PublishLayerVersionCommand}
   */
  publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishLayerVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CodeStorageExceededError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PublishVersionCommand}
   */
  publishVersion(
    args: PublishVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CodeStorageExceededError
    | FunctionVersionsPerCapacityProviderLimitExceededError
    | InvalidParameterValueError
    | PreconditionFailedError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutFunctionCodeSigningConfigCommand}
   */
  putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutFunctionCodeSigningConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CodeSigningConfigNotFoundError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutFunctionConcurrencyCommand}
   */
  putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutFunctionConcurrencyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutFunctionEventInvokeConfigCommand}
   */
  putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutFunctionEventInvokeConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutFunctionRecursionConfigCommand}
   */
  putFunctionRecursionConfig(
    args: PutFunctionRecursionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutFunctionRecursionConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutFunctionScalingConfigCommand}
   */
  putFunctionScalingConfig(
    args: PutFunctionScalingConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutFunctionScalingConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutProvisionedConcurrencyConfigCommand}
   */
  putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutProvisionedConcurrencyConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutRuntimeManagementConfigCommand}
   */
  putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRuntimeManagementConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link RemoveLayerVersionPermissionCommand}
   */
  removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveLayerVersionPermissionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | PreconditionFailedError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemovePermissionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | PreconditionFailedError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link SendDurableExecutionCallbackFailureCommand}
   */
  sendDurableExecutionCallbackFailure(
    args: SendDurableExecutionCallbackFailureCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendDurableExecutionCallbackFailureCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CallbackTimeoutError
    | InvalidParameterValueError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link SendDurableExecutionCallbackHeartbeatCommand}
   */
  sendDurableExecutionCallbackHeartbeat(
    args: SendDurableExecutionCallbackHeartbeatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendDurableExecutionCallbackHeartbeatCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CallbackTimeoutError
    | InvalidParameterValueError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link SendDurableExecutionCallbackSuccessCommand}
   */
  sendDurableExecutionCallbackSuccess(
    args: SendDurableExecutionCallbackSuccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendDurableExecutionCallbackSuccessCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CallbackTimeoutError
    | InvalidParameterValueError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link StopDurableExecutionCommand}
   */
  stopDurableExecution(
    args: StopDurableExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopDurableExecutionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(
    args: UpdateAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAliasCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | PreconditionFailedError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateCapacityProviderCommand}
   */
  updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCapacityProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateCodeSigningConfigCommand}
   */
  updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCodeSigningConfigCommandOutput,
    Cause.TimeoutError | SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link UpdateEventSourceMappingCommand}
   */
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEventSourceMappingCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateFunctionCodeCommand}
   */
  updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFunctionCodeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CodeSigningConfigNotFoundError
    | CodeStorageExceededError
    | CodeVerificationFailedError
    | InvalidCodeSignatureError
    | InvalidParameterValueError
    | PreconditionFailedError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateFunctionConfigurationCommand}
   */
  updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFunctionConfigurationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CodeSigningConfigNotFoundError
    | CodeVerificationFailedError
    | InvalidCodeSignatureError
    | InvalidParameterValueError
    | PreconditionFailedError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateFunctionEventInvokeConfigCommand}
   */
  updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFunctionEventInvokeConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateFunctionUrlConfigCommand}
   */
  updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFunctionUrlConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeLambdaService = Effect.gen(function*() {
  const client = yield* Instance.LambdaClientInstance;

  return yield* Service.fromClientAndCommands<LambdaService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: LambdaServiceConfig.toLambdaClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class LambdaService extends ServiceMap.Service<
  LambdaService,
  LambdaService$
>()("@effect-aws/client-lambda/LambdaService") {
  static readonly defaultLayer = Layer.effect(this, makeLambdaService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: LambdaService.Config) =>
    Layer.effect(this, makeLambdaService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(LambdaServiceConfig.setLambdaServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: LambdaClientConfig) => LambdaClient,
  ) =>
    Layer.effect(this, makeLambdaService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.LambdaClientInstance,
          Effect.map(LambdaServiceConfig.toLambdaClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace LambdaService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<LambdaClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = LambdaService$;
}
