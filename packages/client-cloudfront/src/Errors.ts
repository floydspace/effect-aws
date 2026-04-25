import type {
  AccessDenied,
  BatchTooLarge,
  CachePolicyAlreadyExists,
  CachePolicyInUse,
  CannotChangeImmutablePublicKeyFields,
  CannotDeleteEntityWhileInUse,
  CannotUpdateEntityWhileInUse,
  CloudFrontOriginAccessIdentityAlreadyExists,
  CloudFrontOriginAccessIdentityInUse,
  CNAMEAlreadyExists,
  ContinuousDeploymentPolicyAlreadyExists,
  ContinuousDeploymentPolicyInUse,
  DistributionAlreadyExists,
  DistributionNotDisabled,
  EntityAlreadyExists,
  EntityLimitExceeded,
  EntityNotFound,
  EntitySizeLimitExceeded,
  FieldLevelEncryptionConfigAlreadyExists,
  FieldLevelEncryptionConfigInUse,
  FieldLevelEncryptionProfileAlreadyExists,
  FieldLevelEncryptionProfileInUse,
  FieldLevelEncryptionProfileSizeExceeded,
  FunctionAlreadyExists,
  FunctionInUse,
  FunctionSizeLimitExceeded,
  IllegalDelete,
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior,
  IllegalOriginAccessConfiguration,
  IllegalUpdate,
  InconsistentQuantities,
  InvalidArgument,
  InvalidAssociation,
  InvalidDefaultRootObject,
  InvalidDomainNameForOriginAccessControl,
  InvalidErrorCode,
  InvalidForwardCookies,
  InvalidFunctionAssociation,
  InvalidGeoRestrictionParameter,
  InvalidHeadersForS3Origin,
  InvalidIfMatchVersion,
  InvalidLambdaFunctionAssociation,
  InvalidLocationCode,
  InvalidMinimumProtocolVersion,
  InvalidOrigin,
  InvalidOriginAccessControl,
  InvalidOriginAccessIdentity,
  InvalidOriginKeepaliveTimeout,
  InvalidOriginReadTimeout,
  InvalidProtocolSettings,
  InvalidQueryStringParameters,
  InvalidRelativePath,
  InvalidRequiredProtocol,
  InvalidResponseCode,
  InvalidTagging,
  InvalidTTLOrder,
  InvalidViewerCertificate,
  InvalidWebACLId,
  KeyGroupAlreadyExists,
  MissingBody,
  MonitoringSubscriptionAlreadyExists,
  NoSuchCachePolicy,
  NoSuchCloudFrontOriginAccessIdentity,
  NoSuchContinuousDeploymentPolicy,
  NoSuchDistribution,
  NoSuchFieldLevelEncryptionConfig,
  NoSuchFieldLevelEncryptionProfile,
  NoSuchFunctionExists,
  NoSuchInvalidation,
  NoSuchMonitoringSubscription,
  NoSuchOrigin,
  NoSuchOriginAccessControl,
  NoSuchOriginRequestPolicy,
  NoSuchPublicKey,
  NoSuchRealtimeLogConfig,
  NoSuchResource,
  NoSuchResponseHeadersPolicy,
  NoSuchStreamingDistribution,
  OriginAccessControlAlreadyExists,
  OriginAccessControlInUse,
  OriginRequestPolicyAlreadyExists,
  OriginRequestPolicyInUse,
  PreconditionFailed,
  PublicKeyAlreadyExists,
  PublicKeyInUse,
  QueryArgProfileEmpty,
  RealtimeLogConfigAlreadyExists,
  RealtimeLogConfigInUse,
  RealtimeLogConfigOwnerMismatch,
  ResourceInUse,
  ResourceNotDisabled,
  ResponseHeadersPolicyAlreadyExists,
  ResponseHeadersPolicyInUse,
  StagingDistributionInUse,
  StreamingDistributionAlreadyExists,
  StreamingDistributionNotDisabled,
  TestFunctionFailed,
  TooLongCSPInResponseHeadersPolicy,
  TooManyCacheBehaviors,
  TooManyCachePolicies,
  TooManyCertificates,
  TooManyCloudFrontOriginAccessIdentities,
  TooManyContinuousDeploymentPolicies,
  TooManyCookieNamesInWhiteList,
  TooManyCookiesInCachePolicy,
  TooManyCookiesInOriginRequestPolicy,
  TooManyCustomHeadersInResponseHeadersPolicy,
  TooManyDistributionCNAMEs,
  TooManyDistributions,
  TooManyDistributionsAssociatedToCachePolicy,
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig,
  TooManyDistributionsAssociatedToKeyGroup,
  TooManyDistributionsAssociatedToOriginAccessControl,
  TooManyDistributionsAssociatedToOriginRequestPolicy,
  TooManyDistributionsAssociatedToResponseHeadersPolicy,
  TooManyDistributionsWithFunctionAssociations,
  TooManyDistributionsWithLambdaAssociations,
  TooManyDistributionsWithSingleFunctionARN,
  TooManyFieldLevelEncryptionConfigs,
  TooManyFieldLevelEncryptionContentTypeProfiles,
  TooManyFieldLevelEncryptionEncryptionEntities,
  TooManyFieldLevelEncryptionFieldPatterns,
  TooManyFieldLevelEncryptionProfiles,
  TooManyFieldLevelEncryptionQueryArgProfiles,
  TooManyFunctionAssociations,
  TooManyFunctions,
  TooManyHeadersInCachePolicy,
  TooManyHeadersInForwardedValues,
  TooManyHeadersInOriginRequestPolicy,
  TooManyInvalidationsInProgress,
  TooManyKeyGroups,
  TooManyKeyGroupsAssociatedToDistribution,
  TooManyLambdaFunctionAssociations,
  TooManyOriginAccessControls,
  TooManyOriginCustomHeaders,
  TooManyOriginGroupsPerDistribution,
  TooManyOriginRequestPolicies,
  TooManyOrigins,
  TooManyPublicKeys,
  TooManyPublicKeysInKeyGroup,
  TooManyQueryStringParameters,
  TooManyQueryStringsInCachePolicy,
  TooManyQueryStringsInOriginRequestPolicy,
  TooManyRealtimeLogConfigs,
  TooManyRemoveHeadersInResponseHeadersPolicy,
  TooManyResponseHeadersPolicies,
  TooManyStreamingDistributionCNAMEs,
  TooManyStreamingDistributions,
  TooManyTrustedSigners,
  TrustedKeyGroupDoesNotExist,
  TrustedSignerDoesNotExist,
  UnsupportedOperation,
} from "@aws-sdk/client-cloudfront";
import type { TaggedException } from "@effect-aws/commons/Errors";

