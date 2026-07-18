/**
 * @since 1.0.0
 */
import {
  BatchCreateMemoryRecordsCommand,
  type BatchCreateMemoryRecordsCommandInput,
  type BatchCreateMemoryRecordsCommandOutput,
  BatchDeleteMemoryRecordsCommand,
  type BatchDeleteMemoryRecordsCommandInput,
  type BatchDeleteMemoryRecordsCommandOutput,
  BatchUpdateMemoryRecordsCommand,
  type BatchUpdateMemoryRecordsCommandInput,
  type BatchUpdateMemoryRecordsCommandOutput,
  type BedrockAgentCoreClient,
  type BedrockAgentCoreClientConfig,
  CompleteResourceTokenAuthCommand,
  type CompleteResourceTokenAuthCommandInput,
  type CompleteResourceTokenAuthCommandOutput,
  CreateABTestCommand,
  type CreateABTestCommandInput,
  type CreateABTestCommandOutput,
  CreateEventCommand,
  type CreateEventCommandInput,
  type CreateEventCommandOutput,
  CreatePaymentInstrumentCommand,
  type CreatePaymentInstrumentCommandInput,
  type CreatePaymentInstrumentCommandOutput,
  CreatePaymentSessionCommand,
  type CreatePaymentSessionCommandInput,
  type CreatePaymentSessionCommandOutput,
  DeleteABTestCommand,
  type DeleteABTestCommandInput,
  type DeleteABTestCommandOutput,
  DeleteBatchEvaluationCommand,
  type DeleteBatchEvaluationCommandInput,
  type DeleteBatchEvaluationCommandOutput,
  DeleteEventCommand,
  type DeleteEventCommandInput,
  type DeleteEventCommandOutput,
  DeleteMemoryRecordCommand,
  type DeleteMemoryRecordCommandInput,
  type DeleteMemoryRecordCommandOutput,
  DeletePaymentInstrumentCommand,
  type DeletePaymentInstrumentCommandInput,
  type DeletePaymentInstrumentCommandOutput,
  DeletePaymentSessionCommand,
  type DeletePaymentSessionCommandInput,
  type DeletePaymentSessionCommandOutput,
  DeleteRecommendationCommand,
  type DeleteRecommendationCommandInput,
  type DeleteRecommendationCommandOutput,
  EvaluateCommand,
  type EvaluateCommandInput,
  type EvaluateCommandOutput,
  GetABTestCommand,
  type GetABTestCommandInput,
  type GetABTestCommandOutput,
  GetAgentCardCommand,
  type GetAgentCardCommandInput,
  type GetAgentCardCommandOutput,
  GetBatchEvaluationCommand,
  type GetBatchEvaluationCommandInput,
  type GetBatchEvaluationCommandOutput,
  GetBrowserSessionCommand,
  type GetBrowserSessionCommandInput,
  type GetBrowserSessionCommandOutput,
  GetCodeInterpreterSessionCommand,
  type GetCodeInterpreterSessionCommandInput,
  type GetCodeInterpreterSessionCommandOutput,
  GetEventCommand,
  type GetEventCommandInput,
  type GetEventCommandOutput,
  GetMemoryRecordCommand,
  type GetMemoryRecordCommandInput,
  type GetMemoryRecordCommandOutput,
  GetPaymentInstrumentBalanceCommand,
  type GetPaymentInstrumentBalanceCommandInput,
  type GetPaymentInstrumentBalanceCommandOutput,
  GetPaymentInstrumentCommand,
  type GetPaymentInstrumentCommandInput,
  type GetPaymentInstrumentCommandOutput,
  GetPaymentSessionCommand,
  type GetPaymentSessionCommandInput,
  type GetPaymentSessionCommandOutput,
  GetRecommendationCommand,
  type GetRecommendationCommandInput,
  type GetRecommendationCommandOutput,
  GetResourceApiKeyCommand,
  type GetResourceApiKeyCommandInput,
  type GetResourceApiKeyCommandOutput,
  GetResourceOauth2TokenCommand,
  type GetResourceOauth2TokenCommandInput,
  type GetResourceOauth2TokenCommandOutput,
  GetResourcePaymentTokenCommand,
  type GetResourcePaymentTokenCommandInput,
  type GetResourcePaymentTokenCommandOutput,
  GetWorkloadAccessTokenCommand,
  type GetWorkloadAccessTokenCommandInput,
  type GetWorkloadAccessTokenCommandOutput,
  GetWorkloadAccessTokenForJWTCommand,
  type GetWorkloadAccessTokenForJWTCommandInput,
  type GetWorkloadAccessTokenForJWTCommandOutput,
  GetWorkloadAccessTokenForUserIdCommand,
  type GetWorkloadAccessTokenForUserIdCommandInput,
  type GetWorkloadAccessTokenForUserIdCommandOutput,
  InvokeAgentRuntimeCommand,
  InvokeAgentRuntimeCommandCommand,
  type InvokeAgentRuntimeCommandCommandInput,
  type InvokeAgentRuntimeCommandCommandOutput,
  type InvokeAgentRuntimeCommandInput,
  type InvokeAgentRuntimeCommandOutput,
  InvokeBrowserCommand,
  type InvokeBrowserCommandInput,
  type InvokeBrowserCommandOutput,
  InvokeCodeInterpreterCommand,
  type InvokeCodeInterpreterCommandInput,
  type InvokeCodeInterpreterCommandOutput,
  InvokeHarnessCommand,
  type InvokeHarnessCommandInput,
  type InvokeHarnessCommandOutput,
  ListABTestsCommand,
  type ListABTestsCommandInput,
  type ListABTestsCommandOutput,
  ListActorsCommand,
  type ListActorsCommandInput,
  type ListActorsCommandOutput,
  ListBatchEvaluationsCommand,
  type ListBatchEvaluationsCommandInput,
  type ListBatchEvaluationsCommandOutput,
  ListBrowserSessionsCommand,
  type ListBrowserSessionsCommandInput,
  type ListBrowserSessionsCommandOutput,
  ListCodeInterpreterSessionsCommand,
  type ListCodeInterpreterSessionsCommandInput,
  type ListCodeInterpreterSessionsCommandOutput,
  ListEventsCommand,
  type ListEventsCommandInput,
  type ListEventsCommandOutput,
  ListMemoryExtractionJobsCommand,
  type ListMemoryExtractionJobsCommandInput,
  type ListMemoryExtractionJobsCommandOutput,
  ListMemoryRecordsCommand,
  type ListMemoryRecordsCommandInput,
  type ListMemoryRecordsCommandOutput,
  ListPaymentInstrumentsCommand,
  type ListPaymentInstrumentsCommandInput,
  type ListPaymentInstrumentsCommandOutput,
  ListPaymentSessionsCommand,
  type ListPaymentSessionsCommandInput,
  type ListPaymentSessionsCommandOutput,
  ListRecommendationsCommand,
  type ListRecommendationsCommandInput,
  type ListRecommendationsCommandOutput,
  ListSessionsCommand,
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  paginateListABTests,
  paginateListActors,
  paginateListBatchEvaluations,
  paginateListEvents,
  paginateListMemoryExtractionJobs,
  paginateListMemoryRecords,
  paginateListPaymentInstruments,
  paginateListPaymentSessions,
  paginateListRecommendations,
  paginateListSessions,
  paginateRetrieveMemoryRecords,
  ProcessPaymentCommand,
  type ProcessPaymentCommandInput,
  type ProcessPaymentCommandOutput,
  RetrieveMemoryRecordsCommand,
  type RetrieveMemoryRecordsCommandInput,
  type RetrieveMemoryRecordsCommandOutput,
  SaveBrowserSessionProfileCommand,
  type SaveBrowserSessionProfileCommandInput,
  type SaveBrowserSessionProfileCommandOutput,
  SearchRegistryRecordsCommand,
  type SearchRegistryRecordsCommandInput,
  type SearchRegistryRecordsCommandOutput,
  StartBatchEvaluationCommand,
  type StartBatchEvaluationCommandInput,
  type StartBatchEvaluationCommandOutput,
  StartBrowserSessionCommand,
  type StartBrowserSessionCommandInput,
  type StartBrowserSessionCommandOutput,
  StartCodeInterpreterSessionCommand,
  type StartCodeInterpreterSessionCommandInput,
  type StartCodeInterpreterSessionCommandOutput,
  StartMemoryExtractionJobCommand,
  type StartMemoryExtractionJobCommandInput,
  type StartMemoryExtractionJobCommandOutput,
  StartRecommendationCommand,
  type StartRecommendationCommandInput,
  type StartRecommendationCommandOutput,
  StopBatchEvaluationCommand,
  type StopBatchEvaluationCommandInput,
  type StopBatchEvaluationCommandOutput,
  StopBrowserSessionCommand,
  type StopBrowserSessionCommandInput,
  type StopBrowserSessionCommandOutput,
  StopCodeInterpreterSessionCommand,
  type StopCodeInterpreterSessionCommandInput,
  type StopCodeInterpreterSessionCommandOutput,
  StopRuntimeSessionCommand,
  type StopRuntimeSessionCommandInput,
  type StopRuntimeSessionCommandOutput,
  UpdateABTestCommand,
  type UpdateABTestCommandInput,
  type UpdateABTestCommandOutput,
  UpdateBrowserStreamCommand,
  type UpdateBrowserStreamCommandInput,
  type UpdateBrowserStreamCommandOutput,
} from "@aws-sdk/client-bedrock-agentcore";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import * as Instance from "./BedrockAgentCoreClientInstance.js";
import * as BedrockAgentCoreServiceConfig from "./BedrockAgentCoreServiceConfig.js";
import type {
  AccessDeniedError,
  ConflictError,
  DuplicateIdError,
  InternalServerError,
  InvalidInputError,
  ResourceNotFoundError,
  RetryableConflictError,
  RuntimeClientError,
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
  BatchCreateMemoryRecordsCommand,
  BatchDeleteMemoryRecordsCommand,
  BatchUpdateMemoryRecordsCommand,
  CompleteResourceTokenAuthCommand,
  CreateABTestCommand,
  CreateEventCommand,
  CreatePaymentInstrumentCommand,
  CreatePaymentSessionCommand,
  DeleteABTestCommand,
  DeleteBatchEvaluationCommand,
  DeleteEventCommand,
  DeleteMemoryRecordCommand,
  DeletePaymentInstrumentCommand,
  DeletePaymentSessionCommand,
  DeleteRecommendationCommand,
  EvaluateCommand,
  GetABTestCommand,
  GetAgentCardCommand,
  GetBatchEvaluationCommand,
  GetBrowserSessionCommand,
  GetCodeInterpreterSessionCommand,
  GetEventCommand,
  GetMemoryRecordCommand,
  GetPaymentInstrumentCommand,
  GetPaymentInstrumentBalanceCommand,
  GetPaymentSessionCommand,
  GetRecommendationCommand,
  GetResourceApiKeyCommand,
  GetResourceOauth2TokenCommand,
  GetResourcePaymentTokenCommand,
  GetWorkloadAccessTokenCommand,
  GetWorkloadAccessTokenForJWTCommand,
  GetWorkloadAccessTokenForUserIdCommand,
  InvokeAgentRuntimeCommand,
  InvokeAgentRuntimeCommandCommand,
  InvokeBrowserCommand,
  InvokeCodeInterpreterCommand,
  InvokeHarnessCommand,
  ListABTestsCommand,
  ListActorsCommand,
  ListBatchEvaluationsCommand,
  ListBrowserSessionsCommand,
  ListCodeInterpreterSessionsCommand,
  ListEventsCommand,
  ListMemoryExtractionJobsCommand,
  ListMemoryRecordsCommand,
  ListPaymentInstrumentsCommand,
  ListPaymentSessionsCommand,
  ListRecommendationsCommand,
  ListSessionsCommand,
  ProcessPaymentCommand,
  RetrieveMemoryRecordsCommand,
  SaveBrowserSessionProfileCommand,
  SearchRegistryRecordsCommand,
  StartBatchEvaluationCommand,
  StartBrowserSessionCommand,
  StartCodeInterpreterSessionCommand,
  StartMemoryExtractionJobCommand,
  StartRecommendationCommand,
  StopBatchEvaluationCommand,
  StopBrowserSessionCommand,
  StopCodeInterpreterSessionCommand,
  StopRuntimeSessionCommand,
  UpdateABTestCommand,
  UpdateBrowserStreamCommand,
};

