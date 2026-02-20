# Testing Patterns

Framework: **Vitest** with **aws-sdk-client-mock** for mocking AWS SDK clients.

## Running Tests

```bash
pnpm vitest run --reporter verbose packages/dynamodb                            # one package
pnpm vitest run --reporter verbose packages/lambda/test/LambdaHandler.test.ts   # one file
pnpm vitest run --reporter verbose -t "pattern" packages/client-s3              # by name
```

## Standard Test Structure

```typescript
import { mockClient } from "aws-sdk-client-mock";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { DynamoDBDocumentService, SdkError } from "@effect-aws/dynamodb";
import { Effect, Exit } from "effect";

const clientMock = mockClient(DynamoDBDocumentClient);

afterEach(() => {
  clientMock.mockClear();
});

describe("DynamoDBDocumentService", () => {
  it("returns item on success", async () => {
    clientMock.on(GetCommand).resolves({ Item: { id: "1" } });

    const result = await DynamoDBDocumentService.get({
      TableName: "t",
      Key: { id: "1" },
    }).pipe(
      Effect.provide(DynamoDBDocumentService.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({ Item: { id: "1" } }));
  });

  it("returns SdkError on failure", async () => {
    clientMock.on(GetCommand).rejects(new Error("boom"));

    const result = await DynamoDBDocumentService.get({
      TableName: "t",
      Key: { id: "1" },
    }).pipe(
      Effect.provide(DynamoDBDocumentService.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(SdkError({ ...new Error("boom"), name: "SdkError" })),
    );
  });
});
```

## Key Patterns

**Assert with `Exit`**: Always use `Effect.runPromiseExit` and compare against `Exit.succeed(...)` / `Exit.fail(...)`. Do not use `.runPromise` with try/catch.

**Custom AWS matchers** (from `aws-sdk-client-mock-vitest`, registered in `vitest.setup.ts`):

```typescript
expect(clientMock).toHaveReceivedCommandOnce();
expect(clientMock).toHaveReceivedCommandTimes(GetCommand, 2);
expect(clientMock).toHaveReceivedCommandWith(GetCommand, {
  TableName: "t",
  Key: { id: "1" },
});
```

**Testing layers**: Test `defaultLayer`, `layer(config)`, and `baseLayer(evaluate)` separately. Use `vi.spyOn` to verify config values reach the SDK client.

**Lambda handlers**: For `LambdaHandler.make` tests, construct mock events/contexts inline. Use `vi.fn()` to assert callbacks and `process.emit("SIGTERM")` to test graceful shutdown.
