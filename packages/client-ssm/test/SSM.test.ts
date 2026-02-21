import {
  DescribeParametersCommand,
  type DescribeParametersCommandInput,
  SSMClient,
  SSMServiceException,
} from "@aws-sdk/client-ssm";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-ssm/dist-cjs/runtimeConfig";
import { SSM, SSMServiceConfig } from "@effect-aws/client-ssm";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(SSMClient);

describe("SSMClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeParametersCommand).resolves({});

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSM.use((svc) => svc.describeParameters(args));

    const result = await pipe(
      program,
      Effect.provide(SSM.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeParametersCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeParametersCommand).resolves({});

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSM.use((svc) => svc.describeParameters(args));

    const result = await pipe(
      program,
      Effect.provide(SSM.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeParametersCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeParametersCommand).resolves({});

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSM.use((svc) => svc.describeParameters(args));

    const result = await pipe(
      program,
      Effect.provide(
        SSM.baseLayer(() => new SSMClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeParametersCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeParametersCommand).resolves({});

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSM.use((svc) => svc.describeParameters(args));

    const result = await pipe(
      program,
      Effect.provide(
        SSM.baseLayer(
          (config) => new SSMClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      SSMServiceConfig.withSSMServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeParametersCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeParametersCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSM.use((svc) => svc.describeParameters(args));

    const result = await pipe(
      program,
      Effect.provide(SSM.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeParametersCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeParametersCommand)
      .rejects(
        new SSMServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSM.use((svc) => svc.describeParameters(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(SSM.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeParametersCommand, args);
  });
});