export const AllServiceErrors = [
  "AccessDenied",
  "BatchTooLarge",
  "CNAMEAlreadyExists",
  "CachePolicyAlreadyExists",
  "CachePolicyInUse",
  "CannotChangeImmutablePublicKeyFields",
  "CannotDeleteEntityWhileInUse",
  "CannotUpdateEntityWhileInUse",
  "CloudFrontOriginAccessIdentityAlreadyExists",
  "CloudFrontOriginAccessIdentityInUse",
  "ContinuousDeploymentPolicyAlreadyExists",
  "ContinuousDeploymentPolicyInUse",
  "DistributionAlreadyExists",
  "DistributionNotDisabled",
  "EntityAlreadyExists",
  "EntityLimitExceeded",
  "EntityNotFound",
  "EntitySizeLimitExceeded",
  "FieldLevelEncryptionConfigAlreadyExists",
  "FieldLevelEncryptionConfigInUse",
  "FieldLevelEncryptionProfileAlreadyExists",
  "FieldLevelEncryptionProfileInUse",
  "FieldLevelEncryptionProfileSizeExceeded",
  "FunctionAlreadyExists",
  "FunctionInUse",
  "FunctionSizeLimitExceeded",
  "IllegalDelete",
  "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior",
  "IllegalOriginAccessConfiguration",
  "IllegalUpdate",
  "InconsistentQuantities",
  "InvalidArgument",
  "InvalidAssociation",
  "InvalidDefaultRootObject",
  "InvalidDomainNameForOriginAccessControl",
  "InvalidErrorCode",
  "InvalidForwardCookies",
  "InvalidFunctionAssociation",
  "InvalidGeoRestrictionParameter",
  "InvalidHeadersForS3Origin",
  "InvalidIfMatchVersion",
  "InvalidLambdaFunctionAssociation",
  "InvalidLocationCode",
  "InvalidMinimumProtocolVersion",
  "InvalidOrigin",
  "InvalidOriginAccessControl",
  "InvalidOriginAccessIdentity",
  "InvalidOriginKeepaliveTimeout",
  "InvalidOriginReadTimeout",
  "InvalidProtocolSettings",
  "InvalidQueryStringParameters",
  "InvalidRelativePath",
  "InvalidRequiredProtocol",
  "InvalidResponseCode",
  "InvalidTTLOrder",
  "InvalidTagging",
  "InvalidViewerCertificate",
  "InvalidWebACLId",
  "KeyGroupAlreadyExists",
  "MissingBody",
  "MonitoringSubscriptionAlreadyExists",
  "NoSuchCachePolicy",
  "NoSuchCloudFrontOriginAccessIdentity",
  "NoSuchContinuousDeploymentPolicy",
  "NoSuchDistribution",
  "NoSuchFieldLevelEncryptionConfig",
  "NoSuchFieldLevelEncryptionProfile",
  "NoSuchFunctionExists",
  "NoSuchInvalidation",
  "NoSuchMonitoringSubscription",
  "NoSuchOrigin",
  "NoSuchOriginAccessControl",
  "NoSuchOriginRequestPolicy",
  "NoSuchPublicKey",
  "NoSuchRealtimeLogConfig",
  "NoSuchResource",
  "NoSuchResponseHeadersPolicy",
  "NoSuchStreamingDistribution",
  "OriginAccessControlAlreadyExists",
  "OriginAccessControlInUse",
  "OriginRequestPolicyAlreadyExists",
  "OriginRequestPolicyInUse",
  "PreconditionFailed",
  "PublicKeyAlreadyExists",
  "PublicKeyInUse",
  "QueryArgProfileEmpty",
  "RealtimeLogConfigAlreadyExists",
  "RealtimeLogConfigInUse",
  "RealtimeLogConfigOwnerMismatch",
  "ResourceInUse",
  "ResourceNotDisabled",
  "ResponseHeadersPolicyAlreadyExists",
  "ResponseHeadersPolicyInUse",
  "StagingDistributionInUse",
  "StreamingDistributionAlreadyExists",
  "StreamingDistributionNotDisabled",
  "TestFunctionFailed",
  "TooLongCSPInResponseHeadersPolicy",
  "TooManyCacheBehaviors",
  "TooManyCachePolicies",
  "TooManyCertificates",
  "TooManyCloudFrontOriginAccessIdentities",
  "TooManyContinuousDeploymentPolicies",
  "TooManyCookieNamesInWhiteList",
  "TooManyCookiesInCachePolicy",
  "TooManyCookiesInOriginRequestPolicy",
  "TooManyCustomHeadersInResponseHeadersPolicy",
  "TooManyDistributionCNAMEs",
  "TooManyDistributions",
  "TooManyDistributionsAssociatedToCachePolicy",
  "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig",
  "TooManyDistributionsAssociatedToKeyGroup",
  "TooManyDistributionsAssociatedToOriginAccessControl",
  "TooManyDistributionsAssociatedToOriginRequestPolicy",
  "TooManyDistributionsAssociatedToResponseHeadersPolicy",
  "TooManyDistributionsWithFunctionAssociations",
  "TooManyDistributionsWithLambdaAssociations",
  "TooManyDistributionsWithSingleFunctionARN",
  "TooManyFieldLevelEncryptionConfigs",
  "TooManyFieldLevelEncryptionContentTypeProfiles",
  "TooManyFieldLevelEncryptionEncryptionEntities",
  "TooManyFieldLevelEncryptionFieldPatterns",
  "TooManyFieldLevelEncryptionProfiles",
  "TooManyFieldLevelEncryptionQueryArgProfiles",
  "TooManyFunctionAssociations",
  "TooManyFunctions",
  "TooManyHeadersInCachePolicy",
  "TooManyHeadersInForwardedValues",
  "TooManyHeadersInOriginRequestPolicy",
  "TooManyInvalidationsInProgress",
  "TooManyKeyGroups",
  "TooManyKeyGroupsAssociatedToDistribution",
  "TooManyLambdaFunctionAssociations",
  "TooManyOriginAccessControls",
  "TooManyOriginCustomHeaders",
  "TooManyOriginGroupsPerDistribution",
  "TooManyOriginRequestPolicies",
  "TooManyOrigins",
  "TooManyPublicKeys",
  "TooManyPublicKeysInKeyGroup",
  "TooManyQueryStringParameters",
  "TooManyQueryStringsInCachePolicy",
  "TooManyQueryStringsInOriginRequestPolicy",
  "TooManyRealtimeLogConfigs",
  "TooManyRemoveHeadersInResponseHeadersPolicy",
  "TooManyResponseHeadersPolicies",
  "TooManyStreamingDistributionCNAMEs",
  "TooManyStreamingDistributions",
  "TooManyTrustedSigners",
  "TrustedKeyGroupDoesNotExist",
  "TrustedSignerDoesNotExist",
  "UnsupportedOperation",
] as const;

