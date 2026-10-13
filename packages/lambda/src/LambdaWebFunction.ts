/**
 * Run Effect HTTP servers on AWS Lambda Web Functions.
 *
 * @since 2.1.0
 */
import * as NodeHttpServer from "@effect/platform-node/NodeHttpServer";
import * as Config from "effect/Config";
import * as Schema from "effect/Schema";
import { createServer } from "node:http";
import { isIPv6 } from "node:net";

const Endpoint = Schema.TemplateLiteralParser([
  Schema.String.check(
    Schema.isPattern(/^(?:[a-zA-Z0-9._-]+|\[[a-fA-F0-9:.]+\])$/),
    Schema.makeFilter((host) => !host.startsWith("[") || isIPv6(host.slice(1, -1))),
  ),
  ":",
  Schema.String.check(Schema.isPattern(/^\d+$/)).pipe(
    Schema.decodeTo(Schema.NumberFromString.check(Schema.isInt(), Schema.isBetween({ minimum: 0, maximum: 65535 }))),
  ),
]);

/**
 * Reads the listen address supplied by Lambda. Set `AWS_LAMBDA_HTTP_ENDPOINT`
 * explicitly for local development, for example `127.0.0.1:3000`.
 * Port zero is supported for local tests using an ephemeral port.
 *
 * @since 2.1.0
 * @category configuration
 */
export const endpoint = Config.schema(
  Endpoint,
  "AWS_LAMBDA_HTTP_ENDPOINT",
).pipe(
  Config.map(([host, , port]) => ({
    host: host.startsWith("[") ? host.slice(1, -1) : host,
    port,
  })),
);

/**
 * Provides a scoped Node HTTP server and its platform services, listening on
 * `AWS_LAMBDA_HTTP_ENDPOINT`. Compose with `HttpRouter.serve` or `HttpServer.serve`
 * and run with `Layer.launch` and `NodeRuntime.runMain` for signal handling.
 *
 * Request draining is limited to 500 milliseconds to leave time for other
 * finalizers within Lambda's one-second SIGTERM cleanup window. Cleanup is
 * best-effort; Lambda can terminate the process before finalizers complete.
 *
 * @since 2.1.0
 * @category layers
 */
export const layer = NodeHttpServer.layerConfig(
  createServer,
  endpoint.pipe(Config.map((address) => ({ ...address, gracefulShutdownTimeout: "500 millis" }))),
);
