/**
 * @since 1.0.0
 */
import { CodeDeployClient } from "@aws-sdk/client-codedeploy";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ServiceMap from "effect/ServiceMap";
import * as CodeDeployServiceConfig from "./CodeDeployServiceConfig.js";

/**
 * @since 1.0.0
 * @category tags
 */
export class CodeDeployClientInstance extends ServiceMap.Service<CodeDeployClientInstance, CodeDeployClient>()(
  "@effect-aws/client-codedeploy/CodeDeployClientInstance",
) {}

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
export const layer = Layer.effect(CodeDeployClientInstance, make);
