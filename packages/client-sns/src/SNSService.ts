/**
 * @since 1.0.0
 */
import {
  SNSServiceException as SdkSNSServiceException,
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
  type AddPermissionInput,
  type CheckIfPhoneNumberIsOptedOutInput,
  type CheckIfPhoneNumberIsOptedOutResponse,
  type ConfirmSubscriptionInput,
  type ConfirmSubscriptionResponse,
  type CreatePlatformApplicationInput,
  type CreatePlatformApplicationResponse,
  type CreatePlatformEndpointInput,
  type CreateEndpointResponse,
  type CreateSMSSandboxPhoneNumberInput,
  type CreateSMSSandboxPhoneNumberResult,
  type CreateTopicInput,
  type CreateTopicResponse,
  type DeleteEndpointInput,
  type DeletePlatformApplicationInput,
  type DeleteSMSSandboxPhoneNumberInput,
  type DeleteSMSSandboxPhoneNumberResult,
  type DeleteTopicInput,
  type GetDataProtectionPolicyInput,
  type GetDataProtectionPolicyResponse,
  type GetEndpointAttributesInput,
  type GetEndpointAttributesResponse,
  type GetPlatformApplicationAttributesInput,
  type GetPlatformApplicationAttributesResponse,
  type GetSMSAttributesInput,
  type GetSMSAttributesResponse,
  type GetSMSSandboxAccountStatusInput,
  type GetSMSSandboxAccountStatusResult,
  type GetSubscriptionAttributesInput,
  type GetSubscriptionAttributesResponse,
  type GetTopicAttributesInput,
  type GetTopicAttributesResponse,
  type ListEndpointsByPlatformApplicationInput,
  type ListEndpointsByPlatformApplicationResponse,
  type ListOriginationNumbersRequest,
  type ListOriginationNumbersResult,
  type ListPhoneNumbersOptedOutInput,
  type ListPhoneNumbersOptedOutResponse,
  type ListPlatformApplicationsInput,
  type ListPlatformApplicationsResponse,
  type ListSMSSandboxPhoneNumbersInput,
  type ListSMSSandboxPhoneNumbersResult,
  type ListSubscriptionsInput,
  type ListSubscriptionsResponse,
  type ListSubscriptionsByTopicInput,
  type ListSubscriptionsByTopicResponse,
  type ListTagsForResourceRequest,
  type ListTagsForResourceResponse,
  type ListTopicsInput,
  type ListTopicsResponse,
  type OptInPhoneNumberInput,
  type OptInPhoneNumberResponse,
  type PublishInput,
  type PublishResponse,
  type PublishBatchInput,
  type PublishBatchResponse,
  type PutDataProtectionPolicyInput,
  type RemovePermissionInput,
  type SetEndpointAttributesInput,
  type SetPlatformApplicationAttributesInput,
  type SetSMSAttributesInput,
  type SetSMSAttributesResponse,
  type SetSubscriptionAttributesInput,
  type SetTopicAttributesInput,
  type SubscribeInput,
  type SubscribeResponse,
  type TagResourceRequest,
  type TagResourceResponse,
  type UnsubscribeInput,
  type UntagResourceRequest,
  type UntagResourceResponse,
  type VerifySMSSandboxPhoneNumberInput,
  type VerifySMSSandboxPhoneNumberResult,
} from "@aws-sdk/client-sns";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  type AuthorizationErrorException,
  type InternalErrorException,
  type InvalidParameterException,
  type NotFoundException,
  type ThrottledException,
  type FilterPolicyLimitExceededException,
  type ReplayLimitExceededException,
  type SubscriptionLimitExceededException,
  type OptedOutException,
  type UserErrorException,
  type ConcurrentAccessException,
  type InvalidSecurityException,
  type StaleTagException,
  type TagLimitExceededException,
  type TagPolicyException,
  type TopicLimitExceededException,
  type ResourceNotFoundException,
  type InvalidStateException,
  type ValidationException,
  type EndpointDisabledException,
  type InvalidParameterValueException,
  type KMSAccessDeniedException,
  type KMSDisabledException,
  type KMSInvalidStateException,
  type KMSNotFoundException,
  type KMSOptInRequired,
  type KMSThrottlingException,
  type PlatformApplicationDisabledException,
  type BatchEntryIdsNotDistinctException,
  type BatchRequestTooLongException,
  type EmptyBatchRequestException,
  type InvalidBatchEntryIdException,
  type TooManyEntriesInBatchRequestException,
  type VerificationException,
  type TaggedException,
  SdkError,
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
    args: AddPermissionInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link CheckIfPhoneNumberIsOptedOutCommand}
   */
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CheckIfPhoneNumberIsOptedOutResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
  >;

  /**
   * @see {@link ConfirmSubscriptionCommand}
   */
  confirmSubscription(
    args: ConfirmSubscriptionInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmSubscriptionResponse,
    | SdkError
    | AuthorizationErrorException
    | FilterPolicyLimitExceededException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ReplayLimitExceededException
    | SubscriptionLimitExceededException
  >;

  /**
   * @see {@link CreatePlatformApplicationCommand}
   */
  createPlatformApplication(
    args: CreatePlatformApplicationInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreatePlatformApplicationResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
  >;

  /**
   * @see {@link CreatePlatformEndpointCommand}
   */
  createPlatformEndpoint(
    args: CreatePlatformEndpointInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateEndpointResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link CreateSMSSandboxPhoneNumberCommand}
   */
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateSMSSandboxPhoneNumberResult,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | OptedOutException
    | ThrottledException
    | UserErrorException
  >;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateTopicResponse,
    | SdkError
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | StaleTagException
    | TagLimitExceededException
    | TagPolicyException
    | TopicLimitExceededException
  >;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
  >;

  /**
   * @see {@link DeletePlatformApplicationCommand}
   */
  deletePlatformApplication(
    args: DeletePlatformApplicationInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
  >;

  /**
   * @see {@link DeleteSMSSandboxPhoneNumberCommand}
   */
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSMSSandboxPhoneNumberResult,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottledException
    | UserErrorException
  >;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InternalErrorException
    | InvalidParameterException
    | InvalidStateException
    | NotFoundException
    | StaleTagException
    | TagPolicyException
  >;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDataProtectionPolicyResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
  >;

  /**
   * @see {@link GetEndpointAttributesCommand}
   */
  getEndpointAttributes(
    args: GetEndpointAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetEndpointAttributesResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link GetPlatformApplicationAttributesCommand}
   */
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetPlatformApplicationAttributesResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link GetSMSAttributesCommand}
   */
  getSMSAttributes(
    args: GetSMSAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSMSAttributesResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
  >;

  /**
   * @see {@link GetSMSSandboxAccountStatusCommand}
   */
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSMSSandboxAccountStatusResult,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | ThrottledException
  >;

  /**
   * @see {@link GetSubscriptionAttributesCommand}
   */
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSubscriptionAttributesResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link GetTopicAttributesCommand}
   */
  getTopicAttributes(
    args: GetTopicAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetTopicAttributesResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
  >;

  /**
   * @see {@link ListEndpointsByPlatformApplicationCommand}
   */
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListEndpointsByPlatformApplicationResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link ListOriginationNumbersCommand}
   */
  listOriginationNumbers(
    args: ListOriginationNumbersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListOriginationNumbersResult,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
    | ValidationException
  >;

  /**
   * @see {@link ListPhoneNumbersOptedOutCommand}
   */
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPhoneNumbersOptedOutResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
  >;

  /**
   * @see {@link ListPlatformApplicationsCommand}
   */
  listPlatformApplications(
    args: ListPlatformApplicationsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListPlatformApplicationsResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
  >;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   */
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSMSSandboxPhoneNumbersResult,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottledException
  >;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSubscriptionsResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
  >;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   */
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSubscriptionsByTopicResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | SdkError
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InvalidParameterException
    | ResourceNotFoundException
    | TagPolicyException
  >;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(
    args: ListTopicsInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTopicsResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
  >;

  /**
   * @see {@link OptInPhoneNumberCommand}
   */
  optInPhoneNumber(
    args: OptInPhoneNumberInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    OptInPhoneNumberResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
  >;

  /**
   * @see {@link PublishCommand}
   */
  publish(
    args: PublishInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PublishResponse,
    | SdkError
    | AuthorizationErrorException
    | EndpointDisabledException
    | InternalErrorException
    | InvalidParameterException
    | InvalidParameterValueException
    | InvalidSecurityException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | NotFoundException
    | PlatformApplicationDisabledException
    | ValidationException
  >;

  /**
   * @see {@link PublishBatchCommand}
   */
  publishBatch(
    args: PublishBatchInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PublishBatchResponse,
    | SdkError
    | AuthorizationErrorException
    | BatchEntryIdsNotDistinctException
    | BatchRequestTooLongException
    | EmptyBatchRequestException
    | EndpointDisabledException
    | InternalErrorException
    | InvalidBatchEntryIdException
    | InvalidParameterException
    | InvalidParameterValueException
    | InvalidSecurityException
    | KMSAccessDeniedException
    | KMSDisabledException
    | KMSInvalidStateException
    | KMSNotFoundException
    | KMSOptInRequired
    | KMSThrottlingException
    | NotFoundException
    | PlatformApplicationDisabledException
    | TooManyEntriesInBatchRequestException
    | ValidationException
  >;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link SetEndpointAttributesCommand}
   */
  setEndpointAttributes(
    args: SetEndpointAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link SetPlatformApplicationAttributesCommand}
   */
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
  >;

  /**
   * @see {@link SetSMSAttributesCommand}
   */
  setSMSAttributes(
    args: SetSMSAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SetSMSAttributesResponse,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ThrottledException
  >;

  /**
   * @see {@link SetSubscriptionAttributesCommand}
   */
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | FilterPolicyLimitExceededException
    | InternalErrorException
    | InvalidParameterException
    | NotFoundException
    | ReplayLimitExceededException
  >;

  /**
   * @see {@link SetTopicAttributesCommand}
   */
  setTopicAttributes(
    args: SetTopicAttributesInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
  >;

  /**
   * @see {@link SubscribeCommand}
   */
  subscribe(
    args: SubscribeInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SubscribeResponse,
    | SdkError
    | AuthorizationErrorException
    | FilterPolicyLimitExceededException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
    | ReplayLimitExceededException
    | SubscriptionLimitExceededException
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceResponse,
    | SdkError
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InvalidParameterException
    | ResourceNotFoundException
    | StaleTagException
    | TagLimitExceededException
    | TagPolicyException
  >;

  /**
   * @see {@link UnsubscribeCommand}
   */
  unsubscribe(
    args: UnsubscribeInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    void,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | InvalidSecurityException
    | NotFoundException
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceResponse,
    | SdkError
    | AuthorizationErrorException
    | ConcurrentAccessException
    | InvalidParameterException
    | ResourceNotFoundException
    | StaleTagException
    | TagLimitExceededException
    | TagPolicyException
  >;

  /**
   * @see {@link VerifySMSSandboxPhoneNumberCommand}
   */
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    VerifySMSSandboxPhoneNumberResult,
    | SdkError
    | AuthorizationErrorException
    | InternalErrorException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottledException
    | VerificationException
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const SNSService = Context.GenericTag<SNSService>(
  "@effect-aws/client-sns/SNSService",
);

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
          if (e instanceof SdkSNSServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkSNSServiceException>
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
