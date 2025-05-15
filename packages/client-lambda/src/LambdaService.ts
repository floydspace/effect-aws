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
  GetCodeSigningConfigCommand,
  type GetCodeSigningConfigCommandInput,
  type GetCodeSigningConfigCommandOutput,
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
  ListCodeSigningConfigsCommand,
  type ListCodeSigningConfigsCommandInput,
  type ListCodeSigningConfigsCommandOutput,
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
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
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
  SdkError,
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ServiceError
  >;

  /**
   * @see {@link CreateEventSourceMappingCommand}
   */
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventSourceMappingCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteProvisionedConcurrencyConfigCommand}
   */
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteProvisionedConcurrencyConfigCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(
    args: GetAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAliasCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link GetEventSourceMappingCommand}
   */
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEventSourceMappingCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ServiceError
  >;

  /**
   * @see {@link ListEventSourceMappingsCommand}
   */
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEventSourceMappingsCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link ListFunctionsByCodeSigningConfigCommand}
   */
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionsByCodeSigningConfigCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link ListLayerVersionsCommand}
   */
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListLayerVersionsCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ServiceError | TooManyRequestsError
  >;

  /**
   * @see {@link ListProvisionedConcurrencyConfigsCommand}
   */
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListProvisionedConcurrencyConfigsCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | InvalidParameterValueError | ResourceNotFoundError | ServiceError
  >;

  /**
   * @see {@link UpdateEventSourceMappingCommand}
   */
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEventSourceMappingCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
export class LambdaService extends Effect.Tag("@effect-aws/client-lambda/LambdaService")<
  LambdaService,
  LambdaService$
>() {
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
