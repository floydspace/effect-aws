# Effect Patterns

This project uses [Effect](https://www.effect.website/) for typed functional programming with dependency injection, structured errors, and composable layers.

## Service Layer Pattern

Every AWS client wrapper follows this structure:

```typescript
import type { GetObjectCommandInput, GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { Data, Effect, Layer } from "effect";

// 1. Service interface (branded with unique symbol)
interface S3Service$ {
  readonly _: unique symbol;
  getObject(args: GetObjectCommandInput): Effect.Effect<GetObjectCommandOutput, S3ServiceErrors>;
}

// 2. Factory -- constructs the service from a client instance
const makeS3Service = Effect.gen(function*() {
  const client = yield* S3ClientInstance;
  return yield* Service.fromClientAndCommands(client, commands);
});

// 3. Tag class -- provides DI token + layer constructors
export class S3Service extends Effect.Tag("@effect-aws/client-s3/S3Service")<S3Service, S3Service$>() {
  static readonly defaultLayer = Layer.effect(this, makeS3Service).pipe(
    Layer.provide(S3ClientInstance.layer),
  );
  static readonly layer = (config: S3ClientConfig) =>
    Layer.effect(this, makeS3Service).pipe(
      Layer.provide(S3ClientInstance.layer(config)),
    );
  static readonly baseLayer = (evaluate: LazyArg<S3Client>) =>
    Layer.effect(this, makeS3Service).pipe(
      Layer.provide(S3ClientInstance.baseLayer(evaluate)),
    );
}
```

The three layer constructors:
- `defaultLayer` -- zero-config, uses AWS SDK defaults
- `layer(config)` -- accepts SDK client config
- `baseLayer(evaluate)` -- accepts a lazy client instance for full control

## Effect.gen

Use `Effect.gen(function*() { ... })` with `yield*` for sequencing effects:

```typescript
const program = Effect.gen(function*() {
  const s3 = yield* S3Service;
  const result = yield* s3.getObject({ Bucket: "b", Key: "k" });
  return result.Body;
});
```

Do not mix raw `Promise`/`async-await` into Effect pipelines. Use `Effect.tryPromise` to wrap external promise-based APIs.

## Error Handling

All AWS SDK exceptions are converted to tagged errors via `Data.tagged`:

```typescript
// Catch a specific error
program.pipe(
  Effect.catchTag("NoSuchKey", (error) => Effect.succeed(null)),
);

// Catch multiple errors
program.pipe(
  Effect.catchTags({
    NoSuchKey: () => Effect.succeed(null),
    SdkError: (error) => Effect.fail(new AppError(error.message)),
  }),
);
```

`SdkError` is the catch-all for unrecognized exceptions and generic `Error` instances.

## Providing Layers

Always: `Effect.provide(program, layer)` -- program first, layer second.

```typescript
// Correct
const result = await program.pipe(
  Effect.provide(S3Service.defaultLayer),
  Effect.runPromiseExit,
);

// Also correct (pipe-last style)
const result = await Effect.runPromiseExit(
  Effect.provide(program, S3Service.defaultLayer),
);
```

## Companion Namespaces

Service classes use companion `declare namespace` blocks for associated types:

```typescript
export class DynamoDBDocumentService extends Effect.Tag(...)(...) {
  // ... layer methods
}

export declare namespace DynamoDBDocumentService {
  export type Config = typeof makeConfig;
  export type Type = Effect.Effect.Success<typeof makeDynamoDBDocumentService>;
}
```
