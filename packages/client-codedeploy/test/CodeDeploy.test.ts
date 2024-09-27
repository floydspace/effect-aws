import {
  type ListApplicationsCommandInput,
  ListApplicationsCommand,
  CodeDeployClient,
  CodeDeployServiceException,
} from "@aws-sdk/client-codedeploy";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCodeDeployServiceLayer,
  DefaultCodeDeployClientConfigLayer,
  DefaultCodeDeployServiceLayer,
  CodeDeployClientInstance,
  CodeDeployClientInstanceConfig,
  CodeDeployService,
  CodeDeployServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(CodeDeployClient);

describe("CodeDeployClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(ListApplicationsCommand).resolves({});

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeployService.listApplications(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCodeDeployServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListApplicationsCommand).resolves({});

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeployService.listApplications(args);

    const CodeDeployClientConfigLayer = Layer.succeed(
      CodeDeployClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCodeDeployServiceLayer = CodeDeployServiceLayer.pipe(
      Layer.provide(CodeDeployClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCodeDeployServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListApplicationsCommand).resolves({});

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeployService.listApplications(args);

    const CodeDeployClientInstanceLayer = Layer.succeed(
      CodeDeployClientInstance,
      new CodeDeployClient({ region: "eu-central-1" }),
    );
    const CustomCodeDeployServiceLayer = BaseCodeDeployServiceLayer.pipe(
      Layer.provide(CodeDeployClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCodeDeployServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListApplicationsCommand).resolves({});

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeployService.listApplications(args);

    const CodeDeployClientInstanceLayer = Layer.effect(
      CodeDeployClientInstance,
      Effect.map(
        CodeDeployClientInstanceConfig,
        (config) => new CodeDeployClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomCodeDeployServiceLayer = BaseCodeDeployServiceLayer.pipe(
      Layer.provide(CodeDeployClientInstanceLayer),
      Layer.provide(DefaultCodeDeployClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCodeDeployServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(ListApplicationsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListApplicationsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListApplicationsCommand).rejects(new Error("test"));

    const args = {} as unknown as ListApplicationsCommandInput;

    const program = CodeDeployService.listApplications(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCodeDeployServiceLayer),
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

    const program = CodeDeployService.listApplications(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCodeDeployServiceLayer),
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
