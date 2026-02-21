/**
 * @since 1.0.0
 */
import { OrganizationsClient } from "@aws-sdk/client-organizations";
import { Effect, Layer, ServiceMap } from "effect";
import * as OrganizationsServiceConfig from "./OrganizationsServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class OrganizationsClientInstance extends ServiceMap.Service<OrganizationsClientInstance, OrganizationsClient>()(
  "@effect-aws/client-organizations/OrganizationsClientInstance",
) {}

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
export const layer = Layer.effect(OrganizationsClientInstance, make);
