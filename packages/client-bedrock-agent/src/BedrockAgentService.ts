/**
 * @since 1.0.0
 */
import {
  AssociateAgentCollaboratorCommand,
  type AssociateAgentCollaboratorCommandInput,
  type AssociateAgentCollaboratorCommandOutput,
  AssociateAgentKnowledgeBaseCommand,
  type AssociateAgentKnowledgeBaseCommandInput,
  type AssociateAgentKnowledgeBaseCommandOutput,
  type BedrockAgentClient,
  type BedrockAgentClientConfig,
  CreateAgentActionGroupCommand,
  type CreateAgentActionGroupCommandInput,
  type CreateAgentActionGroupCommandOutput,
  CreateAgentAliasCommand,
  type CreateAgentAliasCommandInput,
  type CreateAgentAliasCommandOutput,
  CreateAgentCommand,
  type CreateAgentCommandInput,
  type CreateAgentCommandOutput,
  CreateDataSourceCommand,
  type CreateDataSourceCommandInput,
  type CreateDataSourceCommandOutput,
  CreateFlowAliasCommand,
  type CreateFlowAliasCommandInput,
  type CreateFlowAliasCommandOutput,
  CreateFlowCommand,
  type CreateFlowCommandInput,
  type CreateFlowCommandOutput,
  CreateFlowVersionCommand,
  type CreateFlowVersionCommandInput,
  type CreateFlowVersionCommandOutput,
  CreateKnowledgeBaseCommand,
  type CreateKnowledgeBaseCommandInput,
  type CreateKnowledgeBaseCommandOutput,
  CreatePromptCommand,
  type CreatePromptCommandInput,
  type CreatePromptCommandOutput,
  CreatePromptVersionCommand,
  type CreatePromptVersionCommandInput,
  type CreatePromptVersionCommandOutput,
  DeleteAgentActionGroupCommand,
  type DeleteAgentActionGroupCommandInput,
  type DeleteAgentActionGroupCommandOutput,
  DeleteAgentAliasCommand,
  type DeleteAgentAliasCommandInput,
  type DeleteAgentAliasCommandOutput,
  DeleteAgentCommand,
  type DeleteAgentCommandInput,
  type DeleteAgentCommandOutput,
  DeleteAgentVersionCommand,
  type DeleteAgentVersionCommandInput,
  type DeleteAgentVersionCommandOutput,
  DeleteDataSourceCommand,
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteFlowAliasCommand,
  type DeleteFlowAliasCommandInput,
  type DeleteFlowAliasCommandOutput,
  DeleteFlowCommand,
  type DeleteFlowCommandInput,
  type DeleteFlowCommandOutput,
  DeleteFlowVersionCommand,
  type DeleteFlowVersionCommandInput,
  type DeleteFlowVersionCommandOutput,
  DeleteKnowledgeBaseCommand,
  type DeleteKnowledgeBaseCommandInput,
  type DeleteKnowledgeBaseCommandOutput,
  DeleteKnowledgeBaseDocumentsCommand,
  type DeleteKnowledgeBaseDocumentsCommandInput,
  type DeleteKnowledgeBaseDocumentsCommandOutput,
  DeletePromptCommand,
  type DeletePromptCommandInput,
  type DeletePromptCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DisassociateAgentCollaboratorCommand,
  type DisassociateAgentCollaboratorCommandInput,
  type DisassociateAgentCollaboratorCommandOutput,
  DisassociateAgentKnowledgeBaseCommand,
  type DisassociateAgentKnowledgeBaseCommandInput,
  type DisassociateAgentKnowledgeBaseCommandOutput,
  GetAgentActionGroupCommand,
  type GetAgentActionGroupCommandInput,
  type GetAgentActionGroupCommandOutput,
  GetAgentAliasCommand,
  type GetAgentAliasCommandInput,
  type GetAgentAliasCommandOutput,
  GetAgentCollaboratorCommand,
  type GetAgentCollaboratorCommandInput,
  type GetAgentCollaboratorCommandOutput,
  GetAgentCommand,
  type GetAgentCommandInput,
  type GetAgentCommandOutput,
  GetAgentKnowledgeBaseCommand,
  type GetAgentKnowledgeBaseCommandInput,
  type GetAgentKnowledgeBaseCommandOutput,
  GetAgentVersionCommand,
  type GetAgentVersionCommandInput,
  type GetAgentVersionCommandOutput,
  GetDataSourceCommand,
  type GetDataSourceCommandInput,
  type GetDataSourceCommandOutput,
  GetFlowAliasCommand,
  type GetFlowAliasCommandInput,
  type GetFlowAliasCommandOutput,
  GetFlowCommand,
  type GetFlowCommandInput,
  type GetFlowCommandOutput,
  GetFlowVersionCommand,
  type GetFlowVersionCommandInput,
  type GetFlowVersionCommandOutput,
  GetIngestionJobCommand,
  type GetIngestionJobCommandInput,
  type GetIngestionJobCommandOutput,
  GetKnowledgeBaseCommand,
  type GetKnowledgeBaseCommandInput,
  type GetKnowledgeBaseCommandOutput,
  GetKnowledgeBaseDocumentsCommand,
  type GetKnowledgeBaseDocumentsCommandInput,
  type GetKnowledgeBaseDocumentsCommandOutput,
  GetPromptCommand,
  type GetPromptCommandInput,
  type GetPromptCommandOutput,
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  IngestKnowledgeBaseDocumentsCommand,
  type IngestKnowledgeBaseDocumentsCommandInput,
  type IngestKnowledgeBaseDocumentsCommandOutput,
  ListAgentActionGroupsCommand,
  type ListAgentActionGroupsCommandInput,
  type ListAgentActionGroupsCommandOutput,
  ListAgentAliasesCommand,
  type ListAgentAliasesCommandInput,
  type ListAgentAliasesCommandOutput,
  ListAgentCollaboratorsCommand,
  type ListAgentCollaboratorsCommandInput,
  type ListAgentCollaboratorsCommandOutput,
  ListAgentKnowledgeBasesCommand,
  type ListAgentKnowledgeBasesCommandInput,
  type ListAgentKnowledgeBasesCommandOutput,
  ListAgentsCommand,
  type ListAgentsCommandInput,
  type ListAgentsCommandOutput,
  ListAgentVersionsCommand,
  type ListAgentVersionsCommandInput,
  type ListAgentVersionsCommandOutput,
  ListDataSourcesCommand,
  type ListDataSourcesCommandInput,
  type ListDataSourcesCommandOutput,
  ListFlowAliasesCommand,
  type ListFlowAliasesCommandInput,
  type ListFlowAliasesCommandOutput,
  ListFlowsCommand,
  type ListFlowsCommandInput,
  type ListFlowsCommandOutput,
  ListFlowVersionsCommand,
  type ListFlowVersionsCommandInput,
  type ListFlowVersionsCommandOutput,
  ListIngestionJobsCommand,
  type ListIngestionJobsCommandInput,
  type ListIngestionJobsCommandOutput,
  ListKnowledgeBaseDocumentsCommand,
  type ListKnowledgeBaseDocumentsCommandInput,
  type ListKnowledgeBaseDocumentsCommandOutput,
  ListKnowledgeBasesCommand,
  type ListKnowledgeBasesCommandInput,
  type ListKnowledgeBasesCommandOutput,
  ListPromptsCommand,
  type ListPromptsCommandInput,
  type ListPromptsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  paginateListAgentActionGroups,
  paginateListAgentAliases,
  paginateListAgentCollaborators,
  paginateListAgentKnowledgeBases,
  paginateListAgents,
  paginateListAgentVersions,
  paginateListDataSources,
  paginateListFlowAliases,
  paginateListFlows,
  paginateListFlowVersions,
  paginateListIngestionJobs,
  paginateListKnowledgeBaseDocuments,
  paginateListKnowledgeBases,
  paginateListPrompts,
  PrepareAgentCommand,
  type PrepareAgentCommandInput,
  type PrepareAgentCommandOutput,
  PrepareFlowCommand,
  type PrepareFlowCommandInput,
  type PrepareFlowCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  StartIngestionJobCommand,
  type StartIngestionJobCommandInput,
  type StartIngestionJobCommandOutput,
  StopIngestionJobCommand,
  type StopIngestionJobCommandInput,
  type StopIngestionJobCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAgentActionGroupCommand,
  type UpdateAgentActionGroupCommandInput,
  type UpdateAgentActionGroupCommandOutput,
  UpdateAgentAliasCommand,
  type UpdateAgentAliasCommandInput,
  type UpdateAgentAliasCommandOutput,
  UpdateAgentCollaboratorCommand,
  type UpdateAgentCollaboratorCommandInput,
  type UpdateAgentCollaboratorCommandOutput,
  UpdateAgentCommand,
  type UpdateAgentCommandInput,
  type UpdateAgentCommandOutput,
  UpdateAgentKnowledgeBaseCommand,
  type UpdateAgentKnowledgeBaseCommandInput,
  type UpdateAgentKnowledgeBaseCommandOutput,
  UpdateDataSourceCommand,
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateFlowAliasCommand,
  type UpdateFlowAliasCommandInput,
  type UpdateFlowAliasCommandOutput,
  UpdateFlowCommand,
  type UpdateFlowCommandInput,
  type UpdateFlowCommandOutput,
  UpdateKnowledgeBaseCommand,
  type UpdateKnowledgeBaseCommandInput,
  type UpdateKnowledgeBaseCommandOutput,
  UpdatePromptCommand,
  type UpdatePromptCommandInput,
  type UpdatePromptCommandOutput,
  ValidateFlowDefinitionCommand,
  type ValidateFlowDefinitionCommandInput,
  type ValidateFlowDefinitionCommandOutput,
} from "@aws-sdk/client-bedrock-agent";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import * as Instance from "./BedrockAgentClientInstance.js";
import * as BedrockAgentServiceConfig from "./BedrockAgentServiceConfig.js";
import type {
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  SdkError,
  ServiceQuotaExceededError,
  ThrottlingError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AssociateAgentCollaboratorCommand,
  AssociateAgentKnowledgeBaseCommand,
  CreateAgentCommand,
  CreateAgentActionGroupCommand,
  CreateAgentAliasCommand,
  CreateDataSourceCommand,
  CreateFlowCommand,
  CreateFlowAliasCommand,
  CreateFlowVersionCommand,
  CreateKnowledgeBaseCommand,
  CreatePromptCommand,
  CreatePromptVersionCommand,
  DeleteAgentCommand,
  DeleteAgentActionGroupCommand,
  DeleteAgentAliasCommand,
  DeleteAgentVersionCommand,
  DeleteDataSourceCommand,
  DeleteFlowCommand,
  DeleteFlowAliasCommand,
  DeleteFlowVersionCommand,
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseDocumentsCommand,
  DeletePromptCommand,
  DeleteResourcePolicyCommand,
  DisassociateAgentCollaboratorCommand,
  DisassociateAgentKnowledgeBaseCommand,
  GetAgentCommand,
  GetAgentActionGroupCommand,
  GetAgentAliasCommand,
  GetAgentCollaboratorCommand,
  GetAgentKnowledgeBaseCommand,
  GetAgentVersionCommand,
  GetDataSourceCommand,
  GetFlowCommand,
  GetFlowAliasCommand,
  GetFlowVersionCommand,
  GetIngestionJobCommand,
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseDocumentsCommand,
  GetPromptCommand,
  GetResourcePolicyCommand,
  IngestKnowledgeBaseDocumentsCommand,
  ListAgentActionGroupsCommand,
  ListAgentAliasesCommand,
  ListAgentCollaboratorsCommand,
  ListAgentKnowledgeBasesCommand,
  ListAgentVersionsCommand,
  ListAgentsCommand,
  ListDataSourcesCommand,
  ListFlowAliasesCommand,
  ListFlowVersionsCommand,
  ListFlowsCommand,
  ListIngestionJobsCommand,
  ListKnowledgeBaseDocumentsCommand,
  ListKnowledgeBasesCommand,
  ListPromptsCommand,
  ListTagsForResourceCommand,
  PrepareAgentCommand,
  PrepareFlowCommand,
  PutResourcePolicyCommand,
  StartIngestionJobCommand,
  StopIngestionJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentCommand,
  UpdateAgentActionGroupCommand,
  UpdateAgentAliasCommand,
  UpdateAgentCollaboratorCommand,
  UpdateAgentKnowledgeBaseCommand,
  UpdateDataSourceCommand,
  UpdateFlowCommand,
  UpdateFlowAliasCommand,
  UpdateKnowledgeBaseCommand,
  UpdatePromptCommand,
  ValidateFlowDefinitionCommand,
};

