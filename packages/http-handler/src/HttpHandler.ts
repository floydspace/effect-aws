/**
 * @since 0.1.0
 */
import * as HttpHandler from "@effect-aws/commons/HttpHandler";
import type { HttpHandlerOptions } from "@effect-aws/commons/Types";
import * as Layer from "effect/Layer";
import { makeHttpClientRequestHandler } from "./internal/httpHandler.js";

/**
 * @since 0.1.0
 * @category layers
 */
export const layer = (config?: HttpHandlerOptions) =>
  Layer.effect(HttpHandler.RequestHandler, makeHttpClientRequestHandler(config ?? {}));
