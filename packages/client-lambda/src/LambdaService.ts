import {
  AddLayerVersionPermissionCommand,
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
  AddPermissionCommand,
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
  CreateAliasCommand,
  CreateAliasCommandInput,
  CreateAliasCommandOutput,
  CreateCodeSigningConfigCommand,
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
  CreateEventSourceMappingCommand,
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
  CreateFunctionCommand,
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
  CreateFunctionUrlConfigCommand,
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
  DeleteAliasCommand,
  DeleteAliasCommandInput,
  DeleteAliasCommandOutput,
  DeleteCodeSigningConfigCommand,
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
  DeleteEventSourceMappingCommand,
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
  DeleteFunctionCodeSigningConfigCommand,
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
  DeleteFunctionCommand,
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
  DeleteFunctionConcurrencyCommand,
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
  DeleteFunctionEventInvokeConfigCommand,
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
  DeleteFunctionUrlConfigCommand,
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
  DeleteLayerVersionCommand,
  DeleteLayerVersionCommandInput,
  DeleteLayerVersionCommandOutput,
  DeleteProvisionedConcurrencyConfigCommand,
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
  GetAliasCommand,
  GetAliasCommandInput,
  GetAliasCommandOutput,
  GetCodeSigningConfigCommand,
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
  GetEventSourceMappingCommand,
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
  GetFunctionCodeSigningConfigCommand,
  GetFunctionCodeSigningConfigCommandInput,
  GetFunctionCodeSigningConfigCommandOutput,
  GetFunctionCommand,
  GetFunctionCommandInput,
  GetFunctionCommandOutput,
  GetFunctionConcurrencyCommand,
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
  GetFunctionConfigurationCommand,
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
  GetFunctionEventInvokeConfigCommand,
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
  GetFunctionUrlConfigCommand,
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
  GetLayerVersionByArnCommand,
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
  GetLayerVersionCommand,
  GetLayerVersionCommandInput,
  GetLayerVersionCommandOutput,
  GetLayerVersionPolicyCommand,
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
  GetPolicyCommand,
  GetPolicyCommandInput,
  GetPolicyCommandOutput,
  GetProvisionedConcurrencyConfigCommand,
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
  GetRuntimeManagementConfigCommand,
  GetRuntimeManagementConfigCommandInput,
  GetRuntimeManagementConfigCommandOutput,
  InvokeAsyncCommand,
  InvokeAsyncCommandInput,
  InvokeAsyncCommandOutput,
  InvokeCommand,
  InvokeCommandInput,
  InvokeCommandOutput,
  InvokeWithResponseStreamCommand,
  InvokeWithResponseStreamCommandInput,
  InvokeWithResponseStreamCommandOutput,
  ListAliasesCommand,
  ListAliasesCommandInput,
  ListAliasesCommandOutput,
  ListCodeSigningConfigsCommand,
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
  ListEventSourceMappingsCommand,
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
  ListFunctionUrlConfigsCommand,
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
  ListLayerVersionsCommand,
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput,
  ListLayersCommand,
  ListLayersCommandInput,
  ListLayersCommandOutput,
  ListProvisionedConcurrencyConfigsCommand,
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
  ListTagsCommand,
  ListTagsCommandInput,
  ListTagsCommandOutput,
  ListVersionsByFunctionCommand,
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
  PublishLayerVersionCommand,
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
  PublishVersionCommand,
  PublishVersionCommandInput,
  PublishVersionCommandOutput,
  PutFunctionCodeSigningConfigCommand,
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
  PutFunctionConcurrencyCommand,
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
  PutFunctionEventInvokeConfigCommand,
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
  PutProvisionedConcurrencyConfigCommand,
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
  PutRuntimeManagementConfigCommand,
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
  RemoveLayerVersionPermissionCommand,
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput,
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  UpdateAliasCommand,
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput,
  UpdateCodeSigningConfigCommand,
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
  UpdateEventSourceMappingCommand,
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
  UpdateFunctionCodeCommand,
  UpdateFunctionCodeCommandInput,
  UpdateFunctionCodeCommandOutput,
  UpdateFunctionConfigurationCommand,
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
  UpdateFunctionEventInvokeConfigCommand,
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
  UpdateFunctionUrlConfigCommand,
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
} from "@aws-sdk/client-lambda";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Cause, Context, Effect, Layer, ReadonlyRecord } from "effect";
import {
  DefaultLambdaClientInstanceLayer,
  LambdaClientInstance,
  LambdaClientInstanceLayer,
} from "./LambdaClientInstance";
import { DefaultLambdaClientConfigLayer } from "./LambdaClientInstanceConfig";

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
  ListFunctionsCommand,
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionUrlConfigsCommand,
  ListLayersCommand,
  ListLayerVersionsCommand,
  ListProvisionedConcurrencyConfigsCommand,
  ListTagsCommand,
  ListVersionsByFunctionCommand,
  PublishLayerVersionCommand,
  PublishVersionCommand,
  PutFunctionCodeSigningConfigCommand,
  PutFunctionConcurrencyCommand,
  PutFunctionEventInvokeConfigCommand,
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

