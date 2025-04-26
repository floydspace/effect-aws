/**
 * @since 1.4.0
 */
import type { HttpApi, HttpRouter } from "@effect/platform";
import { HttpApiBuilder, HttpApp } from "@effect/platform";
import type { Context } from "effect";
import { Effect, Layer } from "effect";
import type { Handler } from "./Handler.js";
import type { LambdaEvent } from "./internal/index.js";
import { getEventSource } from "./internal/index.js";
import type { EventSource, ResponseValues } from "./internal/types.js";
import { encodeBase64, isContentEncodingBinary, isContentTypeBinary } from "./internal/utils.js";
import * as Runtime from "./Runtime.js";

/**
 * Construct a lambda handler from an `HttpApi` instance.
 *
 * **Example**
 *
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
): Handler<LambdaEvent, void | ResponseValues> => {
  const runtime = Runtime.fromLayer(
    Layer.mergeAll(layer, HttpApiBuilder.Router.Live, HttpApiBuilder.Middleware.layer),
    options,
  );
  let handlerCached:
    | ((request: Request, context?: Context.Context<never> | undefined) => Promise<Response>)
    | undefined;

  const handlerPromise = Effect.gen(function*() {
    const app = yield* HttpApiBuilder.httpApp;
    const rt = yield* runtime.runtimeEffect;
    const handler = HttpApp.toWebHandlerRuntime(rt)(
      options?.middleware ? options.middleware(app as any) as any : app,
    );
    handlerCached = handler;
    return handler;
  }).pipe(runtime.runPromise);

  async function handler(event: LambdaEvent) {
    const eventSource = getEventSource(event) as EventSource<LambdaEvent>;
    const requestValues = eventSource.getRequest(event);

    const request = new Request(
      `http://${requestValues.remoteAddress}${requestValues.path}`,
      {
        method: requestValues.method,
        headers: requestValues.headers,
        body: requestValues.body,
      },
    );

    const res = handlerCached !== undefined
      ? await handlerCached(request)
      : await handlerPromise.then((handler) => handler(request));

    const contentType = res.headers.get("content-type");
    let isBase64Encoded = contentType && isContentTypeBinary(contentType) ? true : false;

    if (!isBase64Encoded) {
      const contentEncoding = res.headers.get("content-encoding");
      isBase64Encoded = isContentEncodingBinary(contentEncoding);
    }

    const body = isBase64Encoded ? encodeBase64(await res.arrayBuffer()) : await res.text();

    const headers: Record<string, string> = {};

    if (res.headers.has("set-cookie")) {
      const cookies = res.headers.getSetCookie
        ? res.headers.getSetCookie()
        : Array.from(res.headers.entries())
          .filter(([k]) => k === "set-cookie")
          .map(([, v]) => v);

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
  }

  return handler;
};
