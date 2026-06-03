/**
 * @since 1.4.0
 */
import type * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as PlatformError from "effect/PlatformError";
import * as Predicate from "effect/Predicate";
import type { HttpMiddleware } from "effect/unstable/http";
import { HttpRouter } from "effect/unstable/http";
import { Readable } from "node:stream";
import { getEventSource } from "./internal/index.js";
import * as internal from "./internal/lambdaHandler.js";
import { pipeline, pipeTo } from "./internal/stream.js";
import type { EventSource, ResponseValues } from "./internal/types.js";
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
  StreamHandler,
  StreamHandlerWithLayer,
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
    (context) => Context.getUnsafe(context, internal.lambdaEventTag),
  ) as Effect.Effect<T>;

/**
 * @since 1.4.0
 * @category context
 */
export const context = (): Effect.Effect<LambdaContext> =>
  Effect.map(
    Effect.context<never>(),
    (context) => Context.getUnsafe(context, internal.lambdaContextTag),
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
 * const LambdaLayer = Logger.layer([Logger.consoleLogFmt]);
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
  <T, R, E1, E2, A>(options: EffectHandlerWithLayer<T, R, E1, E2, A>): Handler<T, A>;
  <T, E, A>(handler: EffectHandler<T, never, E, A>): Handler<T, A>;
} = <T, R, E1, E2, A>(
  handlerOrOptions: EffectHandler<T, R, E1, A> | EffectHandlerWithLayer<T, R, E1, E2, A>,
): Handler<T, A> => {
  if (Predicate.isFunction(handlerOrOptions)) {
    return async (event, context) =>
      handlerOrOptions(event, context).pipe(Effect.runPromise as <E>(effect: Effect.Effect<A, E, R>) => Promise<A>);
  }

  const runtime = LambdaRuntime.fromLayer(handlerOrOptions.layer, { memoMap: handlerOrOptions.memoMap });
  return async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return handlerOrOptions.handler(event, context).pipe(runtime.runPromise);
  };
};

/**
 * Makes a streamify lambda handler from the given StreamHandler and optional global layer.
 * The global layer is used to provide a runtime which will gracefully handle lambda termination during down-scaling.
 *
 * @example
 * import { LambdaHandler, LambdaContext } from "@effect-aws/lambda"
 * import { Stream } from "effect";
 *
 * const streamHandler = (event: unknown, context: LambdaContext) => {
 *  return Stream.make("1", "2", "3");
 * };
 *
 * export const handler = LambdaHandler.stream(streamHandler);
 *
 * @example
 * import { LambdaHandler, LambdaContext } from "@effect-aws/lambda"
 * import { Stream, Logger } from "effect";
 *
 * const streamHandler = (event: unknown, context: LambdaContext) => {
 *  return Stream.make("1", "2", "3");
 * };
 *
 * const LambdaLayer = Logger.layer([Logger.consoleLogFmt]);
 *
 * export const handler = LambdaHandler.stream({
 *  handler: streamHandler,
 *  layer: LambdaLayer,
 * });
 *
 * @since 1.5.0
 * @category constructors
 */
export const stream: {
  <T, R, E1, E2>(options: StreamHandlerWithLayer<T, R, E1, E2>): Handler<T, void>;
  <T, E>(handler: StreamHandler<T, never, E>): Handler<T, void>;
} = <T, R, E1, E2>(
  handlerOrOptions: StreamHandler<T, R, E1> | StreamHandlerWithLayer<T, R, E1, E2>,
): Handler<T, void> => {
  if (Predicate.isFunction(handlerOrOptions)) {
    return global.awslambda?.streamifyResponse(async (event, responseStream, context) =>
      handlerOrOptions(event, context).pipe(
        pipeTo(responseStream, { end: true }),
        Effect.runPromise as <E>(effect: Effect.Effect<void, E, R>) => Promise<void>,
      )
    );
  }

  const runtime = LambdaRuntime.fromLayer(handlerOrOptions.layer, { memoMap: handlerOrOptions.memoMap });
  return global.awslambda?.streamifyResponse(async (event, responseStream, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return handlerOrOptions.handler(event, context).pipe(
      pipeTo(responseStream, { end: true }),
      runtime.runPromise,
    );
  });
};

