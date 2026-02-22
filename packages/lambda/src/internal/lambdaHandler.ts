import { ServiceMap } from "effect";
import type { LambdaHandler } from "../LambdaHandler.js";
import type { LambdaContext } from "../Types.js";

/** @internal */
export const lambdaEventTag = ServiceMap.Service<LambdaHandler.Event>(
  "@effect-aws/lambda/LambdaHandler/Event",
);

/** @internal */
export const lambdaContextTag = ServiceMap.Service<LambdaContext>(
  "@effect-aws/lambda/LambdaHandler/Context",
);
