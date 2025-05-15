/**
 * @since 1.0.0
 */
import {
  AcceptAddressTransferCommand,
  type AcceptAddressTransferCommandInput,
  type AcceptAddressTransferCommandOutput,
  AcceptCapacityReservationBillingOwnershipCommand,
  type AcceptCapacityReservationBillingOwnershipCommandInput,
  type AcceptCapacityReservationBillingOwnershipCommandOutput,
  AcceptReservedInstancesExchangeQuoteCommand,
  type AcceptReservedInstancesExchangeQuoteCommandInput,
  type AcceptReservedInstancesExchangeQuoteCommandOutput,
  AcceptTransitGatewayMulticastDomainAssociationsCommand,
  type AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
  type AcceptTransitGatewayMulticastDomainAssociationsCommandOutput,
  AcceptTransitGatewayPeeringAttachmentCommand,
  type AcceptTransitGatewayPeeringAttachmentCommandInput,
  type AcceptTransitGatewayPeeringAttachmentCommandOutput,
  AcceptTransitGatewayVpcAttachmentCommand,
  type AcceptTransitGatewayVpcAttachmentCommandInput,
  type AcceptTransitGatewayVpcAttachmentCommandOutput,
  AcceptVpcEndpointConnectionsCommand,
  type AcceptVpcEndpointConnectionsCommandInput,
  type AcceptVpcEndpointConnectionsCommandOutput,
  AcceptVpcPeeringConnectionCommand,
  type AcceptVpcPeeringConnectionCommandInput,
  type AcceptVpcPeeringConnectionCommandOutput,
  AdvertiseByoipCidrCommand,
  type AdvertiseByoipCidrCommandInput,
  type AdvertiseByoipCidrCommandOutput,
  AllocateAddressCommand,
  type AllocateAddressCommandInput,
  type AllocateAddressCommandOutput,
  AllocateHostsCommand,
  type AllocateHostsCommandInput,
  type AllocateHostsCommandOutput,
  AllocateIpamPoolCidrCommand,
  type AllocateIpamPoolCidrCommandInput,
  type AllocateIpamPoolCidrCommandOutput,
  ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  type ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
  type ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
  AssignIpv6AddressesCommand,
  type AssignIpv6AddressesCommandInput,
  type AssignIpv6AddressesCommandOutput,
  AssignPrivateIpAddressesCommand,
  type AssignPrivateIpAddressesCommandInput,
  type AssignPrivateIpAddressesCommandOutput,
  AssignPrivateNatGatewayAddressCommand,
  type AssignPrivateNatGatewayAddressCommandInput,
  type AssignPrivateNatGatewayAddressCommandOutput,
  AssociateAddressCommand,
  type AssociateAddressCommandInput,
  type AssociateAddressCommandOutput,
  AssociateCapacityReservationBillingOwnerCommand,
  type AssociateCapacityReservationBillingOwnerCommandInput,
  type AssociateCapacityReservationBillingOwnerCommandOutput,
  AssociateClientVpnTargetNetworkCommand,
  type AssociateClientVpnTargetNetworkCommandInput,
  type AssociateClientVpnTargetNetworkCommandOutput,
  AssociateDhcpOptionsCommand,
  type AssociateDhcpOptionsCommandInput,
  type AssociateDhcpOptionsCommandOutput,
  AssociateEnclaveCertificateIamRoleCommand,
  type AssociateEnclaveCertificateIamRoleCommandInput,
  type AssociateEnclaveCertificateIamRoleCommandOutput,
  AssociateIamInstanceProfileCommand,
  type AssociateIamInstanceProfileCommandInput,
  type AssociateIamInstanceProfileCommandOutput,
  AssociateInstanceEventWindowCommand,
  type AssociateInstanceEventWindowCommandInput,
  type AssociateInstanceEventWindowCommandOutput,
  AssociateIpamByoasnCommand,
  type AssociateIpamByoasnCommandInput,
  type AssociateIpamByoasnCommandOutput,
  AssociateIpamResourceDiscoveryCommand,
  type AssociateIpamResourceDiscoveryCommandInput,
  type AssociateIpamResourceDiscoveryCommandOutput,
  AssociateNatGatewayAddressCommand,
  type AssociateNatGatewayAddressCommandInput,
  type AssociateNatGatewayAddressCommandOutput,
  AssociateRouteServerCommand,
  type AssociateRouteServerCommandInput,
  type AssociateRouteServerCommandOutput,
  AssociateRouteTableCommand,
  type AssociateRouteTableCommandInput,
  type AssociateRouteTableCommandOutput,
  AssociateSecurityGroupVpcCommand,
  type AssociateSecurityGroupVpcCommandInput,
  type AssociateSecurityGroupVpcCommandOutput,
  AssociateSubnetCidrBlockCommand,
  type AssociateSubnetCidrBlockCommandInput,
  type AssociateSubnetCidrBlockCommandOutput,
  AssociateTransitGatewayMulticastDomainCommand,
  type AssociateTransitGatewayMulticastDomainCommandInput,
  type AssociateTransitGatewayMulticastDomainCommandOutput,
  AssociateTransitGatewayPolicyTableCommand,
  type AssociateTransitGatewayPolicyTableCommandInput,
  type AssociateTransitGatewayPolicyTableCommandOutput,
  AssociateTransitGatewayRouteTableCommand,
  type AssociateTransitGatewayRouteTableCommandInput,
  type AssociateTransitGatewayRouteTableCommandOutput,
  AssociateTrunkInterfaceCommand,
  type AssociateTrunkInterfaceCommandInput,
  type AssociateTrunkInterfaceCommandOutput,
  AssociateVpcCidrBlockCommand,
  type AssociateVpcCidrBlockCommandInput,
  type AssociateVpcCidrBlockCommandOutput,
  AttachClassicLinkVpcCommand,
  type AttachClassicLinkVpcCommandInput,
  type AttachClassicLinkVpcCommandOutput,
  AttachInternetGatewayCommand,
  type AttachInternetGatewayCommandInput,
  type AttachInternetGatewayCommandOutput,
  AttachNetworkInterfaceCommand,
  type AttachNetworkInterfaceCommandInput,
  type AttachNetworkInterfaceCommandOutput,
  AttachVerifiedAccessTrustProviderCommand,
  type AttachVerifiedAccessTrustProviderCommandInput,
  type AttachVerifiedAccessTrustProviderCommandOutput,
  AttachVolumeCommand,
  type AttachVolumeCommandInput,
  type AttachVolumeCommandOutput,
  AttachVpnGatewayCommand,
  type AttachVpnGatewayCommandInput,
  type AttachVpnGatewayCommandOutput,
  AuthorizeClientVpnIngressCommand,
  type AuthorizeClientVpnIngressCommandInput,
  type AuthorizeClientVpnIngressCommandOutput,
  AuthorizeSecurityGroupEgressCommand,
  type AuthorizeSecurityGroupEgressCommandInput,
  type AuthorizeSecurityGroupEgressCommandOutput,
  AuthorizeSecurityGroupIngressCommand,
  type AuthorizeSecurityGroupIngressCommandInput,
  type AuthorizeSecurityGroupIngressCommandOutput,
  BundleInstanceCommand,
  type BundleInstanceCommandInput,
  type BundleInstanceCommandOutput,
  CancelBundleTaskCommand,
  type CancelBundleTaskCommandInput,
  type CancelBundleTaskCommandOutput,
  CancelCapacityReservationCommand,
  type CancelCapacityReservationCommandInput,
  type CancelCapacityReservationCommandOutput,
  CancelCapacityReservationFleetsCommand,
  type CancelCapacityReservationFleetsCommandInput,
  type CancelCapacityReservationFleetsCommandOutput,
  CancelConversionTaskCommand,
  type CancelConversionTaskCommandInput,
  type CancelConversionTaskCommandOutput,
  CancelDeclarativePoliciesReportCommand,
  type CancelDeclarativePoliciesReportCommandInput,
  type CancelDeclarativePoliciesReportCommandOutput,
  CancelExportTaskCommand,
  type CancelExportTaskCommandInput,
  type CancelExportTaskCommandOutput,
  CancelImageLaunchPermissionCommand,
  type CancelImageLaunchPermissionCommandInput,
  type CancelImageLaunchPermissionCommandOutput,
  CancelImportTaskCommand,
  type CancelImportTaskCommandInput,
  type CancelImportTaskCommandOutput,
  CancelReservedInstancesListingCommand,
  type CancelReservedInstancesListingCommandInput,
  type CancelReservedInstancesListingCommandOutput,
  CancelSpotFleetRequestsCommand,
  type CancelSpotFleetRequestsCommandInput,
  type CancelSpotFleetRequestsCommandOutput,
  CancelSpotInstanceRequestsCommand,
  type CancelSpotInstanceRequestsCommandInput,
  type CancelSpotInstanceRequestsCommandOutput,
  ConfirmProductInstanceCommand,
  type ConfirmProductInstanceCommandInput,
  type ConfirmProductInstanceCommandOutput,
  CopyFpgaImageCommand,
  type CopyFpgaImageCommandInput,
  type CopyFpgaImageCommandOutput,
  CopyImageCommand,
  type CopyImageCommandInput,
  type CopyImageCommandOutput,
  CopySnapshotCommand,
  type CopySnapshotCommandInput,
  type CopySnapshotCommandOutput,
  CreateCapacityReservationBySplittingCommand,
  type CreateCapacityReservationBySplittingCommandInput,
  type CreateCapacityReservationBySplittingCommandOutput,
  CreateCapacityReservationCommand,
  type CreateCapacityReservationCommandInput,
  type CreateCapacityReservationCommandOutput,
  CreateCapacityReservationFleetCommand,
  type CreateCapacityReservationFleetCommandInput,
  type CreateCapacityReservationFleetCommandOutput,
  CreateCarrierGatewayCommand,
  type CreateCarrierGatewayCommandInput,
  type CreateCarrierGatewayCommandOutput,
  CreateClientVpnEndpointCommand,
  type CreateClientVpnEndpointCommandInput,
  type CreateClientVpnEndpointCommandOutput,
  CreateClientVpnRouteCommand,
  type CreateClientVpnRouteCommandInput,
  type CreateClientVpnRouteCommandOutput,
  CreateCoipCidrCommand,
  type CreateCoipCidrCommandInput,
  type CreateCoipCidrCommandOutput,
  CreateCoipPoolCommand,
  type CreateCoipPoolCommandInput,
  type CreateCoipPoolCommandOutput,
  CreateCustomerGatewayCommand,
  type CreateCustomerGatewayCommandInput,
  type CreateCustomerGatewayCommandOutput,
  CreateDefaultSubnetCommand,
  type CreateDefaultSubnetCommandInput,
  type CreateDefaultSubnetCommandOutput,
  CreateDefaultVpcCommand,
  type CreateDefaultVpcCommandInput,
  type CreateDefaultVpcCommandOutput,
  CreateDhcpOptionsCommand,
  type CreateDhcpOptionsCommandInput,
  type CreateDhcpOptionsCommandOutput,
  CreateEgressOnlyInternetGatewayCommand,
  type CreateEgressOnlyInternetGatewayCommandInput,
  type CreateEgressOnlyInternetGatewayCommandOutput,
  CreateFleetCommand,
  type CreateFleetCommandInput,
  type CreateFleetCommandOutput,
  CreateFlowLogsCommand,
  type CreateFlowLogsCommandInput,
  type CreateFlowLogsCommandOutput,
  CreateFpgaImageCommand,
  type CreateFpgaImageCommandInput,
  type CreateFpgaImageCommandOutput,
  CreateImageCommand,
  type CreateImageCommandInput,
  type CreateImageCommandOutput,
  CreateInstanceConnectEndpointCommand,
  type CreateInstanceConnectEndpointCommandInput,
  type CreateInstanceConnectEndpointCommandOutput,
  CreateInstanceEventWindowCommand,
  type CreateInstanceEventWindowCommandInput,
  type CreateInstanceEventWindowCommandOutput,
  CreateInstanceExportTaskCommand,
  type CreateInstanceExportTaskCommandInput,
  type CreateInstanceExportTaskCommandOutput,
  CreateInternetGatewayCommand,
  type CreateInternetGatewayCommandInput,
  type CreateInternetGatewayCommandOutput,
  CreateIpamCommand,
  type CreateIpamCommandInput,
  type CreateIpamCommandOutput,
  CreateIpamExternalResourceVerificationTokenCommand,
  type CreateIpamExternalResourceVerificationTokenCommandInput,
  type CreateIpamExternalResourceVerificationTokenCommandOutput,
  CreateIpamPoolCommand,
  type CreateIpamPoolCommandInput,
  type CreateIpamPoolCommandOutput,
  CreateIpamResourceDiscoveryCommand,
  type CreateIpamResourceDiscoveryCommandInput,
  type CreateIpamResourceDiscoveryCommandOutput,
  CreateIpamScopeCommand,
  type CreateIpamScopeCommandInput,
  type CreateIpamScopeCommandOutput,
  CreateKeyPairCommand,
  type CreateKeyPairCommandInput,
  type CreateKeyPairCommandOutput,
  CreateLaunchTemplateCommand,
  type CreateLaunchTemplateCommandInput,
  type CreateLaunchTemplateCommandOutput,
  CreateLaunchTemplateVersionCommand,
  type CreateLaunchTemplateVersionCommandInput,
  type CreateLaunchTemplateVersionCommandOutput,
  CreateLocalGatewayRouteCommand,
  type CreateLocalGatewayRouteCommandInput,
  type CreateLocalGatewayRouteCommandOutput,
  CreateLocalGatewayRouteTableCommand,
  type CreateLocalGatewayRouteTableCommandInput,
  type CreateLocalGatewayRouteTableCommandOutput,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  type CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  type CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
  CreateLocalGatewayRouteTableVpcAssociationCommand,
  type CreateLocalGatewayRouteTableVpcAssociationCommandInput,
  type CreateLocalGatewayRouteTableVpcAssociationCommandOutput,
  CreateLocalGatewayVirtualInterfaceCommand,
  type CreateLocalGatewayVirtualInterfaceCommandInput,
  type CreateLocalGatewayVirtualInterfaceCommandOutput,
  CreateLocalGatewayVirtualInterfaceGroupCommand,
  type CreateLocalGatewayVirtualInterfaceGroupCommandInput,
  type CreateLocalGatewayVirtualInterfaceGroupCommandOutput,
  CreateManagedPrefixListCommand,
  type CreateManagedPrefixListCommandInput,
  type CreateManagedPrefixListCommandOutput,
  CreateNatGatewayCommand,
  type CreateNatGatewayCommandInput,
  type CreateNatGatewayCommandOutput,
  CreateNetworkAclCommand,
  type CreateNetworkAclCommandInput,
  type CreateNetworkAclCommandOutput,
  CreateNetworkAclEntryCommand,
  type CreateNetworkAclEntryCommandInput,
  type CreateNetworkAclEntryCommandOutput,
  CreateNetworkInsightsAccessScopeCommand,
  type CreateNetworkInsightsAccessScopeCommandInput,
  type CreateNetworkInsightsAccessScopeCommandOutput,
  CreateNetworkInsightsPathCommand,
  type CreateNetworkInsightsPathCommandInput,
  type CreateNetworkInsightsPathCommandOutput,
  CreateNetworkInterfaceCommand,
  type CreateNetworkInterfaceCommandInput,
  type CreateNetworkInterfaceCommandOutput,
  CreateNetworkInterfacePermissionCommand,
  type CreateNetworkInterfacePermissionCommandInput,
  type CreateNetworkInterfacePermissionCommandOutput,
  CreatePlacementGroupCommand,
  type CreatePlacementGroupCommandInput,
  type CreatePlacementGroupCommandOutput,
  CreatePublicIpv4PoolCommand,
  type CreatePublicIpv4PoolCommandInput,
  type CreatePublicIpv4PoolCommandOutput,
  CreateReplaceRootVolumeTaskCommand,
  type CreateReplaceRootVolumeTaskCommandInput,
  type CreateReplaceRootVolumeTaskCommandOutput,
  CreateReservedInstancesListingCommand,
  type CreateReservedInstancesListingCommandInput,
  type CreateReservedInstancesListingCommandOutput,
  CreateRestoreImageTaskCommand,
  type CreateRestoreImageTaskCommandInput,
  type CreateRestoreImageTaskCommandOutput,
  CreateRouteCommand,
  type CreateRouteCommandInput,
  type CreateRouteCommandOutput,
  CreateRouteServerCommand,
  type CreateRouteServerCommandInput,
  type CreateRouteServerCommandOutput,
  CreateRouteServerEndpointCommand,
  type CreateRouteServerEndpointCommandInput,
  type CreateRouteServerEndpointCommandOutput,
  CreateRouteServerPeerCommand,
  type CreateRouteServerPeerCommandInput,
  type CreateRouteServerPeerCommandOutput,
  CreateRouteTableCommand,
  type CreateRouteTableCommandInput,
  type CreateRouteTableCommandOutput,
  CreateSecurityGroupCommand,
  type CreateSecurityGroupCommandInput,
  type CreateSecurityGroupCommandOutput,
  CreateSnapshotCommand,
  type CreateSnapshotCommandInput,
  type CreateSnapshotCommandOutput,
  CreateSnapshotsCommand,
  type CreateSnapshotsCommandInput,
  type CreateSnapshotsCommandOutput,
  CreateSpotDatafeedSubscriptionCommand,
  type CreateSpotDatafeedSubscriptionCommandInput,
  type CreateSpotDatafeedSubscriptionCommandOutput,
  CreateStoreImageTaskCommand,
  type CreateStoreImageTaskCommandInput,
  type CreateStoreImageTaskCommandOutput,
  CreateSubnetCidrReservationCommand,
  type CreateSubnetCidrReservationCommandInput,
  type CreateSubnetCidrReservationCommandOutput,
  CreateSubnetCommand,
  type CreateSubnetCommandInput,
  type CreateSubnetCommandOutput,
  CreateTagsCommand,
  type CreateTagsCommandInput,
  type CreateTagsCommandOutput,
  CreateTrafficMirrorFilterCommand,
  type CreateTrafficMirrorFilterCommandInput,
  type CreateTrafficMirrorFilterCommandOutput,
  CreateTrafficMirrorFilterRuleCommand,
  type CreateTrafficMirrorFilterRuleCommandInput,
  type CreateTrafficMirrorFilterRuleCommandOutput,
  CreateTrafficMirrorSessionCommand,
  type CreateTrafficMirrorSessionCommandInput,
  type CreateTrafficMirrorSessionCommandOutput,
  CreateTrafficMirrorTargetCommand,
  type CreateTrafficMirrorTargetCommandInput,
  type CreateTrafficMirrorTargetCommandOutput,
  CreateTransitGatewayCommand,
  type CreateTransitGatewayCommandInput,
  type CreateTransitGatewayCommandOutput,
  CreateTransitGatewayConnectCommand,
  type CreateTransitGatewayConnectCommandInput,
  type CreateTransitGatewayConnectCommandOutput,
  CreateTransitGatewayConnectPeerCommand,
  type CreateTransitGatewayConnectPeerCommandInput,
  type CreateTransitGatewayConnectPeerCommandOutput,
  CreateTransitGatewayMulticastDomainCommand,
  type CreateTransitGatewayMulticastDomainCommandInput,
  type CreateTransitGatewayMulticastDomainCommandOutput,
  CreateTransitGatewayPeeringAttachmentCommand,
  type CreateTransitGatewayPeeringAttachmentCommandInput,
  type CreateTransitGatewayPeeringAttachmentCommandOutput,
  CreateTransitGatewayPolicyTableCommand,
  type CreateTransitGatewayPolicyTableCommandInput,
  type CreateTransitGatewayPolicyTableCommandOutput,
  CreateTransitGatewayPrefixListReferenceCommand,
  type CreateTransitGatewayPrefixListReferenceCommandInput,
  type CreateTransitGatewayPrefixListReferenceCommandOutput,
  CreateTransitGatewayRouteCommand,
  type CreateTransitGatewayRouteCommandInput,
  type CreateTransitGatewayRouteCommandOutput,
  CreateTransitGatewayRouteTableAnnouncementCommand,
  type CreateTransitGatewayRouteTableAnnouncementCommandInput,
  type CreateTransitGatewayRouteTableAnnouncementCommandOutput,
  CreateTransitGatewayRouteTableCommand,
  type CreateTransitGatewayRouteTableCommandInput,
  type CreateTransitGatewayRouteTableCommandOutput,
  CreateTransitGatewayVpcAttachmentCommand,
  type CreateTransitGatewayVpcAttachmentCommandInput,
  type CreateTransitGatewayVpcAttachmentCommandOutput,
  CreateVerifiedAccessEndpointCommand,
  type CreateVerifiedAccessEndpointCommandInput,
  type CreateVerifiedAccessEndpointCommandOutput,
  CreateVerifiedAccessGroupCommand,
  type CreateVerifiedAccessGroupCommandInput,
  type CreateVerifiedAccessGroupCommandOutput,
  CreateVerifiedAccessInstanceCommand,
  type CreateVerifiedAccessInstanceCommandInput,
  type CreateVerifiedAccessInstanceCommandOutput,
  CreateVerifiedAccessTrustProviderCommand,
  type CreateVerifiedAccessTrustProviderCommandInput,
  type CreateVerifiedAccessTrustProviderCommandOutput,
  CreateVolumeCommand,
  type CreateVolumeCommandInput,
  type CreateVolumeCommandOutput,
  CreateVpcBlockPublicAccessExclusionCommand,
  type CreateVpcBlockPublicAccessExclusionCommandInput,
  type CreateVpcBlockPublicAccessExclusionCommandOutput,
  CreateVpcCommand,
  type CreateVpcCommandInput,
  type CreateVpcCommandOutput,
  CreateVpcEndpointCommand,
  type CreateVpcEndpointCommandInput,
  type CreateVpcEndpointCommandOutput,
  CreateVpcEndpointConnectionNotificationCommand,
  type CreateVpcEndpointConnectionNotificationCommandInput,
  type CreateVpcEndpointConnectionNotificationCommandOutput,
  CreateVpcEndpointServiceConfigurationCommand,
  type CreateVpcEndpointServiceConfigurationCommandInput,
  type CreateVpcEndpointServiceConfigurationCommandOutput,
  CreateVpcPeeringConnectionCommand,
  type CreateVpcPeeringConnectionCommandInput,
  type CreateVpcPeeringConnectionCommandOutput,
  CreateVpnConnectionCommand,
  type CreateVpnConnectionCommandInput,
  type CreateVpnConnectionCommandOutput,
  CreateVpnConnectionRouteCommand,
  type CreateVpnConnectionRouteCommandInput,
  type CreateVpnConnectionRouteCommandOutput,
  CreateVpnGatewayCommand,
  type CreateVpnGatewayCommandInput,
  type CreateVpnGatewayCommandOutput,
  DeleteCarrierGatewayCommand,
  type DeleteCarrierGatewayCommandInput,
  type DeleteCarrierGatewayCommandOutput,
  DeleteClientVpnEndpointCommand,
  type DeleteClientVpnEndpointCommandInput,
  type DeleteClientVpnEndpointCommandOutput,
  DeleteClientVpnRouteCommand,
  type DeleteClientVpnRouteCommandInput,
  type DeleteClientVpnRouteCommandOutput,
  DeleteCoipCidrCommand,
  type DeleteCoipCidrCommandInput,
  type DeleteCoipCidrCommandOutput,
  DeleteCoipPoolCommand,
  type DeleteCoipPoolCommandInput,
  type DeleteCoipPoolCommandOutput,
  DeleteCustomerGatewayCommand,
  type DeleteCustomerGatewayCommandInput,
  type DeleteCustomerGatewayCommandOutput,
  DeleteDhcpOptionsCommand,
  type DeleteDhcpOptionsCommandInput,
  type DeleteDhcpOptionsCommandOutput,
  DeleteEgressOnlyInternetGatewayCommand,
  type DeleteEgressOnlyInternetGatewayCommandInput,
  type DeleteEgressOnlyInternetGatewayCommandOutput,
  DeleteFleetsCommand,
  type DeleteFleetsCommandInput,
  type DeleteFleetsCommandOutput,
  DeleteFlowLogsCommand,
  type DeleteFlowLogsCommandInput,
  type DeleteFlowLogsCommandOutput,
  DeleteFpgaImageCommand,
  type DeleteFpgaImageCommandInput,
  type DeleteFpgaImageCommandOutput,
  DeleteInstanceConnectEndpointCommand,
  type DeleteInstanceConnectEndpointCommandInput,
  type DeleteInstanceConnectEndpointCommandOutput,
  DeleteInstanceEventWindowCommand,
  type DeleteInstanceEventWindowCommandInput,
  type DeleteInstanceEventWindowCommandOutput,
  DeleteInternetGatewayCommand,
  type DeleteInternetGatewayCommandInput,
  type DeleteInternetGatewayCommandOutput,
  DeleteIpamCommand,
  type DeleteIpamCommandInput,
  type DeleteIpamCommandOutput,
  DeleteIpamExternalResourceVerificationTokenCommand,
  type DeleteIpamExternalResourceVerificationTokenCommandInput,
  type DeleteIpamExternalResourceVerificationTokenCommandOutput,
  DeleteIpamPoolCommand,
  type DeleteIpamPoolCommandInput,
  type DeleteIpamPoolCommandOutput,
  DeleteIpamResourceDiscoveryCommand,
  type DeleteIpamResourceDiscoveryCommandInput,
  type DeleteIpamResourceDiscoveryCommandOutput,
  DeleteIpamScopeCommand,
  type DeleteIpamScopeCommandInput,
  type DeleteIpamScopeCommandOutput,
  DeleteKeyPairCommand,
  type DeleteKeyPairCommandInput,
  type DeleteKeyPairCommandOutput,
  DeleteLaunchTemplateCommand,
  type DeleteLaunchTemplateCommandInput,
  type DeleteLaunchTemplateCommandOutput,
  DeleteLaunchTemplateVersionsCommand,
  type DeleteLaunchTemplateVersionsCommandInput,
  type DeleteLaunchTemplateVersionsCommandOutput,
  DeleteLocalGatewayRouteCommand,
  type DeleteLocalGatewayRouteCommandInput,
  type DeleteLocalGatewayRouteCommandOutput,
  DeleteLocalGatewayRouteTableCommand,
  type DeleteLocalGatewayRouteTableCommandInput,
  type DeleteLocalGatewayRouteTableCommandOutput,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  type DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  type DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
  DeleteLocalGatewayRouteTableVpcAssociationCommand,
  type DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
  type DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
  DeleteLocalGatewayVirtualInterfaceCommand,
  type DeleteLocalGatewayVirtualInterfaceCommandInput,
  type DeleteLocalGatewayVirtualInterfaceCommandOutput,
  DeleteLocalGatewayVirtualInterfaceGroupCommand,
  type DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
  type DeleteLocalGatewayVirtualInterfaceGroupCommandOutput,
  DeleteManagedPrefixListCommand,
  type DeleteManagedPrefixListCommandInput,
  type DeleteManagedPrefixListCommandOutput,
  DeleteNatGatewayCommand,
  type DeleteNatGatewayCommandInput,
  type DeleteNatGatewayCommandOutput,
  DeleteNetworkAclCommand,
  type DeleteNetworkAclCommandInput,
  type DeleteNetworkAclCommandOutput,
  DeleteNetworkAclEntryCommand,
  type DeleteNetworkAclEntryCommandInput,
  type DeleteNetworkAclEntryCommandOutput,
  DeleteNetworkInsightsAccessScopeAnalysisCommand,
  type DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
  type DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
  DeleteNetworkInsightsAccessScopeCommand,
  type DeleteNetworkInsightsAccessScopeCommandInput,
  type DeleteNetworkInsightsAccessScopeCommandOutput,
  DeleteNetworkInsightsAnalysisCommand,
  type DeleteNetworkInsightsAnalysisCommandInput,
  type DeleteNetworkInsightsAnalysisCommandOutput,
  DeleteNetworkInsightsPathCommand,
  type DeleteNetworkInsightsPathCommandInput,
  type DeleteNetworkInsightsPathCommandOutput,
  DeleteNetworkInterfaceCommand,
  type DeleteNetworkInterfaceCommandInput,
  type DeleteNetworkInterfaceCommandOutput,
  DeleteNetworkInterfacePermissionCommand,
  type DeleteNetworkInterfacePermissionCommandInput,
  type DeleteNetworkInterfacePermissionCommandOutput,
  DeletePlacementGroupCommand,
  type DeletePlacementGroupCommandInput,
  type DeletePlacementGroupCommandOutput,
  DeletePublicIpv4PoolCommand,
  type DeletePublicIpv4PoolCommandInput,
  type DeletePublicIpv4PoolCommandOutput,
  DeleteQueuedReservedInstancesCommand,
  type DeleteQueuedReservedInstancesCommandInput,
  type DeleteQueuedReservedInstancesCommandOutput,
  DeleteRouteCommand,
  type DeleteRouteCommandInput,
  type DeleteRouteCommandOutput,
  DeleteRouteServerCommand,
  type DeleteRouteServerCommandInput,
  type DeleteRouteServerCommandOutput,
  DeleteRouteServerEndpointCommand,
  type DeleteRouteServerEndpointCommandInput,
  type DeleteRouteServerEndpointCommandOutput,
  DeleteRouteServerPeerCommand,
  type DeleteRouteServerPeerCommandInput,
  type DeleteRouteServerPeerCommandOutput,
  DeleteRouteTableCommand,
  type DeleteRouteTableCommandInput,
  type DeleteRouteTableCommandOutput,
  DeleteSecurityGroupCommand,
  type DeleteSecurityGroupCommandInput,
  type DeleteSecurityGroupCommandOutput,
  DeleteSnapshotCommand,
  type DeleteSnapshotCommandInput,
  type DeleteSnapshotCommandOutput,
  DeleteSpotDatafeedSubscriptionCommand,
  type DeleteSpotDatafeedSubscriptionCommandInput,
  type DeleteSpotDatafeedSubscriptionCommandOutput,
  DeleteSubnetCidrReservationCommand,
  type DeleteSubnetCidrReservationCommandInput,
  type DeleteSubnetCidrReservationCommandOutput,
  DeleteSubnetCommand,
  type DeleteSubnetCommandInput,
  type DeleteSubnetCommandOutput,
  DeleteTagsCommand,
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteTrafficMirrorFilterCommand,
  type DeleteTrafficMirrorFilterCommandInput,
  type DeleteTrafficMirrorFilterCommandOutput,
  DeleteTrafficMirrorFilterRuleCommand,
  type DeleteTrafficMirrorFilterRuleCommandInput,
  type DeleteTrafficMirrorFilterRuleCommandOutput,
  DeleteTrafficMirrorSessionCommand,
  type DeleteTrafficMirrorSessionCommandInput,
  type DeleteTrafficMirrorSessionCommandOutput,
  DeleteTrafficMirrorTargetCommand,
  type DeleteTrafficMirrorTargetCommandInput,
  type DeleteTrafficMirrorTargetCommandOutput,
  DeleteTransitGatewayCommand,
  type DeleteTransitGatewayCommandInput,
  type DeleteTransitGatewayCommandOutput,
  DeleteTransitGatewayConnectCommand,
  type DeleteTransitGatewayConnectCommandInput,
  type DeleteTransitGatewayConnectCommandOutput,
  DeleteTransitGatewayConnectPeerCommand,
  type DeleteTransitGatewayConnectPeerCommandInput,
  type DeleteTransitGatewayConnectPeerCommandOutput,
  DeleteTransitGatewayMulticastDomainCommand,
  type DeleteTransitGatewayMulticastDomainCommandInput,
  type DeleteTransitGatewayMulticastDomainCommandOutput,
  DeleteTransitGatewayPeeringAttachmentCommand,
  type DeleteTransitGatewayPeeringAttachmentCommandInput,
  type DeleteTransitGatewayPeeringAttachmentCommandOutput,
  DeleteTransitGatewayPolicyTableCommand,
  type DeleteTransitGatewayPolicyTableCommandInput,
  type DeleteTransitGatewayPolicyTableCommandOutput,
  DeleteTransitGatewayPrefixListReferenceCommand,
  type DeleteTransitGatewayPrefixListReferenceCommandInput,
  type DeleteTransitGatewayPrefixListReferenceCommandOutput,
  DeleteTransitGatewayRouteCommand,
  type DeleteTransitGatewayRouteCommandInput,
  type DeleteTransitGatewayRouteCommandOutput,
  DeleteTransitGatewayRouteTableAnnouncementCommand,
  type DeleteTransitGatewayRouteTableAnnouncementCommandInput,
  type DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
  DeleteTransitGatewayRouteTableCommand,
  type DeleteTransitGatewayRouteTableCommandInput,
  type DeleteTransitGatewayRouteTableCommandOutput,
  DeleteTransitGatewayVpcAttachmentCommand,
  type DeleteTransitGatewayVpcAttachmentCommandInput,
  type DeleteTransitGatewayVpcAttachmentCommandOutput,
  DeleteVerifiedAccessEndpointCommand,
  type DeleteVerifiedAccessEndpointCommandInput,
  type DeleteVerifiedAccessEndpointCommandOutput,
  DeleteVerifiedAccessGroupCommand,
  type DeleteVerifiedAccessGroupCommandInput,
  type DeleteVerifiedAccessGroupCommandOutput,
  DeleteVerifiedAccessInstanceCommand,
  type DeleteVerifiedAccessInstanceCommandInput,
  type DeleteVerifiedAccessInstanceCommandOutput,
  DeleteVerifiedAccessTrustProviderCommand,
  type DeleteVerifiedAccessTrustProviderCommandInput,
  type DeleteVerifiedAccessTrustProviderCommandOutput,
  DeleteVolumeCommand,
  type DeleteVolumeCommandInput,
  type DeleteVolumeCommandOutput,
  DeleteVpcBlockPublicAccessExclusionCommand,
  type DeleteVpcBlockPublicAccessExclusionCommandInput,
  type DeleteVpcBlockPublicAccessExclusionCommandOutput,
  DeleteVpcCommand,
  type DeleteVpcCommandInput,
  type DeleteVpcCommandOutput,
  DeleteVpcEndpointConnectionNotificationsCommand,
  type DeleteVpcEndpointConnectionNotificationsCommandInput,
  type DeleteVpcEndpointConnectionNotificationsCommandOutput,
  DeleteVpcEndpointsCommand,
  type DeleteVpcEndpointsCommandInput,
  type DeleteVpcEndpointsCommandOutput,
  DeleteVpcEndpointServiceConfigurationsCommand,
  type DeleteVpcEndpointServiceConfigurationsCommandInput,
  type DeleteVpcEndpointServiceConfigurationsCommandOutput,
  DeleteVpcPeeringConnectionCommand,
  type DeleteVpcPeeringConnectionCommandInput,
  type DeleteVpcPeeringConnectionCommandOutput,
  DeleteVpnConnectionCommand,
  type DeleteVpnConnectionCommandInput,
  type DeleteVpnConnectionCommandOutput,
  DeleteVpnConnectionRouteCommand,
  type DeleteVpnConnectionRouteCommandInput,
  type DeleteVpnConnectionRouteCommandOutput,
  DeleteVpnGatewayCommand,
  type DeleteVpnGatewayCommandInput,
  type DeleteVpnGatewayCommandOutput,
  DeprovisionByoipCidrCommand,
  type DeprovisionByoipCidrCommandInput,
  type DeprovisionByoipCidrCommandOutput,
  DeprovisionIpamByoasnCommand,
  type DeprovisionIpamByoasnCommandInput,
  type DeprovisionIpamByoasnCommandOutput,
  DeprovisionIpamPoolCidrCommand,
  type DeprovisionIpamPoolCidrCommandInput,
  type DeprovisionIpamPoolCidrCommandOutput,
  DeprovisionPublicIpv4PoolCidrCommand,
  type DeprovisionPublicIpv4PoolCidrCommandInput,
  type DeprovisionPublicIpv4PoolCidrCommandOutput,
  DeregisterImageCommand,
  type DeregisterImageCommandInput,
  type DeregisterImageCommandOutput,
  DeregisterInstanceEventNotificationAttributesCommand,
  type DeregisterInstanceEventNotificationAttributesCommandInput,
  type DeregisterInstanceEventNotificationAttributesCommandOutput,
  DeregisterTransitGatewayMulticastGroupMembersCommand,
  type DeregisterTransitGatewayMulticastGroupMembersCommandInput,
  type DeregisterTransitGatewayMulticastGroupMembersCommandOutput,
  DeregisterTransitGatewayMulticastGroupSourcesCommand,
  type DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
  type DeregisterTransitGatewayMulticastGroupSourcesCommandOutput,
  DescribeAccountAttributesCommand,
  type DescribeAccountAttributesCommandInput,
  type DescribeAccountAttributesCommandOutput,
  DescribeAddressesAttributeCommand,
  type DescribeAddressesAttributeCommandInput,
  type DescribeAddressesAttributeCommandOutput,
  DescribeAddressesCommand,
  type DescribeAddressesCommandInput,
  type DescribeAddressesCommandOutput,
  DescribeAddressTransfersCommand,
  type DescribeAddressTransfersCommandInput,
  type DescribeAddressTransfersCommandOutput,
  DescribeAggregateIdFormatCommand,
  type DescribeAggregateIdFormatCommandInput,
  type DescribeAggregateIdFormatCommandOutput,
  DescribeAvailabilityZonesCommand,
  type DescribeAvailabilityZonesCommandInput,
  type DescribeAvailabilityZonesCommandOutput,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  type DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
  type DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
  DescribeBundleTasksCommand,
  type DescribeBundleTasksCommandInput,
  type DescribeBundleTasksCommandOutput,
  DescribeByoipCidrsCommand,
  type DescribeByoipCidrsCommandInput,
  type DescribeByoipCidrsCommandOutput,
  DescribeCapacityBlockExtensionHistoryCommand,
  type DescribeCapacityBlockExtensionHistoryCommandInput,
  type DescribeCapacityBlockExtensionHistoryCommandOutput,
  DescribeCapacityBlockExtensionOfferingsCommand,
  type DescribeCapacityBlockExtensionOfferingsCommandInput,
  type DescribeCapacityBlockExtensionOfferingsCommandOutput,
  DescribeCapacityBlockOfferingsCommand,
  type DescribeCapacityBlockOfferingsCommandInput,
  type DescribeCapacityBlockOfferingsCommandOutput,
  DescribeCapacityReservationBillingRequestsCommand,
  type DescribeCapacityReservationBillingRequestsCommandInput,
  type DescribeCapacityReservationBillingRequestsCommandOutput,
  DescribeCapacityReservationFleetsCommand,
  type DescribeCapacityReservationFleetsCommandInput,
  type DescribeCapacityReservationFleetsCommandOutput,
  DescribeCapacityReservationsCommand,
  type DescribeCapacityReservationsCommandInput,
  type DescribeCapacityReservationsCommandOutput,
  DescribeCarrierGatewaysCommand,
  type DescribeCarrierGatewaysCommandInput,
  type DescribeCarrierGatewaysCommandOutput,
  DescribeClassicLinkInstancesCommand,
  type DescribeClassicLinkInstancesCommandInput,
  type DescribeClassicLinkInstancesCommandOutput,
  DescribeClientVpnAuthorizationRulesCommand,
  type DescribeClientVpnAuthorizationRulesCommandInput,
  type DescribeClientVpnAuthorizationRulesCommandOutput,
  DescribeClientVpnConnectionsCommand,
  type DescribeClientVpnConnectionsCommandInput,
  type DescribeClientVpnConnectionsCommandOutput,
  DescribeClientVpnEndpointsCommand,
  type DescribeClientVpnEndpointsCommandInput,
  type DescribeClientVpnEndpointsCommandOutput,
  DescribeClientVpnRoutesCommand,
  type DescribeClientVpnRoutesCommandInput,
  type DescribeClientVpnRoutesCommandOutput,
  DescribeClientVpnTargetNetworksCommand,
  type DescribeClientVpnTargetNetworksCommandInput,
  type DescribeClientVpnTargetNetworksCommandOutput,
  DescribeCoipPoolsCommand,
  type DescribeCoipPoolsCommandInput,
  type DescribeCoipPoolsCommandOutput,
  DescribeConversionTasksCommand,
  type DescribeConversionTasksCommandInput,
  type DescribeConversionTasksCommandOutput,
  DescribeCustomerGatewaysCommand,
  type DescribeCustomerGatewaysCommandInput,
  type DescribeCustomerGatewaysCommandOutput,
  DescribeDeclarativePoliciesReportsCommand,
  type DescribeDeclarativePoliciesReportsCommandInput,
  type DescribeDeclarativePoliciesReportsCommandOutput,
  DescribeDhcpOptionsCommand,
  type DescribeDhcpOptionsCommandInput,
  type DescribeDhcpOptionsCommandOutput,
  DescribeEgressOnlyInternetGatewaysCommand,
  type DescribeEgressOnlyInternetGatewaysCommandInput,
  type DescribeEgressOnlyInternetGatewaysCommandOutput,
  DescribeElasticGpusCommand,
  type DescribeElasticGpusCommandInput,
  type DescribeElasticGpusCommandOutput,
  DescribeExportImageTasksCommand,
  type DescribeExportImageTasksCommandInput,
  type DescribeExportImageTasksCommandOutput,
  DescribeExportTasksCommand,
  type DescribeExportTasksCommandInput,
  type DescribeExportTasksCommandOutput,
  DescribeFastLaunchImagesCommand,
  type DescribeFastLaunchImagesCommandInput,
  type DescribeFastLaunchImagesCommandOutput,
  DescribeFastSnapshotRestoresCommand,
  type DescribeFastSnapshotRestoresCommandInput,
  type DescribeFastSnapshotRestoresCommandOutput,
  DescribeFleetHistoryCommand,
  type DescribeFleetHistoryCommandInput,
  type DescribeFleetHistoryCommandOutput,
  DescribeFleetInstancesCommand,
  type DescribeFleetInstancesCommandInput,
  type DescribeFleetInstancesCommandOutput,
  DescribeFleetsCommand,
  type DescribeFleetsCommandInput,
  type DescribeFleetsCommandOutput,
  DescribeFlowLogsCommand,
  type DescribeFlowLogsCommandInput,
  type DescribeFlowLogsCommandOutput,
  DescribeFpgaImageAttributeCommand,
  type DescribeFpgaImageAttributeCommandInput,
  type DescribeFpgaImageAttributeCommandOutput,
  DescribeFpgaImagesCommand,
  type DescribeFpgaImagesCommandInput,
  type DescribeFpgaImagesCommandOutput,
  DescribeHostReservationOfferingsCommand,
  type DescribeHostReservationOfferingsCommandInput,
  type DescribeHostReservationOfferingsCommandOutput,
  DescribeHostReservationsCommand,
  type DescribeHostReservationsCommandInput,
  type DescribeHostReservationsCommandOutput,
  DescribeHostsCommand,
  type DescribeHostsCommandInput,
  type DescribeHostsCommandOutput,
  DescribeIamInstanceProfileAssociationsCommand,
  type DescribeIamInstanceProfileAssociationsCommandInput,
  type DescribeIamInstanceProfileAssociationsCommandOutput,
  DescribeIdentityIdFormatCommand,
  type DescribeIdentityIdFormatCommandInput,
  type DescribeIdentityIdFormatCommandOutput,
  DescribeIdFormatCommand,
  type DescribeIdFormatCommandInput,
  type DescribeIdFormatCommandOutput,
  DescribeImageAttributeCommand,
  type DescribeImageAttributeCommandInput,
  type DescribeImageAttributeCommandOutput,
  DescribeImagesCommand,
  type DescribeImagesCommandInput,
  type DescribeImagesCommandOutput,
  DescribeImportImageTasksCommand,
  type DescribeImportImageTasksCommandInput,
  type DescribeImportImageTasksCommandOutput,
  DescribeImportSnapshotTasksCommand,
  type DescribeImportSnapshotTasksCommandInput,
  type DescribeImportSnapshotTasksCommandOutput,
  DescribeInstanceAttributeCommand,
  type DescribeInstanceAttributeCommandInput,
  type DescribeInstanceAttributeCommandOutput,
  DescribeInstanceConnectEndpointsCommand,
  type DescribeInstanceConnectEndpointsCommandInput,
  type DescribeInstanceConnectEndpointsCommandOutput,
  DescribeInstanceCreditSpecificationsCommand,
  type DescribeInstanceCreditSpecificationsCommandInput,
  type DescribeInstanceCreditSpecificationsCommandOutput,
  DescribeInstanceEventNotificationAttributesCommand,
  type DescribeInstanceEventNotificationAttributesCommandInput,
  type DescribeInstanceEventNotificationAttributesCommandOutput,
  DescribeInstanceEventWindowsCommand,
  type DescribeInstanceEventWindowsCommandInput,
  type DescribeInstanceEventWindowsCommandOutput,
  DescribeInstanceImageMetadataCommand,
  type DescribeInstanceImageMetadataCommandInput,
  type DescribeInstanceImageMetadataCommandOutput,
  DescribeInstancesCommand,
  type DescribeInstancesCommandInput,
  type DescribeInstancesCommandOutput,
  DescribeInstanceStatusCommand,
  type DescribeInstanceStatusCommandInput,
  type DescribeInstanceStatusCommandOutput,
  DescribeInstanceTopologyCommand,
  type DescribeInstanceTopologyCommandInput,
  type DescribeInstanceTopologyCommandOutput,
  DescribeInstanceTypeOfferingsCommand,
  type DescribeInstanceTypeOfferingsCommandInput,
  type DescribeInstanceTypeOfferingsCommandOutput,
  DescribeInstanceTypesCommand,
  type DescribeInstanceTypesCommandInput,
  type DescribeInstanceTypesCommandOutput,
  DescribeInternetGatewaysCommand,
  type DescribeInternetGatewaysCommandInput,
  type DescribeInternetGatewaysCommandOutput,
  DescribeIpamByoasnCommand,
  type DescribeIpamByoasnCommandInput,
  type DescribeIpamByoasnCommandOutput,
  DescribeIpamExternalResourceVerificationTokensCommand,
  type DescribeIpamExternalResourceVerificationTokensCommandInput,
  type DescribeIpamExternalResourceVerificationTokensCommandOutput,
  DescribeIpamPoolsCommand,
  type DescribeIpamPoolsCommandInput,
  type DescribeIpamPoolsCommandOutput,
  DescribeIpamResourceDiscoveriesCommand,
  type DescribeIpamResourceDiscoveriesCommandInput,
  type DescribeIpamResourceDiscoveriesCommandOutput,
  DescribeIpamResourceDiscoveryAssociationsCommand,
  type DescribeIpamResourceDiscoveryAssociationsCommandInput,
  type DescribeIpamResourceDiscoveryAssociationsCommandOutput,
  DescribeIpamsCommand,
  type DescribeIpamsCommandInput,
  type DescribeIpamsCommandOutput,
  DescribeIpamScopesCommand,
  type DescribeIpamScopesCommandInput,
  type DescribeIpamScopesCommandOutput,
  DescribeIpv6PoolsCommand,
  type DescribeIpv6PoolsCommandInput,
  type DescribeIpv6PoolsCommandOutput,
  DescribeKeyPairsCommand,
  type DescribeKeyPairsCommandInput,
  type DescribeKeyPairsCommandOutput,
  DescribeLaunchTemplatesCommand,
  type DescribeLaunchTemplatesCommandInput,
  type DescribeLaunchTemplatesCommandOutput,
  DescribeLaunchTemplateVersionsCommand,
  type DescribeLaunchTemplateVersionsCommandInput,
  type DescribeLaunchTemplateVersionsCommandOutput,
  DescribeLocalGatewayRouteTablesCommand,
  type DescribeLocalGatewayRouteTablesCommandInput,
  type DescribeLocalGatewayRouteTablesCommandOutput,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  type DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
  type DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  type DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  type DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
  DescribeLocalGatewaysCommand,
  type DescribeLocalGatewaysCommandInput,
  type DescribeLocalGatewaysCommandOutput,
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  type DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  type DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
  DescribeLocalGatewayVirtualInterfacesCommand,
  type DescribeLocalGatewayVirtualInterfacesCommandInput,
  type DescribeLocalGatewayVirtualInterfacesCommandOutput,
  DescribeLockedSnapshotsCommand,
  type DescribeLockedSnapshotsCommandInput,
  type DescribeLockedSnapshotsCommandOutput,
  DescribeMacHostsCommand,
  type DescribeMacHostsCommandInput,
  type DescribeMacHostsCommandOutput,
  DescribeManagedPrefixListsCommand,
  type DescribeManagedPrefixListsCommandInput,
  type DescribeManagedPrefixListsCommandOutput,
  DescribeMovingAddressesCommand,
  type DescribeMovingAddressesCommandInput,
  type DescribeMovingAddressesCommandOutput,
  DescribeNatGatewaysCommand,
  type DescribeNatGatewaysCommandInput,
  type DescribeNatGatewaysCommandOutput,
  DescribeNetworkAclsCommand,
  type DescribeNetworkAclsCommandInput,
  type DescribeNetworkAclsCommandOutput,
  DescribeNetworkInsightsAccessScopeAnalysesCommand,
  type DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
  type DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
  DescribeNetworkInsightsAccessScopesCommand,
  type DescribeNetworkInsightsAccessScopesCommandInput,
  type DescribeNetworkInsightsAccessScopesCommandOutput,
  DescribeNetworkInsightsAnalysesCommand,
  type DescribeNetworkInsightsAnalysesCommandInput,
  type DescribeNetworkInsightsAnalysesCommandOutput,
  DescribeNetworkInsightsPathsCommand,
  type DescribeNetworkInsightsPathsCommandInput,
  type DescribeNetworkInsightsPathsCommandOutput,
  DescribeNetworkInterfaceAttributeCommand,
  type DescribeNetworkInterfaceAttributeCommandInput,
  type DescribeNetworkInterfaceAttributeCommandOutput,
  DescribeNetworkInterfacePermissionsCommand,
  type DescribeNetworkInterfacePermissionsCommandInput,
  type DescribeNetworkInterfacePermissionsCommandOutput,
  DescribeNetworkInterfacesCommand,
  type DescribeNetworkInterfacesCommandInput,
  type DescribeNetworkInterfacesCommandOutput,
  DescribeOutpostLagsCommand,
  type DescribeOutpostLagsCommandInput,
  type DescribeOutpostLagsCommandOutput,
  DescribePlacementGroupsCommand,
  type DescribePlacementGroupsCommandInput,
  type DescribePlacementGroupsCommandOutput,
  DescribePrefixListsCommand,
  type DescribePrefixListsCommandInput,
  type DescribePrefixListsCommandOutput,
  DescribePrincipalIdFormatCommand,
  type DescribePrincipalIdFormatCommandInput,
  type DescribePrincipalIdFormatCommandOutput,
  DescribePublicIpv4PoolsCommand,
  type DescribePublicIpv4PoolsCommandInput,
  type DescribePublicIpv4PoolsCommandOutput,
  DescribeRegionsCommand,
  type DescribeRegionsCommandInput,
  type DescribeRegionsCommandOutput,
  DescribeReplaceRootVolumeTasksCommand,
  type DescribeReplaceRootVolumeTasksCommandInput,
  type DescribeReplaceRootVolumeTasksCommandOutput,
  DescribeReservedInstancesCommand,
  type DescribeReservedInstancesCommandInput,
  type DescribeReservedInstancesCommandOutput,
  DescribeReservedInstancesListingsCommand,
  type DescribeReservedInstancesListingsCommandInput,
  type DescribeReservedInstancesListingsCommandOutput,
  DescribeReservedInstancesModificationsCommand,
  type DescribeReservedInstancesModificationsCommandInput,
  type DescribeReservedInstancesModificationsCommandOutput,
  DescribeReservedInstancesOfferingsCommand,
  type DescribeReservedInstancesOfferingsCommandInput,
  type DescribeReservedInstancesOfferingsCommandOutput,
  DescribeRouteServerEndpointsCommand,
  type DescribeRouteServerEndpointsCommandInput,
  type DescribeRouteServerEndpointsCommandOutput,
  DescribeRouteServerPeersCommand,
  type DescribeRouteServerPeersCommandInput,
  type DescribeRouteServerPeersCommandOutput,
  DescribeRouteServersCommand,
  type DescribeRouteServersCommandInput,
  type DescribeRouteServersCommandOutput,
  DescribeRouteTablesCommand,
  type DescribeRouteTablesCommandInput,
  type DescribeRouteTablesCommandOutput,
  DescribeScheduledInstanceAvailabilityCommand,
  type DescribeScheduledInstanceAvailabilityCommandInput,
  type DescribeScheduledInstanceAvailabilityCommandOutput,
  DescribeScheduledInstancesCommand,
  type DescribeScheduledInstancesCommandInput,
  type DescribeScheduledInstancesCommandOutput,
  DescribeSecurityGroupReferencesCommand,
  type DescribeSecurityGroupReferencesCommandInput,
  type DescribeSecurityGroupReferencesCommandOutput,
  DescribeSecurityGroupRulesCommand,
  type DescribeSecurityGroupRulesCommandInput,
  type DescribeSecurityGroupRulesCommandOutput,
  DescribeSecurityGroupsCommand,
  type DescribeSecurityGroupsCommandInput,
  type DescribeSecurityGroupsCommandOutput,
  DescribeSecurityGroupVpcAssociationsCommand,
  type DescribeSecurityGroupVpcAssociationsCommandInput,
  type DescribeSecurityGroupVpcAssociationsCommandOutput,
  DescribeServiceLinkVirtualInterfacesCommand,
  type DescribeServiceLinkVirtualInterfacesCommandInput,
  type DescribeServiceLinkVirtualInterfacesCommandOutput,
  DescribeSnapshotAttributeCommand,
  type DescribeSnapshotAttributeCommandInput,
  type DescribeSnapshotAttributeCommandOutput,
  DescribeSnapshotsCommand,
  type DescribeSnapshotsCommandInput,
  type DescribeSnapshotsCommandOutput,
  DescribeSnapshotTierStatusCommand,
  type DescribeSnapshotTierStatusCommandInput,
  type DescribeSnapshotTierStatusCommandOutput,
  DescribeSpotDatafeedSubscriptionCommand,
  type DescribeSpotDatafeedSubscriptionCommandInput,
  type DescribeSpotDatafeedSubscriptionCommandOutput,
  DescribeSpotFleetInstancesCommand,
  type DescribeSpotFleetInstancesCommandInput,
  type DescribeSpotFleetInstancesCommandOutput,
  DescribeSpotFleetRequestHistoryCommand,
  type DescribeSpotFleetRequestHistoryCommandInput,
  type DescribeSpotFleetRequestHistoryCommandOutput,
  DescribeSpotFleetRequestsCommand,
  type DescribeSpotFleetRequestsCommandInput,
  type DescribeSpotFleetRequestsCommandOutput,
  DescribeSpotInstanceRequestsCommand,
  type DescribeSpotInstanceRequestsCommandInput,
  type DescribeSpotInstanceRequestsCommandOutput,
  DescribeSpotPriceHistoryCommand,
  type DescribeSpotPriceHistoryCommandInput,
  type DescribeSpotPriceHistoryCommandOutput,
  DescribeStaleSecurityGroupsCommand,
  type DescribeStaleSecurityGroupsCommandInput,
  type DescribeStaleSecurityGroupsCommandOutput,
  DescribeStoreImageTasksCommand,
  type DescribeStoreImageTasksCommandInput,
  type DescribeStoreImageTasksCommandOutput,
  DescribeSubnetsCommand,
  type DescribeSubnetsCommandInput,
  type DescribeSubnetsCommandOutput,
  DescribeTagsCommand,
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTrafficMirrorFilterRulesCommand,
  type DescribeTrafficMirrorFilterRulesCommandInput,
  type DescribeTrafficMirrorFilterRulesCommandOutput,
  DescribeTrafficMirrorFiltersCommand,
  type DescribeTrafficMirrorFiltersCommandInput,
  type DescribeTrafficMirrorFiltersCommandOutput,
  DescribeTrafficMirrorSessionsCommand,
  type DescribeTrafficMirrorSessionsCommandInput,
  type DescribeTrafficMirrorSessionsCommandOutput,
  DescribeTrafficMirrorTargetsCommand,
  type DescribeTrafficMirrorTargetsCommandInput,
  type DescribeTrafficMirrorTargetsCommandOutput,
  DescribeTransitGatewayAttachmentsCommand,
  type DescribeTransitGatewayAttachmentsCommandInput,
  type DescribeTransitGatewayAttachmentsCommandOutput,
  DescribeTransitGatewayConnectPeersCommand,
  type DescribeTransitGatewayConnectPeersCommandInput,
  type DescribeTransitGatewayConnectPeersCommandOutput,
  DescribeTransitGatewayConnectsCommand,
  type DescribeTransitGatewayConnectsCommandInput,
  type DescribeTransitGatewayConnectsCommandOutput,
  DescribeTransitGatewayMulticastDomainsCommand,
  type DescribeTransitGatewayMulticastDomainsCommandInput,
  type DescribeTransitGatewayMulticastDomainsCommandOutput,
  DescribeTransitGatewayPeeringAttachmentsCommand,
  type DescribeTransitGatewayPeeringAttachmentsCommandInput,
  type DescribeTransitGatewayPeeringAttachmentsCommandOutput,
  DescribeTransitGatewayPolicyTablesCommand,
  type DescribeTransitGatewayPolicyTablesCommandInput,
  type DescribeTransitGatewayPolicyTablesCommandOutput,
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  type DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  type DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
  DescribeTransitGatewayRouteTablesCommand,
  type DescribeTransitGatewayRouteTablesCommandInput,
  type DescribeTransitGatewayRouteTablesCommandOutput,
  DescribeTransitGatewaysCommand,
  type DescribeTransitGatewaysCommandInput,
  type DescribeTransitGatewaysCommandOutput,
  DescribeTransitGatewayVpcAttachmentsCommand,
  type DescribeTransitGatewayVpcAttachmentsCommandInput,
  type DescribeTransitGatewayVpcAttachmentsCommandOutput,
  DescribeTrunkInterfaceAssociationsCommand,
  type DescribeTrunkInterfaceAssociationsCommandInput,
  type DescribeTrunkInterfaceAssociationsCommandOutput,
  DescribeVerifiedAccessEndpointsCommand,
  type DescribeVerifiedAccessEndpointsCommandInput,
  type DescribeVerifiedAccessEndpointsCommandOutput,
  DescribeVerifiedAccessGroupsCommand,
  type DescribeVerifiedAccessGroupsCommandInput,
  type DescribeVerifiedAccessGroupsCommandOutput,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  type DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
  type DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
  DescribeVerifiedAccessInstancesCommand,
  type DescribeVerifiedAccessInstancesCommandInput,
  type DescribeVerifiedAccessInstancesCommandOutput,
  DescribeVerifiedAccessTrustProvidersCommand,
  type DescribeVerifiedAccessTrustProvidersCommandInput,
  type DescribeVerifiedAccessTrustProvidersCommandOutput,
  DescribeVolumeAttributeCommand,
  type DescribeVolumeAttributeCommandInput,
  type DescribeVolumeAttributeCommandOutput,
  DescribeVolumesCommand,
  type DescribeVolumesCommandInput,
  type DescribeVolumesCommandOutput,
  DescribeVolumesModificationsCommand,
  type DescribeVolumesModificationsCommandInput,
  type DescribeVolumesModificationsCommandOutput,
  DescribeVolumeStatusCommand,
  type DescribeVolumeStatusCommandInput,
  type DescribeVolumeStatusCommandOutput,
  DescribeVpcAttributeCommand,
  type DescribeVpcAttributeCommandInput,
  type DescribeVpcAttributeCommandOutput,
  DescribeVpcBlockPublicAccessExclusionsCommand,
  type DescribeVpcBlockPublicAccessExclusionsCommandInput,
  type DescribeVpcBlockPublicAccessExclusionsCommandOutput,
  DescribeVpcBlockPublicAccessOptionsCommand,
  type DescribeVpcBlockPublicAccessOptionsCommandInput,
  type DescribeVpcBlockPublicAccessOptionsCommandOutput,
  DescribeVpcClassicLinkCommand,
  type DescribeVpcClassicLinkCommandInput,
  type DescribeVpcClassicLinkCommandOutput,
  DescribeVpcClassicLinkDnsSupportCommand,
  type DescribeVpcClassicLinkDnsSupportCommandInput,
  type DescribeVpcClassicLinkDnsSupportCommandOutput,
  DescribeVpcEndpointAssociationsCommand,
  type DescribeVpcEndpointAssociationsCommandInput,
  type DescribeVpcEndpointAssociationsCommandOutput,
  DescribeVpcEndpointConnectionNotificationsCommand,
  type DescribeVpcEndpointConnectionNotificationsCommandInput,
  type DescribeVpcEndpointConnectionNotificationsCommandOutput,
  DescribeVpcEndpointConnectionsCommand,
  type DescribeVpcEndpointConnectionsCommandInput,
  type DescribeVpcEndpointConnectionsCommandOutput,
  DescribeVpcEndpointsCommand,
  type DescribeVpcEndpointsCommandInput,
  type DescribeVpcEndpointsCommandOutput,
  DescribeVpcEndpointServiceConfigurationsCommand,
  type DescribeVpcEndpointServiceConfigurationsCommandInput,
  type DescribeVpcEndpointServiceConfigurationsCommandOutput,
  DescribeVpcEndpointServicePermissionsCommand,
  type DescribeVpcEndpointServicePermissionsCommandInput,
  type DescribeVpcEndpointServicePermissionsCommandOutput,
  DescribeVpcEndpointServicesCommand,
  type DescribeVpcEndpointServicesCommandInput,
  type DescribeVpcEndpointServicesCommandOutput,
  DescribeVpcPeeringConnectionsCommand,
  type DescribeVpcPeeringConnectionsCommandInput,
  type DescribeVpcPeeringConnectionsCommandOutput,
  DescribeVpcsCommand,
  type DescribeVpcsCommandInput,
  type DescribeVpcsCommandOutput,
  DescribeVpnConnectionsCommand,
  type DescribeVpnConnectionsCommandInput,
  type DescribeVpnConnectionsCommandOutput,
  DescribeVpnGatewaysCommand,
  type DescribeVpnGatewaysCommandInput,
  type DescribeVpnGatewaysCommandOutput,
  DetachClassicLinkVpcCommand,
  type DetachClassicLinkVpcCommandInput,
  type DetachClassicLinkVpcCommandOutput,
  DetachInternetGatewayCommand,
  type DetachInternetGatewayCommandInput,
  type DetachInternetGatewayCommandOutput,
  DetachNetworkInterfaceCommand,
  type DetachNetworkInterfaceCommandInput,
  type DetachNetworkInterfaceCommandOutput,
  DetachVerifiedAccessTrustProviderCommand,
  type DetachVerifiedAccessTrustProviderCommandInput,
  type DetachVerifiedAccessTrustProviderCommandOutput,
  DetachVolumeCommand,
  type DetachVolumeCommandInput,
  type DetachVolumeCommandOutput,
  DetachVpnGatewayCommand,
  type DetachVpnGatewayCommandInput,
  type DetachVpnGatewayCommandOutput,
  DisableAddressTransferCommand,
  type DisableAddressTransferCommandInput,
  type DisableAddressTransferCommandOutput,
  DisableAllowedImagesSettingsCommand,
  type DisableAllowedImagesSettingsCommandInput,
  type DisableAllowedImagesSettingsCommandOutput,
  DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  type DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  type DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
  DisableEbsEncryptionByDefaultCommand,
  type DisableEbsEncryptionByDefaultCommandInput,
  type DisableEbsEncryptionByDefaultCommandOutput,
  DisableFastLaunchCommand,
  type DisableFastLaunchCommandInput,
  type DisableFastLaunchCommandOutput,
  DisableFastSnapshotRestoresCommand,
  type DisableFastSnapshotRestoresCommandInput,
  type DisableFastSnapshotRestoresCommandOutput,
  DisableImageBlockPublicAccessCommand,
  type DisableImageBlockPublicAccessCommandInput,
  type DisableImageBlockPublicAccessCommandOutput,
  DisableImageCommand,
  type DisableImageCommandInput,
  type DisableImageCommandOutput,
  DisableImageDeprecationCommand,
  type DisableImageDeprecationCommandInput,
  type DisableImageDeprecationCommandOutput,
  DisableImageDeregistrationProtectionCommand,
  type DisableImageDeregistrationProtectionCommandInput,
  type DisableImageDeregistrationProtectionCommandOutput,
  DisableIpamOrganizationAdminAccountCommand,
  type DisableIpamOrganizationAdminAccountCommandInput,
  type DisableIpamOrganizationAdminAccountCommandOutput,
  DisableRouteServerPropagationCommand,
  type DisableRouteServerPropagationCommandInput,
  type DisableRouteServerPropagationCommandOutput,
  DisableSerialConsoleAccessCommand,
  type DisableSerialConsoleAccessCommandInput,
  type DisableSerialConsoleAccessCommandOutput,
  DisableSnapshotBlockPublicAccessCommand,
  type DisableSnapshotBlockPublicAccessCommandInput,
  type DisableSnapshotBlockPublicAccessCommandOutput,
  DisableTransitGatewayRouteTablePropagationCommand,
  type DisableTransitGatewayRouteTablePropagationCommandInput,
  type DisableTransitGatewayRouteTablePropagationCommandOutput,
  DisableVgwRoutePropagationCommand,
  type DisableVgwRoutePropagationCommandInput,
  type DisableVgwRoutePropagationCommandOutput,
  DisableVpcClassicLinkCommand,
  type DisableVpcClassicLinkCommandInput,
  type DisableVpcClassicLinkCommandOutput,
  DisableVpcClassicLinkDnsSupportCommand,
  type DisableVpcClassicLinkDnsSupportCommandInput,
  type DisableVpcClassicLinkDnsSupportCommandOutput,
  DisassociateAddressCommand,
  type DisassociateAddressCommandInput,
  type DisassociateAddressCommandOutput,
  DisassociateCapacityReservationBillingOwnerCommand,
  type DisassociateCapacityReservationBillingOwnerCommandInput,
  type DisassociateCapacityReservationBillingOwnerCommandOutput,
  DisassociateClientVpnTargetNetworkCommand,
  type DisassociateClientVpnTargetNetworkCommandInput,
  type DisassociateClientVpnTargetNetworkCommandOutput,
  DisassociateEnclaveCertificateIamRoleCommand,
  type DisassociateEnclaveCertificateIamRoleCommandInput,
  type DisassociateEnclaveCertificateIamRoleCommandOutput,
  DisassociateIamInstanceProfileCommand,
  type DisassociateIamInstanceProfileCommandInput,
  type DisassociateIamInstanceProfileCommandOutput,
  DisassociateInstanceEventWindowCommand,
  type DisassociateInstanceEventWindowCommandInput,
  type DisassociateInstanceEventWindowCommandOutput,
  DisassociateIpamByoasnCommand,
  type DisassociateIpamByoasnCommandInput,
  type DisassociateIpamByoasnCommandOutput,
  DisassociateIpamResourceDiscoveryCommand,
  type DisassociateIpamResourceDiscoveryCommandInput,
  type DisassociateIpamResourceDiscoveryCommandOutput,
  DisassociateNatGatewayAddressCommand,
  type DisassociateNatGatewayAddressCommandInput,
  type DisassociateNatGatewayAddressCommandOutput,
  DisassociateRouteServerCommand,
  type DisassociateRouteServerCommandInput,
  type DisassociateRouteServerCommandOutput,
  DisassociateRouteTableCommand,
  type DisassociateRouteTableCommandInput,
  type DisassociateRouteTableCommandOutput,
  DisassociateSecurityGroupVpcCommand,
  type DisassociateSecurityGroupVpcCommandInput,
  type DisassociateSecurityGroupVpcCommandOutput,
  DisassociateSubnetCidrBlockCommand,
  type DisassociateSubnetCidrBlockCommandInput,
  type DisassociateSubnetCidrBlockCommandOutput,
  DisassociateTransitGatewayMulticastDomainCommand,
  type DisassociateTransitGatewayMulticastDomainCommandInput,
  type DisassociateTransitGatewayMulticastDomainCommandOutput,
  DisassociateTransitGatewayPolicyTableCommand,
  type DisassociateTransitGatewayPolicyTableCommandInput,
  type DisassociateTransitGatewayPolicyTableCommandOutput,
  DisassociateTransitGatewayRouteTableCommand,
  type DisassociateTransitGatewayRouteTableCommandInput,
  type DisassociateTransitGatewayRouteTableCommandOutput,
  DisassociateTrunkInterfaceCommand,
  type DisassociateTrunkInterfaceCommandInput,
  type DisassociateTrunkInterfaceCommandOutput,
  DisassociateVpcCidrBlockCommand,
  type DisassociateVpcCidrBlockCommandInput,
  type DisassociateVpcCidrBlockCommandOutput,
  type EC2Client,
  type EC2ClientConfig,
  EnableAddressTransferCommand,
  type EnableAddressTransferCommandInput,
  type EnableAddressTransferCommandOutput,
  EnableAllowedImagesSettingsCommand,
  type EnableAllowedImagesSettingsCommandInput,
  type EnableAllowedImagesSettingsCommandOutput,
  EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  type EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  type EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
  EnableEbsEncryptionByDefaultCommand,
  type EnableEbsEncryptionByDefaultCommandInput,
  type EnableEbsEncryptionByDefaultCommandOutput,
  EnableFastLaunchCommand,
  type EnableFastLaunchCommandInput,
  type EnableFastLaunchCommandOutput,
  EnableFastSnapshotRestoresCommand,
  type EnableFastSnapshotRestoresCommandInput,
  type EnableFastSnapshotRestoresCommandOutput,
  EnableImageBlockPublicAccessCommand,
  type EnableImageBlockPublicAccessCommandInput,
  type EnableImageBlockPublicAccessCommandOutput,
  EnableImageCommand,
  type EnableImageCommandInput,
  type EnableImageCommandOutput,
  EnableImageDeprecationCommand,
  type EnableImageDeprecationCommandInput,
  type EnableImageDeprecationCommandOutput,
  EnableImageDeregistrationProtectionCommand,
  type EnableImageDeregistrationProtectionCommandInput,
  type EnableImageDeregistrationProtectionCommandOutput,
  EnableIpamOrganizationAdminAccountCommand,
  type EnableIpamOrganizationAdminAccountCommandInput,
  type EnableIpamOrganizationAdminAccountCommandOutput,
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  type EnableReachabilityAnalyzerOrganizationSharingCommandInput,
  type EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
  EnableRouteServerPropagationCommand,
  type EnableRouteServerPropagationCommandInput,
  type EnableRouteServerPropagationCommandOutput,
  EnableSerialConsoleAccessCommand,
  type EnableSerialConsoleAccessCommandInput,
  type EnableSerialConsoleAccessCommandOutput,
  EnableSnapshotBlockPublicAccessCommand,
  type EnableSnapshotBlockPublicAccessCommandInput,
  type EnableSnapshotBlockPublicAccessCommandOutput,
  EnableTransitGatewayRouteTablePropagationCommand,
  type EnableTransitGatewayRouteTablePropagationCommandInput,
  type EnableTransitGatewayRouteTablePropagationCommandOutput,
  EnableVgwRoutePropagationCommand,
  type EnableVgwRoutePropagationCommandInput,
  type EnableVgwRoutePropagationCommandOutput,
  EnableVolumeIOCommand,
  type EnableVolumeIOCommandInput,
  type EnableVolumeIOCommandOutput,
  EnableVpcClassicLinkCommand,
  type EnableVpcClassicLinkCommandInput,
  type EnableVpcClassicLinkCommandOutput,
  EnableVpcClassicLinkDnsSupportCommand,
  type EnableVpcClassicLinkDnsSupportCommandInput,
  type EnableVpcClassicLinkDnsSupportCommandOutput,
  ExportClientVpnClientCertificateRevocationListCommand,
  type ExportClientVpnClientCertificateRevocationListCommandInput,
  type ExportClientVpnClientCertificateRevocationListCommandOutput,
  ExportClientVpnClientConfigurationCommand,
  type ExportClientVpnClientConfigurationCommandInput,
  type ExportClientVpnClientConfigurationCommandOutput,
  ExportImageCommand,
  type ExportImageCommandInput,
  type ExportImageCommandOutput,
  ExportTransitGatewayRoutesCommand,
  type ExportTransitGatewayRoutesCommandInput,
  type ExportTransitGatewayRoutesCommandOutput,
  ExportVerifiedAccessInstanceClientConfigurationCommand,
  type ExportVerifiedAccessInstanceClientConfigurationCommandInput,
  type ExportVerifiedAccessInstanceClientConfigurationCommandOutput,
  GetAllowedImagesSettingsCommand,
  type GetAllowedImagesSettingsCommandInput,
  type GetAllowedImagesSettingsCommandOutput,
  GetAssociatedEnclaveCertificateIamRolesCommand,
  type GetAssociatedEnclaveCertificateIamRolesCommandInput,
  type GetAssociatedEnclaveCertificateIamRolesCommandOutput,
  GetAssociatedIpv6PoolCidrsCommand,
  type GetAssociatedIpv6PoolCidrsCommandInput,
  type GetAssociatedIpv6PoolCidrsCommandOutput,
  GetAwsNetworkPerformanceDataCommand,
  type GetAwsNetworkPerformanceDataCommandInput,
  type GetAwsNetworkPerformanceDataCommandOutput,
  GetCapacityReservationUsageCommand,
  type GetCapacityReservationUsageCommandInput,
  type GetCapacityReservationUsageCommandOutput,
  GetCoipPoolUsageCommand,
  type GetCoipPoolUsageCommandInput,
  type GetCoipPoolUsageCommandOutput,
  GetConsoleOutputCommand,
  type GetConsoleOutputCommandInput,
  type GetConsoleOutputCommandOutput,
  GetConsoleScreenshotCommand,
  type GetConsoleScreenshotCommandInput,
  type GetConsoleScreenshotCommandOutput,
  GetDeclarativePoliciesReportSummaryCommand,
  type GetDeclarativePoliciesReportSummaryCommandInput,
  type GetDeclarativePoliciesReportSummaryCommandOutput,
  GetDefaultCreditSpecificationCommand,
  type GetDefaultCreditSpecificationCommandInput,
  type GetDefaultCreditSpecificationCommandOutput,
  GetEbsDefaultKmsKeyIdCommand,
  type GetEbsDefaultKmsKeyIdCommandInput,
  type GetEbsDefaultKmsKeyIdCommandOutput,
  GetEbsEncryptionByDefaultCommand,
  type GetEbsEncryptionByDefaultCommandInput,
  type GetEbsEncryptionByDefaultCommandOutput,
  GetFlowLogsIntegrationTemplateCommand,
  type GetFlowLogsIntegrationTemplateCommandInput,
  type GetFlowLogsIntegrationTemplateCommandOutput,
  GetGroupsForCapacityReservationCommand,
  type GetGroupsForCapacityReservationCommandInput,
  type GetGroupsForCapacityReservationCommandOutput,
  GetHostReservationPurchasePreviewCommand,
  type GetHostReservationPurchasePreviewCommandInput,
  type GetHostReservationPurchasePreviewCommandOutput,
  GetImageBlockPublicAccessStateCommand,
  type GetImageBlockPublicAccessStateCommandInput,
  type GetImageBlockPublicAccessStateCommandOutput,
  GetInstanceMetadataDefaultsCommand,
  type GetInstanceMetadataDefaultsCommandInput,
  type GetInstanceMetadataDefaultsCommandOutput,
  GetInstanceTpmEkPubCommand,
  type GetInstanceTpmEkPubCommandInput,
  type GetInstanceTpmEkPubCommandOutput,
  GetInstanceTypesFromInstanceRequirementsCommand,
  type GetInstanceTypesFromInstanceRequirementsCommandInput,
  type GetInstanceTypesFromInstanceRequirementsCommandOutput,
  GetInstanceUefiDataCommand,
  type GetInstanceUefiDataCommandInput,
  type GetInstanceUefiDataCommandOutput,
  GetIpamAddressHistoryCommand,
  type GetIpamAddressHistoryCommandInput,
  type GetIpamAddressHistoryCommandOutput,
  GetIpamDiscoveredAccountsCommand,
  type GetIpamDiscoveredAccountsCommandInput,
  type GetIpamDiscoveredAccountsCommandOutput,
  GetIpamDiscoveredPublicAddressesCommand,
  type GetIpamDiscoveredPublicAddressesCommandInput,
  type GetIpamDiscoveredPublicAddressesCommandOutput,
  GetIpamDiscoveredResourceCidrsCommand,
  type GetIpamDiscoveredResourceCidrsCommandInput,
  type GetIpamDiscoveredResourceCidrsCommandOutput,
  GetIpamPoolAllocationsCommand,
  type GetIpamPoolAllocationsCommandInput,
  type GetIpamPoolAllocationsCommandOutput,
  GetIpamPoolCidrsCommand,
  type GetIpamPoolCidrsCommandInput,
  type GetIpamPoolCidrsCommandOutput,
  GetIpamResourceCidrsCommand,
  type GetIpamResourceCidrsCommandInput,
  type GetIpamResourceCidrsCommandOutput,
  GetLaunchTemplateDataCommand,
  type GetLaunchTemplateDataCommandInput,
  type GetLaunchTemplateDataCommandOutput,
  GetManagedPrefixListAssociationsCommand,
  type GetManagedPrefixListAssociationsCommandInput,
  type GetManagedPrefixListAssociationsCommandOutput,
  GetManagedPrefixListEntriesCommand,
  type GetManagedPrefixListEntriesCommandInput,
  type GetManagedPrefixListEntriesCommandOutput,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  type GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  type GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
  GetNetworkInsightsAccessScopeContentCommand,
  type GetNetworkInsightsAccessScopeContentCommandInput,
  type GetNetworkInsightsAccessScopeContentCommandOutput,
  GetPasswordDataCommand,
  type GetPasswordDataCommandInput,
  type GetPasswordDataCommandOutput,
  GetReservedInstancesExchangeQuoteCommand,
  type GetReservedInstancesExchangeQuoteCommandInput,
  type GetReservedInstancesExchangeQuoteCommandOutput,
  GetRouteServerAssociationsCommand,
  type GetRouteServerAssociationsCommandInput,
  type GetRouteServerAssociationsCommandOutput,
  GetRouteServerPropagationsCommand,
  type GetRouteServerPropagationsCommandInput,
  type GetRouteServerPropagationsCommandOutput,
  GetRouteServerRoutingDatabaseCommand,
  type GetRouteServerRoutingDatabaseCommandInput,
  type GetRouteServerRoutingDatabaseCommandOutput,
  GetSecurityGroupsForVpcCommand,
  type GetSecurityGroupsForVpcCommandInput,
  type GetSecurityGroupsForVpcCommandOutput,
  GetSerialConsoleAccessStatusCommand,
  type GetSerialConsoleAccessStatusCommandInput,
  type GetSerialConsoleAccessStatusCommandOutput,
  GetSnapshotBlockPublicAccessStateCommand,
  type GetSnapshotBlockPublicAccessStateCommandInput,
  type GetSnapshotBlockPublicAccessStateCommandOutput,
  GetSpotPlacementScoresCommand,
  type GetSpotPlacementScoresCommandInput,
  type GetSpotPlacementScoresCommandOutput,
  GetSubnetCidrReservationsCommand,
  type GetSubnetCidrReservationsCommandInput,
  type GetSubnetCidrReservationsCommandOutput,
  GetTransitGatewayAttachmentPropagationsCommand,
  type GetTransitGatewayAttachmentPropagationsCommandInput,
  type GetTransitGatewayAttachmentPropagationsCommandOutput,
  GetTransitGatewayMulticastDomainAssociationsCommand,
  type GetTransitGatewayMulticastDomainAssociationsCommandInput,
  type GetTransitGatewayMulticastDomainAssociationsCommandOutput,
  GetTransitGatewayPolicyTableAssociationsCommand,
  type GetTransitGatewayPolicyTableAssociationsCommandInput,
  type GetTransitGatewayPolicyTableAssociationsCommandOutput,
  GetTransitGatewayPolicyTableEntriesCommand,
  type GetTransitGatewayPolicyTableEntriesCommandInput,
  type GetTransitGatewayPolicyTableEntriesCommandOutput,
  GetTransitGatewayPrefixListReferencesCommand,
  type GetTransitGatewayPrefixListReferencesCommandInput,
  type GetTransitGatewayPrefixListReferencesCommandOutput,
  GetTransitGatewayRouteTableAssociationsCommand,
  type GetTransitGatewayRouteTableAssociationsCommandInput,
  type GetTransitGatewayRouteTableAssociationsCommandOutput,
  GetTransitGatewayRouteTablePropagationsCommand,
  type GetTransitGatewayRouteTablePropagationsCommandInput,
  type GetTransitGatewayRouteTablePropagationsCommandOutput,
  GetVerifiedAccessEndpointPolicyCommand,
  type GetVerifiedAccessEndpointPolicyCommandInput,
  type GetVerifiedAccessEndpointPolicyCommandOutput,
  GetVerifiedAccessEndpointTargetsCommand,
  type GetVerifiedAccessEndpointTargetsCommandInput,
  type GetVerifiedAccessEndpointTargetsCommandOutput,
  GetVerifiedAccessGroupPolicyCommand,
  type GetVerifiedAccessGroupPolicyCommandInput,
  type GetVerifiedAccessGroupPolicyCommandOutput,
  GetVpnConnectionDeviceSampleConfigurationCommand,
  type GetVpnConnectionDeviceSampleConfigurationCommandInput,
  type GetVpnConnectionDeviceSampleConfigurationCommandOutput,
  GetVpnConnectionDeviceTypesCommand,
  type GetVpnConnectionDeviceTypesCommandInput,
  type GetVpnConnectionDeviceTypesCommandOutput,
  GetVpnTunnelReplacementStatusCommand,
  type GetVpnTunnelReplacementStatusCommandInput,
  type GetVpnTunnelReplacementStatusCommandOutput,
  ImportClientVpnClientCertificateRevocationListCommand,
  type ImportClientVpnClientCertificateRevocationListCommandInput,
  type ImportClientVpnClientCertificateRevocationListCommandOutput,
  ImportImageCommand,
  type ImportImageCommandInput,
  type ImportImageCommandOutput,
  ImportInstanceCommand,
  type ImportInstanceCommandInput,
  type ImportInstanceCommandOutput,
  ImportKeyPairCommand,
  type ImportKeyPairCommandInput,
  type ImportKeyPairCommandOutput,
  ImportSnapshotCommand,
  type ImportSnapshotCommandInput,
  type ImportSnapshotCommandOutput,
  ImportVolumeCommand,
  type ImportVolumeCommandInput,
  type ImportVolumeCommandOutput,
  ListImagesInRecycleBinCommand,
  type ListImagesInRecycleBinCommandInput,
  type ListImagesInRecycleBinCommandOutput,
  ListSnapshotsInRecycleBinCommand,
  type ListSnapshotsInRecycleBinCommandInput,
  type ListSnapshotsInRecycleBinCommandOutput,
  LockSnapshotCommand,
  type LockSnapshotCommandInput,
  type LockSnapshotCommandOutput,
  ModifyAddressAttributeCommand,
  type ModifyAddressAttributeCommandInput,
  type ModifyAddressAttributeCommandOutput,
  ModifyAvailabilityZoneGroupCommand,
  type ModifyAvailabilityZoneGroupCommandInput,
  type ModifyAvailabilityZoneGroupCommandOutput,
  ModifyCapacityReservationCommand,
  type ModifyCapacityReservationCommandInput,
  type ModifyCapacityReservationCommandOutput,
  ModifyCapacityReservationFleetCommand,
  type ModifyCapacityReservationFleetCommandInput,
  type ModifyCapacityReservationFleetCommandOutput,
  ModifyClientVpnEndpointCommand,
  type ModifyClientVpnEndpointCommandInput,
  type ModifyClientVpnEndpointCommandOutput,
  ModifyDefaultCreditSpecificationCommand,
  type ModifyDefaultCreditSpecificationCommandInput,
  type ModifyDefaultCreditSpecificationCommandOutput,
  ModifyEbsDefaultKmsKeyIdCommand,
  type ModifyEbsDefaultKmsKeyIdCommandInput,
  type ModifyEbsDefaultKmsKeyIdCommandOutput,
  ModifyFleetCommand,
  type ModifyFleetCommandInput,
  type ModifyFleetCommandOutput,
  ModifyFpgaImageAttributeCommand,
  type ModifyFpgaImageAttributeCommandInput,
  type ModifyFpgaImageAttributeCommandOutput,
  ModifyHostsCommand,
  type ModifyHostsCommandInput,
  type ModifyHostsCommandOutput,
  ModifyIdentityIdFormatCommand,
  type ModifyIdentityIdFormatCommandInput,
  type ModifyIdentityIdFormatCommandOutput,
  ModifyIdFormatCommand,
  type ModifyIdFormatCommandInput,
  type ModifyIdFormatCommandOutput,
  ModifyImageAttributeCommand,
  type ModifyImageAttributeCommandInput,
  type ModifyImageAttributeCommandOutput,
  ModifyInstanceAttributeCommand,
  type ModifyInstanceAttributeCommandInput,
  type ModifyInstanceAttributeCommandOutput,
  ModifyInstanceCapacityReservationAttributesCommand,
  type ModifyInstanceCapacityReservationAttributesCommandInput,
  type ModifyInstanceCapacityReservationAttributesCommandOutput,
  ModifyInstanceCpuOptionsCommand,
  type ModifyInstanceCpuOptionsCommandInput,
  type ModifyInstanceCpuOptionsCommandOutput,
  ModifyInstanceCreditSpecificationCommand,
  type ModifyInstanceCreditSpecificationCommandInput,
  type ModifyInstanceCreditSpecificationCommandOutput,
  ModifyInstanceEventStartTimeCommand,
  type ModifyInstanceEventStartTimeCommandInput,
  type ModifyInstanceEventStartTimeCommandOutput,
  ModifyInstanceEventWindowCommand,
  type ModifyInstanceEventWindowCommandInput,
  type ModifyInstanceEventWindowCommandOutput,
  ModifyInstanceMaintenanceOptionsCommand,
  type ModifyInstanceMaintenanceOptionsCommandInput,
  type ModifyInstanceMaintenanceOptionsCommandOutput,
  ModifyInstanceMetadataDefaultsCommand,
  type ModifyInstanceMetadataDefaultsCommandInput,
  type ModifyInstanceMetadataDefaultsCommandOutput,
  ModifyInstanceMetadataOptionsCommand,
  type ModifyInstanceMetadataOptionsCommandInput,
  type ModifyInstanceMetadataOptionsCommandOutput,
  ModifyInstanceNetworkPerformanceOptionsCommand,
  type ModifyInstanceNetworkPerformanceOptionsCommandInput,
  type ModifyInstanceNetworkPerformanceOptionsCommandOutput,
  ModifyInstancePlacementCommand,
  type ModifyInstancePlacementCommandInput,
  type ModifyInstancePlacementCommandOutput,
  ModifyIpamCommand,
  type ModifyIpamCommandInput,
  type ModifyIpamCommandOutput,
  ModifyIpamPoolCommand,
  type ModifyIpamPoolCommandInput,
  type ModifyIpamPoolCommandOutput,
  ModifyIpamResourceCidrCommand,
  type ModifyIpamResourceCidrCommandInput,
  type ModifyIpamResourceCidrCommandOutput,
  ModifyIpamResourceDiscoveryCommand,
  type ModifyIpamResourceDiscoveryCommandInput,
  type ModifyIpamResourceDiscoveryCommandOutput,
  ModifyIpamScopeCommand,
  type ModifyIpamScopeCommandInput,
  type ModifyIpamScopeCommandOutput,
  ModifyLaunchTemplateCommand,
  type ModifyLaunchTemplateCommandInput,
  type ModifyLaunchTemplateCommandOutput,
  ModifyLocalGatewayRouteCommand,
  type ModifyLocalGatewayRouteCommandInput,
  type ModifyLocalGatewayRouteCommandOutput,
  ModifyManagedPrefixListCommand,
  type ModifyManagedPrefixListCommandInput,
  type ModifyManagedPrefixListCommandOutput,
  ModifyNetworkInterfaceAttributeCommand,
  type ModifyNetworkInterfaceAttributeCommandInput,
  type ModifyNetworkInterfaceAttributeCommandOutput,
  ModifyPrivateDnsNameOptionsCommand,
  type ModifyPrivateDnsNameOptionsCommandInput,
  type ModifyPrivateDnsNameOptionsCommandOutput,
  ModifyReservedInstancesCommand,
  type ModifyReservedInstancesCommandInput,
  type ModifyReservedInstancesCommandOutput,
  ModifyRouteServerCommand,
  type ModifyRouteServerCommandInput,
  type ModifyRouteServerCommandOutput,
  ModifySecurityGroupRulesCommand,
  type ModifySecurityGroupRulesCommandInput,
  type ModifySecurityGroupRulesCommandOutput,
  ModifySnapshotAttributeCommand,
  type ModifySnapshotAttributeCommandInput,
  type ModifySnapshotAttributeCommandOutput,
  ModifySnapshotTierCommand,
  type ModifySnapshotTierCommandInput,
  type ModifySnapshotTierCommandOutput,
  ModifySpotFleetRequestCommand,
  type ModifySpotFleetRequestCommandInput,
  type ModifySpotFleetRequestCommandOutput,
  ModifySubnetAttributeCommand,
  type ModifySubnetAttributeCommandInput,
  type ModifySubnetAttributeCommandOutput,
  ModifyTrafficMirrorFilterNetworkServicesCommand,
  type ModifyTrafficMirrorFilterNetworkServicesCommandInput,
  type ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
  ModifyTrafficMirrorFilterRuleCommand,
  type ModifyTrafficMirrorFilterRuleCommandInput,
  type ModifyTrafficMirrorFilterRuleCommandOutput,
  ModifyTrafficMirrorSessionCommand,
  type ModifyTrafficMirrorSessionCommandInput,
  type ModifyTrafficMirrorSessionCommandOutput,
  ModifyTransitGatewayCommand,
  type ModifyTransitGatewayCommandInput,
  type ModifyTransitGatewayCommandOutput,
  ModifyTransitGatewayPrefixListReferenceCommand,
  type ModifyTransitGatewayPrefixListReferenceCommandInput,
  type ModifyTransitGatewayPrefixListReferenceCommandOutput,
  ModifyTransitGatewayVpcAttachmentCommand,
  type ModifyTransitGatewayVpcAttachmentCommandInput,
  type ModifyTransitGatewayVpcAttachmentCommandOutput,
  ModifyVerifiedAccessEndpointCommand,
  type ModifyVerifiedAccessEndpointCommandInput,
  type ModifyVerifiedAccessEndpointCommandOutput,
  ModifyVerifiedAccessEndpointPolicyCommand,
  type ModifyVerifiedAccessEndpointPolicyCommandInput,
  type ModifyVerifiedAccessEndpointPolicyCommandOutput,
  ModifyVerifiedAccessGroupCommand,
  type ModifyVerifiedAccessGroupCommandInput,
  type ModifyVerifiedAccessGroupCommandOutput,
  ModifyVerifiedAccessGroupPolicyCommand,
  type ModifyVerifiedAccessGroupPolicyCommandInput,
  type ModifyVerifiedAccessGroupPolicyCommandOutput,
  ModifyVerifiedAccessInstanceCommand,
  type ModifyVerifiedAccessInstanceCommandInput,
  type ModifyVerifiedAccessInstanceCommandOutput,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
  type ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
  type ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput,
  ModifyVerifiedAccessTrustProviderCommand,
  type ModifyVerifiedAccessTrustProviderCommandInput,
  type ModifyVerifiedAccessTrustProviderCommandOutput,
  ModifyVolumeAttributeCommand,
  type ModifyVolumeAttributeCommandInput,
  type ModifyVolumeAttributeCommandOutput,
  ModifyVolumeCommand,
  type ModifyVolumeCommandInput,
  type ModifyVolumeCommandOutput,
  ModifyVpcAttributeCommand,
  type ModifyVpcAttributeCommandInput,
  type ModifyVpcAttributeCommandOutput,
  ModifyVpcBlockPublicAccessExclusionCommand,
  type ModifyVpcBlockPublicAccessExclusionCommandInput,
  type ModifyVpcBlockPublicAccessExclusionCommandOutput,
  ModifyVpcBlockPublicAccessOptionsCommand,
  type ModifyVpcBlockPublicAccessOptionsCommandInput,
  type ModifyVpcBlockPublicAccessOptionsCommandOutput,
  ModifyVpcEndpointCommand,
  type ModifyVpcEndpointCommandInput,
  type ModifyVpcEndpointCommandOutput,
  ModifyVpcEndpointConnectionNotificationCommand,
  type ModifyVpcEndpointConnectionNotificationCommandInput,
  type ModifyVpcEndpointConnectionNotificationCommandOutput,
  ModifyVpcEndpointServiceConfigurationCommand,
  type ModifyVpcEndpointServiceConfigurationCommandInput,
  type ModifyVpcEndpointServiceConfigurationCommandOutput,
  ModifyVpcEndpointServicePayerResponsibilityCommand,
  type ModifyVpcEndpointServicePayerResponsibilityCommandInput,
  type ModifyVpcEndpointServicePayerResponsibilityCommandOutput,
  ModifyVpcEndpointServicePermissionsCommand,
  type ModifyVpcEndpointServicePermissionsCommandInput,
  type ModifyVpcEndpointServicePermissionsCommandOutput,
  ModifyVpcPeeringConnectionOptionsCommand,
  type ModifyVpcPeeringConnectionOptionsCommandInput,
  type ModifyVpcPeeringConnectionOptionsCommandOutput,
  ModifyVpcTenancyCommand,
  type ModifyVpcTenancyCommandInput,
  type ModifyVpcTenancyCommandOutput,
  ModifyVpnConnectionCommand,
  type ModifyVpnConnectionCommandInput,
  type ModifyVpnConnectionCommandOutput,
  ModifyVpnConnectionOptionsCommand,
  type ModifyVpnConnectionOptionsCommandInput,
  type ModifyVpnConnectionOptionsCommandOutput,
  ModifyVpnTunnelCertificateCommand,
  type ModifyVpnTunnelCertificateCommandInput,
  type ModifyVpnTunnelCertificateCommandOutput,
  ModifyVpnTunnelOptionsCommand,
  type ModifyVpnTunnelOptionsCommandInput,
  type ModifyVpnTunnelOptionsCommandOutput,
  MonitorInstancesCommand,
  type MonitorInstancesCommandInput,
  type MonitorInstancesCommandOutput,
  MoveAddressToVpcCommand,
  type MoveAddressToVpcCommandInput,
  type MoveAddressToVpcCommandOutput,
  MoveByoipCidrToIpamCommand,
  type MoveByoipCidrToIpamCommandInput,
  type MoveByoipCidrToIpamCommandOutput,
  MoveCapacityReservationInstancesCommand,
  type MoveCapacityReservationInstancesCommandInput,
  type MoveCapacityReservationInstancesCommandOutput,
  ProvisionByoipCidrCommand,
  type ProvisionByoipCidrCommandInput,
  type ProvisionByoipCidrCommandOutput,
  ProvisionIpamByoasnCommand,
  type ProvisionIpamByoasnCommandInput,
  type ProvisionIpamByoasnCommandOutput,
  ProvisionIpamPoolCidrCommand,
  type ProvisionIpamPoolCidrCommandInput,
  type ProvisionIpamPoolCidrCommandOutput,
  ProvisionPublicIpv4PoolCidrCommand,
  type ProvisionPublicIpv4PoolCidrCommandInput,
  type ProvisionPublicIpv4PoolCidrCommandOutput,
  PurchaseCapacityBlockCommand,
  type PurchaseCapacityBlockCommandInput,
  type PurchaseCapacityBlockCommandOutput,
  PurchaseCapacityBlockExtensionCommand,
  type PurchaseCapacityBlockExtensionCommandInput,
  type PurchaseCapacityBlockExtensionCommandOutput,
  PurchaseHostReservationCommand,
  type PurchaseHostReservationCommandInput,
  type PurchaseHostReservationCommandOutput,
  PurchaseReservedInstancesOfferingCommand,
  type PurchaseReservedInstancesOfferingCommandInput,
  type PurchaseReservedInstancesOfferingCommandOutput,
  PurchaseScheduledInstancesCommand,
  type PurchaseScheduledInstancesCommandInput,
  type PurchaseScheduledInstancesCommandOutput,
  RebootInstancesCommand,
  type RebootInstancesCommandInput,
  type RebootInstancesCommandOutput,
  RegisterImageCommand,
  type RegisterImageCommandInput,
  type RegisterImageCommandOutput,
  RegisterInstanceEventNotificationAttributesCommand,
  type RegisterInstanceEventNotificationAttributesCommandInput,
  type RegisterInstanceEventNotificationAttributesCommandOutput,
  RegisterTransitGatewayMulticastGroupMembersCommand,
  type RegisterTransitGatewayMulticastGroupMembersCommandInput,
  type RegisterTransitGatewayMulticastGroupMembersCommandOutput,
  RegisterTransitGatewayMulticastGroupSourcesCommand,
  type RegisterTransitGatewayMulticastGroupSourcesCommandInput,
  type RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
  RejectCapacityReservationBillingOwnershipCommand,
  type RejectCapacityReservationBillingOwnershipCommandInput,
  type RejectCapacityReservationBillingOwnershipCommandOutput,
  RejectTransitGatewayMulticastDomainAssociationsCommand,
  type RejectTransitGatewayMulticastDomainAssociationsCommandInput,
  type RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
  RejectTransitGatewayPeeringAttachmentCommand,
  type RejectTransitGatewayPeeringAttachmentCommandInput,
  type RejectTransitGatewayPeeringAttachmentCommandOutput,
  RejectTransitGatewayVpcAttachmentCommand,
  type RejectTransitGatewayVpcAttachmentCommandInput,
  type RejectTransitGatewayVpcAttachmentCommandOutput,
  RejectVpcEndpointConnectionsCommand,
  type RejectVpcEndpointConnectionsCommandInput,
  type RejectVpcEndpointConnectionsCommandOutput,
  RejectVpcPeeringConnectionCommand,
  type RejectVpcPeeringConnectionCommandInput,
  type RejectVpcPeeringConnectionCommandOutput,
  ReleaseAddressCommand,
  type ReleaseAddressCommandInput,
  type ReleaseAddressCommandOutput,
  ReleaseHostsCommand,
  type ReleaseHostsCommandInput,
  type ReleaseHostsCommandOutput,
  ReleaseIpamPoolAllocationCommand,
  type ReleaseIpamPoolAllocationCommandInput,
  type ReleaseIpamPoolAllocationCommandOutput,
  ReplaceIamInstanceProfileAssociationCommand,
  type ReplaceIamInstanceProfileAssociationCommandInput,
  type ReplaceIamInstanceProfileAssociationCommandOutput,
  ReplaceImageCriteriaInAllowedImagesSettingsCommand,
  type ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
  type ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput,
  ReplaceNetworkAclAssociationCommand,
  type ReplaceNetworkAclAssociationCommandInput,
  type ReplaceNetworkAclAssociationCommandOutput,
  ReplaceNetworkAclEntryCommand,
  type ReplaceNetworkAclEntryCommandInput,
  type ReplaceNetworkAclEntryCommandOutput,
  ReplaceRouteCommand,
  type ReplaceRouteCommandInput,
  type ReplaceRouteCommandOutput,
  ReplaceRouteTableAssociationCommand,
  type ReplaceRouteTableAssociationCommandInput,
  type ReplaceRouteTableAssociationCommandOutput,
  ReplaceTransitGatewayRouteCommand,
  type ReplaceTransitGatewayRouteCommandInput,
  type ReplaceTransitGatewayRouteCommandOutput,
  ReplaceVpnTunnelCommand,
  type ReplaceVpnTunnelCommandInput,
  type ReplaceVpnTunnelCommandOutput,
  ReportInstanceStatusCommand,
  type ReportInstanceStatusCommandInput,
  type ReportInstanceStatusCommandOutput,
  RequestSpotFleetCommand,
  type RequestSpotFleetCommandInput,
  type RequestSpotFleetCommandOutput,
  RequestSpotInstancesCommand,
  type RequestSpotInstancesCommandInput,
  type RequestSpotInstancesCommandOutput,
  ResetAddressAttributeCommand,
  type ResetAddressAttributeCommandInput,
  type ResetAddressAttributeCommandOutput,
  ResetEbsDefaultKmsKeyIdCommand,
  type ResetEbsDefaultKmsKeyIdCommandInput,
  type ResetEbsDefaultKmsKeyIdCommandOutput,
  ResetFpgaImageAttributeCommand,
  type ResetFpgaImageAttributeCommandInput,
  type ResetFpgaImageAttributeCommandOutput,
  ResetImageAttributeCommand,
  type ResetImageAttributeCommandInput,
  type ResetImageAttributeCommandOutput,
  ResetInstanceAttributeCommand,
  type ResetInstanceAttributeCommandInput,
  type ResetInstanceAttributeCommandOutput,
  ResetNetworkInterfaceAttributeCommand,
  type ResetNetworkInterfaceAttributeCommandInput,
  type ResetNetworkInterfaceAttributeCommandOutput,
  ResetSnapshotAttributeCommand,
  type ResetSnapshotAttributeCommandInput,
  type ResetSnapshotAttributeCommandOutput,
  RestoreAddressToClassicCommand,
  type RestoreAddressToClassicCommandInput,
  type RestoreAddressToClassicCommandOutput,
  RestoreImageFromRecycleBinCommand,
  type RestoreImageFromRecycleBinCommandInput,
  type RestoreImageFromRecycleBinCommandOutput,
  RestoreManagedPrefixListVersionCommand,
  type RestoreManagedPrefixListVersionCommandInput,
  type RestoreManagedPrefixListVersionCommandOutput,
  RestoreSnapshotFromRecycleBinCommand,
  type RestoreSnapshotFromRecycleBinCommandInput,
  type RestoreSnapshotFromRecycleBinCommandOutput,
  RestoreSnapshotTierCommand,
  type RestoreSnapshotTierCommandInput,
  type RestoreSnapshotTierCommandOutput,
  RevokeClientVpnIngressCommand,
  type RevokeClientVpnIngressCommandInput,
  type RevokeClientVpnIngressCommandOutput,
  RevokeSecurityGroupEgressCommand,
  type RevokeSecurityGroupEgressCommandInput,
  type RevokeSecurityGroupEgressCommandOutput,
  RevokeSecurityGroupIngressCommand,
  type RevokeSecurityGroupIngressCommandInput,
  type RevokeSecurityGroupIngressCommandOutput,
  RunInstancesCommand,
  type RunInstancesCommandInput,
  type RunInstancesCommandOutput,
  RunScheduledInstancesCommand,
  type RunScheduledInstancesCommandInput,
  type RunScheduledInstancesCommandOutput,
  SearchLocalGatewayRoutesCommand,
  type SearchLocalGatewayRoutesCommandInput,
  type SearchLocalGatewayRoutesCommandOutput,
  SearchTransitGatewayMulticastGroupsCommand,
  type SearchTransitGatewayMulticastGroupsCommandInput,
  type SearchTransitGatewayMulticastGroupsCommandOutput,
  SearchTransitGatewayRoutesCommand,
  type SearchTransitGatewayRoutesCommandInput,
  type SearchTransitGatewayRoutesCommandOutput,
  SendDiagnosticInterruptCommand,
  type SendDiagnosticInterruptCommandInput,
  type SendDiagnosticInterruptCommandOutput,
  StartDeclarativePoliciesReportCommand,
  type StartDeclarativePoliciesReportCommandInput,
  type StartDeclarativePoliciesReportCommandOutput,
  StartInstancesCommand,
  type StartInstancesCommandInput,
  type StartInstancesCommandOutput,
  StartNetworkInsightsAccessScopeAnalysisCommand,
  type StartNetworkInsightsAccessScopeAnalysisCommandInput,
  type StartNetworkInsightsAccessScopeAnalysisCommandOutput,
  StartNetworkInsightsAnalysisCommand,
  type StartNetworkInsightsAnalysisCommandInput,
  type StartNetworkInsightsAnalysisCommandOutput,
  StartVpcEndpointServicePrivateDnsVerificationCommand,
  type StartVpcEndpointServicePrivateDnsVerificationCommandInput,
  type StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
  StopInstancesCommand,
  type StopInstancesCommandInput,
  type StopInstancesCommandOutput,
  TerminateClientVpnConnectionsCommand,
  type TerminateClientVpnConnectionsCommandInput,
  type TerminateClientVpnConnectionsCommandOutput,
  TerminateInstancesCommand,
  type TerminateInstancesCommandInput,
  type TerminateInstancesCommandOutput,
  UnassignIpv6AddressesCommand,
  type UnassignIpv6AddressesCommandInput,
  type UnassignIpv6AddressesCommandOutput,
  UnassignPrivateIpAddressesCommand,
  type UnassignPrivateIpAddressesCommandInput,
  type UnassignPrivateIpAddressesCommandOutput,
  UnassignPrivateNatGatewayAddressCommand,
  type UnassignPrivateNatGatewayAddressCommandInput,
  type UnassignPrivateNatGatewayAddressCommandOutput,
  UnlockSnapshotCommand,
  type UnlockSnapshotCommandInput,
  type UnlockSnapshotCommandOutput,
  UnmonitorInstancesCommand,
  type UnmonitorInstancesCommandInput,
  type UnmonitorInstancesCommandOutput,
  UpdateSecurityGroupRuleDescriptionsEgressCommand,
  type UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
  type UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
  UpdateSecurityGroupRuleDescriptionsIngressCommand,
  type UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
  type UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
  WithdrawByoipCidrCommand,
  type WithdrawByoipCidrCommandInput,
  type WithdrawByoipCidrCommandOutput,
} from "@aws-sdk/client-ec2";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./EC2ClientInstance.js";
import * as EC2ServiceConfig from "./EC2ServiceConfig.js";
import type { EC2ServiceError, SdkError } from "./Errors.js";

