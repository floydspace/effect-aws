import {
  CloudFormationClient,
  CloudFormationServiceException,
  ListStacksCommand,
  type ListStacksCommandInput,
} from "@aws-sdk/client-cloudformation";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-cloudformation/dist-cjs/runtimeConfig";
import { CloudFormation, CloudFormationServiceConfig } from "@effect-aws/client-cloudformation";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CloudFormationClient);

describe("CloudFormationClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListStacksCommand).resolves({});

    const args = {} as unknown as ListStacksCommandInput;

    const program = CloudFormation.listStacks(args);

    const result = await pipe(
      program,
      Effect.provide(CloudFormation.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListStacksCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListStacksCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListStacksCommand).resolves({});

    const args = {} as unknown as ListStacksCommandInput;

    const program = CloudFormation.listStacks(args);

    const result = await pipe(
      program,
      Effect.provide(CloudFormation.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListStacksCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListStacksCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListStacksCommand).resolves({});

    const args = {} as unknown as ListStacksCommandInput;

    const program = CloudFormation.listStacks(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudFormation.baseLayer(() => new CloudFormationClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListStacksCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListStacksCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListStacksCommand).resolves({});

    const args = {} as unknown as ListStacksCommandInput;

    const program = CloudFormation.listStacks(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudFormation.baseLayer(
          (config) => new CloudFormationClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      CloudFormationServiceConfig.withCloudFormationServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListStacksCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListStacksCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListStacksCommand).rejects(new Error("test"));

    const args = {} as unknown as ListStacksCommandInput;

    const program = CloudFormation.listStacks(args);

    const result = await pipe(
      program,
      Effect.provide(CloudFormation.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListStacksCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListStacksCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListStacksCommand)
      .rejects(
        new CloudFormationServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListStacksCommandInput;

    const program = CloudFormation.listStacks(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CloudFormation.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListStacksCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListStacksCommand, args);
  });
});
