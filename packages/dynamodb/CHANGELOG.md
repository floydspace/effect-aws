# @effect-aws/dynamodb

## 1.0.2

### Patch Changes

- Updated dependencies [[`f1b4ec8`](https://github.com/floydspace/effect-aws/commit/f1b4ec8fed35a1074a17451a8a39ab39e13863ac)]:
  - @effect-aws/client-dynamodb@1.10.6

## 1.0.1

### Patch Changes

- [`126967b`](https://github.com/floydspace/effect-aws/commit/126967b668fae2c109425ee66bf28b5145f42100) Thanks [@floydspace](https://github.com/floydspace)! - fix tag ids

## 1.0.0

### Major Changes

- [#171](https://github.com/floydspace/effect-aws/pull/171) [`780342f`](https://github.com/floydspace/effect-aws/commit/780342f09d99b547fcf9d409bdf7bdca57f9320a) Thanks [@floydspace](https://github.com/floydspace)! - Implement `dynamodb` package in favour of `lib-dynamodb` for consistency

  `lib-dynamodb` re-exports the `dynamodb` package, so this change is not breaking.

  `dynamodb` package additionally provides DynamoDBStore datatype:

  ```ts
  import { DynamoDBDocumentService, DynamoDBStore } from "@effect-aws/dynamodb";
  import { Effect } from "effect";

  const program = DynamoDBStore.scan({});

  program.pipe(
    Effect.provide(DynamoDBStore.layer({ tableName: "my-table" })),
    Effect.provide(DynamoDBDocumentService.defaultLayer),
    Effect.runPromise,
  );
  ```

  provides simpler API for operating with DynamoDB as a single store.
