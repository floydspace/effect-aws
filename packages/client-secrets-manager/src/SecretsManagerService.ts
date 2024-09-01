/**
 * @since 1.0.0
 */
import {
  BatchGetSecretValueCommand,
  type BatchGetSecretValueCommandInput,
  type BatchGetSecretValueCommandOutput,
  CancelRotateSecretCommand,
  type CancelRotateSecretCommandInput,
  type CancelRotateSecretCommandOutput,
  CreateSecretCommand,
  type CreateSecretCommandInput,
  type CreateSecretCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteSecretCommand,
  type DeleteSecretCommandInput,
  type DeleteSecretCommandOutput,
  DescribeSecretCommand,
  type DescribeSecretCommandInput,
  type DescribeSecretCommandOutput,
  GetRandomPasswordCommand,
  type GetRandomPasswordCommandInput,
  type GetRandomPasswordCommandOutput,
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetSecretValueCommand,
  type GetSecretValueCommandInput,
  type GetSecretValueCommandOutput,
  ListSecretsCommand,
  type ListSecretsCommandInput,
  type ListSecretsCommandOutput,
  ListSecretVersionIdsCommand,
  type ListSecretVersionIdsCommandInput,
  type ListSecretVersionIdsCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutSecretValueCommand,
  type PutSecretValueCommandInput,
  type PutSecretValueCommandOutput,
  RemoveRegionsFromReplicationCommand,
  type RemoveRegionsFromReplicationCommandInput,
  type RemoveRegionsFromReplicationCommandOutput,
  ReplicateSecretToRegionsCommand,
  type ReplicateSecretToRegionsCommandInput,
  type ReplicateSecretToRegionsCommandOutput,
  RestoreSecretCommand,
  type RestoreSecretCommandInput,
  type RestoreSecretCommandOutput,
  RotateSecretCommand,
  type RotateSecretCommandInput,
  type RotateSecretCommandOutput,
  SecretsManagerServiceException,
  StopReplicationToReplicaCommand,
  type StopReplicationToReplicaCommandInput,
  type StopReplicationToReplicaCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateSecretCommand,
  type UpdateSecretCommandInput,
  type UpdateSecretCommandOutput,
  UpdateSecretVersionStageCommand,
  type UpdateSecretVersionStageCommandInput,
  type UpdateSecretVersionStageCommandOutput,
  ValidateResourcePolicyCommand,
  type ValidateResourcePolicyCommandInput,
  type ValidateResourcePolicyCommandOutput,
} from "@aws-sdk/client-secrets-manager";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  DecryptionError,
  EncryptionError,
  InternalServiceError,
  InvalidNextTokenError,
  InvalidParameterError,
  InvalidRequestError,
  LimitExceededError,
  MalformedPolicyDocumentError,
  PreconditionNotMetError,
  PublicPolicyError,
  ResourceExistsError,
  ResourceNotFoundError,
  SdkError,
  TaggedException,
} from "./Errors";
import {
  SecretsManagerClientInstance,
  SecretsManagerClientInstanceLayer,
} from "./SecretsManagerClientInstance";
import { DefaultSecretsManagerClientConfigLayer } from "./SecretsManagerClientInstanceConfig";

const commands = {
  BatchGetSecretValueCommand,
  CancelRotateSecretCommand,
  CreateSecretCommand,
  DeleteResourcePolicyCommand,
  DeleteSecretCommand,
  DescribeSecretCommand,
  GetRandomPasswordCommand,
  GetResourcePolicyCommand,
  GetSecretValueCommand,
  ListSecretsCommand,
  ListSecretVersionIdsCommand,
  PutResourcePolicyCommand,
  PutSecretValueCommand,
  RemoveRegionsFromReplicationCommand,
  ReplicateSecretToRegionsCommand,
  RestoreSecretCommand,
  RotateSecretCommand,
  StopReplicationToReplicaCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateSecretCommand,
  UpdateSecretVersionStageCommand,
  ValidateResourcePolicyCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface SecretsManagerService {
  readonly _: unique symbol;

  /**
   * @see {@link BatchGetSecretValueCommand}
   */
  batchGetSecretValue(
    args: BatchGetSecretValueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetSecretValueCommandOutput,
    | SdkError
    | DecryptionError
    | InternalServiceError
    | InvalidNextTokenError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CancelRotateSecretCommand}
   */
  cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CancelRotateSecretCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateSecretCommand}
   */
  createSecret(
    args: CreateSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecretCommandOutput,
    | SdkError
    | DecryptionError
    | EncryptionError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | PreconditionNotMetError
    | ResourceExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteSecretCommand}
   */
  deleteSecret(
    args: DeleteSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecretCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeSecretCommand}
   */
  describeSecret(
    args: DescribeSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSecretCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link GetRandomPasswordCommand}
   */
  getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetRandomPasswordCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link GetSecretValueCommand}
   */
  getSecretValue(
    args: GetSecretValueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetSecretValueCommandOutput,
    | SdkError
    | DecryptionError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ListSecretsCommand}
   */
  listSecrets(
    args: ListSecretsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSecretsCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidNextTokenError
    | InvalidParameterError
    | InvalidRequestError
  >;

  /**
   * @see {@link ListSecretVersionIdsCommand}
   */
  listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListSecretVersionIdsCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidNextTokenError
    | InvalidParameterError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | MalformedPolicyDocumentError
    | PublicPolicyError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutSecretValueCommand}
   */
  putSecretValue(
    args: PutSecretValueCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutSecretValueCommandOutput,
    | SdkError
    | DecryptionError
    | EncryptionError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | LimitExceededError
    | ResourceExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RemoveRegionsFromReplicationCommand}
   */
  removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveRegionsFromReplicationCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ReplicateSecretToRegionsCommand}
   */
  replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ReplicateSecretToRegionsCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RestoreSecretCommand}
   */
  restoreSecret(
    args: RestoreSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RestoreSecretCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RotateSecretCommand}
   */
  rotateSecret(
    args: RotateSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RotateSecretCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link StopReplicationToReplicaCommand}
   */
  stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopReplicationToReplicaCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateSecretCommand}
   */
  updateSecret(
    args: UpdateSecretCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecretCommandOutput,
    | SdkError
    | DecryptionError
    | EncryptionError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | LimitExceededError
    | MalformedPolicyDocumentError
    | PreconditionNotMetError
    | ResourceExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateSecretVersionStageCommand}
   */
  updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecretVersionStageCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ValidateResourcePolicyCommand}
   */
  validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ValidateResourcePolicyCommandOutput,
    | SdkError
    | InternalServiceError
    | InvalidParameterError
    | InvalidRequestError
    | MalformedPolicyDocumentError
    | ResourceNotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const SecretsManagerService = Context.GenericTag<SecretsManagerService>(
  "@effect-aws/client-secrets-manager/SecretsManagerService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSecretsManagerService = Effect.gen(function* (_) {
  const client = yield* _(SecretsManagerClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (
            e instanceof SecretsManagerServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<SecretsManagerServiceException>
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
  }, {}) as SecretsManagerService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseSecretsManagerServiceLayer = Layer.effect(
  SecretsManagerService,
  makeSecretsManagerService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SecretsManagerServiceLayer = BaseSecretsManagerServiceLayer.pipe(
  Layer.provide(SecretsManagerClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSecretsManagerServiceLayer =
  SecretsManagerServiceLayer.pipe(
    Layer.provide(DefaultSecretsManagerClientConfigLayer),
  );