interface HttpApiOptions {
  readonly middleware?: HttpMiddleware.HttpMiddleware;
  readonly memoMap?: Layer.MemoMap;
}

type WebHandler = (
  request: globalThis.Request,
  services: Context.Context<LambdaHandler.Event | LambdaContext>,
) => Promise<globalThis.Response>;
const WebHandler = Context.Service<WebHandler>("@effect-aws/lambda/WebHandler");

type EffectStreamifyHandler<T, R, E = never> = (
  event: T,
  responseStream: awslambda.HttpResponseStream,
  context: LambdaContext,
) => Effect.Effect<void, E, R>;

const requestFromEvent = (event: LambdaHandler.Event): Request => {
  const eventSource = getEventSource(event) as EventSource<LambdaHandler.Event, LambdaHandler.Result>;
  const requestValues = eventSource.getRequest(event);

  return new Request(
    `https://${requestValues.remoteAddress}${requestValues.path}`,
    {
      method: requestValues.method,
      headers: requestValues.headers,
      body: requestValues.body,
    },
  );
};

const responseHeaders = (res: Response) => {
  const headers: Record<string, string> = {};
  const cookies = res.headers.has("set-cookie")
    ? res.headers.getSetCookie
      ? res.headers.getSetCookie()
      : Array.from((res.headers as any).entries())
        .filter(([k]: any) => k === "set-cookie")
        .map(([, v]: any) => v)
    : [];

  if (Array.isArray(cookies) && cookies.length > 0) {
    res.headers.delete("set-cookie");
  }

  res.headers.forEach((value, key) => {
    headers[key] = value;
  });

  return { headers, cookies };
};

/**
 * Construct an `WebHandler` from an `HttpRouter` instance.
 *
 * @since 1.4.0
 * @category constructors
 */
export const makeWebHandler = <LA, LE>(
  httpRouter: Layer.Layer<LA, LE, HttpRouter.HttpRouter>,
  options?: HttpApiOptions,
) => {
  const layer = Layer.provide(httpRouter, HttpRouter.layer);
  return Effect.acquireRelease(
    Effect.sync(() => HttpRouter.toWebHandler(layer, options)),
    ({ dispose }) => Effect.promise(() => dispose()),
  ).pipe(Effect.map(({ handler }) => handler));
};

/**
 * Construct an `EffectHandler` from an `HttpApi` instance.
 *
 * @since 1.4.0
 * @category constructors
 */
export const httpApiHandler: EffectHandler<
  LambdaHandler.Event,
  WebHandler,
  Cause.UnknownError,
  LambdaHandler.Result
> = (event, context) =>
  Effect.gen(function*() {
    const eventSource = getEventSource(event) as EventSource<LambdaHandler.Event, LambdaHandler.Result>;
    const req = requestFromEvent(event);

    const handler = yield* Effect.service(WebHandler);

    const ctx = Context.empty().pipe(
      Context.add(internal.lambdaEventTag, event),
      Context.add(internal.lambdaContextTag, context),
    );

    const res: globalThis.Response = yield* Effect.tryPromise(() => handler(req, ctx));

    const contentType = res.headers.get("content-type");
    let isBase64Encoded = contentType && isContentTypeBinary(contentType) ? true : false;

    if (!isBase64Encoded) {
      const contentEncoding = res.headers.get("content-encoding");
      isBase64Encoded = isContentEncodingBinary(contentEncoding);
    }

    const body = isBase64Encoded
      ? encodeBase64(yield* Effect.promise(() => res.arrayBuffer()))
      : yield* Effect.promise(() => res.text());

    const { cookies, headers } = responseHeaders(res);
    const responseHeadersMap: ResponseValues<LambdaHandler.Event>["headers"] = headers;

    if (cookies.length > 0) {
      responseHeadersMap["set-cookie"] = cookies;
    }

    return eventSource.getResponse({
      event,
      statusCode: res.status,
      body,
      headers: responseHeadersMap,
      isBase64Encoded,
    });
  });

