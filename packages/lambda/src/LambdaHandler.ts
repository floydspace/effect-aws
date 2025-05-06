/**
 * @since 1.4.0
 */
import type { HttpApi, HttpRouter } from "@effect/platform";
import { HttpApiBuilder, HttpApp } from "@effect/platform";
import type {
  ALBEvent,
  ALBResult,
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayProxyResult,
  APIGatewayProxyResultV2,
  CloudFrontRequestEvent,
  Context as AwsContext,
  DynamoDBStreamEvent,
  EventBridgeEvent,
  KinesisStreamEvent,
  S3Event,
  SelfManagedKafkaEvent,
  SNSEvent,
  SQSEvent,
} from "aws-lambda";
import type { Cause, Pipeable } from "effect";
import { Context, Effect, Function, Layer } from "effect";
import { dual } from "effect/Function";
import { hasProperty } from "effect/Predicate";
import { getEventSource } from "./internal/index.js";
import * as internal from "./internal/lambdaHandler.js";
import type { EventSource } from "./internal/types.js";
import { encodeBase64, isContentEncodingBinary, isContentTypeBinary } from "./internal/utils.js";
import * as LambdaRuntime from "./LambdaRuntime.js";
import type { EffectHandler, EffectHandlerWithLayer, Handler } from "./Types.js";

/**
 * @since 0.1.0
 * @category type ids
 */
export const TypeId: unique symbol = internal.TypeId;

/**
 * @since 0.1.0
 * @category type ids
 */
export type TypeId = typeof TypeId;

/**
 * @since 0.1.0
 * @category models
 */
export interface LambdaHandler<in T, out A, out E = never, R = never, RE = never> extends Pipeable.Pipeable {
  readonly [TypeId]: TypeId;
  readonly handler: EffectHandler<T, R, E, A>;
  layer?: Layer.Layer<R, RE>;
}

export const isLambdaHandler = (u: unknown): u is LambdaHandler<unknown, unknown, unknown, unknown> =>
  hasProperty(u, TypeId);

/**
 * @since 0.2.0
 * @category constructors
 */
export const make: <T, A, E = never, R = never>(
  handler: EffectHandler<T, R, E, A>,
) => LambdaHandler<T, A, E, R, never> = internal.make;

export const withGlobalLayer = dual<
  <LR, LE>(
    globalLayer: Layer.Layer<LR, LE>,
  ) => <T, A, E, R>(self: LambdaHandler<T, A, E, R>) => LambdaHandler<T, A, E, Exclude<R, LR>, LE>,
  <T, A, E, R, LR, LE>(
    self: LambdaHandler<T, A, E, R>,
    globalLayer: Layer.Layer<LR, LE>,
  ) => LambdaHandler<T, A, E, Exclude<R, LR>, LE>
>(
  (args) => isLambdaHandler(args[0]),
  (self, globalLayer) => {
    (self as any).layer = globalLayer;
    return self as any;
  },
);

export const toHandler = dual<
  <T>() => <A, E>(self: LambdaHandler<T, A, E, never>) => Handler<T, A>,
  <T, A, E>(self: LambdaHandler<T, A, E, never>) => Handler<T, A>
>((args) => isLambdaHandler(args[0]), (self) => makeLambda(self.handler, self.layer as any));

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
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Context extends AwsContext {}

  /**
   * @since 1.4.0
   * @category model
   */
  export interface Args {
    event: Event;
    context: Context;
  }

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

export type LambdaHandler1 =
  | Handler<APIGatewayProxyEvent, APIGatewayProxyResult>
  | Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>
  | Handler<ALBEvent, ALBResult>
  | Handler<CloudFrontRequestEvent, void>
  | Handler<S3Event, void>
  | Handler<KinesisStreamEvent, void>
  | Handler<DynamoDBStreamEvent, void>
  | Handler<SQSEvent, void>
  | Handler<SNSEvent, void>
  | Handler<EventBridgeEvent<string, unknown>, void>
  | Handler<SelfManagedKafkaEvent, void>;

/**
 * @since 1.4.0
 * @category context
 */
