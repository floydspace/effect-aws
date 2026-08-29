import type {
  AllocationIdNotFoundException,
  ALPNPolicyNotSupportedException,
  AvailabilityZoneNotSupportedException,
  CaCertificatesBundleNotFoundException,
  CapacityDecreaseRequestsLimitExceededException,
  CapacityReservationPendingException,
  CapacityUnitsLimitExceededException,
  CertificateNotFoundException,
  DeleteAssociationSameAccountException,
  DuplicateListenerException,
  DuplicateLoadBalancerNameException,
  DuplicateTagKeysException,
  DuplicateTargetGroupNameException,
  DuplicateTrustStoreNameException,
  HealthUnavailableException,
  IncompatibleProtocolsException,
  InsufficientCapacityException,
  InvalidCaCertificatesBundleException,
  InvalidConfigurationRequestException,
  InvalidLoadBalancerActionException,
  InvalidRevocationContentException,
  InvalidSchemeException,
  InvalidSecurityGroupException,
  InvalidSubnetException,
  InvalidTargetException,
  ListenerNotFoundException,
  LoadBalancerNotFoundException,
  OperationNotPermittedException,
  PriorityInUseException,
  PriorRequestNotCompleteException,
  ResourceInUseException,
  ResourceNotFoundException,
  RevocationContentNotFoundException,
  RevocationIdNotFoundException,
  RuleNotFoundException,
  SSLPolicyNotFoundException,
  SubnetNotFoundException,
  TargetGroupAssociationLimitException,
  TargetGroupNotFoundException,
  TooManyActionsException,
  TooManyCertificatesException,
  TooManyListenersException,
  TooManyLoadBalancersException,
  TooManyRegistrationsForTargetIdException,
  TooManyRulesException,
  TooManyTagsException,
  TooManyTargetGroupsException,
  TooManyTargetsException,
  TooManyTrustStoreRevocationEntriesException,
  TooManyTrustStoresException,
  TooManyUniqueTargetGroupsPerLoadBalancerException,
  TrustStoreAssociationNotFoundException,
  TrustStoreInUseException,
  TrustStoreNotFoundException,
  TrustStoreNotReadyException,
  UnsupportedProtocolException,
} from "@aws-sdk/client-elastic-load-balancing-v2";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "ALPNPolicyNotSupportedException",
  "AllocationIdNotFoundException",
  "AvailabilityZoneNotSupportedException",
  "CaCertificatesBundleNotFoundException",
  "CapacityDecreaseRequestsLimitExceededException",
  "CapacityReservationPendingException",
  "CapacityUnitsLimitExceededException",
  "CertificateNotFoundException",
  "DeleteAssociationSameAccountException",
  "DuplicateListenerException",
  "DuplicateLoadBalancerNameException",
  "DuplicateTagKeysException",
  "DuplicateTargetGroupNameException",
  "DuplicateTrustStoreNameException",
  "HealthUnavailableException",
  "IncompatibleProtocolsException",
  "InsufficientCapacityException",
  "InvalidCaCertificatesBundleException",
  "InvalidConfigurationRequestException",
  "InvalidLoadBalancerActionException",
  "InvalidRevocationContentException",
  "InvalidSchemeException",
  "InvalidSecurityGroupException",
  "InvalidSubnetException",
  "InvalidTargetException",
  "ListenerNotFoundException",
  "LoadBalancerNotFoundException",
  "OperationNotPermittedException",
  "PriorRequestNotCompleteException",
  "PriorityInUseException",
  "ResourceInUseException",
  "ResourceNotFoundException",
  "RevocationContentNotFoundException",
  "RevocationIdNotFoundException",
  "RuleNotFoundException",
  "SSLPolicyNotFoundException",
  "SubnetNotFoundException",
  "TargetGroupAssociationLimitException",
  "TargetGroupNotFoundException",
  "TooManyActionsException",
  "TooManyCertificatesException",
  "TooManyListenersException",
  "TooManyLoadBalancersException",
  "TooManyRegistrationsForTargetIdException",
  "TooManyRulesException",
  "TooManyTagsException",
  "TooManyTargetGroupsException",
  "TooManyTargetsException",
  "TooManyTrustStoreRevocationEntriesException",
  "TooManyTrustStoresException",
  "TooManyUniqueTargetGroupsPerLoadBalancerException",
  "TrustStoreAssociationNotFoundException",
  "TrustStoreInUseException",
  "TrustStoreNotFoundException",
  "TrustStoreNotReadyException",
  "UnsupportedProtocolException",
] as const;

export type ALPNPolicyNotSupportedError = TaggedException<ALPNPolicyNotSupportedException>;
export type AllocationIdNotFoundError = TaggedException<AllocationIdNotFoundException>;
export type AvailabilityZoneNotSupportedError = TaggedException<AvailabilityZoneNotSupportedException>;
export type CaCertificatesBundleNotFoundError = TaggedException<CaCertificatesBundleNotFoundException>;
export type CapacityDecreaseRequestsLimitExceededError = TaggedException<
  CapacityDecreaseRequestsLimitExceededException
