import {
  type DescribeDomainsCommandInput,
  DescribeDomainsCommand,
  CloudSearchClient,
  CloudSearchServiceException,
} from "@aws-sdk/client-cloudsearch";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseCloudSearchServiceLayer,
  DefaultCloudSearchClientConfigLayer,
  DefaultCloudSearchServiceLayer,
  CloudSearchClientInstance,
  CloudSearchClientInstanceConfig,
  CloudSearchService,
  CloudSearchServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(CloudSearchClient);

describe("CloudSearchClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = CloudSearchService.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = CloudSearchService.describeDomains(args);

    const CloudSearchClientConfigLayer = Layer.succeed(
      CloudSearchClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomCloudSearchServiceLayer = CloudSearchServiceLayer.pipe(
      Layer.provide(CloudSearchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = CloudSearchService.describeDomains(args);

    const CloudSearchClientInstanceLayer = Layer.succeed(
      CloudSearchClientInstance,
      new CloudSearchClient({ region: "eu-central-1" }),
    );
    const CustomCloudSearchServiceLayer = BaseCloudSearchServiceLayer.pipe(
      Layer.provide(CloudSearchClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = CloudSearchService.describeDomains(args);

    const CloudSearchClientInstanceLayer = Layer.effect(
      CloudSearchClientInstance,
      Effect.map(
        CloudSearchClientInstanceConfig,
        (config) =>
          new CloudSearchClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomCloudSearchServiceLayer = BaseCloudSearchServiceLayer.pipe(
      Layer.provide(CloudSearchClientInstanceLayer),
      Layer.provide(DefaultCloudSearchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomCloudSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeDomainsCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = CloudSearchService.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudSearchServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("should not catch unexpected error as expected", async () => {
    clientMock
      .reset()
      .on(DescribeDomainsCommand)
      .rejects(
        new CloudSearchServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = CloudSearchService.describeDomains(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultCloudSearchServiceLayer),
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
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });
});
