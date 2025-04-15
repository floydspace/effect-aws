/**
 * @since 0.3.0
 */
import type { HttpMethod } from "@effect/platform";
import { HttpBody, HttpClient, HttpClientRequest } from "@effect/platform";
import type { HttpHandler, HttpRequest } from "@smithy/protocol-http";
import { HttpResponse } from "@smithy/protocol-http";
import { buildQueryString } from "@smithy/querystring-builder";
import type { HttpHandlerOptions, RequestHandlerOutput } from "@smithy/types";
import type { ManagedRuntime } from "effect";
import { Duration, Effect, Option, Scope, Sink, Stream } from "effect";
import type { HttpHandlerOptions as EffectPlatformHttpHandlerOptions } from "./Types.js";

declare module "@effect/platform/HttpClientResponse" {
  interface HttpClientResponse {
    /**
     * @private
     */
    source: globalThis.Response;
  }
}

declare module "effect/ManagedRuntime" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ManagedRuntime<in R, out ER> {
    readonly scope: Scope.Scope;
  }
}

const makeUrl = (request: HttpRequest): string => {
  let path = request.path;
  const queryString = buildQueryString(request.query || {});
  if (queryString) {
    path += `?${queryString}`;
  }
  if (request.fragment) {
    path += `#${request.fragment}`;
  }

  let auth = "";
  if (request.username != null || request.password != null) {
    const username = request.username ?? "";
    const password = request.password ?? "";
    auth = `${username}:${password}@`;
  }

  return `${request.protocol}//${auth}${request.hostname}${request.port ? `:${request.port}` : ""}${path}`;
};

const isHttpHandler = <HttpHandlerConfig extends object>(
  instance: any,
): instance is HttpHandler<HttpHandlerConfig> => typeof instance?.handle === "function";

const tryToReadableStream = <A, E = never, R = never>(stream: Stream.Stream<A, E, R>) =>
  Stream.peel(stream, Sink.head()).pipe(
    Effect.map(([head, tailStream]) =>
      Option.isNone(head) ? Stream.empty : Stream.merge(Stream.make(head.value), tailStream)
    ),
    Effect.flatMap(Stream.toReadableStreamEffect()),
  );

/**
 * HttpHandler implementation for the Effect Platform HttpClient.
 * @since 0.3.0
 */
export class EffectPlatformHttpHandler implements HttpHandler<EffectPlatformHttpHandlerOptions> {
  private readonly config: EffectPlatformHttpHandlerOptions;

  /**
   * @returns the input if it is an HttpHandler of any class,
   * or instantiates a new instance of this handler.
   */
  public static create(instanceOrOptions?: HttpHandler<object> | EffectPlatformHttpHandlerOptions) {
    return isHttpHandler(instanceOrOptions) ? instanceOrOptions : new EffectPlatformHttpHandler(instanceOrOptions);
  }

  constructor(options?: EffectPlatformHttpHandlerOptions) {
    this.config = options ?? {};
  }

  async handle(
    request: HttpRequest,
    options: HttpHandlerOptions & { runtime?: ManagedRuntime.ManagedRuntime<HttpClient.HttpClient, never> } = {},
  ): Promise<RequestHandlerOutput<HttpResponse>> {
    const requestTimeoutInMs = Option.fromNullable(this.config.requestTimeout).pipe(
      Option.map(Duration.millis),
      Option.getOrElse(() => Duration.infinity),
    );

    const url = makeUrl(request);
    // Request constructor doesn't allow GET/HEAD request with body
    // ref: https://github.com/whatwg/fetch/issues/551
    const body = request.method === "GET" || request.method === "HEAD"
      ? HttpBody.empty
      : HttpBody.raw(request.body);

    const fetch = HttpClientRequest.make(request.method as HttpMethod.HttpMethod);
    const httpRequest = fetch(url, { body, headers: request.headers });

    const response = await options.runtime!.runPromise(
      HttpClient.execute(httpRequest).pipe(
        Effect.flatMap((res) =>
          tryToReadableStream(res.stream).pipe(
            Effect.catchTag("ResponseError", (error) =>
              error.reason === "EmptyBody" ? res.arrayBuffer : Effect.fail(error)),
            Effect.map((body) =>
              new HttpResponse({
                headers: res.headers,
                reason: res.source.statusText,
                statusCode: res.status,
                body,
              })
            ),
          )
        ),
        Scope.extend(options.runtime!.scope),
        Effect.timeout(requestTimeoutInMs),
      ),
      { signal: options.abortSignal as AbortSignal },
    );

    return { response };
  }

  updateHttpClientConfig(
    key: keyof EffectPlatformHttpHandlerOptions,
    value: EffectPlatformHttpHandlerOptions[typeof key],
  ): void {
    this.config[key] = value;
  }

  httpHandlerConfigs(): EffectPlatformHttpHandlerOptions {
    return this.config;
  }
}
