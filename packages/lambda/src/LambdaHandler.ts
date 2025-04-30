/**
 * @since 1.4.0
 */
import type { HttpApi, HttpRouter, HttpServerError } from "@effect/platform";
import { HttpApiBuilder, HttpApp } from "@effect/platform";
import type { Cause } from "effect";
import { Context, Effect, Function, Layer } from "effect";
import { getEventSource } from "./internal/index.js";
import type { EventSource, LambdaEvent, LambdaResult } from "./internal/types.js";
import { encodeBase64, isContentEncodingBinary, isContentTypeBinary } from "./internal/utils.js";
import * as LambdaRuntime from "./LambdaRuntime.js";
import type { EffectHandler, EffectHandlerWithLayer, Handler } from "./Types.js";

/**
 * Makes a lambda handler from the given EffectHandler and optional global layer.
 * The global layer is used to provide a runtime which will gracefully handle lambda termination during down-scaling.
 *
 * @example
 * import { LambdaHandler } from "@effect-aws/lambda"
 * import { Context } from "aws-lambda";
 * import { Effect } from "effect";
 *
 * const effectHandler = (event: unknown, context: Context) => {
 *  return Effect.logInfo("Hello, world!");
 * };
 *
 * export const handler = LambdaHandler.make(effectHandler);
 *
 * @example
 * import { LambdaHandler } from "@effect-aws/lambda"
 * import { Context } from "aws-lambda";
 * import { Effect, Logger } from "effect";
 *
 * const effectHandler = (event: unknown, context: Context) => {
 *  return Effect.logInfo("Hello, world!");
 * };
 *
 * const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);
 *
 * export const handler = LambdaHandler.make({
 *  handler: effectHandler,
 *  layer: LambdaLayer,
 * });
 *
 * @since 1.0.0
 * @category constructors
 */
export const make: {
  <T, R, E1, E2, A>(
    options: EffectHandlerWithLayer<T, R, E1, E2, A>,
  ): Handler<T, A>;
  <T, E, A>(
    handler: EffectHandler<T, never, E, A>,
  ): Handler<T, A>;
  /**
   * @deprecated Prefer using the `EffectHandlerWithLayer` type to provide a global layer.
   * @example
   * ```ts
   * export const handler = makeLambda({
   *  handler: effectHandler,
   *  layer: LambdaLayer,
   * });
   * ```
   */
  <T, R, E1, E2, A>(
    handler: EffectHandler<T, R, E1, A>,
    globalLayer: Layer.Layer<R, E2>,
  ): Handler<T, A>;
} = <T, R, E1, E2, A>(
  handlerOrOptions: EffectHandler<T, R, E1, A> | EffectHandlerWithLayer<T, R, E1, E2, A>,
  globalLayer?: Layer.Layer<R, E2>,
): Handler<T, A> => {
  if (Function.isFunction(handlerOrOptions)) {
    // Deprecated case
    if (globalLayer) {
      const runtime = LambdaRuntime.fromLayer(globalLayer);
      return async (event, context) => handlerOrOptions(event, context).pipe(runtime.runPromise);
    }

    return async (event, context) =>
      handlerOrOptions(event, context).pipe(Effect.runPromise as <A, E>(effect: Effect.Effect<A, E, R>) => Promise<A>);
  }

  const runtime = LambdaRuntime.fromLayer(handlerOrOptions.layer, { memoMap: handlerOrOptions.memoMap });
  return async (event, context) => handlerOrOptions.handler(event, context).pipe(runtime.runPromise);
};

interface HttpApiOptions {
  readonly middleware?: (
    httpApp: HttpApp.Default,
  ) => HttpApp.Default<
    never,
    HttpApi.Api | HttpApiBuilder.Router | HttpRouter.HttpRouter.DefaultServices
  >;
  readonly memoMap?: Layer.MemoMap;
}

type WebHandler = ReturnType<typeof HttpApp.toWebHandler>;
const WebHandler = Context.GenericTag<WebHandler>("@effect-aws/lambda/WebHandler");

