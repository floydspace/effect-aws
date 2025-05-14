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
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
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
  SdkError,
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
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./SNSClientInstance.js";
import * as SNSServiceConfig from "./SNSServiceConfig.js";

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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link CheckIfPhoneNumberIsOptedOutCommand}
   */
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CheckIfPhoneNumberIsOptedOutCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | ThrottledError
  >;

  /**
   * @see {@link ConfirmSubscriptionCommand}
   */
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmSubscriptionCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link CreatePlatformEndpointCommand}
   */
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePlatformEndpointCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link CreateSMSSandboxPhoneNumberCommand}
   */
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSMSSandboxPhoneNumberCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link DeletePlatformApplicationCommand}
   */
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePlatformApplicationCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link DeleteSMSSandboxPhoneNumberCommand}
   */
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSMSSandboxPhoneNumberCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link GetPlatformApplicationAttributesCommand}
   */
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPlatformApplicationAttributesCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link GetSMSAttributesCommand}
   */
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSMSAttributesCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | ThrottledError
  >;

  /**
   * @see {@link GetSMSSandboxAccountStatusCommand}
   */
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSMSSandboxAccountStatusCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | ThrottledError
  >;

  /**
   * @see {@link GetSubscriptionAttributesCommand}
   */
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSubscriptionAttributesCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link GetTopicAttributesCommand}
   */
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTopicAttributesCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link ListOriginationNumbersCommand}
   */
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOriginationNumbersCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | ThrottledError
  >;

  /**
   * @see {@link ListPlatformApplicationsCommand}
   */
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPlatformApplicationsCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   */
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSMSSandboxPhoneNumbersCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   */
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSubscriptionsByTopicCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError
  >;

  /**
   * @see {@link OptInPhoneNumberCommand}
   */
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    OptInPhoneNumberCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | ThrottledError
  >;

  /**
   * @see {@link PublishCommand}
   */
  publish(
    args: PublishCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link SetEndpointAttributesCommand}
   */
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetEndpointAttributesCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link SetPlatformApplicationAttributesCommand}
   */
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetPlatformApplicationAttributesCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | NotFoundError
  >;

  /**
   * @see {@link SetSMSAttributesCommand}
   */
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetSMSAttributesCommandOutput,
    Cause.TimeoutException | SdkError | AuthorizationError | InternalError | InvalidParameterError | ThrottledError
  >;

  /**
   * @see {@link SetSubscriptionAttributesCommand}
   */
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetSubscriptionAttributesCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
export const makeSNSService = Effect.gen(function*() {
  const client = yield* Instance.SNSClientInstance;

  return yield* Service.fromClientAndCommands<SNSService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: SNSServiceConfig.toSNSClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class SNSService extends Effect.Tag("@effect-aws/client-sns/SNSService")<
  SNSService,
  SNSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSNSService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: SNSService.Config) =>
    Layer.effect(this, makeSNSService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(SNSServiceConfig.setSNSServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SNSClientConfig) => SNSClient,
  ) =>
    Layer.effect(this, makeSNSService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.SNSClientInstance,
          Effect.map(SNSServiceConfig.toSNSClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace SNSService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<SNSClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = SNSService$;
}
