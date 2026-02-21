import {
  CognitoIdentityProviderClient,
  CognitoIdentityProviderServiceException,
  ListUserPoolsCommand,
  type ListUserPoolsCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-cognito-identity-provider/dist-cjs/runtimeConfig";
import {
  CognitoIdentityProvider,
  CognitoIdentityProviderServiceConfig,
} from "@effect-aws/client-cognito-identity-provider";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CognitoIdentityProviderClient);

describe("CognitoIdentityProviderClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListUserPoolsCommand).resolves({});

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProvider.use((svc) => svc.listUserPools(args));

    const result = await pipe(
      program,
      Effect.provide(CognitoIdentityProvider.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListUserPoolsCommand).resolves({});

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProvider.use((svc) => svc.listUserPools(args));

    const result = await pipe(
      program,
      Effect.provide(CognitoIdentityProvider.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListUserPoolsCommand).resolves({});

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProvider.use((svc) => svc.listUserPools(args));

    const result = await pipe(
      program,
      Effect.provide(
        CognitoIdentityProvider.baseLayer(() => new CognitoIdentityProviderClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListUserPoolsCommand).resolves({});

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProvider.use((svc) => svc.listUserPools(args));

    const result = await pipe(
      program,
      Effect.provide(
        CognitoIdentityProvider.baseLayer(
          (config) => new CognitoIdentityProviderClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      CognitoIdentityProviderServiceConfig.withCognitoIdentityProviderServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListUserPoolsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListUserPoolsCommandInput;

    const program = CognitoIdentityProvider.use((svc) => svc.listUserPools(args));

    const result = await pipe(
      program,
      Effect.provide(CognitoIdentityProvider.defaultLayer),
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

    const program = CognitoIdentityProvider.use((svc) => svc.listUserPools(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CognitoIdentityProvider.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListUserPoolsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListUserPoolsCommand, args);
  });
});
