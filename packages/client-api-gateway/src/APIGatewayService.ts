/**
 * @since 1.0.0
 */
import {
  type APIGatewayClient,
  type APIGatewayClientConfig,
  CreateApiKeyCommand,
  type CreateApiKeyCommandInput,
  type CreateApiKeyCommandOutput,
  CreateAuthorizerCommand,
  type CreateAuthorizerCommandInput,
  type CreateAuthorizerCommandOutput,
  CreateBasePathMappingCommand,
  type CreateBasePathMappingCommandInput,
  type CreateBasePathMappingCommandOutput,
  CreateDeploymentCommand,
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDocumentationPartCommand,
  type CreateDocumentationPartCommandInput,
  type CreateDocumentationPartCommandOutput,
  CreateDocumentationVersionCommand,
  type CreateDocumentationVersionCommandInput,
  type CreateDocumentationVersionCommandOutput,
  CreateDomainNameAccessAssociationCommand,
  type CreateDomainNameAccessAssociationCommandInput,
  type CreateDomainNameAccessAssociationCommandOutput,
  CreateDomainNameCommand,
  type CreateDomainNameCommandInput,
  type CreateDomainNameCommandOutput,
  CreateModelCommand,
  type CreateModelCommandInput,
  type CreateModelCommandOutput,
  CreateRequestValidatorCommand,
  type CreateRequestValidatorCommandInput,
  type CreateRequestValidatorCommandOutput,
  CreateResourceCommand,
  type CreateResourceCommandInput,
  type CreateResourceCommandOutput,
  CreateRestApiCommand,
  type CreateRestApiCommandInput,
  type CreateRestApiCommandOutput,
  CreateStageCommand,
  type CreateStageCommandInput,
  type CreateStageCommandOutput,
  CreateUsagePlanCommand,
  type CreateUsagePlanCommandInput,
  type CreateUsagePlanCommandOutput,
  CreateUsagePlanKeyCommand,
  type CreateUsagePlanKeyCommandInput,
  type CreateUsagePlanKeyCommandOutput,
  CreateVpcLinkCommand,
  type CreateVpcLinkCommandInput,
  type CreateVpcLinkCommandOutput,
  DeleteApiKeyCommand,
  type DeleteApiKeyCommandInput,
  type DeleteApiKeyCommandOutput,
  DeleteAuthorizerCommand,
  type DeleteAuthorizerCommandInput,
  type DeleteAuthorizerCommandOutput,
  DeleteBasePathMappingCommand,
  type DeleteBasePathMappingCommandInput,
  type DeleteBasePathMappingCommandOutput,
  DeleteClientCertificateCommand,
  type DeleteClientCertificateCommandInput,
  type DeleteClientCertificateCommandOutput,
  DeleteDeploymentCommand,
  type DeleteDeploymentCommandInput,
  type DeleteDeploymentCommandOutput,
  DeleteDocumentationPartCommand,
  type DeleteDocumentationPartCommandInput,
  type DeleteDocumentationPartCommandOutput,
  DeleteDocumentationVersionCommand,
  type DeleteDocumentationVersionCommandInput,
  type DeleteDocumentationVersionCommandOutput,
  DeleteDomainNameAccessAssociationCommand,
  type DeleteDomainNameAccessAssociationCommandInput,
  type DeleteDomainNameAccessAssociationCommandOutput,
  DeleteDomainNameCommand,
  type DeleteDomainNameCommandInput,
  type DeleteDomainNameCommandOutput,
  DeleteGatewayResponseCommand,
  type DeleteGatewayResponseCommandInput,
  type DeleteGatewayResponseCommandOutput,
  DeleteIntegrationCommand,
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationResponseCommand,
  type DeleteIntegrationResponseCommandInput,
  type DeleteIntegrationResponseCommandOutput,
  DeleteMethodCommand,
  type DeleteMethodCommandInput,
  type DeleteMethodCommandOutput,
  DeleteMethodResponseCommand,
  type DeleteMethodResponseCommandInput,
  type DeleteMethodResponseCommandOutput,
  DeleteModelCommand,
  type DeleteModelCommandInput,
  type DeleteModelCommandOutput,
  DeleteRequestValidatorCommand,
  type DeleteRequestValidatorCommandInput,
  type DeleteRequestValidatorCommandOutput,
  DeleteResourceCommand,
  type DeleteResourceCommandInput,
  type DeleteResourceCommandOutput,
  DeleteRestApiCommand,
  type DeleteRestApiCommandInput,
  type DeleteRestApiCommandOutput,
  DeleteStageCommand,
  type DeleteStageCommandInput,
  type DeleteStageCommandOutput,
  DeleteUsagePlanCommand,
  type DeleteUsagePlanCommandInput,
  type DeleteUsagePlanCommandOutput,
  DeleteUsagePlanKeyCommand,
  type DeleteUsagePlanKeyCommandInput,
  type DeleteUsagePlanKeyCommandOutput,
  DeleteVpcLinkCommand,
  type DeleteVpcLinkCommandInput,
  type DeleteVpcLinkCommandOutput,
  FlushStageAuthorizersCacheCommand,
  type FlushStageAuthorizersCacheCommandInput,
  type FlushStageAuthorizersCacheCommandOutput,
  FlushStageCacheCommand,
  type FlushStageCacheCommandInput,
  type FlushStageCacheCommandOutput,
  GenerateClientCertificateCommand,
  type GenerateClientCertificateCommandInput,
  type GenerateClientCertificateCommandOutput,
  GetAccountCommand,
  type GetAccountCommandInput,
  type GetAccountCommandOutput,
  GetApiKeyCommand,
  type GetApiKeyCommandInput,
  type GetApiKeyCommandOutput,
  GetApiKeysCommand,
  type GetApiKeysCommandInput,
  type GetApiKeysCommandOutput,
  GetAuthorizerCommand,
  type GetAuthorizerCommandInput,
  type GetAuthorizerCommandOutput,
  GetAuthorizersCommand,
  type GetAuthorizersCommandInput,
  type GetAuthorizersCommandOutput,
  GetBasePathMappingCommand,
  type GetBasePathMappingCommandInput,
  type GetBasePathMappingCommandOutput,
  GetBasePathMappingsCommand,
  type GetBasePathMappingsCommandInput,
  type GetBasePathMappingsCommandOutput,
  GetClientCertificateCommand,
  type GetClientCertificateCommandInput,
  type GetClientCertificateCommandOutput,
  GetClientCertificatesCommand,
  type GetClientCertificatesCommandInput,
  type GetClientCertificatesCommandOutput,
  GetDeploymentCommand,
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentsCommand,
  type GetDeploymentsCommandInput,
  type GetDeploymentsCommandOutput,
  GetDocumentationPartCommand,
  type GetDocumentationPartCommandInput,
  type GetDocumentationPartCommandOutput,
  GetDocumentationPartsCommand,
  type GetDocumentationPartsCommandInput,
  type GetDocumentationPartsCommandOutput,
  GetDocumentationVersionCommand,
  type GetDocumentationVersionCommandInput,
  type GetDocumentationVersionCommandOutput,
  GetDocumentationVersionsCommand,
  type GetDocumentationVersionsCommandInput,
  type GetDocumentationVersionsCommandOutput,
  GetDomainNameAccessAssociationsCommand,
  type GetDomainNameAccessAssociationsCommandInput,
  type GetDomainNameAccessAssociationsCommandOutput,
  GetDomainNameCommand,
  type GetDomainNameCommandInput,
  type GetDomainNameCommandOutput,
  GetDomainNamesCommand,
  type GetDomainNamesCommandInput,
  type GetDomainNamesCommandOutput,
  GetExportCommand,
  type GetExportCommandInput,
  type GetExportCommandOutput,
  GetGatewayResponseCommand,
  type GetGatewayResponseCommandInput,
  type GetGatewayResponseCommandOutput,
  GetGatewayResponsesCommand,
  type GetGatewayResponsesCommandInput,
  type GetGatewayResponsesCommandOutput,
  GetIntegrationCommand,
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetIntegrationResponseCommand,
  type GetIntegrationResponseCommandInput,
  type GetIntegrationResponseCommandOutput,
  GetMethodCommand,
  type GetMethodCommandInput,
  type GetMethodCommandOutput,
  GetMethodResponseCommand,
  type GetMethodResponseCommandInput,
  type GetMethodResponseCommandOutput,
  GetModelCommand,
  type GetModelCommandInput,
  type GetModelCommandOutput,
  GetModelsCommand,
  type GetModelsCommandInput,
  type GetModelsCommandOutput,
  GetModelTemplateCommand,
  type GetModelTemplateCommandInput,
  type GetModelTemplateCommandOutput,
  GetRequestValidatorCommand,
  type GetRequestValidatorCommandInput,
  type GetRequestValidatorCommandOutput,
  GetRequestValidatorsCommand,
  type GetRequestValidatorsCommandInput,
  type GetRequestValidatorsCommandOutput,
  GetResourceCommand,
  type GetResourceCommandInput,
  type GetResourceCommandOutput,
  GetResourcesCommand,
  type GetResourcesCommandInput,
  type GetResourcesCommandOutput,
  GetRestApiCommand,
  type GetRestApiCommandInput,
  type GetRestApiCommandOutput,
  GetRestApisCommand,
  type GetRestApisCommandInput,
  type GetRestApisCommandOutput,
  GetSdkCommand,
  type GetSdkCommandInput,
  type GetSdkCommandOutput,
  GetSdkTypeCommand,
  type GetSdkTypeCommandInput,
  type GetSdkTypeCommandOutput,
  GetSdkTypesCommand,
  type GetSdkTypesCommandInput,
  type GetSdkTypesCommandOutput,
  GetStageCommand,
  type GetStageCommandInput,
  type GetStageCommandOutput,
  GetStagesCommand,
  type GetStagesCommandInput,
  type GetStagesCommandOutput,
  GetTagsCommand,
  type GetTagsCommandInput,
  type GetTagsCommandOutput,
  GetUsageCommand,
  type GetUsageCommandInput,
  type GetUsageCommandOutput,
  GetUsagePlanCommand,
  type GetUsagePlanCommandInput,
  type GetUsagePlanCommandOutput,
  GetUsagePlanKeyCommand,
  type GetUsagePlanKeyCommandInput,
  type GetUsagePlanKeyCommandOutput,
  GetUsagePlanKeysCommand,
  type GetUsagePlanKeysCommandInput,
  type GetUsagePlanKeysCommandOutput,
  GetUsagePlansCommand,
  type GetUsagePlansCommandInput,
  type GetUsagePlansCommandOutput,
  GetVpcLinkCommand,
  type GetVpcLinkCommandInput,
  type GetVpcLinkCommandOutput,
  GetVpcLinksCommand,
  type GetVpcLinksCommandInput,
  type GetVpcLinksCommandOutput,
  ImportApiKeysCommand,
  type ImportApiKeysCommandInput,
  type ImportApiKeysCommandOutput,
  ImportDocumentationPartsCommand,
  type ImportDocumentationPartsCommandInput,
  type ImportDocumentationPartsCommandOutput,
  ImportRestApiCommand,
  type ImportRestApiCommandInput,
  type ImportRestApiCommandOutput,
  PutGatewayResponseCommand,
  type PutGatewayResponseCommandInput,
  type PutGatewayResponseCommandOutput,
  PutIntegrationCommand,
  type PutIntegrationCommandInput,
  type PutIntegrationCommandOutput,
  PutIntegrationResponseCommand,
  type PutIntegrationResponseCommandInput,
  type PutIntegrationResponseCommandOutput,
  PutMethodCommand,
  type PutMethodCommandInput,
  type PutMethodCommandOutput,
  PutMethodResponseCommand,
  type PutMethodResponseCommandInput,
  type PutMethodResponseCommandOutput,
  PutRestApiCommand,
  type PutRestApiCommandInput,
  type PutRestApiCommandOutput,
  RejectDomainNameAccessAssociationCommand,
  type RejectDomainNameAccessAssociationCommandInput,
  type RejectDomainNameAccessAssociationCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestInvokeAuthorizerCommand,
  type TestInvokeAuthorizerCommandInput,
  type TestInvokeAuthorizerCommandOutput,
  TestInvokeMethodCommand,
  type TestInvokeMethodCommandInput,
  type TestInvokeMethodCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAccountCommand,
  type UpdateAccountCommandInput,
  type UpdateAccountCommandOutput,
  UpdateApiKeyCommand,
  type UpdateApiKeyCommandInput,
  type UpdateApiKeyCommandOutput,
  UpdateAuthorizerCommand,
  type UpdateAuthorizerCommandInput,
  type UpdateAuthorizerCommandOutput,
  UpdateBasePathMappingCommand,
  type UpdateBasePathMappingCommandInput,
  type UpdateBasePathMappingCommandOutput,
  UpdateClientCertificateCommand,
  type UpdateClientCertificateCommandInput,
  type UpdateClientCertificateCommandOutput,
  UpdateDeploymentCommand,
  type UpdateDeploymentCommandInput,
  type UpdateDeploymentCommandOutput,
  UpdateDocumentationPartCommand,
  type UpdateDocumentationPartCommandInput,
  type UpdateDocumentationPartCommandOutput,
  UpdateDocumentationVersionCommand,
  type UpdateDocumentationVersionCommandInput,
  type UpdateDocumentationVersionCommandOutput,
  UpdateDomainNameCommand,
  type UpdateDomainNameCommandInput,
  type UpdateDomainNameCommandOutput,
  UpdateGatewayResponseCommand,
  type UpdateGatewayResponseCommandInput,
  type UpdateGatewayResponseCommandOutput,
  UpdateIntegrationCommand,
  type UpdateIntegrationCommandInput,
  type UpdateIntegrationCommandOutput,
  UpdateIntegrationResponseCommand,
  type UpdateIntegrationResponseCommandInput,
  type UpdateIntegrationResponseCommandOutput,
  UpdateMethodCommand,
  type UpdateMethodCommandInput,
  type UpdateMethodCommandOutput,
  UpdateMethodResponseCommand,
  type UpdateMethodResponseCommandInput,
  type UpdateMethodResponseCommandOutput,
  UpdateModelCommand,
  type UpdateModelCommandInput,
  type UpdateModelCommandOutput,
  UpdateRequestValidatorCommand,
  type UpdateRequestValidatorCommandInput,
  type UpdateRequestValidatorCommandOutput,
  UpdateResourceCommand,
  type UpdateResourceCommandInput,
  type UpdateResourceCommandOutput,
  UpdateRestApiCommand,
  type UpdateRestApiCommandInput,
  type UpdateRestApiCommandOutput,
  UpdateStageCommand,
  type UpdateStageCommandInput,
  type UpdateStageCommandOutput,
  UpdateUsageCommand,
  type UpdateUsageCommandInput,
  type UpdateUsageCommandOutput,
  UpdateUsagePlanCommand,
  type UpdateUsagePlanCommandInput,
  type UpdateUsagePlanCommandOutput,
  UpdateVpcLinkCommand,
  type UpdateVpcLinkCommandInput,
  type UpdateVpcLinkCommandOutput,
} from "@aws-sdk/client-api-gateway";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./APIGatewayClientInstance.js";
import * as APIGatewayServiceConfig from "./APIGatewayServiceConfig.js";
import type {
  BadRequestError,
  ConflictError,
  LimitExceededError,
  NotFoundError,
  ServiceUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  CreateApiKeyCommand,
  CreateAuthorizerCommand,
  CreateBasePathMappingCommand,
  CreateDeploymentCommand,
  CreateDocumentationPartCommand,
  CreateDocumentationVersionCommand,
  CreateDomainNameCommand,
  CreateDomainNameAccessAssociationCommand,
  CreateModelCommand,
  CreateRequestValidatorCommand,
  CreateResourceCommand,
  CreateRestApiCommand,
  CreateStageCommand,
  CreateUsagePlanCommand,
  CreateUsagePlanKeyCommand,
  CreateVpcLinkCommand,
  DeleteApiKeyCommand,
  DeleteAuthorizerCommand,
  DeleteBasePathMappingCommand,
  DeleteClientCertificateCommand,
  DeleteDeploymentCommand,
  DeleteDocumentationPartCommand,
  DeleteDocumentationVersionCommand,
  DeleteDomainNameCommand,
  DeleteDomainNameAccessAssociationCommand,
  DeleteGatewayResponseCommand,
  DeleteIntegrationCommand,
  DeleteIntegrationResponseCommand,
  DeleteMethodCommand,
  DeleteMethodResponseCommand,
  DeleteModelCommand,
  DeleteRequestValidatorCommand,
  DeleteResourceCommand,
  DeleteRestApiCommand,
  DeleteStageCommand,
  DeleteUsagePlanCommand,
  DeleteUsagePlanKeyCommand,
  DeleteVpcLinkCommand,
  FlushStageAuthorizersCacheCommand,
  FlushStageCacheCommand,
  GenerateClientCertificateCommand,
  GetAccountCommand,
  GetApiKeyCommand,
  GetApiKeysCommand,
  GetAuthorizerCommand,
  GetAuthorizersCommand,
  GetBasePathMappingCommand,
  GetBasePathMappingsCommand,
  GetClientCertificateCommand,
  GetClientCertificatesCommand,
  GetDeploymentCommand,
  GetDeploymentsCommand,
  GetDocumentationPartCommand,
  GetDocumentationPartsCommand,
  GetDocumentationVersionCommand,
  GetDocumentationVersionsCommand,
  GetDomainNameCommand,
  GetDomainNameAccessAssociationsCommand,
  GetDomainNamesCommand,
  GetExportCommand,
  GetGatewayResponseCommand,
  GetGatewayResponsesCommand,
  GetIntegrationCommand,
  GetIntegrationResponseCommand,
  GetMethodCommand,
  GetMethodResponseCommand,
  GetModelCommand,
  GetModelTemplateCommand,
  GetModelsCommand,
  GetRequestValidatorCommand,
  GetRequestValidatorsCommand,
  GetResourceCommand,
  GetResourcesCommand,
  GetRestApiCommand,
  GetRestApisCommand,
  GetSdkCommand,
  GetSdkTypeCommand,
  GetSdkTypesCommand,
  GetStageCommand,
  GetStagesCommand,
  GetTagsCommand,
  GetUsageCommand,
  GetUsagePlanCommand,
  GetUsagePlanKeyCommand,
  GetUsagePlanKeysCommand,
  GetUsagePlansCommand,
  GetVpcLinkCommand,
  GetVpcLinksCommand,
  ImportApiKeysCommand,
  ImportDocumentationPartsCommand,
  ImportRestApiCommand,
  PutGatewayResponseCommand,
  PutIntegrationCommand,
  PutIntegrationResponseCommand,
  PutMethodCommand,
  PutMethodResponseCommand,
  PutRestApiCommand,
  RejectDomainNameAccessAssociationCommand,
  TagResourceCommand,
  TestInvokeAuthorizerCommand,
  TestInvokeMethodCommand,
  UntagResourceCommand,
  UpdateAccountCommand,
  UpdateApiKeyCommand,
  UpdateAuthorizerCommand,
  UpdateBasePathMappingCommand,
  UpdateClientCertificateCommand,
  UpdateDeploymentCommand,
  UpdateDocumentationPartCommand,
  UpdateDocumentationVersionCommand,
  UpdateDomainNameCommand,
  UpdateGatewayResponseCommand,
  UpdateIntegrationCommand,
  UpdateIntegrationResponseCommand,
  UpdateMethodCommand,
  UpdateMethodResponseCommand,
  UpdateModelCommand,
  UpdateRequestValidatorCommand,
  UpdateResourceCommand,
  UpdateRestApiCommand,
  UpdateStageCommand,
  UpdateUsageCommand,
  UpdateUsagePlanCommand,
  UpdateVpcLinkCommand,
};

