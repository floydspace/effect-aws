import type { EffectHandler } from "@effect-aws/lambda";
import { makeLambda } from "@effect-aws/lambda";
import type { Context as LambdaContext, SNSEvent } from "aws-lambda";
import { Context, Effect, Layer } from "effect";
import { describe, expect, it } from "vitest";

describe("makeLambda", () => {
  it("should call the handler function without dependencies", async () => {
    const event: SNSEvent = { Records: [] };
    const context = {} as LambdaContext;

    const myEffectHandler: EffectHandler<SNSEvent, never> = () => {
      return Effect.succeed("Hello, World!");
    };

    const handler = makeLambda(myEffectHandler);

    const result = await handler(event, context);

    expect(result).toBe("Hello, World!");
  });

  it("should call the handler function with dependencies", async () => {
    const event: SNSEvent = { Records: [] };
    const context = {} as LambdaContext;

    interface FooService {
      bar: () => Effect.Effect<string>;
    }
    const FooService = Context.GenericTag<FooService>("@services/FooService");
    const FooServiceLive = Layer.succeed(
      FooService,
      FooService.of({ bar: () => Effect.succeed("Not implemented") }),
    );

    const myEffectHandler: EffectHandler<SNSEvent, FooService> = () =>
      Effect.gen(function*() {
        const service = yield* FooService;
        return yield* service.bar();
      });

    const handler = makeLambda(myEffectHandler, FooServiceLive);

    const result = await handler(event, context);

    expect(result).toBe("Not implemented");
  });
});
