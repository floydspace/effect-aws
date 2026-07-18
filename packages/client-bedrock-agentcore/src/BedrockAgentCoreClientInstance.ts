/**
 * @since 1.0.0
 */
import { BedrockAgentCoreClient } from "@aws-sdk/client-bedrock-agentcore";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as BedrockAgentCoreServiceConfig from "./BedrockAgentCoreServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class BedrockAgentCoreClientInstance
  extends Context.Service<BedrockAgentCoreClientInstance, BedrockAgentCoreClient>()(
    "@effect-aws/client-bedrock-agentcore/BedrockAgentCoreClientInstance",
  )
{}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  BedrockAgentCoreServiceConfig.toBedrockAgentCoreClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new BedrockAgentCoreClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(BedrockAgentCoreClientInstance, make);
