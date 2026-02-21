import type { HttpHandlerOptions } from "@effect-aws/commons";
import { HttpHandler } from "@effect-aws/commons";
import type { HttpRequest } from "@smithy/protocol-http";
import { HttpResponse } from "@smithy/protocol-http";
import { buildQueryString } from "@smithy/querystring-builder";
import type { RequestHandlerOutput } from "@smithy/types";
import type { Cause, Scope } from "effect";
import { Duration, Effect, Option, Sink, Stream } from "effect";
import type { HttpMethod } from "effect/unstable/http";
import { HttpBody, HttpClient, HttpClientError, HttpClientRequest } from "effect/unstable/http";

declare module "effect/unstable/http" {
  interface HttpClientResponse {
    /**
     * @private
     */
    source: globalThis.Response;

    /**
     * @private
     * @since 0.79.0
     */
    original?: HttpClientResponse;
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

const tryToReadableStream = <A, E = never, R = never>(stream: Stream.Stream<A, E, R>) =>
  Stream.peel(stream, Sink.head()).pipe(
    Effect.map(([head, tailStream]) =>
      Option.isNone(head) ? Stream.empty : Stream.merge(Stream.make(head.value), tailStream)
    ),
    Effect.flatMap(Stream.toReadableStreamEffect()),
  );

/** @internal */
export const makeHttpClientRequestHandler = (config: HttpHandlerOptions) =>
  Effect.gen(function*() {
    const client = yield* HttpClient.HttpClient;

    return HttpHandler.make({
      handle: (
        request: HttpRequest,
        handlerOptions?: HttpHandlerOptions,
      ): Effect.Effect<
        RequestHandlerOutput<HttpResponse>,
        Cause.TimeoutError,
        Scope.Scope
      > =>
        Effect.gen(function*() {
          const requestTimeoutInMs = Option.fromNullishOr(handlerOptions?.requestTimeout ?? config.requestTimeout).pipe(
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

          const response = yield* client.execute(httpRequest).pipe(
            Effect.flatMap((res) =>
              tryToReadableStream(res.stream).pipe(
                Effect.catchTag(
                  "HttpClientError",
                  (error) =>
                    error.reason instanceof HttpClientError.EmptyBodyError ? res.arrayBuffer : Effect.fail(error),
                ),
                Effect.map((body) =>
                  new HttpResponse({
                    headers: res.headers,
                    reason: (res.original ?? res).source.statusText, // changed since @effect/platform@0.79.0
                    statusCode: res.status,
                    body,
                  })
                ),
              )
            ),
            Effect.orDie,
            Effect.timeout(requestTimeoutInMs),
          );

          return { response };
        }),
    });
  });
