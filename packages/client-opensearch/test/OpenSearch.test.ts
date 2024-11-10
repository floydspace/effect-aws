import {
  type DescribeDomainsCommandInput,
  DescribeDomainsCommand,
  OpenSearchClient,
  OpenSearchServiceException,
} from "@aws-sdk/client-opensearch";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-opensearch/dist-cjs/runtimeConfig";
import { mockClient } from "aws-sdk-client-mock";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";
import { OpenSearch, SdkError } from "../src";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(OpenSearchClient);

describe("OpenSearchClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(OpenSearch.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(OpenSearch.layer({ region: "eu-central-1" })),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("base", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(
        OpenSearch.baseLayer(
          () => new OpenSearchClient({ region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("extended", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(
        OpenSearch.baseLayer(
          (config) =>
            new OpenSearchClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({
      region: "eu-central-1",
      logger: expect.any(Object),
    });
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("fail", async () => {
    clientMock.reset().on(DescribeDomainsCommand).rejects(new Error("test"));

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = OpenSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(OpenSearch.defaultLayer),
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

    const program = OpenSearch.describeDomains(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(OpenSearch.defaultLayer),
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