const paginators = {
  paginateListABTests,
  paginateListActors,
  paginateListBatchEvaluations,
  paginateListEvents,
  paginateListMemoryExtractionJobs,
  paginateListMemoryRecords,
  paginateListPaymentInstruments,
  paginateListPaymentSessions,
  paginateListRecommendations,
  paginateListSessions,
  paginateRetrieveMemoryRecords,
};

interface BedrockAgentCoreService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchCreateMemoryRecordsCommand}
   */
  batchCreateMemoryRecords(
    args: BatchCreateMemoryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchCreateMemoryRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link BatchDeleteMemoryRecordsCommand}
   */
  batchDeleteMemoryRecords(
    args: BatchDeleteMemoryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteMemoryRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link BatchUpdateMemoryRecordsCommand}
   */
  batchUpdateMemoryRecords(
    args: BatchUpdateMemoryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchUpdateMemoryRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link CompleteResourceTokenAuthCommand}
   */
  completeResourceTokenAuth(
    args: CompleteResourceTokenAuthCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CompleteResourceTokenAuthCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link CreateABTestCommand}
   */
  createABTest(
    args: CreateABTestCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateABTestCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link CreateEventCommand}
   */
  createEvent(
    args: CreateEventCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | RetryableConflictError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link CreatePaymentInstrumentCommand}
   */
  createPaymentInstrument(
    args: CreatePaymentInstrumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePaymentInstrumentCommandOutput,
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
   * @see {@link CreatePaymentSessionCommand}
   */
  createPaymentSession(
    args: CreatePaymentSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePaymentSessionCommandOutput,
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
   * @see {@link DeleteABTestCommand}
   */
  deleteABTest(
    args: DeleteABTestCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteABTestCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link DeleteBatchEvaluationCommand}
   */
  deleteBatchEvaluation(
    args: DeleteBatchEvaluationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBatchEvaluationCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link DeleteEventCommand}
   */
  deleteEvent(
    args: DeleteEventCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link DeleteMemoryRecordCommand}
   */
  deleteMemoryRecord(
    args: DeleteMemoryRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMemoryRecordCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link DeletePaymentInstrumentCommand}
   */
  deletePaymentInstrument(
    args: DeletePaymentInstrumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePaymentInstrumentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeletePaymentSessionCommand}
   */
  deletePaymentSession(
    args: DeletePaymentSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePaymentSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteRecommendationCommand}
   */
  deleteRecommendation(
    args: DeleteRecommendationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRecommendationCommandOutput,
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
   * @see {@link EvaluateCommand}
   */
  evaluate(
    args: EvaluateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EvaluateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | DuplicateIdError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetABTestCommand}
   */
  getABTest(
    args: GetABTestCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetABTestCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetAgentCardCommand}
   */
  getAgentCard(
    args: GetAgentCardCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAgentCardCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | RetryableConflictError
    | RuntimeClientError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetBatchEvaluationCommand}
   */
  getBatchEvaluation(
    args: GetBatchEvaluationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBatchEvaluationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetBrowserSessionCommand}
   */
  getBrowserSession(
    args: GetBrowserSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBrowserSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetCodeInterpreterSessionCommand}
   */
  getCodeInterpreterSession(
    args: GetCodeInterpreterSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCodeInterpreterSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetEventCommand}
   */
  getEvent(
    args: GetEventCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEventCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link GetMemoryRecordCommand}
   */
  getMemoryRecord(
    args: GetMemoryRecordCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMemoryRecordCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link GetPaymentInstrumentCommand}
   */
  getPaymentInstrument(
    args: GetPaymentInstrumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPaymentInstrumentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPaymentInstrumentBalanceCommand}
   */
  getPaymentInstrumentBalance(
    args: GetPaymentInstrumentBalanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPaymentInstrumentBalanceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetPaymentSessionCommand}
   */
  getPaymentSession(
    args: GetPaymentSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPaymentSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetRecommendationCommand}
   */
  getRecommendation(
    args: GetRecommendationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRecommendationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link GetResourceApiKeyCommand}
   */
  getResourceApiKey(
    args: GetResourceApiKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourceApiKeyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetResourceOauth2TokenCommand}
   */
  getResourceOauth2Token(
    args: GetResourceOauth2TokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourceOauth2TokenCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetResourcePaymentTokenCommand}
   */
  getResourcePaymentToken(
    args: GetResourcePaymentTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePaymentTokenCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetWorkloadAccessTokenCommand}
   */
  getWorkloadAccessToken(
    args: GetWorkloadAccessTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkloadAccessTokenCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetWorkloadAccessTokenForJWTCommand}
   */
  getWorkloadAccessTokenForJWT(
    args: GetWorkloadAccessTokenForJWTCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkloadAccessTokenForJWTCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link GetWorkloadAccessTokenForUserIdCommand}
   */
  getWorkloadAccessTokenForUserId(
    args: GetWorkloadAccessTokenForUserIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkloadAccessTokenForUserIdCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link InvokeAgentRuntimeCommand}
   */
  invokeAgentRuntime(
    args: InvokeAgentRuntimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeAgentRuntimeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | RetryableConflictError
    | RuntimeClientError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link InvokeAgentRuntimeCommandCommand}
   */
  invokeAgentRuntimeCommand(
    args: InvokeAgentRuntimeCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeAgentRuntimeCommandCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | RetryableConflictError
    | RuntimeClientError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link InvokeBrowserCommand}
   */
  invokeBrowser(
    args: InvokeBrowserCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeBrowserCommandOutput,
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
   * @see {@link InvokeCodeInterpreterCommand}
   */
  invokeCodeInterpreter(
    args: InvokeCodeInterpreterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeCodeInterpreterCommandOutput,
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
   * @see {@link InvokeHarnessCommand}
   */
  invokeHarness(
    args: InvokeHarnessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InvokeHarnessCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | RuntimeClientError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListABTestsCommand}
   */
  listABTests(
    args: ListABTestsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListABTestsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  listABTestsStream(
    args: ListABTestsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListABTestsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link ListActorsCommand}
   */
  listActors(
    args: ListActorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListActorsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  listActorsStream(
    args: ListActorsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListActorsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link ListBatchEvaluationsCommand}
   */
  listBatchEvaluations(
    args: ListBatchEvaluationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBatchEvaluationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  listBatchEvaluationsStream(
    args: ListBatchEvaluationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListBatchEvaluationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link ListBrowserSessionsCommand}
   */
  listBrowserSessions(
    args: ListBrowserSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBrowserSessionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListCodeInterpreterSessionsCommand}
   */
  listCodeInterpreterSessions(
    args: ListCodeInterpreterSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCodeInterpreterSessionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListEventsCommand}
   */
  listEvents(
    args: ListEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEventsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  listEventsStream(
    args: ListEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListEventsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link ListMemoryExtractionJobsCommand}
   */
  listMemoryExtractionJobs(
    args: ListMemoryExtractionJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMemoryExtractionJobsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  listMemoryExtractionJobsStream(
    args: ListMemoryExtractionJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListMemoryExtractionJobsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link ListMemoryRecordsCommand}
   */
  listMemoryRecords(
    args: ListMemoryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMemoryRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  listMemoryRecordsStream(
    args: ListMemoryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListMemoryRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link ListPaymentInstrumentsCommand}
   */
  listPaymentInstruments(
    args: ListPaymentInstrumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPaymentInstrumentsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listPaymentInstrumentsStream(
    args: ListPaymentInstrumentsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPaymentInstrumentsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPaymentSessionsCommand}
   */
  listPaymentSessions(
    args: ListPaymentSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPaymentSessionsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listPaymentSessionsStream(
    args: ListPaymentSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPaymentSessionsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRecommendationsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  listRecommendationsStream(
    args: ListRecommendationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListRecommendationsCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(
    args: ListSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSessionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  listSessionsStream(
    args: ListSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListSessionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link ProcessPaymentCommand}
   */
  processPayment(
    args: ProcessPaymentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ProcessPaymentCommandOutput,
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
   * @see {@link RetrieveMemoryRecordsCommand}
   */
  retrieveMemoryRecords(
    args: RetrieveMemoryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RetrieveMemoryRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  retrieveMemoryRecordsStream(
    args: RetrieveMemoryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    RetrieveMemoryRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidInputError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link SaveBrowserSessionProfileCommand}
   */
  saveBrowserSessionProfile(
    args: SaveBrowserSessionProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SaveBrowserSessionProfileCommandOutput,
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
   * @see {@link SearchRegistryRecordsCommand}
   */
  searchRegistryRecords(
    args: SearchRegistryRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SearchRegistryRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link StartBatchEvaluationCommand}
   */
  startBatchEvaluation(
    args: StartBatchEvaluationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartBatchEvaluationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link StartBrowserSessionCommand}
   */
  startBrowserSession(
    args: StartBrowserSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartBrowserSessionCommandOutput,
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
   * @see {@link StartCodeInterpreterSessionCommand}
   */
  startCodeInterpreterSession(
    args: StartCodeInterpreterSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartCodeInterpreterSessionCommandOutput,
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
   * @see {@link StartMemoryExtractionJobCommand}
   */
  startMemoryExtractionJob(
    args: StartMemoryExtractionJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartMemoryExtractionJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ResourceNotFoundError
    | ServiceError
    | ServiceQuotaExceededError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link StartRecommendationCommand}
   */
  startRecommendation(
    args: StartRecommendationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartRecommendationCommandOutput,
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
   * @see {@link StopBatchEvaluationCommand}
   */
  stopBatchEvaluation(
    args: StopBatchEvaluationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopBatchEvaluationCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link StopBrowserSessionCommand}
   */
  stopBrowserSession(
    args: StopBrowserSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopBrowserSessionCommandOutput,
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
   * @see {@link StopCodeInterpreterSessionCommand}
   */
  stopCodeInterpreterSession(
    args: StopCodeInterpreterSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopCodeInterpreterSessionCommandOutput,
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
   * @see {@link StopRuntimeSessionCommand}
   */
  stopRuntimeSession(
    args: StopRuntimeSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopRuntimeSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | RetryableConflictError
    | RuntimeClientError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link UpdateABTestCommand}
   */
  updateABTest(
    args: UpdateABTestCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateABTestCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | UnauthorizedError
    | ValidationError
  >;

  /**
   * @see {@link UpdateBrowserStreamCommand}
   */
  updateBrowserStream(
    args: UpdateBrowserStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBrowserStreamCommandOutput,
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
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeBedrockAgentCoreService = Effect.gen(function*() {
  const client = yield* Instance.BedrockAgentCoreClientInstance;

  return yield* Service.fromClientAndCommands<BedrockAgentCoreService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: BedrockAgentCoreServiceConfig.toBedrockAgentCoreClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class BedrockAgentCoreService extends Effect.Tag("@effect-aws/client-bedrock-agentcore/BedrockAgentCoreService")<
  BedrockAgentCoreService,
  BedrockAgentCoreService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeBedrockAgentCoreService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: BedrockAgentCoreService.Config) =>
    Layer.effect(this, makeBedrockAgentCoreService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(BedrockAgentCoreServiceConfig.setBedrockAgentCoreServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: BedrockAgentCoreClientConfig) => BedrockAgentCoreClient,
  ) =>
    Layer.effect(this, makeBedrockAgentCoreService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.BedrockAgentCoreClientInstance,
          Effect.map(BedrockAgentCoreServiceConfig.toBedrockAgentCoreClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace BedrockAgentCoreService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<BedrockAgentCoreClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = BedrockAgentCoreService$;
}
