/**
 * @since 1.4.0
 */
import * as LambdaHandler from "./LambdaHandler.js";
import * as LambdaRuntime from "./LambdaRuntime.js";

/**
 * Makes a lambda handler from the given EffectHandler and optional global layer.
 * The global layer is used to provide a runtime which will gracefully handle lambda termination during down-scaling.
 *
 * @example
 * import { makeLambda, LambdaContext } from "@effect-aws/lambda";
 * import { Effect } from "effect";
 *
 * const effectHandler = (event: unknown, context: LambdaContext) => {
 *  return Effect.logInfo("Hello, world!");
 * };
 *
 * export const handler = makeLambda(effectHandler);
 *
 * @example
 * import { makeLambda, LambdaContext } from "@effect-aws/lambda";
 * import { Effect, Logger } from "effect";
 *
 * const effectHandler = (event: unknown, context: LambdaContext) => {
 *  return Effect.logInfo("Hello, world!");
 * };
 *
 * const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);
 *
 * export const handler = makeLambda({
 *  handler: effectHandler,
 *  layer: LambdaLayer,
 * });
 *
 * @since 1.0.0
 * @category constructors
 * @deprecated Use `LambdaHandler.make` instead.
 */
export const makeLambda = LambdaHandler.make;

/**
 * Makes a managed runtime from a layer asynchronously, designed for AWS Lambda.
 * All finalizers will be executed on process termination or interruption.
 *
 * @example
 * import { fromLayer, LambdaContext } from "@effect-aws/lambda";
 * import { Effect, Logger } from "effect";
 *
 * const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);
 *
 * const lambdaRuntime = fromLayer(LambdaLayer);
 *
 * export const handler = async (event: unknown, context: LambdaContext) => {
 *  return Effect.logInfo("Hello, world!").pipe(lambdaRuntime.runPromise);
 * };
 *
 * @since 1.0.0
 * @category constructors
 * @deprecated Use `LambdaRuntime.fromLayer` instead.
 */
export const fromLayer = LambdaRuntime.fromLayer;
