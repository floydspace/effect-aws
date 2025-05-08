/**
 * @since 1.4.0
 */
import type { HttpApi, HttpRouter } from "@effect/platform";
import { HttpApiBuilder, HttpApp } from "@effect/platform";
import type { Cause } from "effect";
import { Context, Effect, Function, Layer } from "effect";
import { getEventSource } from "./internal/index.js";
import * as internal from "./internal/lambdaHandler.js";
import type { EventSource } from "./internal/types.js";
import { encodeBase64, isContentEncodingBinary, isContentTypeBinary } from "./internal/utils.js";
import * as LambdaRuntime from "./LambdaRuntime.js";
import type {
  ALBEvent,
  ALBResult,
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayProxyResult,
  APIGatewayProxyResultV2,
  CloudFrontRequestEvent,
  DynamoDBStreamEvent,
  EffectHandler,
  EffectHandlerWithLayer,
  EventBridgeEvent,
  Handler,
  KinesisStreamEvent,
  LambdaContext,
  S3Event,
  SelfManagedKafkaEvent,
  SNSEvent,
  SQSEvent,
} from "./Types.js";

/**
 * @since 1.4.0
 */
export declare namespace LambdaHandler {
  /**
   * @since 1.4.0
   * @category model
   */
  export type Event =
    | ALBEvent
    | APIGatewayProxyEvent
    | APIGatewayProxyEventV2
    | EventBridgeEvent<string, unknown>
    | DynamoDBStreamEvent
    | KinesisStreamEvent
    | S3Event
    | SelfManagedKafkaEvent
    | SNSEvent
    | SQSEvent
    | CloudFrontRequestEvent;

  /**
   * @since 1.4.0
   * @category model
   */
  export type Result =
    | ALBResult
    | APIGatewayProxyResult
    | APIGatewayProxyResultV2
    | void;
}

/**
 * @since 1.4.0
 * @category context
 */
export const event = <T extends LambdaHandler.Event>(): Effect.Effect<T> =>
  Effect.map(
    Effect.context<never>(),
    (context) => Context.unsafeGet(context, internal.lambdaEventTag),
  ) as Effect.Effect<T>;

/**
 * @since 1.4.0
 * @category context
 */
export const context = (): Effect.Effect<LambdaContext> =>
  Effect.map(
    Effect.context<never>(),
    (context) => Context.unsafeGet(context, internal.lambdaContextTag),
  );

/**
 * Makes a lambda handler from the given EffectHandler and optional global layer.
 * The global layer is used to provide a runtime which will gracefully handle lambda termination during down-scaling.
 *
 * @example
 * import { LambdaHandler, LambdaContext } from "@effect-aws/lambda"
 * import { Effect } from "effect";
 *
 * const effectHandler = (event: unknown, context: LambdaContext) => {
 *  return Effect.logInfo("Hello, world!");
 * };
 *
 * export const handler = LambdaHandler.make(effectHandler);
 *
 * @example
 * import { LambdaHandler, LambdaContext } from "@effect-aws/lambda"
 * import { Effect, Logger } from "effect";
 *
 * const effectHandler = (event: unknown, context: LambdaContext) => {
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
  | HttpApiBuilder.Router
  | HttpApi.Api
  | HttpRouter.HttpRouter.DefaultServices
  | HttpApiBuilder.Middleware
  | LambdaHandler.Event
  | LambdaContext
> =>
  Effect.gen(function*() {
    const app = yield* HttpApiBuilder.httpApp;
    const rt = yield* Effect.runtime<
      HttpRouter.HttpRouter.DefaultServices | LambdaHandler.Event | LambdaContext
    >();
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
export const httpApiHandler = (options?: Pick<HttpApiOptions, "middleware">): EffectHandler<
  LambdaHandler.Event,
  HttpApi.Api | HttpApiBuilder.Router | HttpRouter.HttpRouter.DefaultServices | HttpApiBuilder.Middleware,
  Cause.UnknownException,
  LambdaHandler.Result
> =>
(event, context) =>
  Effect.gen(function*() {
    const eventSource = getEventSource(event) as EventSource<LambdaHandler.Event, LambdaHandler.Result>;
    const requestValues = eventSource.getRequest(event);

    const req = new Request(
      `https://${requestValues.remoteAddress}${requestValues.path}`,
      {
        method: requestValues.method,
        headers: requestValues.headers,
        body: requestValues.body,
      },
    );

    const res = yield* makeWebHandler(options).pipe(
      Effect.provideService(internal.lambdaEventTag, event),
      Effect.provideService(internal.lambdaContextTag, context),
      Effect.andThen((handler) => handler(req)),
    );

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
): Handler<LambdaHandler.Event, LambdaHandler.Result> => {
  const httpApiLayer = Layer.mergeAll(layer, HttpApiBuilder.Router.Live, HttpApiBuilder.Middleware.layer);
  return make({ handler: httpApiHandler(options), layer: httpApiLayer, memoMap: options?.memoMap });
};
