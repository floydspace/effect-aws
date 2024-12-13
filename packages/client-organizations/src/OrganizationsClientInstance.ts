/**
 * @since 1.0.0
 */
import { OrganizationsClient } from "@aws-sdk/client-organizations";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultOrganizationsClientConfigLayer,
  OrganizationsClientInstanceConfig,
} from "./OrganizationsClientInstanceConfig";

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
export const makeOrganizationsClientInstance = Effect.map(
  OrganizationsClientInstanceConfig,
  (config) => new OrganizationsClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const OrganizationsClientInstanceLayer = Layer.effect(
  OrganizationsClientInstance,
  makeOrganizationsClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultOrganizationsClientInstanceLayer =
  OrganizationsClientInstanceLayer.pipe(
    Layer.provide(DefaultOrganizationsClientConfigLayer),
  );
