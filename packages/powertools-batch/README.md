# @effect-aws/powertools-batch

Process batch of records in AWS Lambda using [Effect](https://www.effect.website/). Inspired by [`@aws-lambda-powertools/batch`](https://docs.powertools.aws.dev/lambda/typescript/latest/features/batch) package.

[![npm version](https://img.shields.io/npm/v/%40effect-aws%2Fpowertools-batch?color=brightgreen&label=npm%20package)](https://www.npmjs.com/package/@effect-aws/powertools-batch)
[![npm downloads](https://img.shields.io/npm/dm/%40effect-aws%2Fpowertools-batch)](https://www.npmjs.com/package/@effect-aws/powertools-batch)

## Installation

```bash
npm install --save @effect-aws/powertools-batch
```

## Usage

With Kinesis Data Streams:

```typescript
import { LambdaHandler } from "@effect-aws/lambda";
import { BatchProcessor, EventType, processPartialResponse } from "@effect-aws/powertools-batch";
import type { KinesisStreamEvent, KinesisStreamRecord } from "aws-lambda";
import { Effect } from "effect";

const recordHandler = (record: KinesisStreamRecord) =>
  Effect.gen(function*() {
    return yield* Effect.logInfo(`Processing record: ${record.kinesis.data}`);
  });

const HandlerLive = BatchProcessor({ eventType: EventType.KinesisDataStreams });

export const handler = LambdaHandler.make({
  handler: (event: KinesisStreamEvent) => processPartialResponse(event, recordHandler),
  layer: HandlerLive,
});
```

With DynamoDB Streams:

```typescript
import { LambdaHandler } from "@effect-aws/lambda";
import { BatchProcessor, EventType, processPartialResponse } from "@effect-aws/powertools-batch";
import type { DynamoDBStreamEvent, DynamoDBStreamRecord } from "aws-lambda";
import { Effect } from "effect";

const recordHandler = (record: DynamoDBStreamRecord) =>
  Effect.gen(function*() {
    return yield* Effect.logInfo(`Processing record: ${record.dynamodb.NewImage}`);
  });

const HandlerLive = BatchProcessor({ eventType: EventType.DynamoDBStreams });

export const handler = LambdaHandler.make({
  handler: (event: DynamoDBStreamEvent) => processPartialResponse(event, recordHandler),
  layer: HandlerLive,
});
```

With SQS:

```typescript
import { LambdaHandler } from "@effect-aws/lambda";
import { BatchProcessor, EventType, processPartialResponse } from "@effect-aws/powertools-batch";
import type { SQSEvent, SQSRecord } from "aws-lambda";
import { Effect } from "effect";

const recordHandler = (record: SQSRecord) =>
  Effect.gen(function*() {
    return yield* Effect.logInfo(`Processing record: ${record.body}`);
  });

const HandlerLive = BatchProcessor({ eventType: EventType.SQS });

export const handler = LambdaHandler.make({
  handler: (event: SQSEvent) => processPartialResponse(event, recordHandler),
  layer: HandlerLive,
});
```
