/**
 * @since 1.0.0
 */
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { Effect, Layer, ServiceMap } from "effect";
import * as CognitoIdentityProviderServiceConfig from "./CognitoIdentityProviderServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CognitoIdentityProviderClientInstance
  extends ServiceMap.Service<CognitoIdentityProviderClientInstance, CognitoIdentityProviderClient>()(
    "@effect-aws/client-cognito-identity-provider/CognitoIdentityProviderClientInstance",
  )
{}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  CognitoIdentityProviderServiceConfig.toCognitoIdentityProviderClientConfig,
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
export const layer = Layer.effect(CognitoIdentityProviderClientInstance, make);
