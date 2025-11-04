/**
 * @since 1.0.0
 */
import {
  type ApiGatewayV2Client,
  type ApiGatewayV2ClientConfig,
  CreateApiCommand,
  type CreateApiCommandInput,
  type CreateApiCommandOutput,
  CreateApiMappingCommand,
  type CreateApiMappingCommandInput,
  type CreateApiMappingCommandOutput,
  CreateAuthorizerCommand,
  type CreateAuthorizerCommandInput,
  type CreateAuthorizerCommandOutput,
  CreateDeploymentCommand,
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDomainNameCommand,
  type CreateDomainNameCommandInput,
  type CreateDomainNameCommandOutput,
  CreateIntegrationCommand,
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationResponseCommand,
  type CreateIntegrationResponseCommandInput,
  type CreateIntegrationResponseCommandOutput,
  CreateModelCommand,
  type CreateModelCommandInput,
  type CreateModelCommandOutput,
  CreateRouteCommand,
  type CreateRouteCommandInput,
  type CreateRouteCommandOutput,
  CreateRouteResponseCommand,
  type CreateRouteResponseCommandInput,
  type CreateRouteResponseCommandOutput,
  CreateRoutingRuleCommand,
  type CreateRoutingRuleCommandInput,
  type CreateRoutingRuleCommandOutput,
  CreateStageCommand,
  type CreateStageCommandInput,
  type CreateStageCommandOutput,
  CreateVpcLinkCommand,
  type CreateVpcLinkCommandInput,
  type CreateVpcLinkCommandOutput,
  DeleteAccessLogSettingsCommand,
  type DeleteAccessLogSettingsCommandInput,
  type DeleteAccessLogSettingsCommandOutput,
  DeleteApiCommand,
  type DeleteApiCommandInput,
  type DeleteApiCommandOutput,
  DeleteApiMappingCommand,
  type DeleteApiMappingCommandInput,
  type DeleteApiMappingCommandOutput,
  DeleteAuthorizerCommand,
  type DeleteAuthorizerCommandInput,
  type DeleteAuthorizerCommandOutput,
  DeleteCorsConfigurationCommand,
  type DeleteCorsConfigurationCommandInput,
  type DeleteCorsConfigurationCommandOutput,
  DeleteDeploymentCommand,
  type DeleteDeploymentCommandInput,
  type DeleteDeploymentCommandOutput,
  DeleteDomainNameCommand,
  type DeleteDomainNameCommandInput,
  type DeleteDomainNameCommandOutput,
  DeleteIntegrationCommand,
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationResponseCommand,
  type DeleteIntegrationResponseCommandInput,
  type DeleteIntegrationResponseCommandOutput,
  DeleteModelCommand,
  type DeleteModelCommandInput,
  type DeleteModelCommandOutput,
  DeleteRouteCommand,
  type DeleteRouteCommandInput,
  type DeleteRouteCommandOutput,
  DeleteRouteRequestParameterCommand,
  type DeleteRouteRequestParameterCommandInput,
  type DeleteRouteRequestParameterCommandOutput,
  DeleteRouteResponseCommand,
  type DeleteRouteResponseCommandInput,
  type DeleteRouteResponseCommandOutput,
  DeleteRouteSettingsCommand,
  type DeleteRouteSettingsCommandInput,
  type DeleteRouteSettingsCommandOutput,
  DeleteRoutingRuleCommand,
  type DeleteRoutingRuleCommandInput,
  type DeleteRoutingRuleCommandOutput,
  DeleteStageCommand,
  type DeleteStageCommandInput,
  type DeleteStageCommandOutput,
  DeleteVpcLinkCommand,
  type DeleteVpcLinkCommandInput,
  type DeleteVpcLinkCommandOutput,
  ExportApiCommand,
  type ExportApiCommandInput,
  type ExportApiCommandOutput,
  GetApiCommand,
  type GetApiCommandInput,
  type GetApiCommandOutput,
  GetApiMappingCommand,
  type GetApiMappingCommandInput,
  type GetApiMappingCommandOutput,
  GetApiMappingsCommand,
  type GetApiMappingsCommandInput,
  type GetApiMappingsCommandOutput,
  GetApisCommand,
  type GetApisCommandInput,
  type GetApisCommandOutput,
  GetAuthorizerCommand,
  type GetAuthorizerCommandInput,
  type GetAuthorizerCommandOutput,
  GetAuthorizersCommand,
  type GetAuthorizersCommandInput,
  type GetAuthorizersCommandOutput,
  GetDeploymentCommand,
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentsCommand,
  type GetDeploymentsCommandInput,
  type GetDeploymentsCommandOutput,
  GetDomainNameCommand,
  type GetDomainNameCommandInput,
  type GetDomainNameCommandOutput,
  GetDomainNamesCommand,
  type GetDomainNamesCommandInput,
  type GetDomainNamesCommandOutput,
  GetIntegrationCommand,
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetIntegrationResponseCommand,
  type GetIntegrationResponseCommandInput,
  type GetIntegrationResponseCommandOutput,
  GetIntegrationResponsesCommand,
  type GetIntegrationResponsesCommandInput,
  type GetIntegrationResponsesCommandOutput,
  GetIntegrationsCommand,
  type GetIntegrationsCommandInput,
  type GetIntegrationsCommandOutput,
  GetModelCommand,
  type GetModelCommandInput,
  type GetModelCommandOutput,
  GetModelsCommand,
  type GetModelsCommandInput,
  type GetModelsCommandOutput,
  GetModelTemplateCommand,
  type GetModelTemplateCommandInput,
  type GetModelTemplateCommandOutput,
  GetRouteCommand,
  type GetRouteCommandInput,
  type GetRouteCommandOutput,
  GetRouteResponseCommand,
  type GetRouteResponseCommandInput,
  type GetRouteResponseCommandOutput,
  GetRouteResponsesCommand,
  type GetRouteResponsesCommandInput,
  type GetRouteResponsesCommandOutput,
  GetRoutesCommand,
  type GetRoutesCommandInput,
  type GetRoutesCommandOutput,
  GetRoutingRuleCommand,
  type GetRoutingRuleCommandInput,
  type GetRoutingRuleCommandOutput,
  GetStageCommand,
  type GetStageCommandInput,
  type GetStageCommandOutput,
  GetStagesCommand,
  type GetStagesCommandInput,
  type GetStagesCommandOutput,
  GetTagsCommand,
  type GetTagsCommandInput,
  type GetTagsCommandOutput,
  GetVpcLinkCommand,
  type GetVpcLinkCommandInput,
  type GetVpcLinkCommandOutput,
  GetVpcLinksCommand,
  type GetVpcLinksCommandInput,
  type GetVpcLinksCommandOutput,
  ImportApiCommand,
  type ImportApiCommandInput,
  type ImportApiCommandOutput,
  ListRoutingRulesCommand,
  type ListRoutingRulesCommandInput,
  type ListRoutingRulesCommandOutput,
  PutRoutingRuleCommand,
  type PutRoutingRuleCommandInput,
  type PutRoutingRuleCommandOutput,
  ReimportApiCommand,
  type ReimportApiCommandInput,
  type ReimportApiCommandOutput,
  ResetAuthorizersCacheCommand,
  type ResetAuthorizersCacheCommandInput,
  type ResetAuthorizersCacheCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateApiCommand,
  type UpdateApiCommandInput,
  type UpdateApiCommandOutput,
  UpdateApiMappingCommand,
  type UpdateApiMappingCommandInput,
  type UpdateApiMappingCommandOutput,
  UpdateAuthorizerCommand,
  type UpdateAuthorizerCommandInput,
  type UpdateAuthorizerCommandOutput,
  UpdateDeploymentCommand,
  type UpdateDeploymentCommandInput,
  type UpdateDeploymentCommandOutput,
  UpdateDomainNameCommand,
  type UpdateDomainNameCommandInput,
  type UpdateDomainNameCommandOutput,
  UpdateIntegrationCommand,
  type UpdateIntegrationCommandInput,
  type UpdateIntegrationCommandOutput,
  UpdateIntegrationResponseCommand,
  type UpdateIntegrationResponseCommandInput,
  type UpdateIntegrationResponseCommandOutput,
  UpdateModelCommand,
  type UpdateModelCommandInput,
  type UpdateModelCommandOutput,
  UpdateRouteCommand,
  type UpdateRouteCommandInput,
  type UpdateRouteCommandOutput,
  UpdateRouteResponseCommand,
  type UpdateRouteResponseCommandInput,
  type UpdateRouteResponseCommandOutput,
  UpdateStageCommand,
  type UpdateStageCommandInput,
  type UpdateStageCommandOutput,
  UpdateVpcLinkCommand,
  type UpdateVpcLinkCommandInput,
  type UpdateVpcLinkCommandOutput,
} from "@aws-sdk/client-apigatewayv2";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./ApiGatewayV2ClientInstance.js";
import * as ApiGatewayV2ServiceConfig from "./ApiGatewayV2ServiceConfig.js";
import type {
  AccessDeniedError,
  BadRequestError,
  ConflictError,
  NotFoundError,
  SdkError,
  TooManyRequestsError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  CreateApiCommand,
  CreateApiMappingCommand,
  CreateAuthorizerCommand,
  CreateDeploymentCommand,
  CreateDomainNameCommand,
  CreateIntegrationCommand,
  CreateIntegrationResponseCommand,
  CreateModelCommand,
  CreateRouteCommand,
  CreateRouteResponseCommand,
  CreateRoutingRuleCommand,
  CreateStageCommand,
  CreateVpcLinkCommand,
  DeleteAccessLogSettingsCommand,
  DeleteApiCommand,
  DeleteApiMappingCommand,
  DeleteAuthorizerCommand,
  DeleteCorsConfigurationCommand,
  DeleteDeploymentCommand,
  DeleteDomainNameCommand,
  DeleteIntegrationCommand,
  DeleteIntegrationResponseCommand,
  DeleteModelCommand,
  DeleteRouteCommand,
  DeleteRouteRequestParameterCommand,
  DeleteRouteResponseCommand,
  DeleteRouteSettingsCommand,
  DeleteRoutingRuleCommand,
  DeleteStageCommand,
  DeleteVpcLinkCommand,
  ExportApiCommand,
  GetApiCommand,
  GetApiMappingCommand,
  GetApiMappingsCommand,
  GetApisCommand,
  GetAuthorizerCommand,
  GetAuthorizersCommand,
  GetDeploymentCommand,
  GetDeploymentsCommand,
  GetDomainNameCommand,
  GetDomainNamesCommand,
  GetIntegrationCommand,
  GetIntegrationResponseCommand,
  GetIntegrationResponsesCommand,
  GetIntegrationsCommand,
  GetModelCommand,
  GetModelTemplateCommand,
  GetModelsCommand,
  GetRouteCommand,
  GetRouteResponseCommand,
  GetRouteResponsesCommand,
  GetRoutesCommand,
  GetRoutingRuleCommand,
  GetStageCommand,
  GetStagesCommand,
  GetTagsCommand,
  GetVpcLinkCommand,
  GetVpcLinksCommand,
  ImportApiCommand,
  ListRoutingRulesCommand,
  PutRoutingRuleCommand,
  ReimportApiCommand,
  ResetAuthorizersCacheCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApiCommand,
  UpdateApiMappingCommand,
  UpdateAuthorizerCommand,
  UpdateDeploymentCommand,
  UpdateDomainNameCommand,
  UpdateIntegrationCommand,
  UpdateIntegrationResponseCommand,
  UpdateModelCommand,
  UpdateRouteCommand,
  UpdateRouteResponseCommand,
  UpdateStageCommand,
  UpdateVpcLinkCommand,
};

