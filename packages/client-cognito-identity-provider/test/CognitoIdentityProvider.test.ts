import {
  type ListUserPoolsCommandInput,
  ListUserPoolsCommand,
  CognitoIdentityProviderClient,
  CognitoIdentityProviderServiceException,
} from "@aws-sdk/client-cognito-identity-provider";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCognitoIdentityProviderServiceLayer,
  DefaultCognitoIdentityProviderClientConfigLayer,
  DefaultCognitoIdentityProviderServiceLayer,
  CognitoIdentityProviderClientInstance,
  CognitoIdentityProviderClientInstanceConfig,
  CognitoIdentityProviderService,
  CognitoIdentityProviderServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(CognitoIdentityProviderClient);

describe("CognitoIdentityProviderClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListUserPoolsCommand).resolves({});

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProviderService.listUserPools(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCognitoIdentityProviderServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListUserPoolsCommand).resolves({});

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProviderService.listUserPools(args);

    const CognitoIdentityProviderClientConfigLayer = Layer.succeed(
      CognitoIdentityProviderClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCognitoIdentityProviderServiceLayer =
      CognitoIdentityProviderServiceLayer.pipe(
        Layer.provide(CognitoIdentityProviderClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCognitoIdentityProviderServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListUserPoolsCommand).resolves({});

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProviderService.listUserPools(args);

    const CognitoIdentityProviderClientInstanceLayer = Layer.succeed(
      CognitoIdentityProviderClientInstance,
      new CognitoIdentityProviderClient({ region: "eu-central-1" }),
    );
    const CustomCognitoIdentityProviderServiceLayer =
      BaseCognitoIdentityProviderServiceLayer.pipe(
        Layer.provide(CognitoIdentityProviderClientInstanceLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCognitoIdentityProviderServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListUserPoolsCommand).resolves({});

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProviderService.listUserPools(args);

    const CognitoIdentityProviderClientInstanceLayer = Layer.effect(
      CognitoIdentityProviderClientInstance,
      Effect.map(
        CognitoIdentityProviderClientInstanceConfig,
        (config) =>
          new CognitoIdentityProviderClient({
            ...config,
            region: "eu-central-1",
          }),
      ),
    );
    const CustomCognitoIdentityProviderServiceLayer =
      BaseCognitoIdentityProviderServiceLayer.pipe(
        Layer.provide(CognitoIdentityProviderClientInstanceLayer),
        Layer.provide(DefaultCognitoIdentityProviderClientConfigLayer),
      );

    const result = await pipe(
      program,
      Effect.provide(CustomCognitoIdentityProviderServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListUserPoolsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProviderService.listUserPools(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCognitoIdentityProviderServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListUserPoolsCommand)
      .rejects(
        new CognitoIdentityProviderServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProviderService.listUserPools(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCognitoIdentityProviderServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });
});
