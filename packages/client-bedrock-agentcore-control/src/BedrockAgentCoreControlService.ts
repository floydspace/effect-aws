/**
 * @since 1.0.0
 */
import {
  AddDatasetExamplesCommand,
  type AddDatasetExamplesCommandInput,
  type AddDatasetExamplesCommandOutput,
  type BedrockAgentCoreControlClient,
  type BedrockAgentCoreControlClientConfig,
  CreateAgentRuntimeCommand,
  type CreateAgentRuntimeCommandInput,
  type CreateAgentRuntimeCommandOutput,
  CreateAgentRuntimeEndpointCommand,
  type CreateAgentRuntimeEndpointCommandInput,
  type CreateAgentRuntimeEndpointCommandOutput,
  CreateApiKeyCredentialProviderCommand,
  type CreateApiKeyCredentialProviderCommandInput,
  type CreateApiKeyCredentialProviderCommandOutput,
  CreateBrowserCommand,
  type CreateBrowserCommandInput,
  type CreateBrowserCommandOutput,
  CreateBrowserProfileCommand,
  type CreateBrowserProfileCommandInput,
  type CreateBrowserProfileCommandOutput,
  CreateCodeInterpreterCommand,
  type CreateCodeInterpreterCommandInput,
  type CreateCodeInterpreterCommandOutput,
  CreateConfigurationBundleCommand,
  type CreateConfigurationBundleCommandInput,
  type CreateConfigurationBundleCommandOutput,
  CreateDatasetCommand,
  type CreateDatasetCommandInput,
  type CreateDatasetCommandOutput,
  CreateDatasetVersionCommand,
  type CreateDatasetVersionCommandInput,
  type CreateDatasetVersionCommandOutput,
  CreateEvaluatorCommand,
  type CreateEvaluatorCommandInput,
  type CreateEvaluatorCommandOutput,
  CreateGatewayCommand,
  type CreateGatewayCommandInput,
  type CreateGatewayCommandOutput,
  CreateGatewayRuleCommand,
  type CreateGatewayRuleCommandInput,
  type CreateGatewayRuleCommandOutput,
  CreateGatewayTargetCommand,
  type CreateGatewayTargetCommandInput,
  type CreateGatewayTargetCommandOutput,
  CreateHarnessCommand,
  type CreateHarnessCommandInput,
  type CreateHarnessCommandOutput,
  CreateHarnessEndpointCommand,
  type CreateHarnessEndpointCommandInput,
  type CreateHarnessEndpointCommandOutput,
  CreateMemoryCommand,
  type CreateMemoryCommandInput,
  type CreateMemoryCommandOutput,
  CreateOauth2CredentialProviderCommand,
  type CreateOauth2CredentialProviderCommandInput,
  type CreateOauth2CredentialProviderCommandOutput,
  CreateOnlineEvaluationConfigCommand,
  type CreateOnlineEvaluationConfigCommandInput,
  type CreateOnlineEvaluationConfigCommandOutput,
  CreatePaymentConnectorCommand,
  type CreatePaymentConnectorCommandInput,
  type CreatePaymentConnectorCommandOutput,
  CreatePaymentCredentialProviderCommand,
  type CreatePaymentCredentialProviderCommandInput,
  type CreatePaymentCredentialProviderCommandOutput,
  CreatePaymentManagerCommand,
  type CreatePaymentManagerCommandInput,
  type CreatePaymentManagerCommandOutput,
  CreatePolicyCommand,
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  CreatePolicyEngineCommand,
  type CreatePolicyEngineCommandInput,
  type CreatePolicyEngineCommandOutput,
  CreateRegistryCommand,
  type CreateRegistryCommandInput,
  type CreateRegistryCommandOutput,
  CreateRegistryRecordCommand,
  type CreateRegistryRecordCommandInput,
  type CreateRegistryRecordCommandOutput,
  CreateWorkloadIdentityCommand,
  type CreateWorkloadIdentityCommandInput,
  type CreateWorkloadIdentityCommandOutput,
  DeleteAgentRuntimeCommand,
  type DeleteAgentRuntimeCommandInput,
  type DeleteAgentRuntimeCommandOutput,
  DeleteAgentRuntimeEndpointCommand,
  type DeleteAgentRuntimeEndpointCommandInput,
  type DeleteAgentRuntimeEndpointCommandOutput,
  DeleteApiKeyCredentialProviderCommand,
  type DeleteApiKeyCredentialProviderCommandInput,
  type DeleteApiKeyCredentialProviderCommandOutput,
  DeleteBrowserCommand,
  type DeleteBrowserCommandInput,
  type DeleteBrowserCommandOutput,
  DeleteBrowserProfileCommand,
  type DeleteBrowserProfileCommandInput,
  type DeleteBrowserProfileCommandOutput,
  DeleteCodeInterpreterCommand,
  type DeleteCodeInterpreterCommandInput,
  type DeleteCodeInterpreterCommandOutput,
  DeleteConfigurationBundleCommand,
  type DeleteConfigurationBundleCommandInput,
  type DeleteConfigurationBundleCommandOutput,
  DeleteDatasetCommand,
  type DeleteDatasetCommandInput,
  type DeleteDatasetCommandOutput,
  DeleteDatasetExamplesCommand,
  type DeleteDatasetExamplesCommandInput,
  type DeleteDatasetExamplesCommandOutput,
  DeleteEvaluatorCommand,
  type DeleteEvaluatorCommandInput,
  type DeleteEvaluatorCommandOutput,
  DeleteGatewayCommand,
  type DeleteGatewayCommandInput,
  type DeleteGatewayCommandOutput,
  DeleteGatewayRuleCommand,
  type DeleteGatewayRuleCommandInput,
  type DeleteGatewayRuleCommandOutput,
  DeleteGatewayTargetCommand,
  type DeleteGatewayTargetCommandInput,
  type DeleteGatewayTargetCommandOutput,
  DeleteHarnessCommand,
  type DeleteHarnessCommandInput,
  type DeleteHarnessCommandOutput,
  DeleteHarnessEndpointCommand,
  type DeleteHarnessEndpointCommandInput,
  type DeleteHarnessEndpointCommandOutput,
  DeleteMemoryCommand,
  type DeleteMemoryCommandInput,
  type DeleteMemoryCommandOutput,
  DeleteOauth2CredentialProviderCommand,
  type DeleteOauth2CredentialProviderCommandInput,
  type DeleteOauth2CredentialProviderCommandOutput,
  DeleteOnlineEvaluationConfigCommand,
  type DeleteOnlineEvaluationConfigCommandInput,
  type DeleteOnlineEvaluationConfigCommandOutput,
  DeletePaymentConnectorCommand,
  type DeletePaymentConnectorCommandInput,
  type DeletePaymentConnectorCommandOutput,
  DeletePaymentCredentialProviderCommand,
  type DeletePaymentCredentialProviderCommandInput,
  type DeletePaymentCredentialProviderCommandOutput,
  DeletePaymentManagerCommand,
  type DeletePaymentManagerCommandInput,
  type DeletePaymentManagerCommandOutput,
  DeletePolicyCommand,
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeletePolicyEngineCommand,
  type DeletePolicyEngineCommandInput,
  type DeletePolicyEngineCommandOutput,
  DeleteRegistryCommand,
  type DeleteRegistryCommandInput,
  type DeleteRegistryCommandOutput,
  DeleteRegistryRecordCommand,
  type DeleteRegistryRecordCommandInput,
  type DeleteRegistryRecordCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteWorkloadIdentityCommand,
  type DeleteWorkloadIdentityCommandInput,
  type DeleteWorkloadIdentityCommandOutput,
  GetAgentRuntimeCommand,
  type GetAgentRuntimeCommandInput,
  type GetAgentRuntimeCommandOutput,
  GetAgentRuntimeEndpointCommand,
  type GetAgentRuntimeEndpointCommandInput,
  type GetAgentRuntimeEndpointCommandOutput,
  GetApiKeyCredentialProviderCommand,
  type GetApiKeyCredentialProviderCommandInput,
  type GetApiKeyCredentialProviderCommandOutput,
  GetBrowserCommand,
  type GetBrowserCommandInput,
  type GetBrowserCommandOutput,
  GetBrowserProfileCommand,
  type GetBrowserProfileCommandInput,
  type GetBrowserProfileCommandOutput,
  GetCodeInterpreterCommand,
  type GetCodeInterpreterCommandInput,
  type GetCodeInterpreterCommandOutput,
  GetConfigurationBundleCommand,
  type GetConfigurationBundleCommandInput,
  type GetConfigurationBundleCommandOutput,
  GetConfigurationBundleVersionCommand,
  type GetConfigurationBundleVersionCommandInput,
  type GetConfigurationBundleVersionCommandOutput,
  GetDatasetCommand,
  type GetDatasetCommandInput,
  type GetDatasetCommandOutput,
  GetEvaluatorCommand,
  type GetEvaluatorCommandInput,
  type GetEvaluatorCommandOutput,
  GetGatewayCommand,
  type GetGatewayCommandInput,
  type GetGatewayCommandOutput,
  GetGatewayRuleCommand,
  type GetGatewayRuleCommandInput,
  type GetGatewayRuleCommandOutput,
  GetGatewayTargetCommand,
  type GetGatewayTargetCommandInput,
  type GetGatewayTargetCommandOutput,
  GetHarnessCommand,
  type GetHarnessCommandInput,
  type GetHarnessCommandOutput,
  GetHarnessEndpointCommand,
  type GetHarnessEndpointCommandInput,
  type GetHarnessEndpointCommandOutput,
  GetMemoryCommand,
  type GetMemoryCommandInput,
  type GetMemoryCommandOutput,
  GetOauth2CredentialProviderCommand,
  type GetOauth2CredentialProviderCommandInput,
  type GetOauth2CredentialProviderCommandOutput,
  GetOnlineEvaluationConfigCommand,
  type GetOnlineEvaluationConfigCommandInput,
  type GetOnlineEvaluationConfigCommandOutput,
  GetPaymentConnectorCommand,
  type GetPaymentConnectorCommandInput,
  type GetPaymentConnectorCommandOutput,
  GetPaymentCredentialProviderCommand,
  type GetPaymentCredentialProviderCommandInput,
  type GetPaymentCredentialProviderCommandOutput,
  GetPaymentManagerCommand,
  type GetPaymentManagerCommandInput,
  type GetPaymentManagerCommandOutput,
  GetPolicyCommand,
  type GetPolicyCommandInput,
  type GetPolicyCommandOutput,
  GetPolicyEngineCommand,
  type GetPolicyEngineCommandInput,
  type GetPolicyEngineCommandOutput,
  GetPolicyEngineSummaryCommand,
  type GetPolicyEngineSummaryCommandInput,
  type GetPolicyEngineSummaryCommandOutput,
  GetPolicyGenerationCommand,
  type GetPolicyGenerationCommandInput,
  type GetPolicyGenerationCommandOutput,
  GetPolicyGenerationSummaryCommand,
  type GetPolicyGenerationSummaryCommandInput,
  type GetPolicyGenerationSummaryCommandOutput,
  GetPolicySummaryCommand,
  type GetPolicySummaryCommandInput,
  type GetPolicySummaryCommandOutput,
  GetRegistryCommand,
  type GetRegistryCommandInput,
  type GetRegistryCommandOutput,
  GetRegistryRecordCommand,
  type GetRegistryRecordCommandInput,
  type GetRegistryRecordCommandOutput,
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetTokenVaultCommand,
  type GetTokenVaultCommandInput,
  type GetTokenVaultCommandOutput,
  GetWorkloadIdentityCommand,
  type GetWorkloadIdentityCommandInput,
  type GetWorkloadIdentityCommandOutput,
  ListAgentRuntimeEndpointsCommand,
  type ListAgentRuntimeEndpointsCommandInput,
  type ListAgentRuntimeEndpointsCommandOutput,
  ListAgentRuntimesCommand,
  type ListAgentRuntimesCommandInput,
  type ListAgentRuntimesCommandOutput,
  ListAgentRuntimeVersionsCommand,
  type ListAgentRuntimeVersionsCommandInput,
  type ListAgentRuntimeVersionsCommandOutput,
  ListApiKeyCredentialProvidersCommand,
  type ListApiKeyCredentialProvidersCommandInput,
  type ListApiKeyCredentialProvidersCommandOutput,
  ListBrowserProfilesCommand,
  type ListBrowserProfilesCommandInput,
  type ListBrowserProfilesCommandOutput,
  ListBrowsersCommand,
  type ListBrowsersCommandInput,
  type ListBrowsersCommandOutput,
  ListCodeInterpretersCommand,
  type ListCodeInterpretersCommandInput,
  type ListCodeInterpretersCommandOutput,
  ListConfigurationBundlesCommand,
  type ListConfigurationBundlesCommandInput,
  type ListConfigurationBundlesCommandOutput,
  ListConfigurationBundleVersionsCommand,
  type ListConfigurationBundleVersionsCommandInput,
  type ListConfigurationBundleVersionsCommandOutput,
  ListDatasetExamplesCommand,
  type ListDatasetExamplesCommandInput,
  type ListDatasetExamplesCommandOutput,
  ListDatasetsCommand,
  type ListDatasetsCommandInput,
  type ListDatasetsCommandOutput,
  ListDatasetVersionsCommand,
  type ListDatasetVersionsCommandInput,
  type ListDatasetVersionsCommandOutput,
  ListEvaluatorsCommand,
  type ListEvaluatorsCommandInput,
  type ListEvaluatorsCommandOutput,
  ListGatewayRulesCommand,
  type ListGatewayRulesCommandInput,
  type ListGatewayRulesCommandOutput,
  ListGatewaysCommand,
  type ListGatewaysCommandInput,
  type ListGatewaysCommandOutput,
  ListGatewayTargetsCommand,
  type ListGatewayTargetsCommandInput,
  type ListGatewayTargetsCommandOutput,
  ListHarnessEndpointsCommand,
  type ListHarnessEndpointsCommandInput,
  type ListHarnessEndpointsCommandOutput,
  ListHarnessesCommand,
  type ListHarnessesCommandInput,
  type ListHarnessesCommandOutput,
  ListHarnessVersionsCommand,
  type ListHarnessVersionsCommandInput,
  type ListHarnessVersionsCommandOutput,
  ListMemoriesCommand,
  type ListMemoriesCommandInput,
  type ListMemoriesCommandOutput,
  ListOauth2CredentialProvidersCommand,
  type ListOauth2CredentialProvidersCommandInput,
  type ListOauth2CredentialProvidersCommandOutput,
  ListOnlineEvaluationConfigsCommand,
  type ListOnlineEvaluationConfigsCommandInput,
  type ListOnlineEvaluationConfigsCommandOutput,
  ListPaymentConnectorsCommand,
  type ListPaymentConnectorsCommandInput,
  type ListPaymentConnectorsCommandOutput,
  ListPaymentCredentialProvidersCommand,
  type ListPaymentCredentialProvidersCommandInput,
  type ListPaymentCredentialProvidersCommandOutput,
  ListPaymentManagersCommand,
  type ListPaymentManagersCommandInput,
  type ListPaymentManagersCommandOutput,
  ListPoliciesCommand,
  type ListPoliciesCommandInput,
  type ListPoliciesCommandOutput,
  ListPolicyEnginesCommand,
  type ListPolicyEnginesCommandInput,
  type ListPolicyEnginesCommandOutput,
  ListPolicyEngineSummariesCommand,
  type ListPolicyEngineSummariesCommandInput,
  type ListPolicyEngineSummariesCommandOutput,
  ListPolicyGenerationAssetsCommand,
  type ListPolicyGenerationAssetsCommandInput,
  type ListPolicyGenerationAssetsCommandOutput,
  ListPolicyGenerationsCommand,
  type ListPolicyGenerationsCommandInput,
  type ListPolicyGenerationsCommandOutput,
  ListPolicyGenerationSummariesCommand,
  type ListPolicyGenerationSummariesCommandInput,
  type ListPolicyGenerationSummariesCommandOutput,
  ListPolicySummariesCommand,
  type ListPolicySummariesCommandInput,
  type ListPolicySummariesCommandOutput,
  ListRegistriesCommand,
  type ListRegistriesCommandInput,
  type ListRegistriesCommandOutput,
  ListRegistryRecordsCommand,
  type ListRegistryRecordsCommandInput,
  type ListRegistryRecordsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListWorkloadIdentitiesCommand,
  type ListWorkloadIdentitiesCommandInput,
  type ListWorkloadIdentitiesCommandOutput,
  paginateListAgentRuntimeEndpoints,
  paginateListAgentRuntimes,
  paginateListAgentRuntimeVersions,
  paginateListApiKeyCredentialProviders,
  paginateListBrowserProfiles,
  paginateListBrowsers,
  paginateListCodeInterpreters,
  paginateListConfigurationBundles,
  paginateListConfigurationBundleVersions,
  paginateListDatasetExamples,
  paginateListDatasets,
  paginateListDatasetVersions,
  paginateListEvaluators,
  paginateListGatewayRules,
  paginateListGateways,
  paginateListGatewayTargets,
  paginateListHarnessEndpoints,
  paginateListHarnesses,
  paginateListHarnessVersions,
  paginateListMemories,
  paginateListOauth2CredentialProviders,
  paginateListOnlineEvaluationConfigs,
  paginateListPaymentConnectors,
  paginateListPaymentCredentialProviders,
  paginateListPaymentManagers,
  paginateListPolicies,
  paginateListPolicyEngines,
  paginateListPolicyEngineSummaries,
  paginateListPolicyGenerationAssets,
  paginateListPolicyGenerations,
  paginateListPolicyGenerationSummaries,
  paginateListPolicySummaries,
  paginateListRegistries,
  paginateListRegistryRecords,
  paginateListWorkloadIdentities,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  SetTokenVaultCMKCommand,
  type SetTokenVaultCMKCommandInput,
  type SetTokenVaultCMKCommandOutput,
  StartPolicyGenerationCommand,
  type StartPolicyGenerationCommandInput,
  type StartPolicyGenerationCommandOutput,
  SubmitRegistryRecordForApprovalCommand,
  type SubmitRegistryRecordForApprovalCommandInput,
  type SubmitRegistryRecordForApprovalCommandOutput,
  SynchronizeGatewayTargetsCommand,
  type SynchronizeGatewayTargetsCommandInput,
  type SynchronizeGatewayTargetsCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAgentRuntimeCommand,
  type UpdateAgentRuntimeCommandInput,
  type UpdateAgentRuntimeCommandOutput,
  UpdateAgentRuntimeEndpointCommand,
  type UpdateAgentRuntimeEndpointCommandInput,
  type UpdateAgentRuntimeEndpointCommandOutput,
  UpdateApiKeyCredentialProviderCommand,
  type UpdateApiKeyCredentialProviderCommandInput,
  type UpdateApiKeyCredentialProviderCommandOutput,
  UpdateConfigurationBundleCommand,
  type UpdateConfigurationBundleCommandInput,
  type UpdateConfigurationBundleCommandOutput,
  UpdateDatasetCommand,
  type UpdateDatasetCommandInput,
  type UpdateDatasetCommandOutput,
  UpdateDatasetExamplesCommand,
  type UpdateDatasetExamplesCommandInput,
  type UpdateDatasetExamplesCommandOutput,
  UpdateEvaluatorCommand,
  type UpdateEvaluatorCommandInput,
  type UpdateEvaluatorCommandOutput,
  UpdateGatewayCommand,
  type UpdateGatewayCommandInput,
  type UpdateGatewayCommandOutput,
  UpdateGatewayRuleCommand,
  type UpdateGatewayRuleCommandInput,
  type UpdateGatewayRuleCommandOutput,
  UpdateGatewayTargetCommand,
  type UpdateGatewayTargetCommandInput,
  type UpdateGatewayTargetCommandOutput,
  UpdateHarnessCommand,
  type UpdateHarnessCommandInput,
  type UpdateHarnessCommandOutput,
  UpdateHarnessEndpointCommand,
  type UpdateHarnessEndpointCommandInput,
  type UpdateHarnessEndpointCommandOutput,
  UpdateMemoryCommand,
  type UpdateMemoryCommandInput,
  type UpdateMemoryCommandOutput,
  UpdateOauth2CredentialProviderCommand,
  type UpdateOauth2CredentialProviderCommandInput,
  type UpdateOauth2CredentialProviderCommandOutput,
  UpdateOnlineEvaluationConfigCommand,
  type UpdateOnlineEvaluationConfigCommandInput,
  type UpdateOnlineEvaluationConfigCommandOutput,
  UpdatePaymentConnectorCommand,
  type UpdatePaymentConnectorCommandInput,
  type UpdatePaymentConnectorCommandOutput,
  UpdatePaymentCredentialProviderCommand,
  type UpdatePaymentCredentialProviderCommandInput,
  type UpdatePaymentCredentialProviderCommandOutput,
  UpdatePaymentManagerCommand,
  type UpdatePaymentManagerCommandInput,
  type UpdatePaymentManagerCommandOutput,
  UpdatePolicyCommand,
  type UpdatePolicyCommandInput,
  type UpdatePolicyCommandOutput,
  UpdatePolicyEngineCommand,
  type UpdatePolicyEngineCommandInput,
  type UpdatePolicyEngineCommandOutput,
  UpdateRegistryCommand,
  type UpdateRegistryCommandInput,
  type UpdateRegistryCommandOutput,
  UpdateRegistryRecordCommand,
  type UpdateRegistryRecordCommandInput,
  type UpdateRegistryRecordCommandOutput,
  UpdateRegistryRecordStatusCommand,
  type UpdateRegistryRecordStatusCommandInput,
  type UpdateRegistryRecordStatusCommandOutput,
  UpdateWorkloadIdentityCommand,
  type UpdateWorkloadIdentityCommandInput,
  type UpdateWorkloadIdentityCommandOutput,
} from "@aws-sdk/client-bedrock-agentcore-control";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import * as Instance from "./BedrockAgentCoreControlClientInstance.js";
import * as BedrockAgentCoreControlServiceConfig from "./BedrockAgentCoreControlServiceConfig.js";
import type {
  AccessDeniedError,
  ConcurrentModificationError,
  ConflictError,
  DecryptionError,
  EncryptionError,
  InternalServerError,
  ResourceLimitExceededError,
  ResourceNotFoundError,
  SdkError,
  ServiceError,
  ServiceQuotaExceededError,
  ThrottledError,
  ThrottlingError,
  UnauthorizedError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AddDatasetExamplesCommand,
  CreateAgentRuntimeCommand,
  CreateAgentRuntimeEndpointCommand,
  CreateApiKeyCredentialProviderCommand,
  CreateBrowserCommand,
  CreateBrowserProfileCommand,
  CreateCodeInterpreterCommand,
  CreateConfigurationBundleCommand,
  CreateDatasetCommand,
  CreateDatasetVersionCommand,
  CreateEvaluatorCommand,
  CreateGatewayCommand,
  CreateGatewayRuleCommand,
  CreateGatewayTargetCommand,
  CreateHarnessCommand,
  CreateHarnessEndpointCommand,
  CreateMemoryCommand,
  CreateOauth2CredentialProviderCommand,
  CreateOnlineEvaluationConfigCommand,
  CreatePaymentConnectorCommand,
  CreatePaymentCredentialProviderCommand,
  CreatePaymentManagerCommand,
  CreatePolicyCommand,
  CreatePolicyEngineCommand,
  CreateRegistryCommand,
  CreateRegistryRecordCommand,
  CreateWorkloadIdentityCommand,
  DeleteAgentRuntimeCommand,
  DeleteAgentRuntimeEndpointCommand,
  DeleteApiKeyCredentialProviderCommand,
  DeleteBrowserCommand,
  DeleteBrowserProfileCommand,
  DeleteCodeInterpreterCommand,
  DeleteConfigurationBundleCommand,
  DeleteDatasetCommand,
  DeleteDatasetExamplesCommand,
  DeleteEvaluatorCommand,
  DeleteGatewayCommand,
  DeleteGatewayRuleCommand,
  DeleteGatewayTargetCommand,
  DeleteHarnessCommand,
  DeleteHarnessEndpointCommand,
  DeleteMemoryCommand,
  DeleteOauth2CredentialProviderCommand,
  DeleteOnlineEvaluationConfigCommand,
  DeletePaymentConnectorCommand,
  DeletePaymentCredentialProviderCommand,
  DeletePaymentManagerCommand,
  DeletePolicyCommand,
  DeletePolicyEngineCommand,
  DeleteRegistryCommand,
  DeleteRegistryRecordCommand,
  DeleteResourcePolicyCommand,
  DeleteWorkloadIdentityCommand,
  GetAgentRuntimeCommand,
  GetAgentRuntimeEndpointCommand,
  GetApiKeyCredentialProviderCommand,
  GetBrowserCommand,
  GetBrowserProfileCommand,
  GetCodeInterpreterCommand,
  GetConfigurationBundleCommand,
  GetConfigurationBundleVersionCommand,
  GetDatasetCommand,
  GetEvaluatorCommand,
  GetGatewayCommand,
  GetGatewayRuleCommand,
  GetGatewayTargetCommand,
  GetHarnessCommand,
  GetHarnessEndpointCommand,
  GetMemoryCommand,
  GetOauth2CredentialProviderCommand,
  GetOnlineEvaluationConfigCommand,
  GetPaymentConnectorCommand,
  GetPaymentCredentialProviderCommand,
  GetPaymentManagerCommand,
  GetPolicyCommand,
  GetPolicyEngineCommand,
  GetPolicyEngineSummaryCommand,
  GetPolicyGenerationCommand,
  GetPolicyGenerationSummaryCommand,
  GetPolicySummaryCommand,
  GetRegistryCommand,
  GetRegistryRecordCommand,
  GetResourcePolicyCommand,
  GetTokenVaultCommand,
  GetWorkloadIdentityCommand,
  ListAgentRuntimeEndpointsCommand,
  ListAgentRuntimeVersionsCommand,
  ListAgentRuntimesCommand,
  ListApiKeyCredentialProvidersCommand,
  ListBrowserProfilesCommand,
  ListBrowsersCommand,
  ListCodeInterpretersCommand,
  ListConfigurationBundleVersionsCommand,
  ListConfigurationBundlesCommand,
  ListDatasetExamplesCommand,
  ListDatasetVersionsCommand,
  ListDatasetsCommand,
  ListEvaluatorsCommand,
  ListGatewayRulesCommand,
  ListGatewayTargetsCommand,
  ListGatewaysCommand,
  ListHarnessEndpointsCommand,
  ListHarnessVersionsCommand,
  ListHarnessesCommand,
  ListMemoriesCommand,
  ListOauth2CredentialProvidersCommand,
  ListOnlineEvaluationConfigsCommand,
  ListPaymentConnectorsCommand,
  ListPaymentCredentialProvidersCommand,
  ListPaymentManagersCommand,
  ListPoliciesCommand,
  ListPolicyEngineSummariesCommand,
  ListPolicyEnginesCommand,
  ListPolicyGenerationAssetsCommand,
  ListPolicyGenerationSummariesCommand,
  ListPolicyGenerationsCommand,
  ListPolicySummariesCommand,
  ListRegistriesCommand,
  ListRegistryRecordsCommand,
  ListTagsForResourceCommand,
  ListWorkloadIdentitiesCommand,
  PutResourcePolicyCommand,
  SetTokenVaultCMKCommand,
  StartPolicyGenerationCommand,
  SubmitRegistryRecordForApprovalCommand,
  SynchronizeGatewayTargetsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentRuntimeCommand,
  UpdateAgentRuntimeEndpointCommand,
  UpdateApiKeyCredentialProviderCommand,
  UpdateConfigurationBundleCommand,
  UpdateDatasetCommand,
  UpdateDatasetExamplesCommand,
  UpdateEvaluatorCommand,
  UpdateGatewayCommand,
  UpdateGatewayRuleCommand,
  UpdateGatewayTargetCommand,
  UpdateHarnessCommand,
  UpdateHarnessEndpointCommand,
  UpdateMemoryCommand,
  UpdateOauth2CredentialProviderCommand,
  UpdateOnlineEvaluationConfigCommand,
  UpdatePaymentConnectorCommand,
  UpdatePaymentCredentialProviderCommand,
  UpdatePaymentManagerCommand,
  UpdatePolicyCommand,
  UpdatePolicyEngineCommand,
  UpdateRegistryCommand,
  UpdateRegistryRecordCommand,
  UpdateRegistryRecordStatusCommand,
  UpdateWorkloadIdentityCommand,
};

