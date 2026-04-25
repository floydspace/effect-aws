/**
 * @since 1.0.0
 */
import {
  AssociateAliasCommand,
  type AssociateAliasCommandInput,
  type AssociateAliasCommandOutput,
  AssociateDistributionTenantWebACLCommand,
  type AssociateDistributionTenantWebACLCommandInput,
  type AssociateDistributionTenantWebACLCommandOutput,
  AssociateDistributionWebACLCommand,
  type AssociateDistributionWebACLCommandInput,
  type AssociateDistributionWebACLCommandOutput,
  type CloudFrontClient,
  type CloudFrontClientConfig,
  CopyDistributionCommand,
  type CopyDistributionCommandInput,
  type CopyDistributionCommandOutput,
  CreateAnycastIpListCommand,
  type CreateAnycastIpListCommandInput,
  type CreateAnycastIpListCommandOutput,
  CreateCachePolicyCommand,
  type CreateCachePolicyCommandInput,
  type CreateCachePolicyCommandOutput,
  CreateCloudFrontOriginAccessIdentityCommand,
  type CreateCloudFrontOriginAccessIdentityCommandInput,
  type CreateCloudFrontOriginAccessIdentityCommandOutput,
  CreateConnectionFunctionCommand,
  type CreateConnectionFunctionCommandInput,
  type CreateConnectionFunctionCommandOutput,
  CreateConnectionGroupCommand,
  type CreateConnectionGroupCommandInput,
  type CreateConnectionGroupCommandOutput,
  CreateContinuousDeploymentPolicyCommand,
  type CreateContinuousDeploymentPolicyCommandInput,
  type CreateContinuousDeploymentPolicyCommandOutput,
  CreateDistributionCommand,
  type CreateDistributionCommandInput,
  type CreateDistributionCommandOutput,
  CreateDistributionTenantCommand,
  type CreateDistributionTenantCommandInput,
  type CreateDistributionTenantCommandOutput,
  CreateDistributionWithTagsCommand,
  type CreateDistributionWithTagsCommandInput,
  type CreateDistributionWithTagsCommandOutput,
  CreateFieldLevelEncryptionConfigCommand,
  type CreateFieldLevelEncryptionConfigCommandInput,
  type CreateFieldLevelEncryptionConfigCommandOutput,
  CreateFieldLevelEncryptionProfileCommand,
  type CreateFieldLevelEncryptionProfileCommandInput,
  type CreateFieldLevelEncryptionProfileCommandOutput,
  CreateFunctionCommand,
  type CreateFunctionCommandInput,
  type CreateFunctionCommandOutput,
  CreateInvalidationCommand,
  type CreateInvalidationCommandInput,
  type CreateInvalidationCommandOutput,
  CreateInvalidationForDistributionTenantCommand,
  type CreateInvalidationForDistributionTenantCommandInput,
  type CreateInvalidationForDistributionTenantCommandOutput,
  CreateKeyGroupCommand,
  type CreateKeyGroupCommandInput,
  type CreateKeyGroupCommandOutput,
  CreateKeyValueStoreCommand,
  type CreateKeyValueStoreCommandInput,
  type CreateKeyValueStoreCommandOutput,
  CreateMonitoringSubscriptionCommand,
  type CreateMonitoringSubscriptionCommandInput,
  type CreateMonitoringSubscriptionCommandOutput,
  CreateOriginAccessControlCommand,
  type CreateOriginAccessControlCommandInput,
  type CreateOriginAccessControlCommandOutput,
  CreateOriginRequestPolicyCommand,
  type CreateOriginRequestPolicyCommandInput,
  type CreateOriginRequestPolicyCommandOutput,
  CreatePublicKeyCommand,
  type CreatePublicKeyCommandInput,
  type CreatePublicKeyCommandOutput,
  CreateRealtimeLogConfigCommand,
  type CreateRealtimeLogConfigCommandInput,
  type CreateRealtimeLogConfigCommandOutput,
  CreateResponseHeadersPolicyCommand,
  type CreateResponseHeadersPolicyCommandInput,
  type CreateResponseHeadersPolicyCommandOutput,
  CreateStreamingDistributionCommand,
  type CreateStreamingDistributionCommandInput,
  type CreateStreamingDistributionCommandOutput,
  CreateStreamingDistributionWithTagsCommand,
  type CreateStreamingDistributionWithTagsCommandInput,
  type CreateStreamingDistributionWithTagsCommandOutput,
  CreateTrustStoreCommand,
  type CreateTrustStoreCommandInput,
  type CreateTrustStoreCommandOutput,
  CreateVpcOriginCommand,
  type CreateVpcOriginCommandInput,
  type CreateVpcOriginCommandOutput,
  DeleteAnycastIpListCommand,
  type DeleteAnycastIpListCommandInput,
  type DeleteAnycastIpListCommandOutput,
  DeleteCachePolicyCommand,
  type DeleteCachePolicyCommandInput,
  type DeleteCachePolicyCommandOutput,
  DeleteCloudFrontOriginAccessIdentityCommand,
  type DeleteCloudFrontOriginAccessIdentityCommandInput,
  type DeleteCloudFrontOriginAccessIdentityCommandOutput,
  DeleteConnectionFunctionCommand,
  type DeleteConnectionFunctionCommandInput,
  type DeleteConnectionFunctionCommandOutput,
  DeleteConnectionGroupCommand,
  type DeleteConnectionGroupCommandInput,
  type DeleteConnectionGroupCommandOutput,
  DeleteContinuousDeploymentPolicyCommand,
  type DeleteContinuousDeploymentPolicyCommandInput,
  type DeleteContinuousDeploymentPolicyCommandOutput,
  DeleteDistributionCommand,
  type DeleteDistributionCommandInput,
  type DeleteDistributionCommandOutput,
  DeleteDistributionTenantCommand,
  type DeleteDistributionTenantCommandInput,
  type DeleteDistributionTenantCommandOutput,
  DeleteFieldLevelEncryptionConfigCommand,
  type DeleteFieldLevelEncryptionConfigCommandInput,
  type DeleteFieldLevelEncryptionConfigCommandOutput,
  DeleteFieldLevelEncryptionProfileCommand,
  type DeleteFieldLevelEncryptionProfileCommandInput,
  type DeleteFieldLevelEncryptionProfileCommandOutput,
  DeleteFunctionCommand,
  type DeleteFunctionCommandInput,
  type DeleteFunctionCommandOutput,
  DeleteKeyGroupCommand,
  type DeleteKeyGroupCommandInput,
  type DeleteKeyGroupCommandOutput,
  DeleteKeyValueStoreCommand,
  type DeleteKeyValueStoreCommandInput,
  type DeleteKeyValueStoreCommandOutput,
  DeleteMonitoringSubscriptionCommand,
  type DeleteMonitoringSubscriptionCommandInput,
  type DeleteMonitoringSubscriptionCommandOutput,
  DeleteOriginAccessControlCommand,
  type DeleteOriginAccessControlCommandInput,
  type DeleteOriginAccessControlCommandOutput,
  DeleteOriginRequestPolicyCommand,
  type DeleteOriginRequestPolicyCommandInput,
  type DeleteOriginRequestPolicyCommandOutput,
  DeletePublicKeyCommand,
  type DeletePublicKeyCommandInput,
  type DeletePublicKeyCommandOutput,
  DeleteRealtimeLogConfigCommand,
  type DeleteRealtimeLogConfigCommandInput,
  type DeleteRealtimeLogConfigCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResponseHeadersPolicyCommand,
  type DeleteResponseHeadersPolicyCommandInput,
  type DeleteResponseHeadersPolicyCommandOutput,
  DeleteStreamingDistributionCommand,
  type DeleteStreamingDistributionCommandInput,
  type DeleteStreamingDistributionCommandOutput,
  DeleteTrustStoreCommand,
  type DeleteTrustStoreCommandInput,
  type DeleteTrustStoreCommandOutput,
  DeleteVpcOriginCommand,
  type DeleteVpcOriginCommandInput,
  type DeleteVpcOriginCommandOutput,
  DescribeConnectionFunctionCommand,
  type DescribeConnectionFunctionCommandInput,
  type DescribeConnectionFunctionCommandOutput,
  DescribeFunctionCommand,
  type DescribeFunctionCommandInput,
  type DescribeFunctionCommandOutput,
  DescribeKeyValueStoreCommand,
  type DescribeKeyValueStoreCommandInput,
  type DescribeKeyValueStoreCommandOutput,
  DisassociateDistributionTenantWebACLCommand,
  type DisassociateDistributionTenantWebACLCommandInput,
  type DisassociateDistributionTenantWebACLCommandOutput,
  DisassociateDistributionWebACLCommand,
  type DisassociateDistributionWebACLCommandInput,
  type DisassociateDistributionWebACLCommandOutput,
  GetAnycastIpListCommand,
  type GetAnycastIpListCommandInput,
  type GetAnycastIpListCommandOutput,
  GetCachePolicyCommand,
  type GetCachePolicyCommandInput,
  type GetCachePolicyCommandOutput,
  GetCachePolicyConfigCommand,
  type GetCachePolicyConfigCommandInput,
  type GetCachePolicyConfigCommandOutput,
  GetCloudFrontOriginAccessIdentityCommand,
  type GetCloudFrontOriginAccessIdentityCommandInput,
  type GetCloudFrontOriginAccessIdentityCommandOutput,
  GetCloudFrontOriginAccessIdentityConfigCommand,
  type GetCloudFrontOriginAccessIdentityConfigCommandInput,
  type GetCloudFrontOriginAccessIdentityConfigCommandOutput,
  GetConnectionFunctionCommand,
  type GetConnectionFunctionCommandInput,
  type GetConnectionFunctionCommandOutput,
  GetConnectionGroupByRoutingEndpointCommand,
  type GetConnectionGroupByRoutingEndpointCommandInput,
  type GetConnectionGroupByRoutingEndpointCommandOutput,
  GetConnectionGroupCommand,
  type GetConnectionGroupCommandInput,
  type GetConnectionGroupCommandOutput,
  GetContinuousDeploymentPolicyCommand,
  type GetContinuousDeploymentPolicyCommandInput,
  type GetContinuousDeploymentPolicyCommandOutput,
  GetContinuousDeploymentPolicyConfigCommand,
  type GetContinuousDeploymentPolicyConfigCommandInput,
  type GetContinuousDeploymentPolicyConfigCommandOutput,
  GetDistributionCommand,
  type GetDistributionCommandInput,
  type GetDistributionCommandOutput,
  GetDistributionConfigCommand,
  type GetDistributionConfigCommandInput,
  type GetDistributionConfigCommandOutput,
  GetDistributionTenantByDomainCommand,
  type GetDistributionTenantByDomainCommandInput,
  type GetDistributionTenantByDomainCommandOutput,
  GetDistributionTenantCommand,
  type GetDistributionTenantCommandInput,
  type GetDistributionTenantCommandOutput,
  GetFieldLevelEncryptionCommand,
  type GetFieldLevelEncryptionCommandInput,
  type GetFieldLevelEncryptionCommandOutput,
  GetFieldLevelEncryptionConfigCommand,
  type GetFieldLevelEncryptionConfigCommandInput,
  type GetFieldLevelEncryptionConfigCommandOutput,
  GetFieldLevelEncryptionProfileCommand,
  type GetFieldLevelEncryptionProfileCommandInput,
  type GetFieldLevelEncryptionProfileCommandOutput,
  GetFieldLevelEncryptionProfileConfigCommand,
  type GetFieldLevelEncryptionProfileConfigCommandInput,
  type GetFieldLevelEncryptionProfileConfigCommandOutput,
  GetFunctionCommand,
  type GetFunctionCommandInput,
  type GetFunctionCommandOutput,
  GetInvalidationCommand,
  type GetInvalidationCommandInput,
  type GetInvalidationCommandOutput,
  GetInvalidationForDistributionTenantCommand,
  type GetInvalidationForDistributionTenantCommandInput,
  type GetInvalidationForDistributionTenantCommandOutput,
  GetKeyGroupCommand,
  type GetKeyGroupCommandInput,
  type GetKeyGroupCommandOutput,
  GetKeyGroupConfigCommand,
  type GetKeyGroupConfigCommandInput,
  type GetKeyGroupConfigCommandOutput,
  GetManagedCertificateDetailsCommand,
  type GetManagedCertificateDetailsCommandInput,
  type GetManagedCertificateDetailsCommandOutput,
  GetMonitoringSubscriptionCommand,
  type GetMonitoringSubscriptionCommandInput,
  type GetMonitoringSubscriptionCommandOutput,
  GetOriginAccessControlCommand,
  type GetOriginAccessControlCommandInput,
  type GetOriginAccessControlCommandOutput,
  GetOriginAccessControlConfigCommand,
  type GetOriginAccessControlConfigCommandInput,
  type GetOriginAccessControlConfigCommandOutput,
  GetOriginRequestPolicyCommand,
  type GetOriginRequestPolicyCommandInput,
  type GetOriginRequestPolicyCommandOutput,
  GetOriginRequestPolicyConfigCommand,
  type GetOriginRequestPolicyConfigCommandInput,
  type GetOriginRequestPolicyConfigCommandOutput,
  GetPublicKeyCommand,
  type GetPublicKeyCommandInput,
  type GetPublicKeyCommandOutput,
  GetPublicKeyConfigCommand,
  type GetPublicKeyConfigCommandInput,
  type GetPublicKeyConfigCommandOutput,
  GetRealtimeLogConfigCommand,
  type GetRealtimeLogConfigCommandInput,
  type GetRealtimeLogConfigCommandOutput,
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResponseHeadersPolicyCommand,
  type GetResponseHeadersPolicyCommandInput,
  type GetResponseHeadersPolicyCommandOutput,
  GetResponseHeadersPolicyConfigCommand,
  type GetResponseHeadersPolicyConfigCommandInput,
  type GetResponseHeadersPolicyConfigCommandOutput,
  GetStreamingDistributionCommand,
  type GetStreamingDistributionCommandInput,
  type GetStreamingDistributionCommandOutput,
  GetStreamingDistributionConfigCommand,
  type GetStreamingDistributionConfigCommandInput,
  type GetStreamingDistributionConfigCommandOutput,
  GetTrustStoreCommand,
  type GetTrustStoreCommandInput,
  type GetTrustStoreCommandOutput,
  GetVpcOriginCommand,
  type GetVpcOriginCommandInput,
  type GetVpcOriginCommandOutput,
  ListAnycastIpListsCommand,
  type ListAnycastIpListsCommandInput,
  type ListAnycastIpListsCommandOutput,
  ListCachePoliciesCommand,
  type ListCachePoliciesCommandInput,
  type ListCachePoliciesCommandOutput,
  ListCloudFrontOriginAccessIdentitiesCommand,
  type ListCloudFrontOriginAccessIdentitiesCommandInput,
  type ListCloudFrontOriginAccessIdentitiesCommandOutput,
  ListConflictingAliasesCommand,
  type ListConflictingAliasesCommandInput,
  type ListConflictingAliasesCommandOutput,
  ListConnectionFunctionsCommand,
  type ListConnectionFunctionsCommandInput,
  type ListConnectionFunctionsCommandOutput,
  ListConnectionGroupsCommand,
  type ListConnectionGroupsCommandInput,
  type ListConnectionGroupsCommandOutput,
  ListContinuousDeploymentPoliciesCommand,
  type ListContinuousDeploymentPoliciesCommandInput,
  type ListContinuousDeploymentPoliciesCommandOutput,
  ListDistributionsByAnycastIpListIdCommand,
  type ListDistributionsByAnycastIpListIdCommandInput,
  type ListDistributionsByAnycastIpListIdCommandOutput,
  ListDistributionsByCachePolicyIdCommand,
  type ListDistributionsByCachePolicyIdCommandInput,
  type ListDistributionsByCachePolicyIdCommandOutput,
  ListDistributionsByConnectionFunctionCommand,
  type ListDistributionsByConnectionFunctionCommandInput,
  type ListDistributionsByConnectionFunctionCommandOutput,
  ListDistributionsByConnectionModeCommand,
  type ListDistributionsByConnectionModeCommandInput,
  type ListDistributionsByConnectionModeCommandOutput,
  ListDistributionsByKeyGroupCommand,
  type ListDistributionsByKeyGroupCommandInput,
  type ListDistributionsByKeyGroupCommandOutput,
  ListDistributionsByOriginRequestPolicyIdCommand,
  type ListDistributionsByOriginRequestPolicyIdCommandInput,
  type ListDistributionsByOriginRequestPolicyIdCommandOutput,
  ListDistributionsByOwnedResourceCommand,
  type ListDistributionsByOwnedResourceCommandInput,
  type ListDistributionsByOwnedResourceCommandOutput,
  ListDistributionsByRealtimeLogConfigCommand,
  type ListDistributionsByRealtimeLogConfigCommandInput,
  type ListDistributionsByRealtimeLogConfigCommandOutput,
  ListDistributionsByResponseHeadersPolicyIdCommand,
  type ListDistributionsByResponseHeadersPolicyIdCommandInput,
  type ListDistributionsByResponseHeadersPolicyIdCommandOutput,
  ListDistributionsByTrustStoreCommand,
  type ListDistributionsByTrustStoreCommandInput,
  type ListDistributionsByTrustStoreCommandOutput,
  ListDistributionsByVpcOriginIdCommand,
  type ListDistributionsByVpcOriginIdCommandInput,
  type ListDistributionsByVpcOriginIdCommandOutput,
  ListDistributionsByWebACLIdCommand,
  type ListDistributionsByWebACLIdCommandInput,
  type ListDistributionsByWebACLIdCommandOutput,
  ListDistributionsCommand,
  type ListDistributionsCommandInput,
  type ListDistributionsCommandOutput,
  ListDistributionTenantsByCustomizationCommand,
  type ListDistributionTenantsByCustomizationCommandInput,
  type ListDistributionTenantsByCustomizationCommandOutput,
  ListDistributionTenantsCommand,
  type ListDistributionTenantsCommandInput,
  type ListDistributionTenantsCommandOutput,
  ListDomainConflictsCommand,
  type ListDomainConflictsCommandInput,
  type ListDomainConflictsCommandOutput,
  ListFieldLevelEncryptionConfigsCommand,
  type ListFieldLevelEncryptionConfigsCommandInput,
  type ListFieldLevelEncryptionConfigsCommandOutput,
  ListFieldLevelEncryptionProfilesCommand,
  type ListFieldLevelEncryptionProfilesCommandInput,
  type ListFieldLevelEncryptionProfilesCommandOutput,
  ListFunctionsCommand,
  type ListFunctionsCommandInput,
  type ListFunctionsCommandOutput,
  ListInvalidationsCommand,
  type ListInvalidationsCommandInput,
  type ListInvalidationsCommandOutput,
  ListInvalidationsForDistributionTenantCommand,
  type ListInvalidationsForDistributionTenantCommandInput,
  type ListInvalidationsForDistributionTenantCommandOutput,
  ListKeyGroupsCommand,
  type ListKeyGroupsCommandInput,
  type ListKeyGroupsCommandOutput,
  ListKeyValueStoresCommand,
  type ListKeyValueStoresCommandInput,
  type ListKeyValueStoresCommandOutput,
  ListOriginAccessControlsCommand,
  type ListOriginAccessControlsCommandInput,
  type ListOriginAccessControlsCommandOutput,
  ListOriginRequestPoliciesCommand,
  type ListOriginRequestPoliciesCommandInput,
  type ListOriginRequestPoliciesCommandOutput,
  ListPublicKeysCommand,
  type ListPublicKeysCommandInput,
  type ListPublicKeysCommandOutput,
  ListRealtimeLogConfigsCommand,
  type ListRealtimeLogConfigsCommandInput,
  type ListRealtimeLogConfigsCommandOutput,
  ListResponseHeadersPoliciesCommand,
  type ListResponseHeadersPoliciesCommandInput,
  type ListResponseHeadersPoliciesCommandOutput,
  ListStreamingDistributionsCommand,
  type ListStreamingDistributionsCommandInput,
  type ListStreamingDistributionsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTrustStoresCommand,
  type ListTrustStoresCommandInput,
  type ListTrustStoresCommandOutput,
  ListVpcOriginsCommand,
  type ListVpcOriginsCommandInput,
  type ListVpcOriginsCommandOutput,
  paginateListCloudFrontOriginAccessIdentities,
  paginateListConnectionFunctions,
  paginateListConnectionGroups,
  paginateListDistributions,
  paginateListDistributionsByConnectionFunction,
  paginateListDistributionsByConnectionMode,
  paginateListDistributionsByTrustStore,
  paginateListDistributionTenants,
  paginateListDistributionTenantsByCustomization,
  paginateListDomainConflicts,
  paginateListInvalidations,
  paginateListInvalidationsForDistributionTenant,
  paginateListKeyValueStores,
  paginateListOriginAccessControls,
  paginateListPublicKeys,
  paginateListStreamingDistributions,
  paginateListTrustStores,
  PublishConnectionFunctionCommand,
  type PublishConnectionFunctionCommandInput,
  type PublishConnectionFunctionCommandOutput,
  PublishFunctionCommand,
  type PublishFunctionCommandInput,
  type PublishFunctionCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestConnectionFunctionCommand,
  type TestConnectionFunctionCommandInput,
  type TestConnectionFunctionCommandOutput,
  TestFunctionCommand,
  type TestFunctionCommandInput,
  type TestFunctionCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAnycastIpListCommand,
  type UpdateAnycastIpListCommandInput,
  type UpdateAnycastIpListCommandOutput,
  UpdateCachePolicyCommand,
  type UpdateCachePolicyCommandInput,
  type UpdateCachePolicyCommandOutput,
  UpdateCloudFrontOriginAccessIdentityCommand,
  type UpdateCloudFrontOriginAccessIdentityCommandInput,
  type UpdateCloudFrontOriginAccessIdentityCommandOutput,
  UpdateConnectionFunctionCommand,
  type UpdateConnectionFunctionCommandInput,
  type UpdateConnectionFunctionCommandOutput,
  UpdateConnectionGroupCommand,
  type UpdateConnectionGroupCommandInput,
  type UpdateConnectionGroupCommandOutput,
  UpdateContinuousDeploymentPolicyCommand,
  type UpdateContinuousDeploymentPolicyCommandInput,
  type UpdateContinuousDeploymentPolicyCommandOutput,
  UpdateDistributionCommand,
  type UpdateDistributionCommandInput,
  type UpdateDistributionCommandOutput,
  UpdateDistributionTenantCommand,
  type UpdateDistributionTenantCommandInput,
  type UpdateDistributionTenantCommandOutput,
  UpdateDistributionWithStagingConfigCommand,
  type UpdateDistributionWithStagingConfigCommandInput,
  type UpdateDistributionWithStagingConfigCommandOutput,
  UpdateDomainAssociationCommand,
  type UpdateDomainAssociationCommandInput,
  type UpdateDomainAssociationCommandOutput,
  UpdateFieldLevelEncryptionConfigCommand,
  type UpdateFieldLevelEncryptionConfigCommandInput,
  type UpdateFieldLevelEncryptionConfigCommandOutput,
  UpdateFieldLevelEncryptionProfileCommand,
  type UpdateFieldLevelEncryptionProfileCommandInput,
  type UpdateFieldLevelEncryptionProfileCommandOutput,
  UpdateFunctionCommand,
  type UpdateFunctionCommandInput,
  type UpdateFunctionCommandOutput,
  UpdateKeyGroupCommand,
  type UpdateKeyGroupCommandInput,
  type UpdateKeyGroupCommandOutput,
  UpdateKeyValueStoreCommand,
  type UpdateKeyValueStoreCommandInput,
  type UpdateKeyValueStoreCommandOutput,
  UpdateOriginAccessControlCommand,
  type UpdateOriginAccessControlCommandInput,
  type UpdateOriginAccessControlCommandOutput,
  UpdateOriginRequestPolicyCommand,
  type UpdateOriginRequestPolicyCommandInput,
  type UpdateOriginRequestPolicyCommandOutput,
  UpdatePublicKeyCommand,
  type UpdatePublicKeyCommandInput,
  type UpdatePublicKeyCommandOutput,
  UpdateRealtimeLogConfigCommand,
  type UpdateRealtimeLogConfigCommandInput,
  type UpdateRealtimeLogConfigCommandOutput,
  UpdateResponseHeadersPolicyCommand,
  type UpdateResponseHeadersPolicyCommandInput,
  type UpdateResponseHeadersPolicyCommandOutput,
  UpdateStreamingDistributionCommand,
  type UpdateStreamingDistributionCommandInput,
  type UpdateStreamingDistributionCommandOutput,
  UpdateTrustStoreCommand,
  type UpdateTrustStoreCommandInput,
  type UpdateTrustStoreCommandOutput,
  UpdateVpcOriginCommand,
  type UpdateVpcOriginCommandInput,
  type UpdateVpcOriginCommandOutput,
  VerifyDnsConfigurationCommand,
  type VerifyDnsConfigurationCommandInput,
  type VerifyDnsConfigurationCommandOutput,
} from "@aws-sdk/client-cloudfront";
import * as Service from "@effect-aws/commons/Service";
import type * as ServiceLogger from "@effect-aws/commons/ServiceLogger";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import type * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
import * as Instance from "./CloudFrontClientInstance.js";
import * as CloudFrontServiceConfig from "./CloudFrontServiceConfig.js";
import type {
  AccessDeniedError,
  BatchTooLargeError,
  CachePolicyAlreadyExistsError,
  CachePolicyInUseError,
  CannotChangeImmutablePublicKeyFieldsError,
  CannotDeleteEntityWhileInUseError,
  CannotUpdateEntityWhileInUseError,
  CloudFrontOriginAccessIdentityAlreadyExistsError,
  CloudFrontOriginAccessIdentityInUseError,
  CNAMEAlreadyExistsError,
  ContinuousDeploymentPolicyAlreadyExistsError,
  ContinuousDeploymentPolicyInUseError,
  DistributionAlreadyExistsError,
  DistributionNotDisabledError,
  EntityAlreadyExistsError,
  EntityLimitExceededError,
  EntityNotFoundError,
  EntitySizeLimitExceededError,
  FieldLevelEncryptionConfigAlreadyExistsError,
  FieldLevelEncryptionConfigInUseError,
  FieldLevelEncryptionProfileAlreadyExistsError,
  FieldLevelEncryptionProfileInUseError,
  FieldLevelEncryptionProfileSizeExceededError,
  FunctionAlreadyExistsError,
  FunctionInUseError,
  FunctionSizeLimitExceededError,
  IllegalDeleteError,
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorError,
  IllegalOriginAccessConfigurationError,
  IllegalUpdateError,
  InconsistentQuantitiesError,
  InvalidArgumentError,
  InvalidAssociationError,
  InvalidDefaultRootObjectError,
  InvalidDomainNameForOriginAccessControlError,
  InvalidErrorCodeError,
  InvalidForwardCookiesError,
  InvalidFunctionAssociationError,
  InvalidGeoRestrictionParameterError,
  InvalidHeadersForS3OriginError,
  InvalidIfMatchVersionError,
  InvalidLambdaFunctionAssociationError,
  InvalidLocationCodeError,
  InvalidMinimumProtocolVersionError,
  InvalidOriginAccessControlError,
  InvalidOriginAccessIdentityError,
  InvalidOriginError,
  InvalidOriginKeepaliveTimeoutError,
  InvalidOriginReadTimeoutError,
  InvalidProtocolSettingsError,
  InvalidQueryStringParametersError,
  InvalidRelativePathError,
  InvalidRequiredProtocolError,
  InvalidResponseCodeError,
  InvalidTaggingError,
  InvalidTTLOrderError,
  InvalidViewerCertificateError,
  InvalidWebACLIdError,
  KeyGroupAlreadyExistsError,
  MissingBodyError,
  MonitoringSubscriptionAlreadyExistsError,
  NoSuchCachePolicyError,
  NoSuchCloudFrontOriginAccessIdentityError,
  NoSuchContinuousDeploymentPolicyError,
  NoSuchDistributionError,
  NoSuchFieldLevelEncryptionConfigError,
  NoSuchFieldLevelEncryptionProfileError,
  NoSuchFunctionExistsError,
  NoSuchInvalidationError,
  NoSuchMonitoringSubscriptionError,
  NoSuchOriginAccessControlError,
  NoSuchOriginError,
  NoSuchOriginRequestPolicyError,
  NoSuchPublicKeyError,
  NoSuchRealtimeLogConfigError,
  NoSuchResourceError,
  NoSuchResponseHeadersPolicyError,
  NoSuchStreamingDistributionError,
  OriginAccessControlAlreadyExistsError,
  OriginAccessControlInUseError,
  OriginRequestPolicyAlreadyExistsError,
  OriginRequestPolicyInUseError,
  PreconditionFailedError,
  PublicKeyAlreadyExistsError,
  PublicKeyInUseError,
  QueryArgProfileEmptyError,
  RealtimeLogConfigAlreadyExistsError,
  RealtimeLogConfigInUseError,
  RealtimeLogConfigOwnerMismatchError,
  ResourceInUseError,
  ResourceNotDisabledError,
  ResponseHeadersPolicyAlreadyExistsError,
  ResponseHeadersPolicyInUseError,
  SdkError,
  StagingDistributionInUseError,
  StreamingDistributionAlreadyExistsError,
  StreamingDistributionNotDisabledError,
  TestFunctionFailedError,
  TooLongCSPInResponseHeadersPolicyError,
  TooManyCacheBehaviorsError,
  TooManyCachePoliciesError,
  TooManyCertificatesError,
  TooManyCloudFrontOriginAccessIdentitiesError,
  TooManyContinuousDeploymentPoliciesError,
  TooManyCookieNamesInWhiteListError,
  TooManyCookiesInCachePolicyError,
  TooManyCookiesInOriginRequestPolicyError,
  TooManyCustomHeadersInResponseHeadersPolicyError,
  TooManyDistributionCNAMEsError,
  TooManyDistributionsAssociatedToCachePolicyError,
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfigError,
  TooManyDistributionsAssociatedToKeyGroupError,
  TooManyDistributionsAssociatedToOriginAccessControlError,
  TooManyDistributionsAssociatedToOriginRequestPolicyError,
  TooManyDistributionsAssociatedToResponseHeadersPolicyError,
  TooManyDistributionsError,
  TooManyDistributionsWithFunctionAssociationsError,
  TooManyDistributionsWithLambdaAssociationsError,
  TooManyDistributionsWithSingleFunctionARNError,
  TooManyFieldLevelEncryptionConfigsError,
  TooManyFieldLevelEncryptionContentTypeProfilesError,
  TooManyFieldLevelEncryptionEncryptionEntitiesError,
  TooManyFieldLevelEncryptionFieldPatternsError,
  TooManyFieldLevelEncryptionProfilesError,
  TooManyFieldLevelEncryptionQueryArgProfilesError,
  TooManyFunctionAssociationsError,
  TooManyFunctionsError,
  TooManyHeadersInCachePolicyError,
  TooManyHeadersInForwardedValuesError,
  TooManyHeadersInOriginRequestPolicyError,
  TooManyInvalidationsInProgressError,
  TooManyKeyGroupsAssociatedToDistributionError,
  TooManyKeyGroupsError,
  TooManyLambdaFunctionAssociationsError,
  TooManyOriginAccessControlsError,
  TooManyOriginCustomHeadersError,
  TooManyOriginGroupsPerDistributionError,
  TooManyOriginRequestPoliciesError,
  TooManyOriginsError,
  TooManyPublicKeysError,
  TooManyPublicKeysInKeyGroupError,
  TooManyQueryStringParametersError,
  TooManyQueryStringsInCachePolicyError,
  TooManyQueryStringsInOriginRequestPolicyError,
  TooManyRealtimeLogConfigsError,
  TooManyRemoveHeadersInResponseHeadersPolicyError,
  TooManyResponseHeadersPoliciesError,
  TooManyStreamingDistributionCNAMEsError,
  TooManyStreamingDistributionsError,
  TooManyTrustedSignersError,
  TrustedKeyGroupDoesNotExistError,
  TrustedSignerDoesNotExistError,
  UnsupportedOperationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AssociateAliasCommand,
  AssociateDistributionTenantWebACLCommand,
  AssociateDistributionWebACLCommand,
  CopyDistributionCommand,
  CreateAnycastIpListCommand,
  CreateCachePolicyCommand,
  CreateCloudFrontOriginAccessIdentityCommand,
  CreateConnectionFunctionCommand,
  CreateConnectionGroupCommand,
  CreateContinuousDeploymentPolicyCommand,
  CreateDistributionCommand,
  CreateDistributionTenantCommand,
  CreateDistributionWithTagsCommand,
  CreateFieldLevelEncryptionConfigCommand,
  CreateFieldLevelEncryptionProfileCommand,
  CreateFunctionCommand,
  CreateInvalidationCommand,
  CreateInvalidationForDistributionTenantCommand,
  CreateKeyGroupCommand,
  CreateKeyValueStoreCommand,
  CreateMonitoringSubscriptionCommand,
  CreateOriginAccessControlCommand,
  CreateOriginRequestPolicyCommand,
  CreatePublicKeyCommand,
  CreateRealtimeLogConfigCommand,
  CreateResponseHeadersPolicyCommand,
  CreateStreamingDistributionCommand,
  CreateStreamingDistributionWithTagsCommand,
  CreateTrustStoreCommand,
  CreateVpcOriginCommand,
  DeleteAnycastIpListCommand,
  DeleteCachePolicyCommand,
  DeleteCloudFrontOriginAccessIdentityCommand,
  DeleteConnectionFunctionCommand,
  DeleteConnectionGroupCommand,
  DeleteContinuousDeploymentPolicyCommand,
  DeleteDistributionCommand,
  DeleteDistributionTenantCommand,
  DeleteFieldLevelEncryptionConfigCommand,
  DeleteFieldLevelEncryptionProfileCommand,
  DeleteFunctionCommand,
  DeleteKeyGroupCommand,
  DeleteKeyValueStoreCommand,
  DeleteMonitoringSubscriptionCommand,
  DeleteOriginAccessControlCommand,
  DeleteOriginRequestPolicyCommand,
  DeletePublicKeyCommand,
  DeleteRealtimeLogConfigCommand,
  DeleteResourcePolicyCommand,
  DeleteResponseHeadersPolicyCommand,
  DeleteStreamingDistributionCommand,
  DeleteTrustStoreCommand,
  DeleteVpcOriginCommand,
  DescribeConnectionFunctionCommand,
  DescribeFunctionCommand,
  DescribeKeyValueStoreCommand,
  DisassociateDistributionTenantWebACLCommand,
  DisassociateDistributionWebACLCommand,
  GetAnycastIpListCommand,
  GetCachePolicyCommand,
  GetCachePolicyConfigCommand,
  GetCloudFrontOriginAccessIdentityCommand,
  GetCloudFrontOriginAccessIdentityConfigCommand,
  GetConnectionFunctionCommand,
  GetConnectionGroupCommand,
  GetConnectionGroupByRoutingEndpointCommand,
  GetContinuousDeploymentPolicyCommand,
  GetContinuousDeploymentPolicyConfigCommand,
  GetDistributionCommand,
  GetDistributionConfigCommand,
  GetDistributionTenantCommand,
  GetDistributionTenantByDomainCommand,
  GetFieldLevelEncryptionCommand,
  GetFieldLevelEncryptionConfigCommand,
  GetFieldLevelEncryptionProfileCommand,
  GetFieldLevelEncryptionProfileConfigCommand,
  GetFunctionCommand,
  GetInvalidationCommand,
  GetInvalidationForDistributionTenantCommand,
  GetKeyGroupCommand,
  GetKeyGroupConfigCommand,
  GetManagedCertificateDetailsCommand,
  GetMonitoringSubscriptionCommand,
  GetOriginAccessControlCommand,
  GetOriginAccessControlConfigCommand,
  GetOriginRequestPolicyCommand,
  GetOriginRequestPolicyConfigCommand,
  GetPublicKeyCommand,
  GetPublicKeyConfigCommand,
  GetRealtimeLogConfigCommand,
  GetResourcePolicyCommand,
  GetResponseHeadersPolicyCommand,
  GetResponseHeadersPolicyConfigCommand,
  GetStreamingDistributionCommand,
  GetStreamingDistributionConfigCommand,
  GetTrustStoreCommand,
  GetVpcOriginCommand,
  ListAnycastIpListsCommand,
  ListCachePoliciesCommand,
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListConflictingAliasesCommand,
  ListConnectionFunctionsCommand,
  ListConnectionGroupsCommand,
  ListContinuousDeploymentPoliciesCommand,
  ListDistributionTenantsCommand,
  ListDistributionTenantsByCustomizationCommand,
  ListDistributionsCommand,
  ListDistributionsByAnycastIpListIdCommand,
  ListDistributionsByCachePolicyIdCommand,
  ListDistributionsByConnectionFunctionCommand,
  ListDistributionsByConnectionModeCommand,
  ListDistributionsByKeyGroupCommand,
  ListDistributionsByOriginRequestPolicyIdCommand,
  ListDistributionsByOwnedResourceCommand,
  ListDistributionsByRealtimeLogConfigCommand,
  ListDistributionsByResponseHeadersPolicyIdCommand,
  ListDistributionsByTrustStoreCommand,
  ListDistributionsByVpcOriginIdCommand,
  ListDistributionsByWebACLIdCommand,
  ListDomainConflictsCommand,
  ListFieldLevelEncryptionConfigsCommand,
  ListFieldLevelEncryptionProfilesCommand,
  ListFunctionsCommand,
  ListInvalidationsCommand,
  ListInvalidationsForDistributionTenantCommand,
  ListKeyGroupsCommand,
  ListKeyValueStoresCommand,
  ListOriginAccessControlsCommand,
  ListOriginRequestPoliciesCommand,
  ListPublicKeysCommand,
  ListRealtimeLogConfigsCommand,
  ListResponseHeadersPoliciesCommand,
  ListStreamingDistributionsCommand,
  ListTagsForResourceCommand,
  ListTrustStoresCommand,
  ListVpcOriginsCommand,
  PublishConnectionFunctionCommand,
  PublishFunctionCommand,
  PutResourcePolicyCommand,
  TagResourceCommand,
  TestConnectionFunctionCommand,
  TestFunctionCommand,
  UntagResourceCommand,
  UpdateAnycastIpListCommand,
  UpdateCachePolicyCommand,
  UpdateCloudFrontOriginAccessIdentityCommand,
  UpdateConnectionFunctionCommand,
  UpdateConnectionGroupCommand,
  UpdateContinuousDeploymentPolicyCommand,
  UpdateDistributionCommand,
  UpdateDistributionTenantCommand,
  UpdateDistributionWithStagingConfigCommand,
  UpdateDomainAssociationCommand,
  UpdateFieldLevelEncryptionConfigCommand,
  UpdateFieldLevelEncryptionProfileCommand,
  UpdateFunctionCommand,
  UpdateKeyGroupCommand,
  UpdateKeyValueStoreCommand,
  UpdateOriginAccessControlCommand,
  UpdateOriginRequestPolicyCommand,
  UpdatePublicKeyCommand,
  UpdateRealtimeLogConfigCommand,
  UpdateResponseHeadersPolicyCommand,
  UpdateStreamingDistributionCommand,
  UpdateTrustStoreCommand,
  UpdateVpcOriginCommand,
  VerifyDnsConfigurationCommand,
};

