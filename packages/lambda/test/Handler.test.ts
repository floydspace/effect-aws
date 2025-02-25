import type { EffectHandler } from "@effect-aws/lambda";
import { makeLambda } from "@effect-aws/lambda";
import type { Context as LambdaContext, SNSEvent } from "aws-lambda";
import { Context, Effect, Layer } from "effect";
import { describe, expect, it, vi } from "vitest";

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

  it("should gracefully shutdown the runtime", async () => {
    const event: SNSEvent = { Records: [] };
    const context = {} as LambdaContext;

    const releaseFn = vi.fn();

    const resource = Effect.acquireRelease(
      Effect.succeed("resource acquired"),
      () => {
        releaseFn();
        return Effect.void;
      },
    );

    interface FooService {
      bar: () => Effect.Effect<string>;
    }
    const FooService = Context.GenericTag<FooService>("@services/FooService");
    const FooServiceLive = Layer.scoped(
      FooService,
      Effect.gen(function*() {
        yield* resource;

        return FooService.of({ bar: () => Effect.succeed("Not implemented") });
      }),
    );

    const myEffectHandler: EffectHandler<SNSEvent, FooService> = () =>
      Effect.gen(function*() {
        const service = yield* FooService;
        return yield* service.bar();
      });

    const handler = makeLambda({
      handler: myEffectHandler,
      layer: FooServiceLive,
    });

    const result = await handler(event, context);

    expect(result).toBe("Not implemented");

    expect(releaseFn).toHaveBeenCalledTimes(0);

    process.emit("SIGTERM", "SIGTERM");

    expect(releaseFn).toHaveBeenCalledTimes(1);
  });
});
