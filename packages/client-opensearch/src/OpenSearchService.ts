/**
 * @since 1.0.0
 */
import {
  OpenSearchServiceException,
  AcceptInboundConnectionCommand,
  type AcceptInboundConnectionCommandInput,
  type AcceptInboundConnectionCommandOutput,
  AddDataSourceCommand,
  type AddDataSourceCommandInput,
  type AddDataSourceCommandOutput,
  AddTagsCommand,
  type AddTagsCommandInput,
  type AddTagsCommandOutput,
  AssociatePackageCommand,
  type AssociatePackageCommandInput,
  type AssociatePackageCommandOutput,
  AuthorizeVpcEndpointAccessCommand,
  type AuthorizeVpcEndpointAccessCommandInput,
  type AuthorizeVpcEndpointAccessCommandOutput,
  CancelDomainConfigChangeCommand,
  type CancelDomainConfigChangeCommandInput,
  type CancelDomainConfigChangeCommandOutput,
  CancelServiceSoftwareUpdateCommand,
  type CancelServiceSoftwareUpdateCommandInput,
  type CancelServiceSoftwareUpdateCommandOutput,
  CreateApplicationCommand,
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateDomainCommand,
  type CreateDomainCommandInput,
  type CreateDomainCommandOutput,
  CreateOutboundConnectionCommand,
  type CreateOutboundConnectionCommandInput,
  type CreateOutboundConnectionCommandOutput,
  CreatePackageCommand,
  type CreatePackageCommandInput,
  type CreatePackageCommandOutput,
  CreateVpcEndpointCommand,
  type CreateVpcEndpointCommandInput,
  type CreateVpcEndpointCommandOutput,
  DeleteApplicationCommand,
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteDataSourceCommand,
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteDomainCommand,
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteInboundConnectionCommand,
  type DeleteInboundConnectionCommandInput,
  type DeleteInboundConnectionCommandOutput,
  DeleteOutboundConnectionCommand,
  type DeleteOutboundConnectionCommandInput,
  type DeleteOutboundConnectionCommandOutput,
  DeletePackageCommand,
  type DeletePackageCommandInput,
  type DeletePackageCommandOutput,
  DeleteVpcEndpointCommand,
  type DeleteVpcEndpointCommandInput,
  type DeleteVpcEndpointCommandOutput,
  DescribeDomainCommand,
  type DescribeDomainCommandInput,
  type DescribeDomainCommandOutput,
  DescribeDomainAutoTunesCommand,
  type DescribeDomainAutoTunesCommandInput,
  type DescribeDomainAutoTunesCommandOutput,
  DescribeDomainChangeProgressCommand,
  type DescribeDomainChangeProgressCommandInput,
  type DescribeDomainChangeProgressCommandOutput,
  DescribeDomainConfigCommand,
  type DescribeDomainConfigCommandInput,
  type DescribeDomainConfigCommandOutput,
  DescribeDomainHealthCommand,
  type DescribeDomainHealthCommandInput,
  type DescribeDomainHealthCommandOutput,
  DescribeDomainNodesCommand,
  type DescribeDomainNodesCommandInput,
  type DescribeDomainNodesCommandOutput,
  DescribeDomainsCommand,
  type DescribeDomainsCommandInput,
  type DescribeDomainsCommandOutput,
  DescribeDryRunProgressCommand,
  type DescribeDryRunProgressCommandInput,
  type DescribeDryRunProgressCommandOutput,
  DescribeInboundConnectionsCommand,
  type DescribeInboundConnectionsCommandInput,
  type DescribeInboundConnectionsCommandOutput,
  DescribeInstanceTypeLimitsCommand,
  type DescribeInstanceTypeLimitsCommandInput,
  type DescribeInstanceTypeLimitsCommandOutput,
  DescribeOutboundConnectionsCommand,
  type DescribeOutboundConnectionsCommandInput,
  type DescribeOutboundConnectionsCommandOutput,
  DescribePackagesCommand,
  type DescribePackagesCommandInput,
  type DescribePackagesCommandOutput,
  DescribeReservedInstanceOfferingsCommand,
  type DescribeReservedInstanceOfferingsCommandInput,
  type DescribeReservedInstanceOfferingsCommandOutput,
  DescribeReservedInstancesCommand,
  type DescribeReservedInstancesCommandInput,
  type DescribeReservedInstancesCommandOutput,
  DescribeVpcEndpointsCommand,
  type DescribeVpcEndpointsCommandInput,
  type DescribeVpcEndpointsCommandOutput,
  DissociatePackageCommand,
  type DissociatePackageCommandInput,
  type DissociatePackageCommandOutput,
  GetApplicationCommand,
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetCompatibleVersionsCommand,
  type GetCompatibleVersionsCommandInput,
  type GetCompatibleVersionsCommandOutput,
  GetDataSourceCommand,
  type GetDataSourceCommandInput,
  type GetDataSourceCommandOutput,
  GetDomainMaintenanceStatusCommand,
  type GetDomainMaintenanceStatusCommandInput,
  type GetDomainMaintenanceStatusCommandOutput,
  GetPackageVersionHistoryCommand,
  type GetPackageVersionHistoryCommandInput,
  type GetPackageVersionHistoryCommandOutput,
  GetUpgradeHistoryCommand,
  type GetUpgradeHistoryCommandInput,
  type GetUpgradeHistoryCommandOutput,
  GetUpgradeStatusCommand,
  type GetUpgradeStatusCommandInput,
  type GetUpgradeStatusCommandOutput,
  ListApplicationsCommand,
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListDataSourcesCommand,
  type ListDataSourcesCommandInput,
  type ListDataSourcesCommandOutput,
  ListDomainMaintenancesCommand,
  type ListDomainMaintenancesCommandInput,
  type ListDomainMaintenancesCommandOutput,
  ListDomainNamesCommand,
  type ListDomainNamesCommandInput,
  type ListDomainNamesCommandOutput,
  ListDomainsForPackageCommand,
  type ListDomainsForPackageCommandInput,
  type ListDomainsForPackageCommandOutput,
  ListInstanceTypeDetailsCommand,
  type ListInstanceTypeDetailsCommandInput,
  type ListInstanceTypeDetailsCommandOutput,
  ListPackagesForDomainCommand,
  type ListPackagesForDomainCommandInput,
  type ListPackagesForDomainCommandOutput,
  ListScheduledActionsCommand,
  type ListScheduledActionsCommandInput,
  type ListScheduledActionsCommandOutput,
  ListTagsCommand,
  type ListTagsCommandInput,
  type ListTagsCommandOutput,
  ListVersionsCommand,
  type ListVersionsCommandInput,
  type ListVersionsCommandOutput,
  ListVpcEndpointAccessCommand,
  type ListVpcEndpointAccessCommandInput,
  type ListVpcEndpointAccessCommandOutput,
  ListVpcEndpointsCommand,
  type ListVpcEndpointsCommandInput,
  type ListVpcEndpointsCommandOutput,
  ListVpcEndpointsForDomainCommand,
  type ListVpcEndpointsForDomainCommandInput,
  type ListVpcEndpointsForDomainCommandOutput,
  PurchaseReservedInstanceOfferingCommand,
  type PurchaseReservedInstanceOfferingCommandInput,
  type PurchaseReservedInstanceOfferingCommandOutput,
  RejectInboundConnectionCommand,
  type RejectInboundConnectionCommandInput,
  type RejectInboundConnectionCommandOutput,
  RemoveTagsCommand,
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  RevokeVpcEndpointAccessCommand,
  type RevokeVpcEndpointAccessCommandInput,
  type RevokeVpcEndpointAccessCommandOutput,
  StartDomainMaintenanceCommand,
  type StartDomainMaintenanceCommandInput,
  type StartDomainMaintenanceCommandOutput,
  StartServiceSoftwareUpdateCommand,
  type StartServiceSoftwareUpdateCommandInput,
  type StartServiceSoftwareUpdateCommandOutput,
  UpdateApplicationCommand,
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateDataSourceCommand,
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateDomainConfigCommand,
  type UpdateDomainConfigCommandInput,
  type UpdateDomainConfigCommandOutput,
  UpdatePackageCommand,
  type UpdatePackageCommandInput,
  type UpdatePackageCommandOutput,
  UpdateScheduledActionCommand,
  type UpdateScheduledActionCommandInput,
  type UpdateScheduledActionCommandOutput,
  UpdateVpcEndpointCommand,
  type UpdateVpcEndpointCommandInput,
  type UpdateVpcEndpointCommandOutput,
  UpgradeDomainCommand,
  type UpgradeDomainCommandInput,
  type UpgradeDomainCommandOutput,
} from "@aws-sdk/client-opensearch";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  AccessDeniedError,
  BaseError,
  ConflictError,
  DependencyFailureError,
  DisabledOperationError,
  InternalError,
  InvalidPaginationTokenError,
  InvalidTypeError,
  LimitExceededError,
  ResourceAlreadyExistsError,
  ResourceNotFoundError,
  SlotNotAvailableError,
  ValidationError,
  SdkError,
  TaggedException,
} from "./Errors";
import {
  OpenSearchClientInstance,
  OpenSearchClientInstanceLayer,
} from "./OpenSearchClientInstance";
import { DefaultOpenSearchClientConfigLayer } from "./OpenSearchClientInstanceConfig";

