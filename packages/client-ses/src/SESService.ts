/**
 * @since 1.0.0
 */
import {
  CloneReceiptRuleSetCommand,
  type CloneReceiptRuleSetCommandInput,
  type CloneReceiptRuleSetCommandOutput,
  CreateConfigurationSetCommand,
  type CreateConfigurationSetCommandInput,
  type CreateConfigurationSetCommandOutput,
  CreateConfigurationSetEventDestinationCommand,
  type CreateConfigurationSetEventDestinationCommandInput,
  type CreateConfigurationSetEventDestinationCommandOutput,
  CreateConfigurationSetTrackingOptionsCommand,
  type CreateConfigurationSetTrackingOptionsCommandInput,
  type CreateConfigurationSetTrackingOptionsCommandOutput,
  CreateCustomVerificationEmailTemplateCommand,
  type CreateCustomVerificationEmailTemplateCommandInput,
  type CreateCustomVerificationEmailTemplateCommandOutput,
  CreateReceiptFilterCommand,
  type CreateReceiptFilterCommandInput,
  type CreateReceiptFilterCommandOutput,
  CreateReceiptRuleCommand,
  type CreateReceiptRuleCommandInput,
  type CreateReceiptRuleCommandOutput,
  CreateReceiptRuleSetCommand,
  type CreateReceiptRuleSetCommandInput,
  type CreateReceiptRuleSetCommandOutput,
  CreateTemplateCommand,
  type CreateTemplateCommandInput,
  type CreateTemplateCommandOutput,
  DeleteConfigurationSetCommand,
  type DeleteConfigurationSetCommandInput,
  type DeleteConfigurationSetCommandOutput,
  DeleteConfigurationSetEventDestinationCommand,
  type DeleteConfigurationSetEventDestinationCommandInput,
  type DeleteConfigurationSetEventDestinationCommandOutput,
  DeleteConfigurationSetTrackingOptionsCommand,
  type DeleteConfigurationSetTrackingOptionsCommandInput,
  type DeleteConfigurationSetTrackingOptionsCommandOutput,
  DeleteCustomVerificationEmailTemplateCommand,
  type DeleteCustomVerificationEmailTemplateCommandInput,
  type DeleteCustomVerificationEmailTemplateCommandOutput,
  DeleteIdentityCommand,
  type DeleteIdentityCommandInput,
  type DeleteIdentityCommandOutput,
  DeleteIdentityPolicyCommand,
  type DeleteIdentityPolicyCommandInput,
  type DeleteIdentityPolicyCommandOutput,
  DeleteReceiptFilterCommand,
  type DeleteReceiptFilterCommandInput,
  type DeleteReceiptFilterCommandOutput,
  DeleteReceiptRuleCommand,
  type DeleteReceiptRuleCommandInput,
  type DeleteReceiptRuleCommandOutput,
  DeleteReceiptRuleSetCommand,
  type DeleteReceiptRuleSetCommandInput,
  type DeleteReceiptRuleSetCommandOutput,
  DeleteTemplateCommand,
  type DeleteTemplateCommandInput,
  type DeleteTemplateCommandOutput,
  DeleteVerifiedEmailAddressCommand,
  type DeleteVerifiedEmailAddressCommandInput,
  type DeleteVerifiedEmailAddressCommandOutput,
  DescribeActiveReceiptRuleSetCommand,
  type DescribeActiveReceiptRuleSetCommandInput,
  type DescribeActiveReceiptRuleSetCommandOutput,
  DescribeConfigurationSetCommand,
  type DescribeConfigurationSetCommandInput,
  type DescribeConfigurationSetCommandOutput,
  DescribeReceiptRuleCommand,
  type DescribeReceiptRuleCommandInput,
  type DescribeReceiptRuleCommandOutput,
  DescribeReceiptRuleSetCommand,
  type DescribeReceiptRuleSetCommandInput,
  type DescribeReceiptRuleSetCommandOutput,
  GetAccountSendingEnabledCommand,
  type GetAccountSendingEnabledCommandInput,
  type GetAccountSendingEnabledCommandOutput,
  GetCustomVerificationEmailTemplateCommand,
  type GetCustomVerificationEmailTemplateCommandInput,
  type GetCustomVerificationEmailTemplateCommandOutput,
  GetIdentityDkimAttributesCommand,
  type GetIdentityDkimAttributesCommandInput,
  type GetIdentityDkimAttributesCommandOutput,
  GetIdentityMailFromDomainAttributesCommand,
  type GetIdentityMailFromDomainAttributesCommandInput,
  type GetIdentityMailFromDomainAttributesCommandOutput,
  GetIdentityNotificationAttributesCommand,
  type GetIdentityNotificationAttributesCommandInput,
  type GetIdentityNotificationAttributesCommandOutput,
  GetIdentityPoliciesCommand,
  type GetIdentityPoliciesCommandInput,
  type GetIdentityPoliciesCommandOutput,
  GetIdentityVerificationAttributesCommand,
  type GetIdentityVerificationAttributesCommandInput,
  type GetIdentityVerificationAttributesCommandOutput,
  GetSendQuotaCommand,
  type GetSendQuotaCommandInput,
  type GetSendQuotaCommandOutput,
  GetSendStatisticsCommand,
  type GetSendStatisticsCommandInput,
  type GetSendStatisticsCommandOutput,
  GetTemplateCommand,
  type GetTemplateCommandInput,
  type GetTemplateCommandOutput,
  ListConfigurationSetsCommand,
  type ListConfigurationSetsCommandInput,
  type ListConfigurationSetsCommandOutput,
  ListCustomVerificationEmailTemplatesCommand,
  type ListCustomVerificationEmailTemplatesCommandInput,
  type ListCustomVerificationEmailTemplatesCommandOutput,
  ListIdentitiesCommand,
  type ListIdentitiesCommandInput,
  type ListIdentitiesCommandOutput,
  ListIdentityPoliciesCommand,
  type ListIdentityPoliciesCommandInput,
  type ListIdentityPoliciesCommandOutput,
  ListReceiptFiltersCommand,
  type ListReceiptFiltersCommandInput,
  type ListReceiptFiltersCommandOutput,
  ListReceiptRuleSetsCommand,
  type ListReceiptRuleSetsCommandInput,
  type ListReceiptRuleSetsCommandOutput,
  ListTemplatesCommand,
  type ListTemplatesCommandInput,
  type ListTemplatesCommandOutput,
  ListVerifiedEmailAddressesCommand,
  type ListVerifiedEmailAddressesCommandInput,
  type ListVerifiedEmailAddressesCommandOutput,
  PutConfigurationSetDeliveryOptionsCommand,
  type PutConfigurationSetDeliveryOptionsCommandInput,
  type PutConfigurationSetDeliveryOptionsCommandOutput,
  PutIdentityPolicyCommand,
  type PutIdentityPolicyCommandInput,
  type PutIdentityPolicyCommandOutput,
  ReorderReceiptRuleSetCommand,
  type ReorderReceiptRuleSetCommandInput,
  type ReorderReceiptRuleSetCommandOutput,
  SendBounceCommand,
  type SendBounceCommandInput,
  type SendBounceCommandOutput,
  SendBulkTemplatedEmailCommand,
  type SendBulkTemplatedEmailCommandInput,
  type SendBulkTemplatedEmailCommandOutput,
  SendCustomVerificationEmailCommand,
  type SendCustomVerificationEmailCommandInput,
  type SendCustomVerificationEmailCommandOutput,
  SendEmailCommand,
  type SendEmailCommandInput,
  type SendEmailCommandOutput,
  SendRawEmailCommand,
  type SendRawEmailCommandInput,
  type SendRawEmailCommandOutput,
  SendTemplatedEmailCommand,
  type SendTemplatedEmailCommandInput,
  type SendTemplatedEmailCommandOutput,
  type SESClient,
  type SESClientConfig,
  SetActiveReceiptRuleSetCommand,
  type SetActiveReceiptRuleSetCommandInput,
  type SetActiveReceiptRuleSetCommandOutput,
  SetIdentityDkimEnabledCommand,
  type SetIdentityDkimEnabledCommandInput,
  type SetIdentityDkimEnabledCommandOutput,
  SetIdentityFeedbackForwardingEnabledCommand,
  type SetIdentityFeedbackForwardingEnabledCommandInput,
  type SetIdentityFeedbackForwardingEnabledCommandOutput,
  SetIdentityHeadersInNotificationsEnabledCommand,
  type SetIdentityHeadersInNotificationsEnabledCommandInput,
  type SetIdentityHeadersInNotificationsEnabledCommandOutput,
  SetIdentityMailFromDomainCommand,
  type SetIdentityMailFromDomainCommandInput,
  type SetIdentityMailFromDomainCommandOutput,
  SetIdentityNotificationTopicCommand,
  type SetIdentityNotificationTopicCommandInput,
  type SetIdentityNotificationTopicCommandOutput,
  SetReceiptRulePositionCommand,
  type SetReceiptRulePositionCommandInput,
  type SetReceiptRulePositionCommandOutput,
  TestRenderTemplateCommand,
  type TestRenderTemplateCommandInput,
  type TestRenderTemplateCommandOutput,
  UpdateAccountSendingEnabledCommand,
  type UpdateAccountSendingEnabledCommandInput,
  type UpdateAccountSendingEnabledCommandOutput,
  UpdateConfigurationSetEventDestinationCommand,
  type UpdateConfigurationSetEventDestinationCommandInput,
  type UpdateConfigurationSetEventDestinationCommandOutput,
  UpdateConfigurationSetReputationMetricsEnabledCommand,
  type UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  type UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
  UpdateConfigurationSetSendingEnabledCommand,
  type UpdateConfigurationSetSendingEnabledCommandInput,
  type UpdateConfigurationSetSendingEnabledCommandOutput,
  UpdateConfigurationSetTrackingOptionsCommand,
  type UpdateConfigurationSetTrackingOptionsCommandInput,
  type UpdateConfigurationSetTrackingOptionsCommandOutput,
  UpdateCustomVerificationEmailTemplateCommand,
  type UpdateCustomVerificationEmailTemplateCommandInput,
  type UpdateCustomVerificationEmailTemplateCommandOutput,
  UpdateReceiptRuleCommand,
  type UpdateReceiptRuleCommandInput,
  type UpdateReceiptRuleCommandOutput,
  UpdateTemplateCommand,
  type UpdateTemplateCommandInput,
  type UpdateTemplateCommandOutput,
  VerifyDomainDkimCommand,
  type VerifyDomainDkimCommandInput,
  type VerifyDomainDkimCommandOutput,
  VerifyDomainIdentityCommand,
  type VerifyDomainIdentityCommandInput,
  type VerifyDomainIdentityCommandOutput,
  VerifyEmailAddressCommand,
  type VerifyEmailAddressCommandInput,
  type VerifyEmailAddressCommandOutput,
  VerifyEmailIdentityCommand,
  type VerifyEmailIdentityCommandInput,
  type VerifyEmailIdentityCommandOutput,
} from "@aws-sdk/client-ses";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  AccountSendingPausedError,
  AlreadyExistsError,
  CannotDeleteError,
  ConfigurationSetAlreadyExistsError,
  ConfigurationSetDoesNotExistError,
  ConfigurationSetSendingPausedError,
  CustomVerificationEmailInvalidContentError,
  CustomVerificationEmailTemplateAlreadyExistsError,
  CustomVerificationEmailTemplateDoesNotExistError,
  EventDestinationAlreadyExistsError,
  EventDestinationDoesNotExistError,
  FromEmailAddressNotVerifiedError,
  InvalidCloudWatchDestinationError,
  InvalidConfigurationSetError,
  InvalidDeliveryOptionsError,
  InvalidFirehoseDestinationError,
  InvalidLambdaFunctionError,
  InvalidPolicyError,
  InvalidRenderingParameterError,
  InvalidS3ConfigurationError,
  InvalidSNSDestinationError,
  InvalidSnsTopicError,
  InvalidTemplateError,
  InvalidTrackingOptionsError,
  LimitExceededError,
  MailFromDomainNotVerifiedError,
  MessageRejectedError,
  MissingRenderingAttributeError,
  ProductionAccessNotGrantedError,
  RuleDoesNotExistError,
  RuleSetDoesNotExistError,
  SdkError,
  TemplateDoesNotExistError,
  TrackingOptionsAlreadyExistsError,
  TrackingOptionsDoesNotExistError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./SESClientInstance.js";