const paginators = {
  paginateListCloudFrontOriginAccessIdentities,
  paginateListConnectionFunctions,
  paginateListConnectionGroups,
  paginateListDistributionTenants,
  paginateListDistributionTenantsByCustomization,
  paginateListDistributions,
  paginateListDistributionsByConnectionFunction,
  paginateListDistributionsByConnectionMode,
  paginateListDistributionsByTrustStore,
  paginateListDomainConflicts,
  paginateListInvalidations,
  paginateListInvalidationsForDistributionTenant,
  paginateListKeyValueStores,
  paginateListOriginAccessControls,
  paginateListPublicKeys,
  paginateListStreamingDistributions,
  paginateListTrustStores,
};

export interface CloudFrontService$ {
  /**
   * @see {@link AssociateAliasCommand}
   */
  associateAlias(
    args: AssociateAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateAliasCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | IllegalUpdateError
    | InvalidArgumentError
    | NoSuchDistributionError
    | TooManyDistributionCNAMEsError
  >;

  /**
   * @see {@link AssociateDistributionTenantWebACLCommand}
   */
  associateDistributionTenantWebACL(
    args: AssociateDistributionTenantWebACLCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateDistributionTenantWebACLCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityLimitExceededError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
  >;

  /**
   * @see {@link AssociateDistributionWebACLCommand}
   */
  associateDistributionWebACL(
    args: AssociateDistributionWebACLCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateDistributionWebACLCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityLimitExceededError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
  >;

  /**
   * @see {@link CopyDistributionCommand}
   */
  copyDistribution(
    args: CopyDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyDistributionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | DistributionAlreadyExistsError
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidDefaultRootObjectError
    | InvalidErrorCodeError
    | InvalidForwardCookiesError
    | InvalidFunctionAssociationError
    | InvalidGeoRestrictionParameterError
    | InvalidHeadersForS3OriginError
    | InvalidIfMatchVersionError
    | InvalidLambdaFunctionAssociationError
    | InvalidLocationCodeError
    | InvalidMinimumProtocolVersionError
    | InvalidOriginError
    | InvalidOriginAccessControlError
    | InvalidOriginAccessIdentityError
    | InvalidOriginKeepaliveTimeoutError
    | InvalidOriginReadTimeoutError
    | InvalidProtocolSettingsError
    | InvalidQueryStringParametersError
    | InvalidRelativePathError
    | InvalidRequiredProtocolError
    | InvalidResponseCodeError
    | InvalidTTLOrderError
    | InvalidViewerCertificateError
    | InvalidWebACLIdError
    | MissingBodyError
    | NoSuchCachePolicyError
    | NoSuchDistributionError
    | NoSuchFieldLevelEncryptionConfigError
    | NoSuchOriginError
    | NoSuchOriginRequestPolicyError
    | NoSuchRealtimeLogConfigError
    | NoSuchResponseHeadersPolicyError
    | PreconditionFailedError
    | RealtimeLogConfigOwnerMismatchError
    | TooManyCacheBehaviorsError
    | TooManyCertificatesError
    | TooManyCookieNamesInWhiteListError
    | TooManyDistributionCNAMEsError
    | TooManyDistributionsError
    | TooManyDistributionsAssociatedToCachePolicyError
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfigError
    | TooManyDistributionsAssociatedToKeyGroupError
    | TooManyDistributionsAssociatedToOriginAccessControlError
    | TooManyDistributionsAssociatedToOriginRequestPolicyError
    | TooManyDistributionsAssociatedToResponseHeadersPolicyError
    | TooManyDistributionsWithFunctionAssociationsError
    | TooManyDistributionsWithLambdaAssociationsError
    | TooManyDistributionsWithSingleFunctionARNError
    | TooManyFunctionAssociationsError
    | TooManyHeadersInForwardedValuesError
    | TooManyKeyGroupsAssociatedToDistributionError
    | TooManyLambdaFunctionAssociationsError
    | TooManyOriginCustomHeadersError
    | TooManyOriginGroupsPerDistributionError
    | TooManyOriginsError
    | TooManyQueryStringParametersError
    | TooManyTrustedSignersError
    | TrustedKeyGroupDoesNotExistError
    | TrustedSignerDoesNotExistError
  >;

  /**
   * @see {@link CreateAnycastIpListCommand}
   */
  createAnycastIpList(
    args: CreateAnycastIpListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAnycastIpListCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | InvalidArgumentError
    | InvalidTaggingError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateCachePolicyCommand}
   */
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCachePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CachePolicyAlreadyExistsError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | TooManyCachePoliciesError
    | TooManyCookiesInCachePolicyError
    | TooManyHeadersInCachePolicyError
    | TooManyQueryStringsInCachePolicyError
  >;

  /**
   * @see {@link CreateCloudFrontOriginAccessIdentityCommand}
   */
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCloudFrontOriginAccessIdentityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | CloudFrontOriginAccessIdentityAlreadyExistsError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | MissingBodyError
    | TooManyCloudFrontOriginAccessIdentitiesError
  >;

  /**
   * @see {@link CreateConnectionFunctionCommand}
   */
  createConnectionFunction(
    args: CreateConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectionFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | EntitySizeLimitExceededError
    | InvalidArgumentError
    | InvalidTaggingError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateConnectionGroupCommand}
   */
  createConnectionGroup(
    args: CreateConnectionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectionGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidTaggingError
  >;

  /**
   * @see {@link CreateContinuousDeploymentPolicyCommand}
   */
  createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateContinuousDeploymentPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ContinuousDeploymentPolicyAlreadyExistsError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | StagingDistributionInUseError
    | TooManyContinuousDeploymentPoliciesError
  >;

  /**
   * @see {@link CreateDistributionCommand}
   */
  createDistribution(
    args: CreateDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDistributionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | ContinuousDeploymentPolicyInUseError
    | DistributionAlreadyExistsError
    | EntityLimitExceededError
    | EntityNotFoundError
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorError
    | IllegalOriginAccessConfigurationError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidDefaultRootObjectError
    | InvalidDomainNameForOriginAccessControlError
    | InvalidErrorCodeError
    | InvalidForwardCookiesError
    | InvalidFunctionAssociationError
    | InvalidGeoRestrictionParameterError
    | InvalidHeadersForS3OriginError
    | InvalidLambdaFunctionAssociationError
    | InvalidLocationCodeError
    | InvalidMinimumProtocolVersionError
    | InvalidOriginError
    | InvalidOriginAccessControlError
    | InvalidOriginAccessIdentityError
    | InvalidOriginKeepaliveTimeoutError
    | InvalidOriginReadTimeoutError
    | InvalidProtocolSettingsError
    | InvalidQueryStringParametersError
    | InvalidRelativePathError
    | InvalidRequiredProtocolError
    | InvalidResponseCodeError
    | InvalidTTLOrderError
    | InvalidViewerCertificateError
    | InvalidWebACLIdError
    | MissingBodyError
    | NoSuchCachePolicyError
    | NoSuchContinuousDeploymentPolicyError
    | NoSuchFieldLevelEncryptionConfigError
    | NoSuchOriginError
    | NoSuchOriginRequestPolicyError
    | NoSuchRealtimeLogConfigError
    | NoSuchResponseHeadersPolicyError
    | RealtimeLogConfigOwnerMismatchError
    | TooManyCacheBehaviorsError
    | TooManyCertificatesError
    | TooManyCookieNamesInWhiteListError
    | TooManyDistributionCNAMEsError
    | TooManyDistributionsError
    | TooManyDistributionsAssociatedToCachePolicyError
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfigError
    | TooManyDistributionsAssociatedToKeyGroupError
    | TooManyDistributionsAssociatedToOriginAccessControlError
    | TooManyDistributionsAssociatedToOriginRequestPolicyError
    | TooManyDistributionsAssociatedToResponseHeadersPolicyError
    | TooManyDistributionsWithFunctionAssociationsError
    | TooManyDistributionsWithLambdaAssociationsError
    | TooManyDistributionsWithSingleFunctionARNError
    | TooManyFunctionAssociationsError
    | TooManyHeadersInForwardedValuesError
    | TooManyKeyGroupsAssociatedToDistributionError
    | TooManyLambdaFunctionAssociationsError
    | TooManyOriginCustomHeadersError
    | TooManyOriginGroupsPerDistributionError
    | TooManyOriginsError
    | TooManyQueryStringParametersError
    | TooManyTrustedSignersError
    | TrustedKeyGroupDoesNotExistError
    | TrustedSignerDoesNotExistError
  >;

  /**
   * @see {@link CreateDistributionTenantCommand}
   */
  createDistributionTenant(
    args: CreateDistributionTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDistributionTenantCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidAssociationError
    | InvalidTaggingError
  >;

  /**
   * @see {@link CreateDistributionWithTagsCommand}
   */
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDistributionWithTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | ContinuousDeploymentPolicyInUseError
    | DistributionAlreadyExistsError
    | EntityNotFoundError
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorError
    | IllegalOriginAccessConfigurationError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidDefaultRootObjectError
    | InvalidDomainNameForOriginAccessControlError
    | InvalidErrorCodeError
    | InvalidForwardCookiesError
    | InvalidFunctionAssociationError
    | InvalidGeoRestrictionParameterError
    | InvalidHeadersForS3OriginError
    | InvalidLambdaFunctionAssociationError
    | InvalidLocationCodeError
    | InvalidMinimumProtocolVersionError
    | InvalidOriginError
    | InvalidOriginAccessControlError
    | InvalidOriginAccessIdentityError
    | InvalidOriginKeepaliveTimeoutError
    | InvalidOriginReadTimeoutError
    | InvalidProtocolSettingsError
    | InvalidQueryStringParametersError
    | InvalidRelativePathError
    | InvalidRequiredProtocolError
    | InvalidResponseCodeError
    | InvalidTaggingError
    | InvalidTTLOrderError
    | InvalidViewerCertificateError
    | InvalidWebACLIdError
    | MissingBodyError
    | NoSuchCachePolicyError
    | NoSuchContinuousDeploymentPolicyError
    | NoSuchFieldLevelEncryptionConfigError
    | NoSuchOriginError
    | NoSuchOriginRequestPolicyError
    | NoSuchRealtimeLogConfigError
    | NoSuchResponseHeadersPolicyError
    | RealtimeLogConfigOwnerMismatchError
    | TooManyCacheBehaviorsError
    | TooManyCertificatesError
    | TooManyCookieNamesInWhiteListError
    | TooManyDistributionCNAMEsError
    | TooManyDistributionsError
    | TooManyDistributionsAssociatedToCachePolicyError
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfigError
    | TooManyDistributionsAssociatedToKeyGroupError
    | TooManyDistributionsAssociatedToOriginAccessControlError
    | TooManyDistributionsAssociatedToOriginRequestPolicyError
    | TooManyDistributionsAssociatedToResponseHeadersPolicyError
    | TooManyDistributionsWithFunctionAssociationsError
    | TooManyDistributionsWithLambdaAssociationsError
    | TooManyDistributionsWithSingleFunctionARNError
    | TooManyFunctionAssociationsError
    | TooManyHeadersInForwardedValuesError
    | TooManyKeyGroupsAssociatedToDistributionError
    | TooManyLambdaFunctionAssociationsError
    | TooManyOriginCustomHeadersError
    | TooManyOriginGroupsPerDistributionError
    | TooManyOriginsError
    | TooManyQueryStringParametersError
    | TooManyTrustedSignersError
    | TrustedKeyGroupDoesNotExistError
    | TrustedSignerDoesNotExistError
  >;

  /**
   * @see {@link CreateFieldLevelEncryptionConfigCommand}
   */
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFieldLevelEncryptionConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | FieldLevelEncryptionConfigAlreadyExistsError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | NoSuchFieldLevelEncryptionProfileError
    | QueryArgProfileEmptyError
    | TooManyFieldLevelEncryptionConfigsError
    | TooManyFieldLevelEncryptionContentTypeProfilesError
    | TooManyFieldLevelEncryptionQueryArgProfilesError
  >;

  /**
   * @see {@link CreateFieldLevelEncryptionProfileCommand}
   */
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFieldLevelEncryptionProfileCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | FieldLevelEncryptionProfileAlreadyExistsError
    | FieldLevelEncryptionProfileSizeExceededError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | NoSuchPublicKeyError
    | TooManyFieldLevelEncryptionEncryptionEntitiesError
    | TooManyFieldLevelEncryptionFieldPatternsError
    | TooManyFieldLevelEncryptionProfilesError
  >;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | FunctionAlreadyExistsError
    | FunctionSizeLimitExceededError
    | InvalidArgumentError
    | TooManyFunctionsError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateInvalidationCommand}
   */
  createInvalidation(
    args: CreateInvalidationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInvalidationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | BatchTooLargeError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | MissingBodyError
    | NoSuchDistributionError
    | TooManyInvalidationsInProgressError
  >;

  /**
   * @see {@link CreateInvalidationForDistributionTenantCommand}
   */
  createInvalidationForDistributionTenant(
    args: CreateInvalidationForDistributionTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInvalidationForDistributionTenantCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | BatchTooLargeError
    | EntityNotFoundError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | MissingBodyError
    | TooManyInvalidationsInProgressError
  >;

  /**
   * @see {@link CreateKeyGroupCommand}
   */
  createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateKeyGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | KeyGroupAlreadyExistsError
    | TooManyKeyGroupsError
    | TooManyPublicKeysInKeyGroupError
  >;

  /**
   * @see {@link CreateKeyValueStoreCommand}
   */
  createKeyValueStore(
    args: CreateKeyValueStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateKeyValueStoreCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | EntitySizeLimitExceededError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateMonitoringSubscriptionCommand}
   */
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateMonitoringSubscriptionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | MonitoringSubscriptionAlreadyExistsError
    | NoSuchDistributionError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateOriginAccessControlCommand}
   */
  createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOriginAccessControlCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | OriginAccessControlAlreadyExistsError
    | TooManyOriginAccessControlsError
  >;

  /**
   * @see {@link CreateOriginRequestPolicyCommand}
   */
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOriginRequestPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | OriginRequestPolicyAlreadyExistsError
    | TooManyCookiesInOriginRequestPolicyError
    | TooManyHeadersInOriginRequestPolicyError
    | TooManyOriginRequestPoliciesError
    | TooManyQueryStringsInOriginRequestPolicyError
  >;

  /**
   * @see {@link CreatePublicKeyCommand}
   */
  createPublicKey(
    args: CreatePublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePublicKeyCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | PublicKeyAlreadyExistsError | TooManyPublicKeysError
  >;

  /**
   * @see {@link CreateRealtimeLogConfigCommand}
   */
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRealtimeLogConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | RealtimeLogConfigAlreadyExistsError
    | TooManyRealtimeLogConfigsError
  >;

  /**
   * @see {@link CreateResponseHeadersPolicyCommand}
   */
  createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateResponseHeadersPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | ResponseHeadersPolicyAlreadyExistsError
    | TooLongCSPInResponseHeadersPolicyError
    | TooManyCustomHeadersInResponseHeadersPolicyError
    | TooManyRemoveHeadersInResponseHeadersPolicyError
    | TooManyResponseHeadersPoliciesError
  >;

  /**
   * @see {@link CreateStreamingDistributionCommand}
   */
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStreamingDistributionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidOriginError
    | InvalidOriginAccessControlError
    | InvalidOriginAccessIdentityError
    | MissingBodyError
    | StreamingDistributionAlreadyExistsError
    | TooManyStreamingDistributionCNAMEsError
    | TooManyStreamingDistributionsError
    | TooManyTrustedSignersError
    | TrustedSignerDoesNotExistError
  >;

  /**
   * @see {@link CreateStreamingDistributionWithTagsCommand}
   */
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStreamingDistributionWithTagsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidOriginError
    | InvalidOriginAccessControlError
    | InvalidOriginAccessIdentityError
    | InvalidTaggingError
    | MissingBodyError
    | StreamingDistributionAlreadyExistsError
    | TooManyStreamingDistributionCNAMEsError
    | TooManyStreamingDistributionsError
    | TooManyTrustedSignersError
    | TrustedSignerDoesNotExistError
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
    | AccessDeniedError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidTaggingError
  >;

  /**
   * @see {@link CreateVpcOriginCommand}
   */
  createVpcOrigin(
    args: CreateVpcOriginCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcOriginCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidTaggingError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteAnycastIpListCommand}
   */
  deleteAnycastIpList(
    args: DeleteAnycastIpListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAnycastIpListCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CannotDeleteEntityWhileInUseError
    | EntityNotFoundError
    | IllegalDeleteError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteCachePolicyCommand}
   */
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCachePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CachePolicyInUseError
    | IllegalDeleteError
    | InvalidIfMatchVersionError
    | NoSuchCachePolicyError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DeleteCloudFrontOriginAccessIdentityCommand}
   */
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCloudFrontOriginAccessIdentityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CloudFrontOriginAccessIdentityInUseError
    | InvalidIfMatchVersionError
    | NoSuchCloudFrontOriginAccessIdentityError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DeleteConnectionFunctionCommand}
   */
  deleteConnectionFunction(
    args: DeleteConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectionFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CannotDeleteEntityWhileInUseError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteConnectionGroupCommand}
   */
  deleteConnectionGroup(
    args: DeleteConnectionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectionGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CannotDeleteEntityWhileInUseError
    | EntityNotFoundError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | ResourceNotDisabledError
  >;

  /**
   * @see {@link DeleteContinuousDeploymentPolicyCommand}
   */
  deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteContinuousDeploymentPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | ContinuousDeploymentPolicyInUseError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchContinuousDeploymentPolicyError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DeleteDistributionCommand}
   */
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDistributionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | DistributionNotDisabledError
    | InvalidIfMatchVersionError
    | NoSuchDistributionError
    | PreconditionFailedError
    | ResourceInUseError
  >;

  /**
   * @see {@link DeleteDistributionTenantCommand}
   */
  deleteDistributionTenant(
    args: DeleteDistributionTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDistributionTenantCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | ResourceNotDisabledError
  >;

  /**
   * @see {@link DeleteFieldLevelEncryptionConfigCommand}
   */
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFieldLevelEncryptionConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | FieldLevelEncryptionConfigInUseError
    | InvalidIfMatchVersionError
    | NoSuchFieldLevelEncryptionConfigError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DeleteFieldLevelEncryptionProfileCommand}
   */
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFieldLevelEncryptionProfileCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | FieldLevelEncryptionProfileInUseError
    | InvalidIfMatchVersionError
    | NoSuchFieldLevelEncryptionProfileError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | FunctionInUseError
    | InvalidIfMatchVersionError
    | NoSuchFunctionExistsError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteKeyGroupCommand}
   */
  deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteKeyGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidIfMatchVersionError
    | NoSuchResourceError
    | PreconditionFailedError
    | ResourceInUseError
  >;

  /**
   * @see {@link DeleteKeyValueStoreCommand}
   */
  deleteKeyValueStore(
    args: DeleteKeyValueStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteKeyValueStoreCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CannotDeleteEntityWhileInUseError
    | EntityNotFoundError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteMonitoringSubscriptionCommand}
   */
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMonitoringSubscriptionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | NoSuchDistributionError
    | NoSuchMonitoringSubscriptionError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteOriginAccessControlCommand}
   */
  deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOriginAccessControlCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidIfMatchVersionError
    | NoSuchOriginAccessControlError
    | OriginAccessControlInUseError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DeleteOriginRequestPolicyCommand}
   */
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOriginRequestPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | IllegalDeleteError
    | InvalidIfMatchVersionError
    | NoSuchOriginRequestPolicyError
    | OriginRequestPolicyInUseError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DeletePublicKeyCommand}
   */
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePublicKeyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidIfMatchVersionError
    | NoSuchPublicKeyError
    | PreconditionFailedError
    | PublicKeyInUseError
  >;

  /**
   * @see {@link DeleteRealtimeLogConfigCommand}
   */
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRealtimeLogConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidArgumentError
    | NoSuchRealtimeLogConfigError
    | RealtimeLogConfigInUseError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IllegalDeleteError
    | InvalidArgumentError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteResponseHeadersPolicyCommand}
   */
  deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResponseHeadersPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | IllegalDeleteError
    | InvalidIfMatchVersionError
    | NoSuchResponseHeadersPolicyError
    | PreconditionFailedError
    | ResponseHeadersPolicyInUseError
  >;

  /**
   * @see {@link DeleteStreamingDistributionCommand}
   */
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStreamingDistributionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InvalidIfMatchVersionError
    | NoSuchStreamingDistributionError
    | PreconditionFailedError
    | StreamingDistributionNotDisabledError
  >;

  /**
   * @see {@link DeleteTrustStoreCommand}
   */
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTrustStoreCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CannotDeleteEntityWhileInUseError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DeleteVpcOriginCommand}
   */
  deleteVpcOrigin(
    args: DeleteVpcOriginCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcOriginCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CannotDeleteEntityWhileInUseError
    | EntityNotFoundError
    | IllegalDeleteError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DescribeConnectionFunctionCommand}
   */
  describeConnectionFunction(
    args: DescribeConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConnectionFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DescribeFunctionCommand}
   */
  describeFunction(
    args: DescribeFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFunctionCommandOutput,
    Cause.TimeoutError | SdkError | NoSuchFunctionExistsError | UnsupportedOperationError
  >;

  /**
   * @see {@link DescribeKeyValueStoreCommand}
   */
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeKeyValueStoreCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DisassociateDistributionTenantWebACLCommand}
   */
  disassociateDistributionTenantWebACL(
    args: DisassociateDistributionTenantWebACLCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateDistributionTenantWebACLCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
  >;

  /**
   * @see {@link DisassociateDistributionWebACLCommand}
   */
  disassociateDistributionWebACL(
    args: DisassociateDistributionWebACLCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateDistributionWebACLCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
  >;

  /**
   * @see {@link GetAnycastIpListCommand}
   */
  getAnycastIpList(
    args: GetAnycastIpListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAnycastIpListCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetCachePolicyCommand}
   */
  getCachePolicy(
    args: GetCachePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCachePolicyCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchCachePolicyError
  >;

  /**
   * @see {@link GetCachePolicyConfigCommand}
   */
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCachePolicyConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchCachePolicyError
  >;

  /**
   * @see {@link GetCloudFrontOriginAccessIdentityCommand}
   */
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCloudFrontOriginAccessIdentityCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchCloudFrontOriginAccessIdentityError
  >;

  /**
   * @see {@link GetCloudFrontOriginAccessIdentityConfigCommand}
   */
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCloudFrontOriginAccessIdentityConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchCloudFrontOriginAccessIdentityError
  >;

  /**
   * @see {@link GetConnectionFunctionCommand}
   */
  getConnectionFunction(
    args: GetConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionFunctionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | UnsupportedOperationError
  >;

  /**
   * @see {@link GetConnectionGroupCommand}
   */
  getConnectionGroup(
    args: GetConnectionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionGroupCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError
  >;

  /**
   * @see {@link GetConnectionGroupByRoutingEndpointCommand}
   */
  getConnectionGroupByRoutingEndpoint(
    args: GetConnectionGroupByRoutingEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionGroupByRoutingEndpointCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError
  >;

  /**
   * @see {@link GetContinuousDeploymentPolicyCommand}
   */
  getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetContinuousDeploymentPolicyCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchContinuousDeploymentPolicyError
  >;

  /**
   * @see {@link GetContinuousDeploymentPolicyConfigCommand}
   */
  getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetContinuousDeploymentPolicyConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchContinuousDeploymentPolicyError
  >;

  /**
   * @see {@link GetDistributionCommand}
   */
  getDistribution(
    args: GetDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDistributionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchDistributionError
  >;

  /**
   * @see {@link GetDistributionConfigCommand}
   */
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDistributionConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchDistributionError
  >;

  /**
   * @see {@link GetDistributionTenantCommand}
   */
  getDistributionTenant(
    args: GetDistributionTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDistributionTenantCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError
  >;

  /**
   * @see {@link GetDistributionTenantByDomainCommand}
   */
  getDistributionTenantByDomain(
    args: GetDistributionTenantByDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDistributionTenantByDomainCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError
  >;

  /**
   * @see {@link GetFieldLevelEncryptionCommand}
   */
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFieldLevelEncryptionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchFieldLevelEncryptionConfigError
  >;

  /**
   * @see {@link GetFieldLevelEncryptionConfigCommand}
   */
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFieldLevelEncryptionConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchFieldLevelEncryptionConfigError
  >;

  /**
   * @see {@link GetFieldLevelEncryptionProfileCommand}
   */
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFieldLevelEncryptionProfileCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchFieldLevelEncryptionProfileError
  >;

  /**
   * @see {@link GetFieldLevelEncryptionProfileConfigCommand}
   */
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFieldLevelEncryptionProfileConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchFieldLevelEncryptionProfileError
  >;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(
    args: GetFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFunctionCommandOutput,
    Cause.TimeoutError | SdkError | NoSuchFunctionExistsError | UnsupportedOperationError
  >;

  /**
   * @see {@link GetInvalidationCommand}
   */
  getInvalidation(
    args: GetInvalidationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInvalidationCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchDistributionError | NoSuchInvalidationError
  >;

  /**
   * @see {@link GetInvalidationForDistributionTenantCommand}
   */
  getInvalidationForDistributionTenant(
    args: GetInvalidationForDistributionTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInvalidationForDistributionTenantCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | NoSuchInvalidationError
  >;

  /**
   * @see {@link GetKeyGroupCommand}
   */
  getKeyGroup(
    args: GetKeyGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetKeyGroupCommandOutput,
    Cause.TimeoutError | SdkError | NoSuchResourceError
  >;

  /**
   * @see {@link GetKeyGroupConfigCommand}
   */
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetKeyGroupConfigCommandOutput,
    Cause.TimeoutError | SdkError | NoSuchResourceError
  >;

  /**
   * @see {@link GetManagedCertificateDetailsCommand}
   */
  getManagedCertificateDetails(
    args: GetManagedCertificateDetailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetManagedCertificateDetailsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError
  >;

  /**
   * @see {@link GetMonitoringSubscriptionCommand}
   */
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMonitoringSubscriptionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | NoSuchDistributionError
    | NoSuchMonitoringSubscriptionError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetOriginAccessControlCommand}
   */
  getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOriginAccessControlCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchOriginAccessControlError
  >;

  /**
   * @see {@link GetOriginAccessControlConfigCommand}
   */
  getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOriginAccessControlConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchOriginAccessControlError
  >;

  /**
   * @see {@link GetOriginRequestPolicyCommand}
   */
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOriginRequestPolicyCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchOriginRequestPolicyError
  >;

  /**
   * @see {@link GetOriginRequestPolicyConfigCommand}
   */
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOriginRequestPolicyConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchOriginRequestPolicyError
  >;

  /**
   * @see {@link GetPublicKeyCommand}
   */
  getPublicKey(
    args: GetPublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPublicKeyCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchPublicKeyError
  >;

  /**
   * @see {@link GetPublicKeyConfigCommand}
   */
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPublicKeyConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchPublicKeyError
  >;

  /**
   * @see {@link GetRealtimeLogConfigCommand}
   */
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRealtimeLogConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchRealtimeLogConfigError
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetResponseHeadersPolicyCommand}
   */
  getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResponseHeadersPolicyCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchResponseHeadersPolicyError
  >;

  /**
   * @see {@link GetResponseHeadersPolicyConfigCommand}
   */
  getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResponseHeadersPolicyConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchResponseHeadersPolicyError
  >;

  /**
   * @see {@link GetStreamingDistributionCommand}
   */
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStreamingDistributionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchStreamingDistributionError
  >;

  /**
   * @see {@link GetStreamingDistributionConfigCommand}
   */
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStreamingDistributionConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | NoSuchStreamingDistributionError
  >;

  /**
   * @see {@link GetTrustStoreCommand}
   */
  getTrustStore(
    args: GetTrustStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTrustStoreCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link GetVpcOriginCommand}
   */
  getVpcOrigin(
    args: GetVpcOriginCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpcOriginCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListAnycastIpListsCommand}
   */
  listAnycastIpLists(
    args: ListAnycastIpListsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAnycastIpListsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListCachePoliciesCommand}
   */
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCachePoliciesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchCachePolicyError
  >;

  /**
   * @see {@link ListCloudFrontOriginAccessIdentitiesCommand}
   */
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCloudFrontOriginAccessIdentitiesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  listCloudFrontOriginAccessIdentitiesStream(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListCloudFrontOriginAccessIdentitiesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  /**
   * @see {@link ListConflictingAliasesCommand}
   */
  listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConflictingAliasesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | NoSuchDistributionError
  >;

  /**
   * @see {@link ListConnectionFunctionsCommand}
   */
  listConnectionFunctions(
    args: ListConnectionFunctionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConnectionFunctionsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | UnsupportedOperationError
  >;

  listConnectionFunctionsStream(
    args: ListConnectionFunctionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListConnectionFunctionsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | UnsupportedOperationError
  >;

  /**
   * @see {@link ListConnectionGroupsCommand}
   */
  listConnectionGroups(
    args: ListConnectionGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConnectionGroupsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  listConnectionGroupsStream(
    args: ListConnectionGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListConnectionGroupsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link ListContinuousDeploymentPoliciesCommand}
   */
  listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListContinuousDeploymentPoliciesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchContinuousDeploymentPolicyError
  >;

  /**
   * @see {@link ListDistributionTenantsCommand}
   */
  listDistributionTenants(
    args: ListDistributionTenantsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionTenantsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  listDistributionTenantsStream(
    args: ListDistributionTenantsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDistributionTenantsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link ListDistributionTenantsByCustomizationCommand}
   */
  listDistributionTenantsByCustomization(
    args: ListDistributionTenantsByCustomizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionTenantsByCustomizationCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  listDistributionTenantsByCustomizationStream(
    args: ListDistributionTenantsByCustomizationCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDistributionTenantsByCustomizationCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link ListDistributionsCommand}
   */
  listDistributions(
    args: ListDistributionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  listDistributionsStream(
    args: ListDistributionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<ListDistributionsCommandOutput, Cause.TimeoutError | SdkError | InvalidArgumentError>;

  /**
   * @see {@link ListDistributionsByAnycastIpListIdCommand}
   */
  listDistributionsByAnycastIpListId(
    args: ListDistributionsByAnycastIpListIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByAnycastIpListIdCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListDistributionsByCachePolicyIdCommand}
   */
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByCachePolicyIdCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchCachePolicyError
  >;

  /**
   * @see {@link ListDistributionsByConnectionFunctionCommand}
   */
  listDistributionsByConnectionFunction(
    args: ListDistributionsByConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByConnectionFunctionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  listDistributionsByConnectionFunctionStream(
    args: ListDistributionsByConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDistributionsByConnectionFunctionCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link ListDistributionsByConnectionModeCommand}
   */
  listDistributionsByConnectionMode(
    args: ListDistributionsByConnectionModeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByConnectionModeCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError
  >;

  listDistributionsByConnectionModeStream(
    args: ListDistributionsByConnectionModeCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDistributionsByConnectionModeCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError
  >;

  /**
   * @see {@link ListDistributionsByKeyGroupCommand}
   */
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByKeyGroupCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | NoSuchResourceError
  >;

  /**
   * @see {@link ListDistributionsByOriginRequestPolicyIdCommand}
   */
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByOriginRequestPolicyIdCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchOriginRequestPolicyError
  >;

  /**
   * @see {@link ListDistributionsByOwnedResourceCommand}
   */
  listDistributionsByOwnedResource(
    args: ListDistributionsByOwnedResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByOwnedResourceCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListDistributionsByRealtimeLogConfigCommand}
   */
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByRealtimeLogConfigCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  /**
   * @see {@link ListDistributionsByResponseHeadersPolicyIdCommand}
   */
  listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByResponseHeadersPolicyIdCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchResponseHeadersPolicyError
  >;

  /**
   * @see {@link ListDistributionsByTrustStoreCommand}
   */
  listDistributionsByTrustStore(
    args: ListDistributionsByTrustStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByTrustStoreCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  listDistributionsByTrustStoreStream(
    args: ListDistributionsByTrustStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDistributionsByTrustStoreCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link ListDistributionsByVpcOriginIdCommand}
   */
  listDistributionsByVpcOriginId(
    args: ListDistributionsByVpcOriginIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByVpcOriginIdCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListDistributionsByWebACLIdCommand}
   */
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDistributionsByWebACLIdCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | InvalidWebACLIdError
  >;

  /**
   * @see {@link ListDomainConflictsCommand}
   */
  listDomainConflicts(
    args: ListDomainConflictsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainConflictsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  listDomainConflictsStream(
    args: ListDomainConflictsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListDomainConflictsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link ListFieldLevelEncryptionConfigsCommand}
   */
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFieldLevelEncryptionConfigsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  /**
   * @see {@link ListFieldLevelEncryptionProfilesCommand}
   */
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFieldLevelEncryptionProfilesCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(
    args: ListFunctionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFunctionsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError | UnsupportedOperationError
  >;

  /**
   * @see {@link ListInvalidationsCommand}
   */
  listInvalidations(
    args: ListInvalidationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInvalidationsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchDistributionError
  >;

  listInvalidationsStream(
    args: ListInvalidationsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListInvalidationsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchDistributionError
  >;

  /**
   * @see {@link ListInvalidationsForDistributionTenantCommand}
   */
  listInvalidationsForDistributionTenant(
    args: ListInvalidationsForDistributionTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInvalidationsForDistributionTenantCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  listInvalidationsForDistributionTenantStream(
    args: ListInvalidationsForDistributionTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListInvalidationsForDistributionTenantCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link ListKeyGroupsCommand}
   */
  listKeyGroups(
    args: ListKeyGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListKeyGroupsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  /**
   * @see {@link ListKeyValueStoresCommand}
   */
  listKeyValueStores(
    args: ListKeyValueStoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListKeyValueStoresCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | UnsupportedOperationError
  >;

  listKeyValueStoresStream(
    args: ListKeyValueStoresCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListKeyValueStoresCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | UnsupportedOperationError
  >;

  /**
   * @see {@link ListOriginAccessControlsCommand}
   */
  listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOriginAccessControlsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  listOriginAccessControlsStream(
    args: ListOriginAccessControlsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<ListOriginAccessControlsCommandOutput, Cause.TimeoutError | SdkError | InvalidArgumentError>;

  /**
   * @see {@link ListOriginRequestPoliciesCommand}
   */
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOriginRequestPoliciesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchOriginRequestPolicyError
  >;

  /**
   * @see {@link ListPublicKeysCommand}
   */
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPublicKeysCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  listPublicKeysStream(
    args: ListPublicKeysCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<ListPublicKeysCommandOutput, Cause.TimeoutError | SdkError | InvalidArgumentError>;

  /**
   * @see {@link ListRealtimeLogConfigsCommand}
   */
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRealtimeLogConfigsCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchRealtimeLogConfigError
  >;

  /**
   * @see {@link ListResponseHeadersPoliciesCommand}
   */
  listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListResponseHeadersPoliciesCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchResponseHeadersPolicyError
  >;

  /**
   * @see {@link ListStreamingDistributionsCommand}
   */
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamingDistributionsCommandOutput,
    Cause.TimeoutError | SdkError | InvalidArgumentError
  >;

  listStreamingDistributionsStream(
    args: ListStreamingDistributionsCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<ListStreamingDistributionsCommandOutput, Cause.TimeoutError | SdkError | InvalidArgumentError>;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | InvalidTaggingError | NoSuchResourceError
  >;

  /**
   * @see {@link ListTrustStoresCommand}
   */
  listTrustStores(
    args: ListTrustStoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTrustStoresCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  listTrustStoresStream(
    args: ListTrustStoresCommandInput,
    options?: HttpHandlerOptions,
  ): Stream.Stream<
    ListTrustStoresCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;

  /**
   * @see {@link ListVpcOriginsCommand}
   */
  listVpcOrigins(
    args: ListVpcOriginsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcOriginsCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link PublishConnectionFunctionCommand}
   */
  publishConnectionFunction(
    args: PublishConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishConnectionFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link PublishFunctionCommand}
   */
  publishFunction(
    args: PublishFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchFunctionExistsError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IllegalUpdateError
    | InvalidArgumentError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | InvalidTaggingError | NoSuchResourceError
  >;

  /**
   * @see {@link TestConnectionFunctionCommand}
   */
  testConnectionFunction(
    args: TestConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestConnectionFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | TestFunctionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link TestFunctionCommand}
   */
  testFunction(
    args: TestFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchFunctionExistsError
    | TestFunctionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | InvalidTaggingError | NoSuchResourceError
  >;

  /**
   * @see {@link UpdateAnycastIpListCommand}
   */
  updateAnycastIpList(
    args: UpdateAnycastIpListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAnycastIpListCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UpdateCachePolicyCommand}
   */
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCachePolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CachePolicyAlreadyExistsError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchCachePolicyError
    | PreconditionFailedError
    | TooManyCookiesInCachePolicyError
    | TooManyHeadersInCachePolicyError
    | TooManyQueryStringsInCachePolicyError
  >;

  /**
   * @see {@link UpdateCloudFrontOriginAccessIdentityCommand}
   */
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCloudFrontOriginAccessIdentityCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | MissingBodyError
    | NoSuchCloudFrontOriginAccessIdentityError
    | PreconditionFailedError
  >;

  /**
   * @see {@link UpdateConnectionFunctionCommand}
   */
  updateConnectionFunction(
    args: UpdateConnectionFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectionFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | EntitySizeLimitExceededError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UpdateConnectionGroupCommand}
   */
  updateConnectionGroup(
    args: UpdateConnectionGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectionGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | ResourceInUseError
  >;

  /**
   * @see {@link UpdateContinuousDeploymentPolicyCommand}
   */
  updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateContinuousDeploymentPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchContinuousDeploymentPolicyError
    | PreconditionFailedError
    | StagingDistributionInUseError
  >;

  /**
   * @see {@link UpdateDistributionCommand}
   */
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDistributionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | ContinuousDeploymentPolicyInUseError
    | EntityNotFoundError
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorError
    | IllegalOriginAccessConfigurationError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidDefaultRootObjectError
    | InvalidDomainNameForOriginAccessControlError
    | InvalidErrorCodeError
    | InvalidForwardCookiesError
    | InvalidFunctionAssociationError
    | InvalidGeoRestrictionParameterError
    | InvalidHeadersForS3OriginError
    | InvalidIfMatchVersionError
    | InvalidLambdaFunctionAssociationError
    | InvalidLocationCodeError
    | InvalidMinimumProtocolVersionError
    | InvalidOriginAccessControlError
    | InvalidOriginAccessIdentityError
    | InvalidOriginKeepaliveTimeoutError
    | InvalidOriginReadTimeoutError
    | InvalidQueryStringParametersError
    | InvalidRelativePathError
    | InvalidRequiredProtocolError
    | InvalidResponseCodeError
    | InvalidTTLOrderError
    | InvalidViewerCertificateError
    | InvalidWebACLIdError
    | MissingBodyError
    | NoSuchCachePolicyError
    | NoSuchContinuousDeploymentPolicyError
    | NoSuchDistributionError
    | NoSuchFieldLevelEncryptionConfigError
    | NoSuchOriginError
    | NoSuchOriginRequestPolicyError
    | NoSuchRealtimeLogConfigError
    | NoSuchResponseHeadersPolicyError
    | PreconditionFailedError
    | RealtimeLogConfigOwnerMismatchError
    | StagingDistributionInUseError
    | TooManyCacheBehaviorsError
    | TooManyCertificatesError
    | TooManyCookieNamesInWhiteListError
    | TooManyDistributionCNAMEsError
    | TooManyDistributionsAssociatedToCachePolicyError
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfigError
    | TooManyDistributionsAssociatedToKeyGroupError
    | TooManyDistributionsAssociatedToOriginAccessControlError
    | TooManyDistributionsAssociatedToOriginRequestPolicyError
    | TooManyDistributionsAssociatedToResponseHeadersPolicyError
    | TooManyDistributionsWithFunctionAssociationsError
    | TooManyDistributionsWithLambdaAssociationsError
    | TooManyDistributionsWithSingleFunctionARNError
    | TooManyFunctionAssociationsError
    | TooManyHeadersInForwardedValuesError
    | TooManyKeyGroupsAssociatedToDistributionError
    | TooManyLambdaFunctionAssociationsError
    | TooManyOriginCustomHeadersError
    | TooManyOriginGroupsPerDistributionError
    | TooManyOriginsError
    | TooManyQueryStringParametersError
    | TooManyTrustedSignersError
    | TrustedKeyGroupDoesNotExistError
    | TrustedSignerDoesNotExistError
  >;

  /**
   * @see {@link UpdateDistributionTenantCommand}
   */
  updateDistributionTenant(
    args: UpdateDistributionTenantCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDistributionTenantCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidAssociationError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
  >;

  /**
   * @see {@link UpdateDistributionWithStagingConfigCommand}
   */
  updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDistributionWithStagingConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | EntityLimitExceededError
    | EntityNotFoundError
    | IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidDefaultRootObjectError
    | InvalidErrorCodeError
    | InvalidForwardCookiesError
    | InvalidFunctionAssociationError
    | InvalidGeoRestrictionParameterError
    | InvalidHeadersForS3OriginError
    | InvalidIfMatchVersionError
    | InvalidLambdaFunctionAssociationError
    | InvalidLocationCodeError
    | InvalidMinimumProtocolVersionError
    | InvalidOriginAccessControlError
    | InvalidOriginAccessIdentityError
    | InvalidOriginKeepaliveTimeoutError
    | InvalidOriginReadTimeoutError
    | InvalidQueryStringParametersError
    | InvalidRelativePathError
    | InvalidRequiredProtocolError
    | InvalidResponseCodeError
    | InvalidTTLOrderError
    | InvalidViewerCertificateError
    | InvalidWebACLIdError
    | MissingBodyError
    | NoSuchCachePolicyError
    | NoSuchDistributionError
    | NoSuchFieldLevelEncryptionConfigError
    | NoSuchOriginError
    | NoSuchOriginRequestPolicyError
    | NoSuchRealtimeLogConfigError
    | NoSuchResponseHeadersPolicyError
    | PreconditionFailedError
    | RealtimeLogConfigOwnerMismatchError
    | TooManyCacheBehaviorsError
    | TooManyCertificatesError
    | TooManyCookieNamesInWhiteListError
    | TooManyDistributionCNAMEsError
    | TooManyDistributionsAssociatedToCachePolicyError
    | TooManyDistributionsAssociatedToFieldLevelEncryptionConfigError
    | TooManyDistributionsAssociatedToKeyGroupError
    | TooManyDistributionsAssociatedToOriginAccessControlError
    | TooManyDistributionsAssociatedToOriginRequestPolicyError
    | TooManyDistributionsAssociatedToResponseHeadersPolicyError
    | TooManyDistributionsWithFunctionAssociationsError
    | TooManyDistributionsWithLambdaAssociationsError
    | TooManyDistributionsWithSingleFunctionARNError
    | TooManyFunctionAssociationsError
    | TooManyHeadersInForwardedValuesError
    | TooManyKeyGroupsAssociatedToDistributionError
    | TooManyLambdaFunctionAssociationsError
    | TooManyOriginCustomHeadersError
    | TooManyOriginGroupsPerDistributionError
    | TooManyOriginsError
    | TooManyQueryStringParametersError
    | TooManyTrustedSignersError
    | TrustedKeyGroupDoesNotExistError
    | TrustedSignerDoesNotExistError
  >;

  /**
   * @see {@link UpdateDomainAssociationCommand}
   */
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDomainAssociationCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IllegalUpdateError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
  >;

  /**
   * @see {@link UpdateFieldLevelEncryptionConfigCommand}
   */
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFieldLevelEncryptionConfigCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchFieldLevelEncryptionConfigError
    | NoSuchFieldLevelEncryptionProfileError
    | PreconditionFailedError
    | QueryArgProfileEmptyError
    | TooManyFieldLevelEncryptionContentTypeProfilesError
    | TooManyFieldLevelEncryptionQueryArgProfilesError
  >;

  /**
   * @see {@link UpdateFieldLevelEncryptionProfileCommand}
   */
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFieldLevelEncryptionProfileCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | FieldLevelEncryptionProfileAlreadyExistsError
    | FieldLevelEncryptionProfileSizeExceededError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchFieldLevelEncryptionProfileError
    | NoSuchPublicKeyError
    | PreconditionFailedError
    | TooManyFieldLevelEncryptionEncryptionEntitiesError
    | TooManyFieldLevelEncryptionFieldPatternsError
  >;

  /**
   * @see {@link UpdateFunctionCommand}
   */
  updateFunction(
    args: UpdateFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFunctionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | FunctionSizeLimitExceededError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchFunctionExistsError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UpdateKeyGroupCommand}
   */
  updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateKeyGroupCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | KeyGroupAlreadyExistsError
    | NoSuchResourceError
    | PreconditionFailedError
    | TooManyPublicKeysInKeyGroupError
  >;

  /**
   * @see {@link UpdateKeyValueStoreCommand}
   */
  updateKeyValueStore(
    args: UpdateKeyValueStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateKeyValueStoreCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UpdateOriginAccessControlCommand}
   */
  updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOriginAccessControlCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | IllegalUpdateError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchOriginAccessControlError
    | OriginAccessControlAlreadyExistsError
    | PreconditionFailedError
  >;

  /**
   * @see {@link UpdateOriginRequestPolicyCommand}
   */
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOriginRequestPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchOriginRequestPolicyError
    | OriginRequestPolicyAlreadyExistsError
    | PreconditionFailedError
    | TooManyCookiesInOriginRequestPolicyError
    | TooManyHeadersInOriginRequestPolicyError
    | TooManyQueryStringsInOriginRequestPolicyError
  >;

  /**
   * @see {@link UpdatePublicKeyCommand}
   */
  updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePublicKeyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CannotChangeImmutablePublicKeyFieldsError
    | IllegalUpdateError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchPublicKeyError
    | PreconditionFailedError
  >;

  /**
   * @see {@link UpdateRealtimeLogConfigCommand}
   */
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRealtimeLogConfigCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | InvalidArgumentError | NoSuchRealtimeLogConfigError
  >;

  /**
   * @see {@link UpdateResponseHeadersPolicyCommand}
   */
  updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateResponseHeadersPolicyCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | NoSuchResponseHeadersPolicyError
    | PreconditionFailedError
    | ResponseHeadersPolicyAlreadyExistsError
    | TooLongCSPInResponseHeadersPolicyError
    | TooManyCustomHeadersInResponseHeadersPolicyError
    | TooManyRemoveHeadersInResponseHeadersPolicyError
  >;

  /**
   * @see {@link UpdateStreamingDistributionCommand}
   */
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStreamingDistributionCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CNAMEAlreadyExistsError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | InvalidOriginAccessControlError
    | InvalidOriginAccessIdentityError
    | MissingBodyError
    | NoSuchStreamingDistributionError
    | PreconditionFailedError
    | TooManyStreamingDistributionCNAMEsError
    | TooManyTrustedSignersError
    | TrustedSignerDoesNotExistError
  >;

  /**
   * @see {@link UpdateTrustStoreCommand}
   */
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTrustStoreCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
  >;

  /**
   * @see {@link UpdateVpcOriginCommand}
   */
  updateVpcOrigin(
    args: UpdateVpcOriginCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateVpcOriginCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | AccessDeniedError
    | CannotUpdateEntityWhileInUseError
    | EntityAlreadyExistsError
    | EntityLimitExceededError
    | EntityNotFoundError
    | IllegalUpdateError
    | InconsistentQuantitiesError
    | InvalidArgumentError
    | InvalidIfMatchVersionError
    | PreconditionFailedError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link VerifyDnsConfigurationCommand}
   */
  verifyDnsConfiguration(
    args: VerifyDnsConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    VerifyDnsConfigurationCommandOutput,
    Cause.TimeoutError | SdkError | AccessDeniedError | EntityNotFoundError | InvalidArgumentError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudFrontService = Effect.gen(function*() {
  const client = yield* Instance.CloudFrontClientInstance;

  return yield* Service.fromClientAndCommands<CloudFrontService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: CloudFrontServiceConfig.toCloudFrontClientConfig,
    },
    paginators,
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class CloudFrontService extends Context.Service<
  CloudFrontService,
  CloudFrontService$
>()("@effect-aws/client-cloudfront/CloudFrontService") {
  static readonly defaultLayer = Layer.effect(this, makeCloudFrontService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: CloudFrontService.Config) =>
    Layer.effect(this, makeCloudFrontService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(CloudFrontServiceConfig.setCloudFrontServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CloudFrontClientConfig) => CloudFrontClient,
  ) =>
    Layer.effect(this, makeCloudFrontService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.CloudFrontClientInstance,
          Effect.map(CloudFrontServiceConfig.toCloudFrontClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace CloudFrontService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<CloudFrontClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = CloudFrontService$;
}