export type AccessDeniedError = TaggedException<AccessDenied>;
export type BatchTooLargeError = TaggedException<BatchTooLarge>;
export type CNAMEAlreadyExistsError = TaggedException<CNAMEAlreadyExists>;
export type CachePolicyAlreadyExistsError = TaggedException<CachePolicyAlreadyExists>;
export type CachePolicyInUseError = TaggedException<CachePolicyInUse>;
export type CannotChangeImmutablePublicKeyFieldsError = TaggedException<CannotChangeImmutablePublicKeyFields>;
export type CannotDeleteEntityWhileInUseError = TaggedException<CannotDeleteEntityWhileInUse>;
export type CannotUpdateEntityWhileInUseError = TaggedException<CannotUpdateEntityWhileInUse>;
export type CloudFrontOriginAccessIdentityAlreadyExistsError = TaggedException<
  CloudFrontOriginAccessIdentityAlreadyExists
>;
export type CloudFrontOriginAccessIdentityInUseError = TaggedException<CloudFrontOriginAccessIdentityInUse>;
export type ContinuousDeploymentPolicyAlreadyExistsError = TaggedException<ContinuousDeploymentPolicyAlreadyExists>;
export type ContinuousDeploymentPolicyInUseError = TaggedException<ContinuousDeploymentPolicyInUse>;
export type DistributionAlreadyExistsError = TaggedException<DistributionAlreadyExists>;
export type DistributionNotDisabledError = TaggedException<DistributionNotDisabled>;
export type EntityAlreadyExistsError = TaggedException<EntityAlreadyExists>;
export type EntityLimitExceededError = TaggedException<EntityLimitExceeded>;
export type EntityNotFoundError = TaggedException<EntityNotFound>;
export type EntitySizeLimitExceededError = TaggedException<EntitySizeLimitExceeded>;
export type FieldLevelEncryptionConfigAlreadyExistsError = TaggedException<FieldLevelEncryptionConfigAlreadyExists>;
export type FieldLevelEncryptionConfigInUseError = TaggedException<FieldLevelEncryptionConfigInUse>;
export type FieldLevelEncryptionProfileAlreadyExistsError = TaggedException<FieldLevelEncryptionProfileAlreadyExists>;
export type FieldLevelEncryptionProfileInUseError = TaggedException<FieldLevelEncryptionProfileInUse>;
export type FieldLevelEncryptionProfileSizeExceededError = TaggedException<FieldLevelEncryptionProfileSizeExceeded>;
export type FunctionAlreadyExistsError = TaggedException<FunctionAlreadyExists>;
export type FunctionInUseError = TaggedException<FunctionInUse>;
export type FunctionSizeLimitExceededError = TaggedException<FunctionSizeLimitExceeded>;
export type IllegalDeleteError = TaggedException<IllegalDelete>;
export type IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorError = TaggedException<
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
>;
export type IllegalOriginAccessConfigurationError = TaggedException<IllegalOriginAccessConfiguration>;
export type IllegalUpdateError = TaggedException<IllegalUpdate>;
export type InconsistentQuantitiesError = TaggedException<InconsistentQuantities>;
export type InvalidArgumentError = TaggedException<InvalidArgument>;
export type InvalidAssociationError = TaggedException<InvalidAssociation>;
export type InvalidDefaultRootObjectError = TaggedException<InvalidDefaultRootObject>;
export type InvalidDomainNameForOriginAccessControlError = TaggedException<InvalidDomainNameForOriginAccessControl>;
export type InvalidErrorCodeError = TaggedException<InvalidErrorCode>;
export type InvalidForwardCookiesError = TaggedException<InvalidForwardCookies>;
export type InvalidFunctionAssociationError = TaggedException<InvalidFunctionAssociation>;
export type InvalidGeoRestrictionParameterError = TaggedException<InvalidGeoRestrictionParameter>;
export type InvalidHeadersForS3OriginError = TaggedException<InvalidHeadersForS3Origin>;
export type InvalidIfMatchVersionError = TaggedException<InvalidIfMatchVersion>;
export type InvalidLambdaFunctionAssociationError = TaggedException<InvalidLambdaFunctionAssociation>;
export type InvalidLocationCodeError = TaggedException<InvalidLocationCode>;
export type InvalidMinimumProtocolVersionError = TaggedException<InvalidMinimumProtocolVersion>;
export type InvalidOriginError = TaggedException<InvalidOrigin>;
export type InvalidOriginAccessControlError = TaggedException<InvalidOriginAccessControl>;
export type InvalidOriginAccessIdentityError = TaggedException<InvalidOriginAccessIdentity>;
export type InvalidOriginKeepaliveTimeoutError = TaggedException<InvalidOriginKeepaliveTimeout>;
export type InvalidOriginReadTimeoutError = TaggedException<InvalidOriginReadTimeout>;
export type InvalidProtocolSettingsError = TaggedException<InvalidProtocolSettings>;
export type InvalidQueryStringParametersError = TaggedException<InvalidQueryStringParameters>;
export type InvalidRelativePathError = TaggedException<InvalidRelativePath>;
export type InvalidRequiredProtocolError = TaggedException<InvalidRequiredProtocol>;
export type InvalidResponseCodeError = TaggedException<InvalidResponseCode>;
export type InvalidTTLOrderError = TaggedException<InvalidTTLOrder>;
export type InvalidTaggingError = TaggedException<InvalidTagging>;
export type InvalidViewerCertificateError = TaggedException<InvalidViewerCertificate>;
export type InvalidWebACLIdError = TaggedException<InvalidWebACLId>;
export type KeyGroupAlreadyExistsError = TaggedException<KeyGroupAlreadyExists>;
export type MissingBodyError = TaggedException<MissingBody>;
export type MonitoringSubscriptionAlreadyExistsError = TaggedException<MonitoringSubscriptionAlreadyExists>;
export type NoSuchCachePolicyError = TaggedException<NoSuchCachePolicy>;
export type NoSuchCloudFrontOriginAccessIdentityError = TaggedException<NoSuchCloudFrontOriginAccessIdentity>;
export type NoSuchContinuousDeploymentPolicyError = TaggedException<NoSuchContinuousDeploymentPolicy>;
export type NoSuchDistributionError = TaggedException<NoSuchDistribution>;
export type NoSuchFieldLevelEncryptionConfigError = TaggedException<NoSuchFieldLevelEncryptionConfig>;
export type NoSuchFieldLevelEncryptionProfileError = TaggedException<NoSuchFieldLevelEncryptionProfile>;
export type NoSuchFunctionExistsError = TaggedException<NoSuchFunctionExists>;
export type NoSuchInvalidationError = TaggedException<NoSuchInvalidation>;
export type NoSuchMonitoringSubscriptionError = TaggedException<NoSuchMonitoringSubscription>;
export type NoSuchOriginError = TaggedException<NoSuchOrigin>;
export type NoSuchOriginAccessControlError = TaggedException<NoSuchOriginAccessControl>;
export type NoSuchOriginRequestPolicyError = TaggedException<NoSuchOriginRequestPolicy>;
export type NoSuchPublicKeyError = TaggedException<NoSuchPublicKey>;
export type NoSuchRealtimeLogConfigError = TaggedException<NoSuchRealtimeLogConfig>;
export type NoSuchResourceError = TaggedException<NoSuchResource>;
export type NoSuchResponseHeadersPolicyError = TaggedException<NoSuchResponseHeadersPolicy>;
export type NoSuchStreamingDistributionError = TaggedException<NoSuchStreamingDistribution>;
export type OriginAccessControlAlreadyExistsError = TaggedException<OriginAccessControlAlreadyExists>;
export type OriginAccessControlInUseError = TaggedException<OriginAccessControlInUse>;
export type OriginRequestPolicyAlreadyExistsError = TaggedException<OriginRequestPolicyAlreadyExists>;
export type OriginRequestPolicyInUseError = TaggedException<OriginRequestPolicyInUse>;
export type PreconditionFailedError = TaggedException<PreconditionFailed>;
export type PublicKeyAlreadyExistsError = TaggedException<PublicKeyAlreadyExists>;
export type PublicKeyInUseError = TaggedException<PublicKeyInUse>;
export type QueryArgProfileEmptyError = TaggedException<QueryArgProfileEmpty>;
export type RealtimeLogConfigAlreadyExistsError = TaggedException<RealtimeLogConfigAlreadyExists>;
export type RealtimeLogConfigInUseError = TaggedException<RealtimeLogConfigInUse>;
export type RealtimeLogConfigOwnerMismatchError = TaggedException<RealtimeLogConfigOwnerMismatch>;
export type ResourceInUseError = TaggedException<ResourceInUse>;
export type ResourceNotDisabledError = TaggedException<ResourceNotDisabled>;
export type ResponseHeadersPolicyAlreadyExistsError = TaggedException<ResponseHeadersPolicyAlreadyExists>;
export type ResponseHeadersPolicyInUseError = TaggedException<ResponseHeadersPolicyInUse>;
export type StagingDistributionInUseError = TaggedException<StagingDistributionInUse>;
export type StreamingDistributionAlreadyExistsError = TaggedException<StreamingDistributionAlreadyExists>;
export type StreamingDistributionNotDisabledError = TaggedException<StreamingDistributionNotDisabled>;
export type TestFunctionFailedError = TaggedException<TestFunctionFailed>;
export type TooLongCSPInResponseHeadersPolicyError = TaggedException<TooLongCSPInResponseHeadersPolicy>;
export type TooManyCacheBehaviorsError = TaggedException<TooManyCacheBehaviors>;
export type TooManyCachePoliciesError = TaggedException<TooManyCachePolicies>;
export type TooManyCertificatesError = TaggedException<TooManyCertificates>;
export type TooManyCloudFrontOriginAccessIdentitiesError = TaggedException<TooManyCloudFrontOriginAccessIdentities>;
export type TooManyContinuousDeploymentPoliciesError = TaggedException<TooManyContinuousDeploymentPolicies>;
export type TooManyCookieNamesInWhiteListError = TaggedException<TooManyCookieNamesInWhiteList>;
export type TooManyCookiesInCachePolicyError = TaggedException<TooManyCookiesInCachePolicy>;
export type TooManyCookiesInOriginRequestPolicyError = TaggedException<TooManyCookiesInOriginRequestPolicy>;
export type TooManyCustomHeadersInResponseHeadersPolicyError = TaggedException<
  TooManyCustomHeadersInResponseHeadersPolicy
