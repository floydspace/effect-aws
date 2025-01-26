/**
 * @since 1.0.0
 */
import {
  AnalyzeDocumentCommand,
  type AnalyzeDocumentCommandInput,
  type AnalyzeDocumentCommandOutput,
  AnalyzeExpenseCommand,
  type AnalyzeExpenseCommandInput,
  type AnalyzeExpenseCommandOutput,
  AnalyzeIDCommand,
  type AnalyzeIDCommandInput,
  type AnalyzeIDCommandOutput,
  CreateAdapterCommand,
  type CreateAdapterCommandInput,
  type CreateAdapterCommandOutput,
  CreateAdapterVersionCommand,
  type CreateAdapterVersionCommandInput,
  type CreateAdapterVersionCommandOutput,
  DeleteAdapterCommand,
  type DeleteAdapterCommandInput,
  type DeleteAdapterCommandOutput,
  DeleteAdapterVersionCommand,
  type DeleteAdapterVersionCommandInput,
  type DeleteAdapterVersionCommandOutput,
  DetectDocumentTextCommand,
  type DetectDocumentTextCommandInput,
  type DetectDocumentTextCommandOutput,
  GetAdapterCommand,
  type GetAdapterCommandInput,
  type GetAdapterCommandOutput,
  GetAdapterVersionCommand,
  type GetAdapterVersionCommandInput,
  type GetAdapterVersionCommandOutput,
  GetDocumentAnalysisCommand,
  type GetDocumentAnalysisCommandInput,
  type GetDocumentAnalysisCommandOutput,
  GetDocumentTextDetectionCommand,
  type GetDocumentTextDetectionCommandInput,
  type GetDocumentTextDetectionCommandOutput,
  GetExpenseAnalysisCommand,
  type GetExpenseAnalysisCommandInput,
  type GetExpenseAnalysisCommandOutput,
  GetLendingAnalysisCommand,
  type GetLendingAnalysisCommandInput,
  type GetLendingAnalysisCommandOutput,
  GetLendingAnalysisSummaryCommand,
  type GetLendingAnalysisSummaryCommandInput,
  type GetLendingAnalysisSummaryCommandOutput,
  ListAdaptersCommand,
  type ListAdaptersCommandInput,
  type ListAdaptersCommandOutput,
  ListAdapterVersionsCommand,
  type ListAdapterVersionsCommandInput,
  type ListAdapterVersionsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  StartDocumentAnalysisCommand,
  type StartDocumentAnalysisCommandInput,
  type StartDocumentAnalysisCommandOutput,
  StartDocumentTextDetectionCommand,
  type StartDocumentTextDetectionCommandInput,
  type StartDocumentTextDetectionCommandOutput,
  StartExpenseAnalysisCommand,
  type StartExpenseAnalysisCommandInput,
  type StartExpenseAnalysisCommandOutput,
  StartLendingAnalysisCommand,
  type StartLendingAnalysisCommandInput,
  type StartLendingAnalysisCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  type TextractClient,
  type TextractClientConfig,
  TextractServiceException,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAdapterCommand,
  type UpdateAdapterCommandInput,
  type UpdateAdapterCommandOutput,
} from "@aws-sdk/client-textract";
import { Data, Effect, Layer, Record } from "effect";
import type {
  AccessDeniedError,
  BadDocumentError,
  ConflictError,
  DocumentTooLargeError,
  HumanLoopQuotaExceededError,
  IdempotentParameterMismatchError,
  InternalServerError,
  InvalidJobIdError,
  InvalidKMSKeyError,
  InvalidParameterError,
  InvalidS3ObjectError,
  LimitExceededError,
  ProvisionedThroughputExceededError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  TaggedException,
  ThrottlingError,
  UnsupportedDocumentError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors, SdkError } from "./Errors.js";
