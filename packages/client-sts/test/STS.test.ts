import {
  type GetCallerIdentityCommandInput,
  GetCallerIdentityCommand,
  STSClient,
  STSServiceException,
} from "@aws-sdk/client-sts";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseSTSServiceLayer,
  DefaultSTSClientConfigLayer,
  DefaultSTSServiceLayer,
  STSClientInstance,
  STSClientInstanceConfig,
  STSService,
  STSServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(STSClient);

describe("STSClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).resolves({});

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STSService.getCallerIdentity(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSTSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).resolves({});

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STSService.getCallerIdentity(args);

    const STSClientConfigLayer = Layer.succeed(STSClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomSTSServiceLayer = STSServiceLayer.pipe(
      Layer.provide(STSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSTSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).resolves({});

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STSService.getCallerIdentity(args);

    const STSClientInstanceLayer = Layer.succeed(
      STSClientInstance,
      new STSClient({ region: "eu-central-1" }),
    );
    const CustomSTSServiceLayer = BaseSTSServiceLayer.pipe(
      Layer.provide(STSClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSTSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).resolves({});

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STSService.getCallerIdentity(args);

    const STSClientInstanceLayer = Layer.effect(
      STSClientInstance,
      Effect.map(
        STSClientInstanceConfig,
        (config) => new STSClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomSTSServiceLayer = BaseSTSServiceLayer.pipe(
      Layer.provide(STSClientInstanceLayer),
      Layer.provide(DefaultSTSClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSTSServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock.reset().on(GetCallerIdentityCommand).rejects(new Error("test"));

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STSService.getCallerIdentity(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSTSServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(GetCallerIdentityCommand)
      .rejects(
        new STSServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as GetCallerIdentityCommandInput;

    const program = STSService.getCallerIdentity(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSTSServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetCallerIdentityCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      GetCallerIdentityCommand,
      args,
    );
  });
});
