/**
 * @since 1.0.0
 */
import {
  EC2ServiceException,
  AcceptAddressTransferCommand,
  type AcceptAddressTransferCommandInput,
  type AcceptAddressTransferCommandOutput,
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
  AssociateRouteTableCommand,
  type AssociateRouteTableCommandInput,
  type AssociateRouteTableCommandOutput,
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
  CreateSubnetCommand,
  type CreateSubnetCommandInput,
  type CreateSubnetCommandOutput,
  CreateSubnetCidrReservationCommand,
  type CreateSubnetCidrReservationCommandInput,
  type CreateSubnetCidrReservationCommandOutput,
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
  CreateTransitGatewayRouteTableCommand,
  type CreateTransitGatewayRouteTableCommandInput,
  type CreateTransitGatewayRouteTableCommandOutput,
  CreateTransitGatewayRouteTableAnnouncementCommand,
  type CreateTransitGatewayRouteTableAnnouncementCommandInput,
  type CreateTransitGatewayRouteTableAnnouncementCommandOutput,
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
  DeleteNetworkInsightsAccessScopeCommand,
  type DeleteNetworkInsightsAccessScopeCommandInput,
  type DeleteNetworkInsightsAccessScopeCommandOutput,
  DeleteNetworkInsightsAccessScopeAnalysisCommand,
  type DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
  type DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
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
  DeleteSubnetCommand,
  type DeleteSubnetCommandInput,
  type DeleteSubnetCommandOutput,
  DeleteSubnetCidrReservationCommand,
  type DeleteSubnetCidrReservationCommandInput,
  type DeleteSubnetCidrReservationCommandOutput,
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
  DeleteTransitGatewayRouteTableCommand,
  type DeleteTransitGatewayRouteTableCommandInput,
  type DeleteTransitGatewayRouteTableCommandOutput,
  DeleteTransitGatewayRouteTableAnnouncementCommand,
  type DeleteTransitGatewayRouteTableAnnouncementCommandInput,
  type DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
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
  DescribeAddressesCommand,
  type DescribeAddressesCommandInput,
  type DescribeAddressesCommandOutput,
  DescribeAddressesAttributeCommand,
  type DescribeAddressesAttributeCommandInput,
  type DescribeAddressesAttributeCommandOutput,
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
  DescribeCapacityBlockOfferingsCommand,
  type DescribeCapacityBlockOfferingsCommandInput,
  type DescribeCapacityBlockOfferingsCommandOutput,
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
  DescribeVpcClassicLinkCommand,
  type DescribeVpcClassicLinkCommandInput,
  type DescribeVpcClassicLinkCommandOutput,
  DescribeVpcClassicLinkDnsSupportCommand,
  type DescribeVpcClassicLinkDnsSupportCommandInput,
  type DescribeVpcClassicLinkDnsSupportCommandOutput,
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
  DisableImageCommand,
  type DisableImageCommandInput,
  type DisableImageCommandOutput,
  DisableImageBlockPublicAccessCommand,
  type DisableImageBlockPublicAccessCommandInput,
  type DisableImageBlockPublicAccessCommandOutput,
  DisableImageDeprecationCommand,
  type DisableImageDeprecationCommandInput,
  type DisableImageDeprecationCommandOutput,
  DisableIpamOrganizationAdminAccountCommand,
  type DisableIpamOrganizationAdminAccountCommandInput,
  type DisableIpamOrganizationAdminAccountCommandOutput,
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
  DisassociateRouteTableCommand,
  type DisassociateRouteTableCommandInput,
  type DisassociateRouteTableCommandOutput,
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
  EnableAddressTransferCommand,
  type EnableAddressTransferCommandInput,
  type EnableAddressTransferCommandOutput,
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
  EnableImageCommand,
  type EnableImageCommandInput,
  type EnableImageCommandOutput,
  EnableImageBlockPublicAccessCommand,
  type EnableImageBlockPublicAccessCommandInput,
  type EnableImageBlockPublicAccessCommandOutput,
  EnableImageDeprecationCommand,
  type EnableImageDeprecationCommandInput,
  type EnableImageDeprecationCommandOutput,
  EnableIpamOrganizationAdminAccountCommand,
  type EnableIpamOrganizationAdminAccountCommandInput,
  type EnableIpamOrganizationAdminAccountCommandOutput,
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  type EnableReachabilityAnalyzerOrganizationSharingCommandInput,
  type EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
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
  ModifyInstanceMetadataOptionsCommand,
  type ModifyInstanceMetadataOptionsCommandInput,
  type ModifyInstanceMetadataOptionsCommandOutput,
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
  ModifyVolumeCommand,
  type ModifyVolumeCommandInput,
  type ModifyVolumeCommandOutput,
  ModifyVolumeAttributeCommand,
  type ModifyVolumeAttributeCommandInput,
  type ModifyVolumeAttributeCommandOutput,
  ModifyVpcAttributeCommand,
  type ModifyVpcAttributeCommandInput,
  type ModifyVpcAttributeCommandOutput,
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
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Effect, Layer, ReadonlyRecord, Data } from "effect";
import { EC2ClientInstance, EC2ClientInstanceLayer } from "./EC2ClientInstance";
import { DefaultEC2ClientConfigLayer } from "./EC2ClientInstanceConfig";
import { EC2ServiceError, SdkError, TaggedException } from "./Errors";

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
  DeleteVpcEndpointsCommand,
  DeleteVpcEndpointServiceConfigurationsCommand,
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
  DescribeAddressesCommand,
  DescribeAddressesAttributeCommand,
  DescribeAddressTransfersCommand,
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
  DescribeIdentityIdFormatCommand,
  DescribeIdFormatCommand,
  DescribeImageAttributeCommand,
  DescribeImagesCommand,
  DescribeImportImageTasksCommand,
  DescribeImportSnapshotTasksCommand,
  DescribeInstanceAttributeCommand,
  DescribeInstanceConnectEndpointsCommand,
  DescribeInstanceCreditSpecificationsCommand,
  DescribeInstanceEventNotificationAttributesCommand,
  DescribeInstanceEventWindowsCommand,
  DescribeInstancesCommand,
  DescribeInstanceStatusCommand,
  DescribeInstanceTopologyCommand,
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypesCommand,
  DescribeInternetGatewaysCommand,
  DescribeIpamByoasnCommand,
  DescribeIpamPoolsCommand,
  DescribeIpamResourceDiscoveriesCommand,
  DescribeIpamResourceDiscoveryAssociationsCommand,
  DescribeIpamsCommand,
  DescribeIpamScopesCommand,
  DescribeIpv6PoolsCommand,
  DescribeKeyPairsCommand,
  DescribeLaunchTemplatesCommand,
  DescribeLaunchTemplateVersionsCommand,
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  DescribeLocalGatewaysCommand,
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  DescribeLocalGatewayVirtualInterfacesCommand,
  DescribeLockedSnapshotsCommand,
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
  DescribeSnapshotsCommand,
  DescribeSnapshotTierStatusCommand,
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
  DescribeTransitGatewaysCommand,
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTrunkInterfaceAssociationsCommand,
  DescribeVerifiedAccessEndpointsCommand,
  DescribeVerifiedAccessGroupsCommand,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  DescribeVerifiedAccessInstancesCommand,
  DescribeVerifiedAccessTrustProvidersCommand,
  DescribeVolumeAttributeCommand,
  DescribeVolumesCommand,
  DescribeVolumesModificationsCommand,
  DescribeVolumeStatusCommand,
  DescribeVpcAttributeCommand,
  DescribeVpcClassicLinkCommand,
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServicePermissionsCommand,
  DescribeVpcEndpointServicesCommand,
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
  ModifyIdentityIdFormatCommand,
  ModifyIdFormatCommand,
  ModifyImageAttributeCommand,
  ModifyInstanceAttributeCommand,
  ModifyInstanceCapacityReservationAttributesCommand,
  ModifyInstanceCreditSpecificationCommand,
  ModifyInstanceEventStartTimeCommand,
  ModifyInstanceEventWindowCommand,
  ModifyInstanceMaintenanceOptionsCommand,
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
export type EC2Service = {
  readonly _: unique symbol;

  /**
   * @see {@link AcceptAddressTransferCommand}
   */
  readonly acceptAddressTransfer: (
    args: AcceptAddressTransferCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AcceptAddressTransferCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptReservedInstancesExchangeQuoteCommand}
   */
  readonly acceptReservedInstancesExchangeQuote: (
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AcceptReservedInstancesExchangeQuoteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommand}
   */
  readonly acceptTransitGatewayMulticastDomainAssociations: (
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AcceptTransitGatewayMulticastDomainAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptTransitGatewayPeeringAttachmentCommand}
   */
  readonly acceptTransitGatewayPeeringAttachment: (
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AcceptTransitGatewayPeeringAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptTransitGatewayVpcAttachmentCommand}
   */
  readonly acceptTransitGatewayVpcAttachment: (
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AcceptTransitGatewayVpcAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptVpcEndpointConnectionsCommand}
   */
  readonly acceptVpcEndpointConnections: (
    args: AcceptVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AcceptVpcEndpointConnectionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AcceptVpcPeeringConnectionCommand}
   */
  readonly acceptVpcPeeringConnection: (
    args: AcceptVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AcceptVpcPeeringConnectionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AdvertiseByoipCidrCommand}
   */
  readonly advertiseByoipCidr: (
    args: AdvertiseByoipCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AdvertiseByoipCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AllocateAddressCommand}
   */
  readonly allocateAddress: (
    args: AllocateAddressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<AllocateAddressCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link AllocateHostsCommand}
   */
  readonly allocateHosts: (
    args: AllocateHostsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<AllocateHostsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link AllocateIpamPoolCidrCommand}
   */
  readonly allocateIpamPoolCidr: (
    args: AllocateIpamPoolCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AllocateIpamPoolCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommand}
   */
  readonly applySecurityGroupsToClientVpnTargetNetwork: (
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssignIpv6AddressesCommand}
   */
  readonly assignIpv6Addresses: (
    args: AssignIpv6AddressesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssignIpv6AddressesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssignPrivateIpAddressesCommand}
   */
  readonly assignPrivateIpAddresses: (
    args: AssignPrivateIpAddressesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssignPrivateIpAddressesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssignPrivateNatGatewayAddressCommand}
   */
  readonly assignPrivateNatGatewayAddress: (
    args: AssignPrivateNatGatewayAddressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssignPrivateNatGatewayAddressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateAddressCommand}
   */
  readonly associateAddress: (
    args: AssociateAddressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<AssociateAddressCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link AssociateClientVpnTargetNetworkCommand}
   */
  readonly associateClientVpnTargetNetwork: (
    args: AssociateClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateClientVpnTargetNetworkCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateDhcpOptionsCommand}
   */
  readonly associateDhcpOptions: (
    args: AssociateDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateDhcpOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateEnclaveCertificateIamRoleCommand}
   */
  readonly associateEnclaveCertificateIamRole: (
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateEnclaveCertificateIamRoleCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateIamInstanceProfileCommand}
   */
  readonly associateIamInstanceProfile: (
    args: AssociateIamInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateIamInstanceProfileCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateInstanceEventWindowCommand}
   */
  readonly associateInstanceEventWindow: (
    args: AssociateInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateInstanceEventWindowCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateIpamByoasnCommand}
   */
  readonly associateIpamByoasn: (
    args: AssociateIpamByoasnCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateIpamByoasnCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateIpamResourceDiscoveryCommand}
   */
  readonly associateIpamResourceDiscovery: (
    args: AssociateIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateIpamResourceDiscoveryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateNatGatewayAddressCommand}
   */
  readonly associateNatGatewayAddress: (
    args: AssociateNatGatewayAddressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateNatGatewayAddressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateRouteTableCommand}
   */
  readonly associateRouteTable: (
    args: AssociateRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateRouteTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateSubnetCidrBlockCommand}
   */
  readonly associateSubnetCidrBlock: (
    args: AssociateSubnetCidrBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateSubnetCidrBlockCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateTransitGatewayMulticastDomainCommand}
   */
  readonly associateTransitGatewayMulticastDomain: (
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateTransitGatewayMulticastDomainCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateTransitGatewayPolicyTableCommand}
   */
  readonly associateTransitGatewayPolicyTable: (
    args: AssociateTransitGatewayPolicyTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateTransitGatewayPolicyTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateTransitGatewayRouteTableCommand}
   */
  readonly associateTransitGatewayRouteTable: (
    args: AssociateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateTransitGatewayRouteTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateTrunkInterfaceCommand}
   */
  readonly associateTrunkInterface: (
    args: AssociateTrunkInterfaceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateTrunkInterfaceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AssociateVpcCidrBlockCommand}
   */
  readonly associateVpcCidrBlock: (
    args: AssociateVpcCidrBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AssociateVpcCidrBlockCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachClassicLinkVpcCommand}
   */
  readonly attachClassicLinkVpc: (
    args: AttachClassicLinkVpcCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AttachClassicLinkVpcCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachInternetGatewayCommand}
   */
  readonly attachInternetGateway: (
    args: AttachInternetGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AttachInternetGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachNetworkInterfaceCommand}
   */
  readonly attachNetworkInterface: (
    args: AttachNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AttachNetworkInterfaceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachVerifiedAccessTrustProviderCommand}
   */
  readonly attachVerifiedAccessTrustProvider: (
    args: AttachVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AttachVerifiedAccessTrustProviderCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AttachVolumeCommand}
   */
  readonly attachVolume: (
    args: AttachVolumeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<AttachVolumeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link AttachVpnGatewayCommand}
   */
  readonly attachVpnGateway: (
    args: AttachVpnGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<AttachVpnGatewayCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link AuthorizeClientVpnIngressCommand}
   */
  readonly authorizeClientVpnIngress: (
    args: AuthorizeClientVpnIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AuthorizeClientVpnIngressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AuthorizeSecurityGroupEgressCommand}
   */
  readonly authorizeSecurityGroupEgress: (
    args: AuthorizeSecurityGroupEgressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AuthorizeSecurityGroupEgressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link AuthorizeSecurityGroupIngressCommand}
   */
  readonly authorizeSecurityGroupIngress: (
    args: AuthorizeSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    AuthorizeSecurityGroupIngressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link BundleInstanceCommand}
   */
  readonly bundleInstance: (
    args: BundleInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<BundleInstanceCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CancelBundleTaskCommand}
   */
  readonly cancelBundleTask: (
    args: CancelBundleTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CancelBundleTaskCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CancelCapacityReservationCommand}
   */
  readonly cancelCapacityReservation: (
    args: CancelCapacityReservationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CancelCapacityReservationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelCapacityReservationFleetsCommand}
   */
  readonly cancelCapacityReservationFleets: (
    args: CancelCapacityReservationFleetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CancelCapacityReservationFleetsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelConversionTaskCommand}
   */
  readonly cancelConversionTask: (
    args: CancelConversionTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CancelConversionTaskCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  readonly cancelExportTask: (
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CancelExportTaskCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CancelImageLaunchPermissionCommand}
   */
  readonly cancelImageLaunchPermission: (
    args: CancelImageLaunchPermissionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CancelImageLaunchPermissionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelImportTaskCommand}
   */
  readonly cancelImportTask: (
    args: CancelImportTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CancelImportTaskCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CancelReservedInstancesListingCommand}
   */
  readonly cancelReservedInstancesListing: (
    args: CancelReservedInstancesListingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CancelReservedInstancesListingCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelSpotFleetRequestsCommand}
   */
  readonly cancelSpotFleetRequests: (
    args: CancelSpotFleetRequestsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CancelSpotFleetRequestsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CancelSpotInstanceRequestsCommand}
   */
  readonly cancelSpotInstanceRequests: (
    args: CancelSpotInstanceRequestsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CancelSpotInstanceRequestsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ConfirmProductInstanceCommand}
   */
  readonly confirmProductInstance: (
    args: ConfirmProductInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ConfirmProductInstanceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CopyFpgaImageCommand}
   */
  readonly copyFpgaImage: (
    args: CopyFpgaImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CopyFpgaImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CopyImageCommand}
   */
  readonly copyImage: (
    args: CopyImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CopyImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CopySnapshotCommand}
   */
  readonly copySnapshot: (
    args: CopySnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CopySnapshotCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateCapacityReservationCommand}
   */
  readonly createCapacityReservation: (
    args: CreateCapacityReservationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateCapacityReservationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCapacityReservationFleetCommand}
   */
  readonly createCapacityReservationFleet: (
    args: CreateCapacityReservationFleetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateCapacityReservationFleetCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCarrierGatewayCommand}
   */
  readonly createCarrierGateway: (
    args: CreateCarrierGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateCarrierGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateClientVpnEndpointCommand}
   */
  readonly createClientVpnEndpoint: (
    args: CreateClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateClientVpnEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateClientVpnRouteCommand}
   */
  readonly createClientVpnRoute: (
    args: CreateClientVpnRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateClientVpnRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateCoipCidrCommand}
   */
  readonly createCoipCidr: (
    args: CreateCoipCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateCoipCidrCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateCoipPoolCommand}
   */
  readonly createCoipPool: (
    args: CreateCoipPoolCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateCoipPoolCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateCustomerGatewayCommand}
   */
  readonly createCustomerGateway: (
    args: CreateCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateCustomerGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateDefaultSubnetCommand}
   */
  readonly createDefaultSubnet: (
    args: CreateDefaultSubnetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDefaultSubnetCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateDefaultVpcCommand}
   */
  readonly createDefaultVpc: (
    args: CreateDefaultVpcCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateDefaultVpcCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateDhcpOptionsCommand}
   */
  readonly createDhcpOptions: (
    args: CreateDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateDhcpOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateEgressOnlyInternetGatewayCommand}
   */
  readonly createEgressOnlyInternetGateway: (
    args: CreateEgressOnlyInternetGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateEgressOnlyInternetGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateFleetCommand}
   */
  readonly createFleet: (
    args: CreateFleetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateFleetCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateFlowLogsCommand}
   */
  readonly createFlowLogs: (
    args: CreateFlowLogsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateFlowLogsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateFpgaImageCommand}
   */
  readonly createFpgaImage: (
    args: CreateFpgaImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateFpgaImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateImageCommand}
   */
  readonly createImage: (
    args: CreateImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateInstanceConnectEndpointCommand}
   */
  readonly createInstanceConnectEndpoint: (
    args: CreateInstanceConnectEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateInstanceConnectEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateInstanceEventWindowCommand}
   */
  readonly createInstanceEventWindow: (
    args: CreateInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateInstanceEventWindowCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateInstanceExportTaskCommand}
   */
  readonly createInstanceExportTask: (
    args: CreateInstanceExportTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateInstanceExportTaskCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateInternetGatewayCommand}
   */
  readonly createInternetGateway: (
    args: CreateInternetGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateInternetGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateIpamCommand}
   */
  readonly createIpam: (
    args: CreateIpamCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateIpamCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateIpamPoolCommand}
   */
  readonly createIpamPool: (
    args: CreateIpamPoolCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateIpamPoolCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateIpamResourceDiscoveryCommand}
   */
  readonly createIpamResourceDiscovery: (
    args: CreateIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateIpamResourceDiscoveryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateIpamScopeCommand}
   */
  readonly createIpamScope: (
    args: CreateIpamScopeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateIpamScopeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateKeyPairCommand}
   */
  readonly createKeyPair: (
    args: CreateKeyPairCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateKeyPairCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateLaunchTemplateCommand}
   */
  readonly createLaunchTemplate: (
    args: CreateLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateLaunchTemplateCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLaunchTemplateVersionCommand}
   */
  readonly createLaunchTemplateVersion: (
    args: CreateLaunchTemplateVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateLaunchTemplateVersionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteCommand}
   */
  readonly createLocalGatewayRoute: (
    args: CreateLocalGatewayRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateLocalGatewayRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteTableCommand}
   */
  readonly createLocalGatewayRouteTable: (
    args: CreateLocalGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateLocalGatewayRouteTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}
   */
  readonly createLocalGatewayRouteTableVirtualInterfaceGroupAssociation: (
    args: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommand}
   */
  readonly createLocalGatewayRouteTableVpcAssociation: (
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateLocalGatewayRouteTableVpcAssociationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateManagedPrefixListCommand}
   */
  readonly createManagedPrefixList: (
    args: CreateManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateManagedPrefixListCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNatGatewayCommand}
   */
  readonly createNatGateway: (
    args: CreateNatGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateNatGatewayCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateNetworkAclCommand}
   */
  readonly createNetworkAcl: (
    args: CreateNetworkAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateNetworkAclCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateNetworkAclEntryCommand}
   */
  readonly createNetworkAclEntry: (
    args: CreateNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateNetworkAclEntryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkInsightsAccessScopeCommand}
   */
  readonly createNetworkInsightsAccessScope: (
    args: CreateNetworkInsightsAccessScopeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateNetworkInsightsAccessScopeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkInsightsPathCommand}
   */
  readonly createNetworkInsightsPath: (
    args: CreateNetworkInsightsPathCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateNetworkInsightsPathCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkInterfaceCommand}
   */
  readonly createNetworkInterface: (
    args: CreateNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateNetworkInterfaceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateNetworkInterfacePermissionCommand}
   */
  readonly createNetworkInterfacePermission: (
    args: CreateNetworkInterfacePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateNetworkInterfacePermissionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreatePlacementGroupCommand}
   */
  readonly createPlacementGroup: (
    args: CreatePlacementGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreatePlacementGroupCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreatePublicIpv4PoolCommand}
   */
  readonly createPublicIpv4Pool: (
    args: CreatePublicIpv4PoolCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreatePublicIpv4PoolCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateReplaceRootVolumeTaskCommand}
   */
  readonly createReplaceRootVolumeTask: (
    args: CreateReplaceRootVolumeTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateReplaceRootVolumeTaskCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateReservedInstancesListingCommand}
   */
  readonly createReservedInstancesListing: (
    args: CreateReservedInstancesListingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateReservedInstancesListingCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateRestoreImageTaskCommand}
   */
  readonly createRestoreImageTask: (
    args: CreateRestoreImageTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateRestoreImageTaskCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateRouteCommand}
   */
  readonly createRoute: (
    args: CreateRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateRouteCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateRouteTableCommand}
   */
  readonly createRouteTable: (
    args: CreateRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateRouteTableCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateSecurityGroupCommand}
   */
  readonly createSecurityGroup: (
    args: CreateSecurityGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateSecurityGroupCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  readonly createSnapshot: (
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateSnapshotCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateSnapshotsCommand}
   */
  readonly createSnapshots: (
    args: CreateSnapshotsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateSnapshotsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateSpotDatafeedSubscriptionCommand}
   */
  readonly createSpotDatafeedSubscription: (
    args: CreateSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateSpotDatafeedSubscriptionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateStoreImageTaskCommand}
   */
  readonly createStoreImageTask: (
    args: CreateStoreImageTaskCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateStoreImageTaskCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateSubnetCommand}
   */
  readonly createSubnet: (
    args: CreateSubnetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateSubnetCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateSubnetCidrReservationCommand}
   */
  readonly createSubnetCidrReservation: (
    args: CreateSubnetCidrReservationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateSubnetCidrReservationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTagsCommand}
   */
  readonly createTags: (
    args: CreateTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateTagsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateTrafficMirrorFilterCommand}
   */
  readonly createTrafficMirrorFilter: (
    args: CreateTrafficMirrorFilterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTrafficMirrorFilterCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTrafficMirrorFilterRuleCommand}
   */
  readonly createTrafficMirrorFilterRule: (
    args: CreateTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTrafficMirrorFilterRuleCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTrafficMirrorSessionCommand}
   */
  readonly createTrafficMirrorSession: (
    args: CreateTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTrafficMirrorSessionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTrafficMirrorTargetCommand}
   */
  readonly createTrafficMirrorTarget: (
    args: CreateTrafficMirrorTargetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTrafficMirrorTargetCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayCommand}
   */
  readonly createTransitGateway: (
    args: CreateTransitGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayConnectCommand}
   */
  readonly createTransitGatewayConnect: (
    args: CreateTransitGatewayConnectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayConnectCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayConnectPeerCommand}
   */
  readonly createTransitGatewayConnectPeer: (
    args: CreateTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayConnectPeerCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayMulticastDomainCommand}
   */
  readonly createTransitGatewayMulticastDomain: (
    args: CreateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayMulticastDomainCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayPeeringAttachmentCommand}
   */
  readonly createTransitGatewayPeeringAttachment: (
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayPeeringAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayPolicyTableCommand}
   */
  readonly createTransitGatewayPolicyTable: (
    args: CreateTransitGatewayPolicyTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayPolicyTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayPrefixListReferenceCommand}
   */
  readonly createTransitGatewayPrefixListReference: (
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayPrefixListReferenceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayRouteCommand}
   */
  readonly createTransitGatewayRoute: (
    args: CreateTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayRouteTableCommand}
   */
  readonly createTransitGatewayRouteTable: (
    args: CreateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayRouteTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayRouteTableAnnouncementCommand}
   */
  readonly createTransitGatewayRouteTableAnnouncement: (
    args: CreateTransitGatewayRouteTableAnnouncementCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayRouteTableAnnouncementCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateTransitGatewayVpcAttachmentCommand}
   */
  readonly createTransitGatewayVpcAttachment: (
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateTransitGatewayVpcAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVerifiedAccessEndpointCommand}
   */
  readonly createVerifiedAccessEndpoint: (
    args: CreateVerifiedAccessEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVerifiedAccessEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVerifiedAccessGroupCommand}
   */
  readonly createVerifiedAccessGroup: (
    args: CreateVerifiedAccessGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVerifiedAccessGroupCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVerifiedAccessInstanceCommand}
   */
  readonly createVerifiedAccessInstance: (
    args: CreateVerifiedAccessInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVerifiedAccessInstanceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVerifiedAccessTrustProviderCommand}
   */
  readonly createVerifiedAccessTrustProvider: (
    args: CreateVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVerifiedAccessTrustProviderCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVolumeCommand}
   */
  readonly createVolume: (
    args: CreateVolumeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateVolumeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateVpcCommand}
   */
  readonly createVpc: (
    args: CreateVpcCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateVpcCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  readonly createVpcEndpoint: (
    args: CreateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVpcEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcEndpointConnectionNotificationCommand}
   */
  readonly createVpcEndpointConnectionNotification: (
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVpcEndpointConnectionNotificationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcEndpointServiceConfigurationCommand}
   */
  readonly createVpcEndpointServiceConfiguration: (
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVpcEndpointServiceConfigurationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpcPeeringConnectionCommand}
   */
  readonly createVpcPeeringConnection: (
    args: CreateVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVpcPeeringConnectionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpnConnectionCommand}
   */
  readonly createVpnConnection: (
    args: CreateVpnConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVpnConnectionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpnConnectionRouteCommand}
   */
  readonly createVpnConnectionRoute: (
    args: CreateVpnConnectionRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    CreateVpnConnectionRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link CreateVpnGatewayCommand}
   */
  readonly createVpnGateway: (
    args: CreateVpnGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<CreateVpnGatewayCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteCarrierGatewayCommand}
   */
  readonly deleteCarrierGateway: (
    args: DeleteCarrierGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteCarrierGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteClientVpnEndpointCommand}
   */
  readonly deleteClientVpnEndpoint: (
    args: DeleteClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteClientVpnEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteClientVpnRouteCommand}
   */
  readonly deleteClientVpnRoute: (
    args: DeleteClientVpnRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteClientVpnRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteCoipCidrCommand}
   */
  readonly deleteCoipCidr: (
    args: DeleteCoipCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteCoipCidrCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteCoipPoolCommand}
   */
  readonly deleteCoipPool: (
    args: DeleteCoipPoolCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteCoipPoolCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteCustomerGatewayCommand}
   */
  readonly deleteCustomerGateway: (
    args: DeleteCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteCustomerGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteDhcpOptionsCommand}
   */
  readonly deleteDhcpOptions: (
    args: DeleteDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteDhcpOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteEgressOnlyInternetGatewayCommand}
   */
  readonly deleteEgressOnlyInternetGateway: (
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteEgressOnlyInternetGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteFleetsCommand}
   */
  readonly deleteFleets: (
    args: DeleteFleetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteFleetsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteFlowLogsCommand}
   */
  readonly deleteFlowLogs: (
    args: DeleteFlowLogsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteFlowLogsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteFpgaImageCommand}
   */
  readonly deleteFpgaImage: (
    args: DeleteFpgaImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteFpgaImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteInstanceConnectEndpointCommand}
   */
  readonly deleteInstanceConnectEndpoint: (
    args: DeleteInstanceConnectEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteInstanceConnectEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteInstanceEventWindowCommand}
   */
  readonly deleteInstanceEventWindow: (
    args: DeleteInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteInstanceEventWindowCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteInternetGatewayCommand}
   */
  readonly deleteInternetGateway: (
    args: DeleteInternetGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteInternetGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteIpamCommand}
   */
  readonly deleteIpam: (
    args: DeleteIpamCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteIpamCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteIpamPoolCommand}
   */
  readonly deleteIpamPool: (
    args: DeleteIpamPoolCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteIpamPoolCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteIpamResourceDiscoveryCommand}
   */
  readonly deleteIpamResourceDiscovery: (
    args: DeleteIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteIpamResourceDiscoveryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteIpamScopeCommand}
   */
  readonly deleteIpamScope: (
    args: DeleteIpamScopeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteIpamScopeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteKeyPairCommand}
   */
  readonly deleteKeyPair: (
    args: DeleteKeyPairCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteKeyPairCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteLaunchTemplateCommand}
   */
  readonly deleteLaunchTemplate: (
    args: DeleteLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteLaunchTemplateCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLaunchTemplateVersionsCommand}
   */
  readonly deleteLaunchTemplateVersions: (
    args: DeleteLaunchTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteLaunchTemplateVersionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteCommand}
   */
  readonly deleteLocalGatewayRoute: (
    args: DeleteLocalGatewayRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteLocalGatewayRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteTableCommand}
   */
  readonly deleteLocalGatewayRouteTable: (
    args: DeleteLocalGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteLocalGatewayRouteTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}
   */
  readonly deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation: (
    args: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommand}
   */
  readonly deleteLocalGatewayRouteTableVpcAssociation: (
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteManagedPrefixListCommand}
   */
  readonly deleteManagedPrefixList: (
    args: DeleteManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteManagedPrefixListCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNatGatewayCommand}
   */
  readonly deleteNatGateway: (
    args: DeleteNatGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteNatGatewayCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteNetworkAclCommand}
   */
  readonly deleteNetworkAcl: (
    args: DeleteNetworkAclCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteNetworkAclCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteNetworkAclEntryCommand}
   */
  readonly deleteNetworkAclEntry: (
    args: DeleteNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteNetworkAclEntryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInsightsAccessScopeCommand}
   */
  readonly deleteNetworkInsightsAccessScope: (
    args: DeleteNetworkInsightsAccessScopeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteNetworkInsightsAccessScopeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}
   */
  readonly deleteNetworkInsightsAccessScopeAnalysis: (
    args: DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInsightsAnalysisCommand}
   */
  readonly deleteNetworkInsightsAnalysis: (
    args: DeleteNetworkInsightsAnalysisCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteNetworkInsightsAnalysisCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInsightsPathCommand}
   */
  readonly deleteNetworkInsightsPath: (
    args: DeleteNetworkInsightsPathCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteNetworkInsightsPathCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInterfaceCommand}
   */
  readonly deleteNetworkInterface: (
    args: DeleteNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteNetworkInterfaceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteNetworkInterfacePermissionCommand}
   */
  readonly deleteNetworkInterfacePermission: (
    args: DeleteNetworkInterfacePermissionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteNetworkInterfacePermissionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeletePlacementGroupCommand}
   */
  readonly deletePlacementGroup: (
    args: DeletePlacementGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeletePlacementGroupCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeletePublicIpv4PoolCommand}
   */
  readonly deletePublicIpv4Pool: (
    args: DeletePublicIpv4PoolCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeletePublicIpv4PoolCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteQueuedReservedInstancesCommand}
   */
  readonly deleteQueuedReservedInstances: (
    args: DeleteQueuedReservedInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteQueuedReservedInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteRouteCommand}
   */
  readonly deleteRoute: (
    args: DeleteRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteRouteCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteRouteTableCommand}
   */
  readonly deleteRouteTable: (
    args: DeleteRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteRouteTableCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteSecurityGroupCommand}
   */
  readonly deleteSecurityGroup: (
    args: DeleteSecurityGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteSecurityGroupCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  readonly deleteSnapshot: (
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteSnapshotCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteSpotDatafeedSubscriptionCommand}
   */
  readonly deleteSpotDatafeedSubscription: (
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteSpotDatafeedSubscriptionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteSubnetCommand}
   */
  readonly deleteSubnet: (
    args: DeleteSubnetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteSubnetCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteSubnetCidrReservationCommand}
   */
  readonly deleteSubnetCidrReservation: (
    args: DeleteSubnetCidrReservationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteSubnetCidrReservationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTagsCommand}
   */
  readonly deleteTags: (
    args: DeleteTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteTagsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteTrafficMirrorFilterCommand}
   */
  readonly deleteTrafficMirrorFilter: (
    args: DeleteTrafficMirrorFilterCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTrafficMirrorFilterCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTrafficMirrorFilterRuleCommand}
   */
  readonly deleteTrafficMirrorFilterRule: (
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTrafficMirrorFilterRuleCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTrafficMirrorSessionCommand}
   */
  readonly deleteTrafficMirrorSession: (
    args: DeleteTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTrafficMirrorSessionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTrafficMirrorTargetCommand}
   */
  readonly deleteTrafficMirrorTarget: (
    args: DeleteTrafficMirrorTargetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTrafficMirrorTargetCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayCommand}
   */
  readonly deleteTransitGateway: (
    args: DeleteTransitGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayConnectCommand}
   */
  readonly deleteTransitGatewayConnect: (
    args: DeleteTransitGatewayConnectCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayConnectCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayConnectPeerCommand}
   */
  readonly deleteTransitGatewayConnectPeer: (
    args: DeleteTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayConnectPeerCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayMulticastDomainCommand}
   */
  readonly deleteTransitGatewayMulticastDomain: (
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayMulticastDomainCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayPeeringAttachmentCommand}
   */
  readonly deleteTransitGatewayPeeringAttachment: (
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayPeeringAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayPolicyTableCommand}
   */
  readonly deleteTransitGatewayPolicyTable: (
    args: DeleteTransitGatewayPolicyTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayPolicyTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayPrefixListReferenceCommand}
   */
  readonly deleteTransitGatewayPrefixListReference: (
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayPrefixListReferenceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayRouteCommand}
   */
  readonly deleteTransitGatewayRoute: (
    args: DeleteTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayRouteTableCommand}
   */
  readonly deleteTransitGatewayRouteTable: (
    args: DeleteTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayRouteTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayRouteTableAnnouncementCommand}
   */
  readonly deleteTransitGatewayRouteTableAnnouncement: (
    args: DeleteTransitGatewayRouteTableAnnouncementCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteTransitGatewayVpcAttachmentCommand}
   */
  readonly deleteTransitGatewayVpcAttachment: (
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteTransitGatewayVpcAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVerifiedAccessEndpointCommand}
   */
  readonly deleteVerifiedAccessEndpoint: (
    args: DeleteVerifiedAccessEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVerifiedAccessEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVerifiedAccessGroupCommand}
   */
  readonly deleteVerifiedAccessGroup: (
    args: DeleteVerifiedAccessGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVerifiedAccessGroupCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVerifiedAccessInstanceCommand}
   */
  readonly deleteVerifiedAccessInstance: (
    args: DeleteVerifiedAccessInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVerifiedAccessInstanceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVerifiedAccessTrustProviderCommand}
   */
  readonly deleteVerifiedAccessTrustProvider: (
    args: DeleteVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVerifiedAccessTrustProviderCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVolumeCommand}
   */
  readonly deleteVolume: (
    args: DeleteVolumeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteVolumeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteVpcCommand}
   */
  readonly deleteVpc: (
    args: DeleteVpcCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteVpcCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeleteVpcEndpointConnectionNotificationsCommand}
   */
  readonly deleteVpcEndpointConnectionNotifications: (
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVpcEndpointConnectionNotificationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcEndpointsCommand}
   */
  readonly deleteVpcEndpoints: (
    args: DeleteVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVpcEndpointsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcEndpointServiceConfigurationsCommand}
   */
  readonly deleteVpcEndpointServiceConfigurations: (
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVpcEndpointServiceConfigurationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpcPeeringConnectionCommand}
   */
  readonly deleteVpcPeeringConnection: (
    args: DeleteVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVpcPeeringConnectionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpnConnectionCommand}
   */
  readonly deleteVpnConnection: (
    args: DeleteVpnConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVpnConnectionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpnConnectionRouteCommand}
   */
  readonly deleteVpnConnectionRoute: (
    args: DeleteVpnConnectionRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeleteVpnConnectionRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeleteVpnGatewayCommand}
   */
  readonly deleteVpnGateway: (
    args: DeleteVpnGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeleteVpnGatewayCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeprovisionByoipCidrCommand}
   */
  readonly deprovisionByoipCidr: (
    args: DeprovisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeprovisionByoipCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeprovisionIpamByoasnCommand}
   */
  readonly deprovisionIpamByoasn: (
    args: DeprovisionIpamByoasnCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeprovisionIpamByoasnCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeprovisionIpamPoolCidrCommand}
   */
  readonly deprovisionIpamPoolCidr: (
    args: DeprovisionIpamPoolCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeprovisionIpamPoolCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeprovisionPublicIpv4PoolCidrCommand}
   */
  readonly deprovisionPublicIpv4PoolCidr: (
    args: DeprovisionPublicIpv4PoolCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeprovisionPublicIpv4PoolCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeregisterImageCommand}
   */
  readonly deregisterImage: (
    args: DeregisterImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DeregisterImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DeregisterInstanceEventNotificationAttributesCommand}
   */
  readonly deregisterInstanceEventNotificationAttributes: (
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeregisterInstanceEventNotificationAttributesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommand}
   */
  readonly deregisterTransitGatewayMulticastGroupMembers: (
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeregisterTransitGatewayMulticastGroupMembersCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommand}
   */
  readonly deregisterTransitGatewayMulticastGroupSources: (
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DeregisterTransitGatewayMulticastGroupSourcesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  readonly describeAccountAttributes: (
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeAccountAttributesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAddressesCommand}
   */
  readonly describeAddresses: (
    args: DescribeAddressesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeAddressesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAddressesAttributeCommand}
   */
  readonly describeAddressesAttribute: (
    args: DescribeAddressesAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeAddressesAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAddressTransfersCommand}
   */
  readonly describeAddressTransfers: (
    args: DescribeAddressTransfersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeAddressTransfersCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAggregateIdFormatCommand}
   */
  readonly describeAggregateIdFormat: (
    args: DescribeAggregateIdFormatCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeAggregateIdFormatCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAvailabilityZonesCommand}
   */
  readonly describeAvailabilityZones: (
    args: DescribeAvailabilityZonesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeAvailabilityZonesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommand}
   */
  readonly describeAwsNetworkPerformanceMetricSubscriptions: (
    args: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeBundleTasksCommand}
   */
  readonly describeBundleTasks: (
    args: DescribeBundleTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeBundleTasksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeByoipCidrsCommand}
   */
  readonly describeByoipCidrs: (
    args: DescribeByoipCidrsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeByoipCidrsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityBlockOfferingsCommand}
   */
  readonly describeCapacityBlockOfferings: (
    args: DescribeCapacityBlockOfferingsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeCapacityBlockOfferingsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityReservationFleetsCommand}
   */
  readonly describeCapacityReservationFleets: (
    args: DescribeCapacityReservationFleetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeCapacityReservationFleetsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCapacityReservationsCommand}
   */
  readonly describeCapacityReservations: (
    args: DescribeCapacityReservationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeCapacityReservationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCarrierGatewaysCommand}
   */
  readonly describeCarrierGateways: (
    args: DescribeCarrierGatewaysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeCarrierGatewaysCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClassicLinkInstancesCommand}
   */
  readonly describeClassicLinkInstances: (
    args: DescribeClassicLinkInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeClassicLinkInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnAuthorizationRulesCommand}
   */
  readonly describeClientVpnAuthorizationRules: (
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeClientVpnAuthorizationRulesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnConnectionsCommand}
   */
  readonly describeClientVpnConnections: (
    args: DescribeClientVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeClientVpnConnectionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnEndpointsCommand}
   */
  readonly describeClientVpnEndpoints: (
    args: DescribeClientVpnEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeClientVpnEndpointsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnRoutesCommand}
   */
  readonly describeClientVpnRoutes: (
    args: DescribeClientVpnRoutesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeClientVpnRoutesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeClientVpnTargetNetworksCommand}
   */
  readonly describeClientVpnTargetNetworks: (
    args: DescribeClientVpnTargetNetworksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeClientVpnTargetNetworksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCoipPoolsCommand}
   */
  readonly describeCoipPools: (
    args: DescribeCoipPoolsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeCoipPoolsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeConversionTasksCommand}
   */
  readonly describeConversionTasks: (
    args: DescribeConversionTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeConversionTasksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeCustomerGatewaysCommand}
   */
  readonly describeCustomerGateways: (
    args: DescribeCustomerGatewaysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeCustomerGatewaysCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeDhcpOptionsCommand}
   */
  readonly describeDhcpOptions: (
    args: DescribeDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeDhcpOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeEgressOnlyInternetGatewaysCommand}
   */
  readonly describeEgressOnlyInternetGateways: (
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeEgressOnlyInternetGatewaysCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeElasticGpusCommand}
   */
  readonly describeElasticGpus: (
    args: DescribeElasticGpusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeElasticGpusCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeExportImageTasksCommand}
   */
  readonly describeExportImageTasks: (
    args: DescribeExportImageTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeExportImageTasksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  readonly describeExportTasks: (
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeExportTasksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFastLaunchImagesCommand}
   */
  readonly describeFastLaunchImages: (
    args: DescribeFastLaunchImagesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeFastLaunchImagesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFastSnapshotRestoresCommand}
   */
  readonly describeFastSnapshotRestores: (
    args: DescribeFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeFastSnapshotRestoresCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFleetHistoryCommand}
   */
  readonly describeFleetHistory: (
    args: DescribeFleetHistoryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeFleetHistoryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFleetInstancesCommand}
   */
  readonly describeFleetInstances: (
    args: DescribeFleetInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeFleetInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFleetsCommand}
   */
  readonly describeFleets: (
    args: DescribeFleetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeFleetsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeFlowLogsCommand}
   */
  readonly describeFlowLogs: (
    args: DescribeFlowLogsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeFlowLogsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeFpgaImageAttributeCommand}
   */
  readonly describeFpgaImageAttribute: (
    args: DescribeFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeFpgaImageAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeFpgaImagesCommand}
   */
  readonly describeFpgaImages: (
    args: DescribeFpgaImagesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeFpgaImagesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeHostReservationOfferingsCommand}
   */
  readonly describeHostReservationOfferings: (
    args: DescribeHostReservationOfferingsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeHostReservationOfferingsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeHostReservationsCommand}
   */
  readonly describeHostReservations: (
    args: DescribeHostReservationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeHostReservationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeHostsCommand}
   */
  readonly describeHosts: (
    args: DescribeHostsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeHostsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeIamInstanceProfileAssociationsCommand}
   */
  readonly describeIamInstanceProfileAssociations: (
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIamInstanceProfileAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIdentityIdFormatCommand}
   */
  readonly describeIdentityIdFormat: (
    args: DescribeIdentityIdFormatCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIdentityIdFormatCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIdFormatCommand}
   */
  readonly describeIdFormat: (
    args: DescribeIdFormatCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeIdFormatCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeImageAttributeCommand}
   */
  readonly describeImageAttribute: (
    args: DescribeImageAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeImageAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeImagesCommand}
   */
  readonly describeImages: (
    args: DescribeImagesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeImagesCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeImportImageTasksCommand}
   */
  readonly describeImportImageTasks: (
    args: DescribeImportImageTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeImportImageTasksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeImportSnapshotTasksCommand}
   */
  readonly describeImportSnapshotTasks: (
    args: DescribeImportSnapshotTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeImportSnapshotTasksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceAttributeCommand}
   */
  readonly describeInstanceAttribute: (
    args: DescribeInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceConnectEndpointsCommand}
   */
  readonly describeInstanceConnectEndpoints: (
    args: DescribeInstanceConnectEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceConnectEndpointsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceCreditSpecificationsCommand}
   */
  readonly describeInstanceCreditSpecifications: (
    args: DescribeInstanceCreditSpecificationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceCreditSpecificationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceEventNotificationAttributesCommand}
   */
  readonly describeInstanceEventNotificationAttributes: (
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceEventNotificationAttributesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceEventWindowsCommand}
   */
  readonly describeInstanceEventWindows: (
    args: DescribeInstanceEventWindowsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceEventWindowsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstancesCommand}
   */
  readonly describeInstances: (
    args: DescribeInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceStatusCommand}
   */
  readonly describeInstanceStatus: (
    args: DescribeInstanceStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceStatusCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceTopologyCommand}
   */
  readonly describeInstanceTopology: (
    args: DescribeInstanceTopologyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceTopologyCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceTypeOfferingsCommand}
   */
  readonly describeInstanceTypeOfferings: (
    args: DescribeInstanceTypeOfferingsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceTypeOfferingsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInstanceTypesCommand}
   */
  readonly describeInstanceTypes: (
    args: DescribeInstanceTypesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInstanceTypesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeInternetGatewaysCommand}
   */
  readonly describeInternetGateways: (
    args: DescribeInternetGatewaysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeInternetGatewaysCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamByoasnCommand}
   */
  readonly describeIpamByoasn: (
    args: DescribeIpamByoasnCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIpamByoasnCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamPoolsCommand}
   */
  readonly describeIpamPools: (
    args: DescribeIpamPoolsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIpamPoolsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamResourceDiscoveriesCommand}
   */
  readonly describeIpamResourceDiscoveries: (
    args: DescribeIpamResourceDiscoveriesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIpamResourceDiscoveriesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamResourceDiscoveryAssociationsCommand}
   */
  readonly describeIpamResourceDiscoveryAssociations: (
    args: DescribeIpamResourceDiscoveryAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIpamResourceDiscoveryAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpamsCommand}
   */
  readonly describeIpams: (
    args: DescribeIpamsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeIpamsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeIpamScopesCommand}
   */
  readonly describeIpamScopes: (
    args: DescribeIpamScopesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIpamScopesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeIpv6PoolsCommand}
   */
  readonly describeIpv6Pools: (
    args: DescribeIpv6PoolsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeIpv6PoolsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeKeyPairsCommand}
   */
  readonly describeKeyPairs: (
    args: DescribeKeyPairsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeKeyPairsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeLaunchTemplatesCommand}
   */
  readonly describeLaunchTemplates: (
    args: DescribeLaunchTemplatesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLaunchTemplatesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLaunchTemplateVersionsCommand}
   */
  readonly describeLaunchTemplateVersions: (
    args: DescribeLaunchTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLaunchTemplateVersionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayRouteTablesCommand}
   */
  readonly describeLocalGatewayRouteTables: (
    args: DescribeLocalGatewayRouteTablesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLocalGatewayRouteTablesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand}
   */
  readonly describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations: (
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommand}
   */
  readonly describeLocalGatewayRouteTableVpcAssociations: (
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewaysCommand}
   */
  readonly describeLocalGateways: (
    args: DescribeLocalGatewaysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLocalGatewaysCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommand}
   */
  readonly describeLocalGatewayVirtualInterfaceGroups: (
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLocalGatewayVirtualInterfacesCommand}
   */
  readonly describeLocalGatewayVirtualInterfaces: (
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLocalGatewayVirtualInterfacesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeLockedSnapshotsCommand}
   */
  readonly describeLockedSnapshots: (
    args: DescribeLockedSnapshotsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeLockedSnapshotsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeManagedPrefixListsCommand}
   */
  readonly describeManagedPrefixLists: (
    args: DescribeManagedPrefixListsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeManagedPrefixListsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeMovingAddressesCommand}
   */
  readonly describeMovingAddresses: (
    args: DescribeMovingAddressesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeMovingAddressesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNatGatewaysCommand}
   */
  readonly describeNatGateways: (
    args: DescribeNatGatewaysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNatGatewaysCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkAclsCommand}
   */
  readonly describeNetworkAcls: (
    args: DescribeNetworkAclsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNetworkAclsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInsightsAccessScopeAnalysesCommand}
   */
  readonly describeNetworkInsightsAccessScopeAnalyses: (
    args: DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInsightsAccessScopesCommand}
   */
  readonly describeNetworkInsightsAccessScopes: (
    args: DescribeNetworkInsightsAccessScopesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNetworkInsightsAccessScopesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInsightsAnalysesCommand}
   */
  readonly describeNetworkInsightsAnalyses: (
    args: DescribeNetworkInsightsAnalysesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNetworkInsightsAnalysesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInsightsPathsCommand}
   */
  readonly describeNetworkInsightsPaths: (
    args: DescribeNetworkInsightsPathsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNetworkInsightsPathsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInterfaceAttributeCommand}
   */
  readonly describeNetworkInterfaceAttribute: (
    args: DescribeNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNetworkInterfaceAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInterfacePermissionsCommand}
   */
  readonly describeNetworkInterfacePermissions: (
    args: DescribeNetworkInterfacePermissionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNetworkInterfacePermissionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeNetworkInterfacesCommand}
   */
  readonly describeNetworkInterfaces: (
    args: DescribeNetworkInterfacesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeNetworkInterfacesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribePlacementGroupsCommand}
   */
  readonly describePlacementGroups: (
    args: DescribePlacementGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribePlacementGroupsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribePrefixListsCommand}
   */
  readonly describePrefixLists: (
    args: DescribePrefixListsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribePrefixListsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribePrincipalIdFormatCommand}
   */
  readonly describePrincipalIdFormat: (
    args: DescribePrincipalIdFormatCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribePrincipalIdFormatCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribePublicIpv4PoolsCommand}
   */
  readonly describePublicIpv4Pools: (
    args: DescribePublicIpv4PoolsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribePublicIpv4PoolsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeRegionsCommand}
   */
  readonly describeRegions: (
    args: DescribeRegionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeRegionsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeReplaceRootVolumeTasksCommand}
   */
  readonly describeReplaceRootVolumeTasks: (
    args: DescribeReplaceRootVolumeTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeReplaceRootVolumeTasksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReservedInstancesCommand}
   */
  readonly describeReservedInstances: (
    args: DescribeReservedInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeReservedInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReservedInstancesListingsCommand}
   */
  readonly describeReservedInstancesListings: (
    args: DescribeReservedInstancesListingsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeReservedInstancesListingsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReservedInstancesModificationsCommand}
   */
  readonly describeReservedInstancesModifications: (
    args: DescribeReservedInstancesModificationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeReservedInstancesModificationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeReservedInstancesOfferingsCommand}
   */
  readonly describeReservedInstancesOfferings: (
    args: DescribeReservedInstancesOfferingsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeReservedInstancesOfferingsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeRouteTablesCommand}
   */
  readonly describeRouteTables: (
    args: DescribeRouteTablesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeRouteTablesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeScheduledInstanceAvailabilityCommand}
   */
  readonly describeScheduledInstanceAvailability: (
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeScheduledInstanceAvailabilityCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeScheduledInstancesCommand}
   */
  readonly describeScheduledInstances: (
    args: DescribeScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeScheduledInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSecurityGroupReferencesCommand}
   */
  readonly describeSecurityGroupReferences: (
    args: DescribeSecurityGroupReferencesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSecurityGroupReferencesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSecurityGroupRulesCommand}
   */
  readonly describeSecurityGroupRules: (
    args: DescribeSecurityGroupRulesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSecurityGroupRulesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSecurityGroupsCommand}
   */
  readonly describeSecurityGroups: (
    args: DescribeSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSecurityGroupsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSnapshotAttributeCommand}
   */
  readonly describeSnapshotAttribute: (
    args: DescribeSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSnapshotAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  readonly describeSnapshots: (
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSnapshotsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSnapshotTierStatusCommand}
   */
  readonly describeSnapshotTierStatus: (
    args: DescribeSnapshotTierStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSnapshotTierStatusCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotDatafeedSubscriptionCommand}
   */
  readonly describeSpotDatafeedSubscription: (
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSpotDatafeedSubscriptionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotFleetInstancesCommand}
   */
  readonly describeSpotFleetInstances: (
    args: DescribeSpotFleetInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSpotFleetInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotFleetRequestHistoryCommand}
   */
  readonly describeSpotFleetRequestHistory: (
    args: DescribeSpotFleetRequestHistoryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSpotFleetRequestHistoryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotFleetRequestsCommand}
   */
  readonly describeSpotFleetRequests: (
    args: DescribeSpotFleetRequestsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSpotFleetRequestsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotInstanceRequestsCommand}
   */
  readonly describeSpotInstanceRequests: (
    args: DescribeSpotInstanceRequestsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSpotInstanceRequestsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSpotPriceHistoryCommand}
   */
  readonly describeSpotPriceHistory: (
    args: DescribeSpotPriceHistoryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeSpotPriceHistoryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeStaleSecurityGroupsCommand}
   */
  readonly describeStaleSecurityGroups: (
    args: DescribeStaleSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeStaleSecurityGroupsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeStoreImageTasksCommand}
   */
  readonly describeStoreImageTasks: (
    args: DescribeStoreImageTasksCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeStoreImageTasksCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeSubnetsCommand}
   */
  readonly describeSubnets: (
    args: DescribeSubnetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeSubnetsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeTagsCommand}
   */
  readonly describeTags: (
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeTagsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeTrafficMirrorFiltersCommand}
   */
  readonly describeTrafficMirrorFilters: (
    args: DescribeTrafficMirrorFiltersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTrafficMirrorFiltersCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTrafficMirrorSessionsCommand}
   */
  readonly describeTrafficMirrorSessions: (
    args: DescribeTrafficMirrorSessionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTrafficMirrorSessionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTrafficMirrorTargetsCommand}
   */
  readonly describeTrafficMirrorTargets: (
    args: DescribeTrafficMirrorTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTrafficMirrorTargetsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayAttachmentsCommand}
   */
  readonly describeTransitGatewayAttachments: (
    args: DescribeTransitGatewayAttachmentsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayAttachmentsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayConnectPeersCommand}
   */
  readonly describeTransitGatewayConnectPeers: (
    args: DescribeTransitGatewayConnectPeersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayConnectPeersCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayConnectsCommand}
   */
  readonly describeTransitGatewayConnects: (
    args: DescribeTransitGatewayConnectsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayConnectsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayMulticastDomainsCommand}
   */
  readonly describeTransitGatewayMulticastDomains: (
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayMulticastDomainsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayPeeringAttachmentsCommand}
   */
  readonly describeTransitGatewayPeeringAttachments: (
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayPeeringAttachmentsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayPolicyTablesCommand}
   */
  readonly describeTransitGatewayPolicyTables: (
    args: DescribeTransitGatewayPolicyTablesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayPolicyTablesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayRouteTableAnnouncementsCommand}
   */
  readonly describeTransitGatewayRouteTableAnnouncements: (
    args: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayRouteTablesCommand}
   */
  readonly describeTransitGatewayRouteTables: (
    args: DescribeTransitGatewayRouteTablesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayRouteTablesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewaysCommand}
   */
  readonly describeTransitGateways: (
    args: DescribeTransitGatewaysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewaysCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTransitGatewayVpcAttachmentsCommand}
   */
  readonly describeTransitGatewayVpcAttachments: (
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTransitGatewayVpcAttachmentsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeTrunkInterfaceAssociationsCommand}
   */
  readonly describeTrunkInterfaceAssociations: (
    args: DescribeTrunkInterfaceAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeTrunkInterfaceAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessEndpointsCommand}
   */
  readonly describeVerifiedAccessEndpoints: (
    args: DescribeVerifiedAccessEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVerifiedAccessEndpointsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessGroupsCommand}
   */
  readonly describeVerifiedAccessGroups: (
    args: DescribeVerifiedAccessGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVerifiedAccessGroupsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommand}
   */
  readonly describeVerifiedAccessInstanceLoggingConfigurations: (
    args: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessInstancesCommand}
   */
  readonly describeVerifiedAccessInstances: (
    args: DescribeVerifiedAccessInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVerifiedAccessInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVerifiedAccessTrustProvidersCommand}
   */
  readonly describeVerifiedAccessTrustProviders: (
    args: DescribeVerifiedAccessTrustProvidersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVerifiedAccessTrustProvidersCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVolumeAttributeCommand}
   */
  readonly describeVolumeAttribute: (
    args: DescribeVolumeAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVolumeAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVolumesCommand}
   */
  readonly describeVolumes: (
    args: DescribeVolumesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeVolumesCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeVolumesModificationsCommand}
   */
  readonly describeVolumesModifications: (
    args: DescribeVolumesModificationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVolumesModificationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVolumeStatusCommand}
   */
  readonly describeVolumeStatus: (
    args: DescribeVolumeStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVolumeStatusCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcAttributeCommand}
   */
  readonly describeVpcAttribute: (
    args: DescribeVpcAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcClassicLinkCommand}
   */
  readonly describeVpcClassicLink: (
    args: DescribeVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcClassicLinkCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcClassicLinkDnsSupportCommand}
   */
  readonly describeVpcClassicLinkDnsSupport: (
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcClassicLinkDnsSupportCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointConnectionNotificationsCommand}
   */
  readonly describeVpcEndpointConnectionNotifications: (
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcEndpointConnectionNotificationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointConnectionsCommand}
   */
  readonly describeVpcEndpointConnections: (
    args: DescribeVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcEndpointConnectionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  readonly describeVpcEndpoints: (
    args: DescribeVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcEndpointsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointServiceConfigurationsCommand}
   */
  readonly describeVpcEndpointServiceConfigurations: (
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcEndpointServiceConfigurationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointServicePermissionsCommand}
   */
  readonly describeVpcEndpointServicePermissions: (
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcEndpointServicePermissionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcEndpointServicesCommand}
   */
  readonly describeVpcEndpointServices: (
    args: DescribeVpcEndpointServicesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcEndpointServicesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcPeeringConnectionsCommand}
   */
  readonly describeVpcPeeringConnections: (
    args: DescribeVpcPeeringConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpcPeeringConnectionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpcsCommand}
   */
  readonly describeVpcs: (
    args: DescribeVpcsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DescribeVpcsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DescribeVpnConnectionsCommand}
   */
  readonly describeVpnConnections: (
    args: DescribeVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpnConnectionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DescribeVpnGatewaysCommand}
   */
  readonly describeVpnGateways: (
    args: DescribeVpnGatewaysCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DescribeVpnGatewaysCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachClassicLinkVpcCommand}
   */
  readonly detachClassicLinkVpc: (
    args: DetachClassicLinkVpcCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DetachClassicLinkVpcCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachInternetGatewayCommand}
   */
  readonly detachInternetGateway: (
    args: DetachInternetGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DetachInternetGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachNetworkInterfaceCommand}
   */
  readonly detachNetworkInterface: (
    args: DetachNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DetachNetworkInterfaceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachVerifiedAccessTrustProviderCommand}
   */
  readonly detachVerifiedAccessTrustProvider: (
    args: DetachVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DetachVerifiedAccessTrustProviderCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DetachVolumeCommand}
   */
  readonly detachVolume: (
    args: DetachVolumeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DetachVolumeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DetachVpnGatewayCommand}
   */
  readonly detachVpnGateway: (
    args: DetachVpnGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DetachVpnGatewayCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DisableAddressTransferCommand}
   */
  readonly disableAddressTransfer: (
    args: DisableAddressTransferCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableAddressTransferCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableAwsNetworkPerformanceMetricSubscriptionCommand}
   */
  readonly disableAwsNetworkPerformanceMetricSubscription: (
    args: DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableEbsEncryptionByDefaultCommand}
   */
  readonly disableEbsEncryptionByDefault: (
    args: DisableEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableEbsEncryptionByDefaultCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableFastLaunchCommand}
   */
  readonly disableFastLaunch: (
    args: DisableFastLaunchCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableFastLaunchCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableFastSnapshotRestoresCommand}
   */
  readonly disableFastSnapshotRestores: (
    args: DisableFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableFastSnapshotRestoresCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableImageCommand}
   */
  readonly disableImage: (
    args: DisableImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<DisableImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link DisableImageBlockPublicAccessCommand}
   */
  readonly disableImageBlockPublicAccess: (
    args: DisableImageBlockPublicAccessCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableImageBlockPublicAccessCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableImageDeprecationCommand}
   */
  readonly disableImageDeprecation: (
    args: DisableImageDeprecationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableImageDeprecationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableIpamOrganizationAdminAccountCommand}
   */
  readonly disableIpamOrganizationAdminAccount: (
    args: DisableIpamOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableIpamOrganizationAdminAccountCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableSerialConsoleAccessCommand}
   */
  readonly disableSerialConsoleAccess: (
    args: DisableSerialConsoleAccessCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableSerialConsoleAccessCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableSnapshotBlockPublicAccessCommand}
   */
  readonly disableSnapshotBlockPublicAccess: (
    args: DisableSnapshotBlockPublicAccessCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableSnapshotBlockPublicAccessCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableTransitGatewayRouteTablePropagationCommand}
   */
  readonly disableTransitGatewayRouteTablePropagation: (
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableTransitGatewayRouteTablePropagationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableVgwRoutePropagationCommand}
   */
  readonly disableVgwRoutePropagation: (
    args: DisableVgwRoutePropagationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableVgwRoutePropagationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableVpcClassicLinkCommand}
   */
  readonly disableVpcClassicLink: (
    args: DisableVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableVpcClassicLinkCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisableVpcClassicLinkDnsSupportCommand}
   */
  readonly disableVpcClassicLinkDnsSupport: (
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisableVpcClassicLinkDnsSupportCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateAddressCommand}
   */
  readonly disassociateAddress: (
    args: DisassociateAddressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateAddressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateClientVpnTargetNetworkCommand}
   */
  readonly disassociateClientVpnTargetNetwork: (
    args: DisassociateClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateClientVpnTargetNetworkCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateEnclaveCertificateIamRoleCommand}
   */
  readonly disassociateEnclaveCertificateIamRole: (
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateEnclaveCertificateIamRoleCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateIamInstanceProfileCommand}
   */
  readonly disassociateIamInstanceProfile: (
    args: DisassociateIamInstanceProfileCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateIamInstanceProfileCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateInstanceEventWindowCommand}
   */
  readonly disassociateInstanceEventWindow: (
    args: DisassociateInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateInstanceEventWindowCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateIpamByoasnCommand}
   */
  readonly disassociateIpamByoasn: (
    args: DisassociateIpamByoasnCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateIpamByoasnCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateIpamResourceDiscoveryCommand}
   */
  readonly disassociateIpamResourceDiscovery: (
    args: DisassociateIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateIpamResourceDiscoveryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateNatGatewayAddressCommand}
   */
  readonly disassociateNatGatewayAddress: (
    args: DisassociateNatGatewayAddressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateNatGatewayAddressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateRouteTableCommand}
   */
  readonly disassociateRouteTable: (
    args: DisassociateRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateRouteTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateSubnetCidrBlockCommand}
   */
  readonly disassociateSubnetCidrBlock: (
    args: DisassociateSubnetCidrBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateSubnetCidrBlockCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateTransitGatewayMulticastDomainCommand}
   */
  readonly disassociateTransitGatewayMulticastDomain: (
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateTransitGatewayMulticastDomainCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateTransitGatewayPolicyTableCommand}
   */
  readonly disassociateTransitGatewayPolicyTable: (
    args: DisassociateTransitGatewayPolicyTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateTransitGatewayPolicyTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateTransitGatewayRouteTableCommand}
   */
  readonly disassociateTransitGatewayRouteTable: (
    args: DisassociateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateTransitGatewayRouteTableCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateTrunkInterfaceCommand}
   */
  readonly disassociateTrunkInterface: (
    args: DisassociateTrunkInterfaceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateTrunkInterfaceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link DisassociateVpcCidrBlockCommand}
   */
  readonly disassociateVpcCidrBlock: (
    args: DisassociateVpcCidrBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    DisassociateVpcCidrBlockCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableAddressTransferCommand}
   */
  readonly enableAddressTransfer: (
    args: EnableAddressTransferCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableAddressTransferCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableAwsNetworkPerformanceMetricSubscriptionCommand}
   */
  readonly enableAwsNetworkPerformanceMetricSubscription: (
    args: EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableEbsEncryptionByDefaultCommand}
   */
  readonly enableEbsEncryptionByDefault: (
    args: EnableEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableEbsEncryptionByDefaultCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableFastLaunchCommand}
   */
  readonly enableFastLaunch: (
    args: EnableFastLaunchCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<EnableFastLaunchCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link EnableFastSnapshotRestoresCommand}
   */
  readonly enableFastSnapshotRestores: (
    args: EnableFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableFastSnapshotRestoresCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableImageCommand}
   */
  readonly enableImage: (
    args: EnableImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<EnableImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link EnableImageBlockPublicAccessCommand}
   */
  readonly enableImageBlockPublicAccess: (
    args: EnableImageBlockPublicAccessCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableImageBlockPublicAccessCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableImageDeprecationCommand}
   */
  readonly enableImageDeprecation: (
    args: EnableImageDeprecationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableImageDeprecationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableIpamOrganizationAdminAccountCommand}
   */
  readonly enableIpamOrganizationAdminAccount: (
    args: EnableIpamOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableIpamOrganizationAdminAccountCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommand}
   */
  readonly enableReachabilityAnalyzerOrganizationSharing: (
    args: EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableSerialConsoleAccessCommand}
   */
  readonly enableSerialConsoleAccess: (
    args: EnableSerialConsoleAccessCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableSerialConsoleAccessCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableSnapshotBlockPublicAccessCommand}
   */
  readonly enableSnapshotBlockPublicAccess: (
    args: EnableSnapshotBlockPublicAccessCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableSnapshotBlockPublicAccessCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableTransitGatewayRouteTablePropagationCommand}
   */
  readonly enableTransitGatewayRouteTablePropagation: (
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableTransitGatewayRouteTablePropagationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableVgwRoutePropagationCommand}
   */
  readonly enableVgwRoutePropagation: (
    args: EnableVgwRoutePropagationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableVgwRoutePropagationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableVolumeIOCommand}
   */
  readonly enableVolumeIO: (
    args: EnableVolumeIOCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<EnableVolumeIOCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link EnableVpcClassicLinkCommand}
   */
  readonly enableVpcClassicLink: (
    args: EnableVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableVpcClassicLinkCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link EnableVpcClassicLinkDnsSupportCommand}
   */
  readonly enableVpcClassicLinkDnsSupport: (
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    EnableVpcClassicLinkDnsSupportCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ExportClientVpnClientCertificateRevocationListCommand}
   */
  readonly exportClientVpnClientCertificateRevocationList: (
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ExportClientVpnClientCertificateRevocationListCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ExportClientVpnClientConfigurationCommand}
   */
  readonly exportClientVpnClientConfiguration: (
    args: ExportClientVpnClientConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ExportClientVpnClientConfigurationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ExportImageCommand}
   */
  readonly exportImage: (
    args: ExportImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ExportImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ExportTransitGatewayRoutesCommand}
   */
  readonly exportTransitGatewayRoutes: (
    args: ExportTransitGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ExportTransitGatewayRoutesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetAssociatedEnclaveCertificateIamRolesCommand}
   */
  readonly getAssociatedEnclaveCertificateIamRoles: (
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetAssociatedEnclaveCertificateIamRolesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetAssociatedIpv6PoolCidrsCommand}
   */
  readonly getAssociatedIpv6PoolCidrs: (
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetAssociatedIpv6PoolCidrsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetAwsNetworkPerformanceDataCommand}
   */
  readonly getAwsNetworkPerformanceData: (
    args: GetAwsNetworkPerformanceDataCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetAwsNetworkPerformanceDataCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetCapacityReservationUsageCommand}
   */
  readonly getCapacityReservationUsage: (
    args: GetCapacityReservationUsageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetCapacityReservationUsageCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetCoipPoolUsageCommand}
   */
  readonly getCoipPoolUsage: (
    args: GetCoipPoolUsageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetCoipPoolUsageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link GetConsoleOutputCommand}
   */
  readonly getConsoleOutput: (
    args: GetConsoleOutputCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetConsoleOutputCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link GetConsoleScreenshotCommand}
   */
  readonly getConsoleScreenshot: (
    args: GetConsoleScreenshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetConsoleScreenshotCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetDefaultCreditSpecificationCommand}
   */
  readonly getDefaultCreditSpecification: (
    args: GetDefaultCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetDefaultCreditSpecificationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetEbsDefaultKmsKeyIdCommand}
   */
  readonly getEbsDefaultKmsKeyId: (
    args: GetEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetEbsDefaultKmsKeyIdCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetEbsEncryptionByDefaultCommand}
   */
  readonly getEbsEncryptionByDefault: (
    args: GetEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetEbsEncryptionByDefaultCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetFlowLogsIntegrationTemplateCommand}
   */
  readonly getFlowLogsIntegrationTemplate: (
    args: GetFlowLogsIntegrationTemplateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetFlowLogsIntegrationTemplateCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetGroupsForCapacityReservationCommand}
   */
  readonly getGroupsForCapacityReservation: (
    args: GetGroupsForCapacityReservationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetGroupsForCapacityReservationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetHostReservationPurchasePreviewCommand}
   */
  readonly getHostReservationPurchasePreview: (
    args: GetHostReservationPurchasePreviewCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetHostReservationPurchasePreviewCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetImageBlockPublicAccessStateCommand}
   */
  readonly getImageBlockPublicAccessState: (
    args: GetImageBlockPublicAccessStateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetImageBlockPublicAccessStateCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetInstanceTypesFromInstanceRequirementsCommand}
   */
  readonly getInstanceTypesFromInstanceRequirements: (
    args: GetInstanceTypesFromInstanceRequirementsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetInstanceTypesFromInstanceRequirementsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetInstanceUefiDataCommand}
   */
  readonly getInstanceUefiData: (
    args: GetInstanceUefiDataCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetInstanceUefiDataCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamAddressHistoryCommand}
   */
  readonly getIpamAddressHistory: (
    args: GetIpamAddressHistoryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetIpamAddressHistoryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamDiscoveredAccountsCommand}
   */
  readonly getIpamDiscoveredAccounts: (
    args: GetIpamDiscoveredAccountsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetIpamDiscoveredAccountsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamDiscoveredPublicAddressesCommand}
   */
  readonly getIpamDiscoveredPublicAddresses: (
    args: GetIpamDiscoveredPublicAddressesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetIpamDiscoveredPublicAddressesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamDiscoveredResourceCidrsCommand}
   */
  readonly getIpamDiscoveredResourceCidrs: (
    args: GetIpamDiscoveredResourceCidrsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetIpamDiscoveredResourceCidrsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamPoolAllocationsCommand}
   */
  readonly getIpamPoolAllocations: (
    args: GetIpamPoolAllocationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetIpamPoolAllocationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetIpamPoolCidrsCommand}
   */
  readonly getIpamPoolCidrs: (
    args: GetIpamPoolCidrsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetIpamPoolCidrsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link GetIpamResourceCidrsCommand}
   */
  readonly getIpamResourceCidrs: (
    args: GetIpamResourceCidrsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetIpamResourceCidrsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetLaunchTemplateDataCommand}
   */
  readonly getLaunchTemplateData: (
    args: GetLaunchTemplateDataCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetLaunchTemplateDataCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetManagedPrefixListAssociationsCommand}
   */
  readonly getManagedPrefixListAssociations: (
    args: GetManagedPrefixListAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetManagedPrefixListAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetManagedPrefixListEntriesCommand}
   */
  readonly getManagedPrefixListEntries: (
    args: GetManagedPrefixListEntriesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetManagedPrefixListEntriesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommand}
   */
  readonly getNetworkInsightsAccessScopeAnalysisFindings: (
    args: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetNetworkInsightsAccessScopeContentCommand}
   */
  readonly getNetworkInsightsAccessScopeContent: (
    args: GetNetworkInsightsAccessScopeContentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetNetworkInsightsAccessScopeContentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetPasswordDataCommand}
   */
  readonly getPasswordData: (
    args: GetPasswordDataCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<GetPasswordDataCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link GetReservedInstancesExchangeQuoteCommand}
   */
  readonly getReservedInstancesExchangeQuote: (
    args: GetReservedInstancesExchangeQuoteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetReservedInstancesExchangeQuoteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSecurityGroupsForVpcCommand}
   */
  readonly getSecurityGroupsForVpc: (
    args: GetSecurityGroupsForVpcCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetSecurityGroupsForVpcCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSerialConsoleAccessStatusCommand}
   */
  readonly getSerialConsoleAccessStatus: (
    args: GetSerialConsoleAccessStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetSerialConsoleAccessStatusCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSnapshotBlockPublicAccessStateCommand}
   */
  readonly getSnapshotBlockPublicAccessState: (
    args: GetSnapshotBlockPublicAccessStateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetSnapshotBlockPublicAccessStateCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSpotPlacementScoresCommand}
   */
  readonly getSpotPlacementScores: (
    args: GetSpotPlacementScoresCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetSpotPlacementScoresCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetSubnetCidrReservationsCommand}
   */
  readonly getSubnetCidrReservations: (
    args: GetSubnetCidrReservationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetSubnetCidrReservationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayAttachmentPropagationsCommand}
   */
  readonly getTransitGatewayAttachmentPropagations: (
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetTransitGatewayAttachmentPropagationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayMulticastDomainAssociationsCommand}
   */
  readonly getTransitGatewayMulticastDomainAssociations: (
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetTransitGatewayMulticastDomainAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayPolicyTableAssociationsCommand}
   */
  readonly getTransitGatewayPolicyTableAssociations: (
    args: GetTransitGatewayPolicyTableAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetTransitGatewayPolicyTableAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayPolicyTableEntriesCommand}
   */
  readonly getTransitGatewayPolicyTableEntries: (
    args: GetTransitGatewayPolicyTableEntriesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetTransitGatewayPolicyTableEntriesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayPrefixListReferencesCommand}
   */
  readonly getTransitGatewayPrefixListReferences: (
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetTransitGatewayPrefixListReferencesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayRouteTableAssociationsCommand}
   */
  readonly getTransitGatewayRouteTableAssociations: (
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetTransitGatewayRouteTableAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetTransitGatewayRouteTablePropagationsCommand}
   */
  readonly getTransitGatewayRouteTablePropagations: (
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetTransitGatewayRouteTablePropagationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVerifiedAccessEndpointPolicyCommand}
   */
  readonly getVerifiedAccessEndpointPolicy: (
    args: GetVerifiedAccessEndpointPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetVerifiedAccessEndpointPolicyCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVerifiedAccessGroupPolicyCommand}
   */
  readonly getVerifiedAccessGroupPolicy: (
    args: GetVerifiedAccessGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetVerifiedAccessGroupPolicyCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVpnConnectionDeviceSampleConfigurationCommand}
   */
  readonly getVpnConnectionDeviceSampleConfiguration: (
    args: GetVpnConnectionDeviceSampleConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetVpnConnectionDeviceSampleConfigurationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVpnConnectionDeviceTypesCommand}
   */
  readonly getVpnConnectionDeviceTypes: (
    args: GetVpnConnectionDeviceTypesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetVpnConnectionDeviceTypesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link GetVpnTunnelReplacementStatusCommand}
   */
  readonly getVpnTunnelReplacementStatus: (
    args: GetVpnTunnelReplacementStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    GetVpnTunnelReplacementStatusCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ImportClientVpnClientCertificateRevocationListCommand}
   */
  readonly importClientVpnClientCertificateRevocationList: (
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ImportClientVpnClientCertificateRevocationListCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ImportImageCommand}
   */
  readonly importImage: (
    args: ImportImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ImportImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ImportInstanceCommand}
   */
  readonly importInstance: (
    args: ImportInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ImportInstanceCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ImportKeyPairCommand}
   */
  readonly importKeyPair: (
    args: ImportKeyPairCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ImportKeyPairCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ImportSnapshotCommand}
   */
  readonly importSnapshot: (
    args: ImportSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ImportSnapshotCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ImportVolumeCommand}
   */
  readonly importVolume: (
    args: ImportVolumeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ImportVolumeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ListImagesInRecycleBinCommand}
   */
  readonly listImagesInRecycleBin: (
    args: ListImagesInRecycleBinCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListImagesInRecycleBinCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ListSnapshotsInRecycleBinCommand}
   */
  readonly listSnapshotsInRecycleBin: (
    args: ListSnapshotsInRecycleBinCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ListSnapshotsInRecycleBinCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link LockSnapshotCommand}
   */
  readonly lockSnapshot: (
    args: LockSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<LockSnapshotCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyAddressAttributeCommand}
   */
  readonly modifyAddressAttribute: (
    args: ModifyAddressAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyAddressAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyAvailabilityZoneGroupCommand}
   */
  readonly modifyAvailabilityZoneGroup: (
    args: ModifyAvailabilityZoneGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyAvailabilityZoneGroupCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyCapacityReservationCommand}
   */
  readonly modifyCapacityReservation: (
    args: ModifyCapacityReservationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyCapacityReservationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyCapacityReservationFleetCommand}
   */
  readonly modifyCapacityReservationFleet: (
    args: ModifyCapacityReservationFleetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyCapacityReservationFleetCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyClientVpnEndpointCommand}
   */
  readonly modifyClientVpnEndpoint: (
    args: ModifyClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyClientVpnEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyDefaultCreditSpecificationCommand}
   */
  readonly modifyDefaultCreditSpecification: (
    args: ModifyDefaultCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyDefaultCreditSpecificationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyEbsDefaultKmsKeyIdCommand}
   */
  readonly modifyEbsDefaultKmsKeyId: (
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyEbsDefaultKmsKeyIdCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyFleetCommand}
   */
  readonly modifyFleet: (
    args: ModifyFleetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyFleetCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyFpgaImageAttributeCommand}
   */
  readonly modifyFpgaImageAttribute: (
    args: ModifyFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyFpgaImageAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyHostsCommand}
   */
  readonly modifyHosts: (
    args: ModifyHostsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyHostsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyIdentityIdFormatCommand}
   */
  readonly modifyIdentityIdFormat: (
    args: ModifyIdentityIdFormatCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyIdentityIdFormatCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIdFormatCommand}
   */
  readonly modifyIdFormat: (
    args: ModifyIdFormatCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyIdFormatCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyImageAttributeCommand}
   */
  readonly modifyImageAttribute: (
    args: ModifyImageAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyImageAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceAttributeCommand}
   */
  readonly modifyInstanceAttribute: (
    args: ModifyInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyInstanceAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceCapacityReservationAttributesCommand}
   */
  readonly modifyInstanceCapacityReservationAttributes: (
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyInstanceCapacityReservationAttributesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceCreditSpecificationCommand}
   */
  readonly modifyInstanceCreditSpecification: (
    args: ModifyInstanceCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyInstanceCreditSpecificationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceEventStartTimeCommand}
   */
  readonly modifyInstanceEventStartTime: (
    args: ModifyInstanceEventStartTimeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyInstanceEventStartTimeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceEventWindowCommand}
   */
  readonly modifyInstanceEventWindow: (
    args: ModifyInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyInstanceEventWindowCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceMaintenanceOptionsCommand}
   */
  readonly modifyInstanceMaintenanceOptions: (
    args: ModifyInstanceMaintenanceOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyInstanceMaintenanceOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstanceMetadataOptionsCommand}
   */
  readonly modifyInstanceMetadataOptions: (
    args: ModifyInstanceMetadataOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyInstanceMetadataOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyInstancePlacementCommand}
   */
  readonly modifyInstancePlacement: (
    args: ModifyInstancePlacementCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyInstancePlacementCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIpamCommand}
   */
  readonly modifyIpam: (
    args: ModifyIpamCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyIpamCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyIpamPoolCommand}
   */
  readonly modifyIpamPool: (
    args: ModifyIpamPoolCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyIpamPoolCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyIpamResourceCidrCommand}
   */
  readonly modifyIpamResourceCidr: (
    args: ModifyIpamResourceCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyIpamResourceCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIpamResourceDiscoveryCommand}
   */
  readonly modifyIpamResourceDiscovery: (
    args: ModifyIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyIpamResourceDiscoveryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyIpamScopeCommand}
   */
  readonly modifyIpamScope: (
    args: ModifyIpamScopeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyIpamScopeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyLaunchTemplateCommand}
   */
  readonly modifyLaunchTemplate: (
    args: ModifyLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyLaunchTemplateCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyLocalGatewayRouteCommand}
   */
  readonly modifyLocalGatewayRoute: (
    args: ModifyLocalGatewayRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyLocalGatewayRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyManagedPrefixListCommand}
   */
  readonly modifyManagedPrefixList: (
    args: ModifyManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyManagedPrefixListCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyNetworkInterfaceAttributeCommand}
   */
  readonly modifyNetworkInterfaceAttribute: (
    args: ModifyNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyNetworkInterfaceAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyPrivateDnsNameOptionsCommand}
   */
  readonly modifyPrivateDnsNameOptions: (
    args: ModifyPrivateDnsNameOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyPrivateDnsNameOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyReservedInstancesCommand}
   */
  readonly modifyReservedInstances: (
    args: ModifyReservedInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyReservedInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySecurityGroupRulesCommand}
   */
  readonly modifySecurityGroupRules: (
    args: ModifySecurityGroupRulesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifySecurityGroupRulesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySnapshotAttributeCommand}
   */
  readonly modifySnapshotAttribute: (
    args: ModifySnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifySnapshotAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySnapshotTierCommand}
   */
  readonly modifySnapshotTier: (
    args: ModifySnapshotTierCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifySnapshotTierCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySpotFleetRequestCommand}
   */
  readonly modifySpotFleetRequest: (
    args: ModifySpotFleetRequestCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifySpotFleetRequestCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifySubnetAttributeCommand}
   */
  readonly modifySubnetAttribute: (
    args: ModifySubnetAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifySubnetAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommand}
   */
  readonly modifyTrafficMirrorFilterNetworkServices: (
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTrafficMirrorFilterRuleCommand}
   */
  readonly modifyTrafficMirrorFilterRule: (
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyTrafficMirrorFilterRuleCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTrafficMirrorSessionCommand}
   */
  readonly modifyTrafficMirrorSession: (
    args: ModifyTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyTrafficMirrorSessionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTransitGatewayCommand}
   */
  readonly modifyTransitGateway: (
    args: ModifyTransitGatewayCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyTransitGatewayCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTransitGatewayPrefixListReferenceCommand}
   */
  readonly modifyTransitGatewayPrefixListReference: (
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyTransitGatewayPrefixListReferenceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyTransitGatewayVpcAttachmentCommand}
   */
  readonly modifyTransitGatewayVpcAttachment: (
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyTransitGatewayVpcAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessEndpointCommand}
   */
  readonly modifyVerifiedAccessEndpoint: (
    args: ModifyVerifiedAccessEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVerifiedAccessEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessEndpointPolicyCommand}
   */
  readonly modifyVerifiedAccessEndpointPolicy: (
    args: ModifyVerifiedAccessEndpointPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVerifiedAccessEndpointPolicyCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessGroupCommand}
   */
  readonly modifyVerifiedAccessGroup: (
    args: ModifyVerifiedAccessGroupCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVerifiedAccessGroupCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessGroupPolicyCommand}
   */
  readonly modifyVerifiedAccessGroupPolicy: (
    args: ModifyVerifiedAccessGroupPolicyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVerifiedAccessGroupPolicyCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessInstanceCommand}
   */
  readonly modifyVerifiedAccessInstance: (
    args: ModifyVerifiedAccessInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVerifiedAccessInstanceCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommand}
   */
  readonly modifyVerifiedAccessInstanceLoggingConfiguration: (
    args: ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVerifiedAccessTrustProviderCommand}
   */
  readonly modifyVerifiedAccessTrustProvider: (
    args: ModifyVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVerifiedAccessTrustProviderCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVolumeCommand}
   */
  readonly modifyVolume: (
    args: ModifyVolumeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyVolumeCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyVolumeAttributeCommand}
   */
  readonly modifyVolumeAttribute: (
    args: ModifyVolumeAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVolumeAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcAttributeCommand}
   */
  readonly modifyVpcAttribute: (
    args: ModifyVpcAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpcAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointCommand}
   */
  readonly modifyVpcEndpoint: (
    args: ModifyVpcEndpointCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpcEndpointCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointConnectionNotificationCommand}
   */
  readonly modifyVpcEndpointConnectionNotification: (
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpcEndpointConnectionNotificationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointServiceConfigurationCommand}
   */
  readonly modifyVpcEndpointServiceConfiguration: (
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpcEndpointServiceConfigurationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointServicePayerResponsibilityCommand}
   */
  readonly modifyVpcEndpointServicePayerResponsibility: (
    args: ModifyVpcEndpointServicePayerResponsibilityCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpcEndpointServicePayerResponsibilityCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcEndpointServicePermissionsCommand}
   */
  readonly modifyVpcEndpointServicePermissions: (
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpcEndpointServicePermissionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcPeeringConnectionOptionsCommand}
   */
  readonly modifyVpcPeeringConnectionOptions: (
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpcPeeringConnectionOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpcTenancyCommand}
   */
  readonly modifyVpcTenancy: (
    args: ModifyVpcTenancyCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ModifyVpcTenancyCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ModifyVpnConnectionCommand}
   */
  readonly modifyVpnConnection: (
    args: ModifyVpnConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpnConnectionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpnConnectionOptionsCommand}
   */
  readonly modifyVpnConnectionOptions: (
    args: ModifyVpnConnectionOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpnConnectionOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpnTunnelCertificateCommand}
   */
  readonly modifyVpnTunnelCertificate: (
    args: ModifyVpnTunnelCertificateCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpnTunnelCertificateCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ModifyVpnTunnelOptionsCommand}
   */
  readonly modifyVpnTunnelOptions: (
    args: ModifyVpnTunnelOptionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ModifyVpnTunnelOptionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link MonitorInstancesCommand}
   */
  readonly monitorInstances: (
    args: MonitorInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<MonitorInstancesCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link MoveAddressToVpcCommand}
   */
  readonly moveAddressToVpc: (
    args: MoveAddressToVpcCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<MoveAddressToVpcCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link MoveByoipCidrToIpamCommand}
   */
  readonly moveByoipCidrToIpam: (
    args: MoveByoipCidrToIpamCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    MoveByoipCidrToIpamCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ProvisionByoipCidrCommand}
   */
  readonly provisionByoipCidr: (
    args: ProvisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ProvisionByoipCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ProvisionIpamByoasnCommand}
   */
  readonly provisionIpamByoasn: (
    args: ProvisionIpamByoasnCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ProvisionIpamByoasnCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ProvisionIpamPoolCidrCommand}
   */
  readonly provisionIpamPoolCidr: (
    args: ProvisionIpamPoolCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ProvisionIpamPoolCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ProvisionPublicIpv4PoolCidrCommand}
   */
  readonly provisionPublicIpv4PoolCidr: (
    args: ProvisionPublicIpv4PoolCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ProvisionPublicIpv4PoolCidrCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseCapacityBlockCommand}
   */
  readonly purchaseCapacityBlock: (
    args: PurchaseCapacityBlockCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PurchaseCapacityBlockCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseHostReservationCommand}
   */
  readonly purchaseHostReservation: (
    args: PurchaseHostReservationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PurchaseHostReservationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseReservedInstancesOfferingCommand}
   */
  readonly purchaseReservedInstancesOffering: (
    args: PurchaseReservedInstancesOfferingCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PurchaseReservedInstancesOfferingCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link PurchaseScheduledInstancesCommand}
   */
  readonly purchaseScheduledInstances: (
    args: PurchaseScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    PurchaseScheduledInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RebootInstancesCommand}
   */
  readonly rebootInstances: (
    args: RebootInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<RebootInstancesCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link RegisterImageCommand}
   */
  readonly registerImage: (
    args: RegisterImageCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<RegisterImageCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link RegisterInstanceEventNotificationAttributesCommand}
   */
  readonly registerInstanceEventNotificationAttributes: (
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RegisterInstanceEventNotificationAttributesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RegisterTransitGatewayMulticastGroupMembersCommand}
   */
  readonly registerTransitGatewayMulticastGroupMembers: (
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RegisterTransitGatewayMulticastGroupMembersCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommand}
   */
  readonly registerTransitGatewayMulticastGroupSources: (
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommand}
   */
  readonly rejectTransitGatewayMulticastDomainAssociations: (
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectTransitGatewayPeeringAttachmentCommand}
   */
  readonly rejectTransitGatewayPeeringAttachment: (
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RejectTransitGatewayPeeringAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectTransitGatewayVpcAttachmentCommand}
   */
  readonly rejectTransitGatewayVpcAttachment: (
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RejectTransitGatewayVpcAttachmentCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectVpcEndpointConnectionsCommand}
   */
  readonly rejectVpcEndpointConnections: (
    args: RejectVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RejectVpcEndpointConnectionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RejectVpcPeeringConnectionCommand}
   */
  readonly rejectVpcPeeringConnection: (
    args: RejectVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RejectVpcPeeringConnectionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReleaseAddressCommand}
   */
  readonly releaseAddress: (
    args: ReleaseAddressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ReleaseAddressCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ReleaseHostsCommand}
   */
  readonly releaseHosts: (
    args: ReleaseHostsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ReleaseHostsCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ReleaseIpamPoolAllocationCommand}
   */
  readonly releaseIpamPoolAllocation: (
    args: ReleaseIpamPoolAllocationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ReleaseIpamPoolAllocationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceIamInstanceProfileAssociationCommand}
   */
  readonly replaceIamInstanceProfileAssociation: (
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ReplaceIamInstanceProfileAssociationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceNetworkAclAssociationCommand}
   */
  readonly replaceNetworkAclAssociation: (
    args: ReplaceNetworkAclAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ReplaceNetworkAclAssociationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceNetworkAclEntryCommand}
   */
  readonly replaceNetworkAclEntry: (
    args: ReplaceNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ReplaceNetworkAclEntryCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceRouteCommand}
   */
  readonly replaceRoute: (
    args: ReplaceRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ReplaceRouteCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ReplaceRouteTableAssociationCommand}
   */
  readonly replaceRouteTableAssociation: (
    args: ReplaceRouteTableAssociationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ReplaceRouteTableAssociationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceTransitGatewayRouteCommand}
   */
  readonly replaceTransitGatewayRoute: (
    args: ReplaceTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ReplaceTransitGatewayRouteCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ReplaceVpnTunnelCommand}
   */
  readonly replaceVpnTunnel: (
    args: ReplaceVpnTunnelCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<ReplaceVpnTunnelCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link ReportInstanceStatusCommand}
   */
  readonly reportInstanceStatus: (
    args: ReportInstanceStatusCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ReportInstanceStatusCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RequestSpotFleetCommand}
   */
  readonly requestSpotFleet: (
    args: RequestSpotFleetCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<RequestSpotFleetCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link RequestSpotInstancesCommand}
   */
  readonly requestSpotInstances: (
    args: RequestSpotInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RequestSpotInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetAddressAttributeCommand}
   */
  readonly resetAddressAttribute: (
    args: ResetAddressAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetAddressAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetEbsDefaultKmsKeyIdCommand}
   */
  readonly resetEbsDefaultKmsKeyId: (
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetEbsDefaultKmsKeyIdCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetFpgaImageAttributeCommand}
   */
  readonly resetFpgaImageAttribute: (
    args: ResetFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetFpgaImageAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetImageAttributeCommand}
   */
  readonly resetImageAttribute: (
    args: ResetImageAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetImageAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetInstanceAttributeCommand}
   */
  readonly resetInstanceAttribute: (
    args: ResetInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetInstanceAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetNetworkInterfaceAttributeCommand}
   */
  readonly resetNetworkInterfaceAttribute: (
    args: ResetNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetNetworkInterfaceAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link ResetSnapshotAttributeCommand}
   */
  readonly resetSnapshotAttribute: (
    args: ResetSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    ResetSnapshotAttributeCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreAddressToClassicCommand}
   */
  readonly restoreAddressToClassic: (
    args: RestoreAddressToClassicCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreAddressToClassicCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreImageFromRecycleBinCommand}
   */
  readonly restoreImageFromRecycleBin: (
    args: RestoreImageFromRecycleBinCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreImageFromRecycleBinCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreManagedPrefixListVersionCommand}
   */
  readonly restoreManagedPrefixListVersion: (
    args: RestoreManagedPrefixListVersionCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreManagedPrefixListVersionCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreSnapshotFromRecycleBinCommand}
   */
  readonly restoreSnapshotFromRecycleBin: (
    args: RestoreSnapshotFromRecycleBinCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreSnapshotFromRecycleBinCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RestoreSnapshotTierCommand}
   */
  readonly restoreSnapshotTier: (
    args: RestoreSnapshotTierCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RestoreSnapshotTierCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RevokeClientVpnIngressCommand}
   */
  readonly revokeClientVpnIngress: (
    args: RevokeClientVpnIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RevokeClientVpnIngressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RevokeSecurityGroupEgressCommand}
   */
  readonly revokeSecurityGroupEgress: (
    args: RevokeSecurityGroupEgressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RevokeSecurityGroupEgressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RevokeSecurityGroupIngressCommand}
   */
  readonly revokeSecurityGroupIngress: (
    args: RevokeSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RevokeSecurityGroupIngressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link RunInstancesCommand}
   */
  readonly runInstances: (
    args: RunInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<RunInstancesCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link RunScheduledInstancesCommand}
   */
  readonly runScheduledInstances: (
    args: RunScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    RunScheduledInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link SearchLocalGatewayRoutesCommand}
   */
  readonly searchLocalGatewayRoutes: (
    args: SearchLocalGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SearchLocalGatewayRoutesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link SearchTransitGatewayMulticastGroupsCommand}
   */
  readonly searchTransitGatewayMulticastGroups: (
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SearchTransitGatewayMulticastGroupsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link SearchTransitGatewayRoutesCommand}
   */
  readonly searchTransitGatewayRoutes: (
    args: SearchTransitGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SearchTransitGatewayRoutesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link SendDiagnosticInterruptCommand}
   */
  readonly sendDiagnosticInterrupt: (
    args: SendDiagnosticInterruptCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    SendDiagnosticInterruptCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StartInstancesCommand}
   */
  readonly startInstances: (
    args: StartInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<StartInstancesCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link StartNetworkInsightsAccessScopeAnalysisCommand}
   */
  readonly startNetworkInsightsAccessScopeAnalysis: (
    args: StartNetworkInsightsAccessScopeAnalysisCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    StartNetworkInsightsAccessScopeAnalysisCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StartNetworkInsightsAnalysisCommand}
   */
  readonly startNetworkInsightsAnalysis: (
    args: StartNetworkInsightsAnalysisCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    StartNetworkInsightsAnalysisCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommand}
   */
  readonly startVpcEndpointServicePrivateDnsVerification: (
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link StopInstancesCommand}
   */
  readonly stopInstances: (
    args: StopInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<StopInstancesCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link TerminateClientVpnConnectionsCommand}
   */
  readonly terminateClientVpnConnections: (
    args: TerminateClientVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TerminateClientVpnConnectionsCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link TerminateInstancesCommand}
   */
  readonly terminateInstances: (
    args: TerminateInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    TerminateInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnassignIpv6AddressesCommand}
   */
  readonly unassignIpv6Addresses: (
    args: UnassignIpv6AddressesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UnassignIpv6AddressesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnassignPrivateIpAddressesCommand}
   */
  readonly unassignPrivateIpAddresses: (
    args: UnassignPrivateIpAddressesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UnassignPrivateIpAddressesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnassignPrivateNatGatewayAddressCommand}
   */
  readonly unassignPrivateNatGatewayAddress: (
    args: UnassignPrivateNatGatewayAddressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UnassignPrivateNatGatewayAddressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UnlockSnapshotCommand}
   */
  readonly unlockSnapshot: (
    args: UnlockSnapshotCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<UnlockSnapshotCommandOutput, SdkError | EC2ServiceError>;

  /**
   * @see {@link UnmonitorInstancesCommand}
   */
  readonly unmonitorInstances: (
    args: UnmonitorInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UnmonitorInstancesCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommand}
   */
  readonly updateSecurityGroupRuleDescriptionsEgress: (
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommand}
   */
  readonly updateSecurityGroupRuleDescriptionsIngress: (
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
    SdkError | EC2ServiceError
  >;

  /**
   * @see {@link WithdrawByoipCidrCommand}
   */
  readonly withdrawByoipCidr: (
    args: WithdrawByoipCidrCommandInput,
    options?: __HttpHandlerOptions,
  ) => Effect.Effect<
    WithdrawByoipCidrCommandOutput,
    SdkError | EC2ServiceError
  >;
};

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

  return ReadonlyRecord.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof EC2ServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<EC2ServiceException>
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