>;
export type TooManyDistributionCNAMEsError = TaggedException<TooManyDistributionCNAMEs>;
export type TooManyDistributionsError = TaggedException<TooManyDistributions>;
export type TooManyDistributionsAssociatedToCachePolicyError = TaggedException<
  TooManyDistributionsAssociatedToCachePolicy
>;
export type TooManyDistributionsAssociatedToFieldLevelEncryptionConfigError = TaggedException<
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
>;
export type TooManyDistributionsAssociatedToKeyGroupError = TaggedException<TooManyDistributionsAssociatedToKeyGroup>;
export type TooManyDistributionsAssociatedToOriginAccessControlError = TaggedException<
  TooManyDistributionsAssociatedToOriginAccessControl
>;
export type TooManyDistributionsAssociatedToOriginRequestPolicyError = TaggedException<
  TooManyDistributionsAssociatedToOriginRequestPolicy
>;
export type TooManyDistributionsAssociatedToResponseHeadersPolicyError = TaggedException<
  TooManyDistributionsAssociatedToResponseHeadersPolicy
>;
export type TooManyDistributionsWithFunctionAssociationsError = TaggedException<
  TooManyDistributionsWithFunctionAssociations
>;
export type TooManyDistributionsWithLambdaAssociationsError = TaggedException<
  TooManyDistributionsWithLambdaAssociations
