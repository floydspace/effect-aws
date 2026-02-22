import type {
  ALBResult,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyResultV2,
  EffectHandler,
  LambdaContext,
  SNSEvent,
} from "@effect-aws/lambda";
import { LambdaHandler } from "@effect-aws/lambda";
import { Effect, Layer, Schema, ServiceMap } from "effect";
import { HttpEffect, HttpServer, HttpServerResponse } from "effect/unstable/http";
import { HttpApi, HttpApiBuilder, HttpApiEndpoint, HttpApiGroup, HttpApiSchema } from "effect/unstable/httpapi";
import { describe, expect, it, vi } from "vitest";
import { albEvent } from "./fixtures/alb-event.js";
import { apiGatewayV1Event } from "./fixtures/api-gateway-v1-event.js";
import { apiGatewayV2Event } from "./fixtures/api-gateway-v2-event.js";

describe("LambdaHandler", () => {
  describe("LambdaHandler.make", () => {
    it("should call the handler function without dependencies", async () => {
      const event: SNSEvent = { Records: [] };
      const context = {} as LambdaContext;

      const myEffectHandler: EffectHandler<SNSEvent, never> = () => {
        return Effect.succeed("Hello, World!");
      };

      const handler = LambdaHandler.make(myEffectHandler);

      const result = await handler(event, context);

      expect(result).toBe("Hello, World!");
    });

    it("should call the handler function with dependencies", async () => {
      const event: SNSEvent = { Records: [] };
      const context = {} as LambdaContext;

      interface FooService {
        bar: () => Effect.Effect<string>;
      }
      const FooService = ServiceMap.Service<FooService>("@services/FooService");
      const FooServiceLive = Layer.succeed(
        FooService,
        FooService.of({ bar: () => Effect.succeed("Not implemented") }),
      );

      const myEffectHandler: EffectHandler<SNSEvent, FooService> = () =>
        Effect.gen(function*() {
          const service = yield* FooService;
          return yield* service.bar();
        });

      const handler = LambdaHandler.make({ handler: myEffectHandler, layer: FooServiceLive });

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
      const FooService = ServiceMap.Service<FooService>("@services/FooService");
      const FooServiceLive = Layer.effect(
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

      const handler = LambdaHandler.make({
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

  describe("LambdaHandler.fromHttpApi", () => {
    it("should handle APIGatewayProxyEvent", async () => {
      const context = {
        functionVersion: "$LATEST",
        functionName: "demo-effect-app-dev-api",
        invokedFunctionArn: "arn:aws:lambda:eu-fake-1:000000000000:function:demo-effect-app-dev-api",
        awsRequestId: "8ad41330-f092-4037-bc7c-63ffb7d6d4e7",
      } as LambdaContext;

      const hello = HttpApiEndpoint.get("hello", `/hello`, {
        success: Schema.String.pipe(HttpApiSchema.asText()),
      });

      const quotesGroup = HttpApiGroup.make("hello").add(hello);

      const MyApi = HttpApi.make("MyApi").add(quotesGroup);

      const HelloLive = HttpApiBuilder.group(
        MyApi,
        "hello",
        (handlers) =>
          handlers.handle(
            "hello",
            () =>
              Effect.gen(function*() {
                yield* HttpEffect.appendPreResponseHandler((_req, response) =>
                  Effect.orDie(
                    HttpServerResponse.setCookie(response, "cookie key", "cookie value"),
                  )
                );

                const event = yield* LambdaHandler.event<APIGatewayProxyEvent>();
                const context = yield* LambdaHandler.context();

                expect(event).toBeDefined();
                expect(context).toBeDefined();

                return yield* Effect.succeed("Hello, World!");
              }),
          ),
      );

      const MyApiLive = HttpApiBuilder.layer(MyApi).pipe(
        Layer.provide(HelloLive),
        Layer.provide(HttpServer.layerServices),
      );

      const handler = LambdaHandler.fromHttpApi(MyApiLive);

      const result = await handler(apiGatewayV1Event, context);

      expect(result).toStrictEqual(
        {
          body: "Hello, World!",
          statusCode: 200,
          headers: {
            "content-length": "13",
            "content-type": "text/plain",
            "set-cookie": "cookie key=cookie%20value",
          },
          multiValueHeaders: {
            "content-length": ["13"],
            "content-type": ["text/plain"],
            "set-cookie": ["cookie key=cookie%20value"],
          },
          isBase64Encoded: false,
        } satisfies APIGatewayProxyResult,
      );
    });

    it("should handle APIGatewayProxyEventV2", async () => {
      const context = {
        functionVersion: "$LATEST",
        functionName: "demo-effect-app-dev-api",
        invokedFunctionArn: "arn:aws:lambda:eu-fake-1:000000000000:function:demo-effect-app-dev-api",
        awsRequestId: "8ad41330-f092-4037-bc7c-63ffb7d6d4e7",
      } as LambdaContext;

      const hello = HttpApiEndpoint.post("hello", `/my/path`, {
        success: Schema.String.pipe(HttpApiSchema.asText()),
      });

      const quotesGroup = HttpApiGroup.make("hello").add(hello);

      const MyApi = HttpApi.make("MyApi").add(quotesGroup);

      const HelloLive = HttpApiBuilder.group(
        MyApi,
        "hello",
        (handlers) =>
          handlers.handle(
            "hello",
            () =>
              HttpEffect.appendPreResponseHandler((_req, response) =>
                Effect.orDie(
                  HttpServerResponse.setCookie(response, "cookie key", "cookie value"),
                )
              ).pipe(
                Effect.flatMap(() => Effect.succeed("Hello, World!")),
              ),
          ),
      );

      const MyApiLive = HttpApiBuilder.layer(MyApi).pipe(
        Layer.provide(HelloLive),
        Layer.provide(HttpServer.layerServices),
      );

      const handler = LambdaHandler.fromHttpApi(MyApiLive);

      const result = await handler(apiGatewayV2Event, context);

      expect(result).toStrictEqual(
        {
          body: "Hello, World!",
          statusCode: 200,
          headers: {
            "content-length": "13",
            "content-type": "text/plain",
          },
          cookies: [
            "cookie key=cookie%20value",
          ],
          isBase64Encoded: false,
        } satisfies APIGatewayProxyResultV2,
      );
    });

    it("should handle ALBEvent", async () => {
      const context = {
        functionVersion: "$LATEST",
        functionName: "demo-effect-app-dev-api",
        invokedFunctionArn: "arn:aws:lambda:eu-fake-1:000000000000:function:demo-effect-app-dev-api",
        awsRequestId: "8ad41330-f092-4037-bc7c-63ffb7d6d4e7",
      } as LambdaContext;

      const hello = HttpApiEndpoint.post("hello", `/users`, {
        success: Schema.String.pipe(HttpApiSchema.asText()),
      });

      const quotesGroup = HttpApiGroup.make("hello").add(hello);

      const MyApi = HttpApi.make("MyApi").add(quotesGroup);

      const HelloLive = HttpApiBuilder.group(
        MyApi,
        "hello",
        (handlers) =>
          handlers.handle(
            "hello",
            () =>
              HttpEffect.appendPreResponseHandler((_req, response) =>
                Effect.orDie(
                  HttpServerResponse.setCookie(response, "cookie key", "cookie value"),
                )
              ).pipe(
                Effect.flatMap(() => Effect.succeed("Hello, World!")),
              ),
          ),
      );

      const MyApiLive = HttpApiBuilder.layer(MyApi).pipe(
        Layer.provide(HelloLive),
        Layer.provide(HttpServer.layerServices),
      );

      const handler = LambdaHandler.fromHttpApi(MyApiLive);

      const result = await handler(albEvent, context);

      expect(result).toStrictEqual(
        {
          body: "Hello, World!",
          statusCode: 200,
          headers: undefined,
          multiValueHeaders: {
            "content-length": ["13"],
            "content-type": ["text/plain"],
            "set-cookie": ["cookie key=cookie%20value"],
          },
          isBase64Encoded: false,
        } satisfies ALBResult,
      );
    });

    it("should handle as 404", async () => {
      const context = {
        functionVersion: "$LATEST",
        functionName: "demo-effect-app-dev-api",
        invokedFunctionArn: "arn:aws:lambda:eu-fake-1:000000000000:function:demo-effect-app-dev-api",
        awsRequestId: "8ad41330-f092-4037-bc7c-63ffb7d6d4e7",
      } as LambdaContext;

      const hello = HttpApiEndpoint.get("hello", `/no-route`, {
        success: Schema.String.pipe(HttpApiSchema.asText()),
      });

      const quotesGroup = HttpApiGroup.make("hello").add(hello);

      const MyApi = HttpApi.make("MyApi").add(quotesGroup);

      const HelloLive = HttpApiBuilder.group(
        MyApi,
        "hello",
        (handlers) => handlers.handle("hello", () => Effect.succeed("Hello, World!")),
      );

      const MyApiLive = HttpApiBuilder.layer(MyApi).pipe(
        Layer.provide(HelloLive),
        Layer.provide(HttpServer.layerServices),
      );

      const handler = LambdaHandler.fromHttpApi(MyApiLive);

      const result = await handler(albEvent, context);

      expect(result).toStrictEqual(
        {
          body: "",
          statusCode: 404,
          headers: undefined,
          multiValueHeaders: {},
          isBase64Encoded: false,
        } satisfies ALBResult,
      );
    });
  });
});
