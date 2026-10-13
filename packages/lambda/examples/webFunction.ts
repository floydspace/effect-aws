import * as LambdaWebFunction from "@effect-aws/lambda/LambdaWebFunction";
import { NodeRuntime } from "@effect/platform-node";
import { Effect, Layer } from "effect";
import { HttpRouter, HttpServerResponse } from "effect/http";

const Routes = HttpRouter.use((router) =>
  router.add("GET", "/", Effect.succeed(HttpServerResponse.text("Hello from Lambda Web Functions!")))
);

HttpRouter.serve(Routes).pipe(
  Layer.provide(LambdaWebFunction.layer),
  Layer.launch,
  NodeRuntime.runMain,
);