const paginators = {
  paginateListAgentActionGroups,
  paginateListAgentAliases,
  paginateListAgentCollaborators,
  paginateListAgentKnowledgeBases,
  paginateListAgentVersions,
  paginateListAgents,
  paginateListDataSources,
  paginateListFlowAliases,
  paginateListFlowVersions,
  paginateListFlows,
  paginateListIngestionJobs,
  paginateListKnowledgeBaseDocuments,
  paginateListKnowledgeBases,
  paginateListPrompts,
};

interface BedrockAgentService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AssociateAgentCollaboratorCommand}
   */
  associateAgentCollaborator(
    args: AssociateAgentCollaboratorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateAgentCollaboratorCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link AssociateAgentKnowledgeBaseCommand}
   */
  associateAgentKnowledgeBase(
    args: AssociateAgentKnowledgeBaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateAgentKnowledgeBaseCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateAgentCommand}
   */
  createAgent(
    args: CreateAgentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAgentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateAgentActionGroupCommand}
   */
  createAgentActionGroup(
    args: CreateAgentActionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAgentActionGroupCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateAgentAliasCommand}
   */
  createAgentAlias(
    args: CreateAgentAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAgentAliasCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDataSourceCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateFlowCommand}
   */
  createFlow(
    args: CreateFlowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFlowCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateFlowAliasCommand}
   */
  createFlowAlias(
    args: CreateFlowAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFlowAliasCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateFlowVersionCommand}
   */
  createFlowVersion(
    args: CreateFlowVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFlowVersionCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link CreateKnowledgeBaseCommand}
   */
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateKnowledgeBaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreatePromptCommand}
   */
  createPrompt(
    args: CreatePromptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePromptCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreatePromptVersionCommand}
   */
  createPromptVersion(
    args: CreatePromptVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePromptVersionCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link DeleteAgentCommand}
   */
  deleteAgent(
    args: DeleteAgentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAgentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAgentActionGroupCommand}
   */
  deleteAgentActionGroup(
    args: DeleteAgentActionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAgentActionGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAgentAliasCommand}
   */
  deleteAgentAlias(
    args: DeleteAgentAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAgentAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAgentVersionCommand}
   */
  deleteAgentVersion(
    args: DeleteAgentVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAgentVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDataSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteFlowCommand}
   */
  deleteFlow(
    args: DeleteFlowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFlowCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteFlowAliasCommand}
   */
  deleteFlowAlias(
    args: DeleteFlowAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFlowAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteFlowVersionCommand}
   */
  deleteFlowVersion(
    args: DeleteFlowVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFlowVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteKnowledgeBaseCommand}
   */
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteKnowledgeBaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteKnowledgeBaseDocumentsCommand}
   */
  deleteKnowledgeBaseDocuments(
    args: DeleteKnowledgeBaseDocumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteKnowledgeBaseDocumentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeletePromptCommand}
   */
  deletePrompt(
    args: DeletePromptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePromptCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DisassociateAgentCollaboratorCommand}
   */
  disassociateAgentCollaborator(
    args: DisassociateAgentCollaboratorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateAgentCollaboratorCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DisassociateAgentKnowledgeBaseCommand}
   */
  disassociateAgentKnowledgeBase(
    args: DisassociateAgentKnowledgeBaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateAgentKnowledgeBaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentCommand}
   */
  getAgent(
    args: GetAgentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentActionGroupCommand}
   */
  getAgentActionGroup(
    args: GetAgentActionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentActionGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentAliasCommand}
   */
  getAgentAlias(
    args: GetAgentAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentCollaboratorCommand}
   */
  getAgentCollaborator(
    args: GetAgentCollaboratorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentCollaboratorCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentKnowledgeBaseCommand}
   */
  getAgentKnowledgeBase(
    args: GetAgentKnowledgeBaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentKnowledgeBaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentVersionCommand}
   */
  getAgentVersion(
    args: GetAgentVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(
    args: GetDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetFlowCommand}
   */
  getFlow(
    args: GetFlowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFlowCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetFlowAliasCommand}
   */
  getFlowAlias(
    args: GetFlowAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFlowAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetFlowVersionCommand}
   */
  getFlowVersion(
    args: GetFlowVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFlowVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetIngestionJobCommand}
   */
  getIngestionJob(
    args: GetIngestionJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIngestionJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetKnowledgeBaseCommand}
   */
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetKnowledgeBaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetKnowledgeBaseDocumentsCommand}
   */
  getKnowledgeBaseDocuments(
    args: GetKnowledgeBaseDocumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetKnowledgeBaseDocumentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPromptCommand}
   */
  getPrompt(
    args: GetPromptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPromptCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link IngestKnowledgeBaseDocumentsCommand}
   */
  ingestKnowledgeBaseDocuments(
    args: IngestKnowledgeBaseDocumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    IngestKnowledgeBaseDocumentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAgentActionGroupsCommand}
   */
  listAgentActionGroups(
    args: ListAgentActionGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentActionGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listAgentActionGroupsStream(
    args: ListAgentActionGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentActionGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAgentAliasesCommand}
   */
  listAgentAliases(
    args: ListAgentAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentAliasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listAgentAliasesStream(
    args: ListAgentAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentAliasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAgentCollaboratorsCommand}
   */
  listAgentCollaborators(
    args: ListAgentCollaboratorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentCollaboratorsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listAgentCollaboratorsStream(
    args: ListAgentCollaboratorsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentCollaboratorsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAgentKnowledgeBasesCommand}
   */
  listAgentKnowledgeBases(
    args: ListAgentKnowledgeBasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentKnowledgeBasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listAgentKnowledgeBasesStream(
    args: ListAgentKnowledgeBasesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentKnowledgeBasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAgentVersionsCommand}
   */
  listAgentVersions(
    args: ListAgentVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listAgentVersionsStream(
    args: ListAgentVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAgentsCommand}
   */
  listAgents(
    args: ListAgentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAgentsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listAgentsStream(
    args: ListAgentsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAgentsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataSourcesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listDataSourcesStream(
    args: ListDataSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDataSourcesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListFlowAliasesCommand}
   */
  listFlowAliases(
    args: ListFlowAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFlowAliasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listFlowAliasesStream(
    args: ListFlowAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListFlowAliasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListFlowVersionsCommand}
   */
  listFlowVersions(
    args: ListFlowVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFlowVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listFlowVersionsStream(
    args: ListFlowVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListFlowVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(
    args: ListFlowsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFlowsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listFlowsStream(
    args: ListFlowsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListFlowsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListIngestionJobsCommand}
   */
  listIngestionJobs(
    args: ListIngestionJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIngestionJobsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listIngestionJobsStream(
    args: ListIngestionJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListIngestionJobsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListKnowledgeBaseDocumentsCommand}
   */
  listKnowledgeBaseDocuments(
    args: ListKnowledgeBaseDocumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListKnowledgeBaseDocumentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  listKnowledgeBaseDocumentsStream(
    args: ListKnowledgeBaseDocumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListKnowledgeBaseDocumentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   */
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListKnowledgeBasesCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listKnowledgeBasesStream(
    args: ListKnowledgeBasesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListKnowledgeBasesCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPromptsCommand}
   */
  listPrompts(
    args: ListPromptsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPromptsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  listPromptsStream(
    args: ListPromptsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPromptsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
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
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link PrepareAgentCommand}
   */
  prepareAgent(
    args: PrepareAgentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PrepareAgentCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link PrepareFlowCommand}
   */
  prepareFlow(
    args: PrepareFlowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PrepareFlowCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StartIngestionJobCommand}
   */
  startIngestionJob(
    args: StartIngestionJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartIngestionJobCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link StopIngestionJobCommand}
   */
  stopIngestionJob(
    args: StopIngestionJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopIngestionJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateAgentCommand}
   */
  updateAgent(
    args: UpdateAgentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAgentCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link UpdateAgentActionGroupCommand}
   */
  updateAgentActionGroup(
    args: UpdateAgentActionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAgentActionGroupCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link UpdateAgentAliasCommand}
   */
  updateAgentAlias(
    args: UpdateAgentAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAgentAliasCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link UpdateAgentCollaboratorCommand}
   */
  updateAgentCollaborator(
    args: UpdateAgentCollaboratorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAgentCollaboratorCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link UpdateAgentKnowledgeBaseCommand}
   */
  updateAgentKnowledgeBase(
    args: UpdateAgentKnowledgeBaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAgentKnowledgeBaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDataSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateFlowCommand}
   */
  updateFlow(
    args: UpdateFlowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFlowCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link UpdateFlowAliasCommand}
   */
  updateFlowAlias(
    args: UpdateFlowAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFlowAliasCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link UpdateKnowledgeBaseCommand}
   */
  updateKnowledgeBase(
    args: UpdateKnowledgeBaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateKnowledgeBaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePromptCommand}
   */
  updatePrompt(
    args: UpdatePromptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePromptCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link ValidateFlowDefinitionCommand}
   */
  validateFlowDefinition(
    args: ValidateFlowDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ValidateFlowDefinitionCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeBedrockAgentService = Effect.gen(function*() {
  const client = yield* Instance.BedrockAgentClientInstance;

  return yield* Service.fromClientAndCommands<BedrockAgentService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: BedrockAgentServiceConfig.toBedrockAgentClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class BedrockAgentService extends Effect.Tag("@effect-aws/client-bedrock-agent/BedrockAgentService")<
  BedrockAgentService,
  BedrockAgentService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeBedrockAgentService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: BedrockAgentService.Config) =>
    Layer.effect(this, makeBedrockAgentService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(BedrockAgentServiceConfig.setBedrockAgentServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: BedrockAgentClientConfig) => BedrockAgentClient,
  ) =>
    Layer.effect(this, makeBedrockAgentService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.BedrockAgentClientInstance,
          Effect.map(BedrockAgentServiceConfig.toBedrockAgentClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace BedrockAgentService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<BedrockAgentClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = BedrockAgentService$;
}
