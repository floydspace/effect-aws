import {
  type DescribeParametersCommandInput,
  DescribeParametersCommand,
  SSMClient,
  SSMServiceException,
} from "@aws-sdk/client-ssm";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseSSMServiceLayer,
  DefaultSSMClientConfigLayer,
  DefaultSSMServiceLayer,
  SSMClientInstance,
  SSMClientInstanceConfig,
  SSMService,
  SSMServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(SSMClient);

describe("SSMClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(DescribeParametersCommand).resolves({});

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSMService.describeParameters(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSSMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeParametersCommand,
      args,
    );
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeParametersCommand).resolves({});

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSMService.describeParameters(args);

    const SSMClientConfigLayer = Layer.succeed(SSMClientInstanceConfig, {
      region: "eu-central-1",
    });
    const CustomSSMServiceLayer = SSMServiceLayer.pipe(
      Layer.provide(SSMClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSSMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeParametersCommand,
      args,
    );
  });

  it("base", async () => {
    clientMock.reset().on(DescribeParametersCommand).resolves({});

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSMService.describeParameters(args);

    const SSMClientInstanceLayer = Layer.succeed(
      SSMClientInstance,
      new SSMClient({ region: "eu-central-1" }),
    );
    const CustomSSMServiceLayer = BaseSSMServiceLayer.pipe(
      Layer.provide(SSMClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSSMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeParametersCommand,
      args,
    );
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeParametersCommand).resolves({});

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSMService.describeParameters(args);

    const SSMClientInstanceLayer = Layer.effect(
      SSMClientInstance,
      Effect.map(
        SSMClientInstanceConfig,
        (config) => new SSMClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomSSMServiceLayer = BaseSSMServiceLayer.pipe(
      Layer.provide(SSMClientInstanceLayer),
      Layer.provide(DefaultSSMClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomSSMServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeParametersCommand,
      args,
    );
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeParametersCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeParametersCommandInput;

    const program = SSMService.describeParameters(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultSSMServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeParametersCommand,
      args,
    );
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

    const program = SSMService.describeParameters(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultSSMServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeParametersCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(
      DescribeParametersCommand,
      args,
    );
  });
});
