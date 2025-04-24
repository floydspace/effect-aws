/**
 * @since 1.0.0
 */
import {
  AcceptInboundConnectionCommand,
  type AcceptInboundConnectionCommandInput,
  type AcceptInboundConnectionCommandOutput,
  AddDataSourceCommand,
  type AddDataSourceCommandInput,
  type AddDataSourceCommandOutput,
  AddDirectQueryDataSourceCommand,
  type AddDirectQueryDataSourceCommandInput,
  type AddDirectQueryDataSourceCommandOutput,
  AddTagsCommand,
  type AddTagsCommandInput,
  type AddTagsCommandOutput,
  AssociatePackageCommand,
  type AssociatePackageCommandInput,
  type AssociatePackageCommandOutput,
  AssociatePackagesCommand,
  type AssociatePackagesCommandInput,
  type AssociatePackagesCommandOutput,
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
  DeleteDirectQueryDataSourceCommand,
  type DeleteDirectQueryDataSourceCommandInput,
  type DeleteDirectQueryDataSourceCommandOutput,
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
  DescribeDomainAutoTunesCommand,
  type DescribeDomainAutoTunesCommandInput,
  type DescribeDomainAutoTunesCommandOutput,
  DescribeDomainChangeProgressCommand,
  type DescribeDomainChangeProgressCommandInput,
  type DescribeDomainChangeProgressCommandOutput,
  DescribeDomainCommand,
  type DescribeDomainCommandInput,
  type DescribeDomainCommandOutput,
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
  DissociatePackagesCommand,
  type DissociatePackagesCommandInput,
  type DissociatePackagesCommandOutput,
  GetApplicationCommand,
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetCompatibleVersionsCommand,
  type GetCompatibleVersionsCommandInput,
  type GetCompatibleVersionsCommandOutput,
  GetDataSourceCommand,
  type GetDataSourceCommandInput,
  type GetDataSourceCommandOutput,
  GetDirectQueryDataSourceCommand,
  type GetDirectQueryDataSourceCommandInput,
  type GetDirectQueryDataSourceCommandOutput,
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
  ListDirectQueryDataSourcesCommand,
  type ListDirectQueryDataSourcesCommandInput,
  type ListDirectQueryDataSourcesCommandOutput,
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
  type OpenSearchClient,
  type OpenSearchClientConfig,
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
  UpdateDirectQueryDataSourceCommand,
  type UpdateDirectQueryDataSourceCommandInput,
  type UpdateDirectQueryDataSourceCommandOutput,
  UpdateDomainConfigCommand,
  type UpdateDomainConfigCommandInput,
  type UpdateDomainConfigCommandOutput,
  UpdatePackageCommand,
  type UpdatePackageCommandInput,
  type UpdatePackageCommandOutput,
  UpdatePackageScopeCommand,
  type UpdatePackageScopeCommandInput,
  type UpdatePackageScopeCommandOutput,
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
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
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
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./OpenSearchClientInstance.js";
import * as OpenSearchServiceConfig from "./OpenSearchServiceConfig.js";

const commands = {
  AcceptInboundConnectionCommand,
  AddDataSourceCommand,
  AddDirectQueryDataSourceCommand,
  AddTagsCommand,
  AssociatePackageCommand,
  AssociatePackagesCommand,
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
  DeleteDirectQueryDataSourceCommand,
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
  DissociatePackagesCommand,
  GetApplicationCommand,
  GetCompatibleVersionsCommand,
  GetDataSourceCommand,
  GetDirectQueryDataSourceCommand,
  GetDomainMaintenanceStatusCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
  ListApplicationsCommand,
  ListDataSourcesCommand,
  ListDirectQueryDataSourcesCommand,
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
  UpdateDirectQueryDataSourceCommand,
  UpdateDomainConfigCommand,
  UpdatePackageCommand,
  UpdatePackageScopeCommand,
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
    Cause.TimeoutException | SdkError | DisabledOperationError | LimitExceededError | ResourceNotFoundError
  >;

  /**
   * @see {@link AddDataSourceCommand}
   */
  addDataSource(
    args: AddDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddDataSourceCommandOutput,
    | Cause.TimeoutException
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
   * @see {@link AddDirectQueryDataSourceCommand}
   */
  addDirectQueryDataSource(
    args: AddDirectQueryDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddDirectQueryDataSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
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
    Cause.TimeoutException | SdkError | BaseError | InternalError | LimitExceededError | ValidationError
  >;

  /**
   * @see {@link AssociatePackageCommand}
   */
  associatePackage(
    args: AssociatePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociatePackageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | BaseError
    | ConflictError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link AssociatePackagesCommand}
   */
  associatePackages(
    args: AssociatePackagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociatePackagesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | ConflictError
    | DisabledOperationError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateApplicationCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteDirectQueryDataSourceCommand}
   */
  deleteDirectQueryDataSource(
    args: DeleteDirectQueryDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDirectQueryDataSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
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
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteInboundConnectionCommand}
   */
  deleteInboundConnection(
    args: DeleteInboundConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteInboundConnectionCommandOutput,
    Cause.TimeoutException | SdkError | DisabledOperationError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteOutboundConnectionCommand}
   */
  deleteOutboundConnection(
    args: DeleteOutboundConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOutboundConnectionCommandOutput,
    Cause.TimeoutException | SdkError | DisabledOperationError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeletePackageCommand}
   */
  deletePackage(
    args: DeletePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePackageCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | BaseError | DisabledOperationError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DescribeDomainAutoTunesCommand}
   */
  describeDomainAutoTunes(
    args: DescribeDomainAutoTunesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainAutoTunesCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DescribeDomainChangeProgressCommand}
   */
  describeDomainChangeProgress(
    args: DescribeDomainChangeProgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainChangeProgressCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DescribeDomainConfigCommand}
   */
  describeDomainConfig(
    args: DescribeDomainConfigCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainConfigCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DescribeDomainHealthCommand}
   */
  describeDomainHealth(
    args: DescribeDomainHealthCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainHealthCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | BaseError | InternalError | ValidationError
  >;

  /**
   * @see {@link DescribeDryRunProgressCommand}
   */
  describeDryRunProgress(
    args: DescribeDryRunProgressCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDryRunProgressCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | DisabledOperationError | InvalidPaginationTokenError
  >;

  /**
   * @see {@link DescribeInstanceTypeLimitsCommand}
   */
  describeInstanceTypeLimits(
    args: DescribeInstanceTypeLimitsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInstanceTypeLimitsCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | DisabledOperationError | InvalidPaginationTokenError
  >;

  /**
   * @see {@link DescribePackagesCommand}
   */
  describePackages(
    args: DescribePackagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePackagesCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | DisabledOperationError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DescribeReservedInstancesCommand}
   */
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReservedInstancesCommandOutput,
    Cause.TimeoutException | SdkError | DisabledOperationError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeVpcEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | DisabledOperationError | InternalError | ValidationError
  >;

  /**
   * @see {@link DissociatePackageCommand}
   */
  dissociatePackage(
    args: DissociatePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DissociatePackageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | BaseError
    | ConflictError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DissociatePackagesCommand}
   */
  dissociatePackages(
    args: DissociatePackagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DissociatePackagesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | ConflictError
    | DisabledOperationError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetDirectQueryDataSourceCommand}
   */
  getDirectQueryDataSource(
    args: GetDirectQueryDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDirectQueryDataSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListDirectQueryDataSourcesCommand}
   */
  listDirectQueryDataSources(
    args: ListDirectQueryDataSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDirectQueryDataSourcesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | BaseError | ValidationError
  >;

  /**
   * @see {@link ListDomainsForPackageCommand}
   */
  listDomainsForPackage(
    args: ListDomainsForPackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainsForPackageCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListPackagesForDomainCommand}
   */
  listPackagesForDomain(
    args: ListPackagesForDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPackagesForDomainCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListVersionsCommand}
   */
  listVersions(
    args: ListVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVersionsCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link ListVpcEndpointAccessCommand}
   */
  listVpcEndpointAccess(
    args: ListVpcEndpointAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointAccessCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | DisabledOperationError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | DisabledOperationError | InternalError
  >;

  /**
   * @see {@link ListVpcEndpointsForDomainCommand}
   */
  listVpcEndpointsForDomain(
    args: ListVpcEndpointsForDomainCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListVpcEndpointsForDomainCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | DisabledOperationError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link PurchaseReservedInstanceOfferingCommand}
   */
  purchaseReservedInstanceOffering(
    args: PurchaseReservedInstanceOfferingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurchaseReservedInstanceOfferingCommandOutput,
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | DisabledOperationError | ResourceNotFoundError
  >;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(
    args: RemoveTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsCommandOutput,
    Cause.TimeoutException | SdkError | BaseError | InternalError | ValidationError
  >;

  /**
   * @see {@link RevokeVpcEndpointAccessCommand}
   */
  revokeVpcEndpointAccess(
    args: RevokeVpcEndpointAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RevokeVpcEndpointAccessCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    Cause.TimeoutException | SdkError | BaseError | InternalError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApplicationCommandOutput,
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DependencyFailureError
    | DisabledOperationError
    | InternalError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateDirectQueryDataSourceCommand}
   */
  updateDirectQueryDataSource(
    args: UpdateDirectQueryDataSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDirectQueryDataSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | BaseError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePackageScopeCommand}
   */
  updatePackageScope(
    args: UpdatePackageScopeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePackageScopeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BaseError
    | DisabledOperationError
    | InternalError
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
 * @category constructors
 */
export const makeOpenSearchService = Effect.gen(function*() {
  const client = yield* Instance.OpenSearchClientInstance;

  return yield* Service.fromClientAndCommands<OpenSearchService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: OpenSearchServiceConfig.toOpenSearchClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class OpenSearchService extends Effect.Tag("@effect-aws/client-opensearch/OpenSearchService")<
  OpenSearchService,
  OpenSearchService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeOpenSearchService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: OpenSearchService.Config) =>
    Layer.effect(this, makeOpenSearchService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(OpenSearchServiceConfig.setOpenSearchServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: OpenSearchClientConfig) => OpenSearchClient,
  ) =>
    Layer.effect(this, makeOpenSearchService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.OpenSearchClientInstance,
          Effect.map(OpenSearchServiceConfig.toOpenSearchClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace OpenSearchService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<OpenSearchClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
