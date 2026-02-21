import {
  KafkaConnectClient,
  KafkaConnectServiceException,
  ListConnectorsCommand,
  type ListConnectorsCommandInput,
} from "@aws-sdk/client-kafkaconnect";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-kafkaconnect/dist-cjs/runtimeConfig";
import { KafkaConnect, KafkaConnectServiceConfig } from "@effect-aws/client-kafkaconnect";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(KafkaConnectClient);

describe("KafkaConnectClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListConnectorsCommand).resolves({});

    const args = {} as unknown as ListConnectorsCommandInput;

    const program = KafkaConnect.use((svc) => svc.listConnectors(args));

    const result = await pipe(
      program,
      Effect.provide(KafkaConnect.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListConnectorsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListConnectorsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListConnectorsCommand).resolves({});

    const args = {} as unknown as ListConnectorsCommandInput;

    const program = KafkaConnect.use((svc) => svc.listConnectors(args));

    const result = await pipe(
      program,
      Effect.provide(KafkaConnect.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListConnectorsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListConnectorsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListConnectorsCommand).resolves({});

    const args = {} as unknown as ListConnectorsCommandInput;

    const program = KafkaConnect.use((svc) => svc.listConnectors(args));

    const result = await pipe(
      program,
      Effect.provide(
        KafkaConnect.baseLayer(() => new KafkaConnectClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListConnectorsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListConnectorsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListConnectorsCommand).resolves({});

    const args = {} as unknown as ListConnectorsCommandInput;

    const program = KafkaConnect.use((svc) => svc.listConnectors(args));

    const result = await pipe(
      program,
      Effect.provide(
        KafkaConnect.baseLayer(
          (config) => new KafkaConnectClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      KafkaConnectServiceConfig.withKafkaConnectServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListConnectorsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListConnectorsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListConnectorsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListConnectorsCommandInput;

    const program = KafkaConnect.use((svc) => svc.listConnectors(args));

    const result = await pipe(
      program,
      Effect.provide(KafkaConnect.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListConnectorsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListConnectorsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListConnectorsCommand)
      .rejects(
        new KafkaConnectServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListConnectorsCommandInput;

    const program = KafkaConnect.use((svc) => svc.listConnectors(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(KafkaConnect.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListConnectorsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListConnectorsCommand, args);
  });
});