>;
export type TooManyDistributionsWithSingleFunctionARNError = TaggedException<TooManyDistributionsWithSingleFunctionARN>;
export type TooManyFieldLevelEncryptionConfigsError = TaggedException<TooManyFieldLevelEncryptionConfigs>;
export type TooManyFieldLevelEncryptionContentTypeProfilesError = TaggedException<
  TooManyFieldLevelEncryptionContentTypeProfiles
>;
export type TooManyFieldLevelEncryptionEncryptionEntitiesError = TaggedException<
  TooManyFieldLevelEncryptionEncryptionEntities
>;
export type TooManyFieldLevelEncryptionFieldPatternsError = TaggedException<TooManyFieldLevelEncryptionFieldPatterns>;
export type TooManyFieldLevelEncryptionProfilesError = TaggedException<TooManyFieldLevelEncryptionProfiles>;
export type TooManyFieldLevelEncryptionQueryArgProfilesError = TaggedException<
  TooManyFieldLevelEncryptionQueryArgProfiles
>;
export type TooManyFunctionAssociationsError = TaggedException<TooManyFunctionAssociations>;
export type TooManyFunctionsError = TaggedException<TooManyFunctions>;
export type TooManyHeadersInCachePolicyError = TaggedException<TooManyHeadersInCachePolicy>;
export type TooManyHeadersInForwardedValuesError = TaggedException<TooManyHeadersInForwardedValues>;
export type TooManyHeadersInOriginRequestPolicyError = TaggedException<TooManyHeadersInOriginRequestPolicy>;
export type TooManyInvalidationsInProgressError = TaggedException<TooManyInvalidationsInProgress>;
export type TooManyKeyGroupsError = TaggedException<TooManyKeyGroups>;
export type TooManyKeyGroupsAssociatedToDistributionError = TaggedException<TooManyKeyGroupsAssociatedToDistribution>;
export type TooManyLambdaFunctionAssociationsError = TaggedException<TooManyLambdaFunctionAssociations>;
export type TooManyOriginAccessControlsError = TaggedException<TooManyOriginAccessControls>;
export type TooManyOriginCustomHeadersError = TaggedException<TooManyOriginCustomHeaders>;
export type TooManyOriginGroupsPerDistributionError = TaggedException<TooManyOriginGroupsPerDistribution>;
export type TooManyOriginRequestPoliciesError = TaggedException<TooManyOriginRequestPolicies>;
export type TooManyOriginsError = TaggedException<TooManyOrigins>;
export type TooManyPublicKeysError = TaggedException<TooManyPublicKeys>;
export type TooManyPublicKeysInKeyGroupError = TaggedException<TooManyPublicKeysInKeyGroup>;
export type TooManyQueryStringParametersError = TaggedException<TooManyQueryStringParameters>;
export type TooManyQueryStringsInCachePolicyError = TaggedException<TooManyQueryStringsInCachePolicy>;
export type TooManyQueryStringsInOriginRequestPolicyError = TaggedException<TooManyQueryStringsInOriginRequestPolicy>;
export type TooManyRealtimeLogConfigsError = TaggedException<TooManyRealtimeLogConfigs>;
export type TooManyRemoveHeadersInResponseHeadersPolicyError = TaggedException<
  TooManyRemoveHeadersInResponseHeadersPolicy
>;
export type TooManyResponseHeadersPoliciesError = TaggedException<TooManyResponseHeadersPolicies>;
export type TooManyStreamingDistributionCNAMEsError = TaggedException<TooManyStreamingDistributionCNAMEs>;
export type TooManyStreamingDistributionsError = TaggedException<TooManyStreamingDistributions>;
export type TooManyTrustedSignersError = TaggedException<TooManyTrustedSigners>;
export type TrustedKeyGroupDoesNotExistError = TaggedException<TrustedKeyGroupDoesNotExist>;
export type TrustedSignerDoesNotExistError = TaggedException<TrustedSignerDoesNotExist>;
export type UnsupportedOperationError = TaggedException<UnsupportedOperation>;
export type SdkError = TaggedException<Error & { name: "SdkError" }>;
