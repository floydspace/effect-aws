/**
 * @since 1.0.0
 */
import {
  BatchGetMetricDataCommand,
  type BatchGetMetricDataCommandInput,
  type BatchGetMetricDataCommandOutput,
  CancelExportJobCommand,
  type CancelExportJobCommandInput,
  type CancelExportJobCommandOutput,
  CreateConfigurationSetCommand,
  type CreateConfigurationSetCommandInput,
  type CreateConfigurationSetCommandOutput,
  CreateConfigurationSetEventDestinationCommand,
  type CreateConfigurationSetEventDestinationCommandInput,
  type CreateConfigurationSetEventDestinationCommandOutput,
  CreateContactCommand,
  type CreateContactCommandInput,
  type CreateContactCommandOutput,
  CreateContactListCommand,
  type CreateContactListCommandInput,
  type CreateContactListCommandOutput,
  CreateCustomVerificationEmailTemplateCommand,
  type CreateCustomVerificationEmailTemplateCommandInput,
  type CreateCustomVerificationEmailTemplateCommandOutput,
  CreateDedicatedIpPoolCommand,
  type CreateDedicatedIpPoolCommandInput,
  type CreateDedicatedIpPoolCommandOutput,
  CreateDeliverabilityTestReportCommand,
  type CreateDeliverabilityTestReportCommandInput,
  type CreateDeliverabilityTestReportCommandOutput,
  CreateEmailIdentityCommand,
  type CreateEmailIdentityCommandInput,
  type CreateEmailIdentityCommandOutput,
  CreateEmailIdentityPolicyCommand,
  type CreateEmailIdentityPolicyCommandInput,
  type CreateEmailIdentityPolicyCommandOutput,
  CreateEmailTemplateCommand,
  type CreateEmailTemplateCommandInput,
  type CreateEmailTemplateCommandOutput,
  CreateExportJobCommand,
  type CreateExportJobCommandInput,
  type CreateExportJobCommandOutput,
  CreateImportJobCommand,
  type CreateImportJobCommandInput,
  type CreateImportJobCommandOutput,
  CreateMultiRegionEndpointCommand,
  type CreateMultiRegionEndpointCommandInput,
  type CreateMultiRegionEndpointCommandOutput,
  CreateTenantCommand,
  type CreateTenantCommandInput,
  type CreateTenantCommandOutput,
  CreateTenantResourceAssociationCommand,
  type CreateTenantResourceAssociationCommandInput,
  type CreateTenantResourceAssociationCommandOutput,
  DeleteConfigurationSetCommand,
  type DeleteConfigurationSetCommandInput,
  type DeleteConfigurationSetCommandOutput,
  DeleteConfigurationSetEventDestinationCommand,
  type DeleteConfigurationSetEventDestinationCommandInput,
  type DeleteConfigurationSetEventDestinationCommandOutput,
  DeleteContactCommand,
  type DeleteContactCommandInput,
  type DeleteContactCommandOutput,
  DeleteContactListCommand,
  type DeleteContactListCommandInput,
  type DeleteContactListCommandOutput,
  DeleteCustomVerificationEmailTemplateCommand,
  type DeleteCustomVerificationEmailTemplateCommandInput,
  type DeleteCustomVerificationEmailTemplateCommandOutput,
  DeleteDedicatedIpPoolCommand,
  type DeleteDedicatedIpPoolCommandInput,
  type DeleteDedicatedIpPoolCommandOutput,
  DeleteEmailIdentityCommand,
  type DeleteEmailIdentityCommandInput,
  type DeleteEmailIdentityCommandOutput,
  DeleteEmailIdentityPolicyCommand,
  type DeleteEmailIdentityPolicyCommandInput,
  type DeleteEmailIdentityPolicyCommandOutput,
  DeleteEmailTemplateCommand,
  type DeleteEmailTemplateCommandInput,
  type DeleteEmailTemplateCommandOutput,
  DeleteMultiRegionEndpointCommand,
  type DeleteMultiRegionEndpointCommandInput,
  type DeleteMultiRegionEndpointCommandOutput,
  DeleteSuppressedDestinationCommand,
  type DeleteSuppressedDestinationCommandInput,
  type DeleteSuppressedDestinationCommandOutput,
  DeleteTenantCommand,
  type DeleteTenantCommandInput,
  type DeleteTenantCommandOutput,
  DeleteTenantResourceAssociationCommand,
  type DeleteTenantResourceAssociationCommandInput,
  type DeleteTenantResourceAssociationCommandOutput,
  GetAccountCommand,
  type GetAccountCommandInput,
  type GetAccountCommandOutput,
  GetBlacklistReportsCommand,
  type GetBlacklistReportsCommandInput,
  type GetBlacklistReportsCommandOutput,
  GetConfigurationSetCommand,
  type GetConfigurationSetCommandInput,
  type GetConfigurationSetCommandOutput,
  GetConfigurationSetEventDestinationsCommand,
  type GetConfigurationSetEventDestinationsCommandInput,
  type GetConfigurationSetEventDestinationsCommandOutput,
  GetContactCommand,
  type GetContactCommandInput,
  type GetContactCommandOutput,
  GetContactListCommand,
  type GetContactListCommandInput,
  type GetContactListCommandOutput,
  GetCustomVerificationEmailTemplateCommand,
  type GetCustomVerificationEmailTemplateCommandInput,
  type GetCustomVerificationEmailTemplateCommandOutput,
  GetDedicatedIpCommand,
  type GetDedicatedIpCommandInput,
  type GetDedicatedIpCommandOutput,
  GetDedicatedIpPoolCommand,
  type GetDedicatedIpPoolCommandInput,
  type GetDedicatedIpPoolCommandOutput,
  GetDedicatedIpsCommand,
  type GetDedicatedIpsCommandInput,
  type GetDedicatedIpsCommandOutput,
  GetDeliverabilityDashboardOptionsCommand,
  type GetDeliverabilityDashboardOptionsCommandInput,
  type GetDeliverabilityDashboardOptionsCommandOutput,
  GetDeliverabilityTestReportCommand,
  type GetDeliverabilityTestReportCommandInput,
  type GetDeliverabilityTestReportCommandOutput,
  GetDomainDeliverabilityCampaignCommand,
  type GetDomainDeliverabilityCampaignCommandInput,
  type GetDomainDeliverabilityCampaignCommandOutput,
  GetDomainStatisticsReportCommand,
  type GetDomainStatisticsReportCommandInput,
  type GetDomainStatisticsReportCommandOutput,
  GetEmailAddressInsightsCommand,
  type GetEmailAddressInsightsCommandInput,
  type GetEmailAddressInsightsCommandOutput,
  GetEmailIdentityCommand,
  type GetEmailIdentityCommandInput,
  type GetEmailIdentityCommandOutput,
  GetEmailIdentityPoliciesCommand,
  type GetEmailIdentityPoliciesCommandInput,
  type GetEmailIdentityPoliciesCommandOutput,
  GetEmailTemplateCommand,
  type GetEmailTemplateCommandInput,
  type GetEmailTemplateCommandOutput,
  GetExportJobCommand,
  type GetExportJobCommandInput,
  type GetExportJobCommandOutput,
  GetImportJobCommand,
  type GetImportJobCommandInput,
  type GetImportJobCommandOutput,
  GetMessageInsightsCommand,
  type GetMessageInsightsCommandInput,
  type GetMessageInsightsCommandOutput,
  GetMultiRegionEndpointCommand,
  type GetMultiRegionEndpointCommandInput,
  type GetMultiRegionEndpointCommandOutput,
  GetReputationEntityCommand,
  type GetReputationEntityCommandInput,
  type GetReputationEntityCommandOutput,
  GetSuppressedDestinationCommand,
  type GetSuppressedDestinationCommandInput,
  type GetSuppressedDestinationCommandOutput,
  GetTenantCommand,
  type GetTenantCommandInput,
  type GetTenantCommandOutput,
  ListConfigurationSetsCommand,
  type ListConfigurationSetsCommandInput,
  type ListConfigurationSetsCommandOutput,
  ListContactListsCommand,
  type ListContactListsCommandInput,
  type ListContactListsCommandOutput,
  ListContactsCommand,
  type ListContactsCommandInput,
  type ListContactsCommandOutput,
  ListCustomVerificationEmailTemplatesCommand,
  type ListCustomVerificationEmailTemplatesCommandInput,
  type ListCustomVerificationEmailTemplatesCommandOutput,
  ListDedicatedIpPoolsCommand,
  type ListDedicatedIpPoolsCommandInput,
  type ListDedicatedIpPoolsCommandOutput,
  ListDeliverabilityTestReportsCommand,
  type ListDeliverabilityTestReportsCommandInput,
  type ListDeliverabilityTestReportsCommandOutput,
  ListDomainDeliverabilityCampaignsCommand,
  type ListDomainDeliverabilityCampaignsCommandInput,
  type ListDomainDeliverabilityCampaignsCommandOutput,
  ListEmailIdentitiesCommand,
  type ListEmailIdentitiesCommandInput,
  type ListEmailIdentitiesCommandOutput,
  ListEmailTemplatesCommand,
  type ListEmailTemplatesCommandInput,
  type ListEmailTemplatesCommandOutput,
  ListExportJobsCommand,
  type ListExportJobsCommandInput,
  type ListExportJobsCommandOutput,
  ListImportJobsCommand,
  type ListImportJobsCommandInput,
  type ListImportJobsCommandOutput,
  ListMultiRegionEndpointsCommand,
  type ListMultiRegionEndpointsCommandInput,
  type ListMultiRegionEndpointsCommandOutput,
  ListRecommendationsCommand,
  type ListRecommendationsCommandInput,
  type ListRecommendationsCommandOutput,
  ListReputationEntitiesCommand,
  type ListReputationEntitiesCommandInput,
  type ListReputationEntitiesCommandOutput,
  ListResourceTenantsCommand,
  type ListResourceTenantsCommandInput,
  type ListResourceTenantsCommandOutput,
  ListSuppressedDestinationsCommand,
  type ListSuppressedDestinationsCommandInput,
  type ListSuppressedDestinationsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTenantResourcesCommand,
  type ListTenantResourcesCommandInput,
  type ListTenantResourcesCommandOutput,
  ListTenantsCommand,
  type ListTenantsCommandInput,
  type ListTenantsCommandOutput,
  paginateGetDedicatedIps,
  paginateListConfigurationSets,
  paginateListContactLists,
  paginateListContacts,
  paginateListCustomVerificationEmailTemplates,
  paginateListDedicatedIpPools,
  paginateListDeliverabilityTestReports,
  paginateListDomainDeliverabilityCampaigns,
  paginateListEmailIdentities,
  paginateListEmailTemplates,
  paginateListExportJobs,
  paginateListImportJobs,
  paginateListMultiRegionEndpoints,
  paginateListRecommendations,
  paginateListReputationEntities,
  paginateListResourceTenants,
  paginateListSuppressedDestinations,
  paginateListTenantResources,
  paginateListTenants,
  PutAccountDedicatedIpWarmupAttributesCommand,
  type PutAccountDedicatedIpWarmupAttributesCommandInput,
  type PutAccountDedicatedIpWarmupAttributesCommandOutput,
  PutAccountDetailsCommand,
  type PutAccountDetailsCommandInput,
  type PutAccountDetailsCommandOutput,
  PutAccountSendingAttributesCommand,
  type PutAccountSendingAttributesCommandInput,
  type PutAccountSendingAttributesCommandOutput,
  PutAccountSuppressionAttributesCommand,
  type PutAccountSuppressionAttributesCommandInput,
  type PutAccountSuppressionAttributesCommandOutput,
  PutAccountVdmAttributesCommand,
  type PutAccountVdmAttributesCommandInput,
  type PutAccountVdmAttributesCommandOutput,
  PutConfigurationSetArchivingOptionsCommand,
  type PutConfigurationSetArchivingOptionsCommandInput,
  type PutConfigurationSetArchivingOptionsCommandOutput,
  PutConfigurationSetDeliveryOptionsCommand,
  type PutConfigurationSetDeliveryOptionsCommandInput,
  type PutConfigurationSetDeliveryOptionsCommandOutput,
  PutConfigurationSetReputationOptionsCommand,
  type PutConfigurationSetReputationOptionsCommandInput,
  type PutConfigurationSetReputationOptionsCommandOutput,
  PutConfigurationSetSendingOptionsCommand,
  type PutConfigurationSetSendingOptionsCommandInput,
  type PutConfigurationSetSendingOptionsCommandOutput,
  PutConfigurationSetSuppressionOptionsCommand,
  type PutConfigurationSetSuppressionOptionsCommandInput,
  type PutConfigurationSetSuppressionOptionsCommandOutput,
  PutConfigurationSetTrackingOptionsCommand,
  type PutConfigurationSetTrackingOptionsCommandInput,
  type PutConfigurationSetTrackingOptionsCommandOutput,
  PutConfigurationSetVdmOptionsCommand,
  type PutConfigurationSetVdmOptionsCommandInput,
  type PutConfigurationSetVdmOptionsCommandOutput,
  PutDedicatedIpInPoolCommand,
  type PutDedicatedIpInPoolCommandInput,
  type PutDedicatedIpInPoolCommandOutput,
  PutDedicatedIpPoolScalingAttributesCommand,
  type PutDedicatedIpPoolScalingAttributesCommandInput,
  type PutDedicatedIpPoolScalingAttributesCommandOutput,
  PutDedicatedIpWarmupAttributesCommand,
  type PutDedicatedIpWarmupAttributesCommandInput,
  type PutDedicatedIpWarmupAttributesCommandOutput,
  PutDeliverabilityDashboardOptionCommand,
  type PutDeliverabilityDashboardOptionCommandInput,
  type PutDeliverabilityDashboardOptionCommandOutput,
  PutEmailIdentityConfigurationSetAttributesCommand,
  type PutEmailIdentityConfigurationSetAttributesCommandInput,
  type PutEmailIdentityConfigurationSetAttributesCommandOutput,
  PutEmailIdentityDkimAttributesCommand,
  type PutEmailIdentityDkimAttributesCommandInput,
  type PutEmailIdentityDkimAttributesCommandOutput,
  PutEmailIdentityDkimSigningAttributesCommand,
  type PutEmailIdentityDkimSigningAttributesCommandInput,
  type PutEmailIdentityDkimSigningAttributesCommandOutput,
  PutEmailIdentityFeedbackAttributesCommand,
  type PutEmailIdentityFeedbackAttributesCommandInput,
  type PutEmailIdentityFeedbackAttributesCommandOutput,
  PutEmailIdentityMailFromAttributesCommand,
  type PutEmailIdentityMailFromAttributesCommandInput,
  type PutEmailIdentityMailFromAttributesCommandOutput,
  PutSuppressedDestinationCommand,
  type PutSuppressedDestinationCommandInput,
  type PutSuppressedDestinationCommandOutput,
  PutTenantSuppressionAttributesCommand,
  type PutTenantSuppressionAttributesCommandInput,
  type PutTenantSuppressionAttributesCommandOutput,
  SendBulkEmailCommand,
  type SendBulkEmailCommandInput,
  type SendBulkEmailCommandOutput,
  SendCustomVerificationEmailCommand,
  type SendCustomVerificationEmailCommandInput,
  type SendCustomVerificationEmailCommandOutput,
  SendEmailCommand,
  type SendEmailCommandInput,
  type SendEmailCommandOutput,
  type SESv2Client,
  type SESv2ClientConfig,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestRenderEmailTemplateCommand,
  type TestRenderEmailTemplateCommandInput,
  type TestRenderEmailTemplateCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateConfigurationSetEventDestinationCommand,
  type UpdateConfigurationSetEventDestinationCommandInput,
  type UpdateConfigurationSetEventDestinationCommandOutput,
  UpdateContactCommand,
  type UpdateContactCommandInput,
  type UpdateContactCommandOutput,
  UpdateContactListCommand,
  type UpdateContactListCommandInput,
  type UpdateContactListCommandOutput,
  UpdateCustomVerificationEmailTemplateCommand,
  type UpdateCustomVerificationEmailTemplateCommandInput,
  type UpdateCustomVerificationEmailTemplateCommandOutput,
  UpdateEmailIdentityPolicyCommand,
  type UpdateEmailIdentityPolicyCommandInput,
  type UpdateEmailIdentityPolicyCommandOutput,
  UpdateEmailTemplateCommand,
  type UpdateEmailTemplateCommandInput,
  type UpdateEmailTemplateCommandOutput,
  UpdateReputationEntityCustomerManagedStatusCommand,
  type UpdateReputationEntityCustomerManagedStatusCommandInput,
  type UpdateReputationEntityCustomerManagedStatusCommandOutput,
  UpdateReputationEntityPolicyCommand,
  type UpdateReputationEntityPolicyCommandInput,
  type UpdateReputationEntityPolicyCommandOutput,
} from "@aws-sdk/client-sesv2";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import type {
  AccountSuspendedError,
  AlreadyExistsError,
  BadRequestError,
  ConcurrentModificationError,
  ConflictError,
  InternalServiceError,
  InvalidNextTokenError,
  LimitExceededError,
  MailFromDomainNotVerifiedError,
  MessageRejectedError,
  NotFoundError,
  SdkError,
  SendingPausedError,
  TooManyRequestsError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./SESv2ClientInstance.js";
import * as SESv2ServiceConfig from "./SESv2ServiceConfig.js";

const commands = {
  BatchGetMetricDataCommand,
  CancelExportJobCommand,
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateContactCommand,
  CreateContactListCommand,
  CreateCustomVerificationEmailTemplateCommand,
  CreateDedicatedIpPoolCommand,
  CreateDeliverabilityTestReportCommand,
  CreateEmailIdentityCommand,
  CreateEmailIdentityPolicyCommand,
  CreateEmailTemplateCommand,
  CreateExportJobCommand,
  CreateImportJobCommand,
  CreateMultiRegionEndpointCommand,
  CreateTenantCommand,
  CreateTenantResourceAssociationCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteContactCommand,
  DeleteContactListCommand,
  DeleteCustomVerificationEmailTemplateCommand,
  DeleteDedicatedIpPoolCommand,
  DeleteEmailIdentityCommand,
  DeleteEmailIdentityPolicyCommand,
  DeleteEmailTemplateCommand,
  DeleteMultiRegionEndpointCommand,
  DeleteSuppressedDestinationCommand,
  DeleteTenantCommand,
  DeleteTenantResourceAssociationCommand,
  GetAccountCommand,
  GetBlacklistReportsCommand,
  GetConfigurationSetCommand,
  GetConfigurationSetEventDestinationsCommand,
  GetContactCommand,
  GetContactListCommand,
  GetCustomVerificationEmailTemplateCommand,
  GetDedicatedIpCommand,
  GetDedicatedIpPoolCommand,
  GetDedicatedIpsCommand,
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityTestReportCommand,
  GetDomainDeliverabilityCampaignCommand,
  GetDomainStatisticsReportCommand,
  GetEmailAddressInsightsCommand,
  GetEmailIdentityCommand,
  GetEmailIdentityPoliciesCommand,
  GetEmailTemplateCommand,
  GetExportJobCommand,
  GetImportJobCommand,
  GetMessageInsightsCommand,
  GetMultiRegionEndpointCommand,
  GetReputationEntityCommand,
  GetSuppressedDestinationCommand,
  GetTenantCommand,
  ListConfigurationSetsCommand,
  ListContactListsCommand,
  ListContactsCommand,
  ListCustomVerificationEmailTemplatesCommand,
  ListDedicatedIpPoolsCommand,
  ListDeliverabilityTestReportsCommand,
  ListDomainDeliverabilityCampaignsCommand,
  ListEmailIdentitiesCommand,
  ListEmailTemplatesCommand,
  ListExportJobsCommand,
  ListImportJobsCommand,
  ListMultiRegionEndpointsCommand,
  ListRecommendationsCommand,
  ListReputationEntitiesCommand,
  ListResourceTenantsCommand,
  ListSuppressedDestinationsCommand,
  ListTagsForResourceCommand,
  ListTenantResourcesCommand,
  ListTenantsCommand,
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountDetailsCommand,
  PutAccountSendingAttributesCommand,
  PutAccountSuppressionAttributesCommand,
  PutAccountVdmAttributesCommand,
  PutConfigurationSetArchivingOptionsCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetSuppressionOptionsCommand,
  PutConfigurationSetTrackingOptionsCommand,
  PutConfigurationSetVdmOptionsCommand,
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpPoolScalingAttributesCommand,
  PutDedicatedIpWarmupAttributesCommand,
  PutDeliverabilityDashboardOptionCommand,
  PutEmailIdentityConfigurationSetAttributesCommand,
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityDkimSigningAttributesCommand,
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityMailFromAttributesCommand,
  PutSuppressedDestinationCommand,
  PutTenantSuppressionAttributesCommand,
  SendBulkEmailCommand,
  SendCustomVerificationEmailCommand,
  SendEmailCommand,
  TagResourceCommand,
  TestRenderEmailTemplateCommand,
  UntagResourceCommand,
  UpdateConfigurationSetEventDestinationCommand,
  UpdateContactCommand,
  UpdateContactListCommand,
  UpdateCustomVerificationEmailTemplateCommand,
  UpdateEmailIdentityPolicyCommand,
  UpdateEmailTemplateCommand,
  UpdateReputationEntityCustomerManagedStatusCommand,
  UpdateReputationEntityPolicyCommand,
};

const paginators = {
  paginateGetDedicatedIps,
  paginateListConfigurationSets,
  paginateListContactLists,
  paginateListContacts,
  paginateListCustomVerificationEmailTemplates,
  paginateListDedicatedIpPools,
  paginateListDeliverabilityTestReports,
  paginateListDomainDeliverabilityCampaigns,
  paginateListEmailIdentities,
  paginateListEmailTemplates,
  paginateListExportJobs,
  paginateListImportJobs,
  paginateListMultiRegionEndpoints,
  paginateListRecommendations,
  paginateListReputationEntities,
  paginateListResourceTenants,
  paginateListSuppressedDestinations,
  paginateListTenantResources,
  paginateListTenants,
};

interface SESv2Service$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchGetMetricDataCommand}
   */
  batchGetMetricData(
    args: BatchGetMetricDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetMetricDataCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | InternalServiceError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CancelExportJobCommand}
   */
  cancelExportJob(
    args: CancelExportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelExportJobCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
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
    | AlreadyExistsError
    | BadRequestError
    | ConcurrentModificationError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
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
    | AlreadyExistsError
    | BadRequestError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateContactCommand}
   */
  createContact(
    args: CreateContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateContactCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateContactListCommand}
   */
  createContactList(
    args: CreateContactListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateContactListCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | BadRequestError | LimitExceededError | TooManyRequestsError
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
    | AlreadyExistsError
    | BadRequestError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateDedicatedIpPoolCommand}
   */
  createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDedicatedIpPoolCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | BadRequestError
    | ConcurrentModificationError
    | LimitExceededError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateDeliverabilityTestReportCommand}
   */
  createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeliverabilityTestReportCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccountSuspendedError
    | BadRequestError
    | ConcurrentModificationError
    | LimitExceededError
    | MailFromDomainNotVerifiedError
    | MessageRejectedError
    | NotFoundError
    | SendingPausedError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateEmailIdentityCommand}
   */
  createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEmailIdentityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | BadRequestError
    | ConcurrentModificationError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateEmailIdentityPolicyCommand}
   */
  createEmailIdentityPolicy(
    args: CreateEmailIdentityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEmailIdentityPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | BadRequestError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateEmailTemplateCommand}
   */
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | BadRequestError | LimitExceededError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateExportJobCommand}
   */
  createExportJob(
    args: CreateExportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateExportJobCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | LimitExceededError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateImportJobCommand}
   */
  createImportJob(
    args: CreateImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateImportJobCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | LimitExceededError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateMultiRegionEndpointCommand}
   */
  createMultiRegionEndpoint(
    args: CreateMultiRegionEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateMultiRegionEndpointCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | BadRequestError | LimitExceededError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateTenantCommand}
   */
  createTenant(
    args: CreateTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTenantCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | BadRequestError | LimitExceededError | TooManyRequestsError
  >;

  /**
   * @see {@link CreateTenantResourceAssociationCommand}
   */
  createTenantResourceAssociation(
    args: CreateTenantResourceAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTenantResourceAssociationCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteConfigurationSetCommand}
   */
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConfigurationSetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteConfigurationSetEventDestinationCommand}
   */
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConfigurationSetEventDestinationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteContactCommand}
   */
  deleteContact(
    args: DeleteContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteContactCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteContactListCommand}
   */
  deleteContactList(
    args: DeleteContactListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteContactListCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteCustomVerificationEmailTemplateCommand}
   */
  deleteCustomVerificationEmailTemplate(
    args: DeleteCustomVerificationEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomVerificationEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteDedicatedIpPoolCommand}
   */
  deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDedicatedIpPoolCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteEmailIdentityCommand}
   */
  deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEmailIdentityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteEmailIdentityPolicyCommand}
   */
  deleteEmailIdentityPolicy(
    args: DeleteEmailIdentityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEmailIdentityPolicyCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteEmailTemplateCommand}
   */
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteMultiRegionEndpointCommand}
   */
  deleteMultiRegionEndpoint(
    args: DeleteMultiRegionEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMultiRegionEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteSuppressedDestinationCommand}
   */
  deleteSuppressedDestination(
    args: DeleteSuppressedDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSuppressedDestinationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteTenantCommand}
   */
  deleteTenant(
    args: DeleteTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTenantCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteTenantResourceAssociationCommand}
   */
  deleteTenantResourceAssociation(
    args: DeleteTenantResourceAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTenantResourceAssociationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetAccountCommand}
   */
  getAccount(
    args: GetAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccountCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link GetBlacklistReportsCommand}
   */
  getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBlacklistReportsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetConfigurationSetCommand}
   */
  getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConfigurationSetCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetConfigurationSetEventDestinationsCommand}
   */
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConfigurationSetEventDestinationsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetContactCommand}
   */
  getContact(
    args: GetContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetContactCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetContactListCommand}
   */
  getContactList(
    args: GetContactListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetContactListCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetCustomVerificationEmailTemplateCommand}
   */
  getCustomVerificationEmailTemplate(
    args: GetCustomVerificationEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCustomVerificationEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDedicatedIpCommand}
   */
  getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDedicatedIpCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDedicatedIpPoolCommand}
   */
  getDedicatedIpPool(
    args: GetDedicatedIpPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDedicatedIpPoolCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDedicatedIpsCommand}
   */
  getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDedicatedIpsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  getDedicatedIpsStream(
    args: GetDedicatedIpsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    GetDedicatedIpsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDeliverabilityDashboardOptionsCommand}
   */
  getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliverabilityDashboardOptionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | LimitExceededError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDeliverabilityTestReportCommand}
   */
  getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeliverabilityTestReportCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDomainDeliverabilityCampaignCommand}
   */
  getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainDeliverabilityCampaignCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetDomainStatisticsReportCommand}
   */
  getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainStatisticsReportCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetEmailAddressInsightsCommand}
   */
  getEmailAddressInsights(
    args: GetEmailAddressInsightsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEmailAddressInsightsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link GetEmailIdentityCommand}
   */
  getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEmailIdentityCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetEmailIdentityPoliciesCommand}
   */
  getEmailIdentityPolicies(
    args: GetEmailIdentityPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEmailIdentityPoliciesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetEmailTemplateCommand}
   */
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetExportJobCommand}
   */
  getExportJob(
    args: GetExportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetExportJobCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetImportJobCommand}
   */
  getImportJob(
    args: GetImportJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetImportJobCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetMessageInsightsCommand}
   */
  getMessageInsights(
    args: GetMessageInsightsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMessageInsightsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetMultiRegionEndpointCommand}
   */
  getMultiRegionEndpoint(
    args: GetMultiRegionEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMultiRegionEndpointCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetReputationEntityCommand}
   */
  getReputationEntity(
    args: GetReputationEntityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetReputationEntityCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetSuppressedDestinationCommand}
   */
  getSuppressedDestination(
    args: GetSuppressedDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSuppressedDestinationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link GetTenantCommand}
   */
  getTenant(
    args: GetTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTenantCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListConfigurationSetsCommand}
   */
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConfigurationSetsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listConfigurationSetsStream(
    args: ListConfigurationSetsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListConfigurationSetsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListContactListsCommand}
   */
  listContactLists(
    args: ListContactListsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListContactListsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listContactListsStream(
    args: ListContactListsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListContactListsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListContactsCommand}
   */
  listContacts(
    args: ListContactsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListContactsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  listContactsStream(
    args: ListContactsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListContactsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListCustomVerificationEmailTemplatesCommand}
   */
  listCustomVerificationEmailTemplates(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCustomVerificationEmailTemplatesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listCustomVerificationEmailTemplatesStream(
    args: ListCustomVerificationEmailTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListCustomVerificationEmailTemplatesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListDedicatedIpPoolsCommand}
   */
  listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDedicatedIpPoolsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listDedicatedIpPoolsStream(
    args: ListDedicatedIpPoolsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDedicatedIpPoolsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListDeliverabilityTestReportsCommand}
   */
  listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeliverabilityTestReportsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  listDeliverabilityTestReportsStream(
    args: ListDeliverabilityTestReportsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDeliverabilityTestReportsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListDomainDeliverabilityCampaignsCommand}
   */
  listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainDeliverabilityCampaignsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  listDomainDeliverabilityCampaignsStream(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDomainDeliverabilityCampaignsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListEmailIdentitiesCommand}
   */
  listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEmailIdentitiesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listEmailIdentitiesStream(
    args: ListEmailIdentitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListEmailIdentitiesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListEmailTemplatesCommand}
   */
  listEmailTemplates(
    args: ListEmailTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEmailTemplatesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listEmailTemplatesStream(
    args: ListEmailTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListEmailTemplatesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListExportJobsCommand}
   */
  listExportJobs(
    args: ListExportJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListExportJobsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listExportJobsStream(
    args: ListExportJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListExportJobsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListImportJobsCommand}
   */
  listImportJobs(
    args: ListImportJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListImportJobsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listImportJobsStream(
    args: ListImportJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListImportJobsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListMultiRegionEndpointsCommand}
   */
  listMultiRegionEndpoints(
    args: ListMultiRegionEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMultiRegionEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listMultiRegionEndpointsStream(
    args: ListMultiRegionEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListMultiRegionEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRecommendationsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  listRecommendationsStream(
    args: ListRecommendationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListRecommendationsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListReputationEntitiesCommand}
   */
  listReputationEntities(
    args: ListReputationEntitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListReputationEntitiesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listReputationEntitiesStream(
    args: ListReputationEntitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListReputationEntitiesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link ListResourceTenantsCommand}
   */
  listResourceTenants(
    args: ListResourceTenantsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResourceTenantsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  listResourceTenantsStream(
    args: ListResourceTenantsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListResourceTenantsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListSuppressedDestinationsCommand}
   */
  listSuppressedDestinations(
    args: ListSuppressedDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSuppressedDestinationsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | InvalidNextTokenError | NotFoundError | TooManyRequestsError
  >;

  listSuppressedDestinationsStream(
    args: ListSuppressedDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListSuppressedDestinationsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | InvalidNextTokenError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListTenantResourcesCommand}
   */
  listTenantResources(
    args: ListTenantResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTenantResourcesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  listTenantResourcesStream(
    args: ListTenantResourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListTenantResourcesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link ListTenantsCommand}
   */
  listTenants(
    args: ListTenantsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTenantsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  listTenantsStream(
    args: ListTenantsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListTenantsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link PutAccountDedicatedIpWarmupAttributesCommand}
   */
  putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountDedicatedIpWarmupAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link PutAccountDetailsCommand}
   */
  putAccountDetails(
    args: PutAccountDetailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountDetailsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | TooManyRequestsError
  >;

  /**
   * @see {@link PutAccountSendingAttributesCommand}
   */
  putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountSendingAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link PutAccountSuppressionAttributesCommand}
   */
  putAccountSuppressionAttributes(
    args: PutAccountSuppressionAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountSuppressionAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link PutAccountVdmAttributesCommand}
   */
  putAccountVdmAttributes(
    args: PutAccountVdmAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAccountVdmAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | TooManyRequestsError
  >;

  /**
   * @see {@link PutConfigurationSetArchivingOptionsCommand}
   */
  putConfigurationSetArchivingOptions(
    args: PutConfigurationSetArchivingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutConfigurationSetArchivingOptionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutConfigurationSetDeliveryOptionsCommand}
   */
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutConfigurationSetDeliveryOptionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutConfigurationSetReputationOptionsCommand}
   */
  putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutConfigurationSetReputationOptionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutConfigurationSetSendingOptionsCommand}
   */
  putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutConfigurationSetSendingOptionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutConfigurationSetSuppressionOptionsCommand}
   */
  putConfigurationSetSuppressionOptions(
    args: PutConfigurationSetSuppressionOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutConfigurationSetSuppressionOptionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutConfigurationSetTrackingOptionsCommand}
   */
  putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutConfigurationSetTrackingOptionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutConfigurationSetVdmOptionsCommand}
   */
  putConfigurationSetVdmOptions(
    args: PutConfigurationSetVdmOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutConfigurationSetVdmOptionsCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutDedicatedIpInPoolCommand}
   */
  putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDedicatedIpInPoolCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutDedicatedIpPoolScalingAttributesCommand}
   */
  putDedicatedIpPoolScalingAttributes(
    args: PutDedicatedIpPoolScalingAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDedicatedIpPoolScalingAttributesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutDedicatedIpWarmupAttributesCommand}
   */
  putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDedicatedIpWarmupAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutDeliverabilityDashboardOptionCommand}
   */
  putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDeliverabilityDashboardOptionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | BadRequestError
    | LimitExceededError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutEmailIdentityConfigurationSetAttributesCommand}
   */
  putEmailIdentityConfigurationSetAttributes(
    args: PutEmailIdentityConfigurationSetAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutEmailIdentityConfigurationSetAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutEmailIdentityDkimAttributesCommand}
   */
  putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutEmailIdentityDkimAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutEmailIdentityDkimSigningAttributesCommand}
   */
  putEmailIdentityDkimSigningAttributes(
    args: PutEmailIdentityDkimSigningAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutEmailIdentityDkimSigningAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutEmailIdentityFeedbackAttributesCommand}
   */
  putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutEmailIdentityFeedbackAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutEmailIdentityMailFromAttributesCommand}
   */
  putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutEmailIdentityMailFromAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutSuppressedDestinationCommand}
   */
  putSuppressedDestination(
    args: PutSuppressedDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutSuppressedDestinationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link PutTenantSuppressionAttributesCommand}
   */
  putTenantSuppressionAttributes(
    args: PutTenantSuppressionAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutTenantSuppressionAttributesCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link SendBulkEmailCommand}
   */
  sendBulkEmail(
    args: SendBulkEmailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendBulkEmailCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccountSuspendedError
    | BadRequestError
    | LimitExceededError
    | MailFromDomainNotVerifiedError
    | MessageRejectedError
    | NotFoundError
    | SendingPausedError
    | TooManyRequestsError
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
    | BadRequestError
    | LimitExceededError
    | MailFromDomainNotVerifiedError
    | MessageRejectedError
    | NotFoundError
    | SendingPausedError
    | TooManyRequestsError
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
    | AccountSuspendedError
    | BadRequestError
    | LimitExceededError
    | MailFromDomainNotVerifiedError
    | MessageRejectedError
    | NotFoundError
    | SendingPausedError
    | TooManyRequestsError
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
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link TestRenderEmailTemplateCommand}
   */
  testRenderEmailTemplate(
    args: TestRenderEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestRenderEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
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
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateConfigurationSetEventDestinationCommand}
   */
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConfigurationSetEventDestinationCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateContactCommand}
   */
  updateContact(
    args: UpdateContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContactCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateContactListCommand}
   */
  updateContactList(
    args: UpdateContactListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContactListCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BadRequestError
    | ConcurrentModificationError
    | NotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateCustomVerificationEmailTemplateCommand}
   */
  updateCustomVerificationEmailTemplate(
    args: UpdateCustomVerificationEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCustomVerificationEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateEmailIdentityPolicyCommand}
   */
  updateEmailIdentityPolicy(
    args: UpdateEmailIdentityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEmailIdentityPolicyCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateEmailTemplateCommand}
   */
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEmailTemplateCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateReputationEntityCustomerManagedStatusCommand}
   */
  updateReputationEntityCustomerManagedStatus(
    args: UpdateReputationEntityCustomerManagedStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateReputationEntityCustomerManagedStatusCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateReputationEntityPolicyCommand}
   */
  updateReputationEntityPolicy(
    args: UpdateReputationEntityPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateReputationEntityPolicyCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | ConflictError | TooManyRequestsError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSESv2Service = Effect.gen(function*() {
  const client = yield* Instance.SESv2ClientInstance;

  return yield* Service.fromClientAndCommands<SESv2Service$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: SESv2ServiceConfig.toSESv2ClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class SESv2Service extends Effect.Tag("@effect-aws/client-sesv2/SESv2Service")<
  SESv2Service,
  SESv2Service$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSESv2Service).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: SESv2Service.Config) =>
    Layer.effect(this, makeSESv2Service).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(SESv2ServiceConfig.setSESv2ServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SESv2ClientConfig) => SESv2Client,
  ) =>
    Layer.effect(this, makeSESv2Service).pipe(
      Layer.provide(
        Layer.effect(
          Instance.SESv2ClientInstance,
          Effect.map(SESv2ServiceConfig.toSESv2ClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace SESv2Service {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<SESv2ClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = SESv2Service$;
}
