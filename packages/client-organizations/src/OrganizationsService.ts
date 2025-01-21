/**
 * @since 1.0.0
 */
import {
  OrganizationsServiceException,
  type OrganizationsClient,
  type OrganizationsClientConfig,
  AcceptHandshakeCommand,
  type AcceptHandshakeCommandInput,
  type AcceptHandshakeCommandOutput,
  AttachPolicyCommand,
  type AttachPolicyCommandInput,
  type AttachPolicyCommandOutput,
  CancelHandshakeCommand,
  type CancelHandshakeCommandInput,
  type CancelHandshakeCommandOutput,
  CloseAccountCommand,
  type CloseAccountCommandInput,
  type CloseAccountCommandOutput,
  CreateAccountCommand,
  type CreateAccountCommandInput,
  type CreateAccountCommandOutput,
  CreateGovCloudAccountCommand,
  type CreateGovCloudAccountCommandInput,
  type CreateGovCloudAccountCommandOutput,
  CreateOrganizationCommand,
  type CreateOrganizationCommandInput,
  type CreateOrganizationCommandOutput,
  CreateOrganizationalUnitCommand,
  type CreateOrganizationalUnitCommandInput,
  type CreateOrganizationalUnitCommandOutput,
  CreatePolicyCommand,
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  DeclineHandshakeCommand,
  type DeclineHandshakeCommandInput,
  type DeclineHandshakeCommandOutput,
  DeleteOrganizationCommand,
  type DeleteOrganizationCommandInput,
  type DeleteOrganizationCommandOutput,
  DeleteOrganizationalUnitCommand,
  type DeleteOrganizationalUnitCommandInput,
  type DeleteOrganizationalUnitCommandOutput,
  DeletePolicyCommand,
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeregisterDelegatedAdministratorCommand,
  type DeregisterDelegatedAdministratorCommandInput,
  type DeregisterDelegatedAdministratorCommandOutput,
  DescribeAccountCommand,
  type DescribeAccountCommandInput,
  type DescribeAccountCommandOutput,
  DescribeCreateAccountStatusCommand,
  type DescribeCreateAccountStatusCommandInput,
  type DescribeCreateAccountStatusCommandOutput,
  DescribeEffectivePolicyCommand,
  type DescribeEffectivePolicyCommandInput,
  type DescribeEffectivePolicyCommandOutput,
  DescribeHandshakeCommand,
  type DescribeHandshakeCommandInput,
  type DescribeHandshakeCommandOutput,
  DescribeOrganizationCommand,
  type DescribeOrganizationCommandInput,
  type DescribeOrganizationCommandOutput,
  DescribeOrganizationalUnitCommand,
  type DescribeOrganizationalUnitCommandInput,
  type DescribeOrganizationalUnitCommandOutput,
  DescribePolicyCommand,
  type DescribePolicyCommandInput,
  type DescribePolicyCommandOutput,
  DescribeResourcePolicyCommand,
  type DescribeResourcePolicyCommandInput,
  type DescribeResourcePolicyCommandOutput,
  DetachPolicyCommand,
  type DetachPolicyCommandInput,
  type DetachPolicyCommandOutput,
  DisableAWSServiceAccessCommand,
  type DisableAWSServiceAccessCommandInput,
  type DisableAWSServiceAccessCommandOutput,
  DisablePolicyTypeCommand,
  type DisablePolicyTypeCommandInput,
  type DisablePolicyTypeCommandOutput,
  EnableAWSServiceAccessCommand,
  type EnableAWSServiceAccessCommandInput,
  type EnableAWSServiceAccessCommandOutput,
  EnableAllFeaturesCommand,
  type EnableAllFeaturesCommandInput,
  type EnableAllFeaturesCommandOutput,
  EnablePolicyTypeCommand,
  type EnablePolicyTypeCommandInput,
  type EnablePolicyTypeCommandOutput,
  InviteAccountToOrganizationCommand,
  type InviteAccountToOrganizationCommandInput,
  type InviteAccountToOrganizationCommandOutput,
  LeaveOrganizationCommand,
  type LeaveOrganizationCommandInput,
  type LeaveOrganizationCommandOutput,
  ListAWSServiceAccessForOrganizationCommand,
  type ListAWSServiceAccessForOrganizationCommandInput,
  type ListAWSServiceAccessForOrganizationCommandOutput,
  ListAccountsCommand,
  type ListAccountsCommandInput,
  type ListAccountsCommandOutput,
  ListAccountsForParentCommand,
  type ListAccountsForParentCommandInput,
  type ListAccountsForParentCommandOutput,
  ListChildrenCommand,
  type ListChildrenCommandInput,
  type ListChildrenCommandOutput,
  ListCreateAccountStatusCommand,
  type ListCreateAccountStatusCommandInput,
  type ListCreateAccountStatusCommandOutput,
  ListDelegatedAdministratorsCommand,
  type ListDelegatedAdministratorsCommandInput,
  type ListDelegatedAdministratorsCommandOutput,
  ListDelegatedServicesForAccountCommand,
  type ListDelegatedServicesForAccountCommandInput,
  type ListDelegatedServicesForAccountCommandOutput,
  ListHandshakesForAccountCommand,
  type ListHandshakesForAccountCommandInput,
  type ListHandshakesForAccountCommandOutput,
  ListHandshakesForOrganizationCommand,
  type ListHandshakesForOrganizationCommandInput,
  type ListHandshakesForOrganizationCommandOutput,
  ListOrganizationalUnitsForParentCommand,
  type ListOrganizationalUnitsForParentCommandInput,
  type ListOrganizationalUnitsForParentCommandOutput,
  ListParentsCommand,
  type ListParentsCommandInput,
  type ListParentsCommandOutput,
  ListPoliciesCommand,
  type ListPoliciesCommandInput,
  type ListPoliciesCommandOutput,
  ListPoliciesForTargetCommand,
  type ListPoliciesForTargetCommandInput,
  type ListPoliciesForTargetCommandOutput,
  ListRootsCommand,
  type ListRootsCommandInput,
  type ListRootsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTargetsForPolicyCommand,
  type ListTargetsForPolicyCommandInput,
  type ListTargetsForPolicyCommandOutput,
  MoveAccountCommand,
  type MoveAccountCommandInput,
  type MoveAccountCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  RegisterDelegatedAdministratorCommand,
  type RegisterDelegatedAdministratorCommandInput,
  type RegisterDelegatedAdministratorCommandOutput,
  RemoveAccountFromOrganizationCommand,
  type RemoveAccountFromOrganizationCommandInput,
  type RemoveAccountFromOrganizationCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateOrganizationalUnitCommand,
  type UpdateOrganizationalUnitCommandInput,
  type UpdateOrganizationalUnitCommandOutput,
  UpdatePolicyCommand,
  type UpdatePolicyCommandInput,
  type UpdatePolicyCommandOutput,
} from "@aws-sdk/client-organizations";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  AWSOrganizationsNotInUseError,
  AccessDeniedError,
  AccessDeniedForDependencyError,
  AccountAlreadyClosedError,
  AccountAlreadyRegisteredError,
  AccountNotFoundError,
  AccountNotRegisteredError,
  AccountOwnerNotVerifiedError,
  AlreadyInOrganizationError,
  ChildNotFoundError,
  ConcurrentModificationError,
  ConflictError,
  ConstraintViolationError,
  CreateAccountStatusNotFoundError,
  DestinationParentNotFoundError,
  DuplicateAccountError,
  DuplicateHandshakeError,
  DuplicateOrganizationalUnitError,
  DuplicatePolicyAttachmentError,
  DuplicatePolicyError,
  EffectivePolicyNotFoundError,
  FinalizingOrganizationError,
  HandshakeAlreadyInStateError,
  HandshakeConstraintViolationError,
  HandshakeNotFoundError,
  InvalidHandshakeTransitionError,
  InvalidInputError,
  MalformedPolicyDocumentError,
  MasterCannotLeaveOrganizationError,
  OrganizationNotEmptyError,
  OrganizationalUnitNotEmptyError,
  OrganizationalUnitNotFoundError,
  ParentNotFoundError,
  PolicyChangesInProgressError,
  PolicyInUseError,
  PolicyNotAttachedError,
  PolicyNotFoundError,
  PolicyTypeAlreadyEnabledError,
  PolicyTypeNotAvailableForOrganizationError,
  PolicyTypeNotEnabledError,
  ResourcePolicyNotFoundError,
  RootNotFoundError,
  ServiceError,
  SourceParentNotFoundError,
  TargetNotFoundError,
  TooManyRequestsError,
  UnsupportedAPIEndpointError,
  SdkError,
  TaggedException,
} from "./Errors.js";
import {
  OrganizationsClientInstance,
  OrganizationsClientInstanceLayer,
} from "./OrganizationsClientInstance.js";
import {
  DefaultOrganizationsClientConfigLayer,
  makeDefaultOrganizationsClientInstanceConfig,
  OrganizationsClientInstanceConfig,
} from "./OrganizationsClientInstanceConfig.js";

