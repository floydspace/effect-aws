import { Context } from "effect";
import { pipeArguments } from "effect/Pipeable";
import type * as LambdaHandler from "../LambdaHandler.js";
import type { EffectHandler } from "../Types.js";

/** @internal */
export const TypeId: LambdaHandler.TypeId = Symbol.for("@effect-aws/lambda/LambdaHandler") as LambdaHandler.TypeId;

const Proto = {
  [TypeId]: TypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
};

/** @internal */
export const make = <T, A, E = never, R = never>(
  handler: EffectHandler<T, R, E, A>,
): LambdaHandler.LambdaHandler<T, A, E, R> => Object.assign(Object.create(Proto), { handler });

/** @internal */
export const lambdaEventTag = Context.GenericTag<LambdaHandler.LambdaHandler.Event>(
  "@effect-aws/lambda/LambdaHandler/Event",
);

/** @internal */
export const lambdaContextTag = Context.GenericTag<LambdaHandler.LambdaHandler.Context>(
  "@effect-aws/lambda/LambdaHandler/Context",
);
