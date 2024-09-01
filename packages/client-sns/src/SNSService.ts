/**
 * @since 1.0.0
 */
import {
  SNSServiceException,
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
  ListSubscriptionsCommand,
  type ListSubscriptionsCommandInput,
  type ListSubscriptionsCommandOutput,
  ListSubscriptionsByTopicCommand,
  type ListSubscriptionsByTopicCommandInput,
  type ListSubscriptionsByTopicCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTopicsCommand,
  type ListTopicsCommandInput,
  type ListTopicsCommandOutput,
  OptInPhoneNumberCommand,
  type OptInPhoneNumberCommandInput,
  type OptInPhoneNumberCommandOutput,
  PublishCommand,
  type PublishCommandInput,
  type PublishCommandOutput,
  PublishBatchCommand,
  type PublishBatchCommandInput,
  type PublishBatchCommandOutput,
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
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
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
  TagLimitExceededError,
  TagPolicyError,
  ThrottledError,
  TooManyEntriesInBatchRequestError,
  TopicLimitExceededError,
  UserError,
  ValidationError,
  VerificationError,
  SdkError,
  TaggedException,
} from "./Errors";
import { SNSClientInstance, SNSClientInstanceLayer } from "./SNSClientInstance";
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

interface SNSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePlatformApplicationCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link CreatePlatformEndpointCommand}
   */
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEndpointCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link DeletePlatformApplicationCommand}
   */
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeletePlatformApplicationCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link DeleteSMSSandboxPhoneNumberCommand}
   */
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSMSSandboxAccountStatusCommandOutput,
    SdkError | AuthorizationError | InternalError | ThrottledError
  >;

  /**
   * @see {@link GetSubscriptionAttributesCommand}
   */
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPlatformApplicationsCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   */
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSubscriptionsCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   */
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTopicsCommandOutput,
    SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link OptInPhoneNumberCommand}
   */
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
    options?: __HttpHandlerOptions,
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
 * @category models
 */
export class SNSService extends Effect.Tag("@effect-aws/client-sns/SNSService")<
  SNSService,
  SNSService$
>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSNSService = Effect.gen(function* (_) {
  const client = yield* _(SNSClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
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
