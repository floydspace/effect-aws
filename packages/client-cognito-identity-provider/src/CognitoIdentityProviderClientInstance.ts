/**
 * @since 1.0.0
 */
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { Context, Effect, Layer } from "effect";
import {
  DefaultCognitoIdentityProviderClientConfigLayer,
  CognitoIdentityProviderClientInstanceConfig,
} from "./CognitoIdentityProviderClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CognitoIdentityProviderClientInstance extends Context.Tag(
  "@effect-aws/client-cognito-identity-provider/CognitoIdentityProviderClientInstance",
)<CognitoIdentityProviderClientInstance, CognitoIdentityProviderClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCognitoIdentityProviderClientInstance = Effect.flatMap(
  CognitoIdentityProviderClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CognitoIdentityProviderClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CognitoIdentityProviderClientInstanceLayer = Layer.scoped(
  CognitoIdentityProviderClientInstance,
  makeCognitoIdentityProviderClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCognitoIdentityProviderClientInstanceLayer =
  CognitoIdentityProviderClientInstanceLayer.pipe(
    Layer.provide(DefaultCognitoIdentityProviderClientConfigLayer),
  );
