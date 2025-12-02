import {
  DataPipelineClient,
  DataPipelineServiceException,
  ListPipelinesCommand,
  type ListPipelinesCommandInput,
} from "@aws-sdk/client-data-pipeline";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-data-pipeline/dist-cjs/runtimeConfig";
import { DataPipeline, DataPipelineServiceConfig } from "@effect-aws/client-data-pipeline";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(DataPipelineClient);

describe("DataPipelineClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(ListPipelinesCommand).resolves({});

    const args = {} as unknown as ListPipelinesCommandInput;

    const program = DataPipeline.listPipelines(args);

    const result = await pipe(
      program,
      Effect.provide(DataPipeline.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(ListPipelinesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListPipelinesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(ListPipelinesCommand).resolves({});

    const args = {} as unknown as ListPipelinesCommandInput;

    const program = DataPipeline.listPipelines(args);

    const result = await pipe(
      program,
      Effect.provide(DataPipeline.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListPipelinesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListPipelinesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(ListPipelinesCommand).resolves({});

    const args = {} as unknown as ListPipelinesCommandInput;

    const program = DataPipeline.listPipelines(args);

    const result = await pipe(
      program,
      Effect.provide(
        DataPipeline.baseLayer(() => new DataPipelineClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListPipelinesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListPipelinesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(ListPipelinesCommand).resolves({});

    const args = {} as unknown as ListPipelinesCommandInput;

    const program = DataPipeline.listPipelines(args);

    const result = await pipe(
      program,
      Effect.provide(
        DataPipeline.baseLayer(
          (config) => new DataPipelineClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      DataPipelineServiceConfig.withDataPipelineServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(ListPipelinesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListPipelinesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(ListPipelinesCommand).rejects(new Error("test"));

    const args = {} as unknown as ListPipelinesCommandInput;

    const program = DataPipeline.listPipelines(args);

    const result = await pipe(
      program,
      Effect.provide(DataPipeline.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListPipelinesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListPipelinesCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(ListPipelinesCommand)
      .rejects(
        new DataPipelineServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as ListPipelinesCommandInput;

    const program = DataPipeline.listPipelines(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DataPipeline.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(ListPipelinesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(ListPipelinesCommand, args);
  });
});
