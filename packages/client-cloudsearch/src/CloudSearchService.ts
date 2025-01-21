/**
 * @since 1.0.0
 */
import {
  CloudSearchServiceException,
  type CloudSearchClient,
  type CloudSearchClientConfig,
  BuildSuggestersCommand,
  type BuildSuggestersCommandInput,
  type BuildSuggestersCommandOutput,
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
import { Data, Effect, Layer, Record } from "effect";
import {
  CloudSearchClientInstance,
  CloudSearchClientInstanceLayer,
} from "./CloudSearchClientInstance.js";
import {
  DefaultCloudSearchClientConfigLayer,
  makeDefaultCloudSearchClientInstanceConfig,
  CloudSearchClientInstanceConfig,
} from "./CloudSearchClientInstanceConfig.js";
import {
  AllServiceErrors,
  BaseError,
  DisabledOperationError,
  InternalError,
  InvalidTypeError,
  LimitExceededError,
  ResourceAlreadyExistsError,
  ResourceNotFoundError,
  ValidationError,
  SdkError,
  TaggedException,
} from "./Errors.js";

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
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDomainCommandOutput,
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
    SdkError | BaseError | InternalError
  >;

  /**
   * @see {@link DeleteExpressionCommand}
   */
  deleteExpression(
    args: DeleteExpressionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteExpressionCommandOutput,
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
    SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeAvailabilityOptionsCommand}
   */
  describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAvailabilityOptionsCommandOutput,
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
    SdkError | BaseError | InternalError
  >;

  /**
   * @see {@link DescribeExpressionsCommand}
   */
  describeExpressions(
    args: DescribeExpressionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExpressionsCommandOutput,
    SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeIndexFieldsCommand}
   */
  describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIndexFieldsCommandOutput,
    SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeScalingParametersCommand}
   */
  describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScalingParametersCommandOutput,
    SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeServiceAccessPoliciesCommand}
   */
  describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceAccessPoliciesCommandOutput,
    SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeSuggestersCommand}
   */
  describeSuggesters(
    args: DescribeSuggestersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSuggestersCommandOutput,
    SdkError | BaseError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link IndexDocumentsCommand}
   */
  indexDocuments(
    args: IndexDocumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    IndexDocumentsCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<ListDomainNamesCommandOutput, SdkError | BaseError>;

  /**
   * @see {@link UpdateAvailabilityOptionsCommand}
   */
  updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAvailabilityOptionsCommandOutput,
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
export const makeCloudSearchService = Effect.gen(function* (_) {
  const client = yield* _(CloudSearchClientInstance);

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
            e instanceof CloudSearchServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<CloudSearchServiceException>
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
  }, {}) as CloudSearchService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class CloudSearchService extends Effect.Tag(
  "@effect-aws/client-cloudsearch/CloudSearchService",
)<CloudSearchService, CloudSearchService$>() {
  static readonly defaultLayer = Layer.effect(
    this,
    makeCloudSearchService,
  ).pipe(
    Layer.provide(CloudSearchClientInstanceLayer),
    Layer.provide(DefaultCloudSearchClientConfigLayer),
  );
  static readonly layer = (config: CloudSearchClientConfig) =>
    Layer.effect(this, makeCloudSearchService).pipe(
      Layer.provide(CloudSearchClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          CloudSearchClientInstanceConfig,
          makeDefaultCloudSearchClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CloudSearchClientConfig) => CloudSearchClient,
  ) =>
    Layer.effect(this, makeCloudSearchService).pipe(
      Layer.provide(
        Layer.effect(
          CloudSearchClientInstance,
          Effect.map(makeDefaultCloudSearchClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias CloudSearchService
 */
export const CloudSearch = CloudSearchService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CloudSearch.baseLayer instead
 */
export const BaseCloudSearchServiceLayer = Layer.effect(
  CloudSearchService,
  makeCloudSearchService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CloudSearch.layer instead
 */
export const CloudSearchServiceLayer = BaseCloudSearchServiceLayer.pipe(
  Layer.provide(CloudSearchClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use CloudSearch.defaultLayer instead
 */
export const DefaultCloudSearchServiceLayer = CloudSearchService.defaultLayer;
