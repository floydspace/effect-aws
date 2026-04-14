import * as Context from "effect/Context";
import type { LambdaHandler } from "../LambdaHandler.js";
import type { LambdaContext } from "../Types.js";

/** @internal */
export const lambdaEventTag = Context.Service<LambdaHandler.Event>(
  "@effect-aws/lambda/LambdaHandler/Event",
);

/** @internal */
export const lambdaContextTag = Context.Service<LambdaContext>(
  "@effect-aws/lambda/LambdaHandler/Context",
);