/**
 * @since 1.0.0
 * @category models
 */
export interface LambdaService {
  readonly _: unique symbol;

  /**
   * @see {@link AddLayerVersionPermissionCommand}
   */
  addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    AddLayerVersionPermissionCommandOutput
  >;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, AddPermissionCommandOutput>;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(
    args: CreateAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, CreateAliasCommandOutput>;

  /**
   * @see {@link CreateCodeSigningConfigCommand}
   */
  createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    CreateCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link CreateEventSourceMappingCommand}
   */
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    CreateEventSourceMappingCommandOutput
  >;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, CreateFunctionCommandOutput>;

  /**
   * @see {@link CreateFunctionUrlConfigCommand}
   */
  createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    CreateFunctionUrlConfigCommandOutput
  >;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(
    args: DeleteAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, DeleteAliasCommandOutput>;

  /**
   * @see {@link DeleteCodeSigningConfigCommand}
   */
  deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    DeleteCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link DeleteEventSourceMappingCommand}
   */
  deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    DeleteEventSourceMappingCommandOutput
  >;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, DeleteFunctionCommandOutput>;

  /**
   * @see {@link DeleteFunctionCodeSigningConfigCommand}
   */
  deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    DeleteFunctionCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link DeleteFunctionConcurrencyCommand}
   */
  deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    DeleteFunctionConcurrencyCommandOutput
  >;

  /**
   * @see {@link DeleteFunctionEventInvokeConfigCommand}
   */
  deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    DeleteFunctionEventInvokeConfigCommandOutput
  >;

  /**
   * @see {@link DeleteFunctionUrlConfigCommand}
   */
  deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    DeleteFunctionUrlConfigCommandOutput
  >;

  /**
   * @see {@link DeleteLayerVersionCommand}
   */
  deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    DeleteLayerVersionCommandOutput
  >;

  /**
   * @see {@link DeleteProvisionedConcurrencyConfigCommand}
   */
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    DeleteProvisionedConcurrencyConfigCommandOutput
  >;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetAccountSettingsCommandOutput
  >;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(
    args: GetAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, GetAliasCommandOutput>;

  /**
   * @see {@link GetCodeSigningConfigCommand}
   */
  getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link GetEventSourceMappingCommand}
   */
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetEventSourceMappingCommandOutput
  >;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(
    args: GetFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, GetFunctionCommandOutput>;

  /**
   * @see {@link GetFunctionCodeSigningConfigCommand}
   */
  getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetFunctionCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link GetFunctionConcurrencyCommand}
   */
  getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetFunctionConcurrencyCommandOutput
  >;

  /**
   * @see {@link GetFunctionConfigurationCommand}
   */
  getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetFunctionConfigurationCommandOutput
  >;

  /**
   * @see {@link GetFunctionEventInvokeConfigCommand}
   */
  getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetFunctionEventInvokeConfigCommandOutput
  >;

  /**
   * @see {@link GetFunctionUrlConfigCommand}
   */
  getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetFunctionUrlConfigCommandOutput
  >;

  /**
   * @see {@link GetLayerVersionCommand}
   */
  getLayerVersion(
    args: GetLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, GetLayerVersionCommandOutput>;

  /**
   * @see {@link GetLayerVersionByArnCommand}
   */
  getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetLayerVersionByArnCommandOutput
  >;

  /**
   * @see {@link GetLayerVersionPolicyCommand}
   */
  getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetLayerVersionPolicyCommandOutput
  >;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, GetPolicyCommandOutput>;

  /**
   * @see {@link GetProvisionedConcurrencyConfigCommand}
   */
  getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetProvisionedConcurrencyConfigCommandOutput
  >;

  /**
   * @see {@link GetRuntimeManagementConfigCommand}
   */
  getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    GetRuntimeManagementConfigCommandOutput
  >;

  /**
   * @see {@link InvokeCommand}
   */
  invoke(
    args: InvokeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, InvokeCommandOutput>;

  /**
   * @see {@link InvokeAsyncCommand}
   */
  invokeAsync(
    args: InvokeAsyncCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, InvokeAsyncCommandOutput>;

  /**
   * @see {@link InvokeWithResponseStreamCommand}
   */
  invokeWithResponseStream(
    args: InvokeWithResponseStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    InvokeWithResponseStreamCommandOutput
  >;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(
    args: ListAliasesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, ListAliasesCommandOutput>;

  /**
   * @see {@link ListCodeSigningConfigsCommand}
   */
  listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    ListCodeSigningConfigsCommandOutput
  >;

  /**
   * @see {@link ListEventSourceMappingsCommand}
   */
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    ListEventSourceMappingsCommandOutput
  >;

  /**
   * @see {@link ListFunctionEventInvokeConfigsCommand}
   */
  listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    ListFunctionEventInvokeConfigsCommandOutput
  >;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(
    args: ListFunctionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, ListFunctionsCommandOutput>;

  /**
   * @see {@link ListFunctionsByCodeSigningConfigCommand}
   */
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    ListFunctionsByCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link ListFunctionUrlConfigsCommand}
   */
  listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    ListFunctionUrlConfigsCommandOutput
  >;

  /**
   * @see {@link ListLayersCommand}
   */
  listLayers(
    args: ListLayersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, ListLayersCommandOutput>;

  /**
   * @see {@link ListLayerVersionsCommand}
   */
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    ListLayerVersionsCommandOutput
  >;

  /**
   * @see {@link ListProvisionedConcurrencyConfigsCommand}
   */
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    ListProvisionedConcurrencyConfigsCommandOutput
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, ListTagsCommandOutput>;

  /**
   * @see {@link ListVersionsByFunctionCommand}
   */
  listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    ListVersionsByFunctionCommandOutput
  >;

  /**
   * @see {@link PublishLayerVersionCommand}
   */
  publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    PublishLayerVersionCommandOutput
  >;

  /**
   * @see {@link PublishVersionCommand}
   */
  publishVersion(
    args: PublishVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, PublishVersionCommandOutput>;

  /**
   * @see {@link PutFunctionCodeSigningConfigCommand}
   */
  putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    PutFunctionCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link PutFunctionConcurrencyCommand}
   */
  putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    PutFunctionConcurrencyCommandOutput
  >;

  /**
   * @see {@link PutFunctionEventInvokeConfigCommand}
   */
  putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    PutFunctionEventInvokeConfigCommandOutput
  >;

  /**
   * @see {@link PutProvisionedConcurrencyConfigCommand}
   */
  putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    PutProvisionedConcurrencyConfigCommandOutput
  >;

  /**
   * @see {@link PutRuntimeManagementConfigCommand}
   */
  putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    PutRuntimeManagementConfigCommandOutput
  >;

  /**
   * @see {@link RemoveLayerVersionPermissionCommand}
   */
  removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    RemoveLayerVersionPermissionCommandOutput
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    RemovePermissionCommandOutput
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, TagResourceCommandOutput>;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, UntagResourceCommandOutput>;

  /**
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(
    args: UpdateAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, Cause.UnknownException, UpdateAliasCommandOutput>;

  /**
   * @see {@link UpdateCodeSigningConfigCommand}
   */
  updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    UpdateCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link UpdateEventSourceMappingCommand}
   */
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    UpdateEventSourceMappingCommandOutput
  >;

  /**
   * @see {@link UpdateFunctionCodeCommand}
   */
  updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    UpdateFunctionCodeCommandOutput
  >;

  /**
   * @see {@link UpdateFunctionConfigurationCommand}
   */
  updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    UpdateFunctionConfigurationCommandOutput
  >;

  /**
   * @see {@link UpdateFunctionEventInvokeConfigCommand}
   */
  updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    UpdateFunctionEventInvokeConfigCommandOutput
  >;

  /**
   * @see {@link UpdateFunctionUrlConfigCommand}
   */
  updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    Cause.UnknownException,
    UpdateFunctionUrlConfigCommandOutput
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const LambdaService = Context.Tag<LambdaService>(
  Symbol.for("@effect-aws/client-lambda/LambdaService"),
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeLambdaService = Effect.gen(function* (_) {
  const client = yield* _(LambdaClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise(() =>
        client.send(new CommandCtor(args), options ?? {}),
      );
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as LambdaService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseLambdaServiceLayer = Layer.effect(
  LambdaService,
  makeLambdaService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const LambdaServiceLayer = BaseLambdaServiceLayer.pipe(
  Layer.provide(LambdaClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultLambdaServiceLayer = LambdaServiceLayer.pipe(
  Layer.provide(DefaultLambdaClientConfigLayer),
);

// -------------------- Danger Zone --------------------

/**
 * @deprecated
 */
export const BaseLambdaServiceEffect = makeLambdaService;

/**
 * @deprecated
 */
export const LambdaServiceEffect = BaseLambdaServiceEffect.pipe(
  Effect.provide(LambdaClientInstanceLayer),
);

/**
 * @deprecated
 */
export const DefaultLambdaServiceEffect = BaseLambdaServiceEffect.pipe(
  Effect.provide(DefaultLambdaClientInstanceLayer),
);
