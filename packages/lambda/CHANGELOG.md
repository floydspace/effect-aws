# @effect-aws/lambda

## 1.5.1

### Patch Changes

- [#168](https://github.com/floydspace/effect-aws/pull/168) [`85b3bd0`](https://github.com/floydspace/effect-aws/commit/85b3bd001dc0b5dcbedf273483e4bbf81d17f0dc) Thanks [@godu](https://github.com/godu)! - update @effect/platform

## 1.5.0

### Minor Changes

- [#167](https://github.com/floydspace/effect-aws/pull/167) [`8e4c246`](https://github.com/floydspace/effect-aws/commit/8e4c2461847261826f2d443d97da8176031dc4ed) Thanks [@floydspace](https://github.com/floydspace)! - Implement streaming lambda handler

  ### Usage

  ```ts
  import { LambdaHandler, StreamHandler } from "@effect-aws/lambda";
  import { NodeStream } from "@effect/platform-node";
  import type { LambdaFunctionURLEvent } from "aws-lambda";
  import { Cause, Stream } from "effect";
  import { createGzip } from "node:zlib";

  /**
   * Streaming handler that takes a Lambda Function URL event, compresses it using gzip and
   * returns the compressed data as a stream.
   */
  const streamHandler: StreamHandler<
    LambdaFunctionURLEvent,
    never,
    Cause.UnknownException
  > = (event) => {
    return Stream.make(Buffer.from(JSON.stringify(event))).pipe(
      Stream.pipeThroughChannelOrFail(
        NodeStream.fromDuplex(
          () => createGzip(),
          (e) => new Cause.UnknownException(e),
        ),
      ),
    );
  };

  export const handler = LambdaHandler.stream(streamHandler);
  ```

  Set the lambda function URL `InvokeMode` to `RESPONSE_STREAM`:

  ```yaml
  MyFunctionUrl:
    Type: AWS::Lambda::Url
    Properties:
      TargetFunctionArn: !Ref StreamingFunction
      AuthType: AWS_IAM
      InvokeMode: RESPONSE_STREAM
  ```

  deploy the stack, and then invoke the function URL:

  ```bash
  curl --request GET https://<url>.lambda-url.<Region>.on.aws/ --user $AWS_ACCESS_KEY_ID:$AWS_SECRET_ACCESS_KEY --aws-sigv4 'aws:amz:<Region>:lambda' --output response.gz
  ```

## 1.4.2

### Patch Changes

- [#157](https://github.com/floydspace/effect-aws/pull/157) [`6dc0b02`](https://github.com/floydspace/effect-aws/commit/6dc0b021cb0e091586135a80c504c90f6a954eb4) Thanks [@floydspace](https://github.com/floydspace)! - Implement `LambdaHandler.event()` and `LambdaHandler.context()` to access raw lambda event and context

  Just yield them within api handler:

  ```ts
  //...
  import { type APIGatewayProxyEvent, LambdaHandler } from "@effect-aws/lambda";
  //...
  const HelloLive = HttpApiBuilder.group(MyApi, "hello", (handlers) =>
    handlers.handle("hello", () =>
      Effect.gen(function* () {
        const event = yield* LambdaHandler.event<APIGatewayProxyEvent>();
        const context = yield* LambdaHandler.context();

        yield* Effect.logInfo("Lambda event", { event, context });

        return yield* Effect.succeed("Hello, World!");
      }),
    ),
  );
  //...
  ```

## 1.4.1

### Patch Changes

- [#153](https://github.com/floydspace/effect-aws/pull/153) [`2229139`](https://github.com/floydspace/effect-aws/commit/22291392f8fea1d2643107e289fcc2320c79f7e1) Thanks [@floydspace](https://github.com/floydspace)! - Refactor `fromHttpApi` function in more effectful way

## 1.4.0

### Minor Changes

- [#86](https://github.com/floydspace/effect-aws/pull/86) [`f3c17c8`](https://github.com/floydspace/effect-aws/commit/f3c17c81982fe4fc88a88a390b62b08285249ee5) Thanks [@floydspace](https://github.com/floydspace)! - add an option to make lambda handler from platform httpApi, for instance

  ```ts
  import { LambdaHandler } from "@effect-aws/lambda";
  import { HttpApi, HttpApiBuilder, HttpServer } from "@effect/platform";
  import { Layer } from "effect";

  class MyApi extends HttpApi.make("api") {}

  const MyApiLive = HttpApiBuilder.api(MyApi);

  //              ┌─── Handler<LambdaEvent, LambdaResult>
  //              ▼
  export const handler = LambdaHandler.fromHttpApi(
    Layer.mergeAll(
      MyApiLive,
      // you could also use NodeHttpServer.layerContext, depending on your
      // server's platform
      HttpServer.layerContext,
    ),
  );
  ```

## 1.3.1

### Patch Changes

- [`79243fb`](https://github.com/floydspace/effect-aws/commit/79243fbf4ec548c6f77b092a60560c3f2418e74f) Thanks [@floydspace](https://github.com/floydspace)! - Properly prioritize `makeLambda` overloads

## 1.3.0

### Minor Changes

- [`084ac9e`](https://github.com/floydspace/effect-aws/commit/084ac9e779199303bd681131712f97d90341b89c) Thanks [@floydspace](https://github.com/floydspace)! - - Defined `EffectHandlerWithLayer` type to configure global layer with unary argument which is more safe. Dual arguments approach is deprecated.

  Here is how to migrate from old dual arguments approach:

  ```diff
  - export const handler = makeLambda(effectHandler, LambdaLayer);
  + export const handler = makeLambda({
  +  handler: effectHandler,
  +  layer: LambdaLayer,
  + });
  ```

  - `fromLayer` function now returns `ManagedRuntime`

    Here is how to migrate if you use `fromLayer` function directly:

    ```diff
    import { fromLayer } from "@effect-aws/lambda";
    import { Context } from "aws-lambda";
    - import { Effect, Logger, Runtime } from "effect";
    + import { Effect, Logger } from "effect";

    const LambdaLayer = Logger.replace(Logger.defaultLogger, Logger.logfmtLogger);

    const lambdaRuntime = fromLayer(LambdaLayer);

    export const handler = async (event: unknown, context: Context) => {
    -  const runPromise = Runtime.runPromise(await lambdaRuntime);
    -  return Effect.logInfo("Hello, world!").pipe(runPromise);
    +  return Effect.logInfo("Hello, world!").pipe(lambdaRuntime.runPromise);
    };
    ```

## 1.2.1

### Patch Changes

- [#106](https://github.com/floydspace/effect-aws/pull/106) [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f) Thanks [@floydspace](https://github.com/floydspace)! - drop support for effect version lower than 3.0.4

## 1.2.0

### Minor Changes

- [`0cfcda0`](https://github.com/floydspace/effect-aws/commit/0cfcda0d5617916d966807f5d5120df9ba461c12) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v3

## 1.1.1

### Patch Changes

- [`b2f00db`](https://github.com/floydspace/effect-aws/commit/b2f00db5fdffaa74bcb124324db7313bd4f218df) Thanks [@floydspace](https://github.com/floydspace)! - update effect peer version

## 1.1.0

### Minor Changes

- [`82eaea7`](https://github.com/floydspace/effect-aws/commit/82eaea778048c9ebba98682196448b0aa1586d2e) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v2.3 and fix breaking changes

## 1.0.2

### Patch Changes

- [`88676ae`](https://github.com/floydspace/effect-aws/commit/88676ae3a5f7fa514cab58ba83a50a0774be1aa1) Thanks [@floydspace](https://github.com/floydspace)! - use effect@~2.2 as maximum allowed peer version

## 1.0.1

### Patch Changes

- [#29](https://github.com/floydspace/effect-aws/pull/29) [`4b6c521`](https://github.com/floydspace/effect-aws/commit/4b6c521206c8ff76ff878938f6b90ee474cc8da2) Thanks [@godu](https://github.com/godu)! - improve tree shaking by using sideEffects flag

## 1.0.0

### Major Changes

- [`4fd7bb9`](https://github.com/floydspace/effect-aws/commit/4fd7bb91d487117eb565b7d41e3d7d1e9a9eb66d) Thanks [@floydspace](https://github.com/floydspace)! - implement effect handler with global runtime