interface ApiGatewayV2Service$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateApiCommand}
   */
  createApi(
    args: CreateApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateApiCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateApiMappingCommand}
   */
  createApiMapping(
    args: CreateApiMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateApiMappingCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateAuthorizerCommand}
   */
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAuthorizerCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeploymentCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
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
    | AccessDeniedError
    | BadRequestError
    | ConflictError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIntegrationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateIntegrationResponseCommand}
   */
  createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIntegrationResponseCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateModelCommand}
   */
  createModel(
    args: CreateModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateModelCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateRouteCommand}
   */
  createRoute(
    args: CreateRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRouteCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateRouteResponseCommand}
   */
  createRouteResponse(
    args: CreateRouteResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRouteResponseCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateRoutingRuleCommand}
   */
  createRoutingRule(
    args: CreateRoutingRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRoutingRuleCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateStageCommand}
   */
  createStage(
    args: CreateStageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStageCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateVpcLinkCommand}
   */
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcLinkCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteAccessLogSettingsCommand}
   */
  deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccessLogSettingsCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteApiCommand}
   */
  deleteApi(
    args: DeleteApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApiCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteApiMappingCommand}
   */
  deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApiMappingCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteAuthorizerCommand}
   */
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAuthorizerCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteCorsConfigurationCommand}
   */
  deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCorsConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteDeploymentCommand}
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeploymentCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteDomainNameCommand}
   */
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDomainNameCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteIntegrationResponseCommand}
   */
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationResponseCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteModelCommand}
   */
  deleteModel(
    args: DeleteModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteModelCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteRouteCommand}
   */
  deleteRoute(
    args: DeleteRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteRouteRequestParameterCommand}
   */
  deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteRequestParameterCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteRouteResponseCommand}
   */
  deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteResponseCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteRouteSettingsCommand}
   */
  deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteSettingsCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteRoutingRuleCommand}
   */
  deleteRoutingRule(
    args: DeleteRoutingRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRoutingRuleCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteStageCommand}
   */
  deleteStage(
    args: DeleteStageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStageCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteVpcLinkCommand}
   */
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcLinkCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ExportApiCommand}
   */
  exportApi(
    args: ExportApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportApiCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetApiCommand}
   */
  getApi(
    args: GetApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApiCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetApiMappingCommand}
   */
  getApiMapping(
    args: GetApiMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApiMappingCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetApiMappingsCommand}
   */
  getApiMappings(
    args: GetApiMappingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApiMappingsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetApisCommand}
   */
  getApis(
    args: GetApisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApisCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetAuthorizerCommand}
   */
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAuthorizerCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetAuthorizersCommand}
   */
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAuthorizersCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDeploymentsCommand}
   */
  getDeployments(
    args: GetDeploymentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDomainNameCommand}
   */
  getDomainName(
    args: GetDomainNameCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainNameCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDomainNamesCommand}
   */
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainNamesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetIntegrationResponseCommand}
   */
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationResponseCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetIntegrationResponsesCommand}
   */
  getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationResponsesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetIntegrationsCommand}
   */
  getIntegrations(
    args: GetIntegrationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetModelCommand}
   */
  getModel(
    args: GetModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetModelTemplateCommand}
   */
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelTemplateCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetModelsCommand}
   */
  getModels(
    args: GetModelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetModelsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetRouteCommand}
   */
  getRoute(
    args: GetRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRouteCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetRouteResponseCommand}
   */
  getRouteResponse(
    args: GetRouteResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRouteResponseCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetRouteResponsesCommand}
   */
  getRouteResponses(
    args: GetRouteResponsesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRouteResponsesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetRoutesCommand}
   */
  getRoutes(
    args: GetRoutesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRoutesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetRoutingRuleCommand}
   */
  getRoutingRule(
    args: GetRoutingRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRoutingRuleCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetStageCommand}
   */
  getStage(
    args: GetStageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStageCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetStagesCommand}
   */
  getStages(
    args: GetStagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStagesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(
    args: GetTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTagsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetVpcLinkCommand}
   */
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpcLinkCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetVpcLinksCommand}
   */
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpcLinksCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ImportApiCommand}
   */
  importApi(
    args: ImportApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportApiCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListRoutingRulesCommand}
   */
  listRoutingRules(
    args: ListRoutingRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRoutingRulesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutRoutingRuleCommand}
   */
  putRoutingRule(
    args: PutRoutingRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRoutingRuleCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ReimportApiCommand}
   */
  reimportApi(
    args: ReimportApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReimportApiCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ResetAuthorizersCacheCommand}
   */
  resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetAuthorizersCacheCommandOutput,
    Cause.TimeoutException | SdkError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateApiCommand}
   */
  updateApi(
    args: UpdateApiCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApiCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateApiMappingCommand}
   */
  updateApiMapping(
    args: UpdateApiMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApiMappingCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateAuthorizerCommand}
   */
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAuthorizerCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateDeploymentCommand}
   */
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDeploymentCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateDomainNameCommand}
   */
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDomainNameCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateIntegrationCommand}
   */
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIntegrationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateIntegrationResponseCommand}
   */
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIntegrationResponseCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateModelCommand}
   */
  updateModel(
    args: UpdateModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateModelCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateRouteCommand}
   */
  updateRoute(
    args: UpdateRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRouteCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateRouteResponseCommand}
   */
  updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRouteResponseCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateStageCommand}
   */
  updateStage(
    args: UpdateStageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStageCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateVpcLinkCommand}
   */
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateVpcLinkCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeApiGatewayV2Service = Effect.gen(function*() {
  const client = yield* Instance.ApiGatewayV2ClientInstance;

  return yield* Service.fromClientAndCommands<ApiGatewayV2Service$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: ApiGatewayV2ServiceConfig.toApiGatewayV2ClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class ApiGatewayV2Service extends Effect.Tag("@effect-aws/client-api-gateway-v2/ApiGatewayV2Service")<
  ApiGatewayV2Service,
  ApiGatewayV2Service$
>() {
  static readonly defaultLayer = Layer.effect(this, makeApiGatewayV2Service).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: ApiGatewayV2Service.Config) =>
    Layer.effect(this, makeApiGatewayV2Service).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(ApiGatewayV2ServiceConfig.setApiGatewayV2ServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ApiGatewayV2ClientConfig) => ApiGatewayV2Client,
  ) =>
    Layer.effect(this, makeApiGatewayV2Service).pipe(
      Layer.provide(
        Layer.effect(
          Instance.ApiGatewayV2ClientInstance,
          Effect.map(ApiGatewayV2ServiceConfig.toApiGatewayV2ClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace ApiGatewayV2Service {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<ApiGatewayV2ClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = ApiGatewayV2Service$;
}
