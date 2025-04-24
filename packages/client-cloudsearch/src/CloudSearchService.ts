/**
 * @since 1.0.0
 */
import {
  BuildSuggestersCommand,
  type BuildSuggestersCommandInput,
  type BuildSuggestersCommandOutput,
  type CloudSearchClient,
  type CloudSearchClientConfig,
  CreateDomainCommand,
  type CreateDomainCommandInput,
  type CreateDomainCommandOutput,
  DefineAnalysisSchemeCommand,
  type DefineAnalysisSchemeCommandInput,
  type DefineAnalysisSchemeCommandOutput,
  DefineExpressionCommand,
  type DefineExpressionCommandInput,
  type DefineExpressionCommandOutput,
  DefineIndexFieldCommand,
  type DefineIndexFieldCommandInput,
  type DefineIndexFieldCommandOutput,
  DefineSuggesterCommand,
  type DefineSuggesterCommandInput,
  type DefineSuggesterCommandOutput,
  DeleteAnalysisSchemeCommand,
  type DeleteAnalysisSchemeCommandInput,
  type DeleteAnalysisSchemeCommandOutput,
  DeleteDomainCommand,
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteExpressionCommand,
  type DeleteExpressionCommandInput,
  type DeleteExpressionCommandOutput,
  DeleteIndexFieldCommand,
  type DeleteIndexFieldCommandInput,
  type DeleteIndexFieldCommandOutput,
  DeleteSuggesterCommand,
  type DeleteSuggesterCommandInput,
  type DeleteSuggesterCommandOutput,
  DescribeAnalysisSchemesCommand,
  type DescribeAnalysisSchemesCommandInput,
  type DescribeAnalysisSchemesCommandOutput,
  DescribeAvailabilityOptionsCommand,
  type DescribeAvailabilityOptionsCommandInput,
  type DescribeAvailabilityOptionsCommandOutput,
  DescribeDomainEndpointOptionsCommand,
  type DescribeDomainEndpointOptionsCommandInput,
  type DescribeDomainEndpointOptionsCommandOutput,
  DescribeDomainsCommand,
  type DescribeDomainsCommandInput,
  type DescribeDomainsCommandOutput,
  DescribeExpressionsCommand,
  type DescribeExpressionsCommandInput,
  type DescribeExpressionsCommandOutput,
  DescribeIndexFieldsCommand,
  type DescribeIndexFieldsCommandInput,
  type DescribeIndexFieldsCommandOutput,
  DescribeScalingParametersCommand,
  type DescribeScalingParametersCommandInput,
  type DescribeScalingParametersCommandOutput,
  DescribeServiceAccessPoliciesCommand,
  type DescribeServiceAccessPoliciesCommandInput,
  type DescribeServiceAccessPoliciesCommandOutput,
  DescribeSuggestersCommand,
  type DescribeSuggestersCommandInput,
  type DescribeSuggestersCommandOutput,
  IndexDocumentsCommand,
  type IndexDocumentsCommandInput,
  type IndexDocumentsCommandOutput,
  ListDomainNamesCommand,
  type ListDomainNamesCommandInput,
  type ListDomainNamesCommandOutput,
  UpdateAvailabilityOptionsCommand,
  type UpdateAvailabilityOptionsCommandInput,
  type UpdateAvailabilityOptionsCommandOutput,
  UpdateDomainEndpointOptionsCommand,
  type UpdateDomainEndpointOptionsCommandInput,
  type UpdateDomainEndpointOptionsCommandOutput,
  UpdateScalingParametersCommand,
  type UpdateScalingParametersCommandInput,
  type UpdateScalingParametersCommandOutput,
  UpdateServiceAccessPoliciesCommand,
  type UpdateServiceAccessPoliciesCommandInput,
  type UpdateServiceAccessPoliciesCommandOutput,
} from "@aws-sdk/client-cloudsearch";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./CloudSearchClientInstance.js";
import * as CloudSearchServiceConfig from "./CloudSearchServiceConfig.js";
import type {
  BaseError,
  DisabledOperationError,
  InternalError,
  InvalidTypeError,
  LimitExceededError,
  ResourceAlreadyExistsError,
  ResourceNotFoundError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  BuildSuggestersCommand,
  CreateDomainCommand,
  DefineAnalysisSchemeCommand,
  DefineExpressionCommand,
  DefineIndexFieldCommand,
  DefineSuggesterCommand,
  DeleteAnalysisSchemeCommand,
  DeleteDomainCommand,
  DeleteExpressionCommand,
  DeleteIndexFieldCommand,
  DeleteSuggesterCommand,
  DescribeAnalysisSchemesCommand,
  DescribeAvailabilityOptionsCommand,
  DescribeDomainEndpointOptionsCommand,
  DescribeDomainsCommand,
  DescribeExpressionsCommand,
  DescribeIndexFieldsCommand,
  DescribeScalingParametersCommand,
  DescribeServiceAccessPoliciesCommand,
  DescribeSuggestersCommand,
  IndexDocumentsCommand,
  ListDomainNamesCommand,
  UpdateAvailabilityOptionsCommand,
  UpdateDomainEndpointOptionsCommand,
  UpdateScalingParametersCommand,
  UpdateServiceAccessPoliciesCommand,
};