/**
 * Construct a streaming `StreamifyHandler` from an `HttpApi` instance for Lambda Function URLs.
 *
 * @since 1.7.0
 * @category constructors
 */
export const httpApiStreamHandler: EffectStreamifyHandler<
  LambdaHandler.Event,
  WebHandler,
  Cause.UnknownError | PlatformError.PlatformError
> = (event, responseStream, context) =>
  Effect.gen(function*() {
    const req = requestFromEvent(event);

    const handler = yield* Effect.service(WebHandler);

    const ctx = Context.empty().pipe(
      Context.add(internal.lambdaEventTag, event),
      Context.add(internal.lambdaContextTag, context),
    );

    const res: globalThis.Response = yield* Effect.tryPromise(() => handler(req, ctx));

    const { cookies, headers } = responseHeaders(res);
    const httpResponseStream = global.awslambda.HttpResponseStream.from(responseStream, {
      statusCode: res.status,
      headers,
      cookies,
    });

    if (res.body) {
      yield* pipeline(Readable.fromWeb(res.body as any), httpResponseStream);
    } else {
      httpResponseStream.end();
    }
  });

/**
 * Construct a lambda handler from an `HttpApi` instance.
 *
 * @example
 * ```ts
 * import { LambdaHandler } from "@effect-aws/lambda"
 * import { HttpServer } from "effect/unstable/http";
 * import { HttpApi, HttpApiBuilder } from "effect/unstable/httpapi"
 * import { Layer } from "effect"
 *
 * class MyApi extends HttpApi.make("api") {}
 *
 * const MyApiLive = HttpApiBuilder.layer(MyApi).pipe(
 *   Layer.provide(HttpServer.layerServices),
 * );
 *
 * export const handler = LambdaHandler.fromHttpApi(MyApiLive)
 * ```
 *
 * @since 1.4.0
 * @category constructors
 */
export const fromHttpApi = <LA, LE>(
  layer: Layer.Layer<LA, LE, HttpRouter.HttpRouter>,
  options?: HttpApiOptions,
): Handler<LambdaHandler.Event, LambdaHandler.Result> => {
  const WebHandlerLive = Layer.effect(WebHandler, makeWebHandler(layer, options));
  return make({ handler: httpApiHandler, layer: WebHandlerLive, memoMap: options?.memoMap });
};

/**
 * Construct a streaming lambda handler from an `HttpApi` instance for Lambda Function URLs.
 *
 * Lambda response streaming is supported by Lambda Function URLs with response streaming enabled,
 * not by API Gateway HTTP API integrations.
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
 * export const handler = LambdaHandler.streamFromHttpApi(
 *   Layer.mergeAll(
 *     MyApiLive,
 *     HttpServer.layerContext
 *   )
 * )
 * ```
 *
 * @since 1.7.0
 * @category constructors
 */
export const streamFromHttpApi = <LA, LE>(
  layer: Layer.Layer<LA, LE, HttpRouter.HttpRouter>,
  options?: HttpApiOptions,
): Handler<LambdaHandler.Event, void> => {
  const WebHandlerLive = Layer.effect(WebHandler, makeWebHandler(layer, options));
  const runtime = LambdaRuntime.fromLayer(WebHandlerLive, { memoMap: options?.memoMap });

  return global.awslambda?.streamifyResponse(async (event, responseStream, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return httpApiStreamHandler(event, responseStream, context).pipe(runtime.runPromise);
  });
};
