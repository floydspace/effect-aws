import {
  CloudSearchClient,
  CloudSearchServiceException,
  DescribeDomainsCommand,
  type DescribeDomainsCommandInput,
} from "@aws-sdk/client-cloudsearch";
// @ts-ignore
import * as runtimeConfig from "@aws-sdk/client-cloudsearch/dist-cjs/runtimeConfig";
import { CloudSearch, CloudSearchServiceConfig } from "@effect-aws/client-cloudsearch";
import { SdkError } from "@effect-aws/commons";
import { mockClient } from "aws-sdk-client-mock";
import { Effect, Exit } from "effect";
import { pipe } from "effect/Function";
import { afterEach, describe, expect, it, vi } from "vitest";

const getRuntimeConfig = vi.spyOn(runtimeConfig, "getRuntimeConfig");
const clientMock = mockClient(CloudSearchClient);

describe("CloudSearchClientImpl", () => {
  afterEach(() => {
    getRuntimeConfig.mockClear();
  });

  it("default", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = CloudSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(CloudSearch.defaultLayer),
      Effect.runPromiseExit,
    );

    expect(result).toEqual(Exit.succeed({}));
    expect(getRuntimeConfig).toHaveBeenCalledTimes(1);
    expect(getRuntimeConfig).toHaveBeenCalledWith({});
    expect(clientMock).toHaveReceivedCommandTimes(DescribeDomainsCommand, 1);
    expect(clientMock).toHaveReceivedCommandWith(DescribeDomainsCommand, args);
  });

  it("configurable", async () => {
    clientMock.reset().on(DescribeDomainsCommand).resolves({});

    const args = {} as unknown as DescribeDomainsCommandInput;

    const program = CloudSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(CloudSearch.layer({ region: "eu-central-1", logger: true })),
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

    const program = CloudSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudSearch.baseLayer(() => new CloudSearchClient({ region: "eu-central-1" })),
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

    const program = CloudSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(
        CloudSearch.baseLayer(
          (config) => new CloudSearchClient({ ...config, region: "eu-central-1" }),
        ),
      ),
      CloudSearchServiceConfig.withCloudSearchServiceConfig({ logger: true }),
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

    const program = CloudSearch.describeDomains(args);

    const result = await pipe(
      program,
      Effect.provide(CloudSearch.defaultLayer),
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

    const program = CloudSearch.describeDomains(args).pipe(
      Effect.catchTag("NotHandledException" as any, () => Effect.succeed(null)),
    );

    const result = await pipe(
      program,
      Effect.provide(CloudSearch.defaultLayer),
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
