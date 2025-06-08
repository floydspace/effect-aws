---
"@effect-aws/dynamodb": major
"@effect-aws/lib-dynamodb": patch
---

Implement `dynamodb` package in favour of `lib-dynamodb` for consistency

`lib-dynamodb` re-exports the `dynamodb` package, so this change is not breaking.

`dynamodb` package additionally provides DynamoDBStore datatype:

```ts
import { DynamoDBDocumentService, DynamoDBStore } from "@effect-aws/dynamodb"
import { Effect } from "effect"

const program = DynamoDBStore.scan({})

program.pipe(
  Effect.provide(DynamoDBStore.layer({ tableName: "my-table" })),
  Effect.provide(DynamoDBDocumentService.defaultLayer),
  Effect.runPromise
)
```

provides simpler API for operating with DynamoDB as a single store.
