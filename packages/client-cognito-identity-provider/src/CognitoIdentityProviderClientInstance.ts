/**
 * @since 1.0.0
 */
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { Context, Effect, Layer } from "effect";
import * as CognitoIdentityProviderServiceConfig from "./CognitoIdentityProviderServiceConfig.js";

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
export const layer = Layer.scoped(CognitoIdentityProviderClientInstance, make);
