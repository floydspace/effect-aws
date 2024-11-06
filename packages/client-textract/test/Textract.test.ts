import {
  type ListAdaptersCommandInput,
  ListAdaptersCommand,
  TextractClient,
  TextractServiceException,
} from "@aws-sdk/client-textract";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseTextractServiceLayer,
  DefaultTextractClientConfigLayer,
  DefaultTextractServiceLayer,
  TextractClientInstance,
  TextractClientInstanceConfig,
  TextractService,
  TextractServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(TextractClient);

describe("TextractClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListAdaptersCommand).resolves({});

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = TextractService.listAdapters(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultTextractServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListAdaptersCommand).resolves({});

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = TextractService.listAdapters(args);

    const TextractClientConfigLayer = Layer.succeed(
      TextractClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomTextractServiceLayer = TextractServiceLayer.pipe(
      Layer.provide(TextractClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomTextractServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListAdaptersCommand).resolves({});

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = TextractService.listAdapters(args);

    const TextractClientInstanceLayer = Layer.succeed(
      TextractClientInstance,
      new TextractClient({ region: "eu-central-1" }),
    );
    const CustomTextractServiceLayer = BaseTextractServiceLayer.pipe(
      Layer.provide(TextractClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomTextractServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListAdaptersCommand).resolves({});

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = TextractService.listAdapters(args);

    const TextractClientInstanceLayer = Layer.effect(
      TextractClientInstance,
      Effect.map(
        TextractClientInstanceConfig,
        (config) => new TextractClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomTextractServiceLayer = BaseTextractServiceLayer.pipe(
      Layer.provide(TextractClientInstanceLayer),
      Layer.provide(DefaultTextractClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomTextractServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListAdaptersCommand).rejects(new Error("test"));

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = TextractService.listAdapters(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultTextractServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListAdaptersCommand)
      .rejects(
        new TextractServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = TextractService.listAdapters(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultTextractServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });
});
