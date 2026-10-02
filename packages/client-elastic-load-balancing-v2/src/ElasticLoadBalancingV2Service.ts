/**
 * @since 1.0.0
 */
import {
  AddListenerCertificatesCommand,
  type AddListenerCertificatesCommandInput,
  type AddListenerCertificatesCommandOutput,
  AddTagsCommand,
  type AddTagsCommandInput,
  type AddTagsCommandOutput,
  AddTrustStoreRevocationsCommand,
  type AddTrustStoreRevocationsCommandInput,
  type AddTrustStoreRevocationsCommandOutput,
  CreateListenerCommand,
  type CreateListenerCommandInput,
  type CreateListenerCommandOutput,
  CreateLoadBalancerCommand,
  type CreateLoadBalancerCommandInput,
  type CreateLoadBalancerCommandOutput,
  CreateRuleCommand,
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateTargetGroupCommand,
  type CreateTargetGroupCommandInput,
  type CreateTargetGroupCommandOutput,
  CreateTrustStoreCommand,
  type CreateTrustStoreCommandInput,
  type CreateTrustStoreCommandOutput,
  DeleteListenerCommand,
  type DeleteListenerCommandInput,
  type DeleteListenerCommandOutput,
  DeleteLoadBalancerCommand,
  type DeleteLoadBalancerCommandInput,
  type DeleteLoadBalancerCommandOutput,
  DeleteRuleCommand,
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteSharedTrustStoreAssociationCommand,
  type DeleteSharedTrustStoreAssociationCommandInput,
  type DeleteSharedTrustStoreAssociationCommandOutput,
  DeleteTargetGroupCommand,
  type DeleteTargetGroupCommandInput,
  type DeleteTargetGroupCommandOutput,
  DeleteTrustStoreCommand,
  type DeleteTrustStoreCommandInput,
  type DeleteTrustStoreCommandOutput,
  DeregisterTargetsCommand,
  type DeregisterTargetsCommandInput,
  type DeregisterTargetsCommandOutput,
  DescribeAccountLimitsCommand,
  type DescribeAccountLimitsCommandInput,
  type DescribeAccountLimitsCommandOutput,
  DescribeCapacityReservationCommand,
  type DescribeCapacityReservationCommandInput,
  type DescribeCapacityReservationCommandOutput,
  DescribeListenerAttributesCommand,
  type DescribeListenerAttributesCommandInput,
  type DescribeListenerAttributesCommandOutput,
  DescribeListenerCertificatesCommand,
  type DescribeListenerCertificatesCommandInput,
  type DescribeListenerCertificatesCommandOutput,
  DescribeListenersCommand,
  type DescribeListenersCommandInput,
  type DescribeListenersCommandOutput,
  DescribeLoadBalancerAttributesCommand,
  type DescribeLoadBalancerAttributesCommandInput,
  type DescribeLoadBalancerAttributesCommandOutput,
  DescribeLoadBalancersCommand,
  type DescribeLoadBalancersCommandInput,
  type DescribeLoadBalancersCommandOutput,
  DescribeRulesCommand,
  type DescribeRulesCommandInput,
  type DescribeRulesCommandOutput,
  DescribeSSLPoliciesCommand,
  type DescribeSSLPoliciesCommandInput,
  type DescribeSSLPoliciesCommandOutput,
  DescribeTagsCommand,
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTargetGroupAttributesCommand,
  type DescribeTargetGroupAttributesCommandInput,
  type DescribeTargetGroupAttributesCommandOutput,
  DescribeTargetGroupsCommand,
  type DescribeTargetGroupsCommandInput,
  type DescribeTargetGroupsCommandOutput,
  DescribeTargetHealthCommand,
  type DescribeTargetHealthCommandInput,
  type DescribeTargetHealthCommandOutput,
  DescribeTrustStoreAssociationsCommand,
  type DescribeTrustStoreAssociationsCommandInput,
  type DescribeTrustStoreAssociationsCommandOutput,
  DescribeTrustStoreRevocationsCommand,
  type DescribeTrustStoreRevocationsCommandInput,
  type DescribeTrustStoreRevocationsCommandOutput,
  DescribeTrustStoresCommand,
  type DescribeTrustStoresCommandInput,
  type DescribeTrustStoresCommandOutput,
  type ElasticLoadBalancingV2Client,
  type ElasticLoadBalancingV2ClientConfig,
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetTrustStoreCaCertificatesBundleCommand,
  type GetTrustStoreCaCertificatesBundleCommandInput,
  type GetTrustStoreCaCertificatesBundleCommandOutput,
  GetTrustStoreRevocationContentCommand,
  type GetTrustStoreRevocationContentCommandInput,
  type GetTrustStoreRevocationContentCommandOutput,
  ModifyCapacityReservationCommand,
  type ModifyCapacityReservationCommandInput,
  type ModifyCapacityReservationCommandOutput,
  ModifyIpPoolsCommand,
  type ModifyIpPoolsCommandInput,
  type ModifyIpPoolsCommandOutput,
  ModifyListenerAttributesCommand,
  type ModifyListenerAttributesCommandInput,
  type ModifyListenerAttributesCommandOutput,
  ModifyListenerCommand,
  type ModifyListenerCommandInput,
  type ModifyListenerCommandOutput,
  ModifyLoadBalancerAttributesCommand,
  type ModifyLoadBalancerAttributesCommandInput,
  type ModifyLoadBalancerAttributesCommandOutput,
  ModifyRuleCommand,
  type ModifyRuleCommandInput,
  type ModifyRuleCommandOutput,
  ModifyTargetGroupAttributesCommand,
  type ModifyTargetGroupAttributesCommandInput,
  type ModifyTargetGroupAttributesCommandOutput,
  ModifyTargetGroupCommand,
  type ModifyTargetGroupCommandInput,
  type ModifyTargetGroupCommandOutput,
  ModifyTrustStoreCommand,
  type ModifyTrustStoreCommandInput,
  type ModifyTrustStoreCommandOutput,
  paginateDescribeAccountLimits,
  paginateDescribeListenerCertificates,
  paginateDescribeListeners,
  paginateDescribeLoadBalancers,
  paginateDescribeRules,
  paginateDescribeTargetGroups,
  paginateDescribeTrustStoreAssociations,
  paginateDescribeTrustStoreRevocations,
  paginateDescribeTrustStores,
  RegisterTargetsCommand,
  type RegisterTargetsCommandInput,
  type RegisterTargetsCommandOutput,
  RemoveListenerCertificatesCommand,
  type RemoveListenerCertificatesCommandInput,
  type RemoveListenerCertificatesCommandOutput,
  RemoveTagsCommand,
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  RemoveTrustStoreRevocationsCommand,
  type RemoveTrustStoreRevocationsCommandInput,
  type RemoveTrustStoreRevocationsCommandOutput,
  SetIpAddressTypeCommand,
  type SetIpAddressTypeCommandInput,
  type SetIpAddressTypeCommandOutput,
  SetRulePrioritiesCommand,
  type SetRulePrioritiesCommandInput,
  type SetRulePrioritiesCommandOutput,
  SetSecurityGroupsCommand,
  type SetSecurityGroupsCommandInput,
  type SetSecurityGroupsCommandOutput,
  SetSubnetsCommand,
  type SetSubnetsCommandInput,
  type SetSubnetsCommandOutput,
} from "@aws-sdk/client-elastic-load-balancing-v2";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import * as Instance from "./ElasticLoadBalancingV2ClientInstance.js";
import * as ElasticLoadBalancingV2ServiceConfig from "./ElasticLoadBalancingV2ServiceConfig.js";
import type {
  AllocationIdNotFoundError,
  ALPNPolicyNotSupportedError,
  AvailabilityZoneNotSupportedError,
  CaCertificatesBundleNotFoundError,
  CapacityDecreaseRequestsLimitExceededError,
  CapacityReservationPendingError,
  CapacityUnitsLimitExceededError,
  CertificateNotFoundError,
  DeleteAssociationSameAccountError,
  DuplicateListenerError,
  DuplicateLoadBalancerNameError,
  DuplicateTagKeysError,
  DuplicateTargetGroupNameError,
  DuplicateTrustStoreNameError,
  HealthUnavailableError,
  IncompatibleProtocolsError,
  InsufficientCapacityError,
  InvalidCaCertificatesBundleError,
  InvalidConfigurationRequestError,
  InvalidLoadBalancerActionError,
  InvalidRevocationContentError,
  InvalidSchemeError,
  InvalidSecurityGroupError,
  InvalidSubnetError,
  InvalidTargetError,
  ListenerNotFoundError,
  LoadBalancerNotFoundError,
  OperationNotPermittedError,
  PriorityInUseError,
  PriorRequestNotCompleteError,
  ResourceInUseError,
  ResourceNotFoundError,
  RevocationContentNotFoundError,
  RevocationIdNotFoundError,
  RuleNotFoundError,
  SdkError,
  SSLPolicyNotFoundError,
  SubnetNotFoundError,
  TargetGroupAssociationLimitError,
  TargetGroupNotFoundError,
  TooManyActionsError,
  TooManyCertificatesError,
  TooManyListenersError,
  TooManyLoadBalancersError,
  TooManyRegistrationsForTargetIdError,
  TooManyRulesError,
  TooManyTagsError,
  TooManyTargetGroupsError,
  TooManyTargetsError,
  TooManyTrustStoreRevocationEntriesError,
  TooManyTrustStoresError,
  TooManyUniqueTargetGroupsPerLoadBalancerError,
  TrustStoreAssociationNotFoundError,
  TrustStoreInUseError,
  TrustStoreNotFoundError,
  TrustStoreNotReadyError,
  UnsupportedProtocolError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AddListenerCertificatesCommand,
  AddTagsCommand,
  AddTrustStoreRevocationsCommand,
  CreateListenerCommand,
  CreateLoadBalancerCommand,
  CreateRuleCommand,
  CreateTargetGroupCommand,
  CreateTrustStoreCommand,
  DeleteListenerCommand,
  DeleteLoadBalancerCommand,
  DeleteRuleCommand,
  DeleteSharedTrustStoreAssociationCommand,
  DeleteTargetGroupCommand,
  DeleteTrustStoreCommand,
  DeregisterTargetsCommand,
  DescribeAccountLimitsCommand,
  DescribeCapacityReservationCommand,
  DescribeListenerAttributesCommand,
  DescribeListenerCertificatesCommand,
  DescribeListenersCommand,
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancersCommand,
  DescribeRulesCommand,
  DescribeSSLPoliciesCommand,
  DescribeTagsCommand,
  DescribeTargetGroupAttributesCommand,
  DescribeTargetGroupsCommand,
  DescribeTargetHealthCommand,
  DescribeTrustStoreAssociationsCommand,
  DescribeTrustStoreRevocationsCommand,
  DescribeTrustStoresCommand,
  GetResourcePolicyCommand,
  GetTrustStoreCaCertificatesBundleCommand,
  GetTrustStoreRevocationContentCommand,
  ModifyCapacityReservationCommand,
  ModifyIpPoolsCommand,
  ModifyListenerCommand,
  ModifyListenerAttributesCommand,
  ModifyLoadBalancerAttributesCommand,
  ModifyRuleCommand,
  ModifyTargetGroupCommand,
  ModifyTargetGroupAttributesCommand,
  ModifyTrustStoreCommand,
  RegisterTargetsCommand,
  RemoveListenerCertificatesCommand,
  RemoveTagsCommand,
  RemoveTrustStoreRevocationsCommand,
  SetIpAddressTypeCommand,
  SetRulePrioritiesCommand,
  SetSecurityGroupsCommand,
  SetSubnetsCommand,
};

