/**
 * @since 1.0.0
 */
import {
  AddPermissionCommand,
  type AddPermissionCommandInput,
  type AddPermissionCommandOutput,
  CheckIfPhoneNumberIsOptedOutCommand,
  type CheckIfPhoneNumberIsOptedOutCommandInput,
  type CheckIfPhoneNumberIsOptedOutCommandOutput,
  ConfirmSubscriptionCommand,
  type ConfirmSubscriptionCommandInput,
  type ConfirmSubscriptionCommandOutput,
  CreatePlatformApplicationCommand,
  type CreatePlatformApplicationCommandInput,
  type CreatePlatformApplicationCommandOutput,
  CreatePlatformEndpointCommand,
  type CreatePlatformEndpointCommandInput,
  type CreatePlatformEndpointCommandOutput,
  CreateSMSSandboxPhoneNumberCommand,
  type CreateSMSSandboxPhoneNumberCommandInput,
  type CreateSMSSandboxPhoneNumberCommandOutput,
  CreateTopicCommand,
  type CreateTopicCommandInput,
  type CreateTopicCommandOutput,
  DeleteEndpointCommand,
  type DeleteEndpointCommandInput,
  type DeleteEndpointCommandOutput,
  DeletePlatformApplicationCommand,
  type DeletePlatformApplicationCommandInput,
  type DeletePlatformApplicationCommandOutput,
  DeleteSMSSandboxPhoneNumberCommand,
  type DeleteSMSSandboxPhoneNumberCommandInput,
  type DeleteSMSSandboxPhoneNumberCommandOutput,
  DeleteTopicCommand,
  type DeleteTopicCommandInput,
  type DeleteTopicCommandOutput,
  GetDataProtectionPolicyCommand,
  type GetDataProtectionPolicyCommandInput,
  type GetDataProtectionPolicyCommandOutput,
  GetEndpointAttributesCommand,
  type GetEndpointAttributesCommandInput,
  type GetEndpointAttributesCommandOutput,
  GetPlatformApplicationAttributesCommand,
  type GetPlatformApplicationAttributesCommandInput,
  type GetPlatformApplicationAttributesCommandOutput,
  GetSMSAttributesCommand,
  type GetSMSAttributesCommandInput,
  type GetSMSAttributesCommandOutput,
  GetSMSSandboxAccountStatusCommand,
  type GetSMSSandboxAccountStatusCommandInput,
  type GetSMSSandboxAccountStatusCommandOutput,
  GetSubscriptionAttributesCommand,
  type GetSubscriptionAttributesCommandInput,
  type GetSubscriptionAttributesCommandOutput,
  GetTopicAttributesCommand,
  type GetTopicAttributesCommandInput,
  type GetTopicAttributesCommandOutput,
  ListEndpointsByPlatformApplicationCommand,
  type ListEndpointsByPlatformApplicationCommandInput,
  type ListEndpointsByPlatformApplicationCommandOutput,
  ListOriginationNumbersCommand,
  type ListOriginationNumbersCommandInput,
  type ListOriginationNumbersCommandOutput,
  ListPhoneNumbersOptedOutCommand,
  type ListPhoneNumbersOptedOutCommandInput,
  type ListPhoneNumbersOptedOutCommandOutput,
  ListPlatformApplicationsCommand,
  type ListPlatformApplicationsCommandInput,
  type ListPlatformApplicationsCommandOutput,
  ListSMSSandboxPhoneNumbersCommand,
  type ListSMSSandboxPhoneNumbersCommandInput,
  type ListSMSSandboxPhoneNumbersCommandOutput,
  ListSubscriptionsByTopicCommand,
  type ListSubscriptionsByTopicCommandInput,
  type ListSubscriptionsByTopicCommandOutput,
  ListSubscriptionsCommand,
  type ListSubscriptionsCommandInput,
  type ListSubscriptionsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTopicsCommand,
  type ListTopicsCommandInput,
  type ListTopicsCommandOutput,
  OptInPhoneNumberCommand,
  type OptInPhoneNumberCommandInput,
  type OptInPhoneNumberCommandOutput,
  PublishBatchCommand,
  type PublishBatchCommandInput,
  type PublishBatchCommandOutput,
  PublishCommand,
  type PublishCommandInput,
  type PublishCommandOutput,
  PutDataProtectionPolicyCommand,
  type PutDataProtectionPolicyCommandInput,
  type PutDataProtectionPolicyCommandOutput,
  RemovePermissionCommand,
  type RemovePermissionCommandInput,
  type RemovePermissionCommandOutput,
  SetEndpointAttributesCommand,
  type SetEndpointAttributesCommandInput,
  type SetEndpointAttributesCommandOutput,
  SetPlatformApplicationAttributesCommand,
  type SetPlatformApplicationAttributesCommandInput,
  type SetPlatformApplicationAttributesCommandOutput,
  SetSMSAttributesCommand,
  type SetSMSAttributesCommandInput,
  type SetSMSAttributesCommandOutput,
  SetSubscriptionAttributesCommand,
  type SetSubscriptionAttributesCommandInput,
  type SetSubscriptionAttributesCommandOutput,
  SetTopicAttributesCommand,
  type SetTopicAttributesCommandInput,
  type SetTopicAttributesCommandOutput,
  type SNSClient,
  type SNSClientConfig,
  SNSServiceException,
  SubscribeCommand,
  type SubscribeCommandInput,
  type SubscribeCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UnsubscribeCommand,
  type UnsubscribeCommandInput,
  type UnsubscribeCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  VerifySMSSandboxPhoneNumberCommand,
  type VerifySMSSandboxPhoneNumberCommandInput,
  type VerifySMSSandboxPhoneNumberCommandOutput,
} from "@aws-sdk/client-sns";
import { Data, Effect, Layer, Record } from "effect";
import type {
  AuthorizationError,
  BatchEntryIdsNotDistinctError,
  BatchRequestTooLongError,
  ConcurrentAccessError,
  EmptyBatchRequestError,
  EndpointDisabledError,
  FilterPolicyLimitExceededError,
  InternalError,
  InvalidBatchEntryIdError,
  InvalidParameterError,
  InvalidParameterValueError,
  InvalidSecurityError,
  InvalidStateError,
  KMSAccessDeniedError,
  KMSDisabledError,
  KMSInvalidStateError,
  KMSNotFoundError,
  KMSOptInRequiredError,
  KMSThrottlingError,
  NotFoundError,
  OptedOutError,
  PlatformApplicationDisabledError,
  ReplayLimitExceededError,
  ResourceNotFoundError,
  StaleTagError,
  SubscriptionLimitExceededError,
  TaggedException,
  TagLimitExceededError,
  TagPolicyError,
  ThrottledError,
  TooManyEntriesInBatchRequestError,
  TopicLimitExceededError,
  UserError,
  ValidationError,
  VerificationError,
} from "./Errors.js";
import { AllServiceErrors, SdkError } from "./Errors.js";
import { SNSClientInstance, SNSClientInstanceLayer } from "./SNSClientInstance.js";
import {
  DefaultSNSClientConfigLayer,
  makeDefaultSNSClientInstanceConfig,
  SNSClientInstanceConfig,
} from "./SNSClientInstanceConfig.js";

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
  AddPermissionCommand,
  CheckIfPhoneNumberIsOptedOutCommand,
  ConfirmSubscriptionCommand,
  CreatePlatformApplicationCommand,
  CreatePlatformEndpointCommand,
  CreateSMSSandboxPhoneNumberCommand,
  CreateTopicCommand,
  DeleteEndpointCommand,
  DeletePlatformApplicationCommand,
  DeleteSMSSandboxPhoneNumberCommand,
  DeleteTopicCommand,
  GetDataProtectionPolicyCommand,
  GetEndpointAttributesCommand,
  GetPlatformApplicationAttributesCommand,
  GetSMSAttributesCommand,
  GetSMSSandboxAccountStatusCommand,
  GetSubscriptionAttributesCommand,
  GetTopicAttributesCommand,
  ListEndpointsByPlatformApplicationCommand,
  ListOriginationNumbersCommand,
  ListPhoneNumbersOptedOutCommand,
  ListPlatformApplicationsCommand,
  ListSMSSandboxPhoneNumbersCommand,
  ListSubscriptionsCommand,
  ListSubscriptionsByTopicCommand,
  ListTagsForResourceCommand,
  ListTopicsCommand,
  OptInPhoneNumberCommand,
  PublishCommand,
  PublishBatchCommand,
  PutDataProtectionPolicyCommand,
  RemovePermissionCommand,
  SetEndpointAttributesCommand,
  SetPlatformApplicationAttributesCommand,
  SetSMSAttributesCommand,
  SetSubscriptionAttributesCommand,
  SetTopicAttributesCommand,
  SubscribeCommand,
  TagResourceCommand,
  UnsubscribeCommand,
  UntagResourceCommand,
  VerifySMSSandboxPhoneNumberCommand,
};

