/**
 * @since 1.0.0
 */
import { CodeDeployClient } from "@aws-sdk/client-codedeploy";
import { Context, Effect, Layer } from "effect";
import {
  CodeDeployClientInstanceConfig,
  DefaultCodeDeployClientConfigLayer,
} from "./CodeDeployClientInstanceConfig.js";

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
export const makeCodeDeployClientInstance = Effect.flatMap(
  CodeDeployClientInstanceConfig,
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
export const CodeDeployClientInstanceLayer = Layer.scoped(
  CodeDeployClientInstance,
  makeCodeDeployClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCodeDeployClientInstanceLayer = CodeDeployClientInstanceLayer.pipe(
  Layer.provide(DefaultCodeDeployClientConfigLayer),
);
