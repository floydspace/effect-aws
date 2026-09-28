import {
  GetResourcesCommand,
  type GetResourcesCommandInput,
  ResourceGroupsTaggingAPIClient,
  ResourceGroupsTaggingAPIServiceException,
} from "@aws-sdk/client-resource-groups-tagging-api";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-resource-groups-tagging-api/dist-es/runtimeConfig";
import { ResourceGroupsTaggingAPIService as ResourceGroupsTaggingAPI } from "@effect-aws/client-resource-groups-tagging-api/ResourceGroupsTaggingAPIService";
import * as ResourceGroupsTaggingAPIServiceConfig from "@effect-aws/client-resource-groups-tagging-api/ResourceGroupsTaggingAPIServiceConfig";
import { SdkError } from "@effect-aws/commons/Errors";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(ResourceGroupsTaggingAPIClient);

describe("ResourceGroupsTaggingAPIClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(GetResourcesCommand).resolves({});

    const args = {} as unknown as GetResourcesCommandInput;

    const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args));

    const result = await pipe(
      program,
      Effect.provide(ResourceGroupsTaggingAPI.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(GetResourcesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetResourcesCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(GetResourcesCommand).resolves({});

    const args = {} as unknown as GetResourcesCommandInput;

    const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args));

    const result = await pipe(
      program,
      Effect.provide(ResourceGroupsTaggingAPI.layer({ region: "eu-central-1", logger: true })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetResourcesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetResourcesCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(GetResourcesCommand).resolves({});

    const args = {} as unknown as GetResourcesCommandInput;

    const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args));

    const result = await pipe(
      program,
      Effect.provide(
        ResourceGroupsTaggingAPI.baseLayer(() => new ResourceGroupsTaggingAPIClient({ region: "eu-central-1" })),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetResourcesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetResourcesCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(GetResourcesCommand).resolves({});

    const args = {} as unknown as GetResourcesCommandInput;

    const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args));

    const result = await pipe(
      program,
      Effect.provide(
        ResourceGroupsTaggingAPI.baseLayer(
          (config) => new ResourceGroupsTaggingAPIClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      ResourceGroupsTaggingAPIServiceConfig.withResourceGroupsTaggingAPIServiceConfig({ logger: true }),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(GetResourcesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetResourcesCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(GetResourcesCommand).rejects(new Error("test"));

    const args = {} as unknown as GetResourcesCommandInput;

    const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args));

    const result = await pipe(
      program,
      Effect.provide(ResourceGroupsTaggingAPI.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetResourcesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetResourcesCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(GetResourcesCommand)
      .rejects(
        new ResourceGroupsTaggingAPIServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as GetResourcesCommandInput;

    const program = ResourceGroupsTaggingAPI.use((svc) => svc.getResources(args)).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(ResourceGroupsTaggingAPI.defaultLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(GetResourcesCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(GetResourcesCommand, args);
  });
});
