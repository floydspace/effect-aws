import {
  CodeDeployClient,
  CodeDeployServiceException,
  ListApplicationsCommand,
  type ListApplicationsCommandInput,
} from "@aws-sdk/client-codedeploy";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-codedeploy/dist-cjs/runtimeConfig";
import { CodeDeploy, CodeDeployServiceConfig, SdkError } from "@effect-aws/client-codedeploy";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CodeDeployClient);

describe("CodeDeployClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListApplicationsCommand).resolves({});

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeploy.listApplications(args);

    const result = await pipe(
      program,
      Effect.provide(CodeDeploy.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListApplicationsCommand).resolves({});

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeploy.listApplications(args);

    const result = await pipe(
      program,
      Effect.provide(CodeDeploy.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListApplicationsCommand).resolves({});

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeploy.listApplications(args);

    const result = await pipe(
      program,
      Effect.provide(
        CodeDeploy.baseLayer(() => new CodeDeployClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListApplicationsCommand).resolves({});

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeploy.listApplications(args);

    const result = await pipe(
      program,
      Effect.provide(
        CodeDeploy.baseLayer(
          (config) => new CodeDeployClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      CodeDeployServiceConfig.withCodeDeployServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListApplicationsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeploy.listApplications(args);

    const result = await pipe(
      program,
      Effect.provide(CodeDeploy.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListApplicationsCommand)
      .rejects(
        new CodeDeployServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeploy.listApplications(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CodeDeploy.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });
});