interface SNSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddPermissionCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link CheckIfPhoneNumberIsOptedOutCommand}
   */
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CheckIfPhoneNumberIsOptedOutCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError
  >;

  /**
   * @see {@link ConfirmSubscriptionCommand}
   */
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmSubscriptionCommandOutput,
    | SdkError
    | AuthorizationError
    | FilterPolicyLimitExceededError
    | InternalError
    | InvalidParameterError
    | NotFoundError
    | ReplayLimitExceededError
    | SubscriptionLimitExceededError
  >;

  /**
   * @see {@link CreatePlatformApplicationCommand}
   */
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePlatformApplicationCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link CreatePlatformEndpointCommand}
   */
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePlatformEndpointCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link CreateSMSSandboxPhoneNumberCommand}
   */
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSMSSandboxPhoneNumberCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | OptedOutError
    | ThrottledError
    | UserError
  >;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTopicCommandOutput,
    | SdkError
    | AuthorizationError
    | ConcurrentAccessError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | StaleTagError
    | TagLimitExceededError
    | TagPolicyError
    | TopicLimitExceededError
  >;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEndpointCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link DeletePlatformApplicationCommand}
   */
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePlatformApplicationCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link DeleteSMSSandboxPhoneNumberCommand}
   */
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSMSSandboxPhoneNumberCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottledError
    | UserError
  >;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTopicCommandOutput,
    | SdkError
    | AuthorizationError
    | ConcurrentAccessError
    | InternalError
    | InvalidParameterError
    | InvalidStateError
    | NotFoundError
    | StaleTagError
    | TagPolicyError
  >;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataProtectionPolicyCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError
  >;

  /**
   * @see {@link GetEndpointAttributesCommand}
   */
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEndpointAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link GetPlatformApplicationAttributesCommand}
   */
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPlatformApplicationAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link GetSMSAttributesCommand}
   */
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSMSAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError
  >;

  /**
   * @see {@link GetSMSSandboxAccountStatusCommand}
   */
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSMSSandboxAccountStatusCommandOutput,
    SdkError | AuthorizationError | InternalError | ThrottledError
  >;

  /**
   * @see {@link GetSubscriptionAttributesCommand}
   */
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSubscriptionAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link GetTopicAttributesCommand}
   */
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTopicAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError
  >;

  /**
   * @see {@link ListEndpointsByPlatformApplicationCommand}
   */
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEndpointsByPlatformApplicationCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link ListOriginationNumbersCommand}
   */
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOriginationNumbersCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError
    | ValidationError
  >;

  /**
   * @see {@link ListPhoneNumbersOptedOutCommand}
   */
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPhoneNumbersOptedOutCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError
  >;

  /**
   * @see {@link ListPlatformApplicationsCommand}
   */
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPlatformApplicationsCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   */
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSMSSandboxPhoneNumbersCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottledError
  >;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSubscriptionsCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   */
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSubscriptionsByTopicCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
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
    | AuthorizationError
    | ConcurrentAccessError
    | InvalidParameterError
    | ResourceNotFoundError
    | TagPolicyError
  >;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(
    args: ListTopicsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTopicsCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link OptInPhoneNumberCommand}
   */
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    OptInPhoneNumberCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError
  >;

  /**
   * @see {@link PublishCommand}
   */
  publish(
    args: PublishCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishCommandOutput,
    | SdkError
    | AuthorizationError
    | EndpointDisabledError
    | InternalError
    | InvalidParameterError
    | InvalidParameterValueError
    | InvalidSecurityError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | KMSOptInRequiredError
    | KMSThrottlingError
    | NotFoundError
    | PlatformApplicationDisabledError
    | ValidationError
  >;

  /**
   * @see {@link PublishBatchCommand}
   */
  publishBatch(
    args: PublishBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishBatchCommandOutput,
    | SdkError
    | AuthorizationError
    | BatchEntryIdsNotDistinctError
    | BatchRequestTooLongError
    | EmptyBatchRequestError
    | EndpointDisabledError
    | InternalError
    | InvalidBatchEntryIdError
    | InvalidParameterError
    | InvalidParameterValueError
    | InvalidSecurityError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | KMSOptInRequiredError
    | KMSThrottlingError
    | NotFoundError
    | PlatformApplicationDisabledError
    | TooManyEntriesInBatchRequestError
    | ValidationError
  >;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDataProtectionPolicyCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemovePermissionCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link SetEndpointAttributesCommand}
   */
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetEndpointAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link SetPlatformApplicationAttributesCommand}
   */
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetPlatformApplicationAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError
  >;

  /**
   * @see {@link SetSMSAttributesCommand}
   */
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetSMSAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError
  >;

  /**
   * @see {@link SetSubscriptionAttributesCommand}
   */
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetSubscriptionAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | FilterPolicyLimitExceededError
    | InternalError
    | InvalidParameterError
    | NotFoundError
    | ReplayLimitExceededError
  >;

  /**
   * @see {@link SetTopicAttributesCommand}
   */
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetTopicAttributesCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError
  >;

  /**
   * @see {@link SubscribeCommand}
   */
  subscribe(
    args: SubscribeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SubscribeCommandOutput,
    | SdkError
    | AuthorizationError
    | FilterPolicyLimitExceededError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError
    | ReplayLimitExceededError
    | SubscriptionLimitExceededError
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
    | AuthorizationError
    | ConcurrentAccessError
    | InvalidParameterError
    | ResourceNotFoundError
    | StaleTagError
    | TagLimitExceededError
    | TagPolicyError
  >;

  /**
   * @see {@link UnsubscribeCommand}
   */
  unsubscribe(
    args: UnsubscribeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UnsubscribeCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError
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
    | AuthorizationError
    | ConcurrentAccessError
    | InvalidParameterError
    | ResourceNotFoundError
    | StaleTagError
    | TagLimitExceededError
    | TagPolicyError
  >;

  /**
   * @see {@link VerifySMSSandboxPhoneNumberCommand}
   */
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifySMSSandboxPhoneNumberCommandOutput,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottledError
    | VerificationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSNSService = Effect.gen(function*(_) {
  const client = yield* _(SNSClientInstance);

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
            e instanceof SNSServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<SNSServiceException>
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
  }, {}) as SNSService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class SNSService extends Effect.Tag("@effect-aws/client-sns/SNSService")<
  SNSService,
  SNSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSNSService).pipe(
    Layer.provide(SNSClientInstanceLayer),
    Layer.provide(DefaultSNSClientConfigLayer),
  );
  static readonly layer = (config: SNSClientConfig) =>
    Layer.effect(this, makeSNSService).pipe(
      Layer.provide(SNSClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          SNSClientInstanceConfig,
          makeDefaultSNSClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SNSClientConfig) => SNSClient,
  ) =>
    Layer.effect(this, makeSNSService).pipe(
      Layer.provide(
        Layer.effect(
          SNSClientInstance,
          Effect.map(makeDefaultSNSClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias SNSService
 */
export const SNS = SNSService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use SNS.baseLayer instead
 */
export const BaseSNSServiceLayer = Layer.effect(SNSService, makeSNSService);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use SNS.layer instead
 */
export const SNSServiceLayer = BaseSNSServiceLayer.pipe(
  Layer.provide(SNSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use SNS.defaultLayer instead
 */
export const DefaultSNSServiceLayer = SNSService.defaultLayer;