const paginators = {
  paginateListAgentRuntimeEndpoints,
  paginateListAgentRuntimeVersions,
  paginateListAgentRuntimes,
  paginateListApiKeyCredentialProviders,
  paginateListBrowserProfiles,
  paginateListBrowsers,
  paginateListCodeInterpreters,
  paginateListConfigurationBundleVersions,
  paginateListConfigurationBundles,
  paginateListDatasetExamples,
  paginateListDatasetVersions,
  paginateListDatasets,
  paginateListEvaluators,
  paginateListGatewayRules,
  paginateListGatewayTargets,
  paginateListGateways,
  paginateListHarnessEndpoints,
  paginateListHarnessVersions,
  paginateListHarnesses,
  paginateListMemories,
  paginateListOauth2CredentialProviders,
  paginateListOnlineEvaluationConfigs,
  paginateListPaymentConnectors,
  paginateListPaymentCredentialProviders,
  paginateListPaymentManagers,
  paginateListPolicies,
  paginateListPolicyEngineSummaries,
  paginateListPolicyEngines,
  paginateListPolicyGenerationAssets,
  paginateListPolicyGenerationSummaries,
  paginateListPolicyGenerations,
  paginateListPolicySummaries,
  paginateListRegistries,
  paginateListRegistryRecords,
  paginateListWorkloadIdentities,
};

