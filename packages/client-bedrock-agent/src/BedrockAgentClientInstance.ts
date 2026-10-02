/**
 * @since 1.0.0
 */
import { BedrockAgentClient } from "@aws-sdk/client-bedrock-agent";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as BedrockAgentServiceConfig from "./BedrockAgentServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class BedrockAgentClientInstance extends Context.Service<BedrockAgentClientInstance, BedrockAgentClient>()(
  "@effect-aws/client-bedrock-agent/BedrockAgentClientInstance",
) {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  BedrockAgentServiceConfig.toBedrockAgentClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new BedrockAgentClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.effect(BedrockAgentClientInstance, make);