const paginators = {
  paginateDescribeAccountLimits,
  paginateDescribeListenerCertificates,
  paginateDescribeListeners,
  paginateDescribeLoadBalancers,
  paginateDescribeRules,
  paginateDescribeTargetGroups,
  paginateDescribeTrustStoreAssociations,
  paginateDescribeTrustStoreRevocations,
  paginateDescribeTrustStores,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface ElasticLoadBalancingV2Service$ {
  /**
   * @see {@link AddListenerCertificatesCommand}
   */
  addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddListenerCertificatesCommandOutput,
    Cause.TimeoutError | SdkError | CertificateNotFoundError | ListenerNotFoundError | TooManyCertificatesError
  >;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DuplicateTagKeysError
    | ListenerNotFoundError
    | LoadBalancerNotFoundError
    | RuleNotFoundError
    | TargetGroupNotFoundError
    | TooManyTagsError
    | TrustStoreNotFoundError
  >;

  /**
   * @see {@link AddTrustStoreRevocationsCommand}
   */
  addTrustStoreRevocations(
    args: AddTrustStoreRevocationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTrustStoreRevocationsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidRevocationContentError
    | RevocationContentNotFoundError
    | TooManyTrustStoreRevocationEntriesError
    | TrustStoreNotFoundError
  >;

  /**
   * @see {@link CreateListenerCommand}
   */
  createListener(
    args: CreateListenerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateListenerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ALPNPolicyNotSupportedError
    | CertificateNotFoundError
    | DuplicateListenerError
    | IncompatibleProtocolsError
    | InvalidConfigurationRequestError
    | InvalidLoadBalancerActionError
    | LoadBalancerNotFoundError
    | SSLPolicyNotFoundError
    | TargetGroupAssociationLimitError
    | TargetGroupNotFoundError
    | TooManyActionsError
    | TooManyCertificatesError
    | TooManyListenersError
    | TooManyRegistrationsForTargetIdError
    | TooManyTagsError
    | TooManyTargetsError
    | TooManyUniqueTargetGroupsPerLoadBalancerError
    | TrustStoreNotFoundError
    | TrustStoreNotReadyError
    | UnsupportedProtocolError
  >;

  /**
   * @see {@link CreateLoadBalancerCommand}
   */
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLoadBalancerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AllocationIdNotFoundError
    | AvailabilityZoneNotSupportedError
    | DuplicateLoadBalancerNameError
    | DuplicateTagKeysError
    | InvalidConfigurationRequestError
    | InvalidSchemeError
    | InvalidSecurityGroupError
    | InvalidSubnetError
    | OperationNotPermittedError
    | ResourceInUseError
    | SubnetNotFoundError
    | TooManyLoadBalancersError
    | TooManyTagsError
  >;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(
    args: CreateRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRuleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | IncompatibleProtocolsError
    | InvalidConfigurationRequestError
    | InvalidLoadBalancerActionError
    | ListenerNotFoundError
    | PriorityInUseError
    | TargetGroupAssociationLimitError
    | TargetGroupNotFoundError
    | TooManyActionsError
    | TooManyRegistrationsForTargetIdError
    | TooManyRulesError
    | TooManyTagsError
    | TooManyTargetGroupsError
    | TooManyTargetsError
    | TooManyUniqueTargetGroupsPerLoadBalancerError
    | UnsupportedProtocolError
  >;

  /**
   * @see {@link CreateTargetGroupCommand}
   */
  createTargetGroup(
    args: CreateTargetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTargetGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DuplicateTargetGroupNameError
    | InvalidConfigurationRequestError
    | TooManyTagsError
    | TooManyTargetGroupsError
  >;

  /**
   * @see {@link CreateTrustStoreCommand}
   */
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTrustStoreCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CaCertificatesBundleNotFoundError
    | DuplicateTagKeysError
    | DuplicateTrustStoreNameError
    | InvalidCaCertificatesBundleError
    | TooManyTagsError
    | TooManyTrustStoresError
  >;

  /**
   * @see {@link DeleteListenerCommand}
   */
  deleteListener(
    args: DeleteListenerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteListenerCommandOutput,
    Cause.TimeoutError | SdkError | ListenerNotFoundError | ResourceInUseError
  >;

  /**
   * @see {@link DeleteLoadBalancerCommand}
   */
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLoadBalancerCommandOutput,
    Cause.TimeoutError | SdkError | LoadBalancerNotFoundError | OperationNotPermittedError | ResourceInUseError
  >;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRuleCommandOutput,
    Cause.TimeoutError | SdkError | OperationNotPermittedError | RuleNotFoundError
  >;

  /**
   * @see {@link DeleteSharedTrustStoreAssociationCommand}
   */
  deleteSharedTrustStoreAssociation(
    args: DeleteSharedTrustStoreAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSharedTrustStoreAssociationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | DeleteAssociationSameAccountError
    | TrustStoreAssociationNotFoundError
    | TrustStoreNotFoundError
  >;

  /**
   * @see {@link DeleteTargetGroupCommand}
   */
  deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTargetGroupCommandOutput,
    Cause.TimeoutError | SdkError | ResourceInUseError
  >;

  /**
   * @see {@link DeleteTrustStoreCommand}
   */
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTrustStoreCommandOutput,
    Cause.TimeoutError | SdkError | TrustStoreInUseError | TrustStoreNotFoundError
  >;

  /**
   * @see {@link DeregisterTargetsCommand}
   */
  deregisterTargets(
    args: DeregisterTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTargetsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidTargetError | TargetGroupNotFoundError
  >;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountLimitsCommandOutput,
    Cause.TimeoutError | SdkError
  >;

  describeAccountLimitsStream(
    args: DescribeAccountLimitsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<DescribeAccountLimitsCommandOutput, Cause.TimeoutError | SdkError>;

  /**
   * @see {@link DescribeCapacityReservationCommand}
   */
  describeCapacityReservation(
    args: DescribeCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityReservationCommandOutput,
    Cause.TimeoutError | SdkError | LoadBalancerNotFoundError
  >;

  /**
   * @see {@link DescribeListenerAttributesCommand}
   */
  describeListenerAttributes(
    args: DescribeListenerAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeListenerAttributesCommandOutput,
    Cause.TimeoutError | SdkError | ListenerNotFoundError
  >;

  /**
   * @see {@link DescribeListenerCertificatesCommand}
   */
  describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeListenerCertificatesCommandOutput,
    Cause.TimeoutError | SdkError | ListenerNotFoundError
  >;

  describeListenerCertificatesStream(
    args: DescribeListenerCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<DescribeListenerCertificatesCommandOutput, Cause.TimeoutError | SdkError | ListenerNotFoundError>;

  /**
   * @see {@link DescribeListenersCommand}
   */
  describeListeners(
    args: DescribeListenersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeListenersCommandOutput,
    Cause.TimeoutError | SdkError | ListenerNotFoundError | LoadBalancerNotFoundError | UnsupportedProtocolError
  >;

  describeListenersStream(
    args: DescribeListenersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    DescribeListenersCommandOutput,
    Cause.TimeoutError | SdkError | ListenerNotFoundError | LoadBalancerNotFoundError | UnsupportedProtocolError
  >;

  /**
   * @see {@link DescribeLoadBalancerAttributesCommand}
   */
  describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLoadBalancerAttributesCommandOutput,
    Cause.TimeoutError | SdkError | LoadBalancerNotFoundError
  >;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   */
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLoadBalancersCommandOutput,
    Cause.TimeoutError | SdkError | LoadBalancerNotFoundError
  >;

  describeLoadBalancersStream(
    args: DescribeLoadBalancersCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<DescribeLoadBalancersCommandOutput, Cause.TimeoutError | SdkError | LoadBalancerNotFoundError>;

  /**
   * @see {@link DescribeRulesCommand}
   */
  describeRules(
    args: DescribeRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRulesCommandOutput,
    Cause.TimeoutError | SdkError | ListenerNotFoundError | RuleNotFoundError | UnsupportedProtocolError
  >;

  describeRulesStream(
    args: DescribeRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    DescribeRulesCommandOutput,
    Cause.TimeoutError | SdkError | ListenerNotFoundError | RuleNotFoundError | UnsupportedProtocolError
  >;

  /**
   * @see {@link DescribeSSLPoliciesCommand}
   */
  describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSSLPoliciesCommandOutput,
    Cause.TimeoutError | SdkError | SSLPolicyNotFoundError
  >;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ListenerNotFoundError
    | LoadBalancerNotFoundError
    | RuleNotFoundError
    | TargetGroupNotFoundError
    | TrustStoreNotFoundError
  >;

  /**
   * @see {@link DescribeTargetGroupAttributesCommand}
   */
  describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTargetGroupAttributesCommandOutput,
    Cause.TimeoutError | SdkError | TargetGroupNotFoundError
  >;

  /**
   * @see {@link DescribeTargetGroupsCommand}
   */
  describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTargetGroupsCommandOutput,
    Cause.TimeoutError | SdkError | LoadBalancerNotFoundError | TargetGroupNotFoundError
  >;

  describeTargetGroupsStream(
    args: DescribeTargetGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    DescribeTargetGroupsCommandOutput,
    Cause.TimeoutError | SdkError | LoadBalancerNotFoundError | TargetGroupNotFoundError
  >;

  /**
   * @see {@link DescribeTargetHealthCommand}
   */
  describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTargetHealthCommandOutput,
    Cause.TimeoutError | SdkError | HealthUnavailableError | InvalidTargetError | TargetGroupNotFoundError
  >;

  /**
   * @see {@link DescribeTrustStoreAssociationsCommand}
   */
  describeTrustStoreAssociations(
    args: DescribeTrustStoreAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrustStoreAssociationsCommandOutput,
    Cause.TimeoutError | SdkError | TrustStoreNotFoundError
  >;

  describeTrustStoreAssociationsStream(
    args: DescribeTrustStoreAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    DescribeTrustStoreAssociationsCommandOutput,
    Cause.TimeoutError | SdkError | TrustStoreNotFoundError
  >;

  /**
   * @see {@link DescribeTrustStoreRevocationsCommand}
   */
  describeTrustStoreRevocations(
    args: DescribeTrustStoreRevocationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrustStoreRevocationsCommandOutput,
    Cause.TimeoutError | SdkError | RevocationIdNotFoundError | TrustStoreNotFoundError
  >;

  describeTrustStoreRevocationsStream(
    args: DescribeTrustStoreRevocationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    DescribeTrustStoreRevocationsCommandOutput,
    Cause.TimeoutError | SdkError | RevocationIdNotFoundError | TrustStoreNotFoundError
  >;

  /**
   * @see {@link DescribeTrustStoresCommand}
   */
  describeTrustStores(
    args: DescribeTrustStoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrustStoresCommandOutput,
    Cause.TimeoutError | SdkError | TrustStoreNotFoundError
  >;

  describeTrustStoresStream(
    args: DescribeTrustStoresCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<DescribeTrustStoresCommandOutput, Cause.TimeoutError | SdkError | TrustStoreNotFoundError>;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyCommandOutput,
    Cause.TimeoutError | SdkError | ResourceNotFoundError
  >;

  /**
   * @see {@link GetTrustStoreCaCertificatesBundleCommand}
   */
  getTrustStoreCaCertificatesBundle(
    args: GetTrustStoreCaCertificatesBundleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTrustStoreCaCertificatesBundleCommandOutput,
    Cause.TimeoutError | SdkError | TrustStoreNotFoundError
  >;

  /**
   * @see {@link GetTrustStoreRevocationContentCommand}
   */
  getTrustStoreRevocationContent(
    args: GetTrustStoreRevocationContentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTrustStoreRevocationContentCommandOutput,
    Cause.TimeoutError | SdkError | RevocationIdNotFoundError | TrustStoreNotFoundError
  >;

  /**
   * @see {@link ModifyCapacityReservationCommand}
   */
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCapacityReservationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CapacityDecreaseRequestsLimitExceededError
    | CapacityReservationPendingError
    | CapacityUnitsLimitExceededError
    | InsufficientCapacityError
    | InvalidConfigurationRequestError
    | LoadBalancerNotFoundError
    | OperationNotPermittedError
    | PriorRequestNotCompleteError
  >;

  /**
   * @see {@link ModifyIpPoolsCommand}
   */
  modifyIpPools(
    args: ModifyIpPoolsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIpPoolsCommandOutput,
    Cause.TimeoutError | SdkError | LoadBalancerNotFoundError
  >;

  /**
   * @see {@link ModifyListenerCommand}
   */
  modifyListener(
    args: ModifyListenerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyListenerCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ALPNPolicyNotSupportedError
    | CertificateNotFoundError
    | DuplicateListenerError
    | IncompatibleProtocolsError
    | InvalidConfigurationRequestError
    | InvalidLoadBalancerActionError
    | ListenerNotFoundError
    | SSLPolicyNotFoundError
    | TargetGroupAssociationLimitError
    | TargetGroupNotFoundError
    | TooManyActionsError
    | TooManyCertificatesError
    | TooManyListenersError
    | TooManyRegistrationsForTargetIdError
    | TooManyTargetsError
    | TooManyUniqueTargetGroupsPerLoadBalancerError
    | TrustStoreNotFoundError
    | TrustStoreNotReadyError
    | UnsupportedProtocolError
  >;

  /**
   * @see {@link ModifyListenerAttributesCommand}
   */
  modifyListenerAttributes(
    args: ModifyListenerAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyListenerAttributesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidConfigurationRequestError | ListenerNotFoundError
  >;

  /**
   * @see {@link ModifyLoadBalancerAttributesCommand}
   */
  modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyLoadBalancerAttributesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidConfigurationRequestError | LoadBalancerNotFoundError
  >;

  /**
   * @see {@link ModifyRuleCommand}
   */
  modifyRule(
    args: ModifyRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyRuleCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | IncompatibleProtocolsError
    | InvalidLoadBalancerActionError
    | OperationNotPermittedError
    | RuleNotFoundError
    | TargetGroupAssociationLimitError
    | TargetGroupNotFoundError
    | TooManyActionsError
    | TooManyRegistrationsForTargetIdError
    | TooManyTargetsError
    | TooManyUniqueTargetGroupsPerLoadBalancerError
    | UnsupportedProtocolError
  >;

  /**
   * @see {@link ModifyTargetGroupCommand}
   */
  modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTargetGroupCommandOutput,
    Cause.TimeoutError | SdkError | InvalidConfigurationRequestError | TargetGroupNotFoundError
  >;

  /**
   * @see {@link ModifyTargetGroupAttributesCommand}
   */
  modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTargetGroupAttributesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidConfigurationRequestError | TargetGroupNotFoundError
  >;

  /**
   * @see {@link ModifyTrustStoreCommand}
   */
  modifyTrustStore(
    args: ModifyTrustStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTrustStoreCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CaCertificatesBundleNotFoundError
    | InvalidCaCertificatesBundleError
    | TrustStoreNotFoundError
  >;

  /**
   * @see {@link RegisterTargetsCommand}
   */
  registerTargets(
    args: RegisterTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTargetsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidTargetError
    | TargetGroupNotFoundError
    | TooManyRegistrationsForTargetIdError
    | TooManyTargetsError
  >;

  /**
   * @see {@link RemoveListenerCertificatesCommand}
   */
  removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveListenerCertificatesCommandOutput,
    Cause.TimeoutError | SdkError | ListenerNotFoundError | OperationNotPermittedError
  >;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | ListenerNotFoundError
    | LoadBalancerNotFoundError
    | RuleNotFoundError
    | TargetGroupNotFoundError
    | TooManyTagsError
    | TrustStoreNotFoundError
  >;

  /**
   * @see {@link RemoveTrustStoreRevocationsCommand}
   */
  removeTrustStoreRevocations(
    args: RemoveTrustStoreRevocationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTrustStoreRevocationsCommandOutput,
    Cause.TimeoutError | SdkError | RevocationIdNotFoundError | TrustStoreNotFoundError
  >;

  /**
   * @see {@link SetIpAddressTypeCommand}
   */
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetIpAddressTypeCommandOutput,
    Cause.TimeoutError | SdkError | InvalidConfigurationRequestError | InvalidSubnetError | LoadBalancerNotFoundError
  >;

  /**
   * @see {@link SetRulePrioritiesCommand}
   */
  setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetRulePrioritiesCommandOutput,
    Cause.TimeoutError | SdkError | OperationNotPermittedError | PriorityInUseError | RuleNotFoundError
  >;

  /**
   * @see {@link SetSecurityGroupsCommand}
   */
  setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetSecurityGroupsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidConfigurationRequestError
    | InvalidSecurityGroupError
    | LoadBalancerNotFoundError
  >;

  /**
   * @see {@link SetSubnetsCommand}
   */
  setSubnets(
    args: SetSubnetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetSubnetsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AllocationIdNotFoundError
    | AvailabilityZoneNotSupportedError
    | CapacityReservationPendingError
    | InvalidConfigurationRequestError
    | InvalidSubnetError
    | LoadBalancerNotFoundError
    | SubnetNotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeElasticLoadBalancingV2Service = Effect.gen(function*() {
  const client = yield* Instance.ElasticLoadBalancingV2ClientInstance;

  return yield* Service.fromClientAndCommands<ElasticLoadBalancingV2Service$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: ElasticLoadBalancingV2ServiceConfig.toElasticLoadBalancingV2ClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class ElasticLoadBalancingV2Service extends Context.Service<
  ElasticLoadBalancingV2Service,
  ElasticLoadBalancingV2Service$
>()("@effect-aws/client-elastic-load-balancing-v2/ElasticLoadBalancingV2Service") {
  static readonly defaultLayer = Layer.effect(this, makeElasticLoadBalancingV2Service).pipe(
    Layer.provide(Instance.layer),
  );
  static readonly layer = (config: ElasticLoadBalancingV2Service.Config) =>
    Layer.effect(this, makeElasticLoadBalancingV2Service).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(ElasticLoadBalancingV2ServiceConfig.setElasticLoadBalancingV2ServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: ElasticLoadBalancingV2ClientConfig) => ElasticLoadBalancingV2Client,
  ) =>
    Layer.effect(this, makeElasticLoadBalancingV2Service).pipe(
      Layer.provide(
        Layer.effect(
          Instance.ElasticLoadBalancingV2ClientInstance,
          Effect.map(ElasticLoadBalancingV2ServiceConfig.toElasticLoadBalancingV2ClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace ElasticLoadBalancingV2Service {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<ElasticLoadBalancingV2ClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = ElasticLoadBalancingV2Service$;
}
