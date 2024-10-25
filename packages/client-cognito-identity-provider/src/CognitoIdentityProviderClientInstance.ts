/**
 * @since 1.0.0
 */
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultCognitoIdentityProviderClientConfigLayer,
  CognitoIdentityProviderClientInstanceConfig,
} from "./CognitoIdentityProviderClientInstanceConfig";

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
export const makeCognitoIdentityProviderClientInstance = Effect.map(
  CognitoIdentityProviderClientInstanceConfig,
  (config) => new CognitoIdentityProviderClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CognitoIdentityProviderClientInstanceLayer = Layer.effect(
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
