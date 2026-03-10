/**
 * @since 1.0.0
 */
import { SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as SecretsManagerServiceConfig from "./SecretsManagerServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class SecretsManagerClientInstance extends Context.Tag(
  "@effect-aws/client-secrets-manager/SecretsManagerClientInstance",
)<SecretsManagerClientInstance, SecretsManagerClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  SecretsManagerServiceConfig.toSecretsManagerClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new SecretsManagerClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(SecretsManagerClientInstance, make);