import { TextractClientInstance, TextractClientInstanceLayer } from "./TextractClientInstance.js";
import {
  DefaultTextractClientConfigLayer,
  makeDefaultTextractClientInstanceConfig,
  TextractClientInstanceConfig,
} from "./TextractClientInstanceConfig.js";

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
  AnalyzeDocumentCommand,
  AnalyzeExpenseCommand,
  AnalyzeIDCommand,
  CreateAdapterCommand,
  CreateAdapterVersionCommand,
  DeleteAdapterCommand,
  DeleteAdapterVersionCommand,
  DetectDocumentTextCommand,
  GetAdapterCommand,
  GetAdapterVersionCommand,
  GetDocumentAnalysisCommand,
  GetDocumentTextDetectionCommand,
  GetExpenseAnalysisCommand,
  GetLendingAnalysisCommand,
  GetLendingAnalysisSummaryCommand,
  ListAdapterVersionsCommand,
  ListAdaptersCommand,
  ListTagsForResourceCommand,
  StartDocumentAnalysisCommand,
  StartDocumentTextDetectionCommand,
  StartExpenseAnalysisCommand,
  StartLendingAnalysisCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAdapterCommand,
};

interface TextractService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AnalyzeDocumentCommand}
   */
  analyzeDocument(
    args: AnalyzeDocumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AnalyzeDocumentCommandOutput,
    | SdkError
    | AccessDeniedError
    | BadDocumentError
    | DocumentTooLargeError
    | HumanLoopQuotaExceededError
    | InternalServerError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
    | UnsupportedDocumentError
  >;

  /**
   * @see {@link AnalyzeExpenseCommand}
   */
  analyzeExpense(
    args: AnalyzeExpenseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AnalyzeExpenseCommandOutput,
    | SdkError
    | AccessDeniedError
    | BadDocumentError
    | DocumentTooLargeError
    | InternalServerError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
    | UnsupportedDocumentError
  >;

  /**
   * @see {@link AnalyzeIDCommand}
   */
  analyzeID(
    args: AnalyzeIDCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AnalyzeIDCommandOutput,
    | SdkError
    | AccessDeniedError
    | BadDocumentError
    | DocumentTooLargeError
    | InternalServerError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
    | UnsupportedDocumentError
  >;

  /**
   * @see {@link CreateAdapterCommand}
   */
  createAdapter(
    args: CreateAdapterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAdapterCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidParameterError
    | LimitExceededError
    | ProvisionedThroughputExceededError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateAdapterVersionCommand}
   */
  createAdapterVersion(
    args: CreateAdapterVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAdapterVersionCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | LimitExceededError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAdapterCommand}
   */
  deleteAdapter(
    args: DeleteAdapterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAdapterCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAdapterVersionCommand}
   */
  deleteAdapterVersion(
    args: DeleteAdapterVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAdapterVersionCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DetectDocumentTextCommand}
   */
  detectDocumentText(
    args: DetectDocumentTextCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetectDocumentTextCommandOutput,
    | SdkError
    | AccessDeniedError
    | BadDocumentError
    | DocumentTooLargeError
    | InternalServerError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
    | UnsupportedDocumentError
  >;

  /**
   * @see {@link GetAdapterCommand}
   */
  getAdapter(
    args: GetAdapterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAdapterCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetAdapterVersionCommand}
   */
  getAdapterVersion(
    args: GetAdapterVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAdapterVersionCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetDocumentAnalysisCommand}
   */
  getDocumentAnalysis(
    args: GetDocumentAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDocumentAnalysisCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidJobIdError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
  >;

  /**
   * @see {@link GetDocumentTextDetectionCommand}
   */
  getDocumentTextDetection(
    args: GetDocumentTextDetectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDocumentTextDetectionCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidJobIdError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
  >;

  /**
   * @see {@link GetExpenseAnalysisCommand}
   */
  getExpenseAnalysis(
    args: GetExpenseAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetExpenseAnalysisCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidJobIdError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
  >;

  /**
   * @see {@link GetLendingAnalysisCommand}
   */
  getLendingAnalysis(
    args: GetLendingAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLendingAnalysisCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidJobIdError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
  >;

  /**
   * @see {@link GetLendingAnalysisSummaryCommand}
   */
  getLendingAnalysisSummary(
    args: GetLendingAnalysisSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLendingAnalysisSummaryCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidJobIdError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | ProvisionedThroughputExceededError
    | ThrottlingError
  >;

  /**
   * @see {@link ListAdapterVersionsCommand}
   */
  listAdapterVersions(
    args: ListAdapterVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAdapterVersionsCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListAdaptersCommand}
   */
  listAdapters(
    args: ListAdaptersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAdaptersCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
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
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link StartDocumentAnalysisCommand}
   */
  startDocumentAnalysis(
    args: StartDocumentAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDocumentAnalysisCommandOutput,
    | SdkError
    | AccessDeniedError
    | BadDocumentError
    | DocumentTooLargeError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | LimitExceededError
    | ProvisionedThroughputExceededError
    | ThrottlingError
    | UnsupportedDocumentError
  >;

  /**
   * @see {@link StartDocumentTextDetectionCommand}
   */
  startDocumentTextDetection(
    args: StartDocumentTextDetectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDocumentTextDetectionCommandOutput,
    | SdkError
    | AccessDeniedError
    | BadDocumentError
    | DocumentTooLargeError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | LimitExceededError
    | ProvisionedThroughputExceededError
    | ThrottlingError
    | UnsupportedDocumentError
  >;

  /**
   * @see {@link StartExpenseAnalysisCommand}
   */
  startExpenseAnalysis(
    args: StartExpenseAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartExpenseAnalysisCommandOutput,
    | SdkError
    | AccessDeniedError
    | BadDocumentError
    | DocumentTooLargeError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | LimitExceededError
    | ProvisionedThroughputExceededError
    | ThrottlingError
    | UnsupportedDocumentError
  >;

  /**
   * @see {@link StartLendingAnalysisCommand}
   */
  startLendingAnalysis(
    args: StartLendingAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartLendingAnalysisCommandOutput,
    | SdkError
    | AccessDeniedError
    | BadDocumentError
    | DocumentTooLargeError
    | IdempotentParameterMismatchError
    | InternalServerError
    | InvalidKMSKeyError
    | InvalidParameterError
    | InvalidS3ObjectError
    | LimitExceededError
    | ProvisionedThroughputExceededError
    | ThrottlingError
    | UnsupportedDocumentError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
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
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateAdapterCommand}
   */
  updateAdapter(
    args: UpdateAdapterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAdapterCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | InvalidParameterError
    | ProvisionedThroughputExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeTextractService = Effect.gen(function*(_) {
  const client = yield* _(TextractClientInstance);

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
            e instanceof TextractServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<TextractServiceException>
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
  }, {}) as TextractService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class TextractService extends Effect.Tag(
  "@effect-aws/client-textract/TextractService",
)<TextractService, TextractService$>() {
  static readonly defaultLayer = Layer.effect(this, makeTextractService).pipe(
    Layer.provide(TextractClientInstanceLayer),
    Layer.provide(DefaultTextractClientConfigLayer),
  );
  static readonly layer = (config: TextractClientConfig) =>
    Layer.effect(this, makeTextractService).pipe(
      Layer.provide(TextractClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          TextractClientInstanceConfig,
          makeDefaultTextractClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: TextractClientConfig) => TextractClient,
  ) =>
    Layer.effect(this, makeTextractService).pipe(
      Layer.provide(
        Layer.effect(
          TextractClientInstance,
          Effect.map(makeDefaultTextractClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias TextractService
 */
export const Textract = TextractService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Textract.baseLayer instead
 */
export const BaseTextractServiceLayer = Layer.effect(
  TextractService,
  makeTextractService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Textract.layer instead
 */
export const TextractServiceLayer = BaseTextractServiceLayer.pipe(
  Layer.provide(TextractClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Textract.defaultLayer instead
 */
export const DefaultTextractServiceLayer = TextractService.defaultLayer;
