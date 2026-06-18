/**
 * @since 1.0.0
 */
import { BedrockAgentCoreControlClient } from "@aws-sdk/client-bedrock-agentcore-control";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as BedrockAgentCoreControlServiceConfig from "./BedrockAgentCoreControlServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class BedrockAgentCoreControlClientInstance extends Context.Tag(
  "@effect-aws/client-bedrock-agentcore-control/BedrockAgentCoreControlClientInstance",
)<BedrockAgentCoreControlClientInstance, BedrockAgentCoreControlClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  BedrockAgentCoreControlServiceConfig.toBedrockAgentCoreControlClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new BedrockAgentCoreControlClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(BedrockAgentCoreControlClientInstance, make);