>;
export type CapacityReservationPendingError = TaggedException<CapacityReservationPendingException>;
export type CapacityUnitsLimitExceededError = TaggedException<CapacityUnitsLimitExceededException>;
export type CertificateNotFoundError = TaggedException<CertificateNotFoundException>;
export type DeleteAssociationSameAccountError = TaggedException<DeleteAssociationSameAccountException>;
export type DuplicateListenerError = TaggedException<DuplicateListenerException>;
export type DuplicateLoadBalancerNameError = TaggedException<DuplicateLoadBalancerNameException>;
export type DuplicateTagKeysError = TaggedException<DuplicateTagKeysException>;
export type DuplicateTargetGroupNameError = TaggedException<DuplicateTargetGroupNameException>;
export type DuplicateTrustStoreNameError = TaggedException<DuplicateTrustStoreNameException>;
export type HealthUnavailableError = TaggedException<HealthUnavailableException>;
export type IncompatibleProtocolsError = TaggedException<IncompatibleProtocolsException>;
export type InsufficientCapacityError = TaggedException<InsufficientCapacityException>;
export type InvalidCaCertificatesBundleError = TaggedException<InvalidCaCertificatesBundleException>;
export type InvalidConfigurationRequestError = TaggedException<InvalidConfigurationRequestException>;
export type InvalidLoadBalancerActionError = TaggedException<InvalidLoadBalancerActionException>;
export type InvalidRevocationContentError = TaggedException<InvalidRevocationContentException>;
export type InvalidSchemeError = TaggedException<InvalidSchemeException>;
export type InvalidSecurityGroupError = TaggedException<InvalidSecurityGroupException>;
export type InvalidSubnetError = TaggedException<InvalidSubnetException>;
export type InvalidTargetError = TaggedException<InvalidTargetException>;
export type ListenerNotFoundError = TaggedException<ListenerNotFoundException>;
export type LoadBalancerNotFoundError = TaggedException<LoadBalancerNotFoundException>;
export type OperationNotPermittedError = TaggedException<OperationNotPermittedException>;
export type PriorRequestNotCompleteError = TaggedException<PriorRequestNotCompleteException>;
export type PriorityInUseError = TaggedException<PriorityInUseException>;
export type ResourceInUseError = TaggedException<ResourceInUseException>;
export type ResourceNotFoundError = TaggedException<ResourceNotFoundException>;
export type RevocationContentNotFoundError = TaggedException<RevocationContentNotFoundException>;
export type RevocationIdNotFoundError = TaggedException<RevocationIdNotFoundException>;
export type RuleNotFoundError = TaggedException<RuleNotFoundException>;
export type SSLPolicyNotFoundError = TaggedException<SSLPolicyNotFoundException>;
export type SubnetNotFoundError = TaggedException<SubnetNotFoundException>;
export type TargetGroupAssociationLimitError = TaggedException<TargetGroupAssociationLimitException>;
export type TargetGroupNotFoundError = TaggedException<TargetGroupNotFoundException>;
export type TooManyActionsError = TaggedException<TooManyActionsException>;
export type TooManyCertificatesError = TaggedException<TooManyCertificatesException>;
export type TooManyListenersError = TaggedException<TooManyListenersException>;
export type TooManyLoadBalancersError = TaggedException<TooManyLoadBalancersException>;
export type TooManyRegistrationsForTargetIdError = TaggedException<TooManyRegistrationsForTargetIdException>;
export type TooManyRulesError = TaggedException<TooManyRulesException>;
export type TooManyTagsError = TaggedException<TooManyTagsException>;
export type TooManyTargetGroupsError = TaggedException<TooManyTargetGroupsException>;
export type TooManyTargetsError = TaggedException<TooManyTargetsException>;
export type TooManyTrustStoreRevocationEntriesError = TaggedException<TooManyTrustStoreRevocationEntriesException>;
export type TooManyTrustStoresError = TaggedException<TooManyTrustStoresException>;
export type TooManyUniqueTargetGroupsPerLoadBalancerError = TaggedException<
  TooManyUniqueTargetGroupsPerLoadBalancerException
>;
export type TrustStoreAssociationNotFoundError = TaggedException<TrustStoreAssociationNotFoundException>;
export type TrustStoreInUseError = TaggedException<TrustStoreInUseException>;
export type TrustStoreNotFoundError = TaggedException<TrustStoreNotFoundException>;
export type TrustStoreNotReadyError = TaggedException<TrustStoreNotReadyException>;
export type UnsupportedProtocolError = TaggedException<UnsupportedProtocolException>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
