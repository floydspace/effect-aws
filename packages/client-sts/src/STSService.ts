/**
 * @since 1.0.0
 */
import {
  STSServiceException,
  type STSClient,
  type STSClientConfig,
  AssumeRoleCommand,
  type AssumeRoleCommandInput,
  type AssumeRoleCommandOutput,
  AssumeRoleWithSAMLCommand,
  type AssumeRoleWithSAMLCommandInput,
  type AssumeRoleWithSAMLCommandOutput,
  AssumeRoleWithWebIdentityCommand,
  type AssumeRoleWithWebIdentityCommandInput,
  type AssumeRoleWithWebIdentityCommandOutput,
  AssumeRootCommand,
  type AssumeRootCommandInput,
  type AssumeRootCommandOutput,
  DecodeAuthorizationMessageCommand,
  type DecodeAuthorizationMessageCommandInput,
  type DecodeAuthorizationMessageCommandOutput,
  GetAccessKeyInfoCommand,
  type GetAccessKeyInfoCommandInput,
  type GetAccessKeyInfoCommandOutput,
  GetCallerIdentityCommand,
  type GetCallerIdentityCommandInput,
  type GetCallerIdentityCommandOutput,
  GetFederationTokenCommand,
  type GetFederationTokenCommandInput,
  type GetFederationTokenCommandOutput,
  GetSessionTokenCommand,
  type GetSessionTokenCommandInput,
  type GetSessionTokenCommandOutput,
} from "@aws-sdk/client-sts";
import { Data, Effect, Layer, Record } from "effect";
import {
  AllServiceErrors,
  ExpiredTokenError,
  IDPCommunicationError,
  IDPRejectedClaimError,
  InvalidAuthorizationMessageError,
  InvalidIdentityTokenError,
  MalformedPolicyDocumentError,
  PackedPolicyTooLargeError,
  RegionDisabledError,
  SdkError,
  TaggedException,
} from "./Errors";
import { STSClientInstance, STSClientInstanceLayer } from "./STSClientInstance";
import {
  DefaultSTSClientConfigLayer,
  makeDefaultSTSClientInstanceConfig,
  STSClientInstanceConfig,
} from "./STSClientInstanceConfig";

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
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  AssumeRootCommand,
  DecodeAuthorizationMessageCommand,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand,
};

interface STSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AssumeRoleCommand}
   */
  assumeRole(
    args: AssumeRoleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssumeRoleCommandOutput,
    | SdkError
    | ExpiredTokenError
    | MalformedPolicyDocumentError
    | PackedPolicyTooLargeError
    | RegionDisabledError
  >;

  /**
   * @see {@link AssumeRoleWithSAMLCommand}
   */
  assumeRoleWithSAML(
    args: AssumeRoleWithSAMLCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssumeRoleWithSAMLCommandOutput,
    | SdkError
    | ExpiredTokenError
    | IDPRejectedClaimError
    | InvalidIdentityTokenError
    | MalformedPolicyDocumentError
    | PackedPolicyTooLargeError
    | RegionDisabledError
  >;

  /**
   * @see {@link AssumeRoleWithWebIdentityCommand}
   */
  assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssumeRoleWithWebIdentityCommandOutput,
    | SdkError
    | ExpiredTokenError
    | IDPCommunicationError
    | IDPRejectedClaimError
    | InvalidIdentityTokenError
    | MalformedPolicyDocumentError
    | PackedPolicyTooLargeError
    | RegionDisabledError
  >;

  /**
   * @see {@link AssumeRootCommand}
   */
  assumeRoot(
    args: AssumeRootCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssumeRootCommandOutput,
    SdkError | ExpiredTokenError | RegionDisabledError
  >;

  /**
   * @see {@link DecodeAuthorizationMessageCommand}
   */
  decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DecodeAuthorizationMessageCommandOutput,
    SdkError | InvalidAuthorizationMessageError
  >;

  /**
   * @see {@link GetAccessKeyInfoCommand}
   */
  getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<GetAccessKeyInfoCommandOutput, SdkError>;

  /**
   * @see {@link GetCallerIdentityCommand}
   */
  getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<GetCallerIdentityCommandOutput, SdkError>;

  /**
   * @see {@link GetFederationTokenCommand}
   */
  getFederationToken(
    args: GetFederationTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFederationTokenCommandOutput,
    | SdkError
    | MalformedPolicyDocumentError
    | PackedPolicyTooLargeError
    | RegionDisabledError
  >;

  /**
   * @see {@link GetSessionTokenCommand}
   */
  getSessionToken(
    args: GetSessionTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSessionTokenCommandOutput,
    SdkError | RegionDisabledError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSTSService = Effect.gen(function* (_) {
  const client = yield* _(STSClientInstance);

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
            e instanceof STSServiceException &&
            AllServiceErrors.includes(e.name)
          ) {
            const ServiceException = Data.tagged<
              TaggedException<STSServiceException>
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
  }, {}) as STSService$;
});

/**
 * @since 1.0.0
 * @category models
 */
export class STSService extends Effect.Tag("@effect-aws/client-sts/STSService")<
  STSService,
  STSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSTSService).pipe(
    Layer.provide(STSClientInstanceLayer),
    Layer.provide(DefaultSTSClientConfigLayer),
  );
  static readonly layer = (config: STSClientConfig) =>
    Layer.effect(this, makeSTSService).pipe(
      Layer.provide(STSClientInstanceLayer),
      Layer.provide(
        Layer.effect(
          STSClientInstanceConfig,
          makeDefaultSTSClientInstanceConfig.pipe(
            Effect.map((defaultConfig) => ({ ...defaultConfig, ...config })),
          ),
        ),
      ),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: STSClientConfig) => STSClient,
  ) =>
    Layer.effect(this, makeSTSService).pipe(
      Layer.provide(
        Layer.effect(
          STSClientInstance,
          Effect.map(makeDefaultSTSClientInstanceConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 * @category models
 * @alias STSService
 */
export const STS = STSService;

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use STS.baseLayer instead
 */
export const BaseSTSServiceLayer = Layer.effect(STSService, makeSTSService);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use STS.layer instead
 */
export const STSServiceLayer = BaseSTSServiceLayer.pipe(
  Layer.provide(STSClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 * @deprecated use STS.defaultLayer instead
 */
export const DefaultSTSServiceLayer = STSService.defaultLayer;
