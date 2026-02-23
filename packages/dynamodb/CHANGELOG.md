# @effect-aws/dynamodb

## 2.0.0-beta.1

### Patch Changes

- [`56d5efb`](https://github.com/floydspace/effect-aws/commit/56d5efb1dbf1d8b60720a95e1cc71013d1a390cd) Thanks [@floydspace](https://github.com/floydspace)! - use named imports instead of barrel

- Updated dependencies [[`56d5efb`](https://github.com/floydspace/effect-aws/commit/56d5efb1dbf1d8b60720a95e1cc71013d1a390cd)]:
  - @effect-aws/client-dynamodb@2.0.0-beta.1
  - @effect-aws/commons@1.0.0-beta.1

## 2.0.0-beta.0

### Major Changes

- [#198](https://github.com/floydspace/effect-aws/pull/198) [`57b06d0`](https://github.com/floydspace/effect-aws/commit/57b06d0474b35ae754e8e1b0a317e15669191779) Thanks [@floydspace](https://github.com/floydspace)! - Migrate to effect v4

### Patch Changes

- Updated dependencies [[`57b06d0`](https://github.com/floydspace/effect-aws/commit/57b06d0474b35ae754e8e1b0a317e15669191779)]:
  - @effect-aws/client-dynamodb@2.0.0-beta.0
  - @effect-aws/commons@1.0.0-beta.0

## 1.0.3

### Patch Changes

- Updated dependencies [[`582a7b0`](https://github.com/floydspace/effect-aws/commit/582a7b031638287f27362b84b69f2d4be63425d3)]:
  - @effect-aws/commons@0.3.1
  - @effect-aws/client-dynamodb@1.10.9

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
