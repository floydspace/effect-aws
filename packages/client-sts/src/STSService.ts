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
  GetFederationTokenCommand,
  type GetFederationTokenCommandInput,
  type GetFederationTokenCommandOutput,
  GetSessionTokenCommand,
  type GetSessionTokenCommandInput,
  type GetSessionTokenCommandOutput,
  type STSClient,
  type STSClientConfig,
} from "@aws-sdk/client-sts";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import { Effect, Layer } from "effect";
import type {
  ExpiredTokenError,
  IDPCommunicationError,
  IDPRejectedClaimError,
  InvalidAuthorizationMessageError,
  InvalidIdentityTokenError,
  MalformedPolicyDocumentError,
  PackedPolicyTooLargeError,
  RegionDisabledError,
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
    SdkError | ExpiredTokenError | MalformedPolicyDocumentError | PackedPolicyTooLargeError | RegionDisabledError
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
  ): Effect.Effect<
    GetAccessKeyInfoCommandOutput,
    SdkError
  >;

  /**
   * @see {@link GetCallerIdentityCommand}
   */
  getCallerIdentity(
    args: GetCallerIdentityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCallerIdentityCommandOutput,
    SdkError
  >;

  /**
   * @see {@link GetFederationTokenCommand}
   */
  getFederationToken(
    args: GetFederationTokenCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetFederationTokenCommandOutput,
    SdkError | MalformedPolicyDocumentError | PackedPolicyTooLargeError | RegionDisabledError
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
export const makeSTSService = Effect.gen(function*() {
  const client = yield* Instance.STSClientInstance;

  return Service.fromClientAndCommands<STSService$>(client, commands, AllServiceErrors);
});

/**
 * @since 1.0.0
 * @category models
 */
export class STSService extends Effect.Tag("@effect-aws/client-sts/STSService")<
  STSService,
  STSService$
>() {
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
}
