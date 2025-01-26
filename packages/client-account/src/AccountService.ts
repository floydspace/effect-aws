/**
 * @since 1.0.0
 */
import {
  AcceptPrimaryEmailUpdateCommand,
  type AcceptPrimaryEmailUpdateCommandInput,
  type AcceptPrimaryEmailUpdateCommandOutput,
  type AccountClient,
  type AccountClientConfig,
  AccountServiceException,
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
import { Data, Effect, Layer, Record } from "effect";
import { AccountClientInstance, AccountClientInstanceLayer } from "./AccountClientInstance.js";
import {
  AccountClientInstanceConfig,
  DefaultAccountClientConfigLayer,
  makeDefaultAccountClientInstanceConfig,
} from "./AccountClientInstanceConfig.js";
import type {
  AccessDeniedError,
  ConflictError,
  InternalServerError,
  ResourceNotFoundError,
  TaggedException,
  TooManyRequestsError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors, SdkError } from "./Errors.js";

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
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link DisableRegionCommand}
   */
  disableRegion(
    args: DisableRegionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableRegionCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link EnableRegionCommand}
   */
  enableRegion(
    args: EnableRegionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableRegionCommandOutput,
    | SdkError
    | AccessDeniedError
    | ConflictError
    | InternalServerError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link GetAlternateContactCommand}
   */
  getAlternateContact(
    args: GetAlternateContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAlternateContactCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link GetContactInformationCommand}
   */
  getContactInformation(
    args: GetContactInformationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetContactInformationCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link GetPrimaryEmailCommand}
   */
  getPrimaryEmail(
    args: GetPrimaryEmailCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPrimaryEmailCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | ResourceNotFoundError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link GetRegionOptStatusCommand}
   */
  getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRegionOptStatusCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link ListRegionsCommand}
   */
  listRegions(
    args: ListRegionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRegionsCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link PutAlternateContactCommand}
   */
  putAlternateContact(
    args: PutAlternateContactCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutAlternateContactCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | TooManyRequestsError
    | ValidationError
  >;

  /**
   * @see {@link PutContactInformationCommand}
   */
  putContactInformation(
    args: PutContactInformationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutContactInformationCommandOutput,
    | SdkError
    | AccessDeniedError
    | InternalServerError
    | TooManyRequestsError
    | ValidationError
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
  const client = yield* _(AccountClientInstance);

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
            e instanceof AccountServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<AccountServiceException>
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
  }, {}) as AccountService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class AccountService extends Effect.Tag(
  "@effect-aws/client-account/AccountService",
)<AccountService, AccountService$>() {
  static readonly defaultLayer = Layer.effect(this, makeAccountService).pipe(
    Layer.provide(AccountClientInstanceLayer),
    Layer.provide(DefaultAccountClientConfigLayer),
  );
  static readonly layer = (config: AccountClientConfig) =>
    Layer.effect(this, makeAccountService).pipe(
      Layer.provide(AccountClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          AccountClientInstanceConfig,
          makeDefaultAccountClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: AccountClientConfig) => AccountClient,
  ) =>
    Layer.effect(this, makeAccountService).pipe(
      Layer.provide(
        Layer.effect(
          AccountClientInstance,
          Effect.map(makeDefaultAccountClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias AccountService
 */
export const Account = AccountService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Account.baseLayer instead
 */
export const BaseAccountServiceLayer = Layer.effect(
  AccountService,
  makeAccountService,
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Account.layer instead
 */
export const AccountServiceLayer = BaseAccountServiceLayer.pipe(
  Layer.provide(AccountClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use Account.defaultLayer instead
 */
export const DefaultAccountServiceLayer = AccountService.defaultLayer;
