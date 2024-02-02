/**
 * @since 1.0.0
 */
import {
  AddPermissionCommand,
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
  CheckIfPhoneNumberIsOptedOutCommand,
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput,
  ConfirmSubscriptionCommand,
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
  CreatePlatformApplicationCommand,
  CreatePlatformApplicationCommandInput,
  CreatePlatformApplicationCommandOutput,
  CreatePlatformEndpointCommand,
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput,
  CreateSMSSandboxPhoneNumberCommand,
  CreateSMSSandboxPhoneNumberCommandInput,
  CreateSMSSandboxPhoneNumberCommandOutput,
  CreateTopicCommand,
  CreateTopicCommandInput,
  CreateTopicCommandOutput,
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
  DeletePlatformApplicationCommand,
  DeletePlatformApplicationCommandInput,
  DeletePlatformApplicationCommandOutput,
  DeleteSMSSandboxPhoneNumberCommand,
  DeleteSMSSandboxPhoneNumberCommandInput,
  DeleteSMSSandboxPhoneNumberCommandOutput,
  DeleteTopicCommand,
  DeleteTopicCommandInput,
  DeleteTopicCommandOutput,
  GetDataProtectionPolicyCommand,
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
  GetEndpointAttributesCommand,
  GetEndpointAttributesCommandInput,
  GetEndpointAttributesCommandOutput,
  GetPlatformApplicationAttributesCommand,
  GetPlatformApplicationAttributesCommandInput,
  GetPlatformApplicationAttributesCommandOutput,
  GetSMSAttributesCommand,
  GetSMSAttributesCommandInput,
  GetSMSAttributesCommandOutput,
  GetSMSSandboxAccountStatusCommand,
  GetSMSSandboxAccountStatusCommandInput,
  GetSMSSandboxAccountStatusCommandOutput,
  GetSubscriptionAttributesCommand,
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput,
  GetTopicAttributesCommand,
  GetTopicAttributesCommandInput,
  GetTopicAttributesCommandOutput,
  ListEndpointsByPlatformApplicationCommand,
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
  ListOriginationNumbersCommand,
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
  ListPhoneNumbersOptedOutCommand,
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
  ListPlatformApplicationsCommand,
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
  ListSMSSandboxPhoneNumbersCommand,
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput,
  ListSubscriptionsByTopicCommand,
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  ListTopicsCommand,
  ListTopicsCommandInput,
  ListTopicsCommandOutput,
  OptInPhoneNumberCommand,
  OptInPhoneNumberCommandInput,
  OptInPhoneNumberCommandOutput,
  PublishBatchCommand,
  PublishBatchCommandInput,
  PublishBatchCommandOutput,
  PublishCommand,
  PublishCommandInput,
  PublishCommandOutput,
  PutDataProtectionPolicyCommand,
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
  SNSServiceException,
  SetEndpointAttributesCommand,
  SetEndpointAttributesCommandInput,
  SetEndpointAttributesCommandOutput,
  SetPlatformApplicationAttributesCommand,
  SetPlatformApplicationAttributesCommandInput,
  SetPlatformApplicationAttributesCommandOutput,
  SetSMSAttributesCommand,
  SetSMSAttributesCommandInput,
  SetSMSAttributesCommandOutput,
  SetSubscriptionAttributesCommand,
  SetSubscriptionAttributesCommandInput,
  SetSubscriptionAttributesCommandOutput,
  SetTopicAttributesCommand,
  SetTopicAttributesCommandInput,
  SetTopicAttributesCommandOutput,
  SubscribeCommand,
  SubscribeCommandInput,
  SubscribeCommandOutput,
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput,
  UnsubscribeCommand,
  UnsubscribeCommandInput,
  UnsubscribeCommandOutput,
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  VerifySMSSandboxPhoneNumberCommand,
  VerifySMSSandboxPhoneNumberCommandInput,
  VerifySMSSandboxPhoneNumberCommandOutput,
} from "@aws-sdk/client-sns";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, ReadonlyRecord } from "effect";
import {
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
  KMSAccessDeniedError,
  KMSDisabledError,
  KMSInvalidStateError,
  KMSNotFoundError,
  KMSOptInRequiredError,
  KMSThrottlingError,
  NotFoundError,
  OptedOutError,
  PlatformApplicationDisabledError,
  ResourceNotFoundError,
  SdkError,
  StaleTagError,
  SubscriptionLimitExceededError,
  TagLimitExceededError,
  TagPolicyError,
  TaggedException,
  ThrottledError,
  TooManyEntriesInBatchRequestError,
  TopicLimitExceededError,
  UserError,
  ValidationError,
  VerificationError,
} from "./Errors";
import {
  DefaultSNSClientInstanceLayer,
  SNSClientInstance,
  SNSClientInstanceLayer,
} from "./SNSClientInstance";
import { DefaultSNSClientConfigLayer } from "./SNSClientInstanceConfig";

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

