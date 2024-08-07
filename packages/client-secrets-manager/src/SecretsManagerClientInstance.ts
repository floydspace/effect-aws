/**
 * @since 1.0.0
 */
import { SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultSecretsManagerClientConfigLayer,
  SecretsManagerClientInstanceConfig,
} from "./SecretsManagerClientInstanceConfig";

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
export const makeSecretsManagerClientInstance = Effect.map(
  SecretsManagerClientInstanceConfig,
  (config) => new SecretsManagerClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const SecretsManagerClientInstanceLayer = Layer.effect(
  SecretsManagerClientInstance,
  makeSecretsManagerClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultSecretsManagerClientInstanceLayer =
  SecretsManagerClientInstanceLayer.pipe(
    Layer.provide(DefaultSecretsManagerClientConfigLayer),
  );
