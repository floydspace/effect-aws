/**
 * @since 1.0.0
 */
import { AccountClient } from "@aws-sdk/client-account";
import { Context, Effect, Layer } from "effect";
import { AccountClientInstanceConfig, DefaultAccountClientConfigLayer } from "./AccountClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class AccountClientInstance extends Context.Tag(
  "@effect-aws/client-account/AccountClientInstance",
)<AccountClientInstance, AccountClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeAccountClientInstance = Effect.flatMap(
  AccountClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new AccountClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const AccountClientInstanceLayer = Layer.scoped(
  AccountClientInstance,
  makeAccountClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultAccountClientInstanceLayer = AccountClientInstanceLayer.pipe(
  Layer.provide(DefaultAccountClientConfigLayer),
);