export const LambdaEvent: Context.Tag<LambdaHandler.Event, LambdaHandler.Event> = internal.lambdaEventTag;

export const APIGatewayProxyEventTag = LambdaEvent as Context.Tag<
  APIGatewayProxyEvent,
  APIGatewayProxyEvent
>;

/**
 * @since 1.4.0
 * @category context
 */
export const LambdaContext: Context.Tag<LambdaHandler.Context, LambdaHandler.Context> = internal.lambdaContextTag;

/**
 * @since 1.4.0
 * @category context
 */
export const LambdaHandlerArgs: Effect.Effect<LambdaHandler.Args> = Effect.map(
  Effect.context<never>(),
  (context) => ({
    event: Context.unsafeGet(context, LambdaEvent),
    context: Context.unsafeGet(context, LambdaContext),
  }),
);

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
export const makeLambda: {
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
  | HttpApi.Api
  | HttpApiBuilder.Router
  | HttpApiBuilder.Middleware
  | HttpRouter.HttpRouter.DefaultServices
  | LambdaHandler.Event
  | LambdaHandler.Context
> =>
  Effect.gen(function*() {
    const app = yield* HttpApiBuilder.httpApp;
    const rt = yield* Effect.runtime<
      HttpRouter.HttpRouter.DefaultServices | LambdaHandler.Event | LambdaHandler.Context
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
      Effect.provideService(LambdaEvent, event),
      Effect.provideService(LambdaContext, context),
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
export const fromHttpApi: {
  /**
   * Overload when Event or Context are not used.
   */
  <LA, LE>(
    layer: Layer.Layer<LA | HttpApi.Api | HttpRouter.HttpRouter.DefaultServices, LE>,
    options?: HttpApiOptions,
  ): LambdaHandler<LambdaHandler.Event, LambdaHandler.Result, Cause.UnknownException, never, LE>;
  /**
   * Overload when Event is used.
   */
  <THandler extends LambdaHandler1, LA, LE, LR extends Parameters<THandler>[0]>(
    layer: Layer.Layer<LA | HttpApi.Api | HttpRouter.HttpRouter.DefaultServices, LE, LR>,
    options?: HttpApiOptions,
  ): LR extends LambdaHandler.Event ?
    THandler extends Handler<LR, infer TResult> ? LambdaHandler<LR, TResult, Cause.UnknownException, never, LE> : never
    : never;
  /**
   * Overload when Context is used.
   */
  <THandler extends LambdaHandler1, LA, LE, LR extends Parameters<THandler>[1]>(
    layer: Layer.Layer<LA | HttpApi.Api | HttpRouter.HttpRouter.DefaultServices, LE, LR>,
    options?: HttpApiOptions,
  ): LR extends LambdaHandler.Context
    ? LambdaHandler<LambdaHandler.Event, LambdaHandler.Result, Cause.UnknownException, never, LE>
    : never;
  /**
   * Overload when Event and Context are used.
   */
  <THandler extends LambdaHandler1, LA, LE, LR extends Parameters<THandler>[0] | Parameters<THandler>[1]>(
    layer: Layer.Layer<LA | HttpApi.Api | HttpRouter.HttpRouter.DefaultServices, LE, LR>,
    options?: HttpApiOptions,
  ): LR extends LambdaHandler.Context | LambdaHandler.Event
    ? THandler extends Handler<LR, infer TResult> ? LambdaHandler<LR, TResult, Cause.UnknownException, never, LE>
    : never
    : never;
} = <LA, LE, LR>(
  layer: Layer.Layer<LA | HttpApi.Api | HttpRouter.HttpRouter.DefaultServices, LE, LR>,
  options?: HttpApiOptions,
): LambdaHandler<LambdaHandler.Event, LambdaHandler.Result, Cause.UnknownException, never, LE> => {
  const httpApiLayer = Layer.mergeAll(
    layer as Layer.Layer<HttpApi.Api | HttpRouter.HttpRouter.DefaultServices | LA, LE>,
    HttpApiBuilder.Router.Live,
    HttpApiBuilder.Middleware.layer,
  );
  return make(httpApiHandler(options)).pipe(
    withGlobalLayer(httpApiLayer),
  );
};
