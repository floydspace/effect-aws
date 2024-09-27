/**
 * @since 1.0.0
 */
import {
  SecretsManagerServiceException,
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
import { Data, Effect, Layer, Record } from "effect";
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

interface HttpHandlerOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  requestTimeout?: number;
}

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

interface SecretsManagerService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchGetSecretValueCommand}
   */
  batchGetSecretValue(
    args: BatchGetSecretValueCommandInput,
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
    options?: HttpHandlerOptions,
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
 * @category models
 */
export class SecretsManagerService extends Effect.Tag(
  "@effect-aws/client-secrets-manager/SecretsManagerService",
)<SecretsManagerService, SecretsManagerService$>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSecretsManagerService = Effect.gen(function* (_) {
  const client = yield* _(SecretsManagerClientInstance);

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
  }, {}) as SecretsManagerService$;
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
