import { CreateRoleCommand, type CreateRoleCommandInput, IAMClient, IAMServiceException } from "@aws-sdk/client-iam";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-iam/dist-cjs/runtimeConfig";
import { IAM, IAMServiceConfig } from "@effect-aws/client-iam";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(IAMClient);

describe("IAMClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(CreateRoleCommand).resolves({});

    const args = {} as unknown as CreateRoleCommandInput;

    const program = IAM.use((svc) => svc.createRole(args));

    const result = await pipe(
      program,
      Effect.provide(IAM.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(CreateRoleCommand).resolves({});

    const args = {} as unknown as CreateRoleCommandInput;

    const program = IAM.use((svc) => svc.createRole(args));

    const result = await pipe(
      program,
      Effect.provide(IAM.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(CreateRoleCommand).resolves({});

    const args = {} as unknown as CreateRoleCommandInput;

    const program = IAM.use((svc) => svc.createRole(args));

    const result = await pipe(
      program,
      Effect.provide(
        IAM.baseLayer(() => new IAMClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(CreateRoleCommand).resolves({});

    const args = {} as unknown as CreateRoleCommandInput;

    const program = IAM.use((svc) => svc.createRole(args));

    const result = await pipe(
      program,
      Effect.provide(
        IAM.baseLayer(
          (config) => new IAMClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      IAMServiceConfig.withIAMServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(CreateRoleCommand).rejects(new Error("test"));

    const args = {} as unknown as CreateRoleCommandInput;

    const program = IAM.use((svc) => svc.createRole(args));

    const result = await pipe(
      program,
      Effect.provide(IAM.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(CreateRoleCommand)
      .rejects(
        new IAMServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as CreateRoleCommandInput;

    const program = IAM.use((svc) => svc.createRole(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(IAM.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });
});