export interface BedrockAgentCoreControlService$ {
  /**
   * @see {@link AddDatasetExamplesCommand}
   */
  addDatasetExamples(
    args: AddDatasetExamplesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddDatasetExamplesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateAgentRuntimeCommand}
   */
  createAgentRuntime(
    args: CreateAgentRuntimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAgentRuntimeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateAgentRuntimeEndpointCommand}
   */
  createAgentRuntimeEndpoint(
    args: CreateAgentRuntimeEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAgentRuntimeEndpointCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateApiKeyCredentialProviderCommand}
   */
  createApiKeyCredentialProvider(
    args: CreateApiKeyCredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateApiKeyCredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | DecryptionError
    | EncryptionError
    | InternalServerError
    | ResourceLimitExceededError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link CreateBrowserCommand}
   */
  createBrowser(
    args: CreateBrowserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBrowserCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateBrowserProfileCommand}
   */
  createBrowserProfile(
    args: CreateBrowserProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBrowserProfileCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateCodeInterpreterCommand}
   */
  createCodeInterpreter(
    args: CreateCodeInterpreterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCodeInterpreterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateConfigurationBundleCommand}
   */
  createConfigurationBundle(
    args: CreateConfigurationBundleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConfigurationBundleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(
    args: CreateDatasetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDatasetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateDatasetVersionCommand}
   */
  createDatasetVersion(
    args: CreateDatasetVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDatasetVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateEvaluatorCommand}
   */
  createEvaluator(
    args: CreateEvaluatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEvaluatorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(
    args: CreateGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGatewayCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateGatewayRuleCommand}
   */
  createGatewayRule(
    args: CreateGatewayRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGatewayRuleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateGatewayTargetCommand}
   */
  createGatewayTarget(
    args: CreateGatewayTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGatewayTargetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateHarnessCommand}
   */
  createHarness(
    args: CreateHarnessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateHarnessCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateHarnessEndpointCommand}
   */
  createHarnessEndpoint(
    args: CreateHarnessEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateHarnessEndpointCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateMemoryCommand}
   */
  createMemory(
    args: CreateMemoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateMemoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link CreateOauth2CredentialProviderCommand}
   */
  createOauth2CredentialProvider(
    args: CreateOauth2CredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOauth2CredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | DecryptionError
    | EncryptionError
    | InternalServerError
    | ResourceLimitExceededError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link CreateOnlineEvaluationConfigCommand}
   */
  createOnlineEvaluationConfig(
    args: CreateOnlineEvaluationConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOnlineEvaluationConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreatePaymentConnectorCommand}
   */
  createPaymentConnector(
    args: CreatePaymentConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePaymentConnectorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreatePaymentCredentialProviderCommand}
   */
  createPaymentCredentialProvider(
    args: CreatePaymentCredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePaymentCredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | DecryptionError
    | EncryptionError
    | InternalServerError
    | ResourceLimitExceededError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link CreatePaymentManagerCommand}
   */
  createPaymentManager(
    args: CreatePaymentManagerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePaymentManagerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreatePolicyEngineCommand}
   */
  createPolicyEngine(
    args: CreatePolicyEngineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyEngineCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateRegistryCommand}
   */
  createRegistry(
    args: CreateRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRegistryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateRegistryRecordCommand}
   */
  createRegistryRecord(
    args: CreateRegistryRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRegistryRecordCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateWorkloadIdentityCommand}
   */
  createWorkloadIdentity(
    args: CreateWorkloadIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateWorkloadIdentityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAgentRuntimeCommand}
   */
  deleteAgentRuntime(
    args: DeleteAgentRuntimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAgentRuntimeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteAgentRuntimeEndpointCommand}
   */
  deleteAgentRuntimeEndpoint(
    args: DeleteAgentRuntimeEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAgentRuntimeEndpointCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteApiKeyCredentialProviderCommand}
   */
  deleteApiKeyCredentialProvider(
    args: DeleteApiKeyCredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApiKeyCredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link DeleteBrowserCommand}
   */
  deleteBrowser(
    args: DeleteBrowserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBrowserCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteBrowserProfileCommand}
   */
  deleteBrowserProfile(
    args: DeleteBrowserProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBrowserProfileCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteCodeInterpreterCommand}
   */
  deleteCodeInterpreter(
    args: DeleteCodeInterpreterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCodeInterpreterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteConfigurationBundleCommand}
   */
  deleteConfigurationBundle(
    args: DeleteConfigurationBundleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConfigurationBundleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDatasetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDatasetExamplesCommand}
   */
  deleteDatasetExamples(
    args: DeleteDatasetExamplesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDatasetExamplesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteEvaluatorCommand}
   */
  deleteEvaluator(
    args: DeleteEvaluatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEvaluatorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGatewayCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteGatewayRuleCommand}
   */
  deleteGatewayRule(
    args: DeleteGatewayRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGatewayRuleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteGatewayTargetCommand}
   */
  deleteGatewayTarget(
    args: DeleteGatewayTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGatewayTargetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteHarnessCommand}
   */
  deleteHarness(
    args: DeleteHarnessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteHarnessCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteHarnessEndpointCommand}
   */
  deleteHarnessEndpoint(
    args: DeleteHarnessEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteHarnessEndpointCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteMemoryCommand}
   */
  deleteMemory(
    args: DeleteMemoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMemoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | ResourceNotFoundError
    | ServiceError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link DeleteOauth2CredentialProviderCommand}
   */
  deleteOauth2CredentialProvider(
    args: DeleteOauth2CredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOauth2CredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link DeleteOnlineEvaluationConfigCommand}
   */
  deleteOnlineEvaluationConfig(
    args: DeleteOnlineEvaluationConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOnlineEvaluationConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeletePaymentConnectorCommand}
   */
  deletePaymentConnector(
    args: DeletePaymentConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePaymentConnectorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DeletePaymentCredentialProviderCommand}
   */
  deletePaymentCredentialProvider(
    args: DeletePaymentCredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePaymentCredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link DeletePaymentManagerCommand}
   */
  deletePaymentManager(
    args: DeletePaymentManagerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePaymentManagerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeletePolicyEngineCommand}
   */
  deletePolicyEngine(
    args: DeletePolicyEngineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePolicyEngineCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteRegistryCommand}
   */
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRegistryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteRegistryRecordCommand}
   */
  deleteRegistryRecord(
    args: DeleteRegistryRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRegistryRecordCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
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
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteWorkloadIdentityCommand}
   */
  deleteWorkloadIdentity(
    args: DeleteWorkloadIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteWorkloadIdentityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentRuntimeCommand}
   */
  getAgentRuntime(
    args: GetAgentRuntimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentRuntimeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentRuntimeEndpointCommand}
   */
  getAgentRuntimeEndpoint(
    args: GetAgentRuntimeEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentRuntimeEndpointCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetApiKeyCredentialProviderCommand}
   */
  getApiKeyCredentialProvider(
    args: GetApiKeyCredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApiKeyCredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | DecryptionError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetBrowserCommand}
   */
  getBrowser(
    args: GetBrowserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBrowserCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
  >;

  /**
   * @see {@link GetBrowserProfileCommand}
   */
  getBrowserProfile(
    args: GetBrowserProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBrowserProfileCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetCodeInterpreterCommand}
   */
  getCodeInterpreter(
    args: GetCodeInterpreterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCodeInterpreterCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
  >;

  /**
   * @see {@link GetConfigurationBundleCommand}
   */
  getConfigurationBundle(
    args: GetConfigurationBundleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConfigurationBundleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetConfigurationBundleVersionCommand}
   */
  getConfigurationBundleVersion(
    args: GetConfigurationBundleVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConfigurationBundleVersionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetDatasetCommand}
   */
  getDataset(
    args: GetDatasetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDatasetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetEvaluatorCommand}
   */
  getEvaluator(
    args: GetEvaluatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEvaluatorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetGatewayCommand}
   */
  getGateway(
    args: GetGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGatewayCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetGatewayRuleCommand}
   */
  getGatewayRule(
    args: GetGatewayRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGatewayRuleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetGatewayTargetCommand}
   */
  getGatewayTarget(
    args: GetGatewayTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGatewayTargetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetHarnessCommand}
   */
  getHarness(
    args: GetHarnessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetHarnessCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetHarnessEndpointCommand}
   */
  getHarnessEndpoint(
    args: GetHarnessEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetHarnessEndpointCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetMemoryCommand}
   */
  getMemory(
    args: GetMemoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMemoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link GetOauth2CredentialProviderCommand}
   */
  getOauth2CredentialProvider(
    args: GetOauth2CredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOauth2CredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | DecryptionError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetOnlineEvaluationConfigCommand}
   */
  getOnlineEvaluationConfig(
    args: GetOnlineEvaluationConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOnlineEvaluationConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPaymentConnectorCommand}
   */
  getPaymentConnector(
    args: GetPaymentConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPaymentConnectorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPaymentCredentialProviderCommand}
   */
  getPaymentCredentialProvider(
    args: GetPaymentCredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPaymentCredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | DecryptionError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetPaymentManagerCommand}
   */
  getPaymentManager(
    args: GetPaymentManagerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPaymentManagerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
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
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPolicyEngineCommand}
   */
  getPolicyEngine(
    args: GetPolicyEngineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyEngineCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPolicyEngineSummaryCommand}
   */
  getPolicyEngineSummary(
    args: GetPolicyEngineSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyEngineSummaryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPolicyGenerationCommand}
   */
  getPolicyGeneration(
    args: GetPolicyGenerationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyGenerationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPolicyGenerationSummaryCommand}
   */
  getPolicyGenerationSummary(
    args: GetPolicyGenerationSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyGenerationSummaryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPolicySummaryCommand}
   */
  getPolicySummary(
    args: GetPolicySummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicySummaryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetRegistryCommand}
   */
  getRegistry(
    args: GetRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRegistryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetRegistryRecordCommand}
   */
  getRegistryRecord(
    args: GetRegistryRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRegistryRecordCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetTokenVaultCommand}
   */
  getTokenVault(
    args: GetTokenVaultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTokenVaultCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetWorkloadIdentityCommand}
   */
  getWorkloadIdentity(
    args: GetWorkloadIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkloadIdentityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link ListAgentRuntimeEndpointsCommand}
   */
  listAgentRuntimeEndpoints(
    args: ListAgentRuntimeEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentRuntimeEndpointsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listAgentRuntimeEndpointsStream(
    args: ListAgentRuntimeEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentRuntimeEndpointsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListAgentRuntimeVersionsCommand}
   */
  listAgentRuntimeVersions(
    args: ListAgentRuntimeVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentRuntimeVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listAgentRuntimeVersionsStream(
    args: ListAgentRuntimeVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentRuntimeVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAgentRuntimesCommand}
   */
  listAgentRuntimes(
    args: ListAgentRuntimesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentRuntimesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listAgentRuntimesStream(
    args: ListAgentRuntimesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentRuntimesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListApiKeyCredentialProvidersCommand}
   */
  listApiKeyCredentialProviders(
    args: ListApiKeyCredentialProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListApiKeyCredentialProvidersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  listApiKeyCredentialProvidersStream(
    args: ListApiKeyCredentialProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListApiKeyCredentialProvidersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link ListBrowserProfilesCommand}
   */
  listBrowserProfiles(
    args: ListBrowserProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBrowserProfilesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listBrowserProfilesStream(
    args: ListBrowserProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListBrowserProfilesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListBrowsersCommand}
   */
  listBrowsers(
    args: ListBrowsersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBrowsersCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listBrowsersStream(
    args: ListBrowsersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListBrowsersCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListCodeInterpretersCommand}
   */
  listCodeInterpreters(
    args: ListCodeInterpretersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCodeInterpretersCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listCodeInterpretersStream(
    args: ListCodeInterpretersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListCodeInterpretersCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListConfigurationBundleVersionsCommand}
   */
  listConfigurationBundleVersions(
    args: ListConfigurationBundleVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationBundleVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listConfigurationBundleVersionsStream(
    args: ListConfigurationBundleVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListConfigurationBundleVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListConfigurationBundlesCommand}
   */
  listConfigurationBundles(
    args: ListConfigurationBundlesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationBundlesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listConfigurationBundlesStream(
    args: ListConfigurationBundlesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListConfigurationBundlesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListDatasetExamplesCommand}
   */
  listDatasetExamples(
    args: ListDatasetExamplesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDatasetExamplesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listDatasetExamplesStream(
    args: ListDatasetExamplesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDatasetExamplesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListDatasetVersionsCommand}
   */
  listDatasetVersions(
    args: ListDatasetVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDatasetVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listDatasetVersionsStream(
    args: ListDatasetVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDatasetVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(
    args: ListDatasetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDatasetsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listDatasetsStream(
    args: ListDatasetsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDatasetsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListEvaluatorsCommand}
   */
  listEvaluators(
    args: ListEvaluatorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEvaluatorsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listEvaluatorsStream(
    args: ListEvaluatorsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListEvaluatorsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListGatewayRulesCommand}
   */
  listGatewayRules(
    args: ListGatewayRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGatewayRulesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listGatewayRulesStream(
    args: ListGatewayRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListGatewayRulesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListGatewayTargetsCommand}
   */
  listGatewayTargets(
    args: ListGatewayTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGatewayTargetsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listGatewayTargetsStream(
    args: ListGatewayTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListGatewayTargetsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(
    args: ListGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListGatewaysCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listGatewaysStream(
    args: ListGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListGatewaysCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListHarnessEndpointsCommand}
   */
  listHarnessEndpoints(
    args: ListHarnessEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListHarnessEndpointsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listHarnessEndpointsStream(
    args: ListHarnessEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListHarnessEndpointsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListHarnessVersionsCommand}
   */
  listHarnessVersions(
    args: ListHarnessVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListHarnessVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listHarnessVersionsStream(
    args: ListHarnessVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListHarnessVersionsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListHarnessesCommand}
   */
  listHarnesses(
    args: ListHarnessesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListHarnessesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listHarnessesStream(
    args: ListHarnessesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListHarnessesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListMemoriesCommand}
   */
  listMemories(
    args: ListMemoriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMemoriesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ThrottledError
    | ValidationError
  >;

  listMemoriesStream(
    args: ListMemoriesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListMemoriesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link ListOauth2CredentialProvidersCommand}
   */
  listOauth2CredentialProviders(
    args: ListOauth2CredentialProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOauth2CredentialProvidersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  listOauth2CredentialProvidersStream(
    args: ListOauth2CredentialProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListOauth2CredentialProvidersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link ListOnlineEvaluationConfigsCommand}
   */
  listOnlineEvaluationConfigs(
    args: ListOnlineEvaluationConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOnlineEvaluationConfigsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listOnlineEvaluationConfigsStream(
    args: ListOnlineEvaluationConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListOnlineEvaluationConfigsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPaymentConnectorsCommand}
   */
  listPaymentConnectors(
    args: ListPaymentConnectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPaymentConnectorsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listPaymentConnectorsStream(
    args: ListPaymentConnectorsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPaymentConnectorsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPaymentCredentialProvidersCommand}
   */
  listPaymentCredentialProviders(
    args: ListPaymentCredentialProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPaymentCredentialProvidersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  listPaymentCredentialProvidersStream(
    args: ListPaymentCredentialProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPaymentCredentialProvidersCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link ListPaymentManagersCommand}
   */
  listPaymentManagers(
    args: ListPaymentManagersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPaymentManagersCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listPaymentManagersStream(
    args: ListPaymentManagersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPaymentManagersCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPoliciesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listPoliciesStream(
    args: ListPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPoliciesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListPolicyEngineSummariesCommand}
   */
  listPolicyEngineSummaries(
    args: ListPolicyEngineSummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyEngineSummariesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listPolicyEngineSummariesStream(
    args: ListPolicyEngineSummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPolicyEngineSummariesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPolicyEnginesCommand}
   */
  listPolicyEngines(
    args: ListPolicyEnginesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyEnginesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listPolicyEnginesStream(
    args: ListPolicyEnginesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPolicyEnginesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPolicyGenerationAssetsCommand}
   */
  listPolicyGenerationAssets(
    args: ListPolicyGenerationAssetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyGenerationAssetsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listPolicyGenerationAssetsStream(
    args: ListPolicyGenerationAssetsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPolicyGenerationAssetsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListPolicyGenerationSummariesCommand}
   */
  listPolicyGenerationSummaries(
    args: ListPolicyGenerationSummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyGenerationSummariesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listPolicyGenerationSummariesStream(
    args: ListPolicyGenerationSummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPolicyGenerationSummariesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListPolicyGenerationsCommand}
   */
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyGenerationsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listPolicyGenerationsStream(
    args: ListPolicyGenerationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPolicyGenerationsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListPolicySummariesCommand}
   */
  listPolicySummaries(
    args: ListPolicySummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicySummariesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listPolicySummariesStream(
    args: ListPolicySummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPolicySummariesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListRegistriesCommand}
   */
  listRegistries(
    args: ListRegistriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRegistriesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listRegistriesStream(
    args: ListRegistriesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListRegistriesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListRegistryRecordsCommand}
   */
  listRegistryRecords(
    args: ListRegistryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRegistryRecordsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listRegistryRecordsStream(
    args: ListRegistryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListRegistryRecordsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListWorkloadIdentitiesCommand}
   */
  listWorkloadIdentities(
    args: ListWorkloadIdentitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListWorkloadIdentitiesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  listWorkloadIdentitiesStream(
    args: ListWorkloadIdentitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListWorkloadIdentitiesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
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
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link SetTokenVaultCMKCommand}
   */
  setTokenVaultCMK(
    args: SetTokenVaultCMKCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetTokenVaultCMKCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link StartPolicyGenerationCommand}
   */
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartPolicyGenerationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link SubmitRegistryRecordForApprovalCommand}
   */
  submitRegistryRecordForApproval(
    args: SubmitRegistryRecordForApprovalCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubmitRegistryRecordForApprovalCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link SynchronizeGatewayTargetsCommand}
   */
  synchronizeGatewayTargets(
    args: SynchronizeGatewayTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SynchronizeGatewayTargetsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
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
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
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
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateAgentRuntimeCommand}
   */
  updateAgentRuntime(
    args: UpdateAgentRuntimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAgentRuntimeCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateAgentRuntimeEndpointCommand}
   */
  updateAgentRuntimeEndpoint(
    args: UpdateAgentRuntimeEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAgentRuntimeEndpointCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateApiKeyCredentialProviderCommand}
   */
  updateApiKeyCredentialProvider(
    args: UpdateApiKeyCredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApiKeyCredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | DecryptionError
    | EncryptionError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link UpdateConfigurationBundleCommand}
   */
  updateConfigurationBundle(
    args: UpdateConfigurationBundleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConfigurationBundleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDatasetCommand}
   */
  updateDataset(
    args: UpdateDatasetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDatasetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDatasetExamplesCommand}
   */
  updateDatasetExamples(
    args: UpdateDatasetExamplesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDatasetExamplesCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateEvaluatorCommand}
   */
  updateEvaluator(
    args: UpdateEvaluatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEvaluatorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateGatewayCommand}
   */
  updateGateway(
    args: UpdateGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGatewayCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateGatewayRuleCommand}
   */
  updateGatewayRule(
    args: UpdateGatewayRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGatewayRuleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateGatewayTargetCommand}
   */
  updateGatewayTarget(
    args: UpdateGatewayTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGatewayTargetCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateHarnessCommand}
   */
  updateHarness(
    args: UpdateHarnessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateHarnessCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateHarnessEndpointCommand}
   */
  updateHarnessEndpoint(
    args: UpdateHarnessEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateHarnessEndpointCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateMemoryCommand}
   */
  updateMemory(
    args: UpdateMemoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMemoryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link UpdateOauth2CredentialProviderCommand}
   */
  updateOauth2CredentialProvider(
    args: UpdateOauth2CredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOauth2CredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | DecryptionError
    | EncryptionError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link UpdateOnlineEvaluationConfigCommand}
   */
  updateOnlineEvaluationConfig(
    args: UpdateOnlineEvaluationConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOnlineEvaluationConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePaymentConnectorCommand}
   */
  updatePaymentConnector(
    args: UpdatePaymentConnectorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePaymentConnectorCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePaymentCredentialProviderCommand}
   */
  updatePaymentCredentialProvider(
    args: UpdatePaymentCredentialProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePaymentCredentialProviderCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | DecryptionError
    | EncryptionError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePaymentManagerCommand}
   */
  updatePaymentManager(
    args: UpdatePaymentManagerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePaymentManagerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePolicyCommand}
   */
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePolicyEngineCommand}
   */
  updatePolicyEngine(
    args: UpdatePolicyEngineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePolicyEngineCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateRegistryCommand}
   */
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRegistryCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateRegistryRecordCommand}
   */
  updateRegistryRecord(
    args: UpdateRegistryRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRegistryRecordCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateRegistryRecordStatusCommand}
   */
  updateRegistryRecordStatus(
    args: UpdateRegistryRecordStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRegistryRecordStatusCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateWorkloadIdentityCommand}
   */
  updateWorkloadIdentity(
    args: UpdateWorkloadIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateWorkloadIdentityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeBedrockAgentCoreControlService = Effect.gen(function*() {
  const client = yield* Instance.BedrockAgentCoreControlClientInstance;

  return yield* Service.fromClientAndCommands<BedrockAgentCoreControlService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: BedrockAgentCoreControlServiceConfig.toBedrockAgentCoreControlClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class BedrockAgentCoreControlService extends Context.Service<
  BedrockAgentCoreControlService,
  BedrockAgentCoreControlService$
>()("@effect-aws/client-bedrock-agentcore-control/BedrockAgentCoreControlService") {
  static readonly defaultLayer = Layer.effect(this, makeBedrockAgentCoreControlService).pipe(
    Layer.provide(Instance.layer),
  );
  static readonly layer = (config: BedrockAgentCoreControlService.Config) =>
    Layer.effect(this, makeBedrockAgentCoreControlService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(BedrockAgentCoreControlServiceConfig.setBedrockAgentCoreControlServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: BedrockAgentCoreControlClientConfig) => BedrockAgentCoreControlClient,
  ) =>
    Layer.effect(this, makeBedrockAgentCoreControlService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.BedrockAgentCoreControlClientInstance,
          Effect.map(BedrockAgentCoreControlServiceConfig.toBedrockAgentCoreControlClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace BedrockAgentCoreControlService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<BedrockAgentCoreControlClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = BedrockAgentCoreControlService$;
}
