import {
  DescribeRepositoriesCommand,
  type DescribeRepositoriesCommandInput,
  ECRClient,
  ECRServiceException,
} from "@aws-sdk/client-ecr";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-ecr/dist-cjs/runtimeConfig";
import { ECR, ECRServiceConfig, SdkError } from "@effect-aws/client-ecr";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(ECRClient);

describe("ECRClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeRepositoriesCommand).resolves({});

    const args = {} as unknown as DescribeRepositoriesCommandInput;

    const program = ECR.describeRepositories(args);

    const result = await pipe(
      program,
      Effect.provide(ECR.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(DescribeRepositoriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeRepositoriesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeRepositoriesCommand).resolves({});

    const args = {} as unknown as DescribeRepositoriesCommandInput;

    const program = ECR.describeRepositories(args);

    const result = await pipe(
      program,
      Effect.provide(ECR.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeRepositoriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeRepositoriesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeRepositoriesCommand).resolves({});

    const args = {} as unknown as DescribeRepositoriesCommandInput;

    const program = ECR.describeRepositories(args);

    const result = await pipe(
      program,
      Effect.provide(
        ECR.baseLayer(() => new ECRClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeRepositoriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeRepositoriesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeRepositoriesCommand).resolves({});

    const args = {} as unknown as DescribeRepositoriesCommandInput;

    const program = ECR.describeRepositories(args);

    const result = await pipe(
      program,
      Effect.provide(
        ECR.baseLayer(
          (config) => new ECRClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      ECRServiceConfig.withECRServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeRepositoriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeRepositoriesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeRepositoriesCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeRepositoriesCommandInput;

    const program = ECR.describeRepositories(args);

    const result = await pipe(
      program,
      Effect.provide(ECR.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeRepositoriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeRepositoriesCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeRepositoriesCommand)
      .rejects(
        new ECRServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeRepositoriesCommandInput;

    const program = ECR.describeRepositories(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(ECR.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeRepositoriesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeRepositoriesCommand, args);
  });
});
