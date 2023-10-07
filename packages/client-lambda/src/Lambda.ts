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
import * as Effect from "effect/Effect";
import * as RR from "effect/ReadonlyRecord";
import {
  DefaultLambdaClientInstanceLayer,
  LambdaClientInstanceLayer,
  LambdaClientInstanceTag,
} from "./Context";

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

export interface LambdaService {
  /**
   * @see {@link AddLayerVersionPermissionCommand}
   */
  addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, AddLayerVersionPermissionCommandOutput>;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, AddPermissionCommandOutput>;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(
    args: CreateAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateAliasCommandOutput>;

  /**
   * @see {@link CreateCodeSigningConfigCommand}
   */
  createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateCodeSigningConfigCommandOutput>;

  /**
   * @see {@link CreateEventSourceMappingCommand}
   */
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateEventSourceMappingCommandOutput>;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateFunctionCommandOutput>;

  /**
   * @see {@link CreateFunctionUrlConfigCommand}
   */
  createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateFunctionUrlConfigCommandOutput>;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(
    args: DeleteAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteAliasCommandOutput>;

  /**
   * @see {@link DeleteCodeSigningConfigCommand}
   */
  deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteCodeSigningConfigCommandOutput>;

  /**
   * @see {@link DeleteEventSourceMappingCommand}
   */
  deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteEventSourceMappingCommandOutput>;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteFunctionCommandOutput>;

  /**
   * @see {@link DeleteFunctionCodeSigningConfigCommand}
   */
  deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    DeleteFunctionCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link DeleteFunctionConcurrencyCommand}
   */
  deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteFunctionConcurrencyCommandOutput>;

  /**
   * @see {@link DeleteFunctionEventInvokeConfigCommand}
   */
  deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    DeleteFunctionEventInvokeConfigCommandOutput
  >;

  /**
   * @see {@link DeleteFunctionUrlConfigCommand}
   */
  deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteFunctionUrlConfigCommandOutput>;

  /**
   * @see {@link DeleteLayerVersionCommand}
   */
  deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteLayerVersionCommandOutput>;

  /**
   * @see {@link DeleteProvisionedConcurrencyConfigCommand}
   */
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    DeleteProvisionedConcurrencyConfigCommandOutput
  >;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetAccountSettingsCommandOutput>;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(
    args: GetAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetAliasCommandOutput>;

  /**
   * @see {@link GetCodeSigningConfigCommand}
   */
  getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetCodeSigningConfigCommandOutput>;

  /**
   * @see {@link GetEventSourceMappingCommand}
   */
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetEventSourceMappingCommandOutput>;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(
    args: GetFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetFunctionCommandOutput>;

  /**
   * @see {@link GetFunctionCodeSigningConfigCommand}
   */
  getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetFunctionCodeSigningConfigCommandOutput>;

  /**
   * @see {@link GetFunctionConcurrencyCommand}
   */
  getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetFunctionConcurrencyCommandOutput>;

  /**
   * @see {@link GetFunctionConfigurationCommand}
   */
  getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetFunctionConfigurationCommandOutput>;

  /**
   * @see {@link GetFunctionEventInvokeConfigCommand}
   */
  getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetFunctionEventInvokeConfigCommandOutput>;

  /**
   * @see {@link GetFunctionUrlConfigCommand}
   */
  getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetFunctionUrlConfigCommandOutput>;

  /**
   * @see {@link GetLayerVersionCommand}
   */
  getLayerVersion(
    args: GetLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetLayerVersionCommandOutput>;

  /**
   * @see {@link GetLayerVersionByArnCommand}
   */
  getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetLayerVersionByArnCommandOutput>;

  /**
   * @see {@link GetLayerVersionPolicyCommand}
   */
  getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetLayerVersionPolicyCommandOutput>;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetPolicyCommandOutput>;

  /**
   * @see {@link GetProvisionedConcurrencyConfigCommand}
   */
  getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    GetProvisionedConcurrencyConfigCommandOutput
  >;

  /**
   * @see {@link GetRuntimeManagementConfigCommand}
   */
  getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetRuntimeManagementConfigCommandOutput>;

  /**
   * @see {@link InvokeCommand}
   */
  invoke(
    args: InvokeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, InvokeCommandOutput>;

  /**
   * @see {@link InvokeAsyncCommand}
   */
  invokeAsync(
    args: InvokeAsyncCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, InvokeAsyncCommandOutput>;

  /**
   * @see {@link InvokeWithResponseStreamCommand}
   */
  invokeWithResponseStream(
    args: InvokeWithResponseStreamCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, InvokeWithResponseStreamCommandOutput>;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(
    args: ListAliasesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListAliasesCommandOutput>;

  /**
   * @see {@link ListCodeSigningConfigsCommand}
   */
  listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListCodeSigningConfigsCommandOutput>;

  /**
   * @see {@link ListEventSourceMappingsCommand}
   */
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListEventSourceMappingsCommandOutput>;

  /**
   * @see {@link ListFunctionEventInvokeConfigsCommand}
   */
  listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListFunctionEventInvokeConfigsCommandOutput>;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(
    args: ListFunctionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListFunctionsCommandOutput>;

  /**
   * @see {@link ListFunctionsByCodeSigningConfigCommand}
   */
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    ListFunctionsByCodeSigningConfigCommandOutput
  >;

  /**
   * @see {@link ListFunctionUrlConfigsCommand}
   */
  listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListFunctionUrlConfigsCommandOutput>;

  /**
   * @see {@link ListLayersCommand}
   */
  listLayers(
    args: ListLayersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListLayersCommandOutput>;

  /**
   * @see {@link ListLayerVersionsCommand}
   */
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListLayerVersionsCommandOutput>;

  /**
   * @see {@link ListProvisionedConcurrencyConfigsCommand}
   */
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    ListProvisionedConcurrencyConfigsCommandOutput
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListTagsCommandOutput>;

  /**
   * @see {@link ListVersionsByFunctionCommand}
   */
  listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListVersionsByFunctionCommandOutput>;

  /**
   * @see {@link PublishLayerVersionCommand}
   */
  publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PublishLayerVersionCommandOutput>;

  /**
   * @see {@link PublishVersionCommand}
   */
  publishVersion(
    args: PublishVersionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PublishVersionCommandOutput>;

  /**
   * @see {@link PutFunctionCodeSigningConfigCommand}
   */
  putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutFunctionCodeSigningConfigCommandOutput>;

  /**
   * @see {@link PutFunctionConcurrencyCommand}
   */
  putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutFunctionConcurrencyCommandOutput>;

  /**
   * @see {@link PutFunctionEventInvokeConfigCommand}
   */
  putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutFunctionEventInvokeConfigCommandOutput>;

  /**
   * @see {@link PutProvisionedConcurrencyConfigCommand}
   */
  putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    PutProvisionedConcurrencyConfigCommandOutput
  >;

  /**
   * @see {@link PutRuntimeManagementConfigCommand}
   */
  putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutRuntimeManagementConfigCommandOutput>;

  /**
   * @see {@link RemoveLayerVersionPermissionCommand}
   */
  removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, RemoveLayerVersionPermissionCommandOutput>;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, RemovePermissionCommandOutput>;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, TagResourceCommandOutput>;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UntagResourceCommandOutput>;

  /**
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(
    args: UpdateAliasCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateAliasCommandOutput>;

  /**
   * @see {@link UpdateCodeSigningConfigCommand}
   */
  updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateCodeSigningConfigCommandOutput>;

  /**
   * @see {@link UpdateEventSourceMappingCommand}
   */
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateEventSourceMappingCommandOutput>;

  /**
   * @see {@link UpdateFunctionCodeCommand}
   */
  updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateFunctionCodeCommandOutput>;

  /**
   * @see {@link UpdateFunctionConfigurationCommand}
   */
  updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateFunctionConfigurationCommandOutput>;

  /**
   * @see {@link UpdateFunctionEventInvokeConfigCommand}
   */
  updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    UpdateFunctionEventInvokeConfigCommandOutput
  >;

  /**
   * @see {@link UpdateFunctionUrlConfigCommand}
   */
  updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UpdateFunctionUrlConfigCommandOutput>;
}

export const BaseLambdaServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(LambdaClientInstanceTag);

  return RR.toEntries(commands).reduce((acc, [command]) => {
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

export const LambdaServiceEffect = BaseLambdaServiceEffect.pipe(
  Effect.provide(LambdaClientInstanceLayer),
);

export const DefaultLambdaServiceEffect = BaseLambdaServiceEffect.pipe(
  Effect.provide(DefaultLambdaClientInstanceLayer),
);
