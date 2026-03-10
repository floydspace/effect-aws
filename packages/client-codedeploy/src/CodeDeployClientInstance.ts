/**
 * @since 1.0.0
 */
import { CodeDeployClient } from "@aws-sdk/client-codedeploy";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
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
