import {
  type ListAdaptersCommandInput,
  ListAdaptersCommand,
  TextractClient,
  TextractServiceException,
} from "@aws-sdk/client-textract";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-textract/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Textract, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(TextractClient);

describe("TextractClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListAdaptersCommand).resolves({});

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = Textract.listAdapters(args);

    const result = await pipe(
      program,
      Effect.provide(Textract.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListAdaptersCommand).resolves({});

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = Textract.listAdapters(args);

    const result = await pipe(
      program,
      Effect.provide(Textract.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListAdaptersCommand).resolves({});

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = Textract.listAdapters(args);

    const result = await pipe(
      program,
      Effect.provide(
        Textract.baseLayer(
          () => new TextractClient({ region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListAdaptersCommand).resolves({});

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = Textract.listAdapters(args);

    const result = await pipe(
      program,
      Effect.provide(
        Textract.baseLayer(
          (config) => new TextractClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListAdaptersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListAdaptersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListAdaptersCommand).rejects(new Error("test"));

    const args = {} as unknown as ListAdaptersCommandInput;

    const program = Textract.listAdapters(args);

    const result = await pipe(
      program,
      Effect.provide(Textract.defaultLayer),
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

    const program = Textract.listAdapters(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Textract.defaultLayer),
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
