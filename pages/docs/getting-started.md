# Getting Started

This section uses S3 service as an example to illustrate the common interface for AWS services. Due to the fact that services are generated with [codegen](codegen.md) the instructions here apply to all AWS services equally.

> [!NOTE]
> As a prerequisite, you need `effect` be installed already.

## 1. Install the service package

First thing you need to do is to install the service package

::: code-group

```sh [npm]
npm install @effect-aws/client-s3
```

```sh [yarn]
yarn add @effect-aws/client-s3
```

```sh [pnpm]
pnpm add @effect-aws/client-s3
```

```sh [bun]
bun add @effect-aws/client-s3
```

:::

> [!TIP]
> Other AWS services are available in the same way, just replace `s3` with the service name you want to use, e.g. `@effect-aws/client-dynamodb`.

## 2. Implement a program

Next, you need to import the service, yield it to get access to the service methods and call the methods you need.

::: code-group

```ts{1,6-9} [.gen]
import { S3Service } from "@effect-aws/client-s3"
import { Effect } from "effect"

//       ┌─── Effect.Effect<HeadObjectCommandOutput, TimeoutException | SdkError | NotFoundError, S3Service>
//       ▼
const program = Effect.gen(function* () {
  const s3 = yield* S3Service
  return s3.headObject({ Bucket: "test", Key: "test" })
})
```

```ts{1,6-8} [.pipe]
import { S3Service } from "@effect-aws/client-s3"
import { Effect } from "effect"

//       ┌─── Effect.Effect<HeadObjectCommandOutput, TimeoutException | SdkError | NotFoundError, S3Service>
//       ▼
const program = S3Service.pipe(
  Effect.flatMap((s3) => s3.headObject({ Bucket: "test", Key: "test" }))
)
```

:::

> [!TIP]
> Libraries also export simplified alias for the service, so you can use `S3` instead of `S3Service`

You can also use service accessor directly, which is a more concise way to access the service methods:

```ts{1,6}
import { S3Service } from "@effect-aws/client-s3"
import { Effect } from "effect"

//       ┌─── Effect.Effect<HeadObjectCommandOutput, TimeoutException | SdkError | NotFoundError, S3Service>
//       ▼
const program = S3Service.headObject({ Bucket: "test", Key: "test" })
```

> [!WARNING]
> Be cautious when using service accessors, as they could lead to requirements leakage when used in downstream services. Read more about [Avoiding Requirement Leakage](https://effect.website/docs/requirements-management/layers/#avoiding-requirement-leakage).

## 3. Run the program

Finally, you can run the program using `Effect.run*` family of functions. But to make typescript compiler happy, you need to **provide** the service layer.

::: code-group

```ts{9} [defaultLayer]
import { S3Service } from "@effect-aws/client-s3"
import { Effect } from "effect"

const program = S3Service.headObject({ Bucket: "test", Key: "test" })

//       ┌─── HeadObjectCommandOutput // [!code focus]
//       ▼ // [!code focus]
const result = await program.pipe( // [!code focus]
  Effect.provide(S3Service.defaultLayer), // [!code focus]
  Effect.runPromise // [!code focus]
) // [!code focus]
```

```ts{9} [layer]
import { S3Service } from "@effect-aws/client-s3"
import { Effect } from "effect"

const program = S3Service.headObject({ Bucket: "test", Key: "test" })

//       ┌─── HeadObjectCommandOutput // [!code focus]
//       ▼ // [!code focus]
const result = await program.pipe( // [!code focus]
  Effect.provide(S3Service.layer({ region: "eu-central-1" })), // [!code focus]
  Effect.runPromise // [!code focus]
) // [!code focus]
```

```ts{9} [baseLayer]
import { S3Service } from "@effect-aws/client-s3"
import { Effect } from "effect"

const program = S3Service.headObject({ Bucket: "test", Key: "test" })

//       ┌─── HeadObjectCommandOutput // [!code focus]
//       ▼ // [!code focus]
const result = await program.pipe( // [!code focus]
  Effect.provide(S3Service.baseLayer(() => new S3Client({ region: "eu-central-1" }))), // [!code focus]
  Effect.runPromise // [!code focus]
) // [!code focus]
```

:::

There are 3 flavors of service layers you can use:

- `defaultLayer` - with default AWS client constructor configuration, it is literally same as `new S3Client({ logger })`
- `layer(config)` - with custom configuration, it is same as `new S3Client(config)`
- `baseLayer(() => client)` - with custom AWS native client (useful for integration with other libraries, which may extend AWS client class)