/**
 * @since 1.0.0
 * @category models
 */
export interface SNSService {
  readonly _: unique symbol;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    AddPermissionCommandOutput
  >;

  /**
   * @see {@link CheckIfPhoneNumberIsOptedOutCommand}
   */
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError,
    CheckIfPhoneNumberIsOptedOutCommandOutput
  >;

  /**
   * @see {@link ConfirmSubscriptionCommand}
   */
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | FilterPolicyLimitExceededError
    | InternalError
    | InvalidParameterError
    | NotFoundError
    | SubscriptionLimitExceededError,
    ConfirmSubscriptionCommandOutput
  >;

  /**
   * @see {@link CreatePlatformApplicationCommand}
   */
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | AuthorizationError | InternalError | InvalidParameterError,
    CreatePlatformApplicationCommandOutput
  >;

  /**
   * @see {@link CreatePlatformEndpointCommand}
   */
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    CreatePlatformEndpointCommandOutput
  >;

  /**
   * @see {@link CreateSMSSandboxPhoneNumberCommand}
   */
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | OptedOutError
    | ThrottledError
    | UserError,
    CreateSMSSandboxPhoneNumberCommandOutput
  >;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | ConcurrentAccessError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | StaleTagError
    | TagLimitExceededError
    | TagPolicyError
    | TopicLimitExceededError,
    CreateTopicCommandOutput
  >;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | AuthorizationError | InternalError | InvalidParameterError,
    DeleteEndpointCommandOutput
  >;

  /**
   * @see {@link DeletePlatformApplicationCommand}
   */
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | AuthorizationError | InternalError | InvalidParameterError,
    DeletePlatformApplicationCommandOutput
  >;

  /**
   * @see {@link DeleteSMSSandboxPhoneNumberCommand}
   */
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottledError
    | UserError,
    DeleteSMSSandboxPhoneNumberCommandOutput
  >;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | ConcurrentAccessError
    | InternalError
    | InvalidParameterError
    | NotFoundError
    | StaleTagError
    | TagPolicyError,
    DeleteTopicCommandOutput
  >;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError,
    GetDataProtectionPolicyCommandOutput
  >;

  /**
   * @see {@link GetEndpointAttributesCommand}
   */
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    GetEndpointAttributesCommandOutput
  >;

  /**
   * @see {@link GetPlatformApplicationAttributesCommand}
   */
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    GetPlatformApplicationAttributesCommandOutput
  >;

  /**
   * @see {@link GetSMSAttributesCommand}
   */
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError,
    GetSMSAttributesCommandOutput
  >;

  /**
   * @see {@link GetSMSSandboxAccountStatusCommand}
   */
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | AuthorizationError | InternalError | ThrottledError,
    GetSMSSandboxAccountStatusCommandOutput
  >;

  /**
   * @see {@link GetSubscriptionAttributesCommand}
   */
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    GetSubscriptionAttributesCommandOutput
  >;

  /**
   * @see {@link GetTopicAttributesCommand}
   */
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError,
    GetTopicAttributesCommandOutput
  >;

  /**
   * @see {@link ListEndpointsByPlatformApplicationCommand}
   */
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    ListEndpointsByPlatformApplicationCommandOutput
  >;

  /**
   * @see {@link ListOriginationNumbersCommand}
   */
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError
    | ValidationError,
    ListOriginationNumbersCommandOutput
  >;

  /**
   * @see {@link ListPhoneNumbersOptedOutCommand}
   */
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError,
    ListPhoneNumbersOptedOutCommandOutput
  >;

