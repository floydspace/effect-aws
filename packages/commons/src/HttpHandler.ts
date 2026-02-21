/**
 * @since 0.3.0
 */
import type { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import type { HttpHandlerOptions, RequestHandler as ClientRequestHandler, RequestHandlerOutput } from "@smithy/types";
import type { Cause } from "effect";
import { Effect, Scope, ServiceMap } from "effect";
import type { RuntimeOptions } from "./internal/httpHandler.js";

const TypeId = Symbol.for("@effect-aws/commons/RequestHandler");

type RequestHandlerConstructorProps = {
  readonly handle: (
    request: HttpRequest,
    handlerOptions?: HttpHandlerOptions,
  ) => Effect.Effect<
    RequestHandlerOutput<HttpResponse>,
    Cause.TimeoutError,
    Scope.Scope
  >;
};

/**
 * @since 0.3.0
 * @category model
 */
export interface RequestHandler extends RequestHandlerConstructorProps {
  readonly [TypeId]: typeof TypeId;
}

/**
 * @since 0.3.0
 * @category tag
 */
export const RequestHandler = ServiceMap.Service<RequestHandler>("@effect-aws/commons/RequestHandler");

const proto = {
  [TypeId]: TypeId,
};

/**
 * @since 0.3.0
 * @category constructors
 */
export const make = (options: RequestHandlerConstructorProps): RequestHandler =>
  Object.assign(Object.create(proto), options);

/**
 * @since 0.3.0
 * @category adapters
 */
export const toClientRequestHandler = (
  requestHandler: RequestHandler,
  config: RuntimeOptions,
): ClientRequestHandler<HttpRequest, HttpResponse, HttpHandlerOptions> => {
  const runPromise = Effect.runPromiseWith(config.runtime);
  const scoped = Scope.provide(config.scope);

  class HttpHandler implements ClientRequestHandler<HttpRequest, HttpResponse, HttpHandlerOptions> {
    handle(request: HttpRequest, options: HttpHandlerOptions = {}) {
      return runPromise(
        requestHandler.handle(request, options).pipe(scoped),
        { signal: options.abortSignal as AbortSignal },
      );
    }
  }

  return new HttpHandler();
};
