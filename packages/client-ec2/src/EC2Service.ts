/**
 * @since 1.0.0
 */
import {
  EC2ServiceException as SdkEC2ServiceException,
  AcceptAddressTransferCommand,
  AcceptReservedInstancesExchangeQuoteCommand,
  AcceptTransitGatewayMulticastDomainAssociationsCommand,
  AcceptTransitGatewayPeeringAttachmentCommand,
  AcceptTransitGatewayVpcAttachmentCommand,
  AcceptVpcEndpointConnectionsCommand,
  AcceptVpcPeeringConnectionCommand,
  AdvertiseByoipCidrCommand,
  AllocateAddressCommand,
  AllocateHostsCommand,
  AllocateIpamPoolCidrCommand,
  ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  AssignIpv6AddressesCommand,
  AssignPrivateIpAddressesCommand,
  AssignPrivateNatGatewayAddressCommand,
  AssociateAddressCommand,
  AssociateClientVpnTargetNetworkCommand,
  AssociateDhcpOptionsCommand,
  AssociateEnclaveCertificateIamRoleCommand,
  AssociateIamInstanceProfileCommand,
  AssociateInstanceEventWindowCommand,
  AssociateIpamByoasnCommand,
  AssociateIpamResourceDiscoveryCommand,
  AssociateNatGatewayAddressCommand,
  AssociateRouteTableCommand,
  AssociateSubnetCidrBlockCommand,
  AssociateTransitGatewayMulticastDomainCommand,
  AssociateTransitGatewayPolicyTableCommand,
  AssociateTransitGatewayRouteTableCommand,
  AssociateTrunkInterfaceCommand,
  AssociateVpcCidrBlockCommand,
  AttachClassicLinkVpcCommand,
  AttachInternetGatewayCommand,
  AttachNetworkInterfaceCommand,
  AttachVerifiedAccessTrustProviderCommand,
  AttachVolumeCommand,
  AttachVpnGatewayCommand,
  AuthorizeClientVpnIngressCommand,
  AuthorizeSecurityGroupEgressCommand,
  AuthorizeSecurityGroupIngressCommand,
  BundleInstanceCommand,
  CancelBundleTaskCommand,
  CancelCapacityReservationCommand,
  CancelCapacityReservationFleetsCommand,
  CancelConversionTaskCommand,
  CancelExportTaskCommand,
  CancelImageLaunchPermissionCommand,
  CancelImportTaskCommand,
  CancelReservedInstancesListingCommand,
  CancelSpotFleetRequestsCommand,
  CancelSpotInstanceRequestsCommand,
  ConfirmProductInstanceCommand,
  CopyFpgaImageCommand,
  CopyImageCommand,
  CopySnapshotCommand,
  CreateCapacityReservationCommand,
  CreateCapacityReservationFleetCommand,
  CreateCarrierGatewayCommand,
  CreateClientVpnEndpointCommand,
  CreateClientVpnRouteCommand,
  CreateCoipCidrCommand,
  CreateCoipPoolCommand,
  CreateCustomerGatewayCommand,
  CreateDefaultSubnetCommand,
  CreateDefaultVpcCommand,
  CreateDhcpOptionsCommand,
  CreateEgressOnlyInternetGatewayCommand,
  CreateFleetCommand,
  CreateFlowLogsCommand,
  CreateFpgaImageCommand,
  CreateImageCommand,
  CreateInstanceConnectEndpointCommand,
  CreateInstanceEventWindowCommand,
  CreateInstanceExportTaskCommand,
  CreateInternetGatewayCommand,
  CreateIpamCommand,
  CreateIpamPoolCommand,
  CreateIpamResourceDiscoveryCommand,
  CreateIpamScopeCommand,
  CreateKeyPairCommand,
  CreateLaunchTemplateCommand,
  CreateLaunchTemplateVersionCommand,
  CreateLocalGatewayRouteCommand,
  CreateLocalGatewayRouteTableCommand,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  CreateLocalGatewayRouteTableVpcAssociationCommand,
  CreateManagedPrefixListCommand,
  CreateNatGatewayCommand,
  CreateNetworkAclCommand,
  CreateNetworkAclEntryCommand,
  CreateNetworkInsightsAccessScopeCommand,
  CreateNetworkInsightsPathCommand,
  CreateNetworkInterfaceCommand,
  CreateNetworkInterfacePermissionCommand,
  CreatePlacementGroupCommand,
  CreatePublicIpv4PoolCommand,
  CreateReplaceRootVolumeTaskCommand,
  CreateReservedInstancesListingCommand,
  CreateRestoreImageTaskCommand,
  CreateRouteCommand,
  CreateRouteTableCommand,
  CreateSecurityGroupCommand,
  CreateSnapshotCommand,
  CreateSnapshotsCommand,
  CreateSpotDatafeedSubscriptionCommand,
  CreateStoreImageTaskCommand,
  CreateSubnetCommand,
  CreateSubnetCidrReservationCommand,
  CreateTagsCommand,
  CreateTrafficMirrorFilterCommand,
  CreateTrafficMirrorFilterRuleCommand,
  CreateTrafficMirrorSessionCommand,
  CreateTrafficMirrorTargetCommand,
  CreateTransitGatewayCommand,
  CreateTransitGatewayConnectCommand,
  CreateTransitGatewayConnectPeerCommand,
  CreateTransitGatewayMulticastDomainCommand,
  CreateTransitGatewayPeeringAttachmentCommand,
  CreateTransitGatewayPolicyTableCommand,
  CreateTransitGatewayPrefixListReferenceCommand,
  CreateTransitGatewayRouteCommand,
  CreateTransitGatewayRouteTableCommand,
  CreateTransitGatewayRouteTableAnnouncementCommand,
  CreateTransitGatewayVpcAttachmentCommand,
  CreateVerifiedAccessEndpointCommand,
  CreateVerifiedAccessGroupCommand,
  CreateVerifiedAccessInstanceCommand,
  CreateVerifiedAccessTrustProviderCommand,
  CreateVolumeCommand,
  CreateVpcCommand,
  CreateVpcEndpointCommand,
  CreateVpcEndpointConnectionNotificationCommand,
  CreateVpcEndpointServiceConfigurationCommand,
  CreateVpcPeeringConnectionCommand,
  CreateVpnConnectionCommand,
  CreateVpnConnectionRouteCommand,
  CreateVpnGatewayCommand,
  DeleteCarrierGatewayCommand,
  DeleteClientVpnEndpointCommand,
  DeleteClientVpnRouteCommand,
  DeleteCoipCidrCommand,
  DeleteCoipPoolCommand,
  DeleteCustomerGatewayCommand,
  DeleteDhcpOptionsCommand,
  DeleteEgressOnlyInternetGatewayCommand,
  DeleteFleetsCommand,
  DeleteFlowLogsCommand,
  DeleteFpgaImageCommand,
  DeleteInstanceConnectEndpointCommand,
  DeleteInstanceEventWindowCommand,
  DeleteInternetGatewayCommand,
  DeleteIpamCommand,
  DeleteIpamPoolCommand,
  DeleteIpamResourceDiscoveryCommand,
  DeleteIpamScopeCommand,
  DeleteKeyPairCommand,
  DeleteLaunchTemplateCommand,
  DeleteLaunchTemplateVersionsCommand,
  DeleteLocalGatewayRouteCommand,
  DeleteLocalGatewayRouteTableCommand,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  DeleteLocalGatewayRouteTableVpcAssociationCommand,
  DeleteManagedPrefixListCommand,
  DeleteNatGatewayCommand,
  DeleteNetworkAclCommand,
  DeleteNetworkAclEntryCommand,
  DeleteNetworkInsightsAccessScopeCommand,
  DeleteNetworkInsightsAccessScopeAnalysisCommand,
  DeleteNetworkInsightsAnalysisCommand,
  DeleteNetworkInsightsPathCommand,
  DeleteNetworkInterfaceCommand,
  DeleteNetworkInterfacePermissionCommand,
  DeletePlacementGroupCommand,
  DeletePublicIpv4PoolCommand,
  DeleteQueuedReservedInstancesCommand,
  DeleteRouteCommand,
  DeleteRouteTableCommand,
  DeleteSecurityGroupCommand,
  DeleteSnapshotCommand,
  DeleteSpotDatafeedSubscriptionCommand,
  DeleteSubnetCommand,
  DeleteSubnetCidrReservationCommand,
  DeleteTagsCommand,
  DeleteTrafficMirrorFilterCommand,
  DeleteTrafficMirrorFilterRuleCommand,
  DeleteTrafficMirrorSessionCommand,
  DeleteTrafficMirrorTargetCommand,
  DeleteTransitGatewayCommand,
  DeleteTransitGatewayConnectCommand,
  DeleteTransitGatewayConnectPeerCommand,
  DeleteTransitGatewayMulticastDomainCommand,
  DeleteTransitGatewayPeeringAttachmentCommand,
  DeleteTransitGatewayPolicyTableCommand,
  DeleteTransitGatewayPrefixListReferenceCommand,
  DeleteTransitGatewayRouteCommand,
  DeleteTransitGatewayRouteTableCommand,
  DeleteTransitGatewayRouteTableAnnouncementCommand,
  DeleteTransitGatewayVpcAttachmentCommand,
  DeleteVerifiedAccessEndpointCommand,
  DeleteVerifiedAccessGroupCommand,
  DeleteVerifiedAccessInstanceCommand,
  DeleteVerifiedAccessTrustProviderCommand,
  DeleteVolumeCommand,
  DeleteVpcCommand,
  DeleteVpcEndpointConnectionNotificationsCommand,
  DeleteVpcEndpointServiceConfigurationsCommand,
  DeleteVpcEndpointsCommand,
  DeleteVpcPeeringConnectionCommand,
  DeleteVpnConnectionCommand,
  DeleteVpnConnectionRouteCommand,
  DeleteVpnGatewayCommand,
  DeprovisionByoipCidrCommand,
  DeprovisionIpamByoasnCommand,
  DeprovisionIpamPoolCidrCommand,
  DeprovisionPublicIpv4PoolCidrCommand,
  DeregisterImageCommand,
  DeregisterInstanceEventNotificationAttributesCommand,
  DeregisterTransitGatewayMulticastGroupMembersCommand,
  DeregisterTransitGatewayMulticastGroupSourcesCommand,
  DescribeAccountAttributesCommand,
  DescribeAddressTransfersCommand,
  DescribeAddressesCommand,
  DescribeAddressesAttributeCommand,
  DescribeAggregateIdFormatCommand,
  DescribeAvailabilityZonesCommand,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  DescribeBundleTasksCommand,
  DescribeByoipCidrsCommand,
  DescribeCapacityBlockOfferingsCommand,
  DescribeCapacityReservationFleetsCommand,
  DescribeCapacityReservationsCommand,
  DescribeCarrierGatewaysCommand,
  DescribeClassicLinkInstancesCommand,
  DescribeClientVpnAuthorizationRulesCommand,
  DescribeClientVpnConnectionsCommand,
  DescribeClientVpnEndpointsCommand,
  DescribeClientVpnRoutesCommand,
  DescribeClientVpnTargetNetworksCommand,
  DescribeCoipPoolsCommand,
  DescribeConversionTasksCommand,
  DescribeCustomerGatewaysCommand,
  DescribeDhcpOptionsCommand,
  DescribeEgressOnlyInternetGatewaysCommand,
  DescribeElasticGpusCommand,
  DescribeExportImageTasksCommand,
  DescribeExportTasksCommand,
  DescribeFastLaunchImagesCommand,
  DescribeFastSnapshotRestoresCommand,
  DescribeFleetHistoryCommand,
  DescribeFleetInstancesCommand,
  DescribeFleetsCommand,
  DescribeFlowLogsCommand,
  DescribeFpgaImageAttributeCommand,
  DescribeFpgaImagesCommand,
  DescribeHostReservationOfferingsCommand,
  DescribeHostReservationsCommand,
  DescribeHostsCommand,
  DescribeIamInstanceProfileAssociationsCommand,
  DescribeIdFormatCommand,
  DescribeIdentityIdFormatCommand,
  DescribeImageAttributeCommand,
  DescribeImagesCommand,
  DescribeImportImageTasksCommand,
  DescribeImportSnapshotTasksCommand,
  DescribeInstanceAttributeCommand,
  DescribeInstanceConnectEndpointsCommand,
  DescribeInstanceCreditSpecificationsCommand,
  DescribeInstanceEventNotificationAttributesCommand,
  DescribeInstanceEventWindowsCommand,
  DescribeInstanceStatusCommand,
  DescribeInstanceTopologyCommand,
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypesCommand,
  DescribeInstancesCommand,
  DescribeInternetGatewaysCommand,
  DescribeIpamByoasnCommand,
  DescribeIpamPoolsCommand,
  DescribeIpamResourceDiscoveriesCommand,
  DescribeIpamResourceDiscoveryAssociationsCommand,
  DescribeIpamScopesCommand,
  DescribeIpamsCommand,
  DescribeIpv6PoolsCommand,
  DescribeKeyPairsCommand,
  DescribeLaunchTemplateVersionsCommand,
  DescribeLaunchTemplatesCommand,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  DescribeLocalGatewayVirtualInterfacesCommand,
  DescribeLocalGatewaysCommand,
  DescribeLockedSnapshotsCommand,
  DescribeMacHostsCommand,
  DescribeManagedPrefixListsCommand,
  DescribeMovingAddressesCommand,
  DescribeNatGatewaysCommand,
  DescribeNetworkAclsCommand,
  DescribeNetworkInsightsAccessScopeAnalysesCommand,
  DescribeNetworkInsightsAccessScopesCommand,
  DescribeNetworkInsightsAnalysesCommand,
  DescribeNetworkInsightsPathsCommand,
  DescribeNetworkInterfaceAttributeCommand,
  DescribeNetworkInterfacePermissionsCommand,
  DescribeNetworkInterfacesCommand,
  DescribePlacementGroupsCommand,
  DescribePrefixListsCommand,
  DescribePrincipalIdFormatCommand,
  DescribePublicIpv4PoolsCommand,
  DescribeRegionsCommand,
  DescribeReplaceRootVolumeTasksCommand,
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesListingsCommand,
  DescribeReservedInstancesModificationsCommand,
  DescribeReservedInstancesOfferingsCommand,
  DescribeRouteTablesCommand,
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstancesCommand,
  DescribeSecurityGroupReferencesCommand,
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupsCommand,
  DescribeSnapshotAttributeCommand,
  DescribeSnapshotTierStatusCommand,
  DescribeSnapshotsCommand,
  DescribeSpotDatafeedSubscriptionCommand,
  DescribeSpotFleetInstancesCommand,
  DescribeSpotFleetRequestHistoryCommand,
  DescribeSpotFleetRequestsCommand,
  DescribeSpotInstanceRequestsCommand,
  DescribeSpotPriceHistoryCommand,
  DescribeStaleSecurityGroupsCommand,
  DescribeStoreImageTasksCommand,
  DescribeSubnetsCommand,
  DescribeTagsCommand,
  DescribeTrafficMirrorFiltersCommand,
  DescribeTrafficMirrorSessionsCommand,
  DescribeTrafficMirrorTargetsCommand,
  DescribeTransitGatewayAttachmentsCommand,
  DescribeTransitGatewayConnectPeersCommand,
  DescribeTransitGatewayConnectsCommand,
  DescribeTransitGatewayMulticastDomainsCommand,
  DescribeTransitGatewayPeeringAttachmentsCommand,
  DescribeTransitGatewayPolicyTablesCommand,
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  DescribeTransitGatewayRouteTablesCommand,
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTransitGatewaysCommand,
  DescribeTrunkInterfaceAssociationsCommand,
  DescribeVerifiedAccessEndpointsCommand,
  DescribeVerifiedAccessGroupsCommand,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  DescribeVerifiedAccessInstancesCommand,
  DescribeVerifiedAccessTrustProvidersCommand,
  DescribeVolumeAttributeCommand,
  DescribeVolumeStatusCommand,
  DescribeVolumesCommand,
  DescribeVolumesModificationsCommand,
  DescribeVpcAttributeCommand,
  DescribeVpcClassicLinkCommand,
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServicePermissionsCommand,
  DescribeVpcEndpointServicesCommand,
  DescribeVpcEndpointsCommand,
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcsCommand,
  DescribeVpnConnectionsCommand,
  DescribeVpnGatewaysCommand,
  DetachClassicLinkVpcCommand,
  DetachInternetGatewayCommand,
  DetachNetworkInterfaceCommand,
  DetachVerifiedAccessTrustProviderCommand,
  DetachVolumeCommand,
  DetachVpnGatewayCommand,
  DisableAddressTransferCommand,
  DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  DisableEbsEncryptionByDefaultCommand,
  DisableFastLaunchCommand,
  DisableFastSnapshotRestoresCommand,
  DisableImageCommand,
  DisableImageBlockPublicAccessCommand,
  DisableImageDeprecationCommand,
  DisableIpamOrganizationAdminAccountCommand,
  DisableSerialConsoleAccessCommand,
  DisableSnapshotBlockPublicAccessCommand,
  DisableTransitGatewayRouteTablePropagationCommand,
  DisableVgwRoutePropagationCommand,
  DisableVpcClassicLinkCommand,
  DisableVpcClassicLinkDnsSupportCommand,
  DisassociateAddressCommand,
  DisassociateClientVpnTargetNetworkCommand,
  DisassociateEnclaveCertificateIamRoleCommand,
  DisassociateIamInstanceProfileCommand,
  DisassociateInstanceEventWindowCommand,
  DisassociateIpamByoasnCommand,
  DisassociateIpamResourceDiscoveryCommand,
  DisassociateNatGatewayAddressCommand,
  DisassociateRouteTableCommand,
  DisassociateSubnetCidrBlockCommand,
  DisassociateTransitGatewayMulticastDomainCommand,
  DisassociateTransitGatewayPolicyTableCommand,
  DisassociateTransitGatewayRouteTableCommand,
  DisassociateTrunkInterfaceCommand,
  DisassociateVpcCidrBlockCommand,
  EnableAddressTransferCommand,
  EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  EnableEbsEncryptionByDefaultCommand,
  EnableFastLaunchCommand,
  EnableFastSnapshotRestoresCommand,
  EnableImageCommand,
  EnableImageBlockPublicAccessCommand,
  EnableImageDeprecationCommand,
  EnableIpamOrganizationAdminAccountCommand,
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  EnableSerialConsoleAccessCommand,
  EnableSnapshotBlockPublicAccessCommand,
  EnableTransitGatewayRouteTablePropagationCommand,
  EnableVgwRoutePropagationCommand,
  EnableVolumeIOCommand,
  EnableVpcClassicLinkCommand,
  EnableVpcClassicLinkDnsSupportCommand,
  ExportClientVpnClientCertificateRevocationListCommand,
  ExportClientVpnClientConfigurationCommand,
  ExportImageCommand,
  ExportTransitGatewayRoutesCommand,
  GetAssociatedEnclaveCertificateIamRolesCommand,
  GetAssociatedIpv6PoolCidrsCommand,
  GetAwsNetworkPerformanceDataCommand,
  GetCapacityReservationUsageCommand,
  GetCoipPoolUsageCommand,
  GetConsoleOutputCommand,
  GetConsoleScreenshotCommand,
  GetDefaultCreditSpecificationCommand,
  GetEbsDefaultKmsKeyIdCommand,
  GetEbsEncryptionByDefaultCommand,
  GetFlowLogsIntegrationTemplateCommand,
  GetGroupsForCapacityReservationCommand,
  GetHostReservationPurchasePreviewCommand,
  GetImageBlockPublicAccessStateCommand,
  GetInstanceMetadataDefaultsCommand,
  GetInstanceTypesFromInstanceRequirementsCommand,
  GetInstanceUefiDataCommand,
  GetIpamAddressHistoryCommand,
  GetIpamDiscoveredAccountsCommand,
  GetIpamDiscoveredPublicAddressesCommand,
  GetIpamDiscoveredResourceCidrsCommand,
  GetIpamPoolAllocationsCommand,
  GetIpamPoolCidrsCommand,
  GetIpamResourceCidrsCommand,
  GetLaunchTemplateDataCommand,
  GetManagedPrefixListAssociationsCommand,
  GetManagedPrefixListEntriesCommand,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  GetNetworkInsightsAccessScopeContentCommand,
  GetPasswordDataCommand,
  GetReservedInstancesExchangeQuoteCommand,
  GetSecurityGroupsForVpcCommand,
  GetSerialConsoleAccessStatusCommand,
  GetSnapshotBlockPublicAccessStateCommand,
  GetSpotPlacementScoresCommand,
  GetSubnetCidrReservationsCommand,
  GetTransitGatewayAttachmentPropagationsCommand,
  GetTransitGatewayMulticastDomainAssociationsCommand,
  GetTransitGatewayPolicyTableAssociationsCommand,
  GetTransitGatewayPolicyTableEntriesCommand,
  GetTransitGatewayPrefixListReferencesCommand,
  GetTransitGatewayRouteTableAssociationsCommand,
  GetTransitGatewayRouteTablePropagationsCommand,
  GetVerifiedAccessEndpointPolicyCommand,
  GetVerifiedAccessGroupPolicyCommand,
  GetVpnConnectionDeviceSampleConfigurationCommand,
  GetVpnConnectionDeviceTypesCommand,
  GetVpnTunnelReplacementStatusCommand,
  ImportClientVpnClientCertificateRevocationListCommand,
  ImportImageCommand,
  ImportInstanceCommand,
  ImportKeyPairCommand,
  ImportSnapshotCommand,
  ImportVolumeCommand,
  ListImagesInRecycleBinCommand,
  ListSnapshotsInRecycleBinCommand,
  LockSnapshotCommand,
  ModifyAddressAttributeCommand,
  ModifyAvailabilityZoneGroupCommand,
  ModifyCapacityReservationCommand,
  ModifyCapacityReservationFleetCommand,
  ModifyClientVpnEndpointCommand,
  ModifyDefaultCreditSpecificationCommand,
  ModifyEbsDefaultKmsKeyIdCommand,
  ModifyFleetCommand,
  ModifyFpgaImageAttributeCommand,
  ModifyHostsCommand,
  ModifyIdFormatCommand,
  ModifyIdentityIdFormatCommand,
  ModifyImageAttributeCommand,
  ModifyInstanceAttributeCommand,
  ModifyInstanceCapacityReservationAttributesCommand,
  ModifyInstanceCreditSpecificationCommand,
  ModifyInstanceEventStartTimeCommand,
  ModifyInstanceEventWindowCommand,
  ModifyInstanceMaintenanceOptionsCommand,
  ModifyInstanceMetadataDefaultsCommand,
  ModifyInstanceMetadataOptionsCommand,
  ModifyInstancePlacementCommand,
  ModifyIpamCommand,
  ModifyIpamPoolCommand,
  ModifyIpamResourceCidrCommand,
  ModifyIpamResourceDiscoveryCommand,
  ModifyIpamScopeCommand,
  ModifyLaunchTemplateCommand,
  ModifyLocalGatewayRouteCommand,
  ModifyManagedPrefixListCommand,
  ModifyNetworkInterfaceAttributeCommand,
  ModifyPrivateDnsNameOptionsCommand,
  ModifyReservedInstancesCommand,
  ModifySecurityGroupRulesCommand,
  ModifySnapshotAttributeCommand,
  ModifySnapshotTierCommand,
  ModifySpotFleetRequestCommand,
  ModifySubnetAttributeCommand,
  ModifyTrafficMirrorFilterNetworkServicesCommand,
  ModifyTrafficMirrorFilterRuleCommand,
  ModifyTrafficMirrorSessionCommand,
  ModifyTransitGatewayCommand,
  ModifyTransitGatewayPrefixListReferenceCommand,
  ModifyTransitGatewayVpcAttachmentCommand,
  ModifyVerifiedAccessEndpointCommand,
  ModifyVerifiedAccessEndpointPolicyCommand,
  ModifyVerifiedAccessGroupCommand,
  ModifyVerifiedAccessGroupPolicyCommand,
  ModifyVerifiedAccessInstanceCommand,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
  ModifyVerifiedAccessTrustProviderCommand,
  ModifyVolumeCommand,
  ModifyVolumeAttributeCommand,
  ModifyVpcAttributeCommand,
  ModifyVpcEndpointCommand,
  ModifyVpcEndpointConnectionNotificationCommand,
  ModifyVpcEndpointServiceConfigurationCommand,
  ModifyVpcEndpointServicePayerResponsibilityCommand,
  ModifyVpcEndpointServicePermissionsCommand,
  ModifyVpcPeeringConnectionOptionsCommand,
  ModifyVpcTenancyCommand,
  ModifyVpnConnectionCommand,
  ModifyVpnConnectionOptionsCommand,
  ModifyVpnTunnelCertificateCommand,
  ModifyVpnTunnelOptionsCommand,
  MonitorInstancesCommand,
  MoveAddressToVpcCommand,
  MoveByoipCidrToIpamCommand,
  ProvisionByoipCidrCommand,
  ProvisionIpamByoasnCommand,
  ProvisionIpamPoolCidrCommand,
  ProvisionPublicIpv4PoolCidrCommand,
  PurchaseCapacityBlockCommand,
  PurchaseHostReservationCommand,
  PurchaseReservedInstancesOfferingCommand,
  PurchaseScheduledInstancesCommand,
  RebootInstancesCommand,
  RegisterImageCommand,
  RegisterInstanceEventNotificationAttributesCommand,
  RegisterTransitGatewayMulticastGroupMembersCommand,
  RegisterTransitGatewayMulticastGroupSourcesCommand,
  RejectTransitGatewayMulticastDomainAssociationsCommand,
  RejectTransitGatewayPeeringAttachmentCommand,
  RejectTransitGatewayVpcAttachmentCommand,
  RejectVpcEndpointConnectionsCommand,
  RejectVpcPeeringConnectionCommand,
  ReleaseAddressCommand,
  ReleaseHostsCommand,
  ReleaseIpamPoolAllocationCommand,
  ReplaceIamInstanceProfileAssociationCommand,
  ReplaceNetworkAclAssociationCommand,
  ReplaceNetworkAclEntryCommand,
  ReplaceRouteCommand,
  ReplaceRouteTableAssociationCommand,
  ReplaceTransitGatewayRouteCommand,
  ReplaceVpnTunnelCommand,
  ReportInstanceStatusCommand,
  RequestSpotFleetCommand,
  RequestSpotInstancesCommand,
  ResetAddressAttributeCommand,
  ResetEbsDefaultKmsKeyIdCommand,
  ResetFpgaImageAttributeCommand,
  ResetImageAttributeCommand,
  ResetInstanceAttributeCommand,
  ResetNetworkInterfaceAttributeCommand,
  ResetSnapshotAttributeCommand,
  RestoreAddressToClassicCommand,
  RestoreImageFromRecycleBinCommand,
  RestoreManagedPrefixListVersionCommand,
  RestoreSnapshotFromRecycleBinCommand,
  RestoreSnapshotTierCommand,
  RevokeClientVpnIngressCommand,
  RevokeSecurityGroupEgressCommand,
  RevokeSecurityGroupIngressCommand,
  RunInstancesCommand,
  RunScheduledInstancesCommand,
  SearchLocalGatewayRoutesCommand,
  SearchTransitGatewayMulticastGroupsCommand,
  SearchTransitGatewayRoutesCommand,
  SendDiagnosticInterruptCommand,
  StartInstancesCommand,
  StartNetworkInsightsAccessScopeAnalysisCommand,
  StartNetworkInsightsAnalysisCommand,
  StartVpcEndpointServicePrivateDnsVerificationCommand,
  StopInstancesCommand,
  TerminateClientVpnConnectionsCommand,
  TerminateInstancesCommand,
  UnassignIpv6AddressesCommand,
  UnassignPrivateIpAddressesCommand,
  UnassignPrivateNatGatewayAddressCommand,
  UnlockSnapshotCommand,
  UnmonitorInstancesCommand,
  UpdateSecurityGroupRuleDescriptionsEgressCommand,
  UpdateSecurityGroupRuleDescriptionsIngressCommand,
  WithdrawByoipCidrCommand,
  type AcceptAddressTransferRequest,
  type AcceptAddressTransferResult,
  type AcceptReservedInstancesExchangeQuoteRequest,
  type AcceptReservedInstancesExchangeQuoteResult,
  type AcceptTransitGatewayMulticastDomainAssociationsRequest,
  type AcceptTransitGatewayMulticastDomainAssociationsResult,
  type AcceptTransitGatewayPeeringAttachmentRequest,
  type AcceptTransitGatewayPeeringAttachmentResult,
  type AcceptTransitGatewayVpcAttachmentRequest,
  type AcceptTransitGatewayVpcAttachmentResult,
  type AcceptVpcEndpointConnectionsRequest,
  type AcceptVpcEndpointConnectionsResult,
  type AcceptVpcPeeringConnectionRequest,
  type AcceptVpcPeeringConnectionResult,
  type AdvertiseByoipCidrRequest,
  type AdvertiseByoipCidrResult,
  type AllocateAddressRequest,
  type AllocateAddressResult,
  type AllocateHostsRequest,
  type AllocateHostsResult,
  type AllocateIpamPoolCidrRequest,
  type AllocateIpamPoolCidrResult,
  type ApplySecurityGroupsToClientVpnTargetNetworkRequest,
  type ApplySecurityGroupsToClientVpnTargetNetworkResult,
  type AssignIpv6AddressesRequest,
  type AssignIpv6AddressesResult,
  type AssignPrivateIpAddressesRequest,
  type AssignPrivateIpAddressesResult,
  type AssignPrivateNatGatewayAddressRequest,
  type AssignPrivateNatGatewayAddressResult,
  type AssociateAddressRequest,
  type AssociateAddressResult,
  type AssociateClientVpnTargetNetworkRequest,
  type AssociateClientVpnTargetNetworkResult,
  type AssociateDhcpOptionsRequest,
  type AssociateEnclaveCertificateIamRoleRequest,
  type AssociateEnclaveCertificateIamRoleResult,
  type AssociateIamInstanceProfileRequest,
  type AssociateIamInstanceProfileResult,
  type AssociateInstanceEventWindowRequest,
  type AssociateInstanceEventWindowResult,
  type AssociateIpamByoasnRequest,
  type AssociateIpamByoasnResult,
  type AssociateIpamResourceDiscoveryRequest,
  type AssociateIpamResourceDiscoveryResult,
  type AssociateNatGatewayAddressRequest,
  type AssociateNatGatewayAddressResult,
  type AssociateRouteTableRequest,
  type AssociateRouteTableResult,
  type AssociateSubnetCidrBlockRequest,
  type AssociateSubnetCidrBlockResult,
  type AssociateTransitGatewayMulticastDomainRequest,
  type AssociateTransitGatewayMulticastDomainResult,
  type AssociateTransitGatewayPolicyTableRequest,
  type AssociateTransitGatewayPolicyTableResult,
  type AssociateTransitGatewayRouteTableRequest,
  type AssociateTransitGatewayRouteTableResult,
  type AssociateTrunkInterfaceRequest,
  type AssociateTrunkInterfaceResult,
  type AssociateVpcCidrBlockRequest,
  type AssociateVpcCidrBlockResult,
  type AttachClassicLinkVpcRequest,
  type AttachClassicLinkVpcResult,
  type AttachInternetGatewayRequest,
  type AttachNetworkInterfaceRequest,
  type AttachNetworkInterfaceResult,
  type AttachVerifiedAccessTrustProviderRequest,
  type AttachVerifiedAccessTrustProviderResult,
  type AttachVolumeRequest,
  type VolumeAttachment,
  type AttachVpnGatewayRequest,
  type AttachVpnGatewayResult,
  type AuthorizeClientVpnIngressRequest,
  type AuthorizeClientVpnIngressResult,
  type AuthorizeSecurityGroupEgressRequest,
  type AuthorizeSecurityGroupEgressResult,
  type AuthorizeSecurityGroupIngressRequest,
  type AuthorizeSecurityGroupIngressResult,
  type BundleInstanceRequest,
  type BundleInstanceResult,
  type CancelBundleTaskRequest,
  type CancelBundleTaskResult,
  type CancelCapacityReservationRequest,
  type CancelCapacityReservationResult,
  type CancelCapacityReservationFleetsRequest,
  type CancelCapacityReservationFleetsResult,
  type CancelConversionRequest,
  type CancelExportTaskRequest,
  type CancelImageLaunchPermissionRequest,
  type CancelImageLaunchPermissionResult,
  type CancelImportTaskRequest,
  type CancelImportTaskResult,
  type CancelReservedInstancesListingRequest,
  type CancelReservedInstancesListingResult,
  type CancelSpotFleetRequestsRequest,
  type CancelSpotFleetRequestsResponse,
  type CancelSpotInstanceRequestsRequest,
  type CancelSpotInstanceRequestsResult,
  type ConfirmProductInstanceRequest,
  type ConfirmProductInstanceResult,
  type CopyFpgaImageRequest,
  type CopyFpgaImageResult,
  type CopyImageRequest,
  type CopyImageResult,
  type CopySnapshotRequest,
  type CopySnapshotResult,
  type CreateCapacityReservationRequest,
  type CreateCapacityReservationResult,
  type CreateCapacityReservationFleetRequest,
  type CreateCapacityReservationFleetResult,
  type CreateCarrierGatewayRequest,
  type CreateCarrierGatewayResult,
  type CreateClientVpnEndpointRequest,
  type CreateClientVpnEndpointResult,
  type CreateClientVpnRouteRequest,
  type CreateClientVpnRouteResult,
  type CreateCoipCidrRequest,
  type CreateCoipCidrResult,
  type CreateCoipPoolRequest,
  type CreateCoipPoolResult,
  type CreateCustomerGatewayRequest,
  type CreateCustomerGatewayResult,
  type CreateDefaultSubnetRequest,
  type CreateDefaultSubnetResult,
  type CreateDefaultVpcRequest,
  type CreateDefaultVpcResult,
  type CreateDhcpOptionsRequest,
  type CreateDhcpOptionsResult,
  type CreateEgressOnlyInternetGatewayRequest,
  type CreateEgressOnlyInternetGatewayResult,
  type CreateFleetRequest,
  type CreateFleetResult,
  type CreateFlowLogsRequest,
  type CreateFlowLogsResult,
  type CreateFpgaImageRequest,
  type CreateFpgaImageResult,
  type CreateImageRequest,
  type CreateImageResult,
  type CreateInstanceConnectEndpointRequest,
  type CreateInstanceConnectEndpointResult,
  type CreateInstanceEventWindowRequest,
  type CreateInstanceEventWindowResult,
  type CreateInstanceExportTaskRequest,
  type CreateInstanceExportTaskResult,
  type CreateInternetGatewayRequest,
  type CreateInternetGatewayResult,
  type CreateIpamRequest,
  type CreateIpamResult,
  type CreateIpamPoolRequest,
  type CreateIpamPoolResult,
  type CreateIpamResourceDiscoveryRequest,
  type CreateIpamResourceDiscoveryResult,
  type CreateIpamScopeRequest,
  type CreateIpamScopeResult,
  type CreateKeyPairRequest,
  type KeyPair,
  type CreateLaunchTemplateRequest,
  type CreateLaunchTemplateResult,
  type CreateLaunchTemplateVersionRequest,
  type CreateLaunchTemplateVersionResult,
  type CreateLocalGatewayRouteRequest,
  type CreateLocalGatewayRouteResult,
  type CreateLocalGatewayRouteTableRequest,
  type CreateLocalGatewayRouteTableResult,
  type CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
  type CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
  type CreateLocalGatewayRouteTableVpcAssociationRequest,
  type CreateLocalGatewayRouteTableVpcAssociationResult,
  type CreateManagedPrefixListRequest,
  type CreateManagedPrefixListResult,
  type CreateNatGatewayRequest,
  type CreateNatGatewayResult,
  type CreateNetworkAclRequest,
  type CreateNetworkAclResult,
  type CreateNetworkAclEntryRequest,
  type CreateNetworkInsightsAccessScopeRequest,
  type CreateNetworkInsightsAccessScopeResult,
  type CreateNetworkInsightsPathRequest,
  type CreateNetworkInsightsPathResult,
  type CreateNetworkInterfaceRequest,
  type CreateNetworkInterfaceResult,
  type CreateNetworkInterfacePermissionRequest,
  type CreateNetworkInterfacePermissionResult,
  type CreatePlacementGroupRequest,
  type CreatePlacementGroupResult,
  type CreatePublicIpv4PoolRequest,
  type CreatePublicIpv4PoolResult,
  type CreateReplaceRootVolumeTaskRequest,
  type CreateReplaceRootVolumeTaskResult,
  type CreateReservedInstancesListingRequest,
  type CreateReservedInstancesListingResult,
  type CreateRestoreImageTaskRequest,
  type CreateRestoreImageTaskResult,
  type CreateRouteRequest,
  type CreateRouteResult,
  type CreateRouteTableRequest,
  type CreateRouteTableResult,
  type CreateSecurityGroupRequest,
  type CreateSecurityGroupResult,
  type CreateSnapshotRequest,
  type Snapshot,
  type CreateSnapshotsRequest,
  type CreateSnapshotsResult,
  type CreateSpotDatafeedSubscriptionRequest,
  type CreateSpotDatafeedSubscriptionResult,
  type CreateStoreImageTaskRequest,
  type CreateStoreImageTaskResult,
  type CreateSubnetRequest,
  type CreateSubnetResult,
  type CreateSubnetCidrReservationRequest,
  type CreateSubnetCidrReservationResult,
  type CreateTagsRequest,
  type CreateTrafficMirrorFilterRequest,
  type CreateTrafficMirrorFilterResult,
  type CreateTrafficMirrorFilterRuleRequest,
  type CreateTrafficMirrorFilterRuleResult,
  type CreateTrafficMirrorSessionRequest,
  type CreateTrafficMirrorSessionResult,
  type CreateTrafficMirrorTargetRequest,
  type CreateTrafficMirrorTargetResult,
  type CreateTransitGatewayRequest,
  type CreateTransitGatewayResult,
  type CreateTransitGatewayConnectRequest,
  type CreateTransitGatewayConnectResult,
  type CreateTransitGatewayConnectPeerRequest,
  type CreateTransitGatewayConnectPeerResult,
  type CreateTransitGatewayMulticastDomainRequest,
  type CreateTransitGatewayMulticastDomainResult,
  type CreateTransitGatewayPeeringAttachmentRequest,
  type CreateTransitGatewayPeeringAttachmentResult,
  type CreateTransitGatewayPolicyTableRequest,
  type CreateTransitGatewayPolicyTableResult,
  type CreateTransitGatewayPrefixListReferenceRequest,
  type CreateTransitGatewayPrefixListReferenceResult,
  type CreateTransitGatewayRouteRequest,
  type CreateTransitGatewayRouteResult,
  type CreateTransitGatewayRouteTableRequest,
  type CreateTransitGatewayRouteTableResult,
  type CreateTransitGatewayRouteTableAnnouncementRequest,
  type CreateTransitGatewayRouteTableAnnouncementResult,
  type CreateTransitGatewayVpcAttachmentRequest,
  type CreateTransitGatewayVpcAttachmentResult,
  type CreateVerifiedAccessEndpointRequest,
  type CreateVerifiedAccessEndpointResult,
  type CreateVerifiedAccessGroupRequest,
  type CreateVerifiedAccessGroupResult,
  type CreateVerifiedAccessInstanceRequest,
  type CreateVerifiedAccessInstanceResult,
  type CreateVerifiedAccessTrustProviderRequest,
  type CreateVerifiedAccessTrustProviderResult,
  type CreateVolumeRequest,
  type Volume,
  type CreateVpcRequest,
  type CreateVpcResult,
  type CreateVpcEndpointRequest,
  type CreateVpcEndpointResult,
  type CreateVpcEndpointConnectionNotificationRequest,
  type CreateVpcEndpointConnectionNotificationResult,
  type CreateVpcEndpointServiceConfigurationRequest,
  type CreateVpcEndpointServiceConfigurationResult,
  type CreateVpcPeeringConnectionRequest,
  type CreateVpcPeeringConnectionResult,
  type CreateVpnConnectionRequest,
  type CreateVpnConnectionResult,
  type CreateVpnConnectionRouteRequest,
  type CreateVpnGatewayRequest,
  type CreateVpnGatewayResult,
  type DeleteCarrierGatewayRequest,
  type DeleteCarrierGatewayResult,
  type DeleteClientVpnEndpointRequest,
  type DeleteClientVpnEndpointResult,
  type DeleteClientVpnRouteRequest,
  type DeleteClientVpnRouteResult,
  type DeleteCoipCidrRequest,
  type DeleteCoipCidrResult,
  type DeleteCoipPoolRequest,
  type DeleteCoipPoolResult,
  type DeleteCustomerGatewayRequest,
  type DeleteDhcpOptionsRequest,
  type DeleteEgressOnlyInternetGatewayRequest,
  type DeleteEgressOnlyInternetGatewayResult,
  type DeleteFleetsRequest,
  type DeleteFleetsResult,
  type DeleteFlowLogsRequest,
  type DeleteFlowLogsResult,
  type DeleteFpgaImageRequest,
  type DeleteFpgaImageResult,
  type DeleteInstanceConnectEndpointRequest,
  type DeleteInstanceConnectEndpointResult,
  type DeleteInstanceEventWindowRequest,
  type DeleteInstanceEventWindowResult,
  type DeleteInternetGatewayRequest,
  type DeleteIpamRequest,
  type DeleteIpamResult,
  type DeleteIpamPoolRequest,
  type DeleteIpamPoolResult,
  type DeleteIpamResourceDiscoveryRequest,
  type DeleteIpamResourceDiscoveryResult,
  type DeleteIpamScopeRequest,
  type DeleteIpamScopeResult,
  type DeleteKeyPairRequest,
  type DeleteKeyPairResult,
  type DeleteLaunchTemplateRequest,
  type DeleteLaunchTemplateResult,
  type DeleteLaunchTemplateVersionsRequest,
  type DeleteLaunchTemplateVersionsResult,
  type DeleteLocalGatewayRouteRequest,
  type DeleteLocalGatewayRouteResult,
  type DeleteLocalGatewayRouteTableRequest,
  type DeleteLocalGatewayRouteTableResult,
  type DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
  type DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
  type DeleteLocalGatewayRouteTableVpcAssociationRequest,
  type DeleteLocalGatewayRouteTableVpcAssociationResult,
  type DeleteManagedPrefixListRequest,
  type DeleteManagedPrefixListResult,
  type DeleteNatGatewayRequest,
  type DeleteNatGatewayResult,
  type DeleteNetworkAclRequest,
  type DeleteNetworkAclEntryRequest,
  type DeleteNetworkInsightsAccessScopeRequest,
  type DeleteNetworkInsightsAccessScopeResult,
  type DeleteNetworkInsightsAccessScopeAnalysisRequest,
  type DeleteNetworkInsightsAccessScopeAnalysisResult,
  type DeleteNetworkInsightsAnalysisRequest,
  type DeleteNetworkInsightsAnalysisResult,
  type DeleteNetworkInsightsPathRequest,
  type DeleteNetworkInsightsPathResult,
  type DeleteNetworkInterfaceRequest,
  type DeleteNetworkInterfacePermissionRequest,
  type DeleteNetworkInterfacePermissionResult,
  type DeletePlacementGroupRequest,
  type DeletePublicIpv4PoolRequest,
  type DeletePublicIpv4PoolResult,
  type DeleteQueuedReservedInstancesRequest,
  type DeleteQueuedReservedInstancesResult,
  type DeleteRouteRequest,
  type DeleteRouteTableRequest,
  type DeleteSecurityGroupRequest,
  type DeleteSnapshotRequest,
  type DeleteSpotDatafeedSubscriptionRequest,
  type DeleteSubnetRequest,
  type DeleteSubnetCidrReservationRequest,
  type DeleteSubnetCidrReservationResult,
  type DeleteTagsRequest,
  type DeleteTrafficMirrorFilterRequest,
  type DeleteTrafficMirrorFilterResult,
  type DeleteTrafficMirrorFilterRuleRequest,
  type DeleteTrafficMirrorFilterRuleResult,
  type DeleteTrafficMirrorSessionRequest,
  type DeleteTrafficMirrorSessionResult,
  type DeleteTrafficMirrorTargetRequest,
  type DeleteTrafficMirrorTargetResult,
  type DeleteTransitGatewayRequest,
  type DeleteTransitGatewayResult,
  type DeleteTransitGatewayConnectRequest,
  type DeleteTransitGatewayConnectResult,
  type DeleteTransitGatewayConnectPeerRequest,
  type DeleteTransitGatewayConnectPeerResult,
  type DeleteTransitGatewayMulticastDomainRequest,
  type DeleteTransitGatewayMulticastDomainResult,
  type DeleteTransitGatewayPeeringAttachmentRequest,
  type DeleteTransitGatewayPeeringAttachmentResult,
  type DeleteTransitGatewayPolicyTableRequest,
  type DeleteTransitGatewayPolicyTableResult,
  type DeleteTransitGatewayPrefixListReferenceRequest,
  type DeleteTransitGatewayPrefixListReferenceResult,
  type DeleteTransitGatewayRouteRequest,
  type DeleteTransitGatewayRouteResult,
  type DeleteTransitGatewayRouteTableRequest,
  type DeleteTransitGatewayRouteTableResult,
  type DeleteTransitGatewayRouteTableAnnouncementRequest,
  type DeleteTransitGatewayRouteTableAnnouncementResult,
  type DeleteTransitGatewayVpcAttachmentRequest,
  type DeleteTransitGatewayVpcAttachmentResult,
  type DeleteVerifiedAccessEndpointRequest,
  type DeleteVerifiedAccessEndpointResult,
  type DeleteVerifiedAccessGroupRequest,
  type DeleteVerifiedAccessGroupResult,
  type DeleteVerifiedAccessInstanceRequest,
  type DeleteVerifiedAccessInstanceResult,
  type DeleteVerifiedAccessTrustProviderRequest,
  type DeleteVerifiedAccessTrustProviderResult,
  type DeleteVolumeRequest,
  type DeleteVpcRequest,
  type DeleteVpcEndpointConnectionNotificationsRequest,
  type DeleteVpcEndpointConnectionNotificationsResult,
  type DeleteVpcEndpointServiceConfigurationsRequest,
  type DeleteVpcEndpointServiceConfigurationsResult,
  type DeleteVpcEndpointsRequest,
  type DeleteVpcEndpointsResult,
  type DeleteVpcPeeringConnectionRequest,
  type DeleteVpcPeeringConnectionResult,
  type DeleteVpnConnectionRequest,
  type DeleteVpnConnectionRouteRequest,
  type DeleteVpnGatewayRequest,
  type DeprovisionByoipCidrRequest,
  type DeprovisionByoipCidrResult,
  type DeprovisionIpamByoasnRequest,
  type DeprovisionIpamByoasnResult,
  type DeprovisionIpamPoolCidrRequest,
  type DeprovisionIpamPoolCidrResult,
  type DeprovisionPublicIpv4PoolCidrRequest,
  type DeprovisionPublicIpv4PoolCidrResult,
  type DeregisterImageRequest,
  type DeregisterInstanceEventNotificationAttributesRequest,
  type DeregisterInstanceEventNotificationAttributesResult,
  type DeregisterTransitGatewayMulticastGroupMembersRequest,
  type DeregisterTransitGatewayMulticastGroupMembersResult,
  type DeregisterTransitGatewayMulticastGroupSourcesRequest,
  type DeregisterTransitGatewayMulticastGroupSourcesResult,
  type DescribeAccountAttributesRequest,
  type DescribeAccountAttributesResult,
  type DescribeAddressTransfersRequest,
  type DescribeAddressTransfersResult,
  type DescribeAddressesRequest,
  type DescribeAddressesResult,
  type DescribeAddressesAttributeRequest,
  type DescribeAddressesAttributeResult,
  type DescribeAggregateIdFormatRequest,
  type DescribeAggregateIdFormatResult,
  type DescribeAvailabilityZonesRequest,
  type DescribeAvailabilityZonesResult,
  type DescribeAwsNetworkPerformanceMetricSubscriptionsRequest,
  type DescribeAwsNetworkPerformanceMetricSubscriptionsResult,
  type DescribeBundleTasksRequest,
  type DescribeBundleTasksResult,
  type DescribeByoipCidrsRequest,
  type DescribeByoipCidrsResult,
  type DescribeCapacityBlockOfferingsRequest,
  type DescribeCapacityBlockOfferingsResult,
  type DescribeCapacityReservationFleetsRequest,
  type DescribeCapacityReservationFleetsResult,
  type DescribeCapacityReservationsRequest,
  type DescribeCapacityReservationsResult,
  type DescribeCarrierGatewaysRequest,
  type DescribeCarrierGatewaysResult,
  type DescribeClassicLinkInstancesRequest,
  type DescribeClassicLinkInstancesResult,
  type DescribeClientVpnAuthorizationRulesRequest,
  type DescribeClientVpnAuthorizationRulesResult,
  type DescribeClientVpnConnectionsRequest,
  type DescribeClientVpnConnectionsResult,
  type DescribeClientVpnEndpointsRequest,
  type DescribeClientVpnEndpointsResult,
  type DescribeClientVpnRoutesRequest,
  type DescribeClientVpnRoutesResult,
  type DescribeClientVpnTargetNetworksRequest,
  type DescribeClientVpnTargetNetworksResult,
  type DescribeCoipPoolsRequest,
  type DescribeCoipPoolsResult,
  type DescribeConversionTasksRequest,
  type DescribeConversionTasksResult,
  type DescribeCustomerGatewaysRequest,
  type DescribeCustomerGatewaysResult,
  type DescribeDhcpOptionsRequest,
  type DescribeDhcpOptionsResult,
  type DescribeEgressOnlyInternetGatewaysRequest,
  type DescribeEgressOnlyInternetGatewaysResult,
  type DescribeElasticGpusRequest,
  type DescribeElasticGpusResult,
  type DescribeExportImageTasksRequest,
  type DescribeExportImageTasksResult,
  type DescribeExportTasksRequest,
  type DescribeExportTasksResult,
  type DescribeFastLaunchImagesRequest,
  type DescribeFastLaunchImagesResult,
  type DescribeFastSnapshotRestoresRequest,
  type DescribeFastSnapshotRestoresResult,
  type DescribeFleetHistoryRequest,
  type DescribeFleetHistoryResult,
  type DescribeFleetInstancesRequest,
  type DescribeFleetInstancesResult,
  type DescribeFleetsRequest,
  type DescribeFleetsResult,
  type DescribeFlowLogsRequest,
  type DescribeFlowLogsResult,
  type DescribeFpgaImageAttributeRequest,
  type DescribeFpgaImageAttributeResult,
  type DescribeFpgaImagesRequest,
  type DescribeFpgaImagesResult,
  type DescribeHostReservationOfferingsRequest,
  type DescribeHostReservationOfferingsResult,
  type DescribeHostReservationsRequest,
  type DescribeHostReservationsResult,
  type DescribeHostsRequest,
  type DescribeHostsResult,
  type DescribeIamInstanceProfileAssociationsRequest,
  type DescribeIamInstanceProfileAssociationsResult,
  type DescribeIdFormatRequest,
  type DescribeIdFormatResult,
  type DescribeIdentityIdFormatRequest,
  type DescribeIdentityIdFormatResult,
  type DescribeImageAttributeRequest,
  type ImageAttribute,
  type DescribeImagesRequest,
  type DescribeImagesResult,
  type DescribeImportImageTasksRequest,
  type DescribeImportImageTasksResult,
  type DescribeImportSnapshotTasksRequest,
  type DescribeImportSnapshotTasksResult,
  type DescribeInstanceAttributeRequest,
  type InstanceAttribute,
  type DescribeInstanceConnectEndpointsRequest,
  type DescribeInstanceConnectEndpointsResult,
  type DescribeInstanceCreditSpecificationsRequest,
  type DescribeInstanceCreditSpecificationsResult,
  type DescribeInstanceEventNotificationAttributesRequest,
  type DescribeInstanceEventNotificationAttributesResult,
  type DescribeInstanceEventWindowsRequest,
  type DescribeInstanceEventWindowsResult,
  type DescribeInstanceStatusRequest,
  type DescribeInstanceStatusResult,
  type DescribeInstanceTopologyRequest,
  type DescribeInstanceTopologyResult,
  type DescribeInstanceTypeOfferingsRequest,
  type DescribeInstanceTypeOfferingsResult,
  type DescribeInstanceTypesRequest,
  type DescribeInstanceTypesResult,
  type DescribeInstancesRequest,
  type DescribeInstancesResult,
  type DescribeInternetGatewaysRequest,
  type DescribeInternetGatewaysResult,
  type DescribeIpamByoasnRequest,
  type DescribeIpamByoasnResult,
  type DescribeIpamPoolsRequest,
  type DescribeIpamPoolsResult,
  type DescribeIpamResourceDiscoveriesRequest,
  type DescribeIpamResourceDiscoveriesResult,
  type DescribeIpamResourceDiscoveryAssociationsRequest,
  type DescribeIpamResourceDiscoveryAssociationsResult,
  type DescribeIpamScopesRequest,
  type DescribeIpamScopesResult,
  type DescribeIpamsRequest,
  type DescribeIpamsResult,
  type DescribeIpv6PoolsRequest,
  type DescribeIpv6PoolsResult,
  type DescribeKeyPairsRequest,
  type DescribeKeyPairsResult,
  type DescribeLaunchTemplateVersionsRequest,
  type DescribeLaunchTemplateVersionsResult,
  type DescribeLaunchTemplatesRequest,
  type DescribeLaunchTemplatesResult,
  type DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest,
  type DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult,
  type DescribeLocalGatewayRouteTableVpcAssociationsRequest,
  type DescribeLocalGatewayRouteTableVpcAssociationsResult,
  type DescribeLocalGatewayRouteTablesRequest,
  type DescribeLocalGatewayRouteTablesResult,
  type DescribeLocalGatewayVirtualInterfaceGroupsRequest,
  type DescribeLocalGatewayVirtualInterfaceGroupsResult,
  type DescribeLocalGatewayVirtualInterfacesRequest,
  type DescribeLocalGatewayVirtualInterfacesResult,
  type DescribeLocalGatewaysRequest,
  type DescribeLocalGatewaysResult,
  type DescribeLockedSnapshotsRequest,
  type DescribeLockedSnapshotsResult,
  type DescribeMacHostsRequest,
  type DescribeMacHostsResult,
  type DescribeManagedPrefixListsRequest,
  type DescribeManagedPrefixListsResult,
  type DescribeMovingAddressesRequest,
  type DescribeMovingAddressesResult,
  type DescribeNatGatewaysRequest,
  type DescribeNatGatewaysResult,
  type DescribeNetworkAclsRequest,
  type DescribeNetworkAclsResult,
  type DescribeNetworkInsightsAccessScopeAnalysesRequest,
  type DescribeNetworkInsightsAccessScopeAnalysesResult,
  type DescribeNetworkInsightsAccessScopesRequest,
  type DescribeNetworkInsightsAccessScopesResult,
  type DescribeNetworkInsightsAnalysesRequest,
  type DescribeNetworkInsightsAnalysesResult,
  type DescribeNetworkInsightsPathsRequest,
  type DescribeNetworkInsightsPathsResult,
  type DescribeNetworkInterfaceAttributeRequest,
  type DescribeNetworkInterfaceAttributeResult,
  type DescribeNetworkInterfacePermissionsRequest,
  type DescribeNetworkInterfacePermissionsResult,
  type DescribeNetworkInterfacesRequest,
  type DescribeNetworkInterfacesResult,
  type DescribePlacementGroupsRequest,
  type DescribePlacementGroupsResult,
  type DescribePrefixListsRequest,
  type DescribePrefixListsResult,
  type DescribePrincipalIdFormatRequest,
  type DescribePrincipalIdFormatResult,
  type DescribePublicIpv4PoolsRequest,
  type DescribePublicIpv4PoolsResult,
  type DescribeRegionsRequest,
  type DescribeRegionsResult,
  type DescribeReplaceRootVolumeTasksRequest,
  type DescribeReplaceRootVolumeTasksResult,
  type DescribeReservedInstancesRequest,
  type DescribeReservedInstancesResult,
  type DescribeReservedInstancesListingsRequest,
  type DescribeReservedInstancesListingsResult,
  type DescribeReservedInstancesModificationsRequest,
  type DescribeReservedInstancesModificationsResult,
  type DescribeReservedInstancesOfferingsRequest,
  type DescribeReservedInstancesOfferingsResult,
  type DescribeRouteTablesRequest,
  type DescribeRouteTablesResult,
  type DescribeScheduledInstanceAvailabilityRequest,
  type DescribeScheduledInstanceAvailabilityResult,
  type DescribeScheduledInstancesRequest,
  type DescribeScheduledInstancesResult,
  type DescribeSecurityGroupReferencesRequest,
  type DescribeSecurityGroupReferencesResult,
  type DescribeSecurityGroupRulesRequest,
  type DescribeSecurityGroupRulesResult,
  type DescribeSecurityGroupsRequest,
  type DescribeSecurityGroupsResult,
  type DescribeSnapshotAttributeRequest,
  type DescribeSnapshotAttributeResult,
  type DescribeSnapshotTierStatusRequest,
  type DescribeSnapshotTierStatusResult,
  type DescribeSnapshotsRequest,
  type DescribeSnapshotsResult,
  type DescribeSpotDatafeedSubscriptionRequest,
  type DescribeSpotDatafeedSubscriptionResult,
  type DescribeSpotFleetInstancesRequest,
  type DescribeSpotFleetInstancesResponse,
  type DescribeSpotFleetRequestHistoryRequest,
  type DescribeSpotFleetRequestHistoryResponse,
  type DescribeSpotFleetRequestsRequest,
  type DescribeSpotFleetRequestsResponse,
  type DescribeSpotInstanceRequestsRequest,
  type DescribeSpotInstanceRequestsResult,
  type DescribeSpotPriceHistoryRequest,
  type DescribeSpotPriceHistoryResult,
  type DescribeStaleSecurityGroupsRequest,
  type DescribeStaleSecurityGroupsResult,
  type DescribeStoreImageTasksRequest,
  type DescribeStoreImageTasksResult,
  type DescribeSubnetsRequest,
  type DescribeSubnetsResult,
  type DescribeTagsRequest,
  type DescribeTagsResult,
  type DescribeTrafficMirrorFiltersRequest,
  type DescribeTrafficMirrorFiltersResult,
  type DescribeTrafficMirrorSessionsRequest,
  type DescribeTrafficMirrorSessionsResult,
  type DescribeTrafficMirrorTargetsRequest,
  type DescribeTrafficMirrorTargetsResult,
  type DescribeTransitGatewayAttachmentsRequest,
  type DescribeTransitGatewayAttachmentsResult,
  type DescribeTransitGatewayConnectPeersRequest,
  type DescribeTransitGatewayConnectPeersResult,
  type DescribeTransitGatewayConnectsRequest,
  type DescribeTransitGatewayConnectsResult,
  type DescribeTransitGatewayMulticastDomainsRequest,
  type DescribeTransitGatewayMulticastDomainsResult,
  type DescribeTransitGatewayPeeringAttachmentsRequest,
  type DescribeTransitGatewayPeeringAttachmentsResult,
  type DescribeTransitGatewayPolicyTablesRequest,
  type DescribeTransitGatewayPolicyTablesResult,
  type DescribeTransitGatewayRouteTableAnnouncementsRequest,
  type DescribeTransitGatewayRouteTableAnnouncementsResult,
  type DescribeTransitGatewayRouteTablesRequest,
  type DescribeTransitGatewayRouteTablesResult,
  type DescribeTransitGatewayVpcAttachmentsRequest,
  type DescribeTransitGatewayVpcAttachmentsResult,
  type DescribeTransitGatewaysRequest,
  type DescribeTransitGatewaysResult,
  type DescribeTrunkInterfaceAssociationsRequest,
  type DescribeTrunkInterfaceAssociationsResult,
  type DescribeVerifiedAccessEndpointsRequest,
  type DescribeVerifiedAccessEndpointsResult,
  type DescribeVerifiedAccessGroupsRequest,
  type DescribeVerifiedAccessGroupsResult,
  type DescribeVerifiedAccessInstanceLoggingConfigurationsRequest,
  type DescribeVerifiedAccessInstanceLoggingConfigurationsResult,
  type DescribeVerifiedAccessInstancesRequest,
  type DescribeVerifiedAccessInstancesResult,
  type DescribeVerifiedAccessTrustProvidersRequest,
  type DescribeVerifiedAccessTrustProvidersResult,
  type DescribeVolumeAttributeRequest,
  type DescribeVolumeAttributeResult,
  type DescribeVolumeStatusRequest,
  type DescribeVolumeStatusResult,
  type DescribeVolumesRequest,
  type DescribeVolumesResult,
  type DescribeVolumesModificationsRequest,
  type DescribeVolumesModificationsResult,
  type DescribeVpcAttributeRequest,
  type DescribeVpcAttributeResult,
  type DescribeVpcClassicLinkRequest,
  type DescribeVpcClassicLinkResult,
  type DescribeVpcClassicLinkDnsSupportRequest,
  type DescribeVpcClassicLinkDnsSupportResult,
  type DescribeVpcEndpointConnectionNotificationsRequest,
  type DescribeVpcEndpointConnectionNotificationsResult,
  type DescribeVpcEndpointConnectionsRequest,
  type DescribeVpcEndpointConnectionsResult,
  type DescribeVpcEndpointServiceConfigurationsRequest,
  type DescribeVpcEndpointServiceConfigurationsResult,
  type DescribeVpcEndpointServicePermissionsRequest,
  type DescribeVpcEndpointServicePermissionsResult,
  type DescribeVpcEndpointServicesRequest,
  type DescribeVpcEndpointServicesResult,
  type DescribeVpcEndpointsRequest,
  type DescribeVpcEndpointsResult,
  type DescribeVpcPeeringConnectionsRequest,
  type DescribeVpcPeeringConnectionsResult,
  type DescribeVpcsRequest,
  type DescribeVpcsResult,
  type DescribeVpnConnectionsRequest,
  type DescribeVpnConnectionsResult,
  type DescribeVpnGatewaysRequest,
  type DescribeVpnGatewaysResult,
  type DetachClassicLinkVpcRequest,
  type DetachClassicLinkVpcResult,
  type DetachInternetGatewayRequest,
  type DetachNetworkInterfaceRequest,
  type DetachVerifiedAccessTrustProviderRequest,
  type DetachVerifiedAccessTrustProviderResult,
  type DetachVolumeRequest,
  type DetachVpnGatewayRequest,
  type DisableAddressTransferRequest,
  type DisableAddressTransferResult,
  type DisableAwsNetworkPerformanceMetricSubscriptionRequest,
  type DisableAwsNetworkPerformanceMetricSubscriptionResult,
  type DisableEbsEncryptionByDefaultRequest,
  type DisableEbsEncryptionByDefaultResult,
  type DisableFastLaunchRequest,
  type DisableFastLaunchResult,
  type DisableFastSnapshotRestoresRequest,
  type DisableFastSnapshotRestoresResult,
  type DisableImageRequest,
  type DisableImageResult,
  type DisableImageBlockPublicAccessRequest,
  type DisableImageBlockPublicAccessResult,
  type DisableImageDeprecationRequest,
  type DisableImageDeprecationResult,
  type DisableIpamOrganizationAdminAccountRequest,
  type DisableIpamOrganizationAdminAccountResult,
  type DisableSerialConsoleAccessRequest,
  type DisableSerialConsoleAccessResult,
  type DisableSnapshotBlockPublicAccessRequest,
  type DisableSnapshotBlockPublicAccessResult,
  type DisableTransitGatewayRouteTablePropagationRequest,
  type DisableTransitGatewayRouteTablePropagationResult,
  type DisableVgwRoutePropagationRequest,
  type DisableVpcClassicLinkRequest,
  type DisableVpcClassicLinkResult,
  type DisableVpcClassicLinkDnsSupportRequest,
  type DisableVpcClassicLinkDnsSupportResult,
  type DisassociateAddressRequest,
  type DisassociateClientVpnTargetNetworkRequest,
  type DisassociateClientVpnTargetNetworkResult,
  type DisassociateEnclaveCertificateIamRoleRequest,
  type DisassociateEnclaveCertificateIamRoleResult,
  type DisassociateIamInstanceProfileRequest,
  type DisassociateIamInstanceProfileResult,
  type DisassociateInstanceEventWindowRequest,
  type DisassociateInstanceEventWindowResult,
  type DisassociateIpamByoasnRequest,
  type DisassociateIpamByoasnResult,
  type DisassociateIpamResourceDiscoveryRequest,
  type DisassociateIpamResourceDiscoveryResult,
  type DisassociateNatGatewayAddressRequest,
  type DisassociateNatGatewayAddressResult,
  type DisassociateRouteTableRequest,
  type DisassociateSubnetCidrBlockRequest,
  type DisassociateSubnetCidrBlockResult,
  type DisassociateTransitGatewayMulticastDomainRequest,
  type DisassociateTransitGatewayMulticastDomainResult,
  type DisassociateTransitGatewayPolicyTableRequest,
  type DisassociateTransitGatewayPolicyTableResult,
  type DisassociateTransitGatewayRouteTableRequest,
  type DisassociateTransitGatewayRouteTableResult,
  type DisassociateTrunkInterfaceRequest,
  type DisassociateTrunkInterfaceResult,
  type DisassociateVpcCidrBlockRequest,
  type DisassociateVpcCidrBlockResult,
  type EnableAddressTransferRequest,
  type EnableAddressTransferResult,
  type EnableAwsNetworkPerformanceMetricSubscriptionRequest,
  type EnableAwsNetworkPerformanceMetricSubscriptionResult,
  type EnableEbsEncryptionByDefaultRequest,
  type EnableEbsEncryptionByDefaultResult,
  type EnableFastLaunchRequest,
  type EnableFastLaunchResult,
  type EnableFastSnapshotRestoresRequest,
  type EnableFastSnapshotRestoresResult,
  type EnableImageRequest,
  type EnableImageResult,
  type EnableImageBlockPublicAccessRequest,
  type EnableImageBlockPublicAccessResult,
  type EnableImageDeprecationRequest,
  type EnableImageDeprecationResult,
  type EnableIpamOrganizationAdminAccountRequest,
  type EnableIpamOrganizationAdminAccountResult,
  type EnableReachabilityAnalyzerOrganizationSharingRequest,
  type EnableReachabilityAnalyzerOrganizationSharingResult,
  type EnableSerialConsoleAccessRequest,
  type EnableSerialConsoleAccessResult,
  type EnableSnapshotBlockPublicAccessRequest,
  type EnableSnapshotBlockPublicAccessResult,
  type EnableTransitGatewayRouteTablePropagationRequest,
  type EnableTransitGatewayRouteTablePropagationResult,
  type EnableVgwRoutePropagationRequest,
  type EnableVolumeIORequest,
  type EnableVpcClassicLinkRequest,
  type EnableVpcClassicLinkResult,
  type EnableVpcClassicLinkDnsSupportRequest,
  type EnableVpcClassicLinkDnsSupportResult,
  type ExportClientVpnClientCertificateRevocationListRequest,
  type ExportClientVpnClientCertificateRevocationListResult,
  type ExportClientVpnClientConfigurationRequest,
  type ExportClientVpnClientConfigurationResult,
  type ExportImageRequest,
  type ExportImageResult,
  type ExportTransitGatewayRoutesRequest,
  type ExportTransitGatewayRoutesResult,
  type GetAssociatedEnclaveCertificateIamRolesRequest,
  type GetAssociatedEnclaveCertificateIamRolesResult,
  type GetAssociatedIpv6PoolCidrsRequest,
  type GetAssociatedIpv6PoolCidrsResult,
  type GetAwsNetworkPerformanceDataRequest,
  type GetAwsNetworkPerformanceDataResult,
  type GetCapacityReservationUsageRequest,
  type GetCapacityReservationUsageResult,
  type GetCoipPoolUsageRequest,
  type GetCoipPoolUsageResult,
  type GetConsoleOutputRequest,
  type GetConsoleOutputResult,
  type GetConsoleScreenshotRequest,
  type GetConsoleScreenshotResult,
  type GetDefaultCreditSpecificationRequest,
  type GetDefaultCreditSpecificationResult,
  type GetEbsDefaultKmsKeyIdRequest,
  type GetEbsDefaultKmsKeyIdResult,
  type GetEbsEncryptionByDefaultRequest,
  type GetEbsEncryptionByDefaultResult,
  type GetFlowLogsIntegrationTemplateRequest,
  type GetFlowLogsIntegrationTemplateResult,
  type GetGroupsForCapacityReservationRequest,
  type GetGroupsForCapacityReservationResult,
  type GetHostReservationPurchasePreviewRequest,
  type GetHostReservationPurchasePreviewResult,
  type GetImageBlockPublicAccessStateRequest,
  type GetImageBlockPublicAccessStateResult,
  type GetInstanceMetadataDefaultsRequest,
  type GetInstanceMetadataDefaultsResult,
  type GetInstanceTypesFromInstanceRequirementsRequest,
  type GetInstanceTypesFromInstanceRequirementsResult,
  type GetInstanceUefiDataRequest,
  type GetInstanceUefiDataResult,
  type GetIpamAddressHistoryRequest,
  type GetIpamAddressHistoryResult,
  type GetIpamDiscoveredAccountsRequest,
  type GetIpamDiscoveredAccountsResult,
  type GetIpamDiscoveredPublicAddressesRequest,
  type GetIpamDiscoveredPublicAddressesResult,
  type GetIpamDiscoveredResourceCidrsRequest,
  type GetIpamDiscoveredResourceCidrsResult,
  type GetIpamPoolAllocationsRequest,
  type GetIpamPoolAllocationsResult,
  type GetIpamPoolCidrsRequest,
  type GetIpamPoolCidrsResult,
  type GetIpamResourceCidrsRequest,
  type GetIpamResourceCidrsResult,
  type GetLaunchTemplateDataRequest,
  type GetLaunchTemplateDataResult,
  type GetManagedPrefixListAssociationsRequest,
  type GetManagedPrefixListAssociationsResult,
  type GetManagedPrefixListEntriesRequest,
  type GetManagedPrefixListEntriesResult,
  type GetNetworkInsightsAccessScopeAnalysisFindingsRequest,
  type GetNetworkInsightsAccessScopeAnalysisFindingsResult,
  type GetNetworkInsightsAccessScopeContentRequest,
  type GetNetworkInsightsAccessScopeContentResult,
  type GetPasswordDataRequest,
  type GetPasswordDataResult,
  type GetReservedInstancesExchangeQuoteRequest,
  type GetReservedInstancesExchangeQuoteResult,
  type GetSecurityGroupsForVpcRequest,
  type GetSecurityGroupsForVpcResult,
  type GetSerialConsoleAccessStatusRequest,
  type GetSerialConsoleAccessStatusResult,
  type GetSnapshotBlockPublicAccessStateRequest,
  type GetSnapshotBlockPublicAccessStateResult,
  type GetSpotPlacementScoresRequest,
  type GetSpotPlacementScoresResult,
  type GetSubnetCidrReservationsRequest,
  type GetSubnetCidrReservationsResult,
  type GetTransitGatewayAttachmentPropagationsRequest,
  type GetTransitGatewayAttachmentPropagationsResult,
  type GetTransitGatewayMulticastDomainAssociationsRequest,
  type GetTransitGatewayMulticastDomainAssociationsResult,
  type GetTransitGatewayPolicyTableAssociationsRequest,
  type GetTransitGatewayPolicyTableAssociationsResult,
  type GetTransitGatewayPolicyTableEntriesRequest,
  type GetTransitGatewayPolicyTableEntriesResult,
  type GetTransitGatewayPrefixListReferencesRequest,
  type GetTransitGatewayPrefixListReferencesResult,
  type GetTransitGatewayRouteTableAssociationsRequest,
  type GetTransitGatewayRouteTableAssociationsResult,
  type GetTransitGatewayRouteTablePropagationsRequest,
  type GetTransitGatewayRouteTablePropagationsResult,
  type GetVerifiedAccessEndpointPolicyRequest,
  type GetVerifiedAccessEndpointPolicyResult,
  type GetVerifiedAccessGroupPolicyRequest,
  type GetVerifiedAccessGroupPolicyResult,
  type GetVpnConnectionDeviceSampleConfigurationRequest,
  type GetVpnConnectionDeviceSampleConfigurationResult,
  type GetVpnConnectionDeviceTypesRequest,
  type GetVpnConnectionDeviceTypesResult,
  type GetVpnTunnelReplacementStatusRequest,
  type GetVpnTunnelReplacementStatusResult,
  type ImportClientVpnClientCertificateRevocationListRequest,
  type ImportClientVpnClientCertificateRevocationListResult,
  type ImportImageRequest,
  type ImportImageResult,
  type ImportInstanceRequest,
  type ImportInstanceResult,
  type ImportKeyPairRequest,
  type ImportKeyPairResult,
  type ImportSnapshotRequest,
  type ImportSnapshotResult,
  type ImportVolumeRequest,
  type ImportVolumeResult,
  type ListImagesInRecycleBinRequest,
  type ListImagesInRecycleBinResult,
  type ListSnapshotsInRecycleBinRequest,
  type ListSnapshotsInRecycleBinResult,
  type LockSnapshotRequest,
  type LockSnapshotResult,
  type ModifyAddressAttributeRequest,
  type ModifyAddressAttributeResult,
  type ModifyAvailabilityZoneGroupRequest,
  type ModifyAvailabilityZoneGroupResult,
  type ModifyCapacityReservationRequest,
  type ModifyCapacityReservationResult,
  type ModifyCapacityReservationFleetRequest,
  type ModifyCapacityReservationFleetResult,
  type ModifyClientVpnEndpointRequest,
  type ModifyClientVpnEndpointResult,
  type ModifyDefaultCreditSpecificationRequest,
  type ModifyDefaultCreditSpecificationResult,
  type ModifyEbsDefaultKmsKeyIdRequest,
  type ModifyEbsDefaultKmsKeyIdResult,
  type ModifyFleetRequest,
  type ModifyFleetResult,
  type ModifyFpgaImageAttributeRequest,
  type ModifyFpgaImageAttributeResult,
  type ModifyHostsRequest,
  type ModifyHostsResult,
  type ModifyIdFormatRequest,
  type ModifyIdentityIdFormatRequest,
  type ModifyImageAttributeRequest,
  type ModifyInstanceAttributeRequest,
  type ModifyInstanceCapacityReservationAttributesRequest,
  type ModifyInstanceCapacityReservationAttributesResult,
  type ModifyInstanceCreditSpecificationRequest,
  type ModifyInstanceCreditSpecificationResult,
  type ModifyInstanceEventStartTimeRequest,
  type ModifyInstanceEventStartTimeResult,
  type ModifyInstanceEventWindowRequest,
  type ModifyInstanceEventWindowResult,
  type ModifyInstanceMaintenanceOptionsRequest,
  type ModifyInstanceMaintenanceOptionsResult,
  type ModifyInstanceMetadataDefaultsRequest,
  type ModifyInstanceMetadataDefaultsResult,
  type ModifyInstanceMetadataOptionsRequest,
  type ModifyInstanceMetadataOptionsResult,
  type ModifyInstancePlacementRequest,
  type ModifyInstancePlacementResult,
  type ModifyIpamRequest,
  type ModifyIpamResult,
  type ModifyIpamPoolRequest,
  type ModifyIpamPoolResult,
  type ModifyIpamResourceCidrRequest,
  type ModifyIpamResourceCidrResult,
  type ModifyIpamResourceDiscoveryRequest,
  type ModifyIpamResourceDiscoveryResult,
  type ModifyIpamScopeRequest,
  type ModifyIpamScopeResult,
  type ModifyLaunchTemplateRequest,
  type ModifyLaunchTemplateResult,
  type ModifyLocalGatewayRouteRequest,
  type ModifyLocalGatewayRouteResult,
  type ModifyManagedPrefixListRequest,
  type ModifyManagedPrefixListResult,
  type ModifyNetworkInterfaceAttributeRequest,
  type ModifyPrivateDnsNameOptionsRequest,
  type ModifyPrivateDnsNameOptionsResult,
  type ModifyReservedInstancesRequest,
  type ModifyReservedInstancesResult,
  type ModifySecurityGroupRulesRequest,
  type ModifySecurityGroupRulesResult,
  type ModifySnapshotAttributeRequest,
  type ModifySnapshotTierRequest,
  type ModifySnapshotTierResult,
  type ModifySpotFleetRequestRequest,
  type ModifySpotFleetRequestResponse,
  type ModifySubnetAttributeRequest,
  type ModifyTrafficMirrorFilterNetworkServicesRequest,
  type ModifyTrafficMirrorFilterNetworkServicesResult,
  type ModifyTrafficMirrorFilterRuleRequest,
  type ModifyTrafficMirrorFilterRuleResult,
  type ModifyTrafficMirrorSessionRequest,
  type ModifyTrafficMirrorSessionResult,
  type ModifyTransitGatewayRequest,
  type ModifyTransitGatewayResult,
  type ModifyTransitGatewayPrefixListReferenceRequest,
  type ModifyTransitGatewayPrefixListReferenceResult,
  type ModifyTransitGatewayVpcAttachmentRequest,
  type ModifyTransitGatewayVpcAttachmentResult,
  type ModifyVerifiedAccessEndpointRequest,
  type ModifyVerifiedAccessEndpointResult,
  type ModifyVerifiedAccessEndpointPolicyRequest,
  type ModifyVerifiedAccessEndpointPolicyResult,
  type ModifyVerifiedAccessGroupRequest,
  type ModifyVerifiedAccessGroupResult,
  type ModifyVerifiedAccessGroupPolicyRequest,
  type ModifyVerifiedAccessGroupPolicyResult,
  type ModifyVerifiedAccessInstanceRequest,
  type ModifyVerifiedAccessInstanceResult,
  type ModifyVerifiedAccessInstanceLoggingConfigurationRequest,
  type ModifyVerifiedAccessInstanceLoggingConfigurationResult,
  type ModifyVerifiedAccessTrustProviderRequest,
  type ModifyVerifiedAccessTrustProviderResult,
  type ModifyVolumeRequest,
  type ModifyVolumeResult,
  type ModifyVolumeAttributeRequest,
  type ModifyVpcAttributeRequest,
  type ModifyVpcEndpointRequest,
  type ModifyVpcEndpointResult,
  type ModifyVpcEndpointConnectionNotificationRequest,
  type ModifyVpcEndpointConnectionNotificationResult,
  type ModifyVpcEndpointServiceConfigurationRequest,
  type ModifyVpcEndpointServiceConfigurationResult,
  type ModifyVpcEndpointServicePayerResponsibilityRequest,
  type ModifyVpcEndpointServicePayerResponsibilityResult,
  type ModifyVpcEndpointServicePermissionsRequest,
  type ModifyVpcEndpointServicePermissionsResult,
  type ModifyVpcPeeringConnectionOptionsRequest,
  type ModifyVpcPeeringConnectionOptionsResult,
  type ModifyVpcTenancyRequest,
  type ModifyVpcTenancyResult,
  type ModifyVpnConnectionRequest,
  type ModifyVpnConnectionResult,
  type ModifyVpnConnectionOptionsRequest,
  type ModifyVpnConnectionOptionsResult,
  type ModifyVpnTunnelCertificateRequest,
  type ModifyVpnTunnelCertificateResult,
  type ModifyVpnTunnelOptionsRequest,
  type ModifyVpnTunnelOptionsResult,
  type MonitorInstancesRequest,
  type MonitorInstancesResult,
  type MoveAddressToVpcRequest,
  type MoveAddressToVpcResult,
  type MoveByoipCidrToIpamRequest,
  type MoveByoipCidrToIpamResult,
  type ProvisionByoipCidrRequest,
  type ProvisionByoipCidrResult,
  type ProvisionIpamByoasnRequest,
  type ProvisionIpamByoasnResult,
  type ProvisionIpamPoolCidrRequest,
  type ProvisionIpamPoolCidrResult,
  type ProvisionPublicIpv4PoolCidrRequest,
  type ProvisionPublicIpv4PoolCidrResult,
  type PurchaseCapacityBlockRequest,
  type PurchaseCapacityBlockResult,
  type PurchaseHostReservationRequest,
  type PurchaseHostReservationResult,
  type PurchaseReservedInstancesOfferingRequest,
  type PurchaseReservedInstancesOfferingResult,
  type PurchaseScheduledInstancesRequest,
  type PurchaseScheduledInstancesResult,
  type RebootInstancesRequest,
  type RegisterImageRequest,
  type RegisterImageResult,
  type RegisterInstanceEventNotificationAttributesRequest,
  type RegisterInstanceEventNotificationAttributesResult,
  type RegisterTransitGatewayMulticastGroupMembersRequest,
  type RegisterTransitGatewayMulticastGroupMembersResult,
  type RegisterTransitGatewayMulticastGroupSourcesRequest,
  type RegisterTransitGatewayMulticastGroupSourcesResult,
  type RejectTransitGatewayMulticastDomainAssociationsRequest,
  type RejectTransitGatewayMulticastDomainAssociationsResult,
  type RejectTransitGatewayPeeringAttachmentRequest,
  type RejectTransitGatewayPeeringAttachmentResult,
  type RejectTransitGatewayVpcAttachmentRequest,
  type RejectTransitGatewayVpcAttachmentResult,
  type RejectVpcEndpointConnectionsRequest,
  type RejectVpcEndpointConnectionsResult,
  type RejectVpcPeeringConnectionRequest,
  type RejectVpcPeeringConnectionResult,
  type ReleaseAddressRequest,
  type ReleaseHostsRequest,
  type ReleaseHostsResult,
  type ReleaseIpamPoolAllocationRequest,
  type ReleaseIpamPoolAllocationResult,
  type ReplaceIamInstanceProfileAssociationRequest,
  type ReplaceIamInstanceProfileAssociationResult,
  type ReplaceNetworkAclAssociationRequest,
  type ReplaceNetworkAclAssociationResult,
  type ReplaceNetworkAclEntryRequest,
  type ReplaceRouteRequest,
  type ReplaceRouteTableAssociationRequest,
  type ReplaceRouteTableAssociationResult,
  type ReplaceTransitGatewayRouteRequest,
  type ReplaceTransitGatewayRouteResult,
  type ReplaceVpnTunnelRequest,
  type ReplaceVpnTunnelResult,
  type ReportInstanceStatusRequest,
  type RequestSpotFleetRequest,
  type RequestSpotFleetResponse,
  type RequestSpotInstancesRequest,
  type RequestSpotInstancesResult,
  type ResetAddressAttributeRequest,
  type ResetAddressAttributeResult,
  type ResetEbsDefaultKmsKeyIdRequest,
  type ResetEbsDefaultKmsKeyIdResult,
  type ResetFpgaImageAttributeRequest,
  type ResetFpgaImageAttributeResult,
  type ResetImageAttributeRequest,
  type ResetInstanceAttributeRequest,
  type ResetNetworkInterfaceAttributeRequest,
  type ResetSnapshotAttributeRequest,
  type RestoreAddressToClassicRequest,
  type RestoreAddressToClassicResult,
  type RestoreImageFromRecycleBinRequest,
  type RestoreImageFromRecycleBinResult,
  type RestoreManagedPrefixListVersionRequest,
  type RestoreManagedPrefixListVersionResult,
  type RestoreSnapshotFromRecycleBinRequest,
  type RestoreSnapshotFromRecycleBinResult,
  type RestoreSnapshotTierRequest,
  type RestoreSnapshotTierResult,
  type RevokeClientVpnIngressRequest,
  type RevokeClientVpnIngressResult,
  type RevokeSecurityGroupEgressRequest,
  type RevokeSecurityGroupEgressResult,
  type RevokeSecurityGroupIngressRequest,
  type RevokeSecurityGroupIngressResult,
  type RunInstancesRequest,
  type Reservation,
  type RunScheduledInstancesRequest,
  type RunScheduledInstancesResult,
  type SearchLocalGatewayRoutesRequest,
  type SearchLocalGatewayRoutesResult,
  type SearchTransitGatewayMulticastGroupsRequest,
  type SearchTransitGatewayMulticastGroupsResult,
  type SearchTransitGatewayRoutesRequest,
  type SearchTransitGatewayRoutesResult,
  type SendDiagnosticInterruptRequest,
  type StartInstancesRequest,
  type StartInstancesResult,
  type StartNetworkInsightsAccessScopeAnalysisRequest,
  type StartNetworkInsightsAccessScopeAnalysisResult,
  type StartNetworkInsightsAnalysisRequest,
  type StartNetworkInsightsAnalysisResult,
  type StartVpcEndpointServicePrivateDnsVerificationRequest,
  type StartVpcEndpointServicePrivateDnsVerificationResult,
  type StopInstancesRequest,
  type StopInstancesResult,
  type TerminateClientVpnConnectionsRequest,
  type TerminateClientVpnConnectionsResult,
  type TerminateInstancesRequest,
  type TerminateInstancesResult,
  type UnassignIpv6AddressesRequest,
  type UnassignIpv6AddressesResult,
  type UnassignPrivateIpAddressesRequest,
  type UnassignPrivateNatGatewayAddressRequest,
  type UnassignPrivateNatGatewayAddressResult,
  type UnlockSnapshotRequest,
  type UnlockSnapshotResult,
  type UnmonitorInstancesRequest,
  type UnmonitorInstancesResult,
  type UpdateSecurityGroupRuleDescriptionsEgressRequest,
  type UpdateSecurityGroupRuleDescriptionsEgressResult,
  type UpdateSecurityGroupRuleDescriptionsIngressRequest,
  type UpdateSecurityGroupRuleDescriptionsIngressResult,
  type WithdrawByoipCidrRequest,
  type WithdrawByoipCidrResult,
} from "@aws-sdk/client-ec2";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import { EC2ClientInstance, EC2ClientInstanceLayer } from "./EC2ClientInstance";
import { DefaultEC2ClientConfigLayer } from "./EC2ClientInstanceConfig";
import { type TaggedException, SdkError } from "./Errors";

