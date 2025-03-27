# @effect-aws/s3

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fs3?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/s3)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fs3)](https://www.npmjs.com/package/@effect-aws/s3)

This package provides the `S3FileSystem` implementation for platform [FileSystem](https://effect.website/docs/platform/file-system) tag.
You can use it to operate on files in an S3 bucket as if they were local files.

## Installation

```bash
npm install --save @effect-aws/s3 @effect-aws/client-s3
```

## Usage

**Example** (Reading a File as a String)

```ts
import { S3 } from "@effect-aws/client-s3"
import { S3FileSystem } from "@effect-aws/s3"
import { FileSystem } from "@effect/platform"
import { NodeRuntime } from "@effect/platform-node"
import { Effect } from "effect"

const program = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem

  // Reading the content of the same file where this code is written
  const content = yield* fs.readFileString("content.txt")
  console.log(content)
})

// Provide the necessary context and run the program
NodeRuntime.runMain(
  program.pipe(
    //                            ┌─── Layer<FileSystem, never, S3Service>
    //                            ▼
    Effect.provide(S3FileSystem.layer({ bucketName: "example-bucket" })),
    Effect.provide(S3.defaultLayer)
  )
)
```

**Example** ([Using Schema Validation in `KeyValueStore`](https://effect.website/docs/platform/key-value-store/#schemastore)):

```ts
import { S3 } from "@effect-aws/client-s3"
import { S3FileSystem } from "@effect-aws/s3"
import { Path } from "@effect/platform"
import { KeyValueStore } from "@effect/platform"
import { Effect, Layer, Schema } from "effect"

// Define a schema for the values
const Person = Schema.Struct({
  name: Schema.String,
  age: Schema.Number
})

const program = Effect.gen(function* () {
  // Create a SchemaStore based on the Person schema
  const kv = (yield* KeyValueStore.KeyValueStore).forSchema(Person)

  // Add a value that adheres to the schema
  const value = { name: "Alice", age: 30 }
  yield* kv.set("user1", value)
  console.log(yield* kv.size)

  // Retrieve and log the value
  console.log(yield* kv.get("user1"))
})

const mainLayer = KeyValueStore.layerFileSystem("store").pipe(
  Layer.provide(S3FileSystem.layer({ bucketName: "example-bucket" })),
  Layer.provide(S3.defaultLayer),
  Layer.provide(Path.layer)
)

// Use the S3 file system store implementation
Effect.runPromise(program.pipe(Effect.provide(mainLayer)))
/*
  Output:
  1
  { _id: 'Option', _tag: 'Some', value: { name: 'Alice', age: 30 } }
  */
```
