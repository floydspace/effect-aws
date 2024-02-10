/**
 * @since 1.0.0
 */
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
    AddLayerVersionPermissionCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AddPermissionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(
    args: CreateAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateAliasCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreateCodeSigningConfigCommand}
   */
  createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateCodeSigningConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link CreateEventSourceMappingCommand}
   */
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventSourceMappingCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateFunctionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link CreateFunctionUrlConfigCommand}
   */
  createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateFunctionUrlConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(
    args: DeleteAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteAliasCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteCodeSigningConfigCommand}
   */
  deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCodeSigningConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeleteEventSourceMappingCommand}
   */
  deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventSourceMappingCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteFunctionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteFunctionCodeSigningConfigCommand}
   */
  deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionCodeSigningConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeleteFunctionConcurrencyCommand}
   */
  deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionConcurrencyCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeleteFunctionEventInvokeConfigCommand}
   */
  deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionEventInvokeConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeleteFunctionUrlConfigCommand}
   */
  deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionUrlConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link DeleteLayerVersionCommand}
   */
  deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteLayerVersionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link DeleteProvisionedConcurrencyConfigCommand}
   */
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteProvisionedConcurrencyConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetAccountSettingsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(
    args: GetAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetAliasCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetCodeSigningConfigCommand}
   */
  getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetCodeSigningConfigCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetEventSourceMappingCommand}
   */
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetEventSourceMappingCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(
    args: GetFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetFunctionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetFunctionCodeSigningConfigCommand}
   */
  getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionCodeSigningConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link GetFunctionConcurrencyCommand}
   */
  getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetFunctionConcurrencyCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetFunctionConfigurationCommand}
   */
  getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionConfigurationCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link GetFunctionEventInvokeConfigCommand}
   */
  getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionEventInvokeConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link GetFunctionUrlConfigCommand}
   */
  getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetFunctionUrlConfigCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetLayerVersionCommand}
   */
  getLayerVersion(
    args: GetLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetLayerVersionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetLayerVersionByArnCommand}
   */
  getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetLayerVersionByArnCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetLayerVersionPolicyCommand}
   */
  getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetLayerVersionPolicyCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetPolicyCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link GetProvisionedConcurrencyConfigCommand}
   */
  getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetProvisionedConcurrencyConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link GetRuntimeManagementConfigCommand}
   */
  getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetRuntimeManagementConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link InvokeCommand}
   */
  invoke(
    args: InvokeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<InvokeCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link InvokeAsyncCommand}
   */
  invokeAsync(
    args: InvokeAsyncCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<InvokeAsyncCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link InvokeWithResponseStreamCommand}
   */
  invokeWithResponseStream(
    args: InvokeWithResponseStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    InvokeWithResponseStreamCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(
    args: ListAliasesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListAliasesCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListCodeSigningConfigsCommand}
   */
  listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListCodeSigningConfigsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListEventSourceMappingsCommand}
   */
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListEventSourceMappingsCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ListFunctionEventInvokeConfigsCommand}
   */
  listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionEventInvokeConfigsCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(
    args: ListFunctionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListFunctionsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListFunctionsByCodeSigningConfigCommand}
   */
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionsByCodeSigningConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ListFunctionUrlConfigsCommand}
   */
  listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListFunctionUrlConfigsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListLayersCommand}
   */
  listLayers(
    args: ListLayersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListLayersCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListLayerVersionsCommand}
   */
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListLayerVersionsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListProvisionedConcurrencyConfigsCommand}
   */
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListProvisionedConcurrencyConfigsCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListTagsCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link ListVersionsByFunctionCommand}
   */
  listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListVersionsByFunctionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PublishLayerVersionCommand}
   */
  publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PublishLayerVersionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PublishVersionCommand}
   */
  publishVersion(
    args: PublishVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PublishVersionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PutFunctionCodeSigningConfigCommand}
   */
  putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutFunctionCodeSigningConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link PutFunctionConcurrencyCommand}
   */
  putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PutFunctionConcurrencyCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link PutFunctionEventInvokeConfigCommand}
   */
  putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutFunctionEventInvokeConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link PutProvisionedConcurrencyConfigCommand}
   */
  putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutProvisionedConcurrencyConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link PutRuntimeManagementConfigCommand}
   */
  putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutRuntimeManagementConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link RemoveLayerVersionPermissionCommand}
   */
  removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveLayerVersionPermissionCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RemovePermissionCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<TagResourceCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UntagResourceCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(
    args: UpdateAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UpdateAliasCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UpdateCodeSigningConfigCommand}
   */
  updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCodeSigningConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link UpdateEventSourceMappingCommand}
   */
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEventSourceMappingCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link UpdateFunctionCodeCommand}
   */
  updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UpdateFunctionCodeCommandOutput, Cause.UnknownException>;

  /**
   * @see {@link UpdateFunctionConfigurationCommand}
   */
  updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFunctionConfigurationCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link UpdateFunctionEventInvokeConfigCommand}
   */
  updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFunctionEventInvokeConfigCommandOutput,
    Cause.UnknownException
  >;

  /**
   * @see {@link UpdateFunctionUrlConfigCommand}
   */
  updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFunctionUrlConfigCommandOutput,
    Cause.UnknownException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const LambdaService = Context.GenericTag<LambdaService>(
  "@effect-aws/client-lambda/LambdaService",
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
 * @since 0.1.0
 * @deprecated
 */
export const BaseLambdaServiceEffect = makeLambdaService;

/**
 * @since 0.1.0
 * @deprecated
 */
export const LambdaServiceEffect = BaseLambdaServiceEffect.pipe(
  Effect.provide(LambdaClientInstanceLayer),
);

/**
 * @since 0.1.0
 * @deprecated
 */
export const DefaultLambdaServiceEffect = BaseLambdaServiceEffect.pipe(
  Effect.provide(DefaultLambdaClientInstanceLayer),
);
