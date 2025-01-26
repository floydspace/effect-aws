/**
 * @since 1.0.0
 */
import { OrganizationsClient } from "@aws-sdk/client-organizations";
import { Context, Effect, Layer } from "effect";
import {
  DefaultOrganizationsClientConfigLayer,
  OrganizationsClientInstanceConfig,
} from "./OrganizationsClientInstanceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class OrganizationsClientInstance extends Context.Tag(
  "@effect-aws/client-organizations/OrganizationsClientInstance",
)<OrganizationsClientInstance, OrganizationsClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeOrganizationsClientInstance = Effect.flatMap(
  OrganizationsClientInstanceConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new OrganizationsClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const OrganizationsClientInstanceLayer = Layer.scoped(
  OrganizationsClientInstance,
  makeOrganizationsClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultOrganizationsClientInstanceLayer = OrganizationsClientInstanceLayer.pipe(
  Layer.provide(DefaultOrganizationsClientConfigLayer),
);
