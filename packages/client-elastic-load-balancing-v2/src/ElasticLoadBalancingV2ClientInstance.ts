/**
 * @since 1.0.0
 */
import { ElasticLoadBalancingV2Client } from "@aws-sdk/client-elastic-load-balancing-v2";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ElasticLoadBalancingV2ServiceConfig from "./ElasticLoadBalancingV2ServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class ElasticLoadBalancingV2ClientInstance
  extends Context.Service<ElasticLoadBalancingV2ClientInstance, ElasticLoadBalancingV2Client>()(
    "@effect-aws/client-elastic-load-balancing-v2/ElasticLoadBalancingV2ClientInstance",
  )
{}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  ElasticLoadBalancingV2ServiceConfig.toElasticLoadBalancingV2ClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new ElasticLoadBalancingV2Client(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(ElasticLoadBalancingV2ClientInstance, make);
