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
import * as Effect from "effect/Effect";
import * as RR from "effect/ReadonlyRecord";
import {
  DefaultSNSClientInstanceLayer,
  SNSClientInstanceLayer,
  SNSClientInstanceTag,
} from "./Context";

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

export interface SNSService {
  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, AddPermissionCommandOutput>;

  /**
   * @see {@link CheckIfPhoneNumberIsOptedOutCommand}
   */
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CheckIfPhoneNumberIsOptedOutCommandOutput>;

  /**
   * @see {@link ConfirmSubscriptionCommand}
   */
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ConfirmSubscriptionCommandOutput>;

  /**
   * @see {@link CreatePlatformApplicationCommand}
   */
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreatePlatformApplicationCommandOutput>;

  /**
   * @see {@link CreatePlatformEndpointCommand}
   */
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreatePlatformEndpointCommandOutput>;

  /**
   * @see {@link CreateSMSSandboxPhoneNumberCommand}
   */
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateSMSSandboxPhoneNumberCommandOutput>;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, CreateTopicCommandOutput>;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteEndpointCommandOutput>;

  /**
   * @see {@link DeletePlatformApplicationCommand}
   */
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeletePlatformApplicationCommandOutput>;

  /**
   * @see {@link DeleteSMSSandboxPhoneNumberCommand}
   */
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteSMSSandboxPhoneNumberCommandOutput>;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, DeleteTopicCommandOutput>;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetDataProtectionPolicyCommandOutput>;

  /**
   * @see {@link GetEndpointAttributesCommand}
   */
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetEndpointAttributesCommandOutput>;

  /**
   * @see {@link GetPlatformApplicationAttributesCommand}
   */
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    GetPlatformApplicationAttributesCommandOutput
  >;

  /**
   * @see {@link GetSMSAttributesCommand}
   */
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetSMSAttributesCommandOutput>;

  /**
   * @see {@link GetSMSSandboxAccountStatusCommand}
   */
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetSMSSandboxAccountStatusCommandOutput>;

  /**
   * @see {@link GetSubscriptionAttributesCommand}
   */
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetSubscriptionAttributesCommandOutput>;

  /**
   * @see {@link GetTopicAttributesCommand}
   */
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, GetTopicAttributesCommandOutput>;

  /**
   * @see {@link ListEndpointsByPlatformApplicationCommand}
   */
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    ListEndpointsByPlatformApplicationCommandOutput
  >;

  /**
   * @see {@link ListOriginationNumbersCommand}
   */
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListOriginationNumbersCommandOutput>;

  /**
   * @see {@link ListPhoneNumbersOptedOutCommand}
   */
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListPhoneNumbersOptedOutCommandOutput>;

  /**
   * @see {@link ListPlatformApplicationsCommand}
   */
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListPlatformApplicationsCommandOutput>;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   */
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListSMSSandboxPhoneNumbersCommandOutput>;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListSubscriptionsCommandOutput>;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   */
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListSubscriptionsByTopicCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(
    args: ListTopicsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, ListTopicsCommandOutput>;

  /**
   * @see {@link OptInPhoneNumberCommand}
   */
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, OptInPhoneNumberCommandOutput>;

  /**
   * @see {@link PublishCommand}
   */
  publish(
    args: PublishCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PublishCommandOutput>;

  /**
   * @see {@link PublishBatchCommand}
   */
  publishBatch(
    args: PublishBatchCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PublishBatchCommandOutput>;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, PutDataProtectionPolicyCommandOutput>;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, RemovePermissionCommandOutput>;

  /**
   * @see {@link SetEndpointAttributesCommand}
   */
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, SetEndpointAttributesCommandOutput>;

  /**
   * @see {@link SetPlatformApplicationAttributesCommand}
   */
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    never,
    unknown,
    SetPlatformApplicationAttributesCommandOutput
  >;

  /**
   * @see {@link SetSMSAttributesCommand}
   */
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, SetSMSAttributesCommandOutput>;

  /**
   * @see {@link SetSubscriptionAttributesCommand}
   */
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, SetSubscriptionAttributesCommandOutput>;

  /**
   * @see {@link SetTopicAttributesCommand}
   */
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, SetTopicAttributesCommandOutput>;

  /**
   * @see {@link SubscribeCommand}
   */
  subscribe(
    args: SubscribeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, SubscribeCommandOutput>;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, TagResourceCommandOutput>;

  /**
   * @see {@link UnsubscribeCommand}
   */
  unsubscribe(
    args: UnsubscribeCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UnsubscribeCommandOutput>;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, UntagResourceCommandOutput>;

  /**
   * @see {@link VerifySMSSandboxPhoneNumberCommand}
   */
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<never, unknown, VerifySMSSandboxPhoneNumberCommandOutput>;
}

export const BaseSNSServiceEffect = Effect.gen(function* (_) {
  const client = yield* _(SNSClientInstanceTag);

  return RR.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise(() =>
        client.send(new CommandCtor(args), options ?? {}),
      );
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as SNSService;
});

export const SNSServiceEffect = BaseSNSServiceEffect.pipe(
  Effect.provide(SNSClientInstanceLayer),
);

export const DefaultSNSServiceEffect = BaseSNSServiceEffect.pipe(
  Effect.provide(DefaultSNSClientInstanceLayer),
);