import * as SESServiceConfig from "./SESServiceConfig.js";

const commands = {
  CloneReceiptRuleSetCommand,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetTrackingOptionsCommand,
  CreateCustomVerificationEmailTemplateCommand,
  CreateReceiptFilterCommand,
  CreateReceiptRuleCommand,
  CreateReceiptRuleSetCommand,
  CreateTemplateCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetTrackingOptionsCommand,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteIdentityCommand,
  DeleteIdentityPolicyCommand,
  DeleteReceiptFilterCommand,
  DeleteReceiptRuleCommand,
  DeleteReceiptRuleSetCommand,
  DeleteTemplateCommand,
  DeleteVerifiedEmailAddressCommand,
  DescribeActiveReceiptRuleSetCommand,
  DescribeConfigurationSetCommand,
  DescribeReceiptRuleCommand,
  DescribeReceiptRuleSetCommand,
  GetAccountSendingEnabledCommand,
  GetCustomVerificationEmailTemplateCommand,
  GetIdentityDkimAttributesCommand,
  GetIdentityMailFromDomainAttributesCommand,
  GetIdentityNotificationAttributesCommand,
  GetIdentityPoliciesCommand,
  GetIdentityVerificationAttributesCommand,
  GetSendQuotaCommand,
  GetSendStatisticsCommand,
  GetTemplateCommand,
  ListConfigurationSetsCommand,
  ListCustomVerificationEmailTemplatesCommand,
  ListIdentitiesCommand,
  ListIdentityPoliciesCommand,
  ListReceiptFiltersCommand,
  ListReceiptRuleSetsCommand,
  ListTemplatesCommand,
  ListVerifiedEmailAddressesCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutIdentityPolicyCommand,
  ReorderReceiptRuleSetCommand,
  SendBounceCommand,
  SendBulkTemplatedEmailCommand,
  SendCustomVerificationEmailCommand,
  SendEmailCommand,
  SendRawEmailCommand,
  SendTemplatedEmailCommand,
  SetActiveReceiptRuleSetCommand,
  SetIdentityDkimEnabledCommand,
  SetIdentityFeedbackForwardingEnabledCommand,
  SetIdentityHeadersInNotificationsEnabledCommand,
  SetIdentityMailFromDomainCommand,
  SetIdentityNotificationTopicCommand,
  SetReceiptRulePositionCommand,
  TestRenderTemplateCommand,
  UpdateAccountSendingEnabledCommand,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetReputationMetricsEnabledCommand,
  UpdateConfigurationSetSendingEnabledCommand,
  UpdateConfigurationSetTrackingOptionsCommand,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateReceiptRuleCommand,
  UpdateTemplateCommand,
  VerifyDomainDkimCommand,
  VerifyDomainIdentityCommand,
  VerifyEmailAddressCommand,
  VerifyEmailIdentityCommand,
};