/**
 * @since 1.0.0
 */
export interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

const commands = {
  AcceptHandshakeCommand,
  AttachPolicyCommand,
  CancelHandshakeCommand,
  CloseAccountCommand,
  CreateAccountCommand,
  CreateGovCloudAccountCommand,
  CreateOrganizationCommand,
  CreateOrganizationalUnitCommand,
  CreatePolicyCommand,
  DeclineHandshakeCommand,
  DeleteOrganizationCommand,
  DeleteOrganizationalUnitCommand,
  DeletePolicyCommand,
  DeleteResourcePolicyCommand,
  DeregisterDelegatedAdministratorCommand,
  DescribeAccountCommand,
  DescribeCreateAccountStatusCommand,
  DescribeEffectivePolicyCommand,
  DescribeHandshakeCommand,
  DescribeOrganizationCommand,
  DescribeOrganizationalUnitCommand,
  DescribePolicyCommand,
  DescribeResourcePolicyCommand,
  DetachPolicyCommand,
  DisableAWSServiceAccessCommand,
  DisablePolicyTypeCommand,
  EnableAWSServiceAccessCommand,
  EnableAllFeaturesCommand,
  EnablePolicyTypeCommand,
  InviteAccountToOrganizationCommand,
  LeaveOrganizationCommand,
  ListAWSServiceAccessForOrganizationCommand,
  ListAccountsCommand,
  ListAccountsForParentCommand,
  ListChildrenCommand,
  ListCreateAccountStatusCommand,
  ListDelegatedAdministratorsCommand,
  ListDelegatedServicesForAccountCommand,
  ListHandshakesForAccountCommand,
  ListHandshakesForOrganizationCommand,
  ListOrganizationalUnitsForParentCommand,
  ListParentsCommand,
  ListPoliciesCommand,
  ListPoliciesForTargetCommand,
  ListRootsCommand,
  ListTagsForResourceCommand,
  ListTargetsForPolicyCommand,
  MoveAccountCommand,
  PutResourcePolicyCommand,
  RegisterDelegatedAdministratorCommand,
  RemoveAccountFromOrganizationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateOrganizationalUnitCommand,
  UpdatePolicyCommand,
};

