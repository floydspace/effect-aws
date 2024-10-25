/**
 * @since 1.0.0
 */
import { AccountClient } from "@aws-sdk/client-account";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultAccountClientConfigLayer,
  AccountClientInstanceConfig,
} from "./AccountClientInstanceConfig";

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
export const makeAccountClientInstance = Effect.map(
  AccountClientInstanceConfig,
  (config) => new AccountClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const AccountClientInstanceLayer = Layer.effect(
  AccountClientInstance,
  makeAccountClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultAccountClientInstanceLayer =
  AccountClientInstanceLayer.pipe(
    Layer.provide(DefaultAccountClientConfigLayer),
  );
