import { Context } from "effect";
import type { LambdaHandler } from "../LambdaHandler.js";

/** @internal */
export const lambdaEventTag = Context.GenericTag<LambdaHandler.Event>(
  "@effect-aws/lambda/LambdaHandler/Event",
);

/** @internal */
export const lambdaContextTag = Context.GenericTag<LambdaHandler.Context>(
  "@effect-aws/lambda/LambdaHandler/Context",
);
