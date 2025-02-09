/**
 * @since 1.0.0
 */
import { CodeDeployClient } from "@aws-sdk/client-codedeploy";
import { Context, Effect, Layer } from "effect";
import * as CodeDeployServiceConfig from "./CodeDeployServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CodeDeployClientInstance extends Context.Tag(
  "@effect-aws/client-codedeploy/CodeDeployClientInstance",
)<CodeDeployClientInstance, CodeDeployClient>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make = Effect.flatMap(
  CodeDeployServiceConfig.toCodeDeployClientConfig,
  (config) =>
    Effect.acquireRelease(
      Effect.sync(() => new CodeDeployClient(config)),
      (client) => Effect.sync(() => client.destroy()),
    ),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const layer = Layer.scoped(CodeDeployClientInstance, make);
