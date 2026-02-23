/**
 * @since 1.0.0
 */
import { AccountClient } from "@aws-sdk/client-account";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as AccountServiceConfig from "./AccountServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class AccountClientInstance extends ServiceMap.Service<AccountClientInstance, AccountClient>()(
  "@effect-aws/client-account/AccountClientInstance",
) {}

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
export const layer = Layer.effect(AccountClientInstance, make);