  /**
   * @see {@link ListPlatformApplicationsCommand}
   */
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | AuthorizationError | InternalError | InvalidParameterError,
    ListPlatformApplicationsCommandOutput
  >;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   */
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottledError,
    ListSMSSandboxPhoneNumbersCommandOutput
  >;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | AuthorizationError | InternalError | InvalidParameterError,
    ListSubscriptionsCommandOutput
  >;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   */
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    ListSubscriptionsByTopicCommandOutput
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | ConcurrentAccessError
    | InvalidParameterError
    | ResourceNotFoundError
    | TagPolicyError,
    ListTagsForResourceCommandOutput
  >;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(
    args: ListTopicsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    SdkError | AuthorizationError | InternalError | InvalidParameterError,
    ListTopicsCommandOutput
  >;

  /**
   * @see {@link OptInPhoneNumberCommand}
   */
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError,
    OptInPhoneNumberCommandOutput
  >;

  /**
   * @see {@link PublishCommand}
   */
  publish(
    args: PublishCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | EndpointDisabledError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | KMSOptInRequiredError
    | KMSThrottlingError
    | NotFoundError
    | InvalidParameterValueError
    | PlatformApplicationDisabledError
    | ValidationError,
    PublishCommandOutput
  >;

  /**
   * @see {@link PublishBatchCommand}
   */
  publishBatch(
    args: PublishBatchCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | BatchEntryIdsNotDistinctError
    | BatchRequestTooLongError
    | EmptyBatchRequestError
    | EndpointDisabledError
    | InternalError
    | InvalidBatchEntryIdError
    | InvalidParameterError
    | InvalidSecurityError
    | KMSAccessDeniedError
    | KMSDisabledError
    | KMSInvalidStateError
    | KMSNotFoundError
    | KMSOptInRequiredError
    | KMSThrottlingError
    | NotFoundError
    | InvalidParameterValueError
    | PlatformApplicationDisabledError
    | TooManyEntriesInBatchRequestError
    | ValidationError,
    PublishBatchCommandOutput
  >;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError,
    PutDataProtectionPolicyCommandOutput
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    RemovePermissionCommandOutput
  >;

  /**
   * @see {@link SetEndpointAttributesCommand}
   */
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    SetEndpointAttributesCommandOutput
  >;

  /**
   * @see {@link SetPlatformApplicationAttributesCommand}
   */
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    SetPlatformApplicationAttributesCommandOutput
  >;

  /**
   * @see {@link SetSMSAttributesCommand}
   */
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ThrottledError,
    SetSMSAttributesCommandOutput
  >;

  /**
   * @see {@link SetSubscriptionAttributesCommand}
   */
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | FilterPolicyLimitExceededError
    | InternalError
    | InvalidParameterError
    | NotFoundError,
    SetSubscriptionAttributesCommandOutput
  >;

  /**
   * @see {@link SetTopicAttributesCommand}
   */
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError,
    SetTopicAttributesCommandOutput
  >;

  /**
   * @see {@link SubscribeCommand}
   */
  subscribe(
    args: SubscribeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | FilterPolicyLimitExceededError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError
    | SubscriptionLimitExceededError,
    SubscribeCommandOutput
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | ConcurrentAccessError
    | InvalidParameterError
    | ResourceNotFoundError
    | StaleTagError
    | TagLimitExceededError
    | TagPolicyError,
    TagResourceCommandOutput
  >;

  /**
   * @see {@link UnsubscribeCommand}
   */
  unsubscribe(
    args: UnsubscribeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | InvalidSecurityError
    | NotFoundError,
    UnsubscribeCommandOutput
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | ConcurrentAccessError
    | InvalidParameterError
    | ResourceNotFoundError
    | StaleTagError
    | TagLimitExceededError
    | TagPolicyError,
    UntagResourceCommandOutput
  >;

  /**
   * @see {@link VerifySMSSandboxPhoneNumberCommand}
   */
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    | SdkError
    | AuthorizationError
    | InternalError
    | InvalidParameterError
    | ResourceNotFoundError
    | ThrottledError
    | VerificationError,
    VerifySMSSandboxPhoneNumberCommandOutput
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const SNSService = Context.Tag<SNSService>(
  Symbol.for("@effect-aws/client-sns/SNSService"),
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSNSService = Effect.gen(function* (_) {
  const client = yield* _(SNSClientInstance);

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SNSServiceException) {
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
  }, {}) as SNSService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseSNSServiceLayer = Layer.effect(SNSService, makeSNSService);

/**
 * @since 1.0.0
 * @category layers
 */
export const SNSServiceLayer = BaseSNSServiceLayer.pipe(
  Layer.provide(SNSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSNSServiceLayer = SNSServiceLayer.pipe(
  Layer.provide(DefaultSNSClientConfigLayer),
);

// -------------------- Danger Zone --------------------

/**
 * @since 0.1.0
 * @deprecated
 */
export const BaseSNSServiceEffect = makeSNSService;

/**
 * @since 0.1.0
 * @deprecated
 */
export const SNSServiceEffect = BaseSNSServiceEffect.pipe(
  Effect.provide(SNSClientInstanceLayer),
);

/**
 * @since 0.1.0
 * @deprecated
 */
export const DefaultSNSServiceEffect = BaseSNSServiceEffect.pipe(
  Effect.provide(DefaultSNSClientInstanceLayer),
);
