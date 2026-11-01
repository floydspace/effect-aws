/**
 * Run Effect HTTP servers on AWS Lambda Web Functions.
 *
 * @since 2.1.0
 */
import * as NodeHttpServer from "@effect/platform-node/NodeHttpServer";
import * as Config from "effect/Config";
import * as Schema from "effect/Schema";
import * as SchemaGetter from "effect/SchemaGetter";
import { createServer } from "node:http";
import { isIPv6 } from "node:net";

const Hostname = Schema.String.check(
  Schema.isPattern(/^[a-zA-Z0-9._-]+$/),
);

// IPv6 literals are bracketed in `host:port`, e.g. "[::1]:3000"; decoding yields the bare address.
const BracketedIPv6 = Schema.String.check(Schema.isPattern(/^\[.+\]$/)).pipe(
  Schema.decodeTo(
    Schema.String.check(Schema.makeFilter(isIPv6)),
    {
      decode: SchemaGetter.transform((value) => value.slice(1, -1)),
      encode: SchemaGetter.transform((address) => `[${address}]`),
    },
  ),
);

const Host = Schema.Union([Hostname, BracketedIPv6]);

// The digits-only pattern stops NumberFromString from accepting values like " 3000" or "3e3".
const Port = Schema.String.check(Schema.isPattern(/^\d+$/)).pipe(
  Schema.decodeTo(
    Schema.NumberFromString.check(
      Schema.isInt(),
      Schema.isBetween({ minimum: 0, maximum: 65535 }),
    ),
  ),
);

const Endpoint = Schema.TemplateLiteralParser([Host, ":", Port]);

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
  Config.map(([host, , port]) => ({ host, port })),
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
