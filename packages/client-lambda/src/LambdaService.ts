/**
 * @since 1.0.0
 */
import {
  LambdaServiceException,
  type LambdaClient,
  type LambdaClientConfig,
  AddLayerVersionPermissionCommand,
  type AddLayerVersionPermissionCommandInput,
  type AddLayerVersionPermissionCommandOutput,
  AddPermissionCommand,
  type AddPermissionCommandInput,
  type AddPermissionCommandOutput,
  CreateAliasCommand,
  type CreateAliasCommandInput,
  type CreateAliasCommandOutput,
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
  DeleteCodeSigningConfigCommand,
  type DeleteCodeSigningConfigCommandInput,
  type DeleteCodeSigningConfigCommandOutput,
  DeleteEventSourceMappingCommand,
  type DeleteEventSourceMappingCommandInput,
  type DeleteEventSourceMappingCommandOutput,
  DeleteFunctionCommand,
  type DeleteFunctionCommandInput,
  type DeleteFunctionCommandOutput,
  DeleteFunctionCodeSigningConfigCommand,
  type DeleteFunctionCodeSigningConfigCommandInput,
  type DeleteFunctionCodeSigningConfigCommandOutput,
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
  GetCodeSigningConfigCommand,
  type GetCodeSigningConfigCommandInput,
  type GetCodeSigningConfigCommandOutput,
  GetEventSourceMappingCommand,
  type GetEventSourceMappingCommandInput,
  type GetEventSourceMappingCommandOutput,
  GetFunctionCommand,
  type GetFunctionCommandInput,
  type GetFunctionCommandOutput,
  GetFunctionCodeSigningConfigCommand,
  type GetFunctionCodeSigningConfigCommandInput,
  type GetFunctionCodeSigningConfigCommandOutput,
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
  GetFunctionUrlConfigCommand,
  type GetFunctionUrlConfigCommandInput,
  type GetFunctionUrlConfigCommandOutput,
  GetLayerVersionCommand,
  type GetLayerVersionCommandInput,
  type GetLayerVersionCommandOutput,
  GetLayerVersionByArnCommand,
  type GetLayerVersionByArnCommandInput,
  type GetLayerVersionByArnCommandOutput,
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
  InvokeCommand,
  type InvokeCommandInput,
  type InvokeCommandOutput,
  InvokeAsyncCommand,
  type InvokeAsyncCommandInput,
  type InvokeAsyncCommandOutput,
  InvokeWithResponseStreamCommand,
  type InvokeWithResponseStreamCommandInput,
  type InvokeWithResponseStreamCommandOutput,
  ListAliasesCommand,
  type ListAliasesCommandInput,
  type ListAliasesCommandOutput,
  ListCodeSigningConfigsCommand,
  type ListCodeSigningConfigsCommandInput,
  type ListCodeSigningConfigsCommandOutput,
  ListEventSourceMappingsCommand,
  type ListEventSourceMappingsCommandInput,
  type ListEventSourceMappingsCommandOutput,
  ListFunctionEventInvokeConfigsCommand,
  type ListFunctionEventInvokeConfigsCommandInput,
  type ListFunctionEventInvokeConfigsCommandOutput,
  ListFunctionUrlConfigsCommand,
  type ListFunctionUrlConfigsCommandInput,
  type ListFunctionUrlConfigsCommandOutput,
  ListFunctionsCommand,
  type ListFunctionsCommandInput,
  type ListFunctionsCommandOutput,
  ListFunctionsByCodeSigningConfigCommand,
  type ListFunctionsByCodeSigningConfigCommandInput,
  type ListFunctionsByCodeSigningConfigCommandOutput,
  ListLayerVersionsCommand,
  type ListLayerVersionsCommandInput,
  type ListLayerVersionsCommandOutput,
  ListLayersCommand,
  type ListLayersCommandInput,
  type ListLayersCommandOutput,
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
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAliasCommand,
  type UpdateAliasCommandInput,
  type UpdateAliasCommandOutput,
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
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  CodeSigningConfigNotFoundError,
  CodeStorageExceededError,
  CodeVerificationFailedError,
  EC2AccessDeniedError,
  EC2ThrottledError,
  EC2UnexpectedError,
  EFSIOError,
  EFSMountConnectivityError,
  EFSMountFailureError,
  EFSMountTimeoutError,
  ENILimitReachedError,
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
  PolicyLengthExceededError,
  PreconditionFailedError,
  ProvisionedConcurrencyConfigNotFoundError,
  RecursiveInvocationError,
  RequestTooLargeError,
  ResourceConflictError,
  ResourceInUseError,
  ResourceNotFoundError,
  ResourceNotReadyError,
  ServiceError,
  SnapStartError,
  SnapStartNotReadyError,
  SnapStartTimeoutError,
  SubnetIPAddressLimitReachedError,
  TooManyRequestsError,
  UnsupportedMediaTypeError,
  SdkError,
  TaggedException,
} from "./Errors";
import {
  LambdaClientInstance,
  LambdaClientInstanceLayer,
} from "./LambdaClientInstance";
import {
  DefaultLambdaClientConfigLayer,
  makeDefaultLambdaClientInstanceConfig,
  LambdaClientInstanceConfig,
} from "./LambdaClientInstanceConfig";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  AddLayerVersionPermissionCommand,
  AddPermissionCommand,
  CreateAliasCommand,
  CreateCodeSigningConfigCommand,
  CreateEventSourceMappingCommand,
  CreateFunctionCommand,
  CreateFunctionUrlConfigCommand,
  DeleteAliasCommand,
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
  GetCodeSigningConfigCommand,
  GetEventSourceMappingCommand,
  GetFunctionCommand,
  GetFunctionCodeSigningConfigCommand,
  GetFunctionConcurrencyCommand,
  GetFunctionConfigurationCommand,
  GetFunctionEventInvokeConfigCommand,
  GetFunctionRecursionConfigCommand,
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
  ListCodeSigningConfigsCommand,
  ListEventSourceMappingsCommand,
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionUrlConfigsCommand,
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
  PutProvisionedConcurrencyConfigCommand,
  PutRuntimeManagementConfigCommand,
  RemoveLayerVersionPermissionCommand,
  RemovePermissionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
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
   * @see {@link CreateAliasCommand}
   */
  createAlias(
    args: CreateAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAliasCommandOutput,
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
    | ResourceNotFoundError
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
    SdkError | InvalidParameterValueError | ServiceError
  >;

  /**
   * @see {@link CreateEventSourceMappingCommand}
   */
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventSourceMappingCommandOutput,
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
    | SdkError
    | CodeSigningConfigNotFoundError
    | CodeStorageExceededError
    | CodeVerificationFailedError
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
    | SdkError
    | InvalidParameterValueError
    | ResourceConflictError
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
    | SdkError
    | ResourceConflictError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteLayerVersionCommand}
   */
  deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLayerVersionCommandOutput,
    SdkError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteProvisionedConcurrencyConfigCommand}
   */
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteProvisionedConcurrencyConfigCommandOutput,
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
    SdkError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(
    args: GetAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAliasCommandOutput,
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
    SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link GetEventSourceMappingCommand}
   */
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEventSourceMappingCommandOutput,
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
    | RecursiveInvocationError
    | RequestTooLargeError
    | ResourceConflictError
    | ResourceNotFoundError
    | ResourceNotReadyError
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
    | RecursiveInvocationError
    | RequestTooLargeError
    | ResourceConflictError
    | ResourceNotFoundError
    | ResourceNotReadyError
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
    | SdkError
    | InvalidParameterValueError
    | ResourceNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListCodeSigningConfigsCommand}
   */
  listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCodeSigningConfigsCommandOutput,
    SdkError | InvalidParameterValueError | ServiceError
  >;

  /**
   * @see {@link ListEventSourceMappingsCommand}
   */
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEventSourceMappingsCommandOutput,
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
    SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link ListFunctionsByCodeSigningConfigCommand}
   */
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionsByCodeSigningConfigCommandOutput,
    SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link ListLayerVersionsCommand}
   */
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLayerVersionsCommandOutput,
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
    SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link ListProvisionedConcurrencyConfigsCommand}
   */
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListProvisionedConcurrencyConfigsCommandOutput,
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
    | SdkError
    | CodeStorageExceededError
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
    | SdkError
    | InvalidParameterValueError
    | PreconditionFailedError
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
    | SdkError
    | InvalidParameterValueError
    | PreconditionFailedError
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
    SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link UpdateEventSourceMappingCommand}
   */
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEventSourceMappingCommandOutput,
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
export const makeLambdaService = Effect.gen(function* (_) {
  const client = yield* _(LambdaClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (
            e instanceof LambdaServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<LambdaServiceException>
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
  }, {}) as LambdaService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class LambdaService extends Effect.Tag(
  "@effect-aws/client-lambda/LambdaService",
)<LambdaService, LambdaService$>() {
  static readonly defaultLayer = Layer.effect(this, makeLambdaService).pipe(
    Layer.provide(LambdaClientInstanceLayer),
    Layer.provide(DefaultLambdaClientConfigLayer),
  );
  static readonly layer = (config: LambdaClientConfig) =>
    Layer.effect(this, makeLambdaService).pipe(
      Layer.provide(LambdaClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          LambdaClientInstanceConfig,
          makeDefaultLambdaClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: LambdaClientConfig) => LambdaClient,
  ) =>
    Layer.effect(this, makeLambdaService).pipe(
      Layer.provide(
        Layer.effect(
          LambdaClientInstance,
          Effect.map(makeDefaultLambdaClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias LambdaService
 */
export const Lambda = LambdaService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Lambda.baseLayer instead
 */
export const BaseLambdaServiceLayer = Layer.effect(
  LambdaService,
  makeLambdaService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Lambda.layer instead
 */
export const LambdaServiceLayer = BaseLambdaServiceLayer.pipe(
  Layer.provide(LambdaClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Lambda.defaultLayer instead
 */
export const DefaultLambdaServiceLayer = LambdaService.defaultLayer;