/**
 * Construct an `WebHandler` from an `HttpApi` instance.
 *
 * @since 1.4.0
 * @category constructors
 */
export const makeWebHandler = (options?: Pick<HttpApiOptions, "middleware">): Effect.Effect<
  WebHandler,
  never,
  HttpApiBuilder.Router | HttpApi.Api | HttpRouter.HttpRouter.DefaultServices | HttpApiBuilder.Middleware
> =>
  Effect.gen(function*() {
    const app = yield* HttpApiBuilder.httpApp;
    const rt = yield* Effect.runtime<HttpRouter.HttpRouter.DefaultServices>();
    return HttpApp.toWebHandlerRuntime(rt)(
      options?.middleware ? options.middleware(app as any) as any : app,
    );
  });

/**
 * Construct an `EffectHandler` from an `HttpApi` instance.
 *
 * @since 1.4.0
 * @category constructors
 */
export const httpApiHandler: EffectHandler<
  LambdaEvent,
  WebHandler,
  HttpServerError.ResponseError | Cause.UnknownException,
  LambdaResult
> = (event) =>
  Effect.gen(function*() {
    const eventSource = getEventSource(event) as EventSource<LambdaEvent, LambdaResult>;
    const requestValues = eventSource.getRequest(event);

    const req = new Request(
      `https://${requestValues.remoteAddress}${requestValues.path}`,
      {
        method: requestValues.method,
        headers: requestValues.headers,
        body: requestValues.body,
      },
    );

    const res = yield* WebHandler.pipe(Effect.andThen((handler) => handler(req)));

    const contentType = res.headers.get("content-type");
    let isBase64Encoded = contentType && isContentTypeBinary(contentType) ? true : false;

    if (!isBase64Encoded) {
      const contentEncoding = res.headers.get("content-encoding");
      isBase64Encoded = isContentEncodingBinary(contentEncoding);
    }

    const body = isBase64Encoded
      ? encodeBase64(yield* Effect.promise(() => res.arrayBuffer()))
      : yield* Effect.promise(() => res.text());

    const headers: Record<string, string> = {};

    if (res.headers.has("set-cookie")) {
      const cookies = res.headers.getSetCookie
        ? res.headers.getSetCookie()
        : Array.from((res.headers as any).entries())
          .filter(([k]: any) => k === "set-cookie")
          .map(([, v]: any) => v);

      if (Array.isArray(cookies)) {
        headers["set-cookie"] = cookies.join(", ");
        res.headers.delete("set-cookie");
      }
    }

    res.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return eventSource.getResponse({
      event,
      statusCode: res.status,
      body,
      headers,
      isBase64Encoded,
    });
  });

/**
 * Construct a lambda handler from an `HttpApi` instance.
 *
 * @example
 * ```ts
 * import { LambdaHandler } from "@effect-aws/lambda"
 * import { HttpApi, HttpApiBuilder, HttpServer } from "@effect/platform"
 * import { Layer } from "effect"
 *
 * class MyApi extends HttpApi.make("api") {}
 *
 * const MyApiLive = HttpApiBuilder.api(MyApi)
 *
 * export const handler = LambdaHandler.fromHttpApi(
 *   Layer.mergeAll(
 *     MyApiLive,
 *     // you could also use NodeHttpServer.layerContext, depending on your
 *     // server's platform
 *     HttpServer.layerContext
 *   )
 * )
 * ```
 *
 * @since 1.4.0
 * @category constructors
 */
export const fromHttpApi = <LA, LE>(
  layer: Layer.Layer<LA | HttpApi.Api | HttpRouter.HttpRouter.DefaultServices, LE>,
  options?: HttpApiOptions,
): Handler<LambdaEvent, LambdaResult> => {
  const httpApiLayer = Layer.effect(WebHandler, makeWebHandler(options)).pipe(
    Layer.provide(Layer.mergeAll(layer, HttpApiBuilder.Router.Live, HttpApiBuilder.Middleware.layer)),
  );
  return make({ handler: httpApiHandler, layer: httpApiLayer, memoMap: options?.memoMap });
};
