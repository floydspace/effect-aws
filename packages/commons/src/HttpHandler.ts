/**
 * @since 0.3.0
 */
import type { HttpClientResponse, HttpMethod } from "@effect/platform";
import { FetchHttpClient, HttpBody, HttpClient, HttpClientRequest } from "@effect/platform";
import type { HttpHandler, HttpRequest } from "@smithy/protocol-http";
import { HttpResponse } from "@smithy/protocol-http";
import { buildQueryString } from "@smithy/querystring-builder";
import type { FetchHttpHandlerOptions, HttpHandlerOptions, Provider } from "@smithy/types";
import { Chunk, Duration, Effect, Option, Runtime, Stream } from "effect";

/**
 * HttpHandler implementation for the Effect Platform HttpClient.
 * @since 0.3.0
 */
export class EffectPlatformHttpHandler implements HttpHandler<FetchHttpHandlerOptions> {
  private config?: FetchHttpHandlerOptions;
  private configProvider: Promise<FetchHttpHandlerOptions>;

  /**
   * @returns the input if it is an HttpHandler of any class,
   * or instantiates a new instance of this handler.
   */
  public static create(
    instanceOrOptions?: HttpHandler<any> | FetchHttpHandlerOptions | Provider<FetchHttpHandlerOptions | void>,
  ) {
    if (typeof (instanceOrOptions as any)?.handle === "function") {
      // is already an instance of HttpHandler.
      return instanceOrOptions as HttpHandler<any>;
    }
    // input is ctor options or undefined.
    return new EffectPlatformHttpHandler(instanceOrOptions as FetchHttpHandlerOptions);
  }

  constructor(options?: FetchHttpHandlerOptions | Provider<FetchHttpHandlerOptions | void>) {
    if (typeof options === "function") {
      this.configProvider = options().then((opts) => opts || {});
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
  }

  destroy(): void {
    // Do nothing. TLS and HTTP/2 connection pooling is handled by the browser.
  }

  async handle(
    request: HttpRequest,
    options: HttpHandlerOptions & { runtime?: Runtime.Runtime<never> } = {},
  ): Promise<{ response: HttpResponse }> {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    const requestTimeoutInMs = Option.fromNullable(this.config?.requestTimeout).pipe(
      Option.map(Duration.millis),
      Option.getOrElse(() => Duration.infinity),
    );
    const keepAlive = this.config!.keepAlive === true;
    const credentials = this.config!.credentials as RequestInit["credentials"];

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

    const { method, port } = request;
    const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
    // Request constructor doesn't allow GET/HEAD request with body
    // ref: https://github.com/whatwg/fetch/issues/551
    const body = method === "GET" || method === "HEAD" ? HttpBody.empty : HttpBody.raw(request.body);

    const requestOptions: RequestInit = {
      credentials,
    };

    // cache property is not supported in workerd runtime
    // TODO: can we feature detect support for cache and not set this property when not supported?
    if (this.config?.cache) {
      requestOptions.cache = this.config.cache;
    }

    requestOptions.keepalive = keepAlive;

    if (typeof this.config.requestInit === "function") {
      Object.assign(requestOptions, this.config.requestInit(request));
    }

    const fetch = HttpClientRequest.make(method as HttpMethod.HttpMethod);
    const httpRequest = fetch(url, { body, headers: request.headers });

    const runtime = options.runtime ?? Runtime.defaultRuntime;

    return Runtime.runPromise(runtime)(
      HttpClient.execute(httpRequest).pipe(
        Effect.flatMap((response) =>
          // TODO: do not collect to memory, currently it is not possible due to closing scope
          // find a way how to close scope later downstream
          Stream.runCollect(response.stream).pipe(
            Effect.map((chunks) => Buffer.concat(Chunk.toArray(chunks))),
            Effect.catchTag("ResponseError", (error) =>
              error.reason === "EmptyBody" ? response.arrayBuffer : Effect.fail(error)),
            Effect.map((body) => ({
              response: new HttpResponse({
                headers: response.headers,
                reason: (response as HttpClientResponse.HttpClientResponse & { source: globalThis.Response }).source
                  .statusText,
                statusCode: response.status,
                body,
              }),
            })),
          )
        ),
        Effect.scoped,
        Effect.timeout(requestTimeoutInMs),
        Effect.provide(FetchHttpClient.layer),
        Effect.provideService(FetchHttpClient.RequestInit, requestOptions),
      ),
      { signal: options.abortSignal as AbortSignal },
    );
  }

  updateHttpClientConfig(key: keyof FetchHttpHandlerOptions, value: FetchHttpHandlerOptions[typeof key]): void {
    this.config = undefined;
    this.configProvider = this.configProvider.then((config) => {
      (config as Record<typeof key, typeof value>)[key] = value;
      return config;
    });
  }

  httpHandlerConfigs(): FetchHttpHandlerOptions {
    return this.config ?? {};
  }
}
