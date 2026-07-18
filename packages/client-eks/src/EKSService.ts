/**
 * @since 1.0.0
 */
import {
  AssociateAccessPolicyCommand,
  type AssociateAccessPolicyCommandInput,
  type AssociateAccessPolicyCommandOutput,
  AssociateEncryptionConfigCommand,
  type AssociateEncryptionConfigCommandInput,
  type AssociateEncryptionConfigCommandOutput,
  AssociateIdentityProviderConfigCommand,
  type AssociateIdentityProviderConfigCommandInput,
  type AssociateIdentityProviderConfigCommandOutput,
  CancelUpdateCommand,
  type CancelUpdateCommandInput,
  type CancelUpdateCommandOutput,
  CreateAccessEntryCommand,
  type CreateAccessEntryCommandInput,
  type CreateAccessEntryCommandOutput,
  CreateAddonCommand,
  type CreateAddonCommandInput,
  type CreateAddonCommandOutput,
  CreateCapabilityCommand,
  type CreateCapabilityCommandInput,
  type CreateCapabilityCommandOutput,
  CreateClusterCommand,
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateEksAnywhereSubscriptionCommand,
  type CreateEksAnywhereSubscriptionCommandInput,
  type CreateEksAnywhereSubscriptionCommandOutput,
  CreateFargateProfileCommand,
  type CreateFargateProfileCommandInput,
  type CreateFargateProfileCommandOutput,
  CreateNodegroupCommand,
  type CreateNodegroupCommandInput,
  type CreateNodegroupCommandOutput,
  CreatePodIdentityAssociationCommand,
  type CreatePodIdentityAssociationCommandInput,
  type CreatePodIdentityAssociationCommandOutput,
  DeleteAccessEntryCommand,
  type DeleteAccessEntryCommandInput,
  type DeleteAccessEntryCommandOutput,
  DeleteAddonCommand,
  type DeleteAddonCommandInput,
  type DeleteAddonCommandOutput,
  DeleteCapabilityCommand,
  type DeleteCapabilityCommandInput,
  type DeleteCapabilityCommandOutput,
  DeleteClusterCommand,
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteEksAnywhereSubscriptionCommand,
  type DeleteEksAnywhereSubscriptionCommandInput,
  type DeleteEksAnywhereSubscriptionCommandOutput,
  DeleteFargateProfileCommand,
  type DeleteFargateProfileCommandInput,
  type DeleteFargateProfileCommandOutput,
  DeleteNodegroupCommand,
  type DeleteNodegroupCommandInput,
  type DeleteNodegroupCommandOutput,
  DeletePodIdentityAssociationCommand,
  type DeletePodIdentityAssociationCommandInput,
  type DeletePodIdentityAssociationCommandOutput,
  DeregisterClusterCommand,
  type DeregisterClusterCommandInput,
  type DeregisterClusterCommandOutput,
  DescribeAccessEntryCommand,
  type DescribeAccessEntryCommandInput,
  type DescribeAccessEntryCommandOutput,
  DescribeAddonCommand,
  type DescribeAddonCommandInput,
  type DescribeAddonCommandOutput,
  DescribeAddonConfigurationCommand,
  type DescribeAddonConfigurationCommandInput,
  type DescribeAddonConfigurationCommandOutput,
  DescribeAddonVersionsCommand,
  type DescribeAddonVersionsCommandInput,
  type DescribeAddonVersionsCommandOutput,
  DescribeCapabilityCommand,
  type DescribeCapabilityCommandInput,
  type DescribeCapabilityCommandOutput,
  DescribeClusterCommand,
  type DescribeClusterCommandInput,
  type DescribeClusterCommandOutput,
  DescribeClusterVersionsCommand,
  type DescribeClusterVersionsCommandInput,
  type DescribeClusterVersionsCommandOutput,
  DescribeEksAnywhereSubscriptionCommand,
  type DescribeEksAnywhereSubscriptionCommandInput,
  type DescribeEksAnywhereSubscriptionCommandOutput,
  DescribeFargateProfileCommand,
  type DescribeFargateProfileCommandInput,
  type DescribeFargateProfileCommandOutput,
  DescribeIdentityProviderConfigCommand,
  type DescribeIdentityProviderConfigCommandInput,
  type DescribeIdentityProviderConfigCommandOutput,
  DescribeInsightCommand,
  type DescribeInsightCommandInput,
  type DescribeInsightCommandOutput,
  DescribeInsightsRefreshCommand,
  type DescribeInsightsRefreshCommandInput,
  type DescribeInsightsRefreshCommandOutput,
  DescribeNodegroupCommand,
  type DescribeNodegroupCommandInput,
  type DescribeNodegroupCommandOutput,
  DescribePodIdentityAssociationCommand,
  type DescribePodIdentityAssociationCommandInput,
  type DescribePodIdentityAssociationCommandOutput,
  DescribeUpdateCommand,
  type DescribeUpdateCommandInput,
  type DescribeUpdateCommandOutput,
  DisassociateAccessPolicyCommand,
  type DisassociateAccessPolicyCommandInput,
  type DisassociateAccessPolicyCommandOutput,
  DisassociateIdentityProviderConfigCommand,
  type DisassociateIdentityProviderConfigCommandInput,
  type DisassociateIdentityProviderConfigCommandOutput,
  type EKSClient,
  type EKSClientConfig,
  ListAccessEntriesCommand,
  type ListAccessEntriesCommandInput,
  type ListAccessEntriesCommandOutput,
  ListAccessPoliciesCommand,
  type ListAccessPoliciesCommandInput,
  type ListAccessPoliciesCommandOutput,
  ListAddonsCommand,
  type ListAddonsCommandInput,
  type ListAddonsCommandOutput,
  ListAssociatedAccessPoliciesCommand,
  type ListAssociatedAccessPoliciesCommandInput,
  type ListAssociatedAccessPoliciesCommandOutput,
  ListCapabilitiesCommand,
  type ListCapabilitiesCommandInput,
  type ListCapabilitiesCommandOutput,
  ListClustersCommand,
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  ListEksAnywhereSubscriptionsCommand,
  type ListEksAnywhereSubscriptionsCommandInput,
  type ListEksAnywhereSubscriptionsCommandOutput,
  ListFargateProfilesCommand,
  type ListFargateProfilesCommandInput,
  type ListFargateProfilesCommandOutput,
  ListIdentityProviderConfigsCommand,
  type ListIdentityProviderConfigsCommandInput,
  type ListIdentityProviderConfigsCommandOutput,
  ListInsightsCommand,
  type ListInsightsCommandInput,
  type ListInsightsCommandOutput,
  ListNodegroupsCommand,
  type ListNodegroupsCommandInput,
  type ListNodegroupsCommandOutput,
  ListPodIdentityAssociationsCommand,
  type ListPodIdentityAssociationsCommandInput,
  type ListPodIdentityAssociationsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListUpdatesCommand,
  type ListUpdatesCommandInput,
  type ListUpdatesCommandOutput,
  paginateDescribeAddonVersions,
  paginateDescribeClusterVersions,
  paginateListAccessEntries,
  paginateListAccessPolicies,
  paginateListAddons,
  paginateListAssociatedAccessPolicies,
  paginateListCapabilities,
  paginateListClusters,
  paginateListEksAnywhereSubscriptions,
  paginateListFargateProfiles,
  paginateListIdentityProviderConfigs,
  paginateListInsights,
  paginateListNodegroups,
  paginateListPodIdentityAssociations,
  paginateListUpdates,
  RegisterClusterCommand,
  type RegisterClusterCommandInput,
  type RegisterClusterCommandOutput,
  StartInsightsRefreshCommand,
  type StartInsightsRefreshCommandInput,
  type StartInsightsRefreshCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAccessEntryCommand,
  type UpdateAccessEntryCommandInput,
  type UpdateAccessEntryCommandOutput,
  UpdateAddonCommand,
  type UpdateAddonCommandInput,
  type UpdateAddonCommandOutput,
  UpdateCapabilityCommand,
  type UpdateCapabilityCommandInput,
  type UpdateCapabilityCommandOutput,
  UpdateClusterConfigCommand,
  type UpdateClusterConfigCommandInput,
  type UpdateClusterConfigCommandOutput,
  UpdateClusterVersionCommand,
  type UpdateClusterVersionCommandInput,
  type UpdateClusterVersionCommandOutput,
  UpdateEksAnywhereSubscriptionCommand,
  type UpdateEksAnywhereSubscriptionCommandInput,
  type UpdateEksAnywhereSubscriptionCommandOutput,
  UpdateNodegroupConfigCommand,
  type UpdateNodegroupConfigCommandInput,
  type UpdateNodegroupConfigCommandOutput,
  UpdateNodegroupVersionCommand,
  type UpdateNodegroupVersionCommandInput,
  type UpdateNodegroupVersionCommandOutput,
  UpdatePodIdentityAssociationCommand,
  type UpdatePodIdentityAssociationCommandInput,
  type UpdatePodIdentityAssociationCommandOutput,
} from "@aws-sdk/client-eks";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import * as Instance from "./EKSClientInstance.js";
import * as EKSServiceConfig from "./EKSServiceConfig.js";
import type {
  AccessDeniedError,
  BadRequestError,
  ClientError,
  InvalidParameterError,
  InvalidRequestError,
  InvalidStateError,
  NotFoundError,
  ResourceInUseError,
  ResourceLimitExceededError,
  ResourceNotFoundError,
  ResourcePropagationDelayError,
  SdkError,
  ServerError,
  ServiceUnavailableError,
  ThrottlingError,
  UnsupportedAvailabilityZoneError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AssociateAccessPolicyCommand,
  AssociateEncryptionConfigCommand,
  AssociateIdentityProviderConfigCommand,
  CancelUpdateCommand,
  CreateAccessEntryCommand,
  CreateAddonCommand,
  CreateCapabilityCommand,
  CreateClusterCommand,
  CreateEksAnywhereSubscriptionCommand,
  CreateFargateProfileCommand,
  CreateNodegroupCommand,
  CreatePodIdentityAssociationCommand,
  DeleteAccessEntryCommand,
  DeleteAddonCommand,
  DeleteCapabilityCommand,
  DeleteClusterCommand,
  DeleteEksAnywhereSubscriptionCommand,
  DeleteFargateProfileCommand,
  DeleteNodegroupCommand,
  DeletePodIdentityAssociationCommand,
  DeregisterClusterCommand,
  DescribeAccessEntryCommand,
  DescribeAddonCommand,
  DescribeAddonConfigurationCommand,
  DescribeAddonVersionsCommand,
  DescribeCapabilityCommand,
  DescribeClusterCommand,
  DescribeClusterVersionsCommand,
  DescribeEksAnywhereSubscriptionCommand,
  DescribeFargateProfileCommand,
  DescribeIdentityProviderConfigCommand,
  DescribeInsightCommand,
  DescribeInsightsRefreshCommand,
  DescribeNodegroupCommand,
  DescribePodIdentityAssociationCommand,
  DescribeUpdateCommand,
  DisassociateAccessPolicyCommand,
  DisassociateIdentityProviderConfigCommand,
  ListAccessEntriesCommand,
  ListAccessPoliciesCommand,
  ListAddonsCommand,
  ListAssociatedAccessPoliciesCommand,
  ListCapabilitiesCommand,
  ListClustersCommand,
  ListEksAnywhereSubscriptionsCommand,
  ListFargateProfilesCommand,
  ListIdentityProviderConfigsCommand,
  ListInsightsCommand,
  ListNodegroupsCommand,
  ListPodIdentityAssociationsCommand,
  ListTagsForResourceCommand,
  ListUpdatesCommand,
  RegisterClusterCommand,
  StartInsightsRefreshCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessEntryCommand,
  UpdateAddonCommand,
  UpdateCapabilityCommand,
  UpdateClusterConfigCommand,
  UpdateClusterVersionCommand,
  UpdateEksAnywhereSubscriptionCommand,
  UpdateNodegroupConfigCommand,
  UpdateNodegroupVersionCommand,
  UpdatePodIdentityAssociationCommand,
};