interface APIGatewayService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateApiKeyCommand}
   */
  createApiKey(
    args: CreateApiKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateApiKeyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateAuthorizerCommand}
   */
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateBasePathMappingCommand}
   */
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBasePathMappingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateDocumentationPartCommand}
   */
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDocumentationPartCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateDocumentationVersionCommand}
   */
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDocumentationVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateDomainNameCommand}
   */
  createDomainName(
    args: CreateDomainNameCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDomainNameCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateDomainNameAccessAssociationCommand}
   */
  createDomainNameAccessAssociation(
    args: CreateDomainNameAccessAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDomainNameAccessAssociationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateModelCommand}
   */
  createModel(
    args: CreateModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateRequestValidatorCommand}
   */
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRequestValidatorCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateResourceCommand}
   */
  createResource(
    args: CreateResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateRestApiCommand}
   */
  createRestApi(
    args: CreateRestApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRestApiCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateStageCommand}
   */
  createStage(
    args: CreateStageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateUsagePlanCommand}
   */
  createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUsagePlanCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateUsagePlanKeyCommand}
   */
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUsagePlanKeyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateVpcLinkCommand}
   */
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcLinkCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteApiKeyCommand}
   */
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApiKeyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteAuthorizerCommand}
   */
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteBasePathMappingCommand}
   */
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBasePathMappingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteClientCertificateCommand}
   */
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClientCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteDeploymentCommand}
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteDocumentationPartCommand}
   */
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDocumentationPartCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteDocumentationVersionCommand}
   */
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDocumentationVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteDomainNameCommand}
   */
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDomainNameCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteDomainNameAccessAssociationCommand}
   */
  deleteDomainNameAccessAssociation(
    args: DeleteDomainNameAccessAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDomainNameAccessAssociationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteGatewayResponseCommand}
   */
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGatewayResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteIntegrationResponseCommand}
   */
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteMethodCommand}
   */
  deleteMethod(
    args: DeleteMethodCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMethodCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link DeleteMethodResponseCommand}
   */
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMethodResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteModelCommand}
   */
  deleteModel(
    args: DeleteModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteRequestValidatorCommand}
   */
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRequestValidatorCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteResourceCommand}
   */
  deleteResource(
    args: DeleteResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteRestApiCommand}
   */
  deleteRestApi(
    args: DeleteRestApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRestApiCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteStageCommand}
   */
  deleteStage(
    args: DeleteStageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteUsagePlanCommand}
   */
  deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUsagePlanCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteUsagePlanKeyCommand}
   */
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUsagePlanKeyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteVpcLinkCommand}
   */
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcLinkCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link FlushStageAuthorizersCacheCommand}
   */
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    FlushStageAuthorizersCacheCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link FlushStageCacheCommand}
   */
  flushStageCache(
    args: FlushStageCacheCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    FlushStageCacheCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link GenerateClientCertificateCommand}
   */
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GenerateClientCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetAccountCommand}
   */
  getAccount(
    args: GetAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetApiKeyCommand}
   */
  getApiKey(
    args: GetApiKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApiKeyCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetApiKeysCommand}
   */
  getApiKeys(
    args: GetApiKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApiKeysCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetAuthorizerCommand}
   */
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAuthorizerCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetAuthorizersCommand}
   */
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAuthorizersCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetBasePathMappingCommand}
   */
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBasePathMappingCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetBasePathMappingsCommand}
   */
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBasePathMappingsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetClientCertificateCommand}
   */
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetClientCertificateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetClientCertificatesCommand}
   */
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetClientCertificatesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetDeploymentsCommand}
   */
  getDeployments(
    args: GetDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetDocumentationPartCommand}
   */
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDocumentationPartCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetDocumentationPartsCommand}
   */
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDocumentationPartsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetDocumentationVersionCommand}
   */
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDocumentationVersionCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetDocumentationVersionsCommand}
   */
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDocumentationVersionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetDomainNameCommand}
   */
  getDomainName(
    args: GetDomainNameCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainNameCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetDomainNameAccessAssociationsCommand}
   */
  getDomainNameAccessAssociations(
    args: GetDomainNameAccessAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainNameAccessAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetDomainNamesCommand}
   */
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainNamesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetExportCommand}
   */
  getExport(
    args: GetExportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetExportCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetGatewayResponseCommand}
   */
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGatewayResponseCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetGatewayResponsesCommand}
   */
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGatewayResponsesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetIntegrationResponseCommand}
   */
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationResponseCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetMethodCommand}
   */
  getMethod(
    args: GetMethodCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMethodCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetMethodResponseCommand}
   */
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMethodResponseCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetModelCommand}
   */
  getModel(
    args: GetModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetModelTemplateCommand}
   */
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelTemplateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetModelsCommand}
   */
  getModels(
    args: GetModelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetRequestValidatorCommand}
   */
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRequestValidatorCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetRequestValidatorsCommand}
   */
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRequestValidatorsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetResourceCommand}
   */
  getResource(
    args: GetResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourceCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetResourcesCommand}
   */
  getResources(
    args: GetResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetRestApiCommand}
   */
  getRestApi(
    args: GetRestApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRestApiCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetRestApisCommand}
   */
  getRestApis(
    args: GetRestApisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRestApisCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetSdkCommand}
   */
  getSdk(
    args: GetSdkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSdkCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetSdkTypeCommand}
   */
  getSdkType(
    args: GetSdkTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSdkTypeCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetSdkTypesCommand}
   */
  getSdkTypes(
    args: GetSdkTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSdkTypesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetStageCommand}
   */
  getStage(
    args: GetStageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetStagesCommand}
   */
  getStages(
    args: GetStagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStagesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(
    args: GetTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTagsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetUsageCommand}
   */
  getUsage(
    args: GetUsageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUsageCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetUsagePlanCommand}
   */
  getUsagePlan(
    args: GetUsagePlanCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUsagePlanCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetUsagePlanKeyCommand}
   */
  getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUsagePlanKeyCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetUsagePlanKeysCommand}
   */
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUsagePlanKeysCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetUsagePlansCommand}
   */
  getUsagePlans(
    args: GetUsagePlansCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUsagePlansCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetVpcLinkCommand}
   */
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpcLinkCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link GetVpcLinksCommand}
   */
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpcLinksCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link ImportApiKeysCommand}
   */
  importApiKeys(
    args: ImportApiKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportApiKeysCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link ImportDocumentationPartsCommand}
   */
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportDocumentationPartsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link ImportRestApiCommand}
   */
  importRestApi(
    args: ImportRestApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportRestApiCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link PutGatewayResponseCommand}
   */
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutGatewayResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link PutIntegrationCommand}
   */
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link PutIntegrationResponseCommand}
   */
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutIntegrationResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link PutMethodCommand}
   */
  putMethod(
    args: PutMethodCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMethodCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link PutMethodResponseCommand}
   */
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutMethodResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link PutRestApiCommand}
   */
  putRestApi(
    args: PutRestApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRestApiCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link RejectDomainNameAccessAssociationCommand}
   */
  rejectDomainNameAccessAssociation(
    args: RejectDomainNameAccessAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectDomainNameAccessAssociationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
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
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link TestInvokeAuthorizerCommand}
   */
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestInvokeAuthorizerCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
  >;

  /**
   * @see {@link TestInvokeMethodCommand}
   */
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestInvokeMethodCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError | UnauthorizedError
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
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateAccountCommand}
   */
  updateAccount(
    args: UpdateAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateApiKeyCommand}
   */
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApiKeyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateAuthorizerCommand}
   */
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateBasePathMappingCommand}
   */
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBasePathMappingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateClientCertificateCommand}
   */
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClientCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateDeploymentCommand}
   */
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDeploymentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | ServiceUnavailableError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateDocumentationPartCommand}
   */
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDocumentationPartCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateDocumentationVersionCommand}
   */
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDocumentationVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateDomainNameCommand}
   */
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDomainNameCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateGatewayResponseCommand}
   */
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGatewayResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateIntegrationCommand}
   */
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateIntegrationResponseCommand}
   */
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIntegrationResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateMethodCommand}
   */
  updateMethod(
    args: UpdateMethodCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMethodCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateMethodResponseCommand}
   */
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMethodResponseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateModelCommand}
   */
  updateModel(
    args: UpdateModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateRequestValidatorCommand}
   */
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRequestValidatorCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateResourceCommand}
   */
  updateResource(
    args: UpdateResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateRestApiCommand}
   */
  updateRestApi(
    args: UpdateRestApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRestApiCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateStageCommand}
   */
  updateStage(
    args: UpdateStageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateUsageCommand}
   */
  updateUsage(
    args: UpdateUsageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUsageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateUsagePlanCommand}
   */
  updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUsagePlanCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateVpcLinkCommand}
   */
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateVpcLinkCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConflictError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
    | UnauthorizedError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeAPIGatewayService = Effect.gen(function*() {
  const client = yield* Instance.APIGatewayClientInstance;

  return yield* Service.fromClientAndCommands<APIGatewayService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: APIGatewayServiceConfig.toAPIGatewayClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class APIGatewayService extends Effect.Tag("@effect-aws/client-api-gateway/APIGatewayService")<
  APIGatewayService,
  APIGatewayService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeAPIGatewayService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: APIGatewayService.Config) =>
    Layer.effect(this, makeAPIGatewayService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(APIGatewayServiceConfig.setAPIGatewayServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: APIGatewayClientConfig) => APIGatewayClient,
  ) =>
    Layer.effect(this, makeAPIGatewayService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.APIGatewayClientInstance,
          Effect.map(APIGatewayServiceConfig.toAPIGatewayClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace APIGatewayService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<APIGatewayClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