interface OrganizationsService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AcceptHandshakeCommand}
   */
  acceptHandshake(
    args: AcceptHandshakeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptHandshakeCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccessDeniedForDependencyError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | HandshakeAlreadyInStateError
    | HandshakeConstraintViolationError
    | HandshakeNotFoundError
    | InvalidHandshakeTransitionError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link AttachPolicyCommand}
   */
  attachPolicy(
    args: AttachPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachPolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | DuplicatePolicyAttachmentError
    | InvalidInputError
    | PolicyChangesInProgressError
    | PolicyNotFoundError
    | PolicyTypeNotEnabledError
    | ServiceError
    | TargetNotFoundError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link CancelHandshakeCommand}
   */
  cancelHandshake(
    args: CancelHandshakeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelHandshakeCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | HandshakeAlreadyInStateError
    | HandshakeNotFoundError
    | InvalidHandshakeTransitionError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CloseAccountCommand}
   */
  closeAccount(
    args: CloseAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CloseAccountCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountAlreadyClosedError
    | AccountNotFoundError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConflictError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link CreateAccountCommand}
   */
  createAccount(
    args: CreateAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAccountCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | FinalizingOrganizationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link CreateGovCloudAccountCommand}
   */
  createGovCloudAccount(
    args: CreateGovCloudAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGovCloudAccountCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | FinalizingOrganizationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link CreateOrganizationCommand}
   */
  createOrganization(
    args: CreateOrganizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOrganizationCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccessDeniedForDependencyError
    | AlreadyInOrganizationError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreateOrganizationalUnitCommand}
   */
  createOrganizationalUnit(
    args: CreateOrganizationalUnitCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOrganizationalUnitCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | DuplicateOrganizationalUnitError
    | InvalidInputError
    | ParentNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | DuplicatePolicyError
    | InvalidInputError
    | MalformedPolicyDocumentError
    | PolicyTypeNotAvailableForOrganizationError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DeclineHandshakeCommand}
   */
  declineHandshake(
    args: DeclineHandshakeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeclineHandshakeCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | HandshakeAlreadyInStateError
    | HandshakeNotFoundError
    | InvalidHandshakeTransitionError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteOrganizationCommand}
   */
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOrganizationCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | InvalidInputError
    | OrganizationNotEmptyError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeleteOrganizationalUnitCommand}
   */
  deleteOrganizationalUnit(
    args: DeleteOrganizationalUnitCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOrganizationalUnitCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | InvalidInputError
    | OrganizationalUnitNotEmptyError
    | OrganizationalUnitNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | InvalidInputError
    | PolicyInUseError
    | PolicyNotFoundError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | ResourcePolicyNotFoundError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DeregisterDelegatedAdministratorCommand}
   */
  deregisterDelegatedAdministrator(
    args: DeregisterDelegatedAdministratorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterDelegatedAdministratorCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountNotFoundError
    | AccountNotRegisteredError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DescribeAccountCommand}
   */
  describeAccount(
    args: DescribeAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountNotFoundError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeCreateAccountStatusCommand}
   */
  describeCreateAccountStatus(
    args: DescribeCreateAccountStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCreateAccountStatusCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | CreateAccountStatusNotFoundError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DescribeEffectivePolicyCommand}
   */
  describeEffectivePolicy(
    args: DescribeEffectivePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEffectivePolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConstraintViolationError
    | EffectivePolicyNotFoundError
    | InvalidInputError
    | ServiceError
    | TargetNotFoundError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DescribeHandshakeCommand}
   */
  describeHandshake(
    args: DescribeHandshakeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeHandshakeCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | HandshakeNotFoundError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeOrganizationCommand}
   */
  describeOrganization(
    args: DescribeOrganizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOrganizationCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribeOrganizationalUnitCommand}
   */
  describeOrganizationalUnit(
    args: DescribeOrganizationalUnitCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeOrganizationalUnitCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | OrganizationalUnitNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link DescribePolicyCommand}
   */
  describePolicy(
    args: DescribePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | PolicyNotFoundError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeResourcePolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConstraintViolationError
    | ResourcePolicyNotFoundError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DetachPolicyCommand}
   */
  detachPolicy(
    args: DetachPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachPolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | PolicyChangesInProgressError
    | PolicyNotAttachedError
    | PolicyNotFoundError
    | ServiceError
    | TargetNotFoundError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DisableAWSServiceAccessCommand}
   */
  disableAWSServiceAccess(
    args: DisableAWSServiceAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableAWSServiceAccessCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link DisablePolicyTypeCommand}
   */
  disablePolicyType(
    args: DisablePolicyTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisablePolicyTypeCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | PolicyChangesInProgressError
    | PolicyTypeNotEnabledError
    | RootNotFoundError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link EnableAWSServiceAccessCommand}
   */
  enableAWSServiceAccess(
    args: EnableAWSServiceAccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableAWSServiceAccessCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link EnableAllFeaturesCommand}
   */
  enableAllFeatures(
    args: EnableAllFeaturesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableAllFeaturesCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | HandshakeConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link EnablePolicyTypeCommand}
   */
  enablePolicyType(
    args: EnablePolicyTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnablePolicyTypeCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | PolicyChangesInProgressError
    | PolicyTypeAlreadyEnabledError
    | PolicyTypeNotAvailableForOrganizationError
    | RootNotFoundError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link InviteAccountToOrganizationCommand}
   */
  inviteAccountToOrganization(
    args: InviteAccountToOrganizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    InviteAccountToOrganizationCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountOwnerNotVerifiedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | DuplicateHandshakeError
    | FinalizingOrganizationError
    | HandshakeConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link LeaveOrganizationCommand}
   */
  leaveOrganization(
    args: LeaveOrganizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    LeaveOrganizationCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountNotFoundError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | MasterCannotLeaveOrganizationError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListAWSServiceAccessForOrganizationCommand}
   */
  listAWSServiceAccessForOrganization(
    args: ListAWSServiceAccessForOrganizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAWSServiceAccessForOrganizationCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link ListAccountsCommand}
   */
  listAccounts(
    args: ListAccountsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccountsCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListAccountsForParentCommand}
   */
  listAccountsForParent(
    args: ListAccountsForParentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAccountsForParentCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ParentNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListChildrenCommand}
   */
  listChildren(
    args: ListChildrenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListChildrenCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ParentNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListCreateAccountStatusCommand}
   */
  listCreateAccountStatus(
    args: ListCreateAccountStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCreateAccountStatusCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link ListDelegatedAdministratorsCommand}
   */
  listDelegatedAdministrators(
    args: ListDelegatedAdministratorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDelegatedAdministratorsCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link ListDelegatedServicesForAccountCommand}
   */
  listDelegatedServicesForAccount(
    args: ListDelegatedServicesForAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDelegatedServicesForAccountCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountNotFoundError
    | AccountNotRegisteredError
    | AWSOrganizationsNotInUseError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link ListHandshakesForAccountCommand}
   */
  listHandshakesForAccount(
    args: ListHandshakesForAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListHandshakesForAccountCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListHandshakesForOrganizationCommand}
   */
  listHandshakesForOrganization(
    args: ListHandshakesForOrganizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListHandshakesForOrganizationCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListOrganizationalUnitsForParentCommand}
   */
  listOrganizationalUnitsForParent(
    args: ListOrganizationalUnitsForParentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOrganizationalUnitsForParentCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ParentNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListParentsCommand}
   */
  listParents(
    args: ListParentsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListParentsCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ChildNotFoundError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPoliciesCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link ListPoliciesForTargetCommand}
   */
  listPoliciesForTarget(
    args: ListPoliciesForTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPoliciesForTargetCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ServiceError
    | TargetNotFoundError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link ListRootsCommand}
   */
  listRoots(
    args: ListRootsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRootsCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | ServiceError
    | TargetNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link ListTargetsForPolicyCommand}
   */
  listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTargetsForPolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | InvalidInputError
    | PolicyNotFoundError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link MoveAccountCommand}
   */
  moveAccount(
    args: MoveAccountCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    MoveAccountCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountNotFoundError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | DestinationParentNotFoundError
    | DuplicateAccountError
    | InvalidInputError
    | ServiceError
    | SourceParentNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link RegisterDelegatedAdministratorCommand}
   */
  registerDelegatedAdministrator(
    args: RegisterDelegatedAdministratorCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterDelegatedAdministratorCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountAlreadyRegisteredError
    | AccountNotFoundError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;

  /**
   * @see {@link RemoveAccountFromOrganizationCommand}
   */
  removeAccountFromOrganization(
    args: RemoveAccountFromOrganizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveAccountFromOrganizationCommandOutput,
    | SdkError
    | AccessDeniedError
    | AccountNotFoundError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | MasterCannotLeaveOrganizationError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TargetNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | InvalidInputError
    | ServiceError
    | TargetNotFoundError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdateOrganizationalUnitCommand}
   */
  updateOrganizationalUnit(
    args: UpdateOrganizationalUnitCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateOrganizationalUnitCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | DuplicateOrganizationalUnitError
    | InvalidInputError
    | OrganizationalUnitNotFoundError
    | ServiceError
    | TooManyRequestsError
  >;

  /**
   * @see {@link UpdatePolicyCommand}
   */
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePolicyCommandOutput,
    | SdkError
    | AccessDeniedError
    | AWSOrganizationsNotInUseError
    | ConcurrentModificationError
    | ConstraintViolationError
    | DuplicatePolicyError
    | InvalidInputError
    | MalformedPolicyDocumentError
    | PolicyChangesInProgressError
    | PolicyNotFoundError
    | ServiceError
    | TooManyRequestsError
    | UnsupportedAPIEndpointError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeOrganizationsService = Effect.gen(function* (_) {
  const client = yield* _(OrganizationsClientInstance);

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
            e instanceof OrganizationsServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<OrganizationsServiceException>
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
  }, {}) as OrganizationsService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class OrganizationsService extends Effect.Tag(
  "@effect-aws/client-organizations/OrganizationsService",
)<OrganizationsService, OrganizationsService$>() {
  static readonly defaultLayer = Layer.effect(
    this,
    makeOrganizationsService,
  ).pipe(
    Layer.provide(OrganizationsClientInstanceLayer),
    Layer.provide(DefaultOrganizationsClientConfigLayer),
  );
  static readonly layer = (config: OrganizationsClientConfig) =>
    Layer.effect(this, makeOrganizationsService).pipe(
      Layer.provide(OrganizationsClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          OrganizationsClientInstanceConfig,
          makeDefaultOrganizationsClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: OrganizationsClientConfig) => OrganizationsClient,
  ) =>
    Layer.effect(this, makeOrganizationsService).pipe(
      Layer.provide(
        Layer.effect(
          OrganizationsClientInstance,
          Effect.map(makeDefaultOrganizationsClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias OrganizationsService
 */
export const Organizations = OrganizationsService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Organizations.baseLayer instead
 */
export const BaseOrganizationsServiceLayer = Layer.effect(
  OrganizationsService,
  makeOrganizationsService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Organizations.layer instead
 */
export const OrganizationsServiceLayer = BaseOrganizationsServiceLayer.pipe(
  Layer.provide(OrganizationsClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Organizations.defaultLayer instead
 */
export const DefaultOrganizationsServiceLayer =
  OrganizationsService.defaultLayer;
