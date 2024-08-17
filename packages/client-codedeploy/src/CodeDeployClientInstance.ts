/**
 * @since 1.0.0
 */
import { CodeDeployClient } from "@aws-sdk/client-codedeploy";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import {
  DefaultCodeDeployClientConfigLayer,
  CodeDeployClientInstanceConfig,
} from "./CodeDeployClientInstanceConfig";

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
export const makeCodeDeployClientInstance = Effect.map(
  CodeDeployClientInstanceConfig,
  (config) => new CodeDeployClient(config),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CodeDeployClientInstanceLayer = Layer.effect(
  CodeDeployClientInstance,
  makeCodeDeployClientInstance,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCodeDeployClientInstanceLayer =
  CodeDeployClientInstanceLayer.pipe(
    Layer.provide(DefaultCodeDeployClientConfigLayer),
  );
