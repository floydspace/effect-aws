import * as LambdaWebFunction from "@effect-aws/lambda/LambdaWebFunction";
import { ConfigProvider, Effect, Exit, Layer, Schema, Stream } from "effect";
import { HttpRouter, HttpServer, HttpServerRequest, HttpServerResponse } from "effect/http";
import { HttpApi, HttpApiBuilder, HttpApiEndpoint, HttpApiGroup } from "effect/http-api";
import { describe, expect, it, vi } from "vitest";

const configuration = (value?: string) =>
  ConfigProvider.layer(ConfigProvider.fromUnknown(
    value === undefined ? {} : { AWS_LAMBDA_HTTP_ENDPOINT: value },
  ));

describe("LambdaWebFunction", () => {
  it.each(
    [
      ["127.0.0.1:3000", { host: "127.0.0.1", port: 3000 }],
      ["localhost:8080", { host: "localhost", port: 8080 }],
      ["[::1]:3000", { host: "::1", port: 3000 }],
      ["[::ffff:127.0.0.1]:3000", { host: "::ffff:127.0.0.1", port: 3000 }],
      ["127.0.0.1:0", { host: "127.0.0.1", port: 0 }],
      ["0.0.0.0:65535", { host: "0.0.0.0", port: 65535 }],
    ] as const,
  )("reads the listen address %s", async (value, expected) => {
    const result = await LambdaWebFunction.endpoint.pipe(
      Effect.provide(configuration(value)),
      Effect.runPromiseExit,
    );
    expect(result).toEqual(Exit.succeed(expected));
  });

  it.each([
    undefined,
    "",
    "localhost",
    ":3000",
    "localhost:",
    "localhost:abc",
    "localhost:-1",
    "localhost:65536",
    "localhost:3.5",
    "localhost:3e3",
    "localhost: 3000",
    "http://localhost:3000",
    "localhost:3000/path",
    "::1:3000",
    "[abc]:3000",
    "[:::1]:3000",
  ])("fails with ConfigError for %s before starting a server", async (value) => {
    const result = await Layer.build(LambdaWebFunction.layer).pipe(
      Effect.scoped,
      Effect.provide(configuration(value)),
      Effect.flip,
      Effect.map((error) => error._tag),
      Effect.runPromiseExit,
    );
    expect(result).toEqual(Exit.succeed("ConfigError"));
  });

  it("serves HttpApi and streaming routes, isolates concurrent requests, and closes its scope", async () => {
    const release = vi.fn();
    const api = HttpApi.make("WebApi").add(
      HttpApiGroup.make("api").add(HttpApiEndpoint.get("hello", "/hello", { success: Schema.String })),
    );
    const handlers = HttpApiBuilder.group(
      api,
      "api",
      (handlers) => handlers.handle("hello", () => Effect.succeed("hello")),
    );
    const apiRoutes = HttpApiBuilder.layer(api).pipe(Layer.provide(handlers));
    const streamRoute = HttpRouter.use((router) =>
      router.add(
        "GET",
        "/stream",
        Effect.gen(function*() {
          const request = yield* HttpServerRequest.HttpServerRequest;
          const id = request.headers["lambda-web-request-id"] ?? "missing";
          return HttpServerResponse.stream(
            Stream.fromIterable([id, "\ndone\n"]).pipe(Stream.encodeText),
            { contentType: "text/plain" },
          );
        }),
      )
    );
    const resources = Layer.effectDiscard(Effect.acquireRelease(
      Effect.void,
      () => Effect.sync(release),
    ));
    const server = HttpRouter.serve(Layer.mergeAll(apiRoutes, streamRoute, resources), {
      disableListenLog: true,
      disableLogger: true,
    }).pipe(
      Layer.provideMerge(LambdaWebFunction.layer),
      Layer.provide(configuration("127.0.0.1:0")),
    );
    let address = "";
    const result = await Effect.gen(function*() {
      const server = yield* HttpServer.HttpServer;
      address = HttpServer.formatAddress(server.address);
      const hello = yield* Effect.tryPromise(async () => {
        const response = await fetch(`${address}/hello`);
        return { body: await response.json(), status: response.status };
      });
      const streams = yield* Effect.all(
        ["first", "second"].map((id) =>
          Effect.tryPromise(async () => {
            const response = await fetch(`${address}/stream`, { headers: { "lambda-web-request-id": id } });
            return response.text();
          })
        ),
        { concurrency: "unbounded" },
      );
      return { hello, streams };
    }).pipe(
      Effect.provide(server),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({
      hello: { body: "hello", status: 200 },
      streams: ["first\ndone\n", "second\ndone\n"],
    }));
    expect(release).toHaveBeenCalledOnce();
    await expect(fetch(`${address}/hello`)).rejects.toThrow();
  });
});
