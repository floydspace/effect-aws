import {
  IvsClient,
  IvsServiceException,
  ListChannelsCommand,
  type ListChannelsCommandInput,
} from "@aws-sdk/client-ivs";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-ivs/dist-cjs/runtimeConfig";
import { Ivs, IvsServiceConfig } from "@effect-aws/client-ivs";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IvsClient);

describe("IvsClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListChannelsCommand).resolves({});

    const args = {} as unknown as ListChannelsCommandInput;

    const program = Ivs.use((svc) => svc.listChannels(args));

    const result = await pipe(
      program,
      Effect.provide(Ivs.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListChannelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListChannelsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListChannelsCommand).resolves({});

    const args = {} as unknown as ListChannelsCommandInput;

    const program = Ivs.use((svc) => svc.listChannels(args));

    const result = await pipe(
      program,
      Effect.provide(Ivs.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListChannelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListChannelsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListChannelsCommand).resolves({});

    const args = {} as unknown as ListChannelsCommandInput;

    const program = Ivs.use((svc) => svc.listChannels(args));

    const result = await pipe(
      program,
      Effect.provide(
        Ivs.baseLayer(() => new IvsClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListChannelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListChannelsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListChannelsCommand).resolves({});

    const args = {} as unknown as ListChannelsCommandInput;

    const program = Ivs.use((svc) => svc.listChannels(args));

    const result = await pipe(
      program,
      Effect.provide(
        Ivs.baseLayer(
          (config) => new IvsClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      IvsServiceConfig.withIvsServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListChannelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListChannelsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListChannelsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListChannelsCommandInput;

    const program = Ivs.use((svc) => svc.listChannels(args));

    const result = await pipe(
      program,
      Effect.provide(Ivs.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(
      Exit.fail(
        new SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(ListChannelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListChannelsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListChannelsCommand)
      .rejects(
        new IvsServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListChannelsCommandInput;

    const program = Ivs.use((svc) => svc.listChannels(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(Ivs.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toContainEqual(
      Exit.fail(
        new SdkError({
          ...new Error("test"),
          name: "SdkError",
          message: "test",
          stack: expect.any(String),
        }),
      ),
    );
    expect(clientMock).toHaveReceivedCommandTimes(ListChannelsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListChannelsCommand, args);
  });
});
