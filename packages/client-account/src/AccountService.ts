/**
 * @since 1.0.0
 */
import {
  AcceptPrimaryEmailUpdateCommand,
  type AcceptPrimaryEmailUpdateCommandInput,
  type AcceptPrimaryEmailUpdateCommandOutput,
  type AccountClient,
  type AccountClientConfig,
  DeleteAlternateContactCommand,
  type DeleteAlternateContactCommandInput,
  type DeleteAlternateContactCommandOutput,
  DisableRegionCommand,
  type DisableRegionCommandInput,
  type DisableRegionCommandOutput,
  EnableRegionCommand,
  type EnableRegionCommandInput,
  type EnableRegionCommandOutput,
  GetAlternateContactCommand,
  type GetAlternateContactCommandInput,
  type GetAlternateContactCommandOutput,
  GetContactInformationCommand,
  type GetContactInformationCommandInput,
  type GetContactInformationCommandOutput,
  GetPrimaryEmailCommand,
  type GetPrimaryEmailCommandInput,
  type GetPrimaryEmailCommandOutput,
  GetRegionOptStatusCommand,
  type GetRegionOptStatusCommandInput,
  type GetRegionOptStatusCommandOutput,
  ListRegionsCommand,
  type ListRegionsCommandInput,
  type ListRegionsCommandOutput,
  PutAlternateContactCommand,
  type PutAlternateContactCommandInput,
  type PutAlternateContactCommandOutput,
  PutContactInformationCommand,
  type PutContactInformationCommandInput,
  type PutContactInformationCommandOutput,
  StartPrimaryEmailUpdateCommand,
  type StartPrimaryEmailUpdateCommandInput,
  type StartPrimaryEmailUpdateCommandOutput,
} from "@aws-sdk/client-account";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import * as Instance from "./AccountClientInstance.js";
import * as AccountServiceConfig from "./AccountServiceConfig.js";
import type {
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  TooManyRequestsError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  AcceptPrimaryEmailUpdateCommand,
  DeleteAlternateContactCommand,
  DisableRegionCommand,
  EnableRegionCommand,
  GetAlternateContactCommand,
  GetContactInformationCommand,
  GetPrimaryEmailCommand,
  GetRegionOptStatusCommand,
  ListRegionsCommand,
  PutAlternateContactCommand,
  PutContactInformationCommand,
  StartPrimaryEmailUpdateCommand,
};

interface AccountService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AcceptPrimaryEmailUpdateCommand}
   */
  acceptPrimaryEmailUpdate(
    args: AcceptPrimaryEmailUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptPrimaryEmailUpdateCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link DeleteAlternateContactCommand}
   */
  deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAlternateContactCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link DisableRegionCommand}
   */
  disableRegion(
    args: DisableRegionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableRegionCommandOutput,
    SdkError | AccessDeniedError | ConflictError | InternalServerError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link EnableRegionCommand}
   */
  enableRegion(
    args: EnableRegionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableRegionCommandOutput,
    SdkError | AccessDeniedError | ConflictError | InternalServerError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link GetAlternateContactCommand}
   */
  getAlternateContact(
    args: GetAlternateContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAlternateContactCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link GetContactInformationCommand}
   */
  getContactInformation(
    args: GetContactInformationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetContactInformationCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link GetPrimaryEmailCommand}
   */
  getPrimaryEmail(
    args: GetPrimaryEmailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPrimaryEmailCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | ResourceNotFoundError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link GetRegionOptStatusCommand}
   */
  getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRegionOptStatusCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link ListRegionsCommand}
   */
  listRegions(
    args: ListRegionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRegionsCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link PutAlternateContactCommand}
   */
  putAlternateContact(
    args: PutAlternateContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAlternateContactCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link PutContactInformationCommand}
   */
  putContactInformation(
    args: PutContactInformationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutContactInformationCommandOutput,
    SdkError | AccessDeniedError | InternalServerError | TooManyRequestsError | ValidationError
  >;

  /**
   * @see {@link StartPrimaryEmailUpdateCommand}
   */
  startPrimaryEmailUpdate(
    args: StartPrimaryEmailUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartPrimaryEmailUpdateCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | TooManyRequestsError
    | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeAccountService = Effect.gen(function*(_) {
  const client = yield* _(Instance.AccountClientInstance);

  return Service.fromClientAndCommands<AccountService$>(client, commands, AllServiceErrors);
});

/**
 * @since 1.0.0
 * @category models
 */
export class AccountService extends Effect.Tag("@effect-aws/client-account/AccountService")<
  AccountService,
  AccountService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeAccountService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: AccountService.Config) =>
    Layer.effect(this, makeAccountService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(AccountServiceConfig.setAccountServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: AccountClientConfig) => AccountClient,
  ) =>
    Layer.effect(this, makeAccountService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.AccountClientInstance,
          Effect.map(AccountServiceConfig.toAccountClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace AccountService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<AccountClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
