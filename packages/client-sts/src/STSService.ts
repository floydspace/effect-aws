/**
 * @since 1.0.0
 */
import {
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
  GetDelegatedAccessTokenCommand,
  type GetDelegatedAccessTokenCommandInput,
  type GetDelegatedAccessTokenCommandOutput,
  GetFederationTokenCommand,
  type GetFederationTokenCommandInput,
  type GetFederationTokenCommandOutput,
  GetSessionTokenCommand,
  type GetSessionTokenCommandInput,
  type GetSessionTokenCommandOutput,
  GetWebIdentityTokenCommand,
  type GetWebIdentityTokenCommandInput,
  type GetWebIdentityTokenCommandOutput,
  type STSClient,
  type STSClientConfig,
} from "@aws-sdk/client-sts";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer, ServiceMap } from "effect";
import type {
  ExpiredTokenError,
  ExpiredTradeInTokenError,
  IDPCommunicationError,
  IDPRejectedClaimError,
  InvalidAuthorizationMessageError,
  InvalidIdentityTokenError,
  JWTPayloadSizeExceededError,
  MalformedPolicyDocumentError,
  OutboundWebIdentityFederationDisabledError,
  PackedPolicyTooLargeError,
  RegionDisabledError,
  SdkError,
  SessionDurationEscalationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./STSClientInstance.js";
import * as STSServiceConfig from "./STSServiceConfig.js";

const commands = {
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  AssumeRootCommand,
  DecodeAuthorizationMessageCommand,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetDelegatedAccessTokenCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand,
  GetWebIdentityTokenCommand,
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
    | Cause.TimeoutError
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
    | Cause.TimeoutError
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
    | Cause.TimeoutError
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
    Cause.TimeoutError | SdkError | ExpiredTokenError | RegionDisabledError
  >;

  /**
   * @see {@link DecodeAuthorizationMessageCommand}
   */
  decodeAuthorizationMessage(
    args: DecodeAuthorizationMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DecodeAuthorizationMessageCommandOutput,
    Cause.TimeoutError | SdkError | InvalidAuthorizationMessageError
  >;

  /**
   * @see {@link GetAccessKeyInfoCommand}
   */
  getAccessKeyInfo(
    args: GetAccessKeyInfoCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetAccessKeyInfoCommandOutput,
    Cause.TimeoutError | SdkError
  >;

  /**
   * @see {@link GetCallerIdentityCommand}
   */
  getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCallerIdentityCommandOutput,
    Cause.TimeoutError | SdkError
  >;

  /**
   * @see {@link GetDelegatedAccessTokenCommand}
   */
  getDelegatedAccessToken(
    args: GetDelegatedAccessTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDelegatedAccessTokenCommandOutput,
    Cause.TimeoutError | SdkError | ExpiredTradeInTokenError | PackedPolicyTooLargeError | RegionDisabledError
  >;

  /**
   * @see {@link GetFederationTokenCommand}
   */
  getFederationToken(
    args: GetFederationTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFederationTokenCommandOutput,
    Cause.TimeoutError | SdkError | MalformedPolicyDocumentError | PackedPolicyTooLargeError | RegionDisabledError
  >;

  /**
   * @see {@link GetSessionTokenCommand}
   */
  getSessionToken(
    args: GetSessionTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSessionTokenCommandOutput,
    Cause.TimeoutError | SdkError | RegionDisabledError
  >;

  /**
   * @see {@link GetWebIdentityTokenCommand}
   */
  getWebIdentityToken(
    args: GetWebIdentityTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWebIdentityTokenCommandOutput,
    | Cause.TimeoutError
    | SdkError
    | JWTPayloadSizeExceededError
    | OutboundWebIdentityFederationDisabledError
    | SessionDurationEscalationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSTSService = Effect.gen(function*() {
  const client = yield* Instance.STSClientInstance;

  return yield* Service.fromClientAndCommands<STSService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: STSServiceConfig.toSTSClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class STSService extends ServiceMap.Service<
  STSService,
  STSService$
>()("@effect-aws/client-sts/STSService") {
  static readonly defaultLayer = Layer.effect(this, makeSTSService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: STSService.Config) =>
    Layer.effect(this, makeSTSService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(STSServiceConfig.setSTSServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: STSClientConfig) => STSClient,
  ) =>
    Layer.effect(this, makeSTSService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.STSClientInstance,
          Effect.map(STSServiceConfig.toSTSClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace STSService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<STSClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = STSService$;
}
