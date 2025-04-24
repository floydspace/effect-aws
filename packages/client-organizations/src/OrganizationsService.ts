/**
 * @since 1.0.0
 */
import {
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
  CreateOrganizationalUnitCommand,
  type CreateOrganizationalUnitCommandInput,
  type CreateOrganizationalUnitCommandOutput,
  CreateOrganizationCommand,
  type CreateOrganizationCommandInput,
  type CreateOrganizationCommandOutput,
  CreatePolicyCommand,
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  DeclineHandshakeCommand,
  type DeclineHandshakeCommandInput,
  type DeclineHandshakeCommandOutput,
  DeleteOrganizationalUnitCommand,
  type DeleteOrganizationalUnitCommandInput,
  type DeleteOrganizationalUnitCommandOutput,
  DeleteOrganizationCommand,
  type DeleteOrganizationCommandInput,
  type DeleteOrganizationCommandOutput,
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
  DescribeOrganizationalUnitCommand,
  type DescribeOrganizationalUnitCommandInput,
  type DescribeOrganizationalUnitCommandOutput,
  DescribeOrganizationCommand,
  type DescribeOrganizationCommandInput,
  type DescribeOrganizationCommandOutput,
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
  EnableAllFeaturesCommand,
  type EnableAllFeaturesCommandInput,
  type EnableAllFeaturesCommandOutput,
  EnableAWSServiceAccessCommand,
  type EnableAWSServiceAccessCommandInput,
  type EnableAWSServiceAccessCommandOutput,
  EnablePolicyTypeCommand,
  type EnablePolicyTypeCommandInput,
  type EnablePolicyTypeCommandOutput,
  InviteAccountToOrganizationCommand,
  type InviteAccountToOrganizationCommandInput,
  type InviteAccountToOrganizationCommandOutput,
  LeaveOrganizationCommand,
  type LeaveOrganizationCommandInput,
  type LeaveOrganizationCommandOutput,
  ListAccountsCommand,
  type ListAccountsCommandInput,
  type ListAccountsCommandOutput,
  ListAccountsForParentCommand,
  type ListAccountsForParentCommandInput,
  type ListAccountsForParentCommandOutput,
  ListAWSServiceAccessForOrganizationCommand,
  type ListAWSServiceAccessForOrganizationCommandInput,
  type ListAWSServiceAccessForOrganizationCommandOutput,
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
  type OrganizationsClient,
  type OrganizationsClientConfig,
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
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  AccessDeniedError,
  AccessDeniedForDependencyError,
  AccountAlreadyClosedError,
  AccountAlreadyRegisteredError,
  AccountNotFoundError,
  AccountNotRegisteredError,
  AccountOwnerNotVerifiedError,
  AlreadyInOrganizationError,
  AWSOrganizationsNotInUseError,
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
  OrganizationalUnitNotEmptyError,
  OrganizationalUnitNotFoundError,
  OrganizationNotEmptyError,
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
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./OrganizationsClientInstance.js";
import * as OrganizationsServiceConfig from "./OrganizationsServiceConfig.js";

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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
    | Cause.TimeoutException
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
export const makeOrganizationsService = Effect.gen(function*() {
  const client = yield* Instance.OrganizationsClientInstance;

  return yield* Service.fromClientAndCommands<OrganizationsService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: OrganizationsServiceConfig.toOrganizationsClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class OrganizationsService extends Effect.Tag("@effect-aws/client-organizations/OrganizationsService")<
  OrganizationsService,
  OrganizationsService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeOrganizationsService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: OrganizationsService.Config) =>
    Layer.effect(this, makeOrganizationsService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(OrganizationsServiceConfig.setOrganizationsServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: OrganizationsClientConfig) => OrganizationsClient,
  ) =>
    Layer.effect(this, makeOrganizationsService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.OrganizationsClientInstance,
          Effect.map(OrganizationsServiceConfig.toOrganizationsClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace OrganizationsService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<OrganizationsClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
