import { Context } from "effect";
import type { LambdaHandler } from "../LambdaHandler.js";
import type { LambdaContext } from "../Types.js";

/** @internal */
export const lambdaEventTag = Context.GenericTag<LambdaHandler.Event>(
  "@effect-aws/lambda/LambdaHandler/Event",
);

/** @internal */
export const lambdaContextTag = Context.GenericTag<LambdaContext>(
  "@effect-aws/lambda/LambdaHandler/Context",
);
