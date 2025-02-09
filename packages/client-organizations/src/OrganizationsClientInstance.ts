/**
 * @since 1.0.0
 */
import { OrganizationsClient } from "@aws-sdk/client-organizations";
import { Context, Effect, Layer } from "effect";
import * as OrganizationsServiceConfig from "./OrganizationsServiceConfig.js";

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
export const make = Effect.flatMap(
  OrganizationsServiceConfig.toOrganizationsClientConfig,
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
export const layer = Layer.scoped(OrganizationsClientInstance, make);
