/**
 * @since 1.3.0
 */
import {
  HttpApi,
  HttpApiBuilder,
  HttpBody,
  HttpRouter,
  HttpServerRequest,
} from "@effect/platform";
import { Effect, Layer } from "effect";
import { EffectHandler, Handler, makeLambda } from "./Handler";
import { AnyEvent, getEventSource } from "./internal";

/**
 * @since 1.3.0
 */
export const apiHandler: EffectHandler<
  AnyEvent,
  HttpApi.Api | HttpApiBuilder.Router | HttpRouter.HttpRouter.DefaultServices,
  never,
  unknown
> = (event) =>
  Effect.gen(function* () {
    const app = yield* HttpApiBuilder.httpApp;

    const eventSource = getEventSource(event);
    const requestValues = eventSource.getRequest(event);

    const request = new Request(
      `http://${requestValues.remoteAddress}${requestValues.path}`,
      {
        method: requestValues.method,
        headers: requestValues.headers,
        body: requestValues.body,
      },
    );

    const response = yield* app.pipe(
      Effect.provideService(
        HttpServerRequest.HttpServerRequest,
        HttpServerRequest.fromWeb(request),
      ),
    );

    return eventSource.getResponse({
      event,
      statusCode: response.status,
      body: new TextDecoder("utf-8").decode(
        (response.body as HttpBody.Uint8Array).body,
      ),
      headers: response.headers,
      isBase64Encoded: false,
    });
  });

/**
 * Makes a lambda handler from an `HttpApi` instance.
 *
 * @example
 * import { makeApiLambda } from "@effect-aws/lambda"
 * import { HttpApi, HttpApiBuilder, HttpServer } from "@effect/platform"
 * import { Layer } from "effect"
 *
 * class MyApi extends HttpApi.empty {}
 *
 * const MyApiLive = HttpApiBuilder.api(MyApi)
 *
 * export const handler = makeApiLambda(
 *   Layer.mergeAll(
 *     MyApiLive,
 *     // you could also use NodeHttpServer.layerContext, depending on your
 *     // server's platform
 *     HttpServer.layerContext
 *   )
 * )
 *
 * @since 1.3.0
 * @category constructors
 */
export const makeApiLambda = <LA, LE>(
  layer: Layer.Layer<
    LA | HttpApi.Api | HttpRouter.HttpRouter.DefaultServices,
    LE
  >,
): Handler<AnyEvent, unknown> =>
  makeLambda(apiHandler, Layer.mergeAll(layer, HttpApiBuilder.Router.Live));
