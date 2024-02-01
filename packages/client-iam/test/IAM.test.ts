import {
  CreateRoleCommand,
  IAMClient,
  CreateRoleCommandInput,
} from "@aws-sdk/client-iam";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseIAMServiceLayer,
  DefaultIAMClientConfigLayer,
  DefaultIAMServiceLayer,
  IAMClientInstance,
  IAMClientInstanceConfig,
  IAMService,
  IAMServiceLayer,
  SdkError,
} from "../src";

import "aws-sdk-client-mock-jest";

const iamMock = mockClient(IAMClient);
const { createRole } = Effect.serviceFunctions(IAMService);

describe("IAMClientImpl", () => {
  it("default", async () => {
    iamMock.reset().on(CreateRoleCommand).resolves({});

    const args: CreateRoleCommandInput = {
      RoleName: "test",
      AssumeRolePolicyDocument: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "Statement1",
            Effect: "Allow",
            Principal: {},
            Action: "sts:AssumeRole",
          },
        ],
      }),
    };

    const program = createRole(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultIAMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(iamMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(iamMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("configurable", async () => {
    iamMock.reset().on(CreateRoleCommand).resolves({});

    const args: CreateRoleCommandInput = {
      RoleName: "test",
      AssumeRolePolicyDocument: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "Statement1",
            Effect: "Allow",
            Principal: {},
            Action: "sts:AssumeRole",
          },
        ],
      }),
    };

    const program = createRole(args);

    const IAMClientConfigLayer = Layer.succeed(IAMClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomIAMServiceLayer = IAMServiceLayer.pipe(
      Layer.provide(IAMClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomIAMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(iamMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(iamMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("base", async () => {
    iamMock.reset().on(CreateRoleCommand).resolves({});

    const args: CreateRoleCommandInput = {
      RoleName: "test",
      AssumeRolePolicyDocument: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "Statement1",
            Effect: "Allow",
            Principal: {},
            Action: "sts:AssumeRole",
          },
        ],
      }),
    };

    const program = createRole(args);

    const IAMClientInstanceLayer = Layer.succeed(
      IAMClientInstance,
      new IAMClient({ region: "eu-central-1" }),
    );
    const CustomIAMServiceLayer = BaseIAMServiceLayer.pipe(
      Layer.provide(IAMClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomIAMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(iamMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(iamMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("extended", async () => {
    iamMock.reset().on(CreateRoleCommand).resolves({});

    const args: CreateRoleCommandInput = {
      RoleName: "test",
      AssumeRolePolicyDocument: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "Statement1",
            Effect: "Allow",
            Principal: {},
            Action: "sts:AssumeRole",
          },
        ],
      }),
    };

    const program = createRole(args);

    const IAMClientInstanceLayer = Layer.effect(
      IAMClientInstance,
      Effect.map(
        IAMClientInstanceConfig,
        (config) => new IAMClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomIAMServiceLayer = BaseIAMServiceLayer.pipe(
      Layer.provide(IAMClientInstanceLayer),
      Layer.provide(DefaultIAMClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomIAMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(iamMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(iamMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });

  it("fail", async () => {
    iamMock.reset().on(CreateRoleCommand).rejects(new Error("test"));

    const args: CreateRoleCommandInput = {
      RoleName: "test",
      AssumeRolePolicyDocument: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "Statement1",
            Effect: "Allow",
            Principal: {},
            Action: "sts:AssumeRole",
          },
        ],
      }),
    };

    const program = createRole(args, { requestTimeout: 1000 });

    const result = await pipe(
      program,
      Effect.provide(DefaultIAMServiceLayer),
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
    expect(iamMock).toHaveReceivedCommandTimes(CreateRoleCommand, 1);
    expect(iamMock).toHaveReceivedCommandWith(CreateRoleCommand, args);
  });
});