const commands = {
  AcceptAddressTransferCommand,
  AcceptReservedInstancesExchangeQuoteCommand,
  AcceptTransitGatewayMulticastDomainAssociationsCommand,
  AcceptTransitGatewayPeeringAttachmentCommand,
  AcceptTransitGatewayVpcAttachmentCommand,
  AcceptVpcEndpointConnectionsCommand,
  AcceptVpcPeeringConnectionCommand,
  AdvertiseByoipCidrCommand,
  AllocateAddressCommand,
  AllocateHostsCommand,
  AllocateIpamPoolCidrCommand,
  ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  AssignIpv6AddressesCommand,
  AssignPrivateIpAddressesCommand,
  AssignPrivateNatGatewayAddressCommand,
  AssociateAddressCommand,
  AssociateClientVpnTargetNetworkCommand,
  AssociateDhcpOptionsCommand,
  AssociateEnclaveCertificateIamRoleCommand,
  AssociateIamInstanceProfileCommand,
  AssociateInstanceEventWindowCommand,
  AssociateIpamByoasnCommand,
  AssociateIpamResourceDiscoveryCommand,
  AssociateNatGatewayAddressCommand,
  AssociateRouteTableCommand,
  AssociateSubnetCidrBlockCommand,
  AssociateTransitGatewayMulticastDomainCommand,
  AssociateTransitGatewayPolicyTableCommand,
  AssociateTransitGatewayRouteTableCommand,
  AssociateTrunkInterfaceCommand,
  AssociateVpcCidrBlockCommand,
  AttachClassicLinkVpcCommand,
  AttachInternetGatewayCommand,
  AttachNetworkInterfaceCommand,
  AttachVerifiedAccessTrustProviderCommand,
  AttachVolumeCommand,
  AttachVpnGatewayCommand,
  AuthorizeClientVpnIngressCommand,
  AuthorizeSecurityGroupEgressCommand,
  AuthorizeSecurityGroupIngressCommand,
  BundleInstanceCommand,
  CancelBundleTaskCommand,
  CancelCapacityReservationCommand,
  CancelCapacityReservationFleetsCommand,
  CancelConversionTaskCommand,
  CancelExportTaskCommand,
  CancelImageLaunchPermissionCommand,
  CancelImportTaskCommand,
  CancelReservedInstancesListingCommand,
  CancelSpotFleetRequestsCommand,
  CancelSpotInstanceRequestsCommand,
  ConfirmProductInstanceCommand,
  CopyFpgaImageCommand,
  CopyImageCommand,
  CopySnapshotCommand,
  CreateCapacityReservationCommand,
  CreateCapacityReservationFleetCommand,
  CreateCarrierGatewayCommand,
  CreateClientVpnEndpointCommand,
  CreateClientVpnRouteCommand,
  CreateCoipCidrCommand,
  CreateCoipPoolCommand,
  CreateCustomerGatewayCommand,
  CreateDefaultSubnetCommand,
  CreateDefaultVpcCommand,
  CreateDhcpOptionsCommand,
  CreateEgressOnlyInternetGatewayCommand,
  CreateFleetCommand,
  CreateFlowLogsCommand,
  CreateFpgaImageCommand,
  CreateImageCommand,
  CreateInstanceConnectEndpointCommand,
  CreateInstanceEventWindowCommand,
  CreateInstanceExportTaskCommand,
  CreateInternetGatewayCommand,
  CreateIpamCommand,
  CreateIpamPoolCommand,
  CreateIpamResourceDiscoveryCommand,
  CreateIpamScopeCommand,
  CreateKeyPairCommand,
  CreateLaunchTemplateCommand,
  CreateLaunchTemplateVersionCommand,
  CreateLocalGatewayRouteCommand,
  CreateLocalGatewayRouteTableCommand,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  CreateLocalGatewayRouteTableVpcAssociationCommand,
  CreateManagedPrefixListCommand,
  CreateNatGatewayCommand,
  CreateNetworkAclCommand,
  CreateNetworkAclEntryCommand,
  CreateNetworkInsightsAccessScopeCommand,
  CreateNetworkInsightsPathCommand,
  CreateNetworkInterfaceCommand,
  CreateNetworkInterfacePermissionCommand,
  CreatePlacementGroupCommand,
  CreatePublicIpv4PoolCommand,
  CreateReplaceRootVolumeTaskCommand,
  CreateReservedInstancesListingCommand,
  CreateRestoreImageTaskCommand,
  CreateRouteCommand,
  CreateRouteTableCommand,
  CreateSecurityGroupCommand,
  CreateSnapshotCommand,
  CreateSnapshotsCommand,
  CreateSpotDatafeedSubscriptionCommand,
  CreateStoreImageTaskCommand,
  CreateSubnetCommand,
  CreateSubnetCidrReservationCommand,
  CreateTagsCommand,
  CreateTrafficMirrorFilterCommand,
  CreateTrafficMirrorFilterRuleCommand,
  CreateTrafficMirrorSessionCommand,
  CreateTrafficMirrorTargetCommand,
  CreateTransitGatewayCommand,
  CreateTransitGatewayConnectCommand,
  CreateTransitGatewayConnectPeerCommand,
  CreateTransitGatewayMulticastDomainCommand,
  CreateTransitGatewayPeeringAttachmentCommand,
  CreateTransitGatewayPolicyTableCommand,
  CreateTransitGatewayPrefixListReferenceCommand,
  CreateTransitGatewayRouteCommand,
  CreateTransitGatewayRouteTableCommand,
  CreateTransitGatewayRouteTableAnnouncementCommand,
  CreateTransitGatewayVpcAttachmentCommand,
  CreateVerifiedAccessEndpointCommand,
  CreateVerifiedAccessGroupCommand,
  CreateVerifiedAccessInstanceCommand,
  CreateVerifiedAccessTrustProviderCommand,
  CreateVolumeCommand,
  CreateVpcCommand,
  CreateVpcEndpointCommand,
  CreateVpcEndpointConnectionNotificationCommand,
  CreateVpcEndpointServiceConfigurationCommand,
  CreateVpcPeeringConnectionCommand,
  CreateVpnConnectionCommand,
  CreateVpnConnectionRouteCommand,
  CreateVpnGatewayCommand,
  DeleteCarrierGatewayCommand,
  DeleteClientVpnEndpointCommand,
  DeleteClientVpnRouteCommand,
  DeleteCoipCidrCommand,
  DeleteCoipPoolCommand,
  DeleteCustomerGatewayCommand,
  DeleteDhcpOptionsCommand,
  DeleteEgressOnlyInternetGatewayCommand,
  DeleteFleetsCommand,
  DeleteFlowLogsCommand,
  DeleteFpgaImageCommand,
  DeleteInstanceConnectEndpointCommand,
  DeleteInstanceEventWindowCommand,
  DeleteInternetGatewayCommand,
  DeleteIpamCommand,
  DeleteIpamPoolCommand,
  DeleteIpamResourceDiscoveryCommand,
  DeleteIpamScopeCommand,
  DeleteKeyPairCommand,
  DeleteLaunchTemplateCommand,
  DeleteLaunchTemplateVersionsCommand,
  DeleteLocalGatewayRouteCommand,
  DeleteLocalGatewayRouteTableCommand,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  DeleteLocalGatewayRouteTableVpcAssociationCommand,
  DeleteManagedPrefixListCommand,
  DeleteNatGatewayCommand,
  DeleteNetworkAclCommand,
  DeleteNetworkAclEntryCommand,
  DeleteNetworkInsightsAccessScopeCommand,
  DeleteNetworkInsightsAccessScopeAnalysisCommand,
  DeleteNetworkInsightsAnalysisCommand,
  DeleteNetworkInsightsPathCommand,
  DeleteNetworkInterfaceCommand,
  DeleteNetworkInterfacePermissionCommand,
  DeletePlacementGroupCommand,
  DeletePublicIpv4PoolCommand,
  DeleteQueuedReservedInstancesCommand,
  DeleteRouteCommand,
  DeleteRouteTableCommand,
  DeleteSecurityGroupCommand,
  DeleteSnapshotCommand,
  DeleteSpotDatafeedSubscriptionCommand,
  DeleteSubnetCommand,
  DeleteSubnetCidrReservationCommand,
  DeleteTagsCommand,
  DeleteTrafficMirrorFilterCommand,
  DeleteTrafficMirrorFilterRuleCommand,
  DeleteTrafficMirrorSessionCommand,
  DeleteTrafficMirrorTargetCommand,
  DeleteTransitGatewayCommand,
  DeleteTransitGatewayConnectCommand,
  DeleteTransitGatewayConnectPeerCommand,
  DeleteTransitGatewayMulticastDomainCommand,
  DeleteTransitGatewayPeeringAttachmentCommand,
  DeleteTransitGatewayPolicyTableCommand,
  DeleteTransitGatewayPrefixListReferenceCommand,
  DeleteTransitGatewayRouteCommand,
  DeleteTransitGatewayRouteTableCommand,
  DeleteTransitGatewayRouteTableAnnouncementCommand,
  DeleteTransitGatewayVpcAttachmentCommand,
  DeleteVerifiedAccessEndpointCommand,
  DeleteVerifiedAccessGroupCommand,
  DeleteVerifiedAccessInstanceCommand,
  DeleteVerifiedAccessTrustProviderCommand,
  DeleteVolumeCommand,
  DeleteVpcCommand,
  DeleteVpcEndpointConnectionNotificationsCommand,
  DeleteVpcEndpointServiceConfigurationsCommand,
  DeleteVpcEndpointsCommand,
  DeleteVpcPeeringConnectionCommand,
  DeleteVpnConnectionCommand,
  DeleteVpnConnectionRouteCommand,
  DeleteVpnGatewayCommand,
  DeprovisionByoipCidrCommand,
  DeprovisionIpamByoasnCommand,
  DeprovisionIpamPoolCidrCommand,
  DeprovisionPublicIpv4PoolCidrCommand,
  DeregisterImageCommand,
  DeregisterInstanceEventNotificationAttributesCommand,
  DeregisterTransitGatewayMulticastGroupMembersCommand,
  DeregisterTransitGatewayMulticastGroupSourcesCommand,
  DescribeAccountAttributesCommand,
  DescribeAddressTransfersCommand,
  DescribeAddressesCommand,
  DescribeAddressesAttributeCommand,
  DescribeAggregateIdFormatCommand,
  DescribeAvailabilityZonesCommand,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  DescribeBundleTasksCommand,
  DescribeByoipCidrsCommand,
  DescribeCapacityBlockOfferingsCommand,
  DescribeCapacityReservationFleetsCommand,
  DescribeCapacityReservationsCommand,
  DescribeCarrierGatewaysCommand,
  DescribeClassicLinkInstancesCommand,
  DescribeClientVpnAuthorizationRulesCommand,
  DescribeClientVpnConnectionsCommand,
  DescribeClientVpnEndpointsCommand,
  DescribeClientVpnRoutesCommand,
  DescribeClientVpnTargetNetworksCommand,
  DescribeCoipPoolsCommand,
  DescribeConversionTasksCommand,
  DescribeCustomerGatewaysCommand,
  DescribeDhcpOptionsCommand,
  DescribeEgressOnlyInternetGatewaysCommand,
  DescribeElasticGpusCommand,
  DescribeExportImageTasksCommand,
  DescribeExportTasksCommand,
  DescribeFastLaunchImagesCommand,
  DescribeFastSnapshotRestoresCommand,
  DescribeFleetHistoryCommand,
  DescribeFleetInstancesCommand,
  DescribeFleetsCommand,
  DescribeFlowLogsCommand,
  DescribeFpgaImageAttributeCommand,
  DescribeFpgaImagesCommand,
  DescribeHostReservationOfferingsCommand,
  DescribeHostReservationsCommand,
  DescribeHostsCommand,
  DescribeIamInstanceProfileAssociationsCommand,
  DescribeIdFormatCommand,
  DescribeIdentityIdFormatCommand,
  DescribeImageAttributeCommand,
  DescribeImagesCommand,
  DescribeImportImageTasksCommand,
  DescribeImportSnapshotTasksCommand,
  DescribeInstanceAttributeCommand,
  DescribeInstanceConnectEndpointsCommand,
  DescribeInstanceCreditSpecificationsCommand,
  DescribeInstanceEventNotificationAttributesCommand,
  DescribeInstanceEventWindowsCommand,
  DescribeInstanceStatusCommand,
  DescribeInstanceTopologyCommand,
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypesCommand,
  DescribeInstancesCommand,
  DescribeInternetGatewaysCommand,
  DescribeIpamByoasnCommand,
  DescribeIpamPoolsCommand,
  DescribeIpamResourceDiscoveriesCommand,
  DescribeIpamResourceDiscoveryAssociationsCommand,
  DescribeIpamScopesCommand,
  DescribeIpamsCommand,
  DescribeIpv6PoolsCommand,
  DescribeKeyPairsCommand,
  DescribeLaunchTemplateVersionsCommand,
  DescribeLaunchTemplatesCommand,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  DescribeLocalGatewayVirtualInterfacesCommand,
  DescribeLocalGatewaysCommand,
  DescribeLockedSnapshotsCommand,
  DescribeMacHostsCommand,
  DescribeManagedPrefixListsCommand,
  DescribeMovingAddressesCommand,
  DescribeNatGatewaysCommand,
  DescribeNetworkAclsCommand,
  DescribeNetworkInsightsAccessScopeAnalysesCommand,
  DescribeNetworkInsightsAccessScopesCommand,
  DescribeNetworkInsightsAnalysesCommand,
  DescribeNetworkInsightsPathsCommand,
  DescribeNetworkInterfaceAttributeCommand,
  DescribeNetworkInterfacePermissionsCommand,
  DescribeNetworkInterfacesCommand,
  DescribePlacementGroupsCommand,
  DescribePrefixListsCommand,
  DescribePrincipalIdFormatCommand,
  DescribePublicIpv4PoolsCommand,
  DescribeRegionsCommand,
  DescribeReplaceRootVolumeTasksCommand,
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesListingsCommand,
  DescribeReservedInstancesModificationsCommand,
  DescribeReservedInstancesOfferingsCommand,
  DescribeRouteTablesCommand,
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstancesCommand,
  DescribeSecurityGroupReferencesCommand,
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupsCommand,
  DescribeSnapshotAttributeCommand,
  DescribeSnapshotTierStatusCommand,
  DescribeSnapshotsCommand,
  DescribeSpotDatafeedSubscriptionCommand,
  DescribeSpotFleetInstancesCommand,
  DescribeSpotFleetRequestHistoryCommand,
  DescribeSpotFleetRequestsCommand,
  DescribeSpotInstanceRequestsCommand,
  DescribeSpotPriceHistoryCommand,
  DescribeStaleSecurityGroupsCommand,
  DescribeStoreImageTasksCommand,
  DescribeSubnetsCommand,
  DescribeTagsCommand,
  DescribeTrafficMirrorFiltersCommand,
  DescribeTrafficMirrorSessionsCommand,
  DescribeTrafficMirrorTargetsCommand,
  DescribeTransitGatewayAttachmentsCommand,
  DescribeTransitGatewayConnectPeersCommand,
  DescribeTransitGatewayConnectsCommand,
  DescribeTransitGatewayMulticastDomainsCommand,
  DescribeTransitGatewayPeeringAttachmentsCommand,
  DescribeTransitGatewayPolicyTablesCommand,
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  DescribeTransitGatewayRouteTablesCommand,
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTransitGatewaysCommand,
  DescribeTrunkInterfaceAssociationsCommand,
  DescribeVerifiedAccessEndpointsCommand,
  DescribeVerifiedAccessGroupsCommand,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  DescribeVerifiedAccessInstancesCommand,
  DescribeVerifiedAccessTrustProvidersCommand,
  DescribeVolumeAttributeCommand,
  DescribeVolumeStatusCommand,
  DescribeVolumesCommand,
  DescribeVolumesModificationsCommand,
  DescribeVpcAttributeCommand,
  DescribeVpcClassicLinkCommand,
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServicePermissionsCommand,
  DescribeVpcEndpointServicesCommand,
  DescribeVpcEndpointsCommand,
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcsCommand,
  DescribeVpnConnectionsCommand,
  DescribeVpnGatewaysCommand,
  DetachClassicLinkVpcCommand,
  DetachInternetGatewayCommand,
  DetachNetworkInterfaceCommand,
  DetachVerifiedAccessTrustProviderCommand,
  DetachVolumeCommand,
  DetachVpnGatewayCommand,
  DisableAddressTransferCommand,
  DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  DisableEbsEncryptionByDefaultCommand,
  DisableFastLaunchCommand,
  DisableFastSnapshotRestoresCommand,
  DisableImageCommand,
  DisableImageBlockPublicAccessCommand,
  DisableImageDeprecationCommand,
  DisableIpamOrganizationAdminAccountCommand,
  DisableSerialConsoleAccessCommand,
  DisableSnapshotBlockPublicAccessCommand,
  DisableTransitGatewayRouteTablePropagationCommand,
  DisableVgwRoutePropagationCommand,
  DisableVpcClassicLinkCommand,
  DisableVpcClassicLinkDnsSupportCommand,
  DisassociateAddressCommand,
  DisassociateClientVpnTargetNetworkCommand,
  DisassociateEnclaveCertificateIamRoleCommand,
  DisassociateIamInstanceProfileCommand,
  DisassociateInstanceEventWindowCommand,
  DisassociateIpamByoasnCommand,
  DisassociateIpamResourceDiscoveryCommand,
  DisassociateNatGatewayAddressCommand,
  DisassociateRouteTableCommand,
  DisassociateSubnetCidrBlockCommand,
  DisassociateTransitGatewayMulticastDomainCommand,
  DisassociateTransitGatewayPolicyTableCommand,
  DisassociateTransitGatewayRouteTableCommand,
  DisassociateTrunkInterfaceCommand,
  DisassociateVpcCidrBlockCommand,
  EnableAddressTransferCommand,
  EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  EnableEbsEncryptionByDefaultCommand,
  EnableFastLaunchCommand,
  EnableFastSnapshotRestoresCommand,
  EnableImageCommand,
  EnableImageBlockPublicAccessCommand,
  EnableImageDeprecationCommand,
  EnableIpamOrganizationAdminAccountCommand,
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  EnableSerialConsoleAccessCommand,
  EnableSnapshotBlockPublicAccessCommand,
  EnableTransitGatewayRouteTablePropagationCommand,
  EnableVgwRoutePropagationCommand,
  EnableVolumeIOCommand,
  EnableVpcClassicLinkCommand,
  EnableVpcClassicLinkDnsSupportCommand,
  ExportClientVpnClientCertificateRevocationListCommand,
  ExportClientVpnClientConfigurationCommand,
  ExportImageCommand,
  ExportTransitGatewayRoutesCommand,
  GetAssociatedEnclaveCertificateIamRolesCommand,
  GetAssociatedIpv6PoolCidrsCommand,
  GetAwsNetworkPerformanceDataCommand,
  GetCapacityReservationUsageCommand,
  GetCoipPoolUsageCommand,
  GetConsoleOutputCommand,
  GetConsoleScreenshotCommand,
  GetDefaultCreditSpecificationCommand,
  GetEbsDefaultKmsKeyIdCommand,
  GetEbsEncryptionByDefaultCommand,
  GetFlowLogsIntegrationTemplateCommand,
  GetGroupsForCapacityReservationCommand,
  GetHostReservationPurchasePreviewCommand,
  GetImageBlockPublicAccessStateCommand,
  GetInstanceMetadataDefaultsCommand,
  GetInstanceTypesFromInstanceRequirementsCommand,
  GetInstanceUefiDataCommand,
  GetIpamAddressHistoryCommand,
  GetIpamDiscoveredAccountsCommand,
  GetIpamDiscoveredPublicAddressesCommand,
  GetIpamDiscoveredResourceCidrsCommand,
  GetIpamPoolAllocationsCommand,
  GetIpamPoolCidrsCommand,
  GetIpamResourceCidrsCommand,
  GetLaunchTemplateDataCommand,
  GetManagedPrefixListAssociationsCommand,
  GetManagedPrefixListEntriesCommand,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  GetNetworkInsightsAccessScopeContentCommand,
  GetPasswordDataCommand,
  GetReservedInstancesExchangeQuoteCommand,
  GetSecurityGroupsForVpcCommand,
  GetSerialConsoleAccessStatusCommand,
  GetSnapshotBlockPublicAccessStateCommand,
  GetSpotPlacementScoresCommand,
  GetSubnetCidrReservationsCommand,
  GetTransitGatewayAttachmentPropagationsCommand,
  GetTransitGatewayMulticastDomainAssociationsCommand,
  GetTransitGatewayPolicyTableAssociationsCommand,
  GetTransitGatewayPolicyTableEntriesCommand,
  GetTransitGatewayPrefixListReferencesCommand,
  GetTransitGatewayRouteTableAssociationsCommand,
  GetTransitGatewayRouteTablePropagationsCommand,
  GetVerifiedAccessEndpointPolicyCommand,
  GetVerifiedAccessGroupPolicyCommand,
  GetVpnConnectionDeviceSampleConfigurationCommand,
  GetVpnConnectionDeviceTypesCommand,
  GetVpnTunnelReplacementStatusCommand,
  ImportClientVpnClientCertificateRevocationListCommand,
  ImportImageCommand,
  ImportInstanceCommand,
  ImportKeyPairCommand,
  ImportSnapshotCommand,
  ImportVolumeCommand,
  ListImagesInRecycleBinCommand,
  ListSnapshotsInRecycleBinCommand,
  LockSnapshotCommand,
  ModifyAddressAttributeCommand,
  ModifyAvailabilityZoneGroupCommand,
  ModifyCapacityReservationCommand,
  ModifyCapacityReservationFleetCommand,
  ModifyClientVpnEndpointCommand,
  ModifyDefaultCreditSpecificationCommand,
  ModifyEbsDefaultKmsKeyIdCommand,
  ModifyFleetCommand,
  ModifyFpgaImageAttributeCommand,
  ModifyHostsCommand,
  ModifyIdFormatCommand,
  ModifyIdentityIdFormatCommand,
  ModifyImageAttributeCommand,
  ModifyInstanceAttributeCommand,
  ModifyInstanceCapacityReservationAttributesCommand,
  ModifyInstanceCreditSpecificationCommand,
  ModifyInstanceEventStartTimeCommand,
  ModifyInstanceEventWindowCommand,
  ModifyInstanceMaintenanceOptionsCommand,
  ModifyInstanceMetadataDefaultsCommand,
  ModifyInstanceMetadataOptionsCommand,
  ModifyInstancePlacementCommand,
  ModifyIpamCommand,
  ModifyIpamPoolCommand,
  ModifyIpamResourceCidrCommand,
  ModifyIpamResourceDiscoveryCommand,
  ModifyIpamScopeCommand,
  ModifyLaunchTemplateCommand,
  ModifyLocalGatewayRouteCommand,
  ModifyManagedPrefixListCommand,
  ModifyNetworkInterfaceAttributeCommand,
  ModifyPrivateDnsNameOptionsCommand,
  ModifyReservedInstancesCommand,
  ModifySecurityGroupRulesCommand,
  ModifySnapshotAttributeCommand,
  ModifySnapshotTierCommand,
  ModifySpotFleetRequestCommand,
  ModifySubnetAttributeCommand,
  ModifyTrafficMirrorFilterNetworkServicesCommand,
  ModifyTrafficMirrorFilterRuleCommand,
  ModifyTrafficMirrorSessionCommand,
  ModifyTransitGatewayCommand,
  ModifyTransitGatewayPrefixListReferenceCommand,
  ModifyTransitGatewayVpcAttachmentCommand,
  ModifyVerifiedAccessEndpointCommand,
  ModifyVerifiedAccessEndpointPolicyCommand,
  ModifyVerifiedAccessGroupCommand,
  ModifyVerifiedAccessGroupPolicyCommand,
  ModifyVerifiedAccessInstanceCommand,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
  ModifyVerifiedAccessTrustProviderCommand,
  ModifyVolumeCommand,
  ModifyVolumeAttributeCommand,
  ModifyVpcAttributeCommand,
  ModifyVpcEndpointCommand,
  ModifyVpcEndpointConnectionNotificationCommand,
  ModifyVpcEndpointServiceConfigurationCommand,
  ModifyVpcEndpointServicePayerResponsibilityCommand,
  ModifyVpcEndpointServicePermissionsCommand,
  ModifyVpcPeeringConnectionOptionsCommand,
  ModifyVpcTenancyCommand,
  ModifyVpnConnectionCommand,
  ModifyVpnConnectionOptionsCommand,
  ModifyVpnTunnelCertificateCommand,
  ModifyVpnTunnelOptionsCommand,
  MonitorInstancesCommand,
  MoveAddressToVpcCommand,
  MoveByoipCidrToIpamCommand,
  ProvisionByoipCidrCommand,
  ProvisionIpamByoasnCommand,
  ProvisionIpamPoolCidrCommand,
  ProvisionPublicIpv4PoolCidrCommand,
  PurchaseCapacityBlockCommand,
  PurchaseHostReservationCommand,
  PurchaseReservedInstancesOfferingCommand,
  PurchaseScheduledInstancesCommand,
  RebootInstancesCommand,
  RegisterImageCommand,
  RegisterInstanceEventNotificationAttributesCommand,
  RegisterTransitGatewayMulticastGroupMembersCommand,
  RegisterTransitGatewayMulticastGroupSourcesCommand,
  RejectTransitGatewayMulticastDomainAssociationsCommand,
  RejectTransitGatewayPeeringAttachmentCommand,
  RejectTransitGatewayVpcAttachmentCommand,
  RejectVpcEndpointConnectionsCommand,
  RejectVpcPeeringConnectionCommand,
  ReleaseAddressCommand,
  ReleaseHostsCommand,
  ReleaseIpamPoolAllocationCommand,
  ReplaceIamInstanceProfileAssociationCommand,
  ReplaceNetworkAclAssociationCommand,
  ReplaceNetworkAclEntryCommand,
  ReplaceRouteCommand,
  ReplaceRouteTableAssociationCommand,
  ReplaceTransitGatewayRouteCommand,
  ReplaceVpnTunnelCommand,
  ReportInstanceStatusCommand,
  RequestSpotFleetCommand,
  RequestSpotInstancesCommand,
  ResetAddressAttributeCommand,
  ResetEbsDefaultKmsKeyIdCommand,
  ResetFpgaImageAttributeCommand,
  ResetImageAttributeCommand,
  ResetInstanceAttributeCommand,
  ResetNetworkInterfaceAttributeCommand,
  ResetSnapshotAttributeCommand,
  RestoreAddressToClassicCommand,
  RestoreImageFromRecycleBinCommand,
  RestoreManagedPrefixListVersionCommand,
  RestoreSnapshotFromRecycleBinCommand,
  RestoreSnapshotTierCommand,
  RevokeClientVpnIngressCommand,
  RevokeSecurityGroupEgressCommand,
  RevokeSecurityGroupIngressCommand,
  RunInstancesCommand,
  RunScheduledInstancesCommand,
  SearchLocalGatewayRoutesCommand,
  SearchTransitGatewayMulticastGroupsCommand,
  SearchTransitGatewayRoutesCommand,
  SendDiagnosticInterruptCommand,
  StartInstancesCommand,
  StartNetworkInsightsAccessScopeAnalysisCommand,
  StartNetworkInsightsAnalysisCommand,
  StartVpcEndpointServicePrivateDnsVerificationCommand,
  StopInstancesCommand,
  TerminateClientVpnConnectionsCommand,
  TerminateInstancesCommand,
  UnassignIpv6AddressesCommand,
  UnassignPrivateIpAddressesCommand,
  UnassignPrivateNatGatewayAddressCommand,
  UnlockSnapshotCommand,
  UnmonitorInstancesCommand,
  UpdateSecurityGroupRuleDescriptionsEgressCommand,
  UpdateSecurityGroupRuleDescriptionsIngressCommand,
  WithdrawByoipCidrCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface EC2Service {
  readonly _: unique symbol;

  /**
   * @see {@link AcceptAddressTransferCommand}
   */
  acceptAddressTransfer(
    args: AcceptAddressTransferRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AcceptAddressTransferResult, SdkError>;

  /**
   * @see {@link AcceptReservedInstancesExchangeQuoteCommand}
   */
  acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AcceptReservedInstancesExchangeQuoteResult, SdkError>;

  /**
   * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommand}
   */
  acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AcceptTransitGatewayMulticastDomainAssociationsResult,
    SdkError
  >;

  /**
   * @see {@link AcceptTransitGatewayPeeringAttachmentCommand}
   */
  acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AcceptTransitGatewayPeeringAttachmentResult, SdkError>;

  /**
   * @see {@link AcceptTransitGatewayVpcAttachmentCommand}
   */
  acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AcceptTransitGatewayVpcAttachmentResult, SdkError>;

  /**
   * @see {@link AcceptVpcEndpointConnectionsCommand}
   */
  acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AcceptVpcEndpointConnectionsResult, SdkError>;

  /**
   * @see {@link AcceptVpcPeeringConnectionCommand}
   */
  acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AcceptVpcPeeringConnectionResult, SdkError>;

  /**
   * @see {@link AdvertiseByoipCidrCommand}
   */
  advertiseByoipCidr(
    args: AdvertiseByoipCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AdvertiseByoipCidrResult, SdkError>;

  /**
   * @see {@link AllocateAddressCommand}
   */
  allocateAddress(
    args: AllocateAddressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AllocateAddressResult, SdkError>;

  /**
   * @see {@link AllocateHostsCommand}
   */
  allocateHosts(
    args: AllocateHostsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AllocateHostsResult, SdkError>;

  /**
   * @see {@link AllocateIpamPoolCidrCommand}
   */
  allocateIpamPoolCidr(
    args: AllocateIpamPoolCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AllocateIpamPoolCidrResult, SdkError>;

  /**
   * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommand}
   */
  applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ApplySecurityGroupsToClientVpnTargetNetworkResult, SdkError>;

  /**
   * @see {@link AssignIpv6AddressesCommand}
   */
  assignIpv6Addresses(
    args: AssignIpv6AddressesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssignIpv6AddressesResult, SdkError>;

  /**
   * @see {@link AssignPrivateIpAddressesCommand}
   */
  assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssignPrivateIpAddressesResult, SdkError>;

  /**
   * @see {@link AssignPrivateNatGatewayAddressCommand}
   */
  assignPrivateNatGatewayAddress(
    args: AssignPrivateNatGatewayAddressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssignPrivateNatGatewayAddressResult, SdkError>;

  /**
   * @see {@link AssociateAddressCommand}
   */
  associateAddress(
    args: AssociateAddressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateAddressResult, SdkError>;

  /**
   * @see {@link AssociateClientVpnTargetNetworkCommand}
   */
  associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateClientVpnTargetNetworkResult, SdkError>;

  /**
   * @see {@link AssociateDhcpOptionsCommand}
   */
  associateDhcpOptions(
    args: AssociateDhcpOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link AssociateEnclaveCertificateIamRoleCommand}
   */
  associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateEnclaveCertificateIamRoleResult, SdkError>;

  /**
   * @see {@link AssociateIamInstanceProfileCommand}
   */
  associateIamInstanceProfile(
    args: AssociateIamInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateIamInstanceProfileResult, SdkError>;

  /**
   * @see {@link AssociateInstanceEventWindowCommand}
   */
  associateInstanceEventWindow(
    args: AssociateInstanceEventWindowRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateInstanceEventWindowResult, SdkError>;

  /**
   * @see {@link AssociateIpamByoasnCommand}
   */
  associateIpamByoasn(
    args: AssociateIpamByoasnRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateIpamByoasnResult, SdkError>;

  /**
   * @see {@link AssociateIpamResourceDiscoveryCommand}
   */
  associateIpamResourceDiscovery(
    args: AssociateIpamResourceDiscoveryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateIpamResourceDiscoveryResult, SdkError>;

  /**
   * @see {@link AssociateNatGatewayAddressCommand}
   */
  associateNatGatewayAddress(
    args: AssociateNatGatewayAddressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateNatGatewayAddressResult, SdkError>;

  /**
   * @see {@link AssociateRouteTableCommand}
   */
  associateRouteTable(
    args: AssociateRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateRouteTableResult, SdkError>;

  /**
   * @see {@link AssociateSubnetCidrBlockCommand}
   */
  associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateSubnetCidrBlockResult, SdkError>;

  /**
   * @see {@link AssociateTransitGatewayMulticastDomainCommand}
   */
  associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateTransitGatewayMulticastDomainResult, SdkError>;

  /**
   * @see {@link AssociateTransitGatewayPolicyTableCommand}
   */
  associateTransitGatewayPolicyTable(
    args: AssociateTransitGatewayPolicyTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateTransitGatewayPolicyTableResult, SdkError>;

  /**
   * @see {@link AssociateTransitGatewayRouteTableCommand}
   */
  associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateTransitGatewayRouteTableResult, SdkError>;

  /**
   * @see {@link AssociateTrunkInterfaceCommand}
   */
  associateTrunkInterface(
    args: AssociateTrunkInterfaceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateTrunkInterfaceResult, SdkError>;

  /**
   * @see {@link AssociateVpcCidrBlockCommand}
   */
  associateVpcCidrBlock(
    args: AssociateVpcCidrBlockRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AssociateVpcCidrBlockResult, SdkError>;

  /**
   * @see {@link AttachClassicLinkVpcCommand}
   */
  attachClassicLinkVpc(
    args: AttachClassicLinkVpcRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AttachClassicLinkVpcResult, SdkError>;

  /**
   * @see {@link AttachInternetGatewayCommand}
   */
  attachInternetGateway(
    args: AttachInternetGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link AttachNetworkInterfaceCommand}
   */
  attachNetworkInterface(
    args: AttachNetworkInterfaceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AttachNetworkInterfaceResult, SdkError>;

  /**
   * @see {@link AttachVerifiedAccessTrustProviderCommand}
   */
  attachVerifiedAccessTrustProvider(
    args: AttachVerifiedAccessTrustProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AttachVerifiedAccessTrustProviderResult, SdkError>;

  /**
   * @see {@link AttachVolumeCommand}
   */
  attachVolume(
    args: AttachVolumeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<VolumeAttachment, SdkError>;

  /**
   * @see {@link AttachVpnGatewayCommand}
   */
  attachVpnGateway(
    args: AttachVpnGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AttachVpnGatewayResult, SdkError>;

  /**
   * @see {@link AuthorizeClientVpnIngressCommand}
   */
  authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AuthorizeClientVpnIngressResult, SdkError>;

  /**
   * @see {@link AuthorizeSecurityGroupEgressCommand}
   */
  authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AuthorizeSecurityGroupEgressResult, SdkError>;

  /**
   * @see {@link AuthorizeSecurityGroupIngressCommand}
   */
  authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<AuthorizeSecurityGroupIngressResult, SdkError>;

  /**
   * @see {@link BundleInstanceCommand}
   */
  bundleInstance(
    args: BundleInstanceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<BundleInstanceResult, SdkError>;

  /**
   * @see {@link CancelBundleTaskCommand}
   */
  cancelBundleTask(
    args: CancelBundleTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelBundleTaskResult, SdkError>;

  /**
   * @see {@link CancelCapacityReservationCommand}
   */
  cancelCapacityReservation(
    args: CancelCapacityReservationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelCapacityReservationResult, SdkError>;

  /**
   * @see {@link CancelCapacityReservationFleetsCommand}
   */
  cancelCapacityReservationFleets(
    args: CancelCapacityReservationFleetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelCapacityReservationFleetsResult, SdkError>;

  /**
   * @see {@link CancelConversionTaskCommand}
   */
  cancelConversionTask(
    args: CancelConversionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link CancelImageLaunchPermissionCommand}
   */
  cancelImageLaunchPermission(
    args: CancelImageLaunchPermissionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelImageLaunchPermissionResult, SdkError>;

  /**
   * @see {@link CancelImportTaskCommand}
   */
  cancelImportTask(
    args: CancelImportTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelImportTaskResult, SdkError>;

  /**
   * @see {@link CancelReservedInstancesListingCommand}
   */
  cancelReservedInstancesListing(
    args: CancelReservedInstancesListingRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelReservedInstancesListingResult, SdkError>;

  /**
   * @see {@link CancelSpotFleetRequestsCommand}
   */
  cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelSpotFleetRequestsResponse, SdkError>;

  /**
   * @see {@link CancelSpotInstanceRequestsCommand}
   */
  cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CancelSpotInstanceRequestsResult, SdkError>;

  /**
   * @see {@link ConfirmProductInstanceCommand}
   */
  confirmProductInstance(
    args: ConfirmProductInstanceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ConfirmProductInstanceResult, SdkError>;

  /**
   * @see {@link CopyFpgaImageCommand}
   */
  copyFpgaImage(
    args: CopyFpgaImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CopyFpgaImageResult, SdkError>;

  /**
   * @see {@link CopyImageCommand}
   */
  copyImage(
    args: CopyImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CopyImageResult, SdkError>;

  /**
   * @see {@link CopySnapshotCommand}
   */
  copySnapshot(
    args: CopySnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CopySnapshotResult, SdkError>;

  /**
   * @see {@link CreateCapacityReservationCommand}
   */
  createCapacityReservation(
    args: CreateCapacityReservationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateCapacityReservationResult, SdkError>;

  /**
   * @see {@link CreateCapacityReservationFleetCommand}
   */
  createCapacityReservationFleet(
    args: CreateCapacityReservationFleetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateCapacityReservationFleetResult, SdkError>;

  /**
   * @see {@link CreateCarrierGatewayCommand}
   */
  createCarrierGateway(
    args: CreateCarrierGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateCarrierGatewayResult, SdkError>;

  /**
   * @see {@link CreateClientVpnEndpointCommand}
   */
  createClientVpnEndpoint(
    args: CreateClientVpnEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateClientVpnEndpointResult, SdkError>;

  /**
   * @see {@link CreateClientVpnRouteCommand}
   */
  createClientVpnRoute(
    args: CreateClientVpnRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateClientVpnRouteResult, SdkError>;

  /**
   * @see {@link CreateCoipCidrCommand}
   */
  createCoipCidr(
    args: CreateCoipCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateCoipCidrResult, SdkError>;

  /**
   * @see {@link CreateCoipPoolCommand}
   */
  createCoipPool(
    args: CreateCoipPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateCoipPoolResult, SdkError>;

  /**
   * @see {@link CreateCustomerGatewayCommand}
   */
  createCustomerGateway(
    args: CreateCustomerGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateCustomerGatewayResult, SdkError>;

  /**
   * @see {@link CreateDefaultSubnetCommand}
   */
  createDefaultSubnet(
    args: CreateDefaultSubnetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateDefaultSubnetResult, SdkError>;

  /**
   * @see {@link CreateDefaultVpcCommand}
   */
  createDefaultVpc(
    args: CreateDefaultVpcRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateDefaultVpcResult, SdkError>;

  /**
   * @see {@link CreateDhcpOptionsCommand}
   */
  createDhcpOptions(
    args: CreateDhcpOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateDhcpOptionsResult, SdkError>;

  /**
   * @see {@link CreateEgressOnlyInternetGatewayCommand}
   */
  createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateEgressOnlyInternetGatewayResult, SdkError>;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(
    args: CreateFleetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateFleetResult, SdkError>;

  /**
   * @see {@link CreateFlowLogsCommand}
   */
  createFlowLogs(
    args: CreateFlowLogsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateFlowLogsResult, SdkError>;

  /**
   * @see {@link CreateFpgaImageCommand}
   */
  createFpgaImage(
    args: CreateFpgaImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateFpgaImageResult, SdkError>;

  /**
   * @see {@link CreateImageCommand}
   */
  createImage(
    args: CreateImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateImageResult, SdkError>;

  /**
   * @see {@link CreateInstanceConnectEndpointCommand}
   */
  createInstanceConnectEndpoint(
    args: CreateInstanceConnectEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateInstanceConnectEndpointResult, SdkError>;

  /**
   * @see {@link CreateInstanceEventWindowCommand}
   */
  createInstanceEventWindow(
    args: CreateInstanceEventWindowRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateInstanceEventWindowResult, SdkError>;

  /**
   * @see {@link CreateInstanceExportTaskCommand}
   */
  createInstanceExportTask(
    args: CreateInstanceExportTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateInstanceExportTaskResult, SdkError>;

  /**
   * @see {@link CreateInternetGatewayCommand}
   */
  createInternetGateway(
    args: CreateInternetGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateInternetGatewayResult, SdkError>;

  /**
   * @see {@link CreateIpamCommand}
   */
  createIpam(
    args: CreateIpamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateIpamResult, SdkError>;

  /**
   * @see {@link CreateIpamPoolCommand}
   */
  createIpamPool(
    args: CreateIpamPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateIpamPoolResult, SdkError>;

  /**
   * @see {@link CreateIpamResourceDiscoveryCommand}
   */
  createIpamResourceDiscovery(
    args: CreateIpamResourceDiscoveryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateIpamResourceDiscoveryResult, SdkError>;

  /**
   * @see {@link CreateIpamScopeCommand}
   */
  createIpamScope(
    args: CreateIpamScopeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateIpamScopeResult, SdkError>;

  /**
   * @see {@link CreateKeyPairCommand}
   */
  createKeyPair(
    args: CreateKeyPairRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<KeyPair, SdkError>;

  /**
   * @see {@link CreateLaunchTemplateCommand}
   */
  createLaunchTemplate(
    args: CreateLaunchTemplateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateLaunchTemplateResult, SdkError>;

  /**
   * @see {@link CreateLaunchTemplateVersionCommand}
   */
  createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateLaunchTemplateVersionResult, SdkError>;

  /**
   * @see {@link CreateLocalGatewayRouteCommand}
   */
  createLocalGatewayRoute(
    args: CreateLocalGatewayRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateLocalGatewayRouteResult, SdkError>;

  /**
   * @see {@link CreateLocalGatewayRouteTableCommand}
   */
  createLocalGatewayRouteTable(
    args: CreateLocalGatewayRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateLocalGatewayRouteTableResult, SdkError>;

  /**
   * @see {@link CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}
   */
  createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
    SdkError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommand}
   */
  createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateLocalGatewayRouteTableVpcAssociationResult, SdkError>;

  /**
   * @see {@link CreateManagedPrefixListCommand}
   */
  createManagedPrefixList(
    args: CreateManagedPrefixListRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateManagedPrefixListResult, SdkError>;

  /**
   * @see {@link CreateNatGatewayCommand}
   */
  createNatGateway(
    args: CreateNatGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateNatGatewayResult, SdkError>;

  /**
   * @see {@link CreateNetworkAclCommand}
   */
  createNetworkAcl(
    args: CreateNetworkAclRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateNetworkAclResult, SdkError>;

  /**
   * @see {@link CreateNetworkAclEntryCommand}
   */
  createNetworkAclEntry(
    args: CreateNetworkAclEntryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link CreateNetworkInsightsAccessScopeCommand}
   */
  createNetworkInsightsAccessScope(
    args: CreateNetworkInsightsAccessScopeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateNetworkInsightsAccessScopeResult, SdkError>;

  /**
   * @see {@link CreateNetworkInsightsPathCommand}
   */
  createNetworkInsightsPath(
    args: CreateNetworkInsightsPathRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateNetworkInsightsPathResult, SdkError>;

  /**
   * @see {@link CreateNetworkInterfaceCommand}
   */
  createNetworkInterface(
    args: CreateNetworkInterfaceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateNetworkInterfaceResult, SdkError>;

  /**
   * @see {@link CreateNetworkInterfacePermissionCommand}
   */
  createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateNetworkInterfacePermissionResult, SdkError>;

  /**
   * @see {@link CreatePlacementGroupCommand}
   */
  createPlacementGroup(
    args: CreatePlacementGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreatePlacementGroupResult, SdkError>;

  /**
   * @see {@link CreatePublicIpv4PoolCommand}
   */
  createPublicIpv4Pool(
    args: CreatePublicIpv4PoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreatePublicIpv4PoolResult, SdkError>;

  /**
   * @see {@link CreateReplaceRootVolumeTaskCommand}
   */
  createReplaceRootVolumeTask(
    args: CreateReplaceRootVolumeTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateReplaceRootVolumeTaskResult, SdkError>;

  /**
   * @see {@link CreateReservedInstancesListingCommand}
   */
  createReservedInstancesListing(
    args: CreateReservedInstancesListingRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateReservedInstancesListingResult, SdkError>;

  /**
   * @see {@link CreateRestoreImageTaskCommand}
   */
  createRestoreImageTask(
    args: CreateRestoreImageTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateRestoreImageTaskResult, SdkError>;

  /**
   * @see {@link CreateRouteCommand}
   */
  createRoute(
    args: CreateRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateRouteResult, SdkError>;

  /**
   * @see {@link CreateRouteTableCommand}
   */
  createRouteTable(
    args: CreateRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateRouteTableResult, SdkError>;

  /**
   * @see {@link CreateSecurityGroupCommand}
   */
  createSecurityGroup(
    args: CreateSecurityGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateSecurityGroupResult, SdkError>;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<Snapshot, SdkError>;

  /**
   * @see {@link CreateSnapshotsCommand}
   */
  createSnapshots(
    args: CreateSnapshotsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateSnapshotsResult, SdkError>;

  /**
   * @see {@link CreateSpotDatafeedSubscriptionCommand}
   */
  createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateSpotDatafeedSubscriptionResult, SdkError>;

  /**
   * @see {@link CreateStoreImageTaskCommand}
   */
  createStoreImageTask(
    args: CreateStoreImageTaskRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateStoreImageTaskResult, SdkError>;

  /**
   * @see {@link CreateSubnetCommand}
   */
  createSubnet(
    args: CreateSubnetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateSubnetResult, SdkError>;

  /**
   * @see {@link CreateSubnetCidrReservationCommand}
   */
  createSubnetCidrReservation(
    args: CreateSubnetCidrReservationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateSubnetCidrReservationResult, SdkError>;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link CreateTrafficMirrorFilterCommand}
   */
  createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTrafficMirrorFilterResult, SdkError>;

  /**
   * @see {@link CreateTrafficMirrorFilterRuleCommand}
   */
  createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTrafficMirrorFilterRuleResult, SdkError>;

  /**
   * @see {@link CreateTrafficMirrorSessionCommand}
   */
  createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTrafficMirrorSessionResult, SdkError>;

  /**
   * @see {@link CreateTrafficMirrorTargetCommand}
   */
  createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTrafficMirrorTargetResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayCommand}
   */
  createTransitGateway(
    args: CreateTransitGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayConnectCommand}
   */
  createTransitGatewayConnect(
    args: CreateTransitGatewayConnectRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayConnectResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayConnectPeerCommand}
   */
  createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayConnectPeerResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayMulticastDomainCommand}
   */
  createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayMulticastDomainResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayPeeringAttachmentCommand}
   */
  createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayPeeringAttachmentResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayPolicyTableCommand}
   */
  createTransitGatewayPolicyTable(
    args: CreateTransitGatewayPolicyTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayPolicyTableResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayPrefixListReferenceCommand}
   */
  createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayPrefixListReferenceResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayRouteCommand}
   */
  createTransitGatewayRoute(
    args: CreateTransitGatewayRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayRouteResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayRouteTableCommand}
   */
  createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayRouteTableResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayRouteTableAnnouncementCommand}
   */
  createTransitGatewayRouteTableAnnouncement(
    args: CreateTransitGatewayRouteTableAnnouncementRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayRouteTableAnnouncementResult, SdkError>;

  /**
   * @see {@link CreateTransitGatewayVpcAttachmentCommand}
   */
  createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateTransitGatewayVpcAttachmentResult, SdkError>;

  /**
   * @see {@link CreateVerifiedAccessEndpointCommand}
   */
  createVerifiedAccessEndpoint(
    args: CreateVerifiedAccessEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVerifiedAccessEndpointResult, SdkError>;

  /**
   * @see {@link CreateVerifiedAccessGroupCommand}
   */
  createVerifiedAccessGroup(
    args: CreateVerifiedAccessGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVerifiedAccessGroupResult, SdkError>;

  /**
   * @see {@link CreateVerifiedAccessInstanceCommand}
   */
  createVerifiedAccessInstance(
    args: CreateVerifiedAccessInstanceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVerifiedAccessInstanceResult, SdkError>;

  /**
   * @see {@link CreateVerifiedAccessTrustProviderCommand}
   */
  createVerifiedAccessTrustProvider(
    args: CreateVerifiedAccessTrustProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVerifiedAccessTrustProviderResult, SdkError>;

  /**
   * @see {@link CreateVolumeCommand}
   */
  createVolume(
    args: CreateVolumeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<Volume, SdkError>;

  /**
   * @see {@link CreateVpcCommand}
   */
  createVpc(
    args: CreateVpcRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVpcResult, SdkError>;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVpcEndpointResult, SdkError>;

  /**
   * @see {@link CreateVpcEndpointConnectionNotificationCommand}
   */
  createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVpcEndpointConnectionNotificationResult, SdkError>;

  /**
   * @see {@link CreateVpcEndpointServiceConfigurationCommand}
   */
  createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVpcEndpointServiceConfigurationResult, SdkError>;

  /**
   * @see {@link CreateVpcPeeringConnectionCommand}
   */
  createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVpcPeeringConnectionResult, SdkError>;

  /**
   * @see {@link CreateVpnConnectionCommand}
   */
  createVpnConnection(
    args: CreateVpnConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVpnConnectionResult, SdkError>;

  /**
   * @see {@link CreateVpnConnectionRouteCommand}
   */
  createVpnConnectionRoute(
    args: CreateVpnConnectionRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link CreateVpnGatewayCommand}
   */
  createVpnGateway(
    args: CreateVpnGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<CreateVpnGatewayResult, SdkError>;

  /**
   * @see {@link DeleteCarrierGatewayCommand}
   */
  deleteCarrierGateway(
    args: DeleteCarrierGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteCarrierGatewayResult, SdkError>;

  /**
   * @see {@link DeleteClientVpnEndpointCommand}
   */
  deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteClientVpnEndpointResult, SdkError>;

  /**
   * @see {@link DeleteClientVpnRouteCommand}
   */
  deleteClientVpnRoute(
    args: DeleteClientVpnRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteClientVpnRouteResult, SdkError>;

  /**
   * @see {@link DeleteCoipCidrCommand}
   */
  deleteCoipCidr(
    args: DeleteCoipCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteCoipCidrResult, SdkError>;

  /**
   * @see {@link DeleteCoipPoolCommand}
   */
  deleteCoipPool(
    args: DeleteCoipPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteCoipPoolResult, SdkError>;

  /**
   * @see {@link DeleteCustomerGatewayCommand}
   */
  deleteCustomerGateway(
    args: DeleteCustomerGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteDhcpOptionsCommand}
   */
  deleteDhcpOptions(
    args: DeleteDhcpOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteEgressOnlyInternetGatewayCommand}
   */
  deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteEgressOnlyInternetGatewayResult, SdkError>;

  /**
   * @see {@link DeleteFleetsCommand}
   */
  deleteFleets(
    args: DeleteFleetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteFleetsResult, SdkError>;

  /**
   * @see {@link DeleteFlowLogsCommand}
   */
  deleteFlowLogs(
    args: DeleteFlowLogsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteFlowLogsResult, SdkError>;

  /**
   * @see {@link DeleteFpgaImageCommand}
   */
  deleteFpgaImage(
    args: DeleteFpgaImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteFpgaImageResult, SdkError>;

  /**
   * @see {@link DeleteInstanceConnectEndpointCommand}
   */
  deleteInstanceConnectEndpoint(
    args: DeleteInstanceConnectEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteInstanceConnectEndpointResult, SdkError>;

  /**
   * @see {@link DeleteInstanceEventWindowCommand}
   */
  deleteInstanceEventWindow(
    args: DeleteInstanceEventWindowRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteInstanceEventWindowResult, SdkError>;

  /**
   * @see {@link DeleteInternetGatewayCommand}
   */
  deleteInternetGateway(
    args: DeleteInternetGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteIpamCommand}
   */
  deleteIpam(
    args: DeleteIpamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteIpamResult, SdkError>;

  /**
   * @see {@link DeleteIpamPoolCommand}
   */
  deleteIpamPool(
    args: DeleteIpamPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteIpamPoolResult, SdkError>;

  /**
   * @see {@link DeleteIpamResourceDiscoveryCommand}
   */
  deleteIpamResourceDiscovery(
    args: DeleteIpamResourceDiscoveryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteIpamResourceDiscoveryResult, SdkError>;

  /**
   * @see {@link DeleteIpamScopeCommand}
   */
  deleteIpamScope(
    args: DeleteIpamScopeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteIpamScopeResult, SdkError>;

  /**
   * @see {@link DeleteKeyPairCommand}
   */
  deleteKeyPair(
    args: DeleteKeyPairRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteKeyPairResult, SdkError>;

  /**
   * @see {@link DeleteLaunchTemplateCommand}
   */
  deleteLaunchTemplate(
    args: DeleteLaunchTemplateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteLaunchTemplateResult, SdkError>;

  /**
   * @see {@link DeleteLaunchTemplateVersionsCommand}
   */
  deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteLaunchTemplateVersionsResult, SdkError>;

  /**
   * @see {@link DeleteLocalGatewayRouteCommand}
   */
  deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteLocalGatewayRouteResult, SdkError>;

  /**
   * @see {@link DeleteLocalGatewayRouteTableCommand}
   */
  deleteLocalGatewayRouteTable(
    args: DeleteLocalGatewayRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteLocalGatewayRouteTableResult, SdkError>;

  /**
   * @see {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}
   */
  deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
    SdkError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommand}
   */
  deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteLocalGatewayRouteTableVpcAssociationResult, SdkError>;

  /**
   * @see {@link DeleteManagedPrefixListCommand}
   */
  deleteManagedPrefixList(
    args: DeleteManagedPrefixListRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteManagedPrefixListResult, SdkError>;

  /**
   * @see {@link DeleteNatGatewayCommand}
   */
  deleteNatGateway(
    args: DeleteNatGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteNatGatewayResult, SdkError>;

  /**
   * @see {@link DeleteNetworkAclCommand}
   */
  deleteNetworkAcl(
    args: DeleteNetworkAclRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteNetworkAclEntryCommand}
   */
  deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteNetworkInsightsAccessScopeCommand}
   */
  deleteNetworkInsightsAccessScope(
    args: DeleteNetworkInsightsAccessScopeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteNetworkInsightsAccessScopeResult, SdkError>;

  /**
   * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}
   */
  deleteNetworkInsightsAccessScopeAnalysis(
    args: DeleteNetworkInsightsAccessScopeAnalysisRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteNetworkInsightsAccessScopeAnalysisResult, SdkError>;

  /**
   * @see {@link DeleteNetworkInsightsAnalysisCommand}
   */
  deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteNetworkInsightsAnalysisResult, SdkError>;

  /**
   * @see {@link DeleteNetworkInsightsPathCommand}
   */
  deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteNetworkInsightsPathResult, SdkError>;

  /**
   * @see {@link DeleteNetworkInterfaceCommand}
   */
  deleteNetworkInterface(
    args: DeleteNetworkInterfaceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteNetworkInterfacePermissionCommand}
   */
  deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteNetworkInterfacePermissionResult, SdkError>;

  /**
   * @see {@link DeletePlacementGroupCommand}
   */
  deletePlacementGroup(
    args: DeletePlacementGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeletePublicIpv4PoolCommand}
   */
  deletePublicIpv4Pool(
    args: DeletePublicIpv4PoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeletePublicIpv4PoolResult, SdkError>;

  /**
   * @see {@link DeleteQueuedReservedInstancesCommand}
   */
  deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteQueuedReservedInstancesResult, SdkError>;

  /**
   * @see {@link DeleteRouteCommand}
   */
  deleteRoute(
    args: DeleteRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteRouteTableCommand}
   */
  deleteRouteTable(
    args: DeleteRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteSecurityGroupCommand}
   */
  deleteSecurityGroup(
    args: DeleteSecurityGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteSpotDatafeedSubscriptionCommand}
   */
  deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteSubnetCommand}
   */
  deleteSubnet(
    args: DeleteSubnetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteSubnetCidrReservationCommand}
   */
  deleteSubnetCidrReservation(
    args: DeleteSubnetCidrReservationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteSubnetCidrReservationResult, SdkError>;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteTrafficMirrorFilterCommand}
   */
  deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTrafficMirrorFilterResult, SdkError>;

  /**
   * @see {@link DeleteTrafficMirrorFilterRuleCommand}
   */
  deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTrafficMirrorFilterRuleResult, SdkError>;

  /**
   * @see {@link DeleteTrafficMirrorSessionCommand}
   */
  deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTrafficMirrorSessionResult, SdkError>;

  /**
   * @see {@link DeleteTrafficMirrorTargetCommand}
   */
  deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTrafficMirrorTargetResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayCommand}
   */
  deleteTransitGateway(
    args: DeleteTransitGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayConnectCommand}
   */
  deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayConnectResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayConnectPeerCommand}
   */
  deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayConnectPeerResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayMulticastDomainCommand}
   */
  deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayMulticastDomainResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayPeeringAttachmentCommand}
   */
  deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayPeeringAttachmentResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayPolicyTableCommand}
   */
  deleteTransitGatewayPolicyTable(
    args: DeleteTransitGatewayPolicyTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayPolicyTableResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayPrefixListReferenceCommand}
   */
  deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayPrefixListReferenceResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayRouteCommand}
   */
  deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayRouteResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayRouteTableCommand}
   */
  deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayRouteTableResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayRouteTableAnnouncementCommand}
   */
  deleteTransitGatewayRouteTableAnnouncement(
    args: DeleteTransitGatewayRouteTableAnnouncementRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayRouteTableAnnouncementResult, SdkError>;

  /**
   * @see {@link DeleteTransitGatewayVpcAttachmentCommand}
   */
  deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteTransitGatewayVpcAttachmentResult, SdkError>;

  /**
   * @see {@link DeleteVerifiedAccessEndpointCommand}
   */
  deleteVerifiedAccessEndpoint(
    args: DeleteVerifiedAccessEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteVerifiedAccessEndpointResult, SdkError>;

  /**
   * @see {@link DeleteVerifiedAccessGroupCommand}
   */
  deleteVerifiedAccessGroup(
    args: DeleteVerifiedAccessGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteVerifiedAccessGroupResult, SdkError>;

  /**
   * @see {@link DeleteVerifiedAccessInstanceCommand}
   */
  deleteVerifiedAccessInstance(
    args: DeleteVerifiedAccessInstanceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteVerifiedAccessInstanceResult, SdkError>;

  /**
   * @see {@link DeleteVerifiedAccessTrustProviderCommand}
   */
  deleteVerifiedAccessTrustProvider(
    args: DeleteVerifiedAccessTrustProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteVerifiedAccessTrustProviderResult, SdkError>;

  /**
   * @see {@link DeleteVolumeCommand}
   */
  deleteVolume(
    args: DeleteVolumeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteVpcCommand}
   */
  deleteVpc(
    args: DeleteVpcRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteVpcEndpointConnectionNotificationsCommand}
   */
  deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteVpcEndpointConnectionNotificationsResult, SdkError>;

  /**
   * @see {@link DeleteVpcEndpointServiceConfigurationsCommand}
   */
  deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteVpcEndpointServiceConfigurationsResult, SdkError>;

  /**
   * @see {@link DeleteVpcEndpointsCommand}
   */
  deleteVpcEndpoints(
    args: DeleteVpcEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteVpcEndpointsResult, SdkError>;

  /**
   * @see {@link DeleteVpcPeeringConnectionCommand}
   */
  deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteVpcPeeringConnectionResult, SdkError>;

  /**
   * @see {@link DeleteVpnConnectionCommand}
   */
  deleteVpnConnection(
    args: DeleteVpnConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteVpnConnectionRouteCommand}
   */
  deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeleteVpnGatewayCommand}
   */
  deleteVpnGateway(
    args: DeleteVpnGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeprovisionByoipCidrCommand}
   */
  deprovisionByoipCidr(
    args: DeprovisionByoipCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeprovisionByoipCidrResult, SdkError>;

  /**
   * @see {@link DeprovisionIpamByoasnCommand}
   */
  deprovisionIpamByoasn(
    args: DeprovisionIpamByoasnRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeprovisionIpamByoasnResult, SdkError>;

  /**
   * @see {@link DeprovisionIpamPoolCidrCommand}
   */
  deprovisionIpamPoolCidr(
    args: DeprovisionIpamPoolCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeprovisionIpamPoolCidrResult, SdkError>;

  /**
   * @see {@link DeprovisionPublicIpv4PoolCidrCommand}
   */
  deprovisionPublicIpv4PoolCidr(
    args: DeprovisionPublicIpv4PoolCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeprovisionPublicIpv4PoolCidrResult, SdkError>;

  /**
   * @see {@link DeregisterImageCommand}
   */
  deregisterImage(
    args: DeregisterImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DeregisterInstanceEventNotificationAttributesCommand}
   */
  deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterInstanceEventNotificationAttributesResult,
    SdkError
  >;

  /**
   * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommand}
   */
  deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTransitGatewayMulticastGroupMembersResult,
    SdkError
  >;

  /**
   * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommand}
   */
  deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTransitGatewayMulticastGroupSourcesResult,
    SdkError
  >;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(
    args: DescribeAccountAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAccountAttributesResult, SdkError>;

  /**
   * @see {@link DescribeAddressTransfersCommand}
   */
  describeAddressTransfers(
    args: DescribeAddressTransfersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAddressTransfersResult, SdkError>;

  /**
   * @see {@link DescribeAddressesCommand}
   */
  describeAddresses(
    args: DescribeAddressesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAddressesResult, SdkError>;

  /**
   * @see {@link DescribeAddressesAttributeCommand}
   */
  describeAddressesAttribute(
    args: DescribeAddressesAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAddressesAttributeResult, SdkError>;

  /**
   * @see {@link DescribeAggregateIdFormatCommand}
   */
  describeAggregateIdFormat(
    args: DescribeAggregateIdFormatRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAggregateIdFormatResult, SdkError>;

  /**
   * @see {@link DescribeAvailabilityZonesCommand}
   */
  describeAvailabilityZones(
    args: DescribeAvailabilityZonesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeAvailabilityZonesResult, SdkError>;

  /**
   * @see {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommand}
   */
  describeAwsNetworkPerformanceMetricSubscriptions(
    args: DescribeAwsNetworkPerformanceMetricSubscriptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAwsNetworkPerformanceMetricSubscriptionsResult,
    SdkError
  >;

  /**
   * @see {@link DescribeBundleTasksCommand}
   */
  describeBundleTasks(
    args: DescribeBundleTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeBundleTasksResult, SdkError>;

  /**
   * @see {@link DescribeByoipCidrsCommand}
   */
  describeByoipCidrs(
    args: DescribeByoipCidrsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeByoipCidrsResult, SdkError>;

  /**
   * @see {@link DescribeCapacityBlockOfferingsCommand}
   */
  describeCapacityBlockOfferings(
    args: DescribeCapacityBlockOfferingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeCapacityBlockOfferingsResult, SdkError>;

  /**
   * @see {@link DescribeCapacityReservationFleetsCommand}
   */
  describeCapacityReservationFleets(
    args: DescribeCapacityReservationFleetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeCapacityReservationFleetsResult, SdkError>;

  /**
   * @see {@link DescribeCapacityReservationsCommand}
   */
  describeCapacityReservations(
    args: DescribeCapacityReservationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeCapacityReservationsResult, SdkError>;

  /**
   * @see {@link DescribeCarrierGatewaysCommand}
   */
  describeCarrierGateways(
    args: DescribeCarrierGatewaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeCarrierGatewaysResult, SdkError>;

  /**
   * @see {@link DescribeClassicLinkInstancesCommand}
   */
  describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeClassicLinkInstancesResult, SdkError>;

  /**
   * @see {@link DescribeClientVpnAuthorizationRulesCommand}
   */
  describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeClientVpnAuthorizationRulesResult, SdkError>;

  /**
   * @see {@link DescribeClientVpnConnectionsCommand}
   */
  describeClientVpnConnections(
    args: DescribeClientVpnConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeClientVpnConnectionsResult, SdkError>;

  /**
   * @see {@link DescribeClientVpnEndpointsCommand}
   */
  describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeClientVpnEndpointsResult, SdkError>;

  /**
   * @see {@link DescribeClientVpnRoutesCommand}
   */
  describeClientVpnRoutes(
    args: DescribeClientVpnRoutesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeClientVpnRoutesResult, SdkError>;

  /**
   * @see {@link DescribeClientVpnTargetNetworksCommand}
   */
  describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeClientVpnTargetNetworksResult, SdkError>;

  /**
   * @see {@link DescribeCoipPoolsCommand}
   */
  describeCoipPools(
    args: DescribeCoipPoolsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeCoipPoolsResult, SdkError>;

  /**
   * @see {@link DescribeConversionTasksCommand}
   */
  describeConversionTasks(
    args: DescribeConversionTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeConversionTasksResult, SdkError>;

  /**
   * @see {@link DescribeCustomerGatewaysCommand}
   */
  describeCustomerGateways(
    args: DescribeCustomerGatewaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeCustomerGatewaysResult, SdkError>;

  /**
   * @see {@link DescribeDhcpOptionsCommand}
   */
  describeDhcpOptions(
    args: DescribeDhcpOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeDhcpOptionsResult, SdkError>;

  /**
   * @see {@link DescribeEgressOnlyInternetGatewaysCommand}
   */
  describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeEgressOnlyInternetGatewaysResult, SdkError>;

  /**
   * @see {@link DescribeElasticGpusCommand}
   */
  describeElasticGpus(
    args: DescribeElasticGpusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeElasticGpusResult, SdkError>;

  /**
   * @see {@link DescribeExportImageTasksCommand}
   */
  describeExportImageTasks(
    args: DescribeExportImageTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeExportImageTasksResult, SdkError>;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeExportTasksResult, SdkError>;

  /**
   * @see {@link DescribeFastLaunchImagesCommand}
   */
  describeFastLaunchImages(
    args: DescribeFastLaunchImagesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeFastLaunchImagesResult, SdkError>;

  /**
   * @see {@link DescribeFastSnapshotRestoresCommand}
   */
  describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeFastSnapshotRestoresResult, SdkError>;

  /**
   * @see {@link DescribeFleetHistoryCommand}
   */
  describeFleetHistory(
    args: DescribeFleetHistoryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeFleetHistoryResult, SdkError>;

  /**
   * @see {@link DescribeFleetInstancesCommand}
   */
  describeFleetInstances(
    args: DescribeFleetInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeFleetInstancesResult, SdkError>;

  /**
   * @see {@link DescribeFleetsCommand}
   */
  describeFleets(
    args: DescribeFleetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeFleetsResult, SdkError>;

  /**
   * @see {@link DescribeFlowLogsCommand}
   */
  describeFlowLogs(
    args: DescribeFlowLogsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeFlowLogsResult, SdkError>;

  /**
   * @see {@link DescribeFpgaImageAttributeCommand}
   */
  describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeFpgaImageAttributeResult, SdkError>;

  /**
   * @see {@link DescribeFpgaImagesCommand}
   */
  describeFpgaImages(
    args: DescribeFpgaImagesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeFpgaImagesResult, SdkError>;

  /**
   * @see {@link DescribeHostReservationOfferingsCommand}
   */
  describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeHostReservationOfferingsResult, SdkError>;

  /**
   * @see {@link DescribeHostReservationsCommand}
   */
  describeHostReservations(
    args: DescribeHostReservationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeHostReservationsResult, SdkError>;

  /**
   * @see {@link DescribeHostsCommand}
   */
  describeHosts(
    args: DescribeHostsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeHostsResult, SdkError>;

  /**
   * @see {@link DescribeIamInstanceProfileAssociationsCommand}
   */
  describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIamInstanceProfileAssociationsResult, SdkError>;

  /**
   * @see {@link DescribeIdFormatCommand}
   */
  describeIdFormat(
    args: DescribeIdFormatRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIdFormatResult, SdkError>;

  /**
   * @see {@link DescribeIdentityIdFormatCommand}
   */
  describeIdentityIdFormat(
    args: DescribeIdentityIdFormatRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIdentityIdFormatResult, SdkError>;

  /**
   * @see {@link DescribeImageAttributeCommand}
   */
  describeImageAttribute(
    args: DescribeImageAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ImageAttribute, SdkError>;

  /**
   * @see {@link DescribeImagesCommand}
   */
  describeImages(
    args: DescribeImagesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeImagesResult, SdkError>;

  /**
   * @see {@link DescribeImportImageTasksCommand}
   */
  describeImportImageTasks(
    args: DescribeImportImageTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeImportImageTasksResult, SdkError>;

  /**
   * @see {@link DescribeImportSnapshotTasksCommand}
   */
  describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeImportSnapshotTasksResult, SdkError>;

  /**
   * @see {@link DescribeInstanceAttributeCommand}
   */
  describeInstanceAttribute(
    args: DescribeInstanceAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<InstanceAttribute, SdkError>;

  /**
   * @see {@link DescribeInstanceConnectEndpointsCommand}
   */
  describeInstanceConnectEndpoints(
    args: DescribeInstanceConnectEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstanceConnectEndpointsResult, SdkError>;

  /**
   * @see {@link DescribeInstanceCreditSpecificationsCommand}
   */
  describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstanceCreditSpecificationsResult, SdkError>;

  /**
   * @see {@link DescribeInstanceEventNotificationAttributesCommand}
   */
  describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstanceEventNotificationAttributesResult, SdkError>;

  /**
   * @see {@link DescribeInstanceEventWindowsCommand}
   */
  describeInstanceEventWindows(
    args: DescribeInstanceEventWindowsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstanceEventWindowsResult, SdkError>;

  /**
   * @see {@link DescribeInstanceStatusCommand}
   */
  describeInstanceStatus(
    args: DescribeInstanceStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstanceStatusResult, SdkError>;

  /**
   * @see {@link DescribeInstanceTopologyCommand}
   */
  describeInstanceTopology(
    args: DescribeInstanceTopologyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstanceTopologyResult, SdkError>;

  /**
   * @see {@link DescribeInstanceTypeOfferingsCommand}
   */
  describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstanceTypeOfferingsResult, SdkError>;

  /**
   * @see {@link DescribeInstanceTypesCommand}
   */
  describeInstanceTypes(
    args: DescribeInstanceTypesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstanceTypesResult, SdkError>;

  /**
   * @see {@link DescribeInstancesCommand}
   */
  describeInstances(
    args: DescribeInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInstancesResult, SdkError>;

  /**
   * @see {@link DescribeInternetGatewaysCommand}
   */
  describeInternetGateways(
    args: DescribeInternetGatewaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeInternetGatewaysResult, SdkError>;

  /**
   * @see {@link DescribeIpamByoasnCommand}
   */
  describeIpamByoasn(
    args: DescribeIpamByoasnRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIpamByoasnResult, SdkError>;

  /**
   * @see {@link DescribeIpamPoolsCommand}
   */
  describeIpamPools(
    args: DescribeIpamPoolsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIpamPoolsResult, SdkError>;

  /**
   * @see {@link DescribeIpamResourceDiscoveriesCommand}
   */
  describeIpamResourceDiscoveries(
    args: DescribeIpamResourceDiscoveriesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIpamResourceDiscoveriesResult, SdkError>;

  /**
   * @see {@link DescribeIpamResourceDiscoveryAssociationsCommand}
   */
  describeIpamResourceDiscoveryAssociations(
    args: DescribeIpamResourceDiscoveryAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIpamResourceDiscoveryAssociationsResult, SdkError>;

  /**
   * @see {@link DescribeIpamScopesCommand}
   */
  describeIpamScopes(
    args: DescribeIpamScopesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIpamScopesResult, SdkError>;

  /**
   * @see {@link DescribeIpamsCommand}
   */
  describeIpams(
    args: DescribeIpamsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIpamsResult, SdkError>;

  /**
   * @see {@link DescribeIpv6PoolsCommand}
   */
  describeIpv6Pools(
    args: DescribeIpv6PoolsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeIpv6PoolsResult, SdkError>;

  /**
   * @see {@link DescribeKeyPairsCommand}
   */
  describeKeyPairs(
    args: DescribeKeyPairsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeKeyPairsResult, SdkError>;

  /**
   * @see {@link DescribeLaunchTemplateVersionsCommand}
   */
  describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeLaunchTemplateVersionsResult, SdkError>;

  /**
   * @see {@link DescribeLaunchTemplatesCommand}
   */
  describeLaunchTemplates(
    args: DescribeLaunchTemplatesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeLaunchTemplatesResult, SdkError>;

  /**
   * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand}
   */
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult,
    SdkError
  >;

  /**
   * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommand}
   */
  describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLocalGatewayRouteTableVpcAssociationsResult,
    SdkError
  >;

  /**
   * @see {@link DescribeLocalGatewayRouteTablesCommand}
   */
  describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeLocalGatewayRouteTablesResult, SdkError>;

  /**
   * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommand}
   */
  describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeLocalGatewayVirtualInterfaceGroupsResult, SdkError>;

  /**
   * @see {@link DescribeLocalGatewayVirtualInterfacesCommand}
   */
  describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeLocalGatewayVirtualInterfacesResult, SdkError>;

  /**
   * @see {@link DescribeLocalGatewaysCommand}
   */
  describeLocalGateways(
    args: DescribeLocalGatewaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeLocalGatewaysResult, SdkError>;

  /**
   * @see {@link DescribeLockedSnapshotsCommand}
   */
  describeLockedSnapshots(
    args: DescribeLockedSnapshotsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeLockedSnapshotsResult, SdkError>;

  /**
   * @see {@link DescribeMacHostsCommand}
   */
  describeMacHosts(
    args: DescribeMacHostsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeMacHostsResult, SdkError>;

  /**
   * @see {@link DescribeManagedPrefixListsCommand}
   */
  describeManagedPrefixLists(
    args: DescribeManagedPrefixListsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeManagedPrefixListsResult, SdkError>;

  /**
   * @see {@link DescribeMovingAddressesCommand}
   */
  describeMovingAddresses(
    args: DescribeMovingAddressesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeMovingAddressesResult, SdkError>;

  /**
   * @see {@link DescribeNatGatewaysCommand}
   */
  describeNatGateways(
    args: DescribeNatGatewaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNatGatewaysResult, SdkError>;

  /**
   * @see {@link DescribeNetworkAclsCommand}
   */
  describeNetworkAcls(
    args: DescribeNetworkAclsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNetworkAclsResult, SdkError>;

  /**
   * @see {@link DescribeNetworkInsightsAccessScopeAnalysesCommand}
   */
  describeNetworkInsightsAccessScopeAnalyses(
    args: DescribeNetworkInsightsAccessScopeAnalysesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNetworkInsightsAccessScopeAnalysesResult, SdkError>;

  /**
   * @see {@link DescribeNetworkInsightsAccessScopesCommand}
   */
  describeNetworkInsightsAccessScopes(
    args: DescribeNetworkInsightsAccessScopesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNetworkInsightsAccessScopesResult, SdkError>;

  /**
   * @see {@link DescribeNetworkInsightsAnalysesCommand}
   */
  describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNetworkInsightsAnalysesResult, SdkError>;

  /**
   * @see {@link DescribeNetworkInsightsPathsCommand}
   */
  describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNetworkInsightsPathsResult, SdkError>;

  /**
   * @see {@link DescribeNetworkInterfaceAttributeCommand}
   */
  describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNetworkInterfaceAttributeResult, SdkError>;

  /**
   * @see {@link DescribeNetworkInterfacePermissionsCommand}
   */
  describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNetworkInterfacePermissionsResult, SdkError>;

  /**
   * @see {@link DescribeNetworkInterfacesCommand}
   */
  describeNetworkInterfaces(
    args: DescribeNetworkInterfacesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeNetworkInterfacesResult, SdkError>;

  /**
   * @see {@link DescribePlacementGroupsCommand}
   */
  describePlacementGroups(
    args: DescribePlacementGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribePlacementGroupsResult, SdkError>;

  /**
   * @see {@link DescribePrefixListsCommand}
   */
  describePrefixLists(
    args: DescribePrefixListsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribePrefixListsResult, SdkError>;

  /**
   * @see {@link DescribePrincipalIdFormatCommand}
   */
  describePrincipalIdFormat(
    args: DescribePrincipalIdFormatRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribePrincipalIdFormatResult, SdkError>;

  /**
   * @see {@link DescribePublicIpv4PoolsCommand}
   */
  describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribePublicIpv4PoolsResult, SdkError>;

  /**
   * @see {@link DescribeRegionsCommand}
   */
  describeRegions(
    args: DescribeRegionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeRegionsResult, SdkError>;

  /**
   * @see {@link DescribeReplaceRootVolumeTasksCommand}
   */
  describeReplaceRootVolumeTasks(
    args: DescribeReplaceRootVolumeTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeReplaceRootVolumeTasksResult, SdkError>;

  /**
   * @see {@link DescribeReservedInstancesCommand}
   */
  describeReservedInstances(
    args: DescribeReservedInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeReservedInstancesResult, SdkError>;

  /**
   * @see {@link DescribeReservedInstancesListingsCommand}
   */
  describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeReservedInstancesListingsResult, SdkError>;

  /**
   * @see {@link DescribeReservedInstancesModificationsCommand}
   */
  describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeReservedInstancesModificationsResult, SdkError>;

  /**
   * @see {@link DescribeReservedInstancesOfferingsCommand}
   */
  describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeReservedInstancesOfferingsResult, SdkError>;

  /**
   * @see {@link DescribeRouteTablesCommand}
   */
  describeRouteTables(
    args: DescribeRouteTablesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeRouteTablesResult, SdkError>;

  /**
   * @see {@link DescribeScheduledInstanceAvailabilityCommand}
   */
  describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeScheduledInstanceAvailabilityResult, SdkError>;

  /**
   * @see {@link DescribeScheduledInstancesCommand}
   */
  describeScheduledInstances(
    args: DescribeScheduledInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeScheduledInstancesResult, SdkError>;

  /**
   * @see {@link DescribeSecurityGroupReferencesCommand}
   */
  describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSecurityGroupReferencesResult, SdkError>;

  /**
   * @see {@link DescribeSecurityGroupRulesCommand}
   */
  describeSecurityGroupRules(
    args: DescribeSecurityGroupRulesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSecurityGroupRulesResult, SdkError>;

  /**
   * @see {@link DescribeSecurityGroupsCommand}
   */
  describeSecurityGroups(
    args: DescribeSecurityGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSecurityGroupsResult, SdkError>;

  /**
   * @see {@link DescribeSnapshotAttributeCommand}
   */
  describeSnapshotAttribute(
    args: DescribeSnapshotAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSnapshotAttributeResult, SdkError>;

  /**
   * @see {@link DescribeSnapshotTierStatusCommand}
   */
  describeSnapshotTierStatus(
    args: DescribeSnapshotTierStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSnapshotTierStatusResult, SdkError>;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  describeSnapshots(
    args: DescribeSnapshotsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSnapshotsResult, SdkError>;

  /**
   * @see {@link DescribeSpotDatafeedSubscriptionCommand}
   */
  describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSpotDatafeedSubscriptionResult, SdkError>;

  /**
   * @see {@link DescribeSpotFleetInstancesCommand}
   */
  describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSpotFleetInstancesResponse, SdkError>;

  /**
   * @see {@link DescribeSpotFleetRequestHistoryCommand}
   */
  describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSpotFleetRequestHistoryResponse, SdkError>;

  /**
   * @see {@link DescribeSpotFleetRequestsCommand}
   */
  describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSpotFleetRequestsResponse, SdkError>;

  /**
   * @see {@link DescribeSpotInstanceRequestsCommand}
   */
  describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSpotInstanceRequestsResult, SdkError>;

  /**
   * @see {@link DescribeSpotPriceHistoryCommand}
   */
  describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSpotPriceHistoryResult, SdkError>;

  /**
   * @see {@link DescribeStaleSecurityGroupsCommand}
   */
  describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeStaleSecurityGroupsResult, SdkError>;

  /**
   * @see {@link DescribeStoreImageTasksCommand}
   */
  describeStoreImageTasks(
    args: DescribeStoreImageTasksRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeStoreImageTasksResult, SdkError>;

  /**
   * @see {@link DescribeSubnetsCommand}
   */
  describeSubnets(
    args: DescribeSubnetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeSubnetsResult, SdkError>;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTagsResult, SdkError>;

  /**
   * @see {@link DescribeTrafficMirrorFiltersCommand}
   */
  describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTrafficMirrorFiltersResult, SdkError>;

  /**
   * @see {@link DescribeTrafficMirrorSessionsCommand}
   */
  describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTrafficMirrorSessionsResult, SdkError>;

  /**
   * @see {@link DescribeTrafficMirrorTargetsCommand}
   */
  describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTrafficMirrorTargetsResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewayAttachmentsCommand}
   */
  describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewayAttachmentsResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewayConnectPeersCommand}
   */
  describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewayConnectPeersResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewayConnectsCommand}
   */
  describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewayConnectsResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewayMulticastDomainsCommand}
   */
  describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewayMulticastDomainsResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewayPeeringAttachmentsCommand}
   */
  describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewayPeeringAttachmentsResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewayPolicyTablesCommand}
   */
  describeTransitGatewayPolicyTables(
    args: DescribeTransitGatewayPolicyTablesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewayPolicyTablesResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewayRouteTableAnnouncementsCommand}
   */
  describeTransitGatewayRouteTableAnnouncements(
    args: DescribeTransitGatewayRouteTableAnnouncementsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayRouteTableAnnouncementsResult,
    SdkError
  >;

  /**
   * @see {@link DescribeTransitGatewayRouteTablesCommand}
   */
  describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewayRouteTablesResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewayVpcAttachmentsCommand}
   */
  describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewayVpcAttachmentsResult, SdkError>;

  /**
   * @see {@link DescribeTransitGatewaysCommand}
   */
  describeTransitGateways(
    args: DescribeTransitGatewaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTransitGatewaysResult, SdkError>;

  /**
   * @see {@link DescribeTrunkInterfaceAssociationsCommand}
   */
  describeTrunkInterfaceAssociations(
    args: DescribeTrunkInterfaceAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeTrunkInterfaceAssociationsResult, SdkError>;

  /**
   * @see {@link DescribeVerifiedAccessEndpointsCommand}
   */
  describeVerifiedAccessEndpoints(
    args: DescribeVerifiedAccessEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVerifiedAccessEndpointsResult, SdkError>;

  /**
   * @see {@link DescribeVerifiedAccessGroupsCommand}
   */
  describeVerifiedAccessGroups(
    args: DescribeVerifiedAccessGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVerifiedAccessGroupsResult, SdkError>;

  /**
   * @see {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommand}
   */
  describeVerifiedAccessInstanceLoggingConfigurations(
    args: DescribeVerifiedAccessInstanceLoggingConfigurationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVerifiedAccessInstanceLoggingConfigurationsResult,
    SdkError
  >;

  /**
   * @see {@link DescribeVerifiedAccessInstancesCommand}
   */
  describeVerifiedAccessInstances(
    args: DescribeVerifiedAccessInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVerifiedAccessInstancesResult, SdkError>;

  /**
   * @see {@link DescribeVerifiedAccessTrustProvidersCommand}
   */
  describeVerifiedAccessTrustProviders(
    args: DescribeVerifiedAccessTrustProvidersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVerifiedAccessTrustProvidersResult, SdkError>;

  /**
   * @see {@link DescribeVolumeAttributeCommand}
   */
  describeVolumeAttribute(
    args: DescribeVolumeAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVolumeAttributeResult, SdkError>;

  /**
   * @see {@link DescribeVolumeStatusCommand}
   */
  describeVolumeStatus(
    args: DescribeVolumeStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVolumeStatusResult, SdkError>;

  /**
   * @see {@link DescribeVolumesCommand}
   */
  describeVolumes(
    args: DescribeVolumesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVolumesResult, SdkError>;

  /**
   * @see {@link DescribeVolumesModificationsCommand}
   */
  describeVolumesModifications(
    args: DescribeVolumesModificationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVolumesModificationsResult, SdkError>;

  /**
   * @see {@link DescribeVpcAttributeCommand}
   */
  describeVpcAttribute(
    args: DescribeVpcAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcAttributeResult, SdkError>;

  /**
   * @see {@link DescribeVpcClassicLinkCommand}
   */
  describeVpcClassicLink(
    args: DescribeVpcClassicLinkRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcClassicLinkResult, SdkError>;

  /**
   * @see {@link DescribeVpcClassicLinkDnsSupportCommand}
   */
  describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcClassicLinkDnsSupportResult, SdkError>;

  /**
   * @see {@link DescribeVpcEndpointConnectionNotificationsCommand}
   */
  describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcEndpointConnectionNotificationsResult, SdkError>;

  /**
   * @see {@link DescribeVpcEndpointConnectionsCommand}
   */
  describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcEndpointConnectionsResult, SdkError>;

  /**
   * @see {@link DescribeVpcEndpointServiceConfigurationsCommand}
   */
  describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcEndpointServiceConfigurationsResult, SdkError>;

  /**
   * @see {@link DescribeVpcEndpointServicePermissionsCommand}
   */
  describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcEndpointServicePermissionsResult, SdkError>;

  /**
   * @see {@link DescribeVpcEndpointServicesCommand}
   */
  describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcEndpointServicesResult, SdkError>;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  describeVpcEndpoints(
    args: DescribeVpcEndpointsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcEndpointsResult, SdkError>;

  /**
   * @see {@link DescribeVpcPeeringConnectionsCommand}
   */
  describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcPeeringConnectionsResult, SdkError>;

  /**
   * @see {@link DescribeVpcsCommand}
   */
  describeVpcs(
    args: DescribeVpcsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpcsResult, SdkError>;

  /**
   * @see {@link DescribeVpnConnectionsCommand}
   */
  describeVpnConnections(
    args: DescribeVpnConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpnConnectionsResult, SdkError>;

  /**
   * @see {@link DescribeVpnGatewaysCommand}
   */
  describeVpnGateways(
    args: DescribeVpnGatewaysRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DescribeVpnGatewaysResult, SdkError>;

  /**
   * @see {@link DetachClassicLinkVpcCommand}
   */
  detachClassicLinkVpc(
    args: DetachClassicLinkVpcRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DetachClassicLinkVpcResult, SdkError>;

  /**
   * @see {@link DetachInternetGatewayCommand}
   */
  detachInternetGateway(
    args: DetachInternetGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DetachNetworkInterfaceCommand}
   */
  detachNetworkInterface(
    args: DetachNetworkInterfaceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DetachVerifiedAccessTrustProviderCommand}
   */
  detachVerifiedAccessTrustProvider(
    args: DetachVerifiedAccessTrustProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DetachVerifiedAccessTrustProviderResult, SdkError>;

  /**
   * @see {@link DetachVolumeCommand}
   */
  detachVolume(
    args: DetachVolumeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<VolumeAttachment, SdkError>;

  /**
   * @see {@link DetachVpnGatewayCommand}
   */
  detachVpnGateway(
    args: DetachVpnGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DisableAddressTransferCommand}
   */
  disableAddressTransfer(
    args: DisableAddressTransferRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableAddressTransferResult, SdkError>;

  /**
   * @see {@link DisableAwsNetworkPerformanceMetricSubscriptionCommand}
   */
  disableAwsNetworkPerformanceMetricSubscription(
    args: DisableAwsNetworkPerformanceMetricSubscriptionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DisableAwsNetworkPerformanceMetricSubscriptionResult,
    SdkError
  >;

  /**
   * @see {@link DisableEbsEncryptionByDefaultCommand}
   */
  disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableEbsEncryptionByDefaultResult, SdkError>;

  /**
   * @see {@link DisableFastLaunchCommand}
   */
  disableFastLaunch(
    args: DisableFastLaunchRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableFastLaunchResult, SdkError>;

  /**
   * @see {@link DisableFastSnapshotRestoresCommand}
   */
  disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableFastSnapshotRestoresResult, SdkError>;

  /**
   * @see {@link DisableImageCommand}
   */
  disableImage(
    args: DisableImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableImageResult, SdkError>;

  /**
   * @see {@link DisableImageBlockPublicAccessCommand}
   */
  disableImageBlockPublicAccess(
    args: DisableImageBlockPublicAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableImageBlockPublicAccessResult, SdkError>;

  /**
   * @see {@link DisableImageDeprecationCommand}
   */
  disableImageDeprecation(
    args: DisableImageDeprecationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableImageDeprecationResult, SdkError>;

  /**
   * @see {@link DisableIpamOrganizationAdminAccountCommand}
   */
  disableIpamOrganizationAdminAccount(
    args: DisableIpamOrganizationAdminAccountRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableIpamOrganizationAdminAccountResult, SdkError>;

  /**
   * @see {@link DisableSerialConsoleAccessCommand}
   */
  disableSerialConsoleAccess(
    args: DisableSerialConsoleAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableSerialConsoleAccessResult, SdkError>;

  /**
   * @see {@link DisableSnapshotBlockPublicAccessCommand}
   */
  disableSnapshotBlockPublicAccess(
    args: DisableSnapshotBlockPublicAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableSnapshotBlockPublicAccessResult, SdkError>;

  /**
   * @see {@link DisableTransitGatewayRouteTablePropagationCommand}
   */
  disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableTransitGatewayRouteTablePropagationResult, SdkError>;

  /**
   * @see {@link DisableVgwRoutePropagationCommand}
   */
  disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DisableVpcClassicLinkCommand}
   */
  disableVpcClassicLink(
    args: DisableVpcClassicLinkRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableVpcClassicLinkResult, SdkError>;

  /**
   * @see {@link DisableVpcClassicLinkDnsSupportCommand}
   */
  disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisableVpcClassicLinkDnsSupportResult, SdkError>;

  /**
   * @see {@link DisassociateAddressCommand}
   */
  disassociateAddress(
    args: DisassociateAddressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DisassociateClientVpnTargetNetworkCommand}
   */
  disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateClientVpnTargetNetworkResult, SdkError>;

  /**
   * @see {@link DisassociateEnclaveCertificateIamRoleCommand}
   */
  disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateEnclaveCertificateIamRoleResult, SdkError>;

  /**
   * @see {@link DisassociateIamInstanceProfileCommand}
   */
  disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateIamInstanceProfileResult, SdkError>;

  /**
   * @see {@link DisassociateInstanceEventWindowCommand}
   */
  disassociateInstanceEventWindow(
    args: DisassociateInstanceEventWindowRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateInstanceEventWindowResult, SdkError>;

  /**
   * @see {@link DisassociateIpamByoasnCommand}
   */
  disassociateIpamByoasn(
    args: DisassociateIpamByoasnRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateIpamByoasnResult, SdkError>;

  /**
   * @see {@link DisassociateIpamResourceDiscoveryCommand}
   */
  disassociateIpamResourceDiscovery(
    args: DisassociateIpamResourceDiscoveryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateIpamResourceDiscoveryResult, SdkError>;

  /**
   * @see {@link DisassociateNatGatewayAddressCommand}
   */
  disassociateNatGatewayAddress(
    args: DisassociateNatGatewayAddressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateNatGatewayAddressResult, SdkError>;

  /**
   * @see {@link DisassociateRouteTableCommand}
   */
  disassociateRouteTable(
    args: DisassociateRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link DisassociateSubnetCidrBlockCommand}
   */
  disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateSubnetCidrBlockResult, SdkError>;

  /**
   * @see {@link DisassociateTransitGatewayMulticastDomainCommand}
   */
  disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateTransitGatewayMulticastDomainResult, SdkError>;

  /**
   * @see {@link DisassociateTransitGatewayPolicyTableCommand}
   */
  disassociateTransitGatewayPolicyTable(
    args: DisassociateTransitGatewayPolicyTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateTransitGatewayPolicyTableResult, SdkError>;

  /**
   * @see {@link DisassociateTransitGatewayRouteTableCommand}
   */
  disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateTransitGatewayRouteTableResult, SdkError>;

  /**
   * @see {@link DisassociateTrunkInterfaceCommand}
   */
  disassociateTrunkInterface(
    args: DisassociateTrunkInterfaceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateTrunkInterfaceResult, SdkError>;

  /**
   * @see {@link DisassociateVpcCidrBlockCommand}
   */
  disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DisassociateVpcCidrBlockResult, SdkError>;

  /**
   * @see {@link EnableAddressTransferCommand}
   */
  enableAddressTransfer(
    args: EnableAddressTransferRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableAddressTransferResult, SdkError>;

  /**
   * @see {@link EnableAwsNetworkPerformanceMetricSubscriptionCommand}
   */
  enableAwsNetworkPerformanceMetricSubscription(
    args: EnableAwsNetworkPerformanceMetricSubscriptionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnableAwsNetworkPerformanceMetricSubscriptionResult,
    SdkError
  >;

  /**
   * @see {@link EnableEbsEncryptionByDefaultCommand}
   */
  enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableEbsEncryptionByDefaultResult, SdkError>;

  /**
   * @see {@link EnableFastLaunchCommand}
   */
  enableFastLaunch(
    args: EnableFastLaunchRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableFastLaunchResult, SdkError>;

  /**
   * @see {@link EnableFastSnapshotRestoresCommand}
   */
  enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableFastSnapshotRestoresResult, SdkError>;

  /**
   * @see {@link EnableImageCommand}
   */
  enableImage(
    args: EnableImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableImageResult, SdkError>;

  /**
   * @see {@link EnableImageBlockPublicAccessCommand}
   */
  enableImageBlockPublicAccess(
    args: EnableImageBlockPublicAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableImageBlockPublicAccessResult, SdkError>;

  /**
   * @see {@link EnableImageDeprecationCommand}
   */
  enableImageDeprecation(
    args: EnableImageDeprecationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableImageDeprecationResult, SdkError>;

  /**
   * @see {@link EnableIpamOrganizationAdminAccountCommand}
   */
  enableIpamOrganizationAdminAccount(
    args: EnableIpamOrganizationAdminAccountRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableIpamOrganizationAdminAccountResult, SdkError>;

  /**
   * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommand}
   */
  enableReachabilityAnalyzerOrganizationSharing(
    args: EnableReachabilityAnalyzerOrganizationSharingRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    EnableReachabilityAnalyzerOrganizationSharingResult,
    SdkError
  >;

  /**
   * @see {@link EnableSerialConsoleAccessCommand}
   */
  enableSerialConsoleAccess(
    args: EnableSerialConsoleAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableSerialConsoleAccessResult, SdkError>;

  /**
   * @see {@link EnableSnapshotBlockPublicAccessCommand}
   */
  enableSnapshotBlockPublicAccess(
    args: EnableSnapshotBlockPublicAccessRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableSnapshotBlockPublicAccessResult, SdkError>;

  /**
   * @see {@link EnableTransitGatewayRouteTablePropagationCommand}
   */
  enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableTransitGatewayRouteTablePropagationResult, SdkError>;

  /**
   * @see {@link EnableVgwRoutePropagationCommand}
   */
  enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link EnableVolumeIOCommand}
   */
  enableVolumeIO(
    args: EnableVolumeIORequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link EnableVpcClassicLinkCommand}
   */
  enableVpcClassicLink(
    args: EnableVpcClassicLinkRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableVpcClassicLinkResult, SdkError>;

  /**
   * @see {@link EnableVpcClassicLinkDnsSupportCommand}
   */
  enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<EnableVpcClassicLinkDnsSupportResult, SdkError>;

  /**
   * @see {@link ExportClientVpnClientCertificateRevocationListCommand}
   */
  exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ExportClientVpnClientCertificateRevocationListResult,
    SdkError
  >;

  /**
   * @see {@link ExportClientVpnClientConfigurationCommand}
   */
  exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ExportClientVpnClientConfigurationResult, SdkError>;

  /**
   * @see {@link ExportImageCommand}
   */
  exportImage(
    args: ExportImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ExportImageResult, SdkError>;

  /**
   * @see {@link ExportTransitGatewayRoutesCommand}
   */
  exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ExportTransitGatewayRoutesResult, SdkError>;

  /**
   * @see {@link GetAssociatedEnclaveCertificateIamRolesCommand}
   */
  getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetAssociatedEnclaveCertificateIamRolesResult, SdkError>;

  /**
   * @see {@link GetAssociatedIpv6PoolCidrsCommand}
   */
  getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetAssociatedIpv6PoolCidrsResult, SdkError>;

  /**
   * @see {@link GetAwsNetworkPerformanceDataCommand}
   */
  getAwsNetworkPerformanceData(
    args: GetAwsNetworkPerformanceDataRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetAwsNetworkPerformanceDataResult, SdkError>;

  /**
   * @see {@link GetCapacityReservationUsageCommand}
   */
  getCapacityReservationUsage(
    args: GetCapacityReservationUsageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetCapacityReservationUsageResult, SdkError>;

  /**
   * @see {@link GetCoipPoolUsageCommand}
   */
  getCoipPoolUsage(
    args: GetCoipPoolUsageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetCoipPoolUsageResult, SdkError>;

  /**
   * @see {@link GetConsoleOutputCommand}
   */
  getConsoleOutput(
    args: GetConsoleOutputRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetConsoleOutputResult, SdkError>;

  /**
   * @see {@link GetConsoleScreenshotCommand}
   */
  getConsoleScreenshot(
    args: GetConsoleScreenshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetConsoleScreenshotResult, SdkError>;

  /**
   * @see {@link GetDefaultCreditSpecificationCommand}
   */
  getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetDefaultCreditSpecificationResult, SdkError>;

  /**
   * @see {@link GetEbsDefaultKmsKeyIdCommand}
   */
  getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetEbsDefaultKmsKeyIdResult, SdkError>;

  /**
   * @see {@link GetEbsEncryptionByDefaultCommand}
   */
  getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetEbsEncryptionByDefaultResult, SdkError>;

  /**
   * @see {@link GetFlowLogsIntegrationTemplateCommand}
   */
  getFlowLogsIntegrationTemplate(
    args: GetFlowLogsIntegrationTemplateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetFlowLogsIntegrationTemplateResult, SdkError>;

  /**
   * @see {@link GetGroupsForCapacityReservationCommand}
   */
  getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetGroupsForCapacityReservationResult, SdkError>;

  /**
   * @see {@link GetHostReservationPurchasePreviewCommand}
   */
  getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetHostReservationPurchasePreviewResult, SdkError>;

  /**
   * @see {@link GetImageBlockPublicAccessStateCommand}
   */
  getImageBlockPublicAccessState(
    args: GetImageBlockPublicAccessStateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetImageBlockPublicAccessStateResult, SdkError>;

  /**
   * @see {@link GetInstanceMetadataDefaultsCommand}
   */
  getInstanceMetadataDefaults(
    args: GetInstanceMetadataDefaultsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetInstanceMetadataDefaultsResult, SdkError>;

  /**
   * @see {@link GetInstanceTypesFromInstanceRequirementsCommand}
   */
  getInstanceTypesFromInstanceRequirements(
    args: GetInstanceTypesFromInstanceRequirementsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetInstanceTypesFromInstanceRequirementsResult, SdkError>;

  /**
   * @see {@link GetInstanceUefiDataCommand}
   */
  getInstanceUefiData(
    args: GetInstanceUefiDataRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetInstanceUefiDataResult, SdkError>;

  /**
   * @see {@link GetIpamAddressHistoryCommand}
   */
  getIpamAddressHistory(
    args: GetIpamAddressHistoryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetIpamAddressHistoryResult, SdkError>;

  /**
   * @see {@link GetIpamDiscoveredAccountsCommand}
   */
  getIpamDiscoveredAccounts(
    args: GetIpamDiscoveredAccountsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetIpamDiscoveredAccountsResult, SdkError>;

  /**
   * @see {@link GetIpamDiscoveredPublicAddressesCommand}
   */
  getIpamDiscoveredPublicAddresses(
    args: GetIpamDiscoveredPublicAddressesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetIpamDiscoveredPublicAddressesResult, SdkError>;

  /**
   * @see {@link GetIpamDiscoveredResourceCidrsCommand}
   */
  getIpamDiscoveredResourceCidrs(
    args: GetIpamDiscoveredResourceCidrsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetIpamDiscoveredResourceCidrsResult, SdkError>;

  /**
   * @see {@link GetIpamPoolAllocationsCommand}
   */
  getIpamPoolAllocations(
    args: GetIpamPoolAllocationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetIpamPoolAllocationsResult, SdkError>;

  /**
   * @see {@link GetIpamPoolCidrsCommand}
   */
  getIpamPoolCidrs(
    args: GetIpamPoolCidrsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetIpamPoolCidrsResult, SdkError>;

  /**
   * @see {@link GetIpamResourceCidrsCommand}
   */
  getIpamResourceCidrs(
    args: GetIpamResourceCidrsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetIpamResourceCidrsResult, SdkError>;

  /**
   * @see {@link GetLaunchTemplateDataCommand}
   */
  getLaunchTemplateData(
    args: GetLaunchTemplateDataRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetLaunchTemplateDataResult, SdkError>;

  /**
   * @see {@link GetManagedPrefixListAssociationsCommand}
   */
  getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetManagedPrefixListAssociationsResult, SdkError>;

  /**
   * @see {@link GetManagedPrefixListEntriesCommand}
   */
  getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetManagedPrefixListEntriesResult, SdkError>;

  /**
   * @see {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommand}
   */
  getNetworkInsightsAccessScopeAnalysisFindings(
    args: GetNetworkInsightsAccessScopeAnalysisFindingsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetNetworkInsightsAccessScopeAnalysisFindingsResult,
    SdkError
  >;

  /**
   * @see {@link GetNetworkInsightsAccessScopeContentCommand}
   */
  getNetworkInsightsAccessScopeContent(
    args: GetNetworkInsightsAccessScopeContentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetNetworkInsightsAccessScopeContentResult, SdkError>;

  /**
   * @see {@link GetPasswordDataCommand}
   */
  getPasswordData(
    args: GetPasswordDataRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetPasswordDataResult, SdkError>;

  /**
   * @see {@link GetReservedInstancesExchangeQuoteCommand}
   */
  getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetReservedInstancesExchangeQuoteResult, SdkError>;

  /**
   * @see {@link GetSecurityGroupsForVpcCommand}
   */
  getSecurityGroupsForVpc(
    args: GetSecurityGroupsForVpcRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetSecurityGroupsForVpcResult, SdkError>;

  /**
   * @see {@link GetSerialConsoleAccessStatusCommand}
   */
  getSerialConsoleAccessStatus(
    args: GetSerialConsoleAccessStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetSerialConsoleAccessStatusResult, SdkError>;

  /**
   * @see {@link GetSnapshotBlockPublicAccessStateCommand}
   */
  getSnapshotBlockPublicAccessState(
    args: GetSnapshotBlockPublicAccessStateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetSnapshotBlockPublicAccessStateResult, SdkError>;

  /**
   * @see {@link GetSpotPlacementScoresCommand}
   */
  getSpotPlacementScores(
    args: GetSpotPlacementScoresRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetSpotPlacementScoresResult, SdkError>;

  /**
   * @see {@link GetSubnetCidrReservationsCommand}
   */
  getSubnetCidrReservations(
    args: GetSubnetCidrReservationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetSubnetCidrReservationsResult, SdkError>;

  /**
   * @see {@link GetTransitGatewayAttachmentPropagationsCommand}
   */
  getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetTransitGatewayAttachmentPropagationsResult, SdkError>;

  /**
   * @see {@link GetTransitGatewayMulticastDomainAssociationsCommand}
   */
  getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetTransitGatewayMulticastDomainAssociationsResult,
    SdkError
  >;

  /**
   * @see {@link GetTransitGatewayPolicyTableAssociationsCommand}
   */
  getTransitGatewayPolicyTableAssociations(
    args: GetTransitGatewayPolicyTableAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetTransitGatewayPolicyTableAssociationsResult, SdkError>;

  /**
   * @see {@link GetTransitGatewayPolicyTableEntriesCommand}
   */
  getTransitGatewayPolicyTableEntries(
    args: GetTransitGatewayPolicyTableEntriesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetTransitGatewayPolicyTableEntriesResult, SdkError>;

  /**
   * @see {@link GetTransitGatewayPrefixListReferencesCommand}
   */
  getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetTransitGatewayPrefixListReferencesResult, SdkError>;

  /**
   * @see {@link GetTransitGatewayRouteTableAssociationsCommand}
   */
  getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetTransitGatewayRouteTableAssociationsResult, SdkError>;

  /**
   * @see {@link GetTransitGatewayRouteTablePropagationsCommand}
   */
  getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetTransitGatewayRouteTablePropagationsResult, SdkError>;

  /**
   * @see {@link GetVerifiedAccessEndpointPolicyCommand}
   */
  getVerifiedAccessEndpointPolicy(
    args: GetVerifiedAccessEndpointPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetVerifiedAccessEndpointPolicyResult, SdkError>;

  /**
   * @see {@link GetVerifiedAccessGroupPolicyCommand}
   */
  getVerifiedAccessGroupPolicy(
    args: GetVerifiedAccessGroupPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetVerifiedAccessGroupPolicyResult, SdkError>;

  /**
   * @see {@link GetVpnConnectionDeviceSampleConfigurationCommand}
   */
  getVpnConnectionDeviceSampleConfiguration(
    args: GetVpnConnectionDeviceSampleConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetVpnConnectionDeviceSampleConfigurationResult, SdkError>;

  /**
   * @see {@link GetVpnConnectionDeviceTypesCommand}
   */
  getVpnConnectionDeviceTypes(
    args: GetVpnConnectionDeviceTypesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetVpnConnectionDeviceTypesResult, SdkError>;

  /**
   * @see {@link GetVpnTunnelReplacementStatusCommand}
   */
  getVpnTunnelReplacementStatus(
    args: GetVpnTunnelReplacementStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<GetVpnTunnelReplacementStatusResult, SdkError>;

  /**
   * @see {@link ImportClientVpnClientCertificateRevocationListCommand}
   */
  importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ImportClientVpnClientCertificateRevocationListResult,
    SdkError
  >;

  /**
   * @see {@link ImportImageCommand}
   */
  importImage(
    args: ImportImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ImportImageResult, SdkError>;

  /**
   * @see {@link ImportInstanceCommand}
   */
  importInstance(
    args: ImportInstanceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ImportInstanceResult, SdkError>;

  /**
   * @see {@link ImportKeyPairCommand}
   */
  importKeyPair(
    args: ImportKeyPairRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ImportKeyPairResult, SdkError>;

  /**
   * @see {@link ImportSnapshotCommand}
   */
  importSnapshot(
    args: ImportSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ImportSnapshotResult, SdkError>;

  /**
   * @see {@link ImportVolumeCommand}
   */
  importVolume(
    args: ImportVolumeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ImportVolumeResult, SdkError>;

  /**
   * @see {@link ListImagesInRecycleBinCommand}
   */
  listImagesInRecycleBin(
    args: ListImagesInRecycleBinRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListImagesInRecycleBinResult, SdkError>;

  /**
   * @see {@link ListSnapshotsInRecycleBinCommand}
   */
  listSnapshotsInRecycleBin(
    args: ListSnapshotsInRecycleBinRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ListSnapshotsInRecycleBinResult, SdkError>;

  /**
   * @see {@link LockSnapshotCommand}
   */
  lockSnapshot(
    args: LockSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<LockSnapshotResult, SdkError>;

  /**
   * @see {@link ModifyAddressAttributeCommand}
   */
  modifyAddressAttribute(
    args: ModifyAddressAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyAddressAttributeResult, SdkError>;

  /**
   * @see {@link ModifyAvailabilityZoneGroupCommand}
   */
  modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyAvailabilityZoneGroupResult, SdkError>;

  /**
   * @see {@link ModifyCapacityReservationCommand}
   */
  modifyCapacityReservation(
    args: ModifyCapacityReservationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyCapacityReservationResult, SdkError>;

  /**
   * @see {@link ModifyCapacityReservationFleetCommand}
   */
  modifyCapacityReservationFleet(
    args: ModifyCapacityReservationFleetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyCapacityReservationFleetResult, SdkError>;

  /**
   * @see {@link ModifyClientVpnEndpointCommand}
   */
  modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyClientVpnEndpointResult, SdkError>;

  /**
   * @see {@link ModifyDefaultCreditSpecificationCommand}
   */
  modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyDefaultCreditSpecificationResult, SdkError>;

  /**
   * @see {@link ModifyEbsDefaultKmsKeyIdCommand}
   */
  modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyEbsDefaultKmsKeyIdResult, SdkError>;

  /**
   * @see {@link ModifyFleetCommand}
   */
  modifyFleet(
    args: ModifyFleetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyFleetResult, SdkError>;

  /**
   * @see {@link ModifyFpgaImageAttributeCommand}
   */
  modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyFpgaImageAttributeResult, SdkError>;

  /**
   * @see {@link ModifyHostsCommand}
   */
  modifyHosts(
    args: ModifyHostsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyHostsResult, SdkError>;

  /**
   * @see {@link ModifyIdFormatCommand}
   */
  modifyIdFormat(
    args: ModifyIdFormatRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifyIdentityIdFormatCommand}
   */
  modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifyImageAttributeCommand}
   */
  modifyImageAttribute(
    args: ModifyImageAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifyInstanceAttributeCommand}
   */
  modifyInstanceAttribute(
    args: ModifyInstanceAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifyInstanceCapacityReservationAttributesCommand}
   */
  modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyInstanceCapacityReservationAttributesResult, SdkError>;

  /**
   * @see {@link ModifyInstanceCreditSpecificationCommand}
   */
  modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyInstanceCreditSpecificationResult, SdkError>;

  /**
   * @see {@link ModifyInstanceEventStartTimeCommand}
   */
  modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyInstanceEventStartTimeResult, SdkError>;

  /**
   * @see {@link ModifyInstanceEventWindowCommand}
   */
  modifyInstanceEventWindow(
    args: ModifyInstanceEventWindowRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyInstanceEventWindowResult, SdkError>;

  /**
   * @see {@link ModifyInstanceMaintenanceOptionsCommand}
   */
  modifyInstanceMaintenanceOptions(
    args: ModifyInstanceMaintenanceOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyInstanceMaintenanceOptionsResult, SdkError>;

  /**
   * @see {@link ModifyInstanceMetadataDefaultsCommand}
   */
  modifyInstanceMetadataDefaults(
    args: ModifyInstanceMetadataDefaultsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyInstanceMetadataDefaultsResult, SdkError>;

  /**
   * @see {@link ModifyInstanceMetadataOptionsCommand}
   */
  modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyInstanceMetadataOptionsResult, SdkError>;

  /**
   * @see {@link ModifyInstancePlacementCommand}
   */
  modifyInstancePlacement(
    args: ModifyInstancePlacementRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyInstancePlacementResult, SdkError>;

  /**
   * @see {@link ModifyIpamCommand}
   */
  modifyIpam(
    args: ModifyIpamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyIpamResult, SdkError>;

  /**
   * @see {@link ModifyIpamPoolCommand}
   */
  modifyIpamPool(
    args: ModifyIpamPoolRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyIpamPoolResult, SdkError>;

  /**
   * @see {@link ModifyIpamResourceCidrCommand}
   */
  modifyIpamResourceCidr(
    args: ModifyIpamResourceCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyIpamResourceCidrResult, SdkError>;

  /**
   * @see {@link ModifyIpamResourceDiscoveryCommand}
   */
  modifyIpamResourceDiscovery(
    args: ModifyIpamResourceDiscoveryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyIpamResourceDiscoveryResult, SdkError>;

  /**
   * @see {@link ModifyIpamScopeCommand}
   */
  modifyIpamScope(
    args: ModifyIpamScopeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyIpamScopeResult, SdkError>;

  /**
   * @see {@link ModifyLaunchTemplateCommand}
   */
  modifyLaunchTemplate(
    args: ModifyLaunchTemplateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyLaunchTemplateResult, SdkError>;

  /**
   * @see {@link ModifyLocalGatewayRouteCommand}
   */
  modifyLocalGatewayRoute(
    args: ModifyLocalGatewayRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyLocalGatewayRouteResult, SdkError>;

  /**
   * @see {@link ModifyManagedPrefixListCommand}
   */
  modifyManagedPrefixList(
    args: ModifyManagedPrefixListRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyManagedPrefixListResult, SdkError>;

  /**
   * @see {@link ModifyNetworkInterfaceAttributeCommand}
   */
  modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifyPrivateDnsNameOptionsCommand}
   */
  modifyPrivateDnsNameOptions(
    args: ModifyPrivateDnsNameOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyPrivateDnsNameOptionsResult, SdkError>;

  /**
   * @see {@link ModifyReservedInstancesCommand}
   */
  modifyReservedInstances(
    args: ModifyReservedInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyReservedInstancesResult, SdkError>;

  /**
   * @see {@link ModifySecurityGroupRulesCommand}
   */
  modifySecurityGroupRules(
    args: ModifySecurityGroupRulesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifySecurityGroupRulesResult, SdkError>;

  /**
   * @see {@link ModifySnapshotAttributeCommand}
   */
  modifySnapshotAttribute(
    args: ModifySnapshotAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifySnapshotTierCommand}
   */
  modifySnapshotTier(
    args: ModifySnapshotTierRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifySnapshotTierResult, SdkError>;

  /**
   * @see {@link ModifySpotFleetRequestCommand}
   */
  modifySpotFleetRequest(
    args: ModifySpotFleetRequestRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifySpotFleetRequestResponse, SdkError>;

  /**
   * @see {@link ModifySubnetAttributeCommand}
   */
  modifySubnetAttribute(
    args: ModifySubnetAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommand}
   */
  modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyTrafficMirrorFilterNetworkServicesResult, SdkError>;

  /**
   * @see {@link ModifyTrafficMirrorFilterRuleCommand}
   */
  modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyTrafficMirrorFilterRuleResult, SdkError>;

  /**
   * @see {@link ModifyTrafficMirrorSessionCommand}
   */
  modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyTrafficMirrorSessionResult, SdkError>;

  /**
   * @see {@link ModifyTransitGatewayCommand}
   */
  modifyTransitGateway(
    args: ModifyTransitGatewayRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyTransitGatewayResult, SdkError>;

  /**
   * @see {@link ModifyTransitGatewayPrefixListReferenceCommand}
   */
  modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyTransitGatewayPrefixListReferenceResult, SdkError>;

  /**
   * @see {@link ModifyTransitGatewayVpcAttachmentCommand}
   */
  modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyTransitGatewayVpcAttachmentResult, SdkError>;

  /**
   * @see {@link ModifyVerifiedAccessEndpointCommand}
   */
  modifyVerifiedAccessEndpoint(
    args: ModifyVerifiedAccessEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVerifiedAccessEndpointResult, SdkError>;

  /**
   * @see {@link ModifyVerifiedAccessEndpointPolicyCommand}
   */
  modifyVerifiedAccessEndpointPolicy(
    args: ModifyVerifiedAccessEndpointPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVerifiedAccessEndpointPolicyResult, SdkError>;

  /**
   * @see {@link ModifyVerifiedAccessGroupCommand}
   */
  modifyVerifiedAccessGroup(
    args: ModifyVerifiedAccessGroupRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVerifiedAccessGroupResult, SdkError>;

  /**
   * @see {@link ModifyVerifiedAccessGroupPolicyCommand}
   */
  modifyVerifiedAccessGroupPolicy(
    args: ModifyVerifiedAccessGroupPolicyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVerifiedAccessGroupPolicyResult, SdkError>;

  /**
   * @see {@link ModifyVerifiedAccessInstanceCommand}
   */
  modifyVerifiedAccessInstance(
    args: ModifyVerifiedAccessInstanceRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVerifiedAccessInstanceResult, SdkError>;

  /**
   * @see {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommand}
   */
  modifyVerifiedAccessInstanceLoggingConfiguration(
    args: ModifyVerifiedAccessInstanceLoggingConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVerifiedAccessInstanceLoggingConfigurationResult,
    SdkError
  >;

  /**
   * @see {@link ModifyVerifiedAccessTrustProviderCommand}
   */
  modifyVerifiedAccessTrustProvider(
    args: ModifyVerifiedAccessTrustProviderRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVerifiedAccessTrustProviderResult, SdkError>;

  /**
   * @see {@link ModifyVolumeCommand}
   */
  modifyVolume(
    args: ModifyVolumeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVolumeResult, SdkError>;

  /**
   * @see {@link ModifyVolumeAttributeCommand}
   */
  modifyVolumeAttribute(
    args: ModifyVolumeAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifyVpcAttributeCommand}
   */
  modifyVpcAttribute(
    args: ModifyVpcAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ModifyVpcEndpointCommand}
   */
  modifyVpcEndpoint(
    args: ModifyVpcEndpointRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpcEndpointResult, SdkError>;

  /**
   * @see {@link ModifyVpcEndpointConnectionNotificationCommand}
   */
  modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpcEndpointConnectionNotificationResult, SdkError>;

  /**
   * @see {@link ModifyVpcEndpointServiceConfigurationCommand}
   */
  modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpcEndpointServiceConfigurationResult, SdkError>;

  /**
   * @see {@link ModifyVpcEndpointServicePayerResponsibilityCommand}
   */
  modifyVpcEndpointServicePayerResponsibility(
    args: ModifyVpcEndpointServicePayerResponsibilityRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpcEndpointServicePayerResponsibilityResult, SdkError>;

  /**
   * @see {@link ModifyVpcEndpointServicePermissionsCommand}
   */
  modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpcEndpointServicePermissionsResult, SdkError>;

  /**
   * @see {@link ModifyVpcPeeringConnectionOptionsCommand}
   */
  modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpcPeeringConnectionOptionsResult, SdkError>;

  /**
   * @see {@link ModifyVpcTenancyCommand}
   */
  modifyVpcTenancy(
    args: ModifyVpcTenancyRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpcTenancyResult, SdkError>;

  /**
   * @see {@link ModifyVpnConnectionCommand}
   */
  modifyVpnConnection(
    args: ModifyVpnConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpnConnectionResult, SdkError>;

  /**
   * @see {@link ModifyVpnConnectionOptionsCommand}
   */
  modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpnConnectionOptionsResult, SdkError>;

  /**
   * @see {@link ModifyVpnTunnelCertificateCommand}
   */
  modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpnTunnelCertificateResult, SdkError>;

  /**
   * @see {@link ModifyVpnTunnelOptionsCommand}
   */
  modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ModifyVpnTunnelOptionsResult, SdkError>;

  /**
   * @see {@link MonitorInstancesCommand}
   */
  monitorInstances(
    args: MonitorInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<MonitorInstancesResult, SdkError>;

  /**
   * @see {@link MoveAddressToVpcCommand}
   */
  moveAddressToVpc(
    args: MoveAddressToVpcRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<MoveAddressToVpcResult, SdkError>;

  /**
   * @see {@link MoveByoipCidrToIpamCommand}
   */
  moveByoipCidrToIpam(
    args: MoveByoipCidrToIpamRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<MoveByoipCidrToIpamResult, SdkError>;

  /**
   * @see {@link ProvisionByoipCidrCommand}
   */
  provisionByoipCidr(
    args: ProvisionByoipCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ProvisionByoipCidrResult, SdkError>;

  /**
   * @see {@link ProvisionIpamByoasnCommand}
   */
  provisionIpamByoasn(
    args: ProvisionIpamByoasnRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ProvisionIpamByoasnResult, SdkError>;

  /**
   * @see {@link ProvisionIpamPoolCidrCommand}
   */
  provisionIpamPoolCidr(
    args: ProvisionIpamPoolCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ProvisionIpamPoolCidrResult, SdkError>;

  /**
   * @see {@link ProvisionPublicIpv4PoolCidrCommand}
   */
  provisionPublicIpv4PoolCidr(
    args: ProvisionPublicIpv4PoolCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ProvisionPublicIpv4PoolCidrResult, SdkError>;

  /**
   * @see {@link PurchaseCapacityBlockCommand}
   */
  purchaseCapacityBlock(
    args: PurchaseCapacityBlockRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PurchaseCapacityBlockResult, SdkError>;

  /**
   * @see {@link PurchaseHostReservationCommand}
   */
  purchaseHostReservation(
    args: PurchaseHostReservationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PurchaseHostReservationResult, SdkError>;

  /**
   * @see {@link PurchaseReservedInstancesOfferingCommand}
   */
  purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PurchaseReservedInstancesOfferingResult, SdkError>;

  /**
   * @see {@link PurchaseScheduledInstancesCommand}
   */
  purchaseScheduledInstances(
    args: PurchaseScheduledInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<PurchaseScheduledInstancesResult, SdkError>;

  /**
   * @see {@link RebootInstancesCommand}
   */
  rebootInstances(
    args: RebootInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link RegisterImageCommand}
   */
  registerImage(
    args: RegisterImageRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RegisterImageResult, SdkError>;

  /**
   * @see {@link RegisterInstanceEventNotificationAttributesCommand}
   */
  registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RegisterInstanceEventNotificationAttributesResult, SdkError>;

  /**
   * @see {@link RegisterTransitGatewayMulticastGroupMembersCommand}
   */
  registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RegisterTransitGatewayMulticastGroupMembersResult, SdkError>;

  /**
   * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommand}
   */
  registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RegisterTransitGatewayMulticastGroupSourcesResult, SdkError>;

  /**
   * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommand}
   */
  rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RejectTransitGatewayMulticastDomainAssociationsResult,
    SdkError
  >;

  /**
   * @see {@link RejectTransitGatewayPeeringAttachmentCommand}
   */
  rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RejectTransitGatewayPeeringAttachmentResult, SdkError>;

  /**
   * @see {@link RejectTransitGatewayVpcAttachmentCommand}
   */
  rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RejectTransitGatewayVpcAttachmentResult, SdkError>;

  /**
   * @see {@link RejectVpcEndpointConnectionsCommand}
   */
  rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RejectVpcEndpointConnectionsResult, SdkError>;

  /**
   * @see {@link RejectVpcPeeringConnectionCommand}
   */
  rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RejectVpcPeeringConnectionResult, SdkError>;

  /**
   * @see {@link ReleaseAddressCommand}
   */
  releaseAddress(
    args: ReleaseAddressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ReleaseHostsCommand}
   */
  releaseHosts(
    args: ReleaseHostsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ReleaseHostsResult, SdkError>;

  /**
   * @see {@link ReleaseIpamPoolAllocationCommand}
   */
  releaseIpamPoolAllocation(
    args: ReleaseIpamPoolAllocationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ReleaseIpamPoolAllocationResult, SdkError>;

  /**
   * @see {@link ReplaceIamInstanceProfileAssociationCommand}
   */
  replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ReplaceIamInstanceProfileAssociationResult, SdkError>;

  /**
   * @see {@link ReplaceNetworkAclAssociationCommand}
   */
  replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ReplaceNetworkAclAssociationResult, SdkError>;

  /**
   * @see {@link ReplaceNetworkAclEntryCommand}
   */
  replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ReplaceRouteCommand}
   */
  replaceRoute(
    args: ReplaceRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ReplaceRouteTableAssociationCommand}
   */
  replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ReplaceRouteTableAssociationResult, SdkError>;

  /**
   * @see {@link ReplaceTransitGatewayRouteCommand}
   */
  replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ReplaceTransitGatewayRouteResult, SdkError>;

  /**
   * @see {@link ReplaceVpnTunnelCommand}
   */
  replaceVpnTunnel(
    args: ReplaceVpnTunnelRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ReplaceVpnTunnelResult, SdkError>;

  /**
   * @see {@link ReportInstanceStatusCommand}
   */
  reportInstanceStatus(
    args: ReportInstanceStatusRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link RequestSpotFleetCommand}
   */
  requestSpotFleet(
    args: RequestSpotFleetRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RequestSpotFleetResponse, SdkError>;

  /**
   * @see {@link RequestSpotInstancesCommand}
   */
  requestSpotInstances(
    args: RequestSpotInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RequestSpotInstancesResult, SdkError>;

  /**
   * @see {@link ResetAddressAttributeCommand}
   */
  resetAddressAttribute(
    args: ResetAddressAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ResetAddressAttributeResult, SdkError>;

  /**
   * @see {@link ResetEbsDefaultKmsKeyIdCommand}
   */
  resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ResetEbsDefaultKmsKeyIdResult, SdkError>;

  /**
   * @see {@link ResetFpgaImageAttributeCommand}
   */
  resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<ResetFpgaImageAttributeResult, SdkError>;

  /**
   * @see {@link ResetImageAttributeCommand}
   */
  resetImageAttribute(
    args: ResetImageAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ResetInstanceAttributeCommand}
   */
  resetInstanceAttribute(
    args: ResetInstanceAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ResetNetworkInterfaceAttributeCommand}
   */
  resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link ResetSnapshotAttributeCommand}
   */
  resetSnapshotAttribute(
    args: ResetSnapshotAttributeRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link RestoreAddressToClassicCommand}
   */
  restoreAddressToClassic(
    args: RestoreAddressToClassicRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RestoreAddressToClassicResult, SdkError>;

  /**
   * @see {@link RestoreImageFromRecycleBinCommand}
   */
  restoreImageFromRecycleBin(
    args: RestoreImageFromRecycleBinRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RestoreImageFromRecycleBinResult, SdkError>;

  /**
   * @see {@link RestoreManagedPrefixListVersionCommand}
   */
  restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RestoreManagedPrefixListVersionResult, SdkError>;

  /**
   * @see {@link RestoreSnapshotFromRecycleBinCommand}
   */
  restoreSnapshotFromRecycleBin(
    args: RestoreSnapshotFromRecycleBinRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RestoreSnapshotFromRecycleBinResult, SdkError>;

  /**
   * @see {@link RestoreSnapshotTierCommand}
   */
  restoreSnapshotTier(
    args: RestoreSnapshotTierRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RestoreSnapshotTierResult, SdkError>;

  /**
   * @see {@link RevokeClientVpnIngressCommand}
   */
  revokeClientVpnIngress(
    args: RevokeClientVpnIngressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RevokeClientVpnIngressResult, SdkError>;

  /**
   * @see {@link RevokeSecurityGroupEgressCommand}
   */
  revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RevokeSecurityGroupEgressResult, SdkError>;

  /**
   * @see {@link RevokeSecurityGroupIngressCommand}
   */
  revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RevokeSecurityGroupIngressResult, SdkError>;

  /**
   * @see {@link RunInstancesCommand}
   */
  runInstances(
    args: RunInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<Reservation, SdkError>;

  /**
   * @see {@link RunScheduledInstancesCommand}
   */
  runScheduledInstances(
    args: RunScheduledInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<RunScheduledInstancesResult, SdkError>;

  /**
   * @see {@link SearchLocalGatewayRoutesCommand}
   */
  searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<SearchLocalGatewayRoutesResult, SdkError>;

  /**
   * @see {@link SearchTransitGatewayMulticastGroupsCommand}
   */
  searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<SearchTransitGatewayMulticastGroupsResult, SdkError>;

  /**
   * @see {@link SearchTransitGatewayRoutesCommand}
   */
  searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<SearchTransitGatewayRoutesResult, SdkError>;

  /**
   * @see {@link SendDiagnosticInterruptCommand}
   */
  sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link StartInstancesCommand}
   */
  startInstances(
    args: StartInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<StartInstancesResult, SdkError>;

  /**
   * @see {@link StartNetworkInsightsAccessScopeAnalysisCommand}
   */
  startNetworkInsightsAccessScopeAnalysis(
    args: StartNetworkInsightsAccessScopeAnalysisRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<StartNetworkInsightsAccessScopeAnalysisResult, SdkError>;

  /**
   * @see {@link StartNetworkInsightsAnalysisCommand}
   */
  startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<StartNetworkInsightsAnalysisResult, SdkError>;

  /**
   * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommand}
   */
  startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StartVpcEndpointServicePrivateDnsVerificationResult,
    SdkError
  >;

  /**
   * @see {@link StopInstancesCommand}
   */
  stopInstances(
    args: StopInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<StopInstancesResult, SdkError>;

  /**
   * @see {@link TerminateClientVpnConnectionsCommand}
   */
  terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<TerminateClientVpnConnectionsResult, SdkError>;

  /**
   * @see {@link TerminateInstancesCommand}
   */
  terminateInstances(
    args: TerminateInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<TerminateInstancesResult, SdkError>;

  /**
   * @see {@link UnassignIpv6AddressesCommand}
   */
  unassignIpv6Addresses(
    args: UnassignIpv6AddressesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UnassignIpv6AddressesResult, SdkError>;

  /**
   * @see {@link UnassignPrivateIpAddressesCommand}
   */
  unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<void, SdkError>;

  /**
   * @see {@link UnassignPrivateNatGatewayAddressCommand}
   */
  unassignPrivateNatGatewayAddress(
    args: UnassignPrivateNatGatewayAddressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UnassignPrivateNatGatewayAddressResult, SdkError>;

  /**
   * @see {@link UnlockSnapshotCommand}
   */
  unlockSnapshot(
    args: UnlockSnapshotRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UnlockSnapshotResult, SdkError>;

  /**
   * @see {@link UnmonitorInstancesCommand}
   */
  unmonitorInstances(
    args: UnmonitorInstancesRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UnmonitorInstancesResult, SdkError>;

  /**
   * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommand}
   */
  updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UpdateSecurityGroupRuleDescriptionsEgressResult, SdkError>;

  /**
   * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommand}
   */
  updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<UpdateSecurityGroupRuleDescriptionsIngressResult, SdkError>;

  /**
   * @see {@link WithdrawByoipCidrCommand}
   */
  withdrawByoipCidr(
    args: WithdrawByoipCidrRequest,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<WithdrawByoipCidrResult, SdkError>;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const EC2Service = Context.GenericTag<EC2Service>(
  "@effect-aws/client-ec2/EC2Service",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeEC2Service = Effect.gen(function* (_) {
  const client = yield* _(EC2ClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof SdkEC2ServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<SdkEC2ServiceException>
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
  }, {}) as EC2Service;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseEC2ServiceLayer = Layer.effect(EC2Service, makeEC2Service);

/**
 * @since 1.0.0
 * @category layers
 */
export const EC2ServiceLayer = BaseEC2ServiceLayer.pipe(
  Layer.provide(EC2ClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultEC2ServiceLayer = EC2ServiceLayer.pipe(
  Layer.provide(DefaultEC2ClientConfigLayer),
);