const paginators = {
  paginateDescribeAddonVersions,
  paginateDescribeClusterVersions,
  paginateListAccessEntries,
  paginateListAccessPolicies,
  paginateListAddons,
  paginateListAssociatedAccessPolicies,
  paginateListCapabilities,
  paginateListClusters,
  paginateListEksAnywhereSubscriptions,
  paginateListFargateProfiles,
  paginateListIdentityProviderConfigs,
  paginateListInsights,
  paginateListNodegroups,
  paginateListPodIdentityAssociations,
  paginateListUpdates,
};

interface EKSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AssociateAccessPolicyCommand}
   */
  associateAccessPolicy(
    args: AssociateAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateAccessPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link AssociateEncryptionConfigCommand}
   */
  associateEncryptionConfig(
    args: AssociateEncryptionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateEncryptionConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ThrottlingError
  >;

  /**
   * @see {@link AssociateIdentityProviderConfigCommand}
   */
  associateIdentityProviderConfig(
    args: AssociateIdentityProviderConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateIdentityProviderConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ThrottlingError
  >;

  /**
   * @see {@link CancelUpdateCommand}
   */
  cancelUpdate(
    args: CancelUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelUpdateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | InvalidStateError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateAccessEntryCommand}
   */
  createAccessEntry(
    args: CreateAccessEntryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAccessEntryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceLimitExceededError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link CreateAddonCommand}
   */
  createAddon(
    args: CreateAddonCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAddonCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link CreateCapabilityCommand}
   */
  createCapability(
    args: CreateCapabilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCapabilityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceLimitExceededError
    | ServerError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceInUseError
    | ResourceLimitExceededError
    | ServerError
    | ServiceUnavailableError
    | UnsupportedAvailabilityZoneError
  >;

  /**
   * @see {@link CreateEksAnywhereSubscriptionCommand}
   */
  createEksAnywhereSubscription(
    args: CreateEksAnywhereSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEksAnywhereSubscriptionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceLimitExceededError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link CreateFargateProfileCommand}
   */
  createFargateProfile(
    args: CreateFargateProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFargateProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceLimitExceededError
    | ServerError
    | UnsupportedAvailabilityZoneError
  >;

  /**
   * @see {@link CreateNodegroupCommand}
   */
  createNodegroup(
    args: CreateNodegroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNodegroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceLimitExceededError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link CreatePodIdentityAssociationCommand}
   */
  createPodIdentityAssociation(
    args: CreatePodIdentityAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePodIdentityAssociationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceLimitExceededError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DeleteAccessEntryCommand}
   */
  deleteAccessEntry(
    args: DeleteAccessEntryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccessEntryCommandOutput,
    Cause.TimeoutException | SdkError | InvalidRequestError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DeleteAddonCommand}
   */
  deleteAddon(
    args: DeleteAddonCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAddonCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DeleteCapabilityCommand}
   */
  deleteCapability(
    args: DeleteCapabilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCapabilityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidParameterError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteEksAnywhereSubscriptionCommand}
   */
  deleteEksAnywhereSubscription(
    args: DeleteEksAnywhereSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEksAnywhereSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidRequestError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DeleteFargateProfileCommand}
   */
  deleteFargateProfile(
    args: DeleteFargateProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFargateProfileCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DeleteNodegroupCommand}
   */
  deleteNodegroup(
    args: DeleteNodegroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNodegroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeletePodIdentityAssociationCommand}
   */
  deletePodIdentityAssociation(
    args: DeletePodIdentityAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePodIdentityAssociationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DeregisterClusterCommand}
   */
  deregisterCluster(
    args: DeregisterClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeAccessEntryCommand}
   */
  describeAccessEntry(
    args: DescribeAccessEntryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccessEntryCommandOutput,
    Cause.TimeoutException | SdkError | InvalidRequestError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DescribeAddonCommand}
   */
  describeAddon(
    args: DescribeAddonCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAddonCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DescribeAddonConfigurationCommand}
   */
  describeAddonConfiguration(
    args: DescribeAddonConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAddonConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DescribeAddonVersionsCommand}
   */
  describeAddonVersions(
    args: DescribeAddonVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAddonVersionsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  describeAddonVersionsStream(
    args: DescribeAddonVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    DescribeAddonVersionsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DescribeCapabilityCommand}
   */
  describeCapability(
    args: DescribeCapabilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapabilityCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClusterCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ResourceNotFoundError | ServerError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeClusterVersionsCommand}
   */
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClusterVersionsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | InvalidRequestError | ServerError
  >;

  describeClusterVersionsStream(
    args: DescribeClusterVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    DescribeClusterVersionsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | InvalidRequestError | ServerError
  >;

  /**
   * @see {@link DescribeEksAnywhereSubscriptionCommand}
   */
  describeEksAnywhereSubscription(
    args: DescribeEksAnywhereSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEksAnywhereSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | ResourceNotFoundError | ServerError | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeFargateProfileCommand}
   */
  describeFargateProfile(
    args: DescribeFargateProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFargateProfileCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DescribeIdentityProviderConfigCommand}
   */
  describeIdentityProviderConfig(
    args: DescribeIdentityProviderConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIdentityProviderConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribeInsightCommand}
   */
  describeInsight(
    args: DescribeInsightCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInsightCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DescribeInsightsRefreshCommand}
   */
  describeInsightsRefresh(
    args: DescribeInsightsRefreshCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInsightsRefreshCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DescribeNodegroupCommand}
   */
  describeNodegroup(
    args: DescribeNodegroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNodegroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DescribePodIdentityAssociationCommand}
   */
  describePodIdentityAssociation(
    args: DescribePodIdentityAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePodIdentityAssociationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link DescribeUpdateCommand}
   */
  describeUpdate(
    args: DescribeUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeUpdateCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DisassociateAccessPolicyCommand}
   */
  disassociateAccessPolicy(
    args: DisassociateAccessPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateAccessPolicyCommandOutput,
    Cause.TimeoutException | SdkError | InvalidRequestError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link DisassociateIdentityProviderConfigCommand}
   */
  disassociateIdentityProviderConfig(
    args: DisassociateIdentityProviderConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateIdentityProviderConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ThrottlingError
  >;

  /**
   * @see {@link ListAccessEntriesCommand}
   */
  listAccessEntries(
    args: ListAccessEntriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccessEntriesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  listAccessEntriesStream(
    args: ListAccessEntriesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAccessEntriesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link ListAccessPoliciesCommand}
   */
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccessPoliciesCommandOutput,
    Cause.TimeoutException | SdkError | ServerError
  >;

  listAccessPoliciesStream(
    args: ListAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<ListAccessPoliciesCommandOutput, Cause.TimeoutException | SdkError | ServerError>;

  /**
   * @see {@link ListAddonsCommand}
   */
  listAddons(
    args: ListAddonsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAddonsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  listAddonsStream(
    args: ListAddonsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAddonsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link ListAssociatedAccessPoliciesCommand}
   */
  listAssociatedAccessPolicies(
    args: ListAssociatedAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAssociatedAccessPoliciesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidRequestError | ResourceNotFoundError | ServerError
  >;

  listAssociatedAccessPoliciesStream(
    args: ListAssociatedAccessPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListAssociatedAccessPoliciesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidRequestError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link ListCapabilitiesCommand}
   */
  listCapabilities(
    args: ListCapabilitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCapabilitiesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError
  >;

  listCapabilitiesStream(
    args: ListCapabilitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListCapabilitiesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidParameterError | ServerError
  >;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(
    args: ListClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListClustersCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError | ServiceUnavailableError
  >;

  listClustersStream(
    args: ListClustersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListClustersCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListEksAnywhereSubscriptionsCommand}
   */
  listEksAnywhereSubscriptions(
    args: ListEksAnywhereSubscriptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEksAnywhereSubscriptionsCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError | ServiceUnavailableError
  >;

  listEksAnywhereSubscriptionsStream(
    args: ListEksAnywhereSubscriptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListEksAnywhereSubscriptionsCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ServerError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListFargateProfilesCommand}
   */
  listFargateProfiles(
    args: ListFargateProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFargateProfilesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  listFargateProfilesStream(
    args: ListFargateProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListFargateProfilesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link ListIdentityProviderConfigsCommand}
   */
  listIdentityProviderConfigs(
    args: ListIdentityProviderConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIdentityProviderConfigsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  listIdentityProviderConfigsStream(
    args: ListIdentityProviderConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListIdentityProviderConfigsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link ListInsightsCommand}
   */
  listInsights(
    args: ListInsightsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInsightsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  listInsightsStream(
    args: ListInsightsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListInsightsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link ListNodegroupsCommand}
   */
  listNodegroups(
    args: ListNodegroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListNodegroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  listNodegroupsStream(
    args: ListNodegroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListNodegroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | ResourceNotFoundError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link ListPodIdentityAssociationsCommand}
   */
  listPodIdentityAssociations(
    args: ListPodIdentityAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPodIdentityAssociationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  listPodIdentityAssociationsStream(
    args: ListPodIdentityAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListPodIdentityAssociationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError
  >;

  /**
   * @see {@link ListUpdatesCommand}
   */
  listUpdates(
    args: ListUpdatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUpdatesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  listUpdatesStream(
    args: ListUpdatesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListUpdatesCommandOutput,
    Cause.TimeoutException | SdkError | ClientError | InvalidParameterError | ResourceNotFoundError | ServerError
  >;

  /**
   * @see {@link RegisterClusterCommand}
   */
  registerCluster(
    args: RegisterClusterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterClusterCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ClientError
    | InvalidParameterError
    | ResourceInUseError
    | ResourceLimitExceededError
    | ResourcePropagationDelayError
    | ServerError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link StartInsightsRefreshCommand}
   */
  startInsightsRefresh(
    args: StartInsightsRefreshCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartInsightsRefreshCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutException | SdkError | BadRequestError | NotFoundError
  >;

  /**
   * @see {@link UpdateAccessEntryCommand}
   */
  updateAccessEntry(
    args: UpdateAccessEntryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccessEntryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link UpdateAddonCommand}
   */
  updateAddon(
    args: UpdateAddonCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAddonCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link UpdateCapabilityCommand}
   */
  updateCapability(
    args: UpdateCapabilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCapabilityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InvalidParameterError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link UpdateClusterConfigCommand}
   */
  updateClusterConfig(
    args: UpdateClusterConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClusterConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateClusterVersionCommand}
   */
  updateClusterVersion(
    args: UpdateClusterVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClusterVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | InvalidStateError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateEksAnywhereSubscriptionCommand}
   */
  updateEksAnywhereSubscription(
    args: UpdateEksAnywhereSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEksAnywhereSubscriptionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link UpdateNodegroupConfigCommand}
   */
  updateNodegroupConfig(
    args: UpdateNodegroupConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateNodegroupConfigCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link UpdateNodegroupVersionCommand}
   */
  updateNodegroupVersion(
    args: UpdateNodegroupVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateNodegroupVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ClientError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceInUseError
    | ResourceNotFoundError
    | ServerError
  >;

  /**
   * @see {@link UpdatePodIdentityAssociationCommand}
   */
  updatePodIdentityAssociation(
    args: UpdatePodIdentityAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePodIdentityAssociationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServerError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeEKSService = Effect.gen(function*() {
  const client = yield* Instance.EKSClientInstance;

  return yield* Service.fromClientAndCommands<EKSService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: EKSServiceConfig.toEKSClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class EKSService extends Effect.Tag("@effect-aws/client-eks/EKSService")<
  EKSService,
  EKSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeEKSService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: EKSService.Config) =>
    Layer.effect(this, makeEKSService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(EKSServiceConfig.setEKSServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: EKSClientConfig) => EKSClient,
  ) =>
    Layer.effect(this, makeEKSService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.EKSClientInstance,
          Effect.map(EKSServiceConfig.toEKSClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace EKSService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<EKSClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = EKSService$;
}