/**
 * @since 1.0.1
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  AcceptInboundConnectionCommand,
  AddDataSourceCommand,
  AddTagsCommand,
  AssociatePackageCommand,
  AuthorizeVpcEndpointAccessCommand,
  CancelDomainConfigChangeCommand,
  CancelServiceSoftwareUpdateCommand,
  CreateApplicationCommand,
  CreateDomainCommand,
  CreateOutboundConnectionCommand,
  CreatePackageCommand,
  CreateVpcEndpointCommand,
  DeleteApplicationCommand,
  DeleteDataSourceCommand,
  DeleteDomainCommand,
  DeleteInboundConnectionCommand,
  DeleteOutboundConnectionCommand,
  DeletePackageCommand,
  DeleteVpcEndpointCommand,
  DescribeDomainCommand,
  DescribeDomainAutoTunesCommand,
  DescribeDomainChangeProgressCommand,
  DescribeDomainConfigCommand,
  DescribeDomainHealthCommand,
  DescribeDomainNodesCommand,
  DescribeDomainsCommand,
  DescribeDryRunProgressCommand,
  DescribeInboundConnectionsCommand,
  DescribeInstanceTypeLimitsCommand,
  DescribeOutboundConnectionsCommand,
  DescribePackagesCommand,
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstancesCommand,
  DescribeVpcEndpointsCommand,
  DissociatePackageCommand,
  GetApplicationCommand,
  GetCompatibleVersionsCommand,
  GetDataSourceCommand,
  GetDomainMaintenanceStatusCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
  ListApplicationsCommand,
  ListDataSourcesCommand,
  ListDomainMaintenancesCommand,
  ListDomainNamesCommand,
  ListDomainsForPackageCommand,
  ListInstanceTypeDetailsCommand,
  ListPackagesForDomainCommand,
  ListScheduledActionsCommand,
  ListTagsCommand,
  ListVersionsCommand,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomainCommand,
  PurchaseReservedInstanceOfferingCommand,
  RejectInboundConnectionCommand,
  RemoveTagsCommand,
  RevokeVpcEndpointAccessCommand,
  StartDomainMaintenanceCommand,
  StartServiceSoftwareUpdateCommand,
  UpdateApplicationCommand,
  UpdateDataSourceCommand,
  UpdateDomainConfigCommand,
  UpdatePackageCommand,
  UpdateScheduledActionCommand,
  UpdateVpcEndpointCommand,
  UpgradeDomainCommand,
};

interface OpenSearchService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AcceptInboundConnectionCommand}
   */
  acceptInboundConnection(
    args: AcceptInboundConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptInboundConnectionCommandOutput,
    | SdkError
    | DisabledOperationError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link AddDataSourceCommand}
   */
  addDataSource(
    args: AddDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddDataSourceCommandOutput,
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsCommandOutput,
    SdkError | BaseError | InternalError | LimitExceededError | ValidationError
  >;

  /**
   * @see {@link AssociatePackageCommand}
   */
  associatePackage(
    args: AssociatePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociatePackageCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | ConflictError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link AuthorizeVpcEndpointAccessCommand}
   */
  authorizeVpcEndpointAccess(
    args: AuthorizeVpcEndpointAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AuthorizeVpcEndpointAccessCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link CancelDomainConfigChangeCommand}
   */
  cancelDomainConfigChange(
    args: CancelDomainConfigChangeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelDomainConfigChangeCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link CancelServiceSoftwareUpdateCommand}
   */
  cancelServiceSoftwareUpdate(
    args: CancelServiceSoftwareUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelServiceSoftwareUpdateCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateApplicationCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | ConflictError
    | DisabledOperationError
    | InternalError
    | ValidationError
  >;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDomainCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ValidationError
  >;

  /**
   * @see {@link CreateOutboundConnectionCommand}
   */
  createOutboundConnection(
    args: CreateOutboundConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOutboundConnectionCommandOutput,
    | SdkError
    | DisabledOperationError
    | InternalError
    | LimitExceededError
    | ResourceAlreadyExistsError
  >;

  /**
   * @see {@link CreatePackageCommand}
   */
  createPackage(
    args: CreatePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePackageCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ValidationError
  >;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateVpcEndpointCommandOutput,
    | SdkError
    | BaseError
    | ConflictError
    | DisabledOperationError
    | InternalError
    | LimitExceededError
    | ValidationError
  >;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApplicationCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | ConflictError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDataSourceCommandOutput,
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDomainCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteInboundConnectionCommand}
   */
  deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInboundConnectionCommandOutput,
    SdkError | DisabledOperationError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteOutboundConnectionCommand}
   */
  deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOutboundConnectionCommandOutput,
    SdkError | DisabledOperationError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeletePackageCommand}
   */
  deletePackage(
    args: DeletePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePackageCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | ConflictError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteVpcEndpointCommand}
   */
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteVpcEndpointCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDomainAutoTunesCommand}
   */
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainAutoTunesCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDomainChangeProgressCommand}
   */
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainChangeProgressCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDomainConfigCommand}
   */
  describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainConfigCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDomainHealthCommand}
   */
  describeDomainHealth(
    args: DescribeDomainHealthCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainHealthCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDomainNodesCommand}
   */
  describeDomainNodes(
    args: DescribeDomainNodesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainNodesCommandOutput,
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeDomainsCommand}
   */
  describeDomains(
    args: DescribeDomainsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainsCommandOutput,
    SdkError | BaseError | InternalError | ValidationError
  >;

  /**
   * @see {@link DescribeDryRunProgressCommand}
   */
  describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDryRunProgressCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeInboundConnectionsCommand}
   */
  describeInboundConnections(
    args: DescribeInboundConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInboundConnectionsCommandOutput,
    SdkError | DisabledOperationError | InvalidPaginationTokenError
  >;

  /**
   * @see {@link DescribeInstanceTypeLimitsCommand}
   */
  describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceTypeLimitsCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeOutboundConnectionsCommand}
   */
  describeOutboundConnections(
    args: DescribeOutboundConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOutboundConnectionsCommandOutput,
    SdkError | DisabledOperationError | InvalidPaginationTokenError
  >;

  /**
   * @see {@link DescribePackagesCommand}
   */
  describePackages(
    args: DescribePackagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePackagesCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeReservedInstanceOfferingsCommand}
   */
  describeReservedInstanceOfferings(
    args: DescribeReservedInstanceOfferingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstanceOfferingsCommandOutput,
    | SdkError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeReservedInstancesCommand}
   */
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstancesCommandOutput,
    | SdkError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointsCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ValidationError
  >;

  /**
   * @see {@link DissociatePackageCommand}
   */
  dissociatePackage(
    args: DissociatePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DissociatePackageCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | ConflictError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetApplicationCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetCompatibleVersionsCommand}
   */
  getCompatibleVersions(
    args: GetCompatibleVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCompatibleVersionsCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(
    args: GetDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataSourceCommandOutput,
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetDomainMaintenanceStatusCommand}
   */
  getDomainMaintenanceStatus(
    args: GetDomainMaintenanceStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDomainMaintenanceStatusCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetPackageVersionHistoryCommand}
   */
  getPackageVersionHistory(
    args: GetPackageVersionHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPackageVersionHistoryCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetUpgradeHistoryCommand}
   */
  getUpgradeHistory(
    args: GetUpgradeHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUpgradeHistoryCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetUpgradeStatusCommand}
   */
  getUpgradeStatus(
    args: GetUpgradeStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUpgradeStatusCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListApplicationsCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataSourcesCommandOutput,
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListDomainMaintenancesCommand}
   */
  listDomainMaintenances(
    args: ListDomainMaintenancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainMaintenancesCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainNamesCommandOutput,
    SdkError | BaseError | ValidationError
  >;

  /**
   * @see {@link ListDomainsForPackageCommand}
   */
  listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainsForPackageCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListInstanceTypeDetailsCommand}
   */
  listInstanceTypeDetails(
    args: ListInstanceTypeDetailsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListInstanceTypeDetailsCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListPackagesForDomainCommand}
   */
  listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPackagesForDomainCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListScheduledActionsCommand}
   */
  listScheduledActions(
    args: ListScheduledActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListScheduledActionsCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | InvalidPaginationTokenError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListVersionsCommand}
   */
  listVersions(
    args: ListVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVersionsCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListVpcEndpointAccessCommand}
   */
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointAccessCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsCommandOutput,
    SdkError | BaseError | DisabledOperationError | InternalError
  >;

  /**
   * @see {@link ListVpcEndpointsForDomainCommand}
   */
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsForDomainCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PurchaseReservedInstanceOfferingCommand}
   */
  purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedInstanceOfferingCommandOutput,
    | SdkError
    | DisabledOperationError
    | InternalError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link RejectInboundConnectionCommand}
   */
  rejectInboundConnection(
    args: RejectInboundConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectInboundConnectionCommandOutput,
    SdkError | DisabledOperationError | ResourceNotFoundError
  >;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsCommandOutput,
    SdkError | BaseError | InternalError | ValidationError
  >;

  /**
   * @see {@link RevokeVpcEndpointAccessCommand}
   */
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeVpcEndpointAccessCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link StartDomainMaintenanceCommand}
   */
  startDomainMaintenance(
    args: StartDomainMaintenanceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDomainMaintenanceCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link StartServiceSoftwareUpdateCommand}
   */
  startServiceSoftwareUpdate(
    args: StartServiceSoftwareUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartServiceSoftwareUpdateCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApplicationCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | ConflictError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDataSourceCommandOutput,
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDomainConfigCommand}
   */
  updateDomainConfig(
    args: UpdateDomainConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDomainConfigCommandOutput,
    | SdkError
    | BaseError
    | InternalError
    | InvalidTypeError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePackageCommand}
   */
  updatePackage(
    args: UpdatePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePackageCommandOutput,
    | SdkError
    | AccessDeniedError
    | BaseError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateScheduledActionCommand}
   */
  updateScheduledAction(
    args: UpdateScheduledActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateScheduledActionCommandOutput,
    | SdkError
    | BaseError
    | ConflictError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
    | SlotNotAvailableError
    | ValidationError
  >;

  /**
   * @see {@link UpdateVpcEndpointCommand}
   */
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateVpcEndpointCommandOutput,
    | SdkError
    | BaseError
    | ConflictError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpgradeDomainCommand}
   */
  upgradeDomain(
    args: UpgradeDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpgradeDomainCommandOutput,
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category models
 */
export class OpenSearchService extends Effect.Tag(
  "@effect-aws/client-opensearch/OpenSearchService",
)<OpenSearchService, OpenSearchService$>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeOpenSearchService = Effect.gen(function* (_) {
  const client = yield* _(OpenSearchClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options?: HttpHandlerOptions) =>
      Effect.tryPromise({
        try: (abortSignal) =>
          client.send(new CommandCtor(args), {
            ...(options ?? {}),
            abortSignal,
          }),
        catch: (e) => {
          if (
            e instanceof OpenSearchServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<OpenSearchServiceException>
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
  }, {}) as OpenSearchService$;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseOpenSearchServiceLayer = Layer.effect(
  OpenSearchService,
  makeOpenSearchService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const OpenSearchServiceLayer = BaseOpenSearchServiceLayer.pipe(
  Layer.provide(OpenSearchClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultOpenSearchServiceLayer = OpenSearchServiceLayer.pipe(
  Layer.provide(DefaultOpenSearchClientConfigLayer),
);