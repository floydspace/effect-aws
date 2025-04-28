/**
 * @since 1.4.0
 */
import type { HttpApi, HttpRouter, HttpServerError } from "@effect/platform";
import { HttpApiBuilder, HttpApp, HttpServerRequest, HttpServerResponse } from "@effect/platform";
import type { Context as LambdaContext } from "aws-lambda";
import { Effect, FiberRef, Function, Layer, Option } from "effect";
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
      return async (event: T, context: LambdaContext) => handlerOrOptions(event, context).pipe(runtime.runPromise);
    }

    return async (event: T, context: LambdaContext) =>
      handlerOrOptions(event, context).pipe(Effect.runPromise as <A, E>(effect: Effect.Effect<A, E, R>) => Promise<A>);
  }

  const runtime = LambdaRuntime.fromLayer(handlerOrOptions.layer);
  return async (event: T, context: LambdaContext) => handlerOrOptions.handler(event, context).pipe(runtime.runPromise);
};

const apiHandler = (options?: {
  readonly middleware?: (
    httpApp: HttpApp.Default,
  ) => HttpApp.Default<
    never,
    HttpApi.Api | HttpApiBuilder.Router | HttpRouter.HttpRouter.DefaultServices
  >;
}): EffectHandler<
  LambdaEvent,
  HttpApi.Api | HttpApiBuilder.Router | HttpApiBuilder.Middleware | HttpRouter.HttpRouter.DefaultServices,
  HttpServerError.ResponseError,
  LambdaResult
> =>
(event) =>
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

    const app = yield* HttpApiBuilder.httpApp;

    const appWithMiddleware = options?.middleware ? options.middleware(app as any) : app;

    const request = HttpServerRequest.fromWeb(req);
    const response = yield* appWithMiddleware.pipe(
      Effect.provideService(HttpServerRequest.HttpServerRequest, request),
    );

    const handler = yield* FiberRef.get(HttpApp.currentPreResponseHandlers);

    const resp = Option.isSome(handler) ? yield* handler.value(request, response) : response;

    const res = HttpServerResponse.toWeb(resp, { runtime: yield* Effect.runtime() });

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
  options?: {
    readonly middleware?: (
      httpApp: HttpApp.Default,
    ) => HttpApp.Default<
      never,
      HttpApi.Api | HttpApiBuilder.Router | HttpRouter.HttpRouter.DefaultServices
    >;
    readonly memoMap?: Layer.MemoMap;
  },
): Handler<LambdaEvent, LambdaResult> => {
  const runtime = LambdaRuntime.fromLayer(
    Layer.mergeAll(layer, HttpApiBuilder.Router.Live, HttpApiBuilder.Middleware.layer),
    options,
  );
  const handler = apiHandler(options);
  return async (event: LambdaEvent, context: LambdaContext) => handler(event, context).pipe(runtime.runPromise);
  // // Alternative implementation (I keep it commented here to understand the differences)
  // let handlerCached:
  //   | ((request: Request, context?: Context.Context<never> | undefined) => Promise<Response>)
  //   | undefined;

  // const handlerPromise = Effect.gen(function*() {
  //   const app = yield* HttpApiBuilder.httpApp;
  //   const rt = yield* runtime.runtimeEffect;
  //   const handler = HttpApp.toWebHandlerRuntime(rt)(
  //     options?.middleware ? options.middleware(app as any) as any : app,
  //   );
  //   handlerCached = handler;
  //   return handler;
  // }).pipe(runtime.runPromise);

  // async function handler(event: LambdaEvent) {
  //   const eventSource = getEventSource(event) as EventSource<LambdaEvent, LambdaResult>;
  //   const requestValues = eventSource.getRequest(event);

  //   const request = new Request(
  //     `http://${requestValues.remoteAddress}${requestValues.path}`,
  //     {
  //       method: requestValues.method,
  //       headers: requestValues.headers,
  //       body: requestValues.body,
  //     },
  //   );

  //   const res = handlerCached !== undefined
  //     ? await handlerCached(request)
  //     : await handlerPromise.then((handler) => handler(request));

  //   const contentType = res.headers.get("content-type");
  //   let isBase64Encoded = contentType && isContentTypeBinary(contentType) ? true : false;

  //   if (!isBase64Encoded) {
  //     const contentEncoding = res.headers.get("content-encoding");
  //     isBase64Encoded = isContentEncodingBinary(contentEncoding);
  //   }

  //   const body = isBase64Encoded ? encodeBase64(await res.arrayBuffer()) : await res.text();

  //   const headers: Record<string, string> = {};

  //   if (res.headers.has("set-cookie")) {
  //     const cookies = res.headers.getSetCookie
  //       ? res.headers.getSetCookie()
  //       : Array.from((res.headers as any).entries())
  //         .filter(([k]: any) => k === "set-cookie")
  //         .map(([, v]: any) => v);

  //     if (Array.isArray(cookies)) {
  //       headers["set-cookie"] = cookies.join(", ");
  //       res.headers.delete("set-cookie");
  //     }
  //   }

  //   res.headers.forEach((value, key) => {
  //     headers[key] = value;
  //   });

  //   return eventSource.getResponse({
  //     event,
  //     statusCode: res.status,
  //     body,
  //     headers,
  //     isBase64Encoded,
  //   });
  // }

  // return handler;
};