interface SESService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CloneReceiptRuleSetCommand}
   */
  cloneReceiptRuleSet(
    args: CloneReceiptRuleSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CloneReceiptRuleSetCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | LimitExceededError | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link CreateConfigurationSetCommand}
   */
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConfigurationSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConfigurationSetAlreadyExistsError
    | InvalidConfigurationSetError
    | LimitExceededError
  >;

  /**
   * @see {@link CreateConfigurationSetEventDestinationCommand}
   */
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConfigurationSetEventDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConfigurationSetDoesNotExistError
    | EventDestinationAlreadyExistsError
    | InvalidCloudWatchDestinationError
    | InvalidFirehoseDestinationError
    | InvalidSNSDestinationError
    | LimitExceededError
  >;

  /**
   * @see {@link CreateConfigurationSetTrackingOptionsCommand}
   */
  createConfigurationSetTrackingOptions(
    args: CreateConfigurationSetTrackingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConfigurationSetTrackingOptionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConfigurationSetDoesNotExistError
    | InvalidTrackingOptionsError
    | TrackingOptionsAlreadyExistsError
  >;

  /**
   * @see {@link CreateCustomVerificationEmailTemplateCommand}
   */
  createCustomVerificationEmailTemplate(
    args: CreateCustomVerificationEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCustomVerificationEmailTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CustomVerificationEmailInvalidContentError
    | CustomVerificationEmailTemplateAlreadyExistsError
    | FromEmailAddressNotVerifiedError
    | LimitExceededError
  >;

  /**
   * @see {@link CreateReceiptFilterCommand}
   */
  createReceiptFilter(
    args: CreateReceiptFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateReceiptFilterCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | LimitExceededError
  >;

  /**
   * @see {@link CreateReceiptRuleCommand}
   */
  createReceiptRule(
    args: CreateReceiptRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateReceiptRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | InvalidLambdaFunctionError
    | InvalidS3ConfigurationError
    | InvalidSnsTopicError
    | LimitExceededError
    | RuleDoesNotExistError
    | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link CreateReceiptRuleSetCommand}
   */
  createReceiptRuleSet(
    args: CreateReceiptRuleSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateReceiptRuleSetCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | LimitExceededError
  >;

  /**
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTemplateCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | InvalidTemplateError | LimitExceededError
  >;

  /**
   * @see {@link DeleteConfigurationSetCommand}
   */
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConfigurationSetCommandOutput,
    Cause.TimeoutException | SdkError | ConfigurationSetDoesNotExistError
  >;

  /**
   * @see {@link DeleteConfigurationSetEventDestinationCommand}
   */
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConfigurationSetEventDestinationCommandOutput,
    Cause.TimeoutException | SdkError | ConfigurationSetDoesNotExistError | EventDestinationDoesNotExistError
  >;

  /**
   * @see {@link DeleteConfigurationSetTrackingOptionsCommand}
   */
  deleteConfigurationSetTrackingOptions(
    args: DeleteConfigurationSetTrackingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConfigurationSetTrackingOptionsCommandOutput,
    Cause.TimeoutException | SdkError | ConfigurationSetDoesNotExistError | TrackingOptionsDoesNotExistError
  >;

  /**
   * @see {@link DeleteCustomVerificationEmailTemplateCommand}
   */
  deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomVerificationEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DeleteIdentityCommand}
   */
  deleteIdentity(
    args: DeleteIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIdentityCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DeleteIdentityPolicyCommand}
   */
  deleteIdentityPolicy(
    args: DeleteIdentityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIdentityPolicyCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DeleteReceiptFilterCommand}
   */
  deleteReceiptFilter(
    args: DeleteReceiptFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteReceiptFilterCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DeleteReceiptRuleCommand}
   */
  deleteReceiptRule(
    args: DeleteReceiptRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteReceiptRuleCommandOutput,
    Cause.TimeoutException | SdkError | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link DeleteReceiptRuleSetCommand}
   */
  deleteReceiptRuleSet(
    args: DeleteReceiptRuleSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteReceiptRuleSetCommandOutput,
    Cause.TimeoutException | SdkError | CannotDeleteError
  >;

  /**
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTemplateCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DeleteVerifiedEmailAddressCommand}
   */
  deleteVerifiedEmailAddress(
    args: DeleteVerifiedEmailAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVerifiedEmailAddressCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeActiveReceiptRuleSetCommand}
   */
  describeActiveReceiptRuleSet(
    args: DescribeActiveReceiptRuleSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeActiveReceiptRuleSetCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link DescribeConfigurationSetCommand}
   */
  describeConfigurationSet(
    args: DescribeConfigurationSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConfigurationSetCommandOutput,
    Cause.TimeoutException | SdkError | ConfigurationSetDoesNotExistError
  >;

  /**
   * @see {@link DescribeReceiptRuleCommand}
   */
  describeReceiptRule(
    args: DescribeReceiptRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReceiptRuleCommandOutput,
    Cause.TimeoutException | SdkError | RuleDoesNotExistError | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link DescribeReceiptRuleSetCommand}
   */
  describeReceiptRuleSet(
    args: DescribeReceiptRuleSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReceiptRuleSetCommandOutput,
    Cause.TimeoutException | SdkError | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link GetAccountSendingEnabledCommand}
   */
  getAccountSendingEnabled(
    args: GetAccountSendingEnabledCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountSendingEnabledCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetCustomVerificationEmailTemplateCommand}
   */
  getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCustomVerificationEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | CustomVerificationEmailTemplateDoesNotExistError
  >;

  /**
   * @see {@link GetIdentityDkimAttributesCommand}
   */
  getIdentityDkimAttributes(
    args: GetIdentityDkimAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIdentityDkimAttributesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetIdentityMailFromDomainAttributesCommand}
   */
  getIdentityMailFromDomainAttributes(
    args: GetIdentityMailFromDomainAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIdentityMailFromDomainAttributesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetIdentityNotificationAttributesCommand}
   */
  getIdentityNotificationAttributes(
    args: GetIdentityNotificationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIdentityNotificationAttributesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetIdentityPoliciesCommand}
   */
  getIdentityPolicies(
    args: GetIdentityPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIdentityPoliciesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetIdentityVerificationAttributesCommand}
   */
  getIdentityVerificationAttributes(
    args: GetIdentityVerificationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIdentityVerificationAttributesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetSendQuotaCommand}
   */
  getSendQuota(
    args: GetSendQuotaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSendQuotaCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetSendStatisticsCommand}
   */
  getSendStatistics(
    args: GetSendStatisticsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSendStatisticsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(
    args: GetTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTemplateCommandOutput,
    Cause.TimeoutException | SdkError | TemplateDoesNotExistError
  >;

  /**
   * @see {@link ListConfigurationSetsCommand}
   */
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationSetsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListCustomVerificationEmailTemplatesCommand}
   */
  listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCustomVerificationEmailTemplatesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListIdentitiesCommand}
   */
  listIdentities(
    args: ListIdentitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIdentitiesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListIdentityPoliciesCommand}
   */
  listIdentityPolicies(
    args: ListIdentityPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIdentityPoliciesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListReceiptFiltersCommand}
   */
  listReceiptFilters(
    args: ListReceiptFiltersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListReceiptFiltersCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListReceiptRuleSetsCommand}
   */
  listReceiptRuleSets(
    args: ListReceiptRuleSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListReceiptRuleSetsCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(
    args: ListTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTemplatesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link ListVerifiedEmailAddressesCommand}
   */
  listVerifiedEmailAddresses(
    args: ListVerifiedEmailAddressesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVerifiedEmailAddressesCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link PutConfigurationSetDeliveryOptionsCommand}
   */
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutConfigurationSetDeliveryOptionsCommandOutput,
    Cause.TimeoutException | SdkError | ConfigurationSetDoesNotExistError | InvalidDeliveryOptionsError
  >;

  /**
   * @see {@link PutIdentityPolicyCommand}
   */
  putIdentityPolicy(
    args: PutIdentityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutIdentityPolicyCommandOutput,
    Cause.TimeoutException | SdkError | InvalidPolicyError
  >;

  /**
   * @see {@link ReorderReceiptRuleSetCommand}
   */
  reorderReceiptRuleSet(
    args: ReorderReceiptRuleSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReorderReceiptRuleSetCommandOutput,
    Cause.TimeoutException | SdkError | RuleDoesNotExistError | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link SendBounceCommand}
   */
  sendBounce(
    args: SendBounceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendBounceCommandOutput,
    Cause.TimeoutException | SdkError | MessageRejectedError
  >;

  /**
   * @see {@link SendBulkTemplatedEmailCommand}
   */
  sendBulkTemplatedEmail(
    args: SendBulkTemplatedEmailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendBulkTemplatedEmailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccountSendingPausedError
    | ConfigurationSetDoesNotExistError
    | ConfigurationSetSendingPausedError
    | MailFromDomainNotVerifiedError
    | MessageRejectedError
    | TemplateDoesNotExistError
  >;

  /**
   * @see {@link SendCustomVerificationEmailCommand}
   */
  sendCustomVerificationEmail(
    args: SendCustomVerificationEmailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendCustomVerificationEmailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConfigurationSetDoesNotExistError
    | CustomVerificationEmailTemplateDoesNotExistError
    | FromEmailAddressNotVerifiedError
    | MessageRejectedError
    | ProductionAccessNotGrantedError
  >;

  /**
   * @see {@link SendEmailCommand}
   */
  sendEmail(
    args: SendEmailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendEmailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccountSendingPausedError
    | ConfigurationSetDoesNotExistError
    | ConfigurationSetSendingPausedError
    | MailFromDomainNotVerifiedError
    | MessageRejectedError
  >;

  /**
   * @see {@link SendRawEmailCommand}
   */
  sendRawEmail(
    args: SendRawEmailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendRawEmailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccountSendingPausedError
    | ConfigurationSetDoesNotExistError
    | ConfigurationSetSendingPausedError
    | MailFromDomainNotVerifiedError
    | MessageRejectedError
  >;

  /**
   * @see {@link SendTemplatedEmailCommand}
   */
  sendTemplatedEmail(
    args: SendTemplatedEmailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendTemplatedEmailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccountSendingPausedError
    | ConfigurationSetDoesNotExistError
    | ConfigurationSetSendingPausedError
    | MailFromDomainNotVerifiedError
    | MessageRejectedError
    | TemplateDoesNotExistError
  >;

  /**
   * @see {@link SetActiveReceiptRuleSetCommand}
   */
  setActiveReceiptRuleSet(
    args: SetActiveReceiptRuleSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetActiveReceiptRuleSetCommandOutput,
    Cause.TimeoutException | SdkError | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link SetIdentityDkimEnabledCommand}
   */
  setIdentityDkimEnabled(
    args: SetIdentityDkimEnabledCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetIdentityDkimEnabledCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link SetIdentityFeedbackForwardingEnabledCommand}
   */
  setIdentityFeedbackForwardingEnabled(
    args: SetIdentityFeedbackForwardingEnabledCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetIdentityFeedbackForwardingEnabledCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link SetIdentityHeadersInNotificationsEnabledCommand}
   */
  setIdentityHeadersInNotificationsEnabled(
    args: SetIdentityHeadersInNotificationsEnabledCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetIdentityHeadersInNotificationsEnabledCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link SetIdentityMailFromDomainCommand}
   */
  setIdentityMailFromDomain(
    args: SetIdentityMailFromDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetIdentityMailFromDomainCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link SetIdentityNotificationTopicCommand}
   */
  setIdentityNotificationTopic(
    args: SetIdentityNotificationTopicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetIdentityNotificationTopicCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link SetReceiptRulePositionCommand}
   */
  setReceiptRulePosition(
    args: SetReceiptRulePositionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetReceiptRulePositionCommandOutput,
    Cause.TimeoutException | SdkError | RuleDoesNotExistError | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link TestRenderTemplateCommand}
   */
  testRenderTemplate(
    args: TestRenderTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestRenderTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRenderingParameterError
    | MissingRenderingAttributeError
    | TemplateDoesNotExistError
  >;

  /**
   * @see {@link UpdateAccountSendingEnabledCommand}
   */
  updateAccountSendingEnabled(
    args: UpdateAccountSendingEnabledCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountSendingEnabledCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link UpdateConfigurationSetEventDestinationCommand}
   */
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConfigurationSetEventDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConfigurationSetDoesNotExistError
    | EventDestinationDoesNotExistError
    | InvalidCloudWatchDestinationError
    | InvalidFirehoseDestinationError
    | InvalidSNSDestinationError
  >;

  /**
   * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommand}
   */
  updateConfigurationSetReputationMetricsEnabled(
    args: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
    Cause.TimeoutException | SdkError | ConfigurationSetDoesNotExistError
  >;

  /**
   * @see {@link UpdateConfigurationSetSendingEnabledCommand}
   */
  updateConfigurationSetSendingEnabled(
    args: UpdateConfigurationSetSendingEnabledCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConfigurationSetSendingEnabledCommandOutput,
    Cause.TimeoutException | SdkError | ConfigurationSetDoesNotExistError
  >;

  /**
   * @see {@link UpdateConfigurationSetTrackingOptionsCommand}
   */
  updateConfigurationSetTrackingOptions(
    args: UpdateConfigurationSetTrackingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConfigurationSetTrackingOptionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConfigurationSetDoesNotExistError
    | InvalidTrackingOptionsError
    | TrackingOptionsDoesNotExistError
  >;

  /**
   * @see {@link UpdateCustomVerificationEmailTemplateCommand}
   */
  updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCustomVerificationEmailTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CustomVerificationEmailInvalidContentError
    | CustomVerificationEmailTemplateDoesNotExistError
    | FromEmailAddressNotVerifiedError
  >;

  /**
   * @see {@link UpdateReceiptRuleCommand}
   */
  updateReceiptRule(
    args: UpdateReceiptRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateReceiptRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidLambdaFunctionError
    | InvalidS3ConfigurationError
    | InvalidSnsTopicError
    | LimitExceededError
    | RuleDoesNotExistError
    | RuleSetDoesNotExistError
  >;

  /**
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTemplateCommandOutput,
    Cause.TimeoutException | SdkError | InvalidTemplateError | TemplateDoesNotExistError
  >;

  /**
   * @see {@link VerifyDomainDkimCommand}
   */
  verifyDomainDkim(
    args: VerifyDomainDkimCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifyDomainDkimCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link VerifyDomainIdentityCommand}
   */
  verifyDomainIdentity(
    args: VerifyDomainIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifyDomainIdentityCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link VerifyEmailAddressCommand}
   */
  verifyEmailAddress(
    args: VerifyEmailAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifyEmailAddressCommandOutput,
    Cause.TimeoutException | SdkError
  >;

  /**
   * @see {@link VerifyEmailIdentityCommand}
   */
  verifyEmailIdentity(
    args: VerifyEmailIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifyEmailIdentityCommandOutput,
    Cause.TimeoutException | SdkError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSESService = Effect.gen(function*() {
  const client = yield* Instance.SESClientInstance;

  return yield* Service.fromClientAndCommands<SESService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: SESServiceConfig.toSESClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class SESService extends Effect.Tag("@effect-aws/client-ses/SESService")<
  SESService,
  SESService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSESService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: SESService.Config) =>
    Layer.effect(this, makeSESService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(SESServiceConfig.setSESServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SESClientConfig) => SESClient,
  ) =>
    Layer.effect(this, makeSESService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.SESClientInstance,
          Effect.map(SESServiceConfig.toSESClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace SESService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<SESClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = SESService$;
}