interface CloudSearchService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BuildSuggestersCommand}
   */
  buildSuggesters(
    args: BuildSuggestersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BuildSuggestersCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDomainCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ValidationError
  >;

  /**
   * @see {@link DefineAnalysisSchemeCommand}
   */
  defineAnalysisScheme(
    args: DefineAnalysisSchemeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DefineAnalysisSchemeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DefineExpressionCommand}
   */
  defineExpression(
    args: DefineExpressionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DefineExpressionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DefineIndexFieldCommand}
   */
  defineIndexField(
    args: DefineIndexFieldCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DefineIndexFieldCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DefineSuggesterCommand}
   */
  defineSuggester(
    args: DefineSuggesterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DefineSuggesterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAnalysisSchemeCommand}
   */
  deleteAnalysisScheme(
    args: DeleteAnalysisSchemeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAnalysisSchemeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDomainCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError
  >;

  /**
   * @see {@link DeleteExpressionCommand}
   */
  deleteExpression(
    args: DeleteExpressionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteExpressionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteIndexFieldCommand}
   */
  deleteIndexField(
    args: DeleteIndexFieldCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIndexFieldCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteSuggesterCommand}
   */
  deleteSuggester(
    args: DeleteSuggesterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSuggesterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeAnalysisSchemesCommand}
   */
  describeAnalysisSchemes(
    args: DescribeAnalysisSchemesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAnalysisSchemesCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeAvailabilityOptionsCommand}
   */
  describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAvailabilityOptionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeDomainEndpointOptionsCommand}
   */
  describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainEndpointOptionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeDomainsCommand}
   */
  describeDomains(
    args: DescribeDomainsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainsCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError
  >;

  /**
   * @see {@link DescribeExpressionsCommand}
   */
  describeExpressions(
    args: DescribeExpressionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExpressionsCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeIndexFieldsCommand}
   */
  describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIndexFieldsCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeScalingParametersCommand}
   */
  describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScalingParametersCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeServiceAccessPoliciesCommand}
   */
  describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceAccessPoliciesCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeSuggestersCommand}
   */
  describeSuggesters(
    args: DescribeSuggestersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSuggestersCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link IndexDocumentsCommand}
   */
  indexDocuments(
    args: IndexDocumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    IndexDocumentsCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainNamesCommandOutput,
    Cause.TimeoutException | SdkError | BaseError
  >;

  /**
   * @see {@link UpdateAvailabilityOptionsCommand}
   */
  updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAvailabilityOptionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDomainEndpointOptionsCommand}
   */
  updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDomainEndpointOptionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateScalingParametersCommand}
   */
  updateScalingParameters(
    args: UpdateScalingParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateScalingParametersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateServiceAccessPoliciesCommand}
   */
  updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateServiceAccessPoliciesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudSearchService = Effect.gen(function*() {
  const client = yield* Instance.CloudSearchClientInstance;

  return yield* Service.fromClientAndCommands<CloudSearchService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: CloudSearchServiceConfig.toCloudSearchClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class CloudSearchService extends Effect.Tag("@effect-aws/client-cloudsearch/CloudSearchService")<
  CloudSearchService,
  CloudSearchService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeCloudSearchService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: CloudSearchService.Config) =>
    Layer.effect(this, makeCloudSearchService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(CloudSearchServiceConfig.setCloudSearchServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CloudSearchClientConfig) => CloudSearchClient,
  ) =>
    Layer.effect(this, makeCloudSearchService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.CloudSearchClientInstance,
          Effect.map(CloudSearchServiceConfig.toCloudSearchClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace CloudSearchService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<CloudSearchClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
