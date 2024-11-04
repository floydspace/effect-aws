import {
  type DescribeDomainsCommandInput,
  DescribeDomainsCommand,
  OpenSearchClient,
  OpenSearchServiceException,
} from "@aws-sdk/client-opensearch";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import {
  BaseOpenSearchServiceLayer,
  DefaultOpenSearchClientConfigLayer,
  DefaultOpenSearchServiceLayer,
  OpenSearchClientInstance,
  OpenSearchClientInstanceConfig,
  OpenSearchService,
  OpenSearchServiceLayer,
  SdkError,
} from "../src";

const clientMock = mockClient(OpenSearchClient);

describe("OpenSearchClientImpl", () => {
  it("default", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearchService.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultOpenSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearchService.describeDomains(args);

    const OpenSearchClientConfigLayer = Layer.succeed(
      OpenSearchClientInstanceConfig,
      {
        region: "eu-central-1",
      },
    );
    const CustomOpenSearchServiceLayer = OpenSearchServiceLayer.pipe(
      Layer.provide(OpenSearchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearchService.describeDomains(args);

    const OpenSearchClientInstanceLayer = Layer.succeed(
      OpenSearchClientInstance,
      new OpenSearchClient({ region: "eu-central-1" }),
    );
    const CustomOpenSearchServiceLayer = BaseOpenSearchServiceLayer.pipe(
      Layer.provide(OpenSearchClientInstanceLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearchService.describeDomains(args);

    const OpenSearchClientInstanceLayer = Layer.effect(
      OpenSearchClientInstance,
      Effect.map(
        OpenSearchClientInstanceConfig,
        (config) => new OpenSearchClient({ ...config, region: "eu-central-1" }),
      ),
    );
    const CustomOpenSearchServiceLayer = BaseOpenSearchServiceLayer.pipe(
      Layer.provide(OpenSearchClientInstanceLayer),
      Layer.provide(DefaultOpenSearchClientConfigLayer),
    );

    const result = await pipe(
      program,
      Effect.provide(CustomOpenSearchServiceLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeDomainsCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearchService.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(DefaultOpenSearchServiceLayer),
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
        new OpenSearchServiceException({
          name: "NotHandledException",
          message: "test",
        } as any),
      );

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearchService.describeDomains(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(DefaultOpenSearchServiceLayer),
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