const commands = {
  AcceptAddressTransferCommand,
  AcceptCapacityReservationBillingOwnershipCommand,
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
  AssociateCapacityReservationBillingOwnerCommand,
  AssociateClientVpnTargetNetworkCommand,
  AssociateDhcpOptionsCommand,
  AssociateEnclaveCertificateIamRoleCommand,
  AssociateIamInstanceProfileCommand,
  AssociateInstanceEventWindowCommand,
  AssociateIpamByoasnCommand,
  AssociateIpamResourceDiscoveryCommand,
  AssociateNatGatewayAddressCommand,
  AssociateRouteServerCommand,
  AssociateRouteTableCommand,
  AssociateSecurityGroupVpcCommand,
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
  CancelDeclarativePoliciesReportCommand,
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
  CreateCapacityReservationBySplittingCommand,
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
  CreateIpamExternalResourceVerificationTokenCommand,
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
  CreateLocalGatewayVirtualInterfaceCommand,
  CreateLocalGatewayVirtualInterfaceGroupCommand,
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
  CreateRouteServerCommand,
  CreateRouteServerEndpointCommand,
  CreateRouteServerPeerCommand,
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
  CreateVpcBlockPublicAccessExclusionCommand,
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
  DeleteIpamExternalResourceVerificationTokenCommand,
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
  DeleteLocalGatewayVirtualInterfaceCommand,
  DeleteLocalGatewayVirtualInterfaceGroupCommand,
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
  DeleteRouteServerCommand,
  DeleteRouteServerEndpointCommand,
  DeleteRouteServerPeerCommand,
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
  DeleteVpcBlockPublicAccessExclusionCommand,
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
  DescribeCapacityBlockExtensionHistoryCommand,
  DescribeCapacityBlockExtensionOfferingsCommand,
  DescribeCapacityBlockOfferingsCommand,
  DescribeCapacityReservationBillingRequestsCommand,
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
  DescribeDeclarativePoliciesReportsCommand,
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
  DescribeInstanceImageMetadataCommand,
  DescribeInstanceStatusCommand,
  DescribeInstanceTopologyCommand,
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypesCommand,
  DescribeInstancesCommand,
  DescribeInternetGatewaysCommand,
  DescribeIpamByoasnCommand,
  DescribeIpamExternalResourceVerificationTokensCommand,
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
  DescribeOutpostLagsCommand,
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
  DescribeRouteServerEndpointsCommand,
  DescribeRouteServerPeersCommand,
  DescribeRouteServersCommand,
  DescribeRouteTablesCommand,
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstancesCommand,
  DescribeSecurityGroupReferencesCommand,
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupVpcAssociationsCommand,
  DescribeSecurityGroupsCommand,
  DescribeServiceLinkVirtualInterfacesCommand,
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
  DescribeTrafficMirrorFilterRulesCommand,
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
  DescribeVpcBlockPublicAccessExclusionsCommand,
  DescribeVpcBlockPublicAccessOptionsCommand,
  DescribeVpcClassicLinkCommand,
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcEndpointAssociationsCommand,
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
  DisableAllowedImagesSettingsCommand,
  DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  DisableEbsEncryptionByDefaultCommand,
  DisableFastLaunchCommand,
  DisableFastSnapshotRestoresCommand,
  DisableImageCommand,
  DisableImageBlockPublicAccessCommand,
  DisableImageDeprecationCommand,
  DisableImageDeregistrationProtectionCommand,
  DisableIpamOrganizationAdminAccountCommand,
  DisableRouteServerPropagationCommand,
  DisableSerialConsoleAccessCommand,
  DisableSnapshotBlockPublicAccessCommand,
  DisableTransitGatewayRouteTablePropagationCommand,
  DisableVgwRoutePropagationCommand,
  DisableVpcClassicLinkCommand,
  DisableVpcClassicLinkDnsSupportCommand,
  DisassociateAddressCommand,
  DisassociateCapacityReservationBillingOwnerCommand,
  DisassociateClientVpnTargetNetworkCommand,
  DisassociateEnclaveCertificateIamRoleCommand,
  DisassociateIamInstanceProfileCommand,
  DisassociateInstanceEventWindowCommand,
  DisassociateIpamByoasnCommand,
  DisassociateIpamResourceDiscoveryCommand,
  DisassociateNatGatewayAddressCommand,
  DisassociateRouteServerCommand,
  DisassociateRouteTableCommand,
  DisassociateSecurityGroupVpcCommand,
  DisassociateSubnetCidrBlockCommand,
  DisassociateTransitGatewayMulticastDomainCommand,
  DisassociateTransitGatewayPolicyTableCommand,
  DisassociateTransitGatewayRouteTableCommand,
  DisassociateTrunkInterfaceCommand,
  DisassociateVpcCidrBlockCommand,
  EnableAddressTransferCommand,
  EnableAllowedImagesSettingsCommand,
  EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  EnableEbsEncryptionByDefaultCommand,
  EnableFastLaunchCommand,
  EnableFastSnapshotRestoresCommand,
  EnableImageCommand,
  EnableImageBlockPublicAccessCommand,
  EnableImageDeprecationCommand,
  EnableImageDeregistrationProtectionCommand,
  EnableIpamOrganizationAdminAccountCommand,
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  EnableRouteServerPropagationCommand,
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
  ExportVerifiedAccessInstanceClientConfigurationCommand,
  GetAllowedImagesSettingsCommand,
  GetAssociatedEnclaveCertificateIamRolesCommand,
  GetAssociatedIpv6PoolCidrsCommand,
  GetAwsNetworkPerformanceDataCommand,
  GetCapacityReservationUsageCommand,
  GetCoipPoolUsageCommand,
  GetConsoleOutputCommand,
  GetConsoleScreenshotCommand,
  GetDeclarativePoliciesReportSummaryCommand,
  GetDefaultCreditSpecificationCommand,
  GetEbsDefaultKmsKeyIdCommand,
  GetEbsEncryptionByDefaultCommand,
  GetFlowLogsIntegrationTemplateCommand,
  GetGroupsForCapacityReservationCommand,
  GetHostReservationPurchasePreviewCommand,
  GetImageBlockPublicAccessStateCommand,
  GetInstanceMetadataDefaultsCommand,
  GetInstanceTpmEkPubCommand,
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
  GetRouteServerAssociationsCommand,
  GetRouteServerPropagationsCommand,
  GetRouteServerRoutingDatabaseCommand,
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
  GetVerifiedAccessEndpointTargetsCommand,
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
  ModifyInstanceCpuOptionsCommand,
  ModifyInstanceCreditSpecificationCommand,
  ModifyInstanceEventStartTimeCommand,
  ModifyInstanceEventWindowCommand,
  ModifyInstanceMaintenanceOptionsCommand,
  ModifyInstanceMetadataDefaultsCommand,
  ModifyInstanceMetadataOptionsCommand,
  ModifyInstanceNetworkPerformanceOptionsCommand,
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
  ModifyRouteServerCommand,
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
  ModifyVpcBlockPublicAccessExclusionCommand,
  ModifyVpcBlockPublicAccessOptionsCommand,
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
  MoveCapacityReservationInstancesCommand,
  ProvisionByoipCidrCommand,
  ProvisionIpamByoasnCommand,
  ProvisionIpamPoolCidrCommand,
  ProvisionPublicIpv4PoolCidrCommand,
  PurchaseCapacityBlockCommand,
  PurchaseCapacityBlockExtensionCommand,
  PurchaseHostReservationCommand,
  PurchaseReservedInstancesOfferingCommand,
  PurchaseScheduledInstancesCommand,
  RebootInstancesCommand,
  RegisterImageCommand,
  RegisterInstanceEventNotificationAttributesCommand,
  RegisterTransitGatewayMulticastGroupMembersCommand,
  RegisterTransitGatewayMulticastGroupSourcesCommand,
  RejectCapacityReservationBillingOwnershipCommand,
  RejectTransitGatewayMulticastDomainAssociationsCommand,
  RejectTransitGatewayPeeringAttachmentCommand,
  RejectTransitGatewayVpcAttachmentCommand,
  RejectVpcEndpointConnectionsCommand,
  RejectVpcPeeringConnectionCommand,
  ReleaseAddressCommand,
  ReleaseHostsCommand,
  ReleaseIpamPoolAllocationCommand,
  ReplaceIamInstanceProfileAssociationCommand,
  ReplaceImageCriteriaInAllowedImagesSettingsCommand,
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
  StartDeclarativePoliciesReportCommand,
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

interface EC2Service$ {
  readonly _: unique symbol;

  /**
   * @see {@link AcceptAddressTransferCommand}
   */
  acceptAddressTransfer(
    args: AcceptAddressTransferCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptAddressTransferCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptCapacityReservationBillingOwnershipCommand}
   */
  acceptCapacityReservationBillingOwnership(
    args: AcceptCapacityReservationBillingOwnershipCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptCapacityReservationBillingOwnershipCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptReservedInstancesExchangeQuoteCommand}
   */
  acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptReservedInstancesExchangeQuoteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommand}
   */
  acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptTransitGatewayMulticastDomainAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptTransitGatewayPeeringAttachmentCommand}
   */
  acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptTransitGatewayPeeringAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptTransitGatewayVpcAttachmentCommand}
   */
  acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptTransitGatewayVpcAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptVpcEndpointConnectionsCommand}
   */
  acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptVpcEndpointConnectionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptVpcPeeringConnectionCommand}
   */
  acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptVpcPeeringConnectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AdvertiseByoipCidrCommand}
   */
  advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AdvertiseByoipCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AllocateAddressCommand}
   */
  allocateAddress(
    args: AllocateAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AllocateAddressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AllocateHostsCommand}
   */
  allocateHosts(
    args: AllocateHostsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AllocateHostsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AllocateIpamPoolCidrCommand}
   */
  allocateIpamPoolCidr(
    args: AllocateIpamPoolCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AllocateIpamPoolCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommand}
   */
  applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssignIpv6AddressesCommand}
   */
  assignIpv6Addresses(
    args: AssignIpv6AddressesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssignIpv6AddressesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssignPrivateIpAddressesCommand}
   */
  assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssignPrivateIpAddressesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssignPrivateNatGatewayAddressCommand}
   */
  assignPrivateNatGatewayAddress(
    args: AssignPrivateNatGatewayAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssignPrivateNatGatewayAddressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateAddressCommand}
   */
  associateAddress(
    args: AssociateAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateAddressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateCapacityReservationBillingOwnerCommand}
   */
  associateCapacityReservationBillingOwner(
    args: AssociateCapacityReservationBillingOwnerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateCapacityReservationBillingOwnerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateClientVpnTargetNetworkCommand}
   */
  associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateClientVpnTargetNetworkCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateDhcpOptionsCommand}
   */
  associateDhcpOptions(
    args: AssociateDhcpOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateDhcpOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateEnclaveCertificateIamRoleCommand}
   */
  associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateEnclaveCertificateIamRoleCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateIamInstanceProfileCommand}
   */
  associateIamInstanceProfile(
    args: AssociateIamInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateIamInstanceProfileCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateInstanceEventWindowCommand}
   */
  associateInstanceEventWindow(
    args: AssociateInstanceEventWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateInstanceEventWindowCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateIpamByoasnCommand}
   */
  associateIpamByoasn(
    args: AssociateIpamByoasnCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateIpamByoasnCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateIpamResourceDiscoveryCommand}
   */
  associateIpamResourceDiscovery(
    args: AssociateIpamResourceDiscoveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateIpamResourceDiscoveryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateNatGatewayAddressCommand}
   */
  associateNatGatewayAddress(
    args: AssociateNatGatewayAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateNatGatewayAddressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateRouteServerCommand}
   */
  associateRouteServer(
    args: AssociateRouteServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateRouteServerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateRouteTableCommand}
   */
  associateRouteTable(
    args: AssociateRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateSecurityGroupVpcCommand}
   */
  associateSecurityGroupVpc(
    args: AssociateSecurityGroupVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateSecurityGroupVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateSubnetCidrBlockCommand}
   */
  associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateSubnetCidrBlockCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateTransitGatewayMulticastDomainCommand}
   */
  associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateTransitGatewayMulticastDomainCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateTransitGatewayPolicyTableCommand}
   */
  associateTransitGatewayPolicyTable(
    args: AssociateTransitGatewayPolicyTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateTransitGatewayPolicyTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateTransitGatewayRouteTableCommand}
   */
  associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateTransitGatewayRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateTrunkInterfaceCommand}
   */
  associateTrunkInterface(
    args: AssociateTrunkInterfaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateTrunkInterfaceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateVpcCidrBlockCommand}
   */
  associateVpcCidrBlock(
    args: AssociateVpcCidrBlockCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateVpcCidrBlockCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachClassicLinkVpcCommand}
   */
  attachClassicLinkVpc(
    args: AttachClassicLinkVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachClassicLinkVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachInternetGatewayCommand}
   */
  attachInternetGateway(
    args: AttachInternetGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachInternetGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachNetworkInterfaceCommand}
   */
  attachNetworkInterface(
    args: AttachNetworkInterfaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachNetworkInterfaceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachVerifiedAccessTrustProviderCommand}
   */
  attachVerifiedAccessTrustProvider(
    args: AttachVerifiedAccessTrustProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachVerifiedAccessTrustProviderCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachVolumeCommand}
   */
  attachVolume(
    args: AttachVolumeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachVolumeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachVpnGatewayCommand}
   */
  attachVpnGateway(
    args: AttachVpnGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachVpnGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AuthorizeClientVpnIngressCommand}
   */
  authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeClientVpnIngressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AuthorizeSecurityGroupEgressCommand}
   */
  authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeSecurityGroupEgressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AuthorizeSecurityGroupIngressCommand}
   */
  authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeSecurityGroupIngressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link BundleInstanceCommand}
   */
  bundleInstance(
    args: BundleInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BundleInstanceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelBundleTaskCommand}
   */
  cancelBundleTask(
    args: CancelBundleTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelBundleTaskCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelCapacityReservationCommand}
   */
  cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelCapacityReservationFleetsCommand}
   */
  cancelCapacityReservationFleets(
    args: CancelCapacityReservationFleetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelCapacityReservationFleetsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelConversionTaskCommand}
   */
  cancelConversionTask(
    args: CancelConversionTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelConversionTaskCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelDeclarativePoliciesReportCommand}
   */
  cancelDeclarativePoliciesReport(
    args: CancelDeclarativePoliciesReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelDeclarativePoliciesReportCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelExportTaskCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelImageLaunchPermissionCommand}
   */
  cancelImageLaunchPermission(
    args: CancelImageLaunchPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelImageLaunchPermissionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelImportTaskCommand}
   */
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelImportTaskCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelReservedInstancesListingCommand}
   */
  cancelReservedInstancesListing(
    args: CancelReservedInstancesListingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelReservedInstancesListingCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelSpotFleetRequestsCommand}
   */
  cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelSpotFleetRequestsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelSpotInstanceRequestsCommand}
   */
  cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelSpotInstanceRequestsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ConfirmProductInstanceCommand}
   */
  confirmProductInstance(
    args: ConfirmProductInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmProductInstanceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CopyFpgaImageCommand}
   */
  copyFpgaImage(
    args: CopyFpgaImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyFpgaImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CopyImageCommand}
   */
  copyImage(
    args: CopyImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopyImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CopySnapshotCommand}
   */
  copySnapshot(
    args: CopySnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CopySnapshotCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCapacityReservationCommand}
   */
  createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCapacityReservationBySplittingCommand}
   */
  createCapacityReservationBySplitting(
    args: CreateCapacityReservationBySplittingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCapacityReservationBySplittingCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCapacityReservationFleetCommand}
   */
  createCapacityReservationFleet(
    args: CreateCapacityReservationFleetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCapacityReservationFleetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCarrierGatewayCommand}
   */
  createCarrierGateway(
    args: CreateCarrierGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCarrierGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateClientVpnEndpointCommand}
   */
  createClientVpnEndpoint(
    args: CreateClientVpnEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateClientVpnEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateClientVpnRouteCommand}
   */
  createClientVpnRoute(
    args: CreateClientVpnRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateClientVpnRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCoipCidrCommand}
   */
  createCoipCidr(
    args: CreateCoipCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCoipCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCoipPoolCommand}
   */
  createCoipPool(
    args: CreateCoipPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCoipPoolCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCustomerGatewayCommand}
   */
  createCustomerGateway(
    args: CreateCustomerGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCustomerGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateDefaultSubnetCommand}
   */
  createDefaultSubnet(
    args: CreateDefaultSubnetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDefaultSubnetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateDefaultVpcCommand}
   */
  createDefaultVpc(
    args: CreateDefaultVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDefaultVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateDhcpOptionsCommand}
   */
  createDhcpOptions(
    args: CreateDhcpOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDhcpOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateEgressOnlyInternetGatewayCommand}
   */
  createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEgressOnlyInternetGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(
    args: CreateFleetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFleetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateFlowLogsCommand}
   */
  createFlowLogs(
    args: CreateFlowLogsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFlowLogsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateFpgaImageCommand}
   */
  createFpgaImage(
    args: CreateFpgaImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFpgaImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateImageCommand}
   */
  createImage(
    args: CreateImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateInstanceConnectEndpointCommand}
   */
  createInstanceConnectEndpoint(
    args: CreateInstanceConnectEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInstanceConnectEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateInstanceEventWindowCommand}
   */
  createInstanceEventWindow(
    args: CreateInstanceEventWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInstanceEventWindowCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateInstanceExportTaskCommand}
   */
  createInstanceExportTask(
    args: CreateInstanceExportTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInstanceExportTaskCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateInternetGatewayCommand}
   */
  createInternetGateway(
    args: CreateInternetGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateInternetGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateIpamCommand}
   */
  createIpam(
    args: CreateIpamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIpamCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateIpamExternalResourceVerificationTokenCommand}
   */
  createIpamExternalResourceVerificationToken(
    args: CreateIpamExternalResourceVerificationTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIpamExternalResourceVerificationTokenCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateIpamPoolCommand}
   */
  createIpamPool(
    args: CreateIpamPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIpamPoolCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateIpamResourceDiscoveryCommand}
   */
  createIpamResourceDiscovery(
    args: CreateIpamResourceDiscoveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIpamResourceDiscoveryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateIpamScopeCommand}
   */
  createIpamScope(
    args: CreateIpamScopeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIpamScopeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateKeyPairCommand}
   */
  createKeyPair(
    args: CreateKeyPairCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateKeyPairCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLaunchTemplateCommand}
   */
  createLaunchTemplate(
    args: CreateLaunchTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLaunchTemplateCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLaunchTemplateVersionCommand}
   */
  createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLaunchTemplateVersionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteCommand}
   */
  createLocalGatewayRoute(
    args: CreateLocalGatewayRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLocalGatewayRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteTableCommand}
   */
  createLocalGatewayRouteTable(
    args: CreateLocalGatewayRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLocalGatewayRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}
   */
  createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommand}
   */
  createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLocalGatewayRouteTableVpcAssociationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayVirtualInterfaceCommand}
   */
  createLocalGatewayVirtualInterface(
    args: CreateLocalGatewayVirtualInterfaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLocalGatewayVirtualInterfaceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayVirtualInterfaceGroupCommand}
   */
  createLocalGatewayVirtualInterfaceGroup(
    args: CreateLocalGatewayVirtualInterfaceGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateLocalGatewayVirtualInterfaceGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateManagedPrefixListCommand}
   */
  createManagedPrefixList(
    args: CreateManagedPrefixListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateManagedPrefixListCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNatGatewayCommand}
   */
  createNatGateway(
    args: CreateNatGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNatGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkAclCommand}
   */
  createNetworkAcl(
    args: CreateNetworkAclCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNetworkAclCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkAclEntryCommand}
   */
  createNetworkAclEntry(
    args: CreateNetworkAclEntryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNetworkAclEntryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkInsightsAccessScopeCommand}
   */
  createNetworkInsightsAccessScope(
    args: CreateNetworkInsightsAccessScopeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNetworkInsightsAccessScopeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkInsightsPathCommand}
   */
  createNetworkInsightsPath(
    args: CreateNetworkInsightsPathCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNetworkInsightsPathCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkInterfaceCommand}
   */
  createNetworkInterface(
    args: CreateNetworkInterfaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNetworkInterfaceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkInterfacePermissionCommand}
   */
  createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateNetworkInterfacePermissionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreatePlacementGroupCommand}
   */
  createPlacementGroup(
    args: CreatePlacementGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePlacementGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreatePublicIpv4PoolCommand}
   */
  createPublicIpv4Pool(
    args: CreatePublicIpv4PoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePublicIpv4PoolCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateReplaceRootVolumeTaskCommand}
   */
  createReplaceRootVolumeTask(
    args: CreateReplaceRootVolumeTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateReplaceRootVolumeTaskCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateReservedInstancesListingCommand}
   */
  createReservedInstancesListing(
    args: CreateReservedInstancesListingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateReservedInstancesListingCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateRestoreImageTaskCommand}
   */
  createRestoreImageTask(
    args: CreateRestoreImageTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRestoreImageTaskCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateRouteCommand}
   */
  createRoute(
    args: CreateRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateRouteServerCommand}
   */
  createRouteServer(
    args: CreateRouteServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRouteServerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateRouteServerEndpointCommand}
   */
  createRouteServerEndpoint(
    args: CreateRouteServerEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRouteServerEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateRouteServerPeerCommand}
   */
  createRouteServerPeer(
    args: CreateRouteServerPeerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRouteServerPeerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateRouteTableCommand}
   */
  createRouteTable(
    args: CreateRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateSecurityGroupCommand}
   */
  createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSnapshotCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateSnapshotsCommand}
   */
  createSnapshots(
    args: CreateSnapshotsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSnapshotsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateSpotDatafeedSubscriptionCommand}
   */
  createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSpotDatafeedSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateStoreImageTaskCommand}
   */
  createStoreImageTask(
    args: CreateStoreImageTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStoreImageTaskCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateSubnetCommand}
   */
  createSubnet(
    args: CreateSubnetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSubnetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateSubnetCidrReservationCommand}
   */
  createSubnetCidrReservation(
    args: CreateSubnetCidrReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSubnetCidrReservationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTagsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTrafficMirrorFilterCommand}
   */
  createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTrafficMirrorFilterCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTrafficMirrorFilterRuleCommand}
   */
  createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTrafficMirrorFilterRuleCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTrafficMirrorSessionCommand}
   */
  createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTrafficMirrorSessionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTrafficMirrorTargetCommand}
   */
  createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTrafficMirrorTargetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayCommand}
   */
  createTransitGateway(
    args: CreateTransitGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayConnectCommand}
   */
  createTransitGatewayConnect(
    args: CreateTransitGatewayConnectCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayConnectCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayConnectPeerCommand}
   */
  createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayConnectPeerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayMulticastDomainCommand}
   */
  createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayMulticastDomainCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayPeeringAttachmentCommand}
   */
  createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayPeeringAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayPolicyTableCommand}
   */
  createTransitGatewayPolicyTable(
    args: CreateTransitGatewayPolicyTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayPolicyTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayPrefixListReferenceCommand}
   */
  createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayPrefixListReferenceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayRouteCommand}
   */
  createTransitGatewayRoute(
    args: CreateTransitGatewayRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayRouteTableCommand}
   */
  createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayRouteTableAnnouncementCommand}
   */
  createTransitGatewayRouteTableAnnouncement(
    args: CreateTransitGatewayRouteTableAnnouncementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayRouteTableAnnouncementCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayVpcAttachmentCommand}
   */
  createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTransitGatewayVpcAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVerifiedAccessEndpointCommand}
   */
  createVerifiedAccessEndpoint(
    args: CreateVerifiedAccessEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVerifiedAccessEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVerifiedAccessGroupCommand}
   */
  createVerifiedAccessGroup(
    args: CreateVerifiedAccessGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVerifiedAccessGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVerifiedAccessInstanceCommand}
   */
  createVerifiedAccessInstance(
    args: CreateVerifiedAccessInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVerifiedAccessInstanceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVerifiedAccessTrustProviderCommand}
   */
  createVerifiedAccessTrustProvider(
    args: CreateVerifiedAccessTrustProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVerifiedAccessTrustProviderCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVolumeCommand}
   */
  createVolume(
    args: CreateVolumeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVolumeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcCommand}
   */
  createVpc(
    args: CreateVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcBlockPublicAccessExclusionCommand}
   */
  createVpcBlockPublicAccessExclusion(
    args: CreateVpcBlockPublicAccessExclusionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcBlockPublicAccessExclusionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcEndpointConnectionNotificationCommand}
   */
  createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcEndpointConnectionNotificationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcEndpointServiceConfigurationCommand}
   */
  createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcEndpointServiceConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcPeeringConnectionCommand}
   */
  createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcPeeringConnectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpnConnectionCommand}
   */
  createVpnConnection(
    args: CreateVpnConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpnConnectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpnConnectionRouteCommand}
   */
  createVpnConnectionRoute(
    args: CreateVpnConnectionRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpnConnectionRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpnGatewayCommand}
   */
  createVpnGateway(
    args: CreateVpnGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpnGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteCarrierGatewayCommand}
   */
  deleteCarrierGateway(
    args: DeleteCarrierGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCarrierGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteClientVpnEndpointCommand}
   */
  deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClientVpnEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteClientVpnRouteCommand}
   */
  deleteClientVpnRoute(
    args: DeleteClientVpnRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClientVpnRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteCoipCidrCommand}
   */
  deleteCoipCidr(
    args: DeleteCoipCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCoipCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteCoipPoolCommand}
   */
  deleteCoipPool(
    args: DeleteCoipPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCoipPoolCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteCustomerGatewayCommand}
   */
  deleteCustomerGateway(
    args: DeleteCustomerGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomerGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteDhcpOptionsCommand}
   */
  deleteDhcpOptions(
    args: DeleteDhcpOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDhcpOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteEgressOnlyInternetGatewayCommand}
   */
  deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEgressOnlyInternetGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteFleetsCommand}
   */
  deleteFleets(
    args: DeleteFleetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFleetsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteFlowLogsCommand}
   */
  deleteFlowLogs(
    args: DeleteFlowLogsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFlowLogsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteFpgaImageCommand}
   */
  deleteFpgaImage(
    args: DeleteFpgaImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFpgaImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteInstanceConnectEndpointCommand}
   */
  deleteInstanceConnectEndpoint(
    args: DeleteInstanceConnectEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInstanceConnectEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteInstanceEventWindowCommand}
   */
  deleteInstanceEventWindow(
    args: DeleteInstanceEventWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInstanceEventWindowCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteInternetGatewayCommand}
   */
  deleteInternetGateway(
    args: DeleteInternetGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInternetGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteIpamCommand}
   */
  deleteIpam(
    args: DeleteIpamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIpamCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteIpamExternalResourceVerificationTokenCommand}
   */
  deleteIpamExternalResourceVerificationToken(
    args: DeleteIpamExternalResourceVerificationTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIpamExternalResourceVerificationTokenCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteIpamPoolCommand}
   */
  deleteIpamPool(
    args: DeleteIpamPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIpamPoolCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteIpamResourceDiscoveryCommand}
   */
  deleteIpamResourceDiscovery(
    args: DeleteIpamResourceDiscoveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIpamResourceDiscoveryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteIpamScopeCommand}
   */
  deleteIpamScope(
    args: DeleteIpamScopeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIpamScopeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteKeyPairCommand}
   */
  deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteKeyPairCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLaunchTemplateCommand}
   */
  deleteLaunchTemplate(
    args: DeleteLaunchTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLaunchTemplateCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLaunchTemplateVersionsCommand}
   */
  deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLaunchTemplateVersionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteCommand}
   */
  deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLocalGatewayRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteTableCommand}
   */
  deleteLocalGatewayRouteTable(
    args: DeleteLocalGatewayRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLocalGatewayRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}
   */
  deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommand}
   */
  deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayVirtualInterfaceCommand}
   */
  deleteLocalGatewayVirtualInterface(
    args: DeleteLocalGatewayVirtualInterfaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLocalGatewayVirtualInterfaceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayVirtualInterfaceGroupCommand}
   */
  deleteLocalGatewayVirtualInterfaceGroup(
    args: DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteLocalGatewayVirtualInterfaceGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteManagedPrefixListCommand}
   */
  deleteManagedPrefixList(
    args: DeleteManagedPrefixListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteManagedPrefixListCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNatGatewayCommand}
   */
  deleteNatGateway(
    args: DeleteNatGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNatGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkAclCommand}
   */
  deleteNetworkAcl(
    args: DeleteNetworkAclCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNetworkAclCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkAclEntryCommand}
   */
  deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNetworkAclEntryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInsightsAccessScopeCommand}
   */
  deleteNetworkInsightsAccessScope(
    args: DeleteNetworkInsightsAccessScopeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNetworkInsightsAccessScopeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}
   */
  deleteNetworkInsightsAccessScopeAnalysis(
    args: DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInsightsAnalysisCommand}
   */
  deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNetworkInsightsAnalysisCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInsightsPathCommand}
   */
  deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNetworkInsightsPathCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInterfaceCommand}
   */
  deleteNetworkInterface(
    args: DeleteNetworkInterfaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNetworkInterfaceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInterfacePermissionCommand}
   */
  deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteNetworkInterfacePermissionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeletePlacementGroupCommand}
   */
  deletePlacementGroup(
    args: DeletePlacementGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePlacementGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeletePublicIpv4PoolCommand}
   */
  deletePublicIpv4Pool(
    args: DeletePublicIpv4PoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePublicIpv4PoolCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteQueuedReservedInstancesCommand}
   */
  deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteQueuedReservedInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteRouteCommand}
   */
  deleteRoute(
    args: DeleteRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteRouteServerCommand}
   */
  deleteRouteServer(
    args: DeleteRouteServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteServerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteRouteServerEndpointCommand}
   */
  deleteRouteServerEndpoint(
    args: DeleteRouteServerEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteServerEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteRouteServerPeerCommand}
   */
  deleteRouteServerPeer(
    args: DeleteRouteServerPeerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteServerPeerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteRouteTableCommand}
   */
  deleteRouteTable(
    args: DeleteRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteSecurityGroupCommand}
   */
  deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSnapshotCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteSpotDatafeedSubscriptionCommand}
   */
  deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSpotDatafeedSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteSubnetCommand}
   */
  deleteSubnet(
    args: DeleteSubnetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSubnetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteSubnetCidrReservationCommand}
   */
  deleteSubnetCidrReservation(
    args: DeleteSubnetCidrReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSubnetCidrReservationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTagsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTrafficMirrorFilterCommand}
   */
  deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTrafficMirrorFilterCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTrafficMirrorFilterRuleCommand}
   */
  deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTrafficMirrorFilterRuleCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTrafficMirrorSessionCommand}
   */
  deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTrafficMirrorSessionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTrafficMirrorTargetCommand}
   */
  deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTrafficMirrorTargetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayCommand}
   */
  deleteTransitGateway(
    args: DeleteTransitGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayConnectCommand}
   */
  deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayConnectCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayConnectPeerCommand}
   */
  deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayConnectPeerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayMulticastDomainCommand}
   */
  deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayMulticastDomainCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayPeeringAttachmentCommand}
   */
  deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayPeeringAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayPolicyTableCommand}
   */
  deleteTransitGatewayPolicyTable(
    args: DeleteTransitGatewayPolicyTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayPolicyTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayPrefixListReferenceCommand}
   */
  deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayPrefixListReferenceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayRouteCommand}
   */
  deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayRouteTableCommand}
   */
  deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayRouteTableAnnouncementCommand}
   */
  deleteTransitGatewayRouteTableAnnouncement(
    args: DeleteTransitGatewayRouteTableAnnouncementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayVpcAttachmentCommand}
   */
  deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTransitGatewayVpcAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVerifiedAccessEndpointCommand}
   */
  deleteVerifiedAccessEndpoint(
    args: DeleteVerifiedAccessEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVerifiedAccessEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVerifiedAccessGroupCommand}
   */
  deleteVerifiedAccessGroup(
    args: DeleteVerifiedAccessGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVerifiedAccessGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVerifiedAccessInstanceCommand}
   */
  deleteVerifiedAccessInstance(
    args: DeleteVerifiedAccessInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVerifiedAccessInstanceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVerifiedAccessTrustProviderCommand}
   */
  deleteVerifiedAccessTrustProvider(
    args: DeleteVerifiedAccessTrustProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVerifiedAccessTrustProviderCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVolumeCommand}
   */
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVolumeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcCommand}
   */
  deleteVpc(
    args: DeleteVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcBlockPublicAccessExclusionCommand}
   */
  deleteVpcBlockPublicAccessExclusion(
    args: DeleteVpcBlockPublicAccessExclusionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcBlockPublicAccessExclusionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcEndpointConnectionNotificationsCommand}
   */
  deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcEndpointConnectionNotificationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcEndpointServiceConfigurationsCommand}
   */
  deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcEndpointServiceConfigurationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcEndpointsCommand}
   */
  deleteVpcEndpoints(
    args: DeleteVpcEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcPeeringConnectionCommand}
   */
  deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcPeeringConnectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpnConnectionCommand}
   */
  deleteVpnConnection(
    args: DeleteVpnConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpnConnectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpnConnectionRouteCommand}
   */
  deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpnConnectionRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpnGatewayCommand}
   */
  deleteVpnGateway(
    args: DeleteVpnGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpnGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeprovisionByoipCidrCommand}
   */
  deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeprovisionByoipCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeprovisionIpamByoasnCommand}
   */
  deprovisionIpamByoasn(
    args: DeprovisionIpamByoasnCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeprovisionIpamByoasnCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeprovisionIpamPoolCidrCommand}
   */
  deprovisionIpamPoolCidr(
    args: DeprovisionIpamPoolCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeprovisionIpamPoolCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeprovisionPublicIpv4PoolCidrCommand}
   */
  deprovisionPublicIpv4PoolCidr(
    args: DeprovisionPublicIpv4PoolCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeprovisionPublicIpv4PoolCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeregisterImageCommand}
   */
  deregisterImage(
    args: DeregisterImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeregisterInstanceEventNotificationAttributesCommand}
   */
  deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterInstanceEventNotificationAttributesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommand}
   */
  deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTransitGatewayMulticastGroupMembersCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommand}
   */
  deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterTransitGatewayMulticastGroupSourcesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountAttributesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAddressTransfersCommand}
   */
  describeAddressTransfers(
    args: DescribeAddressTransfersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAddressTransfersCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAddressesCommand}
   */
  describeAddresses(
    args: DescribeAddressesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAddressesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAddressesAttributeCommand}
   */
  describeAddressesAttribute(
    args: DescribeAddressesAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAddressesAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAggregateIdFormatCommand}
   */
  describeAggregateIdFormat(
    args: DescribeAggregateIdFormatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAggregateIdFormatCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAvailabilityZonesCommand}
   */
  describeAvailabilityZones(
    args: DescribeAvailabilityZonesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAvailabilityZonesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommand}
   */
  describeAwsNetworkPerformanceMetricSubscriptions(
    args: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeBundleTasksCommand}
   */
  describeBundleTasks(
    args: DescribeBundleTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBundleTasksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeByoipCidrsCommand}
   */
  describeByoipCidrs(
    args: DescribeByoipCidrsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeByoipCidrsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityBlockExtensionHistoryCommand}
   */
  describeCapacityBlockExtensionHistory(
    args: DescribeCapacityBlockExtensionHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityBlockExtensionHistoryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityBlockExtensionOfferingsCommand}
   */
  describeCapacityBlockExtensionOfferings(
    args: DescribeCapacityBlockExtensionOfferingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityBlockExtensionOfferingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityBlockOfferingsCommand}
   */
  describeCapacityBlockOfferings(
    args: DescribeCapacityBlockOfferingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityBlockOfferingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityReservationBillingRequestsCommand}
   */
  describeCapacityReservationBillingRequests(
    args: DescribeCapacityReservationBillingRequestsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityReservationBillingRequestsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityReservationFleetsCommand}
   */
  describeCapacityReservationFleets(
    args: DescribeCapacityReservationFleetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityReservationFleetsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityReservationsCommand}
   */
  describeCapacityReservations(
    args: DescribeCapacityReservationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCapacityReservationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCarrierGatewaysCommand}
   */
  describeCarrierGateways(
    args: DescribeCarrierGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCarrierGatewaysCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClassicLinkInstancesCommand}
   */
  describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClassicLinkInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnAuthorizationRulesCommand}
   */
  describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClientVpnAuthorizationRulesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnConnectionsCommand}
   */
  describeClientVpnConnections(
    args: DescribeClientVpnConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClientVpnConnectionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnEndpointsCommand}
   */
  describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClientVpnEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnRoutesCommand}
   */
  describeClientVpnRoutes(
    args: DescribeClientVpnRoutesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClientVpnRoutesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnTargetNetworksCommand}
   */
  describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeClientVpnTargetNetworksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCoipPoolsCommand}
   */
  describeCoipPools(
    args: DescribeCoipPoolsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCoipPoolsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeConversionTasksCommand}
   */
  describeConversionTasks(
    args: DescribeConversionTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConversionTasksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCustomerGatewaysCommand}
   */
  describeCustomerGateways(
    args: DescribeCustomerGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCustomerGatewaysCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeDeclarativePoliciesReportsCommand}
   */
  describeDeclarativePoliciesReports(
    args: DescribeDeclarativePoliciesReportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDeclarativePoliciesReportsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeDhcpOptionsCommand}
   */
  describeDhcpOptions(
    args: DescribeDhcpOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDhcpOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeEgressOnlyInternetGatewaysCommand}
   */
  describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEgressOnlyInternetGatewaysCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeElasticGpusCommand}
   */
  describeElasticGpus(
    args: DescribeElasticGpusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeElasticGpusCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeExportImageTasksCommand}
   */
  describeExportImageTasks(
    args: DescribeExportImageTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExportImageTasksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExportTasksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFastLaunchImagesCommand}
   */
  describeFastLaunchImages(
    args: DescribeFastLaunchImagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFastLaunchImagesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFastSnapshotRestoresCommand}
   */
  describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFastSnapshotRestoresCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFleetHistoryCommand}
   */
  describeFleetHistory(
    args: DescribeFleetHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFleetHistoryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFleetInstancesCommand}
   */
  describeFleetInstances(
    args: DescribeFleetInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFleetInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFleetsCommand}
   */
  describeFleets(
    args: DescribeFleetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFleetsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFlowLogsCommand}
   */
  describeFlowLogs(
    args: DescribeFlowLogsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFlowLogsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFpgaImageAttributeCommand}
   */
  describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFpgaImageAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFpgaImagesCommand}
   */
  describeFpgaImages(
    args: DescribeFpgaImagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFpgaImagesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeHostReservationOfferingsCommand}
   */
  describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeHostReservationOfferingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeHostReservationsCommand}
   */
  describeHostReservations(
    args: DescribeHostReservationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeHostReservationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeHostsCommand}
   */
  describeHosts(
    args: DescribeHostsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeHostsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIamInstanceProfileAssociationsCommand}
   */
  describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIamInstanceProfileAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIdFormatCommand}
   */
  describeIdFormat(
    args: DescribeIdFormatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIdFormatCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIdentityIdFormatCommand}
   */
  describeIdentityIdFormat(
    args: DescribeIdentityIdFormatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIdentityIdFormatCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeImageAttributeCommand}
   */
  describeImageAttribute(
    args: DescribeImageAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImageAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeImagesCommand}
   */
  describeImages(
    args: DescribeImagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImagesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeImportImageTasksCommand}
   */
  describeImportImageTasks(
    args: DescribeImportImageTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImportImageTasksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeImportSnapshotTasksCommand}
   */
  describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeImportSnapshotTasksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceAttributeCommand}
   */
  describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceConnectEndpointsCommand}
   */
  describeInstanceConnectEndpoints(
    args: DescribeInstanceConnectEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceConnectEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceCreditSpecificationsCommand}
   */
  describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceCreditSpecificationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceEventNotificationAttributesCommand}
   */
  describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceEventNotificationAttributesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceEventWindowsCommand}
   */
  describeInstanceEventWindows(
    args: DescribeInstanceEventWindowsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceEventWindowsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceImageMetadataCommand}
   */
  describeInstanceImageMetadata(
    args: DescribeInstanceImageMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceImageMetadataCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceStatusCommand}
   */
  describeInstanceStatus(
    args: DescribeInstanceStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceStatusCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceTopologyCommand}
   */
  describeInstanceTopology(
    args: DescribeInstanceTopologyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceTopologyCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceTypeOfferingsCommand}
   */
  describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceTypeOfferingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceTypesCommand}
   */
  describeInstanceTypes(
    args: DescribeInstanceTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceTypesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstancesCommand}
   */
  describeInstances(
    args: DescribeInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInternetGatewaysCommand}
   */
  describeInternetGateways(
    args: DescribeInternetGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInternetGatewaysCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamByoasnCommand}
   */
  describeIpamByoasn(
    args: DescribeIpamByoasnCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIpamByoasnCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamExternalResourceVerificationTokensCommand}
   */
  describeIpamExternalResourceVerificationTokens(
    args: DescribeIpamExternalResourceVerificationTokensCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIpamExternalResourceVerificationTokensCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamPoolsCommand}
   */
  describeIpamPools(
    args: DescribeIpamPoolsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIpamPoolsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamResourceDiscoveriesCommand}
   */
  describeIpamResourceDiscoveries(
    args: DescribeIpamResourceDiscoveriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIpamResourceDiscoveriesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamResourceDiscoveryAssociationsCommand}
   */
  describeIpamResourceDiscoveryAssociations(
    args: DescribeIpamResourceDiscoveryAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIpamResourceDiscoveryAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamScopesCommand}
   */
  describeIpamScopes(
    args: DescribeIpamScopesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIpamScopesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamsCommand}
   */
  describeIpams(
    args: DescribeIpamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIpamsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpv6PoolsCommand}
   */
  describeIpv6Pools(
    args: DescribeIpv6PoolsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIpv6PoolsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeKeyPairsCommand}
   */
  describeKeyPairs(
    args: DescribeKeyPairsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeKeyPairsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLaunchTemplateVersionsCommand}
   */
  describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLaunchTemplateVersionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLaunchTemplatesCommand}
   */
  describeLaunchTemplates(
    args: DescribeLaunchTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLaunchTemplatesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand}
   */
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommand}
   */
  describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayRouteTablesCommand}
   */
  describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLocalGatewayRouteTablesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommand}
   */
  describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayVirtualInterfacesCommand}
   */
  describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLocalGatewayVirtualInterfacesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewaysCommand}
   */
  describeLocalGateways(
    args: DescribeLocalGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLocalGatewaysCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLockedSnapshotsCommand}
   */
  describeLockedSnapshots(
    args: DescribeLockedSnapshotsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeLockedSnapshotsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeMacHostsCommand}
   */
  describeMacHosts(
    args: DescribeMacHostsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMacHostsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeManagedPrefixListsCommand}
   */
  describeManagedPrefixLists(
    args: DescribeManagedPrefixListsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeManagedPrefixListsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeMovingAddressesCommand}
   */
  describeMovingAddresses(
    args: DescribeMovingAddressesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMovingAddressesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNatGatewaysCommand}
   */
  describeNatGateways(
    args: DescribeNatGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNatGatewaysCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkAclsCommand}
   */
  describeNetworkAcls(
    args: DescribeNetworkAclsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNetworkAclsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInsightsAccessScopeAnalysesCommand}
   */
  describeNetworkInsightsAccessScopeAnalyses(
    args: DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInsightsAccessScopesCommand}
   */
  describeNetworkInsightsAccessScopes(
    args: DescribeNetworkInsightsAccessScopesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNetworkInsightsAccessScopesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInsightsAnalysesCommand}
   */
  describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNetworkInsightsAnalysesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInsightsPathsCommand}
   */
  describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNetworkInsightsPathsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInterfaceAttributeCommand}
   */
  describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNetworkInterfaceAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInterfacePermissionsCommand}
   */
  describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNetworkInterfacePermissionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInterfacesCommand}
   */
  describeNetworkInterfaces(
    args: DescribeNetworkInterfacesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeNetworkInterfacesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeOutpostLagsCommand}
   */
  describeOutpostLags(
    args: DescribeOutpostLagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOutpostLagsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribePlacementGroupsCommand}
   */
  describePlacementGroups(
    args: DescribePlacementGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePlacementGroupsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribePrefixListsCommand}
   */
  describePrefixLists(
    args: DescribePrefixListsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePrefixListsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribePrincipalIdFormatCommand}
   */
  describePrincipalIdFormat(
    args: DescribePrincipalIdFormatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePrincipalIdFormatCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribePublicIpv4PoolsCommand}
   */
  describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePublicIpv4PoolsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeRegionsCommand}
   */
  describeRegions(
    args: DescribeRegionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRegionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReplaceRootVolumeTasksCommand}
   */
  describeReplaceRootVolumeTasks(
    args: DescribeReplaceRootVolumeTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReplaceRootVolumeTasksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReservedInstancesCommand}
   */
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReservedInstancesListingsCommand}
   */
  describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstancesListingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReservedInstancesModificationsCommand}
   */
  describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstancesModificationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReservedInstancesOfferingsCommand}
   */
  describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstancesOfferingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeRouteServerEndpointsCommand}
   */
  describeRouteServerEndpoints(
    args: DescribeRouteServerEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRouteServerEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeRouteServerPeersCommand}
   */
  describeRouteServerPeers(
    args: DescribeRouteServerPeersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRouteServerPeersCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeRouteServersCommand}
   */
  describeRouteServers(
    args: DescribeRouteServersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRouteServersCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeRouteTablesCommand}
   */
  describeRouteTables(
    args: DescribeRouteTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRouteTablesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeScheduledInstanceAvailabilityCommand}
   */
  describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScheduledInstanceAvailabilityCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeScheduledInstancesCommand}
   */
  describeScheduledInstances(
    args: DescribeScheduledInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScheduledInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSecurityGroupReferencesCommand}
   */
  describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSecurityGroupReferencesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSecurityGroupRulesCommand}
   */
  describeSecurityGroupRules(
    args: DescribeSecurityGroupRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSecurityGroupRulesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSecurityGroupVpcAssociationsCommand}
   */
  describeSecurityGroupVpcAssociations(
    args: DescribeSecurityGroupVpcAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSecurityGroupVpcAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSecurityGroupsCommand}
   */
  describeSecurityGroups(
    args: DescribeSecurityGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSecurityGroupsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeServiceLinkVirtualInterfacesCommand}
   */
  describeServiceLinkVirtualInterfaces(
    args: DescribeServiceLinkVirtualInterfacesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeServiceLinkVirtualInterfacesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSnapshotAttributeCommand}
   */
  describeSnapshotAttribute(
    args: DescribeSnapshotAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSnapshotAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSnapshotTierStatusCommand}
   */
  describeSnapshotTierStatus(
    args: DescribeSnapshotTierStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSnapshotTierStatusCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSnapshotsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotDatafeedSubscriptionCommand}
   */
  describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSpotDatafeedSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotFleetInstancesCommand}
   */
  describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSpotFleetInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotFleetRequestHistoryCommand}
   */
  describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSpotFleetRequestHistoryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotFleetRequestsCommand}
   */
  describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSpotFleetRequestsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotInstanceRequestsCommand}
   */
  describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSpotInstanceRequestsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotPriceHistoryCommand}
   */
  describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSpotPriceHistoryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeStaleSecurityGroupsCommand}
   */
  describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStaleSecurityGroupsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeStoreImageTasksCommand}
   */
  describeStoreImageTasks(
    args: DescribeStoreImageTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStoreImageTasksCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSubnetsCommand}
   */
  describeSubnets(
    args: DescribeSubnetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSubnetsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTagsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTrafficMirrorFilterRulesCommand}
   */
  describeTrafficMirrorFilterRules(
    args: DescribeTrafficMirrorFilterRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrafficMirrorFilterRulesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTrafficMirrorFiltersCommand}
   */
  describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrafficMirrorFiltersCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTrafficMirrorSessionsCommand}
   */
  describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrafficMirrorSessionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTrafficMirrorTargetsCommand}
   */
  describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrafficMirrorTargetsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayAttachmentsCommand}
   */
  describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayAttachmentsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayConnectPeersCommand}
   */
  describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayConnectPeersCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayConnectsCommand}
   */
  describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayConnectsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayMulticastDomainsCommand}
   */
  describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayMulticastDomainsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayPeeringAttachmentsCommand}
   */
  describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayPeeringAttachmentsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayPolicyTablesCommand}
   */
  describeTransitGatewayPolicyTables(
    args: DescribeTransitGatewayPolicyTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayPolicyTablesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayRouteTableAnnouncementsCommand}
   */
  describeTransitGatewayRouteTableAnnouncements(
    args: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayRouteTablesCommand}
   */
  describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayRouteTablesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayVpcAttachmentsCommand}
   */
  describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewayVpcAttachmentsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewaysCommand}
   */
  describeTransitGateways(
    args: DescribeTransitGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTransitGatewaysCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTrunkInterfaceAssociationsCommand}
   */
  describeTrunkInterfaceAssociations(
    args: DescribeTrunkInterfaceAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeTrunkInterfaceAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessEndpointsCommand}
   */
  describeVerifiedAccessEndpoints(
    args: DescribeVerifiedAccessEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVerifiedAccessEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessGroupsCommand}
   */
  describeVerifiedAccessGroups(
    args: DescribeVerifiedAccessGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVerifiedAccessGroupsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommand}
   */
  describeVerifiedAccessInstanceLoggingConfigurations(
    args: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessInstancesCommand}
   */
  describeVerifiedAccessInstances(
    args: DescribeVerifiedAccessInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVerifiedAccessInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessTrustProvidersCommand}
   */
  describeVerifiedAccessTrustProviders(
    args: DescribeVerifiedAccessTrustProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVerifiedAccessTrustProvidersCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVolumeAttributeCommand}
   */
  describeVolumeAttribute(
    args: DescribeVolumeAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVolumeAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVolumeStatusCommand}
   */
  describeVolumeStatus(
    args: DescribeVolumeStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVolumeStatusCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVolumesCommand}
   */
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVolumesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVolumesModificationsCommand}
   */
  describeVolumesModifications(
    args: DescribeVolumesModificationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVolumesModificationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcAttributeCommand}
   */
  describeVpcAttribute(
    args: DescribeVpcAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcBlockPublicAccessExclusionsCommand}
   */
  describeVpcBlockPublicAccessExclusions(
    args: DescribeVpcBlockPublicAccessExclusionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcBlockPublicAccessExclusionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcBlockPublicAccessOptionsCommand}
   */
  describeVpcBlockPublicAccessOptions(
    args: DescribeVpcBlockPublicAccessOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcBlockPublicAccessOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcClassicLinkCommand}
   */
  describeVpcClassicLink(
    args: DescribeVpcClassicLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcClassicLinkCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcClassicLinkDnsSupportCommand}
   */
  describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcClassicLinkDnsSupportCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointAssociationsCommand}
   */
  describeVpcEndpointAssociations(
    args: DescribeVpcEndpointAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointConnectionNotificationsCommand}
   */
  describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointConnectionNotificationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointConnectionsCommand}
   */
  describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointConnectionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointServiceConfigurationsCommand}
   */
  describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointServiceConfigurationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointServicePermissionsCommand}
   */
  describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointServicePermissionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointServicesCommand}
   */
  describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointServicesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcPeeringConnectionsCommand}
   */
  describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcPeeringConnectionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcsCommand}
   */
  describeVpcs(
    args: DescribeVpcsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpnConnectionsCommand}
   */
  describeVpnConnections(
    args: DescribeVpnConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpnConnectionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpnGatewaysCommand}
   */
  describeVpnGateways(
    args: DescribeVpnGatewaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpnGatewaysCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachClassicLinkVpcCommand}
   */
  detachClassicLinkVpc(
    args: DetachClassicLinkVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachClassicLinkVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachInternetGatewayCommand}
   */
  detachInternetGateway(
    args: DetachInternetGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachInternetGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachNetworkInterfaceCommand}
   */
  detachNetworkInterface(
    args: DetachNetworkInterfaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachNetworkInterfaceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachVerifiedAccessTrustProviderCommand}
   */
  detachVerifiedAccessTrustProvider(
    args: DetachVerifiedAccessTrustProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachVerifiedAccessTrustProviderCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachVolumeCommand}
   */
  detachVolume(
    args: DetachVolumeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachVolumeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachVpnGatewayCommand}
   */
  detachVpnGateway(
    args: DetachVpnGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachVpnGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableAddressTransferCommand}
   */
  disableAddressTransfer(
    args: DisableAddressTransferCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableAddressTransferCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableAllowedImagesSettingsCommand}
   */
  disableAllowedImagesSettings(
    args: DisableAllowedImagesSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableAllowedImagesSettingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableAwsNetworkPerformanceMetricSubscriptionCommand}
   */
  disableAwsNetworkPerformanceMetricSubscription(
    args: DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableEbsEncryptionByDefaultCommand}
   */
  disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableEbsEncryptionByDefaultCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableFastLaunchCommand}
   */
  disableFastLaunch(
    args: DisableFastLaunchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableFastLaunchCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableFastSnapshotRestoresCommand}
   */
  disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableFastSnapshotRestoresCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableImageCommand}
   */
  disableImage(
    args: DisableImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableImageBlockPublicAccessCommand}
   */
  disableImageBlockPublicAccess(
    args: DisableImageBlockPublicAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableImageBlockPublicAccessCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableImageDeprecationCommand}
   */
  disableImageDeprecation(
    args: DisableImageDeprecationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableImageDeprecationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableImageDeregistrationProtectionCommand}
   */
  disableImageDeregistrationProtection(
    args: DisableImageDeregistrationProtectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableImageDeregistrationProtectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableIpamOrganizationAdminAccountCommand}
   */
  disableIpamOrganizationAdminAccount(
    args: DisableIpamOrganizationAdminAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableIpamOrganizationAdminAccountCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableRouteServerPropagationCommand}
   */
  disableRouteServerPropagation(
    args: DisableRouteServerPropagationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableRouteServerPropagationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableSerialConsoleAccessCommand}
   */
  disableSerialConsoleAccess(
    args: DisableSerialConsoleAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableSerialConsoleAccessCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableSnapshotBlockPublicAccessCommand}
   */
  disableSnapshotBlockPublicAccess(
    args: DisableSnapshotBlockPublicAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableSnapshotBlockPublicAccessCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableTransitGatewayRouteTablePropagationCommand}
   */
  disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableTransitGatewayRouteTablePropagationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableVgwRoutePropagationCommand}
   */
  disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableVgwRoutePropagationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableVpcClassicLinkCommand}
   */
  disableVpcClassicLink(
    args: DisableVpcClassicLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableVpcClassicLinkCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableVpcClassicLinkDnsSupportCommand}
   */
  disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableVpcClassicLinkDnsSupportCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateAddressCommand}
   */
  disassociateAddress(
    args: DisassociateAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateAddressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateCapacityReservationBillingOwnerCommand}
   */
  disassociateCapacityReservationBillingOwner(
    args: DisassociateCapacityReservationBillingOwnerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateCapacityReservationBillingOwnerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateClientVpnTargetNetworkCommand}
   */
  disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateClientVpnTargetNetworkCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateEnclaveCertificateIamRoleCommand}
   */
  disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateEnclaveCertificateIamRoleCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateIamInstanceProfileCommand}
   */
  disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateIamInstanceProfileCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateInstanceEventWindowCommand}
   */
  disassociateInstanceEventWindow(
    args: DisassociateInstanceEventWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateInstanceEventWindowCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateIpamByoasnCommand}
   */
  disassociateIpamByoasn(
    args: DisassociateIpamByoasnCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateIpamByoasnCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateIpamResourceDiscoveryCommand}
   */
  disassociateIpamResourceDiscovery(
    args: DisassociateIpamResourceDiscoveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateIpamResourceDiscoveryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateNatGatewayAddressCommand}
   */
  disassociateNatGatewayAddress(
    args: DisassociateNatGatewayAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateNatGatewayAddressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateRouteServerCommand}
   */
  disassociateRouteServer(
    args: DisassociateRouteServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateRouteServerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateRouteTableCommand}
   */
  disassociateRouteTable(
    args: DisassociateRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateSecurityGroupVpcCommand}
   */
  disassociateSecurityGroupVpc(
    args: DisassociateSecurityGroupVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateSecurityGroupVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateSubnetCidrBlockCommand}
   */
  disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateSubnetCidrBlockCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateTransitGatewayMulticastDomainCommand}
   */
  disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateTransitGatewayMulticastDomainCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateTransitGatewayPolicyTableCommand}
   */
  disassociateTransitGatewayPolicyTable(
    args: DisassociateTransitGatewayPolicyTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateTransitGatewayPolicyTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateTransitGatewayRouteTableCommand}
   */
  disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateTransitGatewayRouteTableCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateTrunkInterfaceCommand}
   */
  disassociateTrunkInterface(
    args: DisassociateTrunkInterfaceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateTrunkInterfaceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateVpcCidrBlockCommand}
   */
  disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateVpcCidrBlockCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableAddressTransferCommand}
   */
  enableAddressTransfer(
    args: EnableAddressTransferCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableAddressTransferCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableAllowedImagesSettingsCommand}
   */
  enableAllowedImagesSettings(
    args: EnableAllowedImagesSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableAllowedImagesSettingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableAwsNetworkPerformanceMetricSubscriptionCommand}
   */
  enableAwsNetworkPerformanceMetricSubscription(
    args: EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableEbsEncryptionByDefaultCommand}
   */
  enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableEbsEncryptionByDefaultCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableFastLaunchCommand}
   */
  enableFastLaunch(
    args: EnableFastLaunchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableFastLaunchCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableFastSnapshotRestoresCommand}
   */
  enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableFastSnapshotRestoresCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableImageCommand}
   */
  enableImage(
    args: EnableImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableImageBlockPublicAccessCommand}
   */
  enableImageBlockPublicAccess(
    args: EnableImageBlockPublicAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableImageBlockPublicAccessCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableImageDeprecationCommand}
   */
  enableImageDeprecation(
    args: EnableImageDeprecationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableImageDeprecationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableImageDeregistrationProtectionCommand}
   */
  enableImageDeregistrationProtection(
    args: EnableImageDeregistrationProtectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableImageDeregistrationProtectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableIpamOrganizationAdminAccountCommand}
   */
  enableIpamOrganizationAdminAccount(
    args: EnableIpamOrganizationAdminAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableIpamOrganizationAdminAccountCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommand}
   */
  enableReachabilityAnalyzerOrganizationSharing(
    args: EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableRouteServerPropagationCommand}
   */
  enableRouteServerPropagation(
    args: EnableRouteServerPropagationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableRouteServerPropagationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableSerialConsoleAccessCommand}
   */
  enableSerialConsoleAccess(
    args: EnableSerialConsoleAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableSerialConsoleAccessCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableSnapshotBlockPublicAccessCommand}
   */
  enableSnapshotBlockPublicAccess(
    args: EnableSnapshotBlockPublicAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableSnapshotBlockPublicAccessCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableTransitGatewayRouteTablePropagationCommand}
   */
  enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableTransitGatewayRouteTablePropagationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableVgwRoutePropagationCommand}
   */
  enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableVgwRoutePropagationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableVolumeIOCommand}
   */
  enableVolumeIO(
    args: EnableVolumeIOCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableVolumeIOCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableVpcClassicLinkCommand}
   */
  enableVpcClassicLink(
    args: EnableVpcClassicLinkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableVpcClassicLinkCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableVpcClassicLinkDnsSupportCommand}
   */
  enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableVpcClassicLinkDnsSupportCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ExportClientVpnClientCertificateRevocationListCommand}
   */
  exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportClientVpnClientCertificateRevocationListCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ExportClientVpnClientConfigurationCommand}
   */
  exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportClientVpnClientConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ExportImageCommand}
   */
  exportImage(
    args: ExportImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ExportTransitGatewayRoutesCommand}
   */
  exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportTransitGatewayRoutesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ExportVerifiedAccessInstanceClientConfigurationCommand}
   */
  exportVerifiedAccessInstanceClientConfiguration(
    args: ExportVerifiedAccessInstanceClientConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ExportVerifiedAccessInstanceClientConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetAllowedImagesSettingsCommand}
   */
  getAllowedImagesSettings(
    args: GetAllowedImagesSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAllowedImagesSettingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetAssociatedEnclaveCertificateIamRolesCommand}
   */
  getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAssociatedEnclaveCertificateIamRolesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetAssociatedIpv6PoolCidrsCommand}
   */
  getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAssociatedIpv6PoolCidrsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetAwsNetworkPerformanceDataCommand}
   */
  getAwsNetworkPerformanceData(
    args: GetAwsNetworkPerformanceDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAwsNetworkPerformanceDataCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetCapacityReservationUsageCommand}
   */
  getCapacityReservationUsage(
    args: GetCapacityReservationUsageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCapacityReservationUsageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetCoipPoolUsageCommand}
   */
  getCoipPoolUsage(
    args: GetCoipPoolUsageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCoipPoolUsageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetConsoleOutputCommand}
   */
  getConsoleOutput(
    args: GetConsoleOutputCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConsoleOutputCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetConsoleScreenshotCommand}
   */
  getConsoleScreenshot(
    args: GetConsoleScreenshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConsoleScreenshotCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetDeclarativePoliciesReportSummaryCommand}
   */
  getDeclarativePoliciesReportSummary(
    args: GetDeclarativePoliciesReportSummaryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDeclarativePoliciesReportSummaryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetDefaultCreditSpecificationCommand}
   */
  getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDefaultCreditSpecificationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetEbsDefaultKmsKeyIdCommand}
   */
  getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEbsDefaultKmsKeyIdCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetEbsEncryptionByDefaultCommand}
   */
  getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEbsEncryptionByDefaultCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetFlowLogsIntegrationTemplateCommand}
   */
  getFlowLogsIntegrationTemplate(
    args: GetFlowLogsIntegrationTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFlowLogsIntegrationTemplateCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetGroupsForCapacityReservationCommand}
   */
  getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGroupsForCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetHostReservationPurchasePreviewCommand}
   */
  getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetHostReservationPurchasePreviewCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetImageBlockPublicAccessStateCommand}
   */
  getImageBlockPublicAccessState(
    args: GetImageBlockPublicAccessStateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetImageBlockPublicAccessStateCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetInstanceMetadataDefaultsCommand}
   */
  getInstanceMetadataDefaults(
    args: GetInstanceMetadataDefaultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInstanceMetadataDefaultsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetInstanceTpmEkPubCommand}
   */
  getInstanceTpmEkPub(
    args: GetInstanceTpmEkPubCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInstanceTpmEkPubCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetInstanceTypesFromInstanceRequirementsCommand}
   */
  getInstanceTypesFromInstanceRequirements(
    args: GetInstanceTypesFromInstanceRequirementsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInstanceTypesFromInstanceRequirementsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetInstanceUefiDataCommand}
   */
  getInstanceUefiData(
    args: GetInstanceUefiDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetInstanceUefiDataCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamAddressHistoryCommand}
   */
  getIpamAddressHistory(
    args: GetIpamAddressHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIpamAddressHistoryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamDiscoveredAccountsCommand}
   */
  getIpamDiscoveredAccounts(
    args: GetIpamDiscoveredAccountsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIpamDiscoveredAccountsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamDiscoveredPublicAddressesCommand}
   */
  getIpamDiscoveredPublicAddresses(
    args: GetIpamDiscoveredPublicAddressesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIpamDiscoveredPublicAddressesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamDiscoveredResourceCidrsCommand}
   */
  getIpamDiscoveredResourceCidrs(
    args: GetIpamDiscoveredResourceCidrsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIpamDiscoveredResourceCidrsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamPoolAllocationsCommand}
   */
  getIpamPoolAllocations(
    args: GetIpamPoolAllocationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIpamPoolAllocationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamPoolCidrsCommand}
   */
  getIpamPoolCidrs(
    args: GetIpamPoolCidrsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIpamPoolCidrsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamResourceCidrsCommand}
   */
  getIpamResourceCidrs(
    args: GetIpamResourceCidrsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIpamResourceCidrsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetLaunchTemplateDataCommand}
   */
  getLaunchTemplateData(
    args: GetLaunchTemplateDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLaunchTemplateDataCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetManagedPrefixListAssociationsCommand}
   */
  getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetManagedPrefixListAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetManagedPrefixListEntriesCommand}
   */
  getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetManagedPrefixListEntriesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommand}
   */
  getNetworkInsightsAccessScopeAnalysisFindings(
    args: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetNetworkInsightsAccessScopeContentCommand}
   */
  getNetworkInsightsAccessScopeContent(
    args: GetNetworkInsightsAccessScopeContentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetNetworkInsightsAccessScopeContentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetPasswordDataCommand}
   */
  getPasswordData(
    args: GetPasswordDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPasswordDataCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetReservedInstancesExchangeQuoteCommand}
   */
  getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetReservedInstancesExchangeQuoteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetRouteServerAssociationsCommand}
   */
  getRouteServerAssociations(
    args: GetRouteServerAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRouteServerAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetRouteServerPropagationsCommand}
   */
  getRouteServerPropagations(
    args: GetRouteServerPropagationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRouteServerPropagationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetRouteServerRoutingDatabaseCommand}
   */
  getRouteServerRoutingDatabase(
    args: GetRouteServerRoutingDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRouteServerRoutingDatabaseCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSecurityGroupsForVpcCommand}
   */
  getSecurityGroupsForVpc(
    args: GetSecurityGroupsForVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityGroupsForVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSerialConsoleAccessStatusCommand}
   */
  getSerialConsoleAccessStatus(
    args: GetSerialConsoleAccessStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSerialConsoleAccessStatusCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSnapshotBlockPublicAccessStateCommand}
   */
  getSnapshotBlockPublicAccessState(
    args: GetSnapshotBlockPublicAccessStateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSnapshotBlockPublicAccessStateCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSpotPlacementScoresCommand}
   */
  getSpotPlacementScores(
    args: GetSpotPlacementScoresCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSpotPlacementScoresCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSubnetCidrReservationsCommand}
   */
  getSubnetCidrReservations(
    args: GetSubnetCidrReservationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSubnetCidrReservationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayAttachmentPropagationsCommand}
   */
  getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransitGatewayAttachmentPropagationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayMulticastDomainAssociationsCommand}
   */
  getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransitGatewayMulticastDomainAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayPolicyTableAssociationsCommand}
   */
  getTransitGatewayPolicyTableAssociations(
    args: GetTransitGatewayPolicyTableAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransitGatewayPolicyTableAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayPolicyTableEntriesCommand}
   */
  getTransitGatewayPolicyTableEntries(
    args: GetTransitGatewayPolicyTableEntriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransitGatewayPolicyTableEntriesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayPrefixListReferencesCommand}
   */
  getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransitGatewayPrefixListReferencesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayRouteTableAssociationsCommand}
   */
  getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransitGatewayRouteTableAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayRouteTablePropagationsCommand}
   */
  getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTransitGatewayRouteTablePropagationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVerifiedAccessEndpointPolicyCommand}
   */
  getVerifiedAccessEndpointPolicy(
    args: GetVerifiedAccessEndpointPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVerifiedAccessEndpointPolicyCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVerifiedAccessEndpointTargetsCommand}
   */
  getVerifiedAccessEndpointTargets(
    args: GetVerifiedAccessEndpointTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVerifiedAccessEndpointTargetsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVerifiedAccessGroupPolicyCommand}
   */
  getVerifiedAccessGroupPolicy(
    args: GetVerifiedAccessGroupPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVerifiedAccessGroupPolicyCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVpnConnectionDeviceSampleConfigurationCommand}
   */
  getVpnConnectionDeviceSampleConfiguration(
    args: GetVpnConnectionDeviceSampleConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpnConnectionDeviceSampleConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVpnConnectionDeviceTypesCommand}
   */
  getVpnConnectionDeviceTypes(
    args: GetVpnConnectionDeviceTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpnConnectionDeviceTypesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVpnTunnelReplacementStatusCommand}
   */
  getVpnTunnelReplacementStatus(
    args: GetVpnTunnelReplacementStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetVpnTunnelReplacementStatusCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ImportClientVpnClientCertificateRevocationListCommand}
   */
  importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportClientVpnClientCertificateRevocationListCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ImportImageCommand}
   */
  importImage(
    args: ImportImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ImportInstanceCommand}
   */
  importInstance(
    args: ImportInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportInstanceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ImportKeyPairCommand}
   */
  importKeyPair(
    args: ImportKeyPairCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportKeyPairCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ImportSnapshotCommand}
   */
  importSnapshot(
    args: ImportSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportSnapshotCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ImportVolumeCommand}
   */
  importVolume(
    args: ImportVolumeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportVolumeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ListImagesInRecycleBinCommand}
   */
  listImagesInRecycleBin(
    args: ListImagesInRecycleBinCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListImagesInRecycleBinCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ListSnapshotsInRecycleBinCommand}
   */
  listSnapshotsInRecycleBin(
    args: ListSnapshotsInRecycleBinCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSnapshotsInRecycleBinCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link LockSnapshotCommand}
   */
  lockSnapshot(
    args: LockSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    LockSnapshotCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyAddressAttributeCommand}
   */
  modifyAddressAttribute(
    args: ModifyAddressAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyAddressAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyAvailabilityZoneGroupCommand}
   */
  modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyAvailabilityZoneGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyCapacityReservationCommand}
   */
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCapacityReservationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyCapacityReservationFleetCommand}
   */
  modifyCapacityReservationFleet(
    args: ModifyCapacityReservationFleetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyCapacityReservationFleetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyClientVpnEndpointCommand}
   */
  modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyClientVpnEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyDefaultCreditSpecificationCommand}
   */
  modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyDefaultCreditSpecificationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyEbsDefaultKmsKeyIdCommand}
   */
  modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyEbsDefaultKmsKeyIdCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyFleetCommand}
   */
  modifyFleet(
    args: ModifyFleetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyFleetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyFpgaImageAttributeCommand}
   */
  modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyFpgaImageAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyHostsCommand}
   */
  modifyHosts(
    args: ModifyHostsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyHostsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIdFormatCommand}
   */
  modifyIdFormat(
    args: ModifyIdFormatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIdFormatCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIdentityIdFormatCommand}
   */
  modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIdentityIdFormatCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyImageAttributeCommand}
   */
  modifyImageAttribute(
    args: ModifyImageAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyImageAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceAttributeCommand}
   */
  modifyInstanceAttribute(
    args: ModifyInstanceAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceCapacityReservationAttributesCommand}
   */
  modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceCapacityReservationAttributesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceCpuOptionsCommand}
   */
  modifyInstanceCpuOptions(
    args: ModifyInstanceCpuOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceCpuOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceCreditSpecificationCommand}
   */
  modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceCreditSpecificationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceEventStartTimeCommand}
   */
  modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceEventStartTimeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceEventWindowCommand}
   */
  modifyInstanceEventWindow(
    args: ModifyInstanceEventWindowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceEventWindowCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceMaintenanceOptionsCommand}
   */
  modifyInstanceMaintenanceOptions(
    args: ModifyInstanceMaintenanceOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceMaintenanceOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceMetadataDefaultsCommand}
   */
  modifyInstanceMetadataDefaults(
    args: ModifyInstanceMetadataDefaultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceMetadataDefaultsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceMetadataOptionsCommand}
   */
  modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceMetadataOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceNetworkPerformanceOptionsCommand}
   */
  modifyInstanceNetworkPerformanceOptions(
    args: ModifyInstanceNetworkPerformanceOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstanceNetworkPerformanceOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstancePlacementCommand}
   */
  modifyInstancePlacement(
    args: ModifyInstancePlacementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyInstancePlacementCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIpamCommand}
   */
  modifyIpam(
    args: ModifyIpamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIpamCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIpamPoolCommand}
   */
  modifyIpamPool(
    args: ModifyIpamPoolCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIpamPoolCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIpamResourceCidrCommand}
   */
  modifyIpamResourceCidr(
    args: ModifyIpamResourceCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIpamResourceCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIpamResourceDiscoveryCommand}
   */
  modifyIpamResourceDiscovery(
    args: ModifyIpamResourceDiscoveryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIpamResourceDiscoveryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIpamScopeCommand}
   */
  modifyIpamScope(
    args: ModifyIpamScopeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIpamScopeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyLaunchTemplateCommand}
   */
  modifyLaunchTemplate(
    args: ModifyLaunchTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyLaunchTemplateCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyLocalGatewayRouteCommand}
   */
  modifyLocalGatewayRoute(
    args: ModifyLocalGatewayRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyLocalGatewayRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyManagedPrefixListCommand}
   */
  modifyManagedPrefixList(
    args: ModifyManagedPrefixListCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyManagedPrefixListCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyNetworkInterfaceAttributeCommand}
   */
  modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyNetworkInterfaceAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyPrivateDnsNameOptionsCommand}
   */
  modifyPrivateDnsNameOptions(
    args: ModifyPrivateDnsNameOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyPrivateDnsNameOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyReservedInstancesCommand}
   */
  modifyReservedInstances(
    args: ModifyReservedInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyReservedInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyRouteServerCommand}
   */
  modifyRouteServer(
    args: ModifyRouteServerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyRouteServerCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySecurityGroupRulesCommand}
   */
  modifySecurityGroupRules(
    args: ModifySecurityGroupRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifySecurityGroupRulesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySnapshotAttributeCommand}
   */
  modifySnapshotAttribute(
    args: ModifySnapshotAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifySnapshotAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySnapshotTierCommand}
   */
  modifySnapshotTier(
    args: ModifySnapshotTierCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifySnapshotTierCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySpotFleetRequestCommand}
   */
  modifySpotFleetRequest(
    args: ModifySpotFleetRequestCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifySpotFleetRequestCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySubnetAttributeCommand}
   */
  modifySubnetAttribute(
    args: ModifySubnetAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifySubnetAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommand}
   */
  modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTrafficMirrorFilterRuleCommand}
   */
  modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTrafficMirrorFilterRuleCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTrafficMirrorSessionCommand}
   */
  modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTrafficMirrorSessionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTransitGatewayCommand}
   */
  modifyTransitGateway(
    args: ModifyTransitGatewayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTransitGatewayCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTransitGatewayPrefixListReferenceCommand}
   */
  modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTransitGatewayPrefixListReferenceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTransitGatewayVpcAttachmentCommand}
   */
  modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyTransitGatewayVpcAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessEndpointCommand}
   */
  modifyVerifiedAccessEndpoint(
    args: ModifyVerifiedAccessEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVerifiedAccessEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessEndpointPolicyCommand}
   */
  modifyVerifiedAccessEndpointPolicy(
    args: ModifyVerifiedAccessEndpointPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVerifiedAccessEndpointPolicyCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessGroupCommand}
   */
  modifyVerifiedAccessGroup(
    args: ModifyVerifiedAccessGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVerifiedAccessGroupCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessGroupPolicyCommand}
   */
  modifyVerifiedAccessGroupPolicy(
    args: ModifyVerifiedAccessGroupPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVerifiedAccessGroupPolicyCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessInstanceCommand}
   */
  modifyVerifiedAccessInstance(
    args: ModifyVerifiedAccessInstanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVerifiedAccessInstanceCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommand}
   */
  modifyVerifiedAccessInstanceLoggingConfiguration(
    args: ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessTrustProviderCommand}
   */
  modifyVerifiedAccessTrustProvider(
    args: ModifyVerifiedAccessTrustProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVerifiedAccessTrustProviderCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVolumeCommand}
   */
  modifyVolume(
    args: ModifyVolumeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVolumeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVolumeAttributeCommand}
   */
  modifyVolumeAttribute(
    args: ModifyVolumeAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVolumeAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcAttributeCommand}
   */
  modifyVpcAttribute(
    args: ModifyVpcAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcBlockPublicAccessExclusionCommand}
   */
  modifyVpcBlockPublicAccessExclusion(
    args: ModifyVpcBlockPublicAccessExclusionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcBlockPublicAccessExclusionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcBlockPublicAccessOptionsCommand}
   */
  modifyVpcBlockPublicAccessOptions(
    args: ModifyVpcBlockPublicAccessOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcBlockPublicAccessOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointCommand}
   */
  modifyVpcEndpoint(
    args: ModifyVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcEndpointCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointConnectionNotificationCommand}
   */
  modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcEndpointConnectionNotificationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointServiceConfigurationCommand}
   */
  modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcEndpointServiceConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointServicePayerResponsibilityCommand}
   */
  modifyVpcEndpointServicePayerResponsibility(
    args: ModifyVpcEndpointServicePayerResponsibilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcEndpointServicePayerResponsibilityCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointServicePermissionsCommand}
   */
  modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcEndpointServicePermissionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcPeeringConnectionOptionsCommand}
   */
  modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcPeeringConnectionOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcTenancyCommand}
   */
  modifyVpcTenancy(
    args: ModifyVpcTenancyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpcTenancyCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpnConnectionCommand}
   */
  modifyVpnConnection(
    args: ModifyVpnConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpnConnectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpnConnectionOptionsCommand}
   */
  modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpnConnectionOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpnTunnelCertificateCommand}
   */
  modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpnTunnelCertificateCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpnTunnelOptionsCommand}
   */
  modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyVpnTunnelOptionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link MonitorInstancesCommand}
   */
  monitorInstances(
    args: MonitorInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    MonitorInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link MoveAddressToVpcCommand}
   */
  moveAddressToVpc(
    args: MoveAddressToVpcCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    MoveAddressToVpcCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link MoveByoipCidrToIpamCommand}
   */
  moveByoipCidrToIpam(
    args: MoveByoipCidrToIpamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    MoveByoipCidrToIpamCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link MoveCapacityReservationInstancesCommand}
   */
  moveCapacityReservationInstances(
    args: MoveCapacityReservationInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    MoveCapacityReservationInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ProvisionByoipCidrCommand}
   */
  provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ProvisionByoipCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ProvisionIpamByoasnCommand}
   */
  provisionIpamByoasn(
    args: ProvisionIpamByoasnCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ProvisionIpamByoasnCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ProvisionIpamPoolCidrCommand}
   */
  provisionIpamPoolCidr(
    args: ProvisionIpamPoolCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ProvisionIpamPoolCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ProvisionPublicIpv4PoolCidrCommand}
   */
  provisionPublicIpv4PoolCidr(
    args: ProvisionPublicIpv4PoolCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ProvisionPublicIpv4PoolCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseCapacityBlockCommand}
   */
  purchaseCapacityBlock(
    args: PurchaseCapacityBlockCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseCapacityBlockCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseCapacityBlockExtensionCommand}
   */
  purchaseCapacityBlockExtension(
    args: PurchaseCapacityBlockExtensionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseCapacityBlockExtensionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseHostReservationCommand}
   */
  purchaseHostReservation(
    args: PurchaseHostReservationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseHostReservationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseReservedInstancesOfferingCommand}
   */
  purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedInstancesOfferingCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseScheduledInstancesCommand}
   */
  purchaseScheduledInstances(
    args: PurchaseScheduledInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseScheduledInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RebootInstancesCommand}
   */
  rebootInstances(
    args: RebootInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RebootInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RegisterImageCommand}
   */
  registerImage(
    args: RegisterImageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterImageCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RegisterInstanceEventNotificationAttributesCommand}
   */
  registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterInstanceEventNotificationAttributesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RegisterTransitGatewayMulticastGroupMembersCommand}
   */
  registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTransitGatewayMulticastGroupMembersCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommand}
   */
  registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectCapacityReservationBillingOwnershipCommand}
   */
  rejectCapacityReservationBillingOwnership(
    args: RejectCapacityReservationBillingOwnershipCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectCapacityReservationBillingOwnershipCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommand}
   */
  rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectTransitGatewayPeeringAttachmentCommand}
   */
  rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectTransitGatewayPeeringAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectTransitGatewayVpcAttachmentCommand}
   */
  rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectTransitGatewayVpcAttachmentCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectVpcEndpointConnectionsCommand}
   */
  rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectVpcEndpointConnectionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectVpcPeeringConnectionCommand}
   */
  rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectVpcPeeringConnectionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReleaseAddressCommand}
   */
  releaseAddress(
    args: ReleaseAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReleaseAddressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReleaseHostsCommand}
   */
  releaseHosts(
    args: ReleaseHostsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReleaseHostsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReleaseIpamPoolAllocationCommand}
   */
  releaseIpamPoolAllocation(
    args: ReleaseIpamPoolAllocationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReleaseIpamPoolAllocationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceIamInstanceProfileAssociationCommand}
   */
  replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceIamInstanceProfileAssociationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceImageCriteriaInAllowedImagesSettingsCommand}
   */
  replaceImageCriteriaInAllowedImagesSettings(
    args: ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceNetworkAclAssociationCommand}
   */
  replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceNetworkAclAssociationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceNetworkAclEntryCommand}
   */
  replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceNetworkAclEntryCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceRouteCommand}
   */
  replaceRoute(
    args: ReplaceRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceRouteTableAssociationCommand}
   */
  replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceRouteTableAssociationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceTransitGatewayRouteCommand}
   */
  replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceTransitGatewayRouteCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceVpnTunnelCommand}
   */
  replaceVpnTunnel(
    args: ReplaceVpnTunnelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceVpnTunnelCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReportInstanceStatusCommand}
   */
  reportInstanceStatus(
    args: ReportInstanceStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReportInstanceStatusCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RequestSpotFleetCommand}
   */
  requestSpotFleet(
    args: RequestSpotFleetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RequestSpotFleetCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RequestSpotInstancesCommand}
   */
  requestSpotInstances(
    args: RequestSpotInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RequestSpotInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetAddressAttributeCommand}
   */
  resetAddressAttribute(
    args: ResetAddressAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetAddressAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetEbsDefaultKmsKeyIdCommand}
   */
  resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetEbsDefaultKmsKeyIdCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetFpgaImageAttributeCommand}
   */
  resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetFpgaImageAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetImageAttributeCommand}
   */
  resetImageAttribute(
    args: ResetImageAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetImageAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetInstanceAttributeCommand}
   */
  resetInstanceAttribute(
    args: ResetInstanceAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetInstanceAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetNetworkInterfaceAttributeCommand}
   */
  resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetNetworkInterfaceAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetSnapshotAttributeCommand}
   */
  resetSnapshotAttribute(
    args: ResetSnapshotAttributeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetSnapshotAttributeCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreAddressToClassicCommand}
   */
  restoreAddressToClassic(
    args: RestoreAddressToClassicCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreAddressToClassicCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreImageFromRecycleBinCommand}
   */
  restoreImageFromRecycleBin(
    args: RestoreImageFromRecycleBinCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreImageFromRecycleBinCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreManagedPrefixListVersionCommand}
   */
  restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreManagedPrefixListVersionCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreSnapshotFromRecycleBinCommand}
   */
  restoreSnapshotFromRecycleBin(
    args: RestoreSnapshotFromRecycleBinCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreSnapshotFromRecycleBinCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreSnapshotTierCommand}
   */
  restoreSnapshotTier(
    args: RestoreSnapshotTierCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RestoreSnapshotTierCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RevokeClientVpnIngressCommand}
   */
  revokeClientVpnIngress(
    args: RevokeClientVpnIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeClientVpnIngressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RevokeSecurityGroupEgressCommand}
   */
  revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeSecurityGroupEgressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RevokeSecurityGroupIngressCommand}
   */
  revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeSecurityGroupIngressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RunInstancesCommand}
   */
  runInstances(
    args: RunInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RunInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RunScheduledInstancesCommand}
   */
  runScheduledInstances(
    args: RunScheduledInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RunScheduledInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link SearchLocalGatewayRoutesCommand}
   */
  searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SearchLocalGatewayRoutesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link SearchTransitGatewayMulticastGroupsCommand}
   */
  searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SearchTransitGatewayMulticastGroupsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link SearchTransitGatewayRoutesCommand}
   */
  searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SearchTransitGatewayRoutesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link SendDiagnosticInterruptCommand}
   */
  sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendDiagnosticInterruptCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StartDeclarativePoliciesReportCommand}
   */
  startDeclarativePoliciesReport(
    args: StartDeclarativePoliciesReportCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDeclarativePoliciesReportCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StartInstancesCommand}
   */
  startInstances(
    args: StartInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StartNetworkInsightsAccessScopeAnalysisCommand}
   */
  startNetworkInsightsAccessScopeAnalysis(
    args: StartNetworkInsightsAccessScopeAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartNetworkInsightsAccessScopeAnalysisCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StartNetworkInsightsAnalysisCommand}
   */
  startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartNetworkInsightsAnalysisCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommand}
   */
  startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StopInstancesCommand}
   */
  stopInstances(
    args: StopInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link TerminateClientVpnConnectionsCommand}
   */
  terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TerminateClientVpnConnectionsCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link TerminateInstancesCommand}
   */
  terminateInstances(
    args: TerminateInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TerminateInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnassignIpv6AddressesCommand}
   */
  unassignIpv6Addresses(
    args: UnassignIpv6AddressesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UnassignIpv6AddressesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnassignPrivateIpAddressesCommand}
   */
  unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UnassignPrivateIpAddressesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnassignPrivateNatGatewayAddressCommand}
   */
  unassignPrivateNatGatewayAddress(
    args: UnassignPrivateNatGatewayAddressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UnassignPrivateNatGatewayAddressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnlockSnapshotCommand}
   */
  unlockSnapshot(
    args: UnlockSnapshotCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UnlockSnapshotCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnmonitorInstancesCommand}
   */
  unmonitorInstances(
    args: UnmonitorInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UnmonitorInstancesCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommand}
   */
  updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommand}
   */
  updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;

  /**
   * @see {@link WithdrawByoipCidrCommand}
   */
  withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    WithdrawByoipCidrCommandOutput,
    Cause.TimeoutException | SdkError | EC2ServiceError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeEC2Service = Effect.gen(function*() {
  const client = yield* Instance.EC2ClientInstance;

  return yield* Service.fromClientAndCommands<EC2Service$>(
    client,
    commands,
    {
      resolveClientConfig: EC2ServiceConfig.toEC2ClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class EC2Service extends Effect.Tag("@effect-aws/client-ec2/EC2Service")<
  EC2Service,
  EC2Service$
>() {
  static readonly defaultLayer = Layer.effect(this, makeEC2Service).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: EC2Service.Config) =>
    Layer.effect(this, makeEC2Service).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(EC2ServiceConfig.setEC2ServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: EC2ClientConfig) => EC2Client,
  ) =>
    Layer.effect(this, makeEC2Service).pipe(
      Layer.provide(
        Layer.effect(
          Instance.EC2ClientInstance,
          Effect.map(EC2ServiceConfig.toEC2ClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace EC2Service {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<EC2ClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = EC2Service$;
}
