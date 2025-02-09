/**
 * @since 1.0.0
 */
import { AccountClient } from "@aws-sdk/client-account";
import { Context, Effect, Layer } from "effect";
import * as AccountServiceConfig from "./AccountServiceConfig.js";

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
export const make = Effect.flatMap(
  AccountServiceConfig.toAccountClientConfig,
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
export const layer = Layer.scoped(AccountClientInstance, make);
